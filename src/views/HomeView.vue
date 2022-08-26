<template>
  <main>
    <div>Welcome to todo list</div>
    <AddTodo v-on:addTodoEvent="handleAddTodo" :data="data"></AddTodo>
    <a-progress
      :percent="percent"
      :status="progressStatus"
      size="default"
      :show-info="false"
    />
    <div class="tab">
      <div class="tab__left">{{this.data.filter((each) => !each.isDone).length}} item left</div>
      <div class="tab__right">
        <button :class="tabActive !== 'All' && 'unactive'" @click="tabActive = 'All'">All</button>
        <button :class="tabActive !== 'Active' && 'unactive'" @click="tabActive = 'Active'">Active</button>
        <button :class="tabActive !== 'Completed' && 'unactive'" @click="tabActive = 'Completed'">Completed</button>
      </div>
    </div>
    <TodoList
      :data="fillData"
      @deleteTodoEvent="handleDeteleTodo"
      @changeDataEvent="handleChangeData"
    ></TodoList>
    <div class="footer">
      <button @click="handleDeleteDone">Delete All Done</button>
      <button @click="syncData">syncData</button>
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
      this.data.push({ name: data, isDone: false });
    },
    handleDeteleTodo(data) {
      this.data = this.data.filter((each) => {
        return each.name !== data;
      });
    },
    handleChangeData(data) {
      this.data = data;
    },
    handleDeleteDone(){
      this.data = this.data.filter((each) => !each.isDone)
    },
    syncData() {
    }
  },
  computed: {
    handleProgress() {
      const isDoneData = this.data.filter((each) => each.isDone);
      return isDoneData.length === 0
        ? 0
        : (isDoneData.length / this.data.length) * 100;
    },
    handleStatusProgress() {
      const isDoneData = this.data.filter((each) => each.isDone)
      if(isDoneData.length/this.data.length === 1){
        return "success"
      }else{
        return "normal"
      }
    },
    fillData(){
      if(this.tabActive === "Active"){
        return this.data.filter((each) => !each.isDone)
      }else if(this.tabActive === "Completed"){
        return this.data.filter((each) => each.isDone)
      }else{
        return this.data
      }
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
<style >
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
