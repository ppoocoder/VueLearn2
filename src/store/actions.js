import {fetchNewsList, fetchAskList , fetchJobsList, fetchUserInfo, fetchCommandItem } from '../api/index.js';


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

    FETCH_USER(context, name) { 
            fetchUserInfo(name)
            .then(response=>{
                    console.log(response.data);
                    context.commit('SET_USER', response.data);
            })
            .catch(err=> console.log(err));
    },

    FETCH_ITEM({commit}, id){
            fetchCommandItem(id)
            .then(({data})=> {
                    console.log(data);
                    commit('SET_ITEM', data);
            })
            .catch(err=>console.log(err));
    },



}