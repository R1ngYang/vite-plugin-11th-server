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
    import { provide, ref, watchEffect } from "vue";
    import usePageSize from "../utils/usePageSize";

    export default {
        name: "XiHome",
        components: { XiHeader, XiAside, XiContainer },
        setup() {
            const { width } = usePageSize();
            const smallScreenModel = ref(false);
            watchEffect(() => {
                smallScreenModel.value = width.value < 700;
            });
            provide("smallScreenModel", smallScreenModel);

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
        overflow: hidden;
        position: relative;
    }
</style>
