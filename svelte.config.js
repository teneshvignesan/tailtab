import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sequence } from '@sveltejs/kit/hooks';
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	preprocess: sequence([vitePreprocess()]),
	kit: {
		adapter: adapter()
	}
};
export default config;
