<template>
    <table border="1" :cellspacing="tableAttrs.cellspacing" :cellpadding="tableAttrs.cellpadding">
        <tr :key="rowItem.key" v-for="rowItem in rowItems">
            <td
                :colspan="colItem.colspan"
                :rowspan="colItem.rowspan"
                :key="colItem.key"
                v-for="colItem in rowItem.children"
            >123123</td>
        </tr>
    </table>
    {{ rowItems }}
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";


const props = defineProps({
    styleJson: {
        type: [Array],
        default: "default"
    },
})
const tableAttrs: any =
    computed(() => props.styleJson.find((item: any) => item.xType === "base"))

const rowItems: any =
    computed(() => props.styleJson.filter((item: any) => item.key !== undefined))


</script>

<style scoped>
table {
    border: 1px solid #f00;
}
</style>