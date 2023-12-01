<script>
import AppHeader from "./components/AppHeader.vue"
import AppCard from "./components/AppCard.vue"
import AppFilter from "./components/AppFilter.vue"
import axios from 'axios';
import { store } from "./store.js";

export default {
  components: {
    AppHeader,
    AppCard,
    AppFilter,
    axios,
  },
  data() {
    return {

      store,

    }
  },
  methods: {

    //Function to get Api results 
    getApiResults(selectedType) {
      let filteredApiLink = this.store.apiLink;
      if (selectedType) { // if the selected type is ture and add the followings
        filteredApiLink += (filteredApiLink.includes("?") ? "&" : "?") + `by_type=${selectedType}&per_page=10`;
      }

      //console.log(filteredApiLink);
      // making api requst
      axios.get(filteredApiLink).then((resp) => {
        this.store.breweries = resp.data;
      }).catch((error) => {
        console.error("API Request Error:", error);
      });

    },
    //Functions to get api results with the parameter of selected type by the user
    filterApiResults(selectedType) {
      this.getApiResults(selectedType);
    },


  },
  mounted() {
    this.getApiResults();
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
