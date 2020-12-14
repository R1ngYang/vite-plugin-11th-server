<template>
    <div>
        <xi-button ref="topTip">上</xi-button>
        <xi-button ref="rightTip">右</xi-button>
        <xi-button ref="leftTip">左</xi-button>
        <xi-button ref="bottomTip">下</xi-button>


        <xi-button ref="vnodeTip" style="width:100px">使用VNode</xi-button>
    </div>
</template>

<script>
    import {h, onMounted, ref} from "vue";
    import SlotWidget from "./SlotWidget.vue";
    import createTip from "../../components/tip/createTip.js";
    import XiButton from "../../components/button/XiButton.vue";

    export default {
        name: "TipTest",
        components: {XiButton, SlotWidget},
        setup() {
            const topTip = ref();
            const rightTip = ref();
            const bottomTip = ref();
            const leftTip = ref();
            const vnodeTip = ref();
            onMounted(() => {
                createTip(topTip.value, "在上面", {type: "top"});
                createTip(rightTip.value, "在右面", {type: "right"});
                createTip(leftTip.value, "在左面", {type: "left"});
                createTip(bottomTip.value, "在下面", {type: "bottom"});

                createTip(vnodeTip.value, h("div", {style:{width:"100%",height:"100%",textAlign:"left"}},"在下面"), {
                    type: "bottom", style: {
                        width: "700px",
                        height: "500px"
                    }
                });

            });
            return {
                topTip,
                rightTip,
                bottomTip,
                leftTip,

                vnodeTip
            }
        }
    }
</script>

<style scoped>

</style>
