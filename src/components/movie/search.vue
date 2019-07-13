<template>
  <div class="search">
    <Header>
      <router-link to="/movie" tag="i" class="iconfont icon-jiantou4"></router-link>
    </Header>
    <!-- 搜索框 -->
    <div class="search-wrapper" data-search-type="movie">
      <div class="search-header">
        <div class="input-wrapper">
          <i class="iconfont icon-sousuo"></i>
          <input class="search-input" :value="val" type="text"  @input="changeFlag($event)" placeholder="搜电影、搜影院">
          <span class="off"  v-show="flag"  @click="off">
            <i >×</i>
          </span>
        </div>
        <div class="cancel">取消</div>
      </div>

      <!-- 历史记录 -->
      <div class="search-history" v-show="!flag">
        <div class="history-item" data-index="0" v-for="(item,index) in historyList">
          <span class="history-icon">★</span>
          <span class="word one-line">{{item}}</span>
          <div class="off" style="background:#fff" @click="deleteList(index)">×</div>
        </div>
      </div>
      <!-- 搜索结果 -->
      <div class="search-result"  v-show="flag">
        <div class="result-wrapper">
          <div class="result">
            <h3>电影/电视剧/综艺</h3>
            <div class="list">
              <div class="movie cell" data-id="902630">
                <img
                  class="poster"
                  src="https://p1.meituan.net/128.180/mmdb/0d8570d59dde72b5fb53c238e375c86327620.jpg"
                  alt
                >
                <div class="info">
                  <div class="name-score">
                    <p class="name">
                      <span class="one-line">BaddDDD Sonia Sanchez</span>
                      <span class="version"></span>
                    </p>

                    <span class="no-score">暂无评分</span>
                  </div>
                  <div class="detail-section">
                    <div class="detail-items">
                      <p class="ename one-line">BaddDDD Sonia Sanchez</p>
                      <p class="catogary">纪录片,传记</p>
                      <p class="release">2015-04</p>
                    </div>

                    <div class="buy-btn sale" data-id="1254277">购票</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="more-result" data-target="movies" data-total="18810">查看全部18部影视剧</div>
          </div>
        </div>
      </div>
    </div>
    <div class="wish-toast" style="display: none">
      <img
        class="toast-bg"
        src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/toast-bg.png"
      >
      <span class="tips"></span>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  created() {
    console.log(this.$store)
  },
  computed: {
    ...Vuex.mapState({
      val:state=>state.search.inputVal,
      flag:state=>state.search.flag,
      historyList:state=>state.search.historyList
    })
  },
  methods: {
    changeFlag(e){
      let val = e.target.value;
      this.$store.dispatch("search/changeActionsFlag",val)
    
    },
    off(){
      this.$store.dispatch("search/changepActionsOff")
    },
    deleteList(index){
      this.$store.dispatch("search/changepActionsDeleteList")
    }
    // ...Vuex.mapActions({
      
    // }),
    // ...Vuex.mapMutations({
    //   off:"search/changepMutationsOff"
    // })
  },
};
</script>
<style scoped>
.search-wrapper {
  padding-top: 1rem;
}

.search-wrapper {
  background-color: #f5f5f5;
  height: 100vh;
}
.search-header {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px 0 8px 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  z-index: 1;
  position: relative;
}
.search-header .input-wrapper {
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  -webkit-box-flex: 1;
  flex-grow: 1;
}
.search-header .del-input {
  width: 15px;
  height: 15px;
  float: right;
  top: 6px;
}
.search-header .cancel {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  font-size: 16px;
  color: #f03d37;
}
.input-wrapper {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.search-input {
  width: 80%;
  height: 30px;
  border: 0;
  outline: none;
}
.off {
  height: 0.3rem;
  width: 0.3rem;
  background: rgb(173, 173, 170);
  border-radius: 50%;
  text-align: center;
  line-height: 0.3rem;
  margin-right: 3px;
}

/* 历史记录 */
.search-history {
  background-color: #fff;
}

.search-history .history-item:last-child {
  border-bottom: none;
}
.search-history .history-item {
  margin-left: 15px;
  display: flex;
  justify-content: space-between;
  line-height: 44px;
  align-items: center;
}
.search-history .history-item .history-icon {
  width: 15px;
  /* height: 15px; */
  margin-right: 10px;
  background-size: contain;
  display: inline-block;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
}
.search-history .history-item {
  line-height: 44px;
}
.search-history .history-item .word {
  color: #333;
  font-size: 15px;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  display: inline-block;
}
.one-line {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.search-history .history-item .del-word {
  background-repeat: no-repeat;
  background-position: 15px;
  background-size: 10px;
  align-self: center;
  padding: 17px 15px;
  width: 10px;
  height: 10px;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
}
.result-wrapper {
  height: 100%;
  overflow: auto;
}
.result {
  margin-bottom: 10px;
  background-color: #fff;
}
.result h3 {
  font-size: 15px;
  color: #999;
  padding: 9px 15px;
}
h3 {
  font-weight: 400;
}
.result .list {
  border-bottom: 1px solid #e6e6e6;
  padding-left: 15px;
  border-top: 1px solid #e6e6e6;
}
.result .movie {
  padding: 12px 0;
  min-height: 90px;
}
.result .cell,
.result {
  border-bottom: 1px solid #e6e6e6;
}
.result .movie .poster {
  background-color: #eee;
  width: 64px;
  height: 90px;
  float: left;
  margin-right: 10px;
}
.result .movie .info {
  margin-right: 15px;
  margin-top: 1px;
}
.result .movie .name-score {
  font-size: 16px;
  color: #222;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 2px;
}
.result .movie .name-score .name {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.result .movie .name-score .name .one-line {
  display: inline-block;
  font-weight: 700;
  font-size: 17px;
}
.one-line {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.result .movie .name-score {
  color: #222;
}
.version {
  background-size: contain;
  background-repeat: no-repeat;
  height: 14px;
  margin-left: 5px;
  display: inline-block;
}
.result .movie .name-score .no-score {
  font-size: 14px;
  color: #666;
  flex-shrink: 0;
}
.result .movie .detail-section {
  position: relative;
}

.result .movie .detail-section .detail-items {
  -webkit-box-flex: 1;
  flex-grow: 1;
  overflow: hidden;
  padding-right: 10px;
  margin-right: 48px;
  min-height: 27px;
}
.result .movie .detail-section .ename {
  font-size: 13px;
  color: #666;
  margin-top: 2px;
}
.one-line {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.result .movie .detail-section .catogary {
  font-size: 13px;
  color: #666;
  margin-top: 2px;
}
.result .movie .detail-section .release {
  font-size: 13px;
  color: #666;
  margin-top: 2px;
}
.result .movie .detail-section .sale {
    background-color: #ef4238;
}

.result .movie .detail-section .buy-btn {
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    align-self: flex-end;
    flex-shrink: 0;
    width: 48px;
    text-align: center;
    height: 27px;
    line-height: 27px;
    right: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
}
.result .more-result {
    color: #ef4238;

}
.result .more-result, .result .no-related-result {
    width: 80%;
    text-align: center;
    line-height: 44px;
    height: 44px;
    font-size: 15px;
}
</style>

