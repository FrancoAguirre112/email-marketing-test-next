"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/condense-newlines";
exports.ids = ["vendor-chunks/condense-newlines"];
exports.modules = {

/***/ "(rsc)/./node_modules/condense-newlines/index.js":
/*!*************************************************!*\
  !*** ./node_modules/condense-newlines/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * condense-newlines <https://github.com/jonschlinkert/condense-newlines>\n *\n * Copyright (c) 2014 Jon Schlinkert, contributors.\n * Licensed under the MIT License\n */ \nvar isWhitespace = __webpack_require__(/*! is-whitespace */ \"(rsc)/./node_modules/is-whitespace/index.js\");\nvar extend = __webpack_require__(/*! extend-shallow */ \"(rsc)/./node_modules/extend-shallow/index.js\");\nvar typeOf = __webpack_require__(/*! kind-of */ \"(rsc)/./node_modules/kind-of/index.js\");\nmodule.exports = function(str, options) {\n    var opts = extend({}, options);\n    var sep = opts.sep || \"\\n\\n\";\n    var min = opts.min;\n    var re;\n    if (typeof min === \"number\" && min !== 2) {\n        re = new RegExp(\"(\\\\r\\\\n|\\\\n|\\\\u2424) {\" + min + \",}\");\n    }\n    if (typeof re === \"undefined\") {\n        re = opts.regex || /(\\r\\n|\\n|\\u2424){2,}/g;\n    }\n    // if a line is 100% whitespace it will be trimmed, so that\n    // later we can condense newlines correctly\n    if (opts.keepWhitespace !== true) {\n        str = str.split(\"\\n\").map(function(line) {\n            return isWhitespace(line) ? line.trim() : line;\n        }).join(\"\\n\");\n    }\n    str = trailingNewline(str, opts);\n    return str.replace(re, sep);\n};\nfunction trailingNewline(str, options) {\n    var val = options.trailingNewline;\n    if (val === false) {\n        return str;\n    }\n    switch(typeOf(val)){\n        case \"string\":\n            str = str.replace(/\\s+$/, options.trailingNewline);\n            break;\n        case \"function\":\n            str = options.trailingNewline(str);\n            break;\n        case \"undefined\":\n        case \"boolean\":\n        default:\n            {\n                str = str.replace(/\\s+$/, \"\\n\");\n                break;\n            }\n    }\n    return str;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY29uZGVuc2UtbmV3bGluZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0NBS0MsR0FFRDtBQUVBLElBQUlBLGVBQWVDLG1CQUFPQSxDQUFDO0FBQzNCLElBQUlDLFNBQVNELG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlFLFNBQVNGLG1CQUFPQSxDQUFDO0FBRXJCRyxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsR0FBRyxFQUFFQyxPQUFPO0lBQ3BDLElBQUlDLE9BQU9OLE9BQU8sQ0FBQyxHQUFHSztJQUN0QixJQUFJRSxNQUFNRCxLQUFLQyxHQUFHLElBQUk7SUFDdEIsSUFBSUMsTUFBTUYsS0FBS0UsR0FBRztJQUNsQixJQUFJQztJQUVKLElBQUksT0FBT0QsUUFBUSxZQUFZQSxRQUFRLEdBQUc7UUFDeENDLEtBQUssSUFBSUMsT0FBTywyQkFBMkJGLE1BQU07SUFDbkQ7SUFDQSxJQUFJLE9BQU9DLE9BQU8sYUFBYTtRQUM3QkEsS0FBS0gsS0FBS0ssS0FBSyxJQUFJO0lBQ3JCO0lBRUEsMkRBQTJEO0lBQzNELDJDQUEyQztJQUMzQyxJQUFJTCxLQUFLTSxjQUFjLEtBQUssTUFBTTtRQUNoQ1IsTUFBTUEsSUFBSVMsS0FBSyxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxTQUFTQyxJQUFJO1lBQ3JDLE9BQU9qQixhQUFhaUIsUUFBUUEsS0FBS0MsSUFBSSxLQUFLRDtRQUM1QyxHQUFHRSxJQUFJLENBQUM7SUFDVjtJQUVBYixNQUFNYyxnQkFBZ0JkLEtBQUtFO0lBQzNCLE9BQU9GLElBQUllLE9BQU8sQ0FBQ1YsSUFBSUY7QUFDekI7QUFFQSxTQUFTVyxnQkFBZ0JkLEdBQUcsRUFBRUMsT0FBTztJQUNuQyxJQUFJZSxNQUFNZixRQUFRYSxlQUFlO0lBQ2pDLElBQUlFLFFBQVEsT0FBTztRQUNqQixPQUFPaEI7SUFDVDtJQUVBLE9BQVFILE9BQU9tQjtRQUNiLEtBQUs7WUFDSGhCLE1BQU1BLElBQUllLE9BQU8sQ0FBQyxRQUFRZCxRQUFRYSxlQUFlO1lBQ2pEO1FBQ0YsS0FBSztZQUNIZCxNQUFNQyxRQUFRYSxlQUFlLENBQUNkO1lBQzlCO1FBQ0YsS0FBSztRQUNMLEtBQUs7UUFDTDtZQUFTO2dCQUNQQSxNQUFNQSxJQUFJZSxPQUFPLENBQUMsUUFBUTtnQkFDMUI7WUFDRjtJQUNGO0lBQ0EsT0FBT2Y7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2VtYWlsLW1hcmtldGluZy10ZXN0LW5leHQvLi9ub2RlX21vZHVsZXMvY29uZGVuc2UtbmV3bGluZXMvaW5kZXguanM/NmRhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGNvbmRlbnNlLW5ld2xpbmVzIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9jb25kZW5zZS1uZXdsaW5lcz5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgSm9uIFNjaGxpbmtlcnQsIGNvbnRyaWJ1dG9ycy5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzV2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UnKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQtc2hhbGxvdycpO1xudmFyIHR5cGVPZiA9IHJlcXVpcmUoJ2tpbmQtb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHIsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSBleHRlbmQoe30sIG9wdGlvbnMpO1xuICB2YXIgc2VwID0gb3B0cy5zZXAgfHwgJ1xcblxcbic7XG4gIHZhciBtaW4gPSBvcHRzLm1pbjtcbiAgdmFyIHJlO1xuXG4gIGlmICh0eXBlb2YgbWluID09PSAnbnVtYmVyJyAmJiBtaW4gIT09IDIpIHtcbiAgICByZSA9IG5ldyBSZWdFeHAoJyhcXFxcclxcXFxufFxcXFxufFxcXFx1MjQyNCkgeycgKyBtaW4gKyAnLH0nKTtcbiAgfVxuICBpZiAodHlwZW9mIHJlID09PSAndW5kZWZpbmVkJykge1xuICAgIHJlID0gb3B0cy5yZWdleCB8fCAvKFxcclxcbnxcXG58XFx1MjQyNCl7Mix9L2c7XG4gIH1cblxuICAvLyBpZiBhIGxpbmUgaXMgMTAwJSB3aGl0ZXNwYWNlIGl0IHdpbGwgYmUgdHJpbW1lZCwgc28gdGhhdFxuICAvLyBsYXRlciB3ZSBjYW4gY29uZGVuc2UgbmV3bGluZXMgY29ycmVjdGx5XG4gIGlmIChvcHRzLmtlZXBXaGl0ZXNwYWNlICE9PSB0cnVlKSB7XG4gICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgcmV0dXJuIGlzV2hpdGVzcGFjZShsaW5lKSA/IGxpbmUudHJpbSgpIDogbGluZTtcbiAgICB9KS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHN0ciA9IHRyYWlsaW5nTmV3bGluZShzdHIsIG9wdHMpO1xuICByZXR1cm4gc3RyLnJlcGxhY2UocmUsIHNlcCk7XG59O1xuXG5mdW5jdGlvbiB0cmFpbGluZ05ld2xpbmUoc3RyLCBvcHRpb25zKSB7XG4gIHZhciB2YWwgPSBvcHRpb25zLnRyYWlsaW5nTmV3bGluZTtcbiAgaWYgKHZhbCA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlT2YodmFsKSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFxzKyQvLCBvcHRpb25zLnRyYWlsaW5nTmV3bGluZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICBzdHIgPSBvcHRpb25zLnRyYWlsaW5nTmV3bGluZShzdHIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBkZWZhdWx0OiB7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFxzKyQvLCAnXFxuJyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cbiJdLCJuYW1lcyI6WyJpc1doaXRlc3BhY2UiLCJyZXF1aXJlIiwiZXh0ZW5kIiwidHlwZU9mIiwibW9kdWxlIiwiZXhwb3J0cyIsInN0ciIsIm9wdGlvbnMiLCJvcHRzIiwic2VwIiwibWluIiwicmUiLCJSZWdFeHAiLCJyZWdleCIsImtlZXBXaGl0ZXNwYWNlIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwidHJpbSIsImpvaW4iLCJ0cmFpbGluZ05ld2xpbmUiLCJyZXBsYWNlIiwidmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/condense-newlines/index.js\n");

/***/ })

};
;