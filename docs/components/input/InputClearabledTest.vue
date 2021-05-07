<template>
    <xi-input clearable v-model="value"></xi-input>
    {{ value }}
    <br />
    <br />
    <div>使用清空函数</div>
    <xi-input v-model="value" ref="inputRef"></xi-input>
    <xi-button type="primary" @click="handleClear">清空</xi-button>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { XiInput } from "../11th"
import { XiButton } from "../11th"

ref: value = ""
const inputRef = ref();
const handleClear = () => {
    inputRef.value.clear()
}
</script>

<style scoped>
</style>