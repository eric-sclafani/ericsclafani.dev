<template>
	<CoreDraggableCard>
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
	</CoreDraggableCard>
</template>

<script setup lang="ts">
	import type { Project } from '~/composables/common/usePortfolio';

	const props = defineProps<{ projects: Project[] }>();
</script>

<style scoped></style>
