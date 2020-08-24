<template>
    <div class="xi-header" :style="headerStyle">
        <img
            src="../assets/logo.png"
            :width="headerImgSize.width"
            :height="headerImgSize.height"
            style="padding:5px"
            @click="handleImgClick"
        />
    </div>
</template>

<script>
    import style from "../style/styleUtil";
    import { reactive, computed } from "vue";

    export default {
        name: "XiHeader",
        setup(props, { emit }) {
            const headerStyle = computed(() => {
                return {
                    "--background": style.headerColor,
                    "--height": style.headerHeight,
                    "--shadow-color": style.background,
                };
            });

            const headerImgSize = reactive({
                width: parseInt(style.headerHeight) - 10,
                height: parseInt(style.headerHeight) - 10,
            });

            const handleImgClick = (e) => {
                emit("screen-model-change", e);
            };

            return {
                headerStyle,
                headerImgSize,
                handleImgClick,
            };
        },
    };
</script>

<style>
    .xi-header {
        width: 100%;
        height: 100%;
        background: var(--background);
        height: var(--height);
        box-shadow: 0px 0px 5px var(--shadow-color);
        position: absolute;
        top: 0;
    }
</style>
