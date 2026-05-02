<template>
	<div :class="bgClass"></div>
	<RouterView></RouterView>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useThemeStore } from './core/stores/useThemeStore';

	const { currentTheme } = useThemeStore();
	const bgClass = computed(() => ({
		'bg-default': currentTheme == 'default',
		'bg-nerd': currentTheme == 'nerd',
	}));
</script>

<style scoped></style>
