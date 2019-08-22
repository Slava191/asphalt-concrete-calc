import Vue from 'vue'
import App from './App.vue'
//import router from './router'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'chart.js/dist/Chart.js'
import 'chart.js/dist/Chart.css'

export const bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
