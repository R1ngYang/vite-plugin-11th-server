import { createRouter, createWebHistory } from "vue-router";

import InputTest from "../examples/input/InputTest.vue";
import ButtonTest from "../examples/button/ButtonTest.vue";
import HelloWorld from "../components/HelloWorld.vue";
import TipTest from "../examples/tip/TipTest.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/",name:"Home",  component: InputTest },
        { path: "/contact", name:"content", component: HelloWorld },
        { path: "/text",name:"text",  component: HelloWorld },
        { path: "/button",name:"button",  component: ButtonTest },
        { path: "/tip",name:"tip",  component: TipTest },
    ],
});

export default router
