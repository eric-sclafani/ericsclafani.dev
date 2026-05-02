import portfolioData from '@/data/portfolioData.json';
import { defineStore } from 'pinia';

export type Skill = {
	id?: number;
	skill: string;
	iconUrl: string;
};

export type SkillSection = {
	label?: string;
	items: Skill[];
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
	skills: SkillSection[];
	hobbies: string[];
	projects: Project[];
	links: Record<string, string>;
}

export const usePortfolioStore = defineStore('portfolio', {
	state: (): Portfolio => {
		let count = 1;
		const data = portfolioData;
		for (const skill of data.skills) {
			skill.items.forEach((s: Skill) => {
				s.id = count;
				count++;
			});
		}

		return data;
	},
	getters: {
		getSkillIds: (state): number[] => {
			const ids: number[] = [];
			for (let skill of state.skills) {
				skill.items.forEach((s) => {
					if (s.id) ids.push(s.id);
				});
			}
			return ids;
		},
	},
});
