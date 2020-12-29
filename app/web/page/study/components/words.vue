<template>
  <div class="wordList">
    <word
      v-for="(item, index) in wordList"
      :word="item"
      :pinyin="pinyinList[index]"
      :key="index"
      :fontSize="fontSize"
      :notFirst="index"
    ></word>
  </div>
</template>
<script type="text/babel">
import word from "./word";
export default {
  components: {
    word,
  },
  props: {
    words: {
      type: String,
      default: "测试数据",
    },
    pinyins: {
      type: String,
      default: "cè shì shù jù",
    },
    fontSize: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      wordList: [...this.words],
      pinyinList: this.pinyins.split(" "),
    };
  },
};
</script>
<style lang="scss" scoped>
.wordList {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
