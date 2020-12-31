import Vue from 'vue';
import Vuex from 'vuex';
import throttle from 'lodash.throttle';
import Axios from 'axios';

Vue.use(Vuex); // state.$store

const axios = Axios.create({
  browserBaseURL: process.env.NODE_ENV === 'production' ? 'https://problem.comento.kr/api' : 'http://localhost:8081/',
  baseURL: process.env.NODE_ENV === 'production' ? 'https://problem.comento.kr/api' : 'http://localhost:8081/',
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
  }, // vue의 data와 비슷
  getters: {

  }, // vue의 computed와 비슷
  mutations: {
    loadAds(state, payload) {
      if (payload.reset) {
        state.ads = payload.data;
      } else {
        state.ads = state.ads.concat(payload.data);
      }
    },
    loadPosts(state, payload) {

      if (state.ads) {

        const postsList = Array(10).fill().map((v, i) => {
          if ((i + 1) % 4 !== 0) {
            return payload.data[i];
          } else {//i=4,8
            return state.ads[i];
          }
        });
        state.mainPosts = state.mainPosts.concat(postsList);
        console.log(state.mainPosts);
      } else {
        const postsList = Array(10).fill().map((v, i) => {
          if ((i + 1 + state.mainPosts.length) % 4 !== 0) {
            console.log(i + 1 + state.mainPosts.length);
            return payload.data[i];
          } else {//i=12,16,20
            return state.ads[i];
          }
        });
        state.mainPosts = state.mainPosts.concat(postsList);
      }
      state.hasMorePost = payload.data.length === 10;
    },
    loadCategories(state, payload) {
      state.categories = payload.data;
    },
  }, // state를 수정할 때, 동기적으로
  actions: {
    loadPosts: throttle(async function ({ commit, state }, payload) {
      console.log('loadPosts');
      try {
        if (!payload && state.ads) {
          const res = await axios.get(`/api/list?/api/list?_order=asc&_limit=10`);//json-server용
          // const res = await axios.get(`/api/list?page=1&ord='asc'&category=[1,2,3]&limit=10`);

          commit('loadPosts', {
            data: res.data,
          });
          return;
        }
        if (state.hasMorePost && state.mainPosts) {
          const lastPage = Math.ceil(state.mainPosts[state.mainPosts.length - 1].id / 10);
          console.log('lastPage', lastPage);
          const res = await axios.get(`/api/list?/api/list?_order=asc&_limit=10`);//json-server용
          // const res = await axios.get(`/api/list?page=${lastPage}&ord=${ord}&category=${category}&limit=10`);
          commit('loadPosts', {
            data: res.data,
          });
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }, 2000),
    loadAds: throttle(async function ({ commit, state }, payload) {
      console.log('loadAds');
      try {
        if (payload && payload.reset) {
          const res = await axios.get(`/api/ads?_limit=10`);//json-server용
          // const res = await axios.get(`/api/ads?page=1&limit=10`);

          commit('loadAds', {
            data: res.data,
          });
          return;
        }
        if (state.hasMorePost) {
          const res = await axios.get(`/api/ads?_limit=10`);//json-server용
          // const res = await axios.get(`/api/ads?page=${lastPage}&limit=10`);
          commit('loadAds', {
            data: res.data,
          });
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }, 2000),
    loadCategories({ commit }, payload) {
      axios.get(`/api/category`)
        .then((res) => {
          commit('loadCategories', {
            data: res.data,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },

  }, // 비동기를 사용할때, 또는 여러 뮤테이션을 연달아 실행할 때
});
