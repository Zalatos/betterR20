globalThis.ART_HANDOUT = "betteR20-art";
globalThis.CONFIG_HANDOUT = "betteR20-config";

// TODO automate to use mirror if main site is unavailable
globalThis.BASE_SITE_URL = "https://5e.tools/";
// BASE_SITE_URL = "https://5etools-mirror-1.github.io/";

globalThis.SITE_JS_URL = `${BASE_SITE_URL}js/`;
globalThis.DATA_URL = `${BASE_SITE_URL}data/`;
globalThis.DATA_URL_MODULES = `https://raw.githubusercontent.com/5etools-mirror-1/roll20-module/master`;

globalThis.SCRIPT_EXTENSIONS = [];

globalThis.EXT_LIB_SCRIPTS = [];
globalThis.EXT_LIB_API_SCRIPTS = [];

globalThis.JSON_DATA = {};

globalThis.CONFIG_OPTIONS = {
	interface: {
		_name: "Interface",
		_player: true,
	},
};

globalThis.addConfigOptions = function (category, options) {
	if (!CONFIG_OPTIONS[category]) CONFIG_OPTIONS[category] = options;
	else CONFIG_OPTIONS[category] = Object.assign(CONFIG_OPTIONS[category], options);
};

// Grant PRO features to every user
globalThis.OBJECT_DEFINE_PROPERTY = Object.defineProperty.bind(Object);
globalThis.ACCOUNT_ORIGINAL_PERMS = {
	isPro: false,
	largefeats: false,
	xlfeats: false,
};
Object.defineProperty = function (obj, prop, vals) {
	if (prop === "largefeats" || prop === "xlfeats" || prop === "isPro") {
		ACCOUNT_ORIGINAL_PERMS[prop] = vals.value;
		vals.value = true;
	}
	return OBJECT_DEFINE_PROPERTY(obj, prop, vals);
};

globalThis.FINAL_CANVAS_MOUSEDOWN_LIST = [];
globalThis.FINAL_CANVAS_MOUSEMOVE_LIST = [];
globalThis.FINAL_CANVAS_MOUSEDOWN = null;
globalThis.FINAL_CANVAS_MOUSEMOVE = null;
EventTarget.prototype.addEventListenerBase = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function (type, listener, options, ...others) {
	if (typeof d20 !== "undefined") {
		if (type === "mousedown" && this === d20.engine.final_canvas) globalThis.FINAL_CANVAS_MOUSEDOWN = listener;
		if (type === "mousemove" && this === d20.engine.final_canvas) globalThis.FINAL_CANVAS_MOUSEMOVE = listener;
	} else {
		if (type === "mousedown") FINAL_CANVAS_MOUSEDOWN_LIST.push({listener, on: this});
		if (type === "mousemove") FINAL_CANVAS_MOUSEMOVE_LIST.push({listener, on: this});
	}
	this.addEventListenerBase(type, listener, options, ...others);
};
