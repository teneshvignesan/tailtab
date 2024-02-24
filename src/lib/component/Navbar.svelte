<script lang="ts">
	import HeroiconsBars316Solid from '~icons/heroicons/bars-3-16-solid';
	import HeroiconsXMark16Solid from '~icons/heroicons/x-mark-16-solid';
	let hamburgerMenuOpen = false;
	let loggedIn = true;
</script>

<nav
	class="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
>
	<div class="flex items-center justify-between">
		<a href="/" aria-label="tailtab">
			<img src="/favicon.png" alt="tailtab logo" class="w-10 sm:w-12" />
		</a>
		<button
			on:click={() => {
				hamburgerMenuOpen = !hamburgerMenuOpen;
			}}
		>
			{#if !hamburgerMenuOpen}
				<HeroiconsBars316Solid
					class="sm:hidden text-lg text-gray-400 hover:text-gray-500 cursor-pointer"
				/>
			{:else}
				<HeroiconsXMark16Solid
					class="sm:hidden text-lg text-gray-400 hover:text-gray-500 cursor-pointer"
				/>
			{/if}
		</button>
	</div>
	<div class="hidden basis-full grow sm:block">
		<div class="flex flex-row items-center justify-end gap-y-0 gap-x-7 mt-0 ps-7">
			<a class="font-medium text-blue-600 py-6" href="/" aria-label="Plans"> Plans </a>
			<a class="font-medium text-gray-500 hover:text-gray-400 py-6" href="/" aria-label="Features">
				Features
			</a>
			<a class="font-medium text-gray-500 hover:text-gray-400 py-6" href="/" aria-label="Support">
				Support
			</a>
			{#if !loggedIn}
				<a
					class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 border-s border-gray-300 my-6 ps-6"
					href="/"
					aria-label="Log in"
				>
					Log in
				</a>
			{:else}
				<a
					class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 border-s border-gray-300 my-6 ps-6"
					href="/"
					aria-label="Dashboard"
				>
					Dashboard
				</a>
			{/if}
		</div>
	</div>
	<div class="{hamburgerMenuOpen ? 'block' : 'hidden'} basis-full grow sm:hidden">
		<div class="flex flex-col gap-y-4 gap-x-0 mt-5">
			<a class="font-medium text-blue-600" href="/" aria-label="Plans"> Plans </a>
			<a class="font-medium text-gray-500 hover:text-gray-400" href="/" aria-label="Features">
				Features
			</a>
			<a class="font-medium text-gray-500 hover:text-gray-400" href="/" aria-label="Support">
				Support
			</a>
			{#if !loggedIn}
				<a
					class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600"
					href="/"
					aria-label="Log in"
				>
					Log in
				</a>
			{:else}
				<a
					class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600"
					href="/"
					aria-label="Dashboard"
				>
					Dashboard
				</a>
			{/if}
		</div>
	</div>
</nav>
