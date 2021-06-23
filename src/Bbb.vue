<template>
    <div class="bbb">啊啊啊</div>
</template>

<script setup lang="ts">
import { defineProps } from "@vue/runtime-core";
defineProps({
    styleObj: Object,
    size: {
        type: Number,
        default: 1
    }
});

</script>

<style scoped>
.bbb {
    color: v-bind('styleObj.color');
    font-size: v-bind('`${size}px`');
}
</style>