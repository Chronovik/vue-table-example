import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import store from './vuex/store';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(Vuex);

new Vue({
  el: 'body',
  components: { App },
  store,
});
