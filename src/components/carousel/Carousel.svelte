<script>
	import CarouselItem from './CarouselItem.svelte';
	export let carouselItems = ['one', 'two', 'three'];
</script>

<div class="carousel relative w-full">
	<div class="relative overflow-hidden w-full">
		{#each carouselItems as slide, i}
			<input
				class="carousel-open"
				type="radio"
				id="carousel-{i + 1}"
				name="carousel"
				aria-hidden="true"
				hidden={true}
				checked={true}
			/>
			<CarouselItem />

			<label
				for="carousel-{i === 0 ? carouselItems.length : i}"
				class="prev control-{i +
					1} w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
				>‹
			</label>
			<label
				for="carousel-{i === carouselItems.length - 1 ? 1 : i + 2}"
				class="next control-{i +
					1} w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
				>›</label
			>
		{/each}

		<!-- Add additional indicators for each slide-->
		<ol class="carousel-indicators">
			{#each carouselItems as slide, i}
				<li class="inline-block mr-3">
					<label
						for="carousel-{i + 1}"
						class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-gray-900"
						>•</label
					>
				</li>
			{/each}
		</ol>
	</div>
</div>
