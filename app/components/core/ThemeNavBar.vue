<template>
	<nav class="flex gap-4 m-1 p-2">
		<h1 class="mt-2 font-bold">Choose Theme:</h1>
		<div class="flex gap-2.5">
			<CoreNavButton
				:is-current-theme="currentTheme == 'default'"
				@click="setTheme('default')"
			>
				<template #icon><Home></Home></template>
				<template #label> Default </template>
			</CoreNavButton>

			<CoreNavButton
				:is-current-theme="currentTheme == 'nerd'"
				@click="setTheme('nerd')"
			>
				<template #icon>
					<Terminal></Terminal>
				</template>
				<template #label> Nerd </template>
			</CoreNavButton>

			<CoreNavButton
				:is-current-theme="currentTheme == 'pixel'"
				@click="setTheme('pixel')"
			>
				<template #icon>
					<Grip></Grip>
				</template>
				<template #label> Pixel Perfect </template>
			</CoreNavButton>

			<CoreNavButton
				:is-current-theme="currentTheme == 'oldschool'"
				@click="setTheme('oldschool')"
			>
				<template #icon>
					<HandMetal> </HandMetal>
				</template>
				<template #label> Back to the 90's </template>
			</CoreNavButton>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import { Grip, Terminal, HandMetal, Home } from 'lucide-vue-next';
	import { useThemeHandler } from '~/composables/common/useThemeHandler';
	const { currentTheme, setTheme } = useThemeHandler();
</script>
