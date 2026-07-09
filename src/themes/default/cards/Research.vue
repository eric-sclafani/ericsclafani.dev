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
	}, 5000);

	onUnmounted(() => clearInterval(rSelect));
</script>

<style scoped>
	.selected {
		color: #cf1500;
		text-shadow:
			0 1px 0px #378ab4,
			1px 0 0px #5dabcd,
			1px 2px 1px #378ab4,
			2px 1px 1px #5dabcd,
			2px 3px 2px #378ab4,
			3px 2px 2px #5dabcd,
			3px 4px 2px #378ab4,
			4px 3px 3px #5dabcd,
			4px 5px 3px #378ab4,
			5px 4px 2px #5dabcd,
			5px 6px 2px #378ab4,
			6px 5px 2px #5dabcd,
			6px 7px 1px #378ab4,
			7px 6px 1px #5dabcd,
			7px 8px 0px #378ab4,
			8px 7px 0px #5dabcd;
		transition: all 3s ease-in-out;
	}
</style>
