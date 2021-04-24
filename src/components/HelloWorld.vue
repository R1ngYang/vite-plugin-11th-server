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


  ref: a = 456

  ref: cd = 789

  const c = 123

  ref: d = a 

 ref: ccc = computed(()=>{
    return `${a}`
  }) 
  
  const b= reactive({ab:ccc})  as {ab:string,ac:string}


  ref: e = 1
  onMounted(()=>{
    e = 789;
    a = a+789
    b.ac = "789"

  })

  const color = "red"


  mergeProps()

  defineProps

</script>

<style scoped>
a {
  color: v-bind(color);
}

</style>
