import Word from '../../view/mainPage/word.vue';
import Term from '../../view/mainPage/term.vue';
import Idiom from '../../view/mainPage/idiom.vue';
import Poem from '../../view/mainPage/poem.vue';
import Story from '../../view/mainPage/story.vue';
import EImg from '../../view/mainPage/eImg.vue';


export default {
  path: '/learn',
  component: {
    template: '<router-view/>'
  },
  redirect:"/learn/word",
  children: [
    {
      path: 'word',
      component: Word,
      meta: { title: 'Word' }
    },
    {
      path: 'term',
      component: Term,
      meta: { title: 'Term' }
    },
    {
      path: 'idiom',
      component: Idiom,
      meta: { title: 'Idiom' }
    },
    {
      path: 'poem',
      component: Poem,
      meta: { title: 'Poem' }
    },
    {
      path: 'story',
      component: Story,
      meta: { title: 'Story' }
    },
    {
      path: 'eImg',
      component: EImg,
      meta: { title: 'EImg' }
    },

  ]
}