<template>
<h1>Hello {{id}}</h1>
</template>

<script>

export default {
    name:'about-detail',
    props : ['id'],
    beforeCreate(){
      this.$router.beforeEach((to,from) => {
  // if(to.name !== 'about'){
  //   return true
  // }
  return false
})
    }
}
</script>

<style>

</style>