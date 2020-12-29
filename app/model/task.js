module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const taskSchema = new Schema({
        // 任务名称
        taskName: { type: String },
        // 开始时间 
        startTime: { type: String },
        // 结束时间
        endTime: { type: String },
        // 循环周期 0 - 每天 1 - 每周 
        taskLoop: {
            type: String
        },
        clockTime: Date,
        loopDay: [String],
        // 描述
        taskDesc: { type: String }
    }, {
        versionKey: false,
        timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
    });

    return mongoose.model('task', taskSchema);
}