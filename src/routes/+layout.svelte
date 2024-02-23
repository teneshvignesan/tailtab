<script lang="ts">
	import '../app.css';
	import Header from '$lib/component/Header.svelte';
	import Footer from '$lib/component/Footer.svelte';
</script>

<Header />
<slot />
<Footer />
