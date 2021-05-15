import { createApp } from 'vue'
import XiInputExtFrame from "./XiInputExtFrame.vue"


class InputExt {
    vm = undefined as any;
    constructor(tag: Element) {
        tag.addEventListener("focus", () => {
            this.vm && this.vm.show();
        });
        tag.addEventListener("blur", () => {
            if (!this.vm.cant) {
                this.vm && this.vm.close()
            }
        });

        const parent = tag.parentElement;
        if (parent) {
            const op = document.createElement('div')
            parent.appendChild(op)
            this.vm = createApp(XiInputExtFrame, { tag }).mount(op);
        }
    }

    setExt(ext: any) {
        this.vm.setExt(ext);
    }

}

export const XiInputExt = (tag: Element | null, ext: any) => {
    const inputExt = tag && new InputExt(tag);
    inputExt && inputExt.setExt(ext);
    return inputExt
}