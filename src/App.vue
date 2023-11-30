<script>
import AppHeader from "./components/AppHeader.vue"
import AppCard from "./components/AppCard.vue"
import AppFooter from "./components/AppFooter.vue"
import axios from 'axios';
import { store } from "./store.js";

export default {
  components: {
    AppHeader,
    AppCard,
    AppFooter,
    axios,
  },
  data() {
    return {

      store,

    }
  },
  methods: {
    getApiResults() {
      axios.get(this.store.apiLink).then(resp => {
        this.store.breweries = resp.data;

        console.log(this.store.breweries);
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
  <div class="all_cards_wrapper">


    <div class="all_cards">

      <AppCard v-for="brewery in store.breweries" :breweryData="brewery" />
      <!-- <AppCard v-for="brewery in store.breweries" :name="brewery.name" :city="brewery.city" :country="brewery.country" /> -->
      <!--       <p>{{ brewery.name }}</p>
        <p>{{ brewery.city }}</p>
        <p>{{ brewery.country }}</p> -->


    </div>
  </div>
  <footer></footer>
</template>

<style scoped>
.all_cards_wrapper {
  width: 70%;
  margin: 0 auto;
}

.all_cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: rgb(255, 255, 255);
  padding: 2rem 0;
}
</style>
