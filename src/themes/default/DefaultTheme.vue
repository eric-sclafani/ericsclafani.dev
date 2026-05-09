<template>
	<Transition name="fade" appear>
		<div class="flex justify-between">
			<div class="main-cards">
				<div class="flex gap-3">
					<About class="w-120" :about="port.about"></About>
					<Research
						class="w-120"
						:research="port.research"
					></Research>
				</div>

				<div class="flex gap-3">
					<Skills class="w-160" :skills="port.skills"></Skills>
					<Hobbies class="w-60" :hobbies="port.hobbies"></Hobbies>
					<Contact :links="port.links"></Contact>
				</div>

				<Projects class="w-150" :projects="port.projects"></Projects>
			</div>
			<fieldset class="self-start p-2 border border-dotted rounded">
				<legend align="center">Legend</legend>
				<span class="flex gap-2"><Grip></Grip> Draggable </span>
			</fieldset>
		</div>
	</Transition>
</template>

<script setup lang="ts">
	import type { Portfolio } from '@/core/stores/usePortfolioStore';
	import About from './cards/About.vue';
	import Projects from './cards/Projects.vue';
	import Contact from './cards/Contact.vue';
	import Research from './cards/Research.vue';
	import Skills from './cards/Skills.vue';
	import Hobbies from './cards/Hobbies.vue';
	import { Grip } from '@lucide/vue';
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
