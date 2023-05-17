import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},
	test: {
		globals: true,
		setupFiles: "./src/tests/setup.js",
		environment: "jsdom",
	},
	esbuild: { loader: "jsx", include: /src\/.*\.jsx?$/, exclude: [] },
	optimizeDeps: {
		esbuildOptions: {
			plugins: [
				{
					name: "load-js-files-as-jsx",
					setup(build) {
						build.onLoad(
							{ filter: /src\/.*\.js$/ },
							async (args) => {
								return {
									loader: "jsx",
									contents: await fs.readFile(
										args.path,
										"utf8"
									),
								};
							}
						);
					},
				},
			],
		},
	},
});
