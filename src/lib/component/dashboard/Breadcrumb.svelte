<script lang="ts">
	import { Button } from 'bits-ui';
	import HeroiconsBars316Solid from '~icons/heroicons/bars-3-16-solid';
	import HeroiconsChevronRight16Solid from '~icons/heroicons/chevron-right-16-solid';
	import { page } from '$app/stores';

	let crumbs: Array<{ label: string; href: string }> = [];

	$: {
		const tokens = $page.url.pathname.split('/').filter((token) => token !== '');
		let tokenPath = '';
		crumbs = tokens.map((token) => {
			tokenPath += '/' + token;
			token = token.charAt(0).toUpperCase() + token.slice(1);
			return { label: token, href: tokenPath };
		});
	}
</script>

<div class="flex w-full border-t border-gray-200 px-4 py-4 sm:px-6 xl:px-8 xl:hidden">
	<Button.Root>
		<HeroiconsBars316Solid class="text-gray-400 hover:text-gray-500 cursor-pointer" />
	</Button.Root>
	<div class="ms-3 flex items-center whitespace-nowrap">
		{#each crumbs as c, i}
			{#if i == crumbs.length - 1}
				<p class="text-sm font-semibold text-gray-800 truncate">
					{c.label}
				</p>
			{:else}
				<a class="flex items-center text-sm text-gray-800" href={c.href}>
					{c.label}
					<HeroiconsChevronRight16Solid class="text-[1rem] text-gray-400 mx-1" />
				</a>
			{/if}
		{/each}
	</div>
</div>
