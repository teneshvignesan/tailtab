<script lang="ts">
	import { Button } from 'bits-ui';
	import HeroiconsBars316Solid from '~icons/heroicons/bars-3-16-solid';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<nav class="flex w-full px-4 justify-between items-center py-3 h-20 sm:px-6 xl:px-8 xl:hidden">
	<a href="/" aria-label="Tailtab">
		<img src="/favicon.png" alt="Tailtab logo" class="w-7" />
	</a>
	<div class="flex flex-row items-center justify-center ml-auto space-x-4">
		<Button.Root on:click={() => dispatch('railbarOpenState')}>
			<HeroiconsBars316Solid
				class="text-gray-400 hover:text-gray-500 cursor-pointer text-xl"
				id="railbarhamburgerMenu" />
		</Button.Root>
	</div>
</nav>
