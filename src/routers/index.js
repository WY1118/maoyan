import Vue from 'vue'
import Router from 'vue-router'
import movie from "@/routers/movie"
import cinema from "@/routers/cinema"
import mine from "@/routers/mine"
import city from "@/routers/city"
import search from "@/routers/search"
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/",
      redirect:"/movie"
    },
    movie,
    cinema,
    mine,
    city,
    search,
    
    {
      path:"**",
      redirect:"/movie"
    }
  ],
})
