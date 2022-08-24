
<template>
  <div class="about">
    <h1>{{title}}</h1> 
    <AboutContentVue v-bind:content="content" v-on:deleteContentEvent="handleDelete"></AboutContentVue>
  </div>
</template>

<script>
import AboutContentVue from '../components/AboutContent.vue';
  export default {
    name : 'about',
    data() {
      return {
        title : 'This is a title',
        content : [{stt : 1, name : 'Mot'}, {stt : 2, name : 'Hai'}, {stt : 3, name : 'Ba'}]
      }
    },
    components : {
      AboutContentVue
    },
    methods: {
      handleDelete (data) {
        this.content = this.content.filter((each) => each.stt !== data)
      }
    }
  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 100%;
  }
}
</style>
