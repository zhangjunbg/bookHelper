# egg-react-webpack-boilerplate

基于 Egg + element-react + Webpack 框架的 Admin 骨架项目, 文档请见: [Egg + React 解决方案](https://www.yuque.com/easy-team/egg-react)

## 使用

#### 安装依赖

```bash
npm install --registry=https://registry.npm.taobao.org
```


#### 本地开发启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:3001


![npm start启动](https://github.com/easy-team/egg-react-webpack-boilerplate/blob/master/docs/images/webpack.png)

#### 发布模式启动应用

- 首先在本地或者ci构建好jsbundle文件

```bash
npm run build 
```

- 然后,启动应用

```bash
npm start 
```


#### 项目构建

```bash
// 直接运行(编译文件全部在内存里面,本地开发使用)
npm start

// 编译文件到磁盘打包使用(发布正式环境)
npm run build 或者 easy build

```