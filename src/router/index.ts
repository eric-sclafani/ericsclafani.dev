import HomePage from '@/pages/HomePage.vue';
import StephenKing from '@/pages/stephenking/StephenKing.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/stephenking', component: StephenKing },
	],
});

export default router;
