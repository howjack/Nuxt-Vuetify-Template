import { Style } from "./.nuxt/components.d"
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	components: {
		// Ativar para usar os components globalmente
		global: false,
		dirs: ["~/src/components"],
	},

	dir: {
		layouts: "src/layouts",
		pages: "src/pages",
	},

	typescript: {
		shim: false,
	},

	build: {
		transpile: ["vuetify"],
	},

	vite: {
		define: {
			"process.env.DEBUG": false,
		},
	},
	
	app: {
		head: {
			meta: [
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					charset: "utf-8",
				},
			],
			link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
			style: [],
			script: [],
			noscript: [],
		},
	},
})
