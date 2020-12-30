import Vue from 'vue';
import Vuex from 'vuex';
import throttle from 'lodash.throttle';
Vue.use(Vuex); // this.$store
Vue.use(axios); // this.$axios


const totalPosts = 51;
const limit = 10;
export default new Vuex.Store({ // import store from './store';
  state: {
    mainPosts: [],
    hasMorePost: true,
  }, // vue의 data와 비슷
  getters: {
    // turnMessage(state) {
    //   return state.turn + '님이 승리하셨습니다.';
    // },
  }, // vue의 computed와 비슷
  mutations: {
    //   [CLICK_CELL](state, { row, cell }) {
    //   Vue.set(state.tableData[row], cell, state.turn);
    // },
    loadPosts(state) {
      const diff = totalPosts - state.mainPosts.length; // 아직 안 불러온 게시글 수
      const fakePosts = Array(diff > limit ? limit : diff).fill().map(v => ({
        id: Math.random().toString(),
      }));
      state.mainPosts = state.mainPosts.concat(fakePosts);
      state.hasMorePost = fakePosts.length === limit;
    },
    // loadPosts(state, payload) {
    //   if (payload.reset) {
    //     state.mainPosts = payload.data;
    //   } else {
    //     state.mainPosts = state.mainPosts.concat(payload.data);
    //   }
    //   state.hasMorePost = payload.data.length === 10;
    // },
  }, // state를 수정할 때 사용해요. 동기적으로
  actions: {
    loadPosts({ commit, state }, payload) {
      if (state.hasMorePost) {
        commit('loadPosts');
      }
    },
    // loadPosts: throttle(async function ({ commit, state }, payload) {
    //   console.log('loadPosts');
    //   try {
    //     if (payload && payload.reset) {
    //       const res = await this.$axios.get(`/posts?limit=10`);
    //       commit('loadPosts', {
    //         data: res.data,
    //         reset: true,
    //       });
    //       return;
    //     }
    //     if (state.hasMorePost) {
    //       const lastPost = state.mainPosts[state.mainPosts.length - 1];
    //       const res = await this.$axios.get(`/posts?lastId=${lastPost && lastPost.id}&limit=10`);
    //       commit('loadPosts', {
    //         data: res.data,
    //       });
    //       return;
    //     }
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }, 2000),
    // loadUserPosts: throttle(async function ({ commit, state }, payload) {
    //   try {
    //     if (payload && payload.reset) {
    //       const res = await this.$axios.get(`/user/${payload.userId}/posts?limit=10`);
    //       commit('loadPosts', {
    //         data: res.data,
    //         reset: true,
    //       });
    //       return;
    //     }
    //     if (state.hasMorePost) {
    //       const lastPost = state.mainPosts[state.mainPosts.length - 1];
    //       const res = await this.$axios.get(`/user/${payload.userId}/posts?lastId=${lastPost && lastPost.id}&limit=10`);
    //       commit('loadPosts', {
    //         data: res.data,
    //       });
    //       return;
    //     }
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }, 2000),
  }, // 비동기를 사용할때, 또는 여러 뮤테이션을 연달아 실행할 때
});
