export const emphasizeText = (text: string, words: string[]): string => {
	for (let word of words) {
		const regex = new RegExp(`\\b(${word})\\b`, 'gi');
		text = text.replace(regex, '<span class="font-bold italic">$1</span>');
	}
	return text;
};
