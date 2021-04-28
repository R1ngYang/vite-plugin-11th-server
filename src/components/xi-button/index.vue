<template>
    <button class="xi-button">
        <xi-icon v-if="icon" :icon="icon"></xi-icon>
        <span v-if="placeholder">{{ placeholder }}</span>
        <slot></slot>
    </button>
</template>
  
<script lang="ts" setup>
import { computed, defineProps } from "@vue/runtime-core";
import { sizeOptions, typeOptions } from "../../store/options"
import {XiIcon} from "../11th";

const props = defineProps({
    placeholder: {
        type: [String, Number],
        default: () => " "
    },
    size: {
        type: [String],
        default: () => "default"
    },
    type: {
        type: [String],
        default: () => "default"
    },
    plain: {
        type: [Boolean]
    },
    /**
     * 圆角
     */
    round: {
        type: [Boolean]
    },
    /**
     * 方形
     */
    square: {
        type: [Boolean]
    },
    /**
     * 禁用
     */
    disabled: {
        type: [Boolean]
    },
    /**
     * 图标
     */
    icon: {
        type: [String]
    }

    //todo 图标
})

// 处理大小
const size = computed(() => {
    return sizeOptions[props.size] || sizeOptions["default"]
})

// 处理样式
const typeStyle = computed(() => {
    const color = typeOptions[props.type]
    return props.disabled ? {
        color: props.plain ? color.v4 : "#ffffff",
        background: props.plain ? color.v3 : color.v4,
        borderColor: color.v4,
        colorHF: props.plain ? color.v4 : "#ffffff",
        backgroundHF: props.plain ? color.v3 : color.v4,
        borderColorHF: color.v4,
        colorA: props.plain ? color.v4 : "#ffffff",
        backgroundA: props.plain ? color.v3 : color.v4,
        borderColorA: color.v4,
        cursor: " not-allowed"
    } : {
        color: props.plain ? color.v1 : "#ffffff",
        background: props.plain ? color.v3 : color.v1,
        borderColor: color.v1,
        colorHF: props.plain ? "#ffffff" : "#ffffff",
        backgroundHF: props.plain ? color.v1 : color.v2,
        borderColorHF: props.plain ? color.v1 : color.v2,
        colorA: props.plain ? color.v1 : "#ffffff",
        backgroundA: props.plain ? color.v3 : color.v1,
        borderColorA: color.v1,
        cursor: "pointer"
    }
})


</script>

<style scoped>
.xi-button {
    outline: 0;
    width: v-bind("square?size.height:''");
    height: v-bind("size.height");
    border-radius: v-bind("round?size.height:'2px'");
    border: 1px solid v-bind("typeStyle.borderColor");
    background: v-bind("typeStyle.background");
    color: v-bind("typeStyle.color");
    margin: 0 5px;
    cursor: v-bind("typeStyle.cursor");
}
.xi-button:hover,
.xi-button:focus {
    border: 1px solid v-bind("typeStyle.borderColorHF");
    background: v-bind("typeStyle.backgroundHF");
    color: v-bind("typeStyle.colorHF");
}
.xi-button:active {
    border: 1px solid v-bind("typeStyle.borderColorA");
    background: v-bind("typeStyle.backgroundA");
    color: v-bind("typeStyle.colorA");
}
</style>