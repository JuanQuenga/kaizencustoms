<script lang="ts">
	import MobileNavLink from './MobileNavLink.svelte';

	export let mobileMenuOpen: boolean = false;
	export let featuredProducts: any[];
	let links: any;
	let serviceTabOpen = false;
</script>

<!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  -->

<div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
	<!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
	<div class="fixed inset-0 bg-black bg-opacity-25" />

	<div class="fixed inset-0 z-40 flex">
		<!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
		<div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
			<div class="flex px-4 pb-2 pt-5">
				<button
					type="button"
					on:click={() => {
						mobileMenuOpen = mobileMenuOpen ? false : true;
					}}
					class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
				>
					<span class="sr-only">Close menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- Links -->
			<div class="mt-2">
				<div class="border-b border-gray-200">
					<div class="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
						<!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" -->
						<button
							on:click={() => {
								serviceTabOpen = false;
							}}
							id="tabs-1-tab-1"
							class:border-indigo-600={!serviceTabOpen}
							class:text-indigo-600={!serviceTabOpen}
							class:border-transparent={serviceTabOpen}
							class:text-gray-900={serviceTabOpen}
							class="flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
							aria-controls="tabs-1-panel-1"
							role="tab"
							type="button">Products</button
						>

						<!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" -->
						<button
							on:click={() => {
								serviceTabOpen = true;
							}}
							id="tabs-1-tab-2"
							class:border-indigo-600={serviceTabOpen}
							class:text-indigo-600={serviceTabOpen}
							class:border-transparent={!serviceTabOpen}
							class:text-gray-900={!serviceTabOpen}
							class="flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
							aria-controls="tabs-1-panel-2"
							role="tab"
							type="button">Services</button
						>
					</div>
				</div>

				<!-- 'Products' tab panel, show/hide based on tab state. -->
				<div
					id="tabs-1-panel-1"
					class="space-y-10 px-4 pb-8 pt-10"
					hidden={serviceTabOpen}
					aria-labelledby="tabs-1-tab-1"
					role="tabpanel"
					tabindex="0"
				>
					<div class="grid grid-cols-2 gap-x-4">
						{#each featuredProducts as product}
							<div class="group relative text-sm">
								<div
									class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75"
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
								<p aria-hidden="true" class="mt-1">Shop now</p>
							</div>
						{/each}
					</div>

					<div>
						<p id="women-clothing-heading-mobile" class="font-medium text-gray-900">Clothing</p>
						<ul
							role="list"
							aria-labelledby="women-clothing-heading-mobile"
							class="mt-6 flex flex-col space-y-6"
						>
							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Tops</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Dresses</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Pants</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Denim</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Sweaters</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">T-Shirts</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Jackets</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Activewear</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Browse All</a>
							</li>
						</ul>
					</div>

					<div>
						<p id="women-accessories-heading-mobile" class="font-medium text-gray-900">
							Accessories
						</p>
						<ul
							role="list"
							aria-labelledby="women-accessories-heading-mobile"
							class="mt-6 flex flex-col space-y-6"
						>
							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Watches</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Wallets</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Bags</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Sunglasses</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Hats</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Belts</a>
							</li>
						</ul>
					</div>

					<div>
						<p id="women-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
						<ul
							role="list"
							aria-labelledby="women-brands-heading-mobile"
							class="mt-6 flex flex-col space-y-6"
						>
							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Full Nelson</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">My Way</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Re-Arranged</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Counterfeit</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Significant Other</a>
							</li>
						</ul>
					</div>
				</div>

				<!-- 'Services' tab panel, show/hide based on tab state. -->
				<div
					id="tabs-1-panel-2"
					class="space-y-10 px-4 pb-8 pt-10"
					aria-labelledby="tabs-1-tab-2"
					role="tabpanel"
					tabindex="0"
				>
					<div class="grid grid-cols-2 gap-x-4">
						<div class="group relative text-sm">
							<div
								class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75"
							>
								<img
									src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
									alt="Drawstring top with elastic loop closure and textured interior padding."
									class="object-cover object-center"
								/>
							</div>
							<a href="/" class="mt-6 block font-medium text-gray-900">
								<span class="absolute inset-0 z-10" aria-hidden="true" />
								New Arrivals
							</a>
							<p aria-hidden="true" class="mt-1">Shop now</p>
						</div>

						<div class="group relative text-sm">
							<div
								class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75"
							>
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg"
									alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
									class="object-cover object-center"
								/>
							</div>
							<a href="/" class="mt-6 block font-medium text-gray-900">
								<span class="absolute inset-0 z-10" aria-hidden="true" />
								Artwork Tees
							</a>
							<p aria-hidden="true" class="mt-1">Shop now</p>
						</div>
					</div>

					<div>
						<p id="men-clothing-heading-mobile" class="font-medium text-gray-900">Clothing</p>
						<ul
							role="list"
							aria-labelledby="men-clothing-heading-mobile"
							class="mt-6 flex flex-col space-y-6"
						>
							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Tops</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Pants</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Sweaters</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">T-Shirts</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Jackets</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Activewear</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Browse All</a>
							</li>
						</ul>
					</div>

					<div>
						<p id="men-accessories-heading-mobile" class="font-medium text-gray-900">Accessories</p>
						<ul
							role="list"
							aria-labelledby="men-accessories-heading-mobile"
							class="mt-6 flex flex-col space-y-6"
						>
							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Watches</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Wallets</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Bags</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Sunglasses</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Hats</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Belts</a>
							</li>
						</ul>
					</div>

					<div>
						<p id="men-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
						<ul
							role="list"
							aria-labelledby="men-brands-heading-mobile"
							class="mt-6 flex flex-col space-y-6"
						>
							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Re-Arranged</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Counterfeit</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">Full Nelson</a>
							</li>

							<li class="flow-root">
								<a href="/" class="-m-2 block p-2 text-gray-500">My Way</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="space-y-6 border-t border-gray-200 px-4 py-6">
				<div class="flow-root">
					<a href="/" class="-m-2 block p-2 font-medium text-gray-900">Company</a>
				</div>

				<div class="flow-root">
					<a href="/" class="-m-2 block p-2 font-medium text-gray-900">Stores</a>
				</div>
			</div>

			<div class="space-y-6 border-t border-gray-200 px-4 py-6">
				<div class="flow-root">
					<a href="/" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
				</div>
				<div class="flow-root">
					<a href="/" class="-m-2 block p-2 font-medium text-gray-900">Create account</a>
				</div>
			</div>

			<div class="border-t border-gray-200 px-4 py-6">
				<a href="/" class="-m-2 flex items-center p-2">
					<img
						src="https://tailwindui.com/img/flags/flag-canada.svg"
						alt=""
						class="block h-auto w-5 flex-shrink-0"
					/>
					<span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
					<span class="sr-only">, change currency</span>
				</a>
			</div>
		</div>
	</div>
</div>
