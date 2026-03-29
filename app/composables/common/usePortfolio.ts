import portfolioData from '~/data/portfolioData.json';

export type ListItem = {
	label?: string;
	items: string[];
};
export type Project = {
	title: string;
	link: string;
	description: string;
	skills: string[];
};

export interface Portfolio {
	about: string[];
	research: string[];
	skills: ListItem[];
	hobbies: string[];
	projects: Project[];
}

export const usePortfolio = (): Portfolio => {
	const portfolio = portfolioData as Portfolio;
	return portfolio;
};
