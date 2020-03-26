import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import store from './store';
import Fragment from 'vue-fragment';

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(Fragment.Plugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
