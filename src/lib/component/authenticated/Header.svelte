<script lang="ts">
	import Navbar from '$lib/component/authenticated/Navbar.svelte';
</script>

<header class="flex flex-col w-full border-b border-gray-200">
	<Navbar on:railbarOpenState />
</header>
