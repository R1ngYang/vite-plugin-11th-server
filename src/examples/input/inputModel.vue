<template>
    <div>
        value: {{ value }}
        <xi-input :readonly="true" @input="change" v-model="value"></xi-input>
    </div>
</template>
<script>
    import { ref, onUpdated } from "vue";
    import XiInput from "../../components/input/XiInput.vue";

    export default {
        components: { XiInput },
        setup() {
            const value = ref("xi");
            const change = () => {};

            onUpdated(() => {});

            return {
                value,
                change,
            };
        },
    };
</script>

<style scoped>
    .input-text {
        border: 9px solid #aaaaaa;
    }
</style>
