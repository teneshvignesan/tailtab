<script lang="ts">
	import { Button } from 'bits-ui';
	import HeroiconsBell from '~icons/heroicons/bell';
</script>

<nav class="flex w-full px-4 justify-between items-center py-3 sm:px-6 xl:px-8 h-20">
	<a href="/" aria-label="Tailtab" class="xl:hidden">
		<img src="/favicon.png" alt="Tailtab logo" class="w-7" />
	</a>
	<div class="flex flex-row items-center justify-center ml-auto space-x-4">
		<Button.Root class="w-12 h-12 inline-flex justify-center items-center rounded-full">
			<HeroiconsBell class="text-xl text-gray-500 hover:text-gray-800  cursor-pointer" />
		</Button.Root>
	</div>
</nav>
