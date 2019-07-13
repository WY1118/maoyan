
// import { getCityList } from "@/api/api.js";
export default {
  state: {
    inputVal:"",
    historyList:[],
    flag:false,
  },
  mutations: {
    changepMutationsFlag(state,params){
      state.flag = true;
      state.inputVal=params;  
      if(state.inputVal == ""){
        state.flag = false
      }        
    },
    changepMutationsOff(state){
      state.historyList.push(state.inputVal)
      state.inputVal = "";
      state.flag = false    
    },
    changepMutationsDeleteList(state,params){
      state.historyList.splice(params,1)

    }
  },
  actions: {
    changeActionsFlag({commit},params){
      commit("changepMutationsFlag",params)
    },
    changepActionsOff({commit}){
      commit("changepMutationsOff")
    },
    changepActionsDeleteList({commit},params){
      commit("changepMutationsDeleteList",params)
    }
  },


  namespaced: true
}
