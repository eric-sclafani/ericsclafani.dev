<template>
	<DraggableCard>
		<template #title> Contact </template>
		<template #content>
			<div class="flex flex-col items-center gap-3 pb-6">
				<LinkIcon
					:link="'mailto:' + links['email']"
					icon-url="/mail.png"
				></LinkIcon>
				<LinkIcon
					:link="links['github']"
					icon-url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
				></LinkIcon>
				<LinkIcon
					:link="links['linkedin']"
					icon-url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
				></LinkIcon>
			</div>
		</template>
	</DraggableCard>
</template>

<script setup lang="ts">
	import LinkIcon from '../components/LinkIcon.vue';
	import DraggableCard from '../DraggableCard.vue';
	const props = defineProps<{ links: Record<string, string> }>();
</script>

<style scoped></style>
