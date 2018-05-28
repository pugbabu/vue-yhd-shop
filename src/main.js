// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './assets/js/rem'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'swiper/dist/css/swiper.css'
import directive from './directive' //自定义指令touch
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import store from './store'


directive(Vue)
require('./mock')
fastclick.attach(document.body) //解决移动端点击事件200ms延迟

Vue.use(MuseUI)
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueLazyLoad, { //懒加载声明错误图和占位图
  error: require('./assets/logo.png'),
  loading: require('./assets/logo.png'),
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
