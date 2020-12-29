/**
 *  
 *  sUrl:'/api/login',内部接口
    sUrl:'/api/login', 后台服务接口，如果与 url一致可以不写，
    fileName:'user', 控制器文件 ，如果只是转发不做处理，可以不写
    methName:'login'  控制器方法，如果只是转发不做处理，可以不写
 */
module.exports = {

    "download_file": {
        title: "下载",
        url: "/bc/download",
        method: "get",
        fileName: "file",
        methName: "download",
    },
    "insertLine": {
        title: "单条入库",
        url: "/bc/insert",
        method: "post",
        fileName: "db",
        methName: "singleInsert",
    },
    "insertMultiLine": {
        title: "批量入库",
        url: "/bc/insert",
        method: "post",
        fileName: "db",
        methName: "multiAdd",
    },
    "wordMultiAdd": {
        title: "字批量入库",
        url: "/bc/wordMultiAdd",
        method: "post",
        fileName: "db",
        methName: "wordMultiAdd",
    },
    "wordMultiUpdate": {
        title: "字批量入库",
        url: "/bc/wordMultiUpdate",
        method: "post",
        fileName: "db",
        methName: "wordMultiUpdate",
    },
    "termMultiAdd": {
        title: "词批量入库",
        url: "/bc/insert",
        method: "post",
        fileName: "db",
        methName: "termMultiAdd",
    },
    "idiomMultiAdd": {
        title: "成语批量入库",
        url: "/bc/insert",
        method: "post",
        fileName: "db",
        methName: "idiomMultiAdd",
    },
    "storyMultiAdd": {
        title: "古诗批量入库",
        url: "/bc/insert",
        method: "post",
        fileName: "db",
        methName: "storyMultiAdd",
    },
    "eImgMultiAdd": {
        title: "英语单词批量入库",
        url: "/bc/insert",
        method: "post",
        fileName: "db",
        methName: "eImgMultiAdd",
    },
    "wordList": {
        title: "字列表",
        url: "/bc/word/list",
        method: "post",
        fileName: "db",
        methName: "wordList",
    },
    "termList": {
        title: "词语列表",
        url: "/bc/term/list",
        method: "post",
        fileName: "db",
        methName: "termList",
    },
    "idiomList": {
        title: "成语列表",
        url: "/bc/idiom/list",
        method: "post",
        fileName: "db",
        methName: "idiomList",
    },
    "storyList": {
        title: "古诗列表",
        url: "/bc/story/list",
        method: "post",
        fileName: "db",
        methName: "storyList",
    },
    "eImgList": {
        title: "英语单词列表",
        url: "/bc/eImg/list",
        method: "post",
        fileName: "db",
        methName: "eImgList",
    },
    "userConfigAdd": {
        title: "新增用户系统配置信息",
        url: "/bc/user/config/add",
        method: "post",
        fileName: "config",
        methName: "userConfigAdd",
    },
    "userConfigUpdate": {
        title: "修改用户系统配置信息",
        url: "/bc/user/config/update",
        method: "post",
        fileName: "config",
        methName: "userConfigUpdate",
    },
    "getUserConfig": {
        title: "获取用户系统配置信息",
        url: "/bc/user/config/detail",
        method: "post",
        fileName: "config",
        methName: "getUserConfig",
    },
    "cleanStudyStatus" : {
        title: "重置学习状态",
        url: "/bc/config/clean",
        method: "post",
        fileName: "db",
        methName: "cleanStudyStatus",
    },

}