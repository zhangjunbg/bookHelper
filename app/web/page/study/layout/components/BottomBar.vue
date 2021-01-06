<template>
  <div class="footerWrapper">
    <span @click="jumpTo('/learn')">学习</span>
    <span @click="jumpTo('/task')">任务</span>
    <span @click="jumpTo('/mine')">我的</span>
    <span @click="jumpTo('/statistics')">统计</span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import screenfull from "screenfull";
export default {
  name: "BottomBar",
  data(){
    return {
      curRoute:'/task'
    }
  },
  methods: {
    jumpTo(url) {
      if(url == this.curRoute) return;
      this.curRoute = url;
      this.$router.push(url);
    },
  },
};
</script>
<style lang="scss" scoped>
.footerWrapper {
  box-sizing: border-box;
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top:solid 1px green;
  z-index: 2;
  span {
    color:green;
    flex: 1;
    text-align: center;
    border-right: solid 1px green;
    &:first-child {
      border-left: solid 1px green;
    }
  }
}
</style>
