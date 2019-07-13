export default {
  //城市路由
  path:"/search",
  component:()=>import("@/components/movie/search.vue"),
  meta: {
    tabbarFlag: false
  },
  name: "city",

}

