## Grunt

jan 12, 2012—— jul 17, 2022

构建工具，将处理过程定义为多个不同的任务，每个任务执行一个函数或插件。
特点是配置驱动，你需要做的就是了解各种插件的功能，然后把配置整合到 Gruntfile.js 中

缺点：

Grunt 缺点也是配置驱动，当任务非常多的情况下，试图用配置完成所有事简直就是个灾难；再就是它的 I/O 操作也是个弊病，
它的每一次任务都需要从磁盘中读取文件，处理完后再写入到磁盘

官网：[Grunt: The JavaScript Task Runner (gruntjs.com)](https://gruntjs.com/)

中文：[Grunt: JavaScript 世界的构建工具 | Grunt 中文网 (gruntjs.net)](https://www.gruntjs.net/)

## Gulp

jul 4, 2013——may 6, 2019

对文件读取是流式操作（Stream），也就是说一次 I/O 可以处理多个任务，还是 less 的例子，Gulp 的流程就是
读取 less 文件 -> 编译成 css -> 压缩处理 -> 存储到磁盘

官网：[gulp.js (gulpjs.com)](https://gulpjs.com/)

中文：[gulp.js - 基于流(stream)的自动化构建工具 | gulp.js 中文网 (gulpjs.com.cn)](https://www.gulpjs.com.cn/)

## Webpack

mar 11, 2012—— jul 17, 2022

官网：[webpack](https://webpack.js.org/)

中文：[webpack 中文文档 | webpack 中文网 (webpackjs.com)](https://www.webpackjs.com/)

## FIS

feb 18, 2013—— jul 17, 2022

官网：[FIS3 - 前端工程构建工具 (baidu.com)](http://fis.baidu.com/)

## Babel

2014 年，Babel 发布首版³，重心放在对 JavaScript 转译，使得尚在提案阶段的语言特性能兼容。

官网：[Babel · The compiler for next generation JavaScript (babeljs.io)](https://babeljs.io/)

中文：[Babel 中文文档 · 下一代 JavaScript 编译器 (docschina.org)](https://babel.docschina.org/)

## Parcel

**时间**：may 2, 2013—— jul 17, 2022

官网：[Parcel (parceljs.org)](https://parceljs.org/)

中文：[Parcel - Web 应用打包工具 | Parcel 中文网 (parceljs.cn)](https://www.parceljs.cn/)



极速零配置Web应用打包工具



### Hello World

 index.html

```html
<html>
<body>
  <script src="./index.js"></script>
</body>
</html>
```

index.js

```js
// 导入另一个组件
import main from './main';

main();
```

main.js

```js
// 导入一个 CSS 模块
import classes from './main.css';

export default () => {
  console.log(classes.main);
};
```

main.css

```js
.main {
  /* 引用一张图片 */
  background: url('./images/background.png');
  color: red;
}
```

## Rollup

may 14, 2015—— jul 17, 2022 

主打工具库的打包，相比 Webpack 配置更简单和轻量；

官网：[rollup.js (rollupjs.org)](https://rollupjs.org/guide/en/)

中文：[简介 | rollup.js 中文文档 | rollup.js 中文网 (rollupjs.com)](https://www.rollupjs.com/)

## Snowpack

jan 7, 2020—— jul 17, 2022 

主打不打包项目依赖的模块（Bundleless），而是直接依赖 CDN 提供的模块文件，大大提升了本地环境运行速度；

**Snowpack 是一个用在现代Web应用上的，快如闪电的前端构建工具。** 在你的开发工作流程中，它可以替代更重、更复杂的打包工具，如 webpack或Parcel。 Snowpack利用了JavaScript的本地模块系统([ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import))以避免不必要的工作，无论你的项目膨胀地多大，它都能保持快速。

只要试过一次，就再也回不去了。

官网：[Snowpack](https://www.snowpack.dev/)

中文：[Snowpack|Snowpack中文-更快的前端打包工具](http://snowpack.cn/)

## Vite

apr 21, 2020—— jul 17, 2022 

Vite同样主打 Bundleless，使用 esbuild 实现了性能二次提升



官网：[Vite | Next Generation Frontend Tooling (vitejs.dev)](https://vitejs.dev/)

中文：[为什么选 Vite | Vite (vitejs.net)](https://www.vitejs.net/guide/why.html)

下面这个网站翻译有缺失，不要看

https://cn.vitejs.dev/ 



## SWC

feb 8, 2019——jul 17, 2022 

2019 年，基于 Rust 实现的 SWC 发布首版，对标 Babel，显著提升了性能；

在性能优化方面，社区找到新的突破口在 CPU 密集型任务上，使用 Go 或者 Rust 书写计算密集型的部分任务：

官网：[Rust-based platform for the Web – SWC](https://swc.rs/)

中文：没找到

## esbuild

2020 年，使用 go 实现的 esbuild 发布首版，相比 SWC 更聚焦于 TypeScript 和 JavaScript 的转译，性能更快；

官网：[esbuild - An extremely fast JavaScript bundler](https://esbuild.github.io/)

中文：[esbuild - 极速 JavaScript 打包器 (docschina.org)](https://esbuild.docschina.org/)

## rome js

mar 4, 2020——jul 17, 2022 

官网：[Rome Toolchain](https://rome.tools/)



 2021 年的 npm 包年下载量数据：

- Babel 14 亿，稳坐榜首；
- Webpack 8亿，位列其次；
- 新兴的高性能打包降序依次是：esbuild 4800万、Vite 860万、Parcel 340万、SWC 280万、Snowpack 170万；
- 老牌的打包工具降序依次是：Rollup 2亿、Gulp 720万、Grunt 350万。



**参考：**

[2022，前端工具链十年盘点 (qq.com)](https://mp.weixin.qq.com/s/FBxVpcdVobgJ9rGxRC2zfg)

[CommonJS 溯源](https://arstechnica.com/information-technology/2009/12/commonjs-effort-sets-javascript-on-path-for-world-domination/)

[JavaScript 二十年](https://github.com/doodlewind/jshistory-cn)

[npm 包发版时间](https://libraries.io/)

[npm 包下载数据](https://npm-stat.com/charts.html)

[Toolchains - Timeline](https://time.graphics/line/598790)