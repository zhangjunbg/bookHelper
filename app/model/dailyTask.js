module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const dailyTaskSchema = new Schema({
        // dailyTask Id
        taskDate: {
            type: String, // '2020-1-3'
        },
        taskId:{
            type:String, // XXXX
        },
        taskName: {
            type: String // 字 100
        },
        // 是否开始了 '0' - 未开始 '1' - 开始学习
        taskStatus: {
            type: String,
            default: '0'
        },
        // 是否完成了 '0' - 未完成 '1' - 已完成
        finish: {
            type: String,
            default: '0'
        }

    });

    return mongoose.model('dailyTask', dailyTaskSchema);
}