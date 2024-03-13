<script lang="ts">
	import { Label } from 'bits-ui';
	import { z } from 'zod';

	const schema = z
		.object({
			password: z.string().min(8).default(''),
			confirmPassword: z.string().min(8).default(''),
			email: z.string().email()
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: 'Passwords does not match.',
			path: ['confirmPassword']
		});
</script>

<form action="" class="w-full flex flex-col space-y-4">
	<div class="w-full">
		<Label.Root class="w-full">Password</Label.Root>
		<input
			type="password"
			class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" />
		<p class="text-xs pt-1 text-red-600 list-disc"></p>
	</div>
	<div class="w-full pb-5">
		<Label.Root class="w-full">Confirm password</Label.Root>
		<input
			type="password"
			class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" />
		<p class="text-xs pt-1 text-red-600 list-disc"></p>
	</div>
	<button
		type="submit"
		class="bg-blue-500 rounded-md px-4 py-2 w-full text-white hover:bg-blue-600">
		Reset password
	</button>
</form>
