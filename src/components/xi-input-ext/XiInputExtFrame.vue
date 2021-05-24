<template>
    <div
        class="xi-input-ext-frame-main"
        :class="`xi-input-ext-frame-${position}`"
        v-show="visible"
        @mousedown="handleMainClick"
    >
        <div :class="`xi-input-ext-frame-border-${position}`"></div>
        <component :is="ext" v-if="showComponent"></component>
    </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, defineProps, h, nextTick, ref } from "vue";
import { typeOptions } from "../../store/options";

const props = defineProps({
    tag: {
        type: [Object]
    },
})

const visible = ref(false);
const cant = ref(false);

const close = () => {
    console.log(2)
    visible.value = false;
}

const show = () => {
    const tag = props.tag as Element;
    console.log(tag?.getBoundingClientRect())
    visible.value = true;
}

const handleMainClick = () => {
    cant.value = true
    console.log(1)
}


const position = ref("bottom")


const inputSize = computed(() => {
    const tag = props.tag as Element;
    console.log(tag?.getBoundingClientRect())
    return tag?.getBoundingClientRect()
})

const size = computed(() => {
    return position.value === "bottom" ? {
        top: `${inputSize.value.top + inputSize.value.height - 2}px`,
        left: `${inputSize.value.left}px`,
        width: `${inputSize.value.width}px`,
    } : {
        // 当下面位置放不下扩展的时候
        left: `${inputSize.value.left}px`,
        bottom: `${inputSize.value.top}px`,
    }
})


const style = computed(() => {
    const option = typeOptions["primary"]
    return {
        borderColor: option.v1
    }
})

const ext = ref<any>(null);
const showComponent = ref(true);
const setExt = (newExt: any) => {
    ext.value = defineComponent(newExt);
    showComponent.value = false;
    nextTick(() => {
        showComponent.value = true;

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
.xi-input-ext-frame-border-bottom {
    position: fixed;
    top: v-bind("inputSize?.top + 'px'");
    left: v-bind("inputSize?.left + 'px'");
    z-index: 100;

    width: v-bind("inputSize?.width + 'px'");
    height: v-bind("inputSize?.height + 'px'");

    border: 1px solid v-bind("style.borderColor");
    border-bottom: none;
    border-radius: 4px 4px 0 0;

}
.xi-input-ext-frame-top {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
}
</style>