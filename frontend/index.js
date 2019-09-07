import Vue from 'vue'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from 'element-ui/lib/locale/lang/en';
import router from './router';
import App from './App.vue';

Vue.use(ElementUI, { locale });
Vue.use(router);

Vue.config.lang = 'en';

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});
  