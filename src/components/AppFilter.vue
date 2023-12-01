<script>

import { store } from "../store.js";

export default {
    name: "AppFilter",
    components: {

    },
    data() {
        return {
            store,

        };
    },
    methods: {

        filterApiType() {
            this.$emit("search", this.store.selectedItem) // Emit the search with the selected  type by the user

            //console.log(this.store.selectedItem)
        },
    },
    emits: ["search"], // // Declare the "search" event for better handling. otherwise there is a warning
};

</script>

<template>
    <label for="list">Select from the list:</label>
    <select name="nano" id="list" v-model="this.store.selectedItem" @change="filterApiType">
        <option value="micro">Micro</option>
        <option value="nano">Nano</option>
        <option value="regional">Regional</option>
        <option value="brewpub">Brewpub</option>
        <option value="large">Large</option>
        <option value="planning">Planning</option>
        <option value="bar">Bar</option>
        <option value="contract">Contract</option>
        <option value="proprietor">Proprietor</option>
        <option value="closed">Closed</option>
    </select>
</template>

<style scoped></style>