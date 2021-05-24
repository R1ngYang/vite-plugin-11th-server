<template>
    <div>
        <xi-input-number class="xi-input-number-core" v-model="value" :min="0" :max="99"></xi-input-number>
        {{ value }}
    </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { XiInputNumber } from "../11th"
const value = ref(undefined);


</script>

<style scoped>
</style>