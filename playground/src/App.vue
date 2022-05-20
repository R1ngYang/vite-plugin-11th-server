<template>
  <div></div>
</template>

<script setup lang="ts">
  fetch('/server/aa')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  fetch('/server/bb', {
    method: 'post',
    body: JSON.stringify({ b: 'bbb' })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
</script>

<style scoped></style>
