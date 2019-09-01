<template>
  <div class="async-data">
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else>
      <div v-if="loading">Loading...</div>
      <h2>Bitcoin Price Index</h2>
      <div v-for="(currency, index) in info"
           :key="index"
           class="currency">
        {{ currency.code }}:
        <span class="lighten">
          <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
        </span>
      </div>
      <div class="refresh">
        <button class="btn"
                @click="getData()">Refresh</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AsyncData',
  data () {
    return {
      title: 'Bitcoin',
      url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
      info: null,
      errorMessage: null,
      errored: false,
      loading: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      this.axios
        .get(this.url)
        .then(response => (this.info = response.data.bpi))
        .catch(error => {
          this.loading = false
          this.errored = true
          this.errorMessage = error
          console.log(errorMessage)
        })
        .finally(() => { this.loading = false })
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  }
}
</script>

<style>
.async-data {
  background-color: hsl(248, 31%, 85%);
  padding: 10px 10px;
  border-radius: 10px;
}
</style>
