<template>
	<nav class="flex items-center gap-4 m-1 p-2 border-2 rounded-2xl">
		<h1 class="font-bold">Choose Theme:</h1>
		<div class="flex gap-2.5">
			<NuxtLink to="/">
				<CoreIconButton>
					<template #icon><Home></Home></template>
					<template #label> Default </template>
				</CoreIconButton>
			</NuxtLink>
			<NuxtLink to="/">
				<CoreIconButton :disabled="true">
					<template #icon>
						<Terminal></Terminal>
					</template>
					<template #label> Nerd </template>
				</CoreIconButton>
			</NuxtLink>
			<NuxtLink to="/">
				<CoreIconButton>
					<template #icon>
						<Grip></Grip>
					</template>
					<template #label> Pixel Perfect </template>
				</CoreIconButton>
			</NuxtLink>
			<NuxtLink to="/">
				<CoreIconButton>
					<template #icon>
						<HandMetal> </HandMetal>
					</template>
					<template #label> Back to the 90's </template>
				</CoreIconButton>
			</NuxtLink>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import { Grip, Terminal, HandMetal, Home } from 'lucide-vue-next';
</script>
