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
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n:root{\r\n  --ligth-blue: #0da5f3;\r\n  --off-white: hsl(210, 36%, 96%);\r\n  --more-off-white: hsl(202, 15%, 90%);\r\n  --white-color: white;\r\n  --red-color:#F51B1B;\r\n}\r\nbody{\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: var(--off-white);\r\n  min-width: 1000px;\r\n  overflow-x: hidden;\r\n}\r\nnav{\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: var(--white-color);\r\n  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.5);\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n.page-title>h1{\r\n  font-size: 60px;\r\n}\r\n.fa-check-circle{\r\n  color: var(--ligth-blue);\r\n}\r\nbutton{\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n}\r\n.login{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 95%;\r\n  padding: 5px 15px 5px 15px;\r\n  text-transform: capitalize;\r\n  font-size: 24px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transform: translate(-95%,-50%);\r\n  background-color: transparent;\r\n  color: var(--ligth-blue);\r\n  border: 2px solid var(--ligth-blue);\r\n  border-radius: 30px;\r\n  transition: .5s;\r\n}\r\n.login:hover{\r\n  background-color: var(--ligth-blue);\r\n  color: var(--white-color);\r\n}\r\n.toggle{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 3%;\r\n  transform: translate(-3%,-50%);\r\n  font-size: 36px;\r\n  color: var(--ligth-blue);\r\n  transition: .5s;\r\n}\r\n.toggle:hover{\r\n  transform: translate(-3%,-50%) rotate(-90deg);\r\n}\r\n\r\n.content{\r\n  display: flex;\r\n}\r\n.sidebar{\r\n  min-height: 90vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--white-color);\r\n  gap: 15px;\r\n  padding: 30px 15px 30px 15px;\r\n  transition: .7s transform;\r\n}\r\n.resize{\r\n  position: relative;\r\n  background-color: var(--off-white);\r\n  cursor: col-resize;\r\n  flex-basis: 4px;\r\n  user-select: none;\r\n  transition: .7s transform;\r\n}\r\n.list-board{\r\n  position: relative;\r\n  flex-basis: 0;\r\n  flex-grow: 1;\r\n  min-height: 85vh;\r\n  min-width: 300px;\r\n}\r\n.hide{\r\n  transform: translate(-100%, 0);\r\n  position: absolute;\r\n}\r\n\r\n.section-name{\r\n  border: none;\r\n  font-size: 20px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  padding: 5px 10px 5px 10px;\r\n  border-radius: 10px;\r\n  transition: .3s all;\r\n}\r\n.section-name:hover{\r\n  background-color: var(--off-white);\r\n}\r\n.section-name.active{\r\n  background-color: var(--more-off-white);\r\n}\r\n.fa-plus{\r\n  color: var(--ligth-blue);\r\n}\r\n.project-item{\r\n  padding: 3px 10px 3px 10px;\r\n}\r\n\r\n.popup{\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0,0,0,0.7);\r\n  opacity: 0;\r\n  transition: .7s ease-in-out;\r\n  z-index: 2;\r\n  pointer-events: none;\r\n}\r\n.popup.active{\r\n  opacity: 1;\r\n  pointer-events: all;\r\n}\r\n.popup-text{\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n  width: 50vw;\r\n  height: 500px;\r\n  border-radius: 30px;\r\n  background-color: var(--white-color);\r\n  z-index: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.fa-times{\r\n  position: absolute;\r\n  top: 7%;\r\n  left: 95%;\r\n  transform: translate(-95%,-5%);\r\n  font-size: 36px;\r\n  color: var(--red-color);\r\n}\r\ntr{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n#name, #description{\r\n  outline: none;\r\n  padding: 5px 10px 5px 10px;\r\n  font-size: 20px;\r\n  border-radius: 10px;\r\n  border: 2px solid;\r\n  width: 25vw;\r\n}\r\n#description{\r\n  resize: none;\r\n}\r\n.create-project{\r\n  outline: none;\r\n  font-size: 22px;\r\n  padding: 5px 15px 5px 15px;\r\n  border-radius: 20px;\r\n  color: var(--ligth-blue);\r\n  border: 2px solid var(--ligth-blue);\r\n  background-color: transparent;\r\n  transition: .5s;\r\n}\r\n.create-project:hover{\r\n  background-color: var(--ligth-blue);\r\n  color: var(--white-color);\r\n}\r\n.alert{\r\n  position: fixed;\r\n  bottom: -1000px;\r\n  right: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 300px;\r\n  height: 100px;\r\n  text-transform: capitalize;\r\n  font-size: 20px;\r\n  border-radius: 20px;\r\n  background-color: var(--red-color);\r\n  transition: .6s all;\r\n  z-index: 2;\r\n}\r\n.alert.move{\r\n  transform: translateY(-1050px);\r\n}\r\n.close-alert>i{\r\n  color: black;\r\n  font-size: 30px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&display=swap');\r\n*{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n:root{\r\n  --ligth-blue: #0da5f3;\r\n  --off-white: hsl(210, 36%, 96%);\r\n  --more-off-white: hsl(202, 15%, 90%);\r\n  --white-color: white;\r\n  --red-color:#F51B1B;\r\n}\r\nbody{\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: var(--off-white);\r\n  min-width: 1000px;\r\n  overflow-x: hidden;\r\n}\r\nnav{\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: var(--white-color);\r\n  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.5);\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n.page-title>h1{\r\n  font-size: 60px;\r\n}\r\n.fa-check-circle{\r\n  color: var(--ligth-blue);\r\n}\r\nbutton{\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n}\r\n.login{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 95%;\r\n  padding: 5px 15px 5px 15px;\r\n  text-transform: capitalize;\r\n  font-size: 24px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transform: translate(-95%,-50%);\r\n  background-color: transparent;\r\n  color: var(--ligth-blue);\r\n  border: 2px solid var(--ligth-blue);\r\n  border-radius: 30px;\r\n  transition: .5s;\r\n}\r\n.login:hover{\r\n  background-color: var(--ligth-blue);\r\n  color: var(--white-color);\r\n}\r\n.toggle{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 3%;\r\n  transform: translate(-3%,-50%);\r\n  font-size: 36px;\r\n  color: var(--ligth-blue);\r\n  transition: .5s;\r\n}\r\n.toggle:hover{\r\n  transform: translate(-3%,-50%) rotate(-90deg);\r\n}\r\n\r\n.content{\r\n  display: flex;\r\n}\r\n.sidebar{\r\n  min-height: 90vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--white-color);\r\n  gap: 15px;\r\n  padding: 30px 15px 30px 15px;\r\n  transition: .7s transform;\r\n}\r\n.resize{\r\n  position: relative;\r\n  background-color: var(--off-white);\r\n  cursor: col-resize;\r\n  flex-basis: 4px;\r\n  user-select: none;\r\n  transition: .7s transform;\r\n}\r\n.list-board{\r\n  position: relative;\r\n  flex-basis: 0;\r\n  flex-grow: 1;\r\n  min-height: 85vh;\r\n  min-width: 300px;\r\n}\r\n.hide{\r\n  transform: translate(-100%, 0);\r\n  position: absolute;\r\n}\r\n\r\n.section-name{\r\n  border: none;\r\n  font-size: 20px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  padding: 5px 10px 5px 10px;\r\n  border-radius: 10px;\r\n  transition: .3s all;\r\n}\r\n.section-name:hover{\r\n  background-color: var(--off-white);\r\n}\r\n.section-name.active{\r\n  background-color: var(--more-off-white);\r\n}\r\n.fa-plus{\r\n  color: var(--ligth-blue);\r\n}\r\n.project-item{\r\n  padding: 3px 10px 3px 10px;\r\n}\r\n\r\n.popup{\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0,0,0,0.7);\r\n  opacity: 0;\r\n  transition: .7s ease-in-out;\r\n  z-index: 2;\r\n  pointer-events: none;\r\n}\r\n.popup.active{\r\n  opacity: 1;\r\n  pointer-events: all;\r\n}\r\n.popup-text{\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n  width: 50vw;\r\n  height: 500px;\r\n  border-radius: 30px;\r\n  background-color: var(--white-color);\r\n  z-index: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.fa-times{\r\n  position: absolute;\r\n  top: 7%;\r\n  left: 95%;\r\n  transform: translate(-95%,-5%);\r\n  font-size: 36px;\r\n  color: var(--red-color);\r\n}\r\ntr{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n#name, #description{\r\n  outline: none;\r\n  padding: 5px 10px 5px 10px;\r\n  font-size: 20px;\r\n  border-radius: 10px;\r\n  border: 2px solid;\r\n  width: 25vw;\r\n}\r\n#description{\r\n  resize: none;\r\n}\r\n.create-project{\r\n  outline: none;\r\n  font-size: 22px;\r\n  padding: 5px 15px 5px 15px;\r\n  border-radius: 20px;\r\n  color: var(--ligth-blue);\r\n  border: 2px solid var(--ligth-blue);\r\n  background-color: transparent;\r\n  transition: .5s;\r\n}\r\n.create-project:hover{\r\n  background-color: var(--ligth-blue);\r\n  color: var(--white-color);\r\n}\r\n.alert{\r\n  position: fixed;\r\n  bottom: -1000px;\r\n  right: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 300px;\r\n  height: 100px;\r\n  text-transform: capitalize;\r\n  font-size: 20px;\r\n  border-radius: 20px;\r\n  background-color: var(--red-color);\r\n  transition: .6s all;\r\n  z-index: 2;\r\n}\r\n.alert.move{\r\n  transform: translateY(-1050px);\r\n}\r\n.close-alert>i{\r\n  color: black;\r\n  font-size: 30px;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/js/create_project.js":
/*!**********************************!*\
  !*** ./src/js/create_project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/js/project.js");

const new_project = () => {
  const name_input = document.querySelector("#name");
  const description_input = document.querySelector("#description");
  const parrent_node = document.querySelector(".sidebar");
  const popup = document.querySelector(".popup");
  const alert_box = document.querySelector(".alert");

  if(name_input.value !== ""){
    let name = name_input.value;
    let desc = description_input.value;
    let name_class = name.replace(/\s/g, '')
    name_input.value = "";
    description_input.value = "";
    let ciap = new _project__WEBPACK_IMPORTED_MODULE_0__.default(name,desc);

    const project_item = `
    <button class="section-name ${name_class}">
    <p>${name}</p>
    </button>`;
    parrent_node.insertAdjacentHTML('beforeend',project_item);
    popup.classList.remove('active');
    document.body.style.overflow = "visible";

    const project = document.querySelector(`.${name_class}`);
    project.addEventListener('click', () => {
      let project_list = document.querySelectorAll('.section-name');
      console.log(project_list);
      project_list.forEach(element => {
        element.classList.remove('active');
      });
      project.classList.add('active');
      ciap.show_project();
    });
  }
  else{
    alert_box.classList.add('move');
    alert_box.getElementsByTagName('p')[0].innerHTML = "Name can't be empty";
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new_project);

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
class project_object {
  constructor(name,desc) {
    this.name = name;
    this.desc = desc;
  }

  show_project(){
    
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
/* harmony import */ var _js_create_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/create_project */ "./src/js/create_project.js");


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

//maybe in future make some async from this.
submit_btn.addEventListener('click',() => {
  ;(0,_js_create_project__WEBPACK_IMPORTED_MODULE_1__.default)();
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHVIQUF1SCxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUNuSztBQUNBLDRDQUE0QyxnQkFBZ0IsaUJBQWlCLEtBQUssVUFBVSw0QkFBNEIsc0NBQXNDLDJDQUEyQywyQkFBMkIsMEJBQTBCLEtBQUssU0FBUyx5Q0FBeUMseUNBQXlDLHdCQUF3Qix5QkFBeUIsS0FBSyxRQUFRLG9CQUFvQix5QkFBeUIsMkNBQTJDLGtEQUFrRCx5QkFBeUIsaUJBQWlCLEtBQUssbUJBQW1CLHNCQUFzQixLQUFLLHFCQUFxQiwrQkFBK0IsS0FBSyxXQUFXLHNCQUFzQixvQ0FBb0Msb0JBQW9CLG1CQUFtQixLQUFLLFdBQVcseUJBQXlCLGVBQWUsZ0JBQWdCLGlDQUFpQyxpQ0FBaUMsc0JBQXNCLHlDQUF5Qyx1QkFBdUIsc0NBQXNDLG9DQUFvQywrQkFBK0IsMENBQTBDLDBCQUEwQixzQkFBc0IsS0FBSyxpQkFBaUIsMENBQTBDLGdDQUFnQyxLQUFLLFlBQVkseUJBQXlCLGVBQWUsZUFBZSxxQ0FBcUMsc0JBQXNCLCtCQUErQixzQkFBc0IsS0FBSyxrQkFBa0Isb0RBQW9ELEtBQUssaUJBQWlCLG9CQUFvQixLQUFLLGFBQWEsdUJBQXVCLG9CQUFvQiw2QkFBNkIsMkNBQTJDLGdCQUFnQixtQ0FBbUMsZ0NBQWdDLEtBQUssWUFBWSx5QkFBeUIseUNBQXlDLHlCQUF5QixzQkFBc0Isd0JBQXdCLGdDQUFnQyxLQUFLLGdCQUFnQix5QkFBeUIsb0JBQW9CLG1CQUFtQix1QkFBdUIsdUJBQXVCLEtBQUssVUFBVSxxQ0FBcUMseUJBQXlCLEtBQUssc0JBQXNCLG1CQUFtQixzQkFBc0IsdUJBQXVCLDBCQUEwQiw4QkFBOEIsaUNBQWlDLDBCQUEwQiwwQkFBMEIsS0FBSyx3QkFBd0IseUNBQXlDLEtBQUsseUJBQXlCLDhDQUE4QyxLQUFLLGFBQWEsK0JBQStCLEtBQUssa0JBQWtCLGlDQUFpQyxLQUFLLGVBQWUsc0JBQXNCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQix3Q0FBd0MsaUJBQWlCLGtDQUFrQyxpQkFBaUIsMkJBQTJCLEtBQUssa0JBQWtCLGlCQUFpQiwwQkFBMEIsS0FBSyxnQkFBZ0Isc0JBQXNCLGVBQWUsZ0JBQWdCLHNDQUFzQyxrQkFBa0Isb0JBQW9CLDBCQUEwQiwyQ0FBMkMsaUJBQWlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixLQUFLLGNBQWMseUJBQXlCLGNBQWMsZ0JBQWdCLHFDQUFxQyxzQkFBc0IsOEJBQThCLEtBQUssT0FBTyxvQkFBb0IsOEJBQThCLEtBQUssd0JBQXdCLG9CQUFvQixpQ0FBaUMsc0JBQXNCLDBCQUEwQix3QkFBd0Isa0JBQWtCLEtBQUssaUJBQWlCLG1CQUFtQixLQUFLLG9CQUFvQixvQkFBb0Isc0JBQXNCLGlDQUFpQywwQkFBMEIsK0JBQStCLDBDQUEwQyxvQ0FBb0Msc0JBQXNCLEtBQUssMEJBQTBCLDBDQUEwQyxnQ0FBZ0MsS0FBSyxXQUFXLHNCQUFzQixzQkFBc0Isa0JBQWtCLG9CQUFvQiwwQkFBMEIsOEJBQThCLG1CQUFtQixvQkFBb0IsaUNBQWlDLHNCQUFzQiwwQkFBMEIseUNBQXlDLDBCQUEwQixpQkFBaUIsS0FBSyxnQkFBZ0IscUNBQXFDLEtBQUssbUJBQW1CLG1CQUFtQixzQkFBc0IsS0FBSyxXQUFXLGdGQUFnRixVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLHdHQUF3RyxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQixNQUFNLGdCQUFnQixpQkFBaUIsS0FBSyxVQUFVLDRCQUE0QixzQ0FBc0MsMkNBQTJDLDJCQUEyQiwwQkFBMEIsS0FBSyxTQUFTLHlDQUF5Qyx5Q0FBeUMsd0JBQXdCLHlCQUF5QixLQUFLLFFBQVEsb0JBQW9CLHlCQUF5QiwyQ0FBMkMsa0RBQWtELHlCQUF5QixpQkFBaUIsS0FBSyxtQkFBbUIsc0JBQXNCLEtBQUsscUJBQXFCLCtCQUErQixLQUFLLFdBQVcsc0JBQXNCLG9DQUFvQyxvQkFBb0IsbUJBQW1CLEtBQUssV0FBVyx5QkFBeUIsZUFBZSxnQkFBZ0IsaUNBQWlDLGlDQUFpQyxzQkFBc0IseUNBQXlDLHVCQUF1QixzQ0FBc0Msb0NBQW9DLCtCQUErQiwwQ0FBMEMsMEJBQTBCLHNCQUFzQixLQUFLLGlCQUFpQiwwQ0FBMEMsZ0NBQWdDLEtBQUssWUFBWSx5QkFBeUIsZUFBZSxlQUFlLHFDQUFxQyxzQkFBc0IsK0JBQStCLHNCQUFzQixLQUFLLGtCQUFrQixvREFBb0QsS0FBSyxpQkFBaUIsb0JBQW9CLEtBQUssYUFBYSx1QkFBdUIsb0JBQW9CLDZCQUE2QiwyQ0FBMkMsZ0JBQWdCLG1DQUFtQyxnQ0FBZ0MsS0FBSyxZQUFZLHlCQUF5Qix5Q0FBeUMseUJBQXlCLHNCQUFzQix3QkFBd0IsZ0NBQWdDLEtBQUssZ0JBQWdCLHlCQUF5QixvQkFBb0IsbUJBQW1CLHVCQUF1Qix1QkFBdUIsS0FBSyxVQUFVLHFDQUFxQyx5QkFBeUIsS0FBSyxzQkFBc0IsbUJBQW1CLHNCQUFzQix1QkFBdUIsMEJBQTBCLDhCQUE4QixpQ0FBaUMsMEJBQTBCLDBCQUEwQixLQUFLLHdCQUF3Qix5Q0FBeUMsS0FBSyx5QkFBeUIsOENBQThDLEtBQUssYUFBYSwrQkFBK0IsS0FBSyxrQkFBa0IsaUNBQWlDLEtBQUssZUFBZSxzQkFBc0IsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLHdDQUF3QyxpQkFBaUIsa0NBQWtDLGlCQUFpQiwyQkFBMkIsS0FBSyxrQkFBa0IsaUJBQWlCLDBCQUEwQixLQUFLLGdCQUFnQixzQkFBc0IsZUFBZSxnQkFBZ0Isc0NBQXNDLGtCQUFrQixvQkFBb0IsMEJBQTBCLDJDQUEyQyxpQkFBaUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEtBQUssY0FBYyx5QkFBeUIsY0FBYyxnQkFBZ0IscUNBQXFDLHNCQUFzQiw4QkFBOEIsS0FBSyxPQUFPLG9CQUFvQiw4QkFBOEIsS0FBSyx3QkFBd0Isb0JBQW9CLGlDQUFpQyxzQkFBc0IsMEJBQTBCLHdCQUF3QixrQkFBa0IsS0FBSyxpQkFBaUIsbUJBQW1CLEtBQUssb0JBQW9CLG9CQUFvQixzQkFBc0IsaUNBQWlDLDBCQUEwQiwrQkFBK0IsMENBQTBDLG9DQUFvQyxzQkFBc0IsS0FBSywwQkFBMEIsMENBQTBDLGdDQUFnQyxLQUFLLFdBQVcsc0JBQXNCLHNCQUFzQixrQkFBa0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsbUJBQW1CLG9CQUFvQixpQ0FBaUMsc0JBQXNCLDBCQUEwQix5Q0FBeUMsMEJBQTBCLGlCQUFpQixLQUFLLGdCQUFnQixxQ0FBcUMsS0FBSyxtQkFBbUIsbUJBQW1CLHNCQUFzQixLQUFLLHVCQUF1QjtBQUNyelc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDakVhOztBQUViLGtDQUFrQzs7QUFFbEMsOEJBQThCOztBQUU5QixrREFBa0QsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRDs7QUFFN1MsdUNBQXVDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLG9CQUFvQjs7QUFFeksseUNBQXlDLDBHQUEwRyx3QkFBd0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLE1BQU0sd0JBQXdCLCtCQUErQixhQUFhLHFCQUFxQix1Q0FBdUMsY0FBYyxXQUFXLFlBQVksVUFBVSxNQUFNLG1EQUFtRCxVQUFVLHNCQUFzQjs7QUFFbmYsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsbUZBQU8sSUFBSSwwRkFBYyxHQUFHLDBGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQWM7QUFDakM7QUFDQTtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDLFNBQVMsS0FBSztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsV0FBVztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3pDWDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0REFBVztBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvanMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbjpyb290e1xcclxcbiAgLS1saWd0aC1ibHVlOiAjMGRhNWYzO1xcclxcbiAgLS1vZmYtd2hpdGU6IGhzbCgyMTAsIDM2JSwgOTYlKTtcXHJcXG4gIC0tbW9yZS1vZmYtd2hpdGU6IGhzbCgyMDIsIDE1JSwgOTAlKTtcXHJcXG4gIC0td2hpdGUtY29sb3I6IHdoaXRlO1xcclxcbiAgLS1yZWQtY29sb3I6I0Y1MUIxQjtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcbiAgbWluLXdpZHRoOiAxMDAwcHg7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcbm5hdntcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLDAsMCwwLjUpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLnBhZ2UtdGl0bGU+aDF7XFxyXFxuICBmb250LXNpemU6IDYwcHg7XFxyXFxufVxcclxcbi5mYS1jaGVjay1jaXJjbGV7XFxyXFxuICBjb2xvcjogdmFyKC0tbGlndGgtYmx1ZSk7XFxyXFxufVxcclxcbmJ1dHRvbntcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLmxvZ2lue1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA5NSU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTUlLC01MCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogdmFyKC0tbGlndGgtYmx1ZSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAuNXM7XFxyXFxufVxcclxcbi5sb2dpbjpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ3RoLWJsdWUpO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG59XFxyXFxuLnRvZ2dsZXtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogMyU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMyUsLTUwJSk7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tbGlndGgtYmx1ZSk7XFxyXFxuICB0cmFuc2l0aW9uOiAuNXM7XFxyXFxufVxcclxcbi50b2dnbGU6aG92ZXJ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMyUsLTUwJSkgcm90YXRlKC05MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLnNpZGViYXJ7XFxyXFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDE1cHggMzBweCAxNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogLjdzIHRyYW5zZm9ybTtcXHJcXG59XFxyXFxuLnJlc2l6ZXtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxuICBjdXJzb3I6IGNvbC1yZXNpemU7XFxyXFxuICBmbGV4LWJhc2lzOiA0cHg7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IC43cyB0cmFuc2Zvcm07XFxyXFxufVxcclxcbi5saXN0LWJvYXJke1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmxleC1iYXNpczogMDtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDg1dmg7XFxyXFxuICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG4uaGlkZXtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tbmFtZXtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAuM3MgYWxsO1xcclxcbn1cXHJcXG4uc2VjdGlvbi1uYW1lOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG59XFxyXFxuLnNlY3Rpb24tbmFtZS5hY3RpdmV7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLW9mZi13aGl0ZSk7XFxyXFxufVxcclxcbi5mYS1wbHVze1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ3RoLWJsdWUpO1xcclxcbn1cXHJcXG4ucHJvamVjdC1pdGVte1xcclxcbiAgcGFkZGluZzogM3B4IDEwcHggM3B4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAuN3MgZWFzZS1pbi1vdXQ7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcbi5wb3B1cC5hY3RpdmV7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG59XFxyXFxuLnBvcHVwLXRleHR7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZmEtdGltZXN7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDclO1xcclxcbiAgbGVmdDogOTUlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTk1JSwtNSUpO1xcclxcbiAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XFxyXFxufVxcclxcbnRye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4jbmFtZSwgI2Rlc2NyaXB0aW9ue1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgd2lkdGg6IDI1dnc7XFxyXFxufVxcclxcbiNkZXNjcmlwdGlvbntcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuLmNyZWF0ZS1wcm9qZWN0e1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ3RoLWJsdWUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiAuNXM7XFxyXFxufVxcclxcbi5jcmVhdGUtcHJvamVjdDpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ3RoLWJsdWUpO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG59XFxyXFxuLmFsZXJ0e1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAtMTAwMHB4O1xcclxcbiAgcmlnaHQ6IDMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiAuNnMgYWxsO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLmFsZXJ0Lm1vdmV7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwNTBweCk7XFxyXFxufVxcclxcbi5jbG9zZS1hbGVydD5pe1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixvQ0FBb0M7RUFDcEMsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtDQUFrQztFQUNs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QUNiLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbip7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG46cm9vdHtcXHJcXG4gIC0tbGlndGgtYmx1ZTogIzBkYTVmMztcXHJcXG4gIC0tb2ZmLXdoaXRlOiBoc2woMjEwLCAzNiUsIDk2JSk7XFxyXFxuICAtLW1vcmUtb2ZmLXdoaXRlOiBoc2woMjAyLCAxNSUsIDkwJSk7XFxyXFxuICAtLXdoaXRlLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIC0tcmVkLWNvbG9yOiNGNTFCMUI7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXHJcXG4gIG1pbi13aWR0aDogMTAwMHB4O1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5uYXZ7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC41KTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcbi5wYWdlLXRpdGxlPmgxe1xcclxcbiAgZm9udC1zaXplOiA2MHB4O1xcclxcbn1cXHJcXG4uZmEtY2hlY2stY2lyY2xle1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ3RoLWJsdWUpO1xcclxcbn1cXHJcXG5idXR0b257XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5sb2dpbntcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogOTUlO1xcclxcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTk1JSwtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ3RoLWJsdWUpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlndGgtYmx1ZSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogLjVzO1xcclxcbn1cXHJcXG4ubG9naW46aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxufVxcclxcbi50b2dnbGV7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDMlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMlLC01MCUpO1xcclxcbiAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ3RoLWJsdWUpO1xcclxcbiAgdHJhbnNpdGlvbjogLjVzO1xcclxcbn1cXHJcXG4udG9nZ2xlOmhvdmVye1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMlLC01MCUpIHJvdGF0ZSgtOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5zaWRlYmFye1xcclxcbiAgbWluLWhlaWdodDogOTB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgcGFkZGluZzogMzBweCAxNXB4IDMwcHggMTVweDtcXHJcXG4gIHRyYW5zaXRpb246IC43cyB0cmFuc2Zvcm07XFxyXFxufVxcclxcbi5yZXNpemV7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcclxcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xcclxcbiAgZmxleC1iYXNpczogNHB4O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAuN3MgdHJhbnNmb3JtO1xcclxcbn1cXHJcXG4ubGlzdC1ib2FyZHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsZXgtYmFzaXM6IDA7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBtaW4taGVpZ2h0OiA4NXZoO1xcclxcbiAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuLmhpZGV7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLW5hbWV7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogLjNzIGFsbDtcXHJcXG59XFxyXFxuLnNlY3Rpb24tbmFtZTpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxyXFxufVxcclxcbi5zZWN0aW9uLW5hbWUuYWN0aXZle1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9yZS1vZmYtd2hpdGUpO1xcclxcbn1cXHJcXG4uZmEtcGx1c3tcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG59XFxyXFxuLnByb2plY3QtaXRlbXtcXHJcXG4gIHBhZGRpbmc6IDNweCAxMHB4IDNweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogLjdzIGVhc2UtaW4tb3V0O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4ucG9wdXAuYWN0aXZle1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxufVxcclxcbi5wb3B1cC10ZXh0e1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZhLXRpbWVze1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA3JTtcXHJcXG4gIGxlZnQ6IDk1JTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05NSUsLTUlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xcclxcbn1cXHJcXG50cntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuI25hbWUsICNkZXNjcmlwdGlvbntcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gIHdpZHRoOiAyNXZ3O1xcclxcbn1cXHJcXG4jZGVzY3JpcHRpb257XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcbi5jcmVhdGUtcHJvamVjdHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tbGlndGgtYmx1ZSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdHJhbnNpdGlvbjogLjVzO1xcclxcbn1cXHJcXG4uY3JlYXRlLXByb2plY3Q6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWd0aC1ibHVlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxufVxcclxcbi5hbGVydHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogLTEwMDBweDtcXHJcXG4gIHJpZ2h0OiAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogLjZzIGFsbDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcbi5hbGVydC5tb3Zle1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDUwcHgpO1xcclxcbn1cXHJcXG4uY2xvc2UtYWxlcnQ+aXtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwcm9qZWN0X29iamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmNvbnN0IG5ld19wcm9qZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hbWVfaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25faW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xyXG4gIGNvbnN0IHBhcnJlbnRfbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XHJcbiAgY29uc3QgYWxlcnRfYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGVydFwiKTtcclxuXHJcbiAgaWYobmFtZV9pbnB1dC52YWx1ZSAhPT0gXCJcIil7XHJcbiAgICBsZXQgbmFtZSA9IG5hbWVfaW5wdXQudmFsdWU7XHJcbiAgICBsZXQgZGVzYyA9IGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlO1xyXG4gICAgbGV0IG5hbWVfY2xhc3MgPSBuYW1lLnJlcGxhY2UoL1xccy9nLCAnJylcclxuICAgIG5hbWVfaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgZGVzY3JpcHRpb25faW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgbGV0IGNpYXAgPSBuZXcgcHJvamVjdF9vYmplY3QobmFtZSxkZXNjKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0X2l0ZW0gPSBgXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwic2VjdGlvbi1uYW1lICR7bmFtZV9jbGFzc31cIj5cclxuICAgIDxwPiR7bmFtZX08L3A+XHJcbiAgICA8L2J1dHRvbj5gO1xyXG4gICAgcGFycmVudF9ub2RlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxwcm9qZWN0X2l0ZW0pO1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWVfY2xhc3N9YCk7XHJcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsZXQgcHJvamVjdF9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24tbmFtZScpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0X2xpc3QpO1xyXG4gICAgICBwcm9qZWN0X2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgY2lhcC5zaG93X3Byb2plY3QoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgYWxlcnRfYm94LmNsYXNzTGlzdC5hZGQoJ21vdmUnKTtcclxuICAgIGFsZXJ0X2JveC5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpWzBdLmlubmVySFRNTCA9IFwiTmFtZSBjYW4ndCBiZSBlbXB0eVwiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3X3Byb2plY3Q7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvamVjdF9vYmplY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsZGVzYykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGVzYyA9IGRlc2M7XHJcbiAgfVxyXG5cclxuICBzaG93X3Byb2plY3QoKXtcclxuICAgIFxyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IG5ld19wcm9qZWN0IGZyb20gJy4vanMvY3JlYXRlX3Byb2plY3QnO1xyXG5jb25zdCBhZGRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYnRuXCIpO1xyXG5cclxuYWRkX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vcG9wdXAgZWxlbWVudHNcclxuY29uc3Qgc3VibWl0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXByb2plY3RcIik7XHJcbmNvbnN0IGFsZXJ0X2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxlcnRcIik7XHJcbmNvbnN0IGFsZXJ0X2JveF9jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYWxlcnRcIik7XHJcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcclxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpO1xyXG5cclxuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgaWYoYWxlcnRfYm94LmNsYXNzTGlzdC5jb250YWlucygnbW92ZScpKXtcclxuICAgIGFsZXJ0X2JveC5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZlJyk7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxufSk7XHJcblxyXG5hbGVydF9ib3hfY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcclxuICBhbGVydF9ib3guY2xhc3NMaXN0LnJlbW92ZSgnbW92ZScpO1xyXG59KVxyXG5cclxuLy9tYXliZSBpbiBmdXR1cmUgbWFrZSBzb21lIGFzeW5jIGZyb20gdGhpcy5cclxuc3VibWl0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xyXG4gIG5ld19wcm9qZWN0KCk7XHJcbn0pO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vc2lkZWJhciByZXNpemVcclxuXHJcbmNvbnN0IHJlc2l6ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2l6ZVwiKTtcclxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuXHJcbnJlc2l6ZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHJlc2l6ZSwgZmFsc2UpO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcmVzaXplLCBmYWxzZSk7XHJcbiAgfSwgZmFsc2UpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJlc2l6ZShlKSB7XHJcbiAgY29uc3Qgc2l6ZSA9IGAke2UueH1weGA7XHJcbiAgc2lkZWJhci5zdHlsZS5mbGV4QmFzaXMgPSBzaXplO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vIHRvZ2dsZSBidXR0b25cclxuXHJcbmNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlXCIpO1xyXG5cclxudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgaWYoc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSl7XHJcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIHJlc2l6ZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICByZXNpemVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICB9XHJcbn0pXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9