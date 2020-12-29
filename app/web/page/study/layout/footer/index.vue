<template>
  <div class="footerWrapper">
   <p>学习</p>
   <p>任务</p>
   <p>我的</p>
   <p>统计</p>
  </div>
</template>
<script>
import "./header.css";
import { mapGetters } from "vuex";
import screenfull from "screenfull";
export default {
  name: "Footer",
  data() {
    return {
      visible: false,
      autoplay2: false,
      loop2: false,
      form: {
        level: "1",
        studied: "",
        bgColor: "#ddd",
        fontSize: "30",
        color: "#333",
        autoplay: "0",
        loop: "0",
      },
    };
  },
  computed: {
    ...mapGetters([
      "wordNum",
      "termNum",
      "idiomNum",
      "storyNum",
      "eImgNum",
      "configId",
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
    this.form = {
      wordNum: this.wordNum,
      termNum: this.termNum,
      idiomNum: this.idiomNum,
      storyNum: this.storyNum,
      eImgNum: this.eImgNum,
      level: this.level,
      studied: this.studied,
      bgColor: this.bgColor,
      fontSize: this.fontSize,
      color: this.color,
      autoplay: this.autoplay,
      loop: this.loop,
    };
    this.autoplay2 = this.autoplay == "1" ? true : false;
    this.loop2 = this.loop == "1" ? true : false;
  },
  watch: {
    autoplay2(val) {
      if (val) this.form.autoplay = "1";
      else this.form.autoplay = "0";
    },
    loop2(val) {
      if (val) this.form.loop = "1";
      else this.form.loop = "0";
    },
  },
  methods: {
    // 设置单次学习数量
    setWordNum(val) {
      this.$store.commit("SET_WORD_NUM", val);
    },
    // 设置单次学习数量
    setTermNum(val) {
      this.$store.commit("SET_TERM_NUM", val);
    },
    // 设置单次学习数量
    setIdiomNum(val) {
      this.$store.commit("SET_IDIOM_NUM", val);
    },
    // 设置单次学习数量
    setStoryNum(val) {
      this.$store.commit("SET_STORY_NUM", val);
    },
    // 设置单次学习数量
    setEImgNum(val) {
      this.$store.commit("SET_EIMG_NUM", val);
    },
    // 设置字体大小
    setFontSize(val) {
      this.$store.commit("SET_FONT_SIZE", val);
    },
    // 设置背景颜色
    setBgColor(val) {
      this.$store.commit("SET_BG_COLOR", val);
    },
    // 设置字体颜色
    setColor(val) {
      this.$store.commit("SET_COLOR", val);
    },
    // 设置学习度
    setStudied(val) {
      this.$store.commit("SET_STUDIED", val);
    },
    // 设置自动播放
    setAutoplay(val) {
      this.$store.commit("SET_AUTOPLAY", val);
    },
    // 设置是否轮播
    setLoop(val) {
      this.$store.commit("SET_LOOP", val);
    },
    initConfig() {
      this.$post(
        "userConfigAdd",
        {
          userId: "yangyang",
          level: "1",
          studied: "",
          bgColor: "#ddd",
          fontSize: "30",
          color: "#333",
          autoplay: "0",
          loop: "0",
        },
        (data) => {},
        (err) => {}
      );
    },
    updateConfig() {
      this.$post(
        "userConfigUpdate",
        { id: this.configId, ...this.form },
        (data) => {},
        (err) => {}
      );
    },
    cleanStudyStatus() {
      this.$post(
        "cleanStudyStatus",
        {},
        (data) => {},
        (err) => {}
      );
    },
    fullScreen(e) {
      this.$store.commit('SET_IS_FULL', !screenfull.isFullscreen);
      screenfull.toggle();
    },
  },
};
</script>
<style lang="scss">
.systemConfig {
  max-height: 100%;
  overflow: auto;
  max-width: 40rem;
}
</style>
<style lang="scss" scoped>
.footerWrapper {
  background: lightcyan;
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  padding-left:1rem;
  .fullScreen {
    margin-right: 1rem;
  }
  .rightHeader {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}

.floatBtn {
  background: lightcyan;
  height: 2.5rem;
  display: flex;
  justify-content: flex-end;
}
</style>
