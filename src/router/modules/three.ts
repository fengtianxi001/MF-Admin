import { IconApps } from "@arco-design/web-vue/es/icon";
import { RouterView } from "vue-router";
import type { routesType } from "../types";

const three: routesType[] = [
  {
    path: "/three",
    name: "three",
    meta: {
      locale: "3D模块",
      icon: IconApps,
    },
    redirect: "/three/cameras",
    component: RouterView,
    children: [
      {
        path: "/three/base",
        name: "threeBase",
        meta: {
          locale: "基础场景",
          icon: IconApps,
        },
        component: () => import("@/views/Camera/Cameras/index.vue"),
      },
      {
        path: "/three/model",
        name: "threeModel",
        meta: {
          locale: "模型导入",
          icon: IconApps,
        },
        component: () => import("@/views/Camera/Cameras/index.vue"),
      },
    ],
  },
];

export default three;
