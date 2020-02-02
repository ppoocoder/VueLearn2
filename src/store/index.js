import Vue  from 'vue';
import Vuex from 'vuex';
// import {fetchNewsList, fetchAskList , fetchJobsList } from '../api/index.js';
import mutations from './mutations.js';
import actions  from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { 
         news: [], 
         ask:[],
         jobs:[],
         user:{},
         item:{},
    },
    getters: {
      fetchedAsk(state){
              return state.ask;
      },
      fetchedItem(state) { 
              return state.item;
      }      
    },
    // store 속성 모듈화 
    mutations
//     mutations: mutations 


    //     { 
        // SET_NEWS(state, news) {
        //   state.news = news;
        // },
        // SET_ASK(state, ask){
        //   state.ask = ask;
        // },
        // SET_JOBS(state, jobs){
        //   state.jobs = jobs;
        // }
//     }
    ,
    actions
//      {
//             FETCH_NEWS(context) { 
//                     fetchNewsList()
//                       .then(response=> {
//                               console.log(response.data);
//                               context.commit('SET_NEWS', response.data);  
//                       })
//                       .catch(err => {
//                               console.log(err);
//                       });
//             },
//             FETCH_ASK(context){
//                     fetchAskList()
//                       .then(response => { 
//                               console.log(response.data); 
//                               context.commit('SET_ASK', response.data);
//                       })
//                       .catch(err=> { 
//                               console.log(err);
//                       });
//             },
//             FETCH_JOBS({commit}) {
//                     fetchJobsList()
//                       .then(({data})=> {
//                               console.log(data);
//                               commit("SET_JOBS", data);
//                       })
//                       .catch(err=> console.log(err) );
//             },
        
//     }
});

