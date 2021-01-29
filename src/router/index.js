import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/home.vue";
import Main from "../views/main/main.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Home",
    redirect: "/main",
    // component: Home
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
];

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
