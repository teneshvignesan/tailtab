<script lang="ts">
	import AppFooter from '$lib/component/app/AppFooter.svelte';
	import AppHeader from '$lib/component/app/AppHeader.svelte';
</script>

<AppHeader />
<main class="flex flex-col w-full h-full max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
	<slot />
</main>
<AppFooter />
