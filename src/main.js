import App from "./App";
import router from "./router";
import "./styles/common.css";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store";
import Vue from "vue";
import _ from "loadsh";
const imageConfig = require("../static/config.js");
Vue.prototype.imageConfig = imageConfig;
Vue.prototype._ = _;
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
});
