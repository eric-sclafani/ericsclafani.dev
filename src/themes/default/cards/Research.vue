<template>
	<DraggableCard>
		<template #title>
			<div>My Research</div>
		</template>
		<template #content>
			<div class="flex flex-col gap-2">
				<p
					v-for="(p, index) in research"
					:key="index"
					:class="randomSelect == index ? 'selected' : ''"
				>
					{{ p }}
				</p>
			</div>
		</template>
	</DraggableCard>
</template>

<script setup lang="ts">
	const props = defineProps<{ research: string[] }>();
	import { onUnmounted, ref } from 'vue';
	import DraggableCard from '../DraggableCard.vue';

	const numParagraphs = props.research.length;

	let randomSelect = ref(Math.floor(Math.random() * numParagraphs));

	const rSelect = setInterval(() => {
		randomSelect.value = Math.floor(Math.random() * numParagraphs);
	}, 4000);

	onUnmounted(() => clearInterval(rSelect));
</script>

<style scoped>
	.selected {
		color: #202c2d;
		text-shadow:
			0 1px #808d93,
			-1px 0 #cdd2d5,
			-1px 2px #808d93,
			-2px 1px #cdd2d5,
			-2px 3px #808d93,
			-3px 2px #cdd2d5,
			-3px 4px #808d93,
			-4px 3px #cdd2d5,
			-4px 5px #808d93,
			-5px 4px #cdd2d5,
			-5px 6px #808d93,
			-6px 5px #cdd2d5;
		transition: all 1s ease-in-out;
	}
</style>
