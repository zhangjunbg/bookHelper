<template>
  <div class="footerWrapper">
    <p @click="jumpTo('/learn')">学习</p>
    <p @click="jumpTo('/task')">任务</p>
    <p @click="jumpTo('/mine')">我的</p>
    <p @click="jumpTo('/statistics')">统计</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import screenfull from "screenfull";
export default {
  name: "BottomBar",
  methods: {
    jumpTo(url) {
      this.$router.push(url);
    },
  },
};
</script>
<style lang="scss" scoped>
.footerWrapper {
  background: lightcyan;
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
  p {
    flex: 1;
    text-align: center;
    border-right: solid 1px cyan;
    &:first-child {
      border-left: solid 1px cyan;
    }
  }
}
</style>
