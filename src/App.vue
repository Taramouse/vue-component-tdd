<template>
  <div id="app">
    <jumbotron title="Vue TDD Experiments"
               content="This is a Jumbotron component." />
    <async-data />
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron'
import AsyncData from '@/components/AsyncData'

export default {
  name: 'app',
  components: {
    Jumbotron,
    AsyncData
  }
}
</script>

<style>
#app {
  font-family: Arial, "Avenir", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
