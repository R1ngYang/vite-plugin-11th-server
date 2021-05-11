<template>
    <xi-input v-model="inputValue" @update:modelValue="(v) => updateModelValue(v)"></xi-input>
</template>

<script setup lang="ts">
import { XiInput } from "../11th"
import { defineProps, useContext } from "vue"
const { emit } = useContext()

const props = defineProps({
    modelValue: {
        type: [Number],
    },
})

ref: inputValue = props.modelValue as string | number | undefined;

const updateModelValue = (v: string | number | undefined) => {
    const result = parseFloat(v as string) || undefined
    inputValue = /^(-)?[0-9]+(\.)?[0-9]*$/.test(`${v}`) ? v : result;
    emit('update:modelValue', result)
}


</script>

<style scoped>
</style>