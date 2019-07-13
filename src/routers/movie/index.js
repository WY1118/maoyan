export default {
  path: "/movie",
  component: () => import("@/views/movie"),
  meta: {
    tabbarFlag: true
  },
  name: "movie",
  children: [
    {
      path: "nowplaying",
      name:"nowplaying",
      component: () => import("@/components/movie/nowplaying.vue"),
      meta: {
        tabbarFlag: true
      },
    },
    {
      path: "comingsoon",
      name: "comingsoon",
      component: () => import("@/components/movie/nowplaying.vue"),
      meta: {
        tabbarFlag: true
      },
    },
    {
      path:"/movie",
      redirect:"nowplaying"
    }

  ],
}

