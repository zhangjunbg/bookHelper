<template>
  <div class="word">
    <pinyin   :notFirst="notFirst" :fontSize="fontSize" :pinyin="pinyin"></pinyin>
    <word   :notFirst="notFirst" style="margin-top:-1px;" :fontSize="fontSize" :word="word"></word>
  </div>
</template>
<script type="text/babel">
import word from "./word";
import pinyin from "./pinyin";
export default {
  components: {
    word,
    pinyin,
  },
  props: {
    notFirst: {
      type: Number,
      default: 0,
    },
    fontSize: {
      type: String,
      default: "22",
    },
    word: {
      type: String,
      default: "测",
    },
    pinyin: {
      type: String,
      default: "cè",
    },
  },
};
</script>
<style lang="scss" scoped>
.word {
}
</style>
