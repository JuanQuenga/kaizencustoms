<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import StoreSection from '../components/sections/StoreSection.svelte';
	import AboutSection from '../components/sections/AboutSection.svelte';
	import Carousel from '../components/carousel/Carousel.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);

	onMount(() => {
		console.log(' - onMount - ');
		console.log(data);
		console.log('^ onMount');
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<!-- <body class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
	<Carousel />

	{#if data.story}
		<StoreSection storeItems={data.story.content} />
	{:else}
		Loading store items...
	{/if}

	<AboutSection />
</body> -->

body
