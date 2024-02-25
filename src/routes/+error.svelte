<script lang="ts">
	import Fa6SolidChevronLeft from '~icons/fa6-solid/chevron-left';
	import { page } from '$app/stores';
</script>

<main class="flex flex-col w-full h-full items-center max-w-[85rem] mx-auto p-4 sm:p-6 lg:p-8">
	<a href="/" aria-label="Tailtab">
		<img src="/favicon.png" alt="Tailtab logo" class="w-6 sm:w-10" />
	</a>
	<div class="text-center py-10 px-4 sm:px-6 lg:px-8 my-auto">
		<h1 class="block text-7xl font-bold text-gray-800">404</h1>
		<p class="mt-3 text-gray-600">Oops, something went wrong.</p>
		<p class="text-gray-600">Sorry, we couldn't find your page.</p>
		<div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
			<a
				class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
				href="/">
				<Fa6SolidChevronLeft class="text-xs" />
				Back to home
			</a>
		</div>
	</div>
</main>
