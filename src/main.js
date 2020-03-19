import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/css/bass.css";
import "@/assets/fonts/iconfont.css";

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
