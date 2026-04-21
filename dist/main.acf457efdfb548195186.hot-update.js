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
  }
}

.header {
  background-color: #FFF9FD;
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
  @supports (padding-top: clamp( 1.25rem , 1.7582107843rem  +  -0.5098039216vw , 1.65625rem )) {
    .header__container {
      padding-top: clamp( 1.25rem , 1.7582107843rem  +  -0.5098039216vw , 1.65625rem );
    }
  }
  @supports not (padding-top: clamp( 1.25rem , 1.7582107843rem  +  -0.5098039216vw , 1.65625rem )) {
    .header__container {
      padding-top: calc(1.65625rem + -0.40625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .header__container {
    padding-top: 1.65625rem;
  }
}
@media (min-width: 99.6875em) {
  .header__container {
    padding-bottom: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 99.6875em) {
  @supports (padding-bottom: clamp( 1.25rem , 1.7582107843rem  +  -0.5098039216vw , 1.65625rem )) {
    .header__container {
      padding-bottom: clamp( 1.25rem , 1.7582107843rem  +  -0.5098039216vw , 1.65625rem );
    }
  }
  @supports not (padding-bottom: clamp( 1.25rem , 1.7582107843rem  +  -0.5098039216vw , 1.65625rem )) {
    .header__container {
      padding-bottom: calc(1.65625rem + -0.40625 * (100vw - 20rem) / 79.6875);
    }
  }
}
@media (max-width: 20em) {
  .header__container {
    padding-bottom: 1.65625rem;
  }
}
.header__container {
  column-gap: 1.25rem;
}
@media (max-width: 47.99875em) {
  .header__container {
    justify-content: space-between;
  }
}
.header__container {
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
    height: 100%;
    top: 50;
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
@media (max-width: 47.99875em) {
  .header__actions {
    order: 2;
  }
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
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/common.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/header.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n//@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n//&display=swap Добавить при подключении через плагин@import url(https://fonts.googleapis.com/css?family=Shippori+Mincho:regular,500,600,700,800);\r\n// &subset=cyrillic-ext\r\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+3:300,regular&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,300,regular,500,600&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Raleway:300,regular,500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:regular,600&display=swap\");\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Poppins\";\r\n$fontSize: rem(20); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #000; // Колір шрифту за замовчуванням\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1920;\r\n// $maxWidth: 1728;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1565;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: rem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: rem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","// Заголовки, загальні БЕМ блоки та інше...\r\n.button-border{\r\n\t\twhite-space: nowrap;\r\n\t\tfont-size: rem(18);\r\n\t\ttext-align: center;\r\n\t\t@include adaptiveValue(\"font-size\", 18, 13);\r\n\t\t@include adaptiveValue(\"padding-left\", 39, 24);\r\n\t\t@include adaptiveValue(\"padding-right\", 39, 24);\r\n\t\tpadding-top: rem(12);\r\n\t\tpadding-bottom: rem(12);\r\n\t\tline-height: math.div(27 , 18);\r\n\t\tfont-weight: 300;\r\n\t\tcolor: #00296D;\r\n\t\tborder: 1px solid #00296D;\r\n\t\tborder-radius: rem(15);\r\n\t\t// padding: rem(12) rem(39);\r\n\t\tbackground: linear-gradient(to bottom, #44C6E9 50%, transparent 50%);\r\n      background-size: 100% 200%;\r\n      background-position: 0 100%;\r\n      transition: background-position 0.3s ease, color 0.3s ease;&:hover {\r\n      background-position: 0 0;\r\n      color: #fff;\r\n      }\r\n      @media (max-width:$mobile){\r\n\t\t\tborder-radius: rem(10);\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: 1px solid #666666;\r\n\t\t\tmax-width: 140px;\r\n         padding: rem(9) rem(24);\r\n\t\t}\r\n}","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n\t\tbackground-color: #FFF9FD;\r\n\t\t// .header__container\r\n\r\n\t\t&__container {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\t@include adaptiveValue(\"padding-top\",20 ,26.5 );\r\n\t\t\t@include adaptiveValue(\"padding-bottom\",20 ,26.5 );\r\n\t\t\t// padding-top: rem(20);\r\n\t\t\t// padding-bottom: rem(20);\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t//   padding-top: rem(26.5);\r\n\t\t\t\t//   padding-bottom: rem(26.5);\r\n\t\t\t}\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\r\n\t\t// .header__logo\r\n\r\n\t\t&__logo {\r\n\t\t\tdisplay: flex;\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t// align-items: start;\r\n\t\t\t\t// order: 0;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-icon\r\n\r\n\t\t&__logo-icon {\r\n\t\t\timg{\r\n\t\t\t\t@include adaptiveValue(\"width\", 55, 40);\r\n\r\n\t\t\t}\r\n\t\t\t\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-name\r\n\t\t\r\n\t\t&__logo-name {\r\n\t\t\ttext-align: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\ttop: 50;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\t// order: 1;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-title\r\n\t\t\r\n\t\t&__logo-title {\r\n\t\t\t// font-size: rem(24);\r\n\t\t\t@include adaptiveValue(\"font-size\", 24, 15);\r\n\t\t\tline-height: math.div(33 , 24);\r\n\t\t\tfont-weight: 600;\r\n\t\t\tmargin-bottom: rem(15);\r\n\t\t\t@include adaptiveValue(\"margin-bottom\", 15, 10);\r\n\t\t\twhite-space: nowrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\t// margin-bottom: rem(15);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-subtitle\r\n\r\n\t\t&__logo-subtitle {\r\n\t\t\t// font-size: rem(16);\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tline-height: math.div(22 , 16);\r\n\t\t\tfont-weight: 400;\r\n\t\t\twhite-space: nowrap;\r\n\t\t}\r\n\r\n\r\n\r\n\t\t// .header__menu\r\n\r\n\t\t&__menu {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__actions\r\n\r\n\t\t&__actions {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\torder: 2;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__button\r\n\r\n\t\t&__button {\r\n\t\t\tgrid-column-start: 1;\r\n         grid-column-end: 3;\r\n\t\t}\r\n}\r\n.menu {\r\n\t\tflex: 0 1 auto;\r\n\t\t// .menu__body\r\n\r\n\t\t&__body {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: -100%;\r\n\t\t\t\tmargin-top: rem(100);\r\n\t\t\t\tpadding: rem(38) rem(20);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t// flex-direction: column;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t// min-height: rem(300);\r\n\t\t\t\tbackground-color: #FFF9FD;\r\n\t\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t\t\t.menu-open &{\r\n\t\t\t\tleft: 0;\r\n\t\t\t}\r\n\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t&__icons{\r\n\t\t\tdisplay: none;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tgrid-template-rows: repeat(3, 1fr);\r\n\t\t\t\tgrid-template-columns: repeat(2, auto);\r\n\t\t\t\t// display: flex;\r\n\t\t\t\t// flex-wrap: wrap;\r\n\t\t\t\tflex: 0 1 auto;\r\n\t\t\t\t// width: rem(140);\r\n\t\t\t\t@include adaptiveValue(\"grid-column-gap\",80 ,40 );\r\n\t\t\t\t@include adaptiveValue(\"grid-row-gap\",60 ,40 );\r\n\t\t\t\t// grid-column-gap: rem(40);\r\n\t\t\t\t// grid-row-gap: rem(40);\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__icon{\r\n\t\t\tdisplay: grid;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\r\n\t\t// .menu__list\r\n\r\n\t\t&__list {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tflex: 0 1 50%;\r\n\t\t\t// column-gap: rem(60);\r\n\t\t\t@include adaptiveValue(\"column-gap\", 60, 20);\r\n\t\t\trow-gap: rem(10);\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: end;\r\n\t\t\t\trow-gap: rem(60);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .menu__item\r\n\r\n\t\t&__item {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .menu__link\r\n\r\n\t\t&__link {\r\n\t\t\tfont-size: rem(16);\r\n\t\t\tbackground: linear-gradient(to right, currentColor 0%, currentColor 100%) no-repeat;\r\n      \tbackground-size: 0 2px; /* Начальная ширина подчеркивания */\r\n         background-position: left bottom;\r\n         transition: background-size 0.3s ease;\r\n\t\t\t@media (any-hover: hover) {\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tbackground-size: 100% 2px; /* Конечная ширина подчеркивания при наведении */\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tcolor:  #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n}\r\n.icon-menu {\r\n}\r\n\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n\tdisplay: none;\r\n\t@media (max-width: $mobile) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: rem(30);\r\n\t\theight: rem(18);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tleft: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: rem(3);\r\n\t\t\tbackground-color: #00296D;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 75%;\r\n\t\t\t\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - rem(1));\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(45% - rem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - rem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("55b28c8b2becb3009bff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hY2Y0NTdlZmRmYjU0ODE5NTE4Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSUFBc0k7QUFDdEksNElBQTRJO0FBQzVJLG9JQUFvSTtBQUNwSSwySEFBMkg7QUFDM0gscUhBQXFIO0FBQ3JILGtJQUFrSTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sa1JBQWtSLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxTQUFTLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFlBQVksVUFBVSxNQUFNLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxN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QUFvQix1Q0FBdUMscUNBQXFDLHdCQUF3QixXQUFXLFNBQVMsT0FBTyxLQUFLLDJCQUEyQjtBQUNybjRCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQzVtQnZDLHNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucyszOjMwMCxyZWd1bGFyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoxMDAsMzAwLHJlZ3VsYXIsNTAwLDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLHJlZ3VsYXIsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczpyZWd1bGFyLDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLmxvY2sgYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcbn1cbi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBzdXBwb3J0cyAob3ZlcmZsb3c6IGNsaXApIHtcbiAgLndyYXBwZXIge1xuICAgIG92ZXJmbG93OiBjbGlwO1xuICB9XG59XG4ud3JhcHBlciA+IG1haW4ge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi53cmFwcGVyID4gKiB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLypcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxu0LLRgdGW0YUg0LrQu9Cw0YHRltCyLCDRidC+INC80ZbRgdGC0Y/RgtGMICpfX2NvbnRhaW5lclxu0J3QsNC/0YDQuNC60LvQsNC0IGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0ZYg0YIu0L8uXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxuKi9cbltjbGFzcyo9X19jb250YWluZXJdIHtcbiAgbWF4LXdpZHRoOiA5OS42ODc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjkzNzVyZW07XG59XG5cbltjbGFzcyo9LWliZ10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5bY2xhc3MqPS1pYmddIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuW2NsYXNzKj0taWJnX2NvbnRhaW5dIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5idXR0b24tYm9yZGVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzM0MDY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAxLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjgxMjVyZW0gKyAwLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idXR0b24tYm9yZGVyIHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ1dHRvbi1ib3JkZXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnV0dG9uLWJvcmRlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmJ1dHRvbi1ib3JkZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ1dHRvbi1ib3JkZXIge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMS41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICB9XG59XG4uYnV0dG9uLWJvcmRlciB7XG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDI5NkQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDI5NkQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuOTM3NXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ0QzZFOSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4zcyBlYXNlLCBjb2xvciAwLjNzIGVhc2U7XG59XG4uYnV0dG9uLWJvcmRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICAgIHBhZGRpbmc6IDAuNTYyNXJlbSAxLjVyZW07XG4gIH1cbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XG59XG4uaGVhZGVyX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMS43NTgyMTA3ODQzcmVtICArICAtMC41MDk4MDM5MjE2dncgLCAxLjY1NjI1cmVtICkpIHtcbiAgICAuaGVhZGVyX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMS43NTgyMTA3ODQzcmVtICArICAtMC41MDk4MDM5MjE2dncgLCAxLjY1NjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDEuNzU4MjEwNzg0M3JlbSAgKyAgLTAuNTA5ODAzOTIxNnZ3ICwgMS42NTYyNXJlbSApKSB7XG4gICAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDEuNjU2MjVyZW0gKyAtMC40MDYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMS42NTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDEuNzU4MjEwNzg0M3JlbSAgKyAgLTAuNTA5ODAzOTIxNnZ3ICwgMS42NTYyNXJlbSApKSB7XG4gICAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDEuNzU4MjEwNzg0M3JlbSAgKyAgLTAuNTA5ODAzOTIxNnZ3ICwgMS42NTYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAxLjc1ODIxMDc4NDNyZW0gICsgIC0wLjUwOTgwMzkyMTZ2dyAsIDEuNjU2MjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxLjY1NjI1cmVtICsgLTAuNDA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNjU2MjVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2NvbnRhaW5lciB7XG4gIGNvbHVtbi1nYXA6IDEuMjVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaGVhZGVyX19jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlcl9fbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgIHdpZHRoOiAzLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAyLjVyZW0gLCAyLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMy40Mzc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLWljb24gaW1nIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMi41cmVtICwgMi4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDMuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDIuNXJlbSAsIDIuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAzLjQzNzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgICAgd2lkdGg6IGNhbGMoMi41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLWljb24gaW1nIHtcbiAgICB3aWR0aDogMi41cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLW5hbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiA1MDtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjkzNzVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjU0NjU2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTQ2NTY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAwLjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC41NDY1Njg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuNjI1cmVtICsgMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC43NXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5oZWFkZXJfX2FjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmhlYWRlcl9fYWN0aW9ucyB7XG4gICAgb3JkZXI6IDI7XG4gIH1cbn1cbi5oZWFkZXJfX2J1dHRvbiB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG59XG5cbi5tZW51IHtcbiAgZmxleDogMCAxIGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgbWFyZ2luLXRvcDogNi4yNXJlbTtcbiAgICBwYWRkaW5nOiAyLjM3NXJlbSAxLjI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB9XG4gIC5tZW51LW9wZW4gLm1lbnVfX2JvZHkge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbi5tZW51X19pY29ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtY29sdW1uLWdhcDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ3JpZC1jb2x1bW4tZ2FwOiBjbGFtcCggMi41cmVtICwgMS44NzI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgNXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogY2xhbXAoIDIuNXJlbSAsIDEuODcyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ3JpZC1jb2x1bW4tZ2FwOiBjbGFtcCggMi41cmVtICwgMS44NzI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgNXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogY2FsYygyLjVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtY29sdW1uLWdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtcm93LWdhcDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ3JpZC1yb3ctZ2FwOiBjbGFtcCggMi41cmVtICwgMi4xODYyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtcm93LWdhcDogY2xhbXAoIDIuNXJlbSAsIDIuMTg2Mjc0NTA5OHJlbSAgKyAgMS41Njg2Mjc0NTF2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ3JpZC1yb3ctZ2FwOiBjbGFtcCggMi41cmVtICwgMi4xODYyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2ljb25zIHtcbiAgICAgIGdyaWQtcm93LWdhcDogY2FsYygyLjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2ljb25zIHtcbiAgICBncmlkLXJvdy1nYXA6IDIuNXJlbTtcbiAgfVxufVxuLm1lbnVfX2ljb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tZW51X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMSA1MCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBjb2x1bW4tZ2FwOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGNvbHVtbi1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC42MjI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgY29sdW1uLWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGNvbHVtbi1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC42MjI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgY29sdW1uLWdhcDogY2FsYygxLjI1cmVtICsgMi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgfVxufVxuLm1lbnVfX2xpc3Qge1xuICByb3ctZ2FwOiAwLjYyNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICByb3ctZ2FwOiAzLjc1cmVtO1xuICB9XG59XG4ubWVudV9fbGluayB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBjdXJyZW50Q29sb3IgMCUsIGN1cnJlbnRDb2xvciAxMDAlKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMCAycHg7IC8qINCd0LDRh9Cw0LvRjNC90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8gKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGVhc2U7XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLm1lbnVfX2xpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7IC8qINCa0L7QvdC10YfQvdCw0Y8g0YjQuNGA0LjQvdCwINC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNGPINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIGNvbG9yOiAjMjk3N0Q1O1xuICB9XG59XG5cbi5pY29uLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmljb24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgICBoZWlnaHQ6IDEuMTI1cmVtO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKGFueS1ob3Zlcjogbm9uZSkge1xuICAuaWNvbi1tZW51IHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5pY29uLW1lbnUgc3BhbiwgLmljb24tbWVudTo6YmVmb3JlLCAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMC4xODc1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDI5NkQ7XG4gIH1cbiAgLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogY2FsYyg0NSUgLSAwLjA2MjVyZW0pO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL251bGwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvaGVhZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0MsWUFBQTtFQUNBLFdB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S0U7RUN6RkE7SUQwRkMsMEJBQUE7RUppTEQ7QUFDRjtBSzVRRTtFQVFDLG1CQUFBO0FMdVFIO0FLdFFHO0VBVEQ7SUFVRSw4QkFBQTtFTHlRRjtBQUNGO0FLcFJFO0VBY0Msa0JBQUE7QUx5UUg7QUtwUUU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBTHNRSDtBSW5ORTtFQ3pDQztJRDBDQSxnQkFBQTtFSnNORDtBQUNGO0FJbk5DO0VBRUM7SUNoREM7TURpREEsdUVBaEJjO0lKcU9iO0VBQ0Y7RUluTkE7SUNwREM7TURxREEsd0RBQUE7SUpzTkM7RUFDRjtBQUNGO0FJcE5FO0VDekRDO0lEMERBLGFBQUE7RUp1TkQ7QUFDRjtBS3pRRTtFQUNDLGtCQUFBO0FMMlFIO0FLMVFHO0VBRkQ7SUFHRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsT0FBQTtJQUNBLE9BQUE7RUw2UUY7QUFDRjtBSXJQRTtFQ2xCQTtJRG1CQyxpQkFBQTtFSndQRDtBQUNGO0FJclBDO0VBRUM7SUN6QkE7TUQwQkMsMkVBaEJjO0lKdVFiO0VBQ0Y7RUlyUEE7SUM3QkE7TUQ4QkMsK0RBQUE7SUp3UEM7RUFDRjtBQUNGO0FJdFBFO0VDbENBO0lEbUNDLG9CQUFBO0VKeVBEO0FBQ0Y7QUs3UkU7RUFHQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUw2Ukg7QUloUkU7RUNsQkE7SURtQkMsd0JBQUE7RUptUkQ7QUFDRjtBSWhSQztFQUVDO0lDekJBO01EMEJDLGlGQWhCYztJSmtTYjtFQUNGO0VJaFJBO0lDN0JBO01EOEJDLGtFQUFBO0lKbVJDO0VBQ0Y7QUFDRjtBSWpSRTtFQ2xDQTtJRG1DQyx1QkFBQTtFSm9SRDtBQUNGO0FLeFRFO0VBT0MsbUJBQUE7QUxvVEg7QUtuVEc7RUFSRDtJQVNFLGdCQUFBO0VMc1RGO0FBQ0Y7QUk5U0U7RUNGQTtJREdDLGVBQUE7RUppVEQ7QUFDRjtBSTlTQztFQUVDO0lDVEE7TURVQyxzRUFoQmM7SUpnVWI7RUFDRjtFSTlTQTtJQ2JBO01EY0MsMkRBQUE7SUppVEM7RUFDRjtBQUNGO0FJL1NFO0VDbEJBO0lEbUJDLGtCQUFBO0VKa1REO0FBQ0Y7QUt0VUU7RUFHQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUxzVUg7QUt4VEU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUwwVEg7QUt6VEc7RUFIRDtJQUlFLFFBQUE7RUw0VEY7QUFDRjtBS3ZURTtFQUNDLG9CQUFBO0VBQ00sa0JBQUE7QUx5VFQ7O0FLdFRBO0VBQ0UsY0FBQTtBTHlURjtBS3JURztFQUREO0lBRUUsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsYUFBQTtJQUVBLG1CQUFBO0lBQ0EsOEJBQUE7SUFFQSx5QkFBQTtJQUNBLDRCQUFBO0VMc1RGO0VLclRHO0lBQ0QsT0FBQTtFTHVURjtBQUNGO0FLbFRFO0VBQ0MsYUFBQTtBTG9USDtBS25URztFQUZEO0lBR0UsYUFBQTtJQUNBLGtDQUFBO0lBQ0Esc0NBQUE7SUFHQSxjQUFBO0lBTUEsdUJBQUE7SUFDQSxtQkFBQTtFTCtTRjtBQUNGO0FJMVhFO0VDMkRBO0lEMURDLHFCQUFBO0VKNlhEO0FBQ0Y7QUkxWEM7RUFFQztJQ29EQTtNRG5EQywyRUFoQmM7SUo0WWI7RUFDRjtFSTFYQTtJQ2dEQTtNRC9DQywrREFBQTtJSjZYQztFQUNGO0FBQ0Y7QUkzWEU7RUMyQ0E7SUQxQ0MsdUJBQUE7RUo4WEQ7QUFDRjtBSWhaRTtFQzJEQTtJRDFEQyxxQkFBQTtFSm1aRDtBQUNGO0FJaFpDO0VBRUM7SUNvREE7TURuREMsMkVBaEJjO0lKa2FiO0VBQ0Y7RUloWkE7SUNnREE7TUQvQ0MsNkRBQUE7SUptWkM7RUFDRjtBQUNGO0FJalpFO0VDMkNBO0lEMUNDLG9CQUFBO0VKb1pEO0FBQ0Y7QUt6VkU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBTDJWSDtBS3RWRTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBTHdWSDtBSWpiRTtFQ3FGQTtJRHBGQyxtQkFBQTtFSm9iRDtBQUNGO0FJamJDO0VBRUM7SUM4RUE7TUQ3RUMsMEVBaEJjO0lKbWNiO0VBQ0Y7RUlqYkE7SUMwRUE7TUR6RUMsMkRBQUE7SUpvYkM7RUFDRjtBQUNGO0FJbGJFO0VDcUVBO0lEcEVDLG1CQUFBO0VKcWJEO0FBQ0Y7QUtsWEU7RUFPQyxpQkFBQTtFQUNBLGVBQUE7QUw4V0g7QUs3V0c7RUFURDtJQVVFLHNCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFTGdYRjtBQUNGO0FLcldFO0VBQ0MsZUFBQTtFQUNBLG1GQUFBO0VBQ0ksc0JBQUEsRUFBQSxtQ0FBQTtFQUNFLGdDQUFBO0VBQ0EscUNBQUE7QUx1V1Q7QUt0V0c7RUFDQztJQUNDLHlCQUFBLEVBQUEsZ0RBQUE7RUx3V0g7QUFDRjtBS3RXRztFQVhEO0lBWUUsY0FBQTtFTHlXRjtBQUNGOztBSzlWQTtFQUNDLGFBQUE7QUxpV0Q7QUtoV0M7RUFGRDtJQUdFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7RUxtV0E7QUFDRjtBS25XRTtFQVJGO0lBU0csZUFBQTtFTHNXRDtBQUNGO0FLOVdDO0VBU0M7SUFHQyxXQUFBO0lBQ0EsNEJBQUE7SUFDQSxPQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtFTHNXRDtFS3BXQTtJQUNDLE1BQUE7RUxzV0Q7RUtwV0E7SUFDQyxTQUFBO0lBQ0EsVUFBQTtFTHNXRDtFS25XQTtJQUNDLDBCQUFBO0lBQ0EsVUFBQTtFTHFXRDtFS2xXQztJQUNDLFFBQUE7RUxvV0Y7RUs5VkM7SUFDQywwQkFBQTtJQUNBLHlCQUFBO0VMZ1dGO0VLOVZDO0lBQ0MsNkJBQUE7SUFDQSx3QkFBQTtJQUNBLFdBQUE7RUxnV0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LzRltC60YHQuNC90ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyZkaXNwbGF5PXN3YXAgLSDQtNC+0LTQsNGC0Lgg0L/RgNC4INC/0ZbQtNC60LvRjtGH0LXQvdC90ZYg0YfQtdGA0LXQtyDQv9C70LDQs9GW0L1cXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0LvQvtC60LDQu9GM0L3RliDRhNCw0LnQu9C4INGI0YDQuNGE0YLRltCyXFxyXFxuLy9AaW1wb3J0IFxcXCJmb250cy9mb250c1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRltC60L7QvdC60L7QstC40YUg0YjRgNC40YTRgtGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J/RltC00LrQu9GO0YfQuNGC0LgsINGP0LrRidC+INGUINGE0LDQudC7INGW0LrQvtC90LrQvtCy0L7Qs9C+INGI0YDQuNGE0YLRg1xcclxcbi8vQGltcG9ydCBcXFwiZm9udHMvaWNvbnNcXFwiO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINGI0LDQsdC70L7QvdGDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyZkaXNwbGF5PXN3YXAg0JTQvtCx0LDQstC40YLRjCDQv9GA0Lgg0L/QvtC00LrQu9GO0YfQtdC90LjQuCDRh9C10YDQtdC3INC/0LvQsNCz0LjQvUBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86cmVndWxhciw1MDAsNjAwLDcwMCw4MDApO1xcclxcbi8vICZzdWJzZXQ9Y3lyaWxsaWMtZXh0XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucyszOjMwMCxyZWd1bGFyJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoxMDAsMzAwLHJlZ3VsYXIsNTAwLDYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLHJlZ3VsYXIsNTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczpyZWd1bGFyLDYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG4vLyDQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INGI0YDQuNGE0YIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuJGZvbnRGYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4kZm9udFNpemU6IHJlbSgyMCk7IC8vINC00LUgMTQocHgpIC0g0YDQvtC30LzRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INC3INC80LDQutC10YLRg1xcclxcblxcclxcbi8vINCe0YHQvdC+0LLQvdGWINC60L7Qu9GM0L7RgNC4XFxyXFxuJG1haW5Db2xvcjogIzAwMDsgLy8g0JrQvtC70ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxcclxcblxcclxcbi8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDQsNC00LDQv9GC0LjQstC90L7RlyDRgdGW0YLQutC4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0JzRltC90ZbQvNCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0YLQvtGA0ZbQvdC60LhcXHJcXG4kbWluV2lkdGg6IDMyMDtcXHJcXG4vLyDQqNC40YDQuNC90LAg0L/QvtC70L7RgtC90LAgKNC80LDQutC10YLRgylcXHJcXG4kbWF4V2lkdGg6IDE5MjA7XFxyXFxuLy8gJG1heFdpZHRoOiAxNzI4O1xcclxcbi8vINCo0LjRgNC40L3QsCDQvtCx0LzQtdC20YPRjtGH0L7Qs9C+INC60L7QvdGC0LXQudC90LXRgNCwICgwID0g0L3QtdC80LDRlCDQvtCx0LzQtdC20LXQvdC90Y8pXFxyXFxuJG1heFdpZHRoQ29udGFpbmVyOiAxNTY1O1xcclxcbi8vINCX0LDQs9Cw0LvRjNC90LjQuSDQstGW0LTRgdGC0YPQvyDRgyDQutC+0L3RgtC10LnQvdC10YDQsFxcclxcbi8vICgzMCA9INC/0L4gMTVweCDQu9GW0LLQvtGA0YPRhyDRliDQv9GA0LDQstC+0YDRg9GHLCAwID0g0L3QtdC80LDRlCDQstGW0LTRgdGC0YPQv9GDKVxcclxcbiRjb250YWluZXJQYWRkaW5nOiAzMDtcXHJcXG5cXHJcXG4vLyDQqNC40YDQuNC90LAg0YHQv9GA0LDRhtGM0L7QstGD0LLQsNC90L3RjyDQv9C10YDRiNC+0LPQviDQsdGA0LXQudC60L/QvtGW0L3RgtGDXFxyXFxuJGNvbnRhaW5lcldpZHRoOiAkbWF4V2lkdGhDb250YWluZXIgKyAkY29udGFpbmVyUGFkZGluZztcXHJcXG5cXHJcXG4vLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQuFxcclxcbiRwYzogZW0oJGNvbnRhaW5lcldpZHRoKTsgLy8g0J/Qmiwg0L3QvtGD0YLQsdGD0LrQuCwg0LTQtdGP0LrRliDQv9C70LDQvdGI0LXRgtC4INGDINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LzRgyDQv9C+0LvQvtC20LXQvdC90ZZcXHJcXG4kdGFibGV0OiBlbSg5OTEuOTgpOyAvLyDQn9C70LDQvdGI0LXRgtC4LCDQtNC10Y/QutGWINGC0LXQu9C10YTQvtC90Lgg0LIg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiRtb2JpbGU6IGVtKDc2Ny45OCk7IC8vINCi0LXQu9C10YTQvtC90LggTFxcclxcbiRtb2JpbGVTbWFsbDogZW0oNDc5Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBTXFxyXFxuXFxyXFxuLy8g0KLQuNC/INCw0LTQsNC/0YLQuNCy0LA6XFxyXFxuLy8gMSA9INGH0YPQudC90ZbRgdGC0YwgKNGDINC60L7QvdGC0LXQudC90LXRgNCwINC90LXQvNCw0ZQg0LHRgNC10LnQutC/0L7RltC90YLRltCyKSxcXHJcXG4vLyAyID0g0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIgKNC60L7QvdGC0LXQudC90LXRgCDQt9C80ZbQvdGO0ZQg0YHQstC+0Y4g0YjQuNGA0LjQvdGDINC/0L4g0LHRgNC10LnQui3Qv9C+0ZfQvdGCKVxcclxcbiRyZXNwb25zaXZlVHlwZTogMTtcXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0J7QsdC90YPQu9C10L3QvdGPID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL251bGxcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQtdCz0LAgQk9EWSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdC8vINCh0LrRgNC+0LvQuyDQt9Cw0LHQu9C+0LrQvtCy0LDQvdC+XFxyXFxuXFx0LmxvY2sgJiB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRcXHR0b3VjaC1hY3Rpb246IG5vbmU7XFxyXFxuXFx0XFx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KHQsNC50YIg0LfQsNCy0LDQvdGC0LDQttC10L3QuNC5XFxyXFxuXFx0LmxvYWRlZCAmIHtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCe0LHQvtC70L7QvdC60LAgd3JhcHBlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi53cmFwcGVyIHtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdEBzdXBwb3J0cyAob3ZlcmZsb3c6IGNsaXApIHtcXHJcXG5cXHRcXHRvdmVyZmxvdzogY2xpcDtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0J/RgNC40YLQuNGB0LrQsNGU0LzQviBmb290ZXJcXHJcXG5cXHQ+IG1haW4ge1xcclxcblxcdFxcdGZsZXg6IDEgMSBhdXRvO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQpNGW0LrRgSDQtNC70Y8g0YHQu9Cw0LnQtNC10YDRltCyXFxyXFxuXFx0PiAqIHtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQntCx0LzQtdC20YPRjtGH0LjQuSDQutC+0L3RgtC10LnQvdC10YAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8qXFxyXFxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XFxyXFxu0LLRgdGW0YUg0LrQu9Cw0YHRltCyLCDRidC+INC80ZbRgdGC0Y/RgtGMICpfX2NvbnRhaW5lclxcclxcbtCd0LDQv9GA0LjQutC70LDQtCBoZWFkZXJfX2NvbnRhaW5lciwgbWFpbl9fY29udGFpbmVyINGWINGCLtC/LlxcclxcbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XFxyXFxuKi9cXHJcXG5AaWYgKCRyZXNwb25zaXZlVHlwZT09MSkge1xcclxcblxcdC8vINCn0YPQudC90LBcXHJcXG5cXHRbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG5cXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuXFx0XFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fSBAZWxzZSB7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgbWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpLCAxNSk7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSwgMTUpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn0gQGVsc2Uge1xcclxcblxcdC8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtCw0LzQuFxcclxcblxcdFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgkY29udGFpbmVyV2lkdGgpO1xcclxcblxcdFxcdH0gQGVsc2Uge1xcclxcblxcdFxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHBjKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oOTcwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg3NTApO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogbm9uZTtcXHJcXG5cXHRcXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjAgYW5kICRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQsdCw0LfQvtCy0LjRhSDRgdGC0LjQu9GW0LIsINGI0LDQsdC70L7QvdGW0LIgKNC30LDQs9C+0YLRltCy0LXQu9GMKSDRgtCwINC00L7Qv9C+0LzRltC20L3QuNGFINC60LvQsNGB0ZbQslxcclxcbi8vINCU0LvRjyDQv9GW0LTQutC70Y7Rh9C10L3QvdGPL9Cy0LjQvNC60L3QtdC90L3RjyDQutC+0L3QutGA0LXRgtC90LjRhSDRgdGC0LjQu9GW0LIg0LTQuNCy0LjRgdGMIGJhc2Uuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2VcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC30LDQs9Cw0LvRjNC90LjRhSDQtdC70LXQvNC10L3RgtGW0LIg0L/RgNC+0LXQutGC0YNcXHJcXG5AaW1wb3J0IFxcXCJjb21tb25cXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC+0LrRgNC10LzQuNGFINCx0LvQvtC60ZbQslxcclxcbkBpbXBvcnQgXFxcImhlYWRlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwiZm9vdGVyXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDRgdGC0L7RgNGW0L3QvtC6XFxyXFxuQGltcG9ydCBcXFwiaG9tZVxcXCI7XFxyXFxuXCIsXCIqIHtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxuXFx0Ym9yZGVyOiAwcHg7XFxyXFxufVxcclxcbiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOmZvY3VzLFxcclxcbjphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmE6Zm9jdXMsXFxyXFxuYTphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG1pbi13aWR0aDogJG1pbldpZHRoICsgcHg7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGNvbG9yOiAkbWFpbkNvbG9yO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6ICRmb250U2l6ZTtcXHJcXG5cXHQvL3RleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuXFx0LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEge1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5hIHtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbnVsIGxpIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5pbWcge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG5cXHRmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcblwiLFwiLy8g0JfQsNCz0LDQu9GM0L3QuNC5INGE0LDQudC7INC10LvQtdC80LXQvdGC0ZbQsiDRhNC+0YDQvFxcclxcbi8vINCU0LvRjyDQv9GW0LTQutC70Y7Rh9C10L3QvdGPL9Cy0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LXQu9C10LzQtdC90YLQsCDRhNC+0YDQvNC4INC00LjQstC40YHRjCBiYXNlL2Zvcm1zL2Zvcm1zLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlL2Zvcm1zL2Zvcm1zXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC/0L7Qv9Cw0L/RltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9wb3B1cFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgdC/0L7QudC70LXRgNGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nwb2xsZXJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGC0LDQsdGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3RhYnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LzQsNC/XFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9tYXBzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINCx0LvQvtC60YMgXFxcItC/0L7QutCw0LfQsNGC0Lgg0YnQtVxcXCJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nob3dtb3JlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQu9C40L/QutC+0LPQviDQsdC70L7QutGDXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zdGlja3lcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QstC90L7QtdC60YDQsNC90L3QvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHNjcmVlblxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0L/QvtC10LrRgNCw0L3QvtGXINC/0YDQvtC60YDRg9GC0LrQuFxcclxcbi8vIFN0eWxlcyBmb3IgZnVsbHBhZ2Ugc2Nyb2xsXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxscGFnZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8gcmlwcGxlINC10YTQtdC60YLRg1xcclxcbi8vIFN0eWxlcyBmb3IgcmlwcGxlIGVmZmVjdFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcmlwcGxlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQutCw0YHRgtC+0LzQvdC+0LPQviDQutGD0YDRgdC+0YDRg1xcclxcbi8vIFN0eWxlcyBmb3IgY3VzdG9tIGN1cnNvclxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvY3Vyc29yXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDRh9GD0LnQvdC40YUg0LrQsNGA0YLQuNC90L7QuiAoSUJHKVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnIChkaXYg0Lcg0LrQsNGA0YLQuNC90LrQvtGOINGC0LAg0LrQu9Cw0YHQsNC80LgpXFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpYmdhIChhINC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbltjbGFzcyo9XFxcIi1pYmdcXFwiXSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbltjbGFzcyo9XFxcIi1pYmdfY29udGFpblxcXCJdIHtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQqNCw0LHQu9C+0L3QuCAo0LfQsNCz0L7RgtGW0LLQu9GWKVxcclxcbi8vIEBleHRlbmQgJdGW0Lwn0Y8g0YjQsNCx0LvQvtC90YM7XFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKFNDU1MpOiBleFxcclxcblxcclxcbi8vINCb0ZbRh9C40LvRjNC90LjQuiDQtNC70Y8g0YHQv9C40YHQutGDXFxyXFxuJWxpc3RDb3VudGVyIHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0Y291bnRlci1yZXNldDogaXRlbTtcXHJcXG5cXHRsaSB7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdCY6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRjb3VudGVyLWluY3JlbWVudDogaXRlbTtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBjb3VudGVyKGl0ZW0pO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90LUg0LLRltC00LXQvlxcclxcbiVyZXNwb25zaXZlVmlkZW8ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGhlaWdodDogMDtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQktGW0LTQtdC+INGP0Log0YTQvtC9XFxyXFxuJXZpZGVvQmFja2dyb3VuZCB7XFxyXFxuXFx0dmlkZW8sXFxyXFxuXFx0aWZyYW1lLFxcclxcblxcdG9iamVjdCxcXHJcXG5cXHRlbWJlZCB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHRvcDogNTAlO1xcclxcblxcdFxcdGxlZnQ6IDUwJTtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR3aWR0aDogYXV0bztcXHJcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0ei1pbmRleDogLTEwMDtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHRltGA0LjQuSDRhNGW0LvRjNGC0YBcXHJcXG4lZ3JheWZpbHRlciB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcXHJcXG5cXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQodC60LDRgdGD0LLQsNGC0Lgg0LLQuNC00ZbQu9C10L3QvdGPXFxyXFxuJW5vc2VsZWN0IHtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLy8g0JTQt9C10YDQutCw0LvRjNC90LUg0LLRltC00L7QsdGA0LDQttC10L3QvdGPXFxyXFxuJW1pcnJvciB7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxyXFxufVxcclxcbi8vINCf0LvQsNCy0L3QuNC5INGB0LrRgNC+0LvQu1xcclxcbiVzbW9vdGhzY3JvbGwge1xcclxcblxcdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG59XFxyXFxuLy8g0KHRhdC+0LLQsNGC0Lgg0YHQutGA0L7Qu9C7XFxyXFxuJWhpZGVzY3JvbGwge1xcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIvLyDQl9Cw0LPQvtC70L7QstC60LgsINC30LDQs9Cw0LvRjNC90ZYg0JHQldCcINCx0LvQvtC60Lgg0YLQsCDRltC90YjQtS4uLlxcclxcbi5idXR0b24tYm9yZGVye1xcclxcblxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMTgpO1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxOCwgMTMpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDM5LCAyNCk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIDM5LCAyNCk7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IHJlbSgxMik7XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IHJlbSgxMik7XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IG1hdGguZGl2KDI3ICwgMTgpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0Y29sb3I6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgIzAwMjk2RDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTUpO1xcclxcblxcdFxcdC8vIHBhZGRpbmc6IHJlbSgxMikgcmVtKDM5KTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNDRDNkU5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjAwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjNzIGVhc2UsIGNvbG9yIDAuM3MgZWFzZTsmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxMCk7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICM2NjY2NjY7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDE0MHB4O1xcclxcbiAgICAgICAgIHBhZGRpbmc6IHJlbSg5KSByZW0oMjQpO1xcclxcblxcdFxcdH1cXHJcXG59XCIsXCIvL9Cf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGDXFxyXFxuQG1peGluIGZvbnQoJGZvbnRfbmFtZSwgJGZpbGVfbmFtZSwgJHdlaWdodCwgJHN0eWxlKSB7XFxyXFxuXFx0QGZvbnQtZmFjZSB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRmb250X25hbWU7XFxyXFxuXFx0XFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcclxcblxcdFxcdHNyYzogdXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAjeyR3ZWlnaHR9O1xcclxcblxcdFxcdGZvbnQtc3R5bGU6ICN7JHN0eWxlfTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vUGVyY2VudFxcclxcbkBmdW5jdGlvbiBwZXJjZW50KCRweCwgJGZyb20pIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRmcm9tKSAqIDEwMCU7XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL1JFTVxcclxcbkBmdW5jdGlvbiByZW0oJHB4KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAxNikgKyByZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL0VNXFxyXFxuQGZ1bmN0aW9uIGVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyBlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcblxcclxcbi8vQ3VycmVuY3lcXHJcXG5AbWl4aW4gY3VycmVuY3koJHN5bSkge1xcclxcblxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRjb250ZW50OiBcXFwiI3skc3ltfVxcXCI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyBHcmlkc1xcclxcbkBtaXhpbiBncmlkQ2FyZHMoJHR5cGU6IGZpdCwgJG1pbjogMjgwcHgsICRtYXg6IDFmciwgJGdhcDogMzBweCkge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z2FwOiAkZ2FwO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tI3skdHlwZX0sIG1pbm1heCgkbWluLCAkbWF4KSk7XFxyXFxufVxcclxcblxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QsCDQstC70LDRgdGC0LjQstGW0YHRgtGMIChjbGFtcClcXHJcXG5AbWl4aW4gYWRhcHRpdmVWYWx1ZSgkcHJvcGVydHksICRzdGFydFNpemUsICRtaW5TaXplLCAka2VlcFNpemU6IDAsICR3aWR0aEZyb206ICRjb250YWluZXJXaWR0aCwgJHdpZHRoVG86ICRtaW5XaWR0aCkge1xcclxcblxcdEBpZiAoJHN0YXJ0U2l6ZT09MCkge1xcclxcblxcdFxcdCRzdGFydFNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHRAaWYgKCRtaW5TaXplPT0wKSB7XFxyXFxuXFx0XFx0JG1pblNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQlNC70Y8gY2FsYygpO1xcclxcblxcdCRhZGRTaXplOiBtYXRoLmRpdigkc3RhcnRTaXplIC0gJG1pblNpemUsIDE2KTtcXHJcXG5cXHJcXG5cXHRAaWYgKCR3aWR0aEZyb20gPT0gJGNvbnRhaW5lcldpZHRoIGFuZCAkbWF4V2lkdGhDb250YWluZXIgPT0gMCkge1xcclxcblxcdFxcdCR3aWR0aEZyb206ICRtYXhXaWR0aDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0Lgg0LIgRU1cXHJcXG5cXHQkd2lkdGhGcm9tTWVkaWE6IGVtKCR3aWR0aEZyb20pO1xcclxcblxcdCR3aWR0aFRvTWVkaWE6IGVtKCR3aWR0aFRvKTtcXHJcXG5cXHJcXG5cXHQvLyDQpNC+0YDQvNGD0LvQsCDQv9C70LDQstCw0Y7Rh9C+0LPQviDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0Ly8g0JjRgdGC0L7Rh9C90LjQujogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9saW5lYXJseS1zY2FsZS1mb250LXNpemUtd2l0aC1jc3MtY2xhbXAtYmFzZWQtb24tdGhlLXZpZXdwb3J0L1xcclxcblxcdCRzbG9wZTogbWF0aC5kaXYoKCRzdGFydFNpemUgLSAkbWluU2l6ZSksICgkd2lkdGhGcm9tIC0gJHdpZHRoVG8pKTtcXHJcXG5cXHQkeUludGVyc2VjdGlvbjogLSR3aWR0aFRvICogJHNsb3BlICsgJG1pblNpemU7XFxyXFxuXFx0QGlmICgkeUludGVyc2VjdGlvbj09MCkge1xcclxcblxcdFxcdCR5SW50ZXJzZWN0aW9uOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0JGZseVZhbHVlOiAje3JlbSgkeUludGVyc2VjdGlvbil9XFxcIiArIFxcXCIgI3skc2xvcGUgKiAxMDB9dnc7XFxyXFxuXFxyXFxuXFx0Ly8g0J7RgtGA0LjQvNCw0L3QvdGPINC30L3QsNGH0LXQvdC90Y8g0LLQu9Cw0YHRgtC40LLQvtGB0YLRllxcclxcblxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkbWluU2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgcmVtKCRzdGFydFNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0Ly8g0K/QutGJ0L4g0L3QtdCz0LDRgtC40LLQvdGWINC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHRAaWYgKCRtaW5TaXplID4gJHN0YXJ0U2l6ZSkge1xcclxcblxcdFxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiByZW0oJG1pblNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQt9C90LDRh9C10L3QvdGPINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAzIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJHN0YXJ0U2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHQvLyDQkNC00LDQv9GC0YPRlNC80L4g0YDQvtC30LzRltGAINGDINC/0YDQvtC80ZbQttC60YMg0LzRltC2INC30LDQt9C90LDRh9C10L3QuNC80Lgg0YjQuNGA0LjQvdCw0LzQuCDQsifRjtC/0L7RgNGC0YNcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoVG9NZWRpYSkgYW5kIChtYXgtd2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdC8vINCv0LrRidC+INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L3QtSDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyBub3QgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IGNhbGMoI3tyZW0oJG1pblNpemUpfSArICN7JGFkZFNpemV9ICogKDEwMHZ3IC0gI3tyZW0oJHdpZHRoVG8pfSkgLyAje21hdGguZGl2KCR3aWR0aEZyb20sIDE2KSAtIG1hdGguZGl2KCR3aWR0aFRvLCAxNil9KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDIge1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkd2lkdGhUb01lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJG1pblNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmhlYWRlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19jb250YWluZXJcXHJcXG5cXHJcXG5cXHRcXHQmX19jb250YWluZXIge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLDIwICwyNi41ICk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLDIwICwyNi41ICk7XFxyXFxuXFx0XFx0XFx0Ly8gcGFkZGluZy10b3A6IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0Ly8gcGFkZGluZy1ib3R0b206IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0Y29sdW1uLWdhcDogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFx0Ly8gICBwYWRkaW5nLXRvcDogcmVtKDI2LjUpO1xcclxcblxcdFxcdFxcdFxcdC8vICAgcGFkZGluZy1ib3R0b206IHJlbSgyNi41KTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbG9nbyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRjb2x1bW4tZ2FwOiByZW0oMjApO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcblxcdFxcdFxcdFxcdC8vIG9yZGVyOiAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nby1pY29uXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbG9nby1pY29uIHtcXHJcXG5cXHRcXHRcXHRpbWd7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA1NSwgNDApO1xcclxcblxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nby1uYW1lXFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jl9fbG9nby1uYW1lIHtcXHJcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IDUwO1xcclxcblxcdFxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gb3JkZXI6IDE7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvLXRpdGxlXFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jl9fbG9nby10aXRsZSB7XFxyXFxuXFx0XFx0XFx0Ly8gZm9udC1zaXplOiByZW0oMjQpO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI0LCAxNSk7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IG1hdGguZGl2KDMzICwgMjQpO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogcmVtKDE1KTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMTUsIDEwKTtcXHJcXG5cXHRcXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gbWFyZ2luLWJvdHRvbTogcmVtKDE1KTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28tc3VidGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX19sb2dvLXN1YnRpdGxlIHtcXHJcXG5cXHRcXHRcXHQvLyBmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDEyKTtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogbWF0aC5kaXYoMjIgLCAxNik7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRcXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19tZW51XFxyXFxuXFxyXFxuXFx0XFx0Jl9fbWVudSB7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19hY3Rpb25zXFxyXFxuXFxyXFxuXFx0XFx0Jl9fYWN0aW9ucyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdG9yZGVyOiAyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fYnV0dG9uXFxyXFxuXFxyXFxuXFx0XFx0Jl9fYnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4ubWVudSB7XFxyXFxuXFx0XFx0ZmxleDogMCAxIGF1dG87XFxyXFxuXFx0XFx0Ly8gLm1lbnVfX2JvZHlcXHJcXG5cXHJcXG5cXHRcXHQmX19ib2R5IHtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRcXHRcXHRsZWZ0OiAtMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tdG9wOiByZW0oMTAwKTtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiByZW0oMzgpIHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHQvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdFxcdC8vIG1pbi1oZWlnaHQ6IHJlbSgzMDApO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHRcXHRcXHRcXHQubWVudS1vcGVuICZ7XFxyXFxuXFx0XFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQmX19pY29uc3tcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0XFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXHJcXG5cXHRcXHRcXHRcXHQvLyBkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdC8vIGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRcXHRcXHRcXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRcXHRcXHRcXHQvLyB3aWR0aDogcmVtKDE0MCk7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ3JpZC1jb2x1bW4tZ2FwXFxcIiw4MCAsNDAgKTtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJncmlkLXJvdy1nYXBcXFwiLDYwICw0MCApO1xcclxcblxcdFxcdFxcdFxcdC8vIGdyaWQtY29sdW1uLWdhcDogcmVtKDQwKTtcXHJcXG5cXHRcXHRcXHRcXHQvLyBncmlkLXJvdy1nYXA6IHJlbSg0MCk7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCZfX2ljb257XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWVudV9fbGlzdFxcclxcblxcclxcblxcdFxcdCZfX2xpc3Qge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRmbGV4OiAwIDEgNTAlO1xcclxcblxcdFxcdFxcdC8vIGNvbHVtbi1nYXA6IHJlbSg2MCk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiY29sdW1uLWdhcFxcXCIsIDYwLCAyMCk7XFxyXFxuXFx0XFx0XFx0cm93LWdhcDogcmVtKDEwKTtcXHJcXG5cXHRcXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogZW5kO1xcclxcblxcdFxcdFxcdFxcdHJvdy1nYXA6IHJlbSg2MCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWVudV9faXRlbVxcclxcblxcclxcblxcdFxcdCZfX2l0ZW0ge1xcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWVudV9fbGlua1xcclxcblxcclxcblxcdFxcdCZfX2xpbmsge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGN1cnJlbnRDb2xvciAwJSwgY3VycmVudENvbG9yIDEwMCUpIG5vLXJlcGVhdDtcXHJcXG4gICAgICBcXHRiYWNrZ3JvdW5kLXNpemU6IDAgMnB4OyAvKiDQndCw0YfQsNC70YzQvdCw0Y8g0YjQuNGA0LjQvdCwINC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNGPICovXFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XFxyXFxuICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG5cXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4OyAvKiDQmtC+0L3QtdGH0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4ICovXFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogICMyOTc3RDU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuLmljb24tbWVudSB7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vQnVyZ2VyXFxyXFxuXFxyXFxuLmljb24tbWVudSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHR3aWR0aDogcmVtKDMwKTtcXHJcXG5cXHRcXHRoZWlnaHQ6IHJlbSgxOCk7XFxyXFxuXFx0XFx0ei1pbmRleDogNTtcXHJcXG5cXHRcXHRAbWVkaWEgKGFueS1ob3Zlcjogbm9uZSkge1xcclxcblxcdFxcdFxcdGN1cnNvcjogZGVmYXVsdDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0c3BhbixcXHJcXG5cXHRcXHQmOjpiZWZvcmUsXFxyXFxuXFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiByZW0oMyk7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMjk2RDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRib3R0b206IDA7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDc1JTtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0dG9wOiBjYWxjKDUwJSAtIHJlbSgxKSk7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Lm1lbnUtb3BlbiAmIHtcXHJcXG5cXHRcXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IGNhbGMoNDUlIC0gcmVtKDEpKTtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0Ym90dG9tOiBjYWxjKDUwJSAtIHJlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTViMjhjOGIyYmVjYjMwMDliZmZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=