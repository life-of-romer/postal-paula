// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// permite abrirla a través del túnel de ngrok
	vite: { server: { allowedHosts: ['.ngrok-free.app', '.ngrok-free.dev', '.ngrok.app'] } },
});
