import { createRouter, createMemoryHistory } from "vue-router";
import Home from "/src/views/Home.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});

export default router;
