<script lang="ts">
</script>

<main class="flex flex-row w-full h-full">
	<div class="flex flex-col h-full w-full sm:px-6">
		<div class="w-full p-4 flex space-x-2 items-center justify-left">
			<img src="/favicon.png" alt="Tailtab logo" class="w-5" />
			<p class="text-xl font-medium">Tailtab</p>
		</div>
		<div
			class="flex flex-col justify-center w-full h-full max-w-lg mx-auto space-y-8 px-4 py-2.5 sm:py-4 sm:px-6 xl:px-8 md:min-w-lg">
			<slot />
		</div>
	</div>
	<div class="hidden lg:block">
		<img src="/images/backgrounds/cover-auth.jpg" alt="Auth Background" class="h-full w-full" />
	</div>
</main>
