import Vue from 'vue';
import Antdv from 'ant-design-vue';
console.log('Antdv :>> ', Antdv);
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Antdv);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
