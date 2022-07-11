<template>
  <div>
    helloword
  </div>
</template>
<script setup lang="ts">

  fetch('api', {
    method: 'post',
    body: JSON.stringify({ a: 'a', b: 2 })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
</script>

<style scoped></style>
