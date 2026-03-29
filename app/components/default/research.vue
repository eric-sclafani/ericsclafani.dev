<template>
	<CoreDraggableCard>
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
	</CoreDraggableCard>
</template>

<script setup lang="ts">
	const props = defineProps<{ research: string[] }>();
</script>

<style scoped></style>
