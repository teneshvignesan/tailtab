<script lang="ts">
	import HeroiconsBars316Solid from '~icons/heroicons/bars-3-16-solid';
	import HeroiconsXMark16Solid from '~icons/heroicons/x-mark-16-solid';
	import { Button } from 'bits-ui';
	import { page } from '$app/stores';

	let hamburgerMenuOpen = false;
	let loggedIn = true;
</script>

<nav
	class="relative w-full max-w-[85rem] mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
	<div class="flex items-center justify-between">
		<a href="/" aria-label="Tailtab">
			<img src="/favicon.png" alt="Tailtab logo" class="w-6 sm:w-10" />
		</a>
		<Button.Root
			class="sm:hidden"
			on:click={() => {
				hamburgerMenuOpen = !hamburgerMenuOpen;
			}}>
			{#if !hamburgerMenuOpen}
				<HeroiconsBars316Solid class="text-lg text-gray-400 hover:text-gray-500 cursor-pointer" />
			{:else}
				<HeroiconsXMark16Solid class="text-lg text-gray-400 hover:text-gray-500 cursor-pointer " />
			{/if}
		</Button.Root>
	</div>
	<div class="hidden basis-full grow sm:block">
		<div class="flex flex-row items-center justify-end gap-y-0 gap-x-7 mt-0 ps-7">
			<a
				class="{$page.url.pathname === '/features'
					? 'text-blue-600'
					: 'text-gray-500'} font-medium hover:text-gray-400 py-4"
				href="/features"
				aria-label="Features">
				Features
			</a>
			<a
				class="{$page.url.pathname === '/pricing'
					? 'text-blue-600'
					: 'text-gray-500'} font-medium hover:text-gray-400 py-4"
				href="/pricing"
				aria-label="Pricing">
				Pricing
			</a>
			<a
				class="{$page.url.pathname === '/contact'
					? 'text-blue-600'
					: 'text-gray-500'} font-medium hover:text-gray-400 py-4"
				href="/contact"
				aria-label="Contact">
				Contact
			</a>
			{#if !loggedIn}
				<a
					class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 border-s border-gray-300 my-4 ps-6"
					href="/login"
					aria-label="Log in">
					Log in
				</a>
			{:else}
				<a
					class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 border-s border-gray-300 my-4 ps-6"
					href="/dashboard"
					aria-label="Dashboard">
					Dashboard
				</a>
			{/if}
		</div>
	</div>
	<div class="{hamburgerMenuOpen ? 'block' : 'hidden'} basis-full grow sm:hidden">
		<div class="flex flex-col gap-y-4 gap-x-0 mt-5">
			<a
				class="{$page.url.pathname === '/features'
					? 'text-blue-600'
					: 'text-gray-500'} font-medium hover:text-gray-400"
				href="/features"
				aria-label="Features">
				Features
			</a>
			<a
				class="{$page.url.pathname === 'pricing'
					? 'text-blue-600'
					: 'text-gray-500'} hover:text-gray-400 font-medium"
				href="/pricing"
				aria-label="Pricing">
				Pricing
			</a>
			<a
				class="{$page.url.pathname === 'contact'
					? 'text-blue-600'
					: 'text-gray-500'} font-medium hover:text-gray-400"
				href="/contact"
				aria-label="Contact">
				Contact
			</a>
			{#if !loggedIn}
				<a
					class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600"
					href="/login"
					aria-label="Log in">
					Log in
				</a>
			{:else}
				<a
					class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600"
					href="/dashboard"
					aria-label="Dashboard">
					Dashboard
				</a>
			{/if}
		</div>
	</div>
</nav>
