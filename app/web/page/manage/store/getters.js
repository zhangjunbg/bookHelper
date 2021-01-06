const getters = {
    level: state => state.study.level,
    studied: state => state.study.studied,
    configId: state => state.system.configId,
    fontSize: state => state.system.fontSize,
    bgColor: state => state.system.bgColor,
    color: state => state.system.color,
    autoplay: state => state.system.autoplay,
    loop: state => state.system.loop,
    wordNum: state => state.system.wordNum,
    termNum: state => state.system.termNum,
    idiomNum: state => state.system.idiomNum,
    storyNum: state => state.system.storyNum,
    eImgNum: state => state.system.eImgNum,
    isFull: state => state.system.isFull,
    isLock: state => state.system.isLock,
}
export default getters
