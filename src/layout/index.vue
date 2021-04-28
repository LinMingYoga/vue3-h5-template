<template>
  <div class="index">

    <RouterView />


    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/about">关于</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup(props) {
      const active = ref(0)
      return {
        active
      }
    }
  })
</script>

<style>
.index {
  width: 100%;
  height: 100vh;
  background-color: #ffffcc;
}
</style>