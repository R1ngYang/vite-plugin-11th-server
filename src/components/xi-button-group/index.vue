<template>
    <div>
        <xi-button
            v-bind="Object.assign({ ...$attrs }, child)"
            :key="index"
            :class="getClass(index)"
            v-for="(child,index) in children"
        />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { XiButton } from "../11th";
const props = defineProps({
    children: {
        type: [Array],
        default: () => []
    }

})

const getClass = (index: number) => {
    if (props.children.length === 0) return;
    if (index === 0) return "xi-button-group-core-first";
    if (index === props.children.length - 1) return "xi-button-group-core-last";
    return "xi-button-group-core";
}



</script>

<style scoped>
.xi-button-group-core-first {
    margin: 0 1px 0 5px !important;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}

.xi-button-group-core {
    margin: 0 1px !important;
    border-radius: 0 !important;
}
.xi-button-group-core-last {
    margin: 0 5px 0 1px !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
}
</style>