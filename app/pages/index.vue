<template>
	<CoreThemeNavBar></CoreThemeNavBar>
	<DefaultTheme v-if="currentTheme == 'default'" :port="port"></DefaultTheme>
</template>

<script setup lang="ts">
	import { usePortfolio } from '~/composables/common/usePortfolio';
	import { useThemeHandler } from '~/composables/common/useThemeHandler';

	const port = usePortfolio();
	const { currentTheme } = useThemeHandler();
</script>
