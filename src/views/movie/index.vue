<template>
  <div id="home clear">
    <Header></Header>
    <div class="container">
      <div class="nav">
        <!-- {{this.$store.state.city.citynm} -->
        <router-link class="city" tag="div" to="/city">{{this.$store.state.city.citynm}}
          <i class="iconfont icon-jiantou1"></i>
        </router-link>
        <div class="movieToggle">
          <router-link tag="div" to="/movie/nowplaying">正在热映</router-link>
          <router-link tag="div" to="/movie/comingsoon">即将上映</router-link>
        </div>
        <router-link class="search" tag="div" to="/search">
          <i class="iconfont">&#xe613;</i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex"
export default {
  // computed: {
  //   ...Vuex.mapState({
  //       citynm:state=> state.city.citynm,
  //   })
  // },
  activated() {
    this.getNowMovie(this.$store.state.city.cityid);
    this.getMoreMovie(this.$store.state.city.cityid);
  },
  // watch: {
  //   citynm(){
  //       this.$store.dispatch("movie/getMutationNowMovie");  
  //   }
  // },
  methods: {
    ...Vuex.mapActions({
      getNowMovie: "movie/getActionNowMovie",
      getMoreMovie:"movie/getActionMoreMovie"
    })
  }
};
</script>
<style lang="scss" scoped>
$color: #e54847;
.container {
  position: absolute;
  height: 100%;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;
  .nav {
    height: 0.88rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.3rem;
    position: fixed;
    left: 0;
    top: 1rem;
    background: #fff;
    width: 100%;
    z-index: 5;
    .city {
      position: absolute;
      left: 0.4rem;
    }
    .search {
      position: absolute;
      right: 0.4rem;
      i {
        font-size: 0.35rem;
        color: $color;
        font-weight: 900;
      }
    }
    .movieToggle {
      display: flex;
      justify-content: space-between;
      width: 3.2rem;
      .router-link-active {
        color: $color;
        border-bottom: 4px solid $color;
      }
      div {
        width: 100%;
        line-height: 0.84rem;
        text-align: center;
        font-weight: 900;
      }
    }
  }
}

.movieTab {
  padding-top: 0.88rem;
}
</style>