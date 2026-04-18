import portfolioData from '@/data/portfolioData.json';
import { defineStore } from 'pinia';

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
	links: Record<string, string>;
}

export const usePortfolioStore = defineStore('portfolio', {
	state: (): Portfolio => {
		return portfolioData;
	},
});
