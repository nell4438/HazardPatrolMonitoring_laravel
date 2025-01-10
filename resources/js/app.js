require('./bootstrap');
import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from './router'
import store from './store'
import App from './template/App';
import Sample from './template/Sample';
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.min.css';

Vue.prototype.$url = window.location.origin + '/hpm';
Vue.use(Vuetify)
Vue.use(VueIziToast);

new Vue({
    el: '#app',
    store,
    router:Router,
    vuetify: new Vuetify(),
    components : {
        App,
        Sample,
    }
    // render: h=>h(App)
});