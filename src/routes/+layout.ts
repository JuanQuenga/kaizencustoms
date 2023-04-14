import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import Feature from '../components/bloks/Feature.svelte';
import Grid from '../components/bloks/Grid.svelte';
import Page from '../components/bloks/Page.svelte';
import Teaser from '../components/bloks/Teaser.svelte';
/** @type {import('./$types').LayoutLoad} */

export async function load() {
	storyblokInit({
		accessToken: 'O0giYRLYalykn2KTZfWurgtt',
		use: [apiPlugin],
		components: {
			feature: Feature,
			grid: Grid,
			page: Page,
			teaser: Teaser
		},
		apiOptions: {
			https: true,
			region: 'us'
		}
	});
	const storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi,
		sections: [
			{ slug: 'profile', title: 'Profile' },
			{ slug: 'notifications', title: 'Notifications' }
		]
	};
}
