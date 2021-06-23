<template>
        <div class="hacker-main" v-html="text" ref="main" @dblclick="fullscreen"></div>
</template> 

<script lang="ts" setup>import { ref } from "vue";

const main: any = ref("<br><br><br><br><br><br>")

const text = ref("")
const str = "ABCDEFGHIGKLMNOPQRSTUVWXYZ   $$$"
const append = () => {
    window.setTimeout(() => {
        const out = str[parseInt(`${Math.random() * 32}`)]
        text.value += (out === '$' ? "<br>" : out);
        main.value.scrollTop = main.value.scrollHeight;
        append();
    }, 30)

}

const fullscreen = () => {
    var docElm = main.value;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
    }
}

append();

</script>

<style scoped>
.hacker-main {
    padding:100px;
    width: 100%;
    height: 100%;
    background: #000;
    color: greenyellow;
    overflow: auto;
}

.hacker-main::-webkit-scrollbar {
    width: 0;
}
</style>
