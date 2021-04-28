import { defineAsyncComponent } from '@vue/runtime-core';
export const XiButton = defineAsyncComponent(() => import("../../src/components/xi-button/index.vue"));
export const XiIcon = defineAsyncComponent(() => import("../../src/components/xi-icon/index.vue"));
export const XiInput = defineAsyncComponent(() => import("../../src/components/xi-input/index.vue"));

// import XiButton from "./xi-button/index.vue";
// import XiIcon from "./xi-icon/index.vue";
// import XiInput from "./xi-input/index.vue";



// export { XiButton, XiIcon, XiInput }