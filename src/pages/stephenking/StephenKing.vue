<template>
	<BasePageLayout>
		<!-- <div v-for="review of bookReviews" class="flex flex-col gap-1">
			<span class="font-bold">{{ review.bookTitle }}</span>
			<p>{{ review.review }}</p>
		</div> -->
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
	});

	// const bookReviews: Review[] = [
	// 	{
	// 		bookTitle: 'Carrie',
	// 		review: '',
	// 	},
	// 	{
	// 		bookTitle: "Salem's Lot",
	// 		review: '',
	// 	},
	// 	{
	// 		bookTitle: 'Rage',
	// 		review: '',
	// 	},
	// 	{
	// 		bookTitle: 'The Shining',
	// 		review: '',
	// 	},
	// 	{
	// 		bookTitle: 'The Stand',
	// 		review: '',
	// 	},
	// 	{
	// 		bookTitle: 'Cujo',
	// 		review: '',
	// 	},
	// 	{
	// 		bookTitle: 'The Body',
	// 		review: '',
	// 	},
	// 	{
	// 		bookTitle: 'Shawshank Redemption',
	// 		review: '',
	// 	},
	// 	{
	// 		bookTitle: 'Pet Semetary',
	// 		review: '',
	// 	},
	// 	{
	// 		bookTitle: 'It',
	// 		review: "Probably the best book I've read. Stephen King's attention to characterization is on full display here. Like many of his books, this one is more-so character and narrative driven rather than driven by plot. Since the book transitions between childhood and adulthood, I love how you can see their childhood traits reflected in their adult lives.",
	// 	},
	// 	{
	// 		bookTitle: 'Doctor Sleep',
	// 		review: '',
	// 	},
	// ];
</script>

<style scoped></style>
