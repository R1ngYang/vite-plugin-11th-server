<template>
    <div class="xi-input-main" ref="inputMainTag">
        <xi-icon class="xi-input-prefix-icon" :size="fontSize" :icon="prefixIcon" v-if="prefixIcon"></xi-icon>
        <input
            v-bind="$attrs"
            v-model="modelValue"
            class="xi-input-core"
            ref="inputTag"
            :disabled="disabled"
            :readonly="readonly"
        />
        <xi-icon class="xi-input-suffix-icon" :size="fontSize" :icon="suffixIcon" v-if="suffixIcon"></xi-icon>
        <xi-icon
            class="xi-input-suffix-icon"
            :class="clearing ? 'xi-input-clear-icon-active' : 'xi-input-clear-icon'"
            :size="fontSize"
            icon="xi-icon-close-one"
            v-if="showClearIcon"
            @mousedown="clearing = !clearing"
            @mouseup="clearing = !clearing"
            @click="clear"
        ></xi-icon>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted, reactive, ref, useContext, watch } from "vue";
import { sizeOptions, typeOptions } from "../../store/options";
import { XiIcon } from "../11th"
import { XiInputExt } from "../xi-input-ext/XiInputExt";

const { emit, expose } = useContext()

const props = defineProps({
    modelValue: {
        type: [String, Number],
    },
    disabled: {
        type: [Boolean]
    },
    readonly: {
        type: [Boolean]
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
    },
    // 清除
    clearable: {
        type: [Boolean]
    },

    ext: {
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
    return props.disabled ? {
        border: typeOptions["default"].v2,
        borderH: typeOptions["default"].v2,
        borderF: typeOptions["default"].v2,
        background: typeOptions["default"].v3,
    } : {
        border: typeOptions["default"].v2,
        borderH: typeOptions["default"].v1,
        borderF: typeOptions["primary"].v1,
        background: "#fff",
        clearColor: typeOptions["primary"].v1,
        clearColorH: typeOptions["primary"].v2,
    }
})

/** 清除 */

const showClearIcon = computed(() => props.clearable
    && !props.disabled && !props.readonly && props.modelValue)
const clearing = ref(false)

const clear = () => {
    emit("update:modelValue", "")
}


/** 输入框最外层标签 */
const inputMainTag = ref("")

/** 输入框标签 */
const inputTag = ref<Element | null>(null);
const inputExt = ref<any>(null);
watch(() => props.ext, () => inputExt.value && inputExt.value.setExt(props.ext))
onMounted(() => props.ext && (inputExt.value = XiInputExt(inputTag.value, props.ext)))

/** 导出 */
expose({ clear })


</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"] {
    -moz-appearance: textfield;
}

.xi-input-main {
    position: relative;
    width: 180px;
    display: inline-block;
    height: v-bind(height + "px");
}
.xi-input-core {
    -webkit-appearance: none;
    background-color: v-bind("typeStyle.background");
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
    cursor: v-bind("disabled?'not-allowed':'text'");
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

.xi-input-clear-icon,
.xi-input-clear-icon-active {
    color: v-bind("typeStyle.clearColor");
}

.xi-input-clear-icon:hover {
    color: v-bind("typeStyle.clearColorH");
}
</style>