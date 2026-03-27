<template>
	<nav class="flex items-center gap-4 p-2 border-2 rounded-2xl">
		<h1 class="font-bold">Choose Theme:</h1>
		<div class="flex gap-2.5">
			<NuxtLink to="/">
				<IconButton>
					<template #icon><Home></Home></template>
					<template #label> Default </template>
				</IconButton>
			</NuxtLink>
			<NuxtLink to="/">
				<IconButton :disabled="true">
					<template #icon>
						<Terminal></Terminal>
					</template>
					<template #label> Nerd </template>
				</IconButton>
			</NuxtLink>
			<NuxtLink to="/">
				<IconButton>
					<template #icon>
						<Grip></Grip>
					</template>
					<template #label> Pixel Perfect </template>
				</IconButton>
			</NuxtLink>
			<NuxtLink to="/">
				<IconButton>
					<template #icon>
						<HandMetal> </HandMetal>
					</template>
					<template #label> Back to the 90's </template>
				</IconButton>
			</NuxtLink>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import { Grip, Terminal, HandMetal, Home } from 'lucide-vue-next';
</script>
