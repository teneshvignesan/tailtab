<script lang="ts">
	import LoginAccountForm from '$lib/component/forms/LoginAccountForm.svelte';
</script>

<section
	class="flex flex-col justify-center w-full max-w-lg mx-auto space-y-8 px-4 py-2.5 sm:py-4 sm:px-6 xl:px-8 md:min-w-lg">
	<div class="flex space-x-2 items-center">
		<img src="/favicon.png" alt="Tailtab logo" class="w-7" />
		<p class="text-2xl font-medium">Tailtab</p>
	</div>
	<div class="flex flex-col space-y-1">
		<h1 class="text-xl font-medium">Welcome back</h1>
		<p class="text-sm">Sign in to your account</p>
	</div>
	<LoginAccountForm />
</section>
