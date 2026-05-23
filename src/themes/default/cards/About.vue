<template>
	<DraggableCard>
		<template #title>
			<div>Who am I?</div>
		</template>
		<template #content>
			<div class="flex flex-col gap-2">
				<div class="scrolling-text-wrapper">
					<p class="scrolling-text">
						Computer nerd | Book reader | Bird watcher
					</p>
				</div>
				<p
					v-for="(p, i) in about"
					:key="i"
					v-html="
						emphasizeText(p, [
							'actually',
							'Stony Brook University',
							'Full Stack Software Developer',
						])
					"
				></p>
			</div>
		</template>
	</DraggableCard>
</template>

<script setup lang="ts">
	import { emphasizeText } from '@/utils/textDisplayUtils';
	import DraggableCard from '../DraggableCard.vue';

	const props = defineProps<{ about: string[] }>();
</script>

<style scoped>
	.scrolling-text-wrapper {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
	}

	.scrolling-text {
		text-align: center;
		font-style: italic;
		animation: slide-out 30s linear infinite;
	}

	@keyframes slide-out {
		0% {
			transform: translateX(0%);
		}
		49% {
			transform: translateX(100%);
			opacity: 1;
		}

		49.9% {
			transform: translateX(100%);
			opacity: 0;
		}
		50% {
			transform: translateX(-100%);
			opacity: 0;
		}
		50.1% {
			transform: translateX(-100%);
			opacity: 1;
		}
		100% {
			transform: translateX(0%);
			opacity: 1;
		}
	}
</style>
