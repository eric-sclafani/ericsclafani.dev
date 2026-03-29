<template>
	<fieldset
		v-draggable="plugins"
		class="bg-gray-100 p-4 border-3 border-red-200 hover:border-red-500 active:border-3 border-dashed rounded-2 cursor-grab active:cursor-grabbing select-none draggable"
	>
		<legend align="center" class="opacity-75 text-gray-600 text-2xl">
			<div class="flex items-center font-bold text-center">
				<slot name="title"></slot>
			</div>
		</legend>

		<div class="flex flex-col">
			<slot name="content"></slot>
			<div class="justify-self-end text-center">
				( <em>{{ elemX }}</em
				>, <em>{{ elemY }}</em> )
			</div>
		</div>
	</fieldset>
</template>

<script setup lang="ts">
	import { events, vDraggable } from '@neodrag/vue';

	let elemX = ref(0);
	let elemY = ref(0);

	const plugins = [
		events({
			// onDragStart: (data) => console.log('Started:', data.offset),
			onDrag: (data) => onElemDrag(data.offset.x, data.offset.y),
			// onDragEnd: (data) => console.log('Ended:', data.offset),
		}),
	];

	const onElemDrag = (x: number, y: number) => {
		elemX.value = Math.round(x);
		elemY.value = Math.round(y);
	};
</script>

<style scoped>
	.draggable {
		box-shadow:
			rgba(0, 0, 0, 0.15) 0px 15px 25px,
			rgba(0, 0, 0, 0.05) 0px 5px 10px;

		transition: border-color 0.3s ease-in-out;
	}
</style>
