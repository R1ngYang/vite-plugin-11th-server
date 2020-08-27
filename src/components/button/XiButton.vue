<template>
    <div class="xi-button-main" @click="handleClick">
        <div class="xi-button-core">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "XiButton",
        setup(props, { emit }) {
            const handleClick = (e) => {
                emit("click", e);
            };

            return {
                handleClick,
            };
        },
    };
</script>

<style scoped>
    .xi-button-main {
        width: 56px;
        height: 32px;
        line-height: 32px;
        text-align: center;
    }
    .xi-button-core {
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        border: 2px solid red;
        border-radius: 4px;
    }
</style>
