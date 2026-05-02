<template>
	<NavButton @click="navToHome()">
		<template #icon>
			<ArrowLeft></ArrowLeft>
		</template>
		<template #label>Back to Home</template>
	</NavButton>
	<slot></slot>
</template>

<script setup lang="ts">
	import NavButton from '@/core/components/NavButton.vue';
	import router from '@/router';
	import { ArrowLeft } from '@lucide/vue';

	const navToHome = (): void => {
		router.push('/');
	};
</script>
