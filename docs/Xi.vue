<template>
    <div class="xi-docs-main">
        <div class="xi-docs-component">
            <ButtonTest :is="is"></ButtonTest>
        </div>
        <details class="xi-docs-details">
            <summary class="xi-docs-summary">查看代码</summary>
            <div class="xi-docs-code">
                <slot></slot>
            </div>
        </details>
    </div>
</template>

<script lang="ts" setup>

import { defineProps, defineAsyncComponent, computed } from "@vue/runtime-core";
const props = defineProps({
    name: String
})

const is = computed(() => eval(`${props.name}`))

// button
const ButtonTest = defineAsyncComponent(() => import("./components/button/button-test.vue"))

</script>

<style scoped>
.xi-docs-main {
    border: 1px solid #d9d9d9;
    border-radius: 2px;
}

.xi-docs-component{
    padding: 42px 24px 12px;
}

.xi-docs-summary{
    border-top: 1px solid #d9d9d9;
    text-align: center;
    list-style: none;
}

.xi-docs-summary:hover{
    background:#d9d9d9 ;
}

.xi-docs-code {
    padding: 0px 24px;

}
</style>