<template>
	<DraggableCard>
		<template #title>
			<div>What I'm good at</div>
		</template>
		<template #content>
			<div class="flex justify-between pr-10 pl-10">
				<div v-for="s in skills" class="flex flex-col gap-2">
					<span class="font-bold text-lg">{{ s.label }}</span>
					<ul>
						<li v-for="item in s.items" :key="item.id">
							<div
								class="flex gap-2"
								:class="
									item.id == randomSelect ? 'selected' : ''
								"
							>
								<img
									:src="item.iconUrl"
									width="20"
									draggable="false"
								/>
								<span>{{ item.skill }}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</template>
	</DraggableCard>
</template>

<script setup lang="ts">
	import {
		usePortfolioStore,
		type SkillSection,
	} from '@/core/stores/usePortfolioStore';
	import DraggableCard from '../DraggableCard.vue';
	import { onUnmounted, ref } from 'vue';

	const props = defineProps<{ skills: SkillSection[] }>();
	const skillIds = usePortfolioStore().getSkillIds();

	let randomSelect = ref(
		skillIds[Math.floor(Math.random() * skillIds.length)],
	);
	const rSelect = setInterval(() => {
		randomSelect.value =
			skillIds[Math.floor(Math.random() * skillIds.length)];
	}, 1500);

	onUnmounted(() => clearInterval(rSelect));
</script>

<style scoped>
	.selected {
		font-weight: bold;
		font-style: italic;
		color: darkred;
	}
</style>
