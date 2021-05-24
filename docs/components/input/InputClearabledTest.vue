<template>
    <xi-input clearable v-model="value"></xi-input>
    {{ value }}
    <br />
    <br />

    <div>禁用时、只读时、无内容时不应有清空图标</div>
    <xi-input clearable v-model="value" disabled></xi-input>
    <xi-input clearable v-model="value" readonly></xi-input>
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

const value = ref("")
const inputRef = ref();
const handleClear = () => {
    inputRef.value.clear()
}
</script>

<style scoped>
</style>