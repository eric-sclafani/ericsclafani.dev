<template>
	<div class="flex flex-col gap-2 m-2">
		<NavButton>
			<template #icon> <Sandwich></Sandwich></template>
			<template #label>Chicken Sandys'</template>
		</NavButton>

		<NavButton>
			<template #icon><Crown></Crown></template>
			<template #label>Stephen KING</template>
		</NavButton>

		<NavButton>
			<template #icon> <BriefcaseBusiness></BriefcaseBusiness></template>
			<template #label>Cool portfolios</template>
		</NavButton>

		<NavButton>
			<template #icon> <NotebookPen></NotebookPen></template>
			<template #label>Madlibs</template>
		</NavButton>

		<NavButton>
			<template #icon> <Globe></Globe></template>
			<template #label>The internet</template>
		</NavButton>
	</div>
</template>

<script setup lang="ts">
	import {
		BriefcaseBusiness,
		Crown,
		Globe,
		NotebookPen,
		Sandwich,
	} from '@lucide/vue';
	import type { Component } from 'vue';
	import NavButton from './NavButton.vue';

	const props = defineProps<{}>();

	interface NavButton {
		label: string;
		pageUrl: string;
		icon: Component;
	}
</script>

<style scoped></style>
