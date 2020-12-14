import Bubble from "./Bubble.vue";
import {createVNode, isVNode, render} from "vue";


export default (tag, children, options = {}) => {
    tag = Object.prototype.toString.call(tag) === "[object HTMLDivElement]" ? tag : tag.$el;
    const tagSize = tag.getBoundingClientRect();
    const props = {tagSize, ...options};
    if (!isVNode(children)) props.innerHTML = children;
    const vm = createVNode(Bubble, props, () => children);
    const show = () => render(vm, tag);
    const close = () => render(undefined, tag);
    tag.addEventListener("mouseenter", show);
    tag.addEventListener("mouseleave", close);
}
