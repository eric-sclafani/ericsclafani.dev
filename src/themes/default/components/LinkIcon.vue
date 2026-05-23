<template>
	<a :href="link" target="_blank" class="icon-img">
		<img :src="iconUrl" width="40" draggable="false" />
	</a>
</template>

<script setup lang="ts">
	const props = defineProps<{ link: string | undefined; iconUrl: string }>();
</script>

<style scoped>
	.icon-img:hover {
		cursor: pointer;
		border-radius: 10px;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
	}
</style>
