<script lang="ts">
	import HeroiconsBars316Solid from '~icons/heroicons/bars-3-16-solid';
	import HeroiconsXMark16Solid from '~icons/heroicons/x-mark-16-solid';
	import { Button } from 'bits-ui';
	import { page } from '$app/stores';

	let modalIsOpen: boolean = false;
	let userIsLoggedIn: boolean = false;
</script>

<nav
	class="relative w-full max-w-[85rem] mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
	<div class="flex items-center justify-between">
		<a href="/" aria-label="Tailtab" class="flex flex-row space-x-2 items-center">
			<img src="/favicon.png" alt="Tailtab logo" class="w-6 sm:w-7" />
			<p class="text-lg sm:text-2xl font-medium">Tailtab</p>
		</a>
		<Button.Root
			class="sm:hidden"
			on:click={() => {
				modalIsOpen = !modalIsOpen;
			}}>
			{#if !modalIsOpen}
				<HeroiconsBars316Solid class="text-lg text-gray-400 hover:text-gray-500 cursor-pointer" />
			{:else}
				<HeroiconsXMark16Solid class="text-lg text-gray-400 hover:text-gray-500 cursor-pointer " />
			{/if}
		</Button.Root>
	</div>
	<div class="{modalIsOpen ? 'block' : 'hidden'} basis-full grow sm:block">
		<div
			class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
			<a
				class="{$page.url.pathname === '/pricing'
					? 'text-blue-600'
					: 'text-gray-500 hover:text-gray-400'} font-medium sm:py-4"
				href="/pricing"
				aria-label="Pricing">
				Pricing
			</a>
			<a
				class="{$page.url.pathname === '/contact'
					? 'text-blue-600'
					: 'text-gray-500 hover:text-gray-400'} font-medium sm:py-4"
				href="/contact"
				aria-label="Contact">
				Contact
			</a>
			{#if !userIsLoggedIn}
				<a
					class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-4 sm:ps-6"
					href="/login"
					aria-label="Log in">
					Log in
				</a>
			{:else}
				<a
					class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-4 sm:ps-6"
					href="/dashboard"
					aria-label="Dashboard">
					Dashboard
				</a>
			{/if}
		</div>
	</div>
</nav>
