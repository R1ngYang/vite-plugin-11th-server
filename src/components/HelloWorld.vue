<template>
  <h1 @click="a++">{{a}}</h1>
  <h1>{{b}}</h1>
  <h1>{{c}}</h1>
  <h1>{{d}}</h1>
  <h1>{{e}}</h1>
  <a>{{ccc}}</a>

</template>

<script lang="ts" setup>
import { reactive } from '@vue/reactivity';
import { computed, defineProps, mergeProps, onMounted, ref } from 'vue';


  const a = ref(456)



</script>

