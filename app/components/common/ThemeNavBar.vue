<template>
	<nav class="flex items-center gap-4 p-2 border-2 rounded-2xl">
		<h1 class="font-bold">Choose Theme:</h1>
		<div class="flex gap-2.5">
			<NuxtLink to="/">
				<CommonIconButton>
					<template #label> Default </template>
				</CommonIconButton>
			</NuxtLink>
			<NuxtLink to="/">
				<CommonIconButton>
					<template #icon>
						<Terminal></Terminal>
					</template>
					<template #label> Nerd </template>
				</CommonIconButton>
			</NuxtLink>
			<NuxtLink to="/">
				<CommonIconButton>
					<template #icon>
						<Grip></Grip>
					</template>
					<template #label> Pixel Perfect </template>
				</CommonIconButton>
			</NuxtLink>
			<NuxtLink to="/">
				<CommonIconButton>
					<template #icon>
						<HandMetal> </HandMetal>
					</template>
					<template #label> Back to the 90's </template>
				</CommonIconButton>
			</NuxtLink>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import { Grip, Terminal, HandMetal } from 'lucide-vue-next';
</script>
