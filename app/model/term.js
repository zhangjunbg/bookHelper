module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const termSchema = new Schema({
        // 具体词语
        content: {
            type: String,
            default: ""
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
        // 已学习次数
        learnTimes: {
            type: Number,
            default: 0
        },
        // 答错次数
        errorTimes: {
            type: Number,
            default: 0
        },
        // 答对次数
        successTimes: {
            type: Number,
            default: 0
        },
        // 上次学习时间
        lastLearnTime: {
            type: Date,
            default: null
        },
    }, {
        versionKey: false,
        timestamps: { updatedAt: 'lastLearnTime' }
    });
    return mongoose.model('term', termSchema);
}