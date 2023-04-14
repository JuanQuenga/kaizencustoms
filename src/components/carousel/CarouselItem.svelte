<script>
	export let text = 'Carousel Text Here';
	export let imageUrl =
		'https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80';
	export let buttonHref = '/';
	export let buttonText = 'view product';
</script>

<div class="carousel-item absolute opacity-0" style="height:50vh;">
	<div
		class="mx-auto block flex h-full w-full bg-cover bg-right pt-6 md:items-center md:pt-0"
		style="background-image: url({imageUrl});"
	>
		<div class="container mx-auto">
			<div
				class="flex w-full flex-col items-center px-6 tracking-wide md:ml-16 md:items-start lg:w-1/2"
			>
				<p class="my-4 text-2xl text-black">{text}</p>
				<a
					class="inline-block border-b border-gray-600 text-xl leading-relaxed no-underline hover:border-black hover:text-black"
					href={buttonHref}>{buttonText}</a
				>
			</div>
		</div>
	</div>
</div>
