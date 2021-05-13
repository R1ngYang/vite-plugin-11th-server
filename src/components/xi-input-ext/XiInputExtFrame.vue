<template>
    <div class="xi-input-ext-frame-main" :class="`xi-input-ext-frame-${position}`" v-show="visible">
        <component :is="ext" v-if="showComponent"></component>
    </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, defineProps, nextTick } from "vue";
import { typeOptions } from "../../store/options";

const props = defineProps({
    tag: {
        type: [Object]
    },
})

ref: visible = false;

const close = () => {
    visible = false;
}

const show = () => {
    visible = true;
}


ref: position = "bottom"

const size = computed(() => {
    const tag = props.tag as Element;
    const inputSize = tag?.getBoundingClientRect()

    return position === "bottom" ? {
        top: `${inputSize.top + inputSize.height - 2}px`,
        left: `${inputSize.left}px`,
        width: `${inputSize.width}px`,
    } : {
        // 当下面位置放不下扩展的时候
        left: `${inputSize.left}px`,
        bottom: `${inputSize.top}px`,
    }
})

const style = computed(() => {
    const option = typeOptions["primary"]
    return {
        borderColor: option.v1
    }
})

ref: ext = null as any;
ref: showComponent = true;
const setExt = (newExt: any) => {
    ext = defineComponent(newExt);
    showComponent = false;
    nextTick(() => {
        showComponent = true;

    })

}

</script>

<style scoped>
.xi-input-ext-frame-main {
    position: fixed;
    top: v-bind("size.top");
    bottom: v-bind("size.bottom");
    left: v-bind("size.left");
    z-index: 100;

    width: v-bind("size.width");
    border: 1px solid v-bind("style.borderColor");
    background: #ffffff;
}

.xi-input-ext-frame-bottom {
    border-top: none;
    border-radius: 0 0 4px 4px;
}
.xi-input-ext-frame-top {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
}
</style>