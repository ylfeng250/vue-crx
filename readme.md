## 使用Vue开发Chrome插件的模板

最近看了一些Chrome 插件开发的内容, 想要使用Vue的单文件来编写，但是没有现成的`webpack`打包方式，自己写了一个，第一次自己编写`webpack`的配置文件
## 目录结构
```
│  .babelrc.js
│  .gitignore
│  package-lock.json
│  package.json
│  webpack.config.js
│  
├─src
│  │  manifest.json
│  │  
│  ├─background
│  │      background.js
│  │      
│  ├─content
│  │      content.js
│  │      
│  ├─option
│  │      App.vue
│  │      option.html
│  │      option.js
│  │      
│  └─popup
│          App.vue
│          popup.html
│          popup.js
│          
└─static
    └─img
            icon.png
```
## 目前模板支持

* vue 模板解析
* es6语法转换
* 图片打包
* 字体打包

## 使用

```bash
## 安装依赖
npm install 
## 打包
npm build
## 开发
npm run watch
```

## Chrome 插件开发 资源

* [《Chrome插件开发全攻略》配套完整Demo](https://github.com/sxei/chrome-plugin-demo)
* [Chrome扩展及应用开发](https://github.com/Sneezry/chrome_extensions_and_apps_programming)
* [Chrome扩展及应用开发（首发版）](http://www.ituring.com.cn/book/1421?utm_source=tuicool)