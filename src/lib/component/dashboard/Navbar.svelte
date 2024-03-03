<script lang="ts">
	import { Button } from 'bits-ui';
	import { Avatar } from 'bits-ui';
	import HeroiconsBell from '~icons/heroicons/bell';
	import HeroiconsInboxArrowDown from '~icons/heroicons/inbox-arrow-down';
	import HeroiconsUser from '~icons/heroicons/user';
	import HeroiconsArrowLeftEndOnRectangle from '~icons/heroicons/arrow-left-end-on-rectangle';
	import HeroiconsShoppingBag from '~icons/heroicons/shopping-bag';
	import { createAvatar } from '@dicebear/core';
	import { lorelei } from '@dicebear/collection';
	import { clickOutside } from '$lib/component/util/clickOutside';

	let modalIsOpen: boolean = false;

	const avatar: string = createAvatar(lorelei, {
		seed: 'John Doe'
	}).toDataUriSync();
</script>

<nav class="flex w-full px-4 justify-between items-center py-3 sm:px-6 xl:px-8 h-20">
	<a href="/" aria-label="Tailtab" class="xl:hidden">
		<img src="/favicon.png" alt="Tailtab logo" class="w-7" />
	</a>
	<div class="flex flex-row items-center justify-center ml-auto space-x-4">
		<Button.Root class="w-12 h-12 inline-flex justify-center items-center rounded-full">
			<HeroiconsBell class="text-lg text-gray-500 hover:text-gray-800  cursor-pointer" />
		</Button.Root>
		<div
			use:clickOutside={() => {
				modalIsOpen = false;
			}}>
			<Button.Root
				class="relative flex items-center justify-center w-12 h-12"
				on:click={() => {
					modalIsOpen = true;
				}}>
				<Avatar.Root
					class="w-full h-full rounded-full border bg-gray-100 cursor-pointer hover:border-gray-400">
					<Avatar.Image src={avatar} />
					<Avatar.Fallback />
				</Avatar.Root>
				<div
					class="{modalIsOpen
						? ''
						: 'hidden'} absolute top-14 right-0 w-60 bg-white shadow-md rounded-lg p-2 text-start">
					<div class="py-3 px-5 -m-2 bg-blue-50 rounded-t-lg">
						<p class="text-sm text-gray-500">Signed in as</p>
						<p class="text-sm font-medium text-gray-800 break-words">user@site.com</p>
					</div>
					<div class="mt-2 py-2 first:pt-0 last:pb-0">
						<a
							class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-blue-50"
							href="/">
							<HeroiconsInboxArrowDown />
							Inbox
						</a>
						<a
							class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-blue-50"
							href="/">
							<HeroiconsShoppingBag />
							Subscriptions
						</a>
						<a
							class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-blue-50"
							href="/">
							<HeroiconsUser />
							Account
						</a>
						<a
							class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-blue-50"
							href="/">
							<HeroiconsArrowLeftEndOnRectangle />
							Logout
						</a>
					</div>
				</div>
			</Button.Root>
		</div>
	</div>
</nav>
