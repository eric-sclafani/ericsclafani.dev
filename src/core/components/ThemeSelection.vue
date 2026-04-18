<template>
	<nav class="flex gap-4 m-1 p-2">
		<h1 class="mt-2 font-bold">Choose Theme:</h1>
		<div class="flex gap-2.5">
			<NavButton
				v-for="btn of btns"
				:is-current-theme="currentTheme == btn.themeName"
				@click="themeStore.setTheme(btn.themeName)"
			>
				<template #icon>
					<component :is="btn.icon"></component>
				</template>
				<template #label> {{ btn.label }}</template>
			</NavButton>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import { Grip, Terminal, HandMetal, Home } from '@lucide/vue';
	import { useThemeStore } from '../stores/useThemeStore';
	import { computed, type Component } from 'vue';
	import NavButton from './NavButton.vue';

	const themeStore = useThemeStore();
	const currentTheme = computed(() => themeStore.getCurrentTheme);

	interface ThemeButton {
		themeName: string;
		label: string;
		icon: Component;
	}

	const btns: ThemeButton[] = [
		{
			themeName: 'default',
			label: 'Default',
			icon: Home,
		},
		{
			themeName: 'nerd',
			label: 'Nerd',
			icon: Terminal,
		},
		{
			themeName: 'pixel',
			label: 'Pixel Perfect',
			icon: Grip,
		},
		{
			themeName: 'oldschool',
			label: "Back to the 90's",
			icon: HandMetal,
		},
	];
</script>
