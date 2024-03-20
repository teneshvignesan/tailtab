<script lang="ts">
	import RegisterAccount from '$lib/component/forms/RegisterAccountForm.svelte';
</script>

<div class="flex flex-col space-y-1">
	<h1 class="text-xl font-medium">Get started for free</h1>
	<p class="text-sm">
		Already registered? <a href="/login" class="text-blue-500 font-medium">Sign in</a> to your account.
	</p>
</div>
<RegisterAccount />
