import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
	state: () => ({
		currentTheme: 'default',
	}),
	getters: {
		getCurrentTheme: (state) => {
			const storedTheme = sessionStorage.getItem('theme');
			if (storedTheme != null) {
				state.currentTheme = storedTheme;
			}
			return state.currentTheme;
		},
	},
	actions: {
		setTheme(name: string): void {
			sessionStorage.setItem('theme', name);
			this.currentTheme = name;
		},
	},
});
