<template>
    <div>
        <xi-input-number class="xi-input-number-core" v-model="value" :min="0" :max="99"></xi-input-number>
        {{ value }}
    </div>
</template>

<script setup lang="ts">
import { XiInputNumber } from "../11th"
ref: value = undefined;


</script>

<style scoped>
</style>