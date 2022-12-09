import { createRouter, createWebHistory } from "vue-router";
import HeroView from "../views/HeroView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "hero",
			components: {
				default: HeroView,
				LeftNavbar: () => import("../views/LoginView.vue"),
			},
		},
		{
			path: "/login",
			name: "login",
			component: () => import("../views/LoginView.vue"),
		},
		{
			path: "/register",
			name: "register",
			component: () => import("../views/RegisterView.vue"),
		},
		{
			path: "/:pathMatch(.*)*",
			name: "not-found",
			component: () => import("../views/PageNotFoundView.vue"),
		},
	],
});

export default router;
