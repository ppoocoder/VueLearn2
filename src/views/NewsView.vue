<template>
<div>
 <div v-for= "user in users" >{{user.title}}</div>
 </div>
</template>

<script>
import { fetchNewsList} from '../api/index.js';

export default {
 data() { 
     return { 
         users: [] 
     }
 },
 created() {
     console.log('호출 전: ' , this);
     var vm = this;
     fetchNewsList()
     .then(response =>{
          console.log(response);
          console.log('호출 후 : ', this);
        vm.users =response.data;    
     }).catch(err=> console.log(err));

 }
}
</script>

<style>

</style>