
import { getCityList } from "@/api/api.js";
export default {
  state: {
    cityList:JSON.parse(window.sessionStorage.getItem("cityList")) || [],
    citynm:window.sessionStorage.getItem("citynm")||"北京" ,
    cityid: window.sessionStorage.getItem("cityid") ||1,
  },
  mutations: {
    getMutationsCityList(state, params) {
      state.cityList = params;

    },
    handleCitySlide(state,params){
        state.citynm = params.nm;
        state.cityid = params.id;

        window.sessionStorage.setItem("citynm",params.nm);
        window.sessionStorage.setItem("cityid",params.id);
    },
  },
  actions: {
    async getActionCityList({commit}){
      let data = await getCityList();

      //城市处理
      var city_list = [];//城市列表

      //热门城市

      //城市列表
      /*
          B
          [
              {index:A,list:["阿里","鞍山"]},
              {index:B,list:[]}
              {index:C,list:[]}
          ]
      */
      
      //城市列表渲染
      for(var i=0;i<data.cts.length;i++){
          var firstLetter = data.cts[i].py.slice(0,1).toUpperCase();
          if(toIndex(firstLetter)){
              //city_list[?].list.push(data.data.cities[i].nm)

              for(var j=0;j<city_list.length;j++){
                  if(city_list[j].index == firstLetter){
                      city_list[j].list.push({nm:data.cts[i].nm,id:data.cts[i].id});
                      break;
                  }
              }

          }else{
              city_list.push({index:firstLetter,list:[{nm:data.cts[i].nm,id:data.cts[i].id}]}) 
          }
      }



      //判断当前首字符是否在citylist中存在
      function toIndex(firstLetter){
          for(var i=0;i<city_list.length;i++){
              if(firstLetter == city_list[i].index){
                  return true;
              }
          }

          return false;
      }
      

      //城市排序
      city_list.sort((a,b)=>{
          if(a.index > b.index){
              return 1;
          }else{
              return -1;
          }
      })
      //第一次打开浏览器的时候将获取过来的数据进行存储
      console.log(city_list)
      window.sessionStorage.setItem("cityList",JSON.stringify(city_list));
      commit("getMutationsCityList",city_list)
  }

  },
  namespaced: true
}
