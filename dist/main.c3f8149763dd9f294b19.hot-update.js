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
  padding: 2.5625rem 2rem;
  border: 1px solid #00296D;
  box-shadow: 2px 2px 12px 1px #2977D5;
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/common.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/header.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/home.scss"],"names":[],"mappings":"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jBD;EKtjBC;IACC,QAAA;ELwjBF;EKljBC;IACC,0BAAA;IACA,yBAAA;ELojBF;EKljBC;IACC,6BAAA;IACA,wBAAA;IACA,WAAA;ELojBF;AACF;;AMh0BA;EACC,WAAA;ANm0BD;AMl0BC;EACC,UAAA;EACA,eAAA;ANo0BF;AI3vBE;EE3ED;IF4EE,kBAAA;EJ8vBD;AACF;AI3vBC;EAEC;IElFD;MFmFE,+EAhBc;IJ6wBb;EACF;EI3vBA;IEtFD;MFuFE,6DAAA;IJ8vBC;EACF;AACF;AI5vBE;EE3FD;IF4FE,kBAAA;EJ+vBD;AACF;AMr1BC;EACE,yBAAA;ANu1BH;AIpxBE;EEpED;IFqEE,sBAAA;EJuxBD;AACF;AIpxBC;EAEC;IE3ED;MF4EE,gFAhBc;IJsyBb;EACF;EIpxBA;IE/ED;MFgFE,gEAAA;IJuxBC;EACF;AACF;AIrxBE;EEpFD;IFqFE,sBAAA;EJwxBD;AACF;AI1yBE;EEpED;IFqEE,yBAAA;EJ6yBD;AACF;AI1yBC;EAEC;IE3ED;MF4EE,mFAhBc;IJ4zBb;EACF;EI1yBA;IE/ED;MFgFE,mEAAA;IJ6yBC;EACF;AACF;AI3yBE;EEpFD;IFqFE,yBAAA;EJ8yBD;AACF;AMp4BC;EAIE,kBAAA;EACA,yBAAA;ANm4BH;AIp0BE;EEpED;IFqEE,kBAAA;EJu0BD;AACF;AIp0BC;EAEC;IE3ED;MF4EE,0EAhBc;IJs1Bb;EACF;EIp0BA;IE/ED;MFgFE,0DAAA;IJu0BC;EACF;AACF;AIr0BE;EEpFD;IFqFE,kBAAA;EJw0BD;AACF;AI11BE;EEpED;IFqEE,mBAAA;EJ61BD;AACF;AI11BC;EAEC;IE3ED;MF4EE,6EAhBc;IJ42Bb;EACF;EI11BA;IE/ED;MFgFE,iEAAA;IJ61BC;EACF;AACF;AI31BE;EEpFD;IFqFE,sBAAA;EJ81BD;AACF;AMp7BC;EAQE,gBAAA;EACA,cAAA;AN+6BH;;AOh8BA;EACE,yBAAA;APm8BF;AIx3BE;EG5EF;IH6EG,uBAAA;EJ23BD;AACF;AIx3BC;EAEC;IGnFF;MHoFG,+EAhBc;IJ04Bb;EACF;EIx3BA;IGvFF;MHwFG,gEAAA;IJ23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","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n//@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n//&display=swap Добавить при подключении через плагин@import url(https://fonts.googleapis.com/css?family=Shippori+Mincho:regular,500,600,700,800);\r\n// &subset=cyrillic-ext\r\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+3:300,regular&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,300,regular,500,600&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Raleway:300,regular,500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:regular,600&display=swap\");\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Poppins\";\r\n$fontSize: rem(20); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #000; // Колір шрифту за замовчуванням\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1920;\r\n// $maxWidth: 1728;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1565;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t&::before{\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tcontent: \"\";\r\n\t\t\tposition: fixed;\r\n\t\t\tinset: 0;\r\n\t\t\tbackground: rgba(0, 0, 0, 0.1);\r\n\t\t\tbackdrop-filter: blur(10px);\r\n\t\t\t-webkit-backdrop-filter: blur(10px);\r\n\t\t\topacity: 0;\r\n\t\t\tpointer-events: none;\r\n\t\t\ttransition: opacity 0.3s ease;\r\n\t\t\tz-index: 2;\r\n\t\t}\r\n\t}.menu-open &::before {\r\n\t\topacity: 1;\r\n\t\tpointer-events: auto;\r\n\t}\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: rem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: rem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","// Заголовки, загальні БЕМ блоки та інше...\r\n\r\n.page {\r\n\r\n\t\t// .page__main\r\n\r\n\t\t&__main {\r\n\t\t}\r\n\t\t&__comtacts {\r\n\t\t}\r\n\t\t&__services {\r\n\t\t}\r\n}\r\n//========================================================================================================================================================\r\n.btn{\r\n\twhite-space: nowrap;\r\n\ttext-align: center;\r\n\t@include adaptiveValue(\"font-size\", 18, 13);\r\n\t\t@include adaptiveValue(\"padding-left\", 39, 24);\r\n\t\t@include adaptiveValue(\"padding-right\", 39, 24);\r\n\t\tpadding-top: rem(11);\r\n\t\tpadding-bottom: rem(11);\r\n\t\tline-height: math.div(27 , 18);\r\n\t\tborder-radius: rem(15);\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tborder-radius: rem(10); \r\n\t\t}\r\n}\r\n.button-border{\r\n\t\tfont-weight: 300;\r\n\t\tcolor: #00296D;\r\n\t\tborder: 1px solid #00296D;\r\n\t\tbackground: linear-gradient(to bottom, #44C6E9 50%, transparent 50%);\r\n      background-size: 100% 200%;\r\n      background-position: 0 100%;\r\n      transition: background-position 0.3s ease, color 0.3s ease;\r\n\t\t&:hover {\r\n      background-position: 0 0;\r\n\t\tcolor: #fff;\r\n\t}\r\n\t@media (max-width:$mobile){\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: 1px solid #666666;\r\n\t\t\tmax-width: 140px;\r\n         padding: rem(9) rem(24);\r\n\t\t\tbackground: linear-gradient(to bottom, #666666 50%, transparent 50%);\r\n\t\t\tbackground-size: 100% 200%;\r\n         background-position: 0 100%;\r\n\t\t}\r\n}\r\n\r\n.subtitle {\r\n\tfont-family: $fontFamily;\r\n\t@include adaptiveValue(\"font-size\", 20, 13);\r\n\t@include adaptiveValue(\"line-height\", 30, 20);\r\n\t\t\tfont-weight: 400;\r\n\t\t\tcolor: #2977D5;\r\n}\r\n.title{\r\n\tfont-family: $fontFamily;\r\n\tfont-weight: 600;\r\n\t@include adaptiveValue(\"font-size\", 64, 32);\r\n\t@include adaptiveValue(\"line-height\", 96, 48);\r\n}\r\n.text {\r\n\tfont-family: \"Source Sans 3\";\r\n\t@include adaptiveValue(\"font-size\", 20, 13);\r\n\t@include adaptiveValue(\"line-height\", 28, 19);\r\n\tfont-weight: 300;\r\n\tcolor: #252525;\r\n\tpadding: rem(0) rem(5) rem(0) rem(0);\r\n}","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n\t\tbackground-color: #FFF9FD;\r\n\t\ttransition: all 0.3s ease 0s;\r\n\t\tz-index: 100;\r\n\t\tposition: fixed;\r\n\t\twidth: 100%;\r\n\t\t@include adaptiveValue(\"height\",110 ,100 );\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\t@include adaptiveValue(\"padding-top\",20 ,30 );\r\n\t\t\t@include adaptiveValue(\"padding-bottom\",20 ,30 );\r\n\t\t\t&::before {\r\n\t\tcontent: \"\";\r\n\t\tposition: absolute;\r\n\t\tinset: 0;\r\n\t\tbackground: rgba(0, 0, 0, 0.1);\r\n\t\tbackdrop-filter: blur(10px);\r\n\t\t-webkit-backdrop-filter: blur(10px);\r\n\t\tz-index: -1;\r\n\t\topacity: 0;\r\n\t\ttransition: opacity 0.3s ease;\r\n\t\t\r\n\t}\r\n\t\t// .header__container\r\n\t\t&._header-scroll{\r\n\t\t\tbackground-color: rgba(0, 0, 0, 0.1);\r\n\t\t\t// color: #FFF9FD;\r\n\t\t\t// opacity: 0.5;\r\n\t\t\t&::before{\r\n\t\t\t\topacity: 1;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__container {\r\n\t\t\tz-index: 100;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\t\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\r\n\t\t// .header__logo\r\n\r\n\t\t&__logo {\r\n\t\t\tdisplay: flex;\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-icon\r\n\r\n\t\t&__logo-icon {\r\n\t\t\tz-index: 100;\r\n\t\t\timg{\r\n\t\t\t\t@include adaptiveValue(\"width\", 55, 40);\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-name\r\n\t\t\r\n\t\t&__logo-name {\r\n\t\t\tz-index: 80;\r\n\t\t\ttext-align: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\twidth: auto;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-title\r\n\t\t\r\n\t\t&__logo-title {\r\n\t\t\t@include adaptiveValue(\"font-size\", 24, 15);\r\n\t\t\tline-height: math.div(33 , 24);\r\n\t\t\tfont-weight: 600;\r\n\t\t\tmargin-bottom: rem(15);\r\n\t\t\t@include adaptiveValue(\"margin-bottom\", 15, 10);\r\n\t\t\twhite-space: nowrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-subtitle\r\n\r\n\t\t&__logo-subtitle {\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tline-height: math.div(22 , 16);\r\n\t\t\tfont-weight: 400;\r\n\t\t\twhite-space: nowrap;\r\n\t\t}\r\n\r\n\r\n\r\n\t\t// .header__menu\r\n\r\n\t\t&__menu {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__actions\r\n\r\n\t\t&__actions {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__button\r\n\r\n\t\t&__button {\r\n\t\t\tgrid-column-start: 1;\r\n         grid-column-end: 3;\r\n\t\t}\r\n}\r\n.menu {\r\n\t\tflex: 0 1 auto;\r\n\t\t// .menu__body\r\n\r\n\t\t&__body {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: -100%;\r\n\t\t\t\t// margin-top: rem(100);\r\n\t\t\t\tpadding-top: rem(138);\r\n\t\t\t\tpadding: rem(138) rem(20) rem(38) rem(20);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\tbackground-color: #FFF9FD;\r\n\t\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t\t\t.menu-open &{\r\n\t\t\t\tleft: 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t&__icons{\r\n\t\t\tdisplay: none;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tgrid-template-rows: repeat(3, 1fr);\r\n\t\t\t\tgrid-template-columns: repeat(2, auto);\r\n\t\t\t\tflex: 0 1 auto;\r\n\t\t\t\t@include adaptiveValue(\"grid-column-gap\",80 ,40 );\r\n\t\t\t\t@include adaptiveValue(\"grid-row-gap\",60 ,40 );\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__icon{\r\n\t\t\tdisplay: grid;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\r\n\t\t// .menu__list\r\n\r\n\t\t&__list {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tflex: 0 1 50%;\r\n\t\t\t@include adaptiveValue(\"column-gap\", 60, 20);\r\n\t\t\trow-gap: rem(10);\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: end;\r\n\t\t\t\trow-gap: rem(60);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .menu__item\r\n\r\n\t\t&__item {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .menu__link\r\n\r\n\t\t&__link {\r\n\t\t\tfont-size: rem(16);\r\n\t\t\tbackground: linear-gradient(to right, currentColor 0%, currentColor 100%) no-repeat;\r\n      \tbackground-size: 0 2px; /* Начальная ширина подчеркивания */\r\n         background-position: left bottom;\r\n         transition: background-size 0.3s ease;\r\n\t\t\t@media (any-hover: hover) {\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tbackground-size: 100% 2px; /* Конечная ширина подчеркивания при наведении */\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tcolor:  #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n}\r\n.icon-menu {\r\n}\r\n\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n\tdisplay: none;\r\n\t@media (max-width: $mobile) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: rem(30);\r\n\t\theight: rem(18);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tleft: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: rem(3);\r\n\t\t\tbackground-color: #00296D;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 75%;\r\n\t\t\t\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - rem(1));\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(45% - rem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - rem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n","//====================================================================================================\r\n.footer {\r\n\twidth: 100%;\r\n\t&__map{\r\n\t\tz-index: 1;\r\n\t\tmin-width: 100%;\r\n\t\t@include adaptiveValue(\"height\", 575, 393);\r\n\t}\r\n\t// .footer__text\r\n\t\r\n\t&__text {\r\n\t\t\tbackground-color: #252525;\r\n\t\t\t@include adaptiveValue(\"padding-top\", 13, 7);\r\n\t\t\t@include adaptiveValue(\"padding-bottom\", 13, 7);\r\n\t\t\ttext-align: center;\r\n\t\t\tfont-family: \"Montserrat\";\r\n\t\t\t@include adaptiveValue(\"font-size\", 20, 12);\r\n\t\t\t@include adaptiveValue(\"line-height\", 24, 15);\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #FFF9FD;\r\n\t\t}\r\n}\r\n\r\n//====================================================================================================\r\n","//====================================================================================================\r\n\r\n.main {\r\n\t\tbackground-color: #FFF9FD;\r\n\t\t@include adaptiveValue(\"padding-top\", 167,114 );\r\n\t\tpadding-bottom: rem(57);\r\n\t\t// .main__container\r\n\r\n\t\t&__container {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\talign-items: center;\r\n\t\t\tcolumn-gap: rem(30);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__content\r\n\r\n\t\t&__content {\r\n\t\t\tflex: 0 1 30%;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\t@include adaptiveValue(\"row-gap\", 60, 20);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\torder: 1;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__subtitle\r\n\r\n\t\t&__subtitle {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .main__title\r\n\r\n\t\t&__title {\r\n\t\t\tspan{\r\n\t\t\t\tcolor: #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__text\r\n\r\n\t\t&__text {\r\n\t\t}\r\n\r\n\t\t// .main__battons\r\n\r\n\t\t&__battons {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tgap: rem(15);\r\n\t\t}\r\n\r\n\t\t// .main__button-blue\r\n\r\n\t\t&__button-blue {\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #00296D;\r\n\t\t\tline-height: rem(27);\r\n\t\t\tbackground-color:#44C6E9;\r\n\t\t\tbox-shadow: -2px 7px 0px 0px #2977D5;\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t&:active{\r\n\t\t\t\ttransform: translateY(7px);\r\n\t\t\t\tbox-shadow: 0px 0px 0px 0px #2977D5;\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tbox-shadow: -2px 3px 0px 0px #2977D5;\r\n\t\t\t}\r\n\t\t\t@media (any-hover: hover){\r\n\t\t\t\t&:hover{\r\n\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__button-clear\r\n\r\n\t\t&__button-clear {\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tfont-weight: 400;\r\n\t\t\tline-height: rem(24);\r\n\t\t\ttext-decoration: underline;\r\n\t\t\ttext-underline-offset: 5px;\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: none;\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t@media (any-hover: hover){\r\n\t\t\t\t&:hover{\r\n\t\t\t\t\tcolor: #080707;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tborder: 1px solid #666666;\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__image\r\n\r\n\t\t&__image {\r\n\t\t\torder: 0;\r\n\t\t\tflex: 0 1 auto;\r\n\t\t\tposition: relative;\r\n\t\t\t@include adaptiveValue(\"padding-left\",150 ,0 );\r\n\t\t\t@include adaptiveValue(\"padding-right\",150 ,50 );\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t@include adaptiveValue(\"padding-left\",0 ,50 );\r\n\t\t\t\t@include adaptiveValue(\"padding-right\",0 ,50 );\r\n\t\t\t\torder: 0;\r\n\t\t\t\tmargin-bottom: rem(40);\r\n\t\t\t}\r\n\t\t\timg{\r\n\t\t\t\tposition: relative;\r\n\t\t\t\theight: auto;\r\n\t\t\t\tz-index: 2;\r\n\t\t\t\twidth: clamp(297px, 40vw, 595px);\r\n            aspect-ratio: 595 / 893;\r\n            object-fit: cover;\r\n\t\t\t}\r\n\t\t\t&::before{\r\n\t\t\t\tcontent: \"\";\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\t\twidth: clamp(535px, 50vw, 893px);\r\n            aspect-ratio: 1 / 1;\r\n\t\t\t\tbackground: #00296D;\r\n\t\t\t\tborder-radius: 50%;\r\n\t\t\t\tbackground: linear-gradient(180deg,rgba(212, 228, 244, 1) 15%, rgba(68, 198, 233, 1) 45%, rgba(41, 119, 213, 1) 70%, rgba(0, 41, 109, 1) 100%);\r\n\t\t\t\tz-index: 1;\r\n\t\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\ttransform: translate(-40%, -55%);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n}\r\n\r\n//====================================================================================================\r\n\r\n.contacts {\r\n\tbackground-color: #D4E4F4;\r\n\t\t@include adaptiveValue(\"padding-top\",72 ,60 );\r\n\t\t@include adaptiveValue(\"padding-bottom\",72 ,60 );\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tbackground-color: #FFF9FD;\r\n\t\t}\r\n\t\t// .contacts__container\r\n\r\n\t\t&__container {\r\n\t\t}\r\n\r\n\t\t// .contacts__items\r\n\r\n\t\t&__items {\r\n\t\t\t// max-width: rem(1286);\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-around;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: start;\r\n\t\t\t}\r\n\t\t}\r\n}\r\n.contact {\r\n\r\n\t\t// .contact__item\r\n\r\n\t\t&__item {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-columns: (auto 1fr);\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tgrid-template-columns: (60px 100px 150px) ;\r\n\t\t\t\t@include adaptiveValue(\"column-gap\", 460,0 );\r\n\t\t\t\t// column-gap: rem(40);\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\t&:not(:last-child){margin-bottom: rem(50);}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobileSmall){\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .contact__icon\r\n\t\t\r\n\t\t&__icon {\r\n\t\t\t\tgrid-column-start: 1;\r\n            grid-column-end: 2;\r\n\t\t\t\tgrid-row-start: 1;\r\n            grid-row-end: 3;\r\n\t\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t\tgrid-row-start: 1;\r\n            grid-row-end: 2;\r\n\t\t\t\t}\r\n\t\t\timg{\r\n\t\t\t\tmax-height: rem(50);\r\n\t\t\t\t@include adaptiveValue(\"max-height\", 50,30 );\r\n\t\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t}\r\n\t\t\t\t// fill: #44C6E9;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .contact__content\r\n\r\n\t\t\r\n\r\n\t\t// .contact__title\r\n\r\n\t\t&__title {\r\n\t\t\t@include adaptiveValue(\"font-size\",28, 18 );\r\n\t\t\tfont-weight: 500;\r\n\t\t\tmargin-bottom: rem(40);\r\n\t\t\t// -webkit-text-stroke: 1px #00296D;\r\n\t\t\tcolor: #00296D;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tmargin-bottom: rem(0);\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobileSmall){\r\n\t\t\t\t// display: flex;\r\n\t\t\t\t// align-items: center;\r\n\t\t\t\t// justify-content: center;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .contact__text\r\n\r\n\t\t&__text {\r\n\t\t\tfont-family: \"Source Sans 3\";\r\n\t\t\t@include adaptiveValue(\"font-size\", 20, 13);\r\n\t\t\t@include adaptiveValue(\"line-height\", 28, 19);\r\n\t\t\tfont-weight: 400;\r\n\t\t\tcolor: #00296D;\r\n\t\t\tp:not(:last-child){\r\n\t\t\t\t@include adaptiveValue(\"margin-bottom\",25 ,15 );\r\n\t\t\t}\r\n\t\t}\r\n}\r\n//========================================================================================================================================================\r\n.services {\r\n\tpadding: rem(67) rem(0);\r\n\tposition: relative;\r\n\tmin-height: 100vh;\r\n\t\t&__bg{\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: auto;\r\n\t\t\theight: auto%;\r\n\t\t\ttop: 67px;\r\n\t\t\tright: 0;\r\n\t\t\tz-index: -1;\r\n\t\t}\r\n\t\t// .services__container\r\n\r\n\t\t&__container {\r\n\t\t}\r\n\r\n\t\t// .services__header\r\n\r\n\t\t&__header {\r\n\t\t\tmargin-bottom: rem(80);\r\n\t\t}\r\n\r\n\t\t// .services__subtitle\r\n\r\n\t\t&__subtitle {\r\n\t\t}\r\n\r\n\t\t// .services__title\r\n\r\n\t\t&__title {\r\n\t\t}\r\n\r\n\t\t// .services__items\r\n\r\n\t\t&__items {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\trow-gap: rem(20);\r\n\t\t\t@media (max-width:$tablet){\r\n\t\t\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tgrid-template-columns: 1fr;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .services__item\r\n\r\n\t\t&__item {\r\n\t\t\tpadding: rem(41) rem(32);\r\n\t\t\tborder: 1px solid #00296D;\r\n\t\t\tbox-shadow: 2px 2px 12px 1px #2977D5 ;\r\n\t\t}\r\n}\r\n.subtitle {\r\n}\r\n.title {\r\n}\r\n.item-services {\r\n\r\n\t\t// .item-services__image\r\n\r\n\t\t&__image {\r\n\t\t}\r\n\r\n\t\t// .item-services__body\r\n\r\n\t\t&__body {\r\n\t\t}\r\n\r\n\t\t// .item-services__title\r\n\r\n\t\t&__title {\r\n\t\t}\r\n\r\n\t\t// .item-services__text\r\n\r\n\t\t&__text {\r\n\t\t}\r\n\r\n\t\t// .item-services__link\r\n\r\n\t\t&__link {\r\n\t\t}\r\n}\r\n.text {\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7cc2512dcada1d8e6db2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jM2Y4MTQ5NzYzZGQ5ZjI5NGIxOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSUFBc0k7QUFDdEksNElBQTRJO0FBQzVJLG9JQUFvSTtBQUNwSSwySEFBMkg7QUFDM0gscUhBQXFIO0FBQ3JILGtJQUFrSTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc1ZBQXNWLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxTQUFTLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsc0JBQXNCLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFB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Q0FBMEMsNkJBQTZCLG1DQUFtQyx1Q0FBdUMsV0FBVyxTQUFTLGtEQUFrRCx5Q0FBeUMsd0RBQXdELDBEQUEwRCwyQkFBMkIseUJBQXlCLDZCQUE2Qiw4REFBOEQsV0FBVyxTQUFTLEtBQUssNktBQTZLLDhCQUE4Qix5QkFBeUIsd0JBQXdCLGNBQWMsNkJBQTZCLHNCQUFzQix3QkFBd0Isb0JBQW9CLG1CQUFtQixzQkFBc0IsU0FBUyx5REFBeUQsU0FBUyx1REFBdUQsaUNBQWlDLFNBQVMsMkRBQTJELFNBQVMscURBQXFELFNBQVMscURBQXFELHdCQUF3QixnREFBZ0QsOEJBQThCLDJCQUEyQixxQ0FBcUMsa0RBQWtELFdBQVcscUNBQXFDLHVDQUF1QyxXQUFXLFNBQVMsbURBQW1ELG1DQUFtQyxvQ0FBb0MsZ0RBQWdELFNBQVMsS0FBSyxlQUFlLEtBQUssWUFBWSxLQUFLLG9CQUFvQiwwREFBMEQsU0FBUyx3REFBd0QsU0FBUywwREFBMEQsU0FBUyx3REFBd0QsU0FBUyx3REFBd0QsU0FBUyxLQUFLLFdBQVcsS0FBSyx1QkFBdUI7QUFDNTM2QztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUM1L0N2QyxzRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrMzozMDAscmVndWxhciZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MTAwLDMwMCxyZWd1bGFyLDUwMCw2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjMwMCxyZWd1bGFyLDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6cmVndWxhciw2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4qIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMjBweDtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiAjMDAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi5sb2NrIGJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XG59XG4ud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAud3JhcHBlcjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgei1pbmRleDogMjtcbiAgfVxufVxuLm1lbnUtb3BlbiAud3JhcHBlcjo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5Ac3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XG4gIC53cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogY2xpcDtcbiAgfVxufVxuLndyYXBwZXIgPiBtYWluIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4ud3JhcHBlciA+ICoge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi8qXG4oaSkg0KHRgtC40LvRliDQsdGD0LTRg9GC0Ywg0LfQsNGB0YLQvtGB0L7QstGD0LLQsNGC0LjRgdGMINC00L5cbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcbtCd0LDQv9GA0LjQutC70LDQtCBoZWFkZXJfX2NvbnRhaW5lciwgbWFpbl9fY29udGFpbmVyINGWINGCLtC/Llxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBjbnRcbiovXG5bY2xhc3MqPV9fY29udGFpbmVyXSB7XG4gIG1heC13aWR0aDogOTkuNjg3NXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMC45Mzc1cmVtO1xufVxuXG5bY2xhc3MqPS1pYmddIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuW2NsYXNzKj0taWJnXSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbltjbGFzcyo9LWliZ19jb250YWluXSBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uYnRuIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuYnRuIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzM0MDY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAxLjEyNXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MzQwNjg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDEuMTI1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjgxMjVyZW0gKyAwLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctbGVmdDogMi40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjVyZW0gKyAwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDEuNXJlbSArIDAuOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICB9XG59XG4uYnRuIHtcbiAgcGFkZGluZy10b3A6IDAuNjg3NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogMC45Mzc1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gIH1cbn1cblxuLmJ1dHRvbi1ib3JkZXIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMjk2RDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMjk2RDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ0QzZFOSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4zcyBlYXNlLCBjb2xvciAwLjNzIGVhc2U7XG59XG4uYnV0dG9uLWJvcmRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICAgIHBhZGRpbmc6IDAuNTYyNXJlbSAxLjVyZW07XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzY2NjY2NiA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xuICB9XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MDI2OTYwNzg0cmVtICArICAwLjU0OTAxOTYwNzh2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjcwMjY5NjA3ODRyZW0gICsgIDAuNTQ5MDE5NjA3OHZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjcwMjY5NjA3ODRyZW0gICsgIDAuNTQ5MDE5NjA3OHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjgxMjVyZW0gKyAwLjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLnN1YnRpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGluZS1oZWlnaHQ6IGNsYW1wKCAxLjI1cmVtICwgMS4wOTMxMzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuc3VidGl0bGUge1xuICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKCAxLjI1cmVtICwgMS4wOTMxMzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxpbmUtaGVpZ2h0OiBjbGFtcCggMS4yNXJlbSAsIDEuMDkzMTM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDEuMjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN1YnRpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgfVxufVxuLnN1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyOTc3RDU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMnJlbSAsIDEuNDk4MDM5MjE1N3JlbSAgKyAgMi41MDk4MDM5MjE2dncgLCA0cmVtICkpIHtcbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMnJlbSAsIDEuNDk4MDM5MjE1N3JlbSAgKyAgMi41MDk4MDM5MjE2dncgLCA0cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDJyZW0gLCAxLjQ5ODAzOTIxNTdyZW0gICsgIDIuNTA5ODAzOTIxNnZ3ICwgNHJlbSApKSB7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygycmVtICsgMiAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLnRpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsaW5lLWhlaWdodDogY2xhbXAoIDNyZW0gLCAyLjI0NzA1ODgyMzVyZW0gICsgIDMuNzY0NzA1ODgyNHZ3ICwgNnJlbSApKSB7XG4gICAgLnRpdGxlIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCggM3JlbSAsIDIuMjQ3MDU4ODIzNXJlbSAgKyAgMy43NjQ3MDU4ODI0dncgLCA2cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxpbmUtaGVpZ2h0OiBjbGFtcCggM3JlbSAsIDIuMjQ3MDU4ODIzNXJlbSAgKyAgMy43NjQ3MDU4ODI0dncgLCA2cmVtICkpIHtcbiAgICAudGl0bGUge1xuICAgICAgbGluZS1oZWlnaHQ6IGNhbGMoM3JlbSArIDMgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cbn1cblxuLnRleHQge1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyAzXCI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC50ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MDI2OTYwNzg0cmVtICArICAwLjU0OTAxOTYwNzh2dyAsIDEuMjVyZW0gKSkge1xuICAgIC50ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzAyNjk2MDc4NHJlbSAgKyAgMC41NDkwMTk2MDc4dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzAyNjk2MDc4NHJlbSAgKyAgMC41NDkwMTk2MDc4dncgLCAxLjI1cmVtICkpIHtcbiAgICAudGV4dCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC44MTI1cmVtICsgMC40Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLnRleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGxpbmUtaGVpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMS4wNDYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNzVyZW0gKSkge1xuICAgIC50ZXh0IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMS4wNDYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGluZS1oZWlnaHQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAxLjA0NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS43NXJlbSApKSB7XG4gICAgLnRleHQge1xuICAgICAgbGluZS1oZWlnaHQ6IGNhbGMoMS4xODc1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTg3NXJlbTtcbiAgfVxufVxuLnRleHQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzI1MjUyNTtcbiAgcGFkZGluZzogMHJlbSAwLjMxMjVyZW0gMHJlbSAwcmVtO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDYuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDYuMjVyZW0gLCA2LjA5MzEzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgNi44NzVyZW0gKSkge1xuICAgIC5oZWFkZXIge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggNi4yNXJlbSAsIDYuMDkzMTM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCA2Ljg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCA2LjI1cmVtICwgNi4wOTMxMzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDYuODc1cmVtICkpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIGhlaWdodDogY2FsYyg2LjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXIge1xuICAgIGhlaWdodDogNi4yNXJlbTtcbiAgfVxufVxuLmhlYWRlciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMi4wMzE4NjI3NDUxcmVtICArICAtMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLmhlYWRlciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAyLjAzMTg2Mjc0NTFyZW0gICsgIC0wLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDIuMDMxODYyNzQ1MXJlbSAgKyAgLTAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5oZWFkZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMS44NzVyZW0gKyAtMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAyLjAzMTg2Mjc0NTFyZW0gICsgIC0wLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDIuMDMxODYyNzQ1MXJlbSAgKyAgLTAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMi4wMzE4NjI3NDUxcmVtICArICAtMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLmhlYWRlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxLjg3NXJlbSArIC0wLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuODc1cmVtO1xuICB9XG59XG4uaGVhZGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cbi5oZWFkZXIuX2hlYWRlci1zY3JvbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uaGVhZGVyLl9oZWFkZXItc2Nyb2xsOjpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgei1pbmRleDogMTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXJfX2xvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fbG9nby1pY29uIHtcbiAgei1pbmRleDogMTAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLWljb24gaW1nIHtcbiAgICB3aWR0aDogMy40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMi41cmVtICwgMi4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDMuNDM3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1pY29uIGltZyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDIuNXJlbSAsIDIuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAzLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAyLjVyZW0gLCAyLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMy40Mzc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLWljb24gaW1nIHtcbiAgICAgIHdpZHRoOiBjYWxjKDIuNXJlbSArIDAuOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fbG9nby1pY29uIGltZyB7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fbG9nby1uYW1lIHtcbiAgei1pbmRleDogODA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tbmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuOTM3NXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICBsaW5lLWhlaWdodDogMS4zNzU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTQ2NTY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAwLjkzNzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC41NDY1Njg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDAuOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjU0NjU2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC42MjVyZW0gKyAwLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjc1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmhlYWRlcl9fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19idXR0b24ge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4ubWVudSB7XG4gIGZsZXg6IDAgMSBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIHBhZGRpbmctdG9wOiA4LjYyNXJlbTtcbiAgICBwYWRkaW5nOiA4LjYyNXJlbSAxLjI1cmVtIDIuMzc1cmVtIDEuMjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUZEO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIH1cbiAgLm1lbnUtb3BlbiAubWVudV9fYm9keSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuLm1lbnVfX2ljb25zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChncmlkLWNvbHVtbi1nYXA6IGNsYW1wKCAyLjVyZW0gLCAxLjg3MjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCA1cmVtICkpIHtcbiAgICAubWVudV9faWNvbnMge1xuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiBjbGFtcCggMi41cmVtICwgMS44NzI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChncmlkLWNvbHVtbi1nYXA6IGNsYW1wKCAyLjVyZW0gLCAxLjg3MjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCA1cmVtICkpIHtcbiAgICAubWVudV9faWNvbnMge1xuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiBjYWxjKDIuNXJlbSArIDIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZ3JpZC1yb3ctZ2FwOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChncmlkLXJvdy1nYXA6IGNsYW1wKCAyLjVyZW0gLCAyLjE4NjI3NDUwOThyZW0gICsgIDEuNTY4NjI3NDUxdncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9faWNvbnMge1xuICAgICAgZ3JpZC1yb3ctZ2FwOiBjbGFtcCggMi41cmVtICwgMi4xODYyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChncmlkLXJvdy1nYXA6IGNsYW1wKCAyLjVyZW0gLCAyLjE4NjI3NDUwOThyZW0gICsgIDEuNTY4NjI3NDUxdncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9faWNvbnMge1xuICAgICAgZ3JpZC1yb3ctZ2FwOiBjYWxjKDIuNXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtcm93LWdhcDogMi41cmVtO1xuICB9XG59XG4ubWVudV9faWNvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1lbnVfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAxIDUwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGNvbHVtbi1nYXA6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoY29sdW1uLWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBjb2x1bW4tZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNjIyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoY29sdW1uLWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBjb2x1bW4tZ2FwOiBjYWxjKDEuMjVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICB9XG59XG4ubWVudV9fbGlzdCB7XG4gIHJvdy1nYXA6IDAuNjI1cmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIHJvdy1nYXA6IDMuNzVyZW07XG4gIH1cbn1cbi5tZW51X19saW5rIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGN1cnJlbnRDb2xvciAwJSwgY3VycmVudENvbG9yIDEwMCUpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAwIDJweDsgLyog0J3QsNGH0LDQu9GM0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAubWVudV9fbGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDsgLyog0JrQvtC90LXRh9C90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8g0L/RgNC4INC90LDQstC10LTQtdC90LjQuCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgY29sb3I6ICMyOTc3RDU7XG4gIH1cbn1cblxuLmljb24tbWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaWNvbi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEuODc1cmVtO1xuICAgIGhlaWdodDogMS4xMjVyZW07XG4gICAgei1pbmRleDogNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAoYW55LWhvdmVyOiBub25lKSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmljb24tbWVudSBzcGFuLCAuaWNvbi1tZW51OjpiZWZvcmUsIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwLjE4NzVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjk2RDtcbiAgfVxuICAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgfVxuICAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmljb24tbWVudSBzcGFuIHtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudSBzcGFuIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmJlZm9yZSB7XG4gICAgdG9wOiBjYWxjKDQ1JSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBib3R0b206IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvb3Rlcl9fbWFwIHtcbiAgei1pbmRleDogMTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuZm9vdGVyX19tYXAge1xuICAgIGhlaWdodDogMzUuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAyNC41NjI1cmVtICwgMjEuNzA3NTk4MDM5MnJlbSAgKyAgMTQuMjc0NTA5ODAzOXZ3ICwgMzUuOTM3NXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fbWFwIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDI0LjU2MjVyZW0gLCAyMS43MDc1OTgwMzkycmVtICArICAxNC4yNzQ1MDk4MDM5dncgLCAzNS45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDI0LjU2MjVyZW0gLCAyMS43MDc1OTgwMzkycmVtICArICAxNC4yNzQ1MDk4MDM5dncgLCAzNS45Mzc1cmVtICkpIHtcbiAgICAuZm9vdGVyX19tYXAge1xuICAgICAgaGVpZ2h0OiBjYWxjKDI0LjU2MjVyZW0gKyAxMS4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXJfX21hcCB7XG4gICAgaGVpZ2h0OiAyNC41NjI1cmVtO1xuICB9XG59XG4uZm9vdGVyX190ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDAuNDM3NXJlbSAsIDAuMzQzMzgyMzUyOXJlbSAgKyAgMC40NzA1ODgyMzUzdncgLCAwLjgxMjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAwLjQzNzVyZW0gLCAwLjM0MzM4MjM1MjlyZW0gICsgIDAuNDcwNTg4MjM1M3Z3ICwgMC44MTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMC40Mzc1cmVtICwgMC4zNDMzODIzNTI5cmVtICArICAwLjQ3MDU4ODIzNTN2dyAsIDAuODEyNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygwLjQzNzVyZW0gKyAwLjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDAuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuZm9vdGVyX190ZXh0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC40Mzc1cmVtICwgMC4zNDMzODIzNTI5cmVtICArICAwLjQ3MDU4ODIzNTN2dyAsIDAuODEyNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNDM3NXJlbSAsIDAuMzQzMzgyMzUyOXJlbSAgKyAgMC40NzA1ODgyMzUzdncgLCAwLjgxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAwLjQzNzVyZW0gLCAwLjM0MzM4MjM1MjlyZW0gICsgIDAuNDcwNTg4MjM1M3Z3ICwgMC44MTI1cmVtICkpIHtcbiAgICAuZm9vdGVyX190ZXh0IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuNDM3NXJlbSArIDAuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyX190ZXh0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40Mzc1cmVtO1xuICB9XG59XG4uZm9vdGVyX190ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5mb290ZXJfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42MjQ1MDk4MDM5cmVtICArICAwLjYyNzQ1MDk4MDR2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjI0NTA5ODAzOXJlbSAgKyAgMC42Mjc0NTA5ODA0dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjYyNDUwOTgwMzlyZW0gICsgIDAuNjI3NDUwOTgwNHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC43NXJlbSArIDAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5mb290ZXJfX3RleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGluZS1oZWlnaHQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICkpIHtcbiAgICAuZm9vdGVyX190ZXh0IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsaW5lLWhlaWdodDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgbGluZS1oZWlnaHQ6IGNhbGMoMC45Mzc1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyX190ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMC45Mzc1cmVtO1xuICB9XG59XG4uZm9vdGVyX190ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNGRkY5RkQ7XG59XG5cbi5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW4ge1xuICAgIHBhZGRpbmctdG9wOiAxMC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggNy4xMjVyZW0gLCA2LjI5MzYyNzQ1MXJlbSAgKyAgNC4xNTY4NjI3NDUxdncgLCAxMC40Mzc1cmVtICkpIHtcbiAgICAubWFpbiB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDcuMTI1cmVtICwgNi4yOTM2Mjc0NTFyZW0gICsgIDQuMTU2ODYyNzQ1MXZ3ICwgMTAuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDcuMTI1cmVtICwgNi4yOTM2Mjc0NTFyZW0gICsgIDQuMTU2ODYyNzQ1MXZ3ICwgMTAuNDM3NXJlbSApKSB7XG4gICAgLm1haW4ge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoNy4xMjVyZW0gKyAzLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tYWluIHtcbiAgICBwYWRkaW5nLXRvcDogNy4xMjVyZW07XG4gIH1cbn1cbi5tYWluIHtcbiAgcGFkZGluZy1ib3R0b206IDMuNTYyNXJlbTtcbn1cbi5tYWluX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDEuODc1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1haW5fX2NvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLm1haW5fX2NvbnRlbnQge1xuICBmbGV4OiAwIDEgMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWFpbl9fY29udGVudCB7XG4gICAgcm93LWdhcDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChyb3ctZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNjIyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tYWluX19jb250ZW50IHtcbiAgICAgIHJvdy1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC42MjI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChyb3ctZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNjIyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tYWluX19jb250ZW50IHtcbiAgICAgIHJvdy1nYXA6IGNhbGMoMS4yNXJlbSArIDIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1haW5fX2NvbnRlbnQge1xuICAgIHJvdy1nYXA6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tYWluX19jb250ZW50IHtcbiAgICBvcmRlcjogMTtcbiAgfVxufVxuLm1haW5fX3RpdGxlIHNwYW4ge1xuICBjb2xvcjogIzI5NzdENTtcbn1cbi5tYWluX19iYXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuOTM3NXJlbTtcbn1cbi5tYWluX19idXR0b24tYmx1ZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAyOTZEO1xuICBsaW5lLWhlaWdodDogMS42ODc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRDNkU5O1xuICBib3gtc2hhZG93OiAtMnB4IDdweCAwcHggMHB4ICMyOTc3RDU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG4ubWFpbl9fYnV0dG9uLWJsdWU6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDdweCk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjMjk3N0Q1O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1haW5fX2J1dHRvbi1ibHVlIHtcbiAgICBib3gtc2hhZG93OiAtMnB4IDNweCAwcHggMHB4ICMyOTc3RDU7XG4gIH1cbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAubWFpbl9fYnV0dG9uLWJsdWU6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tYWluX19idXR0b24tY2xlYXIge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApKSB7XG4gICAgLm1haW5fX2J1dHRvbi1jbGVhciB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApKSB7XG4gICAgLm1haW5fX2J1dHRvbi1jbGVhciB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC43NXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tYWluX19idXR0b24tY2xlYXIge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuLm1haW5fX2J1dHRvbi1jbGVhciB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAubWFpbl9fYnV0dG9uLWNsZWFyOmhvdmVyIHtcbiAgICBjb2xvcjogIzA4MDcwNztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1haW5fX2J1dHRvbi1jbGVhciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cbi5tYWluX19pbWFnZSB7XG4gIG9yZGVyOiAwO1xuICBmbGV4OiAwIDEgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctbGVmdDogOS4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTIuMzUyOTQxMDk4M3JlbSAgKyAgMTEuNzY0NzA1ODAzOXZ3ICwgOS4zNzVyZW0gKSkge1xuICAgIC5tYWluX19pbWFnZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMi4zNTI5NDEwOTgzcmVtICArICAxMS43NjQ3MDU4MDM5dncgLCA5LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMi4zNTI5NDEwOTgzcmVtICArICAxMS43NjQ3MDU4MDM5dncgLCA5LjM3NXJlbSApKSB7XG4gICAgLm1haW5fX2ltYWdlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygwLjAwMDAwMDA2MjVyZW0gKyA5LjM3NDk5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW5fX2ltYWdlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA5LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjU1NjM3MjU0OXJlbSAgKyAgNy44NDMxMzcyNTQ5dncgLCA5LjM3NXJlbSApKSB7XG4gICAgLm1haW5fX2ltYWdlIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuNTU2MzcyNTQ5cmVtICArICA3Ljg0MzEzNzI1NDl2dyAsIDkuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuNTU2MzcyNTQ5cmVtICArICA3Ljg0MzEzNzI1NDl2dyAsIDkuMzc1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygzLjEyNXJlbSArIDYuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgcGFkZGluZy1yaWdodDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgb3JkZXI6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctbGVmdDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAzLjkwOTMxMzcwOThyZW0gICsgIC0zLjkyMTU2ODU0OXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5tYWluX19pbWFnZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAzLjkwOTMxMzcwOThyZW0gICsgIC0zLjkyMTU2ODU0OXZ3ICwgMy4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDMuMTI1cmVtICsgLTMuMTI0OTk5OTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW5fX2ltYWdlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAzLjkwOTMxMzcwOThyZW0gICsgIC0zLjkyMTU2ODU0OXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5tYWluX19pbWFnZSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAzLjkwOTMxMzcwOThyZW0gICsgIC0zLjkyMTU2ODU0OXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5tYWluX19pbWFnZSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDMuMTI1cmVtICsgLTMuMTI0OTk5OTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgcGFkZGluZy1yaWdodDogMy4xMjVyZW07XG4gIH1cbn1cbi5tYWluX19pbWFnZSBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IGNsYW1wKDI5N3B4LCA0MHZ3LCA1OTVweCk7XG4gIGFzcGVjdC1yYXRpbzogNTk1Lzg5MztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ubWFpbl9faW1hZ2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiBjbGFtcCg1MzVweCwgNTB2dywgODkzcHgpO1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgYmFja2dyb3VuZDogIzAwMjk2RDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMjEyLCAyMjgsIDI0NCkgMTUlLCByZ2IoNjgsIDE5OCwgMjMzKSA0NSUsIHJnYig0MSwgMTE5LCAyMTMpIDcwJSwgcmdiKDAsIDQxLCAxMDkpIDEwMCUpO1xuICB6LWluZGV4OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1haW5fX2ltYWdlOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC01NSUpO1xuICB9XG59XG5cbi5jb250YWN0cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENEU0RjQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5jb250YWN0cyB7XG4gICAgcGFkZGluZy10b3A6IDQuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDMuNzVyZW0gLCAzLjU2MTc2NDcwNTlyZW0gICsgIDAuOTQxMTc2NDcwNnZ3ICwgNC41cmVtICkpIHtcbiAgICAuY29udGFjdHMge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAzLjc1cmVtICwgMy41NjE3NjQ3MDU5cmVtICArICAwLjk0MTE3NjQ3MDZ2dyAsIDQuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDMuNzVyZW0gLCAzLjU2MTc2NDcwNTlyZW0gICsgIDAuOTQxMTc2NDcwNnZ3ICwgNC41cmVtICkpIHtcbiAgICAuY29udGFjdHMge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMy43NXJlbSArIDAuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jb250YWN0cyB7XG4gICAgcGFkZGluZy10b3A6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmNvbnRhY3RzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNC41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDMuNTYxNzY0NzA1OXJlbSAgKyAgMC45NDExNzY0NzA2dncgLCA0LjVyZW0gKSkge1xuICAgIC5jb250YWN0cyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAzLjU2MTc2NDcwNTlyZW0gICsgIDAuOTQxMTc2NDcwNnZ3ICwgNC41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDMuNTYxNzY0NzA1OXJlbSAgKyAgMC45NDExNzY0NzA2dncgLCA0LjVyZW0gKSkge1xuICAgIC5jb250YWN0cyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygzLjc1cmVtICsgMC43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNvbnRhY3RzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmNvbnRhY3RzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUZEO1xuICB9XG59XG4uY29udGFjdHNfX2l0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuY29udGFjdHNfX2l0ZW1zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgfVxufVxuXG4uY29udGFjdF9faXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGNvbHVtbi1nYXA6IDEuMjVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuY29udGFjdF9faXRlbSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDEwMHB4IDE1MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5jb250YWN0X19pdGVtIHtcbiAgICBjb2x1bW4tZ2FwOiAyOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoY29sdW1uLWdhcDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC03LjIxNTY4NjE5NjNyZW0gICsgIDM2LjA3ODQzMTI5NDF2dyAsIDI4Ljc1cmVtICkpIHtcbiAgICAuY29udGFjdF9faXRlbSB7XG4gICAgICBjb2x1bW4tZ2FwOiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTcuMjE1Njg2MTk2M3JlbSAgKyAgMzYuMDc4NDMxMjk0MXZ3ICwgMjguNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoY29sdW1uLWdhcDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC03LjIxNTY4NjE5NjNyZW0gICsgIDM2LjA3ODQzMTI5NDF2dyAsIDI4Ljc1cmVtICkpIHtcbiAgICAuY29udGFjdF9faXRlbSB7XG4gICAgICBjb2x1bW4tZ2FwOiBjYWxjKDAuMDAwMDAwMDYyNXJlbSArIDI4Ljc0OTk5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuY29udGFjdF9faXRlbSB7XG4gICAgY29sdW1uLWdhcDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuY29udGFjdF9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjEyNXJlbTtcbiAgfVxufVxuLmNvbnRhY3RfX2ljb24ge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICBncmlkLXJvdy1zdGFydDogMTtcbiAgZ3JpZC1yb3ctZW5kOiAzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmNvbnRhY3RfX2ljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDI7XG4gIH1cbn1cbi5jb250YWN0X19pY29uIGltZyB7XG4gIG1heC1oZWlnaHQ6IDMuMTI1cmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuY29udGFjdF9faWNvbiBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKG1heC1oZWlnaHQ6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNTYxMjc0NTA5OHJlbSAgKyAgMS41Njg2Mjc0NTF2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAuY29udGFjdF9faWNvbiBpbWcge1xuICAgICAgbWF4LWhlaWdodDogY2xhbXAoIDEuODc1cmVtICwgMS41NjEyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWF4LWhlaWdodDogY2xhbXAoIDEuODc1cmVtICwgMS41NjEyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5jb250YWN0X19pY29uIGltZyB7XG4gICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEuODc1cmVtICsgMS4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNvbnRhY3RfX2ljb24gaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmNvbnRhY3RfX2ljb24gaW1nIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5jb250YWN0X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMC45NjgxMzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDEuNzVyZW0gKSkge1xuICAgIC5jb250YWN0X190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDAuOTY4MTM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCAxLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMC45NjgxMzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDEuNzVyZW0gKSkge1xuICAgIC5jb250YWN0X190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS4xMjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNvbnRhY3RfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB9XG59XG4uY29udGFjdF9fdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIGNvbG9yOiAjMDAyOTZEO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmNvbnRhY3RfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICB9XG59XG4uY29udGFjdF9fdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIDNcIjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmNvbnRhY3RfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjcwMjY5NjA3ODRyZW0gICsgIDAuNTQ5MDE5NjA3OHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MDI2OTYwNzg0cmVtICArICAwLjU0OTAxOTYwNzh2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MDI2OTYwNzg0cmVtICArICAwLjU0OTAxOTYwNzh2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5jb250YWN0X190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjgxMjVyZW0gKyAwLjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jb250YWN0X190ZXh0IHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuY29udGFjdF9fdGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGluZS1oZWlnaHQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAxLjA0NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS43NXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX3RleHQge1xuICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAxLjA0NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsaW5lLWhlaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDEuMDQ2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjc1cmVtICkpIHtcbiAgICAuY29udGFjdF9fdGV4dCB7XG4gICAgICBsaW5lLWhlaWdodDogY2FsYygxLjE4NzVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jb250YWN0X190ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMS4xODc1cmVtO1xuICB9XG59XG4uY29udGFjdF9fdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAyOTZEO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuY29udGFjdF9fdGV4dCBwOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC43ODA2MzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDEuNTYyNXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX3RleHQgcDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc4MDYzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgMS41NjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc4MDYzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgMS41NjI1cmVtICkpIHtcbiAgICAuY29udGFjdF9fdGV4dCBwOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjkzNzVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNvbnRhY3RfX3RleHQgcDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG4gIH1cbn1cblxuLnNlcnZpY2VzIHtcbiAgcGFkZGluZzogNC4xODc1cmVtIDByZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4uc2VydmljZXNfX2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvICU7XG4gIHRvcDogNjdweDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuLnNlcnZpY2VzX19oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuLnNlcnZpY2VzX19pdGVtcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gIHJvdy1nYXA6IDEuMjVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjEuOTk4NzVlbSkge1xuICAuc2VydmljZXNfX2l0ZW1zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuc2VydmljZXNfX2l0ZW1zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuLnNlcnZpY2VzX19pdGVtIHtcbiAgcGFkZGluZzogMi41NjI1cmVtIDJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDI5NkQ7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTJweCAxcHggIzI5NzdENTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbnVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2hvbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURRRDs7QUNOQTs7O0VBR0Msc0JBQUE7QURTRDs7QUNDQTs7RUFFQyxZQUFBO0VBQ0EsZ0JBQUE7QURFRDs7QUNBQTtFQUNDLFdEUVc7RUNQWCxjQUFBO0VBQ0Esc0JERVk7RUNEWixrQkRFVTtFQ0FWLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURFRDs7QUNBQTs7O0VBR0Msc0JEVlk7RUNXWixrQkFBQTtBREdEOztBQ0RBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBRElEOztB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QUFBO0FIb1BEO0FJbE9FO0VEcEJGO0lDcUJHLGVBQUE7RUpxT0Q7QUFDRjtBSWxPQztFQUVDO0lEM0JGO01DNEJHLG9FQWhCYztJSm9QYjtFQUNGO0VJbE9BO0lEL0JGO01DZ0NHLHFEQUFBO0lKcU9DO0VBQ0Y7QUFDRjtBSW5PRTtFRHBDRjtJQ3FDRyxlQUFBO0VKc09EO0FBQ0Y7QUl4UEU7RURwQkY7SUNxQkcsaUJBQUE7RUoyUEQ7QUFDRjtBSXhQQztFQUVDO0lEM0JGO01DNEJHLHNFQWhCYztJSjBRYjtFQUNGO0VJeFBBO0lEL0JGO01DZ0NHLHVEQUFBO0lKMlBDO0VBQ0Y7QUFDRjtBSXpQRTtFRHBDRjtJQ3FDRyxpQkFBQTtFSjRQRDtBQUNGOztBRzVSQTtFQUNDLDRCQUFBO0FIK1JEO0FJbFJFO0VEZEY7SUNlRyxrQkFBQTtFSnFSRDtBQUNGO0FJbFJDO0VBRUM7SURyQkY7TUNzQkcsNEVBaEJjO0lKb1NiO0VBQ0Y7RUlsUkE7SUR6QkY7TUMwQkcsK0RBQUE7SUpxUkM7RUFDRjtBQUNGO0FJblJFO0VEOUJGO0lDK0JHLG9CQUFBO0VKc1JEO0FBQ0Y7QUl4U0U7RURkRjtJQ2VHLG9CQUFBO0VKMlNEO0FBQ0Y7QUl4U0M7RUFFQztJRHJCRjtNQ3NCRyw4RUFoQmM7SUowVGI7RUFDRjtFSXhTQTtJRHpCRjtNQzBCRyxpRUFBQTtJSjJTQztFQUNGO0FBQ0Y7QUl6U0U7RUQ5QkY7SUMrQkcsc0JBQUE7RUo0U0Q7QUFDRjtBRzVVQTtFQUlDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FIMlVEOztBS2haQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUxtWkY7QUkzVUU7RUM3RUY7SUQ4RUcsZ0JBQUE7RUo4VUQ7QUFDRjtBSTNVQztFQUVDO0lDcEZGO01EcUZHLHdFQWhCYztJSjZWYjtFQUNGO0VJM1VBO0lDeEZGO01EeUZHLHlEQUFBO0lKOFVDO0VBQ0Y7QUFDRjtBSTVVRTtFQzdGRjtJRDhGRyxlQUFBO0VKK1VEO0FBQ0Y7QUs5YUE7RUFP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RUkxeUJBO0lFL0VEO01GZ0ZFLG1FQUFBO0lKNnlCQztFQUNGO0FBQ0Y7QUkzeUJFO0VFcEZEO0lGcUZFLHlCQUFBO0VKOHlCRDtBQUNGO0FNcDRCQztFQUlFLGtCQUFBO0VBQ0EseUJBQUE7QU5tNEJIO0FJcDBCRTtFRXBFRDtJRnFFRSxrQkFBQTtFSnUwQkQ7QUFDRjtBSXAwQkM7RUFFQztJRTNFRDtNRjRFRSwwRUFoQmM7SUpzMUJiO0VBQ0Y7RUlwMEJBO0lFL0VEO01GZ0ZFLDBEQUFBO0lKdTBCQztFQUNGO0FBQ0Y7QUlyMEJFO0VFcEZEO0lGcUZFLGtCQUFBO0VKdzBCRDtBQUNGO0FJMTFCRTtFRXBFRDtJRnFFRSxtQkFBQTtFSjYxQkQ7QUFDRjtBSTExQkM7RUFFQztJRTNFRDtNRjRFRSw2RUFoQmM7SUo0MkJiO0VBQ0Y7RUkxMUJBO0lFL0VEO01GZ0ZFLGlFQUFBO0lKNjFCQztFQUNGO0FBQ0Y7QUkzMUJFO0VFcEZEO0lGcUZFLHNCQUFBO0VKODFCRDtBQUNGO0FNcDdCQztFQVFFLGdCQUFBO0VBQ0EsY0FBQTtBTis2Qkg7O0FPaDhCQTtFQUNFLHlCQUFBO0FQbThCRjtBSXgzQkU7RUc1RUY7SUg2RUcsdUJBQUE7RUoyM0JEO0FBQ0Y7QUl4M0JDO0VBRUM7SUduRkY7TUhvRkcsK0VBaEJjO0lKMDRCYjtFQUNGO0VJeDNCQTtJR3ZGRjtNSHdGRyxnRUFBQTtJSjIzQkM7RUFDRjtBQUNGO0FJejNCRTtFRzVGRjtJSDZGRyxxQkFBQTtFSjQzQkQ7QUFDRjtBTzE5QkE7RUFHRSx5QkFBQTtBUDA5QkY7QU92OUJFO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBUHk5Qkg7QU94OUJHO0VBTEQ7SUFNRSxzQkFBQTtFUDI5QkY7QUFDRjtBT3Q5QkU7RUFDQyxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FQdzlCSDtBSWo2QkU7RUcxREE7SUgyREMsZ0JBQUE7RUpvNkJEO0FBQ0Y7QUlqNkJDO0VBRUM7SUdqRUE7TUhrRUMsdUVBaEJjO0lKbTdCYjtFQUNGO0VJajZC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RTtFRytHQztJSDlHQSxvQkFBQTtFSmd3Q0Q7QUFDRjtBT2hwQ0k7RUFIRDtJQUlFLG1CQUFBO0lBQ0EsdUJBQUE7RVBtcENIO0FBQ0Y7QUl4eENFO0VHZ0pBO0lIL0lDLGtCQUFBO0VKMnhDRDtBQUNGO0FJeHhDQztFQUVDO0lHeUlBO01IeElDLDJFQWhCYztJSjB5Q2I7RUFDRjtFSXh4Q0E7SUdxSUE7TUhwSUMsNkRBQUE7SUoyeENDO0VBQ0Y7QUFDRjtBSXp4Q0U7RUdnSUE7SUgvSEMsbUJBQUE7RUo0eENEO0FBQ0Y7QU85cENFO0VBRUMsZ0JBQUE7RUFDQSxxQkFBQTtFQUVBLGNBQUE7QVA4cENIO0FPN3BDRztFQU5EO0lBT0UsbUJBQUE7RVBncUNGO0FBQ0Y7QU90cENFO0VBQ0MsNEJBQUE7QVB3cENIO0FJM3pDRTtFR2tLQTtJSGpLQyxrQkFBQTtFSjh6Q0Q7QUFDRjtBSTN6Q0M7RUFFQztJRzJKQTtNSDFKQyw0RUFoQmM7SUo2MENiO0VBQ0Y7RUkzekNBO0lHdUpBO01IdEpDLCtEQUFBO0lKOHpDQztFQUNGO0FBQ0Y7QUk1ekNFO0VHa0pBO0lIakpDLG9CQUFBO0VKK3pDRDtBQUNGO0FJajFDRTtFR2tLQTtJSGpLQyxvQkFBQTtFSm8xQ0Q7QUFDRjtBSWoxQ0M7RUFFQztJRzJKQTtNSDFKQyw4RUFoQmM7SUptMkNiO0VBQ0Y7RUlqMUNBO0lHdUpBO01IdEpDLGlFQUFBO0lKbzFDQztFQUNGO0FBQ0Y7QUlsMUNFO0VHa0pBO0lIakpDLHNCQUFBO0VKcTFDRDtBQUNGO0FPcnNDRTtFQUlDLGdCQUFBO0VBQ0EsY0FBQTtBUG9zQ0g7QUkzMkNFO0VHd0tDO0lIdktBLHdCQUFBO0VKODJDRDtBQUNGO0FJMzJDQztFQUVDO0lHaUtDO01IaEtBLGtGQWhCYztJSjYzQ2I7RUFDRjtFSTMyQ0E7SUc2SkM7TUg1SkEsa0VBQUE7SUo4MkNDO0VBQ0Y7QUFDRjtBSTUyQ0U7RUd3SkM7SUh2SkEsd0JBQUE7RUorMkNEO0FBQ0Y7O0FPbnRDQTtFQUNDLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBUHN0Q0Q7QU9ydENFO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBUHV0Q0g7QU85c0NFO0VBQ0MsbUJBQUE7QVBndENIO0FPanNDRTtFQUNDLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QVBtc0NIO0FPbHNDRztFQUxEO0lBTUUscUNBQUE7RVBxc0NGO0FBQ0Y7QU9wc0NHO0VBUkQ7SUFTRSwwQkFBQTtFUHVzQ0Y7QUFDRjtBT2xzQ0U7RUFDQyx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7QVBvc0NIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQvNGW0LrRgdC40L3RltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGI0YDQuNGE0YLRltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vJmRpc3BsYXk9c3dhcCAtINC00L7QtNCw0YLQuCDQv9GA0Lgg0L/RltC00LrQu9GO0YfQtdC90L3RliDRh9C10YDQtdC3INC/0LvQsNCz0ZbQvVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDQu9C+0LrQsNC70YzQvdGWINGE0LDQudC70Lgg0YjRgNC40YTRgtGW0LJcXHJcXG4vL0BpbXBvcnQgXFxcImZvbnRzL2ZvbnRzXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGW0LrQvtC90LrQvtCy0LjRhSDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0YTQsNC50Lsg0ZbQutC+0L3QutC+0LLQvtCz0L4g0YjRgNC40YTRgtGDXFxyXFxuLy9AaW1wb3J0IFxcXCJmb250cy9pY29uc1xcXCI7XFxyXFxuXFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0YjQsNCx0LvQvtC90YMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vJmRpc3BsYXk9c3dhcCDQlNC+0LHQsNCy0LjRgtGMINC/0YDQuCDQv9C+0LTQutC70Y7Rh9C10L3QuNC4INGH0LXRgNC10Lcg0L/Qu9Cw0LPQuNC9QGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzpyZWd1bGFyLDUwMCw2MDAsNzAwLDgwMCk7XFxyXFxuLy8gJnN1YnNldD1jeXJpbGxpYy1leHRcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zKzM6MzAwLHJlZ3VsYXImZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjEwMCwzMDAscmVndWxhciw1MDAsNjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTozMDAscmVndWxhciw1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOnJlZ3VsYXIsNjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbi8vINCX0LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0YjRgNC40YTRgiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4kZm9udEZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiRmb250U2l6ZTogcmVtKDIwKTsgLy8g0LTQtSAxNChweCkgLSDRgNC+0LfQvNGW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0Lcg0LzQsNC60LXRgtGDXFxyXFxuXFxyXFxuLy8g0J7RgdC90L7QstC90ZYg0LrQvtC70YzQvtGA0LhcXHJcXG4kbWFpbkNvbG9yOiAjMDAwOyAvLyDQmtC+0LvRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINCw0LTQsNC/0YLQuNCy0L3QvtGXINGB0ZbRgtC60LggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQnNGW0L3RltC80LDQu9GM0L3QsCDRiNC40YDQuNC90LAg0YHRgtC+0YDRltC90LrQuFxcclxcbiRtaW5XaWR0aDogMzIwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQv9C+0LvQvtGC0L3QsCAo0LzQsNC60LXRgtGDKVxcclxcbiRtYXhXaWR0aDogMTkyMDtcXHJcXG4vLyAkbWF4V2lkdGg6IDE3Mjg7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC+0LHQvNC10LbRg9GO0YfQvtCz0L4g0LrQvtC90YLQtdC50L3QtdGA0LAgKDAgPSDQvdC10LzQsNGUINC+0LHQvNC10LbQtdC90L3RjylcXHJcXG4kbWF4V2lkdGhDb250YWluZXI6IDE1NjU7XFxyXFxuLy8g0JfQsNCz0LDQu9GM0L3QuNC5INCy0ZbQtNGB0YLRg9C/INGDINC60L7QvdGC0LXQudC90LXRgNCwXFxyXFxuLy8gKDMwID0g0L/QviAxNXB4INC70ZbQstC+0YDRg9GHINGWINC/0YDQsNCy0L7RgNGD0YcsIDAgPSDQvdC10LzQsNGUINCy0ZbQtNGB0YLRg9C/0YMpXFxyXFxuJGNvbnRhaW5lclBhZGRpbmc6IDMwO1xcclxcblxcclxcbi8vINCo0LjRgNC40L3QsCDRgdC/0YDQsNGG0YzQvtCy0YPQstCw0L3QvdGPINC/0LXRgNGI0L7Qs9C+INCx0YDQtdC50LrQv9C+0ZbQvdGC0YNcXHJcXG4kY29udGFpbmVyV2lkdGg6ICRtYXhXaWR0aENvbnRhaW5lciArICRjb250YWluZXJQYWRkaW5nO1xcclxcblxcclxcbi8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4XFxyXFxuJHBjOiBlbSgkY29udGFpbmVyV2lkdGgpOyAvLyDQn9CaLCDQvdC+0YPRgtCx0YPQutC4LCDQtNC10Y/QutGWINC/0LvQsNC90YjQtdGC0Lgg0YMg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiR0YWJsZXQ6IGVtKDk5MS45OCk7IC8vINCf0LvQsNC90YjQtdGC0LgsINC00LXRj9C60ZYg0YLQtdC70LXRhNC+0L3QuCDQsiDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJG1vYmlsZTogZW0oNzY3Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBMXFxyXFxuJG1vYmlsZVNtYWxsOiBlbSg0NzkuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IFNcXHJcXG5cXHJcXG4vLyDQotC40L8g0LDQtNCw0L/RgtC40LLQsDpcXHJcXG4vLyAxID0g0YfRg9C50L3RltGB0YLRjCAo0YMg0LrQvtC90YLQtdC50L3QtdGA0LAg0L3QtdC80LDRlCDQsdGA0LXQudC60L/QvtGW0L3RgtGW0LIpLFxcclxcbi8vIDIgPSDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgiAo0LrQvtC90YLQtdC50L3QtdGAINC30LzRltC90Y7RlCDRgdCy0L7RjiDRiNC40YDQuNC90YMg0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIpXFxyXFxuJHJlc3BvbnNpdmVUeXBlOiAxO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQntCx0L3Rg9C70LXQvdC90Y8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbnVsbFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtC10LPQsCBCT0RZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Ly8g0KHQutGA0L7Qu9C7INC30LDQsdC70L7QutC+0LLQsNC90L5cXHJcXG5cXHQubG9jayAmIHtcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdFxcdHRvdWNoLWFjdGlvbjogbm9uZTtcXHJcXG5cXHRcXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQodCw0LnRgiDQt9Cw0LLQsNC90YLQsNC20LXQvdC40LlcXHJcXG5cXHQubG9hZGVkICYge1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0J7QsdC+0LvQvtC90LrQsCB3cmFwcGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLndyYXBwZXIge1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0Jjo6YmVmb3Jle1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHRcXHRpbnNldDogMDtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuXFx0XFx0XFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcblxcdFxcdFxcdC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0XFx0XFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0XFx0XFx0ei1pbmRleDogMjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fS5tZW51LW9wZW4gJjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdFxcdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcblxcdH1cXHJcXG5cXHRAc3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGNsaXA7XFxyXFxuXFx0fVxcclxcblxcdC8vINCf0YDQuNGC0LjRgdC60LDRlNC80L4gZm9vdGVyXFxyXFxuXFx0PiBtYWluIHtcXHJcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KTRltC60YEg0LTQu9GPINGB0LvQsNC50LTQtdGA0ZbQslxcclxcblxcdD4gKiB7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0J7QsdC80LXQttGD0Y7Rh9C40Lkg0LrQvtC90YLQtdC50L3QtdGAID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vKlxcclxcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxcclxcbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcXHJcXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cXHJcXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxcclxcbiovXFxyXFxuQGlmICgkcmVzcG9uc2l2ZVR5cGU9PTEpIHtcXHJcXG5cXHQvLyDQp9GD0LnQvdCwXFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcblxcdFxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH0gQGVsc2Uge1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSwgMTUpO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksIDE1KTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59IEBlbHNlIHtcXHJcXG5cXHQvLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQsNC80LhcXHJcXG5cXHRbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG5cXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwYykge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDk3MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oNzUwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IG5vbmU7XFxyXFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wIGFuZCAkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LHQsNC30L7QstC40YUg0YHRgtC40LvRltCyLCDRiNCw0LHQu9C+0L3RltCyICjQt9Cw0LPQvtGC0ZbQstC10LvRjCkg0YLQsCDQtNC+0L/QvtC80ZbQttC90LjRhSDQutC70LDRgdGW0LJcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstC40LzQutC90LXQvdC90Y8g0LrQvtC90LrRgNC10YLQvdC40YUg0YHRgtC40LvRltCyINC00LjQstC40YHRjCBiYXNlLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQt9Cw0LPQsNC70YzQvdC40YUg0LXQu9C10LzQtdC90YLRltCyINC/0YDQvtC10LrRgtGDXFxyXFxuQGltcG9ydCBcXFwiY29tbW9uXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDQsdC70L7QutGW0LJcXHJcXG5AaW1wb3J0IFxcXCJoZWFkZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcImZvb3RlclxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0YHRgtC+0YDRltC90L7QulxcclxcbkBpbXBvcnQgXFxcImhvbWVcXFwiO1xcclxcblwiLFwiKiB7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcblxcdGJvcmRlcjogMHB4O1xcclxcbn1cXHJcXG4qLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpmb2N1cyxcXHJcXG46YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5hOmZvY3VzLFxcclxcbmE6YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRtaW4td2lkdGg6ICRtaW5XaWR0aCArIHB4O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRjb2xvcjogJG1haW5Db2xvcjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiAkZm9udFNpemU7XFxyXFxuXFx0Ly90ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcblxcdC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG51bCBsaSB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cIixcIi8vINCX0LDQs9Cw0LvRjNC90LjQuSDRhNCw0LnQuyDQtdC70LXQvNC10L3RgtGW0LIg0YTQvtGA0LxcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstGW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQutC+0L3QutGA0LXRgtC90L7Qs9C+INC10LvQtdC80LXQvdGC0LAg0YTQvtGA0LzQuCDQtNC40LLQuNGB0YwgYmFzZS9mb3Jtcy9mb3Jtcy5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZS9mb3Jtcy9mb3Jtc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQv9C+0L/QsNC/0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcG9wdXBcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YHQv9C+0LnQu9C10YDRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zcG9sbGVyc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtCw0LHRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS90YWJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC80LDQv1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvbWFwc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQsdC70L7QutGDIFxcXCLQv9C+0LrQsNC30LDRgtC4INGJ0LVcXFwiXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zaG93bW9yZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LvQuNC/0LrQvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3RpY2t5XFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LLQvdC+0LXQutGA0LDQvdC90L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxzY3JlZW5cXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QtdC60YDQsNC90L7RlyDQv9GA0L7QutGA0YPRgtC60LhcXHJcXG4vLyBTdHlsZXMgZm9yIGZ1bGxwYWdlIHNjcm9sbFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHBhZ2VcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPIHJpcHBsZSDQtdGE0LXQutGC0YNcXHJcXG4vLyBTdHlsZXMgZm9yIHJpcHBsZSBlZmZlY3RcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3JpcHBsZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LrQsNGB0YLQvtC80L3QvtCz0L4g0LrRg9GA0YHQvtGA0YNcXHJcXG4vLyBTdHlsZXMgZm9yIGN1c3RvbSBjdXJzb3JcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2N1cnNvclxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0YfRg9C50L3QuNGFINC60LDRgNGC0LjQvdC+0LogKElCRylcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZyAoZGl2INC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnYSAoYSDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG5bY2xhc3MqPVxcXCItaWJnXFxcIl0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5bY2xhc3MqPVxcXCItaWJnX2NvbnRhaW5cXFwiXSB7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0KjQsNCx0LvQvtC90LggKNC30LDQs9C+0YLRltCy0LvRlilcXHJcXG4vLyBAZXh0ZW5kICXRltC8J9GPINGI0LDQsdC70L7QvdGDO1xcclxcbi8vINCh0L3RltC/0L/QtdGCIChTQ1NTKTogZXhcXHJcXG5cXHJcXG4vLyDQm9GW0YfQuNC70YzQvdC40Log0LTQu9GPINGB0L/QuNGB0LrRg1xcclxcbiVsaXN0Q291bnRlciB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdGNvdW50ZXItcmVzZXQ6IGl0ZW07XFxyXFxuXFx0bGkge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHQmOmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGl0ZW07XFxyXFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihpdGVtKTtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdC1INCy0ZbQtNC10L5cXHJcXG4lcmVzcG9uc2l2ZVZpZGVvIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDU2LjI1JTtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JLRltC00LXQviDRj9C6INGE0L7QvVxcclxcbiV2aWRlb0JhY2tncm91bmQge1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdHotaW5kZXg6IC0xMDA7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0ZbRgNC40Lkg0YTRltC70YzRgtGAXFxyXFxuJWdyYXlmaWx0ZXIge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxyXFxuXFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHQutCw0YHRg9Cy0LDRgtC4INCy0LjQtNGW0LvQtdC90L3Rj1xcclxcbiVub3NlbGVjdCB7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi8vINCU0LfQtdGA0LrQsNC70YzQvdC1INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xcclxcbiVtaXJyb3Ige1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbn1cXHJcXG4vLyDQn9C70LDQstC90LjQuSDRgdC60YDQvtC70LtcXHJcXG4lc21vb3Roc2Nyb2xsIHtcXHJcXG5cXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxufVxcclxcbi8vINCh0YXQvtCy0LDRgtC4INGB0LrRgNC+0LvQu1xcclxcbiVoaWRlc2Nyb2xsIHtcXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy8g0JfQsNCz0L7Qu9C+0LLQutC4LCDQt9Cw0LPQsNC70YzQvdGWINCR0JXQnCDQsdC70L7QutC4INGC0LAg0ZbQvdGI0LUuLi5cXHJcXG5cXHJcXG4ucGFnZSB7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLnBhZ2VfX21haW5cXHJcXG5cXHJcXG5cXHRcXHQmX19tYWluIHtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jl9fY29tdGFjdHMge1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmX19zZXJ2aWNlcyB7XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmJ0bntcXHJcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxOCwgMTMpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDM5LCAyNCk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIDM5LCAyNCk7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IHJlbSgxMSk7XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IHJlbSgxMSk7XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IG1hdGguZGl2KDI3ICwgMTgpO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxNSk7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDEwKTsgXFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4uYnV0dG9uLWJvcmRlcntcXHJcXG5cXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdGNvbG9yOiAjMDAyOTZEO1xcclxcblxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICMwMDI5NkQ7XFxyXFxuXFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ0QzZFOSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4zcyBlYXNlLCBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcblxcdFxcdGNvbG9yOiAjZmZmO1xcclxcblxcdH1cXHJcXG5cXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzY2NjY2NjtcXHJcXG5cXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogMTQwcHg7XFxyXFxuICAgICAgICAgcGFkZGluZzogcmVtKDkpIHJlbSgyNCk7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzY2NjY2NiA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMCU7XFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLnN1YnRpdGxlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDEzKTtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsaW5lLWhlaWdodFxcXCIsIDMwLCAyMCk7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzI5NzdENTtcXHJcXG59XFxyXFxuLnRpdGxle1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDY0LCAzMik7XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGluZS1oZWlnaHRcXFwiLCA5NiwgNDgpO1xcclxcbn1cXHJcXG4udGV4dCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJTb3VyY2UgU2FucyAzXFxcIjtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTMpO1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxpbmUtaGVpZ2h0XFxcIiwgMjgsIDE5KTtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdGNvbG9yOiAjMjUyNTI1O1xcclxcblxcdHBhZGRpbmc6IHJlbSgwKSByZW0oNSkgcmVtKDApIHJlbSgwKTtcXHJcXG59XCIsXCIvL9Cf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGDXFxyXFxuQG1peGluIGZvbnQoJGZvbnRfbmFtZSwgJGZpbGVfbmFtZSwgJHdlaWdodCwgJHN0eWxlKSB7XFxyXFxuXFx0QGZvbnQtZmFjZSB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRmb250X25hbWU7XFxyXFxuXFx0XFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcclxcblxcdFxcdHNyYzogdXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAjeyR3ZWlnaHR9O1xcclxcblxcdFxcdGZvbnQtc3R5bGU6ICN7JHN0eWxlfTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vUGVyY2VudFxcclxcbkBmdW5jdGlvbiBwZXJjZW50KCRweCwgJGZyb20pIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRmcm9tKSAqIDEwMCU7XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL1JFTVxcclxcbkBmdW5jdGlvbiByZW0oJHB4KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAxNikgKyByZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL0VNXFxyXFxuQGZ1bmN0aW9uIGVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyBlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcblxcclxcbi8vQ3VycmVuY3lcXHJcXG5AbWl4aW4gY3VycmVuY3koJHN5bSkge1xcclxcblxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRjb250ZW50OiBcXFwiI3skc3ltfVxcXCI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyBHcmlkc1xcclxcbkBtaXhpbiBncmlkQ2FyZHMoJHR5cGU6IGZpdCwgJG1pbjogMjgwcHgsICRtYXg6IDFmciwgJGdhcDogMzBweCkge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z2FwOiAkZ2FwO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tI3skdHlwZX0sIG1pbm1heCgkbWluLCAkbWF4KSk7XFxyXFxufVxcclxcblxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QsCDQstC70LDRgdGC0LjQstGW0YHRgtGMIChjbGFtcClcXHJcXG5AbWl4aW4gYWRhcHRpdmVWYWx1ZSgkcHJvcGVydHksICRzdGFydFNpemUsICRtaW5TaXplLCAka2VlcFNpemU6IDAsICR3aWR0aEZyb206ICRjb250YWluZXJXaWR0aCwgJHdpZHRoVG86ICRtaW5XaWR0aCkge1xcclxcblxcdEBpZiAoJHN0YXJ0U2l6ZT09MCkge1xcclxcblxcdFxcdCRzdGFydFNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHRAaWYgKCRtaW5TaXplPT0wKSB7XFxyXFxuXFx0XFx0JG1pblNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQlNC70Y8gY2FsYygpO1xcclxcblxcdCRhZGRTaXplOiBtYXRoLmRpdigkc3RhcnRTaXplIC0gJG1pblNpemUsIDE2KTtcXHJcXG5cXHJcXG5cXHRAaWYgKCR3aWR0aEZyb20gPT0gJGNvbnRhaW5lcldpZHRoIGFuZCAkbWF4V2lkdGhDb250YWluZXIgPT0gMCkge1xcclxcblxcdFxcdCR3aWR0aEZyb206ICRtYXhXaWR0aDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0Lgg0LIgRU1cXHJcXG5cXHQkd2lkdGhGcm9tTWVkaWE6IGVtKCR3aWR0aEZyb20pO1xcclxcblxcdCR3aWR0aFRvTWVkaWE6IGVtKCR3aWR0aFRvKTtcXHJcXG5cXHJcXG5cXHQvLyDQpNC+0YDQvNGD0LvQsCDQv9C70LDQstCw0Y7Rh9C+0LPQviDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0Ly8g0JjRgdGC0L7Rh9C90LjQujogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9saW5lYXJseS1zY2FsZS1mb250LXNpemUtd2l0aC1jc3MtY2xhbXAtYmFzZWQtb24tdGhlLXZpZXdwb3J0L1xcclxcblxcdCRzbG9wZTogbWF0aC5kaXYoKCRzdGFydFNpemUgLSAkbWluU2l6ZSksICgkd2lkdGhGcm9tIC0gJHdpZHRoVG8pKTtcXHJcXG5cXHQkeUludGVyc2VjdGlvbjogLSR3aWR0aFRvICogJHNsb3BlICsgJG1pblNpemU7XFxyXFxuXFx0QGlmICgkeUludGVyc2VjdGlvbj09MCkge1xcclxcblxcdFxcdCR5SW50ZXJzZWN0aW9uOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0JGZseVZhbHVlOiAje3JlbSgkeUludGVyc2VjdGlvbil9XFxcIiArIFxcXCIgI3skc2xvcGUgKiAxMDB9dnc7XFxyXFxuXFxyXFxuXFx0Ly8g0J7RgtGA0LjQvNCw0L3QvdGPINC30L3QsNGH0LXQvdC90Y8g0LLQu9Cw0YHRgtC40LLQvtGB0YLRllxcclxcblxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkbWluU2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgcmVtKCRzdGFydFNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0Ly8g0K/QutGJ0L4g0L3QtdCz0LDRgtC40LLQvdGWINC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHRAaWYgKCRtaW5TaXplID4gJHN0YXJ0U2l6ZSkge1xcclxcblxcdFxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiByZW0oJG1pblNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQt9C90LDRh9C10L3QvdGPINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAzIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJHN0YXJ0U2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHQvLyDQkNC00LDQv9GC0YPRlNC80L4g0YDQvtC30LzRltGAINGDINC/0YDQvtC80ZbQttC60YMg0LzRltC2INC30LDQt9C90LDRh9C10L3QuNC80Lgg0YjQuNGA0LjQvdCw0LzQuCDQsifRjtC/0L7RgNGC0YNcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoVG9NZWRpYSkgYW5kIChtYXgtd2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdC8vINCv0LrRidC+INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L3QtSDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyBub3QgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IGNhbGMoI3tyZW0oJG1pblNpemUpfSArICN7JGFkZFNpemV9ICogKDEwMHZ3IC0gI3tyZW0oJHdpZHRoVG8pfSkgLyAje21hdGguZGl2KCR3aWR0aEZyb20sIDE2KSAtIG1hdGguZGl2KCR3aWR0aFRvLCAxNil9KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDIge1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkd2lkdGhUb01lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJG1pblNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmhlYWRlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdHotaW5kZXg6IDEwMDtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwxMTAgLDEwMCApO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwyMCAsMzAgKTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsMjAgLDMwICk7XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0aW5zZXQ6IDA7XFxyXFxuXFx0XFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcdFxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG5cXHRcXHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG5cXHRcXHR6LWluZGV4OiAtMTtcXHJcXG5cXHRcXHRvcGFjaXR5OiAwO1xcclxcblxcdFxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcblxcdFxcdFxcclxcblxcdH1cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19jb250YWluZXJcXHJcXG5cXHRcXHQmLl9oZWFkZXItc2Nyb2xse1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG5cXHRcXHRcXHQvLyBjb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHRcXHQvLyBvcGFjaXR5OiAwLjU7XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3Jle1xcclxcblxcdFxcdFxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmX19jb250YWluZXIge1xcclxcblxcdFxcdFxcdHotaW5kZXg6IDEwMDtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdFxcdGNvbHVtbi1nYXA6IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbG9nbyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRjb2x1bW4tZ2FwOiByZW0oMjApO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvLWljb25cXHJcXG5cXHJcXG5cXHRcXHQmX19sb2dvLWljb24ge1xcclxcblxcdFxcdFxcdHotaW5kZXg6IDEwMDtcXHJcXG5cXHRcXHRcXHRpbWd7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA1NSwgNDApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nby1uYW1lXFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jl9fbG9nby1uYW1lIHtcXHJcXG5cXHRcXHRcXHR6LWluZGV4OiA4MDtcXHJcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiBhdXRvO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRcXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvLXRpdGxlXFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jl9fbG9nby10aXRsZSB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjQsIDE1KTtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogbWF0aC5kaXYoMzMgLCAyNCk7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oMTUpO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAxNSwgMTApO1xcclxcblxcdFxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28tc3VidGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX19sb2dvLXN1YnRpdGxlIHtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNiwgMTIpO1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyMiAsIDE2KTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX21lbnVcXHJcXG5cXHJcXG5cXHRcXHQmX19tZW51IHtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2FjdGlvbnNcXHJcXG5cXHJcXG5cXHRcXHQmX19hY3Rpb25zIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19idXR0b25cXHJcXG5cXHJcXG5cXHRcXHQmX19idXR0b24ge1xcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG5cXHRcXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRcXHQvLyAubWVudV9fYm9keVxcclxcblxcclxcblxcdFxcdCZfX2JvZHkge1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdFxcdFxcdGxlZnQ6IC0xMDAlO1xcclxcblxcdFxcdFxcdFxcdC8vIG1hcmdpbi10b3A6IHJlbSgxMDApO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmctdG9wOiByZW0oMTM4KTtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiByZW0oMTM4KSByZW0oMjApIHJlbSgzOCkgcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHRcXHRcXHRcXHQubWVudS1vcGVuICZ7XFxyXFxuXFx0XFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQmX19pY29uc3tcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0XFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXHJcXG5cXHRcXHRcXHRcXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJncmlkLWNvbHVtbi1nYXBcXFwiLDgwICw0MCApO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdyaWQtcm93LWdhcFxcXCIsNjAgLDQwICk7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCZfX2ljb257XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWVudV9fbGlzdFxcclxcblxcclxcblxcdFxcdCZfX2xpc3Qge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRmbGV4OiAwIDEgNTAlO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImNvbHVtbi1nYXBcXFwiLCA2MCwgMjApO1xcclxcblxcdFxcdFxcdHJvdy1nYXA6IHJlbSgxMCk7XFxyXFxuXFx0XFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGVuZDtcXHJcXG5cXHRcXHRcXHRcXHRyb3ctZ2FwOiByZW0oNjApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1lbnVfX2l0ZW1cXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1lbnVfX2xpbmtcXHJcXG5cXHJcXG5cXHRcXHQmX19saW5rIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBjdXJyZW50Q29sb3IgMCUsIGN1cnJlbnRDb2xvciAxMDAlKSBuby1yZXBlYXQ7XFxyXFxuICAgICAgXFx0YmFja2dyb3VuZC1zaXplOiAwIDJweDsgLyog0J3QsNGH0LDQu9GM0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyAqL1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xcclxcbiAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGVhc2U7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDsgLyog0JrQvtC90LXRh9C90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8g0L/RgNC4INC90LDQstC10LTQtdC90LjQuCAqL1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICAjMjk3N0Q1O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcbi5pY29uLW1lbnUge1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vL0J1cmdlclxcclxcblxcclxcbi5pY29uLW1lbnUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0d2lkdGg6IHJlbSgzMCk7XFxyXFxuXFx0XFx0aGVpZ2h0OiByZW0oMTgpO1xcclxcblxcdFxcdHotaW5kZXg6IDU7XFxyXFxuXFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IG5vbmUpIHtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4sXFxyXFxuXFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdGhlaWdodDogcmVtKDMpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0Ym90dG9tOiAwO1xcclxcblxcdFxcdFxcdHdpZHRoOiA3NSU7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdHRvcDogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcblxcdFxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC5tZW51LW9wZW4gJiB7XFxyXFxuXFx0XFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZSxcXHJcXG5cXHRcXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiBjYWxjKDQ1JSAtIHJlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdFxcdGJvdHRvbTogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZm9vdGVyIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHQmX19tYXB7XFxyXFxuXFx0XFx0ei1pbmRleDogMTtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNTc1LCAzOTMpO1xcclxcblxcdH1cXHJcXG5cXHQvLyAuZm9vdGVyX190ZXh0XFxyXFxuXFx0XFxyXFxuXFx0Jl9fdGV4dCB7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDEzLCA3KTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDEzLCA3KTtcXHJcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0Zm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTIpO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxpbmUtaGVpZ2h0XFxcIiwgMjQsIDE1KTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjRkZGOUZEO1xcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE2NywxMTQgKTtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogcmVtKDU3KTtcXHJcXG5cXHRcXHQvLyAubWFpbl9fY29udGFpbmVyXFxyXFxuXFxyXFxuXFx0XFx0Jl9fY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGNvbHVtbi1nYXA6IHJlbSgzMCk7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tYWluX19jb250ZW50XFxyXFxuXFxyXFxuXFx0XFx0Jl9fY29udGVudCB7XFxyXFxuXFx0XFx0XFx0ZmxleDogMCAxIDMwJTtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicm93LWdhcFxcXCIsIDYwLCAyMCk7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0b3JkZXI6IDE7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWFpbl9fc3VidGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX19zdWJ0aXRsZSB7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tYWluX190aXRsZVxcclxcblxcclxcblxcdFxcdCZfX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRzcGFue1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAjMjk3N0Q1O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX3RleHRcXHJcXG5cXHJcXG5cXHRcXHQmX190ZXh0IHtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX2JhdHRvbnNcXHJcXG5cXHJcXG5cXHRcXHQmX19iYXR0b25zIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSgxNSk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tYWluX19idXR0b24tYmx1ZVxcclxcblxcclxcblxcdFxcdCZfX2J1dHRvbi1ibHVlIHtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjMDAyOTZEO1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiByZW0oMjcpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IzQ0QzZFOTtcXHJcXG5cXHRcXHRcXHRib3gtc2hhZG93OiAtMnB4IDdweCAwcHggMHB4ICMyOTc3RDU7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHRcXHQmOmFjdGl2ZXtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoN3B4KTtcXHJcXG5cXHRcXHRcXHRcXHRib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzI5NzdENTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0Ym94LXNoYWRvdzogLTJweCAzcHggMHB4IDBweCAjMjk3N0Q1O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpe1xcclxcblxcdFxcdFxcdFxcdCY6aG92ZXJ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX2J1dHRvbi1jbGVhclxcclxcblxcclxcblxcdFxcdCZfX2J1dHRvbi1jbGVhciB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDEyKTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiByZW0oMjQpO1xcclxcblxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcblxcdFxcdFxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xcclxcblxcdFxcdFxcdGNvbG9yOiAjNjY2NjY2O1xcclxcblxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7XFxyXFxuXFx0XFx0XFx0XFx0Jjpob3ZlcntcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogIzA4MDcwNztcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICM2NjY2NjY7XFxyXFxuXFx0XFx0XFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX2ltYWdlXFxyXFxuXFxyXFxuXFx0XFx0Jl9faW1hZ2Uge1xcclxcblxcdFxcdFxcdG9yZGVyOiAwO1xcclxcblxcdFxcdFxcdGZsZXg6IDAgMSBhdXRvO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLDE1MCAsMCApO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLDE1MCAsNTAgKTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLDAgLDUwICk7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsMCAsNTAgKTtcXHJcXG5cXHRcXHRcXHRcXHRvcmRlcjogMDtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oNDApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRpbWd7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHRcXHRcXHR6LWluZGV4OiAyO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiBjbGFtcCgyOTdweCwgNDB2dywgNTk1cHgpO1xcclxcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogNTk1IC8gODkzO1xcclxcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmV7XFxyXFxuXFx0XFx0XFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdFxcdHRvcDogNTAlO1xcclxcblxcdFxcdFxcdFxcdGxlZnQ6IDUwJTtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogY2xhbXAoNTM1cHgsIDUwdncsIDg5M3B4KTtcXHJcXG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQ6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSgyMTIsIDIyOCwgMjQ0LCAxKSAxNSUsIHJnYmEoNjgsIDE5OCwgMjMzLCAxKSA0NSUsIHJnYmEoNDEsIDExOSwgMjEzLCAxKSA3MCUsIHJnYmEoMCwgNDEsIDEwOSwgMSkgMTAwJSk7XFxyXFxuXFx0XFx0XFx0XFx0ei1pbmRleDogMTtcXHJcXG5cXHRcXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNTUlKTtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLmNvbnRhY3RzIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFNEY0O1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiw3MiAsNjAgKTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsNzIgLDYwICk7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Ly8gLmNvbnRhY3RzX19jb250YWluZXJcXHJcXG5cXHJcXG5cXHRcXHQmX19jb250YWluZXIge1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuY29udGFjdHNfX2l0ZW1zXFxyXFxuXFxyXFxuXFx0XFx0Jl9faXRlbXMge1xcclxcblxcdFxcdFxcdC8vIG1heC13aWR0aDogcmVtKDEyODYpO1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4uY29udGFjdCB7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmNvbnRhY3RfX2l0ZW1cXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogKGF1dG8gMWZyKTtcXHJcXG5cXHRcXHRcXHRjb2x1bW4tZ2FwOiByZW0oMjApO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogKDYwcHggMTAwcHggMTUwcHgpIDtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJjb2x1bW4tZ2FwXFxcIiwgNDYwLDAgKTtcXHJcXG5cXHRcXHRcXHRcXHQvLyBjb2x1bW4tZ2FwOiByZW0oNDApO1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0Jjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206IHJlbSg1MCk7fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlU21hbGwpe1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Ly8gLmNvbnRhY3RfX2ljb25cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQmX19pY29uIHtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxyXFxuXFx0XFx0XFx0XFx0Z3JpZC1yb3ctc3RhcnQ6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xcclxcblxcdFxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRncmlkLXJvdy1zdGFydDogMTtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdGltZ3tcXHJcXG5cXHRcXHRcXHRcXHRtYXgtaGVpZ2h0OiByZW0oNTApO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1heC1oZWlnaHRcXFwiLCA1MCwzMCApO1xcclxcblxcdFxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdC8vIGZpbGw6ICM0NEM2RTk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuY29udGFjdF9fY29udGVudFxcclxcblxcclxcblxcdFxcdFxcclxcblxcclxcblxcdFxcdC8vIC5jb250YWN0X190aXRsZVxcclxcblxcclxcblxcdFxcdCZfX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLDI4LCAxOCApO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogcmVtKDQwKTtcXHJcXG5cXHRcXHRcXHQvLyAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggIzAwMjk2RDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzAwMjk2RDtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oMCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGVTbWFsbCl7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHQvLyBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmNvbnRhY3RfX3RleHRcXHJcXG5cXHJcXG5cXHRcXHQmX190ZXh0IHtcXHJcXG5cXHRcXHRcXHRmb250LWZhbWlseTogXFxcIlNvdXJjZSBTYW5zIDNcXFwiO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxMyk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGluZS1oZWlnaHRcXFwiLCAyOCwgMTkpO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0XFx0cDpub3QoOmxhc3QtY2hpbGQpe1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLDI1ICwxNSApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uc2VydmljZXMge1xcclxcblxcdHBhZGRpbmc6IHJlbSg2NykgcmVtKDApO1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRcXHQmX19iZ3tcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvJTtcXHJcXG5cXHRcXHRcXHR0b3A6IDY3cHg7XFxyXFxuXFx0XFx0XFx0cmlnaHQ6IDA7XFxyXFxuXFx0XFx0XFx0ei1pbmRleDogLTE7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC8vIC5zZXJ2aWNlc19fY29udGFpbmVyXFxyXFxuXFxyXFxuXFx0XFx0Jl9fY29udGFpbmVyIHtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLnNlcnZpY2VzX19oZWFkZXJcXHJcXG5cXHJcXG5cXHRcXHQmX19oZWFkZXIge1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSg4MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5zZXJ2aWNlc19fc3VidGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX19zdWJ0aXRsZSB7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5zZXJ2aWNlc19fdGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX190aXRsZSB7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5zZXJ2aWNlc19faXRlbXNcXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtcyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcblxcdFxcdFxcdGNvbHVtbi1nYXA6IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0cm93LWdhcDogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokdGFibGV0KXtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5zZXJ2aWNlc19faXRlbVxcclxcblxcclxcblxcdFxcdCZfX2l0ZW0ge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSg0MSkgcmVtKDMyKTtcXHJcXG5cXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjMDAyOTZEO1xcclxcblxcdFxcdFxcdGJveC1zaGFkb3c6IDJweCAycHggMTJweCAxcHggIzI5NzdENSA7XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4uc3VidGl0bGUge1xcclxcbn1cXHJcXG4udGl0bGUge1xcclxcbn1cXHJcXG4uaXRlbS1zZXJ2aWNlcyB7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLml0ZW0tc2VydmljZXNfX2ltYWdlXFxyXFxuXFxyXFxuXFx0XFx0Jl9faW1hZ2Uge1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaXRlbS1zZXJ2aWNlc19fYm9keVxcclxcblxcclxcblxcdFxcdCZfX2JvZHkge1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaXRlbS1zZXJ2aWNlc19fdGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX190aXRsZSB7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5pdGVtLXNlcnZpY2VzX190ZXh0XFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGV4dCB7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5pdGVtLXNlcnZpY2VzX19saW5rXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbGluayB7XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4udGV4dCB7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3Y2MyNTEyZGNhZGExZDhlNmRiMlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==