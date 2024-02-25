<script lang="ts">
	import Header from '$lib/component/Header.svelte';
	import Footer from '$lib/component/Footer.svelte';
</script>

<Header />
<main class="flex flex-col w-full h-full max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
	<slot />
</main>
<Footer />
