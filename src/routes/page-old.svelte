<script>
	//@ts-nocheck
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		console.log(' - onMount - ');
		console.log(data);
		console.log('^ onMount');
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<div>
	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{:else if data.error}
		Error {data.error.status}: {data.error.response}
	{:else}
		Loading stuff...
	{/if}
</div>
