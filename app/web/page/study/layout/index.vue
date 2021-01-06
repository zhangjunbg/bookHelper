<template>
  <div
    class="mainWrapper"
    v-if="showPage"
    :class="isFull ? 'isFullScreen' : ''"
  >
    <system-tool v-if="!isFull"></system-tool>
    <span
      v-else
      class="shrinkScreen li-icon li-icon1_4"
      @click="shrinkScreen"
    ></span>
    <div v-if="isLock" class="isLock">
      <span @click="unlock" class="li-icon li-icon2_3"></span>
    </div>

    <span
      @click="lock"
      class="lockContainer li-icon li-icon1_3"
      v-if="!isLock"
    ></span>

    <div style="flex:1;overflow:hidden;">
      <router-view></router-view>
    </div>
    <bottom-bar v-if="!isFull"></bottom-bar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import screenfull from "screenfull";
import SystemTool from "./system/index";
import BottomBar from "./components/BottomBar";
export default {
  components: {
    SystemTool,
    BottomBar,
  },
  data() {
    return {
      showPage: false,
    };
  },
  computed: {
    ...mapGetters(["isFull", "isLock"]),
  },
  beforeMount() {
    this.$post("getUserConfig", { userId: "yangyang" }, (data) => {
      this.showPage = true;
      this.$store.commit("SET_CONFIG_ID", data._id);
      this.$store.commit("SET_FONT_SIZE", data.fontSize);
      this.$store.commit("SET_BG_COLOR", data.bgColor);
      this.$store.commit("SET_COLOR", data.color);
      this.$store.commit("SET_STUDIED", data.studied);
      this.$store.commit("SET_AUTOPLAY", data.autoplay);
      this.$store.commit("SET_LOOP", data.loop);
      this.$store.commit("SET_WORD_NUM", data.wordNum);
      this.$store.commit("SET_TERM_NUM", data.termNum);
      this.$store.commit("SET_IDIOM_NUM", data.idiomNum);
      this.$store.commit("SET_STORY_NUM", data.storyNum);
      this.$store.commit("SET_EIMG_NUM", data.eImgNum);
      this.$store.commit("SET_LEVEL", data.level);
    });
  },
  methods: {
    lock() {
      this.$store.commit("SET_IS_LOCK", true);
    },
    unlock() {
      this.$store.commit("SET_IS_LOCK", false);
    },
    shrinkScreen() {
      this.$store.commit("SET_IS_FULL", false);
      screenfull.toggle();
    },
  },
};
</script>
<style lang="scss">
.isFullScreen {
  .headerWrapper {
    display: none;
  }
  .wordWrapperContainer {
    margin-top: 0;
  }
}
</style>
<style lang="scss" scoped>
.lockContainer {
  position: fixed;
  top: 50%;
  left: 2rem;
  margin-top: -1rem;
  width: 2rem;
  height: 2rem;
  z-index: 99;
  font-size: 2rem;
  color:green;
}
.isLock {
  position: fixed;
  font-size: 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.mainWrapper {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  .shrinkScreen {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 3;
    font-size: 1.6rem;
    color: rgba(255, 0, 222, 0.3);
  }
}
</style>
