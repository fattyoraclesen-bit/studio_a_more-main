/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

/*
 * https://unlighthouse.dev/api/config
 */
export default defineConfig({
	site: "https://fattyoraclesen-bit.github.io",
	scanner: {
		exclude: [/^\/cdn-cgi\//],
	},
	ci: {
		budget: {
			performance: 50,
			accessibility: 90,
			"best-practices": 90,
			seo: 80,
		},
		buildStatic: true,
	},
	debug: true,
	cache: false,
});
