import Vue from 'vue'
import App from './App.vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
