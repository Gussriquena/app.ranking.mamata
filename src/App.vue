<template>
  <div id="app">
    <Ranking />
  </div>
</template>

<script>
import Ranking from './components/Ranking.vue'

export default {
  name: 'App',
  components: {
    Ranking
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
