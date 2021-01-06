<template>
  <div class="wordWrapperContainer" v-if="curPoem.key">
    <div class="toolBar">
      <span>年级：{{ level }}</span>
      <div>
        <span style="margin-right:2rem;">{{ curId + 1 }}/ {{ total }}</span>
        <span
          class="el-icon-video-play"
          v-if="!isPlay"
          @click="playSound"
        ></span>
        <span class="el-icon-video-pause" v-else @click="stopSound"></span>
        <span
          v-if="curId > 0"
          @click="prev"
          class="el-icon-back"
          style="margin-right:2rem;"
        ></span>
        <span
          v-if="curId < mainList.length - 1"
          @click="next"
          class="el-icon-right"
        ></span>
        <audio
          style="position:absolute;z-index:-1;"
          id="myaudio"
          ref="mySound"
          :src="'/public/static/mp3/' + curPoem.key + '.mp3'"
          controls="controls"
          :autoplay="autoplay"
          :loop="loop"
        ></audio>
      </div>
    </div>
    <div class="fullClick">
      <div class="poemContainer">
        <div class="mainTitle">{{ curPoem.title }}</div>
        <div class="subTitle">
          <span class="dynasty">&lt;{{ curPoem.dynasty }}&gt;</span
          ><span class="author">{{ curPoem.author }}</span>
        </div>
        <div class="poemContent">
          <p v-for="(item, index) in curPoemArr" :key="index">{{ item }}。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import { mapGetters } from "vuex";
import word from "../../components/word";
export default {
  components: {
    word,
  },
  data() {
    return {
      isPlay: false,
      curPoem: {},
      curPoemArr: [],
      mainObj: {},
      curId: 0,
      total: 0,
      mainList: [],
      options: {
        thresholdDistance: 10,
        autoplay: false,
        loop: true,
        loopedSlides: 1,
        slidesToScroll: 1,
        timingFunction: "linear",
        speed: 1,
        pagination: false,
      },
    };
  },
  computed: {
    ...mapGetters([
      "wordNum",
      "level",
      "studied",
      "bgColor",
      "fontSize",
      "color",
      "autoplay",
      "loop",
    ]),
  },
  mounted() {
    this.$post(
      "poemList",
      {
        level: this.level || "1",
        studied: this.studied,
        pageSize: 10,
        pageNo: 1,
      },
      (data) => {
        this.mainList = data.rows || [];
        this.total = Math.min(data.total, 10);
        this.curPoem = this.mainList[0] || {};
        this.curPoemArr = this.getPoemArr();

        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  },
  methods: {
    stopSound() {
      this.$refs.mySound.pause();
      this.isPlay = false;
    },
    playSound() {
      this.$refs.mySound.play();
      this.isPlay = true;
    },
    getPoemArr() {
      let orignData = this.mainList[this.curId].content;
      if (orignData) {
        orignData.replace(/<p>/g, "");
        let content = orignData.split(/[(<br\/>)(<\/p>)]/);
        let curPoemArr = [];
        content.forEach((item) => {
          curPoemArr.push(...item.split("。"));
        });
        curPoemArr = curPoemArr.filter((item) => {
          if (item) return item;
        });
        return curPoemArr;
      } else {
        return [];
      }
    },
    prev() {
      this.curId--;
      this.curPoem = this.mainList[this.curId] || {};
      this.curPoemArr = this.getPoemArr();
    },
    next() {
      this.curId++;
      this.curPoem = this.mainList[this.curId] || {};
      this.curPoemArr = this.getPoemArr();
      if (this.autoplay) this.isPlay = true;
    },
    studied2() {
      let updateData = [];
      this.mainList.forEach((item) => {
        updateData.push({
          _id: cur._id,
          errorTimes: this.mainObj[item._id].errorTimes,
          learnTimes: this.mainObj[item._id].learnTimes,
          studied: this.mainObj[item._id].studied,
          successTimes: this.mainObj[item._id].successTimes,
        });
      });
      this.$post(
        "wordMultiUpdate",
        updateData,
        (data) => {},
        (err) => {}
      );
    },
    markS(type) {
      let item = this.mainList[this.curId];
      if (type == "E") {
        item.errorTimes += 1;
        item.studied = "0";
      } else {
        item.successTimes += 1;
        item.studied = "1";
      }
      item.learnTimes += 1;
      this.curId++;
      this.mainObj[item._id] = item;
    },
  },
};
</script>
<style lang="scss" scoped>
$fontSize: 3;
.fullClick {
  -webkit-tap-highlight-color: transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  justify-content: center;
  .mainTitle {
    font-size: #{$fontSize}rem;
    margin-bottom: #{$fontSize * 0.5}rem;
  }
  .subTitle {
    font-size: #{$fontSize * 2 / 3}rem;
    margin-bottom: #{$fontSize}rem;
    color: #666;
  }
  .dynasty {
    margin-right: 1rem;
    margin-bottom: #{$fontSize * 0.5}rem;
  }
  .poemContent {
    font-size: #{$fontSize * 0.9}rem;
    p {
      line-height: #{$fontSize * 2}rem;
    }
  }
}
</style>
