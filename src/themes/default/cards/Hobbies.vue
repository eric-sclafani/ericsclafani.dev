<template>
	<DraggableCard>
		<template #title>
			<div>Off the clock</div>
		</template>
		<template #content>
			<ul v-for="h in displayHobbies" class="flex flex-col">
				<li>
					{{ h }}
				</li>
			</ul>
		</template>
	</DraggableCard>
</template>

<script setup lang="ts">
	import { onUnmounted, ref } from 'vue';
	import DraggableCard from '../DraggableCard.vue';
	const props = defineProps<{ hobbies: string[] }>();

	const displayHobbies = ref(props.hobbies);

	const rSort = setInterval(() => {
		displayHobbies.value = props.hobbies.sort(() => Math.random() - 0.5);
	}, 3000);

	onUnmounted(() => clearInterval(rSort));
</script>

<style scoped></style>
