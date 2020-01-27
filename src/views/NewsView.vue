<template>
<div>
 <p v-for="item in this.$store.state.news">
     <a v-bind:href="item.url">{{ item.title }}</a>
     <small>{{item.time_ago}} by {{item.user}}</small>
 </p>

 </div>


</template>

<script>
import { fetchNewsList} from '../api/index.js';

export default {
//  data() { 
//      return { 
//          users: [] 
//      }
//  },
 created() {
     //vuex 적용 
     this.$store.dispatch('FETCH_NEWS');
    //  console.log('호출 전: ' , this);
    //  var vm = this;
    //  fetchNewsList()
    //  .then(response =>{
    //       console.log(response);
    //       console.log('호출 후 : ', this);
    //     vm.users =response.data;    
    //  }).catch(err=> console.log(err));

 }
}
</script>

<style>

</style>