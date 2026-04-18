<template>
	<DraggableCard>
		<template #title>
			<div>My Research</div>
		</template>
		<template #content>
			<div class="flex flex-col gap-2">
				<p v-for="p in research">
					{{ p }}
				</p>
			</div>
		</template>
	</DraggableCard>
</template>

<script setup lang="ts">
	const props = defineProps<{ research: string[] }>();
	import DraggableCard from '../DraggableCard.vue';
</script>

<style scoped></style>
