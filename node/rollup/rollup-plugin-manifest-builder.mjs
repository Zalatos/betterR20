export class RollupPluginUserscriptHeader {
	constructor (header) {
		this._header = header;
	}

	getPlugin () {
		return {
			name: "prependHeader",
			renderChunk: (bundle) => {
				return `${this._header}\n${bundle}`
			},
		};
	}
}
