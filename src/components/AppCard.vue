<script>

export default {
    name: "AppCard",

    props: [
        // "name", "city", "country" // coming from App
        "breweryData",
    ],

}
</script>

<template>
    <div class="card">
        <!--         <h3>{{ name.toUpperCase() }}</h3>
        <p>{{ city }}</p>
        <p>{{ country }}</p> -->
        <ul>
            <li v-for="(value, key) in breweryData">
                <strong>{{ key }}:</strong> {{ value }}
            </li>
        </ul>

    </div>
</template>


<style scoped>
.card {
    width: 20rem;
    height: 20rem;
    margin-bottom: 2rem;
    background-color: teal;
}

li {
    list-style: none;
    padding: 0.2rem 0.8rem;
    font-size: 0.7rem;
}

.card p {
    font-size: 0.5rem;
    padding-top: 0.5rem;
}
</style>