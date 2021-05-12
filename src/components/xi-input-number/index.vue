<template>
    <xi-input
        v-model="inputValue"
        @blur="handleBlur"
        @update:modelValue="(v) => updateModelValue(v)"
    ></xi-input>
</template>

<script setup lang="ts">
import { XiInput } from "../11th"
import { defineProps, useContext } from "vue"
const { emit } = useContext()

const props = defineProps({
    modelValue: {
        type: [Number],
    },
    min: {
        type: [Number],
    },
    max: {
        type: [Number],
    },
    precision: {
        type: [Number],
        default: () => 0
    }
})

ref: inputValue = props.modelValue as string | number | undefined;

const updateModelValue = (v: string | number | undefined) => {
    const value = parseFloat(v as string);
    const result = isNaN(value) ? undefined : value;
    inputValue = /^(-)?[0-9]*(\.)?[0-9]*$/.test(`${v}`) ? v : result;
    emit('update:modelValue', result)
}

const handleBlur = () => {
    let result = props.modelValue;
    // 处理范围
    if (props.min !== undefined && result !== undefined && result < props.min) {
        result = props.min
    }
    if (props.max !== undefined && result !== undefined && props.max < result) {
        result = props.max
    }

    // 处理精度
    if (result && props.precision) {
        inputValue = result.toFixed(props.precision);
        result = parseFloat(inputValue);
    } else {
        inputValue = result?.toString();
    }

    // 处理NaN
    result = result === undefined || isNaN(result) ? undefined : result;

    emit('update:modelValue', result)

}

</script>

<style scoped>
</style>