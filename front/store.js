import Vue from 'vue';
import Vuex from 'vuex';
import throttle from 'lodash.throttle';
import Axios from 'axios';

Vue.use(Vuex); // state.$store

const axios = Axios.create({
  browserBaseURL: process.env.NODE_ENV === 'production' ? 'https://problem.comento.kr/api' : 'http://localhost:8081/api',
  baseURL: process.env.NODE_ENV === 'production' ? 'https://problem.comento.kr/api' : 'http://localhost:8081/api',
  https: false,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
Vue.use(axios); // state.$axios

export default new Vuex.Store({ // import store from './store';
  state: {
    mainPosts: [],
    hasMorePost: true,
    ads: [],
    categories: [],
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
    loadCategories(state, payload) {
      state.categories = payload.data;
    },
    loadViewPost(state, payload) {
      state.viewPost = payload.data;
    },

  }, // state를 수정할 때, 동기적으로
  actions: {
    loadPosts: throttle(async function ({ commit, state }, payload) {
      try {
        if (payload.reset && state.ads) {
          //json-server용
          const res = await axios.get(`/list?_order=${this.order}&_limit=10`);
          // const res = await axios.get(`/list?page=1&ord=${this.order}&category=[1,2,3]&limit=10`);
          commit('loadPosts', {
            data: res.data,
            reset: true,
          });
          return;
        }
        if (state.hasMorePost) {
          const lastPage = state.mainPosts.length / 10;
          //json-server용
          const res = await axios.get(`/list?_start=${lastPage * 10}&_order=${this.order}&_limit=10`);
          // const res = await axios.get(`/list?page=${lastPage}&ord=${this.order}&category=${payload.category}&limit=10`);
          commit('loadPosts', {
            data: res.data,
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
          //json-server용
          const res = await axios.get(`/ads?_limit=10`);
          // const res = await axios.get(`/ads?page=1&limit=10`);
          commit('loadAds', {
            data: res.data,
            reset: true,
          });
          return;
        }
        if (state.hasMorePost) {
          const lastPage = state.mainPosts.length / 10;
          //json-server용
          const res = await axios.get(`/ads?_start=${lastPage * 10}&_limit=10`);
          // const res = await axios.get(`/ads?page=${lastPage}&limit=10`);
          commit('loadAds', {
            data: res.data,
          });
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }, 3000),
    async loadCategories({ commit }, payload) {
      try {
        const res = await axios.get(`/category`)
        commit('loadCategories', {
          data: res.data,
        });
      } catch (err) {
        console.error(err);
      }
    },
    async loadViewPost({ commit }, payload) {
      try {
        const res = await axios.get(`/view/${payload.postId || ''}`);
        commit('loadViewPost', {
          data: res.data,
        });
      } catch (err) {
        console.error(err);
      }
    },
    searchPosts: throttle(async function ({ commit, state }, payload) {
      try {
        if (payload.reset && state.ads) {
          //json-server용
          const res = await axios.get(`/search?_limit=10`);
          //const res = await axios.get(`/search/${payload.value}?page=1&ord=${this.order}&category=[1,2,3]&limit=10`);
          commit('loadPosts', {
            data: res.data,
            reset: true,
          });
          commit('searchPostsLengthChange', {
            total: 21,
          });
          return;
        }
        if (state.hasMorePost) {
          const lastPage = state.mainPosts.length / 10;
          //json-server용
          const res = await axios.get(`/search?_start=${lastPage * 10}&_order=${this.order}&_limit=10`);
          //const res = await axios.get(`/serach/${payload.value}?page=${lastPage}&ord=${this.order}&category=${payload.category}&limit=10`);
          commit('loadPosts', {
            data: res.data,
          });
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }, 3000),


  }, // 비동기를 사용할때, 또는 여러 뮤테이션을 연달아 실행할 때
});
