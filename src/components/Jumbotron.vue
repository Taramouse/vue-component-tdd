<template>
  <div class="jumbotron">
    <h1 class="title">{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron',
  props: ['title', 'subtitle'],
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.jumbotron {
  background: #d3d3d3;
  padding: 0.4em 0.4em;
  border-radius: 10px;
  text-align: center;
}
.jumbotron h1 {
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 0.025em;
}
.jumbotron .subtitle {
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.025em;
}
</style>
