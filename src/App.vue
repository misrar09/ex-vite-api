<script>
import AppHeader from "./components/AppHeader.vue"
import AppCard from "./components/AppCard.vue"
import AppFooter from "./components/AppFooter.vue"
import AppFilter from "./components/AppFilter.vue"
import axios from 'axios';
import { store } from "./store.js";

export default {
  components: {
    AppHeader,
    AppCard,
    AppFooter,
    AppFilter,
    axios,
  },
  data() {
    return {

      store,

    }
  },
  methods: {
    filterApiResults(selectedType) {
      this.getApiResults(selectedType);
    },

    getApiResults(selectedType) {
      let filteredApiLink = this.store.apiLink;
      if (selectedType) {
        filteredApiLink += (filteredApiLink.includes("?") ? "&" : "?") + `by_type=${selectedType}&per_page=10`;
      }

      //console.log(filteredApiLink);

      axios.get(filteredApiLink).then((resp) => {
        this.store.breweries = resp.data;
      }).catch((error) => {
        console.error("API Request Error:", error);
      });


    },
  },
  mounted() {
    this.getApiResults(this.store.selectedItem);
  },
}

</script>

<template>
  <AppHeader />
  <AppFilter @search="filterApiResults" />
  <div class="all_cards_wrapper">
    <div class="all_cards">

      <AppCard v-for="brewery in store.breweries" :breweryData="brewery" />
      <!-- <AppCard v-for="brewery in store.breweries" :name="brewery.name" :city="brewery.city" :country="brewery.country" /> -->

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
