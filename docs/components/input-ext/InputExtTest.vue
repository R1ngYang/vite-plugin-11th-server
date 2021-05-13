<template>
    <div>
        <xi-input :ext="ext" @change="handleChange"></xi-input>
    </div>
</template>

<script setup lang="ts">
import { XiInput } from "../11th"
import { h, watch } from "vue"

ref: ext = h("div", [123123])

const handleChange = () => {
    ext = h("div", [1])
}

</script>

<style scoped>
</style>