<template>
    <div class="xi-home">
        <xi-header></xi-header>
        <xi-aside></xi-aside>
    </div>
</template>

<script>
    import XiHeader from "./Header.vue";
    import XiAside from "./Aside.vue";

    export default {
        name: "XiHome",
        components: { XiHeader, XiAside },
    };
</script>

<style>
    .xi-home {
        width: 100%;
        height: 100%;
    }
</style>
