import { reactive, toRefs } from "vue";

const state = reactive({ width: -1, height: -1 });
export default () => {
    if (state.width === -1) {
        const setSize = () => {
            state.width = document.body.clientWidth;
            state.height = document.body.clientHeight;
        };
        setSize();
        window.onresize = setSize;
    }
    return toRefs(state);
};
