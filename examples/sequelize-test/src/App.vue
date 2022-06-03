<template>
  <XiToDoList></XiToDoList>
  <button @click="handleGet">发送get请求</button>
  <div>{{ getContent }}</div>
  <br />
  <button @click="handlePost">发送post请求</button>
  <div>{{ postContent }}</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import XiToDoList from './XiToDoList.vue';

  const getContent = ref();
  function handleGet() {
    fetch('hello')
      .then((response) => response.text())
      .then((data) => {
        getContent.value = data;
      });
  }

  const postContent = ref();
  function handlePost() {
    fetch('api', {
      method: 'post',
      body: JSON.stringify({ a: 'a', b: 2 })
    })
      .then((response) => response.json())
      .then((data) => {
        postContent.value = data;
      });
  }
</script>

<style scoped></style>
