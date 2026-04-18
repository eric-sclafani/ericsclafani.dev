<template>
	<DraggableCard>
		<template #title>
			<div>Projects</div>
		</template>
		<template #content>
			<div v-for="proj in projects">
				<div class="flex flex-col gap-2">
					<span>{{ proj.title }}</span>
					<a :href="proj.link" target="_blank">
						<em>(project link)</em>
					</a>
					<div>{{ proj.description }}</div>
				</div>
			</div>
		</template>
	</DraggableCard>
</template>

<script setup lang="ts">
	import type { Project } from '@/core/stores/usePortfolioStore';
	import DraggableCard from '../DraggableCard.vue';

	const props = defineProps<{ projects: Project[] }>();
</script>

<style scoped></style>
