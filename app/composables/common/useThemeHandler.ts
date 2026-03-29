export const useThemeHandler = () => {
	const currentTheme = useState<string>('currentTheme', () => 'default');

	const cookieTheme = useCookie<string>('currentTheme');
	if (cookieTheme.value) {
		currentTheme.value = cookieTheme.value;
	}

	const setTheme = (name: string): void => {
		currentTheme.value = name;
		cookieTheme.value = name;
	};

	return {
		currentTheme,
		setTheme,
	};
};
