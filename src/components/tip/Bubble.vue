<template>
    <div ref="bubbleMain"
         :class="`xi-bubble-main xi-bubble-${showPosition}`"
    >
        <slot></slot>
    </div>
</template>

<script>
    import SlotWidget from "../../examples/tip/SlotWidget.vue";
    import {computed, nextTick, onMounted, ref} from "vue"
    import usePageSize from "../../utils/usePageSize.js";


    export default {
        name: "lsp-bubble",
        components: {SlotWidget},
        props: {
            tagSize: DOMRect,
            type: {
                type: String,
                default: "bottom"
            }
        },
        setup({tagSize, type}) {
            console.log(usePageSize().width.value)
            console.log(usePageSize().height.value)


            const bubblePosition = ref(type);
            const showPosition = ref(type);
            const bubbleMain = ref();

            const bubbleSize = ref();
            onMounted(() => {
                bubbleSize.value = bubbleMain.value.getBoundingClientRect();
                nextTick(() => {
                    bubbleSize.value = bubbleMain.value.getBoundingClientRect();
                })
            });


            const bubbleStyle = computed(() => {
                const pageWidth = usePageSize().width.value;
                const pageHeight = usePageSize().height.value;

                let position = bubblePosition.value;

                //w:top与bottom的偏移宽度，h:left与right偏移高度
                let w = 0, h = 0;

                const tb = ["top", "bottom"];
                const lr = ["left", "right"];

                //
                if (tb.includes(type) && bubbleSize.value.width < pageWidth) {
                    w = tagSize.x + bubbleSize.value.width - pageWidth;
                    w = w > 0 ? w + 2 : 0;
                } else if (lr.includes(type) && bubbleSize.value.height < pageHeight) {
                    h = tagSize.y + bubbleSize.value.height - pageHeight;
                    h = h > 0 ? h + 2 : 0;
                }

                const heightBottom = tagSize.y + tagSize.height + 10 + bubbleSize.value.height - pageHeight;
                const heightTop = tagSize.y - 10 - tagSize.height;

                // todo 处理top与bottom的超高，left与right超宽的问题
                if (type === "bottom" && heightBottom > 0) {
                    if (heightTop > 0) {
                        position = "top";
                    }
                }

                // 渲染箭头最终位置
                showPosition.value = position;
                // 综合求值
                if (position === "top") {
                    return {
                        arrowTopB: tagSize.y - 10 + "px",
                        arrowLeftB: tagSize.x + 4 + "px",
                        arrowTopA: tagSize.y - 11 + "px",
                        arrowLeftA: tagSize.x + 4 + "px",
                        mainTop: tagSize.y - bubbleSize.value.height - 10 + "px",
                        mainWidth: tagSize.width + "px",
                        mainLeft: tagSize.x - w + "px",
                        position
                    }
                } else if (position === "left") {
                    return {
                        arrowTopB: tagSize.y + 4 + "px",
                        arrowLeftB: tagSize.x - 10 + "px",
                        arrowTopA: tagSize.y + 4 + "px",
                        arrowLeftA: tagSize.x - 11 + "px",
                        mainTop: tagSize.y - h + "px",
                        mainWidth: tagSize.width + "px",
                        mainLeft: tagSize.x - bubbleSize.value.width - 10 + "px",
                        position
                    }
                } else if (position === "right") {
                    return {
                        arrowTopB: tagSize.y + 4 + "px",
                        arrowLeftB: tagSize.x + tagSize.width + "px",
                        arrowTopA: tagSize.y + 4 + "px",
                        arrowLeftA: tagSize.x + tagSize.width + 1 + "px",
                        mainTop: tagSize.y - h + "px",
                        mainWidth: tagSize.width + "px",
                        mainLeft: tagSize.x + tagSize.width + 10 + "px",
                        position
                    }
                }
                // 默认在下面
                return {
                    arrowTopB: tagSize.y + tagSize.height + "px",
                    arrowLeftB: tagSize.x + 4 + "px",
                    arrowTopA: tagSize.y + tagSize.height + 1 + "px",
                    arrowLeftA: tagSize.x + 4 + "px",
                    mainTop: tagSize.y + tagSize.height + 10 + "px",
                    mainWidth: tagSize.width + "px",
                    mainLeft: tagSize.x - w + "px",
                    position
                }

            });

            return {
                bubbleMain,
                bubbleStyle,
                bubblePosition,
                showPosition,
            }
        }
    }
</script>

<style vars="bubbleStyle">
    .xi-bubble-main {
        min-width: var(--mainWidth);
        min-height: 30px;
        background: #ffffff;
        border: 1px #aaaaaa solid;
        position: fixed;
        border-radius: 2px;
        top: var(--mainTop);
        left: var(--mainLeft);
        padding: 5px;
    }

    .xi-bubble-main:before {
        content: " ";
        width: 0;
        height: 0;
        position: fixed;

    }

    .xi-bubble-main:after {
        content: " ";
        width: 0;
        height: 0;
        position: fixed;
    }


    .xi-bubble-top:before {
        top: var(--arrowTopB);
        left: var(--arrowLeftB);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #aaaaaa;
    }

    .xi-bubble-top:after {
        top: var(--arrowTopA);
        left: var(--arrowLeftA);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #ffffff;
    }


    .xi-bubble-bottom:before {
        top: var(--arrowTopB);
        left: var(--arrowLeftB);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #aaaaaa;
    }

    .xi-bubble-bottom:after {
        top: var(--arrowTopA);
        left: var(--arrowLeftA);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #ffffff;
    }


    .xi-bubble-left:before {
        top: var(--arrowTopB);
        left: var(--arrowLeftB);
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #aaaaaa;
    }

    .xi-bubble-left:after {
        top: var(--arrowTopA);
        left: var(--arrowLeftA);
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #ffffff;
    }


    .xi-bubble-right:before {
        top: var(--arrowTopB);
        left: var(--arrowLeftB);
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #aaaaaa;
    }

    .xi-bubble-right:after {
        top: var(--arrowTopA);
        left: var(--arrowLeftA);
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #ffffff;
    }

</style>
