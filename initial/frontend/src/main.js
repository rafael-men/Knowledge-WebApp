import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App.vue'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
