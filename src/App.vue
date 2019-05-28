<template>
  <div id="app" class="my-gray-bg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
body{
  background-color: $background_color;
  color: $text_black_color;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, 'Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
