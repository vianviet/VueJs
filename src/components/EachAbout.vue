<template>
  <div class="Each">
    <h1>{{data.stt}}</h1>
  <h1>{{data.name}}</h1>
  <button v-on:click="handleDelete">X</button>
  </div>
</template>

<script>
export default {
    name : 'each-about',
    data(){
        return {}
    },
    props : {
        data : Object
    },
    methods: {
        handleDelete(e) {
            this.$emit('deleteContentEvent',this.data.stt)
        }
    }
}
</script>

<style>
.Each{
    display: flex;
    justify-content: space-between;
}
</style>