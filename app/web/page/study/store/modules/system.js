const system = {
  state: {
    configId: null,
    fontSize: '16',
    bgColor: '#ccc',
    color: 'red',
    autoplay: '0',
    loop: '0',
    wordNum: 10,
    termNum: 10,
    idiomNum: 10,
    storyNum: 10,
    eImgNum: 10,
    isFull:false,
    isLock : false,
  },

  mutations: {
    SET_CONFIG_ID: (state, data) => {
      state.configId = data;
    },
    SET_FONT_SIZE: (state, data) => {
      state.fontSize = data;
    },
    SET_WORD_NUM: (state, data) => {
      state.wordNum = data;
    },
    SET_TERM_NUM: (state, data) => {
      state.termNum = data;
    },
    SET_STORY_NUM: (state, data) => {
      state.storyNum = data;
    },
    SET_IDIOM_NUM: (state, data) => {
      state.idiomNum = data;
    },
    SET_EIMG_NUM: (state, data) => {
      state.eImgNum = data;
    },
    SET_BG_COLOR: (state, data) => {
      state.bgColor = data;
    },
    SET_COLOR: (state, data) => {
      state.color = data;
    },
    SET_AUTOPLAY: (state, data) => {
      state.autoplay = data;
    },
    SET_LOOP: (state, data) => {
      state.loop = data;
    },
    SET_BACKCALL: (state, data) => {
      state.backCall = data;
    },
    SET_IS_FULL: (state, data) => {
      state.isFull = data;
    },
    SET_IS_LOCK: (state, data) => {
      state.isLock = data;
    },
  },
  actions: {}
}

export default system