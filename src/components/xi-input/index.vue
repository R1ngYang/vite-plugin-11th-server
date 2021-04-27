<template>
    <div class="xi-input-main">
        <input v-bind="$attrs" v-model="modelValue" class="xi-input-core" />
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { sizeOptions, typeOptions } from "../../store/options";


const props = defineProps({
    modelValue: {
        type: [String, Number],
    },
    size: {
        type: [String],
        default: () => "detault"
    }
})


// 处理大小
const size = computed(() => {
    return sizeOptions[props.size] || sizeOptions["default"]
})

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
    width: 180px;
    display: inline-block;
    height: v-bind("size.height");
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
    font-size: v-bind("size.fontSize");
    outline: none;
    padding: 0 15px;
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
</style>