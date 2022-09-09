<template>
  <div class="add-todo">
    <a-form-item :help="errorMessage">
      <a-input
        :class="isError && 'error'"
        placeholder="What needs to be done?"
        @change="handleChange"
        @pressEnter="handleEnterSubmit"
        :value="input"
      />
    </a-form-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      isError: false,
      errorMessage: "",
    };
  },
  methods: {
    submit() {
      if (this.input === "") {
            this.isError = true;
            this.errorMessage = "Please input before submit"
          }
      if (!this.isError) {
        this.$emit("addTodoEvent", this.input);
        this.input = "";
      } 
    },
    handleChange(e) {
      this.isError = false;
      this.errorMessage = ""
      this.input = e.target.value;
    },
    handleEnterSubmit(e) {
      this.submit();
    },
    existTodo(name) {},
  },
  mounted() {},
};
</script>

<style scoped>
.add-todo {
  display: flex;
  gap: 20px;
  width: 100%;
}
.ant-row {
  width: 100%;
  
}
.error {
  border-color: red !important;
}
.ant-form-item-with-help .ant-form-item-explain {
  color: red !important;
}
.ant-input{
  padding: 5px 100px!important;
  height: 40px;
  border-bottom: 5px solid  gainsboro;
}
</style>