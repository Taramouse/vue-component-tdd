<template>
  <div class="jumbotron">
    <h1 class="title">{{ title }}</h1>
    <p class="content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron',
  props: ['title', 'content'],
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
  margin: 2vh 5vw;
  padding: 2em 2em;
  border-radius: 10px;
  text-align: center;
}
.jumbotron h1 {
  font-weight: 400;
  font-size: 2.5rem;
  letter-spacing: 0.1em;
}
.jumbotron .content {
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 0.1em;
}
</style>
