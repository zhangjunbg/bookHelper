<template>
  <div class="wordList">
    <word-pinyin
      v-for="(item, index) in wordList"
      :word="item"
      :pinyin="pinyinList[index]"
      :key="index"
      :fontSize="fontSize"
      :notFirst="index"
    ></word-pinyin>
  </div>
</template>
<script type="text/babel">
import wordPinyin from "./wordPinyin";
export default {
  components: {
    wordPinyin,
  },
  props: {
    words: {
      type: String,
      default: "装模作样",
    },
    pinyins: {
      type: String,
      default: "zhuāng mó zuò yàng",
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
<style lang="scss">
.wordList {
  .word + .word {
    // margin-left:rem;
  }
}
</style>
<style lang="scss" scoped>
.wordList {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
