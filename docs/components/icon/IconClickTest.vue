<template>
    <div>
        <span>请点击👉</span>
        <xi-icon icon="xi-icon-amiming" @click="value++"></xi-icon>
        <div>您已经点击了 {{ value }} 下</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { XiIcon } from "../11th"

const value = ref(0)
</script>

<style scoped>
</style>