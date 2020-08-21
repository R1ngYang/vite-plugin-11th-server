<template>
    <div class="xi-container" :style="asideStyle">
        <router-view />
    </div>
</template>

<script>
    import { computed } from "vue";
    import style from "../style/styleUtil";
    export default {
        name: "XiContainer",

        setup() {
            const asideStyle = computed(() => {
                return {
                    "--aside-width": style.asideWidth,
                    "--header-height": style.headerHeight,
                };
            });

            return {
                asideStyle,
            };
        },
    };
</script>

<style>
    .xi-container {
        width: calc(100% - var(--aside-width) - 10px);
        height: calc(100% - var(--header-height) - 10px);
        padding: 10px 0 0 10px;
        float: left;
        overflow: auto;
    }
</style>
