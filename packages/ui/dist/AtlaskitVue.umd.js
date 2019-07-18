(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AtlaskitVue"] = factory();
	else
		root["AtlaskitVue"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "1c25");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1105");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0b91":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_index_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6686");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_index_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_index_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_index_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_index_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_index_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1105":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1195":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1195d");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "1195d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _atlaskit_vue_ui_src_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5a50");
/* harmony import */ var _atlaskit_vue_ui_src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ed08");



const properties = {}
_atlaskit_vue_ui_src_constants__WEBPACK_IMPORTED_MODULE_0__["breakpointKeys"].forEach(breakpoint => {
  if (breakpoint !== '') {
    properties[breakpoint] = {
      type: [String, Boolean, Number],
      default: false,
    }
  }
  let props = ['first', 'last']
  props.forEach(property => {
    properties[property + Object(_atlaskit_vue_ui_src_utils__WEBPACK_IMPORTED_MODULE_1__["capitalizeFirst"])(breakpoint)] = {
      type: Boolean,
      default: false,
    }
  })
  props = [('offset', 'push', 'pull')]
  props.forEach(property => {
    properties[property + Object(_atlaskit_vue_ui_src_utils__WEBPACK_IMPORTED_MODULE_1__["capitalizeFirst"])(breakpoint)] = {
      type: [String, Number],
      default: '',
    }
  })
})

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AvCol',
  props: properties,
  computed: {
    classes() {
      return [
        ...Object.keys(properties).map(p =>
          this[p] ? Object(_atlaskit_vue_ui_src_utils__WEBPACK_IMPORTED_MODULE_1__["breakpointClass"])(Object(_atlaskit_vue_ui_src_utils__WEBPACK_IMPORTED_MODULE_1__["modifierClass"])(p), this[p]) : '',
        ),
      ].filter(p => p !== '')
    },
  },
});


/***/ }),

/***/ "18d9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col",class:_vm.classes},[_vm._t("default")],2)}
var staticRenderFns = []



/***/ }),

/***/ "1a5c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c23282b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("18d9");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c23282b2___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c23282b2___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "1c25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e754");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b635");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/* harmony default export */ __webpack_exports__["default"] = (_entry__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "2be6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "366e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2d39829f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e1c7");
/* harmony import */ var _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b729");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2be6");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2d39829f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2d39829f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3ec1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',[_vm._v("Ahihi")])}
var staticRenderFns = []



/***/ }),

/***/ "4141":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "4318":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_741c3f02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4489");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_741c3f02___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_741c3f02___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "442c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("442cc");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "442cc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _atlaskit_vue_ui_src_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5a50");
/* harmony import */ var _atlaskit_vue_ui_src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ed08");



const properties = {}

_atlaskit_vue_ui_src_constants__WEBPACK_IMPORTED_MODULE_0__["breakpointKeys"].forEach(breakpoint => {
  const props = [
    'start',
    'center',
    'end',
    'top',
    'middle',
    'bottom',
    'around',
    'between',
    'reverse',
  ]
  props.forEach(property => {
    properties[property + Object(_atlaskit_vue_ui_src_utils__WEBPACK_IMPORTED_MODULE_1__["capitalizeFirst"])(breakpoint)] = {
      type: Boolean,
      default: false,
    }
  })
})

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AvRow',
  props: {
    noGutter: {
      type: Boolean,
      default: false,
    },
    noCollapse: {
      type: Boolean,
      default: false,
    },
    ...properties,
  },
  computed: {
    classes() {
      return [
        this.noGutter ? '-no-gutter' : '',
        this.noCollapse ? '-no-collapse' : '',
        ...Object.keys(properties).map(p =>
          this[p] ? Object(_atlaskit_vue_ui_src_utils__WEBPACK_IMPORTED_MODULE_1__["breakpointClass"])(Object(_atlaskit_vue_ui_src_utils__WEBPACK_IMPORTED_MODULE_1__["modifierClass"])(p), this[p]) : '',
        ),
      ].filter(p => p !== '')
    },
  },
});


/***/ }),

/***/ "4489":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",class:_vm.classes},[_vm._t("default")],2)}
var staticRenderFns = []



/***/ }),

/***/ "4ecf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_c23282b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1a5c");
/* harmony import */ var _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1195");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4f26");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2be6");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_c23282b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_c23282b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4f26":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4ce");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5659":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("56594");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "56594":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _atlaskit_vue_ui_src_mixins_components_providers_ClassesProviderMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ae22");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AvIcon',
  mixins: [_atlaskit_vue_ui_src_mixins_components_providers_ClassesProviderMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    name: {
      type: String,
      required: true,
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator(v) {
        return ['solid', 'regular', 'brands'].includes(v)
      },
    },
    size: {
      type: String,
      default: '1em',
    },
    color: {
      type: String,
    },
    bgColor: {
      type: String,
    },
  },
  computed: {
    fontStyle() {
      switch (this.iconStyle) {
        case 'regular':
          return 'far'
        case 'solid':
          return 'fas'
        case 'brands':
          return 'fab'
        default:
          return 'fas'
      }
    },
  },
  created() {
    this.classesProvider.add(() => ({
      [this.fontStyle]: true,
      [`fa-${this.name}`]: Boolean(this.name),
    }))
  },
});


/***/ }),

/***/ "5a50":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a13c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return _breakpoints__WEBPACK_IMPORTED_MODULE_0__["breakpoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpointKeys", function() { return _breakpoints__WEBPACK_IMPORTED_MODULE_0__["breakpointKeys"]; });




/***/ }),

/***/ "6686":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6f24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirst", function() { return capitalizeFirst; });
/**
 * Capitalize first letter of a string
 *
 * @param string
 * @returns {string}
 */
const capitalizeFirst = string => string.charAt(0).toUpperCase() + string.slice(1)


/***/ }),

/***/ "797d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassesProviderMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ea04");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassesProviderMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassesProviderMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassesProviderMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "7de3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toKebabCase", function() { return toKebabCase; });
const toKebabCase = (string, from = 'camel') => {
  const regExp = from === 'camel' ? /([A-Z])/g : /_([a-zA-Z])/g
  return string.replace(regExp, (_, p) => '-' + p.toLowerCase())
}


/***/ }),

/***/ "7fed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"av-icon",class:_vm.classes,style:(("font-size: " + _vm.size + "; color: " + _vm.color + "; background-color: " + _vm.bgColor))})}
var staticRenderFns = []



/***/ }),

/***/ "8121":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierClass", function() { return modifierClass; });
const modifierClass = className => '-' + className


/***/ }),

/***/ "a13c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointKeys", function() { return breakpointKeys; });
/**
 * Responsive breakpoints and their values.
 */
const breakpoints = {
  xs: [0, 575],
  sm: [576, 767],
  md: [768, 991],
  lg: [992, 1199],
  xl: [1200, Infinity],
}

/**
 * Available window breakpoints. The emtpy string is required for generating class names without breakpoints.
 *
 * @type {string[]}
 */
const breakpointKeys = ['', 'xs', 'sm', 'md', 'lg', 'xl']


/***/ }),

/***/ "a4ce":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ae22":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClassesProviderMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("797d");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ClassesProviderMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ClassesProviderMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2be6");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ClassesProviderMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b45a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b1fe062a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7fed");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b1fe062a___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b1fe062a___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "b4ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_741c3f02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4318");
/* harmony import */ var _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bf57");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _style_index_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0b91");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2be6");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_741c3f02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_741c3f02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b635":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Atlaskit", function() { return Atlaskit; });
/* harmony import */ var _atlaskit_vue_ui_src_index_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dd6e");
/* harmony import */ var _atlaskit_vue_ui_src_index_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_atlaskit_vue_ui_src_index_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atlaskit_vue_ui_src_components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b4ad");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AvContainer", function() { return _atlaskit_vue_ui_src_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _atlaskit_vue_ui_src_components_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("f882");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AvRow", function() { return _atlaskit_vue_ui_src_components_Row__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _atlaskit_vue_ui_src_components_Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4ecf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AvColumn", function() { return _atlaskit_vue_ui_src_components_Column__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _atlaskit_vue_ui_src_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("366e");
/* harmony import */ var _atlaskit_vue_ui_src_components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("d010");








const components = [_atlaskit_vue_ui_src_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], _atlaskit_vue_ui_src_components_Row__WEBPACK_IMPORTED_MODULE_2__["default"], _atlaskit_vue_ui_src_components_Column__WEBPACK_IMPORTED_MODULE_3__["default"], _atlaskit_vue_ui_src_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], _atlaskit_vue_ui_src_components_Icon__WEBPACK_IMPORTED_MODULE_5__["default"]]

const Atlaskit = {
  install(Vue, options = {}) {
    ;(options.components || components).forEach(component => {
      Vue.component(component.name, component)
    })
  },
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Atlaskit)
}



/* harmony default export */ __webpack_exports__["default"] = (Atlaskit);


/***/ }),

/***/ "b729":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b7296");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "b7296":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AvButton',
});


/***/ }),

/***/ "bdb9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointClass", function() { return breakpointClass; });
/* harmony import */ var _toKebabCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7de3");


/**
 * Convert given class name into dash case and append the given breakpoint string. Required in order to turn camel case
 * props into dash case.
 *
 * @param className
 * @param breakpoint
 * @returns {string}
 */
const breakpointClass = (className, breakpoint) => {
  if (['string', 'number'].indexOf(typeof breakpoint) > -1 && breakpoint !== '') {
    return `${Object(_toKebabCase__WEBPACK_IMPORTED_MODULE_0__["toKebabCase"])(className)}-${breakpoint}`
  }

  return Object(_toKebabCase__WEBPACK_IMPORTED_MODULE_0__["toKebabCase"])(className)
}


/***/ }),

/***/ "bf57":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bf572");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_script_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "bf572":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _atlaskit_vue_ui_src_mixins_components_providers_ClassesProviderMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ae22");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AvContainer',
  mixins: [_atlaskit_vue_ui_src_mixins_components_providers_ClassesProviderMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.classesProvider.add(() => ({
      '-fluid': this.fluid,
    }))
  },
});


/***/ }),

/***/ "d010":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b1fe062a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b45a");
/* harmony import */ var _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5659");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2be6");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b1fe062a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_b1fe062a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "dd6e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e1c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2d39829f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3ec1");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2d39829f___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2d39829f___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "e258":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_80c9c66e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ee47");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_80c9c66e___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4eb4a200_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_80c9c66e___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "e754":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("4141")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ __webpack_exports__["default"] = (null);


/***/ }),

/***/ "ea04":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    const classesProvider = []

    classesProvider.add = (type, fn) => {
      if (!fn) {
        fn = type
        type = 'root'
      }

      fn.type = type

      classesProvider.push(fn)
    }

    return {
      classesProvider,
    }
  },
  computed: {
    /**
     * Compute dynamically provided classes from mixins
     */
    classes() {
      return this.classesProvider.reduce((acc, fn) => {
        const rule = fn()

        if (!acc[fn.type]) acc[fn.type] = []

        acc[fn.type].push(rule)
        acc.push(rule)

        return acc
      }, [])
    },
  },
});


/***/ }),

/***/ "ed08":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capitalizeFirst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f24");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirst", function() { return _capitalizeFirst__WEBPACK_IMPORTED_MODULE_0__["capitalizeFirst"]; });

/* harmony import */ var _toKebabCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7de3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toKebabCase", function() { return _toKebabCase__WEBPACK_IMPORTED_MODULE_1__["toKebabCase"]; });

/* harmony import */ var _breakpointClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bdb9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpointClass", function() { return _breakpointClass__WEBPACK_IMPORTED_MODULE_2__["breakpointClass"]; });

/* harmony import */ var _modifierClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8121");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifierClass", function() { return _modifierClass__WEBPACK_IMPORTED_MODULE_3__["modifierClass"]; });







/***/ }),

/***/ "ee47":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row",class:_vm.classes},[_vm._t("default")],2)}
var staticRenderFns = []



/***/ }),

/***/ "f882":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_80c9c66e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e258");
/* harmony import */ var _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("442c");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _style_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("01ec");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2be6");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _script_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_80c9c66e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_80c9c66e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

/******/ });
});
//# sourceMappingURL=AtlaskitVue.umd.js.map