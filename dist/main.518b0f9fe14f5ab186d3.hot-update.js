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

.header {
  background-color: #FFF9FD;
  z-index: 100;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition: all 0.3s ease 0s;
}
.header._header-scroll {
  height: 4.375rem;
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
@media (max-width: 47.99875em) {
  .header__logo {
    z-index: 1;
  }
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
  margin-top: 3.5625rem;
  margin-bottom: 3.5625rem;
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
    color: #363434;
  }
}
@media (max-width: 47.99875em) {
  .main__button-clear {
    border: 1px solid #666666;
    text-decoration: none;
  }
}
.main__image {
  margin-top: -1.25rem;
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
    margin-bottom: 3.75rem;
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
  width: clamp(535px, 50vw, 893px);
  aspect-ratio: 1/1;
  background: #00296D;
  border-radius: 50%;
  background: linear-gradient(180deg, rgb(212, 228, 244) 15%, rgb(68, 198, 233) 45%, rgb(41, 119, 213) 70%, rgb(0, 41, 109) 100%);
  transform: translate(-50%, -50%);
  z-index: 1;
}
@media (max-width: 47.99875em) {
  .main__image::before {
    transform: translate(-40%, -55%);
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
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/common.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/header.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/home.scss"],"names":[],"mappings":"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mFE,+EAhBc;IJ8kBb;EACF;EI5jBA;IEtFD;MFuFE,6DAAA;IJ+jBC;EACF;AACF;AI7jBE;EE3FD;IF4FE,kBAAA;EJgkBD;AACF;AMtpBC;EACE,yBAAA;ANwpBH;AIrlBE;EEpED;IFqEE,sBAAA;EJwlBD;AACF;AIrlBC;EAEC;IE3ED;MF4EE,gFAhBc;IJumBb;EACF;EIrlBA;IE/ED;MFgFE,gEAAA;IJwlBC;EACF;AACF;AItlBE;EEpFD;IFqFE,sBAAA;EJylBD;AACF;AI3mBE;EEpED;IFqEE,yBAAA;EJ8mBD;AACF;AI3mBC;EAEC;IE3ED;MF4EE,mFAhBc;IJ6nBb;EACF;EI3mBA;IE/ED;MFgFE,mEAAA;IJ8mBC;EACF;AACF;AI5mBE;EEpFD;IFqFE,yBAAA;EJ+mBD;AACF;AMrsBC;EAIE,kBAAA;EACA,yBAAA;ANosBH;AIroBE;EEpED;IFqEE,kBAAA;EJwoBD;AACF;AIroBC;EAEC;IE3ED;MF4EE,0EAhBc;IJupBb;EACF;EIroBA;IE/ED;MFgFE,0DAAA;IJwoBC;EACF;AACF;AItoBE;EEpFD;IFqFE,kBAAA;EJyoBD;AACF;AI3pBE;EEpED;IFqEE,mBAAA;EJ8pBD;AACF;AI3pBC;EAEC;IE3ED;MF4EE,6EAhBc;IJ6qBb;EACF;EI3pBA;IE/ED;MFgFE,iEAAA;IJ8pBC;EACF;AACF;AI5pBE;EEpFD;IFqFE,sBAAA;EJ+pBD;AACF;AMrvBC;EAQE,gBAAA;EACA,cAAA;ANgvBH;;AOjwBA;EACE,qBAAA;EACA,wBAAA;APowBF;AOjwBE;EACC,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,oBAAA;APmwBH;AOlwBG;EALD;IAME,sBAAA;EPqwBF;AACF;AOhwBE;EACC,aAAA;EACA,aAAA;EACA,sBAAA;APkwBH;AI1sBE;EG3DA;IH4DC,gBAAA;EJ6sBD;AACF;AI1sBC;EAEC;IGlEA;MHmEC,uEAhBc;IJ4tBb;EACF;EI1sBA;IGtEA;MHuEC,wDAAA;IJ6sBC;EACF;AACF;AI3sBE;EG3EA;IH4EC,gBAAA;EJ8sBD;AACF;AOtxBG;EALD;IAME,QAAA;EPyxBF;AACF;AO7wBG;EACC,cAAA;AP+wBJ;AOpwBE;EAEC,aAAA;EACA,8BAAA;APqwBH;AOhwBE;EACC,gBAAA;EACA,cAAA;EACA,sBAAA;EACA,yBAAA;EACA,oCAAA;EACA,4BAAA;APkwBH;AOjwBG;EACC,0BAAA;EACA,mCAAA;APmwBJ;AOjwBG;EAXD;IAYC,oCAAA;EPowBD;AACF;AI7vBE;EGDA;IHEC,eAAA;EJgwBD;AACF;AI7vBC;EAEC;IGRA;MHSC,sEAhBc;IJ+wBb;EACF;EI7vBA;IGZA;MHaC,2DAAA;IJgwBC;EACF;AACF;AI9vBE;EGjBA;IHkBC,kBAAA;EJiwBD;AACF;AOpxBE;EAEC,gBAAA;EACA,mBAAA;EACA,0BAAA;EACA,0BAAA;EACA,cAAA;EACA,YAAA;EACA,4BAAA;APqxBH;AOpxBG;EACC;IAEC,cAAA;EPqxBH;AACF;AOjxBG;EAjBD;IAkBE,yBAAA;IACA,qBAAA;EPoxBF;AACF;AO/wBE;EACC,oBAAA;EACA,QAAA;EACA,cAAA;EACA,kBAAA;APixBH;AI7yBE;EGwBA;IHvBC,sBAAA;EJgzBD;AACF;AI7yBC;EAEC;IGiBA;MHhBC,wFAhBc;IJ+zBb;EACF;EI7yBA;IGaA;MHZC,8EAAA;IJgzBC;EACF;AACF;AI9yBE;EGQA;IHPC,6BAAA;EJizBD;AACF;AIn0BE;EGwBA;IHvBC,uBAAA;EJs0BD;AACF;AIn0BC;EAEC;IGiBA;MHhBC,+EAhBc;IJq1Bb;EACF;EIn0BA;IGaA;MHZC,gEAAA;IJs0BC;EACF;AACF;AIp0BE;EGQA;IHPC,uBAAA;EJu0BD;AACF;AO1zBG;EAPD;IAUE,QAAA;IACA,sBAAA;EP2zBF;AACF;AI/1BE;EGwBA;IHvBC,6BAAA;EJk2BD;AACF;AI/1BC;EAEC;IGiBA;MHhBC,sFAbe;IJ82Bd;EACF;EI/1BA;IGaA;MHZC,wEAAA;IJk2BC;EACF;AACF;AIh2BE;EGQA;IHPC,sBAAA;EJm2BD;AACF;AIr3BE;EGwBA;IHvBC,8BAAA;EJw3BD;AACF;AIr3BC;EAEC;IGiBA;MHhBC,uFAbe;IJo4Bd;EACF;EIr3BA;IGaA;MHZC,yEAAA;IJw3BC;EACF;AACF;AIt3BE;EGQA;IHPC,uBAAA;EJy3BD;AACF;AOp2BG;EAEC,kBAAA;EAEA,YAAA;EAEA,UAAA;EAIA,gCAAA;EACQ,qBAAA;EACA,iBAAA;APg2BZ;AO91BG;EACC,WAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACQ,iBAAA;EACR,mBAAA;EACA,kBAAA;EACA,+HAAA;EACA,gCAAA;EACA,UAAA;APg2BJ;AO/1BI;EAZD;IAaE,gCAAA;EPk2BH;AACF;;AO91BA;EACC,sBP1HY;AA29Bb;AIz6BE;EGuEF;IHtEG,kBAAA;EJ46BD;AACF;AIz6BC;EAEC;IGgEF;MH/DG,4EAhBc;IJ27Bb;EACF;EIz6BA;IG4DF;MH3DG,+DAAA;IJ46BC;EACF;AACF;AI16BE;EGuDF;IHtDG,oBAAA;EJ66BD;AACF;AI/7BE;EGuEF;IHtEG,qBAAA;EJk8BD;AACF;AI/7BC;EAEC;IGgEF;MH/DG,6EAhBc;IJi9Bb;EACF;EI/7BA;IG4DF;MH3DG,8DAAA;IJk8BC;EACF;AACF;AIh8BE;EGuDF;IHtDG,oBAAA;EJm8BD;AACF;AO94BA;EAMG,gBAAA;EACA,cAAA;AP24BH;;AOz4BA;EACC,sBPnIY;EOoIZ,gBAAA;AP44BD;AI99BE;EGgFF;IH/EG,eAAA;EJi+BD;AACF;AI99BC;EAEC;IGyEF;MHxEG,oEAhBc;IJg/Bb;EACF;EI99BA;IGqEF;MHpEG,qDAAA;IJi+BC;EACF;AACF;AI/9BE;EGgEF;IH/DG,eAAA;EJk+BD;AACF;AIp/BE;EGgFF;IH/EG,iBAAA;EJu/BD;AACF;AIp/BC;EAEC;IGyEF;MHxEG,sEAhBc;IJsgCb;EACF;EIp/BA;IGqEF;MHpEG,uDAAA;IJu/BC;EACF;AACF;AIr/BE;EGgEF;IH/DG,iBAAA;EJw/BD;AACF;;AOp7BA;EACC,4BAAA;APu7BD;AI9gCE;EGsFF;IHrFG,kBAAA;EJihCD;AACF;AI9gCC;EAEC;IG+EF;MH9EG,4EAhBc;IJgiCb;EACF;EI9gCA;IG2EF;MH1EG,+DAAA;IJihCC;EACF;AACF;AI/gCE;EGsEF;IHrEG,oBAAA;EJkhCD;AACF;AIpiCE;EGsFF;IHrFG,oBAAA;EJuiCD;AACF;AIpiCC;EAEC;IG+EF;MH9EG,8EAhBc;IJsjCb;EACF;EIpiCA;IG2EF;MH1EG,iEAAA;IJuiCC;EACF;AACF;AIriCE;EGsEF;IHrEG,sBAAA;EJwiCD;AACF;AOp+BA;EAIC,gBAAA;EACA,cAAA;EACA,iCAAA;APm+BD","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n//@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n//&display=swap Добавить при подключении через плагин@import url(https://fonts.googleapis.com/css?family=Shippori+Mincho:regular,500,600,700,800);\r\n// &subset=cyrillic-ext\r\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+3:300,regular&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,300,regular,500,600&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Raleway:300,regular,500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:regular,600&display=swap\");\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Poppins\";\r\n$fontSize: rem(20); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #000; // Колір шрифту за замовчуванням\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1920;\r\n// $maxWidth: 1728;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1565;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t&::before{\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tcontent: \"\";\r\n\t\t\tposition: fixed;\r\n\t\t\tinset: 0;\r\n\t\t\tbackground: rgba(0, 0, 0, 0.1);\r\n\t\t\tbackdrop-filter: blur(10px);\r\n\t\t\t-webkit-backdrop-filter: blur(10px);\r\n\t\t\topacity: 0;\r\n\t\t\tpointer-events: none;\r\n\t\t\ttransition: opacity 0.3s ease;\r\n\t\t\tz-index: 2;\r\n\t\t}\r\n\t}.menu-open &::before {\r\n\t\topacity: 1;\r\n\t\tpointer-events: auto;\r\n\t}\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: rem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: rem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","// Заголовки, загальні БЕМ блоки та інше...\r\n\r\n.page {\r\n\r\n\t\t// .page__main\r\n\r\n\t\t&__main {\r\n\t\t}\r\n}\r\n//========================================================================================================================================================\r\n.btn{\r\n\twhite-space: nowrap;\r\n\ttext-align: center;\r\n\t@include adaptiveValue(\"font-size\", 18, 13);\r\n\t\t@include adaptiveValue(\"padding-left\", 39, 24);\r\n\t\t@include adaptiveValue(\"padding-right\", 39, 24);\r\n\t\tpadding-top: rem(11);\r\n\t\tpadding-bottom: rem(11);\r\n\t\tline-height: math.div(27 , 18);\r\n\t\tborder-radius: rem(15);\r\n\t\t@media (max-width:$mobile){\r\n\t\t\tborder-radius: rem(10); \r\n\t\t}\r\n}\r\n.button-border{\r\n\t\tfont-weight: 300;\r\n\t\tcolor: #00296D;\r\n\t\tborder: 1px solid #00296D;\r\n\t\tbackground: linear-gradient(to bottom, #44C6E9 50%, transparent 50%);\r\n      background-size: 100% 200%;\r\n      background-position: 0 100%;\r\n      transition: background-position 0.3s ease, color 0.3s ease;\r\n\t\t&:hover {\r\n      background-position: 0 0;\r\n\t\tcolor: #fff;\r\n\t}\r\n\t@media (max-width:$mobile){\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: 1px solid #666666;\r\n\t\t\tmax-width: 140px;\r\n         padding: rem(9) rem(24);\r\n\t\t\tbackground: linear-gradient(to bottom, #666666 50%, transparent 50%);\r\n\t\t\tbackground-size: 100% 200%;\r\n         background-position: 0 100%;\r\n\t\t}\r\n}","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n\t\tbackground-color: #FFF9FD;\r\n\t\tz-index: 100;\r\n\t\tposition: fixed;\r\n\t\twidth: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\ttransition: all 0.3s ease 0s;\r\n\t\t// .header__container\r\n\t\t&._header-scroll{\r\n\t\t\theight: rem(70);\r\n\r\n\t\t}\r\n\t\t&__container {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\t@include adaptiveValue(\"padding-top\",20 ,30 );\r\n\t\t\t@include adaptiveValue(\"padding-bottom\",20 ,30 );\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\r\n\t\t// .header__logo\r\n\r\n\t\t&__logo {\r\n\t\t\tdisplay: flex;\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tz-index: 1;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-icon\r\n\r\n\t\t&__logo-icon {\r\n\t\t\timg{\r\n\t\t\t\t@include adaptiveValue(\"width\", 55, 40);\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-name\r\n\t\t\r\n\t\t&__logo-name {\r\n\t\t\ttext-align: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 23px;\r\n\t\t\t\tleft: 0;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-title\r\n\t\t\r\n\t\t&__logo-title {\r\n\t\t\t@include adaptiveValue(\"font-size\", 24, 15);\r\n\t\t\tline-height: math.div(33 , 24);\r\n\t\t\tfont-weight: 600;\r\n\t\t\tmargin-bottom: rem(15);\r\n\t\t\t@include adaptiveValue(\"margin-bottom\", 15, 10);\r\n\t\t\twhite-space: nowrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-subtitle\r\n\r\n\t\t&__logo-subtitle {\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tline-height: math.div(22 , 16);\r\n\t\t\tfont-weight: 400;\r\n\t\t\twhite-space: nowrap;\r\n\t\t}\r\n\r\n\r\n\r\n\t\t// .header__menu\r\n\r\n\t\t&__menu {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__actions\r\n\r\n\t\t&__actions {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__button\r\n\r\n\t\t&__button {\r\n\t\t\tgrid-column-start: 1;\r\n         grid-column-end: 3;\r\n\t\t}\r\n}\r\n.menu {\r\n\t\tflex: 0 1 auto;\r\n\t\t// .menu__body\r\n\r\n\t\t&__body {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: -100%;\r\n\t\t\t\t// margin-top: rem(100);\r\n\t\t\t\tpadding-top: rem(138);\r\n\t\t\t\tpadding: rem(138) rem(20) rem(38) rem(20);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\tbackground-color: #FFF9FD;\r\n\t\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t\t\t.menu-open &{\r\n\t\t\t\tleft: 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t&__icons{\r\n\t\t\tdisplay: none;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tgrid-template-rows: repeat(3, 1fr);\r\n\t\t\t\tgrid-template-columns: repeat(2, auto);\r\n\t\t\t\tflex: 0 1 auto;\r\n\t\t\t\t@include adaptiveValue(\"grid-column-gap\",80 ,40 );\r\n\t\t\t\t@include adaptiveValue(\"grid-row-gap\",60 ,40 );\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__icon{\r\n\t\t\tdisplay: grid;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\r\n\t\t// .menu__list\r\n\r\n\t\t&__list {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tflex: 0 1 50%;\r\n\t\t\t@include adaptiveValue(\"column-gap\", 60, 20);\r\n\t\t\trow-gap: rem(10);\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: end;\r\n\t\t\t\trow-gap: rem(60);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .menu__item\r\n\r\n\t\t&__item {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .menu__link\r\n\r\n\t\t&__link {\r\n\t\t\tfont-size: rem(16);\r\n\t\t\tbackground: linear-gradient(to right, currentColor 0%, currentColor 100%) no-repeat;\r\n      \tbackground-size: 0 2px; /* Начальная ширина подчеркивания */\r\n         background-position: left bottom;\r\n         transition: background-size 0.3s ease;\r\n\t\t\t@media (any-hover: hover) {\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tbackground-size: 100% 2px; /* Конечная ширина подчеркивания при наведении */\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tcolor:  #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n}\r\n.icon-menu {\r\n}\r\n\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n\tdisplay: none;\r\n\t@media (max-width: $mobile) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: rem(30);\r\n\t\theight: rem(18);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tleft: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: rem(3);\r\n\t\t\tbackground-color: #00296D;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 75%;\r\n\t\t\t\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - rem(1));\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(45% - rem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - rem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n","//====================================================================================================\r\n.footer {\r\n\twidth: 100%;\r\n\t&__map{\r\n\t\tz-index: 1;\r\n\t\tmin-width: 100%;\r\n\t\t@include adaptiveValue(\"height\", 575, 393);\r\n\t}\r\n\t// .footer__text\r\n\t\r\n\t&__text {\r\n\t\t\tbackground-color: #252525;\r\n\t\t\t@include adaptiveValue(\"padding-top\", 13, 7);\r\n\t\t\t@include adaptiveValue(\"padding-bottom\", 13, 7);\r\n\t\t\ttext-align: center;\r\n\t\t\tfont-family: \"Montserrat\";\r\n\t\t\t@include adaptiveValue(\"font-size\", 20, 12);\r\n\t\t\t@include adaptiveValue(\"line-height\", 24, 15);\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #FFF9FD;\r\n\t\t}\r\n}\r\n\r\n//====================================================================================================\r\n","//====================================================================================================\r\n\r\n.main {\r\n\t\tmargin-top: rem(57);\r\n\t\tmargin-bottom: rem(57);\r\n\t\t// .main__container\r\n\r\n\t\t&__container {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\talign-items: center;\r\n\t\t\tcolumn-gap: rem(30);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__content\r\n\r\n\t\t&__content {\r\n\t\t\tflex: 0 1 30%;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\t@include adaptiveValue(\"row-gap\", 60, 20);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\torder: 1;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__subtitle\r\n\r\n\t\t&__subtitle {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .main__title\r\n\r\n\t\t&__title {\r\n\t\t\tspan{\r\n\t\t\t\tcolor: #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__text\r\n\r\n\t\t&__text {\r\n\t\t}\r\n\r\n\t\t// .main__battons\r\n\r\n\t\t&__battons {\r\n\t\t\t// flex: 0 1 100%;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t}\r\n\r\n\t\t// .main__button-blue\r\n\r\n\t\t&__button-blue {\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #00296D;\r\n\t\t\tline-height: rem(27);\r\n\t\t\tbackground-color:#44C6E9;\r\n\t\t\tbox-shadow: -2px 7px 0px 0px #2977D5;\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t&:active{\r\n\t\t\t\ttransform: translateY(7px);\r\n\t\t\t\tbox-shadow: 0px 0px 0px 0px #2977D5;\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\tbox-shadow: -2px 3px 0px 0px #2977D5;\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__button-clear\r\n\r\n\t\t&__button-clear {\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tfont-weight: 400;\r\n\t\t\tline-height: rem(24);\r\n\t\t\ttext-decoration: underline;\r\n\t\t\ttext-underline-offset: 5px;\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: none;\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t@media (any-hover: hover){\r\n\t\t\t\t&:hover{\r\n\t\t\t\t\t// background-position: 0 100%;\r\n\t\t\t\t\tcolor: #363434;\r\n\t\t\t\t\t// font-size: rem(17);\r\n\t\t\t\t\t// border: 1px solid #363434;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tborder: 1px solid #666666;\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .main__image\r\n\r\n\t\t&__image {\r\n\t\t\tmargin-top: rem(-20);\r\n\t\t\torder: 0;\r\n\t\t\tflex: 0 1 auto;\r\n\t\t\tposition: relative;\r\n\t\t\t@include adaptiveValue(\"padding-left\",150 ,0 );\r\n\t\t\t@include adaptiveValue(\"padding-right\",150 ,50 );\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t@include adaptiveValue(\"padding-left\",0 ,50 );\r\n\t\t\t\t@include adaptiveValue(\"padding-right\",0 ,50 );\r\n\t\t\t\torder: 0;\r\n\t\t\t\tmargin-bottom: rem(60);\r\n\t\t\t}\r\n\t\t\t// padding-left: rem(150);\r\n\t\t\t// padding-right: rem(150);\r\n\t\t\timg{\r\n\t\t\t\t// margin-right: rem(20);\r\n\t\t\t\tposition: relative;\r\n\t\t\t\t// width: 100%;\r\n\t\t\t\theight: auto;\r\n\r\n\t\t\t\tz-index: 2;\r\n\t\t\t\t// width: clamp(297px, 50vw, 595px);\r\n            // aspect-ratio: 595 / 893;\r\n\r\n\t\t\t\twidth: clamp(297px, 40vw, 595px);\r\n            aspect-ratio: 595 / 893;\r\n            object-fit: cover;\r\n\t\t\t}\r\n\t\t\t&::before{\r\n\t\t\t\tcontent: \"\";\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\twidth: clamp(535px, 50vw, 893px);\r\n            aspect-ratio: 1 / 1;\r\n\t\t\t\tbackground: #00296D;\r\n\t\t\t\tborder-radius: 50%;\r\n\t\t\t\tbackground: linear-gradient(180deg,rgba(212, 228, 244, 1) 15%, rgba(68, 198, 233, 1) 45%, rgba(41, 119, 213, 1) 70%, rgba(0, 41, 109, 1) 100%);\r\n\t\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\t\tz-index: 1;\r\n\t\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t\ttransform: translate(-40%, -55%);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n}\r\n.subtitle {\r\n\tfont-family: $fontFamily;\r\n\t@include adaptiveValue(\"font-size\", 20, 13);\r\n\t@include adaptiveValue(\"line-height\", 30, 20);\r\n\t\t\t// font-size: rem(20);\r\n\t\t\t// line-height: math.div(30 , 20);\r\n\t\t\tfont-weight: 400;\r\n\t\t\tcolor: #2977D5;\r\n}\r\n.title{\r\n\tfont-family: $fontFamily;\r\n\tfont-weight: 600;\r\n\t@include adaptiveValue(\"font-size\", 64, 32);\r\n\t@include adaptiveValue(\"line-height\", 96, 48);\r\n}\r\n.text {\r\n\tfont-family: \"Source Sans 3\";\r\n\t@include adaptiveValue(\"font-size\", 20, 13);\r\n\t@include adaptiveValue(\"line-height\", 28, 19);\r\n\tfont-weight: 300;\r\n\tcolor: #252525;\r\n\tpadding: rem(0) rem(5) rem(0) rem(0);\r\n}\r\n.button-border {\r\n}\r\n\r\n//====================================================================================================\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fd8adeb1d4db322d4102")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MThiMGY5ZmUxNGY1YWIxODZkMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSUFBc0k7QUFDdEksNElBQTRJO0FBQzVJLG9JQUFvSTtBQUNwSSwySEFBMkg7QUFDM0gscUhBQXFIO0FBQ3JILGtJQUFrSTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc1ZBQXNWLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxTQUFTLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxzQkFBc0IsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLHNCQUFzQixNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxP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b0MscUNBQXFDLGNBQWMscUNBQXFDLCtCQUErQiwyQkFBMkIseUJBQXlCLDJCQUEyQixnREFBZ0QsMkNBQTJDLGlEQUFpRCx3Q0FBd0Msa0NBQWtDLFdBQVcsb0JBQW9CLDBCQUEwQiwrQkFBK0IscUJBQXFCLHNCQUFzQiw2Q0FBNkMsb0NBQW9DLGdDQUFnQywrQkFBK0IsMkpBQTJKLDZDQUE2Qyx1QkFBdUIsdUNBQXVDLCtDQUErQyxhQUFhLFdBQVcsU0FBUyxLQUFLLGVBQWUsK0JBQStCLG9EQUFvRCxzREFBc0QsZ0NBQWdDLDRDQUE0QywyQkFBMkIseUJBQXlCLEtBQUssV0FBVywrQkFBK0IsdUJBQXVCLG9EQUFvRCxzREFBc0QsS0FBSyxXQUFXLHFDQUFxQyxvREFBb0Qsc0RBQXNELHVCQUF1QixxQkFBcUIsMkNBQTJDLEtBQUssb0JBQW9CLEtBQUsscUlBQXFJO0FBQ3Zoc0M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDcHBDdkMsc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zKzM6MzAwLHJlZ3VsYXImZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjEwMCwzMDAscmVndWxhciw1MDAsNjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTozMDAscmVndWxhciw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOnJlZ3VsYXIsNjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMzIwcHg7XG59XG5cbmJvZHkge1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4ubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xufVxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLndyYXBwZXI6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbn1cbi5tZW51LW9wZW4gLndyYXBwZXI6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuQHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xuICAud3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG4gIH1cbn1cbi53cmFwcGVyID4gbWFpbiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLndyYXBwZXIgPiAqIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4vKlxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XG4qL1xuW2NsYXNzKj1fX2NvbnRhaW5lcl0ge1xuICBtYXgtd2lkdGg6IDk5LjY4NzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDAuOTM3NXJlbTtcbn1cblxuW2NsYXNzKj0taWJnXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbltjbGFzcyo9LWliZ10gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5bY2xhc3MqPS1pYmdfY29udGFpbl0gaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmJ0biB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MzQwNjg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDEuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzM0MDY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAxLjEyNXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC44MTI1cmVtICsgMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygxLjVyZW0gKyAwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgfVxufVxuLmJ0biB7XG4gIHBhZGRpbmctdG9wOiAwLjY4NzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjY4NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuOTM3NXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICB9XG59XG5cbi5idXR0b24tYm9yZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDI5NkQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDI5NkQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0NEM2RTkgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xufVxuLmJ1dHRvbi1ib3JkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmJ1dHRvbi1ib3JkZXIge1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY2NjY7XG4gICAgbWF4LXdpZHRoOiAxNDBweDtcbiAgICBwYWRkaW5nOiAwLjU2MjVyZW0gMS41cmVtO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2NjY2NjYgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcbiAgfVxufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG4uaGVhZGVyLl9oZWFkZXItc2Nyb2xsIHtcbiAgaGVpZ2h0OiA0LjM3NXJlbTtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAyLjAzMTg2Mjc0NTFyZW0gICsgIC0wLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMi4wMzE4NjI3NDUxcmVtICArICAtMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAyLjAzMTg2Mjc0NTFyZW0gICsgIC0wLjc4NDMxMzcyNTV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMS44NzVyZW0gKyAtMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMi4wMzE4NjI3NDUxcmVtICArICAtMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDIuMDMxODYyNzQ1MXJlbSAgKyAgLTAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMi4wMzE4NjI3NDUxcmVtICArICAtMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEuODc1cmVtICsgLTAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjg3NXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlcl9fbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvIHtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgIHdpZHRoOiAzLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAyLjVyZW0gLCAyLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMy40Mzc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLWljb24gaW1nIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMi41cmVtICwgMi4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDMuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDIuNXJlbSAsIDIuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAzLjQzNzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgICAgd2lkdGg6IGNhbGMoMi41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLWljb24gaW1nIHtcbiAgICB3aWR0aDogMi41cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLW5hbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdG9wOiAyM3B4O1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuOTM3NXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICBsaW5lLWhlaWdodDogMS4zNzU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTQ2NTY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAwLjkzNzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC41NDY1Njg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDAuOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjU0NjU2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC42MjVyZW0gKyAwLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjc1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmhlYWRlcl9fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19idXR0b24ge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4ubWVudSB7XG4gIGZsZXg6IDAgMSBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIHBhZGRpbmctdG9wOiA4LjYyNXJlbTtcbiAgICBwYWRkaW5nOiA4LjYyNXJlbSAxLjI1cmVtIDIuMzc1cmVtIDEuMjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUZEO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIH1cbiAgLm1lbnUtb3BlbiAubWVudV9fYm9keSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuLm1lbnVfX2ljb25zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChncmlkLWNvbHVtbi1nYXA6IGNsYW1wKCAyLjVyZW0gLCAxLjg3MjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCA1cmVtICkpIHtcbiAgICAubWVudV9faWNvbnMge1xuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiBjbGFtcCggMi41cmVtICwgMS44NzI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChncmlkLWNvbHVtbi1nYXA6IGNsYW1wKCAyLjVyZW0gLCAxLjg3MjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCA1cmVtICkpIHtcbiAgICAubWVudV9faWNvbnMge1xuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiBjYWxjKDIuNXJlbSArIDIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZ3JpZC1yb3ctZ2FwOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChncmlkLXJvdy1nYXA6IGNsYW1wKCAyLjVyZW0gLCAyLjE4NjI3NDUwOThyZW0gICsgIDEuNTY4NjI3NDUxdncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9faWNvbnMge1xuICAgICAgZ3JpZC1yb3ctZ2FwOiBjbGFtcCggMi41cmVtICwgMi4xODYyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChncmlkLXJvdy1nYXA6IGNsYW1wKCAyLjVyZW0gLCAyLjE4NjI3NDUwOThyZW0gICsgIDEuNTY4NjI3NDUxdncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9faWNvbnMge1xuICAgICAgZ3JpZC1yb3ctZ2FwOiBjYWxjKDIuNXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtcm93LWdhcDogMi41cmVtO1xuICB9XG59XG4ubWVudV9faWNvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1lbnVfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAxIDUwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGNvbHVtbi1nYXA6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoY29sdW1uLWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBjb2x1bW4tZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNjIyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoY29sdW1uLWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBjb2x1bW4tZ2FwOiBjYWxjKDEuMjVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICB9XG59XG4ubWVudV9fbGlzdCB7XG4gIHJvdy1nYXA6IDAuNjI1cmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIHJvdy1nYXA6IDMuNzVyZW07XG4gIH1cbn1cbi5tZW51X19saW5rIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGN1cnJlbnRDb2xvciAwJSwgY3VycmVudENvbG9yIDEwMCUpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAwIDJweDsgLyog0J3QsNGH0LDQu9GM0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAubWVudV9fbGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDsgLyog0JrQvtC90LXRh9C90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8g0L/RgNC4INC90LDQstC10LTQtdC90LjQuCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgY29sb3I6ICMyOTc3RDU7XG4gIH1cbn1cblxuLmljb24tbWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaWNvbi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEuODc1cmVtO1xuICAgIGhlaWdodDogMS4xMjVyZW07XG4gICAgei1pbmRleDogNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAoYW55LWhvdmVyOiBub25lKSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmljb24tbWVudSBzcGFuLCAuaWNvbi1tZW51OjpiZWZvcmUsIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwLjE4NzVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjk2RDtcbiAgfVxuICAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgfVxuICAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmljb24tbWVudSBzcGFuIHtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudSBzcGFuIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmJlZm9yZSB7XG4gICAgdG9wOiBjYWxjKDQ1JSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBib3R0b206IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvb3Rlcl9fbWFwIHtcbiAgei1pbmRleDogMTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuZm9vdGVyX19tYXAge1xuICAgIGhlaWdodDogMzUuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAyNC41NjI1cmVtICwgMjEuNzA3NTk4MDM5MnJlbSAgKyAgMTQuMjc0NTA5ODAzOXZ3ICwgMzUuOTM3NXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fbWFwIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDI0LjU2MjVyZW0gLCAyMS43MDc1OTgwMzkycmVtICArICAxNC4yNzQ1MDk4MDM5dncgLCAzNS45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDI0LjU2MjVyZW0gLCAyMS43MDc1OTgwMzkycmVtICArICAxNC4yNzQ1MDk4MDM5dncgLCAzNS45Mzc1cmVtICkpIHtcbiAgICAuZm9vdGVyX19tYXAge1xuICAgICAgaGVpZ2h0OiBjYWxjKDI0LjU2MjVyZW0gKyAxMS4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXJfX21hcCB7XG4gICAgaGVpZ2h0OiAyNC41NjI1cmVtO1xuICB9XG59XG4uZm9vdGVyX190ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDAuNDM3NXJlbSAsIDAuMzQzMzgyMzUyOXJlbSAgKyAgMC40NzA1ODgyMzUzdncgLCAwLjgxMjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAwLjQzNzVyZW0gLCAwLjM0MzM4MjM1MjlyZW0gICsgIDAuNDcwNTg4MjM1M3Z3ICwgMC44MTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMC40Mzc1cmVtICwgMC4zNDMzODIzNTI5cmVtICArICAwLjQ3MDU4ODIzNTN2dyAsIDAuODEyNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygwLjQzNzVyZW0gKyAwLjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDAuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuZm9vdGVyX190ZXh0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC40Mzc1cmVtICwgMC4zNDMzODIzNTI5cmVtICArICAwLjQ3MDU4ODIzNTN2dyAsIDAuODEyNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNDM3NXJlbSAsIDAuMzQzMzgyMzUyOXJlbSAgKyAgMC40NzA1ODgyMzUzdncgLCAwLjgxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAwLjQzNzVyZW0gLCAwLjM0MzM4MjM1MjlyZW0gICsgIDAuNDcwNTg4MjM1M3Z3ICwgMC44MTI1cmVtICkpIHtcbiAgICAuZm9vdGVyX190ZXh0IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuNDM3NXJlbSArIDAuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyX190ZXh0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40Mzc1cmVtO1xuICB9XG59XG4uZm9vdGVyX190ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5mb290ZXJfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42MjQ1MDk4MDM5cmVtICArICAwLjYyNzQ1MDk4MDR2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjI0NTA5ODAzOXJlbSAgKyAgMC42Mjc0NTA5ODA0dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjYyNDUwOTgwMzlyZW0gICsgIDAuNjI3NDUwOTgwNHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC43NXJlbSArIDAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5mb290ZXJfX3RleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGluZS1oZWlnaHQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICkpIHtcbiAgICAuZm9vdGVyX190ZXh0IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsaW5lLWhlaWdodDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKSkge1xuICAgIC5mb290ZXJfX3RleHQge1xuICAgICAgbGluZS1oZWlnaHQ6IGNhbGMoMC45Mzc1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyX190ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMC45Mzc1cmVtO1xuICB9XG59XG4uZm9vdGVyX190ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNGRkY5RkQ7XG59XG5cbi5tYWluIHtcbiAgbWFyZ2luLXRvcDogMy41NjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAzLjU2MjVyZW07XG59XG4ubWFpbl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxLjg3NXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tYWluX19jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5tYWluX19jb250ZW50IHtcbiAgZmxleDogMCAxIDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW5fX2NvbnRlbnQge1xuICAgIHJvdy1nYXA6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocm93LWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWFpbl9fY29udGVudCB7XG4gICAgICByb3ctZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNjIyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocm93LWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWFpbl9fY29udGVudCB7XG4gICAgICByb3ctZ2FwOiBjYWxjKDEuMjVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tYWluX19jb250ZW50IHtcbiAgICByb3ctZ2FwOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWFpbl9fY29udGVudCB7XG4gICAgb3JkZXI6IDE7XG4gIH1cbn1cbi5tYWluX190aXRsZSBzcGFuIHtcbiAgY29sb3I6ICMyOTc3RDU7XG59XG4ubWFpbl9fYmF0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX19idXR0b24tYmx1ZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAyOTZEO1xuICBsaW5lLWhlaWdodDogMS42ODc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRDNkU5O1xuICBib3gtc2hhZG93OiAtMnB4IDdweCAwcHggMHB4ICMyOTc3RDU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG4ubWFpbl9fYnV0dG9uLWJsdWU6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDdweCk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjMjk3N0Q1O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1haW5fX2J1dHRvbi1ibHVlIHtcbiAgICBib3gtc2hhZG93OiAtMnB4IDNweCAwcHggMHB4ICMyOTc3RDU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW5fX2J1dHRvbi1jbGVhciB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICkpIHtcbiAgICAubWFpbl9fYnV0dG9uLWNsZWFyIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICkpIHtcbiAgICAubWFpbl9fYnV0dG9uLWNsZWFyIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjc1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1haW5fX2J1dHRvbi1jbGVhciB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG4ubWFpbl9fYnV0dG9uLWNsZWFyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XG4gIC5tYWluX19idXR0b24tY2xlYXI6aG92ZXIge1xuICAgIGNvbG9yOiAjMzYzNDM0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWFpbl9fYnV0dG9uLWNsZWFyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuLm1haW5fX2ltYWdlIHtcbiAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG4gIG9yZGVyOiAwO1xuICBmbGV4OiAwIDEgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctbGVmdDogOS4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTIuMzUyOTQxMDk4M3JlbSAgKyAgMTEuNzY0NzA1ODAzOXZ3ICwgOS4zNzVyZW0gKSkge1xuICAgIC5tYWluX19pbWFnZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMi4zNTI5NDEwOTgzcmVtICArICAxMS43NjQ3MDU4MDM5dncgLCA5LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMi4zNTI5NDEwOTgzcmVtICArICAxMS43NjQ3MDU4MDM5dncgLCA5LjM3NXJlbSApKSB7XG4gICAgLm1haW5fX2ltYWdlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygwLjAwMDAwMDA2MjVyZW0gKyA5LjM3NDk5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW5fX2ltYWdlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA5LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjU1NjM3MjU0OXJlbSAgKyAgNy44NDMxMzcyNTQ5dncgLCA5LjM3NXJlbSApKSB7XG4gICAgLm1haW5fX2ltYWdlIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuNTU2MzcyNTQ5cmVtICArICA3Ljg0MzEzNzI1NDl2dyAsIDkuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuNTU2MzcyNTQ5cmVtICArICA3Ljg0MzEzNzI1NDl2dyAsIDkuMzc1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygzLjEyNXJlbSArIDYuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgcGFkZGluZy1yaWdodDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgb3JkZXI6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1haW5fX2ltYWdlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMDAwMDAwMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIDMuOTA5MzEzNzA5OHJlbSAgKyAgLTMuOTIxNTY4NTQ5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLm1haW5fX2ltYWdlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygzLjEyNXJlbSArIC0zLjEyNDk5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tYWluX19pbWFnZSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIDMuOTA5MzEzNzA5OHJlbSAgKyAgLTMuOTIxNTY4NTQ5dncgLCAzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgMy45MDkzMTM3MDk4cmVtICArICAtMy45MjE1Njg1NDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAubWFpbl9faW1hZ2Uge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygzLjEyNXJlbSArIC0zLjEyNDk5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubWFpbl9faW1hZ2Uge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuMTI1cmVtO1xuICB9XG59XG4ubWFpbl9faW1hZ2UgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiBjbGFtcCgyOTdweCwgNDB2dywgNTk1cHgpO1xuICBhc3BlY3QtcmF0aW86IDU5NS84OTM7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLm1haW5fX2ltYWdlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiBjbGFtcCg1MzVweCwgNTB2dywgODkzcHgpO1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgYmFja2dyb3VuZDogIzAwMjk2RDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMjEyLCAyMjgsIDI0NCkgMTUlLCByZ2IoNjgsIDE5OCwgMjMzKSA0NSUsIHJnYig0MSwgMTE5LCAyMTMpIDcwJSwgcmdiKDAsIDQxLCAxMDkpIDEwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tYWluX19pbWFnZTo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNTUlKTtcbiAgfVxufVxuXG4uc3VidGl0bGUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzAyNjk2MDc4NHJlbSAgKyAgMC41NDkwMTk2MDc4dncgLCAxLjI1cmVtICkpIHtcbiAgICAuc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MDI2OTYwNzg0cmVtICArICAwLjU0OTAxOTYwNzh2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MDI2OTYwNzg0cmVtICArICAwLjU0OTAxOTYwNzh2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC44MTI1cmVtICsgMC40Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5zdWJ0aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGxpbmUtaGVpZ2h0OiBjbGFtcCggMS4yNXJlbSAsIDEuMDkzMTM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCggMS4yNXJlbSAsIDEuMDkzMTM3MjU0OXJlbSAgKyAgMC43ODQzMTM3MjU1dncgLCAxLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsaW5lLWhlaWdodDogY2xhbXAoIDEuMjVyZW0gLCAxLjA5MzEzNzI1NDlyZW0gICsgIDAuNzg0MzEzNzI1NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBsaW5lLWhlaWdodDogY2FsYygxLjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zdWJ0aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIH1cbn1cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjk3N0Q1O1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDJyZW0gLCAxLjQ5ODAzOTIxNTdyZW0gICsgIDIuNTA5ODAzOTIxNnZ3ICwgNHJlbSApKSB7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDJyZW0gLCAxLjQ5ODAzOTIxNTdyZW0gICsgIDIuNTA5ODAzOTIxNnZ3ICwgNHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAycmVtICwgMS40OTgwMzkyMTU3cmVtICArICAyLjUwOTgwMzkyMTZ2dyAsIDRyZW0gKSkge1xuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMnJlbSArIDIgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC50aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDZyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGluZS1oZWlnaHQ6IGNsYW1wKCAzcmVtICwgMi4yNDcwNTg4MjM1cmVtICArICAzLjc2NDcwNTg4MjR2dyAsIDZyZW0gKSkge1xuICAgIC50aXRsZSB7XG4gICAgICBsaW5lLWhlaWdodDogY2xhbXAoIDNyZW0gLCAyLjI0NzA1ODgyMzVyZW0gICsgIDMuNzY0NzA1ODgyNHZ3ICwgNnJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsaW5lLWhlaWdodDogY2xhbXAoIDNyZW0gLCAyLjI0NzA1ODgyMzVyZW0gICsgIDMuNzY0NzA1ODgyNHZ3ICwgNnJlbSApKSB7XG4gICAgLnRpdGxlIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDNyZW0gKyAzICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB9XG59XG5cbi50ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgM1wiO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAudGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzAyNjk2MDc4NHJlbSAgKyAgMC41NDkwMTk2MDc4dncgLCAxLjI1cmVtICkpIHtcbiAgICAudGV4dCB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjcwMjY5NjA3ODRyZW0gICsgIDAuNTQ5MDE5NjA3OHZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjcwMjY5NjA3ODRyZW0gICsgIDAuNTQ5MDE5NjA3OHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLnRleHQge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuODEyNXJlbSArIDAuNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC50ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsaW5lLWhlaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDEuMDQ2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjc1cmVtICkpIHtcbiAgICAudGV4dCB7XG4gICAgICBsaW5lLWhlaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDEuMDQ2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxpbmUtaGVpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMS4wNDYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNzVyZW0gKSkge1xuICAgIC50ZXh0IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDEuMTg3NXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE4NzVyZW07XG4gIH1cbn1cbi50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMyNTI1MjU7XG4gIHBhZGRpbmc6IDByZW0gMC4zMTI1cmVtIDByZW0gMHJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbnVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2hvbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURRRDs7QUNOQTs7O0VBR0Msc0JBQUE7QURTRDs7QUNDQTs7RUFFQyxZQUFBO0VBQ0EsZ0JBQUE7QURFRDs7QUNBQTtFQUNDLFdEUVc7RUNQWCxjQUFBO0VBQ0Esc0JERVk7RUNEWixrQkRFVTtFQ0FWLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURFRDs7QUNBQTs7O0VBR0Msc0JEVlk7RUNXWixrQkFBQTtBREdEOztBQ0RBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBRElEOztBQ0ZBO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0FES0Q7O0FDSEE7RUFDQyxnQkFBQTtBRE1EOztBQ0pBO0VBQ0MsbUJBQUE7QURPRDs7QUNMQTs7Ozs7O0VBTUMsb0JBQUE7RUFDQSxrQkFBQTtBRFFEOztBQUFDO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBR0Y7QUFLQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFIRDtBQUtFO0VBREQ7SUFFRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7SUFDQSw4QkFBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFD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QUNGO0FJM21CRTtFRXBFRDtJRnFFRSx5QkFBQTtFSjhtQkQ7QUFDRjtBSTNtQkM7RUFFQztJRTNFRDtNRjRFRSxtRkFoQmM7SUo2bkJiO0VBQ0Y7RUkzbUJBO0lFL0VEO01GZ0ZFLG1FQUFBO0lKOG1CQztFQUNGO0FBQ0Y7QUk1bUJFO0VFcEZEO0lGcUZFLHlCQUFBO0VKK21CRDtBQUNGO0FNcnNCQztFQUlFLGtCQUFBO0VBQ0EseUJBQUE7QU5vc0JIO0FJcm9CRTtFRXBFRDtJRnFFRSxrQkFBQTtFSndvQkQ7QUFDRjtBSXJvQkM7RUFFQztJRTNFRDtNRjRFRSwwRUFoQmM7SUp1cEJiO0VBQ0Y7RUlyb0JBO0lFL0VEO01GZ0ZFLDBEQUFBO0lKd29CQztFQUNGO0FBQ0Y7QUl0b0JFO0VFcEZEO0lGcUZFLGtCQUFBO0VKeW9CRDtBQUNGO0FJM3BCRTtFRXBFRDtJRnFFRSxtQkFBQTtFSjhwQkQ7QUFDRjtBSTNwQkM7RUFFQztJRTNFRDtNRjRFRSw2RUFoQmM7SUo2cUJiO0VBQ0Y7RUkzcEJBO0lFL0VEO01GZ0ZFLGlFQUFBO0lKOHBCQztFQUNGO0FBQ0Y7QUk1cEJFO0VFcEZEO0lGcUZFLHNCQUFBO0VKK3BCRDtBQUNGO0FNcnZCQztFQVFFLGdCQUFBO0VBQ0EsY0FBQTtBTmd2Qkg7O0FPandCQTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7QVBvd0JGO0FPandCRTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QVBtd0JIO0FPbHdCRztFQUxEO0lBTUUsc0JBQUE7RVBxd0JGO0FBQ0Y7QU9od0JFO0VBQ0MsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBUGt3Qkg7QUkxc0JFO0VHM0RBO0lINERDLGdCQUFBO0VKNnNCRDtBQUNGO0FJMXNCQztFQUVDO0lHbEVBO01IbUVDLHVFQWhCYztJSjR0QmI7RUFDRjtFSTFzQkE7SUd0RUE7TUh1RUMsd0RBQUE7SUo2c0JDO0VBQ0Y7QUFDRjtBSTNzQkU7RUczRUE7SUg0RUMsZ0JBQUE7RUo4c0JEO0FBQ0Y7QU90eEJHO0VBTEQ7SUFN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REFBQTtJSms4QkM7RUFDRjtBQUNGO0FJaDhCRTtFR3VERjtJSHRERyxvQkFBQTtFSm04QkQ7QUFDRjtBTzk0QkE7RUFNRyxnQkFBQTtFQUNBLGNBQUE7QVAyNEJIOztBT3o0QkE7RUFDQyxzQlBuSVk7RU9vSVosZ0JBQUE7QVA0NEJEO0FJOTlCRTtFR2dGRjtJSC9FRyxlQUFBO0VKaStCRDtBQUNGO0FJOTlCQztFQUVDO0lHeUVGO01IeEVHLG9FQWhCYztJSmcvQmI7RUFDRjtFSTk5QkE7SUdxRUY7TUhwRUcscURBQUE7SUppK0JDO0VBQ0Y7QUFDRjtBSS85QkU7RUdnRUY7SUgvREcsZUFBQTtFSmsrQkQ7QUFDRjtBSXAvQkU7RUdnRkY7SUgvRUcsaUJBQUE7RUp1L0JEO0FBQ0Y7QUlwL0JDO0VBRUM7SUd5RUY7TUh4RUcsc0VBaEJjO0lKc2dDYjtFQUNGO0VJcC9CQTtJR3FFRjtNSHBFRyx1REFBQTtJSnUvQkM7RUFDRjtBQUNGO0FJci9CRTtFR2dFRjtJSC9ERyxpQkFBQTtFSncvQkQ7QUFDRjs7QU9wN0JBO0VBQ0MsNEJBQUE7QVB1N0JEO0FJOWdDRTtFR3NGRjtJSHJGRyxrQkFBQTtFSmloQ0Q7QUFDRjtBSTlnQ0M7RUFFQztJRytFRjtNSDlFRyw0RUFoQmM7SUpnaUNiO0VBQ0Y7RUk5Z0NBO0lHMkVGO01IMUVHLCtEQUFBO0lKaWhDQztFQUNGO0FBQ0Y7QUkvZ0NFO0VHc0VGO0lIckVHLG9CQUFBO0VKa2hDRDtBQUNGO0FJcGlDRTtFR3NGRjtJSHJGRyxvQkFBQTtFSnVpQ0Q7QUFDRjtBSXBpQ0M7RUFFQztJRytFRjtNSDlFRyw4RUFoQmM7SUpzakNiO0VBQ0Y7RUlwaUNBO0lHMkVGO01IMUVHLGlFQUFBO0lKdWlDQztFQUNGO0FBQ0Y7QUlyaUNFO0VHc0VGO0lIckVHLHNCQUFBO0VKd2lDRDtBQUNGO0FPcCtCQTtFQUlDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FQbStCRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LzRltC60YHQuNC90ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyZkaXNwbGF5PXN3YXAgLSDQtNC+0LTQsNGC0Lgg0L/RgNC4INC/0ZbQtNC60LvRjtGH0LXQvdC90ZYg0YfQtdGA0LXQtyDQv9C70LDQs9GW0L1cXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0LvQvtC60LDQu9GM0L3RliDRhNCw0LnQu9C4INGI0YDQuNGE0YLRltCyXFxyXFxuLy9AaW1wb3J0IFxcXCJmb250cy9mb250c1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRltC60L7QvdC60L7QstC40YUg0YjRgNC40YTRgtGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J/RltC00LrQu9GO0YfQuNGC0LgsINGP0LrRidC+INGUINGE0LDQudC7INGW0LrQvtC90LrQvtCy0L7Qs9C+INGI0YDQuNGE0YLRg1xcclxcbi8vQGltcG9ydCBcXFwiZm9udHMvaWNvbnNcXFwiO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINGI0LDQsdC70L7QvdGDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyZkaXNwbGF5PXN3YXAg0JTQvtCx0LDQstC40YLRjCDQv9GA0Lgg0L/QvtC00LrQu9GO0YfQtdC90LjQuCDRh9C10YDQtdC3INC/0LvQsNCz0LjQvUBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86cmVndWxhciw1MDAsNjAwLDcwMCw4MDApO1xcclxcbi8vICZzdWJzZXQ9Y3lyaWxsaWMtZXh0XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucyszOjMwMCxyZWd1bGFyJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoxMDAsMzAwLHJlZ3VsYXIsNTAwLDYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLHJlZ3VsYXIsNTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczpyZWd1bGFyLDYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG4vLyDQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INGI0YDQuNGE0YIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuJGZvbnRGYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4kZm9udFNpemU6IHJlbSgyMCk7IC8vINC00LUgMTQocHgpIC0g0YDQvtC30LzRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INC3INC80LDQutC10YLRg1xcclxcblxcclxcbi8vINCe0YHQvdC+0LLQvdGWINC60L7Qu9GM0L7RgNC4XFxyXFxuJG1haW5Db2xvcjogIzAwMDsgLy8g0JrQvtC70ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxcclxcblxcclxcbi8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDQsNC00LDQv9GC0LjQstC90L7RlyDRgdGW0YLQutC4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0JzRltC90ZbQvNCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0YLQvtGA0ZbQvdC60LhcXHJcXG4kbWluV2lkdGg6IDMyMDtcXHJcXG4vLyDQqNC40YDQuNC90LAg0L/QvtC70L7RgtC90LAgKNC80LDQutC10YLRgylcXHJcXG4kbWF4V2lkdGg6IDE5MjA7XFxyXFxuLy8gJG1heFdpZHRoOiAxNzI4O1xcclxcbi8vINCo0LjRgNC40L3QsCDQvtCx0LzQtdC20YPRjtGH0L7Qs9C+INC60L7QvdGC0LXQudC90LXRgNCwICgwID0g0L3QtdC80LDRlCDQvtCx0LzQtdC20LXQvdC90Y8pXFxyXFxuJG1heFdpZHRoQ29udGFpbmVyOiAxNTY1O1xcclxcbi8vINCX0LDQs9Cw0LvRjNC90LjQuSDQstGW0LTRgdGC0YPQvyDRgyDQutC+0L3RgtC10LnQvdC10YDQsFxcclxcbi8vICgzMCA9INC/0L4gMTVweCDQu9GW0LLQvtGA0YPRhyDRliDQv9GA0LDQstC+0YDRg9GHLCAwID0g0L3QtdC80LDRlCDQstGW0LTRgdGC0YPQv9GDKVxcclxcbiRjb250YWluZXJQYWRkaW5nOiAzMDtcXHJcXG5cXHJcXG4vLyDQqNC40YDQuNC90LAg0YHQv9GA0LDRhtGM0L7QstGD0LLQsNC90L3RjyDQv9C10YDRiNC+0LPQviDQsdGA0LXQudC60L/QvtGW0L3RgtGDXFxyXFxuJGNvbnRhaW5lcldpZHRoOiAkbWF4V2lkdGhDb250YWluZXIgKyAkY29udGFpbmVyUGFkZGluZztcXHJcXG5cXHJcXG4vLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQuFxcclxcbiRwYzogZW0oJGNvbnRhaW5lcldpZHRoKTsgLy8g0J/Qmiwg0L3QvtGD0YLQsdGD0LrQuCwg0LTQtdGP0LrRliDQv9C70LDQvdGI0LXRgtC4INGDINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LzRgyDQv9C+0LvQvtC20LXQvdC90ZZcXHJcXG4kdGFibGV0OiBlbSg5OTEuOTgpOyAvLyDQn9C70LDQvdGI0LXRgtC4LCDQtNC10Y/QutGWINGC0LXQu9C10YTQvtC90Lgg0LIg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiRtb2JpbGU6IGVtKDc2Ny45OCk7IC8vINCi0LXQu9C10YTQvtC90LggTFxcclxcbiRtb2JpbGVTbWFsbDogZW0oNDc5Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBTXFxyXFxuXFxyXFxuLy8g0KLQuNC/INCw0LTQsNC/0YLQuNCy0LA6XFxyXFxuLy8gMSA9INGH0YPQudC90ZbRgdGC0YwgKNGDINC60L7QvdGC0LXQudC90LXRgNCwINC90LXQvNCw0ZQg0LHRgNC10LnQutC/0L7RltC90YLRltCyKSxcXHJcXG4vLyAyID0g0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIgKNC60L7QvdGC0LXQudC90LXRgCDQt9C80ZbQvdGO0ZQg0YHQstC+0Y4g0YjQuNGA0LjQvdGDINC/0L4g0LHRgNC10LnQui3Qv9C+0ZfQvdGCKVxcclxcbiRyZXNwb25zaXZlVHlwZTogMTtcXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0J7QsdC90YPQu9C10L3QvdGPID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL251bGxcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQtdCz0LAgQk9EWSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdC8vINCh0LrRgNC+0LvQuyDQt9Cw0LHQu9C+0LrQvtCy0LDQvdC+XFxyXFxuXFx0LmxvY2sgJiB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRcXHR0b3VjaC1hY3Rpb246IG5vbmU7XFxyXFxuXFx0XFx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KHQsNC50YIg0LfQsNCy0LDQvdGC0LDQttC10L3QuNC5XFxyXFxuXFx0LmxvYWRlZCAmIHtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCe0LHQvtC70L7QvdC60LAgd3JhcHBlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi53cmFwcGVyIHtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdCY6OmJlZm9yZXtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0XFx0aW5zZXQ6IDA7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcdFxcdFxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG5cXHRcXHRcXHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG5cXHRcXHRcXHRvcGFjaXR5OiAwO1xcclxcblxcdFxcdFxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcblxcdFxcdFxcdHotaW5kZXg6IDI7XFxyXFxuXFx0XFx0fVxcclxcblxcdH0ubWVudS1vcGVuICY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0b3BhY2l0eTogMTtcXHJcXG5cXHRcXHRwb2ludGVyLWV2ZW50czogYXV0bztcXHJcXG5cXHR9XFxyXFxuXFx0QHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xcclxcblxcdFxcdG92ZXJmbG93OiBjbGlwO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQn9GA0LjRgtC40YHQutCw0ZTQvNC+IGZvb3RlclxcclxcblxcdD4gbWFpbiB7XFxyXFxuXFx0XFx0ZmxleDogMSAxIGF1dG87XFxyXFxuXFx0fVxcclxcblxcdC8vINCk0ZbQutGBINC00LvRjyDRgdC70LDQudC00LXRgNGW0LJcXHJcXG5cXHQ+ICoge1xcclxcblxcdFxcdG1pbi13aWR0aDogMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCe0LHQvNC10LbRg9GO0YfQuNC5INC60L7QvdGC0LXQudC90LXRgCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLypcXHJcXG4oaSkg0KHRgtC40LvRliDQsdGD0LTRg9GC0Ywg0LfQsNGB0YLQvtGB0L7QstGD0LLQsNGC0LjRgdGMINC00L5cXHJcXG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXFxyXFxu0J3QsNC/0YDQuNC60LvQsNC0IGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0ZYg0YIu0L8uXFxyXFxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBjbnRcXHJcXG4qL1xcclxcbkBpZiAoJHJlc3BvbnNpdmVUeXBlPT0xKSB7XFxyXFxuXFx0Ly8g0KfRg9C50L3QsFxcclxcblxcdFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcblxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgkY29udGFpbmVyV2lkdGgpO1xcclxcblxcdFxcdFxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG5cXHRcXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksIDE1KTtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgbWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpLCAxNSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufSBAZWxzZSB7XFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0LDQvNC4XFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuXFx0XFx0fSBAZWxzZSB7XFxyXFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkcGMpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg5NzApO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDc1MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiBub25lO1xcclxcblxcdFxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCBhbmQgJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINCx0LDQt9C+0LLQuNGFINGB0YLQuNC70ZbQsiwg0YjQsNCx0LvQvtC90ZbQsiAo0LfQsNCz0L7RgtGW0LLQtdC70YwpINGC0LAg0LTQvtC/0L7QvNGW0LbQvdC40YUg0LrQu9Cw0YHRltCyXFxyXFxuLy8g0JTQu9GPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8v0LLQuNC80LrQvdC10L3QvdGPINC60L7QvdC60YDQtdGC0L3QuNGFINGB0YLQuNC70ZbQsiDQtNC40LLQuNGB0YwgYmFzZS5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZVxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0LfQsNCz0LDQu9GM0L3QuNGFINC10LvQtdC80LXQvdGC0ZbQsiDQv9GA0L7QtdC60YLRg1xcclxcbkBpbXBvcnQgXFxcImNvbW1vblxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0LHQu9C+0LrRltCyXFxyXFxuQGltcG9ydCBcXFwiaGVhZGVyXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJmb290ZXJcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC+0LrRgNC10LzQuNGFINGB0YLQvtGA0ZbQvdC+0LpcXHJcXG5AaW1wb3J0IFxcXCJob21lXFxcIjtcXHJcXG5cIixcIioge1xcclxcblxcdHBhZGRpbmc6IDBweDtcXHJcXG5cXHRtYXJnaW46IDBweDtcXHJcXG5cXHRib3JkZXI6IDBweDtcXHJcXG59XFxyXFxuKixcXHJcXG4qOmJlZm9yZSxcXHJcXG4qOmFmdGVyIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46Zm9jdXMsXFxyXFxuOmFjdGl2ZSB7XFxyXFxuXFx0Ly8gb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuYTpmb2N1cyxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuXFx0Ly8gb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0bWluLXdpZHRoOiAkbWluV2lkdGggKyBweDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0Y29sb3I6ICRtYWluQ29sb3I7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdGZvbnQtc2l6ZTogJGZvbnRTaXplO1xcclxcblxcdC8vdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG5cXHQtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbmEge1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxudWwgbGkge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmltZyB7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXCIsXCIvLyDQl9Cw0LPQsNC70YzQvdC40Lkg0YTQsNC50Lsg0LXQu9C10LzQtdC90YLRltCyINGE0L7RgNC8XFxyXFxuLy8g0JTQu9GPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8v0LLRltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0LrQvtC90LrRgNC10YLQvdC+0LPQviDQtdC70LXQvNC10L3RgtCwINGE0L7RgNC80Lgg0LTQuNCy0LjRgdGMIGJhc2UvZm9ybXMvZm9ybXMuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2UvZm9ybXMvZm9ybXNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0L/QvtC/0LDQv9GW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3BvcHVwXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGB0L/QvtC50LvQtdGA0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3BvbGxlcnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQsNCx0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvdGFic1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQvNCw0L9cXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL21hcHNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LHQu9C+0LrRgyBcXFwi0L/QvtC60LDQt9Cw0YLQuCDRidC1XFxcIlxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc2hvd21vcmVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC70LjQv9C60L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3N0aWNreVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0L/QvtCy0L3QvtC10LrRgNCw0L3QvdC+0LPQviDQsdC70L7QutGDXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxsc2NyZWVuXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LXQutGA0LDQvdC+0Zcg0L/RgNC+0LrRgNGD0YLQutC4XFxyXFxuLy8gU3R5bGVzIGZvciBmdWxscGFnZSBzY3JvbGxcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxwYWdlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyByaXBwbGUg0LXRhNC10LrRgtGDXFxyXFxuLy8gU3R5bGVzIGZvciByaXBwbGUgZWZmZWN0XFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9yaXBwbGVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC60LDRgdGC0L7QvNC90L7Qs9C+INC60YPRgNGB0L7RgNGDXFxyXFxuLy8gU3R5bGVzIGZvciBjdXN0b20gY3Vyc29yXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9jdXJzb3JcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINGH0YPQudC90LjRhSDQutCw0YDRgtC40L3QvtC6IChJQkcpXFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpYmcgKGRpdiDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZ2EgKGEg0Lcg0LrQsNGA0YLQuNC90LrQvtGOINGC0LAg0LrQu9Cw0YHQsNC80LgpXFxyXFxuW2NsYXNzKj1cXFwiLWliZ1xcXCJdIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuW2NsYXNzKj1cXFwiLWliZ19jb250YWluXFxcIl0ge1xcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCo0LDQsdC70L7QvdC4ICjQt9Cw0LPQvtGC0ZbQstC70ZYpXFxyXFxuLy8gQGV4dGVuZCAl0ZbQvCfRjyDRiNCw0LHQu9C+0L3RgztcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoU0NTUyk6IGV4XFxyXFxuXFxyXFxuLy8g0JvRltGH0LjQu9GM0L3QuNC6INC00LvRjyDRgdC/0LjRgdC60YNcXHJcXG4lbGlzdENvdW50ZXIge1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHRjb3VudGVyLXJlc2V0OiBpdGVtO1xcclxcblxcdGxpIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0JjpiZWZvcmUge1xcclxcblxcdFxcdFxcdGNvdW50ZXItaW5jcmVtZW50OiBpdGVtO1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IGNvdW50ZXIoaXRlbSk7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QtSDQstGW0LTQtdC+XFxyXFxuJXJlc3BvbnNpdmVWaWRlbyB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XFxyXFxuXFx0dmlkZW8sXFxyXFxuXFx0aWZyYW1lLFxcclxcblxcdG9iamVjdCxcXHJcXG5cXHRlbWJlZCB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCS0ZbQtNC10L4g0Y/QuiDRhNC+0L1cXHJcXG4ldmlkZW9CYWNrZ3JvdW5kIHtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0dG9wOiA1MCU7XFxyXFxuXFx0XFx0bGVmdDogNTAlO1xcclxcblxcdFxcdG1pbi13aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHdpZHRoOiBhdXRvO1xcclxcblxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHR6LWluZGV4OiAtMTAwO1xcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcclxcblxcdFxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQodGW0YDQuNC5INGE0ZbQu9GM0YLRgFxcclxcbiVncmF5ZmlsdGVyIHtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdGZpbHRlcjogZ3JheXNjYWxlKDEpO1xcclxcblxcdEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdGZpbHRlcjogZ3JheXNjYWxlKDApO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0LrQsNGB0YPQstCw0YLQuCDQstC40LTRltC70LXQvdC90Y9cXHJcXG4lbm9zZWxlY3Qge1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4vLyDQlNC30LXRgNC60LDQu9GM0L3QtSDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y9cXHJcXG4lbWlycm9yIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXHJcXG59XFxyXFxuLy8g0J/Qu9Cw0LLQvdC40Lkg0YHQutGA0L7Qu9C7XFxyXFxuJXNtb290aHNjcm9sbCB7XFxyXFxuXFx0LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbn1cXHJcXG4vLyDQodGF0L7QstCw0YLQuCDRgdC60YDQvtC70LtcXHJcXG4laGlkZXNjcm9sbCB7XFxyXFxuXFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi8vINCX0LDQs9C+0LvQvtCy0LrQuCwg0LfQsNCz0LDQu9GM0L3RliDQkdCV0Jwg0LHQu9C+0LrQuCDRgtCwINGW0L3RiNC1Li4uXFxyXFxuXFxyXFxuLnBhZ2Uge1xcclxcblxcclxcblxcdFxcdC8vIC5wYWdlX19tYWluXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbWFpbiB7XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmJ0bntcXHJcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxOCwgMTMpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDM5LCAyNCk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIDM5LCAyNCk7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IHJlbSgxMSk7XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IHJlbSgxMSk7XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IG1hdGguZGl2KDI3ICwgMTgpO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxNSk7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDEwKTsgXFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4uYnV0dG9uLWJvcmRlcntcXHJcXG5cXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdGNvbG9yOiAjMDAyOTZEO1xcclxcblxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICMwMDI5NkQ7XFxyXFxuXFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ0QzZFOSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4zcyBlYXNlLCBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcblxcdFxcdGNvbG9yOiAjZmZmO1xcclxcblxcdH1cXHJcXG5cXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzY2NjY2NjtcXHJcXG5cXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogMTQwcHg7XFxyXFxuICAgICAgICAgcGFkZGluZzogcmVtKDkpIHJlbSgyNCk7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzY2NjY2NiA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMCU7XFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xcclxcblxcdFxcdH1cXHJcXG59XCIsXCIvL9Cf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGDXFxyXFxuQG1peGluIGZvbnQoJGZvbnRfbmFtZSwgJGZpbGVfbmFtZSwgJHdlaWdodCwgJHN0eWxlKSB7XFxyXFxuXFx0QGZvbnQtZmFjZSB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRmb250X25hbWU7XFxyXFxuXFx0XFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcclxcblxcdFxcdHNyYzogdXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAjeyR3ZWlnaHR9O1xcclxcblxcdFxcdGZvbnQtc3R5bGU6ICN7JHN0eWxlfTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vUGVyY2VudFxcclxcbkBmdW5jdGlvbiBwZXJjZW50KCRweCwgJGZyb20pIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRmcm9tKSAqIDEwMCU7XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL1JFTVxcclxcbkBmdW5jdGlvbiByZW0oJHB4KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAxNikgKyByZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL0VNXFxyXFxuQGZ1bmN0aW9uIGVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyBlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcblxcclxcbi8vQ3VycmVuY3lcXHJcXG5AbWl4aW4gY3VycmVuY3koJHN5bSkge1xcclxcblxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRjb250ZW50OiBcXFwiI3skc3ltfVxcXCI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyBHcmlkc1xcclxcbkBtaXhpbiBncmlkQ2FyZHMoJHR5cGU6IGZpdCwgJG1pbjogMjgwcHgsICRtYXg6IDFmciwgJGdhcDogMzBweCkge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z2FwOiAkZ2FwO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tI3skdHlwZX0sIG1pbm1heCgkbWluLCAkbWF4KSk7XFxyXFxufVxcclxcblxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QsCDQstC70LDRgdGC0LjQstGW0YHRgtGMIChjbGFtcClcXHJcXG5AbWl4aW4gYWRhcHRpdmVWYWx1ZSgkcHJvcGVydHksICRzdGFydFNpemUsICRtaW5TaXplLCAka2VlcFNpemU6IDAsICR3aWR0aEZyb206ICRjb250YWluZXJXaWR0aCwgJHdpZHRoVG86ICRtaW5XaWR0aCkge1xcclxcblxcdEBpZiAoJHN0YXJ0U2l6ZT09MCkge1xcclxcblxcdFxcdCRzdGFydFNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHRAaWYgKCRtaW5TaXplPT0wKSB7XFxyXFxuXFx0XFx0JG1pblNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQlNC70Y8gY2FsYygpO1xcclxcblxcdCRhZGRTaXplOiBtYXRoLmRpdigkc3RhcnRTaXplIC0gJG1pblNpemUsIDE2KTtcXHJcXG5cXHJcXG5cXHRAaWYgKCR3aWR0aEZyb20gPT0gJGNvbnRhaW5lcldpZHRoIGFuZCAkbWF4V2lkdGhDb250YWluZXIgPT0gMCkge1xcclxcblxcdFxcdCR3aWR0aEZyb206ICRtYXhXaWR0aDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0Lgg0LIgRU1cXHJcXG5cXHQkd2lkdGhGcm9tTWVkaWE6IGVtKCR3aWR0aEZyb20pO1xcclxcblxcdCR3aWR0aFRvTWVkaWE6IGVtKCR3aWR0aFRvKTtcXHJcXG5cXHJcXG5cXHQvLyDQpNC+0YDQvNGD0LvQsCDQv9C70LDQstCw0Y7Rh9C+0LPQviDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0Ly8g0JjRgdGC0L7Rh9C90LjQujogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9saW5lYXJseS1zY2FsZS1mb250LXNpemUtd2l0aC1jc3MtY2xhbXAtYmFzZWQtb24tdGhlLXZpZXdwb3J0L1xcclxcblxcdCRzbG9wZTogbWF0aC5kaXYoKCRzdGFydFNpemUgLSAkbWluU2l6ZSksICgkd2lkdGhGcm9tIC0gJHdpZHRoVG8pKTtcXHJcXG5cXHQkeUludGVyc2VjdGlvbjogLSR3aWR0aFRvICogJHNsb3BlICsgJG1pblNpemU7XFxyXFxuXFx0QGlmICgkeUludGVyc2VjdGlvbj09MCkge1xcclxcblxcdFxcdCR5SW50ZXJzZWN0aW9uOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0JGZseVZhbHVlOiAje3JlbSgkeUludGVyc2VjdGlvbil9XFxcIiArIFxcXCIgI3skc2xvcGUgKiAxMDB9dnc7XFxyXFxuXFxyXFxuXFx0Ly8g0J7RgtGA0LjQvNCw0L3QvdGPINC30L3QsNGH0LXQvdC90Y8g0LLQu9Cw0YHRgtC40LLQvtGB0YLRllxcclxcblxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkbWluU2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgcmVtKCRzdGFydFNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0Ly8g0K/QutGJ0L4g0L3QtdCz0LDRgtC40LLQvdGWINC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHRAaWYgKCRtaW5TaXplID4gJHN0YXJ0U2l6ZSkge1xcclxcblxcdFxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiByZW0oJG1pblNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQt9C90LDRh9C10L3QvdGPINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAzIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJHN0YXJ0U2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHQvLyDQkNC00LDQv9GC0YPRlNC80L4g0YDQvtC30LzRltGAINGDINC/0YDQvtC80ZbQttC60YMg0LzRltC2INC30LDQt9C90LDRh9C10L3QuNC80Lgg0YjQuNGA0LjQvdCw0LzQuCDQsifRjtC/0L7RgNGC0YNcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoVG9NZWRpYSkgYW5kIChtYXgtd2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdC8vINCv0LrRidC+INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L3QtSDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyBub3QgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IGNhbGMoI3tyZW0oJG1pblNpemUpfSArICN7JGFkZFNpemV9ICogKDEwMHZ3IC0gI3tyZW0oJHdpZHRoVG8pfSkgLyAje21hdGguZGl2KCR3aWR0aEZyb20sIDE2KSAtIG1hdGguZGl2KCR3aWR0aFRvLCAxNil9KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDIge1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkd2lkdGhUb01lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJG1pblNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmhlYWRlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHR6LWluZGV4OiAxMDA7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fY29udGFpbmVyXFxyXFxuXFx0XFx0Ji5faGVhZGVyLXNjcm9sbHtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IHJlbSg3MCk7XFxyXFxuXFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCZfX2NvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsMjAgLDMwICk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLDIwICwzMCApO1xcclxcblxcdFxcdFxcdGNvbHVtbi1nYXA6IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbG9nbyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRjb2x1bW4tZ2FwOiByZW0oMjApO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0ei1pbmRleDogMTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28taWNvblxcclxcblxcclxcblxcdFxcdCZfX2xvZ28taWNvbiB7XFxyXFxuXFx0XFx0XFx0aW1ne1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNTUsIDQwKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28tbmFtZVxcclxcblxcdFxcdFxcclxcblxcdFxcdCZfX2xvZ28tbmFtZSB7XFxyXFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiAyM3B4O1xcclxcblxcdFxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvLXRpdGxlXFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jl9fbG9nby10aXRsZSB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjQsIDE1KTtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogbWF0aC5kaXYoMzMgLCAyNCk7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oMTUpO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAxNSwgMTApO1xcclxcblxcdFxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28tc3VidGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX19sb2dvLXN1YnRpdGxlIHtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNiwgMTIpO1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyMiAsIDE2KTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX21lbnVcXHJcXG5cXHJcXG5cXHRcXHQmX19tZW51IHtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2FjdGlvbnNcXHJcXG5cXHJcXG5cXHRcXHQmX19hY3Rpb25zIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19idXR0b25cXHJcXG5cXHJcXG5cXHRcXHQmX19idXR0b24ge1xcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG5cXHRcXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRcXHQvLyAubWVudV9fYm9keVxcclxcblxcclxcblxcdFxcdCZfX2JvZHkge1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdFxcdFxcdGxlZnQ6IC0xMDAlO1xcclxcblxcdFxcdFxcdFxcdC8vIG1hcmdpbi10b3A6IHJlbSgxMDApO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmctdG9wOiByZW0oMTM4KTtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiByZW0oMTM4KSByZW0oMjApIHJlbSgzOCkgcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHRcXHRcXHRcXHQubWVudS1vcGVuICZ7XFxyXFxuXFx0XFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQmX19pY29uc3tcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0XFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXHJcXG5cXHRcXHRcXHRcXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJncmlkLWNvbHVtbi1nYXBcXFwiLDgwICw0MCApO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdyaWQtcm93LWdhcFxcXCIsNjAgLDQwICk7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCZfX2ljb257XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWVudV9fbGlzdFxcclxcblxcclxcblxcdFxcdCZfX2xpc3Qge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRmbGV4OiAwIDEgNTAlO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImNvbHVtbi1nYXBcXFwiLCA2MCwgMjApO1xcclxcblxcdFxcdFxcdHJvdy1nYXA6IHJlbSgxMCk7XFxyXFxuXFx0XFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGVuZDtcXHJcXG5cXHRcXHRcXHRcXHRyb3ctZ2FwOiByZW0oNjApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1lbnVfX2l0ZW1cXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1lbnVfX2xpbmtcXHJcXG5cXHJcXG5cXHRcXHQmX19saW5rIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBjdXJyZW50Q29sb3IgMCUsIGN1cnJlbnRDb2xvciAxMDAlKSBuby1yZXBlYXQ7XFxyXFxuICAgICAgXFx0YmFja2dyb3VuZC1zaXplOiAwIDJweDsgLyog0J3QsNGH0LDQu9GM0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyAqL1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xcclxcbiAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGVhc2U7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDsgLyog0JrQvtC90LXRh9C90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8g0L/RgNC4INC90LDQstC10LTQtdC90LjQuCAqL1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICAjMjk3N0Q1O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcbi5pY29uLW1lbnUge1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vL0J1cmdlclxcclxcblxcclxcbi5pY29uLW1lbnUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0d2lkdGg6IHJlbSgzMCk7XFxyXFxuXFx0XFx0aGVpZ2h0OiByZW0oMTgpO1xcclxcblxcdFxcdHotaW5kZXg6IDU7XFxyXFxuXFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IG5vbmUpIHtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4sXFxyXFxuXFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdGhlaWdodDogcmVtKDMpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0Ym90dG9tOiAwO1xcclxcblxcdFxcdFxcdHdpZHRoOiA3NSU7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdHRvcDogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcblxcdFxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC5tZW51LW9wZW4gJiB7XFxyXFxuXFx0XFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZSxcXHJcXG5cXHRcXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiBjYWxjKDQ1JSAtIHJlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdFxcdGJvdHRvbTogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZm9vdGVyIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHQmX19tYXB7XFxyXFxuXFx0XFx0ei1pbmRleDogMTtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNTc1LCAzOTMpO1xcclxcblxcdH1cXHJcXG5cXHQvLyAuZm9vdGVyX190ZXh0XFxyXFxuXFx0XFxyXFxuXFx0Jl9fdGV4dCB7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDEzLCA3KTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDEzLCA3KTtcXHJcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0Zm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTIpO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxpbmUtaGVpZ2h0XFxcIiwgMjQsIDE1KTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjRkZGOUZEO1xcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogcmVtKDU3KTtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oNTcpO1xcclxcblxcdFxcdC8vIC5tYWluX19jb250YWluZXJcXHJcXG5cXHJcXG5cXHRcXHQmX19jb250YWluZXIge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0Y29sdW1uLWdhcDogcmVtKDMwKTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX2NvbnRlbnRcXHJcXG5cXHJcXG5cXHRcXHQmX19jb250ZW50IHtcXHJcXG5cXHRcXHRcXHRmbGV4OiAwIDEgMzAlO1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJyb3ctZ2FwXFxcIiwgNjAsIDIwKTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRvcmRlcjogMTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tYWluX19zdWJ0aXRsZVxcclxcblxcclxcblxcdFxcdCZfX3N1YnRpdGxlIHtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1haW5fX3RpdGxlXFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGl0bGUge1xcclxcblxcdFxcdFxcdHNwYW57XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICMyOTc3RDU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWFpbl9fdGV4dFxcclxcblxcclxcblxcdFxcdCZfX3RleHQge1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWFpbl9fYmF0dG9uc1xcclxcblxcclxcblxcdFxcdCZfX2JhdHRvbnMge1xcclxcblxcdFxcdFxcdC8vIGZsZXg6IDAgMSAxMDAlO1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWFpbl9fYnV0dG9uLWJsdWVcXHJcXG5cXHJcXG5cXHRcXHQmX19idXR0b24tYmx1ZSB7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzAwMjk2RDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogcmVtKDI3KTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiM0NEM2RTk7XFxyXFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogLTJweCA3cHggMHB4IDBweCAjMjk3N0Q1O1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0XFx0XFx0JjphY3RpdmV7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDdweCk7XFxyXFxuXFx0XFx0XFx0XFx0Ym94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMyOTc3RDU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdGJveC1zaGFkb3c6IC0ycHggM3B4IDBweCAwcHggIzI5NzdENTtcXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tYWluX19idXR0b24tY2xlYXJcXHJcXG5cXHJcXG5cXHRcXHQmX19idXR0b24tY2xlYXIge1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE2LCAxMik7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogcmVtKDI0KTtcXHJcXG5cXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG5cXHRcXHRcXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzY2NjY2NjtcXHJcXG5cXHRcXHRcXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpe1xcclxcblxcdFxcdFxcdFxcdCY6aG92ZXJ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ly8gYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdGNvbG9yOiAjMzYzNDM0O1xcclxcblxcdFxcdFxcdFxcdFxcdC8vIGZvbnQtc2l6ZTogcmVtKDE3KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHQvLyBib3JkZXI6IDFweCBzb2xpZCAjMzYzNDM0O1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcXHJcXG5cXHRcXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWFpbl9faW1hZ2VcXHJcXG5cXHJcXG5cXHRcXHQmX19pbWFnZSB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogcmVtKC0yMCk7XFxyXFxuXFx0XFx0XFx0b3JkZXI6IDA7XFxyXFxuXFx0XFx0XFx0ZmxleDogMCAxIGF1dG87XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsMTUwICwwICk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsMTUwICw1MCApO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsMCAsNTAgKTtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwwICw1MCApO1xcclxcblxcdFxcdFxcdFxcdG9yZGVyOiAwO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSg2MCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdC8vIHBhZGRpbmctbGVmdDogcmVtKDE1MCk7XFxyXFxuXFx0XFx0XFx0Ly8gcGFkZGluZy1yaWdodDogcmVtKDE1MCk7XFxyXFxuXFx0XFx0XFx0aW1ne1xcclxcblxcdFxcdFxcdFxcdC8vIG1hcmdpbi1yaWdodDogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gd2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcclxcblxcdFxcdFxcdFxcdHotaW5kZXg6IDI7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gd2lkdGg6IGNsYW1wKDI5N3B4LCA1MHZ3LCA1OTVweCk7XFxyXFxuICAgICAgICAgICAgLy8gYXNwZWN0LXJhdGlvOiA1OTUgLyA4OTM7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IGNsYW1wKDI5N3B4LCA0MHZ3LCA1OTVweCk7XFxyXFxuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiA1OTUgLyA4OTM7XFxyXFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZXtcXHJcXG5cXHRcXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0bGVmdDogNTAlO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiBjbGFtcCg1MzVweCwgNTB2dywgODkzcHgpO1xcclxcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZDogIzAwMjk2RDtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDIxMiwgMjI4LCAyNDQsIDEpIDE1JSwgcmdiYSg2OCwgMTk4LCAyMzMsIDEpIDQ1JSwgcmdiYSg0MSwgMTE5LCAyMTMsIDEpIDcwJSwgcmdiYSgwLCA0MSwgMTA5LCAxKSAxMDAlKTtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHRcXHRcXHRcXHR6LWluZGV4OiAxO1xcclxcblxcdFxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC01NSUpO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4uc3VidGl0bGUge1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTMpO1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxpbmUtaGVpZ2h0XFxcIiwgMzAsIDIwKTtcXHJcXG5cXHRcXHRcXHQvLyBmb250LXNpemU6IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0Ly8gbGluZS1oZWlnaHQ6IG1hdGguZGl2KDMwICwgMjApO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMyOTc3RDU7XFxyXFxufVxcclxcbi50aXRsZXtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCA2NCwgMzIpO1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxpbmUtaGVpZ2h0XFxcIiwgOTYsIDQ4KTtcXHJcXG59XFxyXFxuLnRleHQge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiU291cmNlIFNhbnMgM1xcXCI7XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDEzKTtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsaW5lLWhlaWdodFxcXCIsIDI4LCAxOSk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRjb2xvcjogIzI1MjUyNTtcXHJcXG5cXHRwYWRkaW5nOiByZW0oMCkgcmVtKDUpIHJlbSgwKSByZW0oMCk7XFxyXFxufVxcclxcbi5idXR0b24tYm9yZGVyIHtcXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZkOGFkZWIxZDRkYjMyMmQ0MTAyXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9