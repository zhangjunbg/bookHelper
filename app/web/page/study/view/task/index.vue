<template>
  <div class="wordWrapperContainer">
    <cal-header
      :begin="formatDate(new Date())"
      @chooseDay="handleEmit"
    ></cal-header>
    <div class="taskList" :style="`color:${color}`">
      <p @click="goto('word')">字</p>
      <p @click="goto('term')">词</p>
      <p @click="goto('poem')">诗</p>
      <p @click="goto('story')">故事</p>
      <p @click="goto('eImg')">英语单词</p>
    </div>
  </div>
</template>
<script type="text/babel">
import { mapGetters } from "vuex";
import word from "../../components/word";
import CalHeader from "./components/CalHeader.vue";
export default {
  components: {
    CalHeader,
  },
  data() {
    return {
      curDate: this.formatDate(new Date()),
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
    // 获取当前日期任务数据
    // this.$post(
    //   "wordList",
    //   {
    //     level: this.level || "1",
    //     studied: this.studied,
    //     pageSize: this.wordNum,
    //     pageNo: 1,
    //   },
    //   (data) => {
    //     this.mainList = data.rows || [];
    //     this.mainList.forEach((item) => {
    //       this.mainObj[item._id] = item;
    //     });
    //     this.total = Math.min(data.total, this.wordNum);
    //     if (this.mainList.length) this.curId = 0;
    //   },
    //   (err) => {
    //     this.loading = false;
    //   }
    // );
  },
  methods: {
    goto(url) {
      this.$router.push("/learn/" + url);
    },
    getTaskDetail() {
      this.$post("taskDetailList", { date: this.curDate }, (data) => {});
    },
    handleEmit(val) {
      console.log(val);
    },
  },
};
</script>
<style lang="scss" scoped>
.taskList {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  p {
    width: 20rem;
    // background: lightcyan;
    // border: solid 1px #f1f1f1;
    // border-radius: 1rem;
    padding-top: 2rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    // box-shadow: 2px 2px 5px #000;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    background-image: url(../../../../asset/images/bg/cardBg2.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>
