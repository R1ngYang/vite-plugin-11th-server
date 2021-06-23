<template>
    <button class="xi-button">
        <xi-icon v-if="icon" :icon="icon" :size="size.fontSize"></xi-icon>
        <span v-if="placeholder">{{ placeholder }}</span>
        <slot></slot>
    </button>
</template>
  
<script lang="ts" setup>
import { computed, defineProps } from "@vue/runtime-core";
import { sizeOptions } from "../../util/useThemes"
import { XiIcon } from "../11th";
import { getButtonStyle } from "./buttonStyle";

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
        type: [Boolean],
        default: () => false
    },
    /**
     * 圆角
     */
    round: {
        type: [Boolean],
        default: () => false
    },
    /**
     * 方形
     */
    square: {
        type: [Boolean],
        default: () => false
    },
    /**
     * 文字
     */
    text: {
        type: [Boolean],
        default: () => false
    },
    /**
     * 禁用
     */
    disabled: {
        type: [Boolean],
        default: () => false
    },
    /**
     * 图标
     */
    icon: {
        type: [String]
    }

})

// 处理大小
const size = computed(() => {
    const option = sizeOptions[props.size] || sizeOptions["default"]
    return {
        height: option.height,
        fontSize: `${parseInt(option.fontSize) - 2}px`
    }
})

const padding = computed(() => {
    const bottonHeight = parseInt(size.value.height);
    const fontHeight = parseInt(size.value.fontSize);
    return `${(bottonHeight - fontHeight) / 2}px`
})

// 处理样式
const typeStyle = computed(() => getButtonStyle(props.type, props.text, props.plain, props.disabled))


</script>

<style scoped>
.xi-button:hover,
.xi-button:focus {
    border: 1px solid v-bind("typeStyle.borderColorHF");
    background: v-bind("typeStyle.backgroundHF");
    color: v-bind("typeStyle.colorHF");
}
.xi-button,
.xi-button:active {
    outline: 0;
    width: v-bind("square?size.height:''");
    font-size: v-bind("size.fontSize");
    height: v-bind("size.height");
    border-radius: v-bind("round?size.height:'2px'");
    border: 1px solid v-bind("typeStyle.borderColor");
    background: v-bind("typeStyle.background");
    color: v-bind("typeStyle.color");
    margin: 0 5px;
    padding: 0 v-bind("square?'':padding");
    cursor: v-bind("disabled?'not-allowed':'pointer'");
}
</style>