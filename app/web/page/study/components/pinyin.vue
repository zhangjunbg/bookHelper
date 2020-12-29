<template>
  <div
    class="wordWrapper"
    :style="
      `
  height: ${fontSize / 2}rem;
  width: ${fontSize}rem;
  line-height: ${fontSize / 2.25}rem;
  `
    "
  >
    <div class="wordBg">
      <pinyin-bg  :notFirst="notFirst" :fontSize="fontSize"></pinyin-bg>
    </div>
    <span
      :style="
        `
      color:${color};
      font-size:${fontSize * 0.3}rem;
      width:${fontSize}rem;
      height:${fontSize/2}rem;
      text-align:center;`
      "
    >
      {{ pinyin }}
    </span>
  </div>
</template>
<script type="text/babel">
import { mapGetters } from "vuex";
import pinyinBg from "./pinyinBg.vue";
export default {
  components: {
    pinyinBg,
  },
  props: {
    notFirst: {
      type: Number,
      default: 0,
    },
    fontSize: {
      type: String,
      default: "22",
    },
    color: {
      type: String,
      default: "#333",
    },
    pinyin: {
      type: String,
      default: "cè shì",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.wordWrapper {
  position: relative;
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: serif;
  display: flex;
  justify-content: center;
  align-items: center;
  .wordBg {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    z-index: 1;
  }
}
</style>
