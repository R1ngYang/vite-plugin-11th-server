<template>
    <div class="xi-aside">
        <router-link class="xi-aside-router" :to="route.path" v-for="route in routes">
            {{route.name}}
        </router-link>
    </div>
</template>

<script>
    import style from "../style/styleUtil";
    import {computed, inject, ref} from "vue";
    import router from "../router";

    export default {
        name: "XiAside",
        setup() {

            const smallScreenModel = ref(inject("smallScreenModel"));

            const asideStyle = computed(() => {
                style.asideWidth = smallScreenModel.value ? "0px" : style.asideWidth;
                return style;
            });

            const routes = router.options.routes;


            return {
                asideStyle,
                smallScreenModel,

                routes,
            };
        },
    };
</script>

<style vars="asideStyle">

    .xi-aside {
        width: var(--asideWidth);
        height: calc(100% - var(--headerHeight));
        background: var(--background);
        box-shadow: 5px 3px 5px var(--shadowColor);
        float: left;
        overflow: hidden;
        transition: width 0.5s ease;
        position: absolute;
        top: var(--headerHeight);
    }

    .xi-aside-router {
        display: block;
    }
</style>
