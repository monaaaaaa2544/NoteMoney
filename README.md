# 记账 app

## 简介

[记账](https://qingkunli.github.io/xianyu-app)是一个基于 vue.js 和 echarts.js 的单页面应用, 界面样式主要参考了"鲨鱼记账"这个应用。
项目采用了 vue.js 提供的组件化的开发方式, 引入 typescript 替代 javascript 作为主力的开发语言。项目应用了许多 vue.js 提供的新特性, 包括 slot 插槽机制,
mixin 混入等, 在未引入任何第三方组件库的情况下实现了一个简易的计算器以及日期选择组件。该项目作为个人练手的项目, 实现了对商业级应用"鲨鱼记账"前端
部分的功能模仿。

## 技术栈

vue3 + vite + vue-router + vuex + typescript + echarts.js + svg

## 项目运行

```
    git clone https://github.com/QingKunLi/xianyu.git
    cd NoteMoney
    npm install
    npm run dev
```

## 效果演示

[查看 demo 请戳这里](https://qingkunli.github.io/xianyu-app) (建议使用 chrome 手机模式预览)

#### 移动端可扫描下方二维码访问

![扫描二维码访问应用](./QRCode.png)

## 开发流程

Money.vue
html
scss

- rest
- 全局（比如：字体、行高）
- 变量
- 局部
