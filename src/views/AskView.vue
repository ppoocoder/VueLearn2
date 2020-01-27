<template>
  <div>
      <div v-for="item in ask">{{item.title}}</div>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js';
export default {
  data() { 
    return {
      ask: [] 
    }
  },
  created() { 
    var vm = this;
    fetchAskList() 
      .then(function(reponse){
        vm.ask = reponse.data;
      })
      .catch(function(err){
        console.log(err)
      });
  },

}
</script>

<style>

</style>