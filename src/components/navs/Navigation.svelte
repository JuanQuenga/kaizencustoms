<script>
	import MobileNavigation from './MobileNavigation.svelte';
	import NavLink from './NavLink.svelte';

	let menuOpen = false;
	let mobileMenuOpen = false;
	let flyoutMenuOpen = false;
	let y = 0;
	$: hasScrolled = y > 40;

	const links = [
		{
			href: '/releases',
			text: 'Releases'
		},
		{
			href: '/contact',
			text: 'Contact'
		}
	];

	const featuredProducts = [
		{
			name: 'Ender Hex Guitar',
			href: '/products/ender-hex-guitar',
			description: 'A 3D printed guitar with a hexagonal body.',
			images: {
				focused: 'https://blog.prusa3d.com/wp-content/uploads/2023/02/beauty_whole-scaled.jpg',
				default: 'https://blog.prusa3d.com/wp-content/uploads/2023/02/beauty2-scaled.jpg'
			}
		},
		{
			name: 'AntiStress Ring',
			href: '/products/anti-stress-ring',
			description: 'A 3D printed ring that helps you relieve stress.',
			images: {
				focused:
					'https://media.printables.com/media/comment_images/be/989f53-39a5-4c50-8d39-5a199ec42059/thumbs/inside/1920x1440/jpg/img_8918.webp',
				default:
					'https://media.printables.com/media/comment_images/1c/bc0ed2-2aac-4c30-b283-4c159f0afb87/thumbs/inside/1920x1440/jpeg/12f079f7-5974-46cc-ba42-dc5ca8a3525c.webp'
			}
		}
	];
</script>

<svelte:window bind:scrollY={y} />

{#if mobileMenuOpen}
	<MobileNavigation bind:mobileMenuOpen {featuredProducts} />
{/if}

<header class="relative overflow-hidden">
	<!-- Top navigation -->
	<nav
		aria-label="Top"
		class:bg-white={hasScrolled || flyoutMenuOpen}
		class:bg-opacity-100={hasScrolled}
		class:backdrop-blur-xl={false}
		class:backdrop-filter={false}
		class="fixed top-0 z-20 w-full bg-transparent"
	>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center">
				<!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
				<button
					type="button"
					class="rounded-md bg-transparent p-2 text-gray-800 lg:hidden"
					on:click={() => {
						mobileMenuOpen = mobileMenuOpen ? false : true;
					}}
				>
					<span class="sr-only">Open menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>

				<!-- Logo -->
				<div class="ml-4 flex lg:ml-0">
					<a href="/" class="text-2xl font-bold uppercase">
						<span class="sr-only">Your Company</span>
						<!-- <img
							class="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt=""
						/> -->
						Kaizen
					</a>
				</div>

				<!-- Flyout menus -->
				<div class="hidden lg:ml-8 lg:block lg:self-stretch">
					<div class="flex h-full space-x-8">
						<div class="flex">
							<div class="relative flex">
								<!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
								<button
									type="button"
									on:click={() => (flyoutMenuOpen = flyoutMenuOpen ? false : true)}
									class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
									aria-expanded="false">Products</button
								>
							</div>

							<!--
                  'Flyout menu, show/hide based on flyout menu state.

                  Entering: "transition ease-out duration-200"
                    From: "opacity-0"
                    To: "opacity-100"
                  Leaving: "transition ease-in duration-150"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
							<div
								hidden={!flyoutMenuOpen}
								class="absolute inset-x-0 top-full bg-white text-sm text-gray-500 transition duration-200 ease-out"
							>
								<!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
								<div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
								<!-- Fake border when menu is open -->
								<div class="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8" aria-hidden="true">
									<!-- Open: "bg-gray-200", Closed: "bg-transparent" -->
									<div class="h-px w-full bg-transparent transition-colors duration-200 ease-out" />
								</div>

								<div class="relative">
									<div class="mx-auto max-w-7xl px-8">
										<div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
											<div class="col-start-2 grid grid-cols-2 gap-x-8">
												{#each featuredProducts as product}
													<div class="group relative text-base sm:text-sm">
														<div
															class="bg-cover bg-bottom bg-[url('{product.images
																.focused}')] aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 group-hover:scale-105"
														>
															<img
																src={product.images.default}
																alt={product.description}
																class="object-cover object-center group-hover:hidden group-focus:hidden"
															/>
															<img
																src={product.images.focused}
																alt={product.description}
																class="hidden object-cover object-center group-hover:block group-focus:block"
															/>
														</div>
														<a href={product.href} class="mt-6 block font-medium text-gray-900">
															<span class="absolute inset-0 z-10" aria-hidden="true" />
															{product.name}
														</a>
														<p aria-hidden="true" class="mt-1">Shop now →</p>
													</div>
												{/each}
											</div>
											<div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
												<div>
													<p id="Clothing-heading" class="font-medium text-gray-900">3D Printing</p>
													<ul
														role="list"
														aria-labelledby="Clothing-heading"
														class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
													>
														<li class="flex">
															<a href="/" class="hover:text-gray-800">Toys</a>
														</li>
													</ul>
												</div>

												<div>
													<p id="Accessories-heading" class="font-medium text-gray-900">
														Woodworking
													</p>
													<ul
														role="list"
														aria-labelledby="Accessories-heading"
														class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
													>
														<li class="flex">
															<a href="/" class="hover:text-gray-800">Cutting Boards</a>
														</li>
													</ul>
												</div>

												<div>
													<p id="Brands-heading" class="font-medium text-gray-900">Technology</p>
													<ul
														role="list"
														aria-labelledby="Brands-heading"
														class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
													>
														<li class="flex">
															<a href="/" class="hover:text-gray-800">Automated Feeder</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<a
							href="/"
							class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
							>Services</a
						>

						<a
							href="/"
							class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
							>Contact</a
						>
					</div>
				</div>

				<div class="ml-auto flex items-center">
					<!-- <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
						<a href="/" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
						<span class="h-6 w-px bg-gray-200" aria-hidden="true" />
						<a href="/" class="text-sm font-medium text-gray-700 hover:text-gray-800"
							>Create account</a
						>
					</div> -->

					<!-- Cart -->
					<div class="ml-4 flow-root lg:ml-6">
						<a href="/" class="group -m-2 flex items-center p-2">
							<svg
								class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
								/>
							</svg>
							<span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span
							>
							<span class="sr-only">items in cart, view bag</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>
