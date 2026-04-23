"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/style.scss"
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/style.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+3:300,regular&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Poppins:100,300,regular,500,600&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Raleway:300,regular,500&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Montserrat:500&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato:300&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:regular,600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  min-width: 320px;
}

body {
  color: #000;
  line-height: 1;
  font-family: "Poppins";
  font-size: 1.25rem;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input,
button,
textarea {
  font-family: "Poppins";
  font-size: inherit;
}

button {
  cursor: pointer;
  color: inherit;
  background-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

.lock body {
  overflow: hidden;
  touch-action: none;
  overscroll-behavior: none;
}
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
@media (max-width: 47.99875em) {
  .wrapper::before {
    content: "";
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 2;
  }
}
.menu-open .wrapper::before {
  opacity: 1;
  pointer-events: auto;
}
@supports (overflow: clip) {
  .wrapper {
    overflow: clip;
  }
}
.wrapper > main {
  flex: 1 1 auto;
}
.wrapper > * {
  min-width: 0;
}

/*
(i) Стилі будуть застосовуватись до
всіх класів, що містять *__container
Наприклад header__container, main__container і т.п.
Сніппет (HTML): cnt
*/
[class*=__container] {
  max-width: 99.6875rem;
  margin: 0 auto;
  padding: 0 0.9375rem;
}

[class*=-ibg] {
  position: relative;
}
[class*=-ibg] img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}

[class*=-ibg_contain] img {
  object-fit: contain;
}

.btn {
  white-space: nowrap;
  text-align: center;
}
@media (min-width: 99.6875em) {
  .btn {
    font-size: 1.125rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (font-size: clamp( 0.8125rem , 0.7340686275rem  +  0.3921568627vw , 1.125rem )) {
    .btn {
      font-size: clamp( 0.8125rem , 0.7340686275rem  +  0.3921568627vw , 1.125rem );
    }
  }
  @supports not (font-size: clamp( 0.8125rem , 0.7340686275rem  +  0.3921568627vw , 1.125rem )) {
    .btn {
      font-size: calc(0.8125rem + 0.3125 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .btn {
    font-size: 0.8125rem;
  }
}
@media (min-width: 99.6875em) {
  .btn {
    padding-left: 2.4375rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-left: clamp( 1.5rem , 1.2647058824rem  +  1.1764705882vw , 2.4375rem )) {
    .btn {
      padding-left: clamp( 1.5rem , 1.2647058824rem  +  1.1764705882vw , 2.4375rem );
    }
  }
  @supports not (padding-left: clamp( 1.5rem , 1.2647058824rem  +  1.1764705882vw , 2.4375rem )) {
    .btn {
      padding-left: calc(1.5rem + 0.9375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .btn {
    padding-left: 1.5rem;
  }
}
@media (min-width: 99.6875em) {
  .btn {
    padding-right: 2.4375rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-right: clamp( 1.5rem , 1.2647058824rem  +  1.1764705882vw , 2.4375rem )) {
    .btn {
      padding-right: clamp( 1.5rem , 1.2647058824rem  +  1.1764705882vw , 2.4375rem );
    }
  }
  @supports not (padding-right: clamp( 1.5rem , 1.2647058824rem  +  1.1764705882vw , 2.4375rem )) {
    .btn {
      padding-right: calc(1.5rem + 0.9375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .btn {
    padding-right: 1.5rem;
  }
}
.btn {
  padding-top: 0.6875rem;
  padding-bottom: 0.6875rem;
  line-height: 1.5;
  border-radius: 0.9375rem;
}
@media (max-width: 47.99875em) {
  .btn {
    border-radius: 0.625rem;
  }
}

.button-border {
  font-weight: 300;
  color: #00296D;
  border: 1px solid #00296D;
  background: linear-gradient(to bottom, #44C6E9 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: 0 100%;
  transition: background-position 0.3s ease, color 0.3s ease;
}
.button-border:hover {
  background-position: 0 0;
  color: #fff;
}
@media (max-width: 47.99875em) {
  .button-border {
    color: #666666;
    border: 1px solid #666666;
    max-width: 140px;
    padding: 0.5625rem 1.5rem;
    background: linear-gradient(to bottom, #666666 50%, transparent 50%);
    background-size: 100% 200%;
    background-position: 0 100%;
  }
}

.subtitle {
  font-family: "Poppins";
}
@media (min-width: 99.6875em) {
  .subtitle {
    font-size: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (font-size: clamp( 0.8125rem , 0.7026960784rem  +  0.5490196078vw , 1.25rem )) {
    .subtitle {
      font-size: clamp( 0.8125rem , 0.7026960784rem  +  0.5490196078vw , 1.25rem );
    }
  }
  @supports not (font-size: clamp( 0.8125rem , 0.7026960784rem  +  0.5490196078vw , 1.25rem )) {
    .subtitle {
      font-size: calc(0.8125rem + 0.4375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .subtitle {
    font-size: 0.8125rem;
  }
}
@media (min-width: 99.6875em) {
  .subtitle {
    line-height: 1.875rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (line-height: clamp( 1.25rem , 1.0931372549rem  +  0.7843137255vw , 1.875rem )) {
    .subtitle {
      line-height: clamp( 1.25rem , 1.0931372549rem  +  0.7843137255vw , 1.875rem );
    }
  }
  @supports not (line-height: clamp( 1.25rem , 1.0931372549rem  +  0.7843137255vw , 1.875rem )) {
    .subtitle {
      line-height: calc(1.25rem + 0.625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .subtitle {
    line-height: 1.25rem;
  }
}
.subtitle {
  font-weight: 400;
  color: #2977D5;
}

.title {
  font-family: "Poppins";
  font-weight: 600;
}
@media (min-width: 99.6875em) {
  .title {
    font-size: 4rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (font-size: clamp( 2rem , 1.4980392157rem  +  2.5098039216vw , 4rem )) {
    .title {
      font-size: clamp( 2rem , 1.4980392157rem  +  2.5098039216vw , 4rem );
    }
  }
  @supports not (font-size: clamp( 2rem , 1.4980392157rem  +  2.5098039216vw , 4rem )) {
    .title {
      font-size: calc(2rem + 2 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .title {
    font-size: 2rem;
  }
}
@media (min-width: 99.6875em) {
  .title {
    line-height: 6rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (line-height: clamp( 3rem , 2.2470588235rem  +  3.7647058824vw , 6rem )) {
    .title {
      line-height: clamp( 3rem , 2.2470588235rem  +  3.7647058824vw , 6rem );
    }
  }
  @supports not (line-height: clamp( 3rem , 2.2470588235rem  +  3.7647058824vw , 6rem )) {
    .title {
      line-height: calc(3rem + 3 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .title {
    line-height: 3rem;
  }
}

.text {
  font-family: "Source Sans 3";
}
@media (min-width: 99.6875em) {
  .text {
    font-size: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (font-size: clamp( 0.8125rem , 0.7026960784rem  +  0.5490196078vw , 1.25rem )) {
    .text {
      font-size: clamp( 0.8125rem , 0.7026960784rem  +  0.5490196078vw , 1.25rem );
    }
  }
  @supports not (font-size: clamp( 0.8125rem , 0.7026960784rem  +  0.5490196078vw , 1.25rem )) {
    .text {
      font-size: calc(0.8125rem + 0.4375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .text {
    font-size: 0.8125rem;
  }
}
@media (min-width: 99.6875em) {
  .text {
    line-height: 1.75rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (line-height: clamp( 1.1875rem , 1.0463235294rem  +  0.7058823529vw , 1.75rem )) {
    .text {
      line-height: clamp( 1.1875rem , 1.0463235294rem  +  0.7058823529vw , 1.75rem );
    }
  }
  @supports not (line-height: clamp( 1.1875rem , 1.0463235294rem  +  0.7058823529vw , 1.75rem )) {
    .text {
      line-height: calc(1.1875rem + 0.5625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .text {
    line-height: 1.1875rem;
  }
}
.text {
  font-weight: 300;
  color: #252525;
  padding: 0rem 0.3125rem 0rem 0rem;
}

.header {
  background-color: #FFF9FD;
  transition: all 0.3s ease 0s;
  z-index: 100;
  position: fixed;
  width: 100%;
}
@media (min-width: 99.6875em) {
  .header {
    height: 6.875rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (height: clamp( 6.25rem , 6.0931372549rem  +  0.7843137255vw , 6.875rem )) {
    .header {
      height: clamp( 6.25rem , 6.0931372549rem  +  0.7843137255vw , 6.875rem );
    }
  }
  @supports not (height: clamp( 6.25rem , 6.0931372549rem  +  0.7843137255vw , 6.875rem )) {
    .header {
      height: calc(6.25rem + 0.625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .header {
    height: 6.25rem;
  }
}
.header {
  top: 0;
  left: 0;
}
@media (min-width: 99.6875em) {
  .header {
    padding-top: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-top: clamp( 1.25rem , 2.0318627451rem  +  -0.7843137255vw , 1.875rem )) {
    .header {
      padding-top: clamp( 1.25rem , 2.0318627451rem  +  -0.7843137255vw , 1.875rem );
    }
  }
  @supports not (padding-top: clamp( 1.25rem , 2.0318627451rem  +  -0.7843137255vw , 1.875rem )) {
    .header {
      padding-top: calc(1.875rem + -0.625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .header {
    padding-top: 1.875rem;
  }
}
@media (min-width: 99.6875em) {
  .header {
    padding-bottom: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-bottom: clamp( 1.25rem , 2.0318627451rem  +  -0.7843137255vw , 1.875rem )) {
    .header {
      padding-bottom: clamp( 1.25rem , 2.0318627451rem  +  -0.7843137255vw , 1.875rem );
    }
  }
  @supports not (padding-bottom: clamp( 1.25rem , 2.0318627451rem  +  -0.7843137255vw , 1.875rem )) {
    .header {
      padding-bottom: calc(1.875rem + -0.625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .header {
    padding-bottom: 1.875rem;
  }
}
.header::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.header._header-scroll {
  background-color: rgba(0, 0, 0, 0.1);
}
.header._header-scroll::before {
  opacity: 1;
}
.header__container {
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1.25rem;
  position: relative;
}
.header__logo {
  display: flex;
  column-gap: 1.25rem;
  align-items: center;
}
.header__logo-icon {
  z-index: 100;
}
@media (min-width: 99.6875em) {
  .header__logo-icon img {
    width: 3.4375rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (width: clamp( 2.5rem , 2.2647058824rem  +  1.1764705882vw , 3.4375rem )) {
    .header__logo-icon img {
      width: clamp( 2.5rem , 2.2647058824rem  +  1.1764705882vw , 3.4375rem );
    }
  }
  @supports not (width: clamp( 2.5rem , 2.2647058824rem  +  1.1764705882vw , 3.4375rem )) {
    .header__logo-icon img {
      width: calc(2.5rem + 0.9375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .header__logo-icon img {
    width: 2.5rem;
  }
}
.header__logo-name {
  z-index: 80;
  text-align: center;
}
@media (max-width: 47.99875em) {
  .header__logo-name {
    position: absolute;
    width: auto;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@media (min-width: 99.6875em) {
  .header__logo-title {
    font-size: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (font-size: clamp( 0.9375rem , 0.7963235294rem  +  0.7058823529vw , 1.5rem )) {
    .header__logo-title {
      font-size: clamp( 0.9375rem , 0.7963235294rem  +  0.7058823529vw , 1.5rem );
    }
  }
  @supports not (font-size: clamp( 0.9375rem , 0.7963235294rem  +  0.7058823529vw , 1.5rem )) {
    .header__logo-title {
      font-size: calc(0.9375rem + 0.5625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .header__logo-title {
    font-size: 0.9375rem;
  }
}
.header__logo-title {
  line-height: 1.375;
  font-weight: 600;
  margin-bottom: 0.9375rem;
}
@media (min-width: 99.6875em) {
  .header__logo-title {
    margin-bottom: 0.9375rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (margin-bottom: clamp( 0.625rem , 0.5465686275rem  +  0.3921568627vw , 0.9375rem )) {
    .header__logo-title {
      margin-bottom: clamp( 0.625rem , 0.5465686275rem  +  0.3921568627vw , 0.9375rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.625rem , 0.5465686275rem  +  0.3921568627vw , 0.9375rem )) {
    .header__logo-title {
      margin-bottom: calc(0.625rem + 0.3125 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .header__logo-title {
    margin-bottom: 0.625rem;
  }
}
.header__logo-title {
  white-space: nowrap;
}
@media (max-width: 47.99875em) {
  .header__logo-title {
    font-weight: 400;
  }
}
@media (min-width: 99.6875em) {
  .header__logo-subtitle {
    font-size: 1rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (font-size: clamp( 0.75rem , 0.687254902rem  +  0.3137254902vw , 1rem )) {
    .header__logo-subtitle {
      font-size: clamp( 0.75rem , 0.687254902rem  +  0.3137254902vw , 1rem );
    }
  }
  @supports not (font-size: clamp( 0.75rem , 0.687254902rem  +  0.3137254902vw , 1rem )) {
    .header__logo-subtitle {
      font-size: calc(0.75rem + 0.25 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .header__logo-subtitle {
    font-size: 0.75rem;
  }
}
.header__logo-subtitle {
  line-height: 1.375;
  font-weight: 400;
  white-space: nowrap;
}
.header__actions {
  display: flex;
  align-items: center;
}
.header__button {
  grid-column-start: 1;
  grid-column-end: 3;
}

.menu {
  flex: 0 1 auto;
}
@media (max-width: 47.99875em) {
  .menu__body {
    position: fixed;
    width: 100%;
    height: auto;
    top: 0;
    left: -100%;
    padding-top: 8.625rem;
    padding: 8.625rem 1.25rem 2.375rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFF9FD;
    transition: all 0.3s ease 0s;
  }
  .menu-open .menu__body {
    left: 0;
  }
}
.menu__icons {
  display: none;
}
@media (max-width: 47.99875em) {
  .menu__icons {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, auto);
    flex: 0 1 auto;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 47.99875em) and (min-width: 99.6875em) {
  .menu__icons {
    grid-column-gap: 5rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 20em) and (max-width: 99.6875em) {
  @supports (grid-column-gap: clamp( 2.5rem , 1.8725490196rem  +  3.137254902vw , 5rem )) {
    .menu__icons {
      grid-column-gap: clamp( 2.5rem , 1.8725490196rem  +  3.137254902vw , 5rem );
    }
  }
  @supports not (grid-column-gap: clamp( 2.5rem , 1.8725490196rem  +  3.137254902vw , 5rem )) {
    .menu__icons {
      grid-column-gap: calc(2.5rem + 2.5 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 47.99875em) and (max-width: 20em) {
  .menu__icons {
    grid-column-gap: 2.5rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 99.6875em) {
  .menu__icons {
    grid-row-gap: 3.75rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 20em) and (max-width: 99.6875em) {
  @supports (grid-row-gap: clamp( 2.5rem , 2.1862745098rem  +  1.568627451vw , 3.75rem )) {
    .menu__icons {
      grid-row-gap: clamp( 2.5rem , 2.1862745098rem  +  1.568627451vw , 3.75rem );
    }
  }
  @supports not (grid-row-gap: clamp( 2.5rem , 2.1862745098rem  +  1.568627451vw , 3.75rem )) {
    .menu__icons {
      grid-row-gap: calc(2.5rem + 1.25 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 47.99875em) and (max-width: 20em) {
  .menu__icons {
    grid-row-gap: 2.5rem;
  }
}
.menu__icon {
  display: grid;
  align-items: center;
  justify-content: center;
}
.menu__list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 1 50%;
}
@media (min-width: 99.6875em) {
  .menu__list {
    column-gap: 3.75rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (column-gap: clamp( 1.25rem , 0.6225490196rem  +  3.137254902vw , 3.75rem )) {
    .menu__list {
      column-gap: clamp( 1.25rem , 0.6225490196rem  +  3.137254902vw , 3.75rem );
    }
  }
  @supports not (column-gap: clamp( 1.25rem , 0.6225490196rem  +  3.137254902vw , 3.75rem )) {
    .menu__list {
      column-gap: calc(1.25rem + 2.5 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .menu__list {
    column-gap: 1.25rem;
  }
}
.menu__list {
  row-gap: 0.625rem;
  flex-wrap: wrap;
}
@media (max-width: 47.99875em) {
  .menu__list {
    flex-direction: column;
    align-items: end;
    row-gap: 3.75rem;
  }
}
.menu__link {
  font-size: 1rem;
  background: linear-gradient(to right, currentColor 0%, currentColor 100%) no-repeat;
  background-size: 0 2px; /* Начальная ширина подчеркивания */
  background-position: left bottom;
  transition: background-size 0.3s ease;
}
@media (any-hover: hover) {
  .menu__link:hover {
    background-size: 100% 2px; /* Конечная ширина подчеркивания при наведении */
  }
}
@media (max-width: 47.99875em) {
  .menu__link {
    color: #2977D5;
  }
}

.icon-menu {
  display: none;
}
@media (max-width: 47.99875em) {
  .icon-menu {
    display: block;
    position: relative;
    width: 1.875rem;
    height: 1.125rem;
    z-index: 5;
  }
}
@media (max-width: 47.99875em) and (any-hover: none) {
  .icon-menu {
    cursor: default;
  }
}
@media (max-width: 47.99875em) {
  .icon-menu span, .icon-menu::before, .icon-menu::after {
    content: "";
    transition: all 0.3s ease 0s;
    left: 0;
    position: absolute;
    width: 100%;
    height: 0.1875rem;
    background-color: #00296D;
  }
  .icon-menu::before {
    top: 0;
  }
  .icon-menu::after {
    bottom: 0;
    width: 75%;
  }
  .icon-menu span {
    top: calc(50% - 0.0625rem);
    width: 50%;
  }
  .menu-open .icon-menu span {
    width: 0;
  }
  .menu-open .icon-menu::before {
    top: calc(45% - 0.0625rem);
    transform: rotate(-45deg);
  }
  .menu-open .icon-menu::after {
    bottom: calc(50% - 0.0625rem);
    transform: rotate(45deg);
    width: 100%;
  }
}

.footer {
  width: 100%;
}
.footer__map {
  z-index: 1;
  min-width: 100%;
}
@media (min-width: 99.6875em) {
  .footer__map {
    height: 35.9375rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (height: clamp( 24.5625rem , 21.7075980392rem  +  14.2745098039vw , 35.9375rem )) {
    .footer__map {
      height: clamp( 24.5625rem , 21.7075980392rem  +  14.2745098039vw , 35.9375rem );
    }
  }
  @supports not (height: clamp( 24.5625rem , 21.7075980392rem  +  14.2745098039vw , 35.9375rem )) {
    .footer__map {
      height: calc(24.5625rem + 11.375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .footer__map {
    height: 24.5625rem;
  }
}
.footer__text {
  background-color: #252525;
}
@media (min-width: 99.6875em) {
  .footer__text {
    padding-top: 0.8125rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-top: clamp( 0.4375rem , 0.3433823529rem  +  0.4705882353vw , 0.8125rem )) {
    .footer__text {
      padding-top: clamp( 0.4375rem , 0.3433823529rem  +  0.4705882353vw , 0.8125rem );
    }
  }
  @supports not (padding-top: clamp( 0.4375rem , 0.3433823529rem  +  0.4705882353vw , 0.8125rem )) {
    .footer__text {
      padding-top: calc(0.4375rem + 0.375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .footer__text {
    padding-top: 0.4375rem;
  }
}
@media (min-width: 99.6875em) {
  .footer__text {
    padding-bottom: 0.8125rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-bottom: clamp( 0.4375rem , 0.3433823529rem  +  0.4705882353vw , 0.8125rem )) {
    .footer__text {
      padding-bottom: clamp( 0.4375rem , 0.3433823529rem  +  0.4705882353vw , 0.8125rem );
    }
  }
  @supports not (padding-bottom: clamp( 0.4375rem , 0.3433823529rem  +  0.4705882353vw , 0.8125rem )) {
    .footer__text {
      padding-bottom: calc(0.4375rem + 0.375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .footer__text {
    padding-bottom: 0.4375rem;
  }
}
.footer__text {
  text-align: center;
  font-family: "Montserrat";
}
@media (min-width: 99.6875em) {
  .footer__text {
    font-size: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (font-size: clamp( 0.75rem , 0.6245098039rem  +  0.6274509804vw , 1.25rem )) {
    .footer__text {
      font-size: clamp( 0.75rem , 0.6245098039rem  +  0.6274509804vw , 1.25rem );
    }
  }
  @supports not (font-size: clamp( 0.75rem , 0.6245098039rem  +  0.6274509804vw , 1.25rem )) {
    .footer__text {
      font-size: calc(0.75rem + 0.5 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .footer__text {
    font-size: 0.75rem;
  }
}
@media (min-width: 99.6875em) {
  .footer__text {
    line-height: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (line-height: clamp( 0.9375rem , 0.7963235294rem  +  0.7058823529vw , 1.5rem )) {
    .footer__text {
      line-height: clamp( 0.9375rem , 0.7963235294rem  +  0.7058823529vw , 1.5rem );
    }
  }
  @supports not (line-height: clamp( 0.9375rem , 0.7963235294rem  +  0.7058823529vw , 1.5rem )) {
    .footer__text {
      line-height: calc(0.9375rem + 0.5625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .footer__text {
    line-height: 0.9375rem;
  }
}
.footer__text {
  font-weight: 500;
  color: #FFF9FD;
}

.main {
  background-color: #FFF9FD;
}
@media (min-width: 99.6875em) {
  .main {
    padding-top: 10.4375rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-top: clamp( 7.125rem , 6.293627451rem  +  4.1568627451vw , 10.4375rem )) {
    .main {
      padding-top: clamp( 7.125rem , 6.293627451rem  +  4.1568627451vw , 10.4375rem );
    }
  }
  @supports not (padding-top: clamp( 7.125rem , 6.293627451rem  +  4.1568627451vw , 10.4375rem )) {
    .main {
      padding-top: calc(7.125rem + 3.3125 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .main {
    padding-top: 7.125rem;
  }
}
.main {
  padding-bottom: 3.5625rem;
}
.main__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1.875rem;
}
@media (max-width: 47.99875em) {
  .main__container {
    flex-direction: column;
  }
}
.main__content {
  flex: 0 1 30%;
  display: flex;
  flex-direction: column;
}
@media (min-width: 99.6875em) {
  .main__content {
    row-gap: 3.75rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (row-gap: clamp( 1.25rem , 0.6225490196rem  +  3.137254902vw , 3.75rem )) {
    .main__content {
      row-gap: clamp( 1.25rem , 0.6225490196rem  +  3.137254902vw , 3.75rem );
    }
  }
  @supports not (row-gap: clamp( 1.25rem , 0.6225490196rem  +  3.137254902vw , 3.75rem )) {
    .main__content {
      row-gap: calc(1.25rem + 2.5 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .main__content {
    row-gap: 1.25rem;
  }
}
@media (max-width: 47.99875em) {
  .main__content {
    order: 1;
  }
}
.main__title span {
  color: #2977D5;
}
.main__battons {
  display: flex;
  justify-content: space-between;
  gap: 0.9375rem;
}
.main__button-blue {
  font-weight: 500;
  color: #00296D;
  line-height: 1.6875rem;
  background-color: #44C6E9;
  box-shadow: -2px 7px 0px 0px #2977D5;
  transition: all 0.3s ease 0s;
}
.main__button-blue:active {
  transform: translateY(7px);
  box-shadow: 0px 0px 0px 0px #2977D5;
}
@media (max-width: 47.99875em) {
  .main__button-blue {
    box-shadow: -2px 3px 0px 0px #2977D5;
  }
}
@media (any-hover: hover) {
  .main__button-blue:hover {
    color: #fff;
  }
}
@media (min-width: 99.6875em) {
  .main__button-clear {
    font-size: 1rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (font-size: clamp( 0.75rem , 0.687254902rem  +  0.3137254902vw , 1rem )) {
    .main__button-clear {
      font-size: clamp( 0.75rem , 0.687254902rem  +  0.3137254902vw , 1rem );
    }
  }
  @supports not (font-size: clamp( 0.75rem , 0.687254902rem  +  0.3137254902vw , 1rem )) {
    .main__button-clear {
      font-size: calc(0.75rem + 0.25 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .main__button-clear {
    font-size: 0.75rem;
  }
}
.main__button-clear {
  font-weight: 400;
  line-height: 1.5rem;
  text-decoration: underline;
  text-underline-offset: 5px;
  color: #666666;
  border: none;
  transition: all 0.3s ease 0s;
}
@media (any-hover: hover) {
  .main__button-clear:hover {
    color: #080707;
  }
}
@media (max-width: 47.99875em) {
  .main__button-clear {
    border: 1px solid #666666;
    text-decoration: none;
  }
}
.main__image {
  order: 0;
  flex: 0 1 auto;
  position: relative;
}
@media (min-width: 99.6875em) {
  .main__image {
    padding-left: 9.375rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-left: clamp( 0.0000000625rem , -2.3529410983rem  +  11.7647058039vw , 9.375rem )) {
    .main__image {
      padding-left: clamp( 0.0000000625rem , -2.3529410983rem  +  11.7647058039vw , 9.375rem );
    }
  }
  @supports not (padding-left: clamp( 0.0000000625rem , -2.3529410983rem  +  11.7647058039vw , 9.375rem )) {
    .main__image {
      padding-left: calc(0.0000000625rem + 9.3749999375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .main__image {
    padding-left: 0.0000000625rem;
  }
}
@media (min-width: 99.6875em) {
  .main__image {
    padding-right: 9.375rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-right: clamp( 3.125rem , 1.556372549rem  +  7.8431372549vw , 9.375rem )) {
    .main__image {
      padding-right: clamp( 3.125rem , 1.556372549rem  +  7.8431372549vw , 9.375rem );
    }
  }
  @supports not (padding-right: clamp( 3.125rem , 1.556372549rem  +  7.8431372549vw , 9.375rem )) {
    .main__image {
      padding-right: calc(3.125rem + 6.25 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .main__image {
    padding-right: 3.125rem;
  }
}
@media (max-width: 47.99875em) {
  .main__image {
    order: 0;
    margin-bottom: 2.5rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 99.6875em) {
  .main__image {
    padding-left: 0.0000000625rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-left: clamp( 0.0000000625rem , 3.9093137098rem  +  -3.921568549vw , 3.125rem )) {
    .main__image {
      padding-left: clamp( 0.0000000625rem , 3.9093137098rem  +  -3.921568549vw , 3.125rem );
    }
  }
  @supports not (padding-left: clamp( 0.0000000625rem , 3.9093137098rem  +  -3.921568549vw , 3.125rem )) {
    .main__image {
      padding-left: calc(3.125rem + -3.1249999375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 47.99875em) and (max-width: 20em) {
  .main__image {
    padding-left: 3.125rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 99.6875em) {
  .main__image {
    padding-right: 0.0000000625rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-right: clamp( 0.0000000625rem , 3.9093137098rem  +  -3.921568549vw , 3.125rem )) {
    .main__image {
      padding-right: clamp( 0.0000000625rem , 3.9093137098rem  +  -3.921568549vw , 3.125rem );
    }
  }
  @supports not (padding-right: clamp( 0.0000000625rem , 3.9093137098rem  +  -3.921568549vw , 3.125rem )) {
    .main__image {
      padding-right: calc(3.125rem + -3.1249999375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 47.99875em) and (max-width: 20em) {
  .main__image {
    padding-right: 3.125rem;
  }
}
.main__image img {
  position: relative;
  height: auto;
  z-index: 2;
  width: clamp(297px, 40vw, 595px);
  aspect-ratio: 595/893;
  object-fit: cover;
}
.main__image::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(535px, 50vw, 893px);
  aspect-ratio: 1/1;
  background: #00296D;
  border-radius: 50%;
  background: linear-gradient(180deg, rgb(212, 228, 244) 15%, rgb(68, 198, 233) 45%, rgb(41, 119, 213) 70%, rgb(0, 41, 109) 100%);
  z-index: 1;
}
@media (max-width: 47.99875em) {
  .main__image::before {
    transform: translate(-40%, -55%);
  }
}

.contacts {
  background-color: #D4E4F4;
}
@media (min-width: 99.6875em) {
  .contacts {
    padding-top: 4.5rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-top: clamp( 3.75rem , 3.5617647059rem  +  0.9411764706vw , 4.5rem )) {
    .contacts {
      padding-top: clamp( 3.75rem , 3.5617647059rem  +  0.9411764706vw , 4.5rem );
    }
  }
  @supports not (padding-top: clamp( 3.75rem , 3.5617647059rem  +  0.9411764706vw , 4.5rem )) {
    .contacts {
      padding-top: calc(3.75rem + 0.75 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .contacts {
    padding-top: 3.75rem;
  }
}
@media (min-width: 99.6875em) {
  .contacts {
    padding-bottom: 4.5rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-bottom: clamp( 3.75rem , 3.5617647059rem  +  0.9411764706vw , 4.5rem )) {
    .contacts {
      padding-bottom: clamp( 3.75rem , 3.5617647059rem  +  0.9411764706vw , 4.5rem );
    }
  }
  @supports not (padding-bottom: clamp( 3.75rem , 3.5617647059rem  +  0.9411764706vw , 4.5rem )) {
    .contacts {
      padding-bottom: calc(3.75rem + 0.75 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .contacts {
    padding-bottom: 3.75rem;
  }
}
@media (max-width: 47.99875em) {
  .contacts {
    background-color: #FFF9FD;
  }
}
.contacts__items {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
@media (max-width: 47.99875em) {
  .contacts__items {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
}

.contact__item {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1.25rem;
}
@media (max-width: 47.99875em) {
  .contact__item {
    grid-template-columns: 60px 100px 150px;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 47.99875em) and (min-width: 99.6875em) {
  .contact__item {
    column-gap: 28.75rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 20em) and (max-width: 99.6875em) {
  @supports (column-gap: clamp( 0.0000000625rem , -7.2156861963rem  +  36.0784312941vw , 28.75rem )) {
    .contact__item {
      column-gap: clamp( 0.0000000625rem , -7.2156861963rem  +  36.0784312941vw , 28.75rem );
    }
  }
  @supports not (column-gap: clamp( 0.0000000625rem , -7.2156861963rem  +  36.0784312941vw , 28.75rem )) {
    .contact__item {
      column-gap: calc(0.0000000625rem + 28.7499999375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 47.99875em) and (max-width: 20em) {
  .contact__item {
    column-gap: 0.0000000625rem;
  }
}
@media (max-width: 47.99875em) {
  .contact__item:not(:last-child) {
    margin-bottom: 3.125rem;
  }
}
.contact__icon {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
}
@media (max-width: 47.99875em) {
  .contact__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row-start: 1;
    grid-row-end: 2;
  }
}
.contact__icon img {
  max-height: 3.125rem;
}
@media (min-width: 99.6875em) {
  .contact__icon img {
    max-height: 3.125rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (max-height: clamp( 1.875rem , 1.5612745098rem  +  1.568627451vw , 3.125rem )) {
    .contact__icon img {
      max-height: clamp( 1.875rem , 1.5612745098rem  +  1.568627451vw , 3.125rem );
    }
  }
  @supports not (max-height: clamp( 1.875rem , 1.5612745098rem  +  1.568627451vw , 3.125rem )) {
    .contact__icon img {
      max-height: calc(1.875rem + 1.25 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .contact__icon img {
    max-height: 1.875rem;
  }
}
@media (max-width: 47.99875em) {
  .contact__icon img {
    align-items: center;
    justify-content: center;
  }
}
@media (min-width: 99.6875em) {
  .contact__title {
    font-size: 1.75rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (font-size: clamp( 1.125rem , 0.9681372549rem  +  0.7843137255vw , 1.75rem )) {
    .contact__title {
      font-size: clamp( 1.125rem , 0.9681372549rem  +  0.7843137255vw , 1.75rem );
    }
  }
  @supports not (font-size: clamp( 1.125rem , 0.9681372549rem  +  0.7843137255vw , 1.75rem )) {
    .contact__title {
      font-size: calc(1.125rem + 0.625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .contact__title {
    font-size: 1.125rem;
  }
}
.contact__title {
  font-weight: 500;
  margin-bottom: 2.5rem;
  color: #00296D;
}
@media (max-width: 47.99875em) {
  .contact__title {
    margin-bottom: 0rem;
  }
}
.contact__text {
  font-family: "Source Sans 3";
}
@media (min-width: 99.6875em) {
  .contact__text {
    font-size: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (font-size: clamp( 0.8125rem , 0.7026960784rem  +  0.5490196078vw , 1.25rem )) {
    .contact__text {
      font-size: clamp( 0.8125rem , 0.7026960784rem  +  0.5490196078vw , 1.25rem );
    }
  }
  @supports not (font-size: clamp( 0.8125rem , 0.7026960784rem  +  0.5490196078vw , 1.25rem )) {
    .contact__text {
      font-size: calc(0.8125rem + 0.4375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .contact__text {
    font-size: 0.8125rem;
  }
}
@media (min-width: 99.6875em) {
  .contact__text {
    line-height: 1.75rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (line-height: clamp( 1.1875rem , 1.0463235294rem  +  0.7058823529vw , 1.75rem )) {
    .contact__text {
      line-height: clamp( 1.1875rem , 1.0463235294rem  +  0.7058823529vw , 1.75rem );
    }
  }
  @supports not (line-height: clamp( 1.1875rem , 1.0463235294rem  +  0.7058823529vw , 1.75rem )) {
    .contact__text {
      line-height: calc(1.1875rem + 0.5625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .contact__text {
    line-height: 1.1875rem;
  }
}
.contact__text {
  font-weight: 400;
  color: #00296D;
}
@media (min-width: 99.6875em) {
  .contact__text p:not(:last-child) {
    margin-bottom: 1.5625rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (margin-bottom: clamp( 0.9375rem , 0.7806372549rem  +  0.7843137255vw , 1.5625rem )) {
    .contact__text p:not(:last-child) {
      margin-bottom: clamp( 0.9375rem , 0.7806372549rem  +  0.7843137255vw , 1.5625rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.9375rem , 0.7806372549rem  +  0.7843137255vw , 1.5625rem )) {
    .contact__text p:not(:last-child) {
      margin-bottom: calc(0.9375rem + 0.625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .contact__text p:not(:last-child) {
    margin-bottom: 0.9375rem;
  }
}

.services {
  padding: 4.1875rem 0rem;
  position: relative;
  min-height: 100vh;
}
.services__bg {
  position: absolute;
  width: auto;
  height: auto %;
  top: 67px;
  right: 0;
  z-index: -1;
}
.services__header {
  margin-bottom: 5rem;
}
.services__items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.25rem;
  row-gap: 1.25rem;
}
@media (max-width: 61.99875em) {
  .services__items {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 47.99875em) {
  .services__items {
    grid-template-columns: 1fr;
  }
}
.services__item {
  background-color: rgba(255, 249, 253, 0.6);
  padding: 2.5625rem 2rem;
  box-shadow: 3px 3px 10px 0px #8bbfff;
  border-radius: 0.9375rem;
}

.item-services {
  display: flex;
  flex-direction: column;
  row-gap: 1.5625rem;
}
@media (min-width: 99.6875em) {
  .item-services__title {
    font-size: 2rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (font-size: clamp( 1.25rem , 1.0617647059rem  +  0.9411764706vw , 2rem )) {
    .item-services__title {
      font-size: clamp( 1.25rem , 1.0617647059rem  +  0.9411764706vw , 2rem );
    }
  }
  @supports not (font-size: clamp( 1.25rem , 1.0617647059rem  +  0.9411764706vw , 2rem )) {
    .item-services__title {
      font-size: calc(1.25rem + 0.75 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .item-services__title {
    font-size: 1.25rem;
  }
}
@media (min-width: 99.6875em) {
  .item-services__title {
    line-height: 3rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (line-height: clamp( 1.875rem , 1.5926470588rem  +  1.4117647059vw , 3rem )) {
    .item-services__title {
      line-height: clamp( 1.875rem , 1.5926470588rem  +  1.4117647059vw , 3rem );
    }
  }
  @supports not (line-height: clamp( 1.875rem , 1.5926470588rem  +  1.4117647059vw , 3rem )) {
    .item-services__title {
      line-height: calc(1.875rem + 1.125 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .item-services__title {
    line-height: 1.875rem;
  }
}
.item-services__title {
  font-weight: 600;
  margin-bottom: 2.1875rem;
  color: #2977D5;
}
.item-services__text {
  font-weight: 400;
  padding: 0rem;
  color: #666666;
}
.item-services__link {
  display: flex;
  color: #44C6E9;
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/common.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/header.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/home.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACC,YAAA;EACA,WAAA;EACA,WAAA;ADQD;;ACNA;;;EAGC,sBAAA;ADSD;;ACCA;;EAEC,YAAA;EACA,gBAAA;ADED;;ACAA;EACC,WDQW;ECPX,cAAA;EACA,sBDEY;ECDZ,kBDEU;ECAV,0BAAA;EACA,2BAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;ADED;;ACAA;;;EAGC,sBDVY;ECWZ,kBAAA;ADGD;;ACDA;EACC,eAAA;EACA,cAAA;EACA,6BAAA;ADID;;ACFA;EACC,cAAA;EACA,qBAAA;ADKD;;ACHA;EACC,gBAAA;ADMD;;ACJA;EACC,mBAAA;ADOD;;ACLA;;;;;;EAMC,oBAAA;EACA,kBAAA;ADQD;;AAAC;EACC,gBAAA;EACA,kBAAA;EACA,yBAAA;AAGF;AAKA;EACC,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AAHD;AAKE;EADD;IAEE,WAAA;IACA,eAAA;IACA,QAAA;IACA,8BAAA;IACA,2BAAA;IACA,mCAAA;IACA,UAAA;IACA,oBAAA;IACA,6BAAA;IACA,UAAA;EAFD;AACF;AAGE;EACA,UAAA;EACA,oBAAA;AADF;AAGC;EAtBD;IAuBE,cAAA;EAAA;AACF;AAEC;EACC,cAAA;AAAF;AAGC;EACC,YAAA;AADF;;AAMA;;;;;CAAA;AAQC;EAEE,qBAAA;EACA,cAAA;EAIC,oBAAA;AATJ;;AEpFA;EACC,kBAAA;AFuFD;AEtFC;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,iBAAA;AFwFF;;AEpFC;EACC,mBAAA;AFuFF;;AG9HA;EACC,mBAAA;EACA,kBAAA;AHiID;AInEE;EDhEF;ICiEG,mBAAA;EJsED;AACF;AInEC;EAEC;IDvEF;MCwEG,6EAhBc;IJqFb;EACF;EInEA;ID3EF;MC4EG,+DAAA;IJsEC;EACF;AACF;AIpEE;EDhFF;ICiFG,oBAAA;EJuED;AACF;AIzFE;EDhEF;ICiEG,uBAAA;EJ4FD;AACF;AIzFC;EAEC;IDvEF;MCwEG,8EAhBc;IJ2Gb;EACF;EIzFA;ID3EF;MC4EG,+DAAA;IJ4FC;EACF;AACF;AI1FE;EDhFF;ICiFG,oBAAA;EJ6FD;AACF;AI/GE;EDhEF;ICiEG,wBAAA;EJkHD;AACF;AI/GC;EAEC;IDvEF;MCwEG,+EAhBc;IJiIb;EACF;EI/GA;ID3EF;MC4EG,gEAAA;IJkHC;EACF;AACF;AIhHE;EDhFF;ICiFG,qBAAA;EJmHD;AACF;AGrMA;EAME,sBAAA;EACA,yBAAA;EACA,gBAAA;EACA,wBAAA;AHkMF;AGjME;EAVF;IAWG,uBAAA;EHoMD;AACF;;AGlMA;EACE,gBAAA;EACA,cAAA;EACA,yBAAA;EACA,oEAAA;EACI,0BAAA;EACA,2BAAA;EACA,0DAAA;AHqMN;AGpME;EACI,wBAAA;EACJ,WAAA;AHsMF;AGpMC;EAZD;IAaG,cAAA;IACA,yBAAA;IACA,gBAAA;IACM,yBAAA;IACN,oEAAA;IACA,0BAAA;IACM,2BAAA;EHuMP;AACF;;AGpMA;EACC,sBHxBY;AA+Nb;AI7KE;ED3BF;IC4BG,kBAAA;EJgLD;AACF;AI7KC;EAEC;IDlCF;MCmCG,4EAhBc;IJ+Lb;EACF;EI7KA;IDtCF;MCuCG,+DAAA;IJgLC;EACF;AACF;AI9KE;ED3CF;IC4CG,oBAAA;EJiLD;AACF;AInME;ED3BF;IC4BG,qBAAA;EJsMD;AACF;AInMC;EAEC;IDlCF;MCmCG,6EAhBc;IJqNb;EACF;EInMA;IDtCF;MCuCG,8DAAA;IJsMC;EACF;AACF;AIpME;ED3CF;IC4CG,oBAAA;EJuMD;AACF;AGpPA;EAIG,gBAAA;EACA,cAAA;AHmPH;;AGjPA;EACC,sBH/BY;EGgCZ,gBAAA;AHoPD;AIlOE;EDpBF;ICqBG,eAAA;EJqOD;AACF;AIlOC;EAEC;ID3BF;MC4BG,oEAhBc;IJoPb;EACF;EIlOA;ID/BF;MCgCG,qDAAA;IJqOC;EACF;AACF;AInOE;EDpCF;ICqCG,eAAA;EJsOD;AACF;AIxPE;EDpBF;ICqBG,iBAAA;EJ2PD;AACF;AIxPC;EAEC;ID3BF;MC4BG,sEAhBc;IJ0Qb;EACF;EIxPA;ID/BF;MCgCG,uDAAA;IJ2PC;EACF;AACF;AIzPE;EDpCF;ICqCG,iBAAA;EJ4PD;AACF;;AG5RA;EACC,4BAAA;AH+RD;AIlRE;EDdF;ICeG,kBAAA;EJqRD;AACF;AIlRC;EAEC;IDrBF;MCsBG,4EAhBc;IJoSb;EACF;EIlRA;IDzBF;MC0BG,+DAAA;IJqRC;EACF;AACF;AInRE;ED9BF;IC+BG,oBAAA;EJsRD;AACF;AIxSE;EDdF;ICeG,oBAAA;EJ2SD;AACF;AIxSC;EAEC;IDrBF;MCsBG,8EAhBc;IJ0Tb;EACF;EIxSA;IDzBF;MC0BG,iEAAA;IJ2SC;EACF;AACF;AIzSE;ED9BF;IC+BG,sBAAA;EJ4SD;AACF;AG5UA;EAIC,gBAAA;EACA,cAAA;EACA,iCAAA;AH2UD;;AKhZA;EACE,yBAAA;EACA,4BAAA;EACA,YAAA;EACA,eAAA;EACA,WAAA;ALmZF;AI3UE;EC7EF;ID8EG,gBAAA;EJ8UD;AACF;AI3UC;EAEC;ICpFF;MDqFG,wEAhBc;IJ6Vb;EACF;EI3UA;ICxFF;MDyFG,yDAAA;IJ8UC;EACF;AACF;AI5UE;EC7FF;ID8FG,eAAA;EJ+UD;AACF;AK9aA;EAOE,MAAA;EACA,OAAA;AL0aF;AIrWE;EC7EF;ID8EG,oBAAA;EJwWD;AACF;AIrWC;EAEC;ICpFF;MDqFG,8EAbe;IJoXd;EACF;EIrWA;ICxFF;MDyFG,gEAAA;IJwWC;EACF;AACF;AItWE;EC7FF;ID8FG,qBAAA;EJyWD;AACF;AI3XE;EC7EF;ID8EG,uBAAA;EJ8XD;AACF;AI3XC;EAEC;ICpFF;MDqFG,iFAbe;IJ0Yd;EACF;EI3XA;ICxFF;MDyFG,mEAAA;IJ8XC;EACF;AACF;AI5XE;EC7FF;ID8FG,wBAAA;EJ+XD;AACF;AKndG;EACD,WAAA;EACA,kBAAA;EACA,QAAA;EACA,8BAAA;EACA,2BAAA;EACA,mCAAA;EACA,WAAA;EACA,UAAA;EACA,6BAAA;ALqdF;AKjdE;EACC,oCAAA;ALmdH;AKhdG;EACC,UAAA;ALkdJ;AK/cE;EACC,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EAEA,mBAAA;EACA,kBAAA;ALgdH;AK3cE;EACC,aAAA;EACA,mBAAA;EACA,mBAAA;AL6cH;AKrcE;EACC,YAAA;ALucH;AIlbE;ECpBC;IDqBA,gBAAA;EJqbD;AACF;AIlbC;EAEC;IC3BC;MD4BA,uEAhBc;IJocb;EACF;EIlbA;IC/BC;MDgCA,wDAAA;IJqbC;EACF;AACF;AInbE;ECpCC;IDqCA,aAAA;EJsbD;AACF;AKrdE;EACC,WAAA;EACA,kBAAA;ALudH;AKtdG;EAHD;IAIE,kBAAA;IACA,WAAA;IACA,YAAA;IACA,QAAA;IACA,SAAA;IACA,gCAAA;ELydF;AACF;AItdE;ECEA;IDDC,iBAAA;EJydD;AACF;AItdC;EAEC;ICLA;MDMC,2EAhBc;IJweb;EACF;EItdA;ICTA;MDUC,+DAAA;IJydC;EACF;AACF;AIvdE;ECdA;IDeC,oBAAA;EJ0dD;AACF;AK1eE;EAEC,kBAAA;EACA,gBAAA;EACA,wBAAA;AL2eH;AIjfE;ECEA;IDDC,wBAAA;EJofD;AACF;AIjfC;EAEC;ICLA;MDMC,iFAhBc;IJmgBb;EACF;EIjfA;ICTA;MDUC,kEAAA;IJofC;EACF;AACF;AIlfE;ECdA;IDeC,uBAAA;EJqfD;AACF;AKrgBE;EAMC,mBAAA;ALkgBH;AKjgBG;EAPD;IAQE,gBAAA;ELogBF;AACF;AI/gBE;ECgBA;IDfC,eAAA;EJkhBD;AACF;AI/gBC;EAEC;ICSA;MDRC,sEAhBc;IJiiBb;EACF;EI/gBA;ICKA;MDJC,2DAAA;IJkhBC;EACF;AACF;AIhhBE;ECAA;IDCC,kBAAA;EJmhBD;AACF;AKrhBE;EAEC,kBAAA;EACA,gBAAA;EACA,mBAAA;ALshBH;AKxgBE;EACC,aAAA;EACA,mBAAA;AL0gBH;AKngBE;EACC,oBAAA;EACM,kBAAA;ALqgBT;;AKlgBA;EACE,cAAA;ALqgBF;AKjgBG;EADD;IAEE,eAAA;IACA,WAAA;IACA,YAAA;IACA,MAAA;IACA,WAAA;IAEA,qBAAA;IACA,0CAAA;IACA,aAAA;IACA,mBAAA;IACA,8BAAA;IACA,yBAAA;IACA,4BAAA;ELmgBF;EKlgBG;IACD,OAAA;ELogBF;AACF;AKhgBE;EACC,aAAA;ALkgBH;AKjgBG;EAFD;IAGE,aAAA;IACA,kCAAA;IACA,sCAAA;IACA,cAAA;IAGA,uBAAA;IACA,mBAAA;ELkgBF;AACF;AItlBE;ECyEA;IDxEC,qBAAA;EJylBD;AACF;AItlBC;EAEC;ICkEA;MDjEC,2EAhBc;IJwmBb;EACF;EItlBA;IC8DA;MD7DC,+DAAA;IJylBC;EACF;AACF;AIvlBE;ECyDA;IDxDC,uBAAA;EJ0lBD;AACF;AI5mBE;ECyEA;IDxEC,qBAAA;EJ+mBD;AACF;AI5mBC;EAEC;ICkEA;MDjEC,2EAhBc;IJ8nBb;EACF;EI5mBA;IC8DA;MD7DC,6DAAA;IJ+mBC;EACF;AACF;AI7mBE;ECyDA;IDxDC,oBAAA;EJgnBD;AACF;AK5iBE;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;AL8iBH;AKziBE;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;AL2iBH;AI7oBE;EC8FA;ID7FC,mBAAA;EJgpBD;AACF;AI7oBC;EAEC;ICuFA;MDtFC,0EAhBc;IJ+pBb;EACF;EI7oBA;ICmFA;MDlFC,2DAAA;IJgpBC;EACF;AACF;AI9oBE;EC8EA;ID7EC,mBAAA;EJipBD;AACF;AKrkBE;EAMC,iBAAA;EACA,eAAA;ALkkBH;AKjkBG;EARD;IASE,sBAAA;IACA,gBAAA;IACA,gBAAA;ELokBF;AACF;AKzjBE;EACC,eAAA;EACA,mFAAA;EACI,sBAAA,EAAA,mCAAA;EACE,gCAAA;EACA,qCAAA;AL2jBT;AK1jBG;EACC;IACC,yBAAA,EAAA,gDAAA;EL4jBH;AACF;AK1jBG;EAXD;IAYE,cAAA;EL6jBF;AACF;;AKljBA;EACC,aAAA;ALqjBD;AKpjBC;EAFD;IAGE,cAAA;IACA,kBAAA;IACA,eAAA;IACA,gBAAA;IACA,UAAA;ELujBA;AACF;AKvjBE;EARF;IASG,eAAA;EL0jBD;AACF;AKlkBC;EASC;IAGC,WAAA;IACA,4BAAA;IACA,OAAA;IACA,kBAAA;IACA,WAAA;IACA,iBAAA;IACA,yBAAA;EL0jBD;EKxjBA;IACC,MAAA;EL0jBD;EKxjBA;IACC,SAAA;IACA,UAAA;EL0jBD;EKvjBA;IACC,0BAAA;IACA,UAAA;ELyjBD;EKtjBC;IACC,QAAA;ELwjBF;EKljBC;IACC,0BAAA;IACA,yBAAA;ELojBF;EKljBC;IACC,6BAAA;IACA,wBAAA;IACA,WAAA;ELojBF;AACF;;AMh0BA;EACC,WAAA;ANm0BD;AMl0BC;EACC,UAAA;EACA,eAAA;ANo0BF;AI3vBE;EE3ED;IF4EE,kBAAA;EJ8vBD;AACF;AI3vBC;EAEC;IElFD;MFmFE,+EAhBc;IJ6wBb;EACF;EI3vBA;IEtFD;MFuFE,6DAAA;IJ8vBC;EACF;AACF;AI5vBE;EE3FD;IF4FE,kBAAA;EJ+vBD;AACF;AMr1BC;EACE,yBAAA;ANu1BH;AIpxBE;EEpED;IFqEE,sBAAA;EJuxBD;AACF;AIpxBC;EAEC;IE3ED;MF4EE,gFAhBc;IJsyBb;EACF;EIpxBA;IE/ED;MFgFE,gEAAA;IJuxBC;EACF;AACF;AIrxBE;EEpFD;IFqFE,sBAAA;EJwxBD;AACF;AI1yBE;EEpED;IFqEE,yBAAA;EJ6yBD;AACF;AI1yBC;EAEC;IE3ED;MF4EE,mFAhBc;IJ4zBb;EACF;EI1yBA;IE/ED;MFgFE,mEAAA;IJ6yBC;EACF;AACF;AI3yBE;EEpFD;IFqFE,yBAAA;EJ8yBD;AACF;AMp4BC;EAIE,kBAAA;EACA,yBAAA;ANm4BH;AIp0BE;EEpED;IFqEE,kBAAA;EJu0BD;AACF;AIp0BC;EAEC;IE3ED;MF4EE,0EAhBc;IJs1Bb;EACF;EIp0BA;IE/ED;MFgFE,0DAAA;IJu0BC;EACF;AACF;AIr0BE;EEpFD;IFqFE,kBAAA;EJw0BD;AACF;AI11BE;EEpED;IFqEE,mBAAA;EJ61BD;AACF;AI11BC;EAEC;IE3ED;MF4EE,6EAhBc;IJ42Bb;EACF;EI11BA;IE/ED;MFgFE,iEAAA;IJ61BC;EACF;AACF;AI31BE;EEpFD;IFqFE,sBAAA;EJ81BD;AACF;AMp7BC;EAQE,gBAAA;EACA,cAAA;AN+6BH;;AOh8BA;EACE,yBAAA;APm8BF;AIx3BE;EG5EF;IH6EG,uBAAA;EJ23BD;AACF;AIx3BC;EAEC;IGnFF;MHoFG,+EAhBc;IJ04Bb;EACF;EIx3BA;IGvFF;MHwFG,gEAAA;IJ23BC;EACF;AACF;AIz3BE;EG5FF;IH6FG,qBAAA;EJ43BD;AACF;AO19BA;EAGE,yBAAA;AP09BF;AOv9BE;EACC,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,oBAAA;APy9BH;AOx9BG;EALD;IAME,sBAAA;EP29BF;AACF;AOt9BE;EACC,aAAA;EACA,aAAA;EACA,sBAAA;APw9BH;AIj6BE;EG1DA;IH2DC,gBAAA;EJo6BD;AACF;AIj6BC;EAEC;IGjEA;MHkEC,uEAhBc;IJm7Bb;EACF;EIj6BA;IGrEA;MHsEC,wDAAA;IJo6BC;EACF;AACF;AIl6BE;EG1EA;IH2EC,gBAAA;EJq6BD;AACF;AO5+BG;EALD;IAME,QAAA;EP++BF;AACF;AOn+BG;EACC,cAAA;APq+BJ;AO19BE;EACC,aAAA;EACA,8BAAA;EACA,cAAA;AP49BH;AOv9BE;EACC,gBAAA;EACA,cAAA;EACA,sBAAA;EACA,yBAAA;EACA,oCAAA;EACA,4BAAA;APy9BH;AOx9BG;EACC,0BAAA;EACA,mCAAA;AP09BJ;AOx9BG;EAXD;IAYE,oCAAA;EP29BF;AACF;AO19BG;EACC;IACC,WAAA;EP49BH;AACF;AI19BE;EGIA;IHHC,eAAA;EJ69BD;AACF;AI19BC;EAEC;IGHA;MHIC,sEAhBc;IJ4+Bb;EACF;EI19BA;IGPA;MHQC,2DAAA;IJ69BC;EACF;AACF;AI39BE;EGZA;IHaC,kBAAA;EJ89BD;AACF;AO5+BE;EAEC,gBAAA;EACA,mBAAA;EACA,0BAAA;EACA,0BAAA;EACA,cAAA;EACA,YAAA;EACA,4BAAA;AP6+BH;AO5+BG;EACC;IACC,cAAA;EP8+BH;AACF;AO5+BG;EAdD;IAeE,yBAAA;IACA,qBAAA;EP++BF;AACF;AO1+BE;EACC,QAAA;EACA,cAAA;EACA,kBAAA;AP4+BH;AIzgCE;EG0BA;IHzBC,sBAAA;EJ4gCD;AACF;AIzgCC;EAEC;IGmBA;MHlBC,wFAhBc;IJ2hCb;EACF;EIzgCA;IGeA;MHdC,8EAAA;IJ4gCC;EACF;AACF;AI1gCE;EGUA;IHTC,6BAAA;EJ6gCD;AACF;AI/hCE;EG0BA;IHzBC,uBAAA;EJkiCD;AACF;AI/hCC;EAEC;IGmBA;MHlBC,+EAhBc;IJijCb;EACF;EI/hCA;IGeA;MHdC,gEAAA;IJkiCC;EACF;AACF;AIhiCE;EGUA;IHTC,uBAAA;EJmiCD;AACF;AOrhCG;EAND;IASE,QAAA;IACA,qBAAA;EPshCF;AACF;AI3jCE;EG0BA;IHzBC,6BAAA;EJ8jCD;AACF;AI3jCC;EAEC;IGmBA;MHlBC,sFAbe;IJ0kCd;EACF;EI3jCA;IGeA;MHdC,wEAAA;IJ8jCC;EACF;AACF;AI5jCE;EGUA;IHTC,sBAAA;EJ+jCD;AACF;AIjlCE;EG0BA;IHzBC,8BAAA;EJolCD;AACF;AIjlCC;EAEC;IGmBA;MHlBC,uFAbe;IJgmCd;EACF;EIjlCA;IGeA;MHdC,yEAAA;IJolCC;EACF;AACF;AIllCE;EGUA;IHTC,uBAAA;EJqlCD;AACF;AOjkCG;EACC,kBAAA;EACA,YAAA;EACA,UAAA;EACA,gCAAA;EACQ,qBAAA;EACA,iBAAA;APmkCZ;AOjkCG;EACC,WAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,gCAAA;EACQ,iBAAA;EACR,mBAAA;EACA,kBAAA;EACA,+HAAA;EACA,UAAA;APmkCJ;AOlkCI;EAZD;IAaE,gCAAA;EPqkCH;AACF;;AO9jCA;EACC,yBAAA;APikCD;AIroCE;EGmEF;IHlEG,mBAAA;EJwoCD;AACF;AIroCC;EAEC;IG4DF;MH3DG,2EAhBc;IJupCb;EACF;EIroCA;IGwDF;MHvDG,6DAAA;IJwoCC;EACF;AACF;AItoCE;EGmDF;IHlDG,oBAAA;EJyoCD;AACF;AI3pCE;EGmEF;IHlEG,sBAAA;EJ8pCD;AACF;AI3pCC;EAEC;IG4DF;MH3DG,8EAhBc;IJ6qCb;EACF;EI3pCA;IGwDF;MHvDG,gEAAA;IJ8pCC;EACF;AACF;AI5pCE;EGmDF;IHlDG,uBAAA;EJ+pCD;AACF;AO1mCE;EAJF;IAKG,yBAAA;EP6mCD;AACF;AOrmCE;EAEC,aAAA;EACA,mBAAA;EACA,6BAAA;APsmCH;AOrmCG;EALD;IAME,sBAAA;IACA,uBAAA;IACA,kBAAA;EPwmCF;AACF;;AOjmCE;EACC,aAAA;EACA,+BAAA;EACA,mBAAA;APomCH;AOnmCG;EAJD;IAKE,uCAAA;IAGA,mBAAA;IACA,uBAAA;EPomCF;AACF;AI/sCE;EGiGA;IHhGC,oBAAA;EJktCD;AACF;AI/sCC;EAEC;IG0FA;MHzFC,sFAhBc;IJiuCb;EACF;EI/sCA;IGsFA;MHrFC,6EAAA;IJktCC;EACF;AACF;AIhtCE;EGiFA;IHhFC,2BAAA;EJmtCD;AACF;AOhoCG;EAMC;IAAmB,uBAAA;EP8nCrB;AACF;AOvnCE;EACE,oBAAA;EACQ,kBAAA;EACR,iBAAA;EACQ,eAAA;APynCZ;AOxnCI;EALF;IAMG,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,iBAAA;IACO,eAAA;EP2nCV;AACF;AO1nCG;EACC,oBAAA;AP4nCJ;AI5vCE;EG+HC;IH9HA,oBAAA;EJ+vCD;AACF;AI5vCC;EAEC;IGwHC;MHvHA,4EAhBc;IJ8wCb;EACF;EI5vCA;IGoHC;MHnHA,6DAAA;IJ+vCC;EACF;AACF;AI7vCE;EG+GC;IH9GA,oBAAA;EJgwCD;AACF;AOhpCI;EAHD;IAIE,mBAAA;IACA,uBAAA;EPmpCH;AACF;AIxxCE;EGgJA;IH/IC,kBAAA;EJ2xCD;AACF;AIxxCC;EAEC;IGyIA;MHxIC,2EAhBc;IJ0yCb;EACF;EIxxCA;IGqIA;MHpIC,6DAAA;IJ2xCC;EACF;AACF;AIzxCE;EGgIA;IH/HC,mBAAA;EJ4xCD;AACF;AO9pCE;EAEC,gBAAA;EACA,qBAAA;EAEA,cAAA;AP8pCH;AO7pCG;EAND;IAOE,mBAAA;EPgqCF;AACF;AOtpCE;EACC,4BAAA;APwpCH;AI3zCE;EGkKA;IHjKC,kBAAA;EJ8zCD;AACF;AI3zCC;EAEC;IG2JA;MH1JC,4EAhBc;IJ60Cb;EACF;EI3zCA;IGuJA;MHtJC,+DAAA;IJ8zCC;EACF;AACF;AI5zCE;EGkJA;IHjJC,oBAAA;EJ+zCD;AACF;AIj1CE;EGkKA;IHjKC,oBAAA;EJo1CD;AACF;AIj1CC;EAEC;IG2JA;MH1JC,8EAhBc;IJm2Cb;EACF;EIj1CA;IGuJA;MHtJC,iEAAA;IJo1CC;EACF;AACF;AIl1CE;EGkJA;IHjJC,sBAAA;EJq1CD;AACF;AOrsCE;EAIC,gBAAA;EACA,cAAA;APosCH;AI32CE;EGwKC;IHvKA,wBAAA;EJ82CD;AACF;AI32CC;EAEC;IGiKC;MHhKA,kFAhBc;IJ63Cb;EACF;EI32CA;IG6JC;MH5JA,kEAAA;IJ82CC;EACF;AACF;AI52CE;EGwJC;IHvJA,wBAAA;EJ+2CD;AACF;;AOntCA;EACC,uBAAA;EACA,kBAAA;EACA,iBAAA;APstCD;AOrtCE;EACC,kBAAA;EACA,WAAA;EACA,cAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;APutCH;AO9sCE;EACC,mBAAA;APgtCH;AOjsCE;EACC,aAAA;EACA,qCAAA;EACA,mBAAA;EACA,gBAAA;APmsCH;AOlsCG;EALD;IAME,qCAAA;EPqsCF;AACF;AOpsCG;EARD;IASE,0BAAA;EPusCF;AACF;AOlsCE;EAEC,0CAAA;EACA,uBAAA;EAEA,oCAAA;EACA,wBAAA;APksCH;;AO3rCA;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;AP8rCF;AI96CE;EG6PA;IH5PC,eAAA;EJi7CD;AACF;AI96CC;EAEC;IGsPA;MHrPC,uEAhBc;IJg8Cb;EACF;EI96CA;IGkPA;MHjPC,2DAAA;IJi7CC;EACF;AACF;AI/6CE;EG6OA;IH5OC,kBAAA;EJk7CD;AACF;AIp8CE;EG6PA;IH5PC,iBAAA;EJu8CD;AACF;AIp8CC;EAEC;IGsPA;MHrPC,0EAhBc;IJs9Cb;EACF;EIp8CA;IGkPA;MHjPC,+DAAA;IJu8CC;EACF;AACF;AIr8CE;EG6OA;IH5OC,qBAAA;EJw8CD;AACF;AO7tCE;EAGC,gBAAA;EACA,wBAAA;EACA,cAAA;AP6tCH;AOxtCE;EACC,gBAAA;EACA,aAAA;EACA,cAAA;AP0tCH;AOrtCE;EACC,aAAA;EACA,cAAA;APutCH","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n//@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n//&display=swap Добавить при подключении через плагин@import url(https://fonts.googleapis.com/css?family=Shippori+Mincho:regular,500,600,700,800);\r\n// &subset=cyrillic-ext\r\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+3:300,regular&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,300,regular,500,600&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Raleway:300,regular,500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:regular,600&display=swap\");\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Poppins\";\r\n$fontSize: rem(20); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #000; // Колір шрифту за замовчуванням\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1920;\r\n// $maxWidth: 1728;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1565;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t&::before{\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tcontent: \"\";\r\n\t\t\tposition: fixed;\r\n\t\t\tinset: 0;\r\n\t\t\tbackground: rgba(0, 0, 0, 0.1);\r\n\t\t\tbackdrop-filter: blur(10px);\r\n\t\t\t-webkit-backdrop-filter: blur(10px);\r\n\t\t\topacity: 0;\r\n\t\t\tpointer-events: none;\r\n\t\t\ttransition: opacity 0.3s ease;\r\n\t\t\tz-index: 2;\r\n\t\t}\r\n\t}.menu-open &::before {\r\n\t\topacity: 1;\r\n\t\tpointer-events: auto;\r\n\t}\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: rem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: rem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","// Заголовки, загальні БЕМ блоки та інше...\r\n\r\n.page {\r\n\r\n\t\t// .page__main\r\n\r\n\t\t&__main {\r\n\t\t}\r\n\t\t&__comtacts {\r\n\t\t}\r\n\t\t&__services {\r\n\t\t}\r\n}\r\n//========================================================================================================================================================\r\n.btn{\r\n\twhite-space: nowrap;\r\n\ttext-align: center;\r\n\t@include adaptiveValue(\"font-size\", 18, 13);\r\n\t\t@include adaptiveValue(\"padding-left\", 39, 24);\r\n\t\t@include adaptiveValue(\"padding-right\", 39, 24);\r\n\t\tpadding-top: rem(11);\r\n\t\tpadding-bottom: rem(11);\r\n\t\tline-height: math.div(27 , 18);\r\n\t\tborder-radius: rem(15);\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tborder-radius: rem(10); \r\n\t\t}\r\n}\r\n.button-border{\r\n\t\tfont-weight: 300;\r\n\t\tcolor: #00296D;\r\n\t\tborder: 1px solid #00296D;\r\n\t\tbackground: linear-gradient(to bottom, #44C6E9 50%, transparent 50%);\r\n      background-size: 100% 200%;\r\n      background-position: 0 100%;\r\n      transition: background-position 0.3s ease, color 0.3s ease;\r\n\t\t&:hover {\r\n      background-position: 0 0;\r\n\t\tcolor: #fff;\r\n\t}\r\n\t@media (max-width:$mobile){\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: 1px solid #666666;\r\n\t\t\tmax-width: 140px;\r\n         padding: rem(9) rem(24);\r\n\t\t\tbackground: linear-gradient(to bottom, #666666 50%, transparent 50%);\r\n\t\t\tbackground-size: 100% 200%;\r\n         background-position: 0 100%;\r\n\t\t}\r\n}\r\n\r\n.subtitle {\r\n\tfont-family: $fontFamily;\r\n\t@include adaptiveValue(\"font-size\", 20, 13);\r\n\t@include adaptiveValue(\"line-height\", 30, 20);\r\n\t\t\tfont-weight: 400;\r\n\t\t\tcolor: #2977D5;\r\n}\r\n.title{\r\n\tfont-family: $fontFamily;\r\n\tfont-weight: 600;\r\n\t@include adaptiveValue(\"font-size\", 64, 32);\r\n\t@include adaptiveValue(\"line-height\", 96, 48);\r\n}\r\n.text {\r\n\tfont-family: \"Source Sans 3\";\r\n\t@include adaptiveValue(\"font-size\", 20, 13);\r\n\t@include adaptiveValue(\"line-height\", 28, 19);\r\n\tfont-weight: 300;\r\n\tcolor: #252525;\r\n\tpadding: rem(0) rem(5) rem(0) rem(0);\r\n}","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n\t\tbackground-color: #FFF9FD;\r\n\t\ttransition: all 0.3s ease 0s;\r\n\t\tz-index: 100;\r\n\t\tposition: fixed;\r\n\t\twidth: 100%;\r\n\t\t@include adaptiveValue(\"height\",110 ,100 );\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\t@include adaptiveValue(\"padding-top\",20 ,30 );\r\n\t\t\t@include adaptiveValue(\"padding-bottom\",20 ,30 );\r\n\t\t\t&::before {\r\n\t\tcontent: \"\";\r\n\t\tposition: absolute;\r\n\t\tinset: 0;\r\n\t\tbackground: rgba(0, 0, 0, 0.1);\r\n\t\tbackdrop-filter: blur(10px);\r\n\t\t-webkit-backdrop-filter: blur(10px);\r\n\t\tz-index: -1;\r\n\t\topacity: 0;\r\n\t\ttransition: opacity 0.3s ease;\r\n\t\t\r\n\t}\r\n\t\t// .header__container\r\n\t\t&._header-scroll{\r\n\t\t\tbackground-color: rgba(0, 0, 0, 0.1);\r\n\t\t\t// color: #FFF9FD;\r\n\t\t\t// opacity: 0.5;\r\n\t\t\t&::before{\r\n\t\t\t\topacity: 1;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__container {\r\n\t\t\tz-index: 100;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\t\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\r\n\t\t// .header__logo\r\n\r\n\t\t&__logo {\r\n\t\t\tdisplay: flex;\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-icon\r\n\r\n\t\t&__logo-icon {\r\n\t\t\tz-index: 100;\r\n\t\t\timg{\r\n\t\t\t\t@include adaptiveValue(\"width\", 55, 40);\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-name\r\n\t\t\r\n\t\t&__logo-name {\r\n\t\t\tz-index: 80;\r\n\t\t\ttext-align: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\twidth: auto;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-title\r\n\t\t\r\n\t\t&__logo-title {\r\n\t\t\t@include adaptiveValue(\"font-size\", 24, 15);\r\n\t\t\tline-height: math.div(33 , 24);\r\n\t\t\tfont-weight: 600;\r\n\t\t\tmargin-bottom: rem(15);\r\n\t\t\t@include adaptiveValue(\"margin-bottom\", 15, 10);\r\n\t\t\twhite-space: nowrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-subtitle\r\n\r\n\t\t&__logo-subtitle {\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tline-height: math.div(22 , 16);\r\n\t\t\tfont-weight: 400;\r\n\t\t\twhite-space: nowrap;\r\n\t\t}\r\n\r\n\r\n\r\n\t\t// .header__menu\r\n\r\n\t\t&__menu {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__actions\r\n\r\n\t\t&__actions {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__button\r\n\r\n\t\t&__button {\r\n\t\t\tgrid-column-start: 1;\r\n         grid-column-end: 3;\r\n\t\t}\r\n}\r\n.menu {\r\n\t\tflex: 0 1 auto;\r\n\t\t// .menu__body\r\n\r\n\t\t&__body {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: -100%;\r\n\t\t\t\t// margin-top: rem(100);\r\n\t\t\t\tpadding-top: rem(138);\r\n\t\t\t\tpadding: rem(138) rem(20) rem(38) rem(20);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\tbackground-color: #FFF9FD;\r\n\t\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t\t\t.menu-open &{\r\n\t\t\t\tleft: 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t&__icons{\r\n\t\t\tdisplay: none;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tgrid-template-rows: repeat(3, 1fr);\r\n\t\t\t\tgrid-template-columns: repeat(2, auto);\r\n\t\t\t\tflex: 0 1 auto;\r\n\t\t\t\t@include adaptiveValue(\"grid-column-gap\",80 ,40 );\r\n\t\t\t\t@include adaptiveValue(\"grid-row-gap\",60 ,40 );\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__icon{\r\n\t\t\tdisplay: grid;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\r\n\t\t// .menu__list\r\n\r\n\t\t&__list {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tflex: 0 1 50%;\r\n\t\t\t@include adaptiveValue(\"column-gap\", 60, 20);\r\n\t\t\trow-gap: rem(10);\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: end;\r\n\t\t\t\trow-gap: rem(60);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .menu__item\r\n\r\n\t\t&__item {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .menu__link\r\n\r\n\t\t&__link {\r\n\t\t\tfont-size: rem(16);\r\n\t\t\tbackground: linear-gradient(to right, currentColor 0%, currentColor 100%) no-repeat;\r\n      \tbackground-size: 0 2px; /* Начальная ширина подчеркивания */\r\n         background-position: left bottom;\r\n         transition: background-size 0.3s ease;\r\n\t\t\t@media (any-hover: hover) {\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tbackground-size: 100% 2px; /* Конечная ширина подчеркивания при наведении */\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tcolor:  #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n}\r\n.icon-menu {\r\n}\r\n\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n\tdisplay: none;\r\n\t@media (max-width: $mobile) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: rem(30);\r\n\t\theight: rem(18);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tleft: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: rem(3);\r\n\t\t\tbackground-color: #00296D;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 75%;\r\n\t\t\t\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - rem(1));\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(45% - rem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - rem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n","//====================================================================================================\r\n.footer {\r\n\twidth: 100%;\r\n\t&__map{\r\n\t\tz-index: 1;\r\n\t\tmin-width: 100%;\r\n\t\t@include adaptiveValue(\"height\", 575, 393);\r\n\t}\r\n\t// .footer__text\r\n\t\r\n\t&__text {\r\n\t\t\tbackground-color: #252525;\r\n\t\t\t@include adaptiveValue(\"padding-top\", 13, 7);\r\n\t\t\t@include adaptiveValue(\"padding-bottom\", 13, 7);\r\n\t\t\ttext-align: center;\r\n\t\t\tfont-family: \"Montserrat\";\r\n\t\t\t@include adaptiveValue(\"font-size\", 20, 12);\r\n\t\t\t@include adaptiveValue(\"line-height\", 24, 15);\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #FFF9FD;\r\n\t\t}\r\n}\r\n\r\n//====================================================================================================\r\n","//====================================================================================================\r\n\r\n.main {\r\n\t\tbackground-color: #FFF9FD;\r\n\t\t@include adaptiveValue(\"padding-top\", 167,114 );\r\n\t\tpadding-bottom: rem(57);\r\n\t\t// .main__container\r\n\r\n\t\t&__container {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\talign-items: center;\r\n\t\t\tcolumn-gap: rem(30);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__content\r\n\r\n\t\t&__content {\r\n\t\t\tflex: 0 1 30%;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\t@include adaptiveValue(\"row-gap\", 60, 20);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\torder: 1;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__subtitle\r\n\r\n\t\t&__subtitle {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .main__title\r\n\r\n\t\t&__title {\r\n\t\t\tspan{\r\n\t\t\t\tcolor: #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__text\r\n\r\n\t\t&__text {\r\n\t\t}\r\n\r\n\t\t// .main__battons\r\n\r\n\t\t&__battons {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tgap: rem(15);\r\n\t\t}\r\n\r\n\t\t// .main__button-blue\r\n\r\n\t\t&__button-blue {\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #00296D;\r\n\t\t\tline-height: rem(27);\r\n\t\t\tbackground-color:#44C6E9;\r\n\t\t\tbox-shadow: -2px 7px 0px 0px #2977D5;\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t&:active{\r\n\t\t\t\ttransform: translateY(7px);\r\n\t\t\t\tbox-shadow: 0px 0px 0px 0px #2977D5;\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tbox-shadow: -2px 3px 0px 0px #2977D5;\r\n\t\t\t}\r\n\t\t\t@media (any-hover: hover){\r\n\t\t\t\t&:hover{\r\n\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__button-clear\r\n\r\n\t\t&__button-clear {\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tfont-weight: 400;\r\n\t\t\tline-height: rem(24);\r\n\t\t\ttext-decoration: underline;\r\n\t\t\ttext-underline-offset: 5px;\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: none;\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t@media (any-hover: hover){\r\n\t\t\t\t&:hover{\r\n\t\t\t\t\tcolor: #080707;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tborder: 1px solid #666666;\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__image\r\n\r\n\t\t&__image {\r\n\t\t\torder: 0;\r\n\t\t\tflex: 0 1 auto;\r\n\t\t\tposition: relative;\r\n\t\t\t@include adaptiveValue(\"padding-left\",150 ,0 );\r\n\t\t\t@include adaptiveValue(\"padding-right\",150 ,50 );\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t@include adaptiveValue(\"padding-left\",0 ,50 );\r\n\t\t\t\t@include adaptiveValue(\"padding-right\",0 ,50 );\r\n\t\t\t\torder: 0;\r\n\t\t\t\tmargin-bottom: rem(40);\r\n\t\t\t}\r\n\t\t\timg{\r\n\t\t\t\tposition: relative;\r\n\t\t\t\theight: auto;\r\n\t\t\t\tz-index: 2;\r\n\t\t\t\twidth: clamp(297px, 40vw, 595px);\r\n            aspect-ratio: 595 / 893;\r\n            object-fit: cover;\r\n\t\t\t}\r\n\t\t\t&::before{\r\n\t\t\t\tcontent: \"\";\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\t\twidth: clamp(535px, 50vw, 893px);\r\n            aspect-ratio: 1 / 1;\r\n\t\t\t\tbackground: #00296D;\r\n\t\t\t\tborder-radius: 50%;\r\n\t\t\t\tbackground: linear-gradient(180deg,rgba(212, 228, 244, 1) 15%, rgba(68, 198, 233, 1) 45%, rgba(41, 119, 213, 1) 70%, rgba(0, 41, 109, 1) 100%);\r\n\t\t\t\tz-index: 1;\r\n\t\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\ttransform: translate(-40%, -55%);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n}\r\n\r\n//====================================================================================================\r\n\r\n.contacts {\r\n\tbackground-color: #D4E4F4;\r\n\t\t@include adaptiveValue(\"padding-top\",72 ,60 );\r\n\t\t@include adaptiveValue(\"padding-bottom\",72 ,60 );\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tbackground-color: #FFF9FD;\r\n\t\t}\r\n\t\t// .contacts__container\r\n\r\n\t\t&__container {\r\n\t\t}\r\n\r\n\t\t// .contacts__items\r\n\r\n\t\t&__items {\r\n\t\t\t// max-width: rem(1286);\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-around;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: start;\r\n\t\t\t}\r\n\t\t}\r\n}\r\n.contact {\r\n\r\n\t\t// .contact__item\r\n\r\n\t\t&__item {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-columns: (auto 1fr);\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tgrid-template-columns: (60px 100px 150px) ;\r\n\t\t\t\t@include adaptiveValue(\"column-gap\", 460,0 );\r\n\t\t\t\t// column-gap: rem(40);\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\t&:not(:last-child){margin-bottom: rem(50);}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobileSmall){\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .contact__icon\r\n\t\t\r\n\t\t&__icon {\r\n\t\t\t\tgrid-column-start: 1;\r\n            grid-column-end: 2;\r\n\t\t\t\tgrid-row-start: 1;\r\n            grid-row-end: 3;\r\n\t\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t\tgrid-row-start: 1;\r\n            grid-row-end: 2;\r\n\t\t\t\t}\r\n\t\t\timg{\r\n\t\t\t\tmax-height: rem(50);\r\n\t\t\t\t@include adaptiveValue(\"max-height\", 50,30 );\r\n\t\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t}\r\n\t\t\t\t// fill: #44C6E9;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .contact__content\r\n\r\n\t\t\r\n\r\n\t\t// .contact__title\r\n\r\n\t\t&__title {\r\n\t\t\t@include adaptiveValue(\"font-size\",28, 18 );\r\n\t\t\tfont-weight: 500;\r\n\t\t\tmargin-bottom: rem(40);\r\n\t\t\t// -webkit-text-stroke: 1px #00296D;\r\n\t\t\tcolor: #00296D;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tmargin-bottom: rem(0);\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobileSmall){\r\n\t\t\t\t// display: flex;\r\n\t\t\t\t// align-items: center;\r\n\t\t\t\t// justify-content: center;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .contact__text\r\n\r\n\t\t&__text {\r\n\t\t\tfont-family: \"Source Sans 3\";\r\n\t\t\t@include adaptiveValue(\"font-size\", 20, 13);\r\n\t\t\t@include adaptiveValue(\"line-height\", 28, 19);\r\n\t\t\tfont-weight: 400;\r\n\t\t\tcolor: #00296D;\r\n\t\t\tp:not(:last-child){\r\n\t\t\t\t@include adaptiveValue(\"margin-bottom\",25 ,15 );\r\n\t\t\t}\r\n\t\t}\r\n}\r\n//========================================================================================================================================================\r\n.services {\r\n\tpadding: rem(67) rem(0);\r\n\tposition: relative;\r\n\tmin-height: 100vh;\r\n\t\t&__bg{\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: auto;\r\n\t\t\theight: auto%;\r\n\t\t\ttop: 67px;\r\n\t\t\tright: 0;\r\n\t\t\tz-index: -1;\r\n\t\t}\r\n\t\t// .services__container\r\n\r\n\t\t&__container {\r\n\t\t}\r\n\r\n\t\t// .services__header\r\n\r\n\t\t&__header {\r\n\t\t\tmargin-bottom: rem(80);\r\n\t\t}\r\n\r\n\t\t// .services__subtitle\r\n\r\n\t\t&__subtitle {\r\n\t\t}\r\n\r\n\t\t// .services__title\r\n\r\n\t\t&__title {\r\n\t\t}\r\n\r\n\t\t// .services__items\r\n\r\n\t\t&__items {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\trow-gap: rem(20);\r\n\t\t\t@media (max-width:$tablet){\r\n\t\t\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tgrid-template-columns: 1fr;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .services__item\r\n\r\n\t\t&__item {\r\n\t\t\t// aspect-ratio: 1/1;\r\n\t\t\tbackground-color: rgba(255, 249, 253, 0.6);\r\n\t\t\tpadding: rem(41) rem(32);\r\n\t\t\t// border: 1px solid #00296D;\r\n\t\t\tbox-shadow: 3px 3px 10px 0px #8bbfff ;\r\n\t\t\tborder-radius: rem(15);\r\n\t\t}\r\n}\r\n.subtitle {\r\n}\r\n.title {\r\n}\r\n.item-services {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\trow-gap: rem(25);\r\n\t\t// .item-services__image\r\n\r\n\t\t&__image {\r\n\t\t}\r\n\r\n\t\t// .item-services__body\r\n\r\n\t\t&__body {\r\n\t\t}\r\n\r\n\t\t// .item-services__title\r\n\r\n\t\t&__title {\r\n\t\t\t@include adaptiveValue(\"font-size\", 32, 20);\r\n\t\t\t@include adaptiveValue(\"line-height\", 48, 30);\r\n\t\t\tfont-weight: 600;\r\n\t\t\tmargin-bottom: rem(35);\r\n\t\t\tcolor: #2977D5;\r\n\t\t}\r\n\r\n\t\t// .item-services__text\r\n\r\n\t\t&__text {\r\n\t\t\tfont-weight: 400;\r\n\t\t\tpadding: rem(0);\r\n\t\t\tcolor: #666666;\r\n\t\t}\r\n\r\n\t\t// .item-services__link\r\n\r\n\t\t&__link {\r\n\t\t\tdisplay: flex;\r\n\t\t\tcolor: #44C6E9;\r\n\t\t}\r\n}\r\n.text {\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a1f2b526b8025f3658a2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNTM4ZWUzOTA1ZTczYWZlNzVmMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNJQUFzSTtBQUN0SSw0SUFBNEk7QUFDNUksb0lBQW9JO0FBQ3BJLDJIQUEySDtBQUMzSCxxSEFBcUg7QUFDckgsa0lBQWtJO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzVkFBc1YsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLFNBQVMsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxzQkFBc0IsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLHNCQUFzQixPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFP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eUIsU0FBUyx3REFBd0QsMkJBQTJCLDBCQUEwQix5QkFBeUIsU0FBUyx3REFBd0Qsd0JBQXdCLHlCQUF5QixTQUFTLEtBQUssV0FBVyxLQUFLLHVCQUF1QjtBQUN4MzhDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQzdqRHZDLHNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucyszOjMwMCxyZWd1bGFyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoxMDAsMzAwLHJlZ3VsYXIsNTAwLDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLHJlZ3VsYXIsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczpyZWd1bGFyLDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLmxvY2sgYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcbn1cbi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC53cmFwcGVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGluc2V0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG59XG4ubWVudS1vcGVuIC53cmFwcGVyOjpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbkBzdXBwb3J0cyAob3ZlcmZsb3c6IGNsaXApIHtcbiAgLndyYXBwZXIge1xuICAgIG92ZXJmbG93OiBjbGlwO1xuICB9XG59XG4ud3JhcHBlciA+IG1haW4ge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi53cmFwcGVyID4gKiB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLypcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxu0LLRgdGW0YUg0LrQu9Cw0YHRltCyLCDRidC+INC80ZbRgdGC0Y/RgtGMICpfX2NvbnRhaW5lclxu0J3QsNC/0YDQuNC60LvQsNC0IGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0ZYg0YIu0L8uXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxuKi9cbltjbGFzcyo9X19jb250YWluZXJdIHtcbiAgbWF4LXdpZHRoOiA5OS42ODc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjkzNzVyZW07XG59XG5cbltjbGFzcyo9LWliZ10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5bY2xhc3MqPS1pYmddIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuW2NsYXNzKj0taWJnX2NvbnRhaW5dIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5idG4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MzQwNjg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDEuMTI1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzM0MDY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAxLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuODEyNXJlbSArIDAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuNXJlbSArIDAuOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy1yaWdodDogMi40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMS41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gIH1cbn1cbi5idG4ge1xuICBwYWRkaW5nLXRvcDogMC42ODc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42ODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjkzNzVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgfVxufVxuXG4uYnV0dG9uLWJvcmRlciB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAyOTZEO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAyOTZEO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNDRDNkU5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjNzIGVhc2UsIGNvbG9yIDAuM3MgZWFzZTtcbn1cbi5idXR0b24tYm9yZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5idXR0b24tYm9yZGVyIHtcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xuICAgIG1heC13aWR0aDogMTQwcHg7XG4gICAgcGFkZGluZzogMC41NjI1cmVtIDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNjY2NjY2IDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XG4gIH1cbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjcwMjY5NjA3ODRyZW0gICsgIDAuNTQ5MDE5NjA3OHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzAyNjk2MDc4NHJlbSAgKyAgMC41NDkwMTk2MDc4dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzAyNjk2MDc4NHJlbSAgKyAgMC41NDkwMTk2MDc4dncgLCAxLjI1cmVtICkpIHtcbiAgICAuc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuODEyNXJlbSArIDAuNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuc3VidGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsaW5lLWhlaWdodDogY2xhbXAoIDEuMjVyZW0gLCAxLjA5MzEzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBsaW5lLWhlaWdodDogY2xhbXAoIDEuMjVyZW0gLCAxLjA5MzEzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGluZS1oZWlnaHQ6IGNsYW1wKCAxLjI1cmVtICwgMS4wOTMxMzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuc3VidGl0bGUge1xuICAgICAgbGluZS1oZWlnaHQ6IGNhbGMoMS4yNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3VidGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICB9XG59XG4uc3VidGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzI5NzdENTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAycmVtICwgMS40OTgwMzkyMTU3cmVtICArICAyLjUwOTgwMzkyMTZ2dyAsIDRyZW0gKSkge1xuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAycmVtICwgMS40OTgwMzkyMTU3cmVtICArICAyLjUwOTgwMzkyMTZ2dyAsIDRyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMnJlbSAsIDEuNDk4MDM5MjE1N3JlbSAgKyAgMi41MDk4MDM5MjE2dncgLCA0cmVtICkpIHtcbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAyICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAudGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGxpbmUtaGVpZ2h0OiBjbGFtcCggM3JlbSAsIDIuMjQ3MDU4ODIzNXJlbSAgKyAgMy43NjQ3MDU4ODI0dncgLCA2cmVtICkpIHtcbiAgICAudGl0bGUge1xuICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKCAzcmVtICwgMi4yNDcwNTg4MjM1cmVtICArICAzLjc2NDcwNTg4MjR2dyAsIDZyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGluZS1oZWlnaHQ6IGNsYW1wKCAzcmVtICwgMi4yNDcwNTg4MjM1cmVtICArICAzLjc2NDcwNTg4MjR2dyAsIDZyZW0gKSkge1xuICAgIC50aXRsZSB7XG4gICAgICBsaW5lLWhlaWdodDogY2FsYygzcmVtICsgMyAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxufVxuXG4udGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIDNcIjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjcwMjY5NjA3ODRyZW0gICsgIDAuNTQ5MDE5NjA3OHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLnRleHQge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MDI2OTYwNzg0cmVtICArICAwLjU0OTAxOTYwNzh2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MDI2OTYwNzg0cmVtICArICAwLjU0OTAxOTYwNzh2dyAsIDEuMjVyZW0gKSkge1xuICAgIC50ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjgxMjVyZW0gKyAwLjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50ZXh0IHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAudGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGluZS1oZWlnaHQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAxLjA0NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS43NXJlbSApKSB7XG4gICAgLnRleHQge1xuICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAxLjA0NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsaW5lLWhlaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDEuMDQ2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjc1cmVtICkpIHtcbiAgICAudGV4dCB7XG4gICAgICBsaW5lLWhlaWdodDogY2FsYygxLjE4NzVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMS4xODc1cmVtO1xuICB9XG59XG4udGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMjUyNTI1O1xuICBwYWRkaW5nOiAwcmVtIDAuMzEyNXJlbSAwcmVtIDByZW07XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUZEO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXIge1xuICAgIGhlaWdodDogNi44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggNi4yNXJlbSAsIDYuMDkzMTM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCA2Ljg3NXJlbSApKSB7XG4gICAgLmhlYWRlciB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCA2LjI1cmVtICwgNi4wOTMxMzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDYuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDYuMjVyZW0gLCA2LjA5MzEzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgNi44NzVyZW0gKSkge1xuICAgIC5oZWFkZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKDYuMjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlciB7XG4gICAgaGVpZ2h0OiA2LjI1cmVtO1xuICB9XG59XG4uaGVhZGVyIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAyLjAzMTg2Mjc0NTFyZW0gICsgIC0wLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDIuMDMxODYyNzQ1MXJlbSAgKyAgLTAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMi4wMzE4NjI3NDUxcmVtICArICAtMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLmhlYWRlciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygxLjg3NXJlbSArIC0wLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDIuMDMxODYyNzQ1MXJlbSAgKyAgLTAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5oZWFkZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMi4wMzE4NjI3NDUxcmVtICArICAtMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAyLjAzMTg2Mjc0NTFyZW0gICsgIC0wLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEuODc1cmVtICsgLTAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS44NzVyZW07XG4gIH1cbn1cbi5oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuLmhlYWRlci5faGVhZGVyLXNjcm9sbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5oZWFkZXIuX2hlYWRlci1zY3JvbGw6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uaGVhZGVyX19jb250YWluZXIge1xuICB6LWluZGV4OiAxMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlcl9fbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19sb2dvLWljb24ge1xuICB6LWluZGV4OiAxMDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgIHdpZHRoOiAzLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAyLjVyZW0gLCAyLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMy40Mzc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLWljb24gaW1nIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMi41cmVtICwgMi4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDMuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDIuNXJlbSAsIDIuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAzLjQzNzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgICAgd2lkdGg6IGNhbGMoMi41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLWljb24gaW1nIHtcbiAgICB3aWR0aDogMi41cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLW5hbWUge1xuICB6LWluZGV4OiA4MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby1uYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC45Mzc1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC41NDY1Njg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjU0NjU2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMC45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTQ2NTY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAwLjkzNzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjYyNXJlbSArIDAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNzVyZW0gKyAwLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICBsaW5lLWhlaWdodDogMS4zNzU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaGVhZGVyX19hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2J1dHRvbiB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG59XG5cbi5tZW51IHtcbiAgZmxleDogMCAxIGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgcGFkZGluZy10b3A6IDguNjI1cmVtO1xuICAgIHBhZGRpbmc6IDguNjI1cmVtIDEuMjVyZW0gMi4zNzVyZW0gMS4yNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgfVxuICAubWVudS1vcGVuIC5tZW51X19ib2R5IHtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG4ubWVudV9faWNvbnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1lbnVfX2ljb25zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1lbnVfX2ljb25zIHtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGdyaWQtY29sdW1uLWdhcDogY2xhbXAoIDIuNXJlbSAsIDEuODcyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDVyZW0gKSkge1xuICAgIC5tZW51X19pY29ucyB7XG4gICAgICBncmlkLWNvbHVtbi1nYXA6IGNsYW1wKCAyLjVyZW0gLCAxLjg3MjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCA1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdyaWQtY29sdW1uLWdhcDogY2xhbXAoIDIuNXJlbSAsIDEuODcyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDVyZW0gKSkge1xuICAgIC5tZW51X19pY29ucyB7XG4gICAgICBncmlkLWNvbHVtbi1nYXA6IGNhbGMoMi41cmVtICsgMi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2ljb25zIHtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1lbnVfX2ljb25zIHtcbiAgICBncmlkLXJvdy1nYXA6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGdyaWQtcm93LWdhcDogY2xhbXAoIDIuNXJlbSAsIDIuMTg2Mjc0NTA5OHJlbSAgKyAgMS41Njg2Mjc0NTF2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tZW51X19pY29ucyB7XG4gICAgICBncmlkLXJvdy1nYXA6IGNsYW1wKCAyLjVyZW0gLCAyLjE4NjI3NDUwOThyZW0gICsgIDEuNTY4NjI3NDUxdncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdyaWQtcm93LWdhcDogY2xhbXAoIDIuNXJlbSAsIDIuMTg2Mjc0NTA5OHJlbSAgKyAgMS41Njg2Mjc0NTF2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tZW51X19pY29ucyB7XG4gICAgICBncmlkLXJvdy1nYXA6IGNhbGMoMi41cmVtICsgMS4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZ3JpZC1yb3ctZ2FwOiAyLjVyZW07XG4gIH1cbn1cbi5tZW51X19pY29uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWVudV9fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAwIDEgNTAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgY29sdW1uLWdhcDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChjb2x1bW4tZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNjIyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tZW51X19saXN0IHtcbiAgICAgIGNvbHVtbi1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC42MjI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChjb2x1bW4tZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNjIyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tZW51X19saXN0IHtcbiAgICAgIGNvbHVtbi1nYXA6IGNhbGMoMS4yNXJlbSArIDIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gIH1cbn1cbi5tZW51X19saXN0IHtcbiAgcm93LWdhcDogMC42MjVyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgcm93LWdhcDogMy43NXJlbTtcbiAgfVxufVxuLm1lbnVfX2xpbmsge1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgY3VycmVudENvbG9yIDAlLCBjdXJyZW50Q29sb3IgMTAwJSkgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDAgMnB4OyAvKiDQndCw0YfQsNC70YzQvdCw0Y8g0YjQuNGA0LjQvdCwINC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNGPICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC4zcyBlYXNlO1xufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XG4gIC5tZW51X19saW5rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4OyAvKiDQmtC+0L3QtdGH0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4ICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBjb2xvcjogIzI5NzdENTtcbiAgfVxufVxuXG4uaWNvbi1tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMS44NzVyZW07XG4gICAgaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICB6LWluZGV4OiA1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChhbnktaG92ZXI6IG5vbmUpIHtcbiAgLmljb24tbWVudSB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaWNvbi1tZW51IHNwYW4sIC5pY29uLW1lbnU6OmJlZm9yZSwgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDAuMTg3NXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyOTZEO1xuICB9XG4gIC5pY29uLW1lbnU6OmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICAuaWNvbi1tZW51IHNwYW4ge1xuICAgIHRvcDogY2FsYyg1MCUgLSAwLjA2MjVyZW0pO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51IHNwYW4ge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IGNhbGMoNDUlIC0gMC4wNjI1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogY2FsYyg1MCUgLSAwLjA2MjVyZW0pO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9vdGVyX19tYXAge1xuICB6LWluZGV4OiAxO1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5mb290ZXJfX21hcCB7XG4gICAgaGVpZ2h0OiAzNS45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDI0LjU2MjVyZW0gLCAyMS43MDc1OTgwMzkycmVtICArICAxNC4yNzQ1MDk4MDM5dncgLCAzNS45Mzc1cmVtICkpIHtcbiAgICAuZm9vdGVyX19tYXAge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMjQuNTYyNXJlbSAsIDIxLjcwNzU5ODAzOTJyZW0gICsgIDE0LjI3NDUwOTgwMzl2dyAsIDM1LjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMjQuNTYyNXJlbSAsIDIxLjcwNzU5ODAzOTJyZW0gICsgIDE0LjI3NDUwOTgwMzl2dyAsIDM1LjkzNzVyZW0gKSkge1xuICAgIC5mb290ZXJfX21hcCB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMjQuNTYyNXJlbSArIDExLjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlcl9fbWFwIHtcbiAgICBoZWlnaHQ6IDI0LjU2MjVyZW07XG4gIH1cbn1cbi5mb290ZXJfX3RleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuZm9vdGVyX190ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMC44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMC40Mzc1cmVtICwgMC4zNDMzODIzNTI5cmVtICArICAwLjQ3MDU4ODIzNTN2dyAsIDAuODEyNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDAuNDM3NXJlbSAsIDAuMzQzMzgyMzUyOXJlbSAgKyAgMC40NzA1ODgyMzUzdncgLCAwLjgxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAwLjQzNzVyZW0gLCAwLjM0MzM4MjM1MjlyZW0gICsgIDAuNDcwNTg4MjM1M3Z3ICwgMC44MTI1cmVtICkpIHtcbiAgICAuZm9vdGVyX190ZXh0IHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDAuNDM3NXJlbSArIDAuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyX190ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5mb290ZXJfX3RleHQge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAwLjQzNzVyZW0gLCAwLjM0MzM4MjM1MjlyZW0gICsgIDAuNDcwNTg4MjM1M3Z3ICwgMC44MTI1cmVtICkpIHtcbiAgICAuZm9vdGVyX190ZXh0IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC40Mzc1cmVtICwgMC4zNDMzODIzNTI5cmVtICArICAwLjQ3MDU4ODIzNTN2dyAsIDAuODEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNDM3NXJlbSAsIDAuMzQzMzgyMzUyOXJlbSAgKyAgMC40NzA1ODgyMzUzdncgLCAwLjgxMjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMC40Mzc1cmVtICsgMC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXJfX3RleHQge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjQzNzVyZW07XG4gIH1cbn1cbi5mb290ZXJfX3RleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjYyNDUwOTgwMzlyZW0gICsgIDAuNjI3NDUwOTgwNHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42MjQ1MDk4MDM5cmVtICArICAwLjYyNzQ1MDk4MDR2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjI0NTA5ODAzOXJlbSAgKyAgMC42Mjc0NTA5ODA0dncgLCAxLjI1cmVtICkpIHtcbiAgICAuZm9vdGVyX190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjc1cmVtICsgMC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsaW5lLWhlaWdodDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxpbmUtaGVpZ2h0OiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgICBsaW5lLWhlaWdodDogY2FsYygwLjkzNzVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXJfX3RleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjkzNzVyZW07XG4gIH1cbn1cbi5mb290ZXJfX3RleHQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0ZGRjlGRDtcbn1cblxuLm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUZEO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWFpbiB7XG4gICAgcGFkZGluZy10b3A6IDEwLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCA3LjEyNXJlbSAsIDYuMjkzNjI3NDUxcmVtICArICA0LjE1Njg2Mjc0NTF2dyAsIDEwLjQzNzVyZW0gKSkge1xuICAgIC5tYWluIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggNy4xMjVyZW0gLCA2LjI5MzYyNzQ1MXJlbSAgKyAgNC4xNTY4NjI3NDUxdncgLCAxMC40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggNy4xMjVyZW0gLCA2LjI5MzYyNzQ1MXJlbSAgKyAgNC4xNTY4NjI3NDUxdncgLCAxMC40Mzc1cmVtICkpIHtcbiAgICAubWFpbiB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyg3LjEyNXJlbSArIDMuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1haW4ge1xuICAgIHBhZGRpbmctdG9wOiA3LjEyNXJlbTtcbiAgfVxufVxuLm1haW4ge1xuICBwYWRkaW5nLWJvdHRvbTogMy41NjI1cmVtO1xufVxuLm1haW5fX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMS44NzVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWFpbl9fY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4ubWFpbl9fY29udGVudCB7XG4gIGZsZXg6IDAgMSAzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tYWluX19jb250ZW50IHtcbiAgICByb3ctZ2FwOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHJvdy1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC42MjI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1haW5fX2NvbnRlbnQge1xuICAgICAgcm93LWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJvdy1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC42MjI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1haW5fX2NvbnRlbnQge1xuICAgICAgcm93LWdhcDogY2FsYygxLjI1cmVtICsgMi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbl9fY29udGVudCB7XG4gICAgcm93LWdhcDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1haW5fX2NvbnRlbnQge1xuICAgIG9yZGVyOiAxO1xuICB9XG59XG4ubWFpbl9fdGl0bGUgc3BhbiB7XG4gIGNvbG9yOiAjMjk3N0Q1O1xufVxuLm1haW5fX2JhdHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMC45Mzc1cmVtO1xufVxuLm1haW5fX2J1dHRvbi1ibHVlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDI5NkQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjY4NzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NEM2RTk7XG4gIGJveC1zaGFkb3c6IC0ycHggN3B4IDBweCAwcHggIzI5NzdENTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cbi5tYWluX19idXR0b24tYmx1ZTphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoN3B4KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMyOTc3RDU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWFpbl9fYnV0dG9uLWJsdWUge1xuICAgIGJveC1zaGFkb3c6IC0ycHggM3B4IDBweCAwcHggIzI5NzdENTtcbiAgfVxufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XG4gIC5tYWluX19idXR0b24tYmx1ZTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW5fX2J1dHRvbi1jbGVhciB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICkpIHtcbiAgICAubWFpbl9fYnV0dG9uLWNsZWFyIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICkpIHtcbiAgICAubWFpbl9fYnV0dG9uLWNsZWFyIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjc1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1haW5fX2J1dHRvbi1jbGVhciB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG4ubWFpbl9fYnV0dG9uLWNsZWFyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XG4gIC5tYWluX19idXR0b24tY2xlYXI6aG92ZXIge1xuICAgIGNvbG9yOiAjMDgwNzA3O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWFpbl9fYnV0dG9uLWNsZWFyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuLm1haW5fX2ltYWdlIHtcbiAgb3JkZXI6IDA7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA5LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMi4zNTI5NDEwOTgzcmVtICArICAxMS43NjQ3MDU4MDM5dncgLCA5LjM3NXJlbSApKSB7XG4gICAgLm1haW5fX2ltYWdlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0yLjM1Mjk0MTA5ODNyZW0gICsgIDExLjc2NDcwNTgwMzl2dyAsIDkuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0yLjM1Mjk0MTA5ODNyZW0gICsgIDExLjc2NDcwNTgwMzl2dyAsIDkuMzc1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDAuMDAwMDAwMDYyNXJlbSArIDkuMzc0OTk5OTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1haW5fX2ltYWdlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMDAwMDAwMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctcmlnaHQ6IDkuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuNTU2MzcyNTQ5cmVtICArICA3Ljg0MzEzNzI1NDl2dyAsIDkuMzc1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMS41NTYzNzI1NDlyZW0gICsgIDcuODQzMTM3MjU0OXZ3ICwgOS4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMS41NTYzNzI1NDlyZW0gICsgIDcuODQzMTM3MjU0OXZ3ICwgOS4zNzVyZW0gKSkge1xuICAgIC5tYWluX19pbWFnZSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDMuMTI1cmVtICsgNi4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1haW5fX2ltYWdlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1haW5fX2ltYWdlIHtcbiAgICBvcmRlcjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIDMuOTA5MzEzNzA5OHJlbSAgKyAgLTMuOTIxNTY4NTQ5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLm1haW5fX2ltYWdlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIDMuOTA5MzEzNzA5OHJlbSAgKyAgLTMuOTIxNTY4NTQ5dncgLCAzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAzLjkwOTMxMzcwOThyZW0gICsgIC0zLjkyMTU2ODU0OXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5tYWluX19pbWFnZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMy4xMjVyZW0gKyAtMy4xMjQ5OTk5Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1haW5fX2ltYWdlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMDAwMDAwMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIDMuOTA5MzEzNzA5OHJlbSAgKyAgLTMuOTIxNTY4NTQ5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLm1haW5fX2ltYWdlIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAzLjkwOTMxMzcwOThyZW0gICsgIC0zLjkyMTU2ODU0OXZ3ICwgMy4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIDMuOTA5MzEzNzA5OHJlbSAgKyAgLTMuOTIxNTY4NTQ5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLm1haW5fX2ltYWdlIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMy4xMjVyZW0gKyAtMy4xMjQ5OTk5Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1haW5fX2ltYWdlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjEyNXJlbTtcbiAgfVxufVxuLm1haW5fX2ltYWdlIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogY2xhbXAoMjk3cHgsIDQwdncsIDU5NXB4KTtcbiAgYXNwZWN0LXJhdGlvOiA1OTUvODkzO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5tYWluX19pbWFnZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IGNsYW1wKDUzNXB4LCA1MHZ3LCA4OTNweCk7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBiYWNrZ3JvdW5kOiAjMDAyOTZEO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyMTIsIDIyOCwgMjQ0KSAxNSUsIHJnYig2OCwgMTk4LCAyMzMpIDQ1JSwgcmdiKDQxLCAxMTksIDIxMykgNzAlLCByZ2IoMCwgNDEsIDEwOSkgMTAwJSk7XG4gIHotaW5kZXg6IDE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWFpbl9faW1hZ2U6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTU1JSk7XG4gIH1cbn1cblxuLmNvbnRhY3RzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q0RTRGNDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmNvbnRhY3RzIHtcbiAgICBwYWRkaW5nLXRvcDogNC41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMy43NXJlbSAsIDMuNTYxNzY0NzA1OXJlbSAgKyAgMC45NDExNzY0NzA2dncgLCA0LjVyZW0gKSkge1xuICAgIC5jb250YWN0cyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDMuNzVyZW0gLCAzLjU2MTc2NDcwNTlyZW0gICsgIDAuOTQxMTc2NDcwNnZ3ICwgNC41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMy43NXJlbSAsIDMuNTYxNzY0NzA1OXJlbSAgKyAgMC45NDExNzY0NzA2dncgLCA0LjVyZW0gKSkge1xuICAgIC5jb250YWN0cyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygzLjc1cmVtICsgMC43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNvbnRhY3RzIHtcbiAgICBwYWRkaW5nLXRvcDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuY29udGFjdHMge1xuICAgIHBhZGRpbmctYm90dG9tOiA0LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMy41NjE3NjQ3MDU5cmVtICArICAwLjk0MTE3NjQ3MDZ2dyAsIDQuNXJlbSApKSB7XG4gICAgLmNvbnRhY3RzIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDMuNTYxNzY0NzA1OXJlbSAgKyAgMC45NDExNzY0NzA2dncgLCA0LjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMy41NjE3NjQ3MDU5cmVtICArICAwLjk0MTE3NjQ3MDZ2dyAsIDQuNXJlbSApKSB7XG4gICAgLmNvbnRhY3RzIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDMuNzVyZW0gKyAwLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY29udGFjdHMge1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuY29udGFjdHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XG4gIH1cbn1cbi5jb250YWN0c19faXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5jb250YWN0c19faXRlbXMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICB9XG59XG5cbi5jb250YWN0X19pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgY29sdW1uLWdhcDogMS4yNXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5jb250YWN0X19pdGVtIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMTAwcHggMTUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmNvbnRhY3RfX2l0ZW0ge1xuICAgIGNvbHVtbi1nYXA6IDI4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChjb2x1bW4tZ2FwOiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTcuMjE1Njg2MTk2M3JlbSAgKyAgMzYuMDc4NDMxMjk0MXZ3ICwgMjguNzVyZW0gKSkge1xuICAgIC5jb250YWN0X19pdGVtIHtcbiAgICAgIGNvbHVtbi1nYXA6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtNy4yMTU2ODYxOTYzcmVtICArICAzNi4wNzg0MzEyOTQxdncgLCAyOC43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChjb2x1bW4tZ2FwOiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTcuMjE1Njg2MTk2M3JlbSAgKyAgMzYuMDc4NDMxMjk0MXZ3ICwgMjguNzVyZW0gKSkge1xuICAgIC5jb250YWN0X19pdGVtIHtcbiAgICAgIGNvbHVtbi1nYXA6IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgMjguNzQ5OTk5OTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jb250YWN0X19pdGVtIHtcbiAgICBjb2x1bW4tZ2FwOiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5jb250YWN0X19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDMuMTI1cmVtO1xuICB9XG59XG4uY29udGFjdF9faWNvbiB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBncmlkLXJvdy1lbmQ6IDM7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuY29udGFjdF9faWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogMjtcbiAgfVxufVxuLmNvbnRhY3RfX2ljb24gaW1nIHtcbiAgbWF4LWhlaWdodDogMy4xMjVyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5jb250YWN0X19pY29uIGltZyB7XG4gICAgbWF4LWhlaWdodDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWF4LWhlaWdodDogY2xhbXAoIDEuODc1cmVtICwgMS41NjEyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5jb250YWN0X19pY29uIGltZyB7XG4gICAgICBtYXgtaGVpZ2h0OiBjbGFtcCggMS44NzVyZW0gLCAxLjU2MTI3NDUwOThyZW0gICsgIDEuNTY4NjI3NDUxdncgLCAzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXgtaGVpZ2h0OiBjbGFtcCggMS44NzVyZW0gLCAxLjU2MTI3NDUwOThyZW0gICsgIDEuNTY4NjI3NDUxdncgLCAzLjEyNXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX2ljb24gaW1nIHtcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMS44NzVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY29udGFjdF9faWNvbiBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuY29udGFjdF9faWNvbiBpbWcge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmNvbnRhY3RfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAwLjk2ODEzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgMS43NXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMC45NjgxMzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDEuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAwLjk2ODEzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgMS43NXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjEyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY29udGFjdF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cbn1cbi5jb250YWN0X190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgY29sb3I6ICMwMDI5NkQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuY29udGFjdF9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gIH1cbn1cbi5jb250YWN0X190ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgM1wiO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuY29udGFjdF9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzAyNjk2MDc4NHJlbSAgKyAgMC41NDkwMTk2MDc4dncgLCAxLjI1cmVtICkpIHtcbiAgICAuY29udGFjdF9fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjcwMjY5NjA3ODRyZW0gICsgIDAuNTQ5MDE5NjA3OHZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjcwMjY5NjA3ODRyZW0gICsgIDAuNTQ5MDE5NjA3OHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuODEyNXJlbSArIDAuNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNvbnRhY3RfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5jb250YWN0X190ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsaW5lLWhlaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDEuMDQ2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjc1cmVtICkpIHtcbiAgICAuY29udGFjdF9fdGV4dCB7XG4gICAgICBsaW5lLWhlaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDEuMDQ2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxpbmUtaGVpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMS4wNDYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNzVyZW0gKSkge1xuICAgIC5jb250YWN0X190ZXh0IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDEuMTg3NXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNvbnRhY3RfX3RleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE4NzVyZW07XG4gIH1cbn1cbi5jb250YWN0X190ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDI5NkQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5jb250YWN0X190ZXh0IHA6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc4MDYzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgMS41NjI1cmVtICkpIHtcbiAgICAuY29udGFjdF9fdGV4dCBwOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzgwNjM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCAxLjU2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzgwNjM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5jb250YWN0X190ZXh0IHA6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuOTM3NXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY29udGFjdF9fdGV4dCBwOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbiAgfVxufVxuXG4uc2VydmljZXMge1xuICBwYWRkaW5nOiA0LjE4NzVyZW0gMHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5zZXJ2aWNlc19fYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG8gJTtcbiAgdG9wOiA2N3B4O1xuICByaWdodDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uc2VydmljZXNfX2hlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG4uc2VydmljZXNfX2l0ZW1zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgcm93LWdhcDogMS4yNXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MS45OTg3NWVtKSB7XG4gIC5zZXJ2aWNlc19faXRlbXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5zZXJ2aWNlc19faXRlbXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4uc2VydmljZXNfX2l0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjQ5LCAyNTMsIDAuNik7XG4gIHBhZGRpbmc6IDIuNTYyNXJlbSAycmVtO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggMHB4ICM4YmJmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuOTM3NXJlbTtcbn1cblxuLml0ZW0tc2VydmljZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAxLjU2MjVyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5pdGVtLXNlcnZpY2VzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMjVyZW0gLCAxLjA2MTc2NDcwNTlyZW0gICsgIDAuOTQxMTc2NDcwNnZ3ICwgMnJlbSApKSB7XG4gICAgLml0ZW0tc2VydmljZXNfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuMjVyZW0gLCAxLjA2MTc2NDcwNTlyZW0gICsgIDAuOTQxMTc2NDcwNnZ3ICwgMnJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxLjI1cmVtICwgMS4wNjE3NjQ3MDU5cmVtICArICAwLjk0MTE3NjQ3MDZ2dyAsIDJyZW0gKSkge1xuICAgIC5pdGVtLXNlcnZpY2VzX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS4yNXJlbSArIDAuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pdGVtLXNlcnZpY2VzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5pdGVtLXNlcnZpY2VzX190aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGluZS1oZWlnaHQ6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNTkyNjQ3MDU4OHJlbSAgKyAgMS40MTE3NjQ3MDU5dncgLCAzcmVtICkpIHtcbiAgICAuaXRlbS1zZXJ2aWNlc19fdGl0bGUge1xuICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNTkyNjQ3MDU4OHJlbSAgKyAgMS40MTE3NjQ3MDU5dncgLCAzcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxpbmUtaGVpZ2h0OiBjbGFtcCggMS44NzVyZW0gLCAxLjU5MjY0NzA1ODhyZW0gICsgIDEuNDExNzY0NzA1OXZ3ICwgM3JlbSApKSB7XG4gICAgLml0ZW0tc2VydmljZXNfX3RpdGxlIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDEuODc1cmVtICsgMS4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pdGVtLXNlcnZpY2VzX190aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuODc1cmVtO1xuICB9XG59XG4uaXRlbS1zZXJ2aWNlc19fdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAyLjE4NzVyZW07XG4gIGNvbG9yOiAjMjk3N0Q1O1xufVxuLml0ZW0tc2VydmljZXNfX3RleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAwcmVtO1xuICBjb2xvcjogIzY2NjY2Njtcbn1cbi5pdGVtLXNlcnZpY2VzX19saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICM0NEM2RTk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL251bGwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9ob21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEUUQ7O0FDTkE7OztFQUdDLHNCQUFBO0FEU0Q7O0FDQ0E7O0VBRUMsWUFBQTtFQUNBLGdCQUFBO0FERUQ7O0FDQUE7RUFDQyxXRFFXO0VDUFgsY0FBQTtFQUNBLHNCREVZO0VDRFosa0JERVU7RUNBViwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FERUQ7O0FDQUE7OztFQUdDLHNCRFZZO0VDV1osa0JBQUE7QURHRDs7QUNEQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QURJRDs7QUNGQTtFQUNDLGNBQUE7RUFDQSxxQkFBQTtBREtEOztBQ0hBO0VBQ0MsZ0JBQUE7QURN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RUFFQztJRDNCRjtNQzRCRyxvRUFoQmM7SUpvUGI7RUFDRjtFSWxPQTtJRC9CRjtNQ2dDRyxxREFBQTtJSnFPQztFQUNGO0FBQ0Y7QUluT0U7RURwQ0Y7SUNxQ0csZUFBQTtFSnNPRDtBQUNGO0FJeFBFO0VEcEJGO0lDcUJHLGlCQUFBO0VKMlBEO0FBQ0Y7QUl4UEM7RUFFQztJRDNCRjtNQzRCRyxzRUFoQmM7SUowUWI7RUFDRjtFSXhQQTtJRC9CRjtNQ2dDRyx1REFBQTtJSjJQQztFQUNGO0FBQ0Y7QUl6UEU7RURwQ0Y7SUNxQ0csaUJBQUE7RUo0UEQ7QUFDRjs7QUc1UkE7RUFDQyw0QkFBQTtBSCtSRDtBSWxSRTtFRGRGO0lDZUcsa0JBQUE7RUpxUkQ7QUFDRjtBSWxSQztFQUVDO0lEckJGO01Dc0JHLDRFQWhCYztJSm9TYjtFQUNGO0VJbFJBO0lEekJGO01DMEJHLCtEQUFBO0lKcVJDO0VBQ0Y7QUFDRjtBSW5SRTtFRDlCRjtJQytCRyxvQkFBQTtFSnNSRDtBQUNGO0FJeFNFO0VEZEY7SUNlRyxvQkFBQTtFSjJTRDtBQUNGO0FJeFNDO0VBRUM7SURyQkY7TUNzQkcsOEVBaEJjO0lKMFRiO0VBQ0Y7RUl4U0E7SUR6QkY7TUMwQkcsaUVBQUE7SUoyU0M7RUFDRjtBQUNGO0FJelNFO0VEOUJGO0lDK0JHLHNCQUFBO0VKNFNEO0FBQ0Y7QUc1VUE7RUFJQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBSDJVRDs7QUtoWkE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FMbVpGO0FJM1VFO0VDN0VGO0lEOEVHLGdCQUFBO0VKOFVEO0FBQ0Y7QUkzVUM7RUFFQztJQ3BGRjtNRHFGRyx3RUFoQmM7SUo2VmI7RUFDRjtFSTNVQTtJQ3hGRjtNRHlGRyx5REFBQTtJSjhVQztFQUNGO0FBQ0Y7QUk1VUU7RUM3RkY7SUQ4RkcsZUFBQTtFSitVRDtBQUNGO0FLOWFBO0VBT0UsTUFBQTtFQUNBLE9BQUE7QUwwYUY7QUlyV0U7RUM3RUY7SUQ4RUcsb0JBQUE7RUp3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RXBGRDtJRnFGRSx5QkFBQTtFSjh5QkQ7QUFDRjtBTXA0QkM7RUFJRSxrQkFBQTtFQUNBLHlCQUFBO0FObTRCSDtBSXAwQkU7RUVwRUQ7SUZxRUUsa0JBQUE7RUp1MEJEO0FBQ0Y7QUlwMEJDO0VBRUM7SUUzRUQ7TUY0RUUsMEVBaEJjO0lKczFCYjtFQUNGO0VJcDBCQTtJRS9FRDtNRmdGRSwwREFBQTtJSnUwQkM7RUFDRjtBQUNGO0FJcjBCRTtFRXBGRDtJRnFGRSxrQkFBQTtFSncwQkQ7QUFDRjtBSTExQkU7RUVwRUQ7SUZxRUUsbUJBQUE7RUo2MUJEO0FBQ0Y7QUkxMUJDO0VBRUM7SUUzRUQ7TUY0RUUsNkVBaEJjO0lKNDJCYjtFQUNGO0VJMTFCQTtJRS9FRDtNRmdGRSxpRUFBQTtJSjYxQkM7RUFDRjtBQUNGO0FJMzFCRTtFRXBGRDtJRnFGRSxzQkFBQTtFSjgxQkQ7QUFDRjtBTXA3QkM7RUFRRSxnQkFBQTtFQUNBLGNBQUE7QU4rNkJIOztBT2g4QkE7RUFDRSx5QkFBQTtBUG04QkY7QUl4M0JFO0VHNUVGO0lINkVHLHVCQUFBO0VKMjNCRDtBQUNGO0FJeDNCQztFQUVDO0lHbkZGO01Ib0ZHLCtFQWhCYztJSjA0QmI7RUFDRjtFSXgzQkE7SUd2RkY7TUh3RkcsZ0VBQUE7SUoyM0JDO0VBQ0Y7QUFDRjtBSXozQkU7RUc1RkY7SUg2RkcscUJBQUE7RUo0M0JEO0FBQ0Y7QU8xOUJBO0VBR0UseUJBQUE7QVAwOUJGO0FPdjlCRTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QVB5OUJIO0FPeDlCRztFQUxEO0lBTUUsc0JBQUE7RVAyOUJGO0FBQ0Y7QU90OUJFO0VBQ0MsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBUHc5Qkg7QUlqNkJFO0VHMURBO0lIMkRDLGdCQUFBO0VKbzZCRDtBQUNGO0FJajZCQztFQUVDO0lHakVBO01Ia0VDLHVFQWhCYztJSm03QmI7RUFDRjtFSWo2QkE7SUdyRUE7TUhzRUMsd0RBQUE7SUpvNkJDO0VBQ0Y7QUFDRjtBSWw2QkU7RUcxRUE7SUgyRUMsZ0JBQUE7RUpxNkJEO0FBQ0Y7QU81K0JHO0VBTEQ7SUFNRSxRQUFBO0VQKytCRjtBQUNGO0FPbitCRztFQUNDLGNBQUE7QVBxK0JKO0FPMTlCRTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QVA0OUJIO0FPdjlCRTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0FQeTlCSDtBT3g5Qkc7RUFDQywwQkFBQTtFQUNBLG1DQUFBO0FQMDlCSjtBT3g5Qkc7RUFYRDtJQVlFLG9DQUFBO0VQMjlCRjtBQUNGO0FPMTlCRztFQUNDO0lBQ0MsV0FBQTtFUDQ5Qkg7QUFDRjtBSTE5QkU7RUdJQTtJSEhDLGVBQUE7RUo2OUJEO0FBQ0Y7QUkxOUJDO0VBRUM7SUdIQTtNSElDLHNFQWhCYztJSjQrQmI7RUFDRjtFSTE5QkE7SUdQQTtNSFFDLDJEQUFBO0lKNjlCQztFQUNGO0FBQ0Y7QUkzOUJFO0VHWkE7SUhhQyxrQkFBQTtFSjg5QkQ7QUFDRjtBTzUrQkU7RUFFQyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QVA2K0JIO0FPNStCRztFQUNDO0lBQ0MsY0FBQTtFUDgrQkg7QUFDRjtBTzUrQkc7RUFkRDtJQWVFLHlCQUFBO0lBQ0EscUJBQUE7RVArK0JGO0FBQ0Y7QU8xK0JFO0VBQ0MsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBUDQrQkg7QUl6Z0NFO0VHMEJBO0lIekJDLHNCQUFBO0VKNGdDRDtBQUNGO0FJemdDQztFQUVDO0lHbUJBO01IbEJDLHdGQWhCYztJSjJoQ2I7RUFDRjtFSXpnQ0E7SUdlQTtNSGRDLDhFQUFBO0lKNGdDQztFQUNGO0FBQ0Y7QUkxZ0NFO0VHVUE7SUhUQyw2QkFBQTtFSjZnQ0Q7QUFDRjtBSS9oQ0U7RUcwQkE7SUh6QkMsdUJBQUE7RUpraUNEO0FBQ0Y7QUkvaENDO0VBRUM7SUdtQkE7TUhsQkMsK0VBaEJjO0lKaWpDYjtFQUNGO0VJL2hDQTtJR2VBO01IZEMsZ0VBQUE7SUpraUNDO0VBQ0Y7QUFDRjtBSWhpQ0U7RUdVQTtJSFRDLHVCQUFBO0VKbWlDRDtBQUNGO0FPcmhDRztFQU5EO0lBU0UsUUFBQTtJQUNBLHFCQUFBO0VQc2hDRjtBQUNGO0FJM2pDRTtFRzBCQTtJSHpCQyw2QkFBQTtFSjhqQ0Q7QUFDRjtBSTNqQ0M7RUFFQztJR21CQTtNSGxCQyxzRkFiZTtJSjBrQ2Q7RUFDRjtFSTNqQ0E7SUdlQTtNSGRDLHdFQUFBO0lKOGpDQztFQUNGO0FBQ0Y7QUk1akNFO0VHVUE7SUhUQyxzQkFBQTtFSitqQ0Q7QUFDRjtBSWpsQ0U7RUcwQkE7SUh6QkMsOEJBQUE7RUpvbENEO0FBQ0Y7QUlqbENDO0VBRUM7SUdtQkE7TUhsQkMsdUZBYmU7SUpnbUNkO0VBQ0Y7RUlqbENBO0lHZUE7TUhkQyx5RUFBQTtJSm9sQ0M7RUFDRjtBQUNGO0FJbGxDRTtFR1VBO0lIVEMsdUJBQUE7RUpxbENEO0FBQ0Y7QU9qa0NHO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ1EscUJBQUE7RUFDQSxpQkFBQTtBUG1rQ1o7QU9qa0NHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ1EsaUJBQUE7RUFDUixtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0hBQUE7RUFDQSxVQUFBO0FQbWtDSjtBT2xrQ0k7RUFaRDtJQWFFLGdDQUFBO0VQcWtDSDtBQUNGOztBTzlqQ0E7RUFDQyx5QkFBQTtBUGlrQ0Q7QUlyb0NFO0VHbUVGO0lIbEVHLG1CQUFBO0VKd29DRDtBQUNGO0FJcm9DQztFQUVDO0lHNERGO01IM0RHLDJFQWhCYztJSnVwQ2I7RUFDRjtFSXJvQ0E7SUd3REY7TUh2REcsNkRBQUE7SUp3b0NDO0VBQ0Y7QUFDRjtBSXRvQ0U7RUdtREY7SUhsREcsb0JBQUE7RUp5b0NEO0FBQ0Y7QUkzcENFO0VHbUVGO0lIbEVHLHNCQUFBO0VKOHBDRDtBQUNGO0FJM3BDQztFQUVDO0lHNERGO01IM0RHLDhFQWhCYztJSjZxQ2I7RUFDRjtFSTNwQ0E7SUd3REY7TUh2REcsZ0VBQUE7SUo4cENDO0VBQ0Y7QUFDRjtBSTVwQ0U7RUdtREY7SUhsREcsdUJBQUE7RUorcENEO0FBQ0Y7QU8xbUNFO0VBSkY7SUFLRyx5QkFBQTtFUDZtQ0Q7QUFDRjtBT3JtQ0U7RUFFQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBUHNtQ0g7QU9ybUNHO0VBTEQ7SUFNRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7RVB3bUNGO0FBQ0Y7O0FPam1DRTtFQUNDLGFBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FQb21DSDtBT25tQ0c7RUFKRDtJQUtFLHVDQUFBO0lBR0EsbUJBQUE7SUFDQSx1QkFBQTtFUG9tQ0Y7QUFDRjtBSS9zQ0U7RUdpR0E7SUhoR0Msb0JBQUE7RUprdENEO0FBQ0Y7QUkvc0NDO0VBRUM7SUcwRkE7TUh6RkMsc0ZBaEJjO0lKaXVDYjtFQUNGO0VJL3NDQTtJR3NGQTtNSHJGQyw2RUFBQTtJSmt0Q0M7RUFDRjtBQUNGO0FJaHRDRTtFR2lGQTtJSGhGQywyQkFBQTtFSm10Q0Q7QUFDRjtBT2hvQ0c7RUFNQztJQUFtQix1QkFBQTtFUDhuQ3JCO0FBQ0Y7QU92bkNFO0VBQ0Usb0JBQUE7RUFDUSxrQkFBQTtFQUNSLGlCQUFBO0VBQ1EsZUFBQTtBUHluQ1o7QU94bkNJO0VBTEY7SUFNRyxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGlCQUFBO0lBQ08sZUFBQTtFUDJuQ1Y7QUFDRjtBTzFuQ0c7RUFDQyxvQkFBQTtBUDRuQ0o7QUk1dkNFO0VHK0hDO0lIOUhBLG9CQUFBO0VKK3ZDRDtBQUNGO0FJNXZDQztFQUVDO0lHd0hDO01IdkhBLDRFQWhCYztJSjh3Q2I7RUFDRjtFSTV2Q0E7SUdvSEM7TUhuSEEsNkRBQUE7SUordkNDO0VBQ0Y7QUFDRjtBSTd2Q0U7RUcrR0M7SUg5R0Esb0JBQUE7RUpnd0NEO0FBQ0Y7QU9ocENJO0VBSEQ7SUFJRSxtQkFBQTtJQUNBLHVCQUFBO0VQbXBDSDtBQUNGO0FJeHhDRTtFR2dKQTtJSC9JQyxrQkFBQTtFSjJ4Q0Q7QUFDRjtBSXh4Q0M7RUFFQztJR3lJQTtNSHhJQywyRUFoQmM7SUoweUNiO0VBQ0Y7RUl4eENBO0lHcUlBO01IcElDLDZEQUFBO0lKMnhDQztFQUNGO0FBQ0Y7QUl6eENFO0VHZ0lBO0lIL0hDLG1CQUFBO0VKNHhDRDtBQUNGO0FPOXBDRTtFQUVDLGdCQUFBO0VBQ0EscUJBQUE7RUFFQSxjQUFBO0FQOHBDSDtBTzdwQ0c7RUFORDtJQU9FLG1CQUFBO0VQZ3FDRjtBQUNGO0FPdHBDRTtFQUNDLDRCQUFBO0FQd3BDSDtBSTN6Q0U7RUdrS0E7SUhqS0Msa0JBQUE7RUo4ekNEO0FBQ0Y7QUkzekNDO0VBRUM7SUcySkE7TUgxSkMsNEVBaEJjO0lKNjBDYjtFQUNGO0VJM3pDQTtJR3VKQTtNSHRKQywrREFBQTtJSjh6Q0M7RUFDRjtBQUNGO0FJNXpDRTtFR2tKQTtJSGpKQyxvQkFBQTtFSit6Q0Q7QUFDRjtBSWoxQ0U7RUdrS0E7SUhqS0Msb0JBQUE7RUpvMUNEO0FBQ0Y7QUlqMUNDO0VBRUM7SUcySkE7TUgxSkMsOEVBaEJjO0lKbTJDYjtFQUNGO0VJajFDQTtJR3VKQTtNSHRKQyxpRUFBQTtJSm8xQ0M7RUFDRjtBQUNGO0FJbDFDRTtFR2tKQTtJSGpKQyxzQkFBQTtFSnExQ0Q7QUFDRjtBT3JzQ0U7RUFJQyxnQkFBQTtFQUNBLGNBQUE7QVBvc0NIO0FJMzJDRTtFR3dLQztJSHZLQSx3QkFBQTtFSjgyQ0Q7QUFDRjtBSTMyQ0M7RUFFQztJR2lLQztNSGhLQSxrRkFoQmM7SUo2M0NiO0VBQ0Y7RUkzMkNBO0lHNkpDO01INUpBLGtFQUFBO0lKODJDQztFQUNGO0FBQ0Y7QUk1MkNFO0VHd0pDO0lIdkpBLHdCQUFBO0VKKzJDRDtBQUNGOztBT250Q0E7RUFDQyx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QVBzdENEO0FPcnRDRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QVB1dENIO0FPOXNDRTtFQUNDLG1CQUFBO0FQZ3RDSDtBT2pzQ0U7RUFDQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FQbXNDSDtBT2xzQ0c7RUFMRDtJQU1FLHFDQUFBO0VQcXNDRjtBQUNGO0FPcHNDRztFQVJEO0lBU0UsMEJBQUE7RVB1c0NGO0FBQ0Y7QU9sc0NFO0VBRUMsMENBQUE7RUFDQSx1QkFBQTtFQUVBLG9DQUFBO0VBQ0Esd0JBQUE7QVBrc0NIOztBTzNyQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBUDhyQ0Y7QUk5NkNFO0VHNlBBO0lINVBDLGVBQUE7RUppN0NEO0FBQ0Y7QUk5NkNDO0VBRUM7SUdzUEE7TUhyUEMsdUVBaEJjO0lKZzhDYjtFQUNGO0VJOTZDQTtJR2tQQTtNSGpQQywyREFBQTtJSmk3Q0M7RUFDRjtBQUNGO0FJLzZDRTtFRzZPQTtJSDVPQyxrQkFBQTtFSms3Q0Q7QUFDRjtBSXA4Q0U7RUc2UEE7SUg1UEMsaUJBQUE7RUp1OENEO0FBQ0Y7QUlwOENDO0VBRUM7SUdzUEE7TUhyUEMsMEVBaEJjO0lKczlDYjtFQUNGO0VJcDhDQTtJR2tQQTtNSGpQQywrREFBQTtJSnU4Q0M7RUFDRjtBQUNGO0FJcjhDRTtFRzZPQTtJSDVPQyxxQkFBQTtFSnc4Q0Q7QUFDRjtBTzd0Q0U7RUFHQyxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBUDZ0Q0g7QU94dENFO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBUDB0Q0g7QU9ydENFO0VBQ0MsYUFBQTtFQUNBLGNBQUE7QVB1dENIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQvNGW0LrRgdC40L3RltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGI0YDQuNGE0YLRltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vJmRpc3BsYXk9c3dhcCAtINC00L7QtNCw0YLQuCDQv9GA0Lgg0L/RltC00LrQu9GO0YfQtdC90L3RliDRh9C10YDQtdC3INC/0LvQsNCz0ZbQvVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDQu9C+0LrQsNC70YzQvdGWINGE0LDQudC70Lgg0YjRgNC40YTRgtGW0LJcXHJcXG4vL0BpbXBvcnQgXFxcImZvbnRzL2ZvbnRzXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGW0LrQvtC90LrQvtCy0LjRhSDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0YTQsNC50Lsg0ZbQutC+0L3QutC+0LLQvtCz0L4g0YjRgNC40YTRgtGDXFxyXFxuLy9AaW1wb3J0IFxcXCJmb250cy9pY29uc1xcXCI7XFxyXFxuXFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0YjQsNCx0LvQvtC90YMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vJmRpc3BsYXk9c3dhcCDQlNC+0LHQsNCy0LjRgtGMINC/0YDQuCDQv9C+0LTQutC70Y7Rh9C10L3QuNC4INGH0LXRgNC10Lcg0L/Qu9Cw0LPQuNC9QGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzpyZWd1bGFyLDUwMCw2MDAsNzAwLDgwMCk7XFxyXFxuLy8gJnN1YnNldD1jeXJpbGxpYy1leHRcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zKzM6MzAwLHJlZ3VsYXImZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjEwMCwzMDAscmVndWxhciw1MDAsNjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTozMDAscmVndWxhciw1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOnJlZ3VsYXIsNjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbi8vINCX0LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0YjRgNC40YTRgiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4kZm9udEZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiRmb250U2l6ZTogcmVtKDIwKTsgLy8g0LTQtSAxNChweCkgLSDRgNC+0LfQvNGW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0Lcg0LzQsNC60LXRgtGDXFxyXFxuXFxyXFxuLy8g0J7RgdC90L7QstC90ZYg0LrQvtC70YzQvtGA0LhcXHJcXG4kbWFpbkNvbG9yOiAjMDAwOyAvLyDQmtC+0LvRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINCw0LTQsNC/0YLQuNCy0L3QvtGXINGB0ZbRgtC60LggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQnNGW0L3RltC80LDQu9GM0L3QsCDRiNC40YDQuNC90LAg0YHRgtC+0YDRltC90LrQuFxcclxcbiRtaW5XaWR0aDogMzIwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQv9C+0LvQvtGC0L3QsCAo0LzQsNC60LXRgtGDKVxcclxcbiRtYXhXaWR0aDogMTkyMDtcXHJcXG4vLyAkbWF4V2lkdGg6IDE3Mjg7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC+0LHQvNC10LbRg9GO0YfQvtCz0L4g0LrQvtC90YLQtdC50L3QtdGA0LAgKDAgPSDQvdC10LzQsNGUINC+0LHQvNC10LbQtdC90L3RjylcXHJcXG4kbWF4V2lkdGhDb250YWluZXI6IDE1NjU7XFxyXFxuLy8g0JfQsNCz0LDQu9GM0L3QuNC5INCy0ZbQtNGB0YLRg9C/INGDINC60L7QvdGC0LXQudC90LXRgNCwXFxyXFxuLy8gKDMwID0g0L/QviAxNXB4INC70ZbQstC+0YDRg9GHINGWINC/0YDQsNCy0L7RgNGD0YcsIDAgPSDQvdC10LzQsNGUINCy0ZbQtNGB0YLRg9C/0YMpXFxyXFxuJGNvbnRhaW5lclBhZGRpbmc6IDMwO1xcclxcblxcclxcbi8vINCo0LjRgNC40L3QsCDRgdC/0YDQsNGG0YzQvtCy0YPQstCw0L3QvdGPINC/0LXRgNGI0L7Qs9C+INCx0YDQtdC50LrQv9C+0ZbQvdGC0YNcXHJcXG4kY29udGFpbmVyV2lkdGg6ICRtYXhXaWR0aENvbnRhaW5lciArICRjb250YWluZXJQYWRkaW5nO1xcclxcblxcclxcbi8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4XFxyXFxuJHBjOiBlbSgkY29udGFpbmVyV2lkdGgpOyAvLyDQn9CaLCDQvdC+0YPRgtCx0YPQutC4LCDQtNC10Y/QutGWINC/0LvQsNC90YjQtdGC0Lgg0YMg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiR0YWJsZXQ6IGVtKDk5MS45OCk7IC8vINCf0LvQsNC90YjQtdGC0LgsINC00LXRj9C60ZYg0YLQtdC70LXRhNC+0L3QuCDQsiDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJG1vYmlsZTogZW0oNzY3Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBMXFxyXFxuJG1vYmlsZVNtYWxsOiBlbSg0NzkuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IFNcXHJcXG5cXHJcXG4vLyDQotC40L8g0LDQtNCw0L/RgtC40LLQsDpcXHJcXG4vLyAxID0g0YfRg9C50L3RltGB0YLRjCAo0YMg0LrQvtC90YLQtdC50L3QtdGA0LAg0L3QtdC80LDRlCDQsdGA0LXQudC60L/QvtGW0L3RgtGW0LIpLFxcclxcbi8vIDIgPSDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgiAo0LrQvtC90YLQtdC50L3QtdGAINC30LzRltC90Y7RlCDRgdCy0L7RjiDRiNC40YDQuNC90YMg0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIpXFxyXFxuJHJlc3BvbnNpdmVUeXBlOiAxO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQntCx0L3Rg9C70LXQvdC90Y8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbnVsbFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtC10LPQsCBCT0RZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Ly8g0KHQutGA0L7Qu9C7INC30LDQsdC70L7QutC+0LLQsNC90L5cXHJcXG5cXHQubG9jayAmIHtcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdFxcdHRvdWNoLWFjdGlvbjogbm9uZTtcXHJcXG5cXHRcXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQodCw0LnRgiDQt9Cw0LLQsNC90YLQsNC20LXQvdC40LlcXHJcXG5cXHQubG9hZGVkICYge1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0J7QsdC+0LvQvtC90LrQsCB3cmFwcGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLndyYXBwZXIge1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0Jjo6YmVmb3Jle1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHRcXHRpbnNldDogMDtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuXFx0XFx0XFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcblxcdFxcdFxcdC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0XFx0XFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0XFx0XFx0ei1pbmRleDogMjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fS5tZW51LW9wZW4gJjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdFxcdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcblxcdH1cXHJcXG5cXHRAc3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGNsaXA7XFxyXFxuXFx0fVxcclxcblxcdC8vINCf0YDQuNGC0LjRgdC60LDRlNC80L4gZm9vdGVyXFxyXFxuXFx0PiBtYWluIHtcXHJcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KTRltC60YEg0LTQu9GPINGB0LvQsNC50LTQtdGA0ZbQslxcclxcblxcdD4gKiB7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0J7QsdC80LXQttGD0Y7Rh9C40Lkg0LrQvtC90YLQtdC50L3QtdGAID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vKlxcclxcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxcclxcbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcXHJcXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cXHJcXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxcclxcbiovXFxyXFxuQGlmICgkcmVzcG9uc2l2ZVR5cGU9PTEpIHtcXHJcXG5cXHQvLyDQp9GD0LnQvdCwXFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcblxcdFxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH0gQGVsc2Uge1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSwgMTUpO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksIDE1KTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59IEBlbHNlIHtcXHJcXG5cXHQvLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQsNC80LhcXHJcXG5cXHRbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG5cXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwYykge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDk3MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oNzUwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IG5vbmU7XFxyXFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wIGFuZCAkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LHQsNC30L7QstC40YUg0YHRgtC40LvRltCyLCDRiNCw0LHQu9C+0L3RltCyICjQt9Cw0LPQvtGC0ZbQstC10LvRjCkg0YLQsCDQtNC+0L/QvtC80ZbQttC90LjRhSDQutC70LDRgdGW0LJcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstC40LzQutC90LXQvdC90Y8g0LrQvtC90LrRgNC10YLQvdC40YUg0YHRgtC40LvRltCyINC00LjQstC40YHRjCBiYXNlLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQt9Cw0LPQsNC70YzQvdC40YUg0LXQu9C10LzQtdC90YLRltCyINC/0YDQvtC10LrRgtGDXFxyXFxuQGltcG9ydCBcXFwiY29tbW9uXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDQsdC70L7QutGW0LJcXHJcXG5AaW1wb3J0IFxcXCJoZWFkZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcImZvb3RlclxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0YHRgtC+0YDRltC90L7QulxcclxcbkBpbXBvcnQgXFxcImhvbWVcXFwiO1xcclxcblwiLFwiKiB7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcblxcdGJvcmRlcjogMHB4O1xcclxcbn1cXHJcXG4qLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpmb2N1cyxcXHJcXG46YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5hOmZvY3VzLFxcclxcbmE6YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRtaW4td2lkdGg6ICRtaW5XaWR0aCArIHB4O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRjb2xvcjogJG1haW5Db2xvcjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiAkZm9udFNpemU7XFxyXFxuXFx0Ly90ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcblxcdC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG51bCBsaSB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cIixcIi8vINCX0LDQs9Cw0LvRjNC90LjQuSDRhNCw0LnQuyDQtdC70LXQvNC10L3RgtGW0LIg0YTQvtGA0LxcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstGW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQutC+0L3QutGA0LXRgtC90L7Qs9C+INC10LvQtdC80LXQvdGC0LAg0YTQvtGA0LzQuCDQtNC40LLQuNGB0YwgYmFzZS9mb3Jtcy9mb3Jtcy5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZS9mb3Jtcy9mb3Jtc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQv9C+0L/QsNC/0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcG9wdXBcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YHQv9C+0LnQu9C10YDRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zcG9sbGVyc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtCw0LHRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS90YWJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC80LDQv1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvbWFwc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQsdC70L7QutGDIFxcXCLQv9C+0LrQsNC30LDRgtC4INGJ0LVcXFwiXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zaG93bW9yZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LvQuNC/0LrQvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3RpY2t5XFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LLQvdC+0LXQutGA0LDQvdC90L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxzY3JlZW5cXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QtdC60YDQsNC90L7RlyDQv9GA0L7QutGA0YPRgtC60LhcXHJcXG4vLyBTdHlsZXMgZm9yIGZ1bGxwYWdlIHNjcm9sbFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHBhZ2VcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPIHJpcHBsZSDQtdGE0LXQutGC0YNcXHJcXG4vLyBTdHlsZXMgZm9yIHJpcHBsZSBlZmZlY3RcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3JpcHBsZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LrQsNGB0YLQvtC80L3QvtCz0L4g0LrRg9GA0YHQvtGA0YNcXHJcXG4vLyBTdHlsZXMgZm9yIGN1c3RvbSBjdXJzb3JcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2N1cnNvclxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0YfRg9C50L3QuNGFINC60LDRgNGC0LjQvdC+0LogKElCRylcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZyAoZGl2INC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnYSAoYSDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG5bY2xhc3MqPVxcXCItaWJnXFxcIl0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5bY2xhc3MqPVxcXCItaWJnX2NvbnRhaW5cXFwiXSB7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0KjQsNCx0LvQvtC90LggKNC30LDQs9C+0YLRltCy0LvRlilcXHJcXG4vLyBAZXh0ZW5kICXRltC8J9GPINGI0LDQsdC70L7QvdGDO1xcclxcbi8vINCh0L3RltC/0L/QtdGCIChTQ1NTKTogZXhcXHJcXG5cXHJcXG4vLyDQm9GW0YfQuNC70YzQvdC40Log0LTQu9GPINGB0L/QuNGB0LrRg1xcclxcbiVsaXN0Q291bnRlciB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdGNvdW50ZXItcmVzZXQ6IGl0ZW07XFxyXFxuXFx0bGkge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHQmOmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGl0ZW07XFxyXFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihpdGVtKTtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdC1INCy0ZbQtNC10L5cXHJcXG4lcmVzcG9uc2l2ZVZpZGVvIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDU2LjI1JTtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JLRltC00LXQviDRj9C6INGE0L7QvVxcclxcbiV2aWRlb0JhY2tncm91bmQge1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdHotaW5kZXg6IC0xMDA7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0ZbRgNC40Lkg0YTRltC70YzRgtGAXFxyXFxuJWdyYXlmaWx0ZXIge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxyXFxuXFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHQutCw0YHRg9Cy0LDRgtC4INCy0LjQtNGW0LvQtdC90L3Rj1xcclxcbiVub3NlbGVjdCB7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi8vINCU0LfQtdGA0LrQsNC70YzQvdC1INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xcclxcbiVtaXJyb3Ige1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbn1cXHJcXG4vLyDQn9C70LDQstC90LjQuSDRgdC60YDQvtC70LtcXHJcXG4lc21vb3Roc2Nyb2xsIHtcXHJcXG5cXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxufVxcclxcbi8vINCh0YXQvtCy0LDRgtC4INGB0LrRgNC+0LvQu1xcclxcbiVoaWRlc2Nyb2xsIHtcXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy8g0JfQsNCz0L7Qu9C+0LLQutC4LCDQt9Cw0LPQsNC70YzQvdGWINCR0JXQnCDQsdC70L7QutC4INGC0LAg0ZbQvdGI0LUuLi5cXHJcXG5cXHJcXG4ucGFnZSB7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLnBhZ2VfX21haW5cXHJcXG5cXHJcXG5cXHRcXHQmX19tYWluIHtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jl9fY29tdGFjdHMge1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmX19zZXJ2aWNlcyB7XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmJ0bntcXHJcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxOCwgMTMpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDM5LCAyNCk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIDM5LCAyNCk7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IHJlbSgxMSk7XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IHJlbSgxMSk7XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IG1hdGguZGl2KDI3ICwgMTgpO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxNSk7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDEwKTsgXFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4uYnV0dG9uLWJvcmRlcntcXHJcXG5cXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdGNvbG9yOiAjMDAyOTZEO1xcclxcblxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICMwMDI5NkQ7XFxyXFxuXFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ0QzZFOSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4zcyBlYXNlLCBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcblxcdFxcdGNvbG9yOiAjZmZmO1xcclxcblxcdH1cXHJcXG5cXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzY2NjY2NjtcXHJcXG5cXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogMTQwcHg7XFxyXFxuICAgICAgICAgcGFkZGluZzogcmVtKDkpIHJlbSgyNCk7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzY2NjY2NiA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMCU7XFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLnN1YnRpdGxlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDEzKTtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsaW5lLWhlaWdodFxcXCIsIDMwLCAyMCk7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzI5NzdENTtcXHJcXG59XFxyXFxuLnRpdGxle1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDY0LCAzMik7XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGluZS1oZWlnaHRcXFwiLCA5NiwgNDgpO1xcclxcbn1cXHJcXG4udGV4dCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJTb3VyY2UgU2FucyAzXFxcIjtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTMpO1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxpbmUtaGVpZ2h0XFxcIiwgMjgsIDE5KTtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdGNvbG9yOiAjMjUyNTI1O1xcclxcblxcdHBhZGRpbmc6IHJlbSgwKSByZW0oNSkgcmVtKDApIHJlbSgwKTtcXHJcXG59XCIsXCIvL9Cf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGDXFxyXFxuQG1peGluIGZvbnQoJGZvbnRfbmFtZSwgJGZpbGVfbmFtZSwgJHdlaWdodCwgJHN0eWxlKSB7XFxyXFxuXFx0QGZvbnQtZmFjZSB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRmb250X25hbWU7XFxyXFxuXFx0XFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcclxcblxcdFxcdHNyYzogdXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAjeyR3ZWlnaHR9O1xcclxcblxcdFxcdGZvbnQtc3R5bGU6ICN7JHN0eWxlfTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vUGVyY2VudFxcclxcbkBmdW5jdGlvbiBwZXJjZW50KCRweCwgJGZyb20pIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRmcm9tKSAqIDEwMCU7XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL1JFTVxcclxcbkBmdW5jdGlvbiByZW0oJHB4KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAxNikgKyByZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL0VNXFxyXFxuQGZ1bmN0aW9uIGVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyBlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcblxcclxcbi8vQ3VycmVuY3lcXHJcXG5AbWl4aW4gY3VycmVuY3koJHN5bSkge1xcclxcblxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRjb250ZW50OiBcXFwiI3skc3ltfVxcXCI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyBHcmlkc1xcclxcbkBtaXhpbiBncmlkQ2FyZHMoJHR5cGU6IGZpdCwgJG1pbjogMjgwcHgsICRtYXg6IDFmciwgJGdhcDogMzBweCkge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z2FwOiAkZ2FwO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tI3skdHlwZX0sIG1pbm1heCgkbWluLCAkbWF4KSk7XFxyXFxufVxcclxcblxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QsCDQstC70LDRgdGC0LjQstGW0YHRgtGMIChjbGFtcClcXHJcXG5AbWl4aW4gYWRhcHRpdmVWYWx1ZSgkcHJvcGVydHksICRzdGFydFNpemUsICRtaW5TaXplLCAka2VlcFNpemU6IDAsICR3aWR0aEZyb206ICRjb250YWluZXJXaWR0aCwgJHdpZHRoVG86ICRtaW5XaWR0aCkge1xcclxcblxcdEBpZiAoJHN0YXJ0U2l6ZT09MCkge1xcclxcblxcdFxcdCRzdGFydFNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHRAaWYgKCRtaW5TaXplPT0wKSB7XFxyXFxuXFx0XFx0JG1pblNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQlNC70Y8gY2FsYygpO1xcclxcblxcdCRhZGRTaXplOiBtYXRoLmRpdigkc3RhcnRTaXplIC0gJG1pblNpemUsIDE2KTtcXHJcXG5cXHJcXG5cXHRAaWYgKCR3aWR0aEZyb20gPT0gJGNvbnRhaW5lcldpZHRoIGFuZCAkbWF4V2lkdGhDb250YWluZXIgPT0gMCkge1xcclxcblxcdFxcdCR3aWR0aEZyb206ICRtYXhXaWR0aDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0Lgg0LIgRU1cXHJcXG5cXHQkd2lkdGhGcm9tTWVkaWE6IGVtKCR3aWR0aEZyb20pO1xcclxcblxcdCR3aWR0aFRvTWVkaWE6IGVtKCR3aWR0aFRvKTtcXHJcXG5cXHJcXG5cXHQvLyDQpNC+0YDQvNGD0LvQsCDQv9C70LDQstCw0Y7Rh9C+0LPQviDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0Ly8g0JjRgdGC0L7Rh9C90LjQujogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9saW5lYXJseS1zY2FsZS1mb250LXNpemUtd2l0aC1jc3MtY2xhbXAtYmFzZWQtb24tdGhlLXZpZXdwb3J0L1xcclxcblxcdCRzbG9wZTogbWF0aC5kaXYoKCRzdGFydFNpemUgLSAkbWluU2l6ZSksICgkd2lkdGhGcm9tIC0gJHdpZHRoVG8pKTtcXHJcXG5cXHQkeUludGVyc2VjdGlvbjogLSR3aWR0aFRvICogJHNsb3BlICsgJG1pblNpemU7XFxyXFxuXFx0QGlmICgkeUludGVyc2VjdGlvbj09MCkge1xcclxcblxcdFxcdCR5SW50ZXJzZWN0aW9uOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0JGZseVZhbHVlOiAje3JlbSgkeUludGVyc2VjdGlvbil9XFxcIiArIFxcXCIgI3skc2xvcGUgKiAxMDB9dnc7XFxyXFxuXFxyXFxuXFx0Ly8g0J7RgtGA0LjQvNCw0L3QvdGPINC30L3QsNGH0LXQvdC90Y8g0LLQu9Cw0YHRgtC40LLQvtGB0YLRllxcclxcblxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkbWluU2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgcmVtKCRzdGFydFNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0Ly8g0K/QutGJ0L4g0L3QtdCz0LDRgtC40LLQvdGWINC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHRAaWYgKCRtaW5TaXplID4gJHN0YXJ0U2l6ZSkge1xcclxcblxcdFxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiByZW0oJG1pblNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQt9C90LDRh9C10L3QvdGPINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAzIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJHN0YXJ0U2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHQvLyDQkNC00LDQv9GC0YPRlNC80L4g0YDQvtC30LzRltGAINGDINC/0YDQvtC80ZbQttC60YMg0LzRltC2INC30LDQt9C90LDRh9C10L3QuNC80Lgg0YjQuNGA0LjQvdCw0LzQuCDQsifRjtC/0L7RgNGC0YNcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoVG9NZWRpYSkgYW5kIChtYXgtd2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdC8vINCv0LrRidC+INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L3QtSDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyBub3QgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IGNhbGMoI3tyZW0oJG1pblNpemUpfSArICN7JGFkZFNpemV9ICogKDEwMHZ3IC0gI3tyZW0oJHdpZHRoVG8pfSkgLyAje21hdGguZGl2KCR3aWR0aEZyb20sIDE2KSAtIG1hdGguZGl2KCR3aWR0aFRvLCAxNil9KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDIge1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkd2lkdGhUb01lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJG1pblNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmhlYWRlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdHotaW5kZXg6IDEwMDtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwxMTAgLDEwMCApO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwyMCAsMzAgKTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsMjAgLDMwICk7XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0aW5zZXQ6IDA7XFxyXFxuXFx0XFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcdFxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG5cXHRcXHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG5cXHRcXHR6LWluZGV4OiAtMTtcXHJcXG5cXHRcXHRvcGFjaXR5OiAwO1xcclxcblxcdFxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcblxcdFxcdFxcclxcblxcdH1cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19jb250YWluZXJcXHJcXG5cXHRcXHQmLl9oZWFkZXItc2Nyb2xse1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG5cXHRcXHRcXHQvLyBjb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHRcXHQvLyBvcGFjaXR5OiAwLjU7XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3Jle1xcclxcblxcdFxcdFxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmX19jb250YWluZXIge1xcclxcblxcdFxcdFxcdHotaW5kZXg6IDEwMDtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdFxcdGNvbHVtbi1nYXA6IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbG9nbyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRjb2x1bW4tZ2FwOiByZW0oMjApO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvLWljb25cXHJcXG5cXHJcXG5cXHRcXHQmX19sb2dvLWljb24ge1xcclxcblxcdFxcdFxcdHotaW5kZXg6IDEwMDtcXHJcXG5cXHRcXHRcXHRpbWd7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA1NSwgNDApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nby1uYW1lXFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jl9fbG9nby1uYW1lIHtcXHJcXG5cXHRcXHRcXHR6LWluZGV4OiA4MDtcXHJcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiBhdXRvO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRcXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvLXRpdGxlXFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jl9fbG9nby10aXRsZSB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjQsIDE1KTtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogbWF0aC5kaXYoMzMgLCAyNCk7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oMTUpO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAxNSwgMTApO1xcclxcblxcdFxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28tc3VidGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX19sb2dvLXN1YnRpdGxlIHtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNiwgMTIpO1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyMiAsIDE2KTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX21lbnVcXHJcXG5cXHJcXG5cXHRcXHQmX19tZW51IHtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2FjdGlvbnNcXHJcXG5cXHJcXG5cXHRcXHQmX19hY3Rpb25zIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19idXR0b25cXHJcXG5cXHJcXG5cXHRcXHQmX19idXR0b24ge1xcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG5cXHRcXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRcXHQvLyAubWVudV9fYm9keVxcclxcblxcclxcblxcdFxcdCZfX2JvZHkge1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdFxcdFxcdGxlZnQ6IC0xMDAlO1xcclxcblxcdFxcdFxcdFxcdC8vIG1hcmdpbi10b3A6IHJlbSgxMDApO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmctdG9wOiByZW0oMTM4KTtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiByZW0oMTM4KSByZW0oMjApIHJlbSgzOCkgcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHRcXHRcXHRcXHQubWVudS1vcGVuICZ7XFxyXFxuXFx0XFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQmX19pY29uc3tcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0XFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXHJcXG5cXHRcXHRcXHRcXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJncmlkLWNvbHVtbi1nYXBcXFwiLDgwICw0MCApO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdyaWQtcm93LWdhcFxcXCIsNjAgLDQwICk7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCZfX2ljb257XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWVudV9fbGlzdFxcclxcblxcclxcblxcdFxcdCZfX2xpc3Qge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRmbGV4OiAwIDEgNTAlO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImNvbHVtbi1nYXBcXFwiLCA2MCwgMjApO1xcclxcblxcdFxcdFxcdHJvdy1nYXA6IHJlbSgxMCk7XFxyXFxuXFx0XFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGVuZDtcXHJcXG5cXHRcXHRcXHRcXHRyb3ctZ2FwOiByZW0oNjApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1lbnVfX2l0ZW1cXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1lbnVfX2xpbmtcXHJcXG5cXHJcXG5cXHRcXHQmX19saW5rIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBjdXJyZW50Q29sb3IgMCUsIGN1cnJlbnRDb2xvciAxMDAlKSBuby1yZXBlYXQ7XFxyXFxuICAgICAgXFx0YmFja2dyb3VuZC1zaXplOiAwIDJweDsgLyog0J3QsNGH0LDQu9GM0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyAqL1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xcclxcbiAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGVhc2U7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDsgLyog0JrQvtC90LXRh9C90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8g0L/RgNC4INC90LDQstC10LTQtdC90LjQuCAqL1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICAjMjk3N0Q1O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcbi5pY29uLW1lbnUge1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vL0J1cmdlclxcclxcblxcclxcbi5pY29uLW1lbnUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0d2lkdGg6IHJlbSgzMCk7XFxyXFxuXFx0XFx0aGVpZ2h0OiByZW0oMTgpO1xcclxcblxcdFxcdHotaW5kZXg6IDU7XFxyXFxuXFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IG5vbmUpIHtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4sXFxyXFxuXFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdGhlaWdodDogcmVtKDMpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0Ym90dG9tOiAwO1xcclxcblxcdFxcdFxcdHdpZHRoOiA3NSU7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdHRvcDogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcblxcdFxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC5tZW51LW9wZW4gJiB7XFxyXFxuXFx0XFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZSxcXHJcXG5cXHRcXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiBjYWxjKDQ1JSAtIHJlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdFxcdGJvdHRvbTogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZm9vdGVyIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHQmX19tYXB7XFxyXFxuXFx0XFx0ei1pbmRleDogMTtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNTc1LCAzOTMpO1xcclxcblxcdH1cXHJcXG5cXHQvLyAuZm9vdGVyX190ZXh0XFxyXFxuXFx0XFxyXFxuXFx0Jl9fdGV4dCB7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDEzLCA3KTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDEzLCA3KTtcXHJcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0Zm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTIpO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxpbmUtaGVpZ2h0XFxcIiwgMjQsIDE1KTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjRkZGOUZEO1xcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE2NywxMTQgKTtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogcmVtKDU3KTtcXHJcXG5cXHRcXHQvLyAubWFpbl9fY29udGFpbmVyXFxyXFxuXFxyXFxuXFx0XFx0Jl9fY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGNvbHVtbi1nYXA6IHJlbSgzMCk7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tYWluX19jb250ZW50XFxyXFxuXFxyXFxuXFx0XFx0Jl9fY29udGVudCB7XFxyXFxuXFx0XFx0XFx0ZmxleDogMCAxIDMwJTtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicm93LWdhcFxcXCIsIDYwLCAyMCk7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0b3JkZXI6IDE7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWFpbl9fc3VidGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX19zdWJ0aXRsZSB7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tYWluX190aXRsZVxcclxcblxcclxcblxcdFxcdCZfX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRzcGFue1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAjMjk3N0Q1O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX3RleHRcXHJcXG5cXHJcXG5cXHRcXHQmX190ZXh0IHtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX2JhdHRvbnNcXHJcXG5cXHJcXG5cXHRcXHQmX19iYXR0b25zIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSgxNSk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tYWluX19idXR0b24tYmx1ZVxcclxcblxcclxcblxcdFxcdCZfX2J1dHRvbi1ibHVlIHtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjMDAyOTZEO1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiByZW0oMjcpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IzQ0QzZFOTtcXHJcXG5cXHRcXHRcXHRib3gtc2hhZG93OiAtMnB4IDdweCAwcHggMHB4ICMyOTc3RDU7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHRcXHQmOmFjdGl2ZXtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoN3B4KTtcXHJcXG5cXHRcXHRcXHRcXHRib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzI5NzdENTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0Ym94LXNoYWRvdzogLTJweCAzcHggMHB4IDBweCAjMjk3N0Q1O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpe1xcclxcblxcdFxcdFxcdFxcdCY6aG92ZXJ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX2J1dHRvbi1jbGVhclxcclxcblxcclxcblxcdFxcdCZfX2J1dHRvbi1jbGVhciB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDEyKTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiByZW0oMjQpO1xcclxcblxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcblxcdFxcdFxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xcclxcblxcdFxcdFxcdGNvbG9yOiAjNjY2NjY2O1xcclxcblxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7XFxyXFxuXFx0XFx0XFx0XFx0Jjpob3ZlcntcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogIzA4MDcwNztcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICM2NjY2NjY7XFxyXFxuXFx0XFx0XFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX2ltYWdlXFxyXFxuXFxyXFxuXFx0XFx0Jl9faW1hZ2Uge1xcclxcblxcdFxcdFxcdG9yZGVyOiAwO1xcclxcblxcdFxcdFxcdGZsZXg6IDAgMSBhdXRvO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLDE1MCAsMCApO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLDE1MCAsNTAgKTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLDAgLDUwICk7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsMCAsNTAgKTtcXHJcXG5cXHRcXHRcXHRcXHRvcmRlcjogMDtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oNDApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRpbWd7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHRcXHRcXHR6LWluZGV4OiAyO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiBjbGFtcCgyOTdweCwgNDB2dywgNTk1cHgpO1xcclxcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogNTk1IC8gODkzO1xcclxcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmV7XFxyXFxuXFx0XFx0XFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdFxcdHRvcDogNTAlO1xcclxcblxcdFxcdFxcdFxcdGxlZnQ6IDUwJTtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogY2xhbXAoNTM1cHgsIDUwdncsIDg5M3B4KTtcXHJcXG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQ6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSgyMTIsIDIyOCwgMjQ0LCAxKSAxNSUsIHJnYmEoNjgsIDE5OCwgMjMzLCAxKSA0NSUsIHJnYmEoNDEsIDExOSwgMjEzLCAxKSA3MCUsIHJnYmEoMCwgNDEsIDEwOSwgMSkgMTAwJSk7XFxyXFxuXFx0XFx0XFx0XFx0ei1pbmRleDogMTtcXHJcXG5cXHRcXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNTUlKTtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLmNvbnRhY3RzIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFNEY0O1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiw3MiAsNjAgKTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsNzIgLDYwICk7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Ly8gLmNvbnRhY3RzX19jb250YWluZXJcXHJcXG5cXHJcXG5cXHRcXHQmX19jb250YWluZXIge1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuY29udGFjdHNfX2l0ZW1zXFxyXFxuXFxyXFxuXFx0XFx0Jl9faXRlbXMge1xcclxcblxcdFxcdFxcdC8vIG1heC13aWR0aDogcmVtKDEyODYpO1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4uY29udGFjdCB7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmNvbnRhY3RfX2l0ZW1cXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogKGF1dG8gMWZyKTtcXHJcXG5cXHRcXHRcXHRjb2x1bW4tZ2FwOiByZW0oMjApO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogKDYwcHggMTAwcHggMTUwcHgpIDtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJjb2x1bW4tZ2FwXFxcIiwgNDYwLDAgKTtcXHJcXG5cXHRcXHRcXHRcXHQvLyBjb2x1bW4tZ2FwOiByZW0oNDApO1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0Jjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206IHJlbSg1MCk7fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlU21hbGwpe1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Ly8gLmNvbnRhY3RfX2ljb25cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQmX19pY29uIHtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxyXFxuXFx0XFx0XFx0XFx0Z3JpZC1yb3ctc3RhcnQ6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xcclxcblxcdFxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRncmlkLXJvdy1zdGFydDogMTtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdGltZ3tcXHJcXG5cXHRcXHRcXHRcXHRtYXgtaGVpZ2h0OiByZW0oNTApO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1heC1oZWlnaHRcXFwiLCA1MCwzMCApO1xcclxcblxcdFxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdC8vIGZpbGw6ICM0NEM2RTk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuY29udGFjdF9fY29udGVudFxcclxcblxcclxcblxcdFxcdFxcclxcblxcclxcblxcdFxcdC8vIC5jb250YWN0X190aXRsZVxcclxcblxcclxcblxcdFxcdCZfX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLDI4LCAxOCApO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogcmVtKDQwKTtcXHJcXG5cXHRcXHRcXHQvLyAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggIzAwMjk2RDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzAwMjk2RDtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oMCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGVTbWFsbCl7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHQvLyBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmNvbnRhY3RfX3RleHRcXHJcXG5cXHJcXG5cXHRcXHQmX190ZXh0IHtcXHJcXG5cXHRcXHRcXHRmb250LWZhbWlseTogXFxcIlNvdXJjZSBTYW5zIDNcXFwiO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxMyk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGluZS1oZWlnaHRcXFwiLCAyOCwgMTkpO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0XFx0cDpub3QoOmxhc3QtY2hpbGQpe1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLDI1ICwxNSApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uc2VydmljZXMge1xcclxcblxcdHBhZGRpbmc6IHJlbSg2NykgcmVtKDApO1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRcXHQmX19iZ3tcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvJTtcXHJcXG5cXHRcXHRcXHR0b3A6IDY3cHg7XFxyXFxuXFx0XFx0XFx0cmlnaHQ6IDA7XFxyXFxuXFx0XFx0XFx0ei1pbmRleDogLTE7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC8vIC5zZXJ2aWNlc19fY29udGFpbmVyXFxyXFxuXFxyXFxuXFx0XFx0Jl9fY29udGFpbmVyIHtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLnNlcnZpY2VzX19oZWFkZXJcXHJcXG5cXHJcXG5cXHRcXHQmX19oZWFkZXIge1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSg4MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5zZXJ2aWNlc19fc3VidGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX19zdWJ0aXRsZSB7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5zZXJ2aWNlc19fdGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX190aXRsZSB7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5zZXJ2aWNlc19faXRlbXNcXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtcyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcblxcdFxcdFxcdGNvbHVtbi1nYXA6IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0cm93LWdhcDogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokdGFibGV0KXtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5zZXJ2aWNlc19faXRlbVxcclxcblxcclxcblxcdFxcdCZfX2l0ZW0ge1xcclxcblxcdFxcdFxcdC8vIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDksIDI1MywgMC42KTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiByZW0oNDEpIHJlbSgzMik7XFxyXFxuXFx0XFx0XFx0Ly8gYm9yZGVyOiAxcHggc29saWQgIzAwMjk2RDtcXHJcXG5cXHRcXHRcXHRib3gtc2hhZG93OiAzcHggM3B4IDEwcHggMHB4ICM4YmJmZmYgO1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxNSk7XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4uc3VidGl0bGUge1xcclxcbn1cXHJcXG4udGl0bGUge1xcclxcbn1cXHJcXG4uaXRlbS1zZXJ2aWNlcyB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdHJvdy1nYXA6IHJlbSgyNSk7XFxyXFxuXFx0XFx0Ly8gLml0ZW0tc2VydmljZXNfX2ltYWdlXFxyXFxuXFxyXFxuXFx0XFx0Jl9faW1hZ2Uge1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaXRlbS1zZXJ2aWNlc19fYm9keVxcclxcblxcclxcblxcdFxcdCZfX2JvZHkge1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaXRlbS1zZXJ2aWNlc19fdGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX190aXRsZSB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMzIsIDIwKTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsaW5lLWhlaWdodFxcXCIsIDQ4LCAzMCk7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oMzUpO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjMjk3N0Q1O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaXRlbS1zZXJ2aWNlc19fdGV4dFxcclxcblxcclxcblxcdFxcdCZfX3RleHQge1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDApO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjNjY2NjY2O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaXRlbS1zZXJ2aWNlc19fbGlua1xcclxcblxcclxcblxcdFxcdCZfX2xpbmsge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICM0NEM2RTk7XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4udGV4dCB7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhMWYyYjUyNmI4MDI1ZjM2NThhMlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==