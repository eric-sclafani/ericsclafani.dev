<template>
	<div class="flex flex-col gap-2">
		<ThemeSelection></ThemeSelection>
		<div class="flex">
			<PageNavBar></PageNavBar>
			<DefaultTheme
				v-if="currentTheme == 'default'"
				:port="port"
			></DefaultTheme>
			<NerdTheme v-if="currentTheme == 'nerd'" :port="port"></NerdTheme>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { usePortfolioStore } from '@/core/stores/usePortfolioStore';
	import { useThemeStore } from '@/core/stores/useThemeStore';
	import ThemeSelection from '@/core/components/ThemeSelection.vue';
	import PageNavBar from '@/core/components/PageNavBar.vue';
	import DefaultTheme from '@/themes/default/DefaultTheme.vue';
	import NerdTheme from '@/themes/nerd/NerdTheme.vue';
	import { computed } from 'vue';

	const port = usePortfolioStore();

	const themeStore = useThemeStore();
	const currentTheme = computed(() => themeStore.getCurrentTheme);
</script>
