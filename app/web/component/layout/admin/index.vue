<template>
  <div class='mainWrapper' v-if="showPage">
    <LayoutHeader class="mainHeader"></LayoutHeader>
    <div class="mainContent">
      <div class="leftMenu">
        <left-menu></left-menu>
      </div>
      <div class="rightContent">
        <system-tool></system-tool>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style>
  @import '../../../asset/css/global.css';
  @import './index.css';
</style>
<script>
  import LeftMenu from "./menu/index.vue";
  import LayoutHeader from './header/header';
  import SystemTool from './system/index';
  export default {
    components: {
      LeftMenu,
      LayoutHeader,
      SystemTool
    },
    data() {
      return {
        showPage:false,
      }
    },
    beforeMount() {
      this.$post('getUserConfig', { userId: 'yangyang' }, data => {
        this.showPage = true;
        this.$store.commit('SET_CONFIG_ID', data._id);
        this.$store.commit('SET_FONT_SIZE', data.fontSize);
        this.$store.commit('SET_BG_COLOR', data.bgColor);
        this.$store.commit('SET_COLOR', data.color);
        this.$store.commit('SET_STUDIED', data.studied);
        this.$store.commit('SET_AUTOPLAY', data.autoplay);
        this.$store.commit('SET_LOOP', data.loop);
      });
    }
  };
</script>
<style lang="scss" scoped>
  .mainWrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f1f1f1;

    .mainContent {
      flex: 1;
      display: flex;
      flex-direction: row;
      padding: 1.25rem;
    }

    .rightContent {
      box-sizing: border-box;
      flex: 1;
      background-color: #fff;
      padding: 1.25rem;
      width: 100%;
    }
  }
</style>