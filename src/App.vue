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


    }
  }
}

</script>

<template>
  <AppHeader />
  <main></main>
  <footer></footer>
</template>

<style scoped></style>
