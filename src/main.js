// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入mint-ui的css文件
import "mint-ui/lib/style.css"
//引入mint-ui组件
import Mint from 'mint-ui'
//使用Vue.use使用mint-ui
Vue.use(Mint)
//引入mint中header的组件
import {Header, Swipe, SwipeItem} from 'mint-ui'
//注册mint-ui中的header组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//引入mui和font的css
import "./assets/css/mui.min.css"
import "./assets/css/icons-extra.css"
import "./assets/css/set.css"

//引入vue-resourse组件
import VueResourse from 'vue-resource'
Vue.use(VueResourse)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
