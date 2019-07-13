<template>
<BScroll ref="movieWrapper">
  <div class="movieList movieTab">
    <div class="movieItem" v-for="(item,index) in list" :key="index">
      <div class="moviePic">
        <img :src="item.img | toPath('128.180')">
        <!-- <img v-lazy="item.img"> -->
      </div>
      <div class="movieDes">
        <div class="movieInfo">
          <h2>{{item.nm}}</h2>

          <p>
            观众评:
            <span>{{item.sc}}</span>
          </p>
          <p class="star">
            主演:
            <span>{{item.star}}</span>
          </p>
          <p>{{item.showInfo}}</p>
        </div>
        <div
          :class="item.globalReleased?'movieBtn':'movieBtnTo'"
        >{{item.globalReleased?'购票' : '预售'}}</div>
      </div>
    </div>
  </div>
  </BScroll>
</template>
<script>
import Vuex from "vuex";
export default {
  created() {
   
  },
  computed: {
    ...Vuex.mapState({
      list: state => state.movie.getNowMovie,

    })
  },
  watch: {
    list() {
      this.$refs.movieWrapper.update();
    },
  },
   mounted() {
 
    this.$refs.movieWrapper.getMovieMore();
  },
  updated() {
    this.$refs.movieWrapper.getih();
  },
  methods: {
    ...Vuex.mapActions({
      getNowMovie: "movie/getActionNowMovie",
    }),
    ...Vuex.mapMutations({
      getId:"movie/getId"
    })

  }
};
</script>
<style lang="scss" scoped>
.movieList {
  background: #fff;
  padding-top: 0.88rem;
}
.movieItem {
  padding-left: 0.3rem;
  height: 2.28rem;
  width: 7.16rem;
  display: flex;
  align-items: center;
  .movieDes {
    margin-left: 0.2rem;
    width: 100%;
    height: 100%;
    padding: 0.24rem 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      margin-bottom: 0.14rem;
      font-size: 0.32rem;
    }
    p {
      font-size: 0.26rem;
      line-height: 0.4rem;
    }
    .star {
      width: 4.04rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .movieBtn {
      width: 0.94rem;
      height: 0.54rem;
      background: #e54847;
      text-align: center;
      line-height: 0.54rem;
      color: #fff;
      border-radius: 5px;
    }
    .movieBtnTo {
      background: #3c9fe6;
      width: 0.94rem;
      height: 0.54rem;
      text-align: center;
      line-height: 0.54rem;
      color: #fff;
      border-radius: 5px;
    }
  }
}
img {
  width: 90%;
  height: 1.8rem;
}
</style>
