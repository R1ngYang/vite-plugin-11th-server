<template>
    <div class="xi-home">
        <xi-header @screen-model-change="screenModelChange"></xi-header>
        <xi-aside></xi-aside>
        <xi-container>></xi-container>
    </div>
</template>

<script>
    import XiHeader from "./Header.vue";
    import XiAside from "./Aside.vue";
    import XiContainer from "./Container.vue";
    import { onMounted, provide, ref } from "vue";
    export default {
        name: "XiHome",
        components: { XiHeader, XiAside, XiContainer },
        setup() {
            let smallScreenModel = ref(false);
            provide("smallScreenModel", smallScreenModel);
            onMounted(() => {
                smallScreenModel.value = document.body.clientWidth < 700;
            });
            window.onresize = () => {
                smallScreenModel.value = document.body.clientWidth < 700;
            };

            const screenModelChange = () => {
                smallScreenModel.value = !smallScreenModel.value;
            };

            return {
                screenModelChange,
            };
        },
    };
</script>

<style>
    .xi-home {
        width: 100%;
        height: 100%;
    }
</style>
