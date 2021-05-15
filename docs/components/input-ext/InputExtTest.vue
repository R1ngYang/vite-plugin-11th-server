<template>
    <div>
        <xi-input :ext="ext"></xi-input>
    </div>
</template>

<script setup lang="ts">
import { XiInput } from "../11th"
import { h, ref, watch } from "vue"

import Aaa from "./Aaa.vue"
ref: a = ""

ref: ext = h(Aaa, { a: a })

window.setTimeout(()=>{
    console.log(ext)
},456)

</script>

<style scoped>
</style>