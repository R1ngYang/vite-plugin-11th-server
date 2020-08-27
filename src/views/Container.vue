<template>
    <div class="xi-container" :style="asideStyle">
        <router-view />
    </div>
</template>

<script>
    import { computed, ref, inject } from "vue";
    import style from "../style/styleUtil";
    import usePageSize from "../utils/usePageSize";

    export default {
        name: "XiContainer",

        setup() {
            const { width } = usePageSize();
            const asideStyle = computed(() => {
                const smallScreenModel = ref(inject("smallScreenModel"));
                return {
                    "--aside-width":
                        width.value > 700 && !smallScreenModel.value
                            ? style.asideWidth
                            : "0px",
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
        margin: var(--header-height) 0 0 var(--aside-width);
        padding: 10px 0 0 10px;
        float: left;
        overflow: auto;
        transition: margin, width 0.5s, 0.5s ease;
    }
</style>
