<template>
    <div class="xi-aside" :style="asideStyle">
        {{asideStyle}}
    </div>
</template>

<script>
    import style from "../style/styleUtil";
    import { computed } from "vue";

    export default {
        name: "XiAside",
        setup() {
            const asideStyle = computed(() => {
                return {
                    "--aside-width": style.asideWidth,
                    "--background": style.asideColor,
                    "--header-height": style.headerHeight,
                    "--shadow-color": style.background,
                };
            });

            return {
                asideStyle,
            };
        },
    };
</script>

<style>
    .xi-aside {
        width: var(--aside-width);
        height: calc(100% - var(--header-height));
        background: var(--background);
        box-shadow: 5px 3px 5px var(--shadow-color);
        
    }
</style>
