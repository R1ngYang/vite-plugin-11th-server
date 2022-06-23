<template>
  <div>{{date}}</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const date = ref();
  const ws = new WebSocket('ws://localhost:8888');
  ws.onopen = (e) => {
    console.log(e);
    window.setInterval(() => {
      ws.send(new Date().getTime() + '');
    }, 1000);
  };
  ws.onmessage = (e) => {
    console.log(e);
    date.value = e.data;
  };
</script>

<style scoped></style>
