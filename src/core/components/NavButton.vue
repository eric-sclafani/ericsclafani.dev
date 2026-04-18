<template>
	<div class="flex flex-col">
		<button
			class="hover:bg-gray-200 active:bg-gray-300 p-2 border-2 rounded-2xl hover:cursor-pointer nav-btn"
			:class="isCurrentTheme ? 'border-3' : ''"
			@click="onClick"
		>
			<div class="flex gap-2">
				<slot name="icon" />
				<slot name="label" />
			</div>
		</button>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{ isCurrentTheme?: boolean }>();
	const emit = defineEmits(['click']);
	const onClick = () => emit('click');
</script>

<style scoped>
	.nav-btn {
		/* box-shadow:
			rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
			rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
		transition: border 0.1s;
	}
</style>
