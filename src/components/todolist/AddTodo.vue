<template>
    <div class="add-todo">
        <a-input
        placeholder="Please input your todo"
        v-on:change="handleChange"
        v-on:keydown="handleEnterSubmit"
      />
      <a-button type="primary" @click="submit">
        Add
      </a-button>
    </div>
</template>

<script>
export default {
 data() {
    return {
        input : ''
    };
  },
  methods : {
    submit() {
        this.$emit('percentEvent',this.input)
    },
    handleChange(e){
        this.input = e.target.value
    },
    handleEnterSubmit(e){
        if(e.code === 'Enter'){
            this.submit()
        }
    }
  }
}
</script>

<style>
 .add-todo{
    display: flex;
    gap : 20px;
 }
</style>