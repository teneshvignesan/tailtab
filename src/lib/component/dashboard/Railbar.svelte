<script lang="ts">
	import { clickOutside } from '$lib/component/util/clickOutside';

	let modalIsOpen: boolean = false;
</script>

<aside
	use:clickOutside={() => {
		modalIsOpen = false;
	}}
	class="{modalIsOpen
		? ''
		: 'hidden'} absolute top-0 left-0 h-full max-w-[20rem] border-r border-gray-200
	xl:relative xl:flex xl:flex-col xl:w-[20rem]">
	<a href="/" aria-label="Tailtab" class=" flex items-center h-20 px-4 py-3 sm:px-6 xl:px-8">
		<img src="/favicon.png" alt="Tailtab logo" class="w-7" />
	</a>
	<nav class="flex w-full px-4 justify-center items-center py-3 sm:px-6 xl:px-8"></nav>
</aside>
