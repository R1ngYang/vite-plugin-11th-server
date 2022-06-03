<template>
  <div>
    <textarea v-model="content" cols="30" rows="5"></textarea>
    <br />
    <button @click="handleClick">增加</button>
    <br />
    <table border="1" cellspacing="0">
      <thead>
        <tr>
          <th>序号</th>
          <th>内容</th>
          <th>创建时间</th>
          <th>更新时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.content }}</td>
          <td>{{ item.createdAt }}</td>
          <td>{{ item.updatedAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const list = ref();
  async function getList() {
    list.value = await fetch(`/todo-list/list`).then((response) => response.json());
  }

  getList();

  const content = ref();

  async function handleClick() {
    if (!content.value) return;
    await fetch(`/todo-list/save?content=${content.value}`);
    getList();

    content.value = undefined;
  }
</script>

<style scoped></style>
