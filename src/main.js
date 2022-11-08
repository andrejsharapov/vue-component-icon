import Vue from 'vue'
import App from "./app.vue"
import vIcon from '../index'

Vue.use(vIcon)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app")
