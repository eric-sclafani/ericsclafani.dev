<template>
	<CoreDraggableCard>
		<template #title>
			<div>Who am I?</div>
		</template>
		<template #content>
			<div class="flex flex-col gap-2">
				<p class="text-center italic">
					Computer nerd | Piano enjoyer | Book reader
				</p>
				<p v-for="p in about">
					{{ p }}
				</p>
			</div>
		</template>
	</CoreDraggableCard>
</template>

<script setup lang="ts">
	const props = defineProps<{ about: string[] }>();
</script>

<style scoped></style>
