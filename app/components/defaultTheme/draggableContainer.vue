<template>
	<fieldset
		id="testing"
		ref="elem"
		class="p-5 border-2 border-red-200 hover:border-red-500 border-dashed rounded-2 w-64 cursor-grab active:cursor-grabbing select-none draggable"
		:class="classes"
		:style="elemStyle"
		@mousedown="onMouseDown($event)"
		@mouseup="onMouseUp($event)"
	>
		<legend align="center" class="opacity-75 text-gray-600">
			( <em>{{ elemX }}</em
			>, <em>{{ elemY }}</em> )
		</legend>
		<div class="flex flex-col gap-5">
			<div class="text-center"><slot name="title"></slot></div>
			<slot name="content"></slot>
		</div>
	</fieldset>
</template>

<script setup lang="ts">
	let elemStyle = ref('');
	let classes = reactive({
		block: true,
		fixed: false,
	});
	let elemX = ref(0);
	let elemY = ref(0);

	const elem = useTemplateRef('elem');

	onMounted(() => {
		const _x = parseInt(elem.value!.style.left);
		const _y = parseInt(elem.value!.style.top);

		const { style } = useDraggable(elem, {
			initialValue: { x: _x, y: _y },
			onMove(position, _) {
				elemX.value = position.x;
				elemY.value = position.y;
			},
		});

		elemStyle = style;
	});

	const onMouseDown = (event: MouseEvent): void => {
		classes.fixed = true;
		classes.block = false;
	};

	const onMouseUp = (event: MouseEvent): void => {};
</script>

<style scoped>
	.draggable {
		z-index: 1000;
		box-shadow:
			rgba(0, 0, 0, 0.15) 0px 15px 25px,
			rgba(0, 0, 0, 0.05) 0px 5px 10px;

		transition: border-color 0.3s ease-in-out;
	}
</style>
