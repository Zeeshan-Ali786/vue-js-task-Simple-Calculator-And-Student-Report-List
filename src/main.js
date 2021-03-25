import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import {  ValidationObserver } from 'vee-validate'
import {ValidationProvider} from 'vee-validate'

Vue.component('ValidationObserver' ,ValidationObserver);
Vue.component('ValidationProvider' ,ValidationProvider);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
