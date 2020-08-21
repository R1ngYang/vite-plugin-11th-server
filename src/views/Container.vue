<template>
    <div class="xi-container" :style="asideStyle">
        <router-view />
    </div>
</template>

<script>
    import { computed } from "vue";
    import style from "../style/styleUtil";
    import usePageSize from "../utils/usePageSize";

    export default {
        name: "XiContainer",

        setup() {
            const { width } = usePageSize();
            const asideStyle = computed(() => {
                return {
                    "--aside-width":
                        width.value > 700 ? style.asideWidth : "0px",
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
