<template>
  <div>{{ result }}</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const result = ref();
  fetch('api', {
    method: 'post',
    body: JSON.stringify({ a: 'a', b: 2 })
  })
    .then((response) => response.json())
    .then((data) => {
      result.value = data;
    });

</script>

<style scoped></style>
