
import { getNowMovie, getMoreMovie } from "@/api/api.js";
export default {
  state: {
    getNowMovie: [],
    allMovieId: [],
    movieIds: "",
    pageNum: 2,
    num: 12
  },
  mutations: {
    getMutationNowMovie(state, params) {
      state.getNowMovie = params.movieList;
      state.allMovieId = params.id;

      if (state.allMovieId) {
        let arr = [];
        for (var i = (state.pageNum - 2) * 10 + state.num; i <Math.min((state.pageNum - 1) * 10 + state.num,state.allMovieId.length) ; i++) {
          arr.push(state.allMovieId[i])
        }
        let str = arr.join("%2C");
        state.movieIds = str;
      }

    },
    getMutationMoreMovie(state, params) {
      state.getNowMovie = [...state.getNowMovie, ...params];

      if (state.movieIds) {
        // state.pageNum++
        let arr = [];
        for (var i = (state.pageNum - 2) * 10 + state.num; i < (state.pageNum - 1) * 10 + state.num; i++) {
          arr.push(state.allMovieId[i])
        }
        let str = arr.join("%2C");
        state.movieIds = str;

      }
    },
  },
  actions: {
    async getActionNowMovie({ commit },id) {
      let data = await getNowMovie(id);
      commit("getMutationNowMovie", { id: data.movieIds, movieList: data.movieList });
      // console.log(data.movieList)
      // console.log(data.movieIds)
      // console.log(this.state.movie)
    },
    async getActionMoreMovie({ commit }) {
      console.log(this.state.movie.movieIds)
      if (this.state.movie.movieIds) {

        let data = await getMoreMovie(this.state.movie.movieIds);

        commit("getMutationMoreMovie", data.coming);

      }
    },
  },
  namespaced: true
}
