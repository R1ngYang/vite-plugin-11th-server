<template>
    <div id="app">
        <xi-home></xi-home>
        
    </div>
</template>

<script>
    import XiHome from "./views/Home.vue";

    export default {
        components: { XiHome },
        name: "App",
    };
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
    }


    /* 滚动条宽度 */
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    /* 滚动条的滑轨背景颜色 */
    ::-webkit-scrollbar-track {
        background-color: #b46868;
    }


    /* 滑块颜色 */
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: red;
    }

    /* 滑轨两头的监听按钮颜色 */
    ::-webkit-scrollbar-button {
        background-color: #7c2929;
    }


    /* 滑轨交界点 */
    ::-webkit-scrollbar-corner {
        background-color: black;
    }
</style>
