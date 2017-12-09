# vue-typescript

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


源码构建修改:
1.在src下创建页面配置page.conf.js,将常量export出来。
2.修改webpack.base.conf.js里的entry,各种loader;
3.在工具类utils.js创建获取entry的函数,创建new HtmlWebpackPlugin()的配置项，构建多页面应用。
4.在开发环境dev和生产环境prod的webpack基本配置项添加HtmlWebpackPlugin(原来的注释);
5.在src新建index.html的HTML模板
#vue-ts
