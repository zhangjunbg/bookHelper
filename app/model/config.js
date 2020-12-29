module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const configSchema = new Schema({
        userId: {
            type: String,
            default: "yanyang"
        },
        // 年级
        level: {
            type: String,
            default: ""
        },
        // 是否已经学习过 0 - 未学习 1 - 已学习
        studied: {
            type: String,
            default: "0"
        },
        // 字体大小
        fontSize: {
            type: String,
            default: '16'
        },
        // 背景色
        bgColor: {
            type: String,
            default: "#ccc"
        },
        // 字体颜色
        color: {
            type: String,
            default: "#333"
        },
        // 是否自动播放
        autoplay: {
            type: String,
            default: '0'
        },
        // 是否循环播放
        loop: {
            type: String,
            default: '0'
        },

        // 单次学习数量
        wordNum: {
            type: Number,
            default: 10
        },

        // 单次学习数量
        termNum: {
            type: Number,
            default: 10
        },
        // 单次学习数量
        idiomNum: {
            type: Number,
            default: 10
        },
        // 单次学习数量
        storyNum: {
            type: Number,
            default: 10
        },
        // 单次学习数量
        eImgNum: {
            type: Number,
            default: 10
        },

    });

    return mongoose.model('config', configSchema);
}