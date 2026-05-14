<template>
	<DraggableCard>
		<template #title> Contact </template>
		<template #content>
			<div class="flex flex-col gap-3">
				<span>Say hello at: {{ props.links['email'] }}</span>
				<a :href="props.links['github']" target="_blank">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
						width="40"
					/>
				</a>
			</div>
		</template>
	</DraggableCard>
</template>

<script setup lang="ts">
	import DraggableCard from '../DraggableCard.vue';
	const props = defineProps<{ links: Record<string, string> }>();
</script>

<style scoped></style>
