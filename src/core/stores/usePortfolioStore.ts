import portfolioData from '@/data/portfolioData.json';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export type Skill = {
	id?: number;
	skill: string;
	iconUrl: string;
};

export type SkillSection = {
	label?: string;
	items: Skill[];
};

export type Link = {
	id?: number;
	iconUrl: string;
	linkUrl: string;
};

export interface Portfolio {
	about: string[];
	research: string[];
	skills: SkillSection[];
	hobbies: string[];
	links: Link[];
}

export const usePortfolioStore = defineStore('portfolio', () => {
	const data = ref<Portfolio>(portfolioData);
	generateIds();

	function getSkillIds() {
		const ids: number[] = [];
		for (let skill of data.value.skills) {
			skill.items.forEach((s: Skill) => {
				if (s.id) ids.push(s.id);
			});
		}
		return ids;
	}

	function generateIds(): void {
		let count = 1;
		for (const skill of data.value.skills) {
			skill.items.forEach((s: Skill) => {
				s.id = count;
				count++;
			});
		}
		count = 1;

		for (const link of data.value.links) {
			link.id = count;
			count++;
		}
	}

	return {
		data,
		getSkillIds,
	};
});
