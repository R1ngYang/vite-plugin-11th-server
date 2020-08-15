<template>
    <div>
        {{ a }}
        <div style="" class="input-text">
            <xi-input
            :readonly="true"
                @input="change"
                v-model="a"
            ></xi-input>
        </div>
    </div>
</template>
<script>
    import { ref, onUpdated } from "vue";
    import XiInput from "../components/input/XiInput.vue";

    export default {
        components: { XiInput },
        setup() {
            const a = ref(123);

            const change = () => {
            };

            onUpdated(() => {});

            return {
                a,
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
