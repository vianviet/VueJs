<template>
  <main>
    <div>{{title}}</div>
    <AddTodo v-on:addTodoEvent="handleAddTodo" :data="data"></AddTodo>
    <a-progress
      :percent="progress"
      :status="progressStatus"
      size="default"
      :show-info="false"
    />
    <div class="tab">
      <div class="tab__left">{{count}} item left</div>
      <div class="tab__right">
        <button :class="tabActive !== 'All' && 'unactive'" @click="tabActive = 'All'">All</button>
        <button :class="tabActive !== 'Active' && 'unactive'" @click="tabActive = 'Active'">Active</button>
        <button :class="tabActive !== 'Completed' && 'unactive'" @click="tabActive = 'Completed'">Completed</button>
      </div>
    </div>
    <TodoList
      :data="todos"
      @deleteTodoEvent="handleDeteleTodo"
      @changeDataEvent="handleChangeData"
    ></TodoList>
    <div class="footer">
      <button @click="handleDeleteDone">Delete All Done</button>
      <!-- <button @click="syncData">syncData</button> -->
    </div>
  </main>
</template>

<script>
import AddTodo from "../components/todolist/AddTodo.vue";
import TodoList from "../components/todolist/TodoList.vue";

export default {
  
  data() {
    return {
      data: [],
      progressStatus: this.handleStatusProgress,
      percent: 0,
      tabActive : 'All'
    };
  },
  components: { AddTodo, TodoList },
  methods: {
    handleAddTodo(data) {
      this.$store.commit('addTodo',{ name: data, isDone: false });
    },
    handleDeteleTodo(data) {
      this.$store.commit('deleteTodo',data);
      
    },
    handleChangeData(data) {
      this.$store.commit('changeTodos',data);
    },
    handleDeleteDone(){
      this.$store.commit('deleteAllDone')
      // this.$store.dispatch('test')
    },
    syncData() {
      this.$router.replace({name : 'about'})
    }
  },
  computed: {
    progress() {
      return this.$store.getters.progress
    },
    handleStatusProgress() {
      return this.$store.getters.progressStatus
    },
    fillData(){
      
    },
    todos(){
      if(this.tabActive === "Active"){
        return this.$store.getters.active
      }else if(this.tabActive === "Completed"){
        return this.$store.getters.completed
      }else{
        return this.$store.state.todos
      }
    },
    count(){
      return this.$store.getters.countActive
    },
    title(){
      return this.$store.state.TITLE.data
    }
  },
  mounted() {
    this.$watch(
      "data",
      function () {
        console.log('dataaa',this.data)
        this.percent = this.handleProgress;
        this.progressStatus = this.handleStatusProgress;
      },
      { deep: true }
    );
  },
};
</script>
<style type="">
main {
  width: 50vw;
  height: 50vh;
}
.tab{
  display: flex;
  justify-content: space-between;
}
.unactive{
  opacity: 0.3;
}
</style>
