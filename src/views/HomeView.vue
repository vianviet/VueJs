<template>
  <main>
    <div>Welcome to todo list</div>
    <AddTodo v-on:percentEvent="handlePercent"></AddTodo>
    <a-progress :percent="percent" :status="progressStatus" size="default" :show-info="false" />
    <TodoList></TodoList>
  </main>
</template>

<script>
import AddTodo from '../components/todolist/AddTodo.vue';
import TodoList from '../components/todolist/TodoList.vue';
export default {
    data() {
        return { 
          data: [],
          progressStatus : 'normal',
          percent : 0
        };
    },
    components: { AddTodo, TodoList },
    beforeCreate(){
      this.percent = 90
    },
    created(){
      this.percent = 10
    },
    methods : {
      handlePercent(data){
        this.percent = data
      }
    }
}
</script>
<style >
  main {
    width: 50vw;
    height: 50vh;
  }
</style>
