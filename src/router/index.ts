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
  ],
});
export default router;
