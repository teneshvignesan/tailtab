<script lang="ts">
	import Railbar from '$lib/component/dashboard/Railbar.svelte';
	import Header from '$lib/component/dashboard/Header.svelte';
</script>

<main class="flex flex-row w-full h-full">
	<Railbar />
	<div class="flex flex-col w-full h-full">
		<Header />
		<div class="flex w-full h-full bg-gray-50">
			<slot />
		</div>
	</div>
</main>
