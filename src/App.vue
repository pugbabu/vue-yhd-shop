<template>
  <div id="app">
    <router-view/>
    <footers></footers>
  </div>
</template>

<script>
  import footers from './components/footer/footer'
export default {
  name: 'App',
  components: {
    footers
  }
}
</script>

<style>
  @import './assets/css/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
