
<template>
<div class="content">
    <EachAboutVue v-for="(each,index) in content"  v-bind:data="each" v-bind:key="index" v-on:deleteContentEvent="handleDelete"></EachAboutVue>
</div>
</template>

<script>
import EachAboutVue from './EachAbout.vue';
export default {
    name : 'about-content',
    data() {
        return {}
    },
    props: {
        content : Array
    },
    components : {
        EachAboutVue
    },
    methods : {
        handleDelete (data)  {
            this.$emit('deleteContentEvent',data)
        }
    }
    
}
</script>

<style>
.content{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}
</style>