<script lang="ts">
	import RegisterAccount from '$lib/component/forms/RegisterAccountForm.svelte';
</script>

<section
	class="flex flex-col justify-center w-full max-w-lg mx-auto space-y-8 px-4 py-2.5 sm:py-4 sm:px-6 xl:px-8 md:min-w-lg">
	<div class="flex space-x-2 items-center">
		<img src="/favicon.png" alt="Tailtab logo" class="w-7" />
		<p class="text-2xl font-medium">Tailtab</p>
	</div>
	<div class="flex flex-col space-y-1">
		<h1 class="text-xl font-medium">Get started for free</h1>
		<p class="text-sm">
			Already registered? <a href="/login" class="text-blue-500 font-medium">Sign in</a> to your account.
		</p>
	</div>
	<RegisterAccount />
</section>
