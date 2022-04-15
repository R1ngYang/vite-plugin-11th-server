<template>
  <div>
    <xi-layout type="table" :style-json="styleJson"></xi-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import XiLayout from "./components/xi-layout/index.vue"

const styleJson = ref([
  {
  },
])

</script>