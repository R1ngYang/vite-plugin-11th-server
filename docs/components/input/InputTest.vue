<template>
    <xi-input v-model="value"></xi-input>
    {{ value }}
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { XiInput } from "../11th"
const value = ref("");
</script>

<style scoped>
</style>