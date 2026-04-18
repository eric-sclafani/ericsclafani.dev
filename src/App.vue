<template>
	<div :class="bgClass"></div>
	<RouterView></RouterView>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useThemeStore } from './core/stores/useThemeStore';

	const { currentTheme } = useThemeStore();
	const bgClass = computed(() => ({
		'bg-default': currentTheme.value == 'default',
		'bg-nerd': currentTheme.value == 'nerd',
	}));
</script>

<style scoped></style>
