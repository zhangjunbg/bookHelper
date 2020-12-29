<template>
  <div class="calHeader">
    <div class="weekWrapper">
      <p
        v-for="(item, index) in weekList"
        :key="index"
        :class="cDay == item.dy ? 'isFocus' : ''"
      >
        <span style="font-size:14px;">{{ item.wk }}</span>
        <span style="font-size:12px;">{{ item.dy }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const wkObj = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
export default {
  name: "CalHeader",
  props: {
    begin: {
      type: String,
      default: "2020-12-29",
    },
    type: {
      type: String,
      default: "week", // week month year
    },
  },
  data() {
    return {
      weekList: [],
      cDay: null,
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
  created() {
    // 获取今日任务
    // taskList
    //
    let begin = this.begin.split("-");
    begin.shift();
    this.cDay = begin.join("-");
    this.createWeek(this.begin);

    this.$post(
      "wordList",
      {
        level: this.level || "1",
      },
      (data) => {
        this.mainList = data.rows || [];
        this.total = data.total || 0;
        if (this.mainList.length) this.curId = 0;
      },
      (err) => {
        this.loading = false;
      }
    );
  },
  methods: {
    // 生成未来一周日历
    createWeek(beginDate) {
      let curDay = new Date(beginDate);
      // let cDate = curDay.getDate();
      let weekList = [];
      for (let i = 0; i < 7; i++) {
        weekList.push(this.createDay(curDay));
        curDay.setDate(curDay.getDate() + 1);
      }
      this.weekList = weekList;
    },

    // 生成一天
    createDay(cDay) {
      // let cDay = new Date(day);
      return {
        wk: wkObj[cDay.getDay()],
        dy: cDay.getMonth() + 1 + "-" + cDay.getDate(),
      };
    },
    markS(item, type) {
      if (type == "E") {
      } else {
      }
    },
    handleDouble(item) {
      console.log("handleDouble");
      // this.$post();
      this.$refs.slider.$emit("slideNext");
    },
    handleSuccess() {
      this.$refs.slider.$emit("slideNext");
    },
    // Listener event
    slide(data) {
      console.log("data.direction: ", data.direction);
      if (data.direction == "right") {
        this.curNum++;
      } else if (data.direction == "left") {
        this.curNum--;
      }
    },
    onTap(data) {
      console.log("onTap", data);
    },
    onInit(data) {
      console.log("onInit", data);
    },
  },
};
</script>
<style lang="scss" scoped>
.calHeader {
  height: 100%;
  width: 100%;
}
.weekWrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: lightpink;
  color: #fff;
  p {
    flex: 1;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-right: solid 1px pink;
    &.isFocus {
      background: #fff;
      color: pink;
    }
  }
}
</style>
