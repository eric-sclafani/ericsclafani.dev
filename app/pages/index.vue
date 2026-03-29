<template>
	<div class="mt-5 mr-40 ml-40">
		<div class="flex gap-3">
			<DefaultAbout class="w-400" :about="port.about"></DefaultAbout>
			<DefaultResearch :research="port.research"></DefaultResearch>
		</div>

		<div class="flex gap-3">
			<DefaultSkills class="w-150" :skills="port.skills"></DefaultSkills>
			<DefaultHobbies :hobbies="port.hobbies"></DefaultHobbies>
		</div>

		<DefaultProjects :projects="port.projects"></DefaultProjects>
	</div>
</template>

<script setup lang="ts">
	import { usePortfolio } from '~/composables/common/usePortfolio';
	import { useThemeHandler } from '~/composables/common/useThemeHandler';

	const port = usePortfolio();
	const { currentTheme } = useThemeHandler();
</script>

<style scoped>
	.grid-layout {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
	}
</style>
