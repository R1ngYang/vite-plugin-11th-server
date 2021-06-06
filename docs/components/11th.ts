import { defineAsyncComponent } from '@vue/runtime-core';
export const XiButton = defineAsyncComponent(() => import("../../src/components/xi-button/index.vue"));
export const XiButtonGroup = defineAsyncComponent(() => import("../../src/components/xi-button-group/index.vue"));
export const XiIcon = defineAsyncComponent(() => import("../../src/components/xi-icon/index.vue"));
export const XiInput = defineAsyncComponent(() => import("../../src/components/xi-input/index.vue"));
export const XiInputNumber = defineAsyncComponent(() => import("../../src/components/xi-input-number/index.vue"));

export const XiLayout = defineAsyncComponent(() => import("../../src/components/xi-layout/index.vue"));

// import { XiInputExt } from "../../src/components/xi-input-ext/";
// export { XiInputExt };