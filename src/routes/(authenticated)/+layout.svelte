<script lang="ts">
	import Railbar from '$lib/component/authenticated/Railbar.svelte';
	import Header from '$lib/component/authenticated/Header.svelte';

	let modalIsOpen: boolean = false;

	const handleRailbarOpenState = () => {
		modalIsOpen = true;
	};
</script>

<main class="flex flex-row w-full h-full">
	<Railbar bind:modalIsOpen />
	<div class="flex flex-col w-full h-full">
		<Header on:railbarOpenState={handleRailbarOpenState} />
		<div class="flex w-full h-full">
			<slot />
		</div>
	</div>
</main>
