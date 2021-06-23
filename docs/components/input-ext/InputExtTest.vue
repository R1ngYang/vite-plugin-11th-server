<template>
    <div>
        <xi-input :ext="ext"></xi-input>
    </div>
</template>

<script setup lang="ts">
import { XiInput } from "../11th"
import { h, ref, watch } from "vue"

import Aaa from "./Aaa.vue"
const a = ref("")

const ext = ref(h(Aaa, { a: a.value }))

</script>

<style scoped>
</style>