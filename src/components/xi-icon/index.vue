<template>
    <Component :is="icon" class="xi-icon-main" />
</template>

<script setup lang="ts">
import { computed, defineProps } from '@vue/runtime-core';
import Icon from './export-icon'
const props = defineProps({
    icon: {
        type: [String],
        default: "xi-icon-default"
    },
    size: {
        type: [String, Number],
        default: 16
    }
})

const icon = (Icon as Record<string, unknown>)[props.icon]

const size = computed(() => `${parseInt(props.size + "")}px`)
</script>

<style scoped>
.xi-icon-main {
    font-size: v-bind(size);
    vertical-align: -.125em;
}
</style>