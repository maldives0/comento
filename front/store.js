import Vue from 'vue';
import Vuex from 'vuex';
import throttle from 'lodash.throttle';
import axios from 'axios';
Vue.use(Vuex); // state.$store
// Vue.use(axios); // state.$axios


const totalPosts = 51;
const limit = 10;
export default new Vuex.Store({ // import store from './store';
  state: {
    mainPosts: [],
    hasMorePost: true,
    totalPosts: 51,
    limit: 10,
  }, // vue의 data와 비슷
  getters: {
    // turnMessage(state) {
    //   return state.turn + '님이 승리하셨습니다.';
    // },
  }, // vue의 computed와 비슷
  mutations: {
    loadPosts(state) {
      const diff = state.totalPosts - state.mainPosts.length; // 아직 안 불러온 게시글 수
      const fakePosts = Array(diff > state.limit ? state.limit : diff).fill().map(v => ({
        id: Math.random().toString(),
        title:'Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
        content: 'contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents',
      }));
      state.mainPosts = state.mainPosts.concat(fakePosts);
      state.hasMorePost = fakePosts.length === state.limit;
    },
    // loadPosts(state, payload) {
    //   if (payload.reset) {
    //     state.mainPosts = payload.data;
    //   } else {
    //     state.mainPosts = state.mainPosts.concat(payload.data);
    //   }
    //   state.hasMorePost = payload.data.length === 10;
    // },
  }, // state를 수정할 때, 동기적으로
  //reducer의 역할
  actions: {
    loadPosts({ commit, state }, payload) {
    if (state.hasMorePost) {
      commit('loadPosts');
    }
  } // 비동기를 사용할때, 또는 여러 뮤테이션을 연달아 실행할 때
  },//saga의 역할
});
