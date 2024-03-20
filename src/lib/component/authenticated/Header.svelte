<script lang="ts">
	import Navbar from '$lib/component/authenticated/Navbar.svelte';
	import Breadcrumb from './Breadcrumb.svelte';
</script>

<header class="flex flex-col w-full border-b border-gray-200">
	<Navbar />
	<Breadcrumb on:railbarOpenState />
</header>
