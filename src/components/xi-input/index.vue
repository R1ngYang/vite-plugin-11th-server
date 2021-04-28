<template>
    <div class="xi-input-main">
        <xi-icon class="xi-input-prefix-icon" :size="fontSize" :icon="prefixIcon" v-if="prefixIcon"></xi-icon>
        <input v-bind="$attrs" v-model="modelValue" class="xi-input-core" />
        <xi-icon class="xi-input-suffix-icon" :size="fontSize" :icon="suffixIcon" v-if="suffixIcon"></xi-icon>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { sizeOptions, typeOptions } from "../../store/options";
import { XiIcon } from "../11th"

const props = defineProps({
    modelValue: {
        type: [String, Number],
    },
    size: {
        type: [String],
        default: () => "detault"
    },
    prefixIcon: {
        type: [String]
    },
    suffixIcon: {
        type: [String]
    }
})

/**  处理样式 */
// 获取大小
const sizeStyle = computed(() => sizeOptions[props.size] || sizeOptions["default"])
const height = computed(() => parseInt(sizeStyle.value.height))
const fontSize = computed(() => parseInt(sizeStyle.value.fontSize))

// 图标与边框的距离
const iconPosition = computed(() => (height.value - fontSize.value) / 2)
const prefixTop = computed(() => iconPosition.value)
const prefixLeft = computed(() => iconPosition.value)
const suffixTop = computed(() => iconPosition.value)
const suffixRight = computed(() => iconPosition.value)

// 输入核心与边框距离
const corePaddingLeft = computed(() => props.prefixIcon ? height.value : fontSize.value)
const corePaddingRight = computed(() => props.suffixIcon ? height.value : fontSize.value)

const typeStyle = computed(() => {
    return {
        border: typeOptions["default"].v2,
        borderH: typeOptions["default"].v1,
        borderF: typeOptions["primary"].v1
    }
})

</script>

<style scoped>
.xi-input-main {
    position: relative;
    width: 180px;
    display: inline-block;
    height: v-bind(height + "px");
}
.xi-input-core {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid v-bind("typeStyle.border");
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: v-bind(fontSize + "px");
    outline: none;
    padding-right: v-bind(corePaddingRight + "px");
    padding-left: v-bind(corePaddingLeft + "px");
    height: 100%;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
}

.xi-input-core:hover {
    border: 1px solid v-bind("typeStyle.borderH");
}

.xi-input-core:focus {
    border: 1px solid v-bind("typeStyle.borderF");
}
.xi-input-prefix-icon {
    position: absolute;
    top: v-bind(prefixTop + "px");
    left: v-bind(prefixLeft + "px");
}
.xi-input-suffix-icon {
    position: absolute;
    top: v-bind(suffixTop + "px");
    right: v-bind(suffixRight + "px");
}
</style>