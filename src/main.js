import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import Antd from 'ant-design-vue';
// console.log('Antd :>> ', Antd);
import { Button, Modal } from 'ant-design-vue';
console.log('Button :>> ', Button);
console.log('Modal :>> ', Modal);
// import 'ant-design-vue/dist/antd.less';
import 'ant-design-vue/lib/button/style/index.less';
import 'ant-design-vue/lib/modal/style/index.less';

// Vue.use(Antd);
Vue.use(Button);
Vue.use(Modal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
