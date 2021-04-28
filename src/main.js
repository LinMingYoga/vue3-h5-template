import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import './styles/index.scss' // 引入全局css

import 'lib-flexible/flexible' // 适配大屏方案

import "./utils/rem" // 引入等比适配文件

// 全局引入按需引入UI库 vant
const app = createApp(App)
import 'vant/lib/index.css'; // 全局引入样式

// 按需引入vant
import plugins from '@/plugins/vant'
plugins.map(e => app.use(e))

app.use(router)
app.use(store)
app.mount('#app')
