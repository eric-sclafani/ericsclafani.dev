<template>
	<Transition name="fade" appear>
		<div>
			<div class="flex gap-3">
				<About class="w-120" :about="port.about"></About>
				<Research class="w-120" :research="port.research"></Research>
			</div>

			<div class="flex gap-3">
				<Skills class="w-160" :skills="port.skills"></Skills>
				<Hobbies class="w-60" :hobbies="port.hobbies"></Hobbies>
				<Contact class="self-start" :links="port.links"></Contact>
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
	import type { Portfolio } from '@/core/stores/usePortfolioStore';
	import About from './cards/About.vue';
	import Contact from './cards/Contact.vue';
	import Research from './cards/Research.vue';
	import Skills from './cards/Skills.vue';
	import Hobbies from './cards/Hobbies.vue';
	const props = defineProps<{ port: Portfolio }>();
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
