<template>
    <div class="xi-aside" :style="asideStyle">
        <router-link class="xi-aside-router" to="/"> Home</router-link>
        <router-link class="xi-aside-router" to="/contact"
            >Contact
        </router-link>
        <router-link class="xi-aside-router" to="/text"
            >Text
        </router-link>
        {{ smallScreenModel }}
    </div>
</template>

<script>
    import style from "../style/styleUtil";
    import { computed, inject, ref } from "vue";

    export default {
        name: "XiAside",
        setup() {
            const smallScreenModel = ref(inject("smallScreenModel"));

            const asideStyle = computed(() => {
                const asideWidth = smallScreenModel.value
                    ? "0px"
                    : style.asideWidth;
                return {
                    "--aside-width": asideWidth,
                    "--background": style.asideColor,
                    "--header-height": style.headerHeight,
                    "--shadow-color": style.background,
                };
            });
            return {
                asideStyle,
                smallScreenModel,
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
        float: left;
        overflow: hidden;
        transition: width 0.5s ease;
        position: absolute;
        top: var(--header-height);
    }
    .xi-aside-router {
        display: block;
    }
</style>
