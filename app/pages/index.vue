<template>
	<div class="flex flex-col gap-5 m-4">
		<DraggableContainer>
			<template #title>
				<div>About me</div>
			</template>
			<template #content>
				<p v-for="p in port.about">
					{{ p }}
				</p>
			</template>
		</DraggableContainer>
	</div>
</template>

<script setup lang="ts">
	import { usePortfolio } from '~/composables/common/usePortfolio';

	const port = usePortfolio();
</script>

<style scoped></style>
