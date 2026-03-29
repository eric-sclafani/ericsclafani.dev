<template>
	<div class="flex flex-col items-center">
		<button
			class="hover:bg-gray-200 active:bg-gray-300 p-2 border-2 rounded-2xl transition-colors hover:cursor-pointer"
			@click="onClick"
		>
			<div class="flex gap-2">
				<slot name="icon" />
				<slot name="label" />
			</div>
		</button>
		<span :hidden="isCurrentTheme"><ArrowBigUp></ArrowBigUp></span>
	</div>
</template>

<script setup lang="ts">
	import { ArrowBigUp } from 'lucide-vue-next';
	const props = defineProps<{ isCurrentTheme: boolean }>();
	const emit = defineEmits(['click']);
	const onClick = () => emit('click');
</script>
