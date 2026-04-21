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
    top: calc(50% - 0.0625rem);
    transform: rotate(-45deg);
  }
  .menu-open .icon-menu::after {
    bottom: calc(50% - 0.0625rem);
    transform: rotate(45deg);
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/common.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/header.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n//@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n//&display=swap Добавить при подключении через плагин@import url(https://fonts.googleapis.com/css?family=Shippori+Mincho:regular,500,600,700,800);\r\n// &subset=cyrillic-ext\r\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+3:300,regular&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,300,regular,500,600&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Raleway:300,regular,500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:regular,600&display=swap\");\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Poppins\";\r\n$fontSize: rem(20); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #000; // Колір шрифту за замовчуванням\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1920;\r\n// $maxWidth: 1728;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1565;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: rem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: rem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","// Заголовки, загальні БЕМ блоки та інше...\r\n.button-border{\r\n\t\twhite-space: nowrap;\r\n\t\tfont-size: rem(18);\r\n\t\ttext-align: center;\r\n\t\t@include adaptiveValue(\"font-size\", 18, 13);\r\n\t\t@include adaptiveValue(\"padding-left\", 39, 24);\r\n\t\t@include adaptiveValue(\"padding-right\", 39, 24);\r\n\t\tpadding-top: rem(12);\r\n\t\tpadding-bottom: rem(12);\r\n\t\tline-height: math.div(27 , 18);\r\n\t\tfont-weight: 300;\r\n\t\tcolor: #00296D;\r\n\t\tborder: 1px solid #00296D;\r\n\t\tborder-radius: rem(15);\r\n\t\t// padding: rem(12) rem(39);\r\n\t\tbackground: linear-gradient(to bottom, #44C6E9 50%, transparent 50%);\r\n      background-size: 100% 200%;\r\n      background-position: 0 100%;\r\n      transition: background-position 0.3s ease, color 0.3s ease;&:hover {\r\n      background-position: 0 0;\r\n      color: #fff;\r\n      }\r\n      @media (max-width:$mobile){\r\n\t\t\tborder-radius: rem(10);\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: 1px solid #666666;\r\n\t\t\tmax-width: 140px;\r\n         padding: rem(9) rem(24);\r\n\t\t}\r\n}","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n\t\tbackground-color: #FFF9FD;\r\n\t\t// .header__container\r\n\r\n\t\t&__container {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\t@include adaptiveValue(\"padding-top\",20 ,26.5 );\r\n\t\t\t@include adaptiveValue(\"padding-bottom\",20 ,26.5 );\r\n\t\t\t// padding-top: rem(20);\r\n\t\t\t// padding-bottom: rem(20);\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t//   padding-top: rem(26.5);\r\n\t\t\t\t//   padding-bottom: rem(26.5);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo\r\n\r\n\t\t&__logo {\r\n\t\t\tdisplay: flex;\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\r\n\t\t// .header__logo-icon\r\n\r\n\t\t&__logo-icon {\r\n\t\t\timg{\r\n\t\t\t\t@include adaptiveValue(\"width\", 55, 40);\r\n\r\n\t\t\t}\r\n\t\t\t\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-name\r\n\t\t\r\n\t\t&__logo-name {\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-title\r\n\t\t\r\n\t\t&__logo-title {\r\n\t\t\t// font-size: rem(24);\r\n\t\t\t@include adaptiveValue(\"font-size\", 24, 15);\r\n\t\t\tline-height: math.div(33 , 24);\r\n\t\t\tfont-weight: 600;\r\n\t\t\tmargin-bottom: rem(15);\r\n\t\t\t@include adaptiveValue(\"margin-bottom\", 15, 10);\r\n\t\t\twhite-space: nowrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\t// margin-bottom: rem(15);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-subtitle\r\n\r\n\t\t&__logo-subtitle {\r\n\t\t\t// font-size: rem(16);\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tline-height: math.div(22 , 16);\r\n\t\t\tfont-weight: 400;\r\n\t\t\twhite-space: nowrap;\r\n\t\t}\r\n\r\n\r\n\r\n\t\t// .header__menu\r\n\r\n\t\t&__menu {\r\n\t\t}\r\n\r\n\t\t// .header__actions\r\n\r\n\t\t&__actions {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\r\n\t\t// .header__button\r\n\r\n\t\t&__button {\r\n\t\t\tgrid-column-start: 1;\r\n         grid-column-end: 3;\r\n\t\t}\r\n}\r\n.menu {\r\n\t\tflex: 0 1 auto;\r\n\t\t// .menu__body\r\n\r\n\t\t&__body {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: -100%;\r\n\t\t\t\tmargin-top: rem(100);\r\n\t\t\t\tpadding: rem(38) rem(20);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t// flex-direction: column;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t// min-height: rem(300);\r\n\t\t\t\tbackground-color: #FFF9FD;\r\n\t\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t\t\t.menu-open &{\r\n\t\t\t\tleft: 0;\r\n\t\t\t}\r\n\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t&__icons{\r\n\t\t\tdisplay: none;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tgrid-template-rows: repeat(3, 1fr);\r\n\t\t\t\tgrid-template-columns: repeat(2, auto);\r\n\t\t\t\t// display: flex;\r\n\t\t\t\t// flex-wrap: wrap;\r\n\t\t\t\tflex: 0 1 auto;\r\n\t\t\t\t// width: rem(140);\r\n\t\t\t\t@include adaptiveValue(\"grid-column-gap\",80 ,40 );\r\n\t\t\t\t@include adaptiveValue(\"grid-row-gap\",60 ,40 );\r\n\t\t\t\t// grid-column-gap: rem(40);\r\n\t\t\t\t// grid-row-gap: rem(40);\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__icon{\r\n\t\t\tdisplay: grid;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\r\n\t\t// .menu__list\r\n\r\n\t\t&__list {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tflex: 0 1 50%;\r\n\t\t\t// column-gap: rem(60);\r\n\t\t\t@include adaptiveValue(\"column-gap\", 60, 20);\r\n\t\t\trow-gap: rem(10);\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: end;\r\n\t\t\t\trow-gap: rem(60);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .menu__item\r\n\r\n\t\t&__item {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .menu__link\r\n\r\n\t\t&__link {\r\n\t\t\tfont-size: rem(16);\r\n\t\t\tbackground: linear-gradient(to right, currentColor 0%, currentColor 100%) no-repeat;\r\n      \tbackground-size: 0 2px; /* Начальная ширина подчеркивания */\r\n         background-position: left bottom;\r\n         transition: background-size 0.3s ease;\r\n\t\t\t@media (any-hover: hover) {\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tbackground-size: 100% 2px; /* Конечная ширина подчеркивания при наведении */\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tcolor:  #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n}\r\n.icon-menu {\r\n}\r\n\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n\tdisplay: none;\r\n\t@media (max-width: $mobile) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: rem(30);\r\n\t\theight: rem(18);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tleft: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: rem(3);\r\n\t\t\tbackground-color: #00296D;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 75%;\r\n\t\t\t\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - rem(1));\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(50% - rem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - rem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("142059136bdb0442d28c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jMDY3MTkyMzg3NDAxNTUyN2Q2Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSUFBc0k7QUFDdEksNElBQTRJO0FBQzVJLG9JQUFvSTtBQUNwSSwySEFBMkg7QUFDM0gscUhBQXFIO0FBQ3JILGtJQUFrSTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxrUkFBa1IsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLFNBQVMsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sWUFBWSxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxL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LFNBQVMsZ0JBQWdCLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLFNBQVMsK0NBQStDLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLHdCQUF3QixpQ0FBaUMseURBQXlELDJCQUEyQiwwQkFBMEIscUNBQXFDLG1DQUFtQyw2QkFBNkIsNkJBQTZCLFdBQVcsU0FBUywrQ0FBK0MsbUJBQW1CLCtDQUErQyw2QkFBNkIsOEZBQThGLG9DQUFvQyxrRkFBa0YsbURBQW1ELHFDQUFxQyxxQkFBcUIseUNBQXlDLDhEQUE4RCxXQUFXLHFDQUFxQyw0QkFBNEIsV0FBVyxTQUFTLEtBQUssZ0JBQWdCLEtBQUssc0pBQXNKLG9CQUFvQixtQ0FBbUMsdUJBQXVCLDJCQUEyQix1QkFBdUIsd0JBQXdCLG1CQUFtQixrQ0FBa0MsMEJBQTBCLFNBQVMsaURBQWlELHdCQUF3Qix1Q0FBdUMsa0JBQWtCLDZCQUE2QixzQkFBc0IseUJBQXlCLG9DQUFvQyxTQUFTLG1CQUFtQixpQkFBaUIsU0FBUyxrQkFBa0Isb0JBQW9CLHFCQUFxQixtQkFBbUIsY0FBYyxrQ0FBa0MscUJBQXFCLFNBQVMsc0JBQXNCLGdCQUFnQixxQkFBcUIsV0FBVyx3Q0FBd0MsdUJBQXVCLHFCQUFxQixvQ0FBb0Msc0NBQXNDLFdBQVcsb0JBQW9CLHVDQUF1QyxxQ0FBcUMsV0FBVyxTQUFTLE9BQU8sS0FBSywyQkFBMkI7QUFDajkyQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUNybEJ2QyxzRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrMzozMDAscmVndWxhciZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MTAwLDMwMCxyZWd1bGFyLDUwMCw2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjMwMCxyZWd1bGFyLDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6cmVndWxhciw2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4qIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMjBweDtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiAjMDAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi5sb2NrIGJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XG59XG4ud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5Ac3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XG4gIC53cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogY2xpcDtcbiAgfVxufVxuLndyYXBwZXIgPiBtYWluIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4ud3JhcHBlciA+ICoge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi8qXG4oaSkg0KHRgtC40LvRliDQsdGD0LTRg9GC0Ywg0LfQsNGB0YLQvtGB0L7QstGD0LLQsNGC0LjRgdGMINC00L5cbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcbtCd0LDQv9GA0LjQutC70LDQtCBoZWFkZXJfX2NvbnRhaW5lciwgbWFpbl9fY29udGFpbmVyINGWINGCLtC/Llxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBjbnRcbiovXG5bY2xhc3MqPV9fY29udGFpbmVyXSB7XG4gIG1heC13aWR0aDogOTkuNjg3NXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMC45Mzc1cmVtO1xufVxuXG5bY2xhc3MqPS1pYmddIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuW2NsYXNzKj0taWJnXSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbltjbGFzcyo9LWliZ19jb250YWluXSBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uYnV0dG9uLWJvcmRlciB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmJ1dHRvbi1ib3JkZXIge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MzQwNjg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDEuMTI1cmVtICkpIHtcbiAgICAuYnV0dG9uLWJvcmRlciB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC44MTI1cmVtICwgMC43MzQwNjg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDEuMTI1cmVtICkpIHtcbiAgICAuYnV0dG9uLWJvcmRlciB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC44MTI1cmVtICsgMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmJ1dHRvbi1ib3JkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMi40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ1dHRvbi1ib3JkZXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuNXJlbSArIDAuOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ1dHRvbi1ib3JkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5idXR0b24tYm9yZGVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnV0dG9uLWJvcmRlciB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDEuNXJlbSArIDAuOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ1dHRvbi1ib3JkZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgfVxufVxuLmJ1dHRvbi1ib3JkZXIge1xuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAyOTZEO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAyOTZEO1xuICBib3JkZXItcmFkaXVzOiAwLjkzNzVyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0NEM2RTkgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xufVxuLmJ1dHRvbi1ib3JkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmJ1dHRvbi1ib3JkZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY2NjY7XG4gICAgbWF4LXdpZHRoOiAxNDBweDtcbiAgICBwYWRkaW5nOiAwLjU2MjVyZW0gMS41cmVtO1xuICB9XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUZEO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDEuNzU4MjEwNzg0M3JlbSAgKyAgLTAuNTA5ODAzOTIxNnZ3ICwgMS42NTYyNXJlbSApKSB7XG4gICAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDEuNzU4MjEwNzg0M3JlbSAgKyAgLTAuNTA5ODAzOTIxNnZ3ICwgMS42NTYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAxLjc1ODIxMDc4NDNyZW0gICsgIC0wLjUwOTgwMzkyMTZ2dyAsIDEuNjU2MjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygxLjY1NjI1cmVtICsgLTAuNDA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDEuNjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAxLjc1ODIxMDc4NDNyZW0gICsgIC0wLjUwOTgwMzkyMTZ2dyAsIDEuNjU2MjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAxLjc1ODIxMDc4NDNyZW0gICsgIC0wLjUwOTgwMzkyMTZ2dyAsIDEuNjU2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMS43NTgyMTA3ODQzcmVtICArICAtMC41MDk4MDM5MjE2dncgLCAxLjY1NjI1cmVtICkpIHtcbiAgICAuaGVhZGVyX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMS42NTYyNXJlbSArIC0wLjQwNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjY1NjI1cmVtO1xuICB9XG59XG4uaGVhZGVyX19jb250YWluZXIge1xuICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xufVxuLmhlYWRlcl9fbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgIHdpZHRoOiAzLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAyLjVyZW0gLCAyLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMy40Mzc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLWljb24gaW1nIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMi41cmVtICwgMi4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDMuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDIuNXJlbSAsIDIuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAzLjQzNzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgICAgd2lkdGg6IGNhbGMoMi41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLWljb24gaW1nIHtcbiAgICB3aWR0aDogMi41cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjkzNzVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjU0NjU2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTQ2NTY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAwLjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC41NDY1Njg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuNjI1cmVtICsgMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODcyNTQ5MDJyZW0gICsgIDAuMzEzNzI1NDkwMnZ3ICwgMXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC43NXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5oZWFkZXJfX2FjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fYnV0dG9uIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbn1cblxuLm1lbnUge1xuICBmbGV4OiAwIDEgYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA2LjI1cmVtO1xuICAgIHBhZGRpbmc6IDIuMzc1cmVtIDEuMjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUZEO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIH1cbiAgLm1lbnUtb3BlbiAubWVudV9fYm9keSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuLm1lbnVfX2ljb25zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChncmlkLWNvbHVtbi1nYXA6IGNsYW1wKCAyLjVyZW0gLCAxLjg3MjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCA1cmVtICkpIHtcbiAgICAubWVudV9faWNvbnMge1xuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiBjbGFtcCggMi41cmVtICwgMS44NzI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChncmlkLWNvbHVtbi1nYXA6IGNsYW1wKCAyLjVyZW0gLCAxLjg3MjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCA1cmVtICkpIHtcbiAgICAubWVudV9faWNvbnMge1xuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiBjYWxjKDIuNXJlbSArIDIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZ3JpZC1yb3ctZ2FwOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChncmlkLXJvdy1nYXA6IGNsYW1wKCAyLjVyZW0gLCAyLjE4NjI3NDUwOThyZW0gICsgIDEuNTY4NjI3NDUxdncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9faWNvbnMge1xuICAgICAgZ3JpZC1yb3ctZ2FwOiBjbGFtcCggMi41cmVtICwgMi4xODYyNzQ1MDk4cmVtICArICAxLjU2ODYyNzQ1MXZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChncmlkLXJvdy1nYXA6IGNsYW1wKCAyLjVyZW0gLCAyLjE4NjI3NDUwOThyZW0gICsgIDEuNTY4NjI3NDUxdncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9faWNvbnMge1xuICAgICAgZ3JpZC1yb3ctZ2FwOiBjYWxjKDIuNXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9faWNvbnMge1xuICAgIGdyaWQtcm93LWdhcDogMi41cmVtO1xuICB9XG59XG4ubWVudV9faWNvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1lbnVfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAxIDUwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGNvbHVtbi1nYXA6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoY29sdW1uLWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBjb2x1bW4tZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNjIyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoY29sdW1uLWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBjb2x1bW4tZ2FwOiBjYWxjKDEuMjVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICB9XG59XG4ubWVudV9fbGlzdCB7XG4gIHJvdy1nYXA6IDAuNjI1cmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIHJvdy1nYXA6IDMuNzVyZW07XG4gIH1cbn1cbi5tZW51X19saW5rIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGN1cnJlbnRDb2xvciAwJSwgY3VycmVudENvbG9yIDEwMCUpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAwIDJweDsgLyog0J3QsNGH0LDQu9GM0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAubWVudV9fbGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDsgLyog0JrQvtC90LXRh9C90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8g0L/RgNC4INC90LDQstC10LTQtdC90LjQuCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgY29sb3I6ICMyOTc3RDU7XG4gIH1cbn1cblxuLmljb24tbWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaWNvbi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEuODc1cmVtO1xuICAgIGhlaWdodDogMS4xMjVyZW07XG4gICAgei1pbmRleDogNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAoYW55LWhvdmVyOiBub25lKSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmljb24tbWVudSBzcGFuLCAuaWNvbi1tZW51OjpiZWZvcmUsIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwLjE4NzVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjk2RDtcbiAgfVxuICAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgfVxuICAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmljb24tbWVudSBzcGFuIHtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudSBzcGFuIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmJlZm9yZSB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBib3R0b206IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbnVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9oZWFkZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURRRDs7QUNOQTs7O0VBR0Msc0JBQUE7QURTRDs7QUNDQTs7RUFFQyxZQUFBO0VBQ0EsZ0JBQUE7QURFRDs7QUNBQTtFQUNDLFdEUVc7RUNQWCxjQUFBO0VBQ0Esc0JERVk7RUNEWixrQkRFVTtFQ0FWLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURFRDs7QUNBQTs7O0VBR0Msc0JEVlk7RUNXWixrQkFBQTtBREdEOztBQ0RBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBRElEOztBQ0ZBO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0FES0Q7O0FDSEE7RUFDQyxnQkFBQTtBRE1EOztBQ0pBO0VBQ0MsbUJBQUE7QURPRDs7QUNMQTs7Ozs7O0VBTUMsb0JBQUE7RUFDQSxrQkFBQTtBRFFEOztBQUFDO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBR0Y7QUFLQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFIRDtBQUlDO0VBTEQ7SUFNRSxjQUFBO0VBREE7QUFDRjtBQUdDO0VBQ0MsY0FBQTtBQURGO0FBSUM7RUFDQyxZQUFBO0FBRkY7O0FBT0E7Ozs7O0NBQUE7QUFRQztFQUVFLHFCQUFBO0VBQ0EsY0FBQTtFQUlDLG9CQUFBO0FBVko7O0FFbEVBO0VBQ0Msa0JBQUE7QUZxRUQ7QUVwRUM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBRnNFRjs7QUVsRUM7RUFDQyxtQkFBQTtBRnFFRjs7QUd6SEE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUg0SEY7QUlsREU7RUQ3RUY7SUM4RUcsbUJBQUE7RUpxREQ7QUFDRjtBSWxEQztFQUVDO0lEcEZGO01DcUZHLDZFQWhCYztJSm9FYjtFQUNGO0VJbERBO0lEeEZGO01DeUZHLCtEQUFBO0lKcURDO0VBQ0Y7QUFDRjtBSW5ERTtFRDdGRjtJQzhGRyxvQkFBQTtFSnNERDtBQUNGO0FJeEVFO0VEN0VGO0lDOEVHLHVCQUFBO0VKMkVEO0FBQ0Y7QUl4RUM7RUFFQztJRHBGRjtNQ3FGRyw4RUFoQmM7SUowRmI7RUFDRjtFSXhFQTtJRHhGRjtNQ3lGRywrREFBQTtJSjJFQztFQUNGO0FBQ0Y7QUl6RUU7RUQ3RkY7SUM4Rkcsb0JBQUE7RUo0RUQ7QUFDRjtBSTlGRTtFRDdFRjtJQzhFRyx3QkFBQTtFSmlHRDtBQUNGO0FJOUZDO0VBRUM7SURwRkY7TUNxRkcsK0VBaEJjO0lKZ0hiO0VBQ0Y7RUk5RkE7SUR4RkY7TUN5RkcsZ0VBQUE7SUppR0M7RUFDRjtBQUNGO0FJL0ZFO0VEN0ZGO0lDOEZHLHFCQUFBO0VKa0dEO0FBQ0Y7QUdqTUE7RUFPRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBRUEsb0VBQUE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMERBQUE7QUg0TE47QUc1TGlFO0VBQzNELHdCQUFBO0VBQ0EsV0FBQTtBSDhMTjtBRzVMTTtFQXRCTjtJQXVCRyx1QkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ00seUJBQUE7RUgrTFA7QUFDRjs7QUszTkE7RUFDRSx5QkFBQTtBTDhORjtBSzNORTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FMNk5IO0FJdkpFO0VDekVBO0lEMEVDLG9CQUFBO0VKMEpEO0FBQ0Y7QUl2SkM7RUFFQztJQ2hGQTtNRGlGQyxnRkFiZTtJSnNLZDtFQUNGO0VJdkpBO0lDcEZBO01EcUZDLG9FQUFBO0lKMEpDO0VBQ0Y7QUFDRjtBSXhKRTtFQ3pGQTtJRDBGQyx1QkFBQTtFSjJKRDtBQUNGO0FJN0tFO0VDekVBO0lEMEVDLHVCQUFBO0VKZ0xEO0FBQ0Y7QUk3S0M7RUFFQztJQ2hGQTtNRGlGQyxtRkFiZTtJSjRMZDtFQUNGO0VJN0tBO0lDcEZBO01EcUZDLHVFQUFBO0lKZ0xDO0VBQ0Y7QUFDRjtBSTlLRTtFQ3pGQTtJRDBGQywwQkFBQTtFSmlMRDtBQUNGO0FLNVFFO0VBUUMsbUJBQUE7QUx1UUg7QUs5UEU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBTGdRSDtBSTNNRTtFQy9DQztJRGdEQSxnQkFBQTtFSjhNRDtBQUNGO0FJM01DO0VBRUM7SUN0REM7TUR1REEsdUVBaEJjO0lKNk5iO0VBQ0Y7RUkzTUE7SUMxREM7TUQyREEsd0RBQUE7SUo4TUM7RUFDRjtBQUNGO0FJNU1FO0VDL0RDO0lEZ0VBLGFBQUE7RUorTUQ7QUFDRjtBS3ZRRTtFQUNDLGtCQUFBO0FMeVFIO0FJcE9FO0VDaENBO0lEaUNDLGlCQUFBO0VKdU9EO0FBQ0Y7QUlwT0M7RUFFQztJQ3ZDQTtNRHdDQywyRUFoQmM7SUpzUGI7RUFDRjtFSXBPQTtJQzNDQTtNRDRDQywrREFBQTtJSnVPQztFQUNGO0FBQ0Y7QUlyT0U7RUNoREE7SURpREMsb0JBQUE7RUp3T0Q7QUFDRjtBSzFSRTtFQUdDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBTDBSSDtBSS9QRTtFQ2hDQTtJRGlDQyx3QkFBQTtFSmtRRDtBQUNGO0FJL1BDO0VBRUM7SUN2Q0E7TUR3Q0MsaUZBaEJjO0lKaVJiO0VBQ0Y7RUkvUEE7SUMzQ0E7TUQ0Q0Msa0VBQUE7SUprUUM7RUFDRjtBQUNGO0FJaFFFO0VDaERBO0lEaURDLHVCQUFBO0VKbVFEO0FBQ0Y7QUtyVEU7RUFPQyxtQkFBQTtBTGlUSDtBS2hURztFQVJEO0lBU0UsZ0JBQUE7RUxtVEY7QUFDRjtBSTdSRTtFQ2hCQTtJRGlCQyxlQUFBO0VKZ1NEO0FBQ0Y7QUk3UkM7RUFFQztJQ3ZCQTtNRHdCQyxzRUFoQmM7SUorU2I7RUFDRjtFSTdSQTtJQzNCQTtNRDRCQywyREFBQTtJSmdTQztFQUNGO0FBQ0Y7QUk5UkU7RUNoQ0E7SURpQ0Msa0JBQUE7RUppU0Q7QUFDRjtBS25VRTtFQUdDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBTG1VSDtBS3ZURTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtBTHlUSDtBS3BURTtFQUNDLG9CQUFBO0VBQ00sa0JBQUE7QUxzVFQ7O0FLblRBO0VBQ0UsY0FBQTtBTHNURjtBS2xURztFQUREO0lBRUUsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsYUFBQTtJQUVBLG1CQUFBO0lBQ0EsOEJBQUE7SUFFQSx5QkFBQTtJQUNBLDRCQUFBO0VMbVRGO0VLbFRHO0lBQ0QsT0FBQTtFTG9URjtBQUNGO0FLL1NFO0VBQ0MsYUFBQTtBTGlUSDtBS2hURztFQUZEO0lBR0UsYUFBQTtJQUNBLGtDQUFBO0lBQ0Esc0NBQUE7SUFHQSxjQUFBO0lBTUEsdUJBQUE7SUFDQSxtQkFBQTtFTDRTRjtBQUNGO0FJcFdFO0VDd0NBO0lEdkNDLHFCQUFBO0VKdVdEO0FBQ0Y7QUlwV0M7RUFFQztJQ2lDQTtNRGhDQywyRUFoQmM7SUpzWGI7RUFDRjtFSXBXQTtJQzZCQTtNRDVCQywrREFBQTtJSnVXQztFQUNGO0FBQ0Y7QUlyV0U7RUN3QkE7SUR2QkMsdUJBQUE7RUp3V0Q7QUFDRjtBSTFYRTtFQ3dDQTtJRHZDQyxxQkFBQTtFSjZYRDtBQUNGO0FJMVhDO0VBRUM7SUNpQ0E7TURoQ0MsMkVBaEJjO0lKNFliO0VBQ0Y7RUkxWEE7SUM2QkE7TUQ1QkMsNkRBQUE7SUo2WEM7RUFDRjtBQUNGO0FJM1hFO0VDd0JBO0lEdkJDLG9CQUFBO0VKOFhEO0FBQ0Y7QUt0VkU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBTHdWSDtBS25WRTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBTHFWSDtBSTNaRTtFQ2tFQTtJRGpFQyxtQkFBQTtFSjhaRDtBQUNGO0FJM1pDO0VBRUM7SUMyREE7TUQxREMsMEVBaEJjO0lKNmFiO0VBQ0Y7RUkzWkE7SUN1REE7TUR0REMsMkRBQUE7SUo4WkM7RUFDRjtBQUNGO0FJNVpFO0VDa0RBO0lEakRDLG1CQUFBO0VKK1pEO0FBQ0Y7QUsvV0U7RUFPQyxpQkFBQTtFQUNBLGVBQUE7QUwyV0g7QUsxV0c7RUFURDtJQVVFLHNCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFTDZXRjtBQUNGO0FLbFdFO0VBQ0MsZUFBQTtFQUNBLG1GQUFBO0VBQ0ksc0JBQUEsRUFBQSxtQ0FBQTtFQUNFLGdDQUFBO0VBQ0EscUNBQUE7QUxvV1Q7QUtuV0c7RUFDQztJQUNDLHlCQUFBLEVBQUEsZ0RBQUE7RUxxV0g7QUFDRjtBS25XRztFQVhEO0lBWUUsY0FBQTtFTHNXRjtBQUNGOztBSzNWQTtFQUNDLGFBQUE7QUw4VkQ7QUs3VkM7RUFGRDtJQUdFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7RUxnV0E7QUFDRjtBS2hXRTtFQVJGO0lBU0csZUFBQTtFTG1XRDtBQUNGO0FLM1dDO0VBU0M7SUFHQyxXQUFBO0lBQ0EsNEJBQUE7SUFDQSxPQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtFTG1XRDtFS2pXQTtJQUNDLE1BQUE7RUxtV0Q7RUtqV0E7SUFDQyxTQUFBO0lBQ0EsVUFBQTtFTG1XRDtFS2hXQTtJQUNDLDBCQUFBO0lBQ0EsVUFBQTtFTGtXRDtFSy9WQztJQUNDLFFBQUE7RUxpV0Y7RUszVkM7SUFDQywwQkFBQTtJQUNBLHlCQUFBO0VMNlZGO0VLM1ZDO0lBQ0MsNkJBQUE7SUFDQSx3QkFBQTtFTDZWRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQvNGW0LrRgdC40L3RltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGI0YDQuNGE0YLRltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vJmRpc3BsYXk9c3dhcCAtINC00L7QtNCw0YLQuCDQv9GA0Lgg0L/RltC00LrQu9GO0YfQtdC90L3RliDRh9C10YDQtdC3INC/0LvQsNCz0ZbQvVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDQu9C+0LrQsNC70YzQvdGWINGE0LDQudC70Lgg0YjRgNC40YTRgtGW0LJcXHJcXG4vL0BpbXBvcnQgXFxcImZvbnRzL2ZvbnRzXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGW0LrQvtC90LrQvtCy0LjRhSDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0YTQsNC50Lsg0ZbQutC+0L3QutC+0LLQvtCz0L4g0YjRgNC40YTRgtGDXFxyXFxuLy9AaW1wb3J0IFxcXCJmb250cy9pY29uc1xcXCI7XFxyXFxuXFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0YjQsNCx0LvQvtC90YMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vJmRpc3BsYXk9c3dhcCDQlNC+0LHQsNCy0LjRgtGMINC/0YDQuCDQv9C+0LTQutC70Y7Rh9C10L3QuNC4INGH0LXRgNC10Lcg0L/Qu9Cw0LPQuNC9QGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzpyZWd1bGFyLDUwMCw2MDAsNzAwLDgwMCk7XFxyXFxuLy8gJnN1YnNldD1jeXJpbGxpYy1leHRcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zKzM6MzAwLHJlZ3VsYXImZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjEwMCwzMDAscmVndWxhciw1MDAsNjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTozMDAscmVndWxhciw1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOnJlZ3VsYXIsNjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbi8vINCX0LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0YjRgNC40YTRgiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4kZm9udEZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiRmb250U2l6ZTogcmVtKDIwKTsgLy8g0LTQtSAxNChweCkgLSDRgNC+0LfQvNGW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0Lcg0LzQsNC60LXRgtGDXFxyXFxuXFxyXFxuLy8g0J7RgdC90L7QstC90ZYg0LrQvtC70YzQvtGA0LhcXHJcXG4kbWFpbkNvbG9yOiAjMDAwOyAvLyDQmtC+0LvRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINCw0LTQsNC/0YLQuNCy0L3QvtGXINGB0ZbRgtC60LggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQnNGW0L3RltC80LDQu9GM0L3QsCDRiNC40YDQuNC90LAg0YHRgtC+0YDRltC90LrQuFxcclxcbiRtaW5XaWR0aDogMzIwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQv9C+0LvQvtGC0L3QsCAo0LzQsNC60LXRgtGDKVxcclxcbiRtYXhXaWR0aDogMTkyMDtcXHJcXG4vLyAkbWF4V2lkdGg6IDE3Mjg7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC+0LHQvNC10LbRg9GO0YfQvtCz0L4g0LrQvtC90YLQtdC50L3QtdGA0LAgKDAgPSDQvdC10LzQsNGUINC+0LHQvNC10LbQtdC90L3RjylcXHJcXG4kbWF4V2lkdGhDb250YWluZXI6IDE1NjU7XFxyXFxuLy8g0JfQsNCz0LDQu9GM0L3QuNC5INCy0ZbQtNGB0YLRg9C/INGDINC60L7QvdGC0LXQudC90LXRgNCwXFxyXFxuLy8gKDMwID0g0L/QviAxNXB4INC70ZbQstC+0YDRg9GHINGWINC/0YDQsNCy0L7RgNGD0YcsIDAgPSDQvdC10LzQsNGUINCy0ZbQtNGB0YLRg9C/0YMpXFxyXFxuJGNvbnRhaW5lclBhZGRpbmc6IDMwO1xcclxcblxcclxcbi8vINCo0LjRgNC40L3QsCDRgdC/0YDQsNGG0YzQvtCy0YPQstCw0L3QvdGPINC/0LXRgNGI0L7Qs9C+INCx0YDQtdC50LrQv9C+0ZbQvdGC0YNcXHJcXG4kY29udGFpbmVyV2lkdGg6ICRtYXhXaWR0aENvbnRhaW5lciArICRjb250YWluZXJQYWRkaW5nO1xcclxcblxcclxcbi8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4XFxyXFxuJHBjOiBlbSgkY29udGFpbmVyV2lkdGgpOyAvLyDQn9CaLCDQvdC+0YPRgtCx0YPQutC4LCDQtNC10Y/QutGWINC/0LvQsNC90YjQtdGC0Lgg0YMg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiR0YWJsZXQ6IGVtKDk5MS45OCk7IC8vINCf0LvQsNC90YjQtdGC0LgsINC00LXRj9C60ZYg0YLQtdC70LXRhNC+0L3QuCDQsiDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJG1vYmlsZTogZW0oNzY3Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBMXFxyXFxuJG1vYmlsZVNtYWxsOiBlbSg0NzkuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IFNcXHJcXG5cXHJcXG4vLyDQotC40L8g0LDQtNCw0L/RgtC40LLQsDpcXHJcXG4vLyAxID0g0YfRg9C50L3RltGB0YLRjCAo0YMg0LrQvtC90YLQtdC50L3QtdGA0LAg0L3QtdC80LDRlCDQsdGA0LXQudC60L/QvtGW0L3RgtGW0LIpLFxcclxcbi8vIDIgPSDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgiAo0LrQvtC90YLQtdC50L3QtdGAINC30LzRltC90Y7RlCDRgdCy0L7RjiDRiNC40YDQuNC90YMg0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIpXFxyXFxuJHJlc3BvbnNpdmVUeXBlOiAxO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQntCx0L3Rg9C70LXQvdC90Y8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbnVsbFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtC10LPQsCBCT0RZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Ly8g0KHQutGA0L7Qu9C7INC30LDQsdC70L7QutC+0LLQsNC90L5cXHJcXG5cXHQubG9jayAmIHtcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdFxcdHRvdWNoLWFjdGlvbjogbm9uZTtcXHJcXG5cXHRcXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQodCw0LnRgiDQt9Cw0LLQsNC90YLQsNC20LXQvdC40LlcXHJcXG5cXHQubG9hZGVkICYge1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0J7QsdC+0LvQvtC90LrQsCB3cmFwcGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLndyYXBwZXIge1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0QHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xcclxcblxcdFxcdG92ZXJmbG93OiBjbGlwO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQn9GA0LjRgtC40YHQutCw0ZTQvNC+IGZvb3RlclxcclxcblxcdD4gbWFpbiB7XFxyXFxuXFx0XFx0ZmxleDogMSAxIGF1dG87XFxyXFxuXFx0fVxcclxcblxcdC8vINCk0ZbQutGBINC00LvRjyDRgdC70LDQudC00LXRgNGW0LJcXHJcXG5cXHQ+ICoge1xcclxcblxcdFxcdG1pbi13aWR0aDogMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCe0LHQvNC10LbRg9GO0YfQuNC5INC60L7QvdGC0LXQudC90LXRgCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLypcXHJcXG4oaSkg0KHRgtC40LvRliDQsdGD0LTRg9GC0Ywg0LfQsNGB0YLQvtGB0L7QstGD0LLQsNGC0LjRgdGMINC00L5cXHJcXG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXFxyXFxu0J3QsNC/0YDQuNC60LvQsNC0IGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0ZYg0YIu0L8uXFxyXFxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBjbnRcXHJcXG4qL1xcclxcbkBpZiAoJHJlc3BvbnNpdmVUeXBlPT0xKSB7XFxyXFxuXFx0Ly8g0KfRg9C50L3QsFxcclxcblxcdFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcblxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgkY29udGFpbmVyV2lkdGgpO1xcclxcblxcdFxcdFxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG5cXHRcXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksIDE1KTtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgbWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpLCAxNSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufSBAZWxzZSB7XFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0LDQvNC4XFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuXFx0XFx0fSBAZWxzZSB7XFxyXFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkcGMpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg5NzApO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDc1MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiBub25lO1xcclxcblxcdFxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCBhbmQgJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINCx0LDQt9C+0LLQuNGFINGB0YLQuNC70ZbQsiwg0YjQsNCx0LvQvtC90ZbQsiAo0LfQsNCz0L7RgtGW0LLQtdC70YwpINGC0LAg0LTQvtC/0L7QvNGW0LbQvdC40YUg0LrQu9Cw0YHRltCyXFxyXFxuLy8g0JTQu9GPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8v0LLQuNC80LrQvdC10L3QvdGPINC60L7QvdC60YDQtdGC0L3QuNGFINGB0YLQuNC70ZbQsiDQtNC40LLQuNGB0YwgYmFzZS5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZVxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0LfQsNCz0LDQu9GM0L3QuNGFINC10LvQtdC80LXQvdGC0ZbQsiDQv9GA0L7QtdC60YLRg1xcclxcbkBpbXBvcnQgXFxcImNvbW1vblxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0LHQu9C+0LrRltCyXFxyXFxuQGltcG9ydCBcXFwiaGVhZGVyXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJmb290ZXJcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC+0LrRgNC10LzQuNGFINGB0YLQvtGA0ZbQvdC+0LpcXHJcXG5AaW1wb3J0IFxcXCJob21lXFxcIjtcXHJcXG5cIixcIioge1xcclxcblxcdHBhZGRpbmc6IDBweDtcXHJcXG5cXHRtYXJnaW46IDBweDtcXHJcXG5cXHRib3JkZXI6IDBweDtcXHJcXG59XFxyXFxuKixcXHJcXG4qOmJlZm9yZSxcXHJcXG4qOmFmdGVyIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46Zm9jdXMsXFxyXFxuOmFjdGl2ZSB7XFxyXFxuXFx0Ly8gb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuYTpmb2N1cyxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuXFx0Ly8gb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0bWluLXdpZHRoOiAkbWluV2lkdGggKyBweDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0Y29sb3I6ICRtYWluQ29sb3I7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdGZvbnQtc2l6ZTogJGZvbnRTaXplO1xcclxcblxcdC8vdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG5cXHQtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbmEge1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxudWwgbGkge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmltZyB7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXCIsXCIvLyDQl9Cw0LPQsNC70YzQvdC40Lkg0YTQsNC50Lsg0LXQu9C10LzQtdC90YLRltCyINGE0L7RgNC8XFxyXFxuLy8g0JTQu9GPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8v0LLRltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0LrQvtC90LrRgNC10YLQvdC+0LPQviDQtdC70LXQvNC10L3RgtCwINGE0L7RgNC80Lgg0LTQuNCy0LjRgdGMIGJhc2UvZm9ybXMvZm9ybXMuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2UvZm9ybXMvZm9ybXNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0L/QvtC/0LDQv9GW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3BvcHVwXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGB0L/QvtC50LvQtdGA0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3BvbGxlcnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQsNCx0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvdGFic1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQvNCw0L9cXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL21hcHNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LHQu9C+0LrRgyBcXFwi0L/QvtC60LDQt9Cw0YLQuCDRidC1XFxcIlxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc2hvd21vcmVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC70LjQv9C60L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3N0aWNreVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0L/QvtCy0L3QvtC10LrRgNCw0L3QvdC+0LPQviDQsdC70L7QutGDXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxsc2NyZWVuXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LXQutGA0LDQvdC+0Zcg0L/RgNC+0LrRgNGD0YLQutC4XFxyXFxuLy8gU3R5bGVzIGZvciBmdWxscGFnZSBzY3JvbGxcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxwYWdlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyByaXBwbGUg0LXRhNC10LrRgtGDXFxyXFxuLy8gU3R5bGVzIGZvciByaXBwbGUgZWZmZWN0XFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9yaXBwbGVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC60LDRgdGC0L7QvNC90L7Qs9C+INC60YPRgNGB0L7RgNGDXFxyXFxuLy8gU3R5bGVzIGZvciBjdXN0b20gY3Vyc29yXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9jdXJzb3JcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINGH0YPQudC90LjRhSDQutCw0YDRgtC40L3QvtC6IChJQkcpXFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpYmcgKGRpdiDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZ2EgKGEg0Lcg0LrQsNGA0YLQuNC90LrQvtGOINGC0LAg0LrQu9Cw0YHQsNC80LgpXFxyXFxuW2NsYXNzKj1cXFwiLWliZ1xcXCJdIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuW2NsYXNzKj1cXFwiLWliZ19jb250YWluXFxcIl0ge1xcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCo0LDQsdC70L7QvdC4ICjQt9Cw0LPQvtGC0ZbQstC70ZYpXFxyXFxuLy8gQGV4dGVuZCAl0ZbQvCfRjyDRiNCw0LHQu9C+0L3RgztcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoU0NTUyk6IGV4XFxyXFxuXFxyXFxuLy8g0JvRltGH0LjQu9GM0L3QuNC6INC00LvRjyDRgdC/0LjRgdC60YNcXHJcXG4lbGlzdENvdW50ZXIge1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHRjb3VudGVyLXJlc2V0OiBpdGVtO1xcclxcblxcdGxpIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0JjpiZWZvcmUge1xcclxcblxcdFxcdFxcdGNvdW50ZXItaW5jcmVtZW50OiBpdGVtO1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IGNvdW50ZXIoaXRlbSk7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QtSDQstGW0LTQtdC+XFxyXFxuJXJlc3BvbnNpdmVWaWRlbyB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XFxyXFxuXFx0dmlkZW8sXFxyXFxuXFx0aWZyYW1lLFxcclxcblxcdG9iamVjdCxcXHJcXG5cXHRlbWJlZCB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCS0ZbQtNC10L4g0Y/QuiDRhNC+0L1cXHJcXG4ldmlkZW9CYWNrZ3JvdW5kIHtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0dG9wOiA1MCU7XFxyXFxuXFx0XFx0bGVmdDogNTAlO1xcclxcblxcdFxcdG1pbi13aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHdpZHRoOiBhdXRvO1xcclxcblxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHR6LWluZGV4OiAtMTAwO1xcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcclxcblxcdFxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQodGW0YDQuNC5INGE0ZbQu9GM0YLRgFxcclxcbiVncmF5ZmlsdGVyIHtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdGZpbHRlcjogZ3JheXNjYWxlKDEpO1xcclxcblxcdEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdGZpbHRlcjogZ3JheXNjYWxlKDApO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0LrQsNGB0YPQstCw0YLQuCDQstC40LTRltC70LXQvdC90Y9cXHJcXG4lbm9zZWxlY3Qge1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4vLyDQlNC30LXRgNC60LDQu9GM0L3QtSDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y9cXHJcXG4lbWlycm9yIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXHJcXG59XFxyXFxuLy8g0J/Qu9Cw0LLQvdC40Lkg0YHQutGA0L7Qu9C7XFxyXFxuJXNtb290aHNjcm9sbCB7XFxyXFxuXFx0LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbn1cXHJcXG4vLyDQodGF0L7QstCw0YLQuCDRgdC60YDQvtC70LtcXHJcXG4laGlkZXNjcm9sbCB7XFxyXFxuXFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi8vINCX0LDQs9C+0LvQvtCy0LrQuCwg0LfQsNCz0LDQu9GM0L3RliDQkdCV0Jwg0LHQu9C+0LrQuCDRgtCwINGW0L3RiNC1Li4uXFxyXFxuLmJ1dHRvbi1ib3JkZXJ7XFxyXFxuXFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE4LCAxMyk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMzksIDI0KTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgMzksIDI0KTtcXHJcXG5cXHRcXHRwYWRkaW5nLXRvcDogcmVtKDEyKTtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogcmVtKDEyKTtcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogbWF0aC5kaXYoMjcgLCAxOCk7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRjb2xvcjogIzAwMjk2RDtcXHJcXG5cXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjMDAyOTZEO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxNSk7XFxyXFxuXFx0XFx0Ly8gcGFkZGluZzogcmVtKDEyKSByZW0oMzkpO1xcclxcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0NEM2RTkgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlOyY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDEwKTtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzY2NjY2NjtcXHJcXG5cXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogMTQwcHg7XFxyXFxuICAgICAgICAgcGFkZGluZzogcmVtKDkpIHJlbSgyNCk7XFxyXFxuXFx0XFx0fVxcclxcbn1cIixcIi8v0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0YNcXHJcXG5AbWl4aW4gZm9udCgkZm9udF9uYW1lLCAkZmlsZV9uYW1lLCAkd2VpZ2h0LCAkc3R5bGUpIHtcXHJcXG5cXHRAZm9udC1mYWNlIHtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJGZvbnRfbmFtZTtcXHJcXG5cXHRcXHRmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuXFx0XFx0c3JjOiB1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiLi4vZm9udHMvI3skZmlsZV9uYW1lfS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6ICN7JHdlaWdodH07XFxyXFxuXFx0XFx0Zm9udC1zdHlsZTogI3skc3R5bGV9O1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy9QZXJjZW50XFxyXFxuQGZ1bmN0aW9uIHBlcmNlbnQoJHB4LCAkZnJvbSkge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGZyb20pICogMTAwJTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vUkVNXFxyXFxuQGZ1bmN0aW9uIHJlbSgkcHgpIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsIDE2KSArIHJlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vRU1cXHJcXG5AZnVuY3Rpb24gZW0oJHB4LCAkY3VycmVudDogMTYpIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRjdXJyZW50KSArIGVtO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuXFxyXFxuLy9DdXJyZW5jeVxcclxcbkBtaXhpbiBjdXJyZW5jeSgkc3ltKSB7XFxyXFxuXFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdGNvbnRlbnQ6IFxcXCIjeyRzeW19XFxcIjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vIEdyaWRzXFxyXFxuQG1peGluIGdyaWRDYXJkcygkdHlwZTogZml0LCAkbWluOiAyODBweCwgJG1heDogMWZyLCAkZ2FwOiAzMHB4KSB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRnYXA6ICRnYXA7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by0jeyR0eXBlfSwgbWlubWF4KCRtaW4sICRtYXgpKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdCwINCy0LvQsNGB0YLQuNCy0ZbRgdGC0YwgKGNsYW1wKVxcclxcbkBtaXhpbiBhZGFwdGl2ZVZhbHVlKCRwcm9wZXJ0eSwgJHN0YXJ0U2l6ZSwgJG1pblNpemUsICRrZWVwU2l6ZTogMCwgJHdpZHRoRnJvbTogJGNvbnRhaW5lcldpZHRoLCAkd2lkdGhUbzogJG1pbldpZHRoKSB7XFxyXFxuXFx0QGlmICgkc3RhcnRTaXplPT0wKSB7XFxyXFxuXFx0XFx0JHN0YXJ0U2l6ZTogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdEBpZiAoJG1pblNpemU9PTApIHtcXHJcXG5cXHRcXHQkbWluU2l6ZTogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCU0LvRjyBjYWxjKCk7XFxyXFxuXFx0JGFkZFNpemU6IG1hdGguZGl2KCRzdGFydFNpemUgLSAkbWluU2l6ZSwgMTYpO1xcclxcblxcclxcblxcdEBpZiAoJHdpZHRoRnJvbSA9PSAkY29udGFpbmVyV2lkdGggYW5kICRtYXhXaWR0aENvbnRhaW5lciA9PSAwKSB7XFxyXFxuXFx0XFx0JHdpZHRoRnJvbTogJG1heFdpZHRoO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQuCDQsiBFTVxcclxcblxcdCR3aWR0aEZyb21NZWRpYTogZW0oJHdpZHRoRnJvbSk7XFxyXFxuXFx0JHdpZHRoVG9NZWRpYTogZW0oJHdpZHRoVG8pO1xcclxcblxcclxcblxcdC8vINCk0L7RgNC80YPQu9CwINC/0LvQsNCy0LDRjtGH0L7Qs9C+INC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHQvLyDQmNGB0YLQvtGH0L3QuNC6OiBodHRwczovL2Nzcy10cmlja3MuY29tL2xpbmVhcmx5LXNjYWxlLWZvbnQtc2l6ZS13aXRoLWNzcy1jbGFtcC1iYXNlZC1vbi10aGUtdmlld3BvcnQvXFxyXFxuXFx0JHNsb3BlOiBtYXRoLmRpdigoJHN0YXJ0U2l6ZSAtICRtaW5TaXplKSwgKCR3aWR0aEZyb20gLSAkd2lkdGhUbykpO1xcclxcblxcdCR5SW50ZXJzZWN0aW9uOiAtJHdpZHRoVG8gKiAkc2xvcGUgKyAkbWluU2l6ZTtcXHJcXG5cXHRAaWYgKCR5SW50ZXJzZWN0aW9uPT0wKSB7XFxyXFxuXFx0XFx0JHlJbnRlcnNlY3Rpb246IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHQkZmx5VmFsdWU6ICN7cmVtKCR5SW50ZXJzZWN0aW9uKX1cXFwiICsgXFxcIiAjeyRzbG9wZSAqIDEwMH12dztcXHJcXG5cXHJcXG5cXHQvLyDQntGC0YDQuNC80LDQvdC90Y8g0LfQvdCw0YfQtdC90L3RjyDQstC70LDRgdGC0LjQstC+0YHRgtGWXFxyXFxuXFx0JHByb3BlcnR5VmFsdWU6ICN7XFxcImNsYW1wKFxcXCIgcmVtKCRtaW5TaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiByZW0oJHN0YXJ0U2l6ZSkgXFxcIilcXFwifTtcXHJcXG5cXHQvLyDQr9C60YnQviDQvdC10LPQsNGC0LjQstC90ZYg0LfQvdCw0YfQtdC90L3Rj1xcclxcblxcdEBpZiAoJG1pblNpemUgPiAkc3RhcnRTaXplKSB7XFxyXFxuXFx0XFx0JHByb3BlcnR5VmFsdWU6ICN7XFxcImNsYW1wKFxcXCIgcmVtKCRzdGFydFNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHJlbSgkbWluU2l6ZSkgXFxcIilcXFwifTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INC30L3QsNGH0LXQvdC90Y8g0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDMge1xcclxcblxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IHJlbSgkc3RhcnRTaXplKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdC8vINCQ0LTQsNC/0YLRg9GU0LzQviDRgNC+0LfQvNGW0YAg0YMg0L/RgNC+0LzRltC20LrRgyDQvNGW0LYg0LfQsNC30L3QsNGH0LXQvdC40LzQuCDRiNC40YDQuNC90LDQvNC4INCyJ9GO0L/QvtGA0YLRg1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGhUb01lZGlhKSBhbmQgKG1heC13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRcXHRAc3VwcG9ydHMgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQvLyDQr9C60YnQviDQvdC1INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzIG5vdCAoI3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogY2FsYygje3JlbSgkbWluU2l6ZSl9ICsgI3skYWRkU2l6ZX0gKiAoMTAwdncgLSAje3JlbSgkd2lkdGhUbyl9KSAvICN7bWF0aC5kaXYoJHdpZHRoRnJvbSwgMTYpIC0gbWF0aC5kaXYoJHdpZHRoVG8sIDE2KX0pO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0QGlmICRrZWVwU2l6ZSAhPSAxIGFuZCAka2VlcFNpemUgIT0gMiB7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICR3aWR0aFRvTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IHJlbSgkbWluU2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uaGVhZGVyIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUZEO1xcclxcblxcdFxcdC8vIC5oZWFkZXJfX2NvbnRhaW5lclxcclxcblxcclxcblxcdFxcdCZfX2NvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsMjAgLDI2LjUgKTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsMjAgLDI2LjUgKTtcXHJcXG5cXHRcXHRcXHQvLyBwYWRkaW5nLXRvcDogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHQvLyBwYWRkaW5nLWJvdHRvbTogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRjb2x1bW4tZ2FwOiByZW0oMjApO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdC8vICAgcGFkZGluZy10b3A6IHJlbSgyNi41KTtcXHJcXG5cXHRcXHRcXHRcXHQvLyAgIHBhZGRpbmctYm90dG9tOiByZW0oMjYuNSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbG9nbyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRjb2x1bW4tZ2FwOiByZW0oMjApO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28taWNvblxcclxcblxcclxcblxcdFxcdCZfX2xvZ28taWNvbiB7XFxyXFxuXFx0XFx0XFx0aW1ne1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNTUsIDQwKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28tbmFtZVxcclxcblxcdFxcdFxcclxcblxcdFxcdCZfX2xvZ28tbmFtZSB7XFxyXFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvLXRpdGxlXFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jl9fbG9nby10aXRsZSB7XFxyXFxuXFx0XFx0XFx0Ly8gZm9udC1zaXplOiByZW0oMjQpO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI0LCAxNSk7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IG1hdGguZGl2KDMzICwgMjQpO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogcmVtKDE1KTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMTUsIDEwKTtcXHJcXG5cXHRcXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gbWFyZ2luLWJvdHRvbTogcmVtKDE1KTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28tc3VidGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX19sb2dvLXN1YnRpdGxlIHtcXHJcXG5cXHRcXHRcXHQvLyBmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDEyKTtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogbWF0aC5kaXYoMjIgLCAxNik7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRcXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19tZW51XFxyXFxuXFxyXFxuXFx0XFx0Jl9fbWVudSB7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2FjdGlvbnNcXHJcXG5cXHJcXG5cXHRcXHQmX19hY3Rpb25zIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2J1dHRvblxcclxcblxcclxcblxcdFxcdCZfX2J1dHRvbiB7XFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcclxcblxcdFxcdH1cXHJcXG59XFxyXFxuLm1lbnUge1xcclxcblxcdFxcdGZsZXg6IDAgMSBhdXRvO1xcclxcblxcdFxcdC8vIC5tZW51X19ib2R5XFxyXFxuXFxyXFxuXFx0XFx0Jl9fYm9keSB7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0XFx0XFx0bGVmdDogLTEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLXRvcDogcmVtKDEwMCk7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogcmVtKDM4KSByZW0oMjApO1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRcXHQvLyBtaW4taGVpZ2h0OiByZW0oMzAwKTtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUZEO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Lm1lbnUtb3BlbiAme1xcclxcblxcdFxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jl9faWNvbnN7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdFxcdFxcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxyXFxuXFx0XFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHQvLyBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0XFx0XFx0ZmxleDogMCAxIGF1dG87XFxyXFxuXFx0XFx0XFx0XFx0Ly8gd2lkdGg6IHJlbSgxNDApO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdyaWQtY29sdW1uLWdhcFxcXCIsODAgLDQwICk7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ3JpZC1yb3ctZ2FwXFxcIiw2MCAsNDAgKTtcXHJcXG5cXHRcXHRcXHRcXHQvLyBncmlkLWNvbHVtbi1nYXA6IHJlbSg0MCk7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gZ3JpZC1yb3ctZ2FwOiByZW0oNDApO1xcclxcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmX19pY29ue1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1lbnVfX2xpc3RcXHJcXG5cXHJcXG5cXHRcXHQmX19saXN0IHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0ZmxleDogMCAxIDUwJTtcXHJcXG5cXHRcXHRcXHQvLyBjb2x1bW4tZ2FwOiByZW0oNjApO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImNvbHVtbi1nYXBcXFwiLCA2MCwgMjApO1xcclxcblxcdFxcdFxcdHJvdy1nYXA6IHJlbSgxMCk7XFxyXFxuXFx0XFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGVuZDtcXHJcXG5cXHRcXHRcXHRcXHRyb3ctZ2FwOiByZW0oNjApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1lbnVfX2l0ZW1cXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLm1lbnVfX2xpbmtcXHJcXG5cXHJcXG5cXHRcXHQmX19saW5rIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBjdXJyZW50Q29sb3IgMCUsIGN1cnJlbnRDb2xvciAxMDAlKSBuby1yZXBlYXQ7XFxyXFxuICAgICAgXFx0YmFja2dyb3VuZC1zaXplOiAwIDJweDsgLyog0J3QsNGH0LDQu9GM0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyAqL1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xcclxcbiAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGVhc2U7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDsgLyog0JrQvtC90LXRh9C90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8g0L/RgNC4INC90LDQstC10LTQtdC90LjQuCAqL1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICAjMjk3N0Q1O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcbi5pY29uLW1lbnUge1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vL0J1cmdlclxcclxcblxcclxcbi5pY29uLW1lbnUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0d2lkdGg6IHJlbSgzMCk7XFxyXFxuXFx0XFx0aGVpZ2h0OiByZW0oMTgpO1xcclxcblxcdFxcdHotaW5kZXg6IDU7XFxyXFxuXFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IG5vbmUpIHtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4sXFxyXFxuXFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdGhlaWdodDogcmVtKDMpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0Ym90dG9tOiAwO1xcclxcblxcdFxcdFxcdHdpZHRoOiA3NSU7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdHRvcDogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcblxcdFxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC5tZW51LW9wZW4gJiB7XFxyXFxuXFx0XFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZSxcXHJcXG5cXHRcXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiBjYWxjKDUwJSAtIHJlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdFxcdGJvdHRvbTogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE0MjA1OTEzNmJkYjA0NDJkMjhjXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9