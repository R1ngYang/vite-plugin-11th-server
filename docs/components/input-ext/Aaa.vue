<template>
    <div @click="handleClick">{{a}}</div>
</template>

<script setup lang="ts">
ref: a = 123;

const handleClick = ()=>{
    a = 666
}

</script>

<style scoped>
</style>