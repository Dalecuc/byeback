---
title: 基于 VitePress 进行创作
tags: [communal]
categories: [建站]
date: 2024-10-10
description: 欢迎使用 Curve 主题
articleGPT: 这是一篇初始化文章，旨在告诉用户一些使用说明和须知。
references:
  - title: vitepress-theme-curve
    url: https://github.com/imsyy/vitepress-theme-curve
---

## Hello

🎉 你好啊，很高兴你选择了 [vitepress-theme-curve](https://github.com/imsyy/vitepress-theme-curve) ！这将是你的第一篇文章，你可以查看 [主题文档](https://www.byeback.icu/pages/categories/%E4%B8%BB%E9%A2%98%E6%96%87%E6%A1%A3) 以了解更多，如果你在使用本主题时遇到问题，你可以在 [GitHub](https://github.com/imsyy/vitepress-theme-curve) 中正确的提交 [issues](https://github.com/imsyy/vitepress-theme-curve/issues) 以获取社区的帮助。

## 快速开始

::: info
若您有修改主题的需求，请确保您拥有基础的前端知识，最好能掌握 [Vue.js](https://vuejs.org/) 框架的相关知识，并确保阅读了 `VitePress` 的 [官方文档](https://vitepress.dev/zh/guide/what-is-vitepress)
:::

### 书写新的文章

你可以直接在站点根目录中的 `posts` 文件夹中直接新建 `markdown` 文件来书写，您的文件路径即为实际生成的网址路径。

### 添加新的页面

你可以直接在站点根目录中的 `pages` 文件夹中直接新建 `markdown` 文件来实现新建页面，您的文件路径即为实际生成的网址路径。

主题中已经内置了几个常用页面以供参考。

### 主题配置

本主题提供了一个 `themeConfig.mjs` 文件用来配置，它位于 `.vitepress\theme\assets\themeConfig.mjs`，你可以将它复制一份并移动至根目录中，在这里里面的修改将会覆盖初始配置，请注意，**请不要更改文件名或者删除原配置文件，否则它将会不起作用！**

### 静态文件

通常情况下，静态文件处于根目录下的 `public` 文件夹中，通常用于存放字体或图片等文件信息。

了解更多：[资源处理](https://vitepress.dev/zh/guide/asset-handling#asset-handling)


### 特殊 markdown 标签

请参考 [Curve 主题文档 - 标签使用](https://blog.imsyy.top/posts/2024/0307)