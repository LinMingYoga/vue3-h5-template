<template>
  <div class="home">
    <div class="logo" @click="routeToDetails">
      <img alt="Vue logo" src="../../assets/11.jpg" />
    </div>
    <h3>打工人</h3>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import { useRouter } from 'vue-router';
export default defineComponent({
  setup(props) {
     const router = useRouter();
    const routeToDetails = () => {
      router.push("/details")
    }

    return {
      routeToDetails
    }
  }
})
</script>

<style lang="scss">
  .home {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }
    .logo {
      width: 80px;
      height: 80px;
      margin-bottom: 20px;
      border-radius: 50%;
      background-color: #fff;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border: 1px solid #ddd;
      img {
        display: block;
        width: 80px;
      }
    }
  }
</style>