<template>
  <div class="wordWrapperContainer">
    <div class="toolBar">
      <span>年级：{{ level }}</span>
      <div v-if="curId < total">
        <el-radio-group v-model="showType">
          <el-radio label="">全部</el-radio>
          <el-radio label="1">大写</el-radio>
          <el-radio label="2">小写</el-radio>
        </el-radio-group>
        <span>{{ curId + 1 }}/{{ total }}</span>
      </div>
    </div>
    <div class="fullClick" v-if="curId < total">
      <div class="controlPanel">
        <div class="topPart" @click="markS('E')"></div>
        <div class="downPart" @click="markS('R')"></div>
      </div>
      <english
        :fontSize="fontSize"
        :english="
          showType == ''
            ? mainList[curId].content + mainList[curId].small
            : showType == '1'
            ? mainList[curId].content
            : mainList[curId].small
        "
      ></english>
    </div>
    <div v-else class="finishWrapper">
      <p class="pTitle">恭喜完成今日任务</p>
      <el-button type="primary" @click="submitData">提交</el-button>
    </div>
  </div>
</template>
<script type="text/babel">
import { mapGetters } from "vuex";
import English from "../../components/english.vue";
export default {
  components: {
    English,
  },
  data() {
    return {
      showType: "",
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
      "letterList",
      {
        level: this.level || "1",
        studied: this.studied,
      },
      (data) => {
        this.mainList = data.rows || [];
        this.mainList.forEach((item) => {
          this.mainObj[item._id] = item;
        });
        this.total = data.total;
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
        "englishMultiUpdate",
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
