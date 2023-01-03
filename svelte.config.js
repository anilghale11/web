import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: vitePreprocess()
};

export default {
	kit: {
	  adapter: adapter({
		fallback: '200.html'
	  }),
	  prerender: { entries: [] }
	}
  };
