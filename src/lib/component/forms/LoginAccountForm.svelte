<script lang="ts">
	import { Label } from 'bits-ui';
	import { z } from 'zod';

	const schema = z.object({
		email: z.string().email(),
		password: z.string().min(8).default('')
	});
</script>

<form action="" class="w-full flex flex-col space-y-4">
	<div class="w-full">
		<Label.Root class="w-full">Email address</Label.Root>
		<input
			type="email"
			class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" />
		<p class="text-xs pt-1 text-red-600 list-disc"></p>
	</div>
	<div class="w-full pb-5">
		<Label.Root class="w-full flex flex-row justify-between items-center">
			<p>Password</p>
			<a href="/forgot-password" class="text-sm text-gray-500">Forgot Password?</a>
		</Label.Root>
		<input
			type="password"
			class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" />
		<p class="text-xs pt-1 text-red-600 list-disc"></p>
	</div>

	<button
		type="submit"
		class="bg-blue-500 rounded-md px-4 py-2 w-full text-white hover:bg-blue-600">
		Sign in
	</button>
	<p class="text-sm text-center">
		Don't have an account? <a href="/register" class="text-blue-500 font-medium">Sign up</a> now.
	</p>
</form>
