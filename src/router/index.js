import { createRouter, createWebHistory } from "vue-router";

import InputTest from "../examples/input/InputTest.vue";
import ButtonTest from "../examples/button/ButtonTest.vue";
import HelloWorld from "../components/HelloWorld.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/",  component: InputTest },
        { path: "/contact",  component: HelloWorld },
        { path: "/text",  component: HelloWorld },
        { path: "/button",  component: ButtonTest },
    ],
});

export default router
