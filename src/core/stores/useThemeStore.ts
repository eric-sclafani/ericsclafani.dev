import { defineStore } from 'pinia';

// export const useThemeStore = () => {
// 	const currentTheme = useState<string>('currentTheme', () => 'default');
// 	const cookieTheme = useCookie<string>('currentTheme');
// 	if (cookieTheme.value) {
// 		currentTheme.value = cookieTheme.value;
// 	}

// 	const currentTheme = ref('default');
// 	const setTheme = (name: string): void => {
// 		currentTheme.value = name;
// 		cookieTheme.value = name;
// 	};
// 	return {
// 		currentTheme,
// 		setTheme,
// 	};
// };

export const useThemeStore = defineStore('theme', {
	// state: () => {
	//     const defaultTheme = {currentTheme: 'default'};
	//     const storedTheme = localStorage.getItem('theme');
	//     if (storedTheme != null){
	//         return JSON.parse(storedTheme)
	//     }
	//     return defaultTheme;
	// },
	state: () => ({
		currentTheme: 'default',
	}),
	getters: {
		getCurrentTheme: (state) => state.currentTheme,
	},
	actions: {
		setTheme(name: string): void {
			this.currentTheme = name;
		},
	},
});
