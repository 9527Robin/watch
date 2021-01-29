// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {}
    // 配后就可以在开发中直接使用 px 单位开发了
    // "postcss-pxtorem": {
    //   rootValue: 32,
    //   propList: ["*"]
    // }
  }
};
