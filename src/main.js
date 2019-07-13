import Vue from 'vue'
import App from './App.vue'
import router from '@/routers/index.js'
import store from '@/store/index.js'
import Header from "@/common/header/index.vue"
import mintUI from "mint-ui";
import BScroll from "@/common/BScroll";

import 'mint-ui/lib/style.css'


Vue.component("Header",Header);
Vue.component("BScroll",BScroll);
Vue.filter("toPath",(val,params)=>{
  var reg = /w\.h/;
  return val.replace(reg,params)
})

Vue.config.productionTip = false
Vue.use(mintUI);
new Vue({
  router,
  store,
  // axios,
  render: h => h(App)
}).$mount('#app')
