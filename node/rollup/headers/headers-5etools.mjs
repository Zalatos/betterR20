import {analyticsBlocking, matchString, SCRIPT_VERSION} from "./headers-consts.mjs";

export default `// ==UserScript==
// @name         betteR20-5etools
// @namespace    https://5e.tools/
// @license      MIT (https://opensource.org/licenses/MIT)
// @version      ${SCRIPT_VERSION}
// @updateURL    https://github.com/TheGiddyLimit/betterR20/raw/development/dist/betteR20-5etools.meta.js
// @downloadURL  https://github.com/TheGiddyLimit/betterR20/raw/development/dist/betteR20-5etools.user.js
// @description  Enhance your Roll20 experience
// @author       5egmegaanon/astranauta/MrLabRat/TheGiddyLimit/DBAWiseMan/BDeveau/Remuz/Callador Julaan/Erogroth/Stormy/FlayedOne/Cucucc/Cee/oldewyrm/darthbeep/Mertang/Redweller
${matchString}
// @grant        unsafeWindow
// @run-at       document-start
${analyticsBlocking}
// ==/UserScript==
`;
