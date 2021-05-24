<template>
    <div @click="handleClick">{{a}}</div>
</template>

<script setup lang="ts">import { ref } from '@vue/reactivity';

const a = ref(123);

const handleClick = ()=>{
    a.value = 666
}

</script>

<style scoped>
</style>