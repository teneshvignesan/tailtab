<script lang="ts">
	import { Avatar } from 'bits-ui';
	import HeroiconsWallet from '~icons/heroicons/wallet';
	import SolarPresentationGraphLinear from '~icons/solar/presentation-graph-linear';
	import SolarBillListLinear from '~icons/solar/bill-list-linear';
	import LaTools from '~icons/la/tools';
	import RadixIconsDashboard from '~icons/radix-icons/dashboard';
	import CodiconAccount from '~icons/codicon/account';
	import { createAvatar } from '@dicebear/core';
	import { lorelei } from '@dicebear/collection';
	import { page } from '$app/stores';

	export let modalIsOpen: boolean = true;

	const avatar: string = createAvatar(lorelei, {
		seed: 'John Doe'
	}).toDataUriSync();
</script>

<div
	on:click|self={() => {
		modalIsOpen = false;
	}}
	on:keydown|self={(event) => {
		if (event.key === 'Escape') {
			modalIsOpen = false;
		}
	}}
	tabindex="-1"
	role="menu"
	class="{modalIsOpen
		? ''
		: 'hidden'} absolute top-0 left-0 h-full w-full xl:relative xl:flex xl:w-[15rem] z-10">
	<aside class="flex flex-col bg-white border-r border-gray-200 h-full w-[15rem]">
		<a
			href="/"
			aria-label="Tailtab"
			class=" flex items-center h-20 px-4 py-3 sm:px-6 xl:px-8 bg-blue-50">
			<img src="/favicon.png" alt="Tailtab logo" class="w-7" />
		</a>
		<nav class="flex flex-col w-full space-y-5 justify-center items-center px-6 py-4">
			<a
				class="flex w-full items-center p-2 gap-x-3.5 rounded-md {$page.url.pathname ===
				'/dashboard'
					? 'text-blue-500 font-semibold'
					: 'text-gray-800 hover:bg-blue-50'}"
				href="/dashboard"
				on:click={() => (modalIsOpen = false)}>
				<RadixIconsDashboard class="text-lg" />
				Dashboard
			</a>
			<a
				class="flex w-full items-center p-2 gap-x-3.5 rounded-md {$page.url.pathname === '/wallets'
					? 'text-blue-500 font-semibold'
					: 'text-gray-800 hover:bg-blue-50'}"
				href="/wallets"
				on:click={() => (modalIsOpen = false)}>
				<HeroiconsWallet class="text-lg" />
				Wallets
			</a>
			<a
				class="flex w-full items-center p-2 gap-x-3.5 rounded-md {$page.url.pathname ===
				'/analytics'
					? 'text-blue-500 font-semibold'
					: 'text-gray-800 hover:bg-blue-50'}"
				href="/analytics"
				on:click={() => (modalIsOpen = false)}>
				<SolarPresentationGraphLinear class="text-lg" />
				Analytics
			</a>
			<a
				class="flex w-full items-center p-2 gap-x-3.5 rounded-md {$page.url.pathname === '/tools'
					? 'text-blue-500 font-semibold'
					: 'text-gray-800 hover:bg-blue-50'}"
				href="/tools"
				on:click={() => (modalIsOpen = false)}>
				<LaTools class="text-lg" />
				Tools
			</a>
			<a
				class="flex w-full items-center p-2 gap-x-3.5 rounded-md {$page.url.pathname === '/billing'
					? 'text-blue-500 font-semibold'
					: 'text-gray-800 hover:bg-blue-50'}"
				href="/billing"
				on:click={() => (modalIsOpen = false)}>
				<SolarBillListLinear class="text-lg" />
				Billing
			</a>
			<a
				class="flex w-full items-center p-2 gap-x-3.5 rounded-md {$page.url.pathname === '/account'
					? 'text-blue-500 font-semibold'
					: 'text-gray-800 hover:bg-blue-50'}"
				href="/account"
				on:click={() => (modalIsOpen = false)}>
				<CodiconAccount class="text-lg" />
				Account
			</a>
		</nav>
		<div class="flex w-full bg-blue-50 items-center gap-x-2 mt-auto p-6">
			<Avatar.Root class="w-14 h-14 rounded-full border border-gray-400">
				<Avatar.Image src={avatar} />
				<Avatar.Fallback />
			</Avatar.Root>
			<div class="text-sm">
				<p class=" text-gray-500">Signed in as</p>
				<p class="font-medium text-gray-800 break-words">user@site.com</p>
			</div>
		</div>
	</aside>
</div>
