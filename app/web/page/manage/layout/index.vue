<template>
  <div class="mainWrapper" v-if="showPage">
    <LayoutHeader class="mainHeader"></LayoutHeader>
    <div class="mainContent">
      <div class="leftMenu">
        <left-menu></left-menu>
      </div>
      <div class="rightContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from "./menu/index.vue";
import LayoutHeader from "./header/header";
export default {
  components: {
    LeftMenu,
    LayoutHeader,
  },
  data() {
    return {
      showPage: false,
    };
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
    });
  },
};
</script>
<style lang="scss" scoped>
.mainWrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  .leftMenu{
    width: 15.4rem;
    flex-shrink: 0;
    background-color: rgb(34, 45, 50);
  }
  .mainContent {
    flex: 1;
    display: flex;
    flex-direction: row;
    height: calc(100% - 3.125rem);
    overflow: hidden;
  }

  .rightContent {
    box-sizing: border-box;
    flex: 1;
    background-color: #fff;
    padding: 1.25rem;
    width: 100%;
    overflow: auto;
  }
}
</style>
