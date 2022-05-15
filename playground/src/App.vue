<template>
  <div></div>
</template>

<script setup lang="ts">
  fetch('/aa')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
</script>

<style scoped></style>
