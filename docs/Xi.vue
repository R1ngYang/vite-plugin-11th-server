<template>
    <div class="xi-docs-main">
        <div class="xi-docs-component">
            <component :is="is"></component>
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
    name: {
        type: [String],
        default: () => ""
    }
})

const components: Record<string, unknown> = {
    // button
    "ButtonTest": defineAsyncComponent(() => import("./components/button/ButtonTest.vue")),
    "ButtonSizeTest": defineAsyncComponent(() => import("./components/button/ButtonSizeTest.vue")),
    "ButtonTypeTest": defineAsyncComponent(() => import("./components/button/ButtonTypeTest.vue")),
    "ButtonDisabledTest": defineAsyncComponent(() => import("./components/button/ButtonDisabledTest.vue")),
    "ButtonIconTest": defineAsyncComponent(() => import("./components/button/ButtonIconTest.vue")),
    
    // Icon
    "IconTest": defineAsyncComponent(() => import("./components/icon/IconTest.vue")),
    "IconSizeTest": defineAsyncComponent(() => import("./components/icon/IconSizeTest.vue")),
    "IconTypeTest": defineAsyncComponent(() => import("./components/icon/IconTypeTest.vue")),
    "IconClickTest": defineAsyncComponent(() => import("./components/icon/IconClickTest.vue")),

    // input
    "InputTest": defineAsyncComponent(() => import("./components/input/InputTest.vue")),
    "InputSizeTest": defineAsyncComponent(() => import("./components/input/InputSizeTest.vue")),
    "InputIconTest": defineAsyncComponent(() => import("./components/input/InputIconTest.vue")),
}

const is = computed(() => components[props.name])

</script>

<style scoped>
.xi-docs-main {
    border: 1px solid #d9d9d9;
    border-radius: 2px;
}

.xi-docs-component {
    padding: 32px 24px 12px;
}

.xi-docs-summary {
    border-top: 1px solid #d9d9d9;
    text-align: center;
    list-style: none;
}

.xi-docs-summary:hover {
    background: #d9d9d9;
    cursor: pointer;
}

.xi-docs-code {
    padding: 0px 24px;
}
</style>