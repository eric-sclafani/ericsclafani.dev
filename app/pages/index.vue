<template>
	<div class="flex flex-col gap-2">
		<CoreThemeSelection></CoreThemeSelection>
		<div class="flex">
			<PageNavBar></PageNavBar>
			<DefaultTheme
				v-if="currentTheme == 'default'"
				:port="port"
			></DefaultTheme>
		</div>
	</div>
</template>

<script setup lang="ts">
	import PageNavBar from '~/components/core/PageNavBar.vue';
	import { usePortfolio } from '~/composables/common/usePortfolio';
	import { useThemeHandler } from '~/composables/common/useThemeHandler';

	const port = usePortfolio();
	const { currentTheme } = useThemeHandler();
</script>
