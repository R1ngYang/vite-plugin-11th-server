<template>
    <table border="1" cellspacing="0" cellpadding="0">
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
    </table>
    {{ styleJson }}
</template>

<script setup lang="ts">
import { defineProps } from "vue";


const props = defineProps({
    styleJson: {
        type: [Array],
        default: "default"
    },
})
const tableAttrs = props.styleJson.find((item: any) => item.xType === "base")


</script>

<style scoped>
table {
    border: 1px solid #f00;
}
</style>