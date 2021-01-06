const listData = []
const formData ={}


module.exports = app => {
    return class AdminController extends app.Controller {
        // 页面控制器
        async study(ctx) {
            await ctx.renderClient("study.js", {});
        }
         // 页面控制器
         async manage(ctx) {
            await ctx.renderClient("manage.js", {});
        }
    };
};