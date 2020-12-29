const study = {
  state: {
    level: '1',
    studied:'0',
    onlyUnknown:false,
    backCall:null,

  },

  mutations: {
    SET_LEVEL: (state, data) => {
      state.level = data;
    },
    SET_STUDIED: (state, data) => {
      state.studied = data;
    },
    SET_BACKCALL: (state, data) => {
      state.backCall = data;
    }
  },

  actions: {}
}

export default study