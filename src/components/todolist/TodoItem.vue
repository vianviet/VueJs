<template>
  <div class="list-todo-item">
    <a-checkbox v-model:checked="item.isDone" @change="handleChange">
    <div v-if="!isEdit">{{item.name}}</div>
    <a-input v-if="isEdit" :key="item.name" :defaultValue="item.name" @change="onChange" @pressEnter="handleEdit" />
    </a-checkbox>
    <div class="button">
        <button v-if="isEdit" class="button-edit" @click="() => { isEdit = false; handleEdit()}">
        Yes
      </button>
      <button v-if="isEdit" class="button-edit" @click="isEdit = false">
        No
      </button>
      <button v-if="!isEdit" class="button-edit" @click="isEdit = true">
        Edit
      </button>
      <button v-if="!isEdit" class="button-delete" @click="handleDelete">Delete</button>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
        input : '',
        isEdit: false,
}
    },
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    handleDelete() {
      this.$emit("deleteTodoEvent", this.item.name);
    },
    handleChange(e) {
      this.$emit("changeItemEvent", {
        name: this.item.name,
        isDone: e.target.checked,
      });
    },
    handleEdit(){
      if(this.input !== ''){
        this.$emit("changeItemEvent", {index : this.index, data : {
            name: this.input,
            isDone: this.item.isDone,
      }});
      this.isEdit = false
      }
    },
    onChange(e) {
        this.input = e.target.value
    }
  },
};
</script>

<style>
.list-todo-item {
  display: flex;
  justify-content: space-between;
}
.button-delete {
  color: red;
}
</style>