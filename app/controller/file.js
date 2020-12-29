const fs = require('fs')
const path = require('path')
const savePath = path.join(__dirname, '../model/');
const fileStaticPath = path.join(__dirname, '../../static/');
/***
 * 处理文件相关
 */
module.exports = app => {
	return class fileController extends app.Controller {
		async download(ctx) {
			const query = ctx.request.body;
			const filePath = fileStaticPath + query.fileName;
			const fileSize = (await promisify(stat)(filePath)).size.toString();
			ctx.attachment(filePath);
			// 设置长度
			ctx.set('Content-Length', fileSize);
			ctx.set('Content-Type', 'application/octet-stream');
			ctx.body = createReadStream(filePath);
		}
		async saveModels(ctx) {
let allObject = {
// 字库
word:`{
    // 具体字
    content:{
        type:String,
        default:""
    },
    // 年级
    level:{
        type:String,
        default:""
    },
    // 是否已经学习过 0 - 未学习 1 - 已学习
    studied:{
        type:String,
        default:"0"
    },
    // 已学习次数
    learnTimes:{
        type:Number,
        default:0
    },
    // 答错次数
    errorTimes:{
        type:Number,
        default:0
    },
    // 答对次数
    successTimes:{
        type:Number,
        default:0
    },
    // 上次学习时间
    lastLearnTime:{
        type:Date,
        default:null
    },

}`,

// 词语库
term:`{
    // 具体词语
    content:{
        type:String,
        default:""
    },
    // 年级
    level:{
        type:String,
        default:""
    },
    // 是否已经学习过 0 - 未学习 1 - 已学习
    studied:{
        type:String,
        default:"0"
    },
    // 已学习次数
    learnTimes:{
        type:Number,
        default:0
    },
    // 答错次数
    errorTimes:{
        type:Number,
        default:0
    },
    // 答对次数
    successTimes:{
        type:Number,
        default:0
    },
    // 上次学习时间
    lastLearnTime:{
        type:Date,
        default:null
    },
}`,

// 成语库
idiom:`{
    // 具体成语
    content:{
        type:String,
        default:""
    },
    // 年级
    level:{
        type:String,
        default:""
    },
    // 是否已经学习过 0 - 未学习 1 - 已学习
    studied:{
        type:String,
        default:"0"
    },
    // 已学习次数
    learnTimes:{
        type:Number,
        default:0
    },
    // 答错次数
    errorTimes:{
        type:Number,
        default:0
    },
    // 答对次数
    successTimes:{
        type:Number,
        default:0
    },
    // 上次学习时间
    lastLearnTime:{
        type:Date,
        default:null
    },
}`,

// 故事库
poem:`{
    // 故事名
    title:{
        type:String,
        default:""
    },
    // 副标题
    subTitle:{
        type:String,
        default:""
    },
    // 作者
    author:{
        type:String,
        default:""
    },
    // 朝代
    dynasty:{
        type:String,
        default:""
    },
    // 具体成语
    content:{
        type:String,
        default:""
    },
    // 年级
    level:{
        type:String,
        default:""
    },
    // 是否已经学习过 0 - 未学习 1 - 已学习
    studied:{
        type:String,
        default:"0"
    },
    // 已学习次数
    learnTimes:{
        type:Number,
        default:0
    },
    // 答错次数
    errorTimes:{
        type:Number,
        default:0
    },
    // 答对次数
    successTimes:{
        type:Number,
        default:0
    },
    // 上次学习时间
    lastLearnTime:{
        type:Date,
        default:null
    },
}`,

// 故事库
story:`{
    // 故事名
    title:{
        type:String,
        default:""
    },
    // 具体故事
    content:{
        type:String,
        default:""
    },
    // 年级
    level:{
        type:String,
        default:""
    },
    // 是否已经学习过 0 - 未学习 1 - 已学习
    studied:{
        type:String,
        default:"0"
    },
    // 已学习次数
    learnTimes:{
        type:Number,
        default:0
    },
    // 答错次数
    errorTimes:{
        type:Number,
        default:0
    },
    // 答对次数
    successTimes:{
        type:Number,
        default:0
    },
    // 上次学习时间
    lastLearnTime:{
        type:Date,
        default:null
    },
}`,

/*** 英语 ***/
eImg:`{
    // 英语单词
    content:{
        type:String,
        default:""
    },
    // 图片地址
    imgUrl:{
        type:String,
        default:""
    },
    // 中文含义
    desc:{
        type:String,
        default:""
    }, 
}`
}

			let str, contentStr;
			// let allObjectArr = [];
			for (let keyName in allObject) {
				contentStr = allObject[keyName];
				str = `module.exports = app => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const ${keyName}Schema = new Schema(${contentStr});

	return mongoose.model('${keyName}', ${keyName}Schema);
}`
				fs.appendFile(savePath + keyName + ".js", str, (error) => {
					if (error) return console.log("追加文件失败" + error.message);
				});
			}

		}
	};
};