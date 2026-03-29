<template>
	<CoreDraggableCard>
		<template #title>
			<div>What I'm good at</div>
		</template>
		<template #content>
			<div class="flex justify-between pr-10 pl-10">
				<div v-for="s in skills" class="flex flex-col">
					<span class="font-bold">{{ s.label }}</span>
					<ul>
						<li v-for="item in s.items">
							{{ item }}
						</li>
					</ul>
				</div>
			</div>
		</template>
	</CoreDraggableCard>
</template>

<script setup lang="ts">
	import type { ListItem } from '~/composables/common/usePortfolio';

	const props = defineProps<{ skills: ListItem[] }>();
</script>
