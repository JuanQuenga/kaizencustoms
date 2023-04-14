<script lang="ts">
	import IntersectionObserver from '../IntersectionObserver.svelte';
	const blobHeight = 500;
	let mousePosition = { x: 0, y: 0 };
	const onMousemove = (event: MouseEvent) => {
		mousePosition.x = event.clientX;
		mousePosition.y = event.clientY;
	};
</script>

<svelte:body on:mousemove={onMousemove} />

<IntersectionObserver let:intersecting>
	<div
		class:translate-x-0={intersecting}
		class:-translate-x-full={!intersecting}
		class="relative isolate overflow-hidden transition-all duration-1000 lg:pt-10"
	>
		<!-- Blob -->
		<!-- <div
		style="left: {mousePosition.x}px; top: {mousePosition.y}px;"
		class="absolute -z-20 aspect-1 h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800"
	>
		{mousePosition.x}
		{mousePosition.y}
	</div> -->
		<!-- Blur -->
		<!-- <div
		class="absolute inset-y-0 right-1/4 -z-10 h-full w-[200%] origin-top-right skew-x-[-30deg] backdrop-blur-[200px]"
	/> -->
		<!-- Shadow -->
		<div
			class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-400 via-red-100 to-sky-200 shadow-xl shadow-gray-600/20 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
			aria-hidden="true"
		/>
		<!-- Hero Section -->
		<div class="z-30 mx-auto max-w-7xl px-6 py-20 sm:py-40 md:py-32 lg:px-8">
			<div
				class=" mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
			>
				<h1
					class:translate-x-0={intersecting}
					class:-translate-x-full={!intersecting}
					class="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 transition-all duration-1000 sm:text-6xl lg:col-span-2 xl:col-auto"
				>
					Uncover Exclusive, Limited Quantity Finds
				</h1>
				<div
					class:translate-x-0={intersecting}
					class:-translate-x-full={!intersecting}
					class="mt-6 max-w-xl transition-all duration-1000 lg:mt-0 xl:col-end-1 xl:row-start-1"
				>
					<p class="tranlate-x- text-lg leading-8 text-gray-600">
						Explore our captivating collection of limited series product releases, designed to
						intrigue and inspire. Each item is meticulously crafted to ensure uniqueness and
						quality, offering you the chance to own a rare and extraordinary piece.
					</p>
					<div class="mt-10 flex items-center gap-x-6">
						<a
							href="/"
							class="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Get started</a
						>
						<a href="/" class="text-sm font-semibold leading-6 text-gray-900"
							>Learn more <span aria-hidden="true">→</span></a
						>
					</div>
				</div>
				<img
					src="https://pimages.toolbox.com/wp-content/uploads/2022/10/04113614/3D-printing-machine-in-operation-used-for-3D-rapid-prototype-processing.jpg"
					alt=""
					class:translate-x-0={intersecting}
					class:translate-x-full={!intersecting}
					class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover shadow-2xl transition-all duration-1000 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
				/>
			</div>
		</div>
		<!-- Bottom Gradient -->
		<div class="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-gray-50 sm:h-32" />
	</div>
</IntersectionObserver>
