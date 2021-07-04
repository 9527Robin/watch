import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/home.vue";
import Main from "../views/main/main.vue";
import Demo from "../views/demo/Demo.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // // name: "Home",
    // redirect: "/main"
    component: Home
  },
  {
    path: "/main",
    name: "main",
    component: Main
  },
  {
    path: "/demo",
    name: "demo",
    component: Demo
  }
];

const router = new VueRouter({
  routes
});

export default router;
