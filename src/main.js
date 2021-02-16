import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//按需加载:start
import { Button, Modal } from 'ant-design-vue';
Vue.use(Button);
Vue.use(Modal);
//按需加载:end

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
