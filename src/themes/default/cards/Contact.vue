<template>
	<DraggableCard>
		<template #title> Contact </template>
		<template #content>
			<div class="flex flex-col items-center gap-3 pb-6">
				<LinkIcon
					v-for="(icon, index) in links"
					:key="index"
					:class="currentSelected == index ? 'selected' : ''"
					:link="icon.linkUrl"
					:icon-url="icon.iconUrl"
				></LinkIcon>
			</div>
		</template>
	</DraggableCard>
</template>

<script setup lang="ts">
	import type { Link } from '@/core/stores/usePortfolioStore.ts';
	import LinkIcon from '../components/LinkIcon.vue';
	import DraggableCard from '../DraggableCard.vue';
	import { onUnmounted, ref } from 'vue';
	const props = defineProps<{ links: Link[] }>();

	let currentSelected = ref(0);

	const changeSelection = setInterval(() => {
		if (currentSelected.value == props.links.length - 1) {
			currentSelected.value = 0;
		} else {
			currentSelected.value++;
		}
	}, 3500);

	onUnmounted(() => clearInterval(changeSelection));
</script>

<style scoped>
	.selected {
		animation: spin 3s;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
