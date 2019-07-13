import Vue from 'vue'
import Vuex from 'vuex'
import movie from "./movie/index.js";
import city from "./city/index.js";
import search from "./search/index.js";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    city,
    search,
  }
})
