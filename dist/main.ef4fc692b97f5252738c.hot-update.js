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
  color: #44C6E9;
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/common.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/header.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/home.scss"],"names":[],"mappings":"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jBD;EKtjBC;IACC,QAAA;ELwjBF;EKljBC;IACC,0BAAA;IACA,yBAAA;ELojBF;EKljBC;IACC,6BAAA;IACA,wBAAA;IACA,WAAA;ELojBF;AACF;;AMh0BA;EACC,WAAA;ANm0BD;AMl0BC;EACC,UAAA;EACA,eAAA;ANo0BF;AI3vBE;EE3ED;IF4EE,kBAAA;EJ8vBD;AACF;AI3vBC;EAEC;IElFD;MFmFE,+EAhBc;IJ6wBb;EACF;EI3vBA;IEtFD;MFuFE,6DAAA;IJ8vBC;EACF;AACF;AI5vBE;EE3FD;IF4FE,kBAAA;EJ+vBD;AACF;AMr1BC;EACE,yBAAA;ANu1BH;AIpxBE;EEpED;IFqEE,sBAAA;EJuxBD;AACF;AIpxBC;EAEC;IE3ED;MF4EE,gFAhBc;IJsyBb;EACF;EIpxBA;IE/ED;MFgFE,gEAAA;IJuxBC;EACF;AACF;AIrxBE;EEpFD;IFqFE,sBAAA;EJwxBD;AACF;AI1yBE;EEpED;IFqEE,yBAAA;EJ6yBD;AACF;AI1yBC;EAEC;IE3ED;MF4EE,mFAhBc;IJ4zBb;EACF;EI1yBA;IE/ED;MFgFE,mEAAA;IJ6yBC;EACF;AACF;AI3yBE;EEpFD;IFqFE,yBAAA;EJ8yBD;AACF;AMp4BC;EAIE,kBAAA;EACA,yBAAA;ANm4BH;AIp0BE;EEpED;IFqEE,kBAAA;EJu0BD;AACF;AIp0BC;EAEC;IE3ED;MF4EE,0EAhBc;IJs1Bb;EACF;EIp0BA;IE/ED;MFgFE,0DAAA;IJu0BC;EACF;AACF;AIr0BE;EEpFD;IFqFE,kBAAA;EJw0BD;AACF;AI11BE;EEpED;IFqEE,mBAAA;EJ61BD;AACF;AI11BC;EAEC;IE3ED;MF4EE,6EAhBc;IJ42Bb;EACF;EI11BA;IE/ED;MFgFE,iEAAA;IJ61BC;EACF;AACF;AI31BE;EEpFD;IFqFE,sBAAA;EJ81BD;AACF;AMp7BC;EAQE,gBAAA;EACA,cAAA;AN+6BH;;AOh8BA;EACE,yBAAA;APm8BF;AIx3BE;EG5EF;IH6EG,uBAAA;EJ23BD;AACF;AIx3BC;EAEC;IGnFF;MHoFG,+EAhBc;IJ04Bb;EACF;EIx3BA;IGvFF;MHwFG,gEAAA;IJ23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","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n//@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n//&display=swap Добавить при подключении через плагин@import url(https://fonts.googleapis.com/css?family=Shippori+Mincho:regular,500,600,700,800);\r\n// &subset=cyrillic-ext\r\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+3:300,regular&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,300,regular,500,600&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Raleway:300,regular,500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:regular,600&display=swap\");\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Poppins\";\r\n$fontSize: rem(20); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #000; // Колір шрифту за замовчуванням\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1920;\r\n// $maxWidth: 1728;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1565;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t&::before{\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tcontent: \"\";\r\n\t\t\tposition: fixed;\r\n\t\t\tinset: 0;\r\n\t\t\tbackground: rgba(0, 0, 0, 0.1);\r\n\t\t\tbackdrop-filter: blur(10px);\r\n\t\t\t-webkit-backdrop-filter: blur(10px);\r\n\t\t\topacity: 0;\r\n\t\t\tpointer-events: none;\r\n\t\t\ttransition: opacity 0.3s ease;\r\n\t\t\tz-index: 2;\r\n\t\t}\r\n\t}.menu-open &::before {\r\n\t\topacity: 1;\r\n\t\tpointer-events: auto;\r\n\t}\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: rem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: rem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","// Заголовки, загальні БЕМ блоки та інше...\r\n\r\n.page {\r\n\r\n\t\t// .page__main\r\n\r\n\t\t&__main {\r\n\t\t}\r\n\t\t&__comtacts {\r\n\t\t}\r\n\t\t&__services {\r\n\t\t}\r\n}\r\n//========================================================================================================================================================\r\n.btn{\r\n\twhite-space: nowrap;\r\n\ttext-align: center;\r\n\t@include adaptiveValue(\"font-size\", 18, 13);\r\n\t\t@include adaptiveValue(\"padding-left\", 39, 24);\r\n\t\t@include adaptiveValue(\"padding-right\", 39, 24);\r\n\t\tpadding-top: rem(11);\r\n\t\tpadding-bottom: rem(11);\r\n\t\tline-height: math.div(27 , 18);\r\n\t\tborder-radius: rem(15);\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tborder-radius: rem(10); \r\n\t\t}\r\n}\r\n.button-border{\r\n\t\tfont-weight: 300;\r\n\t\tcolor: #00296D;\r\n\t\tborder: 1px solid #00296D;\r\n\t\tbackground: linear-gradient(to bottom, #44C6E9 50%, transparent 50%);\r\n      background-size: 100% 200%;\r\n      background-position: 0 100%;\r\n      transition: background-position 0.3s ease, color 0.3s ease;\r\n\t\t&:hover {\r\n      background-position: 0 0;\r\n\t\tcolor: #fff;\r\n\t}\r\n\t@media (max-width:$mobile){\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: 1px solid #666666;\r\n\t\t\tmax-width: 140px;\r\n         padding: rem(9) rem(24);\r\n\t\t\tbackground: linear-gradient(to bottom, #666666 50%, transparent 50%);\r\n\t\t\tbackground-size: 100% 200%;\r\n         background-position: 0 100%;\r\n\t\t}\r\n}\r\n\r\n.subtitle {\r\n\tfont-family: $fontFamily;\r\n\t@include adaptiveValue(\"font-size\", 20, 13);\r\n\t@include adaptiveValue(\"line-height\", 30, 20);\r\n\t\t\tfont-weight: 400;\r\n\t\t\tcolor: #2977D5;\r\n}\r\n.title{\r\n\tfont-family: $fontFamily;\r\n\tfont-weight: 600;\r\n\t@include adaptiveValue(\"font-size\", 64, 32);\r\n\t@include adaptiveValue(\"line-height\", 96, 48);\r\n}\r\n.text {\r\n\tfont-family: \"Source Sans 3\";\r\n\t@include adaptiveValue(\"font-size\", 20, 13);\r\n\t@include adaptiveValue(\"line-height\", 28, 19);\r\n\tfont-weight: 300;\r\n\tcolor: #252525;\r\n\tpadding: rem(0) rem(5) rem(0) rem(0);\r\n}","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n\t\tbackground-color: #FFF9FD;\r\n\t\ttransition: all 0.3s ease 0s;\r\n\t\tz-index: 100;\r\n\t\tposition: fixed;\r\n\t\twidth: 100%;\r\n\t\t@include adaptiveValue(\"height\",110 ,100 );\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\t@include adaptiveValue(\"padding-top\",20 ,30 );\r\n\t\t\t@include adaptiveValue(\"padding-bottom\",20 ,30 );\r\n\t\t\t&::before {\r\n\t\tcontent: \"\";\r\n\t\tposition: absolute;\r\n\t\tinset: 0;\r\n\t\tbackground: rgba(0, 0, 0, 0.1);\r\n\t\tbackdrop-filter: blur(10px);\r\n\t\t-webkit-backdrop-filter: blur(10px);\r\n\t\tz-index: -1;\r\n\t\topacity: 0;\r\n\t\ttransition: opacity 0.3s ease;\r\n\t\t\r\n\t}\r\n\t\t// .header__container\r\n\t\t&._header-scroll{\r\n\t\t\tbackground-color: rgba(0, 0, 0, 0.1);\r\n\t\t\t// color: #FFF9FD;\r\n\t\t\t// opacity: 0.5;\r\n\t\t\t&::before{\r\n\t\t\t\topacity: 1;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__container {\r\n\t\t\tz-index: 100;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\t\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\r\n\t\t// .header__logo\r\n\r\n\t\t&__logo {\r\n\t\t\tdisplay: flex;\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-icon\r\n\r\n\t\t&__logo-icon {\r\n\t\t\tz-index: 100;\r\n\t\t\timg{\r\n\t\t\t\t@include adaptiveValue(\"width\", 55, 40);\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-name\r\n\t\t\r\n\t\t&__logo-name {\r\n\t\t\tz-index: 80;\r\n\t\t\ttext-align: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\twidth: auto;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-title\r\n\t\t\r\n\t\t&__logo-title {\r\n\t\t\t@include adaptiveValue(\"font-size\", 24, 15);\r\n\t\t\tline-height: math.div(33 , 24);\r\n\t\t\tfont-weight: 600;\r\n\t\t\tmargin-bottom: rem(15);\r\n\t\t\t@include adaptiveValue(\"margin-bottom\", 15, 10);\r\n\t\t\twhite-space: nowrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-subtitle\r\n\r\n\t\t&__logo-subtitle {\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tline-height: math.div(22 , 16);\r\n\t\t\tfont-weight: 400;\r\n\t\t\twhite-space: nowrap;\r\n\t\t}\r\n\r\n\r\n\r\n\t\t// .header__menu\r\n\r\n\t\t&__menu {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__actions\r\n\r\n\t\t&__actions {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__button\r\n\r\n\t\t&__button {\r\n\t\t\tgrid-column-start: 1;\r\n         grid-column-end: 3;\r\n\t\t}\r\n}\r\n.menu {\r\n\t\tflex: 0 1 auto;\r\n\t\t// .menu__body\r\n\r\n\t\t&__body {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: -100%;\r\n\t\t\t\t// margin-top: rem(100);\r\n\t\t\t\tpadding-top: rem(138);\r\n\t\t\t\tpadding: rem(138) rem(20) rem(38) rem(20);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\tbackground-color: #FFF9FD;\r\n\t\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t\t\t.menu-open &{\r\n\t\t\t\tleft: 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t&__icons{\r\n\t\t\tdisplay: none;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tgrid-template-rows: repeat(3, 1fr);\r\n\t\t\t\tgrid-template-columns: repeat(2, auto);\r\n\t\t\t\tflex: 0 1 auto;\r\n\t\t\t\t@include adaptiveValue(\"grid-column-gap\",80 ,40 );\r\n\t\t\t\t@include adaptiveValue(\"grid-row-gap\",60 ,40 );\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__icon{\r\n\t\t\tdisplay: grid;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\r\n\t\t// .menu__list\r\n\r\n\t\t&__list {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tflex: 0 1 50%;\r\n\t\t\t@include adaptiveValue(\"column-gap\", 60, 20);\r\n\t\t\trow-gap: rem(10);\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: end;\r\n\t\t\t\trow-gap: rem(60);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .menu__item\r\n\r\n\t\t&__item {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .menu__link\r\n\r\n\t\t&__link {\r\n\t\t\tfont-size: rem(16);\r\n\t\t\tbackground: linear-gradient(to right, currentColor 0%, currentColor 100%) no-repeat;\r\n      \tbackground-size: 0 2px; /* Начальная ширина подчеркивания */\r\n         background-position: left bottom;\r\n         transition: background-size 0.3s ease;\r\n\t\t\t@media (any-hover: hover) {\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tbackground-size: 100% 2px; /* Конечная ширина подчеркивания при наведении */\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tcolor:  #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n}\r\n.icon-menu {\r\n}\r\n\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n\tdisplay: none;\r\n\t@media (max-width: $mobile) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: rem(30);\r\n\t\theight: rem(18);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tleft: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: rem(3);\r\n\t\t\tbackground-color: #00296D;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 75%;\r\n\t\t\t\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - rem(1));\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(45% - rem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - rem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n","//====================================================================================================\r\n.footer {\r\n\twidth: 100%;\r\n\t&__map{\r\n\t\tz-index: 1;\r\n\t\tmin-width: 100%;\r\n\t\t@include adaptiveValue(\"height\", 575, 393);\r\n\t}\r\n\t// .footer__text\r\n\t\r\n\t&__text {\r\n\t\t\tbackground-color: #252525;\r\n\t\t\t@include adaptiveValue(\"padding-top\", 13, 7);\r\n\t\t\t@include adaptiveValue(\"padding-bottom\", 13, 7);\r\n\t\t\ttext-align: center;\r\n\t\t\tfont-family: \"Montserrat\";\r\n\t\t\t@include adaptiveValue(\"font-size\", 20, 12);\r\n\t\t\t@include adaptiveValue(\"line-height\", 24, 15);\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #FFF9FD;\r\n\t\t}\r\n}\r\n\r\n//====================================================================================================\r\n","//====================================================================================================\r\n\r\n.main {\r\n\t\tbackground-color: #FFF9FD;\r\n\t\t@include adaptiveValue(\"padding-top\", 167,114 );\r\n\t\tpadding-bottom: rem(57);\r\n\t\t// .main__container\r\n\r\n\t\t&__container {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\talign-items: center;\r\n\t\t\tcolumn-gap: rem(30);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__content\r\n\r\n\t\t&__content {\r\n\t\t\tflex: 0 1 30%;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\t@include adaptiveValue(\"row-gap\", 60, 20);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\torder: 1;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__subtitle\r\n\r\n\t\t&__subtitle {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .main__title\r\n\r\n\t\t&__title {\r\n\t\t\tspan{\r\n\t\t\t\tcolor: #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__text\r\n\r\n\t\t&__text {\r\n\t\t}\r\n\r\n\t\t// .main__battons\r\n\r\n\t\t&__battons {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tgap: rem(15);\r\n\t\t}\r\n\r\n\t\t// .main__button-blue\r\n\r\n\t\t&__button-blue {\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #00296D;\r\n\t\t\tline-height: rem(27);\r\n\t\t\tbackground-color:#44C6E9;\r\n\t\t\tbox-shadow: -2px 7px 0px 0px #2977D5;\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t&:active{\r\n\t\t\t\ttransform: translateY(7px);\r\n\t\t\t\tbox-shadow: 0px 0px 0px 0px #2977D5;\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tbox-shadow: -2px 3px 0px 0px #2977D5;\r\n\t\t\t}\r\n\t\t\t@media (any-hover: hover){\r\n\t\t\t\t&:hover{\r\n\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__button-clear\r\n\r\n\t\t&__button-clear {\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tfont-weight: 400;\r\n\t\t\tline-height: rem(24);\r\n\t\t\ttext-decoration: underline;\r\n\t\t\ttext-underline-offset: 5px;\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: none;\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t@media (any-hover: hover){\r\n\t\t\t\t&:hover{\r\n\t\t\t\t\tcolor: #080707;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tborder: 1px solid #666666;\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__image\r\n\r\n\t\t&__image {\r\n\t\t\torder: 0;\r\n\t\t\tflex: 0 1 auto;\r\n\t\t\tposition: relative;\r\n\t\t\t@include adaptiveValue(\"padding-left\",150 ,0 );\r\n\t\t\t@include adaptiveValue(\"padding-right\",150 ,50 );\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t@include adaptiveValue(\"padding-left\",0 ,50 );\r\n\t\t\t\t@include adaptiveValue(\"padding-right\",0 ,50 );\r\n\t\t\t\torder: 0;\r\n\t\t\t\tmargin-bottom: rem(40);\r\n\t\t\t}\r\n\t\t\timg{\r\n\t\t\t\tposition: relative;\r\n\t\t\t\theight: auto;\r\n\t\t\t\tz-index: 2;\r\n\t\t\t\twidth: clamp(297px, 40vw, 595px);\r\n            aspect-ratio: 595 / 893;\r\n            object-fit: cover;\r\n\t\t\t}\r\n\t\t\t&::before{\r\n\t\t\t\tcontent: \"\";\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\t\twidth: clamp(535px, 50vw, 893px);\r\n            aspect-ratio: 1 / 1;\r\n\t\t\t\tbackground: #00296D;\r\n\t\t\t\tborder-radius: 50%;\r\n\t\t\t\tbackground: linear-gradient(180deg,rgba(212, 228, 244, 1) 15%, rgba(68, 198, 233, 1) 45%, rgba(41, 119, 213, 1) 70%, rgba(0, 41, 109, 1) 100%);\r\n\t\t\t\tz-index: 1;\r\n\t\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\ttransform: translate(-40%, -55%);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n}\r\n\r\n//====================================================================================================\r\n\r\n.contacts {\r\n\tbackground-color: #D4E4F4;\r\n\t\t@include adaptiveValue(\"padding-top\",72 ,60 );\r\n\t\t@include adaptiveValue(\"padding-bottom\",72 ,60 );\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tbackground-color: #FFF9FD;\r\n\t\t}\r\n\t\t// .contacts__container\r\n\r\n\t\t&__container {\r\n\t\t}\r\n\r\n\t\t// .contacts__items\r\n\r\n\t\t&__items {\r\n\t\t\t// max-width: rem(1286);\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-around;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: start;\r\n\t\t\t}\r\n\t\t}\r\n}\r\n.contact {\r\n\r\n\t\t// .contact__item\r\n\r\n\t\t&__item {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-columns: (auto 1fr);\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tgrid-template-columns: (60px 100px 150px) ;\r\n\t\t\t\t@include adaptiveValue(\"column-gap\", 460,0 );\r\n\t\t\t\t// column-gap: rem(40);\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\t&:not(:last-child){margin-bottom: rem(50);}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobileSmall){\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .contact__icon\r\n\t\t\r\n\t\t&__icon {\r\n\t\t\t\tgrid-column-start: 1;\r\n            grid-column-end: 2;\r\n\t\t\t\tgrid-row-start: 1;\r\n            grid-row-end: 3;\r\n\t\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t\tgrid-row-start: 1;\r\n            grid-row-end: 2;\r\n\t\t\t\t}\r\n\t\t\timg{\r\n\t\t\t\tmax-height: rem(50);\r\n\t\t\t\t@include adaptiveValue(\"max-height\", 50,30 );\r\n\t\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t}\r\n\t\t\t\t// fill: #44C6E9;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .contact__content\r\n\r\n\t\t\r\n\r\n\t\t// .contact__title\r\n\r\n\t\t&__title {\r\n\t\t\t@include adaptiveValue(\"font-size\",28, 18 );\r\n\t\t\tfont-weight: 500;\r\n\t\t\tmargin-bottom: rem(40);\r\n\t\t\t// -webkit-text-stroke: 1px #00296D;\r\n\t\t\tcolor: #00296D;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tmargin-bottom: rem(0);\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobileSmall){\r\n\t\t\t\t// display: flex;\r\n\t\t\t\t// align-items: center;\r\n\t\t\t\t// justify-content: center;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .contact__text\r\n\r\n\t\t&__text {\r\n\t\t\tfont-family: \"Source Sans 3\";\r\n\t\t\t@include adaptiveValue(\"font-size\", 20, 13);\r\n\t\t\t@include adaptiveValue(\"line-height\", 28, 19);\r\n\t\t\tfont-weight: 400;\r\n\t\t\tcolor: #00296D;\r\n\t\t\tp:not(:last-child){\r\n\t\t\t\t@include adaptiveValue(\"margin-bottom\",25 ,15 );\r\n\t\t\t}\r\n\t\t}\r\n}\r\n//========================================================================================================================================================\r\n.services {\r\n\tpadding: rem(67) rem(0);\r\n\tposition: relative;\r\n\tmin-height: 100vh;\r\n\t\t&__bg{\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: auto;\r\n\t\t\theight: auto%;\r\n\t\t\ttop: 67px;\r\n\t\t\tright: 0;\r\n\t\t\tz-index: -1;\r\n\t\t}\r\n\t\t// .services__container\r\n\r\n\t\t&__container {\r\n\t\t}\r\n\r\n\t\t// .services__header\r\n\r\n\t\t&__header {\r\n\t\t\tmargin-bottom: rem(80);\r\n\t\t}\r\n\r\n\t\t// .services__subtitle\r\n\r\n\t\t&__subtitle {\r\n\t\t}\r\n\r\n\t\t// .services__title\r\n\r\n\t\t&__title {\r\n\t\t}\r\n\r\n\t\t// .services__items\r\n\r\n\t\t&__items {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\trow-gap: rem(20);\r\n\t\t\t@media (max-width:$tablet){\r\n\t\t\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tgrid-template-columns: 1fr;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .services__item\r\n\r\n\t\t&__item {\r\n\t\t\t// aspect-ratio: 1/1;\r\n\t\t\tbackground-color: rgba(255, 249, 253, 0.6);\r\n\t\t\tpadding: rem(41) rem(32);\r\n\t\t\t// border: 1px solid #00296D;\r\n\t\t\tbox-shadow: 3px 3px 10px 0px #8bbfff ;\r\n\t\t\tborder-radius: rem(15);\r\n\t\t}\r\n}\r\n.subtitle {\r\n}\r\n.title {\r\n}\r\n.item-services {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\trow-gap: rem(25);\r\n\t\t// .item-services__image\r\n\r\n\t\t&__image {\r\n\t\t}\r\n\r\n\t\t// .item-services__body\r\n\r\n\t\t&__body {\r\n\t\t}\r\n\r\n\t\t// .item-services__title\r\n\r\n\t\t&__title {\r\n\t\t\t@include adaptiveValue(\"font-size\", 32, 20);\r\n\t\t\t@include adaptiveValue(\"line-height\", 48, 30);\r\n\t\t\tfont-weight: 600;\r\n\t\t\tmargin-bottom: rem(35);\r\n\t\t\tcolor: #2977D5;\r\n\t\t}\r\n\r\n\t\t// .item-services__text\r\n\r\n\t\t&__text {\r\n\t\t\tfont-weight: 400;\r\n\t\t\tpadding: rem(0);\r\n\t\t\tcolor: #666666;\r\n\t\t}\r\n\r\n\t\t// .item-services__link\r\n\r\n\t\t&__link {\r\n\t\t\tcolor: #44C6E9;\r\n\t\t}\r\n}\r\n.text {\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("61f4c7ee30b74e9872e1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lZjRmYzY5MmI5N2Y1MjUyNzM4Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSUFBc0k7QUFDdEksNElBQTRJO0FBQzVJLG9JQUFvSTtBQUNwSSwySEFBMkg7QUFDM0gscUhBQXFIO0FBQ3JILGtJQUFrSTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNWQUFzVixNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sU0FBUyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLHNCQUFzQixXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssc0JBQXNCLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdB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QiwyQkFBMkIscUNBQXFDLGtEQUFrRCxXQUFXLHFDQUFxQyx1Q0FBdUMsV0FBVyxTQUFTLG1EQUFtRCwrQkFBK0IscURBQXFELG1DQUFtQyx1Q0FBdUMsZ0RBQWdELGlDQUFpQyxTQUFTLEtBQUssZUFBZSxLQUFLLFlBQVksS0FBSyxvQkFBb0Isc0JBQXNCLCtCQUErQix5QkFBeUIsc0RBQXNELFNBQVMsd0RBQXdELFNBQVMsMERBQTBELHdEQUF3RCwwREFBMEQsMkJBQTJCLGlDQUFpQyx5QkFBeUIsU0FBUyx3REFBd0QsMkJBQTJCLDBCQUEwQix5QkFBeUIsU0FBUyx3REFBd0QseUJBQXlCLFNBQVMsS0FBSyxXQUFXLEtBQUssdUJBQXVCO0FBQ3QxOEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDNWpEdkMsc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zKzM6MzAwLHJlZ3VsYXImZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjEwMCwzMDAscmVndWxhciw1MDAsNjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTozMDAscmVndWxhciw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOnJlZ3VsYXIsNjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMzIwcHg7XG59XG5cbmJvZHkge1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4ubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xufVxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLndyYXBwZXI6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbn1cbi5tZW51LW9wZW4gLndyYXBwZXI6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuQHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xuICAud3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG4gIH1cbn1cbi53cmFwcGVyID4gbWFpbiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLndyYXBwZXIgPiAqIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4vKlxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XG4qL1xuW2NsYXNzKj1fX2NvbnRhaW5lcl0ge1xuICBtYXgtd2lkdGg6IDk5LjY4NzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDAuOTM3NXJlbTtcbn1cblxuW2NsYXNzKj0taWJnXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbltjbGFzcyo9LWliZ10gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5bY2xhc3MqPS1pYmdfY29udGFpbl0gaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmJ0biB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MzQwNjg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDEuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzM0MDY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAxLjEyNXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC44MTI1cmVtICsgMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygxLjVyZW0gKyAwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgfVxufVxuLmJ0biB7XG4gIHBhZGRpbmctdG9wOiAwLjY4NzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjY4NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuOTM3NXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICB9XG59XG5cbi5idXR0b24tYm9yZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDI5NkQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDI5NkQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0NEM2RTkgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xufVxuLmJ1dHRvbi1ib3JkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmJ1dHRvbi1ib3JkZXIge1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY2NjY7XG4gICAgbWF4LXdpZHRoOiAxNDBweDtcbiAgICBwYWRkaW5nOiAwLjU2MjVyZW0gMS41cmVtO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2NjY2NjYgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcbiAgfVxufVxuXG4uc3VidGl0bGUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzAyNjk2MDc4NHJlbSAgKyAgMC41NDkwMTk2MDc4dncgLCAxLjI1cmVtICkpIHtcbiAgICAuc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MDI2OTYwNzg0cmVtICArICAwLjU0OTAxOTYwNzh2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MDI2OTYwNzg0cmVtICArICAwLjU0OTAxOTYwNzh2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC44MTI1cmVtICsgMC40Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5zdWJ0aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGxpbmUtaGVpZ2h0OiBjbGFtcCggMS4yNXJlbSAsIDEuMDkzMTM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCggMS4yNXJlbSAsIDEuMDkzMTM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsaW5lLWhlaWdodDogY2xhbXAoIDEuMjVyZW0gLCAxLjA5MzEzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBsaW5lLWhlaWdodDogY2FsYygxLjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zdWJ0aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIH1cbn1cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjk3N0Q1O1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDJyZW0gLCAxLjQ5ODAzOTIxNTdyZW0gICsgIDIuNTA5ODAzOTIxNnZ3ICwgNHJlbSApKSB7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDJyZW0gLCAxLjQ5ODAzOTIxNTdyZW0gICsgIDIuNTA5ODAzOTIxNnZ3ICwgNHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAycmVtICwgMS40OTgwMzkyMTU3cmVtICArICAyLjUwOTgwMzkyMTZ2dyAsIDRyZW0gKSkge1xuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMnJlbSArIDIgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC50aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDZyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGluZS1oZWlnaHQ6IGNsYW1wKCAzcmVtICwgMi4yNDcwNTg4MjM1cmVtICArICAzLjc2NDcwNTg4MjR2dyAsIDZyZW0gKSkge1xuICAgIC50aXRsZSB7XG4gICAgICBsaW5lLWhlaWdodDogY2xhbXAoIDNyZW0gLCAyLjI0NzA1ODgyMzVyZW0gICsgIDMuNzY0NzA1ODgyNHZ3ICwgNnJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsaW5lLWhlaWdodDogY2xhbXAoIDNyZW0gLCAyLjI0NzA1ODgyMzVyZW0gICsgIDMuNzY0NzA1ODgyNHZ3ICwgNnJlbSApKSB7XG4gICAgLnRpdGxlIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDNyZW0gKyAzICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB9XG59XG5cbi50ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgM1wiO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAudGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzAyNjk2MDc4NHJlbSAgKyAgMC41NDkwMTk2MDc4dncgLCAxLjI1cmVtICkpIHtcbiAgICAudGV4dCB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjcwMjY5NjA3ODRyZW0gICsgIDAuNTQ5MDE5NjA3OHZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjcwMjY5NjA3ODRyZW0gICsgIDAuNTQ5MDE5NjA3OHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLnRleHQge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuODEyNXJlbSArIDAuNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC50ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsaW5lLWhlaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDEuMDQ2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjc1cmVtICkpIHtcbiAgICAudGV4dCB7XG4gICAgICBsaW5lLWhlaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDEuMDQ2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxpbmUtaGVpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMS4wNDYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNzVyZW0gKSkge1xuICAgIC50ZXh0IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDEuMTg3NXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE4NzVyZW07XG4gIH1cbn1cbi50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMyNTI1MjU7XG4gIHBhZGRpbmc6IDByZW0gMC4zMTI1cmVtIDByZW0gMHJlbTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlciB7XG4gICAgaGVpZ2h0OiA2Ljg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCA2LjI1cmVtICwgNi4wOTMxMzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDYuODc1cmVtICkpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDYuMjVyZW0gLCA2LjA5MzEzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgNi44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggNi4yNXJlbSAsIDYuMDkzMTM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCA2Ljg3NXJlbSApKSB7XG4gICAgLmhlYWRlciB7XG4gICAgICBoZWlnaHQ6IGNhbGMoNi4yNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDYuMjVyZW07XG4gIH1cbn1cbi5oZWFkZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDIuMDMxODYyNzQ1MXJlbSAgKyAgLTAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5oZWFkZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMi4wMzE4NjI3NDUxcmVtICArICAtMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAyLjAzMTg2Mjc0NTFyZW0gICsgIC0wLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDEuODc1cmVtICsgLTAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMi4wMzE4NjI3NDUxcmVtICArICAtMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLmhlYWRlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAyLjAzMTg2Mjc0NTFyZW0gICsgIC0wLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDIuMDMxODYyNzQ1MXJlbSAgKyAgLTAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5oZWFkZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMS44NzVyZW0gKyAtMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjg3NXJlbTtcbiAgfVxufVxuLmhlYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG4uaGVhZGVyLl9oZWFkZXItc2Nyb2xsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmhlYWRlci5faGVhZGVyLXNjcm9sbDo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciB7XG4gIHotaW5kZXg6IDEwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2xvZ28taWNvbiB7XG4gIHotaW5kZXg6IDEwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby1pY29uIGltZyB7XG4gICAgd2lkdGg6IDMuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDIuNXJlbSAsIDIuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAzLjQzNzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAyLjVyZW0gLCAyLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMy40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMi41cmVtICwgMi4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDMuNDM3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1pY29uIGltZyB7XG4gICAgICB3aWR0aDogY2FsYygyLjVyZW0gKyAwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgIHdpZHRoOiAyLjVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28tbmFtZSB7XG4gIHotaW5kZXg6IDgwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLW5hbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjkzNzVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjU0NjU2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTQ2NTY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAwLjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC41NDY1Njg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuNjI1cmVtICsgMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC43NXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5oZWFkZXJfX2FjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fYnV0dG9uIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbn1cblxuLm1lbnUge1xuICBmbGV4OiAwIDEgYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogOC42MjVyZW07XG4gICAgcGFkZGluZzogOC42MjVyZW0gMS4yNXJlbSAyLjM3NXJlbSAxLjI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB9XG4gIC5tZW51LW9wZW4gLm1lbnVfX2JvZHkge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbi5tZW51X19pY29ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtY29sdW1uLWdhcDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ3JpZC1jb2x1bW4tZ2FwOiBjbGFtcCggMi41cmVtICwgMS44NzI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgNXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogY2xhbXAoIDIuNXJlbSAsIDEuODcyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ3JpZC1jb2x1bW4tZ2FwOiBjbGFtcCggMi41cmVtICwgMS44NzI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgNXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogY2FsYygyLjVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtY29sdW1uLWdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtcm93LWdhcDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ3JpZC1yb3ctZ2FwOiBjbGFtcCggMi41cmVtICwgMi4xODYyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtcm93LWdhcDogY2xhbXAoIDIuNXJlbSAsIDIuMTg2Mjc0NTA5OHJlbSAgKyAgMS41Njg2Mjc0NTF2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ3JpZC1yb3ctZ2FwOiBjbGFtcCggMi41cmVtICwgMi4xODYyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtcm93LWdhcDogY2FsYygyLjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2ljb25zIHtcbiAgICBncmlkLXJvdy1nYXA6IDIuNXJlbTtcbiAgfVxufVxuLm1lbnVfX2ljb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tZW51X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMSA1MCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBjb2x1bW4tZ2FwOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGNvbHVtbi1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC42MjI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgY29sdW1uLWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGNvbHVtbi1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC42MjI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgY29sdW1uLWdhcDogY2FsYygxLjI1cmVtICsgMi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgfVxufVxuLm1lbnVfX2xpc3Qge1xuICByb3ctZ2FwOiAwLjYyNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICByb3ctZ2FwOiAzLjc1cmVtO1xuICB9XG59XG4ubWVudV9fbGluayB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBjdXJyZW50Q29sb3IgMCUsIGN1cnJlbnRDb2xvciAxMDAlKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMCAycHg7IC8qINCd0LDRh9Cw0LvRjNC90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8gKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGVhc2U7XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLm1lbnVfX2xpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7IC8qINCa0L7QvdC10YfQvdCw0Y8g0YjQuNGA0LjQvdCwINC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNGPINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIGNvbG9yOiAjMjk3N0Q1O1xuICB9XG59XG5cbi5pY29uLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmljb24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgICBoZWlnaHQ6IDEuMTI1cmVtO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKGFueS1ob3Zlcjogbm9uZSkge1xuICAuaWNvbi1tZW51IHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5pY29uLW1lbnUgc3BhbiwgLmljb24tbWVudTo6YmVmb3JlLCAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMC4xODc1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDI5NkQ7XG4gIH1cbiAgLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogY2FsYyg0NSUgLSAwLjA2MjVyZW0pO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb290ZXJfX21hcCB7XG4gIHotaW5kZXg6IDE7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmZvb3Rlcl9fbWFwIHtcbiAgICBoZWlnaHQ6IDM1LjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMjQuNTYyNXJlbSAsIDIxLjcwNzU5ODAzOTJyZW0gICsgIDE0LjI3NDUwOTgwMzl2dyAsIDM1LjkzNzVyZW0gKSkge1xuICAgIC5mb290ZXJfX21hcCB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAyNC41NjI1cmVtICwgMjEuNzA3NTk4MDM5MnJlbSAgKyAgMTQuMjc0NTA5ODAzOXZ3ICwgMzUuOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAyNC41NjI1cmVtICwgMjEuNzA3NTk4MDM5MnJlbSAgKyAgMTQuMjc0NTA5ODAzOXZ3ICwgMzUuOTM3NXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fbWFwIHtcbiAgICAgIGhlaWdodDogY2FsYygyNC41NjI1cmVtICsgMTEuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyX19tYXAge1xuICAgIGhlaWdodDogMjQuNTYyNXJlbTtcbiAgfVxufVxuLmZvb3Rlcl9fdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5mb290ZXJfX3RleHQge1xuICAgIHBhZGRpbmctdG9wOiAwLjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAwLjQzNzVyZW0gLCAwLjM0MzM4MjM1MjlyZW0gICsgIDAuNDcwNTg4MjM1M3Z3ICwgMC44MTI1cmVtICkpIHtcbiAgICAuZm9vdGVyX190ZXh0IHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMC40Mzc1cmVtICwgMC4zNDMzODIzNTI5cmVtICArICAwLjQ3MDU4ODIzNTN2dyAsIDAuODEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDAuNDM3NXJlbSAsIDAuMzQzMzgyMzUyOXJlbSAgKyAgMC40NzA1ODgyMzUzdncgLCAwLjgxMjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMC40Mzc1cmVtICsgMC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXJfX3RleHQge1xuICAgIHBhZGRpbmctdG9wOiAwLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNDM3NXJlbSAsIDAuMzQzMzgyMzUyOXJlbSAgKyAgMC40NzA1ODgyMzUzdncgLCAwLjgxMjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAwLjQzNzVyZW0gLCAwLjM0MzM4MjM1MjlyZW0gICsgIDAuNDcwNTg4MjM1M3Z3ICwgMC44MTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC40Mzc1cmVtICwgMC4zNDMzODIzNTI5cmVtICArICAwLjQ3MDU4ODIzNTN2dyAsIDAuODEyNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygwLjQzNzVyZW0gKyAwLjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNDM3NXJlbTtcbiAgfVxufVxuLmZvb3Rlcl9fdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuZm9vdGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjI0NTA5ODAzOXJlbSAgKyAgMC42Mjc0NTA5ODA0dncgLCAxLjI1cmVtICkpIHtcbiAgICAuZm9vdGVyX190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjYyNDUwOTgwMzlyZW0gICsgIDAuNjI3NDUwOTgwNHZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42MjQ1MDk4MDM5cmVtICArICAwLjYyNzQ1MDk4MDR2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNzVyZW0gKyAwLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXJfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuZm9vdGVyX190ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGxpbmUtaGVpZ2h0OiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgICBsaW5lLWhlaWdodDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGluZS1oZWlnaHQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICkpIHtcbiAgICAuZm9vdGVyX190ZXh0IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDAuOTM3NXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDAuOTM3NXJlbTtcbiAgfVxufVxuLmZvb3Rlcl9fdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjRkZGOUZEO1xufVxuXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tYWluIHtcbiAgICBwYWRkaW5nLXRvcDogMTAuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDcuMTI1cmVtICwgNi4yOTM2Mjc0NTFyZW0gICsgIDQuMTU2ODYyNzQ1MXZ3ICwgMTAuNDM3NXJlbSApKSB7XG4gICAgLm1haW4ge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCA3LjEyNXJlbSAsIDYuMjkzNjI3NDUxcmVtICArICA0LjE1Njg2Mjc0NTF2dyAsIDEwLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCA3LjEyNXJlbSAsIDYuMjkzNjI3NDUxcmVtICArICA0LjE1Njg2Mjc0NTF2dyAsIDEwLjQzNzVyZW0gKSkge1xuICAgIC5tYWluIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDcuMTI1cmVtICsgMy4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbiB7XG4gICAgcGFkZGluZy10b3A6IDcuMTI1cmVtO1xuICB9XG59XG4ubWFpbiB7XG4gIHBhZGRpbmctYm90dG9tOiAzLjU2MjVyZW07XG59XG4ubWFpbl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxLjg3NXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tYWluX19jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5tYWluX19jb250ZW50IHtcbiAgZmxleDogMCAxIDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW5fX2NvbnRlbnQge1xuICAgIHJvdy1nYXA6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocm93LWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWFpbl9fY29udGVudCB7XG4gICAgICByb3ctZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNjIyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocm93LWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWFpbl9fY29udGVudCB7XG4gICAgICByb3ctZ2FwOiBjYWxjKDEuMjVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tYWluX19jb250ZW50IHtcbiAgICByb3ctZ2FwOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWFpbl9fY29udGVudCB7XG4gICAgb3JkZXI6IDE7XG4gIH1cbn1cbi5tYWluX190aXRsZSBzcGFuIHtcbiAgY29sb3I6ICMyOTc3RDU7XG59XG4ubWFpbl9fYmF0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAwLjkzNzVyZW07XG59XG4ubWFpbl9fYnV0dG9uLWJsdWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMjk2RDtcbiAgbGluZS1oZWlnaHQ6IDEuNjg3NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0QzZFOTtcbiAgYm94LXNoYWRvdzogLTJweCA3cHggMHB4IDBweCAjMjk3N0Q1O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuLm1haW5fX2J1dHRvbi1ibHVlOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3cHgpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzI5NzdENTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tYWluX19idXR0b24tYmx1ZSB7XG4gICAgYm94LXNoYWRvdzogLTJweCAzcHggMHB4IDBweCAjMjk3N0Q1O1xuICB9XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLm1haW5fX2J1dHRvbi1ibHVlOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWFpbl9fYnV0dG9uLWNsZWFyIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKSkge1xuICAgIC5tYWluX19idXR0b24tY2xlYXIge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKSkge1xuICAgIC5tYWluX19idXR0b24tY2xlYXIge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNzVyZW0gKyAwLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbl9fYnV0dG9uLWNsZWFyIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbi5tYWluX19idXR0b24tY2xlYXIge1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA1cHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLm1haW5fX2J1dHRvbi1jbGVhcjpob3ZlciB7XG4gICAgY29sb3I6ICMwODA3MDc7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tYWluX19idXR0b24tY2xlYXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY2NjY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG4ubWFpbl9faW1hZ2Uge1xuICBvcmRlcjogMDtcbiAgZmxleDogMCAxIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW5fX2ltYWdlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDkuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0yLjM1Mjk0MTA5ODNyZW0gICsgIDExLjc2NDcwNTgwMzl2dyAsIDkuMzc1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTIuMzUyOTQxMDk4M3JlbSAgKyAgMTEuNzY0NzA1ODAzOXZ3ICwgOS4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTIuMzUyOTQxMDk4M3JlbSAgKyAgMTEuNzY0NzA1ODAzOXZ3ICwgOS4zNzVyZW0gKSkge1xuICAgIC5tYWluX19pbWFnZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgOS4zNzQ5OTk5Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctbGVmdDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgcGFkZGluZy1yaWdodDogOS4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMS41NTYzNzI1NDlyZW0gICsgIDcuODQzMTM3MjU0OXZ3ICwgOS4zNzVyZW0gKSkge1xuICAgIC5tYWluX19pbWFnZSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjU1NjM3MjU0OXJlbSAgKyAgNy44NDMxMzcyNTQ5dncgLCA5LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjU1NjM3MjU0OXJlbSAgKyAgNy44NDMxMzcyNTQ5dncgLCA5LjM3NXJlbSApKSB7XG4gICAgLm1haW5fX2ltYWdlIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMy4xMjVyZW0gKyA2LjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIG9yZGVyOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW5fX2ltYWdlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMDAwMDAwMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIDMuOTA5MzEzNzA5OHJlbSAgKyAgLTMuOTIxNTY4NTQ5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLm1haW5fX2ltYWdlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygzLjEyNXJlbSArIC0zLjEyNDk5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIDMuOTA5MzEzNzA5OHJlbSAgKyAgLTMuOTIxNTY4NTQ5dncgLCAzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygzLjEyNXJlbSArIC0zLjEyNDk5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuMTI1cmVtO1xuICB9XG59XG4ubWFpbl9faW1hZ2UgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiBjbGFtcCgyOTdweCwgNDB2dywgNTk1cHgpO1xuICBhc3BlY3QtcmF0aW86IDU5NS84OTM7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLm1haW5fX2ltYWdlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogY2xhbXAoNTM1cHgsIDUwdncsIDg5M3B4KTtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGJhY2tncm91bmQ6ICMwMDI5NkQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDIxMiwgMjI4LCAyNDQpIDE1JSwgcmdiKDY4LCAxOTgsIDIzMykgNDUlLCByZ2IoNDEsIDExOSwgMjEzKSA3MCUsIHJnYigwLCA0MSwgMTA5KSAxMDAlKTtcbiAgei1pbmRleDogMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tYWluX19pbWFnZTo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNTUlKTtcbiAgfVxufVxuXG4uY29udGFjdHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFNEY0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuY29udGFjdHMge1xuICAgIHBhZGRpbmctdG9wOiA0LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAzLjc1cmVtICwgMy41NjE3NjQ3MDU5cmVtICArICAwLjk0MTE3NjQ3MDZ2dyAsIDQuNXJlbSApKSB7XG4gICAgLmNvbnRhY3RzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMy43NXJlbSAsIDMuNTYxNzY0NzA1OXJlbSAgKyAgMC45NDExNzY0NzA2dncgLCA0LjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAzLjc1cmVtICwgMy41NjE3NjQ3MDU5cmVtICArICAwLjk0MTE3NjQ3MDZ2dyAsIDQuNXJlbSApKSB7XG4gICAgLmNvbnRhY3RzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDMuNzVyZW0gKyAwLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY29udGFjdHMge1xuICAgIHBhZGRpbmctdG9wOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5jb250YWN0cyB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAzLjU2MTc2NDcwNTlyZW0gICsgIDAuOTQxMTc2NDcwNnZ3ICwgNC41cmVtICkpIHtcbiAgICAuY29udGFjdHMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMy41NjE3NjQ3MDU5cmVtICArICAwLjk0MTE3NjQ3MDZ2dyAsIDQuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAzLjU2MTc2NDcwNTlyZW0gICsgIDAuOTQxMTc2NDcwNnZ3ICwgNC41cmVtICkpIHtcbiAgICAuY29udGFjdHMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMy43NXJlbSArIDAuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jb250YWN0cyB7XG4gICAgcGFkZGluZy1ib3R0b206IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5jb250YWN0cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcbiAgfVxufVxuLmNvbnRhY3RzX19pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmNvbnRhY3RzX19pdGVtcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIH1cbn1cblxuLmNvbnRhY3RfX2l0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmNvbnRhY3RfX2l0ZW0ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxMDBweCAxNTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuY29udGFjdF9faXRlbSB7XG4gICAgY29sdW1uLWdhcDogMjguNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGNvbHVtbi1nYXA6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtNy4yMTU2ODYxOTYzcmVtICArICAzNi4wNzg0MzEyOTQxdncgLCAyOC43NXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX2l0ZW0ge1xuICAgICAgY29sdW1uLWdhcDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC03LjIxNTY4NjE5NjNyZW0gICsgIDM2LjA3ODQzMTI5NDF2dyAsIDI4Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGNvbHVtbi1nYXA6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtNy4yMTU2ODYxOTYzcmVtICArICAzNi4wNzg0MzEyOTQxdncgLCAyOC43NXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX2l0ZW0ge1xuICAgICAgY29sdW1uLWdhcDogY2FsYygwLjAwMDAwMDA2MjVyZW0gKyAyOC43NDk5OTk5Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNvbnRhY3RfX2l0ZW0ge1xuICAgIGNvbHVtbi1nYXA6IDAuMDAwMDAwMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmNvbnRhY3RfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy4xMjVyZW07XG4gIH1cbn1cbi5jb250YWN0X19pY29uIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtcm93LWVuZDogMztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5jb250YWN0X19pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xuICB9XG59XG4uY29udGFjdF9faWNvbiBpbWcge1xuICBtYXgtaGVpZ2h0OiAzLjEyNXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmNvbnRhY3RfX2ljb24gaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXgtaGVpZ2h0OiBjbGFtcCggMS44NzVyZW0gLCAxLjU2MTI3NDUwOThyZW0gICsgIDEuNTY4NjI3NDUxdncgLCAzLjEyNXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX2ljb24gaW1nIHtcbiAgICAgIG1heC1oZWlnaHQ6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNTYxMjc0NTA5OHJlbSAgKyAgMS41Njg2Mjc0NTF2dyAsIDMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1heC1oZWlnaHQ6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNTYxMjc0NTA5OHJlbSAgKyAgMS41Njg2Mjc0NTF2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAuY29udGFjdF9faWNvbiBpbWcge1xuICAgICAgbWF4LWhlaWdodDogY2FsYygxLjg3NXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jb250YWN0X19pY29uIGltZyB7XG4gICAgbWF4LWhlaWdodDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5jb250YWN0X19pY29uIGltZyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuY29udGFjdF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDAuOTY4MTM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCAxLjc1cmVtICkpIHtcbiAgICAuY29udGFjdF9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAwLjk2ODEzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgMS43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDAuOTY4MTM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCAxLjc1cmVtICkpIHtcbiAgICAuY29udGFjdF9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDEuMTI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jb250YWN0X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuLmNvbnRhY3RfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICBjb2xvcjogIzAwMjk2RDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5jb250YWN0X190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbiAgfVxufVxuLmNvbnRhY3RfX3RleHQge1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyAzXCI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5jb250YWN0X190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MDI2OTYwNzg0cmVtICArICAwLjU0OTAxOTYwNzh2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5jb250YWN0X190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzAyNjk2MDc4NHJlbSAgKyAgMC41NDkwMTk2MDc4dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzAyNjk2MDc4NHJlbSAgKyAgMC41NDkwMTk2MDc4dncgLCAxLjI1cmVtICkpIHtcbiAgICAuY29udGFjdF9fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC44MTI1cmVtICsgMC40Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY29udGFjdF9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmNvbnRhY3RfX3RleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGxpbmUtaGVpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMS4wNDYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNzVyZW0gKSkge1xuICAgIC5jb250YWN0X190ZXh0IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMS4wNDYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGluZS1oZWlnaHQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAxLjA0NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS43NXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX3RleHQge1xuICAgICAgbGluZS1oZWlnaHQ6IGNhbGMoMS4xODc1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY29udGFjdF9fdGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTg3NXJlbTtcbiAgfVxufVxuLmNvbnRhY3RfX3RleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMjk2RDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmNvbnRhY3RfX3RleHQgcDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzgwNjM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5jb250YWN0X190ZXh0IHA6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC43ODA2MzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDEuNTYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC43ODA2MzcyNTQ5cmVtICArICAwLjc4NDMxMzcyNTV2dyAsIDEuNTYyNXJlbSApKSB7XG4gICAgLmNvbnRhY3RfX3RleHQgcDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC45Mzc1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jb250YWN0X190ZXh0IHA6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xuICB9XG59XG5cbi5zZXJ2aWNlcyB7XG4gIHBhZGRpbmc6IDQuMTg3NXJlbSAwcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLnNlcnZpY2VzX19iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0byAlO1xuICB0b3A6IDY3cHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zZXJ2aWNlc19faGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbn1cbi5zZXJ2aWNlc19faXRlbXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICByb3ctZ2FwOiAxLjI1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYxLjk5ODc1ZW0pIHtcbiAgLnNlcnZpY2VzX19pdGVtcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLnNlcnZpY2VzX19pdGVtcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbi5zZXJ2aWNlc19faXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDksIDI1MywgMC42KTtcbiAgcGFkZGluZzogMi41NjI1cmVtIDJyZW07XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAwcHggIzhiYmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMC45Mzc1cmVtO1xufVxuXG4uaXRlbS1zZXJ2aWNlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHJvdy1nYXA6IDEuNTYyNXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLml0ZW0tc2VydmljZXNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDEuMDYxNzY0NzA1OXJlbSAgKyAgMC45NDExNzY0NzA2dncgLCAycmVtICkpIHtcbiAgICAuaXRlbS1zZXJ2aWNlc19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDEuMDYxNzY0NzA1OXJlbSAgKyAgMC45NDExNzY0NzA2dncgLCAycmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMjVyZW0gLCAxLjA2MTc2NDcwNTlyZW0gICsgIDAuOTQxMTc2NDcwNnZ3ICwgMnJlbSApKSB7XG4gICAgLml0ZW0tc2VydmljZXNfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjI1cmVtICsgMC43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLml0ZW0tc2VydmljZXNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLml0ZW0tc2VydmljZXNfX3RpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsaW5lLWhlaWdodDogY2xhbXAoIDEuODc1cmVtICwgMS41OTI2NDcwNTg4cmVtICArICAxLjQxMTc2NDcwNTl2dyAsIDNyZW0gKSkge1xuICAgIC5pdGVtLXNlcnZpY2VzX190aXRsZSB7XG4gICAgICBsaW5lLWhlaWdodDogY2xhbXAoIDEuODc1cmVtICwgMS41OTI2NDcwNTg4cmVtICArICAxLjQxMTc2NDcwNTl2dyAsIDNyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGluZS1oZWlnaHQ6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNTkyNjQ3MDU4OHJlbSAgKyAgMS40MTE3NjQ3MDU5dncgLCAzcmVtICkpIHtcbiAgICAuaXRlbS1zZXJ2aWNlc19fdGl0bGUge1xuICAgICAgbGluZS1oZWlnaHQ6IGNhbGMoMS44NzVyZW0gKyAxLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLml0ZW0tc2VydmljZXNfX3RpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogMS44NzVyZW07XG4gIH1cbn1cbi5pdGVtLXNlcnZpY2VzX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDIuMTg3NXJlbTtcbiAgY29sb3I6ICMyOTc3RDU7XG59XG4uaXRlbS1zZXJ2aWNlc19fdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDByZW07XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuLml0ZW0tc2VydmljZXNfX2xpbmsge1xuICBjb2xvcjogIzQ0QzZFOTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbnVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2hvbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURRRDs7QUNOQTs7O0VBR0Msc0JBQUE7QURTRDs7QUNDQTs7RUFFQyxZQUFBO0VBQ0EsZ0JBQUE7QURFRDs7QUNBQTtFQUNDLFdEUVc7RUNQWCxjQUFBO0VBQ0Esc0JERVk7RUNEWixrQkRFVTtFQ0FWLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURFRDs7QUNBQTs7O0VBR0Msc0JEVlk7RUNXWixrQkFBQTtBREdEOztBQ0RBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBRElEOztBQ0ZBO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0FES0Q7O0FDSEE7RUFDQyxnQkFBQTtBRE1EOztBQ0pBO0VBQ0MsbUJBQUE7QURPRDs7QUNMQTs7Ozs7O0VBTUMsb0JBQUE7RUFDQSxrQkFBQTtBRFFEOztBQUFDO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBR0Y7QUFLQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFIRDtBQUtFO0VBREQ7SUFFRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7SUFDQSw4QkFBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFD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RjtJQ3FDRyxpQkFBQTtFSjRQRDtBQUNGOztBRzVSQTtFQUNDLDRCQUFBO0FIK1JEO0FJbFJFO0VEZEY7SUNlRyxrQkFBQTtFSnFSRDtBQUNGO0FJbFJDO0VBRUM7SURyQkY7TUNzQkcsNEVBaEJjO0lKb1NiO0VBQ0Y7RUlsUkE7SUR6QkY7TUMwQkcsK0RBQUE7SUpxUkM7RUFDRjtBQUNGO0FJblJFO0VEOUJGO0lDK0JHLG9CQUFBO0VKc1JEO0FBQ0Y7QUl4U0U7RURkRjtJQ2VHLG9CQUFBO0VKMlNEO0FBQ0Y7QUl4U0M7RUFFQztJRHJCRjtNQ3NCRyw4RUFoQmM7SUowVGI7RUFDRjtFSXhTQTtJRHpCRjtNQzBCRyxpRUFBQTtJSjJTQztFQUNGO0FBQ0Y7QUl6U0U7RUQ5QkY7SUMrQkcsc0JBQUE7RUo0U0Q7QUFDRjtBRzVVQTtFQUlDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FIMlVEOztBS2haQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUxtWkY7QUkzVUU7RUM3RUY7SUQ4RUcsZ0JBQUE7RUo4VUQ7QUFDRjtBSTNVQztFQUVDO0lDcEZGO01EcUZHLHdFQWhCYztJSjZWYjtFQUNGO0VJM1VBO0lDeEZGO01EeUZHLHlEQUFBO0lKOFVDO0VBQ0Y7QUFDRjtBSTVVRTtFQzdGRjtJRDhGRyxlQUFBO0VKK1VEO0FBQ0Y7QUs5YUE7RUFPRSxNQUFBO0VBQ0EsT0FBQTtBTDBhRjtBSXJXRTtFQzdFRjtJRDhFRyxvQkFBQTtFSndXRDtBQUNGO0FJcldDO0VBRUM7SUNwRkY7TURxRkcsOEVBYmU7SUpvWGQ7RUFDRjtFSXJXQTtJQ3hGRjtNRHlGRyxnRUFBQTtJSndXQztFQUNGO0FBQ0Y7QUl0V0U7RUM3RkY7SUQ4RkcscUJBQUE7RUp5V0Q7QUFDRjtBSTNYRTtFQzdFRjtJRDhFRyx1QkFBQTtFSjhYRDtBQUNGO0FJM1hDO0VBRUM7SUNwRkY7TURxRkcsaUZBYmU7SUowWWQ7RUFDRjtFSTNYQTtJQ3hGRjtNRHlGRyxtRUFBQTtJSjhYQztFQUNGO0FB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QkFBQTtJQUNBLFVBQUE7RUx5akJEO0VLdGpCQztJQUNDLFFBQUE7RUx3akJGO0VLbGpCQztJQUNDLDBCQUFBO0lBQ0EseUJBQUE7RUxvakJGO0VLbGpCQztJQUNDLDZCQUFBO0lBQ0Esd0JBQUE7SUFDQSxXQUFBO0VMb2pCRjtBQUNGOztBTWgwQkE7RUFDQyxXQUFBO0FObTBCRDtBTWwwQkM7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBTm8wQkY7QUkzdkJFO0VFM0VEO0lGNEVFLGtCQUFBO0VKOHZCRDtBQUNGO0FJM3ZCQztFQUVDO0lFbEZEO01GbUZFLCtFQWhCYztJSjZ3QmI7RUFDRjtFSTN2QkE7SUV0RkQ7TUZ1RkUsNkRBQUE7SUo4dkJDO0VBQ0Y7QUFDRjtBSTV2QkU7RUUzRkQ7SUY0RkUsa0JBQUE7RUordkJEO0FBQ0Y7QU1yMUJDO0VBQ0UseUJBQUE7QU51MUJIO0FJcHhCRTtFRXBFRDtJRnFFRSxzQkFBQTtFSnV4QkQ7QUFDRjtBSXB4QkM7RUFFQztJRTNFRDtNRjRFRSxnRkFoQmM7SUpzeUJiO0VBQ0Y7RUlweEJBO0lFL0VEO01GZ0ZFLGdFQUFBO0lKdXhCQztFQUNGO0FBQ0Y7QUlyeEJFO0VFcEZEO0lGcUZFLHNCQUFBO0VKd3hCRDtBQUNGO0FJMXlCRTtFRXBFRDtJRnFFRSx5QkFBQTtFSjZ5QkQ7QUFDRjtBSTF5QkM7RUFFQztJRTNFRDtNRjRFRSxtRkFoQmM7SUo0ekJiO0VBQ0Y7RUkxeUJBO0lFL0VEO01GZ0ZFLG1FQUFBO0lKNnlCQztFQUNGO0FBQ0Y7QUkzeUJFO0VFcEZEO0lGcUZFLHlCQUFBO0VKOHlCRDtBQUNGO0FNcDRCQztFQUlFLGtCQUFBO0VBQ0EseUJBQUE7QU5tNEJIO0FJcDBCRTtFRXBFRDtJRnFFRSxrQkFBQTtFSnUwQkQ7QUFDRjtBSXAwQkM7RUFFQztJRTNFRDtNRjRFRSwwRUFoQmM7SUpzMUJiO0VBQ0Y7RUlwMEJBO0lFL0VEO01GZ0ZFLDBEQUFBO0lKdTBCQztFQUNGO0FBQ0Y7QUlyMEJFO0VFcEZEO0lGcUZFLGtCQUFBO0VKdzBCRDtBQUNGO0FJMTFCRTtFRXBF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Q0g7O0FPM3JDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FQOHJDRjtBSTk2Q0U7RUc2UEE7SUg1UEMsZUFBQTtFSmk3Q0Q7QUFDRjtBSTk2Q0M7RUFFQztJR3NQQTtNSHJQQyx1RUFoQmM7SUpnOENiO0VBQ0Y7RUk5NkNBO0lHa1BBO01IalBDLDJEQUFBO0lKaTdDQztFQUNGO0FBQ0Y7QUkvNkNFO0VHNk9BO0lINU9DLGtCQUFBO0VKazdDRDtBQUNGO0FJcDhDRTtFRzZQQTtJSDVQQyxpQkFBQTtFSnU4Q0Q7QUFDRjtBSXA4Q0M7RUFFQztJR3NQQTtNSHJQQywwRUFoQmM7SUpzOUNiO0VBQ0Y7RUlwOENBO0lHa1BBO01IalBDLCtEQUFBO0lKdThDQztFQUNGO0FBQ0Y7QUlyOENFO0VHNk9BO0lINU9DLHFCQUFBO0VKdzhDRDtBQUNGO0FPN3RDRTtFQUdDLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FQNnRDSDtBT3h0Q0U7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FQMHRDSDtBT3J0Q0U7RUFDQyxjQUFBO0FQdXRDSFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LzRltC60YHQuNC90ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyZkaXNwbGF5PXN3YXAgLSDQtNC+0LTQsNGC0Lgg0L/RgNC4INC/0ZbQtNC60LvRjtGH0LXQvdC90ZYg0YfQtdGA0LXQtyDQv9C70LDQs9GW0L1cXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0LvQvtC60LDQu9GM0L3RliDRhNCw0LnQu9C4INGI0YDQuNGE0YLRltCyXFxyXFxuLy9AaW1wb3J0IFxcXCJmb250cy9mb250c1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRltC60L7QvdC60L7QstC40YUg0YjRgNC40YTRgtGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J/RltC00LrQu9GO0YfQuNGC0LgsINGP0LrRidC+INGUINGE0LDQudC7INGW0LrQvtC90LrQvtCy0L7Qs9C+INGI0YDQuNGE0YLRg1xcclxcbi8vQGltcG9ydCBcXFwiZm9udHMvaWNvbnNcXFwiO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINGI0LDQsdC70L7QvdGDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyZkaXNwbGF5PXN3YXAg0JTQvtCx0LDQstC40YLRjCDQv9GA0Lgg0L/QvtC00LrQu9GO0YfQtdC90LjQuCDRh9C10YDQtdC3INC/0LvQsNCz0LjQvUBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86cmVndWxhciw1MDAsNjAwLDcwMCw4MDApO1xcclxcbi8vICZzdWJzZXQ9Y3lyaWxsaWMtZXh0XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucyszOjMwMCxyZWd1bGFyJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoxMDAsMzAwLHJlZ3VsYXIsNTAwLDYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLHJlZ3VsYXIsNTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczpyZWd1bGFyLDYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG4vLyDQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INGI0YDQuNGE0YIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuJGZvbnRGYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4kZm9udFNpemU6IHJlbSgyMCk7IC8vINC00LUgMTQocHgpIC0g0YDQvtC30LzRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INC3INC80LDQutC10YLRg1xcclxcblxcclxcbi8vINCe0YHQvdC+0LLQvdGWINC60L7Qu9GM0L7RgNC4XFxyXFxuJG1haW5Db2xvcjogIzAwMDsgLy8g0JrQvtC70ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxcclxcblxcclxcbi8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDQsNC00LDQv9GC0LjQstC90L7RlyDRgdGW0YLQutC4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0JzRltC90ZbQvNCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0YLQvtGA0ZbQvdC60LhcXHJcXG4kbWluV2lkdGg6IDMyMDtcXHJcXG4vLyDQqNC40YDQuNC90LAg0L/QvtC70L7RgtC90LAgKNC80LDQutC10YLRgylcXHJcXG4kbWF4V2lkdGg6IDE5MjA7XFxyXFxuLy8gJG1heFdpZHRoOiAxNzI4O1xcclxcbi8vINCo0LjRgNC40L3QsCDQvtCx0LzQtdC20YPRjtGH0L7Qs9C+INC60L7QvdGC0LXQudC90LXRgNCwICgwID0g0L3QtdC80LDRlCDQvtCx0LzQtdC20LXQvdC90Y8pXFxyXFxuJG1heFdpZHRoQ29udGFpbmVyOiAxNTY1O1xcclxcbi8vINCX0LDQs9Cw0LvRjNC90LjQuSDQstGW0LTRgdGC0YPQvyDRgyDQutC+0L3RgtC10LnQvdC10YDQsFxcclxcbi8vICgzMCA9INC/0L4gMTVweCDQu9GW0LLQvtGA0YPRhyDRliDQv9GA0LDQstC+0YDRg9GHLCAwID0g0L3QtdC80LDRlCDQstGW0LTRgdGC0YPQv9GDKVxcclxcbiRjb250YWluZXJQYWRkaW5nOiAzMDtcXHJcXG5cXHJcXG4vLyDQqNC40YDQuNC90LAg0YHQv9GA0LDRhtGM0L7QstGD0LLQsNC90L3RjyDQv9C10YDRiNC+0LPQviDQsdGA0LXQudC60L/QvtGW0L3RgtGDXFxyXFxuJGNvbnRhaW5lcldpZHRoOiAkbWF4V2lkdGhDb250YWluZXIgKyAkY29udGFpbmVyUGFkZGluZztcXHJcXG5cXHJcXG4vLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQuFxcclxcbiRwYzogZW0oJGNvbnRhaW5lcldpZHRoKTsgLy8g0J/Qmiwg0L3QvtGD0YLQsdGD0LrQuCwg0LTQtdGP0LrRliDQv9C70LDQvdGI0LXRgtC4INGDINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LzRgyDQv9C+0LvQvtC20LXQvdC90ZZcXHJcXG4kdGFibGV0OiBlbSg5OTEuOTgpOyAvLyDQn9C70LDQvdGI0LXRgtC4LCDQtNC10Y/QutGWINGC0LXQu9C10YTQvtC90Lgg0LIg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiRtb2JpbGU6IGVtKDc2Ny45OCk7IC8vINCi0LXQu9C10YTQvtC90LggTFxcclxcbiRtb2JpbGVTbWFsbDogZW0oNDc5Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBTXFxyXFxuXFxyXFxuLy8g0KLQuNC/INCw0LTQsNC/0YLQuNCy0LA6XFxyXFxuLy8gMSA9INGH0YPQudC90ZbRgdGC0YwgKNGDINC60L7QvdGC0LXQudC90LXRgNCwINC90LXQvNCw0ZQg0LHRgNC10LnQutC/0L7RltC90YLRltCyKSxcXHJcXG4vLyAyID0g0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIgKNC60L7QvdGC0LXQudC90LXRgCDQt9C80ZbQvdGO0ZQg0YHQstC+0Y4g0YjQuNGA0LjQvdGDINC/0L4g0LHRgNC10LnQui3Qv9C+0ZfQvdGCKVxcclxcbiRyZXNwb25zaXZlVHlwZTogMTtcXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0J7QsdC90YPQu9C10L3QvdGPID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL251bGxcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQtdCz0LAgQk9EWSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdC8vINCh0LrRgNC+0LvQuyDQt9Cw0LHQu9C+0LrQvtCy0LDQvdC+XFxyXFxuXFx0LmxvY2sgJiB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRcXHR0b3VjaC1hY3Rpb246IG5vbmU7XFxyXFxuXFx0XFx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KHQsNC50YIg0LfQsNCy0LDQvdGC0LDQttC10L3QuNC5XFxyXFxuXFx0LmxvYWRlZCAmIHtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCe0LHQvtC70L7QvdC60LAgd3JhcHBlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi53cmFwcGVyIHtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdCY6OmJlZm9yZXtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0XFx0aW5zZXQ6IDA7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcdFxcdFxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG5cXHRcXHRcXHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG5cXHRcXHRcXHRvcGFjaXR5OiAwO1xcclxcblxcdFxcdFxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcblxcdFxcdFxcdHotaW5kZXg6IDI7XFxyXFxuXFx0XFx0fVxcclxcblxcdH0ubWVudS1vcGVuICY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0b3BhY2l0eTogMTtcXHJcXG5cXHRcXHRwb2ludGVyLWV2ZW50czogYXV0bztcXHJcXG5cXHR9XFxyXFxuXFx0QHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xcclxcblxcdFxcdG92ZXJmbG93OiBjbGlwO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQn9GA0LjRgtC40YHQutCw0ZTQvNC+IGZvb3RlclxcclxcblxcdD4gbWFpbiB7XFxyXFxuXFx0XFx0ZmxleDogMSAxIGF1dG87XFxyXFxuXFx0fVxcclxcblxcdC8vINCk0ZbQutGBINC00LvRjyDRgdC70LDQudC00LXRgNGW0LJcXHJcXG5cXHQ+ICoge1xcclxcblxcdFxcdG1pbi13aWR0aDogMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCe0LHQvNC10LbRg9GO0YfQuNC5INC60L7QvdGC0LXQudC90LXRgCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLypcXHJcXG4oaSkg0KHRgtC40LvRliDQsdGD0LTRg9GC0Ywg0LfQsNGB0YLQvtGB0L7QstGD0LLQsNGC0LjRgdGMINC00L5cXHJcXG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXFxyXFxu0J3QsNC/0YDQuNC60LvQsNC0IGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0ZYg0YIu0L8uXFxyXFxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBjbnRcXHJcXG4qL1xcclxcbkBpZiAoJHJlc3BvbnNpdmVUeXBlPT0xKSB7XFxyXFxuXFx0Ly8g0KfRg9C50L3QsFxcclxcblxcdFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcblxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgkY29udGFpbmVyV2lkdGgpO1xcclxcblxcdFxcdFxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG5cXHRcXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksIDE1KTtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgbWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpLCAxNSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufSBAZWxzZSB7XFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0LDQvNC4XFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuXFx0XFx0fSBAZWxzZSB7XFxyXFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkcGMpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg5NzApO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDc1MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiBub25lO1xcclxcblxcdFxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCBhbmQgJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINCx0LDQt9C+0LLQuNGFINGB0YLQuNC70ZbQsiwg0YjQsNCx0LvQvtC90ZbQsiAo0LfQsNCz0L7RgtGW0LLQtdC70YwpINGC0LAg0LTQvtC/0L7QvNGW0LbQvdC40YUg0LrQu9Cw0YHRltCyXFxyXFxuLy8g0JTQu9GPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8v0LLQuNC80LrQvdC10L3QvdGPINC60L7QvdC60YDQtdGC0L3QuNGFINGB0YLQuNC70ZbQsiDQtNC40LLQuNGB0YwgYmFzZS5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZVxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0LfQsNCz0LDQu9GM0L3QuNGFINC10LvQtdC80LXQvdGC0ZbQsiDQv9GA0L7QtdC60YLRg1xcclxcbkBpbXBvcnQgXFxcImNvbW1vblxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0LHQu9C+0LrRltCyXFxyXFxuQGltcG9ydCBcXFwiaGVhZGVyXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJmb290ZXJcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC+0LrRgNC10LzQuNGFINGB0YLQvtGA0ZbQvdC+0LpcXHJcXG5AaW1wb3J0IFxcXCJob21lXFxcIjtcXHJcXG5cIixcIioge1xcclxcblxcdHBhZGRpbmc6IDBweDtcXHJcXG5cXHRtYXJnaW46IDBweDtcXHJcXG5cXHRib3JkZXI6IDBweDtcXHJcXG59XFxyXFxuKixcXHJcXG4qOmJlZm9yZSxcXHJcXG4qOmFmdGVyIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46Zm9jdXMsXFxyXFxuOmFjdGl2ZSB7XFxyXFxuXFx0Ly8gb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuYTpmb2N1cyxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuXFx0Ly8gb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0bWluLXdpZHRoOiAkbWluV2lkdGggKyBweDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0Y29sb3I6ICRtYWluQ29sb3I7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdGZvbnQtc2l6ZTogJGZvbnRTaXplO1xcclxcblxcdC8vdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG5cXHQtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbmEge1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxudWwgbGkge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmltZyB7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXCIsXCIvLyDQl9Cw0LPQsNC70YzQvdC40Lkg0YTQsNC50Lsg0LXQu9C10LzQtdC90YLRltCyINGE0L7RgNC8XFxyXFxuLy8g0JTQu9GPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8v0LLRltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0LrQvtC90LrRgNC10YLQvdC+0LPQviDQtdC70LXQvNC10L3RgtCwINGE0L7RgNC80Lgg0LTQuNCy0LjRgdGMIGJhc2UvZm9ybXMvZm9ybXMuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2UvZm9ybXMvZm9ybXNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0L/QvtC/0LDQv9GW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3BvcHVwXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGB0L/QvtC50LvQtdGA0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3BvbGxlcnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQsNCx0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvdGFic1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQvNCw0L9cXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL21hcHNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LHQu9C+0LrRgyBcXFwi0L/QvtC60LDQt9Cw0YLQuCDRidC1XFxcIlxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc2hvd21vcmVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC70LjQv9C60L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3N0aWNreVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0L/QvtCy0L3QvtC10LrRgNCw0L3QvdC+0LPQviDQsdC70L7QutGDXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxsc2NyZWVuXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LXQutGA0LDQvdC+0Zcg0L/RgNC+0LrRgNGD0YLQutC4XFxyXFxuLy8gU3R5bGVzIGZvciBmdWxscGFnZSBzY3JvbGxcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxwYWdlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyByaXBwbGUg0LXRhNC10LrRgtGDXFxyXFxuLy8gU3R5bGVzIGZvciByaXBwbGUgZWZmZWN0XFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9yaXBwbGVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC60LDRgdGC0L7QvNC90L7Qs9C+INC60YPRgNGB0L7RgNGDXFxyXFxuLy8gU3R5bGVzIGZvciBjdXN0b20gY3Vyc29yXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9jdXJzb3JcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINGH0YPQudC90LjRhSDQutCw0YDRgtC40L3QvtC6IChJQkcpXFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpYmcgKGRpdiDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZ2EgKGEg0Lcg0LrQsNGA0YLQuNC90LrQvtGOINGC0LAg0LrQu9Cw0YHQsNC80LgpXFxyXFxuW2NsYXNzKj1cXFwiLWliZ1xcXCJdIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuW2NsYXNzKj1cXFwiLWliZ19jb250YWluXFxcIl0ge1xcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCo0LDQsdC70L7QvdC4ICjQt9Cw0LPQvtGC0ZbQstC70ZYpXFxyXFxuLy8gQGV4dGVuZCAl0ZbQvCfRjyDRiNCw0LHQu9C+0L3RgztcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoU0NTUyk6IGV4XFxyXFxuXFxyXFxuLy8g0JvRltGH0LjQu9GM0L3QuNC6INC00LvRjyDRgdC/0LjRgdC60YNcXHJcXG4lbGlzdENvdW50ZXIge1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHRjb3VudGVyLXJlc2V0OiBpdGVtO1xcclxcblxcdGxpIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0JjpiZWZvcmUge1xcclxcblxcdFxcdFxcdGNvdW50ZXItaW5jcmVtZW50OiBpdGVtO1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IGNvdW50ZXIoaXRlbSk7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QtSDQstGW0LTQtdC+XFxyXFxuJXJlc3BvbnNpdmVWaWRlbyB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XFxyXFxuXFx0dmlkZW8sXFxyXFxuXFx0aWZyYW1lLFxcclxcblxcdG9iamVjdCxcXHJcXG5cXHRlbWJlZCB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCS0ZbQtNC10L4g0Y/QuiDRhNC+0L1cXHJcXG4ldmlkZW9CYWNrZ3JvdW5kIHtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0dG9wOiA1MCU7XFxyXFxuXFx0XFx0bGVmdDogNTAlO1xcclxcblxcdFxcdG1pbi13aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHdpZHRoOiBhdXRvO1xcclxcblxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHR6LWluZGV4OiAtMTAwO1xcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcclxcblxcdFxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQodGW0YDQuNC5INGE0ZbQu9GM0YLRgFxcclxcbiVncmF5ZmlsdGVyIHtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdGZpbHRlcjogZ3JheXNjYWxlKDEpO1xcclxcblxcdEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdGZpbHRlcjogZ3JheXNjYWxlKDApO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0LrQsNGB0YPQstCw0YLQuCDQstC40LTRltC70LXQvdC90Y9cXHJcXG4lbm9zZWxlY3Qge1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4vLyDQlNC30LXRgNC60LDQu9GM0L3QtSDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y9cXHJcXG4lbWlycm9yIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXHJcXG59XFxyXFxuLy8g0J/Qu9Cw0LLQvdC40Lkg0YHQutGA0L7Qu9C7XFxyXFxuJXNtb290aHNjcm9sbCB7XFxyXFxuXFx0LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbn1cXHJcXG4vLyDQodGF0L7QstCw0YLQuCDRgdC60YDQvtC70LtcXHJcXG4laGlkZXNjcm9sbCB7XFxyXFxuXFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi8vINCX0LDQs9C+0LvQvtCy0LrQuCwg0LfQsNCz0LDQu9GM0L3RliDQkdCV0Jwg0LHQu9C+0LrQuCDRgtCwINGW0L3RiNC1Li4uXFxyXFxuXFxyXFxuLnBhZ2Uge1xcclxcblxcclxcblxcdFxcdC8vIC5wYWdlX19tYWluXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbWFpbiB7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCZfX2NvbXRhY3RzIHtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jl9fc2VydmljZXMge1xcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5idG57XFxyXFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTgsIDEzKTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCAzOSwgMjQpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCAzOSwgMjQpO1xcclxcblxcdFxcdHBhZGRpbmctdG9wOiByZW0oMTEpO1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOiByZW0oMTEpO1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyNyAsIDE4KTtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTUpO1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxMCk7IFxcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuLmJ1dHRvbi1ib3JkZXJ7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRjb2xvcjogIzAwMjk2RDtcXHJcXG5cXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjMDAyOTZEO1xcclxcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0NEM2RTkgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdFxcdCY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHR9XFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICM2NjY2NjY7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDE0MHB4O1xcclxcbiAgICAgICAgIHBhZGRpbmc6IHJlbSg5KSByZW0oMjQpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2NjY2NjYgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxMyk7XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGluZS1oZWlnaHRcXFwiLCAzMCwgMjApO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMyOTc3RDU7XFxyXFxufVxcclxcbi50aXRsZXtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCA2NCwgMzIpO1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxpbmUtaGVpZ2h0XFxcIiwgOTYsIDQ4KTtcXHJcXG59XFxyXFxuLnRleHQge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiU291cmNlIFNhbnMgM1xcXCI7XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDEzKTtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsaW5lLWhlaWdodFxcXCIsIDI4LCAxOSk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRjb2xvcjogIzI1MjUyNTtcXHJcXG5cXHRwYWRkaW5nOiByZW0oMCkgcmVtKDUpIHJlbSgwKSByZW0oMCk7XFxyXFxufVwiLFwiLy/Qn9GW0LTQutC70Y7Rh9C10L3QvdGPINGI0YDQuNGE0YLRg1xcclxcbkBtaXhpbiBmb250KCRmb250X25hbWUsICRmaWxlX25hbWUsICR3ZWlnaHQsICRzdHlsZSkge1xcclxcblxcdEBmb250LWZhY2Uge1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkZm9udF9uYW1lO1xcclxcblxcdFxcdGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG5cXHRcXHRzcmM6IHVybChcXFwiLi4vZm9udHMvI3skZmlsZV9uYW1lfS53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogI3skd2VpZ2h0fTtcXHJcXG5cXHRcXHRmb250LXN0eWxlOiAjeyRzdHlsZX07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vL1BlcmNlbnRcXHJcXG5AZnVuY3Rpb24gcGVyY2VudCgkcHgsICRmcm9tKSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkZnJvbSkgKiAxMDAlO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy9SRU1cXHJcXG5AZnVuY3Rpb24gcmVtKCRweCkge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgMTYpICsgcmVtO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy9FTVxcclxcbkBmdW5jdGlvbiBlbSgkcHgsICRjdXJyZW50OiAxNikge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGN1cnJlbnQpICsgZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vL0N1cnJlbmN5XFxyXFxuQG1peGluIGN1cnJlbmN5KCRzeW0pIHtcXHJcXG5cXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0Y29udGVudDogXFxcIiN7JHN5bX1cXFwiO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gR3JpZHNcXHJcXG5AbWl4aW4gZ3JpZENhcmRzKCR0eXBlOiBmaXQsICRtaW46IDI4MHB4LCAkbWF4OiAxZnIsICRnYXA6IDMwcHgpIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdhcDogJGdhcDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLSN7JHR5cGV9LCBtaW5tYXgoJG1pbiwgJG1heCkpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90LAg0LLQu9Cw0YHRgtC40LLRltGB0YLRjCAoY2xhbXApXFxyXFxuQG1peGluIGFkYXB0aXZlVmFsdWUoJHByb3BlcnR5LCAkc3RhcnRTaXplLCAkbWluU2l6ZSwgJGtlZXBTaXplOiAwLCAkd2lkdGhGcm9tOiAkY29udGFpbmVyV2lkdGgsICR3aWR0aFRvOiAkbWluV2lkdGgpIHtcXHJcXG5cXHRAaWYgKCRzdGFydFNpemU9PTApIHtcXHJcXG5cXHRcXHQkc3RhcnRTaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0QGlmICgkbWluU2l6ZT09MCkge1xcclxcblxcdFxcdCRtaW5TaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JTQu9GPIGNhbGMoKTtcXHJcXG5cXHQkYWRkU2l6ZTogbWF0aC5kaXYoJHN0YXJ0U2l6ZSAtICRtaW5TaXplLCAxNik7XFxyXFxuXFxyXFxuXFx0QGlmICgkd2lkdGhGcm9tID09ICRjb250YWluZXJXaWR0aCBhbmQgJG1heFdpZHRoQ29udGFpbmVyID09IDApIHtcXHJcXG5cXHRcXHQkd2lkdGhGcm9tOiAkbWF4V2lkdGg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4INCyIEVNXFxyXFxuXFx0JHdpZHRoRnJvbU1lZGlhOiBlbSgkd2lkdGhGcm9tKTtcXHJcXG5cXHQkd2lkdGhUb01lZGlhOiBlbSgkd2lkdGhUbyk7XFxyXFxuXFxyXFxuXFx0Ly8g0KTQvtGA0LzRg9C70LAg0L/Qu9Cw0LLQsNGO0YfQvtCz0L4g0LfQvdCw0YfQtdC90L3Rj1xcclxcblxcdC8vINCY0YHRgtC+0YfQvdC40Lo6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vbGluZWFybHktc2NhbGUtZm9udC1zaXplLXdpdGgtY3NzLWNsYW1wLWJhc2VkLW9uLXRoZS12aWV3cG9ydC9cXHJcXG5cXHQkc2xvcGU6IG1hdGguZGl2KCgkc3RhcnRTaXplIC0gJG1pblNpemUpLCAoJHdpZHRoRnJvbSAtICR3aWR0aFRvKSk7XFxyXFxuXFx0JHlJbnRlcnNlY3Rpb246IC0kd2lkdGhUbyAqICRzbG9wZSArICRtaW5TaXplO1xcclxcblxcdEBpZiAoJHlJbnRlcnNlY3Rpb249PTApIHtcXHJcXG5cXHRcXHQkeUludGVyc2VjdGlvbjogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdCRmbHlWYWx1ZTogI3tyZW0oJHlJbnRlcnNlY3Rpb24pfVxcXCIgKyBcXFwiICN7JHNsb3BlICogMTAwfXZ3O1xcclxcblxcclxcblxcdC8vINCe0YLRgNC40LzQsNC90L3RjyDQt9C90LDRh9C10L3QvdGPINCy0LvQsNGB0YLQuNCy0L7RgdGC0ZZcXHJcXG5cXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiByZW0oJG1pblNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdC8vINCv0LrRidC+INC90LXQs9Cw0YLQuNCy0L3RliDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0QGlmICgkbWluU2l6ZSA+ICRzdGFydFNpemUpIHtcXHJcXG5cXHRcXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiByZW0oJHN0YXJ0U2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgcmVtKCRtaW5TaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0LfQvdCw0YfQtdC90L3RjyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFx0QGlmICRrZWVwU2l6ZSAhPSAxIGFuZCAka2VlcFNpemUgIT0gMyB7XFxyXFxuXFx0XFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogcmVtKCRzdGFydFNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0JDQtNCw0L/RgtGD0ZTQvNC+INGA0L7Qt9C80ZbRgCDRgyDQv9GA0L7QvNGW0LbQutGDINC80ZbQtiDQt9Cw0LfQvdCw0YfQtdC90LjQvNC4INGI0LjRgNC40L3QsNC80Lgg0LIn0Y7Qv9C+0YDRgtGDXFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aFRvTWVkaWEpIGFuZCAobWF4LXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHQvLyDQr9C60YnQviDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyAoI3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC8vINCv0LrRidC+INC90LUg0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRcXHRAc3VwcG9ydHMgbm90ICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiBjYWxjKCN7cmVtKCRtaW5TaXplKX0gKyAjeyRhZGRTaXplfSAqICgxMDB2dyAtICN7cmVtKCR3aWR0aFRvKX0pIC8gI3ttYXRoLmRpdigkd2lkdGhGcm9tLCAxNikgLSBtYXRoLmRpdigkd2lkdGhUbywgMTYpfSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAyIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHdpZHRoVG9NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogcmVtKCRtaW5TaXplKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5oZWFkZXIge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHR6LWluZGV4OiAxMDA7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsMTEwICwxMDAgKTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsMjAgLDMwICk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLDIwICwzMCApO1xcclxcblxcdFxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdGluc2V0OiAwO1xcclxcblxcdFxcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG5cXHRcXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuXFx0XFx0LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuXFx0XFx0ei1pbmRleDogLTE7XFxyXFxuXFx0XFx0b3BhY2l0eTogMDtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG5cXHRcXHRcXHJcXG5cXHR9XFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fY29udGFpbmVyXFxyXFxuXFx0XFx0Ji5faGVhZGVyLXNjcm9sbHtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuXFx0XFx0XFx0Ly8gY29sb3I6ICNGRkY5RkQ7XFxyXFxuXFx0XFx0XFx0Ly8gb3BhY2l0eTogMC41O1xcclxcblxcdFxcdFxcdCY6OmJlZm9yZXtcXHJcXG5cXHRcXHRcXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jl9fY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHR6LWluZGV4OiAxMDA7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRjb2x1bW4tZ2FwOiByZW0oMjApO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nb1xcclxcblxcclxcblxcdFxcdCZfX2xvZ28ge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0Y29sdW1uLWdhcDogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nby1pY29uXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbG9nby1pY29uIHtcXHJcXG5cXHRcXHRcXHR6LWluZGV4OiAxMDA7XFxyXFxuXFx0XFx0XFx0aW1ne1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNTUsIDQwKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28tbmFtZVxcclxcblxcdFxcdFxcclxcblxcdFxcdCZfX2xvZ28tbmFtZSB7XFxyXFxuXFx0XFx0XFx0ei1pbmRleDogODA7XFxyXFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogYXV0bztcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0bGVmdDogNTAlO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nby10aXRsZVxcclxcblxcdFxcdFxcclxcblxcdFxcdCZfX2xvZ28tdGl0bGUge1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI0LCAxNSk7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IG1hdGguZGl2KDMzICwgMjQpO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogcmVtKDE1KTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMTUsIDEwKTtcXHJcXG5cXHRcXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvLXN1YnRpdGxlXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbG9nby1zdWJ0aXRsZSB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDEyKTtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogbWF0aC5kaXYoMjIgLCAxNik7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRcXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19tZW51XFxyXFxuXFxyXFxuXFx0XFx0Jl9fbWVudSB7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19hY3Rpb25zXFxyXFxuXFxyXFxuXFx0XFx0Jl9fYWN0aW9ucyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fYnV0dG9uXFxyXFxuXFxyXFxuXFx0XFx0Jl9fYnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4ubWVudSB7XFxyXFxuXFx0XFx0ZmxleDogMCAxIGF1dG87XFxyXFxuXFx0XFx0Ly8gLm1lbnVfX2JvZHlcXHJcXG5cXHJcXG5cXHRcXHQmX19ib2R5IHtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRcXHRcXHRsZWZ0OiAtMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHQvLyBtYXJnaW4tdG9wOiByZW0oMTAwKTtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nLXRvcDogcmVtKDEzOCk7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogcmVtKDEzOCkgcmVtKDIwKSByZW0oMzgpIHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUZEO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Lm1lbnUtb3BlbiAme1xcclxcblxcdFxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jl9faWNvbnN7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdFxcdFxcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxyXFxuXFx0XFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxyXFxuXFx0XFx0XFx0XFx0ZmxleDogMCAxIGF1dG87XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ3JpZC1jb2x1bW4tZ2FwXFxcIiw4MCAsNDAgKTtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJncmlkLXJvdy1nYXBcXFwiLDYwICw0MCApO1xcclxcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmX19pY29ue1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1lbnVfX2xpc3RcXHJcXG5cXHJcXG5cXHRcXHQmX19saXN0IHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0ZmxleDogMCAxIDUwJTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJjb2x1bW4tZ2FwXFxcIiwgNjAsIDIwKTtcXHJcXG5cXHRcXHRcXHRyb3ctZ2FwOiByZW0oMTApO1xcclxcblxcdFxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxuXFx0XFx0XFx0XFx0cm93LWdhcDogcmVtKDYwKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tZW51X19pdGVtXFxyXFxuXFxyXFxuXFx0XFx0Jl9faXRlbSB7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tZW51X19saW5rXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbGluayB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgY3VycmVudENvbG9yIDAlLCBjdXJyZW50Q29sb3IgMTAwJSkgbm8tcmVwZWF0O1xcclxcbiAgICAgIFxcdGJhY2tncm91bmQtc2l6ZTogMCAycHg7IC8qINCd0LDRh9Cw0LvRjNC90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8gKi9cXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcXHJcXG4gICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC4zcyBlYXNlO1xcclxcblxcdFxcdFxcdEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcblxcdFxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7IC8qINCa0L7QvdC10YfQvdCw0Y8g0YjQuNGA0LjQvdCwINC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNGPINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LggKi9cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAgIzI5NzdENTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4uaWNvbi1tZW51IHtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy9CdXJnZXJcXHJcXG5cXHJcXG4uaWNvbi1tZW51IHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdHdpZHRoOiByZW0oMzApO1xcclxcblxcdFxcdGhlaWdodDogcmVtKDE4KTtcXHJcXG5cXHRcXHR6LWluZGV4OiA1O1xcclxcblxcdFxcdEBtZWRpYSAoYW55LWhvdmVyOiBub25lKSB7XFxyXFxuXFx0XFx0XFx0Y3Vyc29yOiBkZWZhdWx0O1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRzcGFuLFxcclxcblxcdFxcdCY6OmJlZm9yZSxcXHJcXG5cXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IHJlbSgzKTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyOTZEO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdGJvdHRvbTogMDtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNzUlO1xcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHR0b3A6IGNhbGMoNTAlIC0gcmVtKDEpKTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNTAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQubWVudS1vcGVuICYge1xcclxcblxcdFxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmUsXFxyXFxuXFx0XFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdFxcdHRvcDogY2FsYyg0NSUgLSByZW0oMSkpO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRib3R0b206IGNhbGMoNTAlIC0gcmVtKDEpKTtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmZvb3RlciB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Jl9fbWFwe1xcclxcblxcdFxcdHotaW5kZXg6IDE7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDU3NSwgMzkzKTtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8gLmZvb3Rlcl9fdGV4dFxcclxcblxcdFxcclxcblxcdCZfX3RleHQge1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxMywgNyk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxMywgNyk7XFxyXFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdFxcdGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDEyKTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsaW5lLWhlaWdodFxcXCIsIDI0LCAxNSk7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxNjcsMTE0ICk7XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IHJlbSg1Nyk7XFxyXFxuXFx0XFx0Ly8gLm1haW5fX2NvbnRhaW5lclxcclxcblxcclxcblxcdFxcdCZfX2NvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRjb2x1bW4tZ2FwOiByZW0oMzApO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWFpbl9fY29udGVudFxcclxcblxcclxcblxcdFxcdCZfX2NvbnRlbnQge1xcclxcblxcdFxcdFxcdGZsZXg6IDAgMSAzMCU7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInJvdy1nYXBcXFwiLCA2MCwgMjApO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdG9yZGVyOiAxO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX3N1YnRpdGxlXFxyXFxuXFxyXFxuXFx0XFx0Jl9fc3VidGl0bGUge1xcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWFpbl9fdGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX190aXRsZSB7XFxyXFxuXFx0XFx0XFx0c3BhbntcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogIzI5NzdENTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tYWluX190ZXh0XFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGV4dCB7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tYWluX19iYXR0b25zXFxyXFxuXFxyXFxuXFx0XFx0Jl9fYmF0dG9ucyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0Z2FwOiByZW0oMTUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWFpbl9fYnV0dG9uLWJsdWVcXHJcXG5cXHJcXG5cXHRcXHQmX19idXR0b24tYmx1ZSB7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzAwMjk2RDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogcmVtKDI3KTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiM0NEM2RTk7XFxyXFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogLTJweCA3cHggMHB4IDBweCAjMjk3N0Q1O1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0XFx0XFx0JjphY3RpdmV7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDdweCk7XFxyXFxuXFx0XFx0XFx0XFx0Ym94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMyOTc3RDU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGJveC1zaGFkb3c6IC0ycHggM3B4IDBweCAwcHggIzI5NzdENTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXtcXHJcXG5cXHRcXHRcXHRcXHQmOmhvdmVye1xcclxcblxcdFxcdFxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tYWluX19idXR0b24tY2xlYXJcXHJcXG5cXHJcXG5cXHRcXHQmX19idXR0b24tY2xlYXIge1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE2LCAxMik7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogcmVtKDI0KTtcXHJcXG5cXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG5cXHRcXHRcXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzY2NjY2NjtcXHJcXG5cXHRcXHRcXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpe1xcclxcblxcdFxcdFxcdFxcdCY6aG92ZXJ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29sb3I6ICMwODA3MDc7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xcclxcblxcdFxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tYWluX19pbWFnZVxcclxcblxcclxcblxcdFxcdCZfX2ltYWdlIHtcXHJcXG5cXHRcXHRcXHRvcmRlcjogMDtcXHJcXG5cXHRcXHRcXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwxNTAgLDAgKTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwxNTAgLDUwICk7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwwICw1MCApO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLDAgLDUwICk7XFxyXFxuXFx0XFx0XFx0XFx0b3JkZXI6IDA7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogcmVtKDQwKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0aW1ne1xcclxcblxcdFxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0XFx0XFx0ei1pbmRleDogMjtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogY2xhbXAoMjk3cHgsIDQwdncsIDU5NXB4KTtcXHJcXG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDU5NSAvIDg5MztcXHJcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3Jle1xcclxcblxcdFxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRcXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IGNsYW1wKDUzNXB4LCA1MHZ3LCA4OTNweCk7XFxyXFxuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiAjMDAyOTZEO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoMjEyLCAyMjgsIDI0NCwgMSkgMTUlLCByZ2JhKDY4LCAxOTgsIDIzMywgMSkgNDUlLCByZ2JhKDQxLCAxMTksIDIxMywgMSkgNzAlLCByZ2JhKDAsIDQxLCAxMDksIDEpIDEwMCUpO1xcclxcblxcdFxcdFxcdFxcdHotaW5kZXg6IDE7XFxyXFxuXFx0XFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTU1JSk7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi5jb250YWN0cyB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0Q0RTRGNDtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsNzIgLDYwICk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLDcyICw2MCApO1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC8vIC5jb250YWN0c19fY29udGFpbmVyXFxyXFxuXFxyXFxuXFx0XFx0Jl9fY29udGFpbmVyIHtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmNvbnRhY3RzX19pdGVtc1xcclxcblxcclxcblxcdFxcdCZfX2l0ZW1zIHtcXHJcXG5cXHRcXHRcXHQvLyBtYXgtd2lkdGg6IHJlbSgxMjg2KTtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuLmNvbnRhY3Qge1xcclxcblxcclxcblxcdFxcdC8vIC5jb250YWN0X19pdGVtXFxyXFxuXFxyXFxuXFx0XFx0Jl9faXRlbSB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IChhdXRvIDFmcik7XFxyXFxuXFx0XFx0XFx0Y29sdW1uLWdhcDogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICg2MHB4IDEwMHB4IDE1MHB4KSA7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiY29sdW1uLWdhcFxcXCIsIDQ2MCwwICk7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gY29sdW1uLWdhcDogcmVtKDQwKTtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdCY6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOiByZW0oNTApO31cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZVNtYWxsKXtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC8vIC5jb250YWN0X19pY29uXFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jl9faWNvbiB7XFxyXFxuXFx0XFx0XFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcclxcblxcdFxcdFxcdFxcdGdyaWQtcm93LXN0YXJ0OiAxO1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcXHJcXG5cXHRcXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Z3JpZC1yb3ctc3RhcnQ6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRpbWd7XFxyXFxuXFx0XFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDUwKTtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXgtaGVpZ2h0XFxcIiwgNTAsMzAgKTtcXHJcXG5cXHRcXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHQvLyBmaWxsOiAjNDRDNkU5O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmNvbnRhY3RfX2NvbnRlbnRcXHJcXG5cXHJcXG5cXHRcXHRcXHJcXG5cXHJcXG5cXHRcXHQvLyAuY29udGFjdF9fdGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX190aXRsZSB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwyOCwgMTggKTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSg0MCk7XFxyXFxuXFx0XFx0XFx0Ly8gLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICMwMDI5NkQ7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogcmVtKDApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlU21hbGwpe1xcclxcblxcdFxcdFxcdFxcdC8vIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHQvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5jb250YWN0X190ZXh0XFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGV4dCB7XFxyXFxuXFx0XFx0XFx0Zm9udC1mYW1pbHk6IFxcXCJTb3VyY2UgU2FucyAzXFxcIjtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTMpO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxpbmUtaGVpZ2h0XFxcIiwgMjgsIDE5KTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjMDAyOTZEO1xcclxcblxcdFxcdFxcdHA6bm90KDpsYXN0LWNoaWxkKXtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwyNSAsMTUgKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLnNlcnZpY2VzIHtcXHJcXG5cXHRwYWRkaW5nOiByZW0oNjcpIHJlbSgwKTtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFx0XFx0Jl9fYmd7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdHdpZHRoOiBhdXRvO1xcclxcblxcdFxcdFxcdGhlaWdodDogYXV0byU7XFxyXFxuXFx0XFx0XFx0dG9wOiA2N3B4O1xcclxcblxcdFxcdFxcdHJpZ2h0OiAwO1xcclxcblxcdFxcdFxcdHotaW5kZXg6IC0xO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQvLyAuc2VydmljZXNfX2NvbnRhaW5lclxcclxcblxcclxcblxcdFxcdCZfX2NvbnRhaW5lciB7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5zZXJ2aWNlc19faGVhZGVyXFxyXFxuXFxyXFxuXFx0XFx0Jl9faGVhZGVyIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oODApO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuc2VydmljZXNfX3N1YnRpdGxlXFxyXFxuXFxyXFxuXFx0XFx0Jl9fc3VidGl0bGUge1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuc2VydmljZXNfX3RpdGxlXFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGl0bGUge1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuc2VydmljZXNfX2l0ZW1zXFxyXFxuXFxyXFxuXFx0XFx0Jl9faXRlbXMge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG5cXHRcXHRcXHRjb2x1bW4tZ2FwOiByZW0oMjApO1xcclxcblxcdFxcdFxcdHJvdy1nYXA6IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JHRhYmxldCl7XFxyXFxuXFx0XFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuc2VydmljZXNfX2l0ZW1cXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG5cXHRcXHRcXHQvLyBhc3BlY3QtcmF0aW86IDEvMTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjQ5LCAyNTMsIDAuNik7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDQxKSByZW0oMzIpO1xcclxcblxcdFxcdFxcdC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDI5NkQ7XFxyXFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogM3B4IDNweCAxMHB4IDBweCAjOGJiZmZmIDtcXHJcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTUpO1xcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuLnN1YnRpdGxlIHtcXHJcXG59XFxyXFxuLnRpdGxlIHtcXHJcXG59XFxyXFxuLml0ZW0tc2VydmljZXMge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRyb3ctZ2FwOiByZW0oMjUpO1xcclxcblxcdFxcdC8vIC5pdGVtLXNlcnZpY2VzX19pbWFnZVxcclxcblxcclxcblxcdFxcdCZfX2ltYWdlIHtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLml0ZW0tc2VydmljZXNfX2JvZHlcXHJcXG5cXHJcXG5cXHRcXHQmX19ib2R5IHtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLml0ZW0tc2VydmljZXNfX3RpdGxlXFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGl0bGUge1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDMyLCAyMCk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGluZS1oZWlnaHRcXFwiLCA0OCwgMzApO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogcmVtKDM1KTtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzI5NzdENTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLml0ZW0tc2VydmljZXNfX3RleHRcXHJcXG5cXHJcXG5cXHRcXHQmX190ZXh0IHtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSgwKTtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzY2NjY2NjtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLml0ZW0tc2VydmljZXNfX2xpbmtcXHJcXG5cXHJcXG5cXHRcXHQmX19saW5rIHtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzQ0QzZFOTtcXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcbi50ZXh0IHtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYxZjRjN2VlMzBiNzRlOTg3MmUxXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9