<script>

export default {
    name: "AppCard",

    props: [
        "name", "city", "country" // coming from App
    ],

}
</script>

<template>
    <div class="card">
        <!-- <img :src=image alt="card image"> -->
        <h3>{{ name.toUpperCase() }}</h3>
        <p>{{ city }}</p>
        <p>{{ country }}</p>

    </div>
</template>


<style scoped>
.card {
    width: 15rem;
    height: 11rem;
    margin-bottom: 2rem;
}


.card p {
    font-size: 1rem;
    padding-top: 0.5rem;
}
</style>