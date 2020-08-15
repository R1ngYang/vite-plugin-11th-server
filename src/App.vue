<template>
    <div id="app">
        <input-test></input-test>
    </div>
</template>

<script>

import InputTest from "./test/InputTest";
export default {
    name: 'App',
    components: { InputTest },
    data() {
        return {

            a: "123"
        }
    }
}
</script>

<style>
</style>
