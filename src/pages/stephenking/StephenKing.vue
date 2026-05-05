<template>
	<BasePageLayout>
		<div class="flex flex-col">
			<div class="flex flex-col self-center">
				<span>
					Warning: this page contains
					<span class="font-bold italic">SPOILERS</span>
					for many Stephen King books. You've been warned...
				</span>
				<span
					>Books are in publication reading order according to
					<a
						href="https://stephenking.com/works/novel/"
						target="_blank"
						class="text-blue-600 underline"
						>stephenking.com</a
					></span
				>
			</div>

			<div v-for="review of reviews" class="flex flex-col gap-1 mb-3">
				<span class="font-bold"
					>{{ review.bookTitle }} :
					<em>({{ review.rating }})</em></span
				>
				<p class="flex flex-col gap-3" v-html="review.reviewHTML"></p>
			</div>
		</div>
	</BasePageLayout>
</template>

<script setup lang="ts">
	import { loadMarkdown } from '@/utils/markdownUtils';
	import BasePageLayout from '../BasePageLayout.vue';
	import { onMounted, ref } from 'vue';

	interface Review {
		bookTitle: string;
		rating: string;
		reviewHTML: string;
		displayOrder: string;
	}

	const reviews = ref<Review[]>([]);

	onMounted(() => {
		const files: Record<string, string> = import.meta.glob(
			'./reviews/*.md',
			{
				query: '?raw',
				import: 'default',
				eager: true,
			},
		);
		const markdown = loadMarkdown(files);
		markdown.forEach((m) => {
			const review: Review = {
				bookTitle: m.metadata['bookTitle'] as string,
				rating: m.metadata['rating'] as string,
				displayOrder: m.metadata['order'] as string,
				reviewHTML: m.HTMLContent,
			};
			reviews.value.push(review);
		});
	});
</script>

<style scoped></style>
