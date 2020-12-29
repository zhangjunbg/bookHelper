<template>
  <div class="wordWrapperContainer">
    <div class="toolBar">
      <span>年级：{{ level }}</span>
      <span v-if="curId < total">{{ curId + 1  }}/{{ total }}</span>
    </div>
    <div class="fullClick" v-if="curId < total">
      <div class="controlPanel">
        <div class="topPart" @click="markS('E')"></div>
        <div class="downPart" @click="markS('R')"></div>
      </div>
      <word :fontSize="fontSize" :word="mainList[curId].content"></word>
    </div>
    <div v-else>
      恭喜完成今日任务
      <el-button type="primary" @click="submitData">提交</el-button>
    </div>
  </div>
</template>
<style lang="scss">
.bgContainer {
  position: absolute;
  left: 0;
  top: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script type="text/babel">
import { mapGetters } from "vuex";
import word from "../../components/word";
export default {
  components: {
   word
  },
  data() {
    return {
      color1: "#ccc",
      svgOpt: { gap: 12, all: 300, pointsDown: [], pointsUp: [] },
      mainObj: {},
      curNum: 1,
      curId: null,
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
      "wordList",
      {
        level: this.level || "1",
        studied: this.studied,
        pageSize: this.wordNum,
        pageNo: 1,
      },
      (data) => {
        this.mainList = data.rows || [];
        this.mainList.forEach((item) => {
          this.mainObj[item._id] = item;
        });
        this.total = Math.min(data.total, this.wordNum);
        if (this.mainList.length) this.curId = 0;
      },
      (err) => {
        this.loading = false;
      }
    );
  },
  methods: {
    submitData() {
      let updateData = [];
      this.mainList.forEach((item) => {
        updateData.push({
          _id: item._id,
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
<style lang="scss">
.wordWrapperContainer {
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #fff;
  margin-top: 0.5rem;
  padding: 2rem;

  .toolBar {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.wordWrapper {
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  position: relative;
  height: 31.25rem;
  width: 31.25rem;
  line-height: 31.25rem;
  /* background-image: url(../../../../asset/images/word_bg2_1.png); */
  background-size: 100%;
  background-repeat: no-repeat;
  font-size: 23.75rem;
  font-family: 楷体;

  -moz-user-select: none;
  /*火狐*/
  -webkit-user-select: none;
  /*webkit浏览器*/
  -ms-user-select: none;
  /*IE10*/
  -khtml-user-select: none;
  /*早期浏览器*/
  -o-user-select: none;
  /* Opera*/
  user-select: none;

  /* color:#940026; */
}

.fullClick {
  -webkit-tap-highlight-color: transparent;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.controlPanel {
  -webkit-tap-highlight-color: transparent;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  .topPart,
  .downPart {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: lightblue; */
    height: 50%;
    /* border-bottom: solid 1px #f1f1f1; */
    font-size: 16rem;
    color: #fff;
    -webkit-tap-highlight-color: transparent;
  }
}
</style>
