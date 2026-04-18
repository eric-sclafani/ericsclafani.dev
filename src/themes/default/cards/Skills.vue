<template>
	<DraggableCard>
		<template #title>
			<div>What I'm good at</div>
		</template>
		<template #content>
			<div class="flex justify-between pr-10 pl-10">
				<div v-for="s in skills" class="flex flex-col">
					<span class="font-bold">{{ s.label }}</span>
					<ul>
						<li v-for="item in s.items">
							<div class="flex gap-2">
								<img :src="item.iconUrl" width="20" />
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
	import type { SkillSection } from '@/core/stores/usePortfolioStore';
	import DraggableCard from '../DraggableCard.vue';

	const props = defineProps<{ skills: SkillSection[] }>();
</script>
