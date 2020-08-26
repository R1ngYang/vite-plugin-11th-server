import { reactive, toRefs, ref } from "vue";

const state = reactive({ width: -1, height: -1 });
const timer = ref();
export default () => {
    if (state.width === -1) {
        const setSize = () => {
            state.width = document.body.clientWidth;
            state.height = document.body.clientHeight;
        };
        setSize();
        window.onresize = () => {
            clearTimeout(timer.value);
            timer.value = window.setTimeout(() => {
                setSize();
            }, 100);
        };
    }
    return toRefs(state);
};
