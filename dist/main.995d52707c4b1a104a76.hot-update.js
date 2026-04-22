"use strict";
self["webpackHotUpdatefls_start"]("main",{

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
.contacts__items {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.contact__item {
  display: flex;
  gap: 1.25rem;
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
@media (min-width: 99.6875em) {
  .contact__title {
    line-hidht: 2.625rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (line-hidht: clamp( 1.6875rem , 1.4522058824rem  +  1.1764705882vw , 2.625rem )) {
    .contact__title {
      line-hidht: clamp( 1.6875rem , 1.4522058824rem  +  1.1764705882vw , 2.625rem );
    }
  }
  @supports not (line-hidht: clamp( 1.6875rem , 1.4522058824rem  +  1.1764705882vw , 2.625rem )) {
    .contact__title {
      line-hidht: calc(1.6875rem + 0.9375 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .contact__title {
    line-hidht: 1.6875rem;
  }
}
.contact__title {
  font-weight: 300;
  margin-bottom: 2.5rem;
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/common.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/header.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/home.scss"],"names":[],"mappings":"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D;AACF;;AG9RA;EACC,4BAAA;AHiSD;AIlRE;EDhBF;ICiBG,kBAAA;EJqRD;AACF;AIlRC;EAEC;IDvBF;MCwBG,4EAhBc;IJoSb;EACF;EIlRA;ID3BF;MC4BG,+DAAA;IJqRC;EACF;AACF;AInRE;EDhCF;ICiCG,oBAAA;EJsRD;AACF;AIxSE;EDhBF;ICiBG,oBAAA;EJ2SD;AACF;AIxSC;EAEC;IDvBF;MCwBG,8EAhBc;IJ0Tb;EACF;EIxSA;ID3BF;MC4BG,iEAAA;IJ2SC;EACF;AACF;AIzSE;EDhCF;ICiCG,sBAAA;EJ4SD;AACF;AG9UA;EAIC,gBAAA;EACA,cAAA;EACA,iCAAA;AH6UD;;AKhZA;EACE,yBAAA;EACA,4BAAA;EACA,YAAA;EACA,eAAA;EACA,WAAA;ALmZF;AI3UE;EC7EF;ID8EG,gBAAA;EJ8UD;AACF;AI3UC;EAEC;ICpFF;MDqFG,wEAhBc;IJ6Vb;EACF;EI3UA;ICxFF;MDyFG,yDAAA;IJ8UC;EACF;AACF;AI5UE;EC7FF;ID8FG,eAAA;EJ+UD;AACF;AK9aA;EAOE,MAAA;EACA,OAAA;AL0aF;AIrWE;EC7EF;ID8EG,oBAAA;EJwWD;AACF;AIrWC;EAEC;ICpFF;MDqFG,8EAbe;IJoXd;EACF;EIrWA;ICxFF;MDyFG,gEAAA;IJwWC;EACF;AACF;AItWE;EC7FF;ID8FG,qBAAA;EJyWD;AACF;AI3XE;EC7EF;ID8EG,uBAAA;EJ8XD;AACF;AI3XC;EAEC;ICpFF;MDqFG,iFAbe;IJ0Yd;EACF;EI3XA;ICxFF;MDyFG,mEAAA;IJ8XC;EACF;AACF;AI5XE;EC7FF;ID8FG,wBAAA;EJ+XD;AACF;AK/cE;EACC,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EAEA,mBAAA;EACA,kBAAA;ALgdH;AK3cE;EACC,aAAA;EACA,mBAAA;EACA,mBAAA;AL6cH;AKrcE;EACC,YAAA;ALucH;AIjaE;ECrCC;IDsCA,gBAAA;EJoaD;AACF;AIjaC;EAEC;IC5CC;MD6CA,uEAhBc;IJmbb;EACF;EIjaA;IChDC;MDiDA,wDAAA;IJoaC;EACF;AACF;AIlaE;ECrDC;IDsDA,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D;AMjzBC;EACC,UAAA;EACA,eAAA;ANmzBF;AI1uBE;EE3ED;IF4EE,kBAAA;EJ6uBD;AACF;AI1uBC;EAEC;IElFD;MFmFE,+EAhBc;IJ4vBb;EACF;EI1uBA;IEtFD;MFuFE,6DAAA;IJ6uBC;EACF;AACF;AI3uBE;EE3FD;IF4FE,kBAAA;EJ8uBD;AACF;AMp0BC;EACE,yBAAA;ANs0BH;AInwBE;EEpED;IFqEE,sBAAA;EJswBD;AACF;AInwBC;EAEC;IE3ED;MF4EE,gFAhBc;IJqxBb;EACF;EInwBA;IE/ED;MFgFE,gEAAA;IJswBC;EACF;AACF;AIpwBE;EEpFD;IFqFE,sBAAA;EJuwBD;AACF;AIzxBE;EEpED;IFqEE,yBAAA;EJ4xBD;AACF;AIzxBC;EAEC;IE3ED;MF4EE,mFAhBc;IJ2yBb;EACF;EIzxBA;IE/ED;MFgFE,mEAAA;IJ4xBC;EACF;AACF;AI1xBE;EEpFD;IFqFE,yBAAA;EJ6xBD;AACF;AMn3BC;EAIE,kBAAA;EACA,yBAAA;ANk3BH;AInzBE;EEpED;IFqEE,kBAAA;EJszBD;AACF;AInzBC;EAEC;IE3ED;MF4EE,0EAhBc;IJq0Bb;EACF;EInzBA;IE/ED;MFgFE,0DAAA;IJszBC;EACF;AACF;AIpzBE;EEpFD;IFqFE,kBAAA;EJuzBD;AACF;AIz0BE;EEpED;IFqEE,mBAAA;EJ40BD;AACF;AIz0BC;EAEC;IE3ED;MF4EE,6EAhBc;IJ21Bb;EACF;EIz0BA;IE/ED;MFgFE,iEAAA;IJ40BC;EACF;AACF;AI10BE;EEpFD;IFqFE,sBAAA;EJ60BD;AACF;AMn6BC;EAQE,gBAAA;EACA,cAAA;AN85BH;;AO/6BA;EACE,yBAAA;APk7BF;AIv2BE;EG5EF;IH6EG,uBAAA;EJ02BD;AACF;AIv2BC;EAEC;IGnFF;MHoFG,+EAhBc;IJy3Bb;EACF;EIv2BA;IGvFF;MHwFG,gEAAA;IJ02BC;EACF;AACF;AIx2BE;EG5FF;IH6FG,qBAAA;EJ22BD;AACF;AOz8BA;EAGE,yBAAA;APy8BF;AOt8BE;EACC,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,oBAAA;APw8BH;AOv8BG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","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n//@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n//&display=swap Добавить при подключении через плагин@import url(https://fonts.googleapis.com/css?family=Shippori+Mincho:regular,500,600,700,800);\r\n// &subset=cyrillic-ext\r\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+3:300,regular&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,300,regular,500,600&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Raleway:300,regular,500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:regular,600&display=swap\");\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Poppins\";\r\n$fontSize: rem(20); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #000; // Колір шрифту за замовчуванням\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1920;\r\n// $maxWidth: 1728;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1565;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t&::before{\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tcontent: \"\";\r\n\t\t\tposition: fixed;\r\n\t\t\tinset: 0;\r\n\t\t\tbackground: rgba(0, 0, 0, 0.1);\r\n\t\t\tbackdrop-filter: blur(10px);\r\n\t\t\t-webkit-backdrop-filter: blur(10px);\r\n\t\t\topacity: 0;\r\n\t\t\tpointer-events: none;\r\n\t\t\ttransition: opacity 0.3s ease;\r\n\t\t\tz-index: 2;\r\n\t\t}\r\n\t}.menu-open &::before {\r\n\t\topacity: 1;\r\n\t\tpointer-events: auto;\r\n\t}\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: rem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: rem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","// Заголовки, загальні БЕМ блоки та інше...\r\n\r\n.page {\r\n\r\n\t\t// .page__main\r\n\r\n\t\t&__main {\r\n\t\t}\r\n\t\t&__comtacts {\r\n\t\t}\r\n}\r\n//========================================================================================================================================================\r\n.btn{\r\n\twhite-space: nowrap;\r\n\ttext-align: center;\r\n\t@include adaptiveValue(\"font-size\", 18, 13);\r\n\t\t@include adaptiveValue(\"padding-left\", 39, 24);\r\n\t\t@include adaptiveValue(\"padding-right\", 39, 24);\r\n\t\tpadding-top: rem(11);\r\n\t\tpadding-bottom: rem(11);\r\n\t\tline-height: math.div(27 , 18);\r\n\t\tborder-radius: rem(15);\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tborder-radius: rem(10); \r\n\t\t}\r\n}\r\n.button-border{\r\n\t\tfont-weight: 300;\r\n\t\tcolor: #00296D;\r\n\t\tborder: 1px solid #00296D;\r\n\t\tbackground: linear-gradient(to bottom, #44C6E9 50%, transparent 50%);\r\n      background-size: 100% 200%;\r\n      background-position: 0 100%;\r\n      transition: background-position 0.3s ease, color 0.3s ease;\r\n\t\t&:hover {\r\n      background-position: 0 0;\r\n\t\tcolor: #fff;\r\n\t}\r\n\t@media (max-width:$mobile){\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: 1px solid #666666;\r\n\t\t\tmax-width: 140px;\r\n         padding: rem(9) rem(24);\r\n\t\t\tbackground: linear-gradient(to bottom, #666666 50%, transparent 50%);\r\n\t\t\tbackground-size: 100% 200%;\r\n         background-position: 0 100%;\r\n\t\t}\r\n}\r\n\r\n.subtitle {\r\n\tfont-family: $fontFamily;\r\n\t@include adaptiveValue(\"font-size\", 20, 13);\r\n\t@include adaptiveValue(\"line-height\", 30, 20);\r\n\t\t\tfont-weight: 400;\r\n\t\t\tcolor: #2977D5;\r\n}\r\n.title{\r\n\tfont-family: $fontFamily;\r\n\tfont-weight: 600;\r\n\t@include adaptiveValue(\"font-size\", 64, 32);\r\n\t@include adaptiveValue(\"line-height\", 96, 48);\r\n}\r\n.text {\r\n\tfont-family: \"Source Sans 3\";\r\n\t@include adaptiveValue(\"font-size\", 20, 13);\r\n\t@include adaptiveValue(\"line-height\", 28, 19);\r\n\tfont-weight: 300;\r\n\tcolor: #252525;\r\n\tpadding: rem(0) rem(5) rem(0) rem(0);\r\n}","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n\t\tbackground-color: #FFF9FD;\r\n\t\ttransition: all 0.3s ease 0s;\r\n\t\tz-index: 100;\r\n\t\tposition: fixed;\r\n\t\twidth: 100%;\r\n\t\t@include adaptiveValue(\"height\",110 ,100 );\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\t@include adaptiveValue(\"padding-top\",20 ,30 );\r\n\t\t\t@include adaptiveValue(\"padding-bottom\",20 ,30 );\r\n\t\t// .header__container\r\n\t\t&._header-scroll{\r\n\t\t\t\r\n\t\t}\r\n\t\t&__container {\r\n\t\t\tz-index: 100;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\t\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\r\n\t\t// .header__logo\r\n\r\n\t\t&__logo {\r\n\t\t\tdisplay: flex;\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-icon\r\n\r\n\t\t&__logo-icon {\r\n\t\t\tz-index: 100;\r\n\t\t\timg{\r\n\t\t\t\t@include adaptiveValue(\"width\", 55, 40);\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-name\r\n\t\t\r\n\t\t&__logo-name {\r\n\t\t\tz-index: 80;\r\n\t\t\ttext-align: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\twidth: auto;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-title\r\n\t\t\r\n\t\t&__logo-title {\r\n\t\t\t@include adaptiveValue(\"font-size\", 24, 15);\r\n\t\t\tline-height: math.div(33 , 24);\r\n\t\t\tfont-weight: 600;\r\n\t\t\tmargin-bottom: rem(15);\r\n\t\t\t@include adaptiveValue(\"margin-bottom\", 15, 10);\r\n\t\t\twhite-space: nowrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-subtitle\r\n\r\n\t\t&__logo-subtitle {\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tline-height: math.div(22 , 16);\r\n\t\t\tfont-weight: 400;\r\n\t\t\twhite-space: nowrap;\r\n\t\t}\r\n\r\n\r\n\r\n\t\t// .header__menu\r\n\r\n\t\t&__menu {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__actions\r\n\r\n\t\t&__actions {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__button\r\n\r\n\t\t&__button {\r\n\t\t\tgrid-column-start: 1;\r\n         grid-column-end: 3;\r\n\t\t}\r\n}\r\n.menu {\r\n\t\tflex: 0 1 auto;\r\n\t\t// .menu__body\r\n\r\n\t\t&__body {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: -100%;\r\n\t\t\t\t// margin-top: rem(100);\r\n\t\t\t\tpadding-top: rem(138);\r\n\t\t\t\tpadding: rem(138) rem(20) rem(38) rem(20);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\tbackground-color: #FFF9FD;\r\n\t\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t\t\t.menu-open &{\r\n\t\t\t\tleft: 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t&__icons{\r\n\t\t\tdisplay: none;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tgrid-template-rows: repeat(3, 1fr);\r\n\t\t\t\tgrid-template-columns: repeat(2, auto);\r\n\t\t\t\tflex: 0 1 auto;\r\n\t\t\t\t@include adaptiveValue(\"grid-column-gap\",80 ,40 );\r\n\t\t\t\t@include adaptiveValue(\"grid-row-gap\",60 ,40 );\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__icon{\r\n\t\t\tdisplay: grid;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\r\n\t\t// .menu__list\r\n\r\n\t\t&__list {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tflex: 0 1 50%;\r\n\t\t\t@include adaptiveValue(\"column-gap\", 60, 20);\r\n\t\t\trow-gap: rem(10);\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: end;\r\n\t\t\t\trow-gap: rem(60);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .menu__item\r\n\r\n\t\t&__item {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .menu__link\r\n\r\n\t\t&__link {\r\n\t\t\tfont-size: rem(16);\r\n\t\t\tbackground: linear-gradient(to right, currentColor 0%, currentColor 100%) no-repeat;\r\n      \tbackground-size: 0 2px; /* Начальная ширина подчеркивания */\r\n         background-position: left bottom;\r\n         transition: background-size 0.3s ease;\r\n\t\t\t@media (any-hover: hover) {\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tbackground-size: 100% 2px; /* Конечная ширина подчеркивания при наведении */\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tcolor:  #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n}\r\n.icon-menu {\r\n}\r\n\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n\tdisplay: none;\r\n\t@media (max-width: $mobile) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: rem(30);\r\n\t\theight: rem(18);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tleft: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: rem(3);\r\n\t\t\tbackground-color: #00296D;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 75%;\r\n\t\t\t\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - rem(1));\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(45% - rem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - rem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n","//====================================================================================================\r\n.footer {\r\n\twidth: 100%;\r\n\t&__map{\r\n\t\tz-index: 1;\r\n\t\tmin-width: 100%;\r\n\t\t@include adaptiveValue(\"height\", 575, 393);\r\n\t}\r\n\t// .footer__text\r\n\t\r\n\t&__text {\r\n\t\t\tbackground-color: #252525;\r\n\t\t\t@include adaptiveValue(\"padding-top\", 13, 7);\r\n\t\t\t@include adaptiveValue(\"padding-bottom\", 13, 7);\r\n\t\t\ttext-align: center;\r\n\t\t\tfont-family: \"Montserrat\";\r\n\t\t\t@include adaptiveValue(\"font-size\", 20, 12);\r\n\t\t\t@include adaptiveValue(\"line-height\", 24, 15);\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #FFF9FD;\r\n\t\t}\r\n}\r\n\r\n//====================================================================================================\r\n","//====================================================================================================\r\n\r\n.main {\r\n\t\tbackground-color: #FFF9FD;\r\n\t\t@include adaptiveValue(\"padding-top\", 167,114 );\r\n\t\tpadding-bottom: rem(57);\r\n\t\t// .main__container\r\n\r\n\t\t&__container {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\talign-items: center;\r\n\t\t\tcolumn-gap: rem(30);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__content\r\n\r\n\t\t&__content {\r\n\t\t\tflex: 0 1 30%;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\t@include adaptiveValue(\"row-gap\", 60, 20);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\torder: 1;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__subtitle\r\n\r\n\t\t&__subtitle {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .main__title\r\n\r\n\t\t&__title {\r\n\t\t\tspan{\r\n\t\t\t\tcolor: #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__text\r\n\r\n\t\t&__text {\r\n\t\t}\r\n\r\n\t\t// .main__battons\r\n\r\n\t\t&__battons {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tgap: rem(15);\r\n\t\t}\r\n\r\n\t\t// .main__button-blue\r\n\r\n\t\t&__button-blue {\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #00296D;\r\n\t\t\tline-height: rem(27);\r\n\t\t\tbackground-color:#44C6E9;\r\n\t\t\tbox-shadow: -2px 7px 0px 0px #2977D5;\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t&:active{\r\n\t\t\t\ttransform: translateY(7px);\r\n\t\t\t\tbox-shadow: 0px 0px 0px 0px #2977D5;\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tbox-shadow: -2px 3px 0px 0px #2977D5;\r\n\t\t\t}\r\n\t\t\t@media (any-hover: hover){\r\n\t\t\t\t&:hover{\r\n\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__button-clear\r\n\r\n\t\t&__button-clear {\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tfont-weight: 400;\r\n\t\t\tline-height: rem(24);\r\n\t\t\ttext-decoration: underline;\r\n\t\t\ttext-underline-offset: 5px;\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: none;\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t@media (any-hover: hover){\r\n\t\t\t\t&:hover{\r\n\t\t\t\t\tcolor: #080707;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tborder: 1px solid #666666;\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__image\r\n\r\n\t\t&__image {\r\n\t\t\torder: 0;\r\n\t\t\tflex: 0 1 auto;\r\n\t\t\tposition: relative;\r\n\t\t\t@include adaptiveValue(\"padding-left\",150 ,0 );\r\n\t\t\t@include adaptiveValue(\"padding-right\",150 ,50 );\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t@include adaptiveValue(\"padding-left\",0 ,50 );\r\n\t\t\t\t@include adaptiveValue(\"padding-right\",0 ,50 );\r\n\t\t\t\torder: 0;\r\n\t\t\t\tmargin-bottom: rem(40);\r\n\t\t\t}\r\n\t\t\timg{\r\n\t\t\t\tposition: relative;\r\n\t\t\t\theight: auto;\r\n\t\t\t\tz-index: 2;\r\n\t\t\t\twidth: clamp(297px, 40vw, 595px);\r\n            aspect-ratio: 595 / 893;\r\n            object-fit: cover;\r\n\t\t\t}\r\n\t\t\t&::before{\r\n\t\t\t\tcontent: \"\";\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\t\twidth: clamp(535px, 50vw, 893px);\r\n            aspect-ratio: 1 / 1;\r\n\t\t\t\tbackground: #00296D;\r\n\t\t\t\tborder-radius: 50%;\r\n\t\t\t\tbackground: linear-gradient(180deg,rgba(212, 228, 244, 1) 15%, rgba(68, 198, 233, 1) 45%, rgba(41, 119, 213, 1) 70%, rgba(0, 41, 109, 1) 100%);\r\n\t\t\t\tz-index: 1;\r\n\t\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\ttransform: translate(-40%, -55%);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n}\r\n\r\n//====================================================================================================\r\n\r\n.contacts {\r\n\tbackground-color: #D4E4F4;\r\n\t\t@include adaptiveValue(\"padding-top\",72 ,60 );\r\n\t\t@include adaptiveValue(\"padding-bottom\",72 ,60 );\r\n\t\t// .contacts__container\r\n\r\n\t\t&__container {\r\n\t\t}\r\n\r\n\t\t// .contacts__items\r\n\r\n\t\t&__items {\r\n\t\t\t// max-width: rem(1286);\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-around;\r\n\t\t}\r\n}\r\n.contact {\r\n\r\n\t\t// .contact__item\r\n\r\n\t\t&__item {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: rem(20);\r\n\t\t}\r\n\r\n\t\t// .contact__icon\r\n\r\n\t\t&__icon {\r\n\t\t}\r\n\r\n\t\t// .contact__content\r\n\r\n\t\t&__content {\r\n\t\t}\r\n\r\n\t\t// .contact__title\r\n\r\n\t\t&__title {\r\n\t\t\t@include adaptiveValue(\"font-size\",28, 18 );\r\n\t\t\t@include adaptiveValue(\"line-hidht\",42 , 27 );\r\n\t\t\tfont-weight: 300;\r\n\t\t\tmargin-bottom: rem(40);\r\n\t\t}\r\n\r\n\t\t// .contact__text\r\n\r\n\t\t&__text {\r\n\t\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("08bcb92df21569dff332")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45OTVkNTI3MDdjNGIxYTEwNGE3Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSUFBc0k7QUFDdEksNElBQTRJO0FBQzVJLG9JQUFvSTtBQUNwSSwySEFBMkg7QUFDM0gscUhBQXFIO0FBQ3JILGtJQUFrSTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzVkFBc1YsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLFNBQVMsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLHNCQUFzQixXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssc0JBQXNCLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFX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QTZDLDZDQUE2QyxvQ0FBb0MsZ0NBQWdDLCtCQUErQiwySkFBMkosdUJBQXVCLHVDQUF1QywrQ0FBK0MsYUFBYSxXQUFXLFNBQVMsS0FBSyxpSUFBaUksZ0NBQWdDLHdEQUF3RCwyREFBMkQseURBQXlELFNBQVMscURBQXFELGtDQUFrQyx3QkFBd0IsOEJBQThCLHdDQUF3QyxTQUFTLEtBQUssY0FBYyxrREFBa0Qsd0JBQXdCLHVCQUF1QixTQUFTLGtEQUFrRCxTQUFTLHdEQUF3RCxTQUFTLG9EQUFvRCx3REFBd0QsMERBQTBELDJCQUEyQixpQ0FBaUMsU0FBUyxrREFBa0QsU0FBUyxLQUFLLHVCQUF1QjtBQUNoOHZDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQy95Q3ZDLHNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucyszOjMwMCxyZWd1bGFyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoxMDAsMzAwLHJlZ3VsYXIsNTAwLDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLHJlZ3VsYXIsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczpyZWd1bGFyLDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLmxvY2sgYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcbn1cbi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC53cmFwcGVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGluc2V0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG59XG4ubWVudS1vcGVuIC53cmFwcGVyOjpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbkBzdXBwb3J0cyAob3ZlcmZsb3c6IGNsaXApIHtcbiAgLndyYXBwZXIge1xuICAgIG92ZXJmbG93OiBjbGlwO1xuICB9XG59XG4ud3JhcHBlciA+IG1haW4ge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi53cmFwcGVyID4gKiB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLypcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxu0LLRgdGW0YUg0LrQu9Cw0YHRltCyLCDRidC+INC80ZbRgdGC0Y/RgtGMICpfX2NvbnRhaW5lclxu0J3QsNC/0YDQuNC60LvQsNC0IGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0ZYg0YIu0L8uXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxuKi9cbltjbGFzcyo9X19jb250YWluZXJdIHtcbiAgbWF4LXdpZHRoOiA5OS42ODc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjkzNzVyZW07XG59XG5cbltjbGFzcyo9LWliZ10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5bY2xhc3MqPS1pYmddIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuW2NsYXNzKj0taWJnX2NvbnRhaW5dIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5idG4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MzQwNjg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDEuMTI1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzM0MDY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAxLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuODEyNXJlbSArIDAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuNXJlbSArIDAuOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy1yaWdodDogMi40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMS41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gIH1cbn1cbi5idG4ge1xuICBwYWRkaW5nLXRvcDogMC42ODc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42ODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjkzNzVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgfVxufVxuXG4uYnV0dG9uLWJvcmRlciB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAyOTZEO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAyOTZEO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNDRDNkU5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjNzIGVhc2UsIGNvbG9yIDAuM3MgZWFzZTtcbn1cbi5idXR0b24tYm9yZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5idXR0b24tYm9yZGVyIHtcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xuICAgIG1heC13aWR0aDogMTQwcHg7XG4gICAgcGFkZGluZzogMC41NjI1cmVtIDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNjY2NjY2IDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XG4gIH1cbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjcwMjY5NjA3ODRyZW0gICsgIDAuNTQ5MDE5NjA3OHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzAyNjk2MDc4NHJlbSAgKyAgMC41NDkwMTk2MDc4dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzAyNjk2MDc4NHJlbSAgKyAgMC41NDkwMTk2MDc4dncgLCAxLjI1cmVtICkpIHtcbiAgICAuc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuODEyNXJlbSArIDAuNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuc3VidGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsaW5lLWhlaWdodDogY2xhbXAoIDEuMjVyZW0gLCAxLjA5MzEzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBsaW5lLWhlaWdodDogY2xhbXAoIDEuMjVyZW0gLCAxLjA5MzEzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGluZS1oZWlnaHQ6IGNsYW1wKCAxLjI1cmVtICwgMS4wOTMxMzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuc3VidGl0bGUge1xuICAgICAgbGluZS1oZWlnaHQ6IGNhbGMoMS4yNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3VidGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICB9XG59XG4uc3VidGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzI5NzdENTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAycmVtICwgMS40OTgwMzkyMTU3cmVtICArICAyLjUwOTgwMzkyMTZ2dyAsIDRyZW0gKSkge1xuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAycmVtICwgMS40OTgwMzkyMTU3cmVtICArICAyLjUwOTgwMzkyMTZ2dyAsIDRyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMnJlbSAsIDEuNDk4MDM5MjE1N3JlbSAgKyAgMi41MDk4MDM5MjE2dncgLCA0cmVtICkpIHtcbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAyICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAudGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGxpbmUtaGVpZ2h0OiBjbGFtcCggM3JlbSAsIDIuMjQ3MDU4ODIzNXJlbSAgKyAgMy43NjQ3MDU4ODI0dncgLCA2cmVtICkpIHtcbiAgICAudGl0bGUge1xuICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKCAzcmVtICwgMi4yNDcwNTg4MjM1cmVtICArICAzLjc2NDcwNTg4MjR2dyAsIDZyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGluZS1oZWlnaHQ6IGNsYW1wKCAzcmVtICwgMi4yNDcwNTg4MjM1cmVtICArICAzLjc2NDcwNTg4MjR2dyAsIDZyZW0gKSkge1xuICAgIC50aXRsZSB7XG4gICAgICBsaW5lLWhlaWdodDogY2FsYygzcmVtICsgMyAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxufVxuXG4udGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIDNcIjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjcwMjY5NjA3ODRyZW0gICsgIDAuNTQ5MDE5NjA3OHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLnRleHQge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MDI2OTYwNzg0cmVtICArICAwLjU0OTAxOTYwNzh2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MDI2OTYwNzg0cmVtICArICAwLjU0OTAxOTYwNzh2dyAsIDEuMjVyZW0gKSkge1xuICAgIC50ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjgxMjVyZW0gKyAwLjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50ZXh0IHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAudGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGluZS1oZWlnaHQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAxLjA0NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS43NXJlbSApKSB7XG4gICAgLnRleHQge1xuICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAxLjA0NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsaW5lLWhlaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDEuMDQ2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjc1cmVtICkpIHtcbiAgICAudGV4dCB7XG4gICAgICBsaW5lLWhlaWdodDogY2FsYygxLjE4NzVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMS4xODc1cmVtO1xuICB9XG59XG4udGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMjUyNTI1O1xuICBwYWRkaW5nOiAwcmVtIDAuMzEyNXJlbSAwcmVtIDByZW07XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUZEO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXIge1xuICAgIGhlaWdodDogNi44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggNi4yNXJlbSAsIDYuMDkzMTM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCA2Ljg3NXJlbSApKSB7XG4gICAgLmhlYWRlciB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCA2LjI1cmVtICwgNi4wOTMxMzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDYuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDYuMjVyZW0gLCA2LjA5MzEzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgNi44NzVyZW0gKSkge1xuICAgIC5oZWFkZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKDYuMjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlciB7XG4gICAgaGVpZ2h0OiA2LjI1cmVtO1xuICB9XG59XG4uaGVhZGVyIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAyLjAzMTg2Mjc0NTFyZW0gICsgIC0wLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDIuMDMxODYyNzQ1MXJlbSAgKyAgLTAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMi4wMzE4NjI3NDUxcmVtICArICAtMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLmhlYWRlciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygxLjg3NXJlbSArIC0wLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDIuMDMxODYyNzQ1MXJlbSAgKyAgLTAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5oZWFkZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMi4wMzE4NjI3NDUxcmVtICArICAtMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAyLjAzMTg2Mjc0NTFyZW0gICsgIC0wLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEuODc1cmVtICsgLTAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS44NzVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2NvbnRhaW5lciB7XG4gIHotaW5kZXg6IDEwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2xvZ28taWNvbiB7XG4gIHotaW5kZXg6IDEwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby1pY29uIGltZyB7XG4gICAgd2lkdGg6IDMuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDIuNXJlbSAsIDIuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAzLjQzNzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAyLjVyZW0gLCAyLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMy40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMi41cmVtICwgMi4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDMuNDM3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1pY29uIGltZyB7XG4gICAgICB3aWR0aDogY2FsYygyLjVyZW0gKyAwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgIHdpZHRoOiAyLjVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28tbmFtZSB7XG4gIHotaW5kZXg6IDgwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLW5hbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjkzNzVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjU0NjU2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTQ2NTY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAwLjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC41NDY1Njg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuNjI1cmVtICsgMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC43NXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5oZWFkZXJfX2FjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fYnV0dG9uIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbn1cblxuLm1lbnUge1xuICBmbGV4OiAwIDEgYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogOC42MjVyZW07XG4gICAgcGFkZGluZzogOC42MjVyZW0gMS4yNXJlbSAyLjM3NXJlbSAxLjI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB9XG4gIC5tZW51LW9wZW4gLm1lbnVfX2JvZHkge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbi5tZW51X19pY29ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtY29sdW1uLWdhcDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ3JpZC1jb2x1bW4tZ2FwOiBjbGFtcCggMi41cmVtICwgMS44NzI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgNXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogY2xhbXAoIDIuNXJlbSAsIDEuODcyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ3JpZC1jb2x1bW4tZ2FwOiBjbGFtcCggMi41cmVtICwgMS44NzI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgNXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogY2FsYygyLjVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtY29sdW1uLWdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtcm93LWdhcDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ3JpZC1yb3ctZ2FwOiBjbGFtcCggMi41cmVtICwgMi4xODYyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtcm93LWdhcDogY2xhbXAoIDIuNXJlbSAsIDIuMTg2Mjc0NTA5OHJlbSAgKyAgMS41Njg2Mjc0NTF2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ3JpZC1yb3ctZ2FwOiBjbGFtcCggMi41cmVtICwgMi4xODYyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtcm93LWdhcDogY2FsYygyLjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2ljb25zIHtcbiAgICBncmlkLXJvdy1nYXA6IDIuNXJlbTtcbiAgfVxufVxuLm1lbnVfX2ljb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tZW51X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMSA1MCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBjb2x1bW4tZ2FwOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGNvbHVtbi1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC42MjI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgY29sdW1uLWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGNvbHVtbi1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC42MjI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgY29sdW1uLWdhcDogY2FsYygxLjI1cmVtICsgMi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgfVxufVxuLm1lbnVfX2xpc3Qge1xuICByb3ctZ2FwOiAwLjYyNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICByb3ctZ2FwOiAzLjc1cmVtO1xuICB9XG59XG4ubWVudV9fbGluayB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBjdXJyZW50Q29sb3IgMCUsIGN1cnJlbnRDb2xvciAxMDAlKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMCAycHg7IC8qINCd0LDRh9Cw0LvRjNC90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8gKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGVhc2U7XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLm1lbnVfX2xpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7IC8qINCa0L7QvdC10YfQvdCw0Y8g0YjQuNGA0LjQvdCwINC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNGPINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIGNvbG9yOiAjMjk3N0Q1O1xuICB9XG59XG5cbi5pY29uLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmljb24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgICBoZWlnaHQ6IDEuMTI1cmVtO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKGFueS1ob3Zlcjogbm9uZSkge1xuICAuaWNvbi1tZW51IHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5pY29uLW1lbnUgc3BhbiwgLmljb24tbWVudTo6YmVmb3JlLCAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMC4xODc1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDI5NkQ7XG4gIH1cbiAgLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogY2FsYyg0NSUgLSAwLjA2MjVyZW0pO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb290ZXJfX21hcCB7XG4gIHotaW5kZXg6IDE7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmZvb3Rlcl9fbWFwIHtcbiAgICBoZWlnaHQ6IDM1LjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMjQuNTYyNXJlbSAsIDIxLjcwNzU5ODAzOTJyZW0gICsgIDE0LjI3NDUwOTgwMzl2dyAsIDM1LjkzNzVyZW0gKSkge1xuICAgIC5mb290ZXJfX21hcCB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAyNC41NjI1cmVtICwgMjEuNzA3NTk4MDM5MnJlbSAgKyAgMTQuMjc0NTA5ODAzOXZ3ICwgMzUuOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAyNC41NjI1cmVtICwgMjEuNzA3NTk4MDM5MnJlbSAgKyAgMTQuMjc0NTA5ODAzOXZ3ICwgMzUuOTM3NXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fbWFwIHtcbiAgICAgIGhlaWdodDogY2FsYygyNC41NjI1cmVtICsgMTEuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyX19tYXAge1xuICAgIGhlaWdodDogMjQuNTYyNXJlbTtcbiAgfVxufVxuLmZvb3Rlcl9fdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5mb290ZXJfX3RleHQge1xuICAgIHBhZGRpbmctdG9wOiAwLjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAwLjQzNzVyZW0gLCAwLjM0MzM4MjM1MjlyZW0gICsgIDAuNDcwNTg4MjM1M3Z3ICwgMC44MTI1cmVtICkpIHtcbiAgICAuZm9vdGVyX190ZXh0IHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMC40Mzc1cmVtICwgMC4zNDMzODIzNTI5cmVtICArICAwLjQ3MDU4ODIzNTN2dyAsIDAuODEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDAuNDM3NXJlbSAsIDAuMzQzMzgyMzUyOXJlbSAgKyAgMC40NzA1ODgyMzUzdncgLCAwLjgxMjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMC40Mzc1cmVtICsgMC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXJfX3RleHQge1xuICAgIHBhZGRpbmctdG9wOiAwLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNDM3NXJlbSAsIDAuMzQzMzgyMzUyOXJlbSAgKyAgMC40NzA1ODgyMzUzdncgLCAwLjgxMjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAwLjQzNzVyZW0gLCAwLjM0MzM4MjM1MjlyZW0gICsgIDAuNDcwNTg4MjM1M3Z3ICwgMC44MTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC40Mzc1cmVtICwgMC4zNDMzODIzNTI5cmVtICArICAwLjQ3MDU4ODIzNTN2dyAsIDAuODEyNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygwLjQzNzVyZW0gKyAwLjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNDM3NXJlbTtcbiAgfVxufVxuLmZvb3Rlcl9fdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuZm9vdGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjI0NTA5ODAzOXJlbSAgKyAgMC42Mjc0NTA5ODA0dncgLCAxLjI1cmVtICkpIHtcbiAgICAuZm9vdGVyX190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjYyNDUwOTgwMzlyZW0gICsgIDAuNjI3NDUwOTgwNHZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42MjQ1MDk4MDM5cmVtICArICAwLjYyNzQ1MDk4MDR2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNzVyZW0gKyAwLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXJfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuZm9vdGVyX190ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGxpbmUtaGVpZ2h0OiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgICBsaW5lLWhlaWdodDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGluZS1oZWlnaHQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICkpIHtcbiAgICAuZm9vdGVyX190ZXh0IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDAuOTM3NXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDAuOTM3NXJlbTtcbiAgfVxufVxuLmZvb3Rlcl9fdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjRkZGOUZEO1xufVxuXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tYWluIHtcbiAgICBwYWRkaW5nLXRvcDogMTAuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDcuMTI1cmVtICwgNi4yOTM2Mjc0NTFyZW0gICsgIDQuMTU2ODYyNzQ1MXZ3ICwgMTAuNDM3NXJlbSApKSB7XG4gICAgLm1haW4ge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCA3LjEyNXJlbSAsIDYuMjkzNjI3NDUxcmVtICArICA0LjE1Njg2Mjc0NTF2dyAsIDEwLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCA3LjEyNXJlbSAsIDYuMjkzNjI3NDUxcmVtICArICA0LjE1Njg2Mjc0NTF2dyAsIDEwLjQzNzVyZW0gKSkge1xuICAgIC5tYWluIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDcuMTI1cmVtICsgMy4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbiB7XG4gICAgcGFkZGluZy10b3A6IDcuMTI1cmVtO1xuICB9XG59XG4ubWFpbiB7XG4gIHBhZGRpbmctYm90dG9tOiAzLjU2MjVyZW07XG59XG4ubWFpbl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxLjg3NXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tYWluX19jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5tYWluX19jb250ZW50IHtcbiAgZmxleDogMCAxIDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW5fX2NvbnRlbnQge1xuICAgIHJvdy1nYXA6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocm93LWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWFpbl9fY29udGVudCB7XG4gICAgICByb3ctZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNjIyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocm93LWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWFpbl9fY29udGVudCB7XG4gICAgICByb3ctZ2FwOiBjYWxjKDEuMjVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tYWluX19jb250ZW50IHtcbiAgICByb3ctZ2FwOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWFpbl9fY29udGVudCB7XG4gICAgb3JkZXI6IDE7XG4gIH1cbn1cbi5tYWluX190aXRsZSBzcGFuIHtcbiAgY29sb3I6ICMyOTc3RDU7XG59XG4ubWFpbl9fYmF0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAwLjkzNzVyZW07XG59XG4ubWFpbl9fYnV0dG9uLWJsdWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMjk2RDtcbiAgbGluZS1oZWlnaHQ6IDEuNjg3NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0QzZFOTtcbiAgYm94LXNoYWRvdzogLTJweCA3cHggMHB4IDBweCAjMjk3N0Q1O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuLm1haW5fX2J1dHRvbi1ibHVlOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3cHgpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzI5NzdENTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tYWluX19idXR0b24tYmx1ZSB7XG4gICAgYm94LXNoYWRvdzogLTJweCAzcHggMHB4IDBweCAjMjk3N0Q1O1xuICB9XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLm1haW5fX2J1dHRvbi1ibHVlOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWFpbl9fYnV0dG9uLWNsZWFyIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKSkge1xuICAgIC5tYWluX19idXR0b24tY2xlYXIge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKSkge1xuICAgIC5tYWluX19idXR0b24tY2xlYXIge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNzVyZW0gKyAwLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbl9fYnV0dG9uLWNsZWFyIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbi5tYWluX19idXR0b24tY2xlYXIge1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA1cHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLm1haW5fX2J1dHRvbi1jbGVhcjpob3ZlciB7XG4gICAgY29sb3I6ICMwODA3MDc7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tYWluX19idXR0b24tY2xlYXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY2NjY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG4ubWFpbl9faW1hZ2Uge1xuICBvcmRlcjogMDtcbiAgZmxleDogMCAxIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW5fX2ltYWdlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDkuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0yLjM1Mjk0MTA5ODNyZW0gICsgIDExLjc2NDcwNTgwMzl2dyAsIDkuMzc1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTIuMzUyOTQxMDk4M3JlbSAgKyAgMTEuNzY0NzA1ODAzOXZ3ICwgOS4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTIuMzUyOTQxMDk4M3JlbSAgKyAgMTEuNzY0NzA1ODAzOXZ3ICwgOS4zNzVyZW0gKSkge1xuICAgIC5tYWluX19pbWFnZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgOS4zNzQ5OTk5Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctbGVmdDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgcGFkZGluZy1yaWdodDogOS4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMS41NTYzNzI1NDlyZW0gICsgIDcuODQzMTM3MjU0OXZ3ICwgOS4zNzVyZW0gKSkge1xuICAgIC5tYWluX19pbWFnZSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjU1NjM3MjU0OXJlbSAgKyAgNy44NDMxMzcyNTQ5dncgLCA5LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjU1NjM3MjU0OXJlbSAgKyAgNy44NDMxMzcyNTQ5dncgLCA5LjM3NXJlbSApKSB7XG4gICAgLm1haW5fX2ltYWdlIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMy4xMjVyZW0gKyA2LjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIG9yZGVyOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW5fX2ltYWdlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMDAwMDAwMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIDMuOTA5MzEzNzA5OHJlbSAgKyAgLTMuOTIxNTY4NTQ5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLm1haW5fX2ltYWdlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygzLjEyNXJlbSArIC0zLjEyNDk5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIDMuOTA5MzEzNzA5OHJlbSAgKyAgLTMuOTIxNTY4NTQ5dncgLCAzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygzLjEyNXJlbSArIC0zLjEyNDk5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuMTI1cmVtO1xuICB9XG59XG4ubWFpbl9faW1hZ2UgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiBjbGFtcCgyOTdweCwgNDB2dywgNTk1cHgpO1xuICBhc3BlY3QtcmF0aW86IDU5NS84OTM7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLm1haW5fX2ltYWdlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogY2xhbXAoNTM1cHgsIDUwdncsIDg5M3B4KTtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGJhY2tncm91bmQ6ICMwMDI5NkQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDIxMiwgMjI4LCAyNDQpIDE1JSwgcmdiKDY4LCAxOTgsIDIzMykgNDUlLCByZ2IoNDEsIDExOSwgMjEzKSA3MCUsIHJnYigwLCA0MSwgMTA5KSAxMDAlKTtcbiAgei1pbmRleDogMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tYWluX19pbWFnZTo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNTUlKTtcbiAgfVxufVxuXG4uY29udGFjdHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFNEY0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuY29udGFjdHMge1xuICAgIHBhZGRpbmctdG9wOiA0LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAzLjc1cmVtICwgMy41NjE3NjQ3MDU5cmVtICArICAwLjk0MTE3NjQ3MDZ2dyAsIDQuNXJlbSApKSB7XG4gICAgLmNvbnRhY3RzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMy43NXJlbSAsIDMuNTYxNzY0NzA1OXJlbSAgKyAgMC45NDExNzY0NzA2dncgLCA0LjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAzLjc1cmVtICwgMy41NjE3NjQ3MDU5cmVtICArICAwLjk0MTE3NjQ3MDZ2dyAsIDQuNXJlbSApKSB7XG4gICAgLmNvbnRhY3RzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDMuNzVyZW0gKyAwLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY29udGFjdHMge1xuICAgIHBhZGRpbmctdG9wOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5jb250YWN0cyB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAzLjU2MTc2NDcwNTlyZW0gICsgIDAuOTQxMTc2NDcwNnZ3ICwgNC41cmVtICkpIHtcbiAgICAuY29udGFjdHMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMy41NjE3NjQ3MDU5cmVtICArICAwLjk0MTE3NjQ3MDZ2dyAsIDQuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAzLjU2MTc2NDcwNTlyZW0gICsgIDAuOTQxMTc2NDcwNnZ3ICwgNC41cmVtICkpIHtcbiAgICAuY29udGFjdHMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMy43NXJlbSArIDAuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jb250YWN0cyB7XG4gICAgcGFkZGluZy1ib3R0b206IDMuNzVyZW07XG4gIH1cbn1cbi5jb250YWN0c19faXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmNvbnRhY3RfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuMjVyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5jb250YWN0X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMC45NjgxMzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDEuNzVyZW0gKSkge1xuICAgIC5jb250YWN0X190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDAuOTY4MTM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCAxLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMC45NjgxMzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDEuNzVyZW0gKSkge1xuICAgIC5jb250YWN0X190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS4xMjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNvbnRhY3RfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5jb250YWN0X190aXRsZSB7XG4gICAgbGluZS1oaWRodDogMi42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGluZS1oaWRodDogY2xhbXAoIDEuNjg3NXJlbSAsIDEuNDUyMjA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjYyNXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX3RpdGxlIHtcbiAgICAgIGxpbmUtaGlkaHQ6IGNsYW1wKCAxLjY4NzVyZW0gLCAxLjQ1MjIwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGluZS1oaWRodDogY2xhbXAoIDEuNjg3NXJlbSAsIDEuNDUyMjA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjYyNXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX3RpdGxlIHtcbiAgICAgIGxpbmUtaGlkaHQ6IGNhbGMoMS42ODc1cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY29udGFjdF9fdGl0bGUge1xuICAgIGxpbmUtaGlkaHQ6IDEuNjg3NXJlbTtcbiAgfVxufVxuLmNvbnRhY3RfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9udWxsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvaG9tZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRFFEOztBQ05BOzs7RUFHQyxzQkFBQTtBRFNEOztBQ0NBOztFQUVDLFlBQUE7RUFDQSxnQkFBQTtBREVEOztBQ0FBO0VBQ0MsV0RRVztFQ1BYLGNBQUE7RUFDQSxzQkRFWTtFQ0RaLGtCREVVO0VDQVYsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBREVEOztBQ0FBOzs7RUFHQyxzQkRWWTtFQ1daLGtC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QUlHLGdCQUFBO0VBQ0EsY0FBQTtBSHFQSDs7QUduUEE7RUFDQyxzQkg3Qlk7RUc4QlosZ0JBQUE7QUhzUEQ7QUlsT0U7RUR0QkY7SUN1QkcsZUFBQTtFSnFPRDtBQUNGO0FJbE9DO0VBRUM7SUQ3QkY7TUM4Qkcsb0VBaEJjO0lKb1BiO0VBQ0Y7RUlsT0E7SURqQ0Y7TUNrQ0cscURBQUE7SUpxT0M7RUFDRjtBQUNGO0FJbk9FO0VEdENGO0lDdUNHLGVBQUE7RUpzT0Q7QUFDRjtBSXhQRTtFRHRCRjtJQ3VCRyxpQkFBQTtFSjJQRDtBQUNGO0FJeFBDO0VBRUM7SUQ3QkY7TUM4Qkcsc0VBaEJjO0lKMFFiO0VBQ0Y7RUl4UEE7SURqQ0Y7TUNrQ0csdURBQUE7SUoyUEM7RUFDRjtBQUNGO0FJelBFO0VEdENGO0lDdUNHLGlCQUFBO0VKNFBEO0FBQ0Y7O0FHOVJBO0VBQ0MsNEJBQUE7QUhpU0Q7QUlsUkU7RURoQkY7SUNpQkcsa0JBQUE7RUpxUkQ7QUFDRjtBSWxSQztFQUVDO0lEdkJGO01Dd0JHLDRFQWhCYztJSm9TYjtFQUNGO0VJbFJBO0lEM0JGO01DNEJHLCtEQUFBO0lKcVJDO0VBQ0Y7QUFDRjtBSW5SRTtFRGhDRjtJQ2lDRyxvQkFBQTtFSnNSRDtBQUNGO0FJeFNFO0VEaEJGO0lDaUJHLG9CQUFBO0VKMlNEO0FBQ0Y7QUl4U0M7RUFFQztJRHZCRjtNQ3dCRyw4RUFoQmM7SUowVGI7RUFDRjtFSXhTQTtJRDNCRjtNQzRCRyxpRUFBQTtJSjJTQztFQUNGO0FBQ0Y7QUl6U0U7RURoQ0Y7SUNpQ0csc0JBQUE7RUo0U0Q7QUFDRjtBRzlVQTtFQUlDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FINlVEOztBS2haQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUxtWkY7QUkzVUU7RUM3RUY7SUQ4RUcsZ0JBQUE7RUo4VUQ7QUFDRjtBSTNVQztFQUVDO0lDcEZGO01EcUZHLHdFQWhCYztJSjZWYjtFQUNGO0VJM1VBO0lDeEZGO01EeUZHLHlEQUFBO0lK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O0VBSUUsa0JBQUE7RUFDQSx5QkFBQTtBTmszQkg7QUluekJFO0VFcEVEO0lGcUVFLGtCQUFBO0VKc3pCRDtBQUNGO0FJbnpCQztFQUVDO0lFM0VEO01GNEVFLDBFQWhCYztJSnEwQmI7RUFDRjtFSW56QkE7SUUvRUQ7TUZnRkUsMERBQUE7SUpzekJDO0VBQ0Y7QUFDRjtBSXB6QkU7RUVwRkQ7SUZxRkUsa0JBQUE7RUp1ekJEO0FBQ0Y7QUl6MEJFO0VFcEVEO0lGcUVFLG1CQUFBO0VKNDBCRDtBQUNGO0FJejBCQztFQUVDO0lFM0VEO01GNEVFLDZFQWhCYztJSjIxQmI7RUFDRjtFSXowQkE7SUUvRUQ7TUZnRkUsaUVBQUE7SUo0MEJDO0VBQ0Y7QUFDRjtBSTEwQkU7RUVwRkQ7SUZxRkUsc0JBQUE7RUo2MEJEO0FBQ0Y7QU1uNkJDO0VBUUUsZ0JBQUE7RUFDQSxjQUFBO0FOODVCSDs7QU8vNkJBO0VBQ0UseUJBQUE7QVBrN0JGO0FJdjJCRTtFRzVFRjtJSDZFRyx1QkFBQTtFSjAyQkQ7QUFDRjtBSXYyQkM7RUFFQztJR25GRjtNSG9GRywrRUFoQmM7SUp5M0JiO0VBQ0Y7RUl2MkJBO0lHdkZGO01Id0ZHLGdFQUFBO0lKMDJCQztFQUNGO0FBQ0Y7QUl4MkJFO0VHNUZGO0lINkZHLHFCQUFBO0VKMjJCRDtBQUNGO0FPejhCQTtFQUdFLHlCQUFBO0FQeThCRjtBT3Q4QkU7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FQdzhCSDtBT3Y4Qkc7RUFMRDtJQU1FLHNCQUFBO0VQMDhCRjtBQUNGO0FPcjhCRTtFQUNDLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QVB1OEJIO0FJaDVCRTtFRzFEQTtJSDJEQyxnQkFBQTtFSm01QkQ7QUFDRjtBSWg1QkM7RUFFQztJR2pFQTtNSGtFQyx1RUFoQmM7SUprNkJiO0VBQ0Y7RUloNUJBO0lHckVBO01Ic0VDLHdEQUFBO0lKbTVCQztFQUNGO0FBQ0Y7QUlqNUJFO0VHMUVBO0lIMkVDLGdCQUFBO0VKbzVCRDtBQUNGO0FPMzlCRztFQUxE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SUo0cENiO0VBQ0Y7RUkxb0NBO0lHd0RGO01IdkRHLGdFQUFBO0lKNm9DQztFQUNGO0FBQ0Y7QUkzb0NFO0VHbURGO0lIbERHLHVCQUFBO0VKOG9DRDtBQUNGO0FPbGxDRTtFQUVDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FQbWxDSDs7QU81a0NFO0VBQ0MsYUFBQTtFQUNBLFlBQUE7QVAra0NIO0FJMXFDRTtFRzBHQTtJSHpHQyxrQkFBQTtFSjZxQ0Q7QUFDRjtBSTFxQ0M7RUFFQztJR21HQTtNSGxHQywyRUFoQmM7SUo0ckNiO0VBQ0Y7RUkxcUNBO0lHK0ZBO01IOUZDLDZEQUFBO0lKNnFDQztFQUNGO0FBQ0Y7QUkzcUNFO0VHMEZBO0lIekZDLG1CQUFBO0VKOHFDRDtBQUNGO0FJaHNDRTtFRzBHQTtJSHpHQyxvQkFBQTtFSm1zQ0Q7QUFDRjtBSWhzQ0M7RUFFQztJR21HQTtNSGxHQyw4RUFoQmM7SUprdENiO0VBQ0Y7RUloc0NBO0lHK0ZBO01IOUZDLGdFQUFBO0lKbXNDQztFQUNGO0FBQ0Y7QUlqc0NFO0VHMEZBO0lIekZDLHFCQUFBO0VKb3NDRDtBQUNGO0FPNW1DRTtFQUdDLGdCQUFBO0VBQ0EscUJBQUE7QVA0bUNIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQvNGW0LrRgdC40L3RltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGI0YDQuNGE0YLRltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vJmRpc3BsYXk9c3dhcCAtINC00L7QtNCw0YLQuCDQv9GA0Lgg0L/RltC00LrQu9GO0YfQtdC90L3RliDRh9C10YDQtdC3INC/0LvQsNCz0ZbQvVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDQu9C+0LrQsNC70YzQvdGWINGE0LDQudC70Lgg0YjRgNC40YTRgtGW0LJcXHJcXG4vL0BpbXBvcnQgXFxcImZvbnRzL2ZvbnRzXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGW0LrQvtC90LrQvtCy0LjRhSDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0YTQsNC50Lsg0ZbQutC+0L3QutC+0LLQvtCz0L4g0YjRgNC40YTRgtGDXFxyXFxuLy9AaW1wb3J0IFxcXCJmb250cy9pY29uc1xcXCI7XFxyXFxuXFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0YjQsNCx0LvQvtC90YMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vJmRpc3BsYXk9c3dhcCDQlNC+0LHQsNCy0LjRgtGMINC/0YDQuCDQv9C+0LTQutC70Y7Rh9C10L3QuNC4INGH0LXRgNC10Lcg0L/Qu9Cw0LPQuNC9QGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzpyZWd1bGFyLDUwMCw2MDAsNzAwLDgwMCk7XFxyXFxuLy8gJnN1YnNldD1jeXJpbGxpYy1leHRcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zKzM6MzAwLHJlZ3VsYXImZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjEwMCwzMDAscmVndWxhciw1MDAsNjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTozMDAscmVndWxhciw1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOnJlZ3VsYXIsNjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbi8vINCX0LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0YjRgNC40YTRgiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4kZm9udEZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiRmb250U2l6ZTogcmVtKDIwKTsgLy8g0LTQtSAxNChweCkgLSDRgNC+0LfQvNGW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0Lcg0LzQsNC60LXRgtGDXFxyXFxuXFxyXFxuLy8g0J7RgdC90L7QstC90ZYg0LrQvtC70YzQvtGA0LhcXHJcXG4kbWFpbkNvbG9yOiAjMDAwOyAvLyDQmtC+0LvRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINCw0LTQsNC/0YLQuNCy0L3QvtGXINGB0ZbRgtC60LggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQnNGW0L3RltC80LDQu9GM0L3QsCDRiNC40YDQuNC90LAg0YHRgtC+0YDRltC90LrQuFxcclxcbiRtaW5XaWR0aDogMzIwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQv9C+0LvQvtGC0L3QsCAo0LzQsNC60LXRgtGDKVxcclxcbiRtYXhXaWR0aDogMTkyMDtcXHJcXG4vLyAkbWF4V2lkdGg6IDE3Mjg7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC+0LHQvNC10LbRg9GO0YfQvtCz0L4g0LrQvtC90YLQtdC50L3QtdGA0LAgKDAgPSDQvdC10LzQsNGUINC+0LHQvNC10LbQtdC90L3RjylcXHJcXG4kbWF4V2lkdGhDb250YWluZXI6IDE1NjU7XFxyXFxuLy8g0JfQsNCz0LDQu9GM0L3QuNC5INCy0ZbQtNGB0YLRg9C/INGDINC60L7QvdGC0LXQudC90LXRgNCwXFxyXFxuLy8gKDMwID0g0L/QviAxNXB4INC70ZbQstC+0YDRg9GHINGWINC/0YDQsNCy0L7RgNGD0YcsIDAgPSDQvdC10LzQsNGUINCy0ZbQtNGB0YLRg9C/0YMpXFxyXFxuJGNvbnRhaW5lclBhZGRpbmc6IDMwO1xcclxcblxcclxcbi8vINCo0LjRgNC40L3QsCDRgdC/0YDQsNGG0YzQvtCy0YPQstCw0L3QvdGPINC/0LXRgNGI0L7Qs9C+INCx0YDQtdC50LrQv9C+0ZbQvdGC0YNcXHJcXG4kY29udGFpbmVyV2lkdGg6ICRtYXhXaWR0aENvbnRhaW5lciArICRjb250YWluZXJQYWRkaW5nO1xcclxcblxcclxcbi8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4XFxyXFxuJHBjOiBlbSgkY29udGFpbmVyV2lkdGgpOyAvLyDQn9CaLCDQvdC+0YPRgtCx0YPQutC4LCDQtNC10Y/QutGWINC/0LvQsNC90YjQtdGC0Lgg0YMg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiR0YWJsZXQ6IGVtKDk5MS45OCk7IC8vINCf0LvQsNC90YjQtdGC0LgsINC00LXRj9C60ZYg0YLQtdC70LXRhNC+0L3QuCDQsiDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJG1vYmlsZTogZW0oNzY3Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBMXFxyXFxuJG1vYmlsZVNtYWxsOiBlbSg0NzkuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IFNcXHJcXG5cXHJcXG4vLyDQotC40L8g0LDQtNCw0L/RgtC40LLQsDpcXHJcXG4vLyAxID0g0YfRg9C50L3RltGB0YLRjCAo0YMg0LrQvtC90YLQtdC50L3QtdGA0LAg0L3QtdC80LDRlCDQsdGA0LXQudC60L/QvtGW0L3RgtGW0LIpLFxcclxcbi8vIDIgPSDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgiAo0LrQvtC90YLQtdC50L3QtdGAINC30LzRltC90Y7RlCDRgdCy0L7RjiDRiNC40YDQuNC90YMg0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIpXFxyXFxuJHJlc3BvbnNpdmVUeXBlOiAxO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQntCx0L3Rg9C70LXQvdC90Y8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbnVsbFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtC10LPQsCBCT0RZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Ly8g0KHQutGA0L7Qu9C7INC30LDQsdC70L7QutC+0LLQsNC90L5cXHJcXG5cXHQubG9jayAmIHtcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdFxcdHRvdWNoLWFjdGlvbjogbm9uZTtcXHJcXG5cXHRcXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQodCw0LnRgiDQt9Cw0LLQsNC90YLQsNC20LXQvdC40LlcXHJcXG5cXHQubG9hZGVkICYge1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0J7QsdC+0LvQvtC90LrQsCB3cmFwcGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLndyYXBwZXIge1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0Jjo6YmVmb3Jle1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHRcXHRpbnNldDogMDtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuXFx0XFx0XFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcblxcdFxcdFxcdC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0XFx0XFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0XFx0XFx0ei1pbmRleDogMjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fS5tZW51LW9wZW4gJjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdFxcdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcblxcdH1cXHJcXG5cXHRAc3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGNsaXA7XFxyXFxuXFx0fVxcclxcblxcdC8vINCf0YDQuNGC0LjRgdC60LDRlNC80L4gZm9vdGVyXFxyXFxuXFx0PiBtYWluIHtcXHJcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KTRltC60YEg0LTQu9GPINGB0LvQsNC50LTQtdGA0ZbQslxcclxcblxcdD4gKiB7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0J7QsdC80LXQttGD0Y7Rh9C40Lkg0LrQvtC90YLQtdC50L3QtdGAID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vKlxcclxcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxcclxcbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcXHJcXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cXHJcXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxcclxcbiovXFxyXFxuQGlmICgkcmVzcG9uc2l2ZVR5cGU9PTEpIHtcXHJcXG5cXHQvLyDQp9GD0LnQvdCwXFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcblxcdFxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH0gQGVsc2Uge1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSwgMTUpO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksIDE1KTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59IEBlbHNlIHtcXHJcXG5cXHQvLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQsNC80LhcXHJcXG5cXHRbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG5cXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwYykge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDk3MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oNzUwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IG5vbmU7XFxyXFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wIGFuZCAkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LHQsNC30L7QstC40YUg0YHRgtC40LvRltCyLCDRiNCw0LHQu9C+0L3RltCyICjQt9Cw0LPQvtGC0ZbQstC10LvRjCkg0YLQsCDQtNC+0L/QvtC80ZbQttC90LjRhSDQutC70LDRgdGW0LJcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstC40LzQutC90LXQvdC90Y8g0LrQvtC90LrRgNC10YLQvdC40YUg0YHRgtC40LvRltCyINC00LjQstC40YHRjCBiYXNlLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQt9Cw0LPQsNC70YzQvdC40YUg0LXQu9C10LzQtdC90YLRltCyINC/0YDQvtC10LrRgtGDXFxyXFxuQGltcG9ydCBcXFwiY29tbW9uXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDQsdC70L7QutGW0LJcXHJcXG5AaW1wb3J0IFxcXCJoZWFkZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcImZvb3RlclxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0YHRgtC+0YDRltC90L7QulxcclxcbkBpbXBvcnQgXFxcImhvbWVcXFwiO1xcclxcblwiLFwiKiB7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcblxcdGJvcmRlcjogMHB4O1xcclxcbn1cXHJcXG4qLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpmb2N1cyxcXHJcXG46YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5hOmZvY3VzLFxcclxcbmE6YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRtaW4td2lkdGg6ICRtaW5XaWR0aCArIHB4O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRjb2xvcjogJG1haW5Db2xvcjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiAkZm9udFNpemU7XFxyXFxuXFx0Ly90ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcblxcdC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG51bCBsaSB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cIixcIi8vINCX0LDQs9Cw0LvRjNC90LjQuSDRhNCw0LnQuyDQtdC70LXQvNC10L3RgtGW0LIg0YTQvtGA0LxcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstGW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQutC+0L3QutGA0LXRgtC90L7Qs9C+INC10LvQtdC80LXQvdGC0LAg0YTQvtGA0LzQuCDQtNC40LLQuNGB0YwgYmFzZS9mb3Jtcy9mb3Jtcy5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZS9mb3Jtcy9mb3Jtc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQv9C+0L/QsNC/0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcG9wdXBcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YHQv9C+0LnQu9C10YDRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zcG9sbGVyc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtCw0LHRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS90YWJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC80LDQv1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvbWFwc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQsdC70L7QutGDIFxcXCLQv9C+0LrQsNC30LDRgtC4INGJ0LVcXFwiXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zaG93bW9yZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LvQuNC/0LrQvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3RpY2t5XFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LLQvdC+0LXQutGA0LDQvdC90L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxzY3JlZW5cXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QtdC60YDQsNC90L7RlyDQv9GA0L7QutGA0YPRgtC60LhcXHJcXG4vLyBTdHlsZXMgZm9yIGZ1bGxwYWdlIHNjcm9sbFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHBhZ2VcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPIHJpcHBsZSDQtdGE0LXQutGC0YNcXHJcXG4vLyBTdHlsZXMgZm9yIHJpcHBsZSBlZmZlY3RcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3JpcHBsZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LrQsNGB0YLQvtC80L3QvtCz0L4g0LrRg9GA0YHQvtGA0YNcXHJcXG4vLyBTdHlsZXMgZm9yIGN1c3RvbSBjdXJzb3JcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2N1cnNvclxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0YfRg9C50L3QuNGFINC60LDRgNGC0LjQvdC+0LogKElCRylcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZyAoZGl2INC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnYSAoYSDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG5bY2xhc3MqPVxcXCItaWJnXFxcIl0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5bY2xhc3MqPVxcXCItaWJnX2NvbnRhaW5cXFwiXSB7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0KjQsNCx0LvQvtC90LggKNC30LDQs9C+0YLRltCy0LvRlilcXHJcXG4vLyBAZXh0ZW5kICXRltC8J9GPINGI0LDQsdC70L7QvdGDO1xcclxcbi8vINCh0L3RltC/0L/QtdGCIChTQ1NTKTogZXhcXHJcXG5cXHJcXG4vLyDQm9GW0YfQuNC70YzQvdC40Log0LTQu9GPINGB0L/QuNGB0LrRg1xcclxcbiVsaXN0Q291bnRlciB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdGNvdW50ZXItcmVzZXQ6IGl0ZW07XFxyXFxuXFx0bGkge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHQmOmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGl0ZW07XFxyXFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihpdGVtKTtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdC1INCy0ZbQtNC10L5cXHJcXG4lcmVzcG9uc2l2ZVZpZGVvIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDU2LjI1JTtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JLRltC00LXQviDRj9C6INGE0L7QvVxcclxcbiV2aWRlb0JhY2tncm91bmQge1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdHotaW5kZXg6IC0xMDA7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0ZbRgNC40Lkg0YTRltC70YzRgtGAXFxyXFxuJWdyYXlmaWx0ZXIge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxyXFxuXFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHQutCw0YHRg9Cy0LDRgtC4INCy0LjQtNGW0LvQtdC90L3Rj1xcclxcbiVub3NlbGVjdCB7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi8vINCU0LfQtdGA0LrQsNC70YzQvdC1INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xcclxcbiVtaXJyb3Ige1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbn1cXHJcXG4vLyDQn9C70LDQstC90LjQuSDRgdC60YDQvtC70LtcXHJcXG4lc21vb3Roc2Nyb2xsIHtcXHJcXG5cXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxufVxcclxcbi8vINCh0YXQvtCy0LDRgtC4INGB0LrRgNC+0LvQu1xcclxcbiVoaWRlc2Nyb2xsIHtcXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy8g0JfQsNCz0L7Qu9C+0LLQutC4LCDQt9Cw0LPQsNC70YzQvdGWINCR0JXQnCDQsdC70L7QutC4INGC0LAg0ZbQvdGI0LUuLi5cXHJcXG5cXHJcXG4ucGFnZSB7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLnBhZ2VfX21haW5cXHJcXG5cXHJcXG5cXHRcXHQmX19tYWluIHtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jl9fY29tdGFjdHMge1xcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5idG57XFxyXFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTgsIDEzKTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCAzOSwgMjQpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCAzOSwgMjQpO1xcclxcblxcdFxcdHBhZGRpbmctdG9wOiByZW0oMTEpO1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOiByZW0oMTEpO1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyNyAsIDE4KTtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTUpO1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxMCk7IFxcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuLmJ1dHRvbi1ib3JkZXJ7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRjb2xvcjogIzAwMjk2RDtcXHJcXG5cXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjMDAyOTZEO1xcclxcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0NEM2RTkgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdFxcdCY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHR9XFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICM2NjY2NjY7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDE0MHB4O1xcclxcbiAgICAgICAgIHBhZGRpbmc6IHJlbSg5KSByZW0oMjQpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2NjY2NjYgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxMyk7XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGluZS1oZWlnaHRcXFwiLCAzMCwgMjApO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMyOTc3RDU7XFxyXFxufVxcclxcbi50aXRsZXtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCA2NCwgMzIpO1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxpbmUtaGVpZ2h0XFxcIiwgOTYsIDQ4KTtcXHJcXG59XFxyXFxuLnRleHQge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiU291cmNlIFNhbnMgM1xcXCI7XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDEzKTtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsaW5lLWhlaWdodFxcXCIsIDI4LCAxOSk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRjb2xvcjogIzI1MjUyNTtcXHJcXG5cXHRwYWRkaW5nOiByZW0oMCkgcmVtKDUpIHJlbSgwKSByZW0oMCk7XFxyXFxufVwiLFwiLy/Qn9GW0LTQutC70Y7Rh9C10L3QvdGPINGI0YDQuNGE0YLRg1xcclxcbkBtaXhpbiBmb250KCRmb250X25hbWUsICRmaWxlX25hbWUsICR3ZWlnaHQsICRzdHlsZSkge1xcclxcblxcdEBmb250LWZhY2Uge1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkZm9udF9uYW1lO1xcclxcblxcdFxcdGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG5cXHRcXHRzcmM6IHVybChcXFwiLi4vZm9udHMvI3skZmlsZV9uYW1lfS53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogI3skd2VpZ2h0fTtcXHJcXG5cXHRcXHRmb250LXN0eWxlOiAjeyRzdHlsZX07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vL1BlcmNlbnRcXHJcXG5AZnVuY3Rpb24gcGVyY2VudCgkcHgsICRmcm9tKSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkZnJvbSkgKiAxMDAlO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy9SRU1cXHJcXG5AZnVuY3Rpb24gcmVtKCRweCkge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgMTYpICsgcmVtO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy9FTVxcclxcbkBmdW5jdGlvbiBlbSgkcHgsICRjdXJyZW50OiAxNikge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGN1cnJlbnQpICsgZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vL0N1cnJlbmN5XFxyXFxuQG1peGluIGN1cnJlbmN5KCRzeW0pIHtcXHJcXG5cXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0Y29udGVudDogXFxcIiN7JHN5bX1cXFwiO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gR3JpZHNcXHJcXG5AbWl4aW4gZ3JpZENhcmRzKCR0eXBlOiBmaXQsICRtaW46IDI4MHB4LCAkbWF4OiAxZnIsICRnYXA6IDMwcHgpIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdhcDogJGdhcDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLSN7JHR5cGV9LCBtaW5tYXgoJG1pbiwgJG1heCkpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90LAg0LLQu9Cw0YHRgtC40LLRltGB0YLRjCAoY2xhbXApXFxyXFxuQG1peGluIGFkYXB0aXZlVmFsdWUoJHByb3BlcnR5LCAkc3RhcnRTaXplLCAkbWluU2l6ZSwgJGtlZXBTaXplOiAwLCAkd2lkdGhGcm9tOiAkY29udGFpbmVyV2lkdGgsICR3aWR0aFRvOiAkbWluV2lkdGgpIHtcXHJcXG5cXHRAaWYgKCRzdGFydFNpemU9PTApIHtcXHJcXG5cXHRcXHQkc3RhcnRTaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0QGlmICgkbWluU2l6ZT09MCkge1xcclxcblxcdFxcdCRtaW5TaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JTQu9GPIGNhbGMoKTtcXHJcXG5cXHQkYWRkU2l6ZTogbWF0aC5kaXYoJHN0YXJ0U2l6ZSAtICRtaW5TaXplLCAxNik7XFxyXFxuXFxyXFxuXFx0QGlmICgkd2lkdGhGcm9tID09ICRjb250YWluZXJXaWR0aCBhbmQgJG1heFdpZHRoQ29udGFpbmVyID09IDApIHtcXHJcXG5cXHRcXHQkd2lkdGhGcm9tOiAkbWF4V2lkdGg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4INCyIEVNXFxyXFxuXFx0JHdpZHRoRnJvbU1lZGlhOiBlbSgkd2lkdGhGcm9tKTtcXHJcXG5cXHQkd2lkdGhUb01lZGlhOiBlbSgkd2lkdGhUbyk7XFxyXFxuXFxyXFxuXFx0Ly8g0KTQvtGA0LzRg9C70LAg0L/Qu9Cw0LLQsNGO0YfQvtCz0L4g0LfQvdCw0YfQtdC90L3Rj1xcclxcblxcdC8vINCY0YHRgtC+0YfQvdC40Lo6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vbGluZWFybHktc2NhbGUtZm9udC1zaXplLXdpdGgtY3NzLWNsYW1wLWJhc2VkLW9uLXRoZS12aWV3cG9ydC9cXHJcXG5cXHQkc2xvcGU6IG1hdGguZGl2KCgkc3RhcnRTaXplIC0gJG1pblNpemUpLCAoJHdpZHRoRnJvbSAtICR3aWR0aFRvKSk7XFxyXFxuXFx0JHlJbnRlcnNlY3Rpb246IC0kd2lkdGhUbyAqICRzbG9wZSArICRtaW5TaXplO1xcclxcblxcdEBpZiAoJHlJbnRlcnNlY3Rpb249PTApIHtcXHJcXG5cXHRcXHQkeUludGVyc2VjdGlvbjogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdCRmbHlWYWx1ZTogI3tyZW0oJHlJbnRlcnNlY3Rpb24pfVxcXCIgKyBcXFwiICN7JHNsb3BlICogMTAwfXZ3O1xcclxcblxcclxcblxcdC8vINCe0YLRgNC40LzQsNC90L3RjyDQt9C90LDRh9C10L3QvdGPINCy0LvQsNGB0YLQuNCy0L7RgdGC0ZZcXHJcXG5cXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiByZW0oJG1pblNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdC8vINCv0LrRidC+INC90LXQs9Cw0YLQuNCy0L3RliDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0QGlmICgkbWluU2l6ZSA+ICRzdGFydFNpemUpIHtcXHJcXG5cXHRcXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiByZW0oJHN0YXJ0U2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgcmVtKCRtaW5TaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0LfQvdCw0YfQtdC90L3RjyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFx0QGlmICRrZWVwU2l6ZSAhPSAxIGFuZCAka2VlcFNpemUgIT0gMyB7XFxyXFxuXFx0XFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogcmVtKCRzdGFydFNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0JDQtNCw0L/RgtGD0ZTQvNC+INGA0L7Qt9C80ZbRgCDRgyDQv9GA0L7QvNGW0LbQutGDINC80ZbQtiDQt9Cw0LfQvdCw0YfQtdC90LjQvNC4INGI0LjRgNC40L3QsNC80Lgg0LIn0Y7Qv9C+0YDRgtGDXFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aFRvTWVkaWEpIGFuZCAobWF4LXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHQvLyDQr9C60YnQviDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyAoI3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC8vINCv0LrRidC+INC90LUg0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRcXHRAc3VwcG9ydHMgbm90ICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiBjYWxjKCN7cmVtKCRtaW5TaXplKX0gKyAjeyRhZGRTaXplfSAqICgxMDB2dyAtICN7cmVtKCR3aWR0aFRvKX0pIC8gI3ttYXRoLmRpdigkd2lkdGhGcm9tLCAxNikgLSBtYXRoLmRpdigkd2lkdGhUbywgMTYpfSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAyIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHdpZHRoVG9NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogcmVtKCRtaW5TaXplKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5oZWFkZXIge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHR6LWluZGV4OiAxMDA7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsMTEwICwxMDAgKTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsMjAgLDMwICk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLDIwICwzMCApO1xcclxcblxcdFxcdC8vIC5oZWFkZXJfX2NvbnRhaW5lclxcclxcblxcdFxcdCYuX2hlYWRlci1zY3JvbGx7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCZfX2NvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0ei1pbmRleDogMTAwO1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0Y29sdW1uLWdhcDogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ29cXHJcXG5cXHJcXG5cXHRcXHQmX19sb2dvIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGNvbHVtbi1nYXA6IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28taWNvblxcclxcblxcclxcblxcdFxcdCZfX2xvZ28taWNvbiB7XFxyXFxuXFx0XFx0XFx0ei1pbmRleDogMTAwO1xcclxcblxcdFxcdFxcdGltZ3tcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDU1LCA0MCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvLW5hbWVcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQmX19sb2dvLW5hbWUge1xcclxcblxcdFxcdFxcdHotaW5kZXg6IDgwO1xcclxcblxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdFxcdFxcdHRvcDogNTAlO1xcclxcblxcdFxcdFxcdFxcdGxlZnQ6IDUwJTtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28tdGl0bGVcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQmX19sb2dvLXRpdGxlIHtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyNCwgMTUpO1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigzMyAsIDI0KTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSgxNSk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDE1LCAxMCk7XFxyXFxuXFx0XFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nby1zdWJ0aXRsZVxcclxcblxcclxcblxcdFxcdCZfX2xvZ28tc3VidGl0bGUge1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE2LCAxMik7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IG1hdGguZGl2KDIyICwgMTYpO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbWVudVxcclxcblxcclxcblxcdFxcdCZfX21lbnUge1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fYWN0aW9uc1xcclxcblxcclxcblxcdFxcdCZfX2FjdGlvbnMge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2J1dHRvblxcclxcblxcclxcblxcdFxcdCZfX2J1dHRvbiB7XFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuLm1lbnUge1xcclxcblxcdFxcdGZsZXg6IDAgMSBhdXRvO1xcclxcblxcdFxcdC8vIC5tZW51X19ib2R5XFxyXFxuXFxyXFxuXFx0XFx0Jl9fYm9keSB7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0XFx0XFx0bGVmdDogLTEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gbWFyZ2luLXRvcDogcmVtKDEwMCk7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZy10b3A6IHJlbSgxMzgpO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IHJlbSgxMzgpIHJlbSgyMCkgcmVtKDM4KSByZW0oMjApO1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdFxcdFxcdC5tZW51LW9wZW4gJntcXHJcXG5cXHRcXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdCZfX2ljb25ze1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcclxcblxcdFxcdFxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcclxcblxcdFxcdFxcdFxcdGZsZXg6IDAgMSBhdXRvO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdyaWQtY29sdW1uLWdhcFxcXCIsODAgLDQwICk7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ3JpZC1yb3ctZ2FwXFxcIiw2MCAsNDAgKTtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jl9faWNvbntcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tZW51X19saXN0XFxyXFxuXFxyXFxuXFx0XFx0Jl9fbGlzdCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdGZsZXg6IDAgMSA1MCU7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiY29sdW1uLWdhcFxcXCIsIDYwLCAyMCk7XFxyXFxuXFx0XFx0XFx0cm93LWdhcDogcmVtKDEwKTtcXHJcXG5cXHRcXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogZW5kO1xcclxcblxcdFxcdFxcdFxcdHJvdy1nYXA6IHJlbSg2MCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWVudV9faXRlbVxcclxcblxcclxcblxcdFxcdCZfX2l0ZW0ge1xcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWVudV9fbGlua1xcclxcblxcclxcblxcdFxcdCZfX2xpbmsge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGN1cnJlbnRDb2xvciAwJSwgY3VycmVudENvbG9yIDEwMCUpIG5vLXJlcGVhdDtcXHJcXG4gICAgICBcXHRiYWNrZ3JvdW5kLXNpemU6IDAgMnB4OyAvKiDQndCw0YfQsNC70YzQvdCw0Y8g0YjQuNGA0LjQvdCwINC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNGPICovXFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XFxyXFxuICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG5cXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4OyAvKiDQmtC+0L3QtdGH0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4ICovXFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogICMyOTc3RDU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuLmljb24tbWVudSB7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vQnVyZ2VyXFxyXFxuXFxyXFxuLmljb24tbWVudSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHR3aWR0aDogcmVtKDMwKTtcXHJcXG5cXHRcXHRoZWlnaHQ6IHJlbSgxOCk7XFxyXFxuXFx0XFx0ei1pbmRleDogNTtcXHJcXG5cXHRcXHRAbWVkaWEgKGFueS1ob3Zlcjogbm9uZSkge1xcclxcblxcdFxcdFxcdGN1cnNvcjogZGVmYXVsdDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0c3BhbixcXHJcXG5cXHRcXHQmOjpiZWZvcmUsXFxyXFxuXFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiByZW0oMyk7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMjk2RDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRib3R0b206IDA7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDc1JTtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0dG9wOiBjYWxjKDUwJSAtIHJlbSgxKSk7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Lm1lbnUtb3BlbiAmIHtcXHJcXG5cXHRcXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IGNhbGMoNDUlIC0gcmVtKDEpKTtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0Ym90dG9tOiBjYWxjKDUwJSAtIHJlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5mb290ZXIge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdCZfX21hcHtcXHJcXG5cXHRcXHR6LWluZGV4OiAxO1xcclxcblxcdFxcdG1pbi13aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA1NzUsIDM5Myk7XFxyXFxuXFx0fVxcclxcblxcdC8vIC5mb290ZXJfX3RleHRcXHJcXG5cXHRcXHJcXG5cXHQmX190ZXh0IHtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMTMsIDcpO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTMsIDcpO1xcclxcblxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxMik7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGluZS1oZWlnaHRcXFwiLCAyNCwgMTUpO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICNGRkY5RkQ7XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi5tYWluIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUZEO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMTY3LDExNCApO1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOiByZW0oNTcpO1xcclxcblxcdFxcdC8vIC5tYWluX19jb250YWluZXJcXHJcXG5cXHJcXG5cXHRcXHQmX19jb250YWluZXIge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0Y29sdW1uLWdhcDogcmVtKDMwKTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX2NvbnRlbnRcXHJcXG5cXHJcXG5cXHRcXHQmX19jb250ZW50IHtcXHJcXG5cXHRcXHRcXHRmbGV4OiAwIDEgMzAlO1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJyb3ctZ2FwXFxcIiwgNjAsIDIwKTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRvcmRlcjogMTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tYWluX19zdWJ0aXRsZVxcclxcblxcclxcblxcdFxcdCZfX3N1YnRpdGxlIHtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX3RpdGxlXFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGl0bGUge1xcclxcblxcdFxcdFxcdHNwYW57XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICMyOTc3RDU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWFpbl9fdGV4dFxcclxcblxcclxcblxcdFxcdCZfX3RleHQge1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWFpbl9fYmF0dG9uc1xcclxcblxcclxcblxcdFxcdCZfX2JhdHRvbnMge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdGdhcDogcmVtKDE1KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX2J1dHRvbi1ibHVlXFxyXFxuXFxyXFxuXFx0XFx0Jl9fYnV0dG9uLWJsdWUge1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IHJlbSgyNyk7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjojNDRDNkU5O1xcclxcblxcdFxcdFxcdGJveC1zaGFkb3c6IC0ycHggN3B4IDBweCAwcHggIzI5NzdENTtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdCY6YWN0aXZle1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3cHgpO1xcclxcblxcdFxcdFxcdFxcdGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjMjk3N0Q1O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRib3gtc2hhZG93OiAtMnB4IDNweCAwcHggMHB4ICMyOTc3RDU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7XFxyXFxuXFx0XFx0XFx0XFx0Jjpob3ZlcntcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWFpbl9fYnV0dG9uLWNsZWFyXFxyXFxuXFxyXFxuXFx0XFx0Jl9fYnV0dG9uLWNsZWFyIHtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNiwgMTIpO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IHJlbSgyNCk7XFxyXFxuXFx0XFx0XFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuXFx0XFx0XFx0dGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA1cHg7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICM2NjY2NjY7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXtcXHJcXG5cXHRcXHRcXHRcXHQmOmhvdmVye1xcclxcblxcdFxcdFxcdFxcdFxcdGNvbG9yOiAjMDgwNzA3O1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcXHJcXG5cXHRcXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWFpbl9faW1hZ2VcXHJcXG5cXHJcXG5cXHRcXHQmX19pbWFnZSB7XFxyXFxuXFx0XFx0XFx0b3JkZXI6IDA7XFxyXFxuXFx0XFx0XFx0ZmxleDogMCAxIGF1dG87XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsMTUwICwwICk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsMTUwICw1MCApO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsMCAsNTAgKTtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwwICw1MCApO1xcclxcblxcdFxcdFxcdFxcdG9yZGVyOiAwO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSg0MCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdGltZ3tcXHJcXG5cXHRcXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdFxcdFxcdHotaW5kZXg6IDI7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IGNsYW1wKDI5N3B4LCA0MHZ3LCA1OTVweCk7XFxyXFxuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiA1OTUgLyA4OTM7XFxyXFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZXtcXHJcXG5cXHRcXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0bGVmdDogNTAlO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiBjbGFtcCg1MzVweCwgNTB2dywgODkzcHgpO1xcclxcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZDogIzAwMjk2RDtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDIxMiwgMjI4LCAyNDQsIDEpIDE1JSwgcmdiYSg2OCwgMTk4LCAyMzMsIDEpIDQ1JSwgcmdiYSg0MSwgMTE5LCAyMTMsIDEpIDcwJSwgcmdiYSgwLCA0MSwgMTA5LCAxKSAxMDAlKTtcXHJcXG5cXHRcXHRcXHRcXHR6LWluZGV4OiAxO1xcclxcblxcdFxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC01NSUpO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4uY29udGFjdHMge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNENEU0RjQ7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLDcyICw2MCApO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiw3MiAsNjAgKTtcXHJcXG5cXHRcXHQvLyAuY29udGFjdHNfX2NvbnRhaW5lclxcclxcblxcclxcblxcdFxcdCZfX2NvbnRhaW5lciB7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5jb250YWN0c19faXRlbXNcXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtcyB7XFxyXFxuXFx0XFx0XFx0Ly8gbWF4LXdpZHRoOiByZW0oMTI4Nik7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuLmNvbnRhY3Qge1xcclxcblxcclxcblxcdFxcdC8vIC5jb250YWN0X19pdGVtXFxyXFxuXFxyXFxuXFx0XFx0Jl9faXRlbSB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSgyMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5jb250YWN0X19pY29uXFxyXFxuXFxyXFxuXFx0XFx0Jl9faWNvbiB7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5jb250YWN0X19jb250ZW50XFxyXFxuXFxyXFxuXFx0XFx0Jl9fY29udGVudCB7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5jb250YWN0X190aXRsZVxcclxcblxcclxcblxcdFxcdCZfX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLDI4LCAxOCApO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxpbmUtaGlkaHRcXFwiLDQyICwgMjcgKTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSg0MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5jb250YWN0X190ZXh0XFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGV4dCB7XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDhiY2I5MmRmMjE1NjlkZmYzMzJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=