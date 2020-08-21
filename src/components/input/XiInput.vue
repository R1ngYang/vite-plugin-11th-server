<template>
    <div ref="mainRef" class="xi-input-main">
        <input
            v-model="inputValue"
            class="xi-input-core"
            :style="{
                '--width': `${mainRef.clientWidth - 20}px`,
                '--height': `${mainRef.clientHeight - 12}px`,
                '--font-size': `${mainRef.clientHeight - 16}px`,
                '--hover-color': styleUtil.hoverColor,
                '--focus-color': styleUtil.focusColor,
                '--active-color': styleUtil.activeColor,
                '--background': styleUtil.background,
            }"
        />
    </div>
</template>

<script>
    import { ref, watch } from "vue";

    import styleUtil from "@/style/styleUtil";
    export default {
        name: "XiInput",

        props: {
            modelValue: [String, Number],
            value: [String, Number],
        },

        setup(props, { emit }) {
            // v-model
            const inputValue = ref(props.value || props.modelValue);
            const resultValue = ref(inputValue.value);
            // const handleInput = (e) => {
            //     console.log(e);
            //     if (e.data) {
            //         resultValue.value += e.data;
            //     }
            // };
            watch(inputValue, (value) => {
                resultValue.value = value;
                emit("update:modelValue", value);
            });

            //
            const mainRef = ref("mainRef");
            watch(mainRef, () => {
            });

            return {
                inputValue,
                mainRef,
                styleUtil,
            };
        },
    };
</script>

<style>
    .xi-input-main {
        width: 200px;
        height: 32px;
        min-height: 22px;
    }
    .xi-input-core {
        width: var(--width);
        height: var(--height);
        font-size: var(--font-size);
        outline: none;
        padding: 4px 8px;
        border: var(--background) 2px solid;
        border-radius: 2px;
    }

    .xi-input-core:hover {
        border: var(--hover-color) 2px solid;
    }
    .xi-input-core:focus {
        border: var(--focus-color) 2px solid;
    }
    .xi-input-core:active {
        border: var(--active-color) 2px solid;
    }
    .xi-input-core:disabled {
        background: rgba(119, 119, 119, 0.06);
    }
</style>
