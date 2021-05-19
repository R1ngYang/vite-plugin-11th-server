<template>
    <component :is="component" v-bind="$attrs">2</component>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, defineProps } from "vue";

/** 引入子组件 */
const components: Record<string, unknown> = {
    table: defineAsyncComponent(() => import("./LayoutTable.vue")),
    "default": ""
}
const component = computed(() => components[props.type])


const props = defineProps({
    type: {
        type: [String],
        default: "default"
    },
})



</script>

<style scoped>
</style>