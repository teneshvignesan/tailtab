<script lang="ts">
	export let modalIsOpen: boolean = true;
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
		<a href="/" aria-label="Tailtab" class=" flex items-center h-20 px-4 py-3 sm:px-6 xl:px-8">
			<img src="/favicon.png" alt="Tailtab logo" class="w-7" />
		</a>
		<nav class="flex w-full px-4 justify-center items-center py-3 sm:px-6 xl:px-8"></nav>
	</aside>
</div>
