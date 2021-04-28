import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import Layout from '../layout/index.vue'
const routes = [
  {
    path: "/",
    redirect: '',
    component: Layout,
    children: [
      {
        path: '',
        name: "Home",
        meta: {
          title: "首页"
        },
        component: () => import("../views/Home/index.vue")
      },
      {
        path: 'about',
        name: "About",
        meta: {
          title: "其他"
        },
        component: () => import("../views/About/index.vue")
      }
    ]
  },
  {
    path: "/details",
    name: "Details",
    meta: {
      title: "详情"
    },
    component: () => import("../views/Details/index.vue")
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;