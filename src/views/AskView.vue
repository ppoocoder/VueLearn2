<template>
  <div>
    <!-- <div v-for="item in fetchedAsk">{{item.title}}</div> -->
    <!-- <div v-for="item in ask">{{item.title}}</div> -->
      <!-- <div v-for="item in this.$store.state.ask">{{item.title}}</div> -->
    <p v-for="item in fetchedAsk">
      <!-- <a :href="item.url">{{ item.title }}</a> -->
      <router-link v-bind:to="`item/${item.id}`">
      {{ item.title }}</router-link>
      <small>{{item.time_ago}}, {{item.user}}</small>
    </p>
  

  </div>
</template>

<script>
// import {fetchAskList} from '../api/index.js';
import {mapState, mapGetters} from 'vuex'; 
export default {
  // data() { 
  //   return {
  //     ask: [] 
  //   }
  // },
  computed: {
    //#1 
    ...mapGetters({
      fetchedAsk: 'fetchedAsk'
    }),

    //#2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })
    //#3 
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() { 
   this.$store.dispatch("FETCH_ASK");
   // var vm = this;
    // fetchAskList() 
    //   .then(function(reponse){
    //     vm.ask = reponse.data;
    //   })
    //   .catch(function(err){
    //     console.log(err)
    //   });
  },

}
</script>

<style>

</style>