<template>
    <div class="add-todo">
        <a-input
        placeholder="Please input your todo"
      />
      <a-button type="primary" @click="check">
        Check
      </a-button>
    </div>
</template>

<script>
export default {
 data() {
    return {

    };
  },
  methods : {
    check() {
        console.log('ok')
    },
  }
}
</script>

<style>
 .add-todo{
    display: flex;
    gap : 20px;
 }
</style>