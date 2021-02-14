import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antdv from 'ant-design-vue';
console.log('Antdv :>> ', Antdv);
import 'ant-design-vue/dist/antd.less';
Vue.use(Antdv);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
