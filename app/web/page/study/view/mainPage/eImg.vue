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

<script type="text/babel">
import { mapGetters } from "vuex";
import word from "../../components/word";
export default {
  components: {
   word
  },
  data() {
    return {
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
<style lang="scss" scoped>
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
