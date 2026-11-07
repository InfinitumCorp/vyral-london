globalThis.__nitro_main__ = import.meta.url;
import { i as toEventHandler, n as HTTPError, o as FastResponse, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import processModule from "node:process";
import { Buffer } from "node:buffer";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"f1-sDXLX3HuDQen//zpdcTVTmrOV9E\"",
		"mtime": "2026-11-07T19:48:40.331Z",
		"size": 241,
		"path": "../public/favicon.svg"
	},
	"/og.jpg": {
		"type": "image/jpeg",
		"etag": "\"15ed5-8t0ATWd/HRmWiNQKZUnLwPEi1No\"",
		"mtime": "2026-11-07T19:48:40.332Z",
		"size": 89813,
		"path": "../public/og.jpg"
	},
	"/assets/hero-Cs9_robp.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e3a8-36cr86FKP+gNya/hODFLghwoSI8\"",
		"mtime": "2026-11-07T20:01:41.457Z",
		"size": 189352,
		"path": "../public/assets/hero-Cs9_robp.jpg"
	},
	"/assets/index-DxvLh2nK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69668-xPXm9AxKZKhzW/JVLLhCwjqEms0\"",
		"mtime": "2026-11-07T20:01:41.456Z",
		"size": 431720,
		"path": "../public/assets/index-DxvLh2nK.js"
	},
	"/assets/lockup-DvFmTXjX.png": {
		"type": "image/png",
		"etag": "\"699d-GIGuhrAAzZpycWRxJ+qYqnDYbcQ\"",
		"mtime": "2026-11-07T20:01:41.458Z",
		"size": 27037,
		"path": "../public/assets/lockup-DvFmTXjX.png"
	},
	"/assets/outfit-latin-300-normal-AWLfuCom.woff": {
		"type": "font/woff",
		"etag": "\"4714-S07V771PnEMqhnZ4Hhn66Pgqnbs\"",
		"mtime": "2026-11-07T20:01:41.458Z",
		"size": 18196,
		"path": "../public/assets/outfit-latin-300-normal-AWLfuCom.woff"
	},
	"/assets/outfit-latin-400-normal-BGsTXAXT.woff2": {
		"type": "font/woff2",
		"etag": "\"36d0-aSuPZEAYPaKTR6fvqo0o7b6DVAE\"",
		"mtime": "2026-11-07T20:01:41.461Z",
		"size": 14032,
		"path": "../public/assets/outfit-latin-400-normal-BGsTXAXT.woff2"
	},
	"/assets/outfit-latin-300-normal-CRYTwY6m.woff2": {
		"type": "font/woff2",
		"etag": "\"3684-QdIfXM2QFZ6mBy3OF0Ow/KfNakE\"",
		"mtime": "2026-11-07T20:01:41.459Z",
		"size": 13956,
		"path": "../public/assets/outfit-latin-300-normal-CRYTwY6m.woff2"
	},
	"/assets/outfit-latin-400-normal-DMwTpYkH.woff": {
		"type": "font/woff",
		"etag": "\"4738-OQLPSmOkWVBXKt24vFt37LGJOQE\"",
		"mtime": "2026-11-07T20:01:41.462Z",
		"size": 18232,
		"path": "../public/assets/outfit-latin-400-normal-DMwTpYkH.woff"
	},
	"/assets/outfit-latin-500-normal-ClnHRwRh.woff": {
		"type": "font/woff",
		"etag": "\"4518-w03l9tbzPQvERzzPX0XbuVlJDwo\"",
		"mtime": "2026-11-07T20:01:41.463Z",
		"size": 17688,
		"path": "../public/assets/outfit-latin-500-normal-ClnHRwRh.woff"
	},
	"/assets/outfit-latin-500-normal-DKnIMDSk.woff2": {
		"type": "font/woff2",
		"etag": "\"34d8-VblYwuS4BTq3+cN4CQbLlgDlCEM\"",
		"mtime": "2026-11-07T20:01:41.463Z",
		"size": 13528,
		"path": "../public/assets/outfit-latin-500-normal-DKnIMDSk.woff2"
	},
	"/assets/outfit-latin-ext-300-normal-BYS6Dpvq.woff2": {
		"type": "font/woff2",
		"etag": "\"18f0-PNfGO9u2o1DJfgdL3SZf60CxT6M\"",
		"mtime": "2026-11-07T20:01:41.464Z",
		"size": 6384,
		"path": "../public/assets/outfit-latin-ext-300-normal-BYS6Dpvq.woff2"
	},
	"/assets/outfit-latin-ext-300-normal-CMIMshEd.woff": {
		"type": "font/woff",
		"etag": "\"2164-D3LLaB6DHaq846Yc0ThT/RgENLY\"",
		"mtime": "2026-11-07T20:01:41.465Z",
		"size": 8548,
		"path": "../public/assets/outfit-latin-ext-300-normal-CMIMshEd.woff"
	},
	"/assets/outfit-latin-ext-400-normal-5tcqmc2S.woff2": {
		"type": "font/woff2",
		"etag": "\"18ec-BFjIu/hjYC+Hn18BG1D0Tm0l5xw\"",
		"mtime": "2026-11-07T20:01:41.465Z",
		"size": 6380,
		"path": "../public/assets/outfit-latin-ext-400-normal-5tcqmc2S.woff2"
	},
	"/assets/outfit-latin-ext-400-normal-DHm7mdGe.woff": {
		"type": "font/woff",
		"etag": "\"21c0-EnYpFrp7mweWwMlN9JBQ973Xm4Q\"",
		"mtime": "2026-11-07T20:01:41.466Z",
		"size": 8640,
		"path": "../public/assets/outfit-latin-ext-400-normal-DHm7mdGe.woff"
	},
	"/assets/outfit-latin-ext-500-normal-DrCvqoFD.woff": {
		"type": "font/woff",
		"etag": "\"212c-Cyo5cErsRCM5SY4eAfF9Kdn17E8\"",
		"mtime": "2026-11-07T20:01:41.467Z",
		"size": 8492,
		"path": "../public/assets/outfit-latin-ext-500-normal-DrCvqoFD.woff"
	},
	"/assets/outfit-latin-ext-500-normal-zeox_O30.woff2": {
		"type": "font/woff2",
		"etag": "\"1864-/+COtmjrR+mEmyW/k9C9VT/azKA\"",
		"mtime": "2026-11-07T20:01:41.468Z",
		"size": 6244,
		"path": "../public/assets/outfit-latin-ext-500-normal-zeox_O30.woff2"
	},
	"/assets/routes-CBYqcUyY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1ca-i5uzQSkGQ0xxvT5ou5mQc6It2PQ\"",
		"mtime": "2026-11-07T20:01:41.457Z",
		"size": 53706,
		"path": "../public/assets/routes-CBYqcUyY.js"
	},
	"/assets/syne-greek-500-normal-DUQv5E33.woff2": {
		"type": "font/woff2",
		"etag": "\"11e0-0Y5ZSqco5hy73nKEOA9KKkxjzNo\"",
		"mtime": "2026-11-07T20:01:41.469Z",
		"size": 4576,
		"path": "../public/assets/syne-greek-500-normal-DUQv5E33.woff2"
	},
	"/assets/syne-greek-500-normal-L1Ji5iNA.woff": {
		"type": "font/woff",
		"etag": "\"1754-mTdbch2hMs1BQYGzmGJjADPlhj8\"",
		"mtime": "2026-11-07T20:01:41.471Z",
		"size": 5972,
		"path": "../public/assets/syne-greek-500-normal-L1Ji5iNA.woff"
	},
	"/assets/styles-DTWYIdM7.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"8fc9-BquiPKik5OrpYmlooNaVXIzU2Uo\"",
		"mtime": "2026-11-07T20:01:41.469Z",
		"size": 36809,
		"path": "../public/assets/styles-DTWYIdM7.css"
	},
	"/assets/syne-greek-600-normal-BJs4kvyH.woff": {
		"type": "font/woff",
		"etag": "\"1788-Fkkm1MT1fDnCleZHDAqbOgrXsKo\"",
		"mtime": "2026-11-07T20:01:41.471Z",
		"size": 6024,
		"path": "../public/assets/syne-greek-600-normal-BJs4kvyH.woff"
	},
	"/assets/syne-greek-600-normal-BpFII5Ja.woff2": {
		"type": "font/woff2",
		"etag": "\"1230-BJ/IeMqKOQExQpyTYoT2n99nXZc\"",
		"mtime": "2026-11-07T20:01:41.472Z",
		"size": 4656,
		"path": "../public/assets/syne-greek-600-normal-BpFII5Ja.woff2"
	},
	"/assets/syne-greek-700-normal-C01yjWE_.woff": {
		"type": "font/woff",
		"etag": "\"1794-39I3cqwskOcdwcWmP4WTiob333A\"",
		"mtime": "2026-11-07T20:01:41.473Z",
		"size": 6036,
		"path": "../public/assets/syne-greek-700-normal-C01yjWE_.woff"
	},
	"/assets/syne-greek-700-normal-RbvlO3f8.woff2": {
		"type": "font/woff2",
		"etag": "\"1234-yXBRxfXU15DD0FepdAAqunbof68\"",
		"mtime": "2026-11-07T20:01:41.474Z",
		"size": 4660,
		"path": "../public/assets/syne-greek-700-normal-RbvlO3f8.woff2"
	},
	"/assets/syne-latin-500-normal-emxikWQ7.woff2": {
		"type": "font/woff2",
		"etag": "\"3730-TCUoRmVzBLgMbepKxQ0es18nYw8\"",
		"mtime": "2026-11-07T20:01:41.475Z",
		"size": 14128,
		"path": "../public/assets/syne-latin-500-normal-emxikWQ7.woff2"
	},
	"/assets/syne-latin-500-normal-DR6mUQpY.woff": {
		"type": "font/woff",
		"etag": "\"4608-UeMlmkXK5TWJQkvZRzhXCkXSfaU\"",
		"mtime": "2026-11-07T20:01:41.474Z",
		"size": 17928,
		"path": "../public/assets/syne-latin-500-normal-DR6mUQpY.woff"
	},
	"/assets/syne-latin-600-normal-BiwQbQXw.woff2": {
		"type": "font/woff2",
		"etag": "\"3804-fWeE9VSWTOUawh9PiOAeWvrAEfM\"",
		"mtime": "2026-11-07T20:01:41.476Z",
		"size": 14340,
		"path": "../public/assets/syne-latin-600-normal-BiwQbQXw.woff2"
	},
	"/assets/syne-latin-600-normal-dRu9QuIh.woff": {
		"type": "font/woff",
		"etag": "\"473c-TPWHoJwpAM7EJ6URfdBDmPxckDM\"",
		"mtime": "2026-11-07T20:01:41.477Z",
		"size": 18236,
		"path": "../public/assets/syne-latin-600-normal-dRu9QuIh.woff"
	},
	"/assets/syne-latin-700-normal-AF3Rs61n.woff2": {
		"type": "font/woff2",
		"etag": "\"36f8-PAmNja7d8wWbdomyeid9tjMrwoY\"",
		"mtime": "2026-11-07T20:01:41.478Z",
		"size": 14072,
		"path": "../public/assets/syne-latin-700-normal-AF3Rs61n.woff2"
	},
	"/assets/syne-latin-700-normal-Cd-_iCn5.woff": {
		"type": "font/woff",
		"etag": "\"46a8-UnE/Ay0In0mBNKrd2cHDpMDIkno\"",
		"mtime": "2026-11-07T20:01:41.479Z",
		"size": 18088,
		"path": "../public/assets/syne-latin-700-normal-Cd-_iCn5.woff"
	},
	"/assets/syne-latin-ext-500-normal-C5b4wHnS.woff": {
		"type": "font/woff",
		"etag": "\"2108-ggim20owy41rGJVv8MjYDBoSPgA\"",
		"mtime": "2026-11-07T20:01:41.480Z",
		"size": 8456,
		"path": "../public/assets/syne-latin-ext-500-normal-C5b4wHnS.woff"
	},
	"/assets/syne-latin-ext-500-normal-DHUXVE3f.woff2": {
		"type": "font/woff2",
		"etag": "\"18d4-tSuZmC8mVJN6Np9lurNdB4Mv5AI\"",
		"mtime": "2026-11-07T20:01:41.481Z",
		"size": 6356,
		"path": "../public/assets/syne-latin-ext-500-normal-DHUXVE3f.woff2"
	},
	"/assets/syne-latin-ext-600-normal-DEzBMW8B.woff": {
		"type": "font/woff",
		"etag": "\"212c-zHE+6w5rHRAa3Kez6QJt0rOzv3M\"",
		"mtime": "2026-11-07T20:01:41.482Z",
		"size": 8492,
		"path": "../public/assets/syne-latin-ext-600-normal-DEzBMW8B.woff"
	},
	"/assets/syne-latin-ext-600-normal-ZnizrDKU.woff2": {
		"type": "font/woff2",
		"etag": "\"18e4-2m3vt2br3oDCNQn7IlC0AGHOZEY\"",
		"mtime": "2026-11-07T20:01:41.482Z",
		"size": 6372,
		"path": "../public/assets/syne-latin-ext-600-normal-ZnizrDKU.woff2"
	},
	"/assets/syne-latin-ext-700-normal-DuyXglMe.woff2": {
		"type": "font/woff2",
		"etag": "\"1884-TeWurN8D2/kGDITdQa1JXPU1MU0\"",
		"mtime": "2026-11-07T20:01:41.483Z",
		"size": 6276,
		"path": "../public/assets/syne-latin-ext-700-normal-DuyXglMe.woff2"
	},
	"/assets/syne-latin-ext-700-normal-C-qCH-vM.woff": {
		"type": "font/woff",
		"etag": "\"2118-+2iF1jJmrHQii1RScLEktP1hu5I\"",
		"mtime": "2026-11-07T20:01:41.483Z",
		"size": 8472,
		"path": "../public/assets/syne-latin-ext-700-normal-C-qCH-vM.woff"
	},
	"/assets/wordmark-B-W13INr.png": {
		"type": "image/png",
		"etag": "\"485f-NcqJYZdLBB9tJs98K9S4l6dAC3o\"",
		"mtime": "2026-11-07T20:01:41.483Z",
		"size": 18527,
		"path": "../public/assets/wordmark-B-W13INr.png"
	},
	"/__grok/icon-180.png": {
		"type": "image/png",
		"etag": "\"834-Xk8vfS0DTFn7ggtkfEduWTcNWGE\"",
		"mtime": "2026-11-07T19:48:40.322Z",
		"size": 2100,
		"path": "../public/__grok/icon-180.png"
	},
	"/__grok/install/styles.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1bb4-mtVb9Rljgp3bLk+LN+fuI/lvuVQ\"",
		"mtime": "2026-11-07T19:48:40.329Z",
		"size": 7092,
		"path": "../public/__grok/install/styles.css"
	},
	"/__grok/install/assets/homescreen/glass-share.svg": {
		"type": "image/svg+xml",
		"etag": "\"95e-A1zXBk2lAArfDoU/mVT/tcZee7w\"",
		"mtime": "2026-11-07T19:48:40.325Z",
		"size": 2398,
		"path": "../public/__grok/install/assets/homescreen/glass-share.svg"
	},
	"/__grok/install/assets/homescreen/glass-puzzle.svg": {
		"type": "image/svg+xml",
		"etag": "\"720-fvf2cebt92Zi64jB1pqEQ9PCLEA\"",
		"mtime": "2026-11-07T19:48:40.324Z",
		"size": 1824,
		"path": "../public/__grok/install/assets/homescreen/glass-puzzle.svg"
	},
	"/__grok/install/assets/homescreen/logo-grok.svg": {
		"type": "image/svg+xml",
		"etag": "\"429-iq65LFl6Jo6G/bwSh0TXYZSoTSU\"",
		"mtime": "2026-11-07T19:48:40.326Z",
		"size": 1065,
		"path": "../public/__grok/install/assets/homescreen/logo-grok.svg"
	},
	"/__grok/install/assets/homescreen/ob-ipad.png": {
		"type": "image/png",
		"etag": "\"18dd3-wlRwrpmBImStuiu+4poVz7ANin4\"",
		"mtime": "2026-11-07T19:48:40.327Z",
		"size": 101843,
		"path": "../public/__grok/install/assets/homescreen/ob-ipad.png"
	},
	"/__grok/install/assets/homescreen/ob-phone.png": {
		"type": "image/png",
		"etag": "\"194bc-oZradWHIHO68q2glHU0Gk5ttpWA\"",
		"mtime": "2026-11-07T19:48:40.328Z",
		"size": 103612,
		"path": "../public/__grok/install/assets/homescreen/ob-phone.png"
	},
	"/__grok/install/assets/homescreen/plus.svg": {
		"type": "image/svg+xml",
		"etag": "\"967-3Kr16P4li3FlBDp9Lx36zbKm9+I\"",
		"mtime": "2026-11-07T19:48:40.329Z",
		"size": 2407,
		"path": "../public/__grok/install/assets/homescreen/plus.svg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region scripts/install-page.html?raw
var install_page_default = "<!DOCTYPE html>\r\n<html lang=\"en\" class=\"device-desktop\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <meta\r\n      name=\"viewport\"\r\n      content=\"width=device-width, initial-scale=1, viewport-fit=cover\"\r\n    />\r\n    <meta name=\"color-scheme\" content=\"dark\" />\r\n    <meta name=\"theme-color\" content=\"#000000\" />\r\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\r\n    <meta name=\"apple-mobile-web-app-title\" content=\"{{APP_NAME}}\" />\r\n    <title>Add {{APP_NAME}} to your Home Screen</title>\r\n    <link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\" />\r\n    <link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\" />\r\n    <link rel=\"stylesheet\" href=\"/__grok/install/styles.css\" />\r\n    <script>\r\n      (function () {\r\n        var ua = navigator.userAgent || \"\";\r\n        var touch = navigator.maxTouchPoints || 0;\r\n        var isiPad = /iPad/.test(ua) || (/Macintosh/.test(ua) && touch > 1);\r\n        var isiPhone = /iPhone|iPod/.test(ua);\r\n        var isIOS = isiPhone || isiPad;\r\n        var isAndroid = /Android/i.test(ua);\r\n        var isAndroidPhone = isAndroid && /Mobile/i.test(ua);\r\n        var isAndroidTablet = isAndroid && !/Mobile/i.test(ua);\r\n        var minSide = Math.min(screen.width || 0, screen.height || 0);\r\n        var maxSide = Math.max(screen.width || 0, screen.height || 0);\r\n\r\n        var type = \"desktop\";\r\n        if (isiPhone) type = \"phone\";\r\n        else if (isiPad || isAndroidTablet) type = \"tablet\";\r\n        else if (isAndroidPhone) type = \"phone\";\r\n        else if (touch > 0 && minSide > 0 && minSide <= 500) type = \"phone\";\r\n        else if (touch > 0 && minSide > 500 && maxSide <= 1400) type = \"tablet\";\r\n\r\n        var iosMajor = null;\r\n        var osToken = null;\r\n        var safariToken = null;\r\n        var iphoneOs = ua.match(/iPhone OS (\\d+)[._]/);\r\n        var ipadOs = ua.match(/CPU OS (\\d+)[._](\\d+) like Mac OS X/);\r\n        var safariVer = ua.match(/Version\\/(\\d+)[._]/);\r\n        if (iphoneOs) osToken = parseInt(iphoneOs[1], 10);\r\n        else if (ipadOs) osToken = parseInt(ipadOs[1], 10);\r\n        if (isIOS && safariVer) safariToken = parseInt(safariVer[1], 10);\r\n        if (osToken != null || safariToken != null) {\r\n          iosMajor = Math.max(osToken || 0, safariToken || 0);\r\n        }\r\n\r\n        var root = document.documentElement;\r\n        var classes = [\"device-\" + type];\r\n        if (iosMajor != null) {\r\n          root.dataset.ios = String(iosMajor);\r\n          classes.push(iosMajor >= 27 ? \"ios-27-plus\" : \"ios-below-27\");\r\n        }\r\n        root.className = classes.join(\" \");\r\n      })();\r\n    <\/script>\r\n  </head>\r\n  <body>\r\n    <div class=\"page\">\r\n      <header class=\"powered\" aria-label=\"Powered by Grok\">\r\n        <span class=\"powered-by\">Powered by</span>\r\n        <span class=\"powered-brand\">\r\n          <img\r\n            class=\"grok-logo\"\r\n            src=\"/__grok/install/assets/homescreen/logo-grok.svg\"\r\n            width=\"14\"\r\n            height=\"14\"\r\n            alt=\"\"\r\n          />\r\n          <span class=\"powered-grok\">Grok</span>\r\n        </span>\r\n      </header>\r\n\r\n      <main class=\"content\">\r\n        <div class=\"ob\" aria-hidden=\"true\">\r\n          <img\r\n            class=\"ob-img ob-phone\"\r\n            src=\"/__grok/install/assets/homescreen/ob-phone.png\"\r\n            width=\"338\"\r\n            height=\"294\"\r\n            alt=\"\"\r\n          />\r\n          <img\r\n            class=\"ob-img ob-ipad\"\r\n            src=\"/__grok/install/assets/homescreen/ob-ipad.png\"\r\n            width=\"634\"\r\n            height=\"294\"\r\n            alt=\"\"\r\n          />\r\n        </div>\r\n\r\n        <section class=\"copy\">\r\n          <h1>Add {{APP_NAME}} to your&nbsp;Home&nbsp;Screen</h1>\r\n\r\n          <div class=\"steps\">\r\n            <p class=\"step step-tap step-ios27\">\r\n              <span class=\"muted\">Tap</span>\r\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\r\n                <img src=\"/__grok/install/assets/homescreen/glass-puzzle.svg\" width=\"24\" height=\"24\" alt=\"\" />\r\n              </span>\r\n              <span class=\"muted loc loc-phone\">in the bottom bar, then</span>\r\n              <span class=\"muted loc loc-ipad\">in the tool bar, then</span>\r\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\r\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\r\n              </span>\r\n            </p>\r\n\r\n            <p class=\"step step-tap step-ios-legacy\">\r\n              <span class=\"muted\">Tap</span>\r\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\r\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\r\n              </span>\r\n              <span class=\"muted loc loc-phone\">in the bottom bar</span>\r\n              <span class=\"muted loc loc-ipad\">in the tool bar</span>\r\n            </p>\r\n\r\n            <p class=\"step step-select\">\r\n              <span class=\"muted\">Select</span>\r\n              <span class=\"add-label\">\r\n                <img\r\n                  class=\"plus-icon\"\r\n                  src=\"/__grok/install/assets/homescreen/plus.svg\"\r\n                  width=\"16\"\r\n                  height=\"16\"\r\n                  alt=\"\"\r\n                />\r\n                <span class=\"add-text\">Add to Home Screen</span>\r\n              </span>\r\n            </p>\r\n          </div>\r\n        </section>\r\n      </main>\r\n\r\n      <main class=\"content content-desktop\">\r\n        <section class=\"copy\">\r\n          <h1>Open this link on your iPhone&nbsp;or&nbsp;iPad</h1>\r\n          <p class=\"desktop-note\">\r\n            This page shows how to add {{APP_NAME}} to an iOS Home Screen.\r\n          </p>\r\n          <a class=\"desktop-open\" href=\"{{APP_URL}}\">Open {{APP_NAME}}</a>\r\n        </section>\r\n      </main>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
//#endregion
//#region \0virtual:grok-og-identity
var grokOgIdentity = { "site": {
	"title": "VYRAL London",
	"card": "custom",
	"image": "/og.jpg"
} };
//#endregion
//#region scripts/grok-pwa-shared.mjs
/**
* Single source of truth for platform head chrome (PWA, extensions.js, OG),
* shared by the Vite plugin and Nitro middleware. Plain ESM so `node --test`
* and the Nitro bundler can both consume it.
*/
var DEFAULT_APP_NAME = "Grok App";
var OG_SITE_REL_PATH = "src/lib/og/site.json";
var SHARE_META_KEYS = /* @__PURE__ */ new Set([
	"og:title",
	"og:description",
	"og:image",
	"og:image:width",
	"og:image:height",
	"og:type",
	"og:url",
	"og:site_name",
	"twitter:card",
	"twitter:title",
	"twitter:image",
	"twitter:description",
	"x:game:image",
	"x:game:image:width",
	"x:game:image:height"
]);
function escapeHtml(value) {
	return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
/** Inverse of escapeHtml. Decode &amp; last so a single pass undoes one encode. */
function unescapeHtml(value) {
	return String(value).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").replaceAll("&amp;", "&");
}
/** 6-digit hex for the og.grok.me placeholder, or "" if site.color is missing/invalid. */
function placeholderCardColor(site = {}) {
	const raw = String(site.color ?? "").trim();
	const hex = raw.startsWith("#") ? raw.slice(1) : raw;
	return /^[0-9a-fA-F]{6}$/.test(hex) ? hex : "";
}
/**
* "wild-race.grok.me" → "Wild Race". Only published app hosts encode the
* display name in the first label. Preview / guest hosts are image origins
* only — slugifying them produced internal names like "Hds Abc 3000 Xy".
*/
function appNameFromHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host.endsWith(".grok.me")) return DEFAULT_APP_NAME;
	const slug = host.split(".")[0] ?? "";
	if (!slug || slug === "www" || !/^[a-z0-9-]{1,63}$/.test(slug)) return DEFAULT_APP_NAME;
	return slug.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ") || "Grok App";
}
/** True for Vercel system domains. Envoy rewrites origin Host to these; they SSO-protect `/og.jpg`. */
function isVercelSystemHost(host) {
	return host === "vercel.app" || host.endsWith(".vercel.app") || host === "vercel.com" || host.endsWith(".vercel.com");
}
/** Hostname suitable for absolute og:image URLs. Preview guests (X-Forwarded-Host) are allowed. */
function publicAppHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host || !/^[a-z0-9.-]+$/.test(host) || !host.includes(".")) return "";
	if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) return "";
	if (isVercelSystemHost(host)) return "";
	return host;
}
/**
* Published apps always use `VITE_PUBLIC_HOSTNAME` (the grok.me host the
* deployer injects). Live preview has no such env, so fall back to the
* request host / X-Forwarded-Host. Never prefer request Host on a published
* app — Envoy rewrites it to `*.vercel.app`.
*/
function resolvePublicHost(hostHeader) {
	return publicAppHost(processModule.env?.VITE_PUBLIC_HOSTNAME) || publicAppHost(hostHeader);
}
function isInstallQuery(url) {
	const query = String(url ?? "").split("?", 2)[1] ?? "";
	const params = new URLSearchParams(query);
	const install = params.get("install");
	const platform = (params.get("platform") ?? "").toLowerCase();
	return (install === "1" || install === "true") && platform === "ios";
}
/** Paths that can carry an app document (vs assets / API / internals). */
function isDocumentPath(pathname) {
	const path = String(pathname ?? "");
	return !path.startsWith("/__grok/") && !path.startsWith("/api/") && !path.startsWith("/@") && !path.startsWith("/node_modules") && !/\.[a-z0-9]+$/i.test(path);
}
function acceptsHtml(accept) {
	const value = String(accept ?? "");
	return value === "" || value.includes("text/html") || value.includes("*/*");
}
/** The same URL without the install-tutorial params (used as the app link). */
function stripInstallParams(url) {
	const [path = "/", query = ""] = String(url ?? "/").split("?", 2);
	const params = new URLSearchParams(query);
	params.delete("install");
	params.delete("platform");
	const rest = params.toString();
	return rest ? `${path}?${rest}` : path;
}
function renderInstallPageHtml(template, { host, url } = {}) {
	return String(template).replaceAll("{{APP_NAME}}", escapeHtml(appNameFromHost(host))).replaceAll("{{APP_URL}}", escapeHtml(stripInstallParams(url)));
}
function renderWebManifest(hostHeader) {
	const name = appNameFromHost(hostHeader);
	return JSON.stringify({
		name,
		short_name: name,
		id: "/",
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",
		icons: [{
			src: "/__grok/icon-180.png",
			sizes: "180x180",
			type: "image/png"
		}]
	}, null, 2);
}
function grokPwaHeadTags(appName = DEFAULT_APP_NAME) {
	return [
		["manifest", "<link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\">"],
		["apple-touch-icon", "<link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\">"],
		["apple-mobile-web-app-title", `<meta name="apple-mobile-web-app-title" content="${escapeHtml(appName)}">`],
		["apple-mobile-web-app-status-bar-style", "<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">"],
		["theme-color", "<meta name=\"theme-color\" content=\"#000000\">"]
	];
}
var GROK_EXTENSIONS_SCRIPT_SRC = "https://grok.com/grok-app-builder/extensions.js";
function readGrokProjectId() {
	const fromProcess = typeof processModule !== "undefined" ? processModule.env?.VITE_PROJECT_ID : "";
	return String(fromProcess ?? "").trim();
}
function readGrokExtensionsEnabled() {
	const fromProcess = typeof processModule !== "undefined" ? processModule.env?.VITE_GROK_EXTENSIONS : "";
	return String(fromProcess ?? "").trim() !== "0";
}
function readXCreator() {
	const fromProcess = typeof processModule !== "undefined" ? processModule.env?.X_CREATOR : "";
	return String(fromProcess ?? "").trim();
}
function readXCreatorId() {
	const fromProcess = typeof processModule !== "undefined" ? processModule.env?.X_CREATOR_ID : "";
	return String(fromProcess ?? "").trim();
}
function grokXCreatorHeadTags(creator = readXCreator(), creatorId = readXCreatorId()) {
	const name = String(creator ?? "").trim();
	const id = String(creatorId ?? "").trim();
	if (!name || !id) return [];
	return [`<meta property="x:creator" content="${escapeHtml(name)}">`, `<meta property="x:creator:id" content="${escapeHtml(id)}">`];
}
/** Platform "Created with Grok" banner — injected into every HTML document. */
function grokExtensionsHeadTags(projectId = readGrokProjectId()) {
	const id = escapeHtml(projectId);
	const tags = [];
	if (projectId) tags.push(`<meta name="grok-project-id" content="${id}">`);
	if (!readGrokExtensionsEnabled()) return tags;
	tags.push(`<script src="${GROK_EXTENSIONS_SCRIPT_SRC}"${projectId ? ` data-project-id="${id}"` : ""} defer><\/script>`);
	return tags;
}
function readOgSite(cwd = processModule.cwd()) {
	try {
		const raw = readFileSync(join(cwd, OG_SITE_REL_PATH), "utf8");
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
	} catch {
		return {};
	}
}
/** Public path of an on-disk share card, or "" if neither file exists. */
function ogCardPublicPath(cwd = processModule.cwd()) {
	if (existsSync(join(cwd, "public/og.jpg"))) return "/og.jpg";
	if (existsSync(join(cwd, "public/og.png"))) return "/og.png";
	return "";
}
function detectCustomOgCard(cwd = processModule.cwd(), site = {}) {
	if (ogCardPublicPath(cwd)) return true;
	return siteHasCustomCard(site) || Boolean(String(site.image ?? "").trim());
}
/** Snapshot for Vite/Nitro to bake into the server bundle (Vercel has no workspace FS). */
function snapshotOgIdentity(cwd = processModule.cwd()) {
	const site = { ...readOgSite(cwd) };
	const disk = ogCardPublicPath(cwd);
	if (disk) {
		site.card = "custom";
		site.image = disk;
	} else {
		if (siteHasCustomCard(site)) delete site.card;
		if (site.image) delete site.image;
	}
	if (existsSync(join(cwd, "public/x-banner.jpg"))) site.banner = site.banner || "/x-banner.jpg";
	return { site };
}
function ogServiceUrl() {
	return (String(processModule.env?.VITE_OG_SERVICE_URL ?? "").trim() || "https://og.grok.me").replace(/\/+$/, "");
}
function titleFromDocument(html) {
	const match = String(html ?? "").match(/<title\b[^>]*>([^<]*)<\/title>/i);
	return match ? unescapeHtml(match[1]).trim() : "";
}
function resolveOgTitle(site = {}, appName = DEFAULT_APP_NAME, host = "", documentTitle = "") {
	const fromSite = String(site.title ?? "").trim();
	if (fromSite) return fromSite;
	const fromDoc = String(documentTitle ?? "").trim();
	if (fromDoc) return fromDoc;
	const fromHost = appNameFromHost(host);
	if (fromHost && fromHost !== "Grok App") return fromHost;
	return String(appName ?? "").trim() || "Grok App";
}
function siteHasCustomCard(site = {}) {
	return String(site.card ?? "").toLowerCase() === "custom";
}
/**
* Preview: public/og.jpg|png on disk.
* Vercel: the bake (`card=custom` / `image`) because the function cannot stat public/.
* Otherwise empty — caller emits the og.grok.me placeholder.
*/
function resolveOgCardAsset(site = {}, cwd = processModule.cwd()) {
	return ogCardPublicPath(cwd) || (detectCustomOgCard(cwd, site) ? String(site.image ?? "").trim() || "/og.jpg" : "");
}
/** Stamp `card=custom` when public/og.jpg or public/og.png is on disk. */
function applyCustomCardFromFs(site, cwd) {
	const disk = ogCardPublicPath(cwd);
	if (!disk) return site;
	return {
		...site,
		card: "custom",
		image: disk
	};
}
function grokOgHeadTags({ host = "", appName = DEFAULT_APP_NAME, site = {}, documentTitle = "", cwd = processModule.cwd() } = {}) {
	const title = resolveOgTitle(site, appName, host, documentTitle);
	const publicHost = resolvePublicHost(host);
	const tags = [`<meta name="twitter:card" content="summary_large_image">`, `<meta property="og:title" content="${escapeHtml(title)}">`];
	const description = String(site.description ?? "").trim();
	if (description) tags.push(`<meta property="og:description" content="${escapeHtml(description)}">`);
	if (String(site.type ?? "").toLowerCase() === "x:game") tags.push(`<meta property="og:type" content="x:game">`);
	if (publicHost) {
		const asset = resolveOgCardAsset(site, cwd);
		const custom = Boolean(asset);
		let image = custom ? `https://${publicHost}${asset.startsWith("/") ? asset : `/${asset}`}` : `${ogServiceUrl()}/v1/card.png?host=${encodeURIComponent(publicHost)}&title=${encodeURIComponent(title)}`;
		const color = !custom ? placeholderCardColor(site) : "";
		if (color) image += `&color=${encodeURIComponent(color)}`;
		tags.push(`<meta property="og:image" content="${escapeHtml(image)}">`);
		tags.push(`<meta property="og:image:width" content="1200">`);
		tags.push(`<meta property="og:image:height" content="630">`);
		const banner = String(site.banner ?? "").trim();
		if (banner) {
			const bannerUrl = `https://${publicHost}${banner.startsWith("/") ? banner : `/${banner}`}`;
			tags.push(`<meta property="x:game:image" content="${escapeHtml(bannerUrl)}">`);
			tags.push(`<meta property="x:game:image:width" content="1200">`);
			tags.push(`<meta property="x:game:image:height" content="264">`);
		}
	}
	return tags;
}
function stripGrokExtensionsScript(html) {
	return String(html).replace(/<script\b[^>]*\bsrc\s*=\s*["'][^"']*\/grok-app-builder\/extensions\.js[^"']*["'][^>]*>\s*<\/script>/gi, "");
}
function stripShareMetaTags(html) {
	return String(html).replace(/<meta\b[^>]*>/gi, (tag) => {
		const attrs = [...tag.matchAll(/\b(?:property|name)\s*=\s*["']([^"']+)["']/gi)];
		for (const match of attrs) if (SHARE_META_KEYS.has(String(match[1]).toLowerCase())) return "";
		return tag;
	});
}
function insertAfterHeadOpen(html, snippet) {
	if (/<head\b[^>]*>/i.test(html)) return html.replace(/<head\b[^>]*>/i, (open) => `${open}${snippet}`);
	if (/<html\b[^>]*>/i.test(html)) return html.replace(/<html\b[^>]*>/i, (open) => `${open}<head>${snippet}</head>`);
	return `<!doctype html><html><head>${snippet}</head>${html}`;
}
function insertBeforeHeadClose(html, snippet) {
	if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, `${snippet}</head>`);
	return insertAfterHeadOpen(html, snippet);
}
function normalizeHeadContext(ctx = {}) {
	const cwd = ctx.cwd ?? processModule.cwd();
	const site = applyCustomCardFromFs(ctx.site !== void 0 ? ctx.site : snapshotOgIdentity(cwd).site, cwd);
	return {
		appName: resolveOgTitle(site, ctx.appName ?? "Grok App", ctx.host ?? ""),
		projectId: ctx.projectId ?? readGrokProjectId(),
		creator: ctx.creator ?? readXCreator(),
		creatorId: ctx.creatorId ?? readXCreatorId(),
		host: ctx.host ?? "",
		cwd,
		site
	};
}
function injectGrokPwaHead(html, ctx = {}) {
	if (typeof html !== "string") return html;
	const { site, projectId, creator, creatorId, host, cwd } = normalizeHeadContext(ctx);
	const documentTitle = titleFromDocument(html);
	const appName = resolveOgTitle(site, ctx.appName ?? "Grok App", host, documentTitle);
	let next = stripShareMetaTags(html);
	if (!readGrokExtensionsEnabled()) next = stripGrokExtensionsScript(next);
	const missing = grokPwaHeadTags(appName).filter(([key]) => {
		if (key === "manifest") return !next.includes("href=\"/__grok/manifest.webmanifest\"");
		if (key === "apple-touch-icon") return !next.includes("href=\"/__grok/icon-180.png\"");
		return !next.includes(`name="${key}"`);
	}).map(([, tag]) => tag);
	next = insertAfterHeadOpen(next, grokOgHeadTags({
		host,
		appName,
		site,
		documentTitle,
		cwd
	}).join(""));
	if (readGrokExtensionsEnabled() && !next.includes("/grok-app-builder/extensions.js")) missing.push(...grokExtensionsHeadTags(projectId));
	else if (projectId && !next.includes("name=\"grok-project-id\"")) missing.push(`<meta name="grok-project-id" content="${escapeHtml(projectId)}">`);
	if (projectId && !next.includes("property=\"grok:app_id\"") && !next.includes("property='grok:app_id'")) missing.push(`<meta property="grok:app_id" content="${escapeHtml(projectId)}">`);
	const creatorTags = grokXCreatorHeadTags(creator, creatorId);
	if (creatorTags.length > 0) {
		if (!(next.includes("property=\"x:creator\" content=") || next.includes("property='x:creator' content="))) missing.push(creatorTags[0]);
		if (!next.includes("property=\"x:creator:id\"")) missing.push(creatorTags[1]);
	}
	if (missing.length === 0) return next;
	return insertBeforeHeadClose(next, missing.join(""));
}
function findHeadClose(buf) {
	return buf.toString("latin1").search(/<\/head>/i);
}
/**
* Streaming head injector: buffers only until `</head>` (ASCII marker; never
* appears inside a UTF-8 continuation byte), overwrites share-card metas,
* then passes later chunks through so streaming SSR keeps streaming.
*/
function createHeadInjector(ctx = {}) {
	const normalized = normalizeHeadContext(ctx);
	/** @type {Buffer[]} */
	let pending = [];
	let done = false;
	const apply = (html) => injectGrokPwaHead(html, {
		appName: normalized.appName,
		projectId: normalized.projectId,
		creator: normalized.creator,
		creatorId: normalized.creatorId,
		host: normalized.host,
		cwd: normalized.cwd,
		site: normalized.site
	});
	return {
		/** @param {Uint8Array | string} chunk @returns {Buffer[]} chunks ready to emit */
		push(chunk) {
			const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
			if (done) return [buf];
			pending.push(buf);
			const joined = Buffer.concat(pending);
			const at = findHeadClose(joined);
			if (at === -1) return [];
			done = true;
			pending = [];
			const closeLen = joined.toString("latin1", at).match(/^<\/head>/i)[0].length;
			const head = apply(joined.subarray(0, at + closeLen).toString("utf8"));
			return [Buffer.concat([Buffer.from(head, "utf8"), joined.subarray(at + closeLen)])];
		},
		/** @returns {Buffer[]} whatever is still buffered (no `</head>` seen) */
		flush() {
			if (done || pending.length === 0) return [];
			const rest = Buffer.concat(pending);
			pending = [];
			done = true;
			return [Buffer.from(apply(rest.toString("utf8")), "utf8")];
		}
	};
}
//#endregion
//#region server/middleware/grok-pwa.ts
/**
* Deployed-app (Nitro) half of the platform PWA chrome. Auto-registered as
* global h3 middleware because vite.config.ts sets `serverDir: "./server"` —
* without that option Nitro v3 never scans this directory.
*
* - `?install=1&platform=ios` on a document path → the Home Screen tutorial,
*   bundled into the server build via `?raw` (the public/ directory is CDN
*   static output on Vercel and not readable from the function).
* - `/__grok/manifest.webmanifest` → per-app-named manifest (kept out of
*   public/ so this dynamic response is the only one).
* - Other HTML documents → stream-inject PWA + OG head tags at `</head>`.
*   OG identity is baked via `virtual:grok-og-identity` at `vite build`
*   (this function cannot read `src/lib/og/site.json` or `public/og.jpg`).
*   This must be a middleware transforming `next()`: h3 discards the `response`
*   runtime hook's return value, and `render:html` does not exist in Nitro v3.
*/
function requestHost(event) {
	return event.req.headers.get("x-forwarded-host") ?? event.req.headers.get("host") ?? event.url.host;
}
function injectHeadStreaming(response, host) {
	const injector = createHeadInjector({
		host,
		site: grokOgIdentity.site
	});
	const transformed = response.body.pipeThrough(new TransformStream({
		transform(chunk, controller) {
			for (const out of injector.push(chunk)) controller.enqueue(out);
		},
		flush(controller) {
			for (const out of injector.flush()) controller.enqueue(out);
		}
	}));
	const headers = new Headers(response.headers);
	headers.delete("content-length");
	return new Response(transformed, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
async function grokPwaMiddleware(event, next) {
	if ((event.req.method ?? "GET").toUpperCase() !== "GET") return next();
	const path = event.url.pathname;
	const urlWithQuery = path + event.url.search;
	if (path === "/__grok/manifest.webmanifest" || path === "/__grok/manifest.json") return new Response(renderWebManifest(requestHost(event)), { headers: {
		"content-type": "application/manifest+json; charset=utf-8",
		"cache-control": "no-cache"
	} });
	if (isInstallQuery(urlWithQuery) && isDocumentPath(path) && acceptsHtml(event.req.headers.get("accept"))) {
		const html = renderInstallPageHtml(install_page_default, {
			host: requestHost(event),
			url: urlWithQuery
		});
		return new Response(html, { headers: {
			"content-type": "text/html; charset=utf-8",
			"cache-control": "no-cache"
		} });
	}
	if (!isDocumentPath(path)) return next();
	const result = await next();
	if (result instanceof Response && result.body && String(result.headers.get("content-type") ?? "").includes("text/html") && !result.headers.get("content-encoding")) return injectHeadStreaming(result, requestHost(event));
	return result;
}
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_73Te0Z = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_73Te0Z
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(grokPwaMiddleware)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
