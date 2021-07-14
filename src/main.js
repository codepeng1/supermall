import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import FastClick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// $bus事件总线
Vue.prototype.$bus = new Vue()

// 使用懒加载的插件
Vue.use(vueLazyLoad, {
  error: require('./assets/img/common/imgErr.png'),
  loading: require('./assets/img/common/imgLoading.gif'),
})

// 解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
