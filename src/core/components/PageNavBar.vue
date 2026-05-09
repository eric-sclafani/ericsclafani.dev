<template>
	<div class="flex flex-col gap-2 m-2">
		<span class="ml-1 font-bold">Other cool stuff:</span>
		<NavButton v-for="btn of btns" @click="navToPage(btn.pageUrl)">
			<template #icon>
				<component :is="btn.icon"></component>
			</template>
			<template #label> {{ btn.label }}</template>
		</NavButton>
	</div>
</template>

<script setup lang="ts">
	import {
		BriefcaseBusiness,
		Crown,
		Globe,
		NotebookPen,
		Sandwich,
	} from '@lucide/vue';
	import type { Component } from 'vue';
	import NavButton from './NavButton.vue';
	import router from '@/router';

	const props = defineProps<{}>();

	interface NavButton {
		label: string;
		pageUrl: string;
		icon: Component;
	}

	const btns: NavButton[] = [
		{
			label: 'Stephen KING',
			pageUrl: '/stephenking',
			icon: Crown,
		},
		{
			label: 'Chicken Sandies',
			pageUrl: '',
			icon: Sandwich,
		},
		{
			label: 'Cool Portfolios',
			pageUrl: '',
			icon: BriefcaseBusiness,
		},
		{
			label: 'Madlibs',
			pageUrl: '',
			icon: NotebookPen,
		},
		{
			label: 'The internet',
			pageUrl: '',
			icon: Globe,
		},
	];

	const navToPage = (url: string): void => {
		router.push(url);
	};
</script>

<style scoped></style>
