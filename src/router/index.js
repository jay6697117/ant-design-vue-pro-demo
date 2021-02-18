import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../layouts/UserLayout.vue'),
    // component: {
    //   render: function(h) {
    //     return h('router-view');
    //   },
    //   render: h => {
    //     return h('router-view');
    //   },
    //   render: h => h('router-view')
    // },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/user/Login.vue')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../views/user/Register.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
