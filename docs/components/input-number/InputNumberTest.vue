<template>
    <div>
        <xi-input-number class="xi-input-number-core" v-model="value"></xi-input-number>
        {{ value }}
    </div>
</template>

<script setup lang="ts">
import { XiInputNumber } from "../11th"
ref: value = 1;


</script>

<style scoped>
</style>