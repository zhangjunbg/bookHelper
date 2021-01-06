<template>
  <el-menu router background-color='#222d32' text-color='#fff' default-active='1-4-1' class='menu' :collapse='collapse'>
    <template v-for='(menu_v,menu_k) in menu'>
      <el-submenu v-if='menu_v.children' :index='menu_k' :key='menu_k'>
        <template slot='title'>
          <i :class='menu_v.icon'></i>
          <span slot='title'>{{(menu_v.meta || {}).title}}</span>
        </template>
        <el-menu-item v-for='(menuChildren_v,menuChildren_k) in menu_v.children' :key='menuChildren_k'
          :index='menuChildren_v.path'>
          <i class='is-children'></i>
          <span slot='title'>{{(menuChildren_v.meta || {}).title }}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-else :index='menu_v.path' :key='menu_k'>
        <i :class='menu_v.icon'></i>
        <span slot='title'>{{(menu_v.meta || {}).title}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script type='text/babel'>
  import menu from './index.js';
  export default {
    props: ['collapse'],
    data() {
      return {
        menu: this.$router.options.routes
      };
    },
    mounted() {
      console.log(this.$router.options.routes);
    },
    methods: {},
  }
</script>