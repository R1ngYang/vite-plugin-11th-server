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

  const cd = ref(789)

  const c = 123

  const d = ref(a.value) 

 const ccc = computed(()=>{
    return `${a.value}`
  }) 
  
  const b= reactive({ab:ccc.value})  as {ab:string,ac:string}


  const e = ref(1)
  onMounted(()=>{
    e.value = 789;
    a.value = a.value+789
    b.ac = "789"

  })

  const color = "red"


  mergeProps()


</script>

