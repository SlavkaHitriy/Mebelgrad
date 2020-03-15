/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/aside/aside.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/aside/aside.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// var offsetTop = document.querySelector('.aside').getBoundingClientRect().top + pageYOffset;
var offsetTop = document.querySelector('.header__bottom').getBoundingClientRect().top + pageYOffset + 3;
window.addEventListener('scroll', function () {
  if (window.innerWidth > 750) {
    if (document.querySelector('.wrapper-other')) {
      if (pageYOffset > offsetTop) {
        document.querySelector('.aside').classList.add('fixed');
        document.querySelector('.header__bottom').classList.add('fixed-other');
        document.querySelector('.header__logo').classList.add('fixed');
      } else {
        document.querySelector('.aside').classList.remove('fixed');
        document.querySelector('.header__bottom').classList.remove('fixed-other');
        document.querySelector('.header__logo').classList.remove('fixed');
      }
    } else {
      if (pageYOffset > offsetTop) {
        document.querySelector('.aside').classList.add('fixed');
        document.querySelector('.header__bottom').classList.add('fixed');
        document.querySelector('.header__logo').classList.add('fixed');
      } else {
        document.querySelector('.aside').classList.remove('fixed');
        document.querySelector('.header__bottom').classList.remove('fixed');
        document.querySelector('.header__logo').classList.remove('fixed');
      }
    }
  } else {
    document.querySelector('.aside').classList.remove('fixed');
    document.querySelector('.header__bottom').classList.remove('fixed');
    document.querySelector('.header__bottom').classList.remove('fixed-other');
    document.querySelector('.header__logo').classList.remove('fixed');
    return false;
  }
});

/***/ }),

/***/ "./src/blocks/modules/catalog-content/catalog-content.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/catalog-content/catalog-content.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider_distribute_nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider/distribute/nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider_distribute_nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider_distribute_nouislider__WEBPACK_IMPORTED_MODULE_0__);


try {
  var filterCheckboxes = function filterCheckboxes(filters, str) {
    var filtersChild = filters.querySelectorAll('li');

    for (var i = 0; i < filtersChild.length; i++) {
      var input = document.createElement("INPUT");
      input.setAttribute('type', 'checkbox');
      input.setAttribute('value', 1);
      input.setAttribute('name', "".concat(str, "[").concat(i, "]"));
      filtersChild[i].appendChild(input);
      input.classList.add('filters-input');
      filtersChild[i].addEventListener('click', function (e) {
        if (e.target.classList.contains('active')) {
          e.target.classList.remove('active');
          e.target.querySelector('.filters-input').checked = false;
        } else {
          e.target.classList.add('active');
          e.target.querySelector('.filters-input').checked = true;
        }

        countActiveItems(filtersChild, filters);
      });
    }
  };

  var countActiveItems = function countActiveItems(filtersChild, event) {
    var counter = 0;

    for (var i = 0; i < filtersChild.length; i++) {
      if (filtersChild[i].classList.contains('active')) {
        ++counter;
      }
    }

    if (counter == 0) {
      event.querySelector('.catalog-filters__filter-title span').textContent = '';
    } else {
      event.querySelector('.catalog-filters__filter-title span').textContent = "( ".concat(counter, " )");
    }
  };

  var price = document.querySelector('.catalog-filters__box.price .catalog-filters-range');
  var length = document.querySelector('.catalog-filters__box.length .catalog-filters-range');
  var width = document.querySelector('.catalog-filters__box.width .catalog-filters-range');
  var height = document.querySelector('.catalog-filters__box.height .catalog-filters-range');
  var inputPrice1 = document.querySelector('.catalog-filters__box.price .catalog-filters__min');
  var inputPrice2 = document.querySelector('.catalog-filters__box.price .catalog-filters__max');
  var inputsPrice = [inputPrice1, inputPrice2];
  var inputLength1 = document.querySelector('.catalog-filters__box.length .catalog-filters__min');
  var inputLength2 = document.querySelector('.catalog-filters__box.length .catalog-filters__max');
  var inputsLength = [inputLength1, inputLength2];
  var inputWidth1 = document.querySelector('.catalog-filters__box.width .catalog-filters__min');
  var inputWidth2 = document.querySelector('.catalog-filters__box.width .catalog-filters__max');
  var inputsWidth = [inputWidth1, inputWidth2];
  var inputHeight1 = document.querySelector('.catalog-filters__box.height .catalog-filters__min');
  var inputHeight2 = document.querySelector('.catalog-filters__box.height .catalog-filters__max');
  var inputsHeight = [inputHeight1, inputHeight2];
  nouislider_distribute_nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(price, {
    start: [600, 409600],
    connect: true,
    format: {
      to: function to(value) {
        return value.toFixed(0);
      },
      from: function from(value) {
        return Number(value);
      }
    },
    range: {
      'min': 600,
      'max': 409600
    }
  });
  nouislider_distribute_nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(length, {
    start: [0, 600],
    connect: true,
    format: {
      to: function to(value) {
        return value.toFixed(0);
      },
      from: function from(value) {
        return Number(value);
      }
    },
    range: {
      'min': 0,
      'max': 600
    }
  });
  nouislider_distribute_nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(width, {
    start: [0, 600],
    connect: true,
    format: {
      to: function to(value) {
        return value.toFixed(0);
      },
      from: function from(value) {
        return Number(value);
      }
    },
    range: {
      'min': 0,
      'max': 600
    }
  });
  nouislider_distribute_nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(height, {
    start: [0, 600],
    connect: true,
    format: {
      to: function to(value) {
        return value.toFixed(0);
      },
      from: function from(value) {
        return Number(value);
      }
    },
    range: {
      'min': 0,
      'max': 600
    }
  });
  price.noUiSlider.on('update', function (values, handle) {
    inputsPrice[handle].value = values[handle];
  });
  length.noUiSlider.on('update', function (values, handle) {
    inputsLength[handle].value = values[handle];
  });
  width.noUiSlider.on('update', function (values, handle) {
    inputsWidth[handle].value = values[handle];
  });
  height.noUiSlider.on('update', function (values, handle) {
    inputsHeight[handle].value = values[handle];
  });

  if (window.innerWidth < 900) {
    var filters = document.querySelector('.catalog-filters__title');
    filters.addEventListener('click', function () {
      filters.parentNode.classList.toggle('active');

      if (filters.parentNode.classList.contains('active')) {
        filters.parentNode.style.height = document.querySelector('.catalog-filters__wrapper').clientHeight + 100 + 'px';
      } else {
        filters.parentNode.style.height = 47 + 'px';
      }
    });
  }

  var materialFilters = document.querySelector('.catalog-filters__material');
  filterCheckboxes(materialFilters, 'materials');
  var mechanismFilters = document.querySelector('.catalog-filters__mechanism');
  filterCheckboxes(mechanismFilters, 'mechanisms');
  var typeFilters = document.querySelector('.catalog-filters__type-checkbox');
  filterCheckboxes(typeFilters, 'types');
  var amountFilters = document.querySelector('.catalog-filters__amount');
  filterCheckboxes(amountFilters, 'amount');
  var filtersTitle = document.querySelectorAll('.catalog-filters__filter-title');

  for (var i = 0; i < filtersTitle.length; i++) {
    filtersTitle[i].addEventListener('click', function (e) {
      if (e.target.parentNode.classList.contains('active')) {
        e.target.parentNode.style.height = 20 + 'px';
      } else {
        e.target.parentNode.style.height = e.target.parentNode.querySelector('ul').clientHeight + 28 + 'px';
      }

      e.target.parentNode.classList.toggle('active');
    });
  }
} catch (_unused) {}

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.querySelector('.footer__drop-btn').addEventListener("click", function () {
  var drop = document.querySelector('.footer__drop');
  drop.classList.toggle('active');
  var resHeight = getHeight();

  if (drop.classList.contains('active')) {
    drop.style.height = resHeight + 20 + "px";
  } else {
    drop.style.height = "0px";
  }
});

function getHeight() {
  var arr = document.querySelectorAll('.footer__column.mobile .footer__item');
  var resHeight = 0;

  for (var i = 0; i < document.querySelectorAll('.footer__column.mobile .footer__item').length; i++) {
    resHeight += arr[i].clientHeight + 25;
  }

  return resHeight;
}

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var burger = document.querySelector('.burger');
burger.addEventListener("click", function () {
  burger.classList.toggle('active');
  document.querySelector('.aside').classList.toggle('show');
}); // function windowOnResize() {
//    if (window.innerWidth < 750) {
//       })
//    } else {
//    }
// }
// window.addEventListener('resize', function () {
//    windowOnResize();
// })
// windowOnResize();

/***/ }),

/***/ "./src/blocks/modules/news/news.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/news/news.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");


try {
  var config = {
    bound: true,
    gap: 20,
    perView: 4,
    breakpoints: {
      1000: {
        perView: 3
      },
      850: {
        perView: 2
      },
      750: {
        perView: 3
      },
      600: {
        perView: 2
      },
      450: {
        perView: 1
      }
    }
  };
  new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.news__glide', config).mount();
} catch (_unused) {}

/***/ }),

/***/ "./src/blocks/modules/product/product.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/product/product.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");


try {
  var getHeight = function getHeight() {
    var arr = document.querySelectorAll('.product__characteristic-item');
    var resHeight = 0;

    for (var i = 0; i < document.querySelectorAll('.product__characteristic-item').length; i++) {
      resHeight += arr[i].clientHeight + 19;
    }

    return resHeight;
  };

  var config = {
    bound: true,
    gap: 20,
    perView: 1
  };
  new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.product .glide', config).mount();
  document.querySelector('.product__btn').addEventListener("click", function () {
    var drop = document.querySelector('.product__characteristic-list');
    drop.classList.toggle('active');
    var resHeight = getHeight();

    if (drop.classList.contains('active')) {
      drop.style.height = resHeight + 20 + "px";
    } else {
      drop.style.height = "0px";
    }
  });
} catch (_unused) {}

/***/ }),

/***/ "./src/blocks/modules/slider/slider.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/slider/slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");


try {
  var config = {
    bound: true,
    gap: 20
  };
  new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.glide', config).mount();
} catch (_unused) {}

/***/ }),

/***/ "./src/blocks/modules/stock-content/stock-content.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/stock-content/stock-content.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");


try {
  if (window.innerWidth < 750) {
    stockGlide.disable();
  }

  var config = {
    bound: true,
    gap: 30,
    perView: 3,
    breakpoints: {
      1500: {
        perView: 2
      },
      1000: {
        perView: 1
      }
    }
  };
  var stockGlide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.stock-content__slider', config).mount();
} catch (_unused) {}

/***/ }),

/***/ "./src/blocks/modules/stocks/stocks.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/stocks/stocks.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");


try {
  var config = {
    bound: true,
    gap: 20,
    perView: 4,
    breakpoints: {
      1000: {
        perView: 3
      },
      850: {
        perView: 2
      },
      750: {
        perView: 3
      },
      600: {
        perView: 2
      },
      450: {
        perView: 1
      }
    }
  };
  new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.stocks__glide', config).mount();
} catch (_unused) {}

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");
/* harmony import */ var _modules_stocks_stocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/stocks/stocks */ "./src/blocks/modules/stocks/stocks.js");
/* harmony import */ var _modules_news_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/news/news */ "./src/blocks/modules/news/news.js");
/* harmony import */ var _modules_aside_aside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/aside/aside */ "./src/blocks/modules/aside/aside.js");
/* harmony import */ var _modules_aside_aside__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_aside_aside__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/product/product */ "./src/blocks/modules/product/product.js");
/* harmony import */ var _modules_catalog_content_catalog_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/catalog-content/catalog-content */ "./src/blocks/modules/catalog-content/catalog-content.js");
/* harmony import */ var _modules_stock_content_stock_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/stock-content/stock-content */ "./src/blocks/modules/stock-content/stock-content.js");







 // import "%modules%/catalog-content/selectize.min.js";



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map