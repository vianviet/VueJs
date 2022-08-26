<template>
  <div class="list-todo">
    <TodoItem v-for="(item,index) in data" :key="index" :item="item" :index="index" @deleteTodoEvent="handleDelete" @changeItemEvent="handleChangeItem"></TodoItem>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    name: "todo-list",
    data() {
        return {};
    },
    props: {
        data: Array
    },
    components: { TodoItem },
    methods : {
      handleDelete(data){
        this.$emit('deleteTodoEvent',data)
      },
      handleChangeItem(data){
        const newData = this.data.map((each, index) => {
          if(index === data.index){
            return data.data
          }else{
            return each
          }
        })
        this.$emit('changeDataEvent', newData)
      }
    }
}
</script>

<style>
 .list-todo{
  display: flex;
  flex-direction: column;
 }
</style>