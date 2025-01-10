import {analyticsBlocking, matchString, SCRIPT_VERSION} from "./headers-consts.mjs";

export default `// ==UserScript==
// @name         betteR20-core
// @namespace    https://5e.tools/
// @license      MIT (https://opensource.org/licenses/MIT)
// @version      ${SCRIPT_VERSION}
// @updateURL    https://github.com/TheGiddyLimit/betterR20/raw/development/dist/betteR20-core.meta.js
// @downloadURL  https://github.com/TheGiddyLimit/betterR20/raw/development/dist/betteR20-core.user.js
// @description  Enhance your Roll20 experience
// @author       TheGiddyLimit
${matchString}
// @grant        unsafeWindow
// @run-at       document-start
${analyticsBlocking}
// ==/UserScript==
`;
