<template>
  <div id="app">
    <header class="header">
      <jumbotron title="Vue TDD Experiments"
                 subtitle="This is a Jumbotron component." />

    </header>
    <main class="main">
      <async-data />
    </main>

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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #2c3e50;
  margin: 0 100px;
}
h1,
h2 {
  font-weight: 400;
}
.header {
  width: 600px;
  margin-bottom: 10px;
}
.main {
  width: 600px;
}
</style>
