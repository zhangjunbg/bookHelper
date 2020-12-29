const listData = []
const formData ={}


module.exports = app => {
    return class AdminController extends app.Controller {
        // 页面控制器
        async render(ctx) {
            await ctx.renderClient("admin.js", {});
        }
    };
};