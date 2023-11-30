<script>
import AppHeader from "./components/AppHeader.vue"
import AppCard from "./components/AppCard.vue"
import AppFooter from "./components/AppFooter.vue"
import axios from 'axios';
import { store } from "./components/store";

export default {
  components: {
    AppHeader,
    AppCard,
    AppFooter,
    store,
    axios,
  },
  data() {
    return {
      breweries: [],

    }
  },
  methods: {
    getApiResults() {
      axios.get("https://api.openbrewerydb.org/v1/breweries?by_country=ireland&per_page=10").then(resp => {
        this.breweries = resp.data;

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
  <AppCard v-for="brewery in breweries" :name="brewery.name" :city="brewery.city" :country="brewery.country" />
  <div>
    <!--       <p>{{ brewery.name }}</p>
      <p>{{ brewery.city }}</p>
      <p>{{ brewery.country }}</p> -->


  </div>
  <footer></footer>
</template>

<style scoped></style>
