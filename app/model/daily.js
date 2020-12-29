module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const dailySchema = new Schema({
        // daily Id
        date: { type: String },
        content: { type: Object }
    });

    return mongoose.model('daily', dailySchema);
}