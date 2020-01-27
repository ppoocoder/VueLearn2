<template>
  <div>
    <div v-for="item in fetchedAsk">{{item.title}}</div>
    <!-- <div v-for="item in ask">{{item.title}}</div> -->
      <!-- <div v-for="item in this.$store.state.ask">{{item.title}}</div> -->
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