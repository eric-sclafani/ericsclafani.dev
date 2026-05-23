<template>
	<fieldset
		v-draggable="plugins"
		class="bg-gray-100 border-3 border-red-200 hover:border-red-500 active:border-3 border-dashed cursor-grab active:cursor-grabbing select-none draggable"
	>
		<legend align="center" class="opacity-75 text-gray-600 text-2xl">
			<div class="flex items-center gap-1 font-bold text-center">
				<slot name="title"></slot>
			</div>
		</legend>

		<div class="flex flex-col">
			<div class="flex justify-between">
				<span class="pl-1">
					<Grip></Grip>
				</span>
				<div class="pr-2">
					(<em>{{ elemX }}</em
					>, <em>{{ elemY }}</em
					>)
				</div>
			</div>

			<div class="content">
				<slot name="content"></slot>
			</div>
		</div>
	</fieldset>
</template>

<script setup lang="ts">
	import { events, vDraggable } from '@neodrag/vue';
	import { Grip } from '@lucide/vue';
	import { ref } from 'vue';

	let elemX = ref(0);
	let elemY = ref(0);

	const plugins = [
		events({
			onDrag: (data) => onElemDrag(data.offset.x, data.offset.y),
		}),
	];

	const onElemDrag = (x: number, y: number) => {
		elemX.value = Math.round(x);
		elemY.value = Math.round(y);
	};
</script>

<style scoped>
	.draggable {
		margin: 10px;
		box-shadow:
			rgba(0, 0, 0, 0.15) 0px 15px 25px,
			rgba(0, 0, 0, 0.05) 0px 5px 10px;

		transition: border-color 0.3s ease-in-out;
	}

	.content {
		padding: 10px;
	}
</style>
