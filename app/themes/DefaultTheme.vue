<template>
	<Transition name="fade">
		<div class="flex justify-between">
			<div>
				<div class="flex gap-3">
					<DefaultAbout
						class="w-160"
						:about="port.about"
					></DefaultAbout>
					<DefaultResearch
						class="w-120"
						:research="port.research"
					></DefaultResearch>
				</div>

				<div class="flex gap-3">
					<DefaultSkills
						class="w-150"
						:skills="port.skills"
					></DefaultSkills>
					<DefaultHobbies :hobbies="port.hobbies"></DefaultHobbies>
				</div>

				<DefaultProjects
					class="w-250"
					:projects="port.projects"
				></DefaultProjects>
			</div>
			<div class="m-3">
				<fieldset
					class="p-6 pl-2 border-2 border-red-500 border-dashed rounded-2xl"
				>
					<legend align="center" class="font-bold text-2xl">
						Config
					</legend>
					<div class="flex flex-col gap-3">
						<div>Disable dragging</div>
					</div>
				</fieldset>
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
	import type { Portfolio } from '~/composables/common/usePortfolio';
	const props = defineProps<{ port: Portfolio }>();

	const draggingEnabled = ref(false);
</script>

<style scoped>
	.fade-enter-active,
	.fade-appear-active {
		transition: opacity 0.5s ease;
	}
	.fade-enter-from,
	.fade-appear-from {
		opacity: 0;
	}
</style>
