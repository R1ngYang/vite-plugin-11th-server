<template>
    <div>{{ width }}</div>
    <div>{{ height }}</div>
</template>

<script>
    import usePageSize from "../utils/usePageSize";

    export default {
        setup() {
            const { width, height } = usePageSize();
            // watchEffect(() => console.log(width.value, height.value));
            return { width, height };
        },
    };
</script>

<style></style>
