<template>
    <div class="add-todo">
      <a-form-item :help="isError && errorMessage">
        <a-input
        :class="isError && 'error'"
        placeholder="Please input your todo"
        v-on:change="handleChange"
        @pressEnter="handleEnterSubmit"
        :value="input"
      />
      </a-form-item>
      <a-button type="primary" @click="submit">
        Add
      </a-button>
    </div>
</template>

<script>
export default {
 data() {
    return {
        input : '',
        isError : true,
        errorMessage : ''
    };
  },
  methods : {
    submit() {
        if(!this.isError){
          this.$emit('addTodoEvent',this.input)
        this.input = ''
        }
    },
    handleChange(e){
        this.input = e.target.value
    },
    handleEnterSubmit(e){
            this.submit()
    },
    existTodo(name){
      
    }
  },
  mounted(){
    this.$watch('input',() => {
      if(this.input === ''){
        this.isError = true
      }else{
        this.isError = false
      }
    })
  }
}
</script>

<style>
 .add-todo{
    display: flex;
    gap : 20px;
 }
 .error {
  
  border-color: red !important;;
 }
 .ant-form-item-with-help .ant-form-item-explain{
color: red!important;;
 }
</style>