/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n:root{\r\n  --ligth-blue: #0da5f3;\r\n  --off-white: hsl(210, 36%, 96%);\r\n  --more-off-white: hsl(202, 15%, 90%);\r\n  --white-color: white;\r\n  --red-color:#F51B1B;\r\n}\r\nbody{\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: var(--off-white);\r\n  min-width: 1000px;\r\n  overflow-x: hidden;\r\n}\r\nnav{\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: var(--white-color);\r\n  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.5);\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n.page-title>h1{\r\n  font-size: 60px;\r\n}\r\n.fa-check-circle{\r\n  color: var(--ligth-blue);\r\n}\r\nbutton{\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n}\r\n.login{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 95%;\r\n  padding: 5px 15px 5px 15px;\r\n  text-transform: capitalize;\r\n  font-size: 24px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transform: translate(-95%,-50%);\r\n  background-color: transparent;\r\n  color: var(--ligth-blue);\r\n  border: 2px solid var(--ligth-blue);\r\n  border-radius: 30px;\r\n  transition: .5s;\r\n}\r\n.login:hover{\r\n  background-color: var(--ligth-blue);\r\n  color: var(--white-color);\r\n}\r\n.toggle{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 3%;\r\n  transform: translate(-3%,-50%);\r\n  font-size: 36px;\r\n  color: var(--ligth-blue);\r\n  transition: .5s;\r\n}\r\n.toggle:hover{\r\n  transform: translate(-3%,-50%) rotate(-90deg);\r\n}\r\n\r\n.content{\r\n  display: flex;\r\n}\r\n.sidebar{\r\n  min-height: 90vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--white-color);\r\n  gap: 15px;\r\n  padding: 30px 15px 30px 15px;\r\n  transition: .7s transform;\r\n}\r\n.resize{\r\n  position: relative;\r\n  background-color: var(--off-white);\r\n  cursor: col-resize;\r\n  flex-basis: 4px;\r\n  user-select: none;\r\n  transition: .7s transform;\r\n}\r\n.list-board{\r\n  position: relative;\r\n  flex-basis: 0;\r\n  flex-grow: 1;\r\n  min-height: 85vh;\r\n  min-width: 300px;\r\n  padding: 50px;\r\n}\r\n.hide{\r\n  transform: translate(-100%, 0);\r\n  position: absolute;\r\n}\r\n.name, .desc{\r\n  margin: 0 0 5px 0;\r\n}\r\n\r\n\r\n.section-name{\r\n  border: none;\r\n  font-size: 20px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  padding: 5px 10px 5px 10px;\r\n  border-radius: 10px;\r\n  transition: .3s all;\r\n}\r\n.section-name:hover{\r\n  background-color: var(--off-white);\r\n}\r\n.section-name.active{\r\n  background-color: var(--more-off-white);\r\n}\r\n.fa-plus{\r\n  color: var(--ligth-blue);\r\n}\r\n.project-item{\r\n  padding: 3px 10px 3px 10px;\r\n}\r\n\r\n.popup{\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0,0,0,0.7);\r\n  opacity: 0;\r\n  transition: .7s ease-in-out;\r\n  z-index: 2;\r\n  pointer-events: none;\r\n}\r\n.popup.active{\r\n  opacity: 1;\r\n  pointer-events: all;\r\n}\r\n.popup-text{\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n  width: 50vw;\r\n  height: 500px;\r\n  border-radius: 30px;\r\n  background-color: var(--white-color);\r\n  z-index: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.close .fa-times{\r\n  position: absolute;\r\n  top: 5%;\r\n  left: 95%;\r\n  transform: translate(-95%,-5%);\r\n  font-size: 36px;\r\n  color: var(--red-color);\r\n}\r\ntr{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n#name, #description{\r\n  outline: none;\r\n  padding: 5px 10px 5px 10px;\r\n  font-size: 20px;\r\n  border-radius: 10px;\r\n  border: 2px solid;\r\n  width: 25vw;\r\n}\r\n#description{\r\n  resize: none;\r\n}\r\n.create-project{\r\n  outline: none;\r\n  font-size: 22px;\r\n  padding: 5px 15px 5px 15px;\r\n  border-radius: 20px;\r\n  color: var(--ligth-blue);\r\n  border: 2px solid var(--ligth-blue);\r\n  background-color: transparent;\r\n  transition: .5s;\r\n}\r\n.create-project:hover{\r\n  background-color: var(--ligth-blue);\r\n  color: var(--white-color);\r\n}\r\n.alert{\r\n  position: fixed;\r\n  bottom: -1000px;\r\n  right: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 300px;\r\n  height: 100px;\r\n  text-transform: capitalize;\r\n  font-size: 20px;\r\n  border-radius: 20px;\r\n  background-color: var(--red-color);\r\n  transition: .6s all;\r\n  z-index: 2;\r\n}\r\n.alert.move{\r\n  transform: translateY(-1050px);\r\n}\r\n.close-alert>i{\r\n  color: black;\r\n  font-size: 30px;\r\n}\r\n.add-ToDo{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  margin: 30px 0 0 0;\r\n}\r\n\r\n.title-line{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.edit-btn .fa-edit{\r\n  color: var(--ligth-blue);\r\n  font-size: 30px;\r\n}\r\n.delete-btn .fa-times{\r\n  color: var(--red-color);\r\n  font-size: 30px;\r\n  margin: 0 10px 0 10px;\r\n}\r\n.add-ToDo .fa-plus{\r\n  font-size: 30px;\r\n  color: var(--ligth-blue);\r\n  margin: 0 10px 0 0;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&display=swap');\r\n*{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n:root{\r\n  --ligth-blue: #0da5f3;\r\n  --off-white: hsl(210, 36%, 96%);\r\n  --more-off-white: hsl(202, 15%, 90%);\r\n  --white-color: white;\r\n  --red-color:#F51B1B;\r\n}\r\nbody{\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: var(--off-white);\r\n  min-width: 1000px;\r\n  overflow-x: hidden;\r\n}\r\nnav{\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: var(--white-color);\r\n  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.5);\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n.page-title>h1{\r\n  font-size: 60px;\r\n}\r\n.fa-check-circle{\r\n  color: var(--ligth-blue);\r\n}\r\nbutton{\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n}\r\n.login{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 95%;\r\n  padding: 5px 15px 5px 15px;\r\n  text-transform: capitalize;\r\n  font-size: 24px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transform: translate(-95%,-50%);\r\n  background-color: transparent;\r\n  color: var(--ligth-blue);\r\n  border: 2px solid var(--ligth-blue);\r\n  border-radius: 30px;\r\n  transition: .5s;\r\n}\r\n.login:hover{\r\n  background-color: var(--ligth-blue);\r\n  color: var(--white-color);\r\n}\r\n.toggle{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 3%;\r\n  transform: translate(-3%,-50%);\r\n  font-size: 36px;\r\n  color: var(--ligth-blue);\r\n  transition: .5s;\r\n}\r\n.toggle:hover{\r\n  transform: translate(-3%,-50%) rotate(-90deg);\r\n}\r\n\r\n.content{\r\n  display: flex;\r\n}\r\n.sidebar{\r\n  min-height: 90vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--white-color);\r\n  gap: 15px;\r\n  padding: 30px 15px 30px 15px;\r\n  transition: .7s transform;\r\n}\r\n.resize{\r\n  position: relative;\r\n  background-color: var(--off-white);\r\n  cursor: col-resize;\r\n  flex-basis: 4px;\r\n  user-select: none;\r\n  transition: .7s transform;\r\n}\r\n.list-board{\r\n  position: relative;\r\n  flex-basis: 0;\r\n  flex-grow: 1;\r\n  min-height: 85vh;\r\n  min-width: 300px;\r\n  padding: 50px;\r\n}\r\n.hide{\r\n  transform: translate(-100%, 0);\r\n  position: absolute;\r\n}\r\n.name, .desc{\r\n  margin: 0 0 5px 0;\r\n}\r\n\r\n\r\n.section-name{\r\n  border: none;\r\n  font-size: 20px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  padding: 5px 10px 5px 10px;\r\n  border-radius: 10px;\r\n  transition: .3s all;\r\n}\r\n.section-name:hover{\r\n  background-color: var(--off-white);\r\n}\r\n.section-name.active{\r\n  background-color: var(--more-off-white);\r\n}\r\n.fa-plus{\r\n  color: var(--ligth-blue);\r\n}\r\n.project-item{\r\n  padding: 3px 10px 3px 10px;\r\n}\r\n\r\n.popup{\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0,0,0,0.7);\r\n  opacity: 0;\r\n  transition: .7s ease-in-out;\r\n  z-index: 2;\r\n  pointer-events: none;\r\n}\r\n.popup.active{\r\n  opacity: 1;\r\n  pointer-events: all;\r\n}\r\n.popup-text{\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n  width: 50vw;\r\n  height: 500px;\r\n  border-radius: 30px;\r\n  background-color: var(--white-color);\r\n  z-index: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.close .fa-times{\r\n  position: absolute;\r\n  top: 5%;\r\n  left: 95%;\r\n  transform: translate(-95%,-5%);\r\n  font-size: 36px;\r\n  color: var(--red-color);\r\n}\r\ntr{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n#name, #description{\r\n  outline: none;\r\n  padding: 5px 10px 5px 10px;\r\n  font-size: 20px;\r\n  border-radius: 10px;\r\n  border: 2px solid;\r\n  width: 25vw;\r\n}\r\n#description{\r\n  resize: none;\r\n}\r\n.create-project{\r\n  outline: none;\r\n  font-size: 22px;\r\n  padding: 5px 15px 5px 15px;\r\n  border-radius: 20px;\r\n  color: var(--ligth-blue);\r\n  border: 2px solid var(--ligth-blue);\r\n  background-color: transparent;\r\n  transition: .5s;\r\n}\r\n.create-project:hover{\r\n  background-color: var(--ligth-blue);\r\n  color: var(--white-color);\r\n}\r\n.alert{\r\n  position: fixed;\r\n  bottom: -1000px;\r\n  right: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 300px;\r\n  height: 100px;\r\n  text-transform: capitalize;\r\n  font-size: 20px;\r\n  border-radius: 20px;\r\n  background-color: var(--red-color);\r\n  transition: .6s all;\r\n  z-index: 2;\r\n}\r\n.alert.move{\r\n  transform: translateY(-1050px);\r\n}\r\n.close-alert>i{\r\n  color: black;\r\n  font-size: 30px;\r\n}\r\n.add-ToDo{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  margin: 30px 0 0 0;\r\n}\r\n\r\n.title-line{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.edit-btn .fa-edit{\r\n  color: var(--ligth-blue);\r\n  font-size: 30px;\r\n}\r\n.delete-btn .fa-times{\r\n  color: var(--red-color);\r\n  font-size: 30px;\r\n  margin: 0 10px 0 10px;\r\n}\r\n.add-ToDo .fa-plus{\r\n  font-size: 30px;\r\n  color: var(--ligth-blue);\r\n  margin: 0 10px 0 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ project_object)
/* harmony export */ });

const sidebar_node = document.querySelector(".sidebar");
const popup =  document.querySelector(".popup");
const board = document.querySelector(".list-board");

class project_object {

  constructor(name,desc) {
    this.name = name;
    this.desc = desc;

    let name_class = this.name.replace(/\s/g, '');
    const project_item = `
    <button class="section-name ${name_class}">
    <p>${this.name}</p>
    </button>`;
    sidebar_node.insertAdjacentHTML('beforeend',project_item);
    popup.classList.remove('active');
    document.body.style.overflow = "visible";
    const project_sideBar = document.querySelector(`.${name_class}`);
    project_sideBar.addEventListener('click', () => {
      let project_list = document.querySelectorAll('.section-name');
      project_list.forEach(element => {
        element.classList.remove('active');
      });
      project_sideBar.classList.add('active');
      this.show_project();
    });
  }

  show_project() {
    board.innerHTML = "";
    const project_wall = `
    <button class="edit-btn"><i class="far fa-edit"></i></button>
    <button class="delete-btn"><i class="fas fa-times"></i></button>
    <h1 class="name">${this.name}</h1>
    <p class="desc">${this.desc}</p>
    <hr>
    <button class="add-ToDo"><i class="fas fa-plus"></i> Create new</button>`;
    board.insertAdjacentHTML("beforeend", project_wall);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/project */ "./src/js/project.js");


const add_btn = document.querySelector(".add-btn");

add_btn.addEventListener('click',() => {
  document.body.style.overflow = "hidden";
  popup.classList.add('active');
});


/**************************************/
//popup elements
const submit_btn = document.querySelector(".create-project");
const alert_box = document.querySelector(".alert");
const alert_box_close = document.querySelector(".close-alert");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

close.addEventListener('click',()=>{
  popup.classList.remove('active');
  if(alert_box.classList.contains('move')){
    alert_box.classList.remove('move');
  }
  document.body.style.overflow = "visible";
});

alert_box_close.addEventListener('click',() => {
  alert_box.classList.remove('move');
})

//adding element to projects sidebar
const name_input = document.querySelector("#name");
const description_input = document.querySelector("#description");
let projects_array = [];
//maybe in future make some async from this.
submit_btn.addEventListener('click',()=>{
  createSection();
});
name_input.addEventListener('keypress', (e) => {
  if(e.key === "Enter") {
    createSection();
  }
});
/**************************************/



/**************************************/
//sidebar resize

const resizer = document.querySelector(".resize");
const sidebar = document.querySelector(".sidebar");

resizer.addEventListener("mousedown", (event) => {
  document.addEventListener("mousemove", resize, false);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", resize, false);
  }, false);
});

function resize(e) {
  const size = `${e.x}px`;
  sidebar.style.flexBasis = size;
}

/**************************************/

/**************************************/
// toggle button

const toggle = document.querySelector(".toggle");

toggle.addEventListener('click', () =>{
  if(sidebar.classList.contains('hide')){
    sidebar.classList.remove('hide');
    resizer.classList.remove('hide');
  }
  else{
    sidebar.classList.add('hide');
    resizer.classList.add('hide');
  }
})

/**************************************/

function createSection() {
  let name = name_input.value;
  let desc = description_input.value;
  if(name !== "" && !projects_array.some(project => project.name === name)){
    name_input.value = "";
    description_input.value = "";
    let project = new _js_project__WEBPACK_IMPORTED_MODULE_1__.default(name, desc);
    projects_array.push(project);
  } else if(projects_array.some(project => project.name === name)) {
    alert_box.classList.add('move');
    alert_box.getElementsByTagName('p')[0].innerHTML = "This project already exist.";
  } else {
    alert_box.classList.add('move');
    alert_box.getElementsByTagName('p')[0].innerHTML = "Name can't be empty";
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLHdHQUF3RyxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQixNQUFNLGdCQUFnQixpQkFBaUIsS0FBSyxVQUFVLDRCQUE0QixzQ0FBc0MsMkNBQTJDLDJCQUEyQiwwQkFBMEIsS0FBSyxTQUFTLHlDQUF5Qyx5Q0FBeUMsd0JBQXdCLHlCQUF5QixLQUFLLFFBQVEsb0JBQW9CLHlCQUF5QiwyQ0FBMkMsa0RBQWtELHlCQUF5QixpQkFBaUIsS0FBSyxtQkFBbUIsc0JBQXNCLEtBQUsscUJBQXFCLCtCQUErQixLQUFLLFdBQVcsc0JBQXNCLG9DQUFvQyxvQkFBb0IsbUJBQW1CLEtBQUssV0FBVyx5QkFBeUIsZUFBZSxnQkFBZ0IsaUNBQWlDLGlDQUFpQyxzQkFBc0IseUNBQXlDLHVCQUF1QixzQ0FBc0Msb0NBQW9DLCtCQUErQiwwQ0FBMEMsMEJBQTBCLHNCQUFzQixLQUFLLGlCQUFpQiwwQ0FBMEMsZ0NBQWdDLEtBQUssWUFBWSx5QkFBeUIsZUFBZSxlQUFlLHFDQUFxQyxzQkFBc0IsK0JBQStCLHNCQUFzQixLQUFLLGtCQUFrQixvREFBb0QsS0FBSyxpQkFBaUIsb0JBQW9CLEtBQUssYUFBYSx1QkFBdUIsb0JBQW9CLDZCQUE2QiwyQ0FBMkMsZ0JBQWdCLG1DQUFtQyxnQ0FBZ0MsS0FBSyxZQUFZLHlCQUF5Qix5Q0FBeUMseUJBQXlCLHNCQUFzQix3QkFBd0IsZ0NBQWdDLEtBQUssZ0JBQWdCLHlCQUF5QixvQkFBb0IsbUJBQW1CLHVCQUF1Qix1QkFBdUIsb0JBQW9CLEtBQUssVUFBVSxxQ0FBcUMseUJBQXlCLEtBQUssaUJBQWlCLHdCQUF3QixLQUFLLDBCQUEwQixtQkFBbUIsc0JBQXNCLHVCQUF1QiwwQkFBMEIsOEJBQThCLGlDQUFpQywwQkFBMEIsMEJBQTBCLEtBQUssd0JBQXdCLHlDQUF5QyxLQUFLLHlCQUF5Qiw4Q0FBOEMsS0FBSyxhQUFhLCtCQUErQixLQUFLLGtCQUFrQixpQ0FBaUMsS0FBSyxlQUFlLHNCQUFzQixhQUFhLGNBQWMsZUFBZSxnQkFBZ0Isd0NBQXdDLGlCQUFpQixrQ0FBa0MsaUJBQWlCLDJCQUEyQixLQUFLLGtCQUFrQixpQkFBaUIsMEJBQTBCLEtBQUssZ0JBQWdCLHNCQUFzQixlQUFlLGdCQUFnQixzQ0FBc0Msa0JBQWtCLG9CQUFvQiwwQkFBMEIsMkNBQTJDLGlCQUFpQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsS0FBSyxxQkFBcUIseUJBQXlCLGNBQWMsZ0JBQWdCLHFDQUFxQyxzQkFBc0IsOEJBQThCLEtBQUssT0FBTyxvQkFBb0IsOEJBQThCLEtBQUssd0JBQXdCLG9CQUFvQixpQ0FBaUMsc0JBQXNCLDBCQUEwQix3QkFBd0Isa0JBQWtCLEtBQUssaUJBQWlCLG1CQUFtQixLQUFLLG9CQUFvQixvQkFBb0Isc0JBQXNCLGlDQUFpQywwQkFBMEIsK0JBQStCLDBDQUEwQyxvQ0FBb0Msc0JBQXNCLEtBQUssMEJBQTBCLDBDQUEwQyxnQ0FBZ0MsS0FBSyxXQUFXLHNCQUFzQixzQkFBc0Isa0JBQWtCLG9CQUFvQiwwQkFBMEIsOEJBQThCLG1CQUFtQixvQkFBb0IsaUNBQWlDLHNCQUFzQiwwQkFBMEIseUNBQXlDLDBCQUEwQixpQkFBaUIsS0FBSyxnQkFBZ0IscUNBQXFDLEtBQUssbUJBQW1CLG1CQUFtQixzQkFBc0IsS0FBSyxjQUFjLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHNCQUFzQix5QkFBeUIsS0FBSyxvQkFBb0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsS0FBSyx1QkFBdUIsK0JBQStCLHNCQUFzQixLQUFLLDBCQUEwQiw4QkFBOEIsc0JBQXNCLDRCQUE0QixLQUFLLHVCQUF1QixzQkFBc0IsK0JBQStCLHlCQUF5QixLQUFLLG1CQUFtQjtBQUNueVo7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDakVhOztBQUViLGtDQUFrQzs7QUFFbEMsOEJBQThCOztBQUU5QixrREFBa0QsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRDs7QUFFN1MsdUNBQXVDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLG9CQUFvQjs7QUFFeksseUNBQXlDLDBHQUEwRyx3QkFBd0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLE1BQU0sd0JBQXdCLCtCQUErQixhQUFhLHFCQUFxQix1Q0FBdUMsY0FBYyxXQUFXLFlBQVksVUFBVSxNQUFNLG1EQUFtRCxVQUFVLHNCQUFzQjs7QUFFbmYsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsbUZBQU8sSUFBSSwwRkFBYyxHQUFHLDBGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0MsU0FBUyxVQUFVO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELFdBQVc7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQWM7QUFDcEM7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9qcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuOnJvb3R7XFxyXFxuICAtLWxpZ3RoLWJsdWU6ICMwZGE1ZjM7XFxyXFxuICAtLW9mZi13aGl0ZTogaHNsKDIxMCwgMzYlLCA5NiUpO1xcclxcbiAgLS1tb3JlLW9mZi13aGl0ZTogaHNsKDIwMiwgMTUlLCA5MCUpO1xcclxcbiAgLS13aGl0ZS1jb2xvcjogd2hpdGU7XFxyXFxuICAtLXJlZC1jb2xvcjojRjUxQjFCO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxuICBtaW4td2lkdGg6IDEwMDBweDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxubmF2e1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsMCwwLDAuNSk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4ucGFnZS10aXRsZT5oMXtcXHJcXG4gIGZvbnQtc2l6ZTogNjBweDtcXHJcXG59XFxyXFxuLmZhLWNoZWNrLWNpcmNsZXtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG59XFxyXFxuYnV0dG9ue1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ubG9naW57XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDk1JTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05NSUsLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ3RoLWJsdWUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIHRyYW5zaXRpb246IC41cztcXHJcXG59XFxyXFxuLmxvZ2luOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlndGgtYmx1ZSk7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbn1cXHJcXG4udG9nZ2xle1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiAzJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zJSwtNTAlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG4gIHRyYW5zaXRpb246IC41cztcXHJcXG59XFxyXFxuLnRvZ2dsZTpob3ZlcntcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zJSwtNTAlKSByb3RhdGUoLTkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnR7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4uc2lkZWJhcntcXHJcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMTVweCAzMHB4IDE1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAuN3MgdHJhbnNmb3JtO1xcclxcbn1cXHJcXG4ucmVzaXple1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcXHJcXG4gIGZsZXgtYmFzaXM6IDRweDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogLjdzIHRyYW5zZm9ybTtcXHJcXG59XFxyXFxuLmxpc3QtYm9hcmR7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbGV4LWJhc2lzOiAwO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgbWluLWhlaWdodDogODV2aDtcXHJcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICBwYWRkaW5nOiA1MHB4O1xcclxcbn1cXHJcXG4uaGlkZXtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLm5hbWUsIC5kZXNje1xcclxcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zZWN0aW9uLW5hbWV7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogLjNzIGFsbDtcXHJcXG59XFxyXFxuLnNlY3Rpb24tbmFtZTpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxufVxcclxcbi5zZWN0aW9uLW5hbWUuYWN0aXZle1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9yZS1vZmYtd2hpdGUpO1xcclxcbn1cXHJcXG4uZmEtcGx1c3tcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG59XFxyXFxuLnByb2plY3QtaXRlbXtcXHJcXG4gIHBhZGRpbmc6IDNweCAxMHB4IDNweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogLjdzIGVhc2UtaW4tb3V0O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4ucG9wdXAuYWN0aXZle1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxufVxcclxcbi5wb3B1cC10ZXh0e1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNsb3NlIC5mYS10aW1lc3tcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNSU7XFxyXFxuICBsZWZ0OiA5NSU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTUlLC01JSk7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcXHJcXG59XFxyXFxudHJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbiNuYW1lLCAjZGVzY3JpcHRpb257XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICB3aWR0aDogMjV2dztcXHJcXG59XFxyXFxuI2Rlc2NyaXB0aW9ue1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG4uY3JlYXRlLXByb2plY3R7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ3RoLWJsdWUpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlndGgtYmx1ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHRyYW5zaXRpb246IC41cztcXHJcXG59XFxyXFxuLmNyZWF0ZS1wcm9qZWN0OmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlndGgtYmx1ZSk7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbn1cXHJcXG4uYWxlcnR7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IC0xMDAwcHg7XFxyXFxuICByaWdodDogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IC42cyBhbGw7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4uYWxlcnQubW92ZXtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTA1MHB4KTtcXHJcXG59XFxyXFxuLmNsb3NlLWFsZXJ0Pml7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcbi5hZGQtVG9Eb3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1saW5le1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5lZGl0LWJ0biAuZmEtZWRpdHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLmRlbGV0ZS1idG4gLmZhLXRpbWVze1xcclxcbiAgY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxyXFxufVxcclxcbi5hZGQtVG9EbyAuZmEtcGx1c3tcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsU0FBUztFQUNULDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG4qe1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuOnJvb3R7XFxyXFxuICAtLWxpZ3RoLWJsdWU6ICMwZGE1ZjM7XFxyXFxuICAtLW9mZi13aGl0ZTogaHNsKDIxMCwgMzYlLCA5NiUpO1xcclxcbiAgLS1tb3JlLW9mZi13aGl0ZTogaHNsKDIwMiwgMTUlLCA5MCUpO1xcclxcbiAgLS13aGl0ZS1jb2xvcjogd2hpdGU7XFxyXFxuICAtLXJlZC1jb2xvcjojRjUxQjFCO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxuICBtaW4td2lkdGg6IDEwMDBweDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxubmF2e1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsMCwwLDAuNSk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4ucGFnZS10aXRsZT5oMXtcXHJcXG4gIGZvbnQtc2l6ZTogNjBweDtcXHJcXG59XFxyXFxuLmZhLWNoZWNrLWNpcmNsZXtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG59XFxyXFxuYnV0dG9ue1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ubG9naW57XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDk1JTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05NSUsLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ3RoLWJsdWUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIHRyYW5zaXRpb246IC41cztcXHJcXG59XFxyXFxuLmxvZ2luOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlndGgtYmx1ZSk7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbn1cXHJcXG4udG9nZ2xle1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiAzJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zJSwtNTAlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG4gIHRyYW5zaXRpb246IC41cztcXHJcXG59XFxyXFxuLnRvZ2dsZTpob3ZlcntcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zJSwtNTAlKSByb3RhdGUoLTkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnR7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4uc2lkZWJhcntcXHJcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMTVweCAzMHB4IDE1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAuN3MgdHJhbnNmb3JtO1xcclxcbn1cXHJcXG4ucmVzaXple1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcXHJcXG4gIGZsZXgtYmFzaXM6IDRweDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogLjdzIHRyYW5zZm9ybTtcXHJcXG59XFxyXFxuLmxpc3QtYm9hcmR7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbGV4LWJhc2lzOiAwO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgbWluLWhlaWdodDogODV2aDtcXHJcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICBwYWRkaW5nOiA1MHB4O1xcclxcbn1cXHJcXG4uaGlkZXtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLm5hbWUsIC5kZXNje1xcclxcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zZWN0aW9uLW5hbWV7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogLjNzIGFsbDtcXHJcXG59XFxyXFxuLnNlY3Rpb24tbmFtZTpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxufVxcclxcbi5zZWN0aW9uLW5hbWUuYWN0aXZle1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9yZS1vZmYtd2hpdGUpO1xcclxcbn1cXHJcXG4uZmEtcGx1c3tcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG59XFxyXFxuLnByb2plY3QtaXRlbXtcXHJcXG4gIHBhZGRpbmc6IDNweCAxMHB4IDNweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogLjdzIGVhc2UtaW4tb3V0O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4ucG9wdXAuYWN0aXZle1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxufVxcclxcbi5wb3B1cC10ZXh0e1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNsb3NlIC5mYS10aW1lc3tcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNSU7XFxyXFxuICBsZWZ0OiA5NSU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTUlLC01JSk7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcXHJcXG59XFxyXFxudHJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbiNuYW1lLCAjZGVzY3JpcHRpb257XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICB3aWR0aDogMjV2dztcXHJcXG59XFxyXFxuI2Rlc2NyaXB0aW9ue1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG4uY3JlYXRlLXByb2plY3R7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ3RoLWJsdWUpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlndGgtYmx1ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHRyYW5zaXRpb246IC41cztcXHJcXG59XFxyXFxuLmNyZWF0ZS1wcm9qZWN0OmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlndGgtYmx1ZSk7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbn1cXHJcXG4uYWxlcnR7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IC0xMDAwcHg7XFxyXFxuICByaWdodDogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IC42cyBhbGw7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4uYWxlcnQubW92ZXtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTA1MHB4KTtcXHJcXG59XFxyXFxuLmNsb3NlLWFsZXJ0Pml7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcbi5hZGQtVG9Eb3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1saW5le1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5lZGl0LWJ0biAuZmEtZWRpdHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLmRlbGV0ZS1idG4gLmZhLXRpbWVze1xcclxcbiAgY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxyXFxufVxcclxcbi5hZGQtVG9EbyAuZmEtcGx1c3tcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxyXG5jb25zdCBzaWRlYmFyX25vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XHJcbmNvbnN0IHBvcHVwID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XHJcbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWJvYXJkXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvamVjdF9vYmplY3Qge1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lLGRlc2MpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xyXG5cclxuICAgIGxldCBuYW1lX2NsYXNzID0gdGhpcy5uYW1lLnJlcGxhY2UoL1xccy9nLCAnJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0X2l0ZW0gPSBgXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwic2VjdGlvbi1uYW1lICR7bmFtZV9jbGFzc31cIj5cclxuICAgIDxwPiR7dGhpcy5uYW1lfTwvcD5cclxuICAgIDwvYnV0dG9uPmA7XHJcbiAgICBzaWRlYmFyX25vZGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLHByb2plY3RfaXRlbSk7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICAgIGNvbnN0IHByb2plY3Rfc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWVfY2xhc3N9YCk7XHJcbiAgICBwcm9qZWN0X3NpZGVCYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxldCBwcm9qZWN0X2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbi1uYW1lJyk7XHJcbiAgICAgIHByb2plY3RfbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBwcm9qZWN0X3NpZGVCYXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMuc2hvd19wcm9qZWN0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3dfcHJvamVjdCgpIHtcclxuICAgIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCBwcm9qZWN0X3dhbGwgPSBgXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1idG5cIj48aSBjbGFzcz1cImZhciBmYS1lZGl0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1idG5cIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cclxuICAgIDxoMSBjbGFzcz1cIm5hbWVcIj4ke3RoaXMubmFtZX08L2gxPlxyXG4gICAgPHAgY2xhc3M9XCJkZXNjXCI+JHt0aGlzLmRlc2N9PC9wPlxyXG4gICAgPGhyPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1Ub0RvXCI+PGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT4gQ3JlYXRlIG5ldzwvYnV0dG9uPmA7XHJcbiAgICBib2FyZC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgcHJvamVjdF93YWxsKTtcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBwcm9qZWN0X29iamVjdCBmcm9tICcuL2pzL3Byb2plY3QnO1xyXG5jb25zdCBhZGRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYnRuXCIpO1xyXG5cclxuYWRkX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vcG9wdXAgZWxlbWVudHNcclxuY29uc3Qgc3VibWl0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXByb2plY3RcIik7XHJcbmNvbnN0IGFsZXJ0X2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxlcnRcIik7XHJcbmNvbnN0IGFsZXJ0X2JveF9jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYWxlcnRcIik7XHJcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcclxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpO1xyXG5cclxuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgaWYoYWxlcnRfYm94LmNsYXNzTGlzdC5jb250YWlucygnbW92ZScpKXtcclxuICAgIGFsZXJ0X2JveC5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZlJyk7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxufSk7XHJcblxyXG5hbGVydF9ib3hfY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcclxuICBhbGVydF9ib3guY2xhc3NMaXN0LnJlbW92ZSgnbW92ZScpO1xyXG59KVxyXG5cclxuLy9hZGRpbmcgZWxlbWVudCB0byBwcm9qZWN0cyBzaWRlYmFyXHJcbmNvbnN0IG5hbWVfaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7XHJcbmNvbnN0IGRlc2NyaXB0aW9uX2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcclxubGV0IHByb2plY3RzX2FycmF5ID0gW107XHJcbi8vbWF5YmUgaW4gZnV0dXJlIG1ha2Ugc29tZSBhc3luYyBmcm9tIHRoaXMuXHJcbnN1Ym1pdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgY3JlYXRlU2VjdGlvbigpO1xyXG59KTtcclxubmFtZV9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgaWYoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgY3JlYXRlU2VjdGlvbigpO1xyXG4gIH1cclxufSk7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vL3NpZGViYXIgcmVzaXplXHJcblxyXG5jb25zdCByZXNpemVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNpemVcIik7XHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XHJcblxyXG5yZXNpemVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCByZXNpemUsIGZhbHNlKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHJlc2l6ZSwgZmFsc2UpO1xyXG4gIH0sIGZhbHNlKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiByZXNpemUoZSkge1xyXG4gIGNvbnN0IHNpemUgPSBgJHtlLnh9cHhgO1xyXG4gIHNpZGViYXIuc3R5bGUuZmxleEJhc2lzID0gc2l6ZTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyB0b2dnbGUgYnV0dG9uXHJcblxyXG5jb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZVwiKTtcclxuXHJcbnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gIGlmKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpe1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICByZXNpemVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgcmVzaXplci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgfVxyXG59KVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2VjdGlvbigpIHtcclxuICBsZXQgbmFtZSA9IG5hbWVfaW5wdXQudmFsdWU7XHJcbiAgbGV0IGRlc2MgPSBkZXNjcmlwdGlvbl9pbnB1dC52YWx1ZTtcclxuICBpZihuYW1lICE9PSBcIlwiICYmICFwcm9qZWN0c19hcnJheS5zb21lKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKSl7XHJcbiAgICBuYW1lX2lucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGxldCBwcm9qZWN0ID0gbmV3IHByb2plY3Rfb2JqZWN0KG5hbWUsIGRlc2MpO1xyXG4gICAgcHJvamVjdHNfYXJyYXkucHVzaChwcm9qZWN0KTtcclxuICB9IGVsc2UgaWYocHJvamVjdHNfYXJyYXkuc29tZShwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSkpIHtcclxuICAgIGFsZXJ0X2JveC5jbGFzc0xpc3QuYWRkKCdtb3ZlJyk7XHJcbiAgICBhbGVydF9ib3guZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3AnKVswXS5pbm5lckhUTUwgPSBcIlRoaXMgcHJvamVjdCBhbHJlYWR5IGV4aXN0LlwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhbGVydF9ib3guY2xhc3NMaXN0LmFkZCgnbW92ZScpO1xyXG4gICAgYWxlcnRfYm94LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwJylbMF0uaW5uZXJIVE1MID0gXCJOYW1lIGNhbid0IGJlIGVtcHR5XCI7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9