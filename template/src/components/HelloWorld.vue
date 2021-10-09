<template>
  <div class="hello">
    <p id="msg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 's-hello-world',
  data() {
    return {
      msg: 'Welcome to Your new Project'
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
#msg {
  color: green;
}
</style>
