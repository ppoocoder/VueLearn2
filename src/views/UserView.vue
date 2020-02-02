<template>
  <div>
    <p>{{ userInfo.id}}</p>
    <p>{{ userInfo.karama}}</p>
    <p>{{ userInfo.created}}</p>
    <!-- <p>{{this.$store.state.about}}</p> -->
  </div>
</template>

<script>
export default {
 computed: { 
   userInfo() {
     return this.$store.state.user;
   }
 },

 created() {

   const userName = this.$route.params.id;
   
   this.$store.dispatch('FETCH_USER', userName)
 },



}
</script>

<style>

</style>