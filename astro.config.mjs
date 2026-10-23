// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// publicada en GitHub Pages
	site: 'https://life-of-romer.github.io',
	base: '/postal-paula/',
	// permite abrirla a través del túnel de ngrok
	vite: { server: { allowedHosts: ['.ngrok-free.app', '.ngrok-free.dev', '.ngrok.app'] } },
});
