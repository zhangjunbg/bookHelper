<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="字" name="first">
      <word />
    </el-tab-pane>
    <el-tab-pane label="词" name="second">
      <dict />
    </el-tab-pane>
    <el-tab-pane label="成语" name="third">
      <idiom />
    </el-tab-pane>
    <el-tab-pane label="古诗" name="fourth">
      <story />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Word from './components/word.vue';
import Dict from './components/dict.vue';
import Idiom from './components/idiom.vue';
import Story from './components/story.vue';
  export default {
    name: "manage",
    components: {
      Word,
      Dict,
      Idiom,
      Story
    },
    data() {
      return {
        activeName: 'first',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>