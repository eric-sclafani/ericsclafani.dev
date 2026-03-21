<template>
	<button
		class="hover:bg-gray-200 active:bg-gray-300 p-2 border-2 rounded-2xl transition-colors hover:cursor-pointer"
		:disabled="props.disabled"
		@click="onClick"
	>
		<div class="flex gap-2">
			<slot name="icon" />
			<slot name="label" />
		</div>
	</button>
</template>

<script setup lang="ts">
	const props = defineProps<{
		disabled?: boolean;
	}>();

	const emit = defineEmits(['click']);
	const onClick = () => emit('click');
</script>
