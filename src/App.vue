<template>
  <div>
    <xi-layout type="table" :style-json="styleJson"></xi-layout>
  </div>
</template>

<script lang="ts" setup>
import XiLayout from "./components/xi-layout/index.vue"

ref: styleJson = [
  {
    xType: "base",
    cellspacing: "0",
    cellpadding: "0"
  }
]

</script>