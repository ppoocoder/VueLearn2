import {fetchNewsList, fetchAskList , fetchJobsList } from '../api/index.js';


export default {
    FETCH_NEWS(context) { 
            fetchNewsList()
              .then(response=> {
                      console.log(response.data);
                      context.commit('SET_NEWS', response.data);  
              })
              .catch(err => {
                      console.log(err);
              });
    },
    FETCH_ASK(context){
            fetchAskList()
              .then(response => { 
                      console.log(response.data); 
                      context.commit('SET_ASK', response.data);
              })
              .catch(err=> { 
                      console.log(err);
              });
    },
    FETCH_JOBS({commit}) {
            fetchJobsList()
              .then(({data})=> {
                      console.log(data);
                      commit("SET_JOBS", data);
              })
              .catch(err=> console.log(err) );
    },

}