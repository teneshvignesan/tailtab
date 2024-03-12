<script lang="ts">
	import Fa6BrandsGithub from '~icons/fa6-brands/github';
	import Fa6BrandsXTwitter from '~icons/fa6-brands/x-twitter';
</script>

<footer class="flex w-full text-sm py-3">
	<div class="w-full max-w-[85rem] mx-auto py-10 px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-6 mb-10 md:grid-cols-4 lg:grid-cols-5">
			<div class="col-span-full hidden md:col-span-1 md:block">
				<a
					class="flex flex-row items-center space-x-2 text-xl font-semibold"
					href="/"
					aria-label="Tailtab">
					<img src="/favicon.png" alt="Tailtab logo" class="w-6 sm:w-7" />
					<p class="text-lg sm:text-2xl font-medium">Tailtab</p>
				</a>
				<p class="mt-3 text-xs sm:text-sm text-gray-500 sm:hidden">
					© {new Date().getFullYear()} Tailtab. All rights reserved.
				</p>
			</div>
			<div class="text-center md:text-start">
				<h4 class="text-xs font-semibold text-gray-900 uppercase">About</h4>

				<div class="mt-3 grid space-y-3 text-sm">
					<p>
						<a class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800" href="/pricing"
							>Pricing</a>
					</p>
					<p>
						<a class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800" href="/contact"
							>Contact Us</a>
					</p>
				</div>
			</div>
			<div class="text-center md:text-start">
				<h4 class="text-xs font-semibold text-gray-900 uppercase">Learn</h4>

				<div class="mt-3 grid space-y-3 text-sm">
					<p>
						<a class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800" href="/blog">Blog</a>
					</p>
					<p>
						<a class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800" href="/changelog"
							>Changelog</a>
					</p>
					<p>
						<a class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800" href="/roadmap"
							>Roadmap</a>
					</p>
				</div>
			</div>
			<div class="text-center md:text-start">
				<h4 class="text-xs font-semibold text-gray-900 uppercase">Policies</h4>

				<div class="mt-3 grid space-y-3 text-sm">
					<p>
						<a class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800" href="/privacy">
							Privacy Policy
						</a>
					</p>
					<p>
						<a class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800" href="/terms">
							Terms of Use
						</a>
					</p>
					<p>
						<a class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800" href="/cookies">
							Cookies
						</a>
					</p>
				</div>
			</div>
		</div>
		<div
			class="flex flex-col justify-between items-center text-center border-t border-gray-200 py-4 text-sm md:flex-row">
			<div class="my-3 md:hidden">
				<a
					class="flex flex-row space-x-2 text-xl font-semibold mx-auto justify-center items-center mb-3"
					href="/"
					aria-label="Tailtab">
					<img src="/favicon.png" alt="Tailtab logo" class="w-6 sm:w-7" />
					<p class="text-lg sm:text-2xl font-medium">Tailtab</p>
				</a>
				<p class="mt-1 text-gray-500">
					© {new Date().getFullYear()} Tailtab. All rights reserved.
				</p>
			</div>
			<p class="text-gray-500 hidden md:block">
				© {new Date().getFullYear()} Tailtab. All rights reserved.
			</p>
			<div class="space-x-2">
				<a
					class="inline-block text-gray-500 hover:text-gray-800"
					href="https://github.com/teneshvignesan/tailtab">
					<Fa6BrandsGithub />
				</a>
				<a
					class="inline-block text-gray-500 hover:text-gray-800"
					href="https://twitter.com/tailtab">
					<Fa6BrandsXTwitter />
				</a>
			</div>
		</div>
	</div>
</footer>
