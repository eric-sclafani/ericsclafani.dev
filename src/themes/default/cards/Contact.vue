<template>
	<DraggableCard>
		<template #content>
			<div class="flex">hello</div>
		</template>
		<template #title> Contact </template>
	</DraggableCard>
</template>

<script setup lang="ts">
	import DraggableCard from '../DraggableCard.vue';
	const props = defineProps<{ links: Record<string, string> }>();
</script>

<style scoped></style>
