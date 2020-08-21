import { createRouter, createWebHistory } from "vue-router";

import InputTest from "../examples/input";
import HelloWorld from "../components/HelloWorld";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/",  component: InputTest },
        { path: "/contact",  component: HelloWorld },
        { path: "/text",  component: HelloWorld },
    ],
});

export default router
