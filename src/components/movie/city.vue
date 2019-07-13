<template>
  <div class="city">
    <BScroll ref="bscroll">
      <div>
        <div class="hot_city">
          <div class="hot_title">热门城市</div>
          <div class="hot_city_list">
            <div class="hot_city_item" v-for="(item,index) in hotList" :key="index">{{item}}</div>
          </div>
        </div>
        <div class="city_list" ref="city_list">
          <div class="city_list_item" v-for="(item,index) in cityList" :key="index">
            <h2 class="city_item_title">{{item.index}}</h2>
            <div class="city_item_list">
              <div class="city_item_index" v-for="(data,idx) in item.list" @tap="handlecitySlide({nm:data.nm,id:data.id})" :key="idx">{{data.nm}}</div>
            </div>
          </div>
        </div> 
      </div>
    </BScroll>
    <div class="city_index">
      <ul>
        <li
          v-for="(item,index) in cityList"
          @touchstart="handleCityTo(index)"
          :key="index"
        >{{item.index}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  data() {
    return {
      isLoading: true,
      hotList: ["北京", "北京", "北京", "北京", "北京", "北京", "北京", "北京"]
    };
  },
  created() {

     if(!window.sessionStorage.getItem("cityList")){
       this.getCityList();
    }
    
  },
  computed: {
    ...Vuex.mapState({
      cityList: state => state.city.cityList
    })
  },

  methods: {
    ...Vuex.mapActions({
      getCityList: "city/getActionCityList"
    }),

   handlecitySlide(obj){
      this.$store.commit("city/handleCitySlide",obj);
      this.$router.push("/movie");
    } , 

    handleCityTo(index) {
      let to = this.$refs.city_list.getElementsByTagName("h2")[index].offsetTop;
      this.$refs.bscroll.handleTo(to);
    }
  }
};
</script>
<style lang="scss" scoped>
.hot_title,
.city_item_title {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.28rem;
}
.city {
  background: #ebebeb;
  height: 100%;
  overflow: auto;
}
.hot_city_list,
.city_item_list {
  width: 7.16rem;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  padding-right: 0.6rem;
  display: flex;
  flex-wrap: wrap;
  .hot_city_item {
    margin-top: 0.3rem;
    margin-left: 0.26rem;
    width: 1.9rem;
    height: 0.66rem;
    background: #fff;
    text-align: center;
    line-height: 0.66rem;
    font-size: 0.28rem;
    border: 2px solid #e6e6e6;
  }
}
.city_list > div {
  width: 100%;
}

.city_item_index {
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.28rem;
}

.city_index {
  position: fixed;
  right: 8px;
  top: 1rem;
  z-index: 6;
}
.city_index > ul > li {
  padding: 10px 0;
}
</style>

