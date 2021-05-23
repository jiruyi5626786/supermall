import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// createApp(App).mount('#app')
createApp(App).mount('#app')
new Vue({
  el:'#app',
  router
})

// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')

