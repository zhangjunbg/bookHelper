import Test from '../../view/test/index.vue';
import BG from '../../components/wordBg.vue';
import pinyinBG from '../../components/pinyinBg.vue';
import word from '../../components/word.vue';
import words from '../../components/words.vue';
import pinyin from '../../components/pinyin.vue';
import wordpinyin from '../../components/wordPinyin.vue';
import wordpinyins from '../../components/wordPinyins.vue';
import CalHeader from '../../view/task/components/CalHeader.vue'
export default {
  path: '/test',
  component: {
    template: '<router-view/>'
  },
  redirect: '/test/index',
  children: [
    {
      path: 'calheader',
      component: CalHeader,
      meta: { title: 'CalHeader' }
    },
    {
      path: 'index',
      component: Test,
      meta: { title: 'Test' }
    },
    {
      path: 'wordbg',
      component: BG,
      meta: { title: 'BG' }
    },
    {
      path: 'pinyinbg',
      component: pinyinBG,
      meta: { title: 'pinyinBG' }
    },
    {
      path: 'wordpinyin',
      component: wordpinyin,
      meta: { title: 'wordpinyin' }
    },
    {
      path: 'wordpinyins',
      component: wordpinyins,
      meta: { title: 'wordpinyins' }
    },
    {
      path: 'word',
      component: word,
      meta: { title: 'word' }
    },
    {
      path: 'words',
      component: words,
      meta: { title: 'words' }
    },
    {
      path: 'pinyin',
      component: pinyin,
      meta: { title: 'pinyin' }
    }
  ]
}