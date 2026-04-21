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

.button-border {
  white-space: nowrap;
  font-size: 1.125rem;
  text-align: center;
}
@media (min-width: 99.6875em) {
  .button-border {
    font-size: 1.125rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (font-size: clamp( 0.8125rem , 0.7340686275rem  +  0.3921568627vw , 1.125rem )) {
    .button-border {
      font-size: clamp( 0.8125rem , 0.7340686275rem  +  0.3921568627vw , 1.125rem );
    }
  }
  @supports not (font-size: clamp( 0.8125rem , 0.7340686275rem  +  0.3921568627vw , 1.125rem )) {
    .button-border {
      font-size: calc(0.8125rem + 0.3125 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .button-border {
    font-size: 0.8125rem;
  }
}
@media (min-width: 99.6875em) {
  .button-border {
    padding-left: 2.4375rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-left: clamp( 1.5rem , 1.2647058824rem  +  1.1764705882vw , 2.4375rem )) {
    .button-border {
      padding-left: clamp( 1.5rem , 1.2647058824rem  +  1.1764705882vw , 2.4375rem );
    }
  }
  @supports not (padding-left: clamp( 1.5rem , 1.2647058824rem  +  1.1764705882vw , 2.4375rem )) {
    .button-border {
      padding-left: calc(1.5rem + 0.9375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .button-border {
    padding-left: 1.5rem;
  }
}
@media (min-width: 99.6875em) {
  .button-border {
    padding-right: 2.4375rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-right: clamp( 1.5rem , 1.2647058824rem  +  1.1764705882vw , 2.4375rem )) {
    .button-border {
      padding-right: clamp( 1.5rem , 1.2647058824rem  +  1.1764705882vw , 2.4375rem );
    }
  }
  @supports not (padding-right: clamp( 1.5rem , 1.2647058824rem  +  1.1764705882vw , 2.4375rem )) {
    .button-border {
      padding-right: calc(1.5rem + 0.9375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .button-border {
    padding-right: 1.5rem;
  }
}
.button-border {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  line-height: 1.5;
  font-weight: 300;
  color: #00296D;
  border: 1px solid #00296D;
  border-radius: 0.9375rem;
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
    border-radius: 0.625rem;
    color: #666666;
    border: 1px solid #666666;
    max-width: 140px;
    padding: 0.5625rem 1.5rem;
    background: linear-gradient(to bottom, #666666 50%, transparent 50%);
    background-size: 100% 200%;
    background-position: 0 100%;
  }
}

.header {
  background-color: #FFF9FD;
  z-index: 3;
}
.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (min-width: 99.6875em) {
  .header__container {
    padding-top: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-top: clamp( 1.25rem , 2.0318627451rem  +  -0.7843137255vw , 1.875rem )) {
    .header__container {
      padding-top: clamp( 1.25rem , 2.0318627451rem  +  -0.7843137255vw , 1.875rem );
    }
  }
  @supports not (padding-top: clamp( 1.25rem , 2.0318627451rem  +  -0.7843137255vw , 1.875rem )) {
    .header__container {
      padding-top: calc(1.875rem + -0.625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .header__container {
    padding-top: 1.875rem;
  }
}
@media (min-width: 99.6875em) {
  .header__container {
    padding-bottom: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-bottom: clamp( 1.25rem , 2.0318627451rem  +  -0.7843137255vw , 1.875rem )) {
    .header__container {
      padding-bottom: clamp( 1.25rem , 2.0318627451rem  +  -0.7843137255vw , 1.875rem );
    }
  }
  @supports not (padding-bottom: clamp( 1.25rem , 2.0318627451rem  +  -0.7843137255vw , 1.875rem )) {
    .header__container {
      padding-bottom: calc(1.875rem + -0.625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .header__container {
    padding-bottom: 1.875rem;
  }
}
.header__container {
  column-gap: 1.25rem;
  position: relative;
}
.header__logo {
  display: flex;
  column-gap: 1.25rem;
  align-items: center;
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
  text-align: center;
}
@media (max-width: 47.99875em) {
  .header__logo-name {
    position: absolute;
    width: 100%;
    height: auto;
    top: 23px;
    left: 0;
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
    margin-top: 6.25rem;
    padding: 2.375rem 1.25rem;
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

.footer__text {
  font-family: "";
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/common.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/header.scss","webpack://./src/scss/footer.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n//@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n//&display=swap Добавить при подключении через плагин@import url(https://fonts.googleapis.com/css?family=Shippori+Mincho:regular,500,600,700,800);\r\n// &subset=cyrillic-ext\r\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+3:300,regular&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,300,regular,500,600&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Raleway:300,regular,500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:regular,600&display=swap\");\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Poppins\";\r\n$fontSize: rem(20); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #000; // Колір шрифту за замовчуванням\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1920;\r\n// $maxWidth: 1728;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1565;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t&::before{\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tcontent: \"\";\r\n\t\t\tposition: fixed;\r\n\t\t\tinset: 0;\r\n\t\t\tbackground: rgba(0, 0, 0, 0.1);\r\n\t\t\tbackdrop-filter: blur(10px);\r\n\t\t\t-webkit-backdrop-filter: blur(10px);\r\n\t\t\topacity: 0;\r\n\t\t\tpointer-events: none;\r\n\t\t\ttransition: opacity 0.3s ease;\r\n\t\t\tz-index: 2;\r\n\t\t}\r\n\t}.menu-open &::before {\r\n\t\topacity: 1;\r\n\t\tpointer-events: auto;\r\n\t}\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: rem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: rem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","// Заголовки, загальні БЕМ блоки та інше...\r\n.button-border{\r\n\t\twhite-space: nowrap;\r\n\t\tfont-size: rem(18);\r\n\t\ttext-align: center;\r\n\t\t@include adaptiveValue(\"font-size\", 18, 13);\r\n\t\t@include adaptiveValue(\"padding-left\", 39, 24);\r\n\t\t@include adaptiveValue(\"padding-right\", 39, 24);\r\n\t\tpadding-top: rem(12);\r\n\t\tpadding-bottom: rem(12);\r\n\t\tline-height: math.div(27 , 18);\r\n\t\tfont-weight: 300;\r\n\t\tcolor: #00296D;\r\n\t\tborder: 1px solid #00296D;\r\n\t\tborder-radius: rem(15);\r\n\t\tbackground: linear-gradient(to bottom, #44C6E9 50%, transparent 50%);\r\n      background-size: 100% 200%;\r\n      background-position: 0 100%;\r\n      transition: background-position 0.3s ease, color 0.3s ease;\r\n\t\t&:hover {\r\n      background-position: 0 0;\r\n\t\tcolor: #fff;\r\n\t}\r\n\t@media (max-width:$mobile){\r\n\t\t\tborder-radius: rem(10);\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: 1px solid #666666;\r\n\t\t\tmax-width: 140px;\r\n         padding: rem(9) rem(24);\r\n\t\t\tbackground: linear-gradient(to bottom, #666666 50%, transparent 50%);\r\n\t\t\tbackground-size: 100% 200%;\r\n         background-position: 0 100%;\r\n\t\t}\r\n}","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n\t\tbackground-color: #FFF9FD;\r\n\t\tz-index: 3;\r\n\t\t// .header__container\r\n\r\n\t\t&__container {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\t@include adaptiveValue(\"padding-top\",20 ,30 );\r\n\t\t\t@include adaptiveValue(\"padding-bottom\",20 ,30 );\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\r\n\t\t// .header__logo\r\n\r\n\t\t&__logo {\r\n\t\t\tdisplay: flex;\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-icon\r\n\r\n\t\t&__logo-icon {\r\n\t\t\timg{\r\n\t\t\t\t@include adaptiveValue(\"width\", 55, 40);\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-name\r\n\t\t\r\n\t\t&__logo-name {\r\n\t\t\ttext-align: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 23px;\r\n\t\t\t\tleft: 0;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-title\r\n\t\t\r\n\t\t&__logo-title {\r\n\t\t\t@include adaptiveValue(\"font-size\", 24, 15);\r\n\t\t\tline-height: math.div(33 , 24);\r\n\t\t\tfont-weight: 600;\r\n\t\t\tmargin-bottom: rem(15);\r\n\t\t\t@include adaptiveValue(\"margin-bottom\", 15, 10);\r\n\t\t\twhite-space: nowrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-subtitle\r\n\r\n\t\t&__logo-subtitle {\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tline-height: math.div(22 , 16);\r\n\t\t\tfont-weight: 400;\r\n\t\t\twhite-space: nowrap;\r\n\t\t}\r\n\r\n\r\n\r\n\t\t// .header__menu\r\n\r\n\t\t&__menu {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__actions\r\n\r\n\t\t&__actions {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__button\r\n\r\n\t\t&__button {\r\n\t\t\tgrid-column-start: 1;\r\n         grid-column-end: 3;\r\n\t\t}\r\n}\r\n.menu {\r\n\t\tflex: 0 1 auto;\r\n\t\t// .menu__body\r\n\r\n\t\t&__body {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: -100%;\r\n\t\t\t\tmargin-top: rem(100);\r\n\t\t\t\tpadding: rem(38) rem(20);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\tbackground-color: #FFF9FD;\r\n\t\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t\t\t.menu-open &{\r\n\t\t\t\tleft: 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t&__icons{\r\n\t\t\tdisplay: none;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tgrid-template-rows: repeat(3, 1fr);\r\n\t\t\t\tgrid-template-columns: repeat(2, auto);\r\n\t\t\t\tflex: 0 1 auto;\r\n\t\t\t\t@include adaptiveValue(\"grid-column-gap\",80 ,40 );\r\n\t\t\t\t@include adaptiveValue(\"grid-row-gap\",60 ,40 );\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__icon{\r\n\t\t\tdisplay: grid;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\r\n\t\t// .menu__list\r\n\r\n\t\t&__list {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tflex: 0 1 50%;\r\n\t\t\t@include adaptiveValue(\"column-gap\", 60, 20);\r\n\t\t\trow-gap: rem(10);\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: end;\r\n\t\t\t\trow-gap: rem(60);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .menu__item\r\n\r\n\t\t&__item {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .menu__link\r\n\r\n\t\t&__link {\r\n\t\t\tfont-size: rem(16);\r\n\t\t\tbackground: linear-gradient(to right, currentColor 0%, currentColor 100%) no-repeat;\r\n      \tbackground-size: 0 2px; /* Начальная ширина подчеркивания */\r\n         background-position: left bottom;\r\n         transition: background-size 0.3s ease;\r\n\t\t\t@media (any-hover: hover) {\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tbackground-size: 100% 2px; /* Конечная ширина подчеркивания при наведении */\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tcolor:  #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n}\r\n.icon-menu {\r\n}\r\n\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n\tdisplay: none;\r\n\t@media (max-width: $mobile) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: rem(30);\r\n\t\theight: rem(18);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tleft: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: rem(3);\r\n\t\t\tbackground-color: #00296D;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 75%;\r\n\t\t\t\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - rem(1));\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(45% - rem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - rem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n","//====================================================================================================\r\n.footer {\r\n\r\n\t\t// .footer__text\r\n\r\n\t\t&__text {\r\n\t\t\tfont-family: \"\";\r\n\t\t}\r\n}\r\n\r\n//====================================================================================================\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2865d5c86a582272d0de")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lN2Y4MjgxNTA1NzQxMDQwZGQ3OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNJQUFzSTtBQUN0SSw0SUFBNEk7QUFDNUksb0lBQW9JO0FBQ3BJLDJIQUEySDtBQUMzSCxxSEFBcUg7QUFDckgsa0lBQWtJO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxxVEFBcVQsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLFNBQVMsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtB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QUM7Ozs7Ozs7OztVQzFuQnZDLHNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucyszOjMwMCxyZWd1bGFyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoxMDAsMzAwLHJlZ3VsYXIsNTAwLDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLHJlZ3VsYXIsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczpyZWd1bGFyLDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLmxvY2sgYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcbn1cbi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC53cmFwcGVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGluc2V0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG59XG4ubWVudS1vcGVuIC53cmFwcGVyOjpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbkBzdXBwb3J0cyAob3ZlcmZsb3c6IGNsaXApIHtcbiAgLndyYXBwZXIge1xuICAgIG92ZXJmbG93OiBjbGlwO1xuICB9XG59XG4ud3JhcHBlciA+IG1haW4ge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi53cmFwcGVyID4gKiB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLypcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxu0LLRgdGW0YUg0LrQu9Cw0YHRltCyLCDRidC+INC80ZbRgdGC0Y/RgtGMICpfX2NvbnRhaW5lclxu0J3QsNC/0YDQuNC60LvQsNC0IGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0ZYg0YIu0L8uXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxuKi9cbltjbGFzcyo9X19jb250YWluZXJdIHtcbiAgbWF4LXdpZHRoOiA5OS42ODc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjkzNzVyZW07XG59XG5cbltjbGFzcyo9LWliZ10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5bY2xhc3MqPS1pYmddIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuW2NsYXNzKj0taWJnX2NvbnRhaW5dIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5idXR0b24tYm9yZGVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzM0MDY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAxLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjgxMjVyZW0gKyAwLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idXR0b24tYm9yZGVyIHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ1dHRvbi1ib3JkZXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnV0dG9uLWJvcmRlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmJ1dHRvbi1ib3JkZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ1dHRvbi1ib3JkZXIge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMS41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICB9XG59XG4uYnV0dG9uLWJvcmRlciB7XG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDI5NkQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDI5NkQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuOTM3NXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ0QzZFOSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4zcyBlYXNlLCBjb2xvciAwLjNzIGVhc2U7XG59XG4uYnV0dG9uLWJvcmRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICAgIHBhZGRpbmc6IDAuNTYyNXJlbSAxLjVyZW07XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzY2NjY2NiA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xuICB9XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUZEO1xuICB6LWluZGV4OiAzO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDIuMDMxODYyNzQ1MXJlbSAgKyAgLTAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAyLjAzMTg2Mjc0NTFyZW0gICsgIC0wLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDIuMDMxODYyNzQ1MXJlbSAgKyAgLTAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygxLjg3NXJlbSArIC0wLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAyLjAzMTg2Mjc0NTFyZW0gICsgIC0wLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMi4wMzE4NjI3NDUxcmVtICArICAtMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAyLjAzMTg2Mjc0NTFyZW0gICsgIC0wLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMS44NzVyZW0gKyAtMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuODc1cmVtO1xuICB9XG59XG4uaGVhZGVyX19jb250YWluZXIge1xuICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby1pY29uIGltZyB7XG4gICAgd2lkdGg6IDMuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDIuNXJlbSAsIDIuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAzLjQzNzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAyLjVyZW0gLCAyLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMy40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMi41cmVtICwgMi4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDMuNDM3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1pY29uIGltZyB7XG4gICAgICB3aWR0aDogY2FsYygyLjVyZW0gKyAwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgIHdpZHRoOiAyLjVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28tbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tbmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0b3A6IDIzcHg7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC45Mzc1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC41NDY1Njg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjU0NjU2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMC45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTQ2NTY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAwLjkzNzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjYyNXJlbSArIDAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNzVyZW0gKyAwLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICBsaW5lLWhlaWdodDogMS4zNzU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaGVhZGVyX19hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2J1dHRvbiB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG59XG5cbi5tZW51IHtcbiAgZmxleDogMCAxIGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgbWFyZ2luLXRvcDogNi4yNXJlbTtcbiAgICBwYWRkaW5nOiAyLjM3NXJlbSAxLjI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB9XG4gIC5tZW51LW9wZW4gLm1lbnVfX2JvZHkge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbi5tZW51X19pY29ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtY29sdW1uLWdhcDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ3JpZC1jb2x1bW4tZ2FwOiBjbGFtcCggMi41cmVtICwgMS44NzI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgNXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogY2xhbXAoIDIuNXJlbSAsIDEuODcyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ3JpZC1jb2x1bW4tZ2FwOiBjbGFtcCggMi41cmVtICwgMS44NzI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgNXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogY2FsYygyLjVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtY29sdW1uLWdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtcm93LWdhcDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ3JpZC1yb3ctZ2FwOiBjbGFtcCggMi41cmVtICwgMi4xODYyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtcm93LWdhcDogY2xhbXAoIDIuNXJlbSAsIDIuMTg2Mjc0NTA5OHJlbSAgKyAgMS41Njg2Mjc0NTF2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ3JpZC1yb3ctZ2FwOiBjbGFtcCggMi41cmVtICwgMi4xODYyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtcm93LWdhcDogY2FsYygyLjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2ljb25zIHtcbiAgICBncmlkLXJvdy1nYXA6IDIuNXJlbTtcbiAgfVxufVxuLm1lbnVfX2ljb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tZW51X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMSA1MCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBjb2x1bW4tZ2FwOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGNvbHVtbi1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC42MjI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgY29sdW1uLWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGNvbHVtbi1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC42MjI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgY29sdW1uLWdhcDogY2FsYygxLjI1cmVtICsgMi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgfVxufVxuLm1lbnVfX2xpc3Qge1xuICByb3ctZ2FwOiAwLjYyNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICByb3ctZ2FwOiAzLjc1cmVtO1xuICB9XG59XG4ubWVudV9fbGluayB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBjdXJyZW50Q29sb3IgMCUsIGN1cnJlbnRDb2xvciAxMDAlKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMCAycHg7IC8qINCd0LDRh9Cw0LvRjNC90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8gKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGVhc2U7XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLm1lbnVfX2xpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7IC8qINCa0L7QvdC10YfQvdCw0Y8g0YjQuNGA0LjQvdCwINC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNGPINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIGNvbG9yOiAjMjk3N0Q1O1xuICB9XG59XG5cbi5pY29uLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmljb24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgICBoZWlnaHQ6IDEuMTI1cmVtO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKGFueS1ob3Zlcjogbm9uZSkge1xuICAuaWNvbi1tZW51IHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5pY29uLW1lbnUgc3BhbiwgLmljb24tbWVudTo6YmVmb3JlLCAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMC4xODc1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDI5NkQ7XG4gIH1cbiAgLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogY2FsYyg0NSUgLSAwLjA2MjVyZW0pO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5mb290ZXJfX3RleHQge1xuICBmb250LWZhbWlseTogXCJcIjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbnVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZm9vdGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEUUQ7O0FDTkE7OztFQUdDLHNCQUFBO0FEU0Q7O0FDQ0E7O0VBRUMsWUFBQTtFQUNBLGdCQUFBO0FERUQ7O0FDQUE7RUFDQyxXRFFXO0VDUFgsY0FBQTtFQUNBLHNCREVZO0VDRFosa0JERVU7RUNBViwwQkFBQTtF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Z0ZDLGlGQWJlO0lKa05kO0VBQ0Y7RUluTUE7SUNuRkE7TURvRkMsbUVBQUE7SUpzTUM7RUFDRjtBQUNGO0FJcE1FO0VDeEZBO0lEeUZDLHdCQUFBO0VKdU1EO0FBQ0Y7QUtqU0U7RUFNQyxtQkFBQTtFQUNBLGtCQUFBO0FMOFJIO0FLelJFO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUwyUkg7QUlsT0U7RUNqREM7SURrREEsZ0JBQUE7RUpxT0Q7QUFDRjtBSWxPQztFQUVDO0lDeERDO01EeURBLHVFQWhCYztJSm9QYjtFQUNGO0VJbE9BO0lDNURDO01ENkRBLHdEQUFBO0lKcU9DO0VBQ0Y7QUFDRjtBSW5PRTtFQ2pFQztJRGtFQSxhQUFBO0VKc09EO0FBQ0Y7QUtsU0U7RUFDQyxrQkFBQTtBTG9TSDtBS25TRztFQUZEO0lBR0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0VMc1NGO0FBQ0Y7QUlwUUU7RUM3QkE7SUQ4QkMsaUJBQUE7RUp1UUQ7QUFDRjtBSXBRQztFQUVDO0lDcENBO01EcUNDLDJFQWhCYztJSnNSYjtFQUNGO0VJcFFBO0lDeENBO01EeUNDLCtEQUFBO0lKdVFDO0VBQ0Y7QUFDRjtBSXJRRTtFQzdDQTtJRDhDQyxvQkFBQTtFSndRRDtBQUNGO0FLdlRFO0VBRUMsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FMd1RIO0FJL1JFO0VDN0JBO0lEOEJDLHdCQUFBO0VKa1NEO0FBQ0Y7QUkvUkM7RUFFQztJQ3BDQTtNRHFDQyxpRkFoQmM7SUppVGI7RUFDRjtFSS9SQTtJQ3hDQTtNRHlDQyxrRUFBQTtJSmtTQztFQUNGO0FBQ0Y7QUloU0U7RUM3Q0E7SUQ4Q0MsdUJBQUE7RUptU0Q7QUFDRjtBS2xWRTtFQU1DLG1CQUFBO0FMK1VIO0FLOVVHO0VBUEQ7SUFRRSxnQkFBQTtFTGlWRjtBQUNGO0FJN1RFO0VDZkE7SURnQkMsZUFBQTtFSmdVRDtBQUNGO0FJN1RDO0VBRUM7SUN0QkE7TUR1QkMsc0VBaEJjO0lKK1ViO0VBQ0Y7RUk3VEE7SUMxQkE7TUQyQkMsMkRBQUE7SUpnVUM7RUFDRjtBQUNGO0FJOVRFO0VDL0JBO0lEZ0NDLGtCQUFBO0VKaVVEO0FBQ0Y7QUtsV0U7RUFFQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUxtV0g7QUtyVkU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUx1Vkg7QUtoVkU7RUFDQyxvQkFBQTtFQUNNLGtCQUFBO0FMa1ZUOztBSy9VQTtFQUNFLGNBQUE7QUxrVkY7QUs5VUc7RUFERDtJQUVFLGVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLE1BQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EseUJBQUE7SUFDQSw0QkFBQTtFTGlWRjtFS2hWRztJQUNELE9BQUE7RUxrVkY7QUFDRjtBSzlVRTtFQUNDLGFBQUE7QUxnVkg7QUsvVUc7RUFGRDtJQUdFLGFBQUE7SUFDQSxrQ0FBQTtJQUNBLHNDQUFBO0lBQ0EsY0FBQTtJQUdBLHVCQUFBO0lBQ0EsbUJBQUE7RUxnVkY7QUFDRjtBSXBZRTtFQ3lDQTtJRHhDQyxxQkFBQTtFSnVZRDtBQUNGO0FJcFlDO0VBRUM7SUNrQ0E7TURqQ0MsMkVBaEJjO0lKc1piO0VBQ0Y7RUlwWUE7SUM4QkE7TUQ3QkMsK0RBQUE7SUp1WUM7RUFDRjtBQUNGO0FJcllFO0VDeUJBO0lEeEJDLHVCQUFBO0VKd1lEO0FBQ0Y7QUkxWkU7RUN5Q0E7SUR4Q0MscUJBQUE7RUo2WkQ7QUFDRjtBSTFaQztFQUVDO0lDa0NBO01EakNDLDJFQWhCYztJSjRhYjtFQUNGO0VJMVpBO0lDOEJBO01EN0JDLDZEQUFBO0lKNlpDO0VBQ0Y7QUFDRjtBSTNaRTtFQ3lCQTtJRHhCQyxvQkFBQTtFSjhaRDtBQUNGO0FLMVhFO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUw0WEg7QUt2WEU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUx5WEg7QUkzYkU7RUM4REE7SUQ3REMsbUJBQUE7RUo4YkQ7QUFDRjtBSTNiQztFQUVDO0lDdURBO01EdERDLDBFQWhCYztJSjZjYjtFQUNGO0VJM2JBO0lDbURBO01EbERDLDJEQUFBO0lKOGJDO0VBQ0Y7QUFDRjtBSTViRTtFQzhDQTtJRDdDQyxtQkFBQTtFSitiRDtBQUNGO0FLblpFO0VBTUMsaUJBQUE7RUFDQSxlQUFBO0FMZ1pIO0FLL1lHO0VBUkQ7SUFTRSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUxrWkY7QUFDRjtBS3ZZRTtFQUNDLGVBQUE7RUFDQSxtRkFBQTtFQUNJLHNCQUFBLEVBQUEsbUNBQUE7RUFDRSxnQ0FBQTtFQUNBLHFDQUFBO0FMeVlUO0FLeFlHO0VBQ0M7SUFDQyx5QkFBQSxFQUFBLGdEQUFBO0VMMFlIO0FBQ0Y7QUt4WUc7RUFYRDtJQVlFLGNBQUE7RUwyWUY7QUFDRjs7QUtoWUE7RUFDQyxhQUFBO0FMbVlEO0FLbFlDO0VBRkQ7SUFHRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VMcVlBO0FBQ0Y7QUtyWUU7RUFSRjtJQVNHLGVBQUE7RUx3WUQ7QUFDRjtBS2haQztFQVNDO0lBR0MsV0FBQTtJQUNBLDRCQUFBO0lBQ0EsT0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7RUx3WUQ7RUt0WUE7SUFDQyxNQUFBO0VMd1lEO0VLdFlBO0lBQ0MsU0FBQTtJQUNBLFVBQUE7RUx3WUQ7RUtyWUE7SUFDQywwQkFBQTtJQUNBLFVBQUE7RUx1WUQ7RUtwWUM7SUFDQyxRQUFBO0VMc1lGO0VLaFlDO0lBQ0MsMEJBQUE7SUFDQSx5QkFBQTtFTGtZRjtFS2hZQztJQUNDLDZCQUFBO0lBQ0Esd0JBQUE7SUFDQSxXQUFBO0VMa1lGO0FBQ0Y7O0FNMW1CRTtFQUNDLGVBQUE7QU42bUJIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQvNGW0LrRgdC40L3RltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGI0YDQuNGE0YLRltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vJmRpc3BsYXk9c3dhcCAtINC00L7QtNCw0YLQuCDQv9GA0Lgg0L/RltC00LrQu9GO0YfQtdC90L3RliDRh9C10YDQtdC3INC/0LvQsNCz0ZbQvVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDQu9C+0LrQsNC70YzQvdGWINGE0LDQudC70Lgg0YjRgNC40YTRgtGW0LJcXHJcXG4vL0BpbXBvcnQgXFxcImZvbnRzL2ZvbnRzXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGW0LrQvtC90LrQvtCy0LjRhSDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0YTQsNC50Lsg0ZbQutC+0L3QutC+0LLQvtCz0L4g0YjRgNC40YTRgtGDXFxyXFxuLy9AaW1wb3J0IFxcXCJmb250cy9pY29uc1xcXCI7XFxyXFxuXFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0YjQsNCx0LvQvtC90YMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vJmRpc3BsYXk9c3dhcCDQlNC+0LHQsNCy0LjRgtGMINC/0YDQuCDQv9C+0LTQutC70Y7Rh9C10L3QuNC4INGH0LXRgNC10Lcg0L/Qu9Cw0LPQuNC9QGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzpyZWd1bGFyLDUwMCw2MDAsNzAwLDgwMCk7XFxyXFxuLy8gJnN1YnNldD1jeXJpbGxpYy1leHRcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zKzM6MzAwLHJlZ3VsYXImZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjEwMCwzMDAscmVndWxhciw1MDAsNjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTozMDAscmVndWxhciw1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOnJlZ3VsYXIsNjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbi8vINCX0LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0YjRgNC40YTRgiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4kZm9udEZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiRmb250U2l6ZTogcmVtKDIwKTsgLy8g0LTQtSAxNChweCkgLSDRgNC+0LfQvNGW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0Lcg0LzQsNC60LXRgtGDXFxyXFxuXFxyXFxuLy8g0J7RgdC90L7QstC90ZYg0LrQvtC70YzQvtGA0LhcXHJcXG4kbWFpbkNvbG9yOiAjMDAwOyAvLyDQmtC+0LvRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINCw0LTQsNC/0YLQuNCy0L3QvtGXINGB0ZbRgtC60LggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQnNGW0L3RltC80LDQu9GM0L3QsCDRiNC40YDQuNC90LAg0YHRgtC+0YDRltC90LrQuFxcclxcbiRtaW5XaWR0aDogMzIwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQv9C+0LvQvtGC0L3QsCAo0LzQsNC60LXRgtGDKVxcclxcbiRtYXhXaWR0aDogMTkyMDtcXHJcXG4vLyAkbWF4V2lkdGg6IDE3Mjg7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC+0LHQvNC10LbRg9GO0YfQvtCz0L4g0LrQvtC90YLQtdC50L3QtdGA0LAgKDAgPSDQvdC10LzQsNGUINC+0LHQvNC10LbQtdC90L3RjylcXHJcXG4kbWF4V2lkdGhDb250YWluZXI6IDE1NjU7XFxyXFxuLy8g0JfQsNCz0LDQu9GM0L3QuNC5INCy0ZbQtNGB0YLRg9C/INGDINC60L7QvdGC0LXQudC90LXRgNCwXFxyXFxuLy8gKDMwID0g0L/QviAxNXB4INC70ZbQstC+0YDRg9GHINGWINC/0YDQsNCy0L7RgNGD0YcsIDAgPSDQvdC10LzQsNGUINCy0ZbQtNGB0YLRg9C/0YMpXFxyXFxuJGNvbnRhaW5lclBhZGRpbmc6IDMwO1xcclxcblxcclxcbi8vINCo0LjRgNC40L3QsCDRgdC/0YDQsNGG0YzQvtCy0YPQstCw0L3QvdGPINC/0LXRgNGI0L7Qs9C+INCx0YDQtdC50LrQv9C+0ZbQvdGC0YNcXHJcXG4kY29udGFpbmVyV2lkdGg6ICRtYXhXaWR0aENvbnRhaW5lciArICRjb250YWluZXJQYWRkaW5nO1xcclxcblxcclxcbi8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4XFxyXFxuJHBjOiBlbSgkY29udGFpbmVyV2lkdGgpOyAvLyDQn9CaLCDQvdC+0YPRgtCx0YPQutC4LCDQtNC10Y/QutGWINC/0LvQsNC90YjQtdGC0Lgg0YMg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiR0YWJsZXQ6IGVtKDk5MS45OCk7IC8vINCf0LvQsNC90YjQtdGC0LgsINC00LXRj9C60ZYg0YLQtdC70LXRhNC+0L3QuCDQsiDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJG1vYmlsZTogZW0oNzY3Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBMXFxyXFxuJG1vYmlsZVNtYWxsOiBlbSg0NzkuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IFNcXHJcXG5cXHJcXG4vLyDQotC40L8g0LDQtNCw0L/RgtC40LLQsDpcXHJcXG4vLyAxID0g0YfRg9C50L3RltGB0YLRjCAo0YMg0LrQvtC90YLQtdC50L3QtdGA0LAg0L3QtdC80LDRlCDQsdGA0LXQudC60L/QvtGW0L3RgtGW0LIpLFxcclxcbi8vIDIgPSDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgiAo0LrQvtC90YLQtdC50L3QtdGAINC30LzRltC90Y7RlCDRgdCy0L7RjiDRiNC40YDQuNC90YMg0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIpXFxyXFxuJHJlc3BvbnNpdmVUeXBlOiAxO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQntCx0L3Rg9C70LXQvdC90Y8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbnVsbFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtC10LPQsCBCT0RZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Ly8g0KHQutGA0L7Qu9C7INC30LDQsdC70L7QutC+0LLQsNC90L5cXHJcXG5cXHQubG9jayAmIHtcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdFxcdHRvdWNoLWFjdGlvbjogbm9uZTtcXHJcXG5cXHRcXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQodCw0LnRgiDQt9Cw0LLQsNC90YLQsNC20LXQvdC40LlcXHJcXG5cXHQubG9hZGVkICYge1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0J7QsdC+0LvQvtC90LrQsCB3cmFwcGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLndyYXBwZXIge1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0Jjo6YmVmb3Jle1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHRcXHRpbnNldDogMDtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuXFx0XFx0XFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcblxcdFxcdFxcdC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0XFx0XFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0XFx0XFx0ei1pbmRleDogMjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fS5tZW51LW9wZW4gJjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdFxcdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcblxcdH1cXHJcXG5cXHRAc3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGNsaXA7XFxyXFxuXFx0fVxcclxcblxcdC8vINCf0YDQuNGC0LjRgdC60LDRlNC80L4gZm9vdGVyXFxyXFxuXFx0PiBtYWluIHtcXHJcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KTRltC60YEg0LTQu9GPINGB0LvQsNC50LTQtdGA0ZbQslxcclxcblxcdD4gKiB7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0J7QsdC80LXQttGD0Y7Rh9C40Lkg0LrQvtC90YLQtdC50L3QtdGAID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vKlxcclxcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxcclxcbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcXHJcXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cXHJcXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxcclxcbiovXFxyXFxuQGlmICgkcmVzcG9uc2l2ZVR5cGU9PTEpIHtcXHJcXG5cXHQvLyDQp9GD0LnQvdCwXFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcblxcdFxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH0gQGVsc2Uge1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSwgMTUpO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksIDE1KTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59IEBlbHNlIHtcXHJcXG5cXHQvLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQsNC80LhcXHJcXG5cXHRbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG5cXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwYykge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDk3MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oNzUwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IG5vbmU7XFxyXFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wIGFuZCAkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LHQsNC30L7QstC40YUg0YHRgtC40LvRltCyLCDRiNCw0LHQu9C+0L3RltCyICjQt9Cw0LPQvtGC0ZbQstC10LvRjCkg0YLQsCDQtNC+0L/QvtC80ZbQttC90LjRhSDQutC70LDRgdGW0LJcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstC40LzQutC90LXQvdC90Y8g0LrQvtC90LrRgNC10YLQvdC40YUg0YHRgtC40LvRltCyINC00LjQstC40YHRjCBiYXNlLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQt9Cw0LPQsNC70YzQvdC40YUg0LXQu9C10LzQtdC90YLRltCyINC/0YDQvtC10LrRgtGDXFxyXFxuQGltcG9ydCBcXFwiY29tbW9uXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDQsdC70L7QutGW0LJcXHJcXG5AaW1wb3J0IFxcXCJoZWFkZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcImZvb3RlclxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0YHRgtC+0YDRltC90L7QulxcclxcbkBpbXBvcnQgXFxcImhvbWVcXFwiO1xcclxcblwiLFwiKiB7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcblxcdGJvcmRlcjogMHB4O1xcclxcbn1cXHJcXG4qLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpmb2N1cyxcXHJcXG46YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5hOmZvY3VzLFxcclxcbmE6YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRtaW4td2lkdGg6ICRtaW5XaWR0aCArIHB4O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRjb2xvcjogJG1haW5Db2xvcjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiAkZm9udFNpemU7XFxyXFxuXFx0Ly90ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcblxcdC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG51bCBsaSB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cIixcIi8vINCX0LDQs9Cw0LvRjNC90LjQuSDRhNCw0LnQuyDQtdC70LXQvNC10L3RgtGW0LIg0YTQvtGA0LxcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstGW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQutC+0L3QutGA0LXRgtC90L7Qs9C+INC10LvQtdC80LXQvdGC0LAg0YTQvtGA0LzQuCDQtNC40LLQuNGB0YwgYmFzZS9mb3Jtcy9mb3Jtcy5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZS9mb3Jtcy9mb3Jtc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQv9C+0L/QsNC/0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcG9wdXBcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YHQv9C+0LnQu9C10YDRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zcG9sbGVyc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtCw0LHRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS90YWJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC80LDQv1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvbWFwc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQsdC70L7QutGDIFxcXCLQv9C+0LrQsNC30LDRgtC4INGJ0LVcXFwiXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zaG93bW9yZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LvQuNC/0LrQvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3RpY2t5XFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LLQvdC+0LXQutGA0LDQvdC90L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxzY3JlZW5cXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QtdC60YDQsNC90L7RlyDQv9GA0L7QutGA0YPRgtC60LhcXHJcXG4vLyBTdHlsZXMgZm9yIGZ1bGxwYWdlIHNjcm9sbFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHBhZ2VcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPIHJpcHBsZSDQtdGE0LXQutGC0YNcXHJcXG4vLyBTdHlsZXMgZm9yIHJpcHBsZSBlZmZlY3RcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3JpcHBsZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LrQsNGB0YLQvtC80L3QvtCz0L4g0LrRg9GA0YHQvtGA0YNcXHJcXG4vLyBTdHlsZXMgZm9yIGN1c3RvbSBjdXJzb3JcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2N1cnNvclxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0YfRg9C50L3QuNGFINC60LDRgNGC0LjQvdC+0LogKElCRylcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZyAoZGl2INC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnYSAoYSDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG5bY2xhc3MqPVxcXCItaWJnXFxcIl0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5bY2xhc3MqPVxcXCItaWJnX2NvbnRhaW5cXFwiXSB7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0KjQsNCx0LvQvtC90LggKNC30LDQs9C+0YLRltCy0LvRlilcXHJcXG4vLyBAZXh0ZW5kICXRltC8J9GPINGI0LDQsdC70L7QvdGDO1xcclxcbi8vINCh0L3RltC/0L/QtdGCIChTQ1NTKTogZXhcXHJcXG5cXHJcXG4vLyDQm9GW0YfQuNC70YzQvdC40Log0LTQu9GPINGB0L/QuNGB0LrRg1xcclxcbiVsaXN0Q291bnRlciB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdGNvdW50ZXItcmVzZXQ6IGl0ZW07XFxyXFxuXFx0bGkge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHQmOmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGl0ZW07XFxyXFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihpdGVtKTtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdC1INCy0ZbQtNC10L5cXHJcXG4lcmVzcG9uc2l2ZVZpZGVvIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDU2LjI1JTtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JLRltC00LXQviDRj9C6INGE0L7QvVxcclxcbiV2aWRlb0JhY2tncm91bmQge1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdHotaW5kZXg6IC0xMDA7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0ZbRgNC40Lkg0YTRltC70YzRgtGAXFxyXFxuJWdyYXlmaWx0ZXIge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxyXFxuXFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHQutCw0YHRg9Cy0LDRgtC4INCy0LjQtNGW0LvQtdC90L3Rj1xcclxcbiVub3NlbGVjdCB7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi8vINCU0LfQtdGA0LrQsNC70YzQvdC1INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xcclxcbiVtaXJyb3Ige1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbn1cXHJcXG4vLyDQn9C70LDQstC90LjQuSDRgdC60YDQvtC70LtcXHJcXG4lc21vb3Roc2Nyb2xsIHtcXHJcXG5cXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxufVxcclxcbi8vINCh0YXQvtCy0LDRgtC4INGB0LrRgNC+0LvQu1xcclxcbiVoaWRlc2Nyb2xsIHtcXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy8g0JfQsNCz0L7Qu9C+0LLQutC4LCDQt9Cw0LPQsNC70YzQvdGWINCR0JXQnCDQsdC70L7QutC4INGC0LAg0ZbQvdGI0LUuLi5cXHJcXG4uYnV0dG9uLWJvcmRlcntcXHJcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTgsIDEzKTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCAzOSwgMjQpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCAzOSwgMjQpO1xcclxcblxcdFxcdHBhZGRpbmctdG9wOiByZW0oMTIpO1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOiByZW0oMTIpO1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyNyAsIDE4KTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdGNvbG9yOiAjMDAyOTZEO1xcclxcblxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICMwMDI5NkQ7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDE1KTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNDRDNkU5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjAwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjNzIGVhc2UsIGNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0fVxcclxcblxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxMCk7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICM2NjY2NjY7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDE0MHB4O1xcclxcbiAgICAgICAgIHBhZGRpbmc6IHJlbSg5KSByZW0oMjQpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2NjY2NjYgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcXHJcXG5cXHRcXHR9XFxyXFxufVwiLFwiLy/Qn9GW0LTQutC70Y7Rh9C10L3QvdGPINGI0YDQuNGE0YLRg1xcclxcbkBtaXhpbiBmb250KCRmb250X25hbWUsICRmaWxlX25hbWUsICR3ZWlnaHQsICRzdHlsZSkge1xcclxcblxcdEBmb250LWZhY2Uge1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkZm9udF9uYW1lO1xcclxcblxcdFxcdGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG5cXHRcXHRzcmM6IHVybChcXFwiLi4vZm9udHMvI3skZmlsZV9uYW1lfS53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogI3skd2VpZ2h0fTtcXHJcXG5cXHRcXHRmb250LXN0eWxlOiAjeyRzdHlsZX07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vL1BlcmNlbnRcXHJcXG5AZnVuY3Rpb24gcGVyY2VudCgkcHgsICRmcm9tKSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkZnJvbSkgKiAxMDAlO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy9SRU1cXHJcXG5AZnVuY3Rpb24gcmVtKCRweCkge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgMTYpICsgcmVtO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy9FTVxcclxcbkBmdW5jdGlvbiBlbSgkcHgsICRjdXJyZW50OiAxNikge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGN1cnJlbnQpICsgZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vL0N1cnJlbmN5XFxyXFxuQG1peGluIGN1cnJlbmN5KCRzeW0pIHtcXHJcXG5cXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0Y29udGVudDogXFxcIiN7JHN5bX1cXFwiO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gR3JpZHNcXHJcXG5AbWl4aW4gZ3JpZENhcmRzKCR0eXBlOiBmaXQsICRtaW46IDI4MHB4LCAkbWF4OiAxZnIsICRnYXA6IDMwcHgpIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdhcDogJGdhcDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLSN7JHR5cGV9LCBtaW5tYXgoJG1pbiwgJG1heCkpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90LAg0LLQu9Cw0YHRgtC40LLRltGB0YLRjCAoY2xhbXApXFxyXFxuQG1peGluIGFkYXB0aXZlVmFsdWUoJHByb3BlcnR5LCAkc3RhcnRTaXplLCAkbWluU2l6ZSwgJGtlZXBTaXplOiAwLCAkd2lkdGhGcm9tOiAkY29udGFpbmVyV2lkdGgsICR3aWR0aFRvOiAkbWluV2lkdGgpIHtcXHJcXG5cXHRAaWYgKCRzdGFydFNpemU9PTApIHtcXHJcXG5cXHRcXHQkc3RhcnRTaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0QGlmICgkbWluU2l6ZT09MCkge1xcclxcblxcdFxcdCRtaW5TaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JTQu9GPIGNhbGMoKTtcXHJcXG5cXHQkYWRkU2l6ZTogbWF0aC5kaXYoJHN0YXJ0U2l6ZSAtICRtaW5TaXplLCAxNik7XFxyXFxuXFxyXFxuXFx0QGlmICgkd2lkdGhGcm9tID09ICRjb250YWluZXJXaWR0aCBhbmQgJG1heFdpZHRoQ29udGFpbmVyID09IDApIHtcXHJcXG5cXHRcXHQkd2lkdGhGcm9tOiAkbWF4V2lkdGg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4INCyIEVNXFxyXFxuXFx0JHdpZHRoRnJvbU1lZGlhOiBlbSgkd2lkdGhGcm9tKTtcXHJcXG5cXHQkd2lkdGhUb01lZGlhOiBlbSgkd2lkdGhUbyk7XFxyXFxuXFxyXFxuXFx0Ly8g0KTQvtGA0LzRg9C70LAg0L/Qu9Cw0LLQsNGO0YfQvtCz0L4g0LfQvdCw0YfQtdC90L3Rj1xcclxcblxcdC8vINCY0YHRgtC+0YfQvdC40Lo6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vbGluZWFybHktc2NhbGUtZm9udC1zaXplLXdpdGgtY3NzLWNsYW1wLWJhc2VkLW9uLXRoZS12aWV3cG9ydC9cXHJcXG5cXHQkc2xvcGU6IG1hdGguZGl2KCgkc3RhcnRTaXplIC0gJG1pblNpemUpLCAoJHdpZHRoRnJvbSAtICR3aWR0aFRvKSk7XFxyXFxuXFx0JHlJbnRlcnNlY3Rpb246IC0kd2lkdGhUbyAqICRzbG9wZSArICRtaW5TaXplO1xcclxcblxcdEBpZiAoJHlJbnRlcnNlY3Rpb249PTApIHtcXHJcXG5cXHRcXHQkeUludGVyc2VjdGlvbjogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdCRmbHlWYWx1ZTogI3tyZW0oJHlJbnRlcnNlY3Rpb24pfVxcXCIgKyBcXFwiICN7JHNsb3BlICogMTAwfXZ3O1xcclxcblxcclxcblxcdC8vINCe0YLRgNC40LzQsNC90L3RjyDQt9C90LDRh9C10L3QvdGPINCy0LvQsNGB0YLQuNCy0L7RgdGC0ZZcXHJcXG5cXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiByZW0oJG1pblNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdC8vINCv0LrRidC+INC90LXQs9Cw0YLQuNCy0L3RliDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0QGlmICgkbWluU2l6ZSA+ICRzdGFydFNpemUpIHtcXHJcXG5cXHRcXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiByZW0oJHN0YXJ0U2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgcmVtKCRtaW5TaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0LfQvdCw0YfQtdC90L3RjyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFx0QGlmICRrZWVwU2l6ZSAhPSAxIGFuZCAka2VlcFNpemUgIT0gMyB7XFxyXFxuXFx0XFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogcmVtKCRzdGFydFNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0JDQtNCw0L/RgtGD0ZTQvNC+INGA0L7Qt9C80ZbRgCDRgyDQv9GA0L7QvNGW0LbQutGDINC80ZbQtiDQt9Cw0LfQvdCw0YfQtdC90LjQvNC4INGI0LjRgNC40L3QsNC80Lgg0LIn0Y7Qv9C+0YDRgtGDXFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aFRvTWVkaWEpIGFuZCAobWF4LXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHQvLyDQr9C60YnQviDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyAoI3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC8vINCv0LrRidC+INC90LUg0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRcXHRAc3VwcG9ydHMgbm90ICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiBjYWxjKCN7cmVtKCRtaW5TaXplKX0gKyAjeyRhZGRTaXplfSAqICgxMDB2dyAtICN7cmVtKCR3aWR0aFRvKX0pIC8gI3ttYXRoLmRpdigkd2lkdGhGcm9tLCAxNikgLSBtYXRoLmRpdigkd2lkdGhUbywgMTYpfSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAyIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHdpZHRoVG9NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogcmVtKCRtaW5TaXplKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5oZWFkZXIge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XFxyXFxuXFx0XFx0ei1pbmRleDogMztcXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19jb250YWluZXJcXHJcXG5cXHJcXG5cXHRcXHQmX19jb250YWluZXIge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLDIwICwzMCApO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwyMCAsMzAgKTtcXHJcXG5cXHRcXHRcXHRjb2x1bW4tZ2FwOiByZW0oMjApO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nb1xcclxcblxcclxcblxcdFxcdCZfX2xvZ28ge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0Y29sdW1uLWdhcDogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nby1pY29uXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbG9nby1pY29uIHtcXHJcXG5cXHRcXHRcXHRpbWd7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA1NSwgNDApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nby1uYW1lXFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jl9fbG9nby1uYW1lIHtcXHJcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IDIzcHg7XFxyXFxuXFx0XFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28tdGl0bGVcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQmX19sb2dvLXRpdGxlIHtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyNCwgMTUpO1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigzMyAsIDI0KTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSgxNSk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDE1LCAxMCk7XFxyXFxuXFx0XFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nby1zdWJ0aXRsZVxcclxcblxcclxcblxcdFxcdCZfX2xvZ28tc3VidGl0bGUge1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE2LCAxMik7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IG1hdGguZGl2KDIyICwgMTYpO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbWVudVxcclxcblxcclxcblxcdFxcdCZfX21lbnUge1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fYWN0aW9uc1xcclxcblxcclxcblxcdFxcdCZfX2FjdGlvbnMge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2J1dHRvblxcclxcblxcclxcblxcdFxcdCZfX2J1dHRvbiB7XFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuLm1lbnUge1xcclxcblxcdFxcdGZsZXg6IDAgMSBhdXRvO1xcclxcblxcdFxcdC8vIC5tZW51X19ib2R5XFxyXFxuXFxyXFxuXFx0XFx0Jl9fYm9keSB7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0XFx0XFx0bGVmdDogLTEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLXRvcDogcmVtKDEwMCk7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogcmVtKDM4KSByZW0oMjApO1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdFxcdFxcdC5tZW51LW9wZW4gJntcXHJcXG5cXHRcXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdCZfX2ljb25ze1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcclxcblxcdFxcdFxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcclxcblxcdFxcdFxcdFxcdGZsZXg6IDAgMSBhdXRvO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdyaWQtY29sdW1uLWdhcFxcXCIsODAgLDQwICk7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ3JpZC1yb3ctZ2FwXFxcIiw2MCAsNDAgKTtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jl9faWNvbntcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tZW51X19saXN0XFxyXFxuXFxyXFxuXFx0XFx0Jl9fbGlzdCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdGZsZXg6IDAgMSA1MCU7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiY29sdW1uLWdhcFxcXCIsIDYwLCAyMCk7XFxyXFxuXFx0XFx0XFx0cm93LWdhcDogcmVtKDEwKTtcXHJcXG5cXHRcXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogZW5kO1xcclxcblxcdFxcdFxcdFxcdHJvdy1nYXA6IHJlbSg2MCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWVudV9faXRlbVxcclxcblxcclxcblxcdFxcdCZfX2l0ZW0ge1xcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWVudV9fbGlua1xcclxcblxcclxcblxcdFxcdCZfX2xpbmsge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGN1cnJlbnRDb2xvciAwJSwgY3VycmVudENvbG9yIDEwMCUpIG5vLXJlcGVhdDtcXHJcXG4gICAgICBcXHRiYWNrZ3JvdW5kLXNpemU6IDAgMnB4OyAvKiDQndCw0YfQsNC70YzQvdCw0Y8g0YjQuNGA0LjQvdCwINC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNGPICovXFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XFxyXFxuICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG5cXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4OyAvKiDQmtC+0L3QtdGH0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4ICovXFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogICMyOTc3RDU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuLmljb24tbWVudSB7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vQnVyZ2VyXFxyXFxuXFxyXFxuLmljb24tbWVudSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHR3aWR0aDogcmVtKDMwKTtcXHJcXG5cXHRcXHRoZWlnaHQ6IHJlbSgxOCk7XFxyXFxuXFx0XFx0ei1pbmRleDogNTtcXHJcXG5cXHRcXHRAbWVkaWEgKGFueS1ob3Zlcjogbm9uZSkge1xcclxcblxcdFxcdFxcdGN1cnNvcjogZGVmYXVsdDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0c3BhbixcXHJcXG5cXHRcXHQmOjpiZWZvcmUsXFxyXFxuXFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiByZW0oMyk7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMjk2RDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRib3R0b206IDA7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDc1JTtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0dG9wOiBjYWxjKDUwJSAtIHJlbSgxKSk7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Lm1lbnUtb3BlbiAmIHtcXHJcXG5cXHRcXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IGNhbGMoNDUlIC0gcmVtKDEpKTtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0Ym90dG9tOiBjYWxjKDUwJSAtIHJlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5mb290ZXIge1xcclxcblxcclxcblxcdFxcdC8vIC5mb290ZXJfX3RleHRcXHJcXG5cXHJcXG5cXHRcXHQmX190ZXh0IHtcXHJcXG5cXHRcXHRcXHRmb250LWZhbWlseTogXFxcIlxcXCI7XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjg2NWQ1Yzg2YTU4MjI3MmQwZGVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=