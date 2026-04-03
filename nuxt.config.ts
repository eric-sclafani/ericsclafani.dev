import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	components: [
		{ path: '~/components' },
		{ path: '~/themes', pathPrefix: false },
	],

	devtools: { enabled: true },

	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			include: [
				'lucide-vue-next',
				'@vue/devtools-core',
				'@vue/devtools-kit',
			],
		},
	},

	css: ['./app/assets/css/main.css'],

	features: {
		devLogs: false,
	},

	modules: ['@nuxtjs/color-mode'],
});
