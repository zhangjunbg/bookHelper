<template>
  <div
    class="englishWrapper"
    :style="
      `height: ${fontSize / 2}rem;
       width: ${fontSize}rem;
       line-height: ${fontSize / 2}rem;`
    "
  >
    <div class="englishBg">
      <english-bg :fontSize="fontSize"></english-bg>
    </div>
    <!-- <span
      :style="
        `color:${color};
        font-size:${fontSize * 0.46}rem;
        height:${fontSize / 2}rem;
        line-height:${fontSize * 0.36}rem;`
      "
    >
      {{ english }}
    </span> -->
    <span
      :style="
        `color:${color};
        font-size:${fontSize * 0.35}rem;
        height:${fontSize / 2}rem;
        line-height:${fontSize * 0.45}rem;`
      "
      >{{ english}}</span
    >
  </div>
</template>
<script type="text/babel">
import { mapGetters } from "vuex";
import englishBg from "./englishBg";
export default {
  components: {
    englishBg,
  },
  props: {
    fontSize: {
      type: String,
      default: "22",
    },
    color: {
      type: String,
      default: "#333",
    },
    english: {
      type: String,
      default: "A",
    }
  },
};
</script>
<style lang="scss" scoped>
.englishWrapper {
  position: relative;
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: BadScriptRegular;
  display: flex;
  justify-content: center;
  align-items: center;
  .englishBg {
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
