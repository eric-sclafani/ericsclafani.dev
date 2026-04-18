<template>
	<DraggableCard>
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
	</DraggableCard>
</template>

<script setup lang="ts">
	import DraggableCard from '../DraggableCard.vue';
	const props = defineProps<{ hobbies: string[] }>();
</script>

<style scoped></style>
