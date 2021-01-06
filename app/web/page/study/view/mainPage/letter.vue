<template>
  <div class="wordWrapperContainer">
    <div class="iconWrapper">
      <span v-for="(item, index) in tempArr" :key="index" :class="item"></span>
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
      tempArr: [],
      showType: "",
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
    "li-icon";
    let tempArr = [];
    for (let i = 1; i < 5; i++) {
      for (let j = 1; j < 7; j++) {
        tempArr.push("li-icon li-icon" + i + "_" + j);
      }
    }
    this.tempArr = tempArr;
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
.iconWrapper {
  display: flex;
  flex-wrap: wrap;
  width: 16rem;
  span {
    margin-right: 2rem;
    margin-bottom: 2rem;
  }
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
