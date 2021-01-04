import Vue from 'vue';
import Vuex from 'vuex';
import throttle from 'lodash.throttle';
import axios from 'axios';

Vue.use(Vuex);

axios.defaults.baseURL = 'https://problem.comento.kr/api';
axios.defaults.withCredentials = true;
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;


export default new Vuex.Store({ // import store from './store';
  state: {
    mainPosts: [],
    hasMorePost: true,
    ads: [],
    category: [],
    checkedCategory: [{ "id": 1, "name": "apple" }, { "id": 2, "name": "banana" }, { "id": 3, "name": "coconut" }],
    order: 'asc',
    viewPost: [],
    modalShow: false,
    searchPostsLength: 0,
  }, // vue의 data와 비슷
  mutations: {
    orderChange(state, payload) {
      state.order = payload;
    },
    modalShowChange(state, payload) {
      state.modalShow = payload;
    },

    changeSearchPostsLength(state, payload) {
      state.searchPostsLength = payload.total;
    },
    loadAds(state, payload) {
      if (payload.reset) {
        state.ads = payload.data;
      } else {
        state.ads = state.ads.concat(payload.data);
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
    updateCategory(state, payload) {
      console.log('check', payload);
      state.checkedCategory = payload;
    },
    loadViewPost(state, payload) {
      state.viewPost = payload.data;
    },

  }, // state를 수정할 때, 동기적으로
  actions: {
    loadPosts: throttle(async function ({ commit, state }, payload) {
      try {
        const category_id = state.checkedCategory.map(v => `&category[]=${v.id}`);
        console.log(state.ads.length);
        if (payload && payload.reset) {
          const res = await axios.get(`/list?page=1&ord=${state.order}${category_id.concat().join("")}&limit=10`);

          commit('loadPosts', {
            data: res.data.data,
            reset: true,
          });
          return;
        }
        const lastPage = state.mainPosts.length / 10;
        if (state.hasMorePost) {
          const res = await axios.get(`/list?page=${lastPage + 1}&ord=${state.order}${category_id.concat().join("")}&limit=10`);
          commit('loadPosts', {
            data: res.data.data,
          });
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }, 4500),
    loadAds: throttle(async function ({ dispatch, commit, state }, payload) {
      try {
        if (payload && payload.reset) {
          const res = await axios.get(`/ads?page=1&limit=10`);
          commit('loadAds', {
            data: res.data.data,
            reset: true,
          });
          dispatch('loadPosts', { reset: true });
          return;
        }
        const lastPage = state.mainPosts.length / 10;
        if (state.hasMorePost && state.ads.length === lastPage * 10) {
          const res = await axios.get(`/ads?page=${lastPage + 1}&limit=10`);
          commit('loadAds', {
            data: res.data.data,
          });
          dispatch('loadPosts');
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }, 4500),
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
        const category_id = state.checkedCategory.map(v => `&category[]=${v.id}`);
        if (payload && payload.reset) {
          const res = await axios.get(`/search?value=${payload.value}?page=1&ord=${state.order}${category_id.concat().join("")}&limit=10`);
          commit('loadPosts', {
            data: res.data.data,
            reset: true,
          });
          return;
        }
        const lastPage = state.mainPosts.length / 10;
        if (state.hasMorePost) {
          const res = await axios.get(`/serach?value=${payload.value}?page=${lastPage}&ord=${state.order}${category_id.concat().join("")}&limit=10`);
          commit('loadPosts', {
            data: res.data.data,
          });
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }, 4500),


  }, // 비동기를 사용할때, 또는 여러 뮤테이션을 연달아 실행할 때
});

