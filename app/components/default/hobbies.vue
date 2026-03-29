<template>
	<CoreDraggableCard>
		<template #title>
			<div>Off the clock</div>
		</template>
		<template #content>
			<ul v-for="h in hobbies" class="flex flex-col">
				<li>
					{{ h }}
				</li>
			</ul>
		</template>
	</CoreDraggableCard>
</template>

<script setup lang="ts">
	const props = defineProps<{ hobbies: string[] }>();
</script>

<style scoped></style>
