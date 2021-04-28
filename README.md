# vue3.0-vite-h5-template

###### [LinMing](http://dev-api.fengpai.com)

---

### 环境

``` js
cmd
vue -V

@vue/cli 4.5.6
```

全局安装vite：

```js
npm install create-vite-app -g
```

用到的依赖包

- axios

  `npm i -s axios`

- vant

  `npm i vant@next -S`

- vue-router

  `npm install vue-router@4 --save`

- vuex

  `npm i vuex@next --save`

- lib-flexible

  `npm install lib-flexible --save-dev`

- postcss-pxtorem

  `npm install postcss-pxtorem -D`

  在根目录下创建postcss.config.js

  ``` javascript
  module.exports = {
    "plugins": {
      "postcss-pxtorem": {
        rootValue: 37.5, 
        // Vant 官方根字体大小是 37.5
        propList: ['*'],
        selectorBlackList: ['.norem'] 
        // 过滤掉.norem-开头的class，不进行rem转换
      }
    }
  }
  ```

  在根目录src中新建util目录下新建rem.ts等比适配文件

  ``` javascript
  // rem等比适配配置文件
  // 基准大小
  const baseSize = 37.5 
  // 注意此值要与 postcss.config.js 文件中的 rootValue保持一致
  // 设置 rem 函数
  function setRem () {
    // 当前页面宽度相对于 375宽的缩放比例，可根据自己需要修改,一般设计稿都是宽750(图方便可以拿到设计图后改过来)。
    const scale = document.documentElement.clientWidth / 375
    // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
  }
  // 初始化
  setRem()
  // 改变窗口大小时重新设置 rem
  window.onresize = function () {
    console.log("我执行了")
    setRem()
  }
  ```

  在mian.ts引入

  ``` javascript
  import "./utils/rem"
  ```

- sass-loader

  `npm install sass-loader --save-dev `

- sass

  `npm install sass --save`

- vite-plugin-imp

  `npm install vite-plugin-imp --save`

---

HTTP

```
git clone https://github.com/LinMingYoga/vue3.0-vite-h5-template.git
```

SSH

```JS
git@github.com:LinMingYoga/vue3.0-vite-h5-template.git
```

下载依赖包

``` js
npm install
cnpm install
yarn install
```

