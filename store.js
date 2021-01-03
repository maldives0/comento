import Vue from 'vue';
import Vuex from 'vuex';
import throttle from 'lodash.throttle';
import axios from 'axios';

Vue.use(Vuex);
// baseURL 기본값
axios.defaults.baseURL = 'https://problem.comento.kr/api';
axios.defaults.withCredentials = true;
// GET 요청에 추가할 헤더 설정
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;


export default new Vuex.Store({ // import store from './store';
  state: {
    mainPosts: [],
    hasMorePost: true,
    ads: [],
    category: [{ "id": 1, "name": "apple" }, { "id": 2, "name": "banana" }, { "id": 3, "name": "coconut" }],
    order: 'asc',
    viewPost: [],
    searchPostsLength: 0,
  }, // vue의 data와 비슷
  getters: {

  }, // vue의 computed와 비슷
  mutations: {
    orderChange(state, payload) {
      state.order = payload;
    },
    searchPostsLengthChange(state, payload) {
      state.searchPostsLength = payload.total;
    },
    loadAds(state, payload) {
      if (payload.reset) {
        state.ads = payload.data;
        state.mainPosts = payload.data;
      } else {
        state.ads = state.ads.concat(payload.data);
        // state.mainPosts = state.mainPosts.concat(payload.data);
      }
    },
    loadPosts(state, payload) {
      if (payload.reset) {
        const postsList = Array(10).fill().map((v, i) => {
          if ((i + 1) % 4 !== 0) {
            return payload.data[i];
          } else {//i=4,8
            return state.ads[i];
          }
        });
        state.mainPosts = postsList;
      } else {
        if (payload.data.length === 10) {
          const postsList = Array(10).fill().map((v, i) => {
            const id = (i + 1 + state.mainPosts.length);
            if (id % 4 !== 0) {
              return payload.data[i];
            } else {//i=12,16,20...           
              return state.ads[id - 1];
            }
          });
          state.mainPosts = state.mainPosts.concat(postsList);
        } else {
          state.mainPosts = state.mainPosts.concat(payload.data);
        }
      }
      state.hasMorePost = payload.data.length === 10;
    },
    loadCategory(state, payload) {
      state.category = payload.data;
    },
    loadViewPost(state, payload) {
      state.viewPost = payload.data;
    },

  }, // state를 수정할 때, 동기적으로
  actions: {
    loadPosts: throttle(async function ({ commit, state }, payload) {
      try {
        const category_id = state.category.map(v => v.id);
        // console.log(Array.isArray(category_id));
        if (payload.reset && state.ads && state.category.length === 3) {
          const res = await axios.get(`/list?page=1&ord=${state.order}&category=${category_id}&limit=10`);
          commit('loadPosts', {
            data: res.data.data,
            reset: true,
          });
          return;
        }
        if (state.hasMorePost) {
          const lastPage = state.mainPosts.length / 10;
          const res = await axios.get(`/list?page=${lastPage}&ord=${state.order}&category=${payload.category}&limit=10`);
          commit('loadPosts', {
            data: res.data.data,
          });
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }, 3000),
    loadAds: throttle(async function ({ commit, state }, payload) {
      try {
        if (payload && payload.reset) {
          const res = await axios.get(`/ads?page=1&limit=10`);
          commit('loadAds', {
            data: res.data.data,
            reset: true,
          });
          return;
        }
        if (state.hasMorePost) {
          const lastPage = state.mainPosts.length / 10;
          const res = await axios.get(`/ads?page=${lastPage}&limit=10`);
          commit('loadAds', {
            data: res.data.data,
          });
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }, 3000),
    async loadCategory({ commit }, payload) {
      try {
        const res = await axios.get(`/category`)
        commit('loadCategory', {
          data: res.data.category,
        });
      } catch (err) {
        console.error(err);
      }
    },
    async loadViewPost({ commit }, payload) {
      try {
        const res = await axios.get(`/view?id=${payload.postId}`);
        commit('loadViewPost', {
          data: res.data.data,
        });
      } catch (err) {
        console.error(err);
      }
    },
    searchPosts: throttle(async function ({ commit, state }, payload) {
      try {
        if (payload.reset && state.ads) {
          const res = await axios.get(`/search?value=${payload.value}?page=1&ord=${state.order}&category=[1,2,3]&limit=10`);
          commit('loadPosts', {
            data: res.data.data,
            reset: true,
          });
          commit('searchPostsLengthChange', {
            total: 21,
          });
          return;
        }
        if (state.hasMorePost) {
          const lastPage = state.mainPosts.length / 10;
          const res = await axios.get(`/serach?value=${payload.value}?page=${lastPage}&ord=${state.order}&category=${payload.category}&limit=10`);
          commit('loadPosts', {
            data: res.data.data,
          });
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }, 3000),


  }, // 비동기를 사용할때, 또는 여러 뮤테이션을 연달아 실행할 때
});

