<template>
  <div class="about">
    <div class="title">
      <h3>VUE3.0 H5开发模板</h3>
      <span>A vue3.0 and vite2.x h5 template  with Vant UI</span>
      <span>@author: LinMing</span>
    </div>
    <van-cell icon="success" v-for="(item,index) in arr" :key="index" :value="item" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup(props) {
    const arr = [
      'Vue-cli4 4.5.6',
      'VantUI 组件按需加载',
      'rem 适配方案',
      'Sass 全局样式',
      'Vuex 状态管理',
      'Vue-router',
      'Axios 封装及接口管理',
      'Vite 2 vite.config.js 基础配置',
      '配置 alias 别名',
      '配置 proxy 跨域'
    ]
    return {
      arr
    }
  }
})
</script>

<style lang="scss">
  .about {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      width: 100%;
      background-color: #fff;
      border: 1px solid #ddd;
      h3 {
        font-size: 20px;
        font-weight: 600;
        padding: 10px;
      }
      span {
        font-size: 14px;
        color: #ccc;
        padding: 5px 10px;
        display: block;
      }
    }
  }
</style>