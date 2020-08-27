<template>
    <div>
        <xi-button  @click="handleClick">按钮1</xi-button>
    </div>
</template>

<script>
    import XiButton from "../../components/button/XiButton.vue";

    export default {
        name: "ButtonModel",
        components: { XiButton },
        setup(props, { emit }) {
            const handleClick = (e) => {
                console.log(e)
            };

            return {
                handleClick,
            };
        },
    };
</script>

<style></style>
