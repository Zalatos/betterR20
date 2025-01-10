import {RollupPluginUserscriptHeader} from "./node/rollup/rollup-plugin-manifest-builder.mjs";
import HEADER_CORE from "./node/rollup/headers/headers-core.mjs"
import HEADER_5ETOOLS from "./node/rollup/headers/headers-5etools.mjs"

// TODO:
//   - JSON file handling; find/make a Rollup plugin to embed static JSON files if required
//     See e.g.: https://github.com/rollup/plugins/tree/master/packages/json

const configShared = {
	onwarn (warning, warn) {
		// suppress eval warnings
		if (warning.code === "EVAL") return
		warn(warning)
	},
};

export default cliArgs => [
	// Core build
	{
		...configShared,
		input: ["js/main-core.js"],
		output: {
			inlineDynamicImports: true,
			file: "dist/betteR20-core-v2.user.js",
		},
		plugins: [
			new RollupPluginUserscriptHeader(HEADER_CORE).getPlugin(),
		],
	},
	// 5etools build
	{
		...configShared,
		input: ["js/main-5etools.js"],
		output: {
			inlineDynamicImports: true,
			file: "dist/betteR20-5etools-v2.user.js",
		},
		plugins: [
			new RollupPluginUserscriptHeader(HEADER_5ETOOLS).getPlugin(),
		],
	},
];
