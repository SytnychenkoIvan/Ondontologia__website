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
@media (max-width: 450px) {
  .button-border {
    border-radius: 0.625rem;
    max-width: 140px;
    padding: 0.5625rem 1.5rem;
  }
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
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
  white-space: nowrap;
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
.menu {
  flex: 0 1 auto;
}
@media (max-width: 47.99875em) {
  .menu__body {
    position: fixed;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    margin-top: 6.25rem;
    padding: 2.375rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.menu__icons {
  display: none;
}
@media (max-width: 47.99875em) {
  .menu__icons {
    display: grid;
    grid-template-rows: repeat();
    flex: 0 1 60%;
    column-gap: 2.5rem;
    row-gap: 2.5rem;
    justify-content: space-between;
    align-items: center;
  }
}
.menu__list {
  display: flex;
  align-items: center;
  justify-content: center;
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
    right: 0;
    position: absolute;
    width: 100%;
    height: 0.125rem;
    background-color: #000;
  }
  .icon-menu::before {
    top: 0;
  }
  .icon-menu::after {
    bottom: 0;
  }
  .icon-menu span {
    top: calc(50% - 0.0625rem);
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
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/common.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/header.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n//@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n//&display=swap Добавить при подключении через плагин@import url(https://fonts.googleapis.com/css?family=Shippori+Mincho:regular,500,600,700,800);\r\n// &subset=cyrillic-ext\r\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+3:300,regular&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,300,regular,500,600&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Raleway:300,regular,500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:500&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:regular,600&display=swap\");\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Poppins\";\r\n$fontSize: rem(20); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #000; // Колір шрифту за замовчуванням\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1920;\r\n// $maxWidth: 1728;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1565;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: rem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: rem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: rem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 rem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","// Заголовки, загальні БЕМ блоки та інше...\r\n.button-border{\r\n\t\twhite-space: nowrap;\r\n\t\tfont-size: rem(18);\r\n\t\t@include adaptiveValue(\"font-size\", 18, 13);\r\n\t\t@include adaptiveValue(\"padding-left\", 39, 24);\r\n\t\t@include adaptiveValue(\"padding-right\", 39, 24);\r\n\t\tpadding-top: rem(12);\r\n\t\tpadding-bottom: rem(12);\r\n\t\tline-height: math.div(27 , 18);\r\n\t\tfont-weight: 300;\r\n\t\tcolor: #00296D;\r\n\t\tborder: 1px solid #00296D;\r\n\t\tborder-radius: rem(15);\r\n\t\t// padding: rem(12) rem(39);\r\n\t\tbackground: linear-gradient(to bottom, #44C6E9 50%, transparent 50%);\r\n      background-size: 100% 200%;\r\n      background-position: 0 100%;\r\n      transition: background-position 0.3s ease, color 0.3s ease;&:hover {\r\n      background-position: 0 0;\r\n      color: #fff;\r\n      }\r\n      @media (max-width:450px){\r\n\t\t\tborder-radius: rem(10);\r\n         // font-size: rem(13);  \r\n\t\t\tmax-width: 140px;\r\n\t\t   // padding: 0px 0px 0px 0px;\r\n         padding: rem(9) rem(24);\r\n\t\t}\r\n\t\r\n}","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n\r\n\t\t// .header__container\r\n\r\n\t\t&__container {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tpadding-top: rem(20);\r\n\t\t\tpadding-bottom: rem(20);\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t}\r\n\r\n\t\t// .header__logo\r\n\r\n\t\t&__logo {\r\n\t\t\tdisplay: flex;\r\n\t\t\tcolumn-gap: rem(20);\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\r\n\t\t// .header__logo-icon\r\n\r\n\t\t&__logo-icon {\r\n\t\t\timg{\r\n\t\t\t\t// width: rem(40);\r\n\t\t\t\t@include adaptiveValue(\"width\", 55, 40);\r\n\r\n\t\t\t}\r\n\t\t\t\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-name\r\n\t\t\r\n\t\t&__logo-name {\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\t\t\r\n\t\t// .header__logo-title\r\n\t\t\r\n\t\t&__logo-title {\r\n\t\t\t// font-size: rem(24);\r\n\t\t\t@include adaptiveValue(\"font-size\", 24, 15);\r\n\t\t\tline-height: math.div(33 , 24);\r\n\t\t\tfont-weight: 600;\r\n\t\t\tmargin-bottom: rem(15);\r\n\t\t\twhite-space: nowrap;\r\n\t\t}\r\n\r\n\t\t// .header__logo-subtitle\r\n\r\n\t\t&__logo-subtitle {\r\n\t\t\t// font-size: rem(16);\r\n\t\t\t@include adaptiveValue(\"font-size\", 16, 12);\r\n\t\t\tline-height: math.div(22 , 16);\r\n\t\t\tfont-weight: 400;\r\n\t\t\twhite-space: nowrap;\r\n\t\t}\r\n\r\n\r\n\r\n\t\t// .header__menu\r\n\r\n\t\t&__menu {\r\n\t\t}\r\n\r\n\t\t// .header__actions\r\n\r\n\t\t&__actions {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\r\n\t\t// .header__button\r\n\r\n\t\t&__button {\r\n\t\t\t// white-space: nowrap;\r\n\t\t\t// font-size: rem(18);\r\n\t\t\t// line-height: math.div(27 , 18);\r\n\t\t\t// font-weight: 300;\r\n\t\t\t// color: #00296D;\r\n\t\t\t// border: 1px solid #00296D;\r\n\t\t\t// border-radius: rem(15);\r\n\t\t\t// padding: rem(12) rem(39);\r\n\t\t}\r\n}\r\n.menu {\r\n\t\tflex: 0 1 auto;\r\n\t\t// .menu__body\r\n\r\n\t\t&__body {\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\tmargin-top: rem(100);\r\n\t\t\t\tpadding: rem(38) rem(20);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t// flex-direction: column;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__icons{\r\n\t\t\tdisplay: none;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tgrid-template-rows: repeat();\r\n\t\t\t\t// display: flex;\r\n\t\t\t\t// flex-wrap: wrap;\r\n\t\t\t\tflex: 0 1 60%;\r\n\t\t\t\t// width: rem(140);\r\n\t\t\t\tcolumn-gap: rem(40);\r\n\t\t\t\trow-gap: rem(40);\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t\t&__icon{\r\n\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .menu__list\r\n\r\n\t\t&__list {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\t// column-gap: rem(60);\r\n\t\t\t@include adaptiveValue(\"column-gap\", 60, 20);\r\n\t\t\trow-gap: rem(10);\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\t@media (max-width:$mobile){\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: end;\r\n\t\t\t\trow-gap: rem(60);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// .menu__item\r\n\r\n\t\t&__item {\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t// .menu__link\r\n\r\n\t\t&__link {\r\n\t\t\tfont-size: rem(16);\r\n\t\t\tbackground: linear-gradient(to right, currentColor 0%, currentColor 100%) no-repeat;\r\n      \tbackground-size: 0 2px; /* Начальная ширина подчеркивания */\r\n         background-position: left bottom;\r\n         transition: background-size 0.3s ease;\r\n\t\t\t@media (any-hover: hover) {\r\n\t\t\t\t&:hover {\r\n\t\t\t\tbackground-size: 100% 2px; /* Конечная ширина подчеркивания при наведении */\r\n\t\t\t}\r\n\t\t}\r\n\t\t}\r\n}\r\n.icon-menu {\r\n}\r\n\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n\tdisplay: none;\r\n\t@media (max-width: $mobile) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: rem(30);\r\n\t\theight: rem(18);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tright: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: rem(2);\r\n\t\t\tbackground-color: #000;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - rem(1));\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(50% - rem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - rem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("093eb20075d0519fb0e2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kYmJhNDU0MDE0NTYwMzllNWEzZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNJQUFzSTtBQUN0SSw0SUFBNEk7QUFDNUksb0lBQW9JO0FBQ3BJLDJIQUEySDtBQUMzSCxxSEFBcUg7QUFDckgsa0lBQWtJO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sa1JBQWtSLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxTQUFTLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxZQUFZLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFV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Z0MsNkJBQTZCLDJDQUEyQyxnQ0FBZ0MsV0FBVyxrQkFBa0IsZUFBZSxTQUFTLCtDQUErQyx3QkFBd0IsOEJBQThCLGtDQUFrQyxpQ0FBaUMseURBQXlELDJCQUEyQiwwQkFBMEIscUNBQXFDLG1DQUFtQyw2QkFBNkIsNkJBQTZCLFdBQVcsU0FBUywrQ0FBK0MsbUJBQW1CLCtDQUErQyw2QkFBNkIsOEZBQThGLG9DQUFvQyxrRkFBa0YsbURBQW1ELHFDQUFxQyxxQkFBcUIsdUNBQXVDLDREQUE0RCxTQUFTLFNBQVMsS0FBSyxnQkFBZ0IsS0FBSyxzSkFBc0osb0JBQW9CLG1DQUFtQyx1QkFBdUIsMkJBQTJCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLGtDQUFrQywwQkFBMEIsU0FBUyxpREFBaUQsd0JBQXdCLHVDQUF1QyxtQkFBbUIsNkJBQTZCLHNCQUFzQix5QkFBeUIsaUNBQWlDLFNBQVMsbUJBQW1CLGlCQUFpQixTQUFTLGtCQUFrQixvQkFBb0IsU0FBUyxjQUFjLGtDQUFrQyxTQUFTLHNCQUFzQixnQkFBZ0IscUJBQXFCLFdBQVcsd0NBQXdDLFdBQVcscUJBQXFCLG9DQUFvQyxzQ0FBc0MsV0FBVyxvQkFBb0IsdUNBQXVDLHFDQUFxQyxXQUFXLFNBQVMsT0FBTyxLQUFLLDJCQUEyQjtBQUM1bnpCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQ3BjdkMsc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Zscy1zdGFydC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zKzM6MzAwLHJlZ3VsYXImZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjEwMCwzMDAscmVndWxhciw1MDAsNjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTozMDAscmVndWxhciw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOnJlZ3VsYXIsNjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMzIwcHg7XG59XG5cbmJvZHkge1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4ubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xufVxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xuICAud3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG4gIH1cbn1cbi53cmFwcGVyID4gbWFpbiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLndyYXBwZXIgPiAqIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4vKlxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XG4qL1xuW2NsYXNzKj1fX2NvbnRhaW5lcl0ge1xuICBtYXgtd2lkdGg6IDk5LjY4NzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDAuOTM3NXJlbTtcbn1cblxuW2NsYXNzKj0taWJnXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbltjbGFzcyo9LWliZ10gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5bY2xhc3MqPS1pYmdfY29udGFpbl0gaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmJ1dHRvbi1ib3JkZXIge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuODEyNXJlbSAsIDAuNzM0MDY4NjI3NXJlbSAgKyAgMC4zOTIxNTY4NjI3dncgLCAxLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjgxMjVyZW0gLCAwLjczNDA2ODYyNzVyZW0gICsgIDAuMzkyMTU2ODYyN3Z3ICwgMS4xMjVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjgxMjVyZW0gKyAwLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idXR0b24tYm9yZGVyIHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ1dHRvbi1ib3JkZXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjVyZW0gLCAxLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnV0dG9uLWJvcmRlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLmJ1dHRvbi1ib3JkZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41cmVtICwgMS4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ1dHRvbi1ib3JkZXIge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNXJlbSAsIDEuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idXR0b24tYm9yZGVyIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMS41cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnV0dG9uLWJvcmRlciB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICB9XG59XG4uYnV0dG9uLWJvcmRlciB7XG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDI5NkQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDI5NkQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuOTM3NXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ0QzZFOSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4zcyBlYXNlLCBjb2xvciAwLjNzIGVhc2U7XG59XG4uYnV0dG9uLWJvcmRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmJ1dHRvbi1ib3JkZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICAgIG1heC13aWR0aDogMTQwcHg7XG4gICAgcGFkZGluZzogMC41NjI1cmVtIDEuNXJlbTtcbiAgfVxufVxuXG4uaGVhZGVyX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgY29sdW1uLWdhcDogMS4yNXJlbTtcbn1cbi5oZWFkZXJfX2xvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLWljb24gaW1nIHtcbiAgICB3aWR0aDogMy40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDk5LjY4NzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMi41cmVtICwgMi4yNjQ3MDU4ODI0cmVtICArICAxLjE3NjQ3MDU4ODJ2dyAsIDMuNDM3NXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby1pY29uIGltZyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDIuNXJlbSAsIDIuMjY0NzA1ODgyNHJlbSAgKyAgMS4xNzY0NzA1ODgydncgLCAzLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAyLjVyZW0gLCAyLjI2NDcwNTg4MjRyZW0gICsgIDEuMTc2NDcwNTg4MnZ3ICwgMy40Mzc1cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLWljb24gaW1nIHtcbiAgICAgIHdpZHRoOiBjYWxjKDIuNXJlbSArIDAuOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDc5LjY4NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fbG9nby1pY29uIGltZyB7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fbG9nby1uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjc5NjMyMzUyOTRyZW0gICsgIDAuNzA1ODgyMzUyOXZ3ICwgMS41cmVtICkpIHtcbiAgICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzk2MzIzNTI5NHJlbSAgKyAgMC43MDU4ODIzNTI5dncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43OTYzMjM1Mjk0cmVtICArICAwLjcwNTg4MjM1Mjl2dyAsIDEuNXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC45Mzc1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgfVxufVxuLmhlYWRlcl9fbG9nby10aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5LjY4NzVlbSkge1xuICAuaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjg3MjU0OTAycmVtICArICAwLjMxMzcyNTQ5MDJ2dyAsIDFyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNzVyZW0gKyAwLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNzkuNjg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVhZGVyX19sb2dvLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28tc3VidGl0bGUge1xuICBsaW5lLWhlaWdodDogMS4zNzU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaGVhZGVyX19hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZW51IHtcbiAgZmxleDogMCAxIGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiA2LjI1cmVtO1xuICAgIHBhZGRpbmc6IDIuMzc1cmVtIDEuMjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuLm1lbnVfX2ljb25zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5tZW51X19pY29ucyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgpO1xuICAgIGZsZXg6IDAgMSA2MCU7XG4gICAgY29sdW1uLWdhcDogMi41cmVtO1xuICAgIHJvdy1nYXA6IDIuNXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLm1lbnVfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OS42ODc1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGNvbHVtbi1nYXA6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogOTkuNjg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoY29sdW1uLWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBjb2x1bW4tZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuNjIyNTQ5MDE5NnJlbSAgKyAgMy4xMzcyNTQ5MDJ2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoY29sdW1uLWdhcDogY2xhbXAoIDEuMjVyZW0gLCAwLjYyMjU0OTAxOTZyZW0gICsgIDMuMTM3MjU0OTAydncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBjb2x1bW4tZ2FwOiBjYWxjKDEuMjVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA3OS42ODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICB9XG59XG4ubWVudV9fbGlzdCB7XG4gIHJvdy1nYXA6IDAuNjI1cmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIHJvdy1nYXA6IDMuNzVyZW07XG4gIH1cbn1cbi5tZW51X19saW5rIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGN1cnJlbnRDb2xvciAwJSwgY3VycmVudENvbG9yIDEwMCUpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAwIDJweDsgLyog0J3QsNGH0LDQu9GM0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAubWVudV9fbGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDsgLyog0JrQvtC90LXRh9C90LDRjyDRiNC40YDQuNC90LAg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8g0L/RgNC4INC90LDQstC10LTQtdC90LjQuCAqL1xuICB9XG59XG5cbi5pY29uLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmljb24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgICBoZWlnaHQ6IDEuMTI1cmVtO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKGFueS1ob3Zlcjogbm9uZSkge1xuICAuaWNvbi1tZW51IHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5pY29uLW1lbnUgc3BhbiwgLmljb24tbWVudTo6YmVmb3JlLCAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDAuMTI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIH1cbiAgLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgfVxuICAuaWNvbi1tZW51IHNwYW4ge1xuICAgIHRvcDogY2FsYyg1MCUgLSAwLjA2MjVyZW0pO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudSBzcGFuIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmJlZm9yZSB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBib3R0b206IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbnVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9oZWFkZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdB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O0FLMU9FO0VBQ0MsZUFBQTtFQUNBLG1GQUFBO0VBQ0ksc0JBQUEsRUFBQSxtQ0FBQTtFQUNFLGdDQUFBO0VBQ0EscUNBQUE7QUw0T1Q7QUszT0c7RUFDQztJQUNBLHlCQUFBLEVBQUEsZ0RBQUE7RUw2T0Y7QUFDRjs7QUtqT0E7RUFDQyxhQUFBO0FMb09EO0FLbk9DO0VBRkQ7SUFHRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VMc09BO0FBQ0Y7QUt0T0U7RUFSRjtJQVNHLGVBQUE7RUx5T0Q7QUFDRjtBS2pQQztFQVNDO0lBR0MsV0FBQTtJQUNBLDRCQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7RUx5T0Q7RUt2T0E7SUFDQyxNQUFBO0VMeU9EO0VLdk9BO0lBQ0MsU0FBQTtFTHlPRDtFS3ZPQTtJQUNDLDBCQUFBO0VMeU9EO0VLdE9DO0lBQ0MsUUFBQTtFTHdPRjtFS25PQztJQUNDLDBCQUFBO0lBQ0EseUJBQUE7RUxxT0Y7RUtuT0M7SUFDQyw2QkFBQTtJQUNBLHdCQUFBO0VMcU9GO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwic2FzczptYXRoXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINC80ZbQutGB0LjQvdGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuQGltcG9ydCBcXFwiYmFzZS9taXhpbnNcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8mZGlzcGxheT1zd2FwIC0g0LTQvtC00LDRgtC4INC/0YDQuCDQv9GW0LTQutC70Y7Rh9C10L3QvdGWINGH0LXRgNC10Lcg0L/Qu9Cw0LPRltC9XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQuNGC0LgsINGP0LrRidC+INGUINC70L7QutCw0LvRjNC90ZYg0YTQsNC50LvQuCDRiNGA0LjRhNGC0ZbQslxcclxcbi8vQGltcG9ydCBcXFwiZm9udHMvZm9udHNcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0ZbQutC+0L3QutC+0LLQuNGFINGI0YDQuNGE0YLRltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDRhNCw0LnQuyDRltC60L7QvdC60L7QstC+0LPQviDRiNGA0LjRhNGC0YNcXHJcXG4vL0BpbXBvcnQgXFxcImZvbnRzL2ljb25zXFxcIjtcXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDRiNCw0LHQu9C+0L3RgyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8mZGlzcGxheT1zd2FwINCU0L7QsdCw0LLQuNGC0Ywg0L/RgNC4INC/0L7QtNC60LvRjtGH0LXQvdC40Lgg0YfQtdGA0LXQtyDQv9C70LDQs9C40L1AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U2hpcHBvcmkrTWluY2hvOnJlZ3VsYXIsNTAwLDYwMCw3MDAsODAwKTtcXHJcXG4vLyAmc3Vic2V0PWN5cmlsbGljLWV4dFxcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrMzozMDAscmVndWxhciZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MTAwLDMwMCxyZWd1bGFyLDUwMCw2MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjMwMCxyZWd1bGFyLDUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6cmVndWxhciw2MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuLy8g0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvCDRiNGA0LjRhNGCID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiRmb250RmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuJGZvbnRTaXplOiByZW0oMjApOyAvLyDQtNC1IDE0KHB4KSAtINGA0L7Qt9C80ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvCDQtyDQvNCw0LrQtdGC0YNcXHJcXG5cXHJcXG4vLyDQntGB0L3QvtCy0L3RliDQutC+0LvRjNC+0YDQuFxcclxcbiRtYWluQ29sb3I6ICMwMDA7IC8vINCa0L7Qu9GW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG5cXHJcXG4vLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0LDQtNCw0L/RgtC40LLQvdC+0Zcg0YHRltGC0LrQuCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vINCc0ZbQvdGW0LzQsNC70YzQvdCwINGI0LjRgNC40L3QsCDRgdGC0L7RgNGW0L3QutC4XFxyXFxuJG1pbldpZHRoOiAzMjA7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC/0L7Qu9C+0YLQvdCwICjQvNCw0LrQtdGC0YMpXFxyXFxuJG1heFdpZHRoOiAxOTIwO1xcclxcbi8vICRtYXhXaWR0aDogMTcyODtcXHJcXG4vLyDQqNC40YDQuNC90LAg0L7QsdC80LXQttGD0Y7Rh9C+0LPQviDQutC+0L3RgtC10LnQvdC10YDQsCAoMCA9INC90LXQvNCw0ZQg0L7QsdC80LXQttC10L3QvdGPKVxcclxcbiRtYXhXaWR0aENvbnRhaW5lcjogMTU2NTtcXHJcXG4vLyDQl9Cw0LPQsNC70YzQvdC40Lkg0LLRltC00YHRgtGD0L8g0YMg0LrQvtC90YLQtdC50L3QtdGA0LBcXHJcXG4vLyAoMzAgPSDQv9C+IDE1cHgg0LvRltCy0L7RgNGD0Ycg0ZYg0L/RgNCw0LLQvtGA0YPRhywgMCA9INC90LXQvNCw0ZQg0LLRltC00YHRgtGD0L/RgylcXHJcXG4kY29udGFpbmVyUGFkZGluZzogMzA7XFxyXFxuXFxyXFxuLy8g0KjQuNGA0LjQvdCwINGB0L/RgNCw0YbRjNC+0LLRg9Cy0LDQvdC90Y8g0L/QtdGA0YjQvtCz0L4g0LHRgNC10LnQutC/0L7RltC90YLRg1xcclxcbiRjb250YWluZXJXaWR0aDogJG1heFdpZHRoQ29udGFpbmVyICsgJGNvbnRhaW5lclBhZGRpbmc7XFxyXFxuXFxyXFxuLy8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0LhcXHJcXG4kcGM6IGVtKCRjb250YWluZXJXaWR0aCk7IC8vINCf0JosINC90L7Rg9GC0LHRg9C60LgsINC00LXRj9C60ZYg0L/Qu9Cw0L3RiNC10YLQuCDRgyDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJHRhYmxldDogZW0oOTkxLjk4KTsgLy8g0J/Qu9Cw0L3RiNC10YLQuCwg0LTQtdGP0LrRliDRgtC10LvQtdGE0L7QvdC4INCyINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LzRgyDQv9C+0LvQvtC20LXQvdC90ZZcXHJcXG4kbW9iaWxlOiBlbSg3NjcuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IExcXHJcXG4kbW9iaWxlU21hbGw6IGVtKDQ3OS45OCk7IC8vINCi0LXQu9C10YTQvtC90LggU1xcclxcblxcclxcbi8vINCi0LjQvyDQsNC00LDQv9GC0LjQstCwOlxcclxcbi8vIDEgPSDRh9GD0LnQvdGW0YHRgtGMICjRgyDQutC+0L3RgtC10LnQvdC10YDQsCDQvdC10LzQsNGUINCx0YDQtdC50LrQv9C+0ZbQvdGC0ZbQsiksXFxyXFxuLy8gMiA9INC/0L4g0LHRgNC10LnQui3Qv9C+0ZfQvdGCICjQutC+0L3RgtC10LnQvdC10YAg0LfQvNGW0L3RjtGUINGB0LLQvtGOINGI0LjRgNC40L3RgyDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgilcXHJcXG4kcmVzcG9uc2l2ZVR5cGU6IDE7XFxyXFxuXFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vINCe0LHQvdGD0LvQtdC90L3RjyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuQGltcG9ydCBcXFwiYmFzZS9udWxsXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGC0LXQs9CwIEJPRFkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHQvLyDQodC60YDQvtC70Lsg0LfQsNCx0LvQvtC60L7QstCw0L3QvlxcclxcblxcdC5sb2NrICYge1xcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0XFx0dG91Y2gtYWN0aW9uOiBub25lO1xcclxcblxcdFxcdG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcdC8vINCh0LDQudGCINC30LDQstCw0L3RgtCw0LbQtdC90LjQuVxcclxcblxcdC5sb2FkZWQgJiB7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQntCx0L7Qu9C+0L3QutCwIHdyYXBwZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4ud3JhcHBlciB7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRAc3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGNsaXA7XFxyXFxuXFx0fVxcclxcblxcdC8vINCf0YDQuNGC0LjRgdC60LDRlNC80L4gZm9vdGVyXFxyXFxuXFx0PiBtYWluIHtcXHJcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KTRltC60YEg0LTQu9GPINGB0LvQsNC50LTQtdGA0ZbQslxcclxcblxcdD4gKiB7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0J7QsdC80LXQttGD0Y7Rh9C40Lkg0LrQvtC90YLQtdC50L3QtdGAID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vKlxcclxcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxcclxcbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcXHJcXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cXHJcXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxcclxcbiovXFxyXFxuQGlmICgkcmVzcG9uc2l2ZVR5cGU9PTEpIHtcXHJcXG5cXHQvLyDQp9GD0LnQvdCwXFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcblxcdFxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH0gQGVsc2Uge1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSwgMTUpO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksIDE1KTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59IEBlbHNlIHtcXHJcXG5cXHQvLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQsNC80LhcXHJcXG5cXHRbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG5cXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwYykge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDk3MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oNzUwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IG5vbmU7XFxyXFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wIGFuZCAkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LHQsNC30L7QstC40YUg0YHRgtC40LvRltCyLCDRiNCw0LHQu9C+0L3RltCyICjQt9Cw0LPQvtGC0ZbQstC10LvRjCkg0YLQsCDQtNC+0L/QvtC80ZbQttC90LjRhSDQutC70LDRgdGW0LJcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstC40LzQutC90LXQvdC90Y8g0LrQvtC90LrRgNC10YLQvdC40YUg0YHRgtC40LvRltCyINC00LjQstC40YHRjCBiYXNlLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQt9Cw0LPQsNC70YzQvdC40YUg0LXQu9C10LzQtdC90YLRltCyINC/0YDQvtC10LrRgtGDXFxyXFxuQGltcG9ydCBcXFwiY29tbW9uXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDQsdC70L7QutGW0LJcXHJcXG5AaW1wb3J0IFxcXCJoZWFkZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcImZvb3RlclxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0YHRgtC+0YDRltC90L7QulxcclxcbkBpbXBvcnQgXFxcImhvbWVcXFwiO1xcclxcblwiLFwiKiB7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcblxcdGJvcmRlcjogMHB4O1xcclxcbn1cXHJcXG4qLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpmb2N1cyxcXHJcXG46YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5hOmZvY3VzLFxcclxcbmE6YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRtaW4td2lkdGg6ICRtaW5XaWR0aCArIHB4O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRjb2xvcjogJG1haW5Db2xvcjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiAkZm9udFNpemU7XFxyXFxuXFx0Ly90ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcblxcdC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG51bCBsaSB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cIixcIi8vINCX0LDQs9Cw0LvRjNC90LjQuSDRhNCw0LnQuyDQtdC70LXQvNC10L3RgtGW0LIg0YTQvtGA0LxcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstGW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQutC+0L3QutGA0LXRgtC90L7Qs9C+INC10LvQtdC80LXQvdGC0LAg0YTQvtGA0LzQuCDQtNC40LLQuNGB0YwgYmFzZS9mb3Jtcy9mb3Jtcy5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZS9mb3Jtcy9mb3Jtc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQv9C+0L/QsNC/0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcG9wdXBcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YHQv9C+0LnQu9C10YDRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zcG9sbGVyc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtCw0LHRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS90YWJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC80LDQv1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvbWFwc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQsdC70L7QutGDIFxcXCLQv9C+0LrQsNC30LDRgtC4INGJ0LVcXFwiXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zaG93bW9yZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LvQuNC/0LrQvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3RpY2t5XFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LLQvdC+0LXQutGA0LDQvdC90L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxzY3JlZW5cXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QtdC60YDQsNC90L7RlyDQv9GA0L7QutGA0YPRgtC60LhcXHJcXG4vLyBTdHlsZXMgZm9yIGZ1bGxwYWdlIHNjcm9sbFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHBhZ2VcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPIHJpcHBsZSDQtdGE0LXQutGC0YNcXHJcXG4vLyBTdHlsZXMgZm9yIHJpcHBsZSBlZmZlY3RcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3JpcHBsZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LrQsNGB0YLQvtC80L3QvtCz0L4g0LrRg9GA0YHQvtGA0YNcXHJcXG4vLyBTdHlsZXMgZm9yIGN1c3RvbSBjdXJzb3JcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2N1cnNvclxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0YfRg9C50L3QuNGFINC60LDRgNGC0LjQvdC+0LogKElCRylcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZyAoZGl2INC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnYSAoYSDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG5bY2xhc3MqPVxcXCItaWJnXFxcIl0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5bY2xhc3MqPVxcXCItaWJnX2NvbnRhaW5cXFwiXSB7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0KjQsNCx0LvQvtC90LggKNC30LDQs9C+0YLRltCy0LvRlilcXHJcXG4vLyBAZXh0ZW5kICXRltC8J9GPINGI0LDQsdC70L7QvdGDO1xcclxcbi8vINCh0L3RltC/0L/QtdGCIChTQ1NTKTogZXhcXHJcXG5cXHJcXG4vLyDQm9GW0YfQuNC70YzQvdC40Log0LTQu9GPINGB0L/QuNGB0LrRg1xcclxcbiVsaXN0Q291bnRlciB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdGNvdW50ZXItcmVzZXQ6IGl0ZW07XFxyXFxuXFx0bGkge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHQmOmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGl0ZW07XFxyXFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihpdGVtKTtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdC1INCy0ZbQtNC10L5cXHJcXG4lcmVzcG9uc2l2ZVZpZGVvIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDU2LjI1JTtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JLRltC00LXQviDRj9C6INGE0L7QvVxcclxcbiV2aWRlb0JhY2tncm91bmQge1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdHotaW5kZXg6IC0xMDA7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0ZbRgNC40Lkg0YTRltC70YzRgtGAXFxyXFxuJWdyYXlmaWx0ZXIge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxyXFxuXFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHQutCw0YHRg9Cy0LDRgtC4INCy0LjQtNGW0LvQtdC90L3Rj1xcclxcbiVub3NlbGVjdCB7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi8vINCU0LfQtdGA0LrQsNC70YzQvdC1INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xcclxcbiVtaXJyb3Ige1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbn1cXHJcXG4vLyDQn9C70LDQstC90LjQuSDRgdC60YDQvtC70LtcXHJcXG4lc21vb3Roc2Nyb2xsIHtcXHJcXG5cXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxufVxcclxcbi8vINCh0YXQvtCy0LDRgtC4INGB0LrRgNC+0LvQu1xcclxcbiVoaWRlc2Nyb2xsIHtcXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy8g0JfQsNCz0L7Qu9C+0LLQutC4LCDQt9Cw0LPQsNC70YzQvdGWINCR0JXQnCDQsdC70L7QutC4INGC0LAg0ZbQvdGI0LUuLi5cXHJcXG4uYnV0dG9uLWJvcmRlcntcXHJcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxOCwgMTMpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDM5LCAyNCk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIDM5LCAyNCk7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IHJlbSgxMik7XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IHJlbSgxMik7XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IG1hdGguZGl2KDI3ICwgMTgpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0Y29sb3I6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgIzAwMjk2RDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTUpO1xcclxcblxcdFxcdC8vIHBhZGRpbmc6IHJlbSgxMikgcmVtKDM5KTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNDRDNkU5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjAwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjNzIGVhc2UsIGNvbG9yIDAuM3MgZWFzZTsmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjQ1MHB4KXtcXHJcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTApO1xcclxcbiAgICAgICAgIC8vIGZvbnQtc2l6ZTogcmVtKDEzKTsgIFxcclxcblxcdFxcdFxcdG1heC13aWR0aDogMTQwcHg7XFxyXFxuXFx0XFx0ICAgLy8gcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xcclxcbiAgICAgICAgIHBhZGRpbmc6IHJlbSg5KSByZW0oMjQpO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHJcXG59XCIsXCIvL9Cf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGDXFxyXFxuQG1peGluIGZvbnQoJGZvbnRfbmFtZSwgJGZpbGVfbmFtZSwgJHdlaWdodCwgJHN0eWxlKSB7XFxyXFxuXFx0QGZvbnQtZmFjZSB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRmb250X25hbWU7XFxyXFxuXFx0XFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcclxcblxcdFxcdHNyYzogdXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAjeyR3ZWlnaHR9O1xcclxcblxcdFxcdGZvbnQtc3R5bGU6ICN7JHN0eWxlfTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vUGVyY2VudFxcclxcbkBmdW5jdGlvbiBwZXJjZW50KCRweCwgJGZyb20pIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRmcm9tKSAqIDEwMCU7XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL1JFTVxcclxcbkBmdW5jdGlvbiByZW0oJHB4KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAxNikgKyByZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL0VNXFxyXFxuQGZ1bmN0aW9uIGVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyBlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcblxcclxcbi8vQ3VycmVuY3lcXHJcXG5AbWl4aW4gY3VycmVuY3koJHN5bSkge1xcclxcblxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRjb250ZW50OiBcXFwiI3skc3ltfVxcXCI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyBHcmlkc1xcclxcbkBtaXhpbiBncmlkQ2FyZHMoJHR5cGU6IGZpdCwgJG1pbjogMjgwcHgsICRtYXg6IDFmciwgJGdhcDogMzBweCkge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z2FwOiAkZ2FwO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tI3skdHlwZX0sIG1pbm1heCgkbWluLCAkbWF4KSk7XFxyXFxufVxcclxcblxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QsCDQstC70LDRgdGC0LjQstGW0YHRgtGMIChjbGFtcClcXHJcXG5AbWl4aW4gYWRhcHRpdmVWYWx1ZSgkcHJvcGVydHksICRzdGFydFNpemUsICRtaW5TaXplLCAka2VlcFNpemU6IDAsICR3aWR0aEZyb206ICRjb250YWluZXJXaWR0aCwgJHdpZHRoVG86ICRtaW5XaWR0aCkge1xcclxcblxcdEBpZiAoJHN0YXJ0U2l6ZT09MCkge1xcclxcblxcdFxcdCRzdGFydFNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHRAaWYgKCRtaW5TaXplPT0wKSB7XFxyXFxuXFx0XFx0JG1pblNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQlNC70Y8gY2FsYygpO1xcclxcblxcdCRhZGRTaXplOiBtYXRoLmRpdigkc3RhcnRTaXplIC0gJG1pblNpemUsIDE2KTtcXHJcXG5cXHJcXG5cXHRAaWYgKCR3aWR0aEZyb20gPT0gJGNvbnRhaW5lcldpZHRoIGFuZCAkbWF4V2lkdGhDb250YWluZXIgPT0gMCkge1xcclxcblxcdFxcdCR3aWR0aEZyb206ICRtYXhXaWR0aDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0Lgg0LIgRU1cXHJcXG5cXHQkd2lkdGhGcm9tTWVkaWE6IGVtKCR3aWR0aEZyb20pO1xcclxcblxcdCR3aWR0aFRvTWVkaWE6IGVtKCR3aWR0aFRvKTtcXHJcXG5cXHJcXG5cXHQvLyDQpNC+0YDQvNGD0LvQsCDQv9C70LDQstCw0Y7Rh9C+0LPQviDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0Ly8g0JjRgdGC0L7Rh9C90LjQujogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9saW5lYXJseS1zY2FsZS1mb250LXNpemUtd2l0aC1jc3MtY2xhbXAtYmFzZWQtb24tdGhlLXZpZXdwb3J0L1xcclxcblxcdCRzbG9wZTogbWF0aC5kaXYoKCRzdGFydFNpemUgLSAkbWluU2l6ZSksICgkd2lkdGhGcm9tIC0gJHdpZHRoVG8pKTtcXHJcXG5cXHQkeUludGVyc2VjdGlvbjogLSR3aWR0aFRvICogJHNsb3BlICsgJG1pblNpemU7XFxyXFxuXFx0QGlmICgkeUludGVyc2VjdGlvbj09MCkge1xcclxcblxcdFxcdCR5SW50ZXJzZWN0aW9uOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0JGZseVZhbHVlOiAje3JlbSgkeUludGVyc2VjdGlvbil9XFxcIiArIFxcXCIgI3skc2xvcGUgKiAxMDB9dnc7XFxyXFxuXFxyXFxuXFx0Ly8g0J7RgtGA0LjQvNCw0L3QvdGPINC30L3QsNGH0LXQvdC90Y8g0LLQu9Cw0YHRgtC40LLQvtGB0YLRllxcclxcblxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkbWluU2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgcmVtKCRzdGFydFNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0Ly8g0K/QutGJ0L4g0L3QtdCz0LDRgtC40LLQvdGWINC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHRAaWYgKCRtaW5TaXplID4gJHN0YXJ0U2l6ZSkge1xcclxcblxcdFxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiByZW0oJG1pblNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQt9C90LDRh9C10L3QvdGPINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAzIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJHN0YXJ0U2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHQvLyDQkNC00LDQv9GC0YPRlNC80L4g0YDQvtC30LzRltGAINGDINC/0YDQvtC80ZbQttC60YMg0LzRltC2INC30LDQt9C90LDRh9C10L3QuNC80Lgg0YjQuNGA0LjQvdCw0LzQuCDQsifRjtC/0L7RgNGC0YNcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoVG9NZWRpYSkgYW5kIChtYXgtd2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdC8vINCv0LrRidC+INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L3QtSDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyBub3QgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IGNhbGMoI3tyZW0oJG1pblNpemUpfSArICN7JGFkZFNpemV9ICogKDEwMHZ3IC0gI3tyZW0oJHdpZHRoVG8pfSkgLyAje21hdGguZGl2KCR3aWR0aEZyb20sIDE2KSAtIG1hdGguZGl2KCR3aWR0aFRvLCAxNil9KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDIge1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkd2lkdGhUb01lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJG1pblNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmhlYWRlciB7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fY29udGFpbmVyXFxyXFxuXFxyXFxuXFx0XFx0Jl9fY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdHBhZGRpbmctdG9wOiByZW0oMjApO1xcclxcblxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiByZW0oMjApO1xcclxcblxcdFxcdFxcdGNvbHVtbi1nYXA6IHJlbSgyMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ29cXHJcXG5cXHJcXG5cXHRcXHQmX19sb2dvIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGNvbHVtbi1nYXA6IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nby1pY29uXFxyXFxuXFxyXFxuXFx0XFx0Jl9fbG9nby1pY29uIHtcXHJcXG5cXHRcXHRcXHRpbWd7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gd2lkdGg6IHJlbSg0MCk7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA1NSwgNDApO1xcclxcblxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Ly8gLmhlYWRlcl9fbG9nby1uYW1lXFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jl9fbG9nby1uYW1lIHtcXHJcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28tdGl0bGVcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQmX19sb2dvLXRpdGxlIHtcXHJcXG5cXHRcXHRcXHQvLyBmb250LXNpemU6IHJlbSgyNCk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjQsIDE1KTtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogbWF0aC5kaXYoMzMgLCAyNCk7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oMTUpO1xcclxcblxcdFxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2xvZ28tc3VidGl0bGVcXHJcXG5cXHJcXG5cXHRcXHQmX19sb2dvLXN1YnRpdGxlIHtcXHJcXG5cXHRcXHRcXHQvLyBmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDEyKTtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogbWF0aC5kaXYoMjIgLCAxNik7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRcXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHQvLyAuaGVhZGVyX19tZW51XFxyXFxuXFxyXFxuXFx0XFx0Jl9fbWVudSB7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2FjdGlvbnNcXHJcXG5cXHJcXG5cXHRcXHQmX19hY3Rpb25zIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5oZWFkZXJfX2J1dHRvblxcclxcblxcclxcblxcdFxcdCZfX2J1dHRvbiB7XFxyXFxuXFx0XFx0XFx0Ly8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHRcXHRcXHQvLyBmb250LXNpemU6IHJlbSgxOCk7XFxyXFxuXFx0XFx0XFx0Ly8gbGluZS1oZWlnaHQ6IG1hdGguZGl2KDI3ICwgMTgpO1xcclxcblxcdFxcdFxcdC8vIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0XFx0Ly8gY29sb3I6ICMwMDI5NkQ7XFxyXFxuXFx0XFx0XFx0Ly8gYm9yZGVyOiAxcHggc29saWQgIzAwMjk2RDtcXHJcXG5cXHRcXHRcXHQvLyBib3JkZXItcmFkaXVzOiByZW0oMTUpO1xcclxcblxcdFxcdFxcdC8vIHBhZGRpbmc6IHJlbSgxMikgcmVtKDM5KTtcXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG5cXHRcXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRcXHQvLyAubWVudV9fYm9keVxcclxcblxcclxcblxcdFxcdCZfX2JvZHkge1xcclxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiRtb2JpbGUpe1xcclxcblxcdFxcdFxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLXRvcDogcmVtKDEwMCk7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogcmVtKDM4KSByZW0oMjApO1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCZfX2ljb25ze1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgpO1xcclxcblxcdFxcdFxcdFxcdC8vIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gZmxleC13cmFwOiB3cmFwO1xcclxcblxcdFxcdFxcdFxcdGZsZXg6IDAgMSA2MCU7XFxyXFxuXFx0XFx0XFx0XFx0Ly8gd2lkdGg6IHJlbSgxNDApO1xcclxcblxcdFxcdFxcdFxcdGNvbHVtbi1nYXA6IHJlbSg0MCk7XFxyXFxuXFx0XFx0XFx0XFx0cm93LWdhcDogcmVtKDQwKTtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jl9faWNvbntcXHJcXG5cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIC5tZW51X19saXN0XFxyXFxuXFxyXFxuXFx0XFx0Jl9fbGlzdCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdC8vIGNvbHVtbi1nYXA6IHJlbSg2MCk7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiY29sdW1uLWdhcFxcXCIsIDYwLCAyMCk7XFxyXFxuXFx0XFx0XFx0cm93LWdhcDogcmVtKDEwKTtcXHJcXG5cXHRcXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6JG1vYmlsZSl7XFxyXFxuXFx0XFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogZW5kO1xcclxcblxcdFxcdFxcdFxcdHJvdy1nYXA6IHJlbSg2MCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWVudV9faXRlbVxcclxcblxcclxcblxcdFxcdCZfX2l0ZW0ge1xcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyAubWVudV9fbGlua1xcclxcblxcclxcblxcdFxcdCZfX2xpbmsge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGN1cnJlbnRDb2xvciAwJSwgY3VycmVudENvbG9yIDEwMCUpIG5vLXJlcGVhdDtcXHJcXG4gICAgICBcXHRiYWNrZ3JvdW5kLXNpemU6IDAgMnB4OyAvKiDQndCw0YfQsNC70YzQvdCw0Y8g0YjQuNGA0LjQvdCwINC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNGPICovXFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XFxyXFxuICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcXHJcXG5cXHRcXHRcXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG5cXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4OyAvKiDQmtC+0L3QtdGH0L3QsNGPINGI0LjRgNC40L3QsCDQv9C+0LTRh9C10YDQutC40LLQsNC90LjRjyDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4ICovXFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxufVxcclxcbi5pY29uLW1lbnUge1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vL0J1cmdlclxcclxcblxcclxcbi5pY29uLW1lbnUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0d2lkdGg6IHJlbSgzMCk7XFxyXFxuXFx0XFx0aGVpZ2h0OiByZW0oMTgpO1xcclxcblxcdFxcdHotaW5kZXg6IDU7XFxyXFxuXFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IG5vbmUpIHtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4sXFxyXFxuXFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdHJpZ2h0OiAwO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IHJlbSgyKTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdGJvdHRvbTogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0dG9wOiBjYWxjKDUwJSAtIHJlbSgxKSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC5tZW51LW9wZW4gJiB7XFxyXFxuXFx0XFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZSxcXHJcXG5cXHRcXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiBjYWxjKDUwJSAtIHJlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdFxcdGJvdHRvbTogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA5M2ViMjAwNzVkMDUxOWZiMGUyXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9