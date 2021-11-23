import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

//#region import

const Ioc = () => import("@/views/Ioc.vue");
const Alarmlamp = () => import("@/views/Alarmlamp.vue");
const BasicLayout = () => import("@/components/layouts/BasicLayout.vue");
//#endregion

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: BasicLayout,
    children: [{
      path: '',
      name: 'Home',
      component: Home //使用同步加载 使首页面渲染更快，减少白屏时间
      // component: () => import('./views/Index.vue') 
    }]
  },
  {
    path: "/BasicLayout",
    name: "BasicLayout",
    component: BasicLayout,
  },
  {
    path: "/Ioc",
    name: "Ioc",
    component: Ioc,
  },

  {
    path: "/Alarmlamp",
    name: "Alarmlamp",
    component: Alarmlamp,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
