import HomePage from '@/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', component: HomePage },
		{
			path: '/stephenking',
			component: import('@/pages/stephenking/StephenKing.vue'),
		},
	],
});

export default router;
