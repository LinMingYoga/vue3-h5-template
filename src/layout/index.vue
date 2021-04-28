<template>
  <div class="index">
      <div class="layout-content">
        <keep-alive v-if="keepAlive">
          <RouterView />
        </keep-alive>
        <RouterView v-else />
      </div>
    

    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
  import TabBar from '../components/TabBar.vue'
  import { defineComponent, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  export default defineComponent({
    components:{
      TabBar
    },
    setup(props) {
      const active = ref(0)
      const tabbars = ref(
        [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'home-o'
        },
        {
          title: '关于模板',
          to: {
            name: 'About'
          },
          icon: 'user-o'
        }
      ]
      )
      const handleChange = (v) => {
        console.log('tab value:', v)
      }
      
      const transition = ''
      const route = useRoute()

      watch(() => route.path,(to, from) => {
          console.log('监听到to变化', to)
          console.log('监听到from变化', from)
        }
      )

      let keepAlive = route.meta.keepAlive
      return {
        active,
        tabbars,
        keepAlive,
        handleChange
      }
    }
  })
</script>

<style>
.index > .layout-content {
  width: 100%;
  height: 100vh;
  background-color: #ffffcc;
  box-sizing: border-box;
}
</style>