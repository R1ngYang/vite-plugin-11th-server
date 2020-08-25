import { createRouter, createWebHistory } from "vue-router";

import InputTest from "../examples/input/index.vue";
import HelloWorld from "../components/HelloWorld.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/",  component: InputTest },
        { path: "/contact",  component: HelloWorld },
        { path: "/text",  component: HelloWorld },
    ],
});

export default router
