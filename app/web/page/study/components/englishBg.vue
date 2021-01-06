<template>
  <svg
    :width="fontSize + 'rem'"
    :height="fontSize / 2 + 'rem'"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    :style="'fill:#fff;stroke:' + bgColor + ';'"
    viewBox="0 0 300 150"
  >
    <line x1="0" y1="1" x2="299" y2="1" style="stroke-width:2;" />
    <line
      x1="0"
      y1="51"
      x2="299"
      y2="51"
      style="stroke-width:1;stroke-opacity:0.8;"
    />
    <line
      x1="0"
      y1="101"
      x2="299"
      y2="101"
      style="stroke-width:2;stroke-opacity:0.8;"
      stroke="purple"
      
    />
    <line x1="0" y1="150" x2="299" y2="150" style="stroke-width:2;" />
  </svg>
</template>
<script type="text/babel">
import { mapGetters } from "vuex";
export default {
  name: "WordBg",
  props: {
    notFirst: {
      type: Number,
      default: 0,
    },
    fontSize: {
      type: String,
      default: "22",
    },
  },
  data() {
    return {
      svgOpt: { gap: 12, all: 300, pointsDown: [], pointsUp: [] },
    };
  },
  computed: {
    ...mapGetters(["bgColor", "color"]),
  },
  mounted() {
    let arrDown = [],
      arrUp = [];
    let { all, gap } = this.svgOpt;
    for (let i = 0; i < all / gap; i = i + 2) {
      arrDown.push({
        x1: i * gap,
        y1: i * gap,
        x2: (i + 1) * gap,
        y2: (i + 1) * gap,
      });
      arrUp.push({
        x1: i * gap,
        y1: all - i * gap,
        x2: (i + 1) * gap,
        y2: all - (i + 1) * gap,
      });
    }
    this.svgOpt.pointsDown = arrDown;
    this.svgOpt.pointsUp = arrUp;
  },
};
</script>
