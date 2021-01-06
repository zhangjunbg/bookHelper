<template>
  <svg
    :width="fontSize + 'rem'"
    :height="fontSize + 'rem'"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    :style="'fill:#fff;stroke:' + bgColor + ';'"
    viewBox="0 0 300 300"
  >
  <line
      x1="0"
      y1="1"
      x2="300"
      y2="1"
      style="stroke-width:2;"
    />
    <line
      x1="0"
      y1="299"
      x2="300"
      y2="299"
      style="stroke-width:2;"
    />
    <line
      x1="1"
      y1="0"
      x2="1"
      y2="299"
      style="stroke-width:2;"
      v-if="!notFirst"
    />
    <line
      x1="299"
      y1="1"
      x2="299"
      y2="299"
      style="stroke-width:2;"
    />
    <line
      v-for="(item, index) in svgOpt.pointsDown"
      :x1="item.x1"
      :y1="item.y1"
      :x2="item.x2"
      :y2="item.y2"
      :key="'downLine_' + index"
      style="stroke-width:1;stroke-opacity:0.7;"
    />
    <line
      v-for="(item, index) in svgOpt.pointsUp"
      :x1="item.x1"
      :y1="item.y1"
      :x2="item.x2"
      :y2="item.y2"
      :key="'upLine_' + index"
      style="stroke-width:1;stroke-opacity:0.7;"
    />
    <line
      x1="150"
      y1="0"
      x2="150"
      y2="300"
      style="stroke-width:1;stroke-opacity:0.8;"
    />
    <line
      x1="0"
      y1="150"
      x2="300"
      y2="150"
      style="stroke-width:1;stroke-opacity:0.8;"
    />
    <!-- <rect
      x="1"
      y="1"
      width="298"
      height="298"
      style="stroke-width:2;fill:transparent;"
    /> -->
    
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
