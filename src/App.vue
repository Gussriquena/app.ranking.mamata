<template>
  <div id="app">
    <Parlamentares />
  </div>
</template>

<script>
import Parlamentares from './components/Parlamentares.vue'

export default {
  name: 'App',
  components: {
    Parlamentares
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
