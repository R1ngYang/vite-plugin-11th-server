<template>
    <div id="app">
        <xi-home></xi-home>
        <!-- <div id="nav">
            <router-link to="/"> Home</router-link>
            <router-link to="/contact">Contact </router-link>
        </div>
        <router-view /> -->
    </div>
</template>

<script>
    import XiHome from "./views/Home.vue";

    export default {
        components: { XiHome },
        name: "App",
    };
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
    }
</style>
