<template>
  <div
    class="wordWrapper"
    :style="
      `
  height: ${fontSize}rem;
  width: ${fontSize}rem;
  line-height: ${fontSize}rem;
  `
    "
  >
    <div class="wordBg">
      <word-bg :notFirst="notFirst" :fontSize="fontSize"></word-bg>
    </div>
    <span
      :style="
        'color:' +
          color +
          ';font-size:' +
          fontSize * 0.76 +
          'rem;width:' +
          fontSize +
          'rem;height:' +
          fontSize +
          'rem;line-height:' +
          fontSize +
          'rem;text-align:center;'
      "
    >
      {{ word }}
    </span>
  </div>
</template>
<script type="text/babel">
import { mapGetters } from "vuex";
import wordBg from "./wordBg";
export default {
  components: {
    wordBg,
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
    word: {
      type: String,
      default: "一",
    },
  },
  computed: {
    ...mapGetters([
      "wordNum",
      "level",
      "studied",
      "bgColor",
      "color",
      "autoplay",
      "loop",
    ]),
  },
};
</script>
<style lang="scss" scoped>
.wordWrapper {
  position: relative;
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: 楷体;
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
