<template>
<div class="footerBox">

  <div id="footer">
    <ul>
      <router-link tag="li" v-for="(item,index) in tabbar" :key="index" :to="item.path">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  name: "tabBar",
  data() {
    return {
      tabbar: [
        {
          title: "电影",
          path: "/movie",
          icon: "&#xe603;"
        },
        {
          title: "影院",
          path: "/cinema",
          icon: "&#xe61d;"
        },
         {
          title: "我的",
          path: "/mine",
          icon: "&#xe601;"
        }
      ]
    };
  }
};
</script>

<style scoped>
#footer{
    width: 100%;
    /* height: 1rem; */
    position: fixed;
    background: #fff;
    left: 0;
    bottom: 0;
    z-index: 2000;
    }
#footer ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        }
#footer li{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #797d82;
            font-size: .2rem;
          }
#footer>ul>.router-link-active{
    color:#ff5f16!important;
}
#footer>ul>li>span{
    display: block;
    text-align: center;
    padding-top: .06rem;
}
#footer>ul>li>i{
    font-size: .42rem;
    text-align: center;
}
</style>