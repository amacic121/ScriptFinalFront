import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store/'
// import VueSocketIO from 'vue-socket.io'
// Vue.use(new VueSocketIO({
//     debug: false,
//     connection: 'ws://localhost:8000',
//     vuex:{
//       store,
//       actionPrefix: 'socket_',
//     }
// }))


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
