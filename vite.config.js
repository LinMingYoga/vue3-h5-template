import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
// import styleImport from 'vite-plugin-style-import'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginImp({
      libs: [{
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => {
          return `vant/es/${name}/style`;
        },
      }, ]
    })
  ],
  base: "./", //打包路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') //设置别名
    }
  },
  server: {
    port: 4000, //启动端口
    open: true,
    proxy: {
      //配置跨域
      '/api': {
          target: 'https://test.xxx.com', // 接口的域名
          // ws: true, // 是否启用websockets
          changOrigin: true, // 开启代理，在本地创建一个虚拟服务端
          pathRewrite: {
            '^/api': '/'
          }
        }
      },
    cors: true
  }
})
