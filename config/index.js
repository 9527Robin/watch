"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require("path");

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      "/api/dc": {
        // target: "http://192.168.1.134:81", // 用户反馈接口开发
        target: "http://core.nbgfbr.com", // 用户反馈接口线上
        changeOrigin: true,
        pathRewrite: {
          "^/api/dc": "/api/dc"
        }
      },
      "/api/portalCore": {
        // target: "http://192.168.1.133:8088", //开发环境
        // target: "http://192.168.1.124:8088",
        target: "http://mbfel.lgesetd1l.com", //线上
        changeOrigin: true,
        pathRewrite: {
          "^/api/portalCore": "/api/portalCore"
        }
      },
      "/slb": {
        // target: "http://192.168.1.145:18082", // 开发：刘维
        target: "http://192.168.1.128:18082", //测试环境 林亮
        changeOrigin: true,
        pathRewrite: {
          "^/slb": "/slb"
        }
      },
      // 广告位
      "/api/adserver": {
        // target: "http://192.168.1.130:7070 ", // 开发：陈夏全
        target: "http://mobiletv.ogy1lfw.com", // 线上域名请求  ：易静
        //
        // target: "http://192.168.1.130:8777",
        changeOrigin: true,
        pathRewrite: {
          "^/api/adserver": "/api/adserver"
        }
      },
      // number collection
      "/tdc/v2/report": {
        // target: "http://192.168.1.115:80", // 问题上报开发域名
        target: "http://bbee.kfsxdz.com", // 线上域名
        changeOrigin: true,
        pathRewrite: {
          "^/tdc/v2/report": "/tdc/v2/report"
        }
      }
    },

    // Various Dev Server settings
    // host: "127.0.0.1", // can be overwritten by process.env.HOST
    host: "localhost", // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: "cheap-module-eval-source-map",

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, "../dist/index.html"),

    // Paths
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/",

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: "#source-map",

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
