// import {component} from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "herry",
      component: () => import("../views/herry_projects/herry_yzl.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/home/index.vue"),
    },
  ],
});
export default router;
