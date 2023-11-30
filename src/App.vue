<script>
import AppHeader from "./components/AppHeader.vue"
import AppMainContent from "./components/AppMainContent.vue"
import AppFooter from "./components/AppFooter.vue"
import axios from 'axios';
import { store } from "./components/store"

export default {
  components: {
    AppHeader,
    AppMainContent,
    AppFooter,
    store,
    axios,
  },
  data() {
    return {
      index: 0,
      breweries: [],

    }
  },
  methods: {
    getApiResults() {
      axios.get("https://api.openbrewerydb.org/v1/breweries?by_country=ireland&per_page=10").then(resp => {
        this.breweries = resp.data
        /* this.store.breweries = outcome.data.array */
        console.log(this.breweries);
      })
    }
  },

  mounted() {

    this.getApiResults();
  }
}

</script>

<template>
  <AppHeader />
  <main>
    <div v-for="brewery in breweries">
      <p>{{ brewery.name }}</p>
      <p>{{ brewery.city }}</p>
      <p>{{ brewery.country }}</p>


    </div>
  </main>
  <footer></footer>
</template>

<style scoped></style>
