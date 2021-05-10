<template>
    <div>
        <xi-button-group :children="children"></xi-button-group>
        <br />
        <br />
        <xi-button-group :children="children2" round></xi-button-group>
    </div>
</template>
  
<script lang="ts" setup>

import { XiButtonGroup } from "../11th"

const children = [{
    placeholder: "按钮1"
}, {
    placeholder: "按钮2"
}, {
    placeholder: "按钮3"
}]

const children2 = [{
    placeholder: "按钮1",
    type:"primary"
}, {
    placeholder: "按钮2",
    type:"warning"
}, {
    placeholder: "按钮3",
    type:"danger"
}]
</script>