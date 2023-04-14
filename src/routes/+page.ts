export async function load({ parent }) {
	const { storyblokApi } = await parent();

	try {
		const dataStory = await storyblokApi.get('cdn/stories/home', {
			version: 'draft'
		});

		return {
			story: dataStory.data.story
		};
	} catch (error) {
		console.log('error', error);

		return {
			error
		};
	}
}
