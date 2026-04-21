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
  .menu-open .icon-menu::before, .menu-open .icon-menu::after {
    width: 100%;
  }
  .menu-open .icon-menu::before {
    top: calc(50% - 0.0625rem);
    transform: rotate(-45deg);
  }
  .menu-open .icon-menu::after {
    bottom: calc(50% - 0.0625rem);
    transform: rotate(45deg);
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/common.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/header.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n//@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n//&display=swap Добавить при подключении через плагин@import url(https://fonts.googleapis.com/css?family=Shippori+Mincho:regular,500,600,700,800);\r\n// &subset=cyrillic-ext\r\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+3:300,regular&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,300,regular,500,600&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Raleway:300,regular,500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:regular,600&display=swap\");\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Poppins\";\r\n$fontSize: rem(20); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #000; // Колір шрифту за замовчуванням\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1920;\r\n// $maxWidth: 1728;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1565;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: rem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: rem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","// Заголовки, загальні БЕМ блоки та інше...\r\n.button-border{\r\n\t\twhite-space: nowrap;\r\n\t\tfont-size: rem(18);\r\n\t\ttext-align: center;\r\n\t\t@include adaptiveValue(\"font-size\", 18, 13);\r\n\t\t@include adaptiveValue(\"padding-left\", 39, 24);\r\n\t\t@include adaptiveValue(\"padding-right\", 39, 24);\r\n\t\tpadding-top: rem(12);\r\n\t\tpadding-bottom: rem(12);\r\n\t\tline-height: math.div(27 , 18);\r\n\t\tfont-weight: 300;\r\n\t\tcolor: #00296D;\r\n\t\tborder: 1px solid #00296D;\r\n\t\tborder-radius: rem(15);\r\n\t\t// padding: rem(12) rem(39);\r\n\t\tbackground: linear-gradient(to bottom, #44C6E9 50%, transparent 50%);\r\n      background-size: 100% 200%;\r\n      background-position: 0 100%;\r\n      transition: background-position 0.3s ease, color 0.3s ease;&:hover {\r\n      background-position: 0 0;\r\n      color: #fff;\r\n      }\r\n      @media (max-width:$mobile){\r\n\t\t\tborder-radius: rem(10);\r\n\t\t\tcolor: #666666;\r\n\t\t\tborder: 1px solid #666666;\r\n\t\t\tmax-width: 140px;\r\n         padding: rem(9) rem(24);\r\n\t\t}\r\n}","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n\t\tbackground-color: #FFF9FD;\r\n\t\t// .header__container\r\n\r\n\t\t&__container {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\t@include adaptiveValue(\"padding-top\",20 ,26.5 );\r\n\t\t\t@include adaptiveValue(\"padding-bottom\",20 ,26.5 );\r\n\t\t\t// padding-top: rem(20);\r\n\t\t\t// padding-bottom: rem(20);\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\t//   padding-top: rem(26.5);\r\n\t\t\t\t//   padding-bottom: rem(26.5);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo\r\n\r\n\t\t&__logo {\r\n\t\t\tdisplay: flex;\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\r\n\t\t// .header__logo-icon\r\n\r\n\t\t&__logo-icon {\r\n\t\t\timg{\r\n\t\t\t\t@include adaptiveValue(\"width\", 55, 40);\r\n\r\n\t\t\t}\r\n\t\t\t\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-name\r\n\t\t\r\n\t\t&__logo-name {\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-title\r\n\t\t\r\n\t\t&__logo-title {\r\n\t\t\t// font-size: rem(24);\r\n\t\t\t@include adaptiveValue(\"font-size\", 24, 15);\r\n\t\t\tline-height: math.div(33 , 24);\r\n\t\t\tfont-weight: 600;\r\n\t\t\tmargin-bottom: rem(15);\r\n\t\t\t@include adaptiveValue(\"margin-bottom\", 15, 10);\r\n\t\t\twhite-space: nowrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\t// margin-bottom: rem(15);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .header__logo-subtitle\r\n\r\n\t\t&__logo-subtitle {\r\n\t\t\t// font-size: rem(16);\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tline-height: math.div(22 , 16);\r\n\t\t\tfont-weight: 400;\r\n\t\t\twhite-space: nowrap;\r\n\t\t}\r\n\r\n\r\n\r\n\t\t// .header__menu\r\n\r\n\t\t&__menu {\r\n\t\t}\r\n\r\n\t\t// .header__actions\r\n\r\n\t\t&__actions {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\r\n\t\t// .header__button\r\n\r\n\t\t&__button {\r\n\t\t\tgrid-column-start: 1;\r\n         grid-column-end: 3;\r\n\t\t}\r\n}\r\n.menu {\r\n\t\tflex: 0 1 auto;\r\n\t\t// .menu__body\r\n\r\n\t\t&__body {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: -100%;\r\n\t\t\t\tmargin-top: rem(100);\r\n\t\t\t\tpadding: rem(38) rem(20);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t// flex-direction: column;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t// min-height: rem(300);\r\n\t\t\t\tbackground-color: #FFF9FD;\r\n\t\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\t\t\t.menu-open &{\r\n\t\t\t\tleft: 0;\r\n\t\t\t}\r\n\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t&__icons{\r\n\t\t\tdisplay: none;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tgrid-template-rows: repeat(3, 1fr);\r\n\t\t\t\tgrid-template-columns: repeat(2, auto);\r\n\t\t\t\t// display: flex;\r\n\t\t\t\t// flex-wrap: wrap;\r\n\t\t\t\tflex: 0 1 auto;\r\n\t\t\t\t// width: rem(140);\r\n\t\t\t\t@include adaptiveValue(\"grid-column-gap\",80 ,40 );\r\n\t\t\t\t@include adaptiveValue(\"grid-row-gap\",60 ,40 );\r\n\t\t\t\t// grid-column-gap: rem(40);\r\n\t\t\t\t// grid-row-gap: rem(40);\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__icon{\r\n\t\t\tdisplay: grid;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\r\n\t\t// .menu__list\r\n\r\n\t\t&__list {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tflex: 0 1 50%;\r\n\t\t\t// column-gap: rem(60);\r\n\t\t\t@include adaptiveValue(\"column-gap\", 60, 20);\r\n\t\t\trow-gap: rem(10);\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: end;\r\n\t\t\t\trow-gap: rem(60);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .menu__item\r\n\r\n\t\t&__item {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .menu__link\r\n\r\n\t\t&__link {\r\n\t\t\tfont-size: rem(16);\r\n\t\t\tbackground: linear-gradient(to right, currentColor 0%, currentColor 100%) no-repeat;\r\n      \tbackground-size: 0 2px; /* Начальная ширина подчеркивания */\r\n         background-position: left bottom;\r\n         transition: background-size 0.3s ease;\r\n\t\t\t@media (any-hover: hover) {\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tbackground-size: 100% 2px; /* Конечная ширина подчеркивания при наведении */\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tcolor:  #2977D5;\r\n\t\t\t}\r\n\t\t}\r\n}\r\n.icon-menu {\r\n}\r\n\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n\tdisplay: none;\r\n\t@media (max-width: $mobile) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: rem(30);\r\n\t\theight: rem(18);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tleft: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: rem(3);\r\n\t\t\tbackground-color: #00296D;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 75%;\r\n\t\t\t\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - rem(1));\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(50% - rem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - rem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d4761286454ba656276b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jNjg0YTJjNGU4ZjZmYmQxOWVjOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSUFBc0k7QUFDdEksNElBQTRJO0FBQzVJLG9JQUFvSTtBQUNwSSwySEFBMkg7QUFDM0gscUhBQXFIO0FBQ3JILGtJQUFrSTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxrUkFBa1IsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLFNBQVMsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sWUFBWSxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxN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QUF3QyxxQ0FBcUMsb0NBQW9DLGdDQUFnQyxXQUFXLFNBQVMsZ0JBQWdCLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLFNBQVMsK0NBQStDLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLHdCQUF3QixpQ0FBaUMseURBQXlELDJCQUEyQiwwQkFBMEIscUNBQXFDLG1DQUFtQyw2QkFBNkIsNkJBQTZCLFdBQVcsU0FBUywrQ0FBK0MsbUJBQW1CLCtDQUErQyw2QkFBNkIsOEZBQThGLG9DQUFvQyxrRkFBa0YsbURBQW1ELHFDQUFxQyxxQkFBcUIseUNBQXlDLDhEQUE4RCxXQUFXLHFDQUFxQyw0QkFBNEIsV0FBVyxTQUFTLEtBQUssZ0JBQWdCLEtBQUssc0pBQXNKLG9CQUFvQixtQ0FBbUMsdUJBQXVCLDJCQUEyQix1QkFBdUIsd0JBQXdCLG1CQUFtQixrQ0FBa0MsMEJBQTBCLFNBQVMsaURBQWlELHdCQUF3Qix1Q0FBdUMsa0JBQWtCLDZCQUE2QixzQkFBc0IseUJBQXlCLG9DQUFvQyxTQUFTLG1CQUFtQixpQkFBaUIsU0FBUyxrQkFBa0Isb0JBQW9CLHFCQUFxQixtQkFBbUIsY0FBYyxrQ0FBa0MscUJBQXFCLFNBQVMsc0JBQXNCLGdCQUFnQixxQkFBcUIsV0FBVyx3Q0FBd0Msd0JBQXdCLFdBQVcscUJBQXFCLG9DQUFvQyxzQ0FBc0MsV0FBVyxvQkFBb0IsdUNBQXVDLHFDQUFxQyxXQUFXLFNBQVMsT0FBTyxLQUFLLDJCQUEyQjtBQUNuLzJCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQ3hsQnZDLHNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucyszOjMwMCxyZWd1bGFyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoxMDAsMzAwLHJlZ3VsYXIsNTAwLDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLHJlZ3VsYXIsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczpyZWd1bGFyLDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLmxvY2sgYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcbn1cbi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBzdXBwb3J0cyAob3ZlcmZsb3c6IGNsaXApIHtcbiAgLndyYXBwZXIge1xuICAgIG92ZXJmbG93OiBjbGlwO1xuICB9XG59XG4ud3JhcHBlciA+IG1haW4ge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi53cmFwcGVyID4gKiB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLypcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxu0LLRgdGW0YUg0LrQu9Cw0YHRltCyLCDRidC+INC80ZbRgdGC0Y/RgtGMICpfX2NvbnRhaW5lclxu0J3QsNC/0YDQuNC60LvQsNC0IGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0ZYg0YIu0L8uXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxuKi9cbltjbGFzcyo9X19jb250YWluZXJdIHtcbiAgbWF4LXdpZHRoOiA5OS42ODc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjkzNzVyZW07XG59XG5cbltjbGFzcyo9LWliZ10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5bY2xhc3MqPS1pYmddIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuW2NsYXNzKj0taWJnX2NvbnRhaW5dIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5idXR0b24tYm9yZGVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzM0MDY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAxLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjgxMjVyZW0gKyAwLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idXR0b24tYm9yZGVyIHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ1dHRvbi1ib3JkZXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnV0dG9uLWJvcmRlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmJ1dHRvbi1ib3JkZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ1dHRvbi1ib3JkZXIge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMS41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICB9XG59XG4uYnV0dG9uLWJvcmRlciB7XG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDI5NkQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDI5NkQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuOTM3NXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ0QzZFOSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4zcyBlYXNlLCBjb2xvciAwLjNzIGVhc2U7XG59XG4uYnV0dG9uLWJvcmRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICAgIHBhZGRpbmc6IDAuNTYyNXJlbSAxLjVyZW07XG4gIH1cbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XG59XG4uaGVhZGVyX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkuNjg3NWVtKSB7XG4gIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMS43NTgyMTA3ODQzcmVtICArICAtMC41MDk4MDM5MjE2dncgLCAxLjY1NjI1cmVtICkpIHtcbiAgICAuaGVhZGVyX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMS43NTgyMTA3ODQzcmVtICArICAtMC41MDk4MDM5MjE2dncgLCAxLjY1NjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDEuNzU4MjEwNzg0M3JlbSAgKyAgLTAuNTA5ODAzOTIxNnZ3ICwgMS42NTYyNXJlbSApKSB7XG4gICAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDEuNjU2MjVyZW0gKyAtMC40MDYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMS42NTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDEuNzU4MjEwNzg0M3JlbSAgKyAgLTAuNTA5ODAzOTIxNnZ3ICwgMS42NTYyNXJlbSApKSB7XG4gICAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDEuNzU4MjEwNzg0M3JlbSAgKyAgLTAuNTA5ODAzOTIxNnZ3ICwgMS42NTYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAxLjc1ODIxMDc4NDNyZW0gICsgIC0wLjUwOTgwMzkyMTZ2dyAsIDEuNjU2MjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxLjY1NjI1cmVtICsgLTAuNDA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNjU2MjVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2NvbnRhaW5lciB7XG4gIGNvbHVtbi1nYXA6IDEuMjVyZW07XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby1pY29uIGltZyB7XG4gICAgd2lkdGg6IDMuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDIuNXJlbSAsIDIuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAzLjQzNzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAyLjVyZW0gLCAyLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMy40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMi41cmVtICwgMi4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDMuNDM3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1pY29uIGltZyB7XG4gICAgICB3aWR0aDogY2FsYygyLjVyZW0gKyAwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28taWNvbiBpbWcge1xuICAgIHdpZHRoOiAyLjVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28tbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuOTM3NXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICBsaW5lLWhlaWdodDogMS4zNzU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTQ2NTY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAwLjkzNzVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC41NDY1Njg2Mjc1cmVtICArICAwLjM5MjE1Njg2Mjd2dyAsIDAuOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjU0NjU2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC42MjVyZW0gKyAwLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4NzI1NDkwMnJlbSAgKyAgMC4zMTM3MjU0OTAydncgLCAxcmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjc1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fbG9nby1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG4uaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmhlYWRlcl9fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19idXR0b24ge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4ubWVudSB7XG4gIGZsZXg6IDAgMSBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIG1hcmdpbi10b3A6IDYuMjVyZW07XG4gICAgcGFkZGluZzogMi4zNzVyZW0gMS4yNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY5RkQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgfVxuICAubWVudS1vcGVuIC5tZW51X19ib2R5IHtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG4ubWVudV9faWNvbnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1lbnVfX2ljb25zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1lbnVfX2ljb25zIHtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGdyaWQtY29sdW1uLWdhcDogY2xhbXAoIDIuNXJlbSAsIDEuODcyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDVyZW0gKSkge1xuICAgIC5tZW51X19pY29ucyB7XG4gICAgICBncmlkLWNvbHVtbi1nYXA6IGNsYW1wKCAyLjVyZW0gLCAxLjg3MjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCA1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdyaWQtY29sdW1uLWdhcDogY2xhbXAoIDIuNXJlbSAsIDEuODcyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDVyZW0gKSkge1xuICAgIC5tZW51X19pY29ucyB7XG4gICAgICBncmlkLWNvbHVtbi1nYXA6IGNhbGMoMi41cmVtICsgMi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2ljb25zIHtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1lbnVfX2ljb25zIHtcbiAgICBncmlkLXJvdy1nYXA6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKGdyaWQtcm93LWdhcDogY2xhbXAoIDIuNXJlbSAsIDIuMTg2Mjc0NTA5OHJlbSAgKyAgMS41Njg2Mjc0NTF2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tZW51X19pY29ucyB7XG4gICAgICBncmlkLXJvdy1nYXA6IGNsYW1wKCAyLjVyZW0gLCAyLjE4NjI3NDUwOThyZW0gICsgIDEuNTY4NjI3NDUxdncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdyaWQtcm93LWdhcDogY2xhbXAoIDIuNXJlbSAsIDIuMTg2Mjc0NTA5OHJlbSAgKyAgMS41Njg2Mjc0NTF2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tZW51X19pY29ucyB7XG4gICAgICBncmlkLXJvdy1nYXA6IGNhbGMoMi41cmVtICsgMS4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZ3JpZC1yb3ctZ2FwOiAyLjVyZW07XG4gIH1cbn1cbi5tZW51X19pY29uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWVudV9fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAwIDEgNTAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgY29sdW1uLWdhcDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChjb2x1bW4tZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNjIyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tZW51X19saXN0IHtcbiAgICAgIGNvbHVtbi1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC42MjI1NDkwMTk2cmVtICArICAzLjEzNzI1NDkwMnZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChjb2x1bW4tZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNjIyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tZW51X19saXN0IHtcbiAgICAgIGNvbHVtbi1nYXA6IGNhbGMoMS4yNXJlbSArIDIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gIH1cbn1cbi5tZW51X19saXN0IHtcbiAgcm93LWdhcDogMC42MjVyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgcm93LWdhcDogMy43NXJlbTtcbiAgfVxufVxuLm1lbnVfX2xpbmsge1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgY3VycmVudENvbG9yIDAlLCBjdXJyZW50Q29sb3IgMTAwJSkgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDAgMnB4OyAvKiDQndCw0YfQsNC70YzQvdCw0Y8g0YjQuNGA0LjQvdCwINC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNGPICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC4zcyBlYXNlO1xufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XG4gIC5tZW51X19saW5rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4OyAvKiDQmtC+0L3QtdGH0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4ICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBjb2xvcjogIzI5NzdENTtcbiAgfVxufVxuXG4uaWNvbi1tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMS44NzVyZW07XG4gICAgaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICB6LWluZGV4OiA1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChhbnktaG92ZXI6IG5vbmUpIHtcbiAgLmljb24tbWVudSB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuaWNvbi1tZW51IHNwYW4sIC5pY29uLW1lbnU6OmJlZm9yZSwgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDAuMTg3NXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyOTZEO1xuICB9XG4gIC5pY29uLW1lbnU6OmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICAuaWNvbi1tZW51IHNwYW4ge1xuICAgIHRvcDogY2FsYyg1MCUgLSAwLjA2MjVyZW0pO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51IHNwYW4ge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudTo6YmVmb3JlLCAubWVudS1vcGVuIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmJlZm9yZSB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBib3R0b206IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbnVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9oZWFkZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURRRDs7QUNOQTs7O0VBR0Msc0JBQUE7QURTRDs7QUNDQTs7RUFFQyxZQUFBO0VBQ0EsZ0JBQUE7QURFRDs7QUNBQTtFQUNDLFdEUVc7RUNQWCxjQUFBO0VBQ0Esc0JERVk7RUNEWixrQkRFVTtFQ0FWLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURFRDs7QUNBQTs7O0VBR0Msc0JEVlk7RUNXWixrQkFBQTtBREdEOztBQ0RBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBRElEOztBQ0ZBO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0FES0Q7O0FDSEE7RUFDQyxnQkFBQTtBRE1EOztBQ0pBO0VBQ0MsbUJBQUE7QURPRDs7QUNMQTs7Ozs7O0VBTUMsb0JBQUE7RUFDQSxrQkFBQTtBRFFEOztBQUFDO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBR0Y7QUFLQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFIRDtBQUlDO0VBTEQ7SUFNRSxjQUFBO0VBREE7QUFDRjtBQUdDO0VBQ0MsY0FBQTtBQURGO0FBSUM7RUFDQyxZQUFBO0FBRkY7O0FBT0E7Ozs7O0NBQUE7QUFRQztFQUVFLHFCQUFBO0VBQ0EsY0FBQTtFQUlDLG9CQUFBO0FBVko7O0FFbEVBO0VBQ0Msa0JBQUE7QUZxRUQ7QUVwRUM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBRnNFRjs7QUVsRUM7RUFDQyxtQkFBQTtBRnFFRjs7QUd6SEE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUg0SEY7QUlsREU7RUQ3RUY7SUM4RUcsbUJBQUE7RUpxREQ7QUFDRjtBSWxEQztFQUVDO0lEcEZGO01DcUZHLDZFQWhCYztJSm9FYjtFQUNGO0VJbERBO0lEeEZGO01DeUZHLCtEQUFBO0lKcURDO0VBQ0Y7QUFDRjtBSW5ERTtFRDdGRjtJQzhGRyxvQkFBQTtFSnNERDtBQUNGO0FJeEVFO0VEN0VGO0lDOEVHLHVCQUFBO0VKMkVEO0FBQ0Y7QUl4RUM7RUFFQztJRHBGRjtNQ3FGRyw4RUFoQmM7SUowRmI7RUFDRjtFSXhFQTtJRHhGRjtNQ3lGRywrREFBQTtJSjJFQztFQUNGO0FBQ0Y7QUl6RUU7RUQ3RkY7SUM4Rkcsb0JBQUE7RUo0RUQ7QUFDRjtBSTlGRTtFRDdFRjtJQzhFRyx3QkFBQTtFSmlHRDtBQUNGO0FJOUZDO0VBRUM7SURwRkY7TUNxRkcsK0VBaEJjO0lKZ0hiO0VBQ0Y7RUk5RkE7SUR4RkY7TUN5RkcsZ0VBQUE7SUppR0M7RUFDRjtBQUNGO0FJL0ZFO0VEN0ZGO0lDOEZHLHFCQUFBO0VKa0dEO0FBQ0Y7QUdqTUE7RUFPRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBRUEsb0VBQUE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMERBQUE7QUg0TE47QUc1TGlFO0VBQzNELHdCQUFBO0VBQ0EsV0FBQTtBSDhMTjtBRzVMTTtFQXRCTjtJQXVCRyx1QkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ00seUJBQUE7RUgrTFA7QUFDRjs7QUszTkE7RUFDRSx5QkFBQTtBTDhORjtBSzNORTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FMNk5IO0FJdkpFO0VDekVBO0lEMEVDLG9CQUFBO0VKMEpEO0FBQ0Y7QUl2SkM7RUFFQztJQ2hGQTtNRGlGQyxnRkFiZTtJSnNLZDtFQUNGO0VJdkpBO0lDcEZBO01EcUZDLG9FQUFBO0lKMEpDO0VBQ0Y7QUFDRjtBSXhKRTtFQ3pGQTtJRDBGQyx1QkFBQTtFSjJKRDtBQUNGO0FJN0tFO0VDekVBO0lEMEVDLHVCQUFBO0VKZ0xEO0FBQ0Y7QUk3S0M7RUFFQztJQ2hGQTtNRGlGQyxtRkFiZTtJSjRMZDtFQUNGO0VJN0tBO0lDcEZBO01EcUZDLHVFQUFBO0lKZ0xDO0VBQ0Y7QUFDRjtBSTlLRTtFQ3pGQTtJRDBGQywwQkFBQTtFSmlMRDtBQUNGO0FLNVFFO0VBUUMsbUJBQUE7QUx1UUg7QUs5UEU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBTGdRSDtBSTNNRTtFQy9DQztJRGdEQSxnQkFBQTtFSjhNRDtBQUNGO0FJM01DO0VBRUM7SUN0REM7TUR1REEsdUVBaEJjO0lKNk5iO0VBQ0Y7RUkzTUE7SUMxREM7TUQyREEsd0RBQUE7SUo4TUM7RUFDRjtBQUNGO0FJNU1FO0VDL0RDO0lEZ0VBLGFBQUE7RUorTUQ7QUFDRjtBS3ZRRTtFQUNDLGtCQUFBO0FMeVFIO0FJcE9FO0VDaENBO0lEaUNDLGlCQUFBO0VKdU9EO0FBQ0Y7QUlwT0M7RUFFQztJQ3ZDQTtNRHdDQywyRUFoQmM7SUpzUGI7RUFDRjtFSXBPQTtJQzNDQTtNRDRDQywrREFBQTtJSnVPQztFQUNGO0FBQ0Y7QUlyT0U7RUNoREE7SURpREMsb0JBQUE7RUp3T0Q7QUFDRjtBSzFSRTtFQUdDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBTDBSSDtBSS9QRTtFQ2hDQTtJRGlDQyx3QkFBQTtFSmtRRDtBQUNGO0FJL1BDO0VBRUM7SUN2Q0E7TUR3Q0MsaUZBaEJjO0lKaVJiO0VBQ0Y7RUkvUEE7SUMzQ0E7TUQ0Q0Msa0VBQUE7SUprUUM7RUFDRjtBQUNGO0FJaFFFO0VDaERBO0lEaURDLHVCQUFBO0VKbVFEO0FBQ0Y7QUtyVEU7RUFPQyxtQkFBQTtBTGlUSDtB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RUxnV0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LzRltC60YHQuNC90ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyZkaXNwbGF5PXN3YXAgLSDQtNC+0LTQsNGC0Lgg0L/RgNC4INC/0ZbQtNC60LvRjtGH0LXQvdC90ZYg0YfQtdGA0LXQtyDQv9C70LDQs9GW0L1cXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0LvQvtC60LDQu9GM0L3RliDRhNCw0LnQu9C4INGI0YDQuNGE0YLRltCyXFxyXFxuLy9AaW1wb3J0IFxcXCJmb250cy9mb250c1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRltC60L7QvdC60L7QstC40YUg0YjRgNC40YTRgtGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J/RltC00LrQu9GO0YfQuNGC0LgsINGP0LrRidC+INGUINGE0LDQudC7INGW0LrQvtC90LrQvtCy0L7Qs9C+INGI0YDQuNGE0YLRg1xcclxcbi8vQGltcG9ydCBcXFwiZm9udHMvaWNvbnNcXFwiO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINGI0LDQsdC70L7QvdGDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyZkaXNwbGF5PXN3YXAg0JTQvtCx0LDQstC40YLRjCDQv9GA0Lgg0L/QvtC00LrQu9GO0YfQtdC90LjQuCDRh9C10YDQtdC3INC/0LvQsNCz0LjQvUBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86cmVndWxhciw1MDAsNjAwLDcwMCw4MDApO1xcclxcbi8vICZzdWJzZXQ9Y3lyaWxsaWMtZXh0XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucyszOjMwMCxyZWd1bGFyJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoxMDAsMzAwLHJlZ3VsYXIsNTAwLDYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLHJlZ3VsYXIsNTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczpyZWd1bGFyLDYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG4vLyDQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INGI0YDQuNGE0YIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuJGZvbnRGYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4kZm9udFNpemU6IHJlbSgyMCk7IC8vINC00LUgMTQocHgpIC0g0YDQvtC30LzRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INC3INC80LDQutC10YLRg1xcclxcblxcclxcbi8vINCe0YHQvdC+0LLQvdGWINC60L7Qu9GM0L7RgNC4XFxyXFxuJG1haW5Db2xvcjogIzAwMDsgLy8g0JrQvtC70ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxcclxcblxcclxcbi8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDQsNC00LDQv9GC0LjQstC90L7RlyDRgdGW0YLQutC4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0JzRltC90ZbQvNCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0YLQvtGA0ZbQvdC60LhcXHJcXG4kbWluV2lkdGg6IDMyMDtcXHJcXG4vLyDQqNC40YDQuNC90LAg0L/QvtC70L7RgtC90LAgKNC80LDQutC10YLRgylcXHJcXG4kbWF4V2lkdGg6IDE5MjA7XFxyXFxuLy8gJG1heFdpZHRoOiAxNzI4O1xcclxcbi8vINCo0LjRgNC40L3QsCDQvtCx0LzQtdC20YPRjtGH0L7Qs9C+INC60L7QvdGC0LXQudC90LXRgNCwICgwID0g0L3QtdC80LDRlCDQvtCx0LzQtdC20LXQvdC90Y8pXFxyXFxuJG1heFdpZHRoQ29udGFpbmVyOiAxNTY1O1xcclxcbi8vINCX0LDQs9Cw0LvRjNC90LjQuSDQstGW0LTRgdGC0YPQvyDRgyDQutC+0L3RgtC10LnQvdC10YDQsFxcclxcbi8vICgzMCA9INC/0L4gMTVweCDQu9GW0LLQvtGA0YPRhyDRliDQv9GA0LDQstC+0YDRg9GHLCAwID0g0L3QtdC80LDRlCDQstGW0LTRgdGC0YPQv9GDKVxcclxcbiRjb250YWluZXJQYWRkaW5nOiAzMDtcXHJcXG5cXHJcXG4vLyDQqNC40YDQuNC90LAg0YHQv9GA0LDRhtGM0L7QstGD0LLQsNC90L3RjyDQv9C10YDRiNC+0LPQviDQsdGA0LXQudC60L/QvtGW0L3RgtGDXFxyXFxuJGNvbnRhaW5lcldpZHRoOiAkbWF4V2lkdGhDb250YWluZXIgKyAkY29udGFpbmVyUGFkZGluZztcXHJcXG5cXHJcXG4vLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQuFxcclxcbiRwYzogZW0oJGNvbnRhaW5lcldpZHRoKTsgLy8g0J/Qmiwg0L3QvtGD0YLQsdGD0LrQuCwg0LTQtdGP0LrRliDQv9C70LDQvdGI0LXRgtC4INGDINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LzRgyDQv9C+0LvQvtC20LXQvdC90ZZcXHJcXG4kdGFibGV0OiBlbSg5OTEuOTgpOyAvLyDQn9C70LDQvdGI0LXRgtC4LCDQtNC10Y/QutGWINGC0LXQu9C10YTQvtC90Lgg0LIg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiRtb2JpbGU6IGVtKDc2Ny45OCk7IC8vINCi0LXQu9C10YTQvtC90LggTFxcclxcbiRtb2JpbGVTbWFsbDogZW0oNDc5Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBTXFxyXFxuXFxyXFxuLy8g0KLQuNC/INCw0LTQsNC/0YLQuNCy0LA6XFxyXFxuLy8gMSA9INGH0YPQudC90ZbRgdGC0YwgKNGDINC60L7QvdGC0LXQudC90LXRgNCwINC90LXQvNCw0ZQg0LHRgNC10LnQutC/0L7RltC90YLRltCyKSxcXHJcXG4vLyAyID0g0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIgKNC60L7QvdGC0LXQudC90LXRgCDQt9C80ZbQvdGO0ZQg0YHQstC+0Y4g0YjQuNGA0LjQvdGDINC/0L4g0LHRgNC10LnQui3Qv9C+0ZfQvdGCKVxcclxcbiRyZXNwb25zaXZlVHlwZTogMTtcXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0J7QsdC90YPQu9C10L3QvdGPID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL251bGxcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQtdCz0LAgQk9EWSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdC8vINCh0LrRgNC+0LvQuyDQt9Cw0LHQu9C+0LrQvtCy0LDQvdC+XFxyXFxuXFx0LmxvY2sgJiB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRcXHR0b3VjaC1hY3Rpb246IG5vbmU7XFxyXFxuXFx0XFx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KHQsNC50YIg0LfQsNCy0LDQvdGC0LDQttC10L3QuNC5XFxyXFxuXFx0LmxvYWRlZCAmIHtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCe0LHQvtC70L7QvdC60LAgd3JhcHBlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi53cmFwcGVyIHtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdEBzdXBwb3J0cyAob3ZlcmZsb3c6IGNsaXApIHtcXHJcXG5cXHRcXHRvdmVyZmxvdzogY2xpcDtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0J/RgNC40YLQuNGB0LrQsNGU0LzQviBmb290ZXJcXHJcXG5cXHQ+IG1haW4ge1xcclxcblxcdFxcdGZsZXg6IDEgMSBhdXRvO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQpNGW0LrRgSDQtNC70Y8g0YHQu9Cw0LnQtNC10YDRltCyXFxyXFxuXFx0PiAqIHtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQntCx0LzQtdC20YPRjtGH0LjQuSDQutC+0L3RgtC10LnQvdC10YAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8qXFxyXFxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XFxyXFxu0LLRgdGW0YUg0LrQu9Cw0YHRltCyLCDRidC+INC80ZbRgdGC0Y/RgtGMICpfX2NvbnRhaW5lclxcclxcbtCd0LDQv9GA0LjQutC70LDQtCBoZWFkZXJfX2NvbnRhaW5lciwgbWFpbl9fY29udGFpbmVyINGWINGCLtC/LlxcclxcbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XFxyXFxuKi9cXHJcXG5AaWYgKCRyZXNwb25zaXZlVHlwZT09MSkge1xcclxcblxcdC8vINCn0YPQudC90LBcXHJcXG5cXHRbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG5cXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuXFx0XFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fSBAZWxzZSB7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgbWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpLCAxNSk7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSwgMTUpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn0gQGVsc2Uge1xcclxcblxcdC8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtCw0LzQuFxcclxcblxcdFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgkY29udGFpbmVyV2lkdGgpO1xcclxcblxcdFxcdH0gQGVsc2Uge1xcclxcblxcdFxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHBjKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oOTcwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg3NTApO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogbm9uZTtcXHJcXG5cXHRcXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjAgYW5kICRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQsdCw0LfQvtCy0LjRhSDRgdGC0LjQu9GW0LIsINGI0LDQsdC70L7QvdGW0LIgKNC30LDQs9C+0YLRltCy0LXQu9GMKSDRgtCwINC00L7Qv9C+0LzRltC20L3QuNGFINC60LvQsNGB0ZbQslxcclxcbi8vINCU0LvRjyDQv9GW0LTQutC70Y7Rh9C10L3QvdGPL9Cy0LjQvNC60L3QtdC90L3RjyDQutC+0L3QutGA0LXRgtC90LjRhSDRgdGC0LjQu9GW0LIg0LTQuNCy0LjRgdGMIGJhc2Uuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2VcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC30LDQs9Cw0LvRjNC90LjRhSDQtdC70LXQvNC10L3RgtGW0LIg0L/RgNC+0LXQutGC0YNcXHJcXG5AaW1wb3J0IFxcXCJjb21tb25cXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC+0LrRgNC10LzQuNGFINCx0LvQvtC60ZbQslxcclxcbkBpbXBvcnQgXFxcImhlYWRlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwiZm9vdGVyXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDRgdGC0L7RgNGW0L3QvtC6XFxyXFxuQGltcG9ydCBcXFwiaG9tZVxcXCI7XFxyXFxuXCIsXCIqIHtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxuXFx0Ym9yZGVyOiAwcHg7XFxyXFxufVxcclxcbiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOmZvY3VzLFxcclxcbjphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmE6Zm9jdXMsXFxyXFxuYTphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG1pbi13aWR0aDogJG1pbldpZHRoICsgcHg7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGNvbG9yOiAkbWFpbkNvbG9yO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6ICRmb250U2l6ZTtcXHJcXG5cXHQvL3RleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuXFx0LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEge1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5hIHtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbnVsIGxpIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5pbWcge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG5cXHRmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcblwiLFwiLy8g0JfQsNCz0LDQu9GM0L3QuNC5INGE0LDQudC7INC10LvQtdC80LXQvdGC0ZbQsiDRhNC+0YDQvFxcclxcbi8vINCU0LvRjyDQv9GW0LTQutC70Y7Rh9C10L3QvdGPL9Cy0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LXQu9C10LzQtdC90YLQsCDRhNC+0YDQvNC4INC00LjQstC40YHRjCBiYXNlL2Zvcm1zL2Zvcm1zLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlL2Zvcm1zL2Zvcm1zXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC/0L7Qv9Cw0L/RltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9wb3B1cFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgdC/0L7QudC70LXRgNGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nwb2xsZXJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGC0LDQsdGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3RhYnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LzQsNC/XFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9tYXBzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINCx0LvQvtC60YMgXFxcItC/0L7QutCw0LfQsNGC0Lgg0YnQtVxcXCJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nob3dtb3JlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQu9C40L/QutC+0LPQviDQsdC70L7QutGDXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zdGlja3lcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QstC90L7QtdC60YDQsNC90L3QvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHNjcmVlblxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0L/QvtC10LrRgNCw0L3QvtGXINC/0YDQvtC60YDRg9GC0LrQuFxcclxcbi8vIFN0eWxlcyBmb3IgZnVsbHBhZ2Ugc2Nyb2xsXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxscGFnZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8gcmlwcGxlINC10YTQtdC60YLRg1xcclxcbi8vIFN0eWxlcyBmb3IgcmlwcGxlIGVmZmVjdFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcmlwcGxlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQutCw0YHRgtC+0LzQvdC+0LPQviDQutGD0YDRgdC+0YDRg1xcclxcbi8vIFN0eWxlcyBmb3IgY3VzdG9tIGN1cnNvclxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvY3Vyc29yXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDRh9GD0LnQvdC40YUg0LrQsNGA0YLQuNC90L7QuiAoSUJHKVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnIChkaXYg0Lcg0LrQsNGA0YLQuNC90LrQvtGOINGC0LAg0LrQu9Cw0YHQsNC80LgpXFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpYmdhIChhINC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbltjbGFzcyo9XFxcIi1pYmdcXFwiXSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbltjbGFzcyo9XFxcIi1pYmdfY29udGFpblxcXCJdIHtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQqNCw0LHQu9C+0L3QuCAo0LfQsNCz0L7RgtGW0LLQu9GWKVxcclxcbi8vIEBleHRlbmQgJdGW0Lwn0Y8g0YjQsNCx0LvQvtC90YM7XFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKFNDU1MpOiBleFxcclxcblxcclxcbi8vINCb0ZbRh9C40LvRjNC90LjQuiDQtNC70Y8g0YHQv9C40YHQutGDXFxyXFxuJWxpc3RDb3VudGVyIHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0Y291bnRlci1yZXNldDogaXRlbTtcXHJcXG5cXHRsaSB7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdCY6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRjb3VudGVyLWluY3JlbWVudDogaXRlbTtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBjb3VudGVyKGl0ZW0pO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90LUg0LLRltC00LXQvlxcclxcbiVyZXNwb25zaXZlVmlkZW8ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGhlaWdodDogMDtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQktGW0LTQtdC+INGP0Log0YTQvtC9XFxyXFxuJXZpZGVvQmFja2dyb3VuZCB7XFxyXFxuXFx0dmlkZW8sXFxyXFxuXFx0aWZyYW1lLFxcclxcblxcdG9iamVjdCxcXHJcXG5cXHRlbWJlZCB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHRvcDogNTAlO1xcclxcblxcdFxcdGxlZnQ6IDUwJTtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR3aWR0aDogYXV0bztcXHJcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0ei1pbmRleDogLTEwMDtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHRltGA0LjQuSDRhNGW0LvRjNGC0YBcXHJcXG4lZ3JheWZpbHRlciB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcXHJcXG5cXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQodC60LDRgdGD0LLQsNGC0Lgg0LLQuNC00ZbQu9C10L3QvdGPXFxyXFxuJW5vc2VsZWN0IHtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLy8g0JTQt9C10YDQutCw0LvRjNC90LUg0LLRltC00L7QsdGA0LDQttC10L3QvdGPXFxyXFxuJW1pcnJvciB7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxyXFxufVxcclxcbi8vINCf0LvQsNCy0L3QuNC5INGB0LrRgNC+0LvQu1xcclxcbiVzbW9vdGhzY3JvbGwge1xcclxcblxcdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG59XFxyXFxuLy8g0KHRhdC+0LLQsNGC0Lgg0YHQutGA0L7Qu9C7XFxyXFxuJWhpZGVzY3JvbGwge1xcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIvLyDQl9Cw0LPQvtC70L7QstC60LgsINC30LDQs9Cw0LvRjNC90ZYg0JHQldCcINCx0LvQvtC60Lgg0YLQsCDRltC90YjQtS4uLlxcclxcbi5idXR0b24tYm9yZGVye1xcclxcblxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMTgpO1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxOCwgMTMpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDM5LCAyNCk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIDM5LCAyNCk7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IHJlbSgxMik7XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IHJlbSgxMik7XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IG1hdGguZGl2KDI3ICwgMTgpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0Y29sb3I6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgIzAwMjk2RDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTUpO1xcclxcblxcdFxcdC8vIHBhZGRpbmc6IHJlbSgxMikgcmVtKDM5KTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNDRDNkU5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjAwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjNzIGVhc2UsIGNvbG9yIDAuM3MgZWFzZTsmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxMCk7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICM2NjY2NjY7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDE0MHB4O1xcclxcbiAgICAgICAgIHBhZGRpbmc6IHJlbSg5KSByZW0oMjQpO1xcclxcblxcdFxcdH1cXHJcXG59XCIsXCIvL9Cf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGDXFxyXFxuQG1peGluIGZvbnQoJGZvbnRfbmFtZSwgJGZpbGVfbmFtZSwgJHdlaWdodCwgJHN0eWxlKSB7XFxyXFxuXFx0QGZvbnQtZmFjZSB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRmb250X25hbWU7XFxyXFxuXFx0XFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcclxcblxcdFxcdHNyYzogdXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAjeyR3ZWlnaHR9O1xcclxcblxcdFxcdGZvbnQtc3R5bGU6ICN7JHN0eWxlfTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vUGVyY2VudFxcclxcbkBmdW5jdGlvbiBwZXJjZW50KCRweCwgJGZyb20pIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRmcm9tKSAqIDEwMCU7XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL1JFTVxcclxcbkBmdW5jdGlvbiByZW0oJHB4KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAxNikgKyByZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL0VNXFxyXFxuQGZ1bmN0aW9uIGVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyBlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcblxcclxcbi8vQ3VycmVuY3lcXHJcXG5AbWl4aW4gY3VycmVuY3koJHN5bSkge1xcclxcblxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRjb250ZW50OiBcXFwiI3skc3ltfVxcXCI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyBHcmlkc1xcclxcbkBtaXhpbiBncmlkQ2FyZHMoJHR5cGU6IGZpdCwgJG1pbjogMjgwcHgsICRtYXg6IDFmciwgJGdhcDogMzBweCkge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z2FwOiAkZ2FwO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tI3skdHlwZX0sIG1pbm1heCgkbWluLCAkbWF4KSk7XFxyXFxufVxcclxcblxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QsCDQstC70LDRgdGC0LjQstGW0YHRgtGMIChjbGFtcClcXHJcXG5AbWl4aW4gYWRhcHRpdmVWYWx1ZSgkcHJvcGVydHksICRzdGFydFNpemUsICRtaW5TaXplLCAka2VlcFNpemU6IDAsICR3aWR0aEZyb206ICRjb250YWluZXJXaWR0aCwgJHdpZHRoVG86ICRtaW5XaWR0aCkge1xcclxcblxcdEBpZiAoJHN0YXJ0U2l6ZT09MCkge1xcclxcblxcdFxcdCRzdGFydFNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHRAaWYgKCRtaW5TaXplPT0wKSB7XFxyXFxuXFx0XFx0JG1pblNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQlNC70Y8gY2FsYygpO1xcclxcblxcdCRhZGRTaXplOiBtYXRoLmRpdigkc3RhcnRTaXplIC0gJG1pblNpemUsIDE2KTtcXHJcXG5cXHJcXG5cXHRAaWYgKCR3aWR0aEZyb20gPT0gJGNvbnRhaW5lcldpZHRoIGFuZCAkbWF4V2lkdGhDb250YWluZXIgPT0gMCkge1xcclxcblxcdFxcdCR3aWR0aEZyb206ICRtYXhXaWR0aDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0Lgg0LIgRU1cXHJcXG5cXHQkd2lkdGhGcm9tTWVkaWE6IGVtKCR3aWR0aEZyb20pO1xcclxcblxcdCR3aWR0aFRvTWVkaWE6IGVtKCR3aWR0aFRvKTtcXHJcXG5cXHJcXG5cXHQvLyDQpNC+0YDQvNGD0LvQsCDQv9C70LDQstCw0Y7Rh9C+0LPQviDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0Ly8g0JjRgdGC0L7Rh9C90LjQujogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9saW5lYXJseS1zY2FsZS1mb250LXNpemUtd2l0aC1jc3MtY2xhbXAtYmFzZWQtb24tdGhlLXZpZXdwb3J0L1xcclxcblxcdCRzbG9wZTogbWF0aC5kaXYoKCRzdGFydFNpemUgLSAkbWluU2l6ZSksICgkd2lkdGhGcm9tIC0gJHdpZHRoVG8pKTtcXHJcXG5cXHQkeUludGVyc2VjdGlvbjogLSR3aWR0aFRvICogJHNsb3BlICsgJG1pblNpemU7XFxyXFxuXFx0QGlmICgkeUludGVyc2VjdGlvbj09MCkge1xcclxcblxcdFxcdCR5SW50ZXJzZWN0aW9uOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0JGZseVZhbHVlOiAje3JlbSgkeUludGVyc2VjdGlvbil9XFxcIiArIFxcXCIgI3skc2xvcGUgKiAxMDB9dnc7XFxyXFxuXFxyXFxuXFx0Ly8g0J7RgtGA0LjQvNCw0L3QvdGPINC30L3QsNGH0LXQvdC90Y8g0LLQu9Cw0YHRgtC40LLQvtGB0YLRllxcclxcblxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkbWluU2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgcmVtKCRzdGFydFNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0Ly8g0K/QutGJ0L4g0L3QtdCz0LDRgtC40LLQvdGWINC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHRAaWYgKCRtaW5TaXplID4gJHN0YXJ0U2l6ZSkge1xcclxcblxcdFxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiByZW0oJG1pblNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQt9C90LDRh9C10L3QvdGPINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAzIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJHN0YXJ0U2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHQvLyDQkNC00LDQv9GC0YPRlNC80L4g0YDQvtC30LzRltGAINGDINC/0YDQvtC80ZbQttC60YMg0LzRltC2INC30LDQt9C90LDRh9C10L3QuNC80Lgg0YjQuNGA0LjQvdCw0LzQuCDQsifRjtC/0L7RgNGC0YNcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoVG9NZWRpYSkgYW5kIChtYXgtd2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdC8vINCv0LrRidC+INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L3QtSDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyBub3QgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IGNhbGMoI3tyZW0oJG1pblNpemUpfSArICN7JGFkZFNpemV9ICogKDEwMHZ3IC0gI3tyZW0oJHdpZHRoVG8pfSkgLyAje21hdGguZGl2KCR3aWR0aEZyb20sIDE2KSAtIG1hdGguZGl2KCR3aWR0aFRvLCAxNil9KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDIge1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkd2lkdGhUb01lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJG1pblNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmhlYWRlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19jb250YWluZXJcXHJcXG5cXHJcXG5cXHRcXHQmX19jb250YWluZXIge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLDIwICwyNi41ICk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLDIwICwyNi41ICk7XFxyXFxuXFx0XFx0XFx0Ly8gcGFkZGluZy10b3A6IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0Ly8gcGFkZGluZy1ib3R0b206IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0Y29sdW1uLWdhcDogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHQvLyAgIHBhZGRpbmctdG9wOiByZW0oMjYuNSk7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gICBwYWRkaW5nLWJvdHRvbTogcmVtKDI2LjUpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nb1xcclxcblxcclxcblxcdFxcdCZfX2xvZ28ge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0Y29sdW1uLWdhcDogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvLWljb25cXHJcXG5cXHJcXG5cXHRcXHQmX19sb2dvLWljb24ge1xcclxcblxcdFxcdFxcdGltZ3tcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDU1LCA0MCk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvLW5hbWVcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQmX19sb2dvLW5hbWUge1xcclxcblxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nby10aXRsZVxcclxcblxcdFxcdFxcclxcblxcdFxcdCZfX2xvZ28tdGl0bGUge1xcclxcblxcdFxcdFxcdC8vIGZvbnQtc2l6ZTogcmVtKDI0KTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyNCwgMTUpO1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigzMyAsIDI0KTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSgxNSk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDE1LCAxMCk7XFxyXFxuXFx0XFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdFxcdFxcdC8vIG1hcmdpbi1ib3R0b206IHJlbSgxNSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19sb2dvLXN1YnRpdGxlXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbG9nby1zdWJ0aXRsZSB7XFxyXFxuXFx0XFx0XFx0Ly8gZm9udC1zaXplOiByZW0oMTYpO1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE2LCAxMik7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IG1hdGguZGl2KDIyICwgMTYpO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbWVudVxcclxcblxcclxcblxcdFxcdCZfX21lbnUge1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19hY3Rpb25zXFxyXFxuXFxyXFxuXFx0XFx0Jl9fYWN0aW9ucyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19idXR0b25cXHJcXG5cXHJcXG5cXHRcXHQmX19idXR0b24ge1xcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG5cXHRcXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRcXHQvLyAubWVudV9fYm9keVxcclxcblxcclxcblxcdFxcdCZfX2JvZHkge1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdFxcdFxcdGxlZnQ6IC0xMDAlO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi10b3A6IHJlbSgxMDApO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IHJlbSgzOCkgcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFx0Ly8gbWluLWhlaWdodDogcmVtKDMwMCk7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjlGRDtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdFxcdFxcdC5tZW51LW9wZW4gJntcXHJcXG5cXHRcXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdCZfX2ljb25ze1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcclxcblxcdFxcdFxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcclxcblxcdFxcdFxcdFxcdC8vIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gZmxleC13cmFwOiB3cmFwO1xcclxcblxcdFxcdFxcdFxcdGZsZXg6IDAgMSBhdXRvO1xcclxcblxcdFxcdFxcdFxcdC8vIHdpZHRoOiByZW0oMTQwKTtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJncmlkLWNvbHVtbi1nYXBcXFwiLDgwICw0MCApO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdyaWQtcm93LWdhcFxcXCIsNjAgLDQwICk7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gZ3JpZC1jb2x1bW4tZ2FwOiByZW0oNDApO1xcclxcblxcdFxcdFxcdFxcdC8vIGdyaWQtcm93LWdhcDogcmVtKDQwKTtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jl9faWNvbntcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tZW51X19saXN0XFxyXFxuXFxyXFxuXFx0XFx0Jl9fbGlzdCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdGZsZXg6IDAgMSA1MCU7XFxyXFxuXFx0XFx0XFx0Ly8gY29sdW1uLWdhcDogcmVtKDYwKTtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJjb2x1bW4tZ2FwXFxcIiwgNjAsIDIwKTtcXHJcXG5cXHRcXHRcXHRyb3ctZ2FwOiByZW0oMTApO1xcclxcblxcdFxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDokbW9iaWxlKXtcXHJcXG5cXHRcXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxuXFx0XFx0XFx0XFx0cm93LWdhcDogcmVtKDYwKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tZW51X19pdGVtXFxyXFxuXFxyXFxuXFx0XFx0Jl9faXRlbSB7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tZW51X19saW5rXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbGluayB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgY3VycmVudENvbG9yIDAlLCBjdXJyZW50Q29sb3IgMTAwJSkgbm8tcmVwZWF0O1xcclxcbiAgICAgIFxcdGJhY2tncm91bmQtc2l6ZTogMCAycHg7IC8qINCd0LDRh9Cw0LvRjNC90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8gKi9cXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcXHJcXG4gICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC4zcyBlYXNlO1xcclxcblxcdFxcdFxcdEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcblxcdFxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7IC8qINCa0L7QvdC10YfQvdCw0Y8g0YjQuNGA0LjQvdCwINC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNGPINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LggKi9cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAgIzI5NzdENTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcbn1cXHJcXG4uaWNvbi1tZW51IHtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy9CdXJnZXJcXHJcXG5cXHJcXG4uaWNvbi1tZW51IHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdHdpZHRoOiByZW0oMzApO1xcclxcblxcdFxcdGhlaWdodDogcmVtKDE4KTtcXHJcXG5cXHRcXHR6LWluZGV4OiA1O1xcclxcblxcdFxcdEBtZWRpYSAoYW55LWhvdmVyOiBub25lKSB7XFxyXFxuXFx0XFx0XFx0Y3Vyc29yOiBkZWZhdWx0O1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRzcGFuLFxcclxcblxcdFxcdCY6OmJlZm9yZSxcXHJcXG5cXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IHJlbSgzKTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyOTZEO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdGJvdHRvbTogMDtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNzUlO1xcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHR0b3A6IGNhbGMoNTAlIC0gcmVtKDEpKTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNTAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQubWVudS1vcGVuICYge1xcclxcblxcdFxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmUsXFxyXFxuXFx0XFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdFxcdHRvcDogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRib3R0b206IGNhbGMoNTAlIC0gcmVtKDEpKTtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNDc2MTI4NjQ1NGJhNjU2Mjc2YlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==