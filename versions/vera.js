/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./types/vera/src/index.js-exposed");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js??ref--12-0!./types/vera/src/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--12-0!./types/vera/src/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    type: 'vera',\n    model: __webpack_require__(/*! ./model.js */ \"./types/vera/src/model.js\"),\n    lang: {},\n    convert: __webpack_require__(/*! ./convert.js */ \"./types/vera/src/convert.js\"),\n    hooks: __webpack_require__(/*! ./hooks.js */ \"./types/vera/src/hooks.js\"),\n    parse: null\n};\n\n//# sourceURL=webpack:///./types/vera/src/index.js?./node_modules/babel-loader/lib??ref--12-0");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars.runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars.runtime.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\n// istanbul ignore next\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n      }\n    }newObj['default'] = obj;return newObj;\n  }\n}\n\nvar _handlebarsBase = __webpack_require__(/*! ./handlebars/base */ \"./node_modules/handlebars/dist/cjs/handlebars/base.js\");\n\nvar base = _interopRequireWildcard(_handlebarsBase);\n\n// Each of these augment the Handlebars object. No need to setup here.\n// (This is done to easily share code between commonjs and browse envs)\n\nvar _handlebarsSafeString = __webpack_require__(/*! ./handlebars/safe-string */ \"./node_modules/handlebars/dist/cjs/handlebars/safe-string.js\");\n\nvar _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);\n\nvar _handlebarsException = __webpack_require__(/*! ./handlebars/exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _handlebarsException2 = _interopRequireDefault(_handlebarsException);\n\nvar _handlebarsUtils = __webpack_require__(/*! ./handlebars/utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar Utils = _interopRequireWildcard(_handlebarsUtils);\n\nvar _handlebarsRuntime = __webpack_require__(/*! ./handlebars/runtime */ \"./node_modules/handlebars/dist/cjs/handlebars/runtime.js\");\n\nvar runtime = _interopRequireWildcard(_handlebarsRuntime);\n\nvar _handlebarsNoConflict = __webpack_require__(/*! ./handlebars/no-conflict */ \"./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js\");\n\nvar _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);\n\n// For compatibility and usage outside of module systems, make the Handlebars object a namespace\nfunction create() {\n  var hb = new base.HandlebarsEnvironment();\n\n  Utils.extend(hb, base);\n  hb.SafeString = _handlebarsSafeString2['default'];\n  hb.Exception = _handlebarsException2['default'];\n  hb.Utils = Utils;\n  hb.escapeExpression = Utils.escapeExpression;\n\n  hb.VM = runtime;\n  hb.template = function (spec) {\n    return runtime.template(spec, hb);\n  };\n\n  return hb;\n}\n\nvar inst = create();\ninst.create = create;\n\n_handlebarsNoConflict2['default'](inst);\n\ninst['default'] = inst;\n\nexports['default'] = inst;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars.runtime.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/base.js":
/*!*************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/base.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.HandlebarsEnvironment = HandlebarsEnvironment;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar _exception = __webpack_require__(/*! ./exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers.js\");\n\nvar _decorators = __webpack_require__(/*! ./decorators */ \"./node_modules/handlebars/dist/cjs/handlebars/decorators.js\");\n\nvar _logger = __webpack_require__(/*! ./logger */ \"./node_modules/handlebars/dist/cjs/handlebars/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar VERSION = '4.0.11';\nexports.VERSION = VERSION;\nvar COMPILER_REVISION = 7;\n\nexports.COMPILER_REVISION = COMPILER_REVISION;\nvar REVISION_CHANGES = {\n  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it\n  2: '== 1.0.0-rc.3',\n  3: '== 1.0.0-rc.4',\n  4: '== 1.x.x',\n  5: '== 2.0.0-alpha.x',\n  6: '>= 2.0.0-beta.1',\n  7: '>= 4.0.0'\n};\n\nexports.REVISION_CHANGES = REVISION_CHANGES;\nvar objectType = '[object Object]';\n\nfunction HandlebarsEnvironment(helpers, partials, decorators) {\n  this.helpers = helpers || {};\n  this.partials = partials || {};\n  this.decorators = decorators || {};\n\n  _helpers.registerDefaultHelpers(this);\n  _decorators.registerDefaultDecorators(this);\n}\n\nHandlebarsEnvironment.prototype = {\n  constructor: HandlebarsEnvironment,\n\n  logger: _logger2['default'],\n  log: _logger2['default'].log,\n\n  registerHelper: function registerHelper(name, fn) {\n    if (_utils.toString.call(name) === objectType) {\n      if (fn) {\n        throw new _exception2['default']('Arg not supported with multiple helpers');\n      }\n      _utils.extend(this.helpers, name);\n    } else {\n      this.helpers[name] = fn;\n    }\n  },\n  unregisterHelper: function unregisterHelper(name) {\n    delete this.helpers[name];\n  },\n\n  registerPartial: function registerPartial(name, partial) {\n    if (_utils.toString.call(name) === objectType) {\n      _utils.extend(this.partials, name);\n    } else {\n      if (typeof partial === 'undefined') {\n        throw new _exception2['default']('Attempting to register a partial called \"' + name + '\" as undefined');\n      }\n      this.partials[name] = partial;\n    }\n  },\n  unregisterPartial: function unregisterPartial(name) {\n    delete this.partials[name];\n  },\n\n  registerDecorator: function registerDecorator(name, fn) {\n    if (_utils.toString.call(name) === objectType) {\n      if (fn) {\n        throw new _exception2['default']('Arg not supported with multiple decorators');\n      }\n      _utils.extend(this.decorators, name);\n    } else {\n      this.decorators[name] = fn;\n    }\n  },\n  unregisterDecorator: function unregisterDecorator(name) {\n    delete this.decorators[name];\n  }\n};\n\nvar log = _logger2['default'].log;\n\nexports.log = log;\nexports.createFrame = _utils.createFrame;\nexports.logger = _logger2['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/base.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.registerDefaultDecorators = registerDefaultDecorators;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\nvar _decoratorsInline = __webpack_require__(/*! ./decorators/inline */ \"./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js\");\n\nvar _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);\n\nfunction registerDefaultDecorators(instance) {\n  _decoratorsInline2['default'](instance);\n}\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/decorators.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js":
/*!**************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports['default'] = function (instance) {\n  instance.registerDecorator('inline', function (fn, props, container, options) {\n    var ret = fn;\n    if (!props.partials) {\n      props.partials = {};\n      ret = function ret(context, options) {\n        // Create a new partials stack frame prior to exec.\n        var original = container.partials;\n        container.partials = _utils.extend({}, original, props.partials);\n        var ret = fn(context, options);\n        container.partials = original;\n        return ret;\n      };\n    }\n\n    props.partials[options.args[0]] = options.fn;\n\n    return ret;\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/exception.js":
/*!******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/exception.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];\n\nfunction Exception(message, node) {\n  var loc = node && node.loc,\n      line = undefined,\n      column = undefined;\n  if (loc) {\n    line = loc.start.line;\n    column = loc.start.column;\n\n    message += ' - ' + line + ':' + column;\n  }\n\n  var tmp = Error.prototype.constructor.call(this, message);\n\n  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.\n  for (var idx = 0; idx < errorProps.length; idx++) {\n    this[errorProps[idx]] = tmp[errorProps[idx]];\n  }\n\n  /* istanbul ignore else */\n  if (Error.captureStackTrace) {\n    Error.captureStackTrace(this, Exception);\n  }\n\n  try {\n    if (loc) {\n      this.lineNumber = line;\n\n      // Work around issue under safari where we can't directly set the column value\n      /* istanbul ignore next */\n      if (Object.defineProperty) {\n        Object.defineProperty(this, 'column', {\n          value: column,\n          enumerable: true\n        });\n      } else {\n        this.column = column;\n      }\n    }\n  } catch (nop) {\n    /* Ignore if the browser is very particular */\n  }\n}\n\nException.prototype = new Error();\n\nexports['default'] = Exception;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/exception.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.registerDefaultHelpers = registerDefaultHelpers;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\nvar _helpersBlockHelperMissing = __webpack_require__(/*! ./helpers/block-helper-missing */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js\");\n\nvar _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);\n\nvar _helpersEach = __webpack_require__(/*! ./helpers/each */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js\");\n\nvar _helpersEach2 = _interopRequireDefault(_helpersEach);\n\nvar _helpersHelperMissing = __webpack_require__(/*! ./helpers/helper-missing */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js\");\n\nvar _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);\n\nvar _helpersIf = __webpack_require__(/*! ./helpers/if */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js\");\n\nvar _helpersIf2 = _interopRequireDefault(_helpersIf);\n\nvar _helpersLog = __webpack_require__(/*! ./helpers/log */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js\");\n\nvar _helpersLog2 = _interopRequireDefault(_helpersLog);\n\nvar _helpersLookup = __webpack_require__(/*! ./helpers/lookup */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js\");\n\nvar _helpersLookup2 = _interopRequireDefault(_helpersLookup);\n\nvar _helpersWith = __webpack_require__(/*! ./helpers/with */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js\");\n\nvar _helpersWith2 = _interopRequireDefault(_helpersWith);\n\nfunction registerDefaultHelpers(instance) {\n  _helpersBlockHelperMissing2['default'](instance);\n  _helpersEach2['default'](instance);\n  _helpersHelperMissing2['default'](instance);\n  _helpersIf2['default'](instance);\n  _helpersLog2['default'](instance);\n  _helpersLookup2['default'](instance);\n  _helpersWith2['default'](instance);\n}\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports['default'] = function (instance) {\n  instance.registerHelper('blockHelperMissing', function (context, options) {\n    var inverse = options.inverse,\n        fn = options.fn;\n\n    if (context === true) {\n      return fn(this);\n    } else if (context === false || context == null) {\n      return inverse(this);\n    } else if (_utils.isArray(context)) {\n      if (context.length > 0) {\n        if (options.ids) {\n          options.ids = [options.name];\n        }\n\n        return instance.helpers.each(context, options);\n      } else {\n        return inverse(this);\n      }\n    } else {\n      if (options.data && options.ids) {\n        var data = _utils.createFrame(options.data);\n        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);\n        options = { data: data };\n      }\n\n      return fn(context, options);\n    }\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.__esModule = true;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar _exception = __webpack_require__(/*! ../exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nexports['default'] = function (instance) {\n  instance.registerHelper('each', function (context, options) {\n    if (!options) {\n      throw new _exception2['default']('Must pass iterator to #each');\n    }\n\n    var fn = options.fn,\n        inverse = options.inverse,\n        i = 0,\n        ret = '',\n        data = undefined,\n        contextPath = undefined;\n\n    if (options.data && options.ids) {\n      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';\n    }\n\n    if (_utils.isFunction(context)) {\n      context = context.call(this);\n    }\n\n    if (options.data) {\n      data = _utils.createFrame(options.data);\n    }\n\n    function execIteration(field, index, last) {\n      if (data) {\n        data.key = field;\n        data.index = index;\n        data.first = index === 0;\n        data.last = !!last;\n\n        if (contextPath) {\n          data.contextPath = contextPath + field;\n        }\n      }\n\n      ret = ret + fn(context[field], {\n        data: data,\n        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])\n      });\n    }\n\n    if (context && (typeof context === 'undefined' ? 'undefined' : _typeof(context)) === 'object') {\n      if (_utils.isArray(context)) {\n        for (var j = context.length; i < j; i++) {\n          if (i in context) {\n            execIteration(i, i, i === context.length - 1);\n          }\n        }\n      } else {\n        var priorKey = undefined;\n\n        for (var key in context) {\n          if (context.hasOwnProperty(key)) {\n            // We're running the iterations one step out of sync so we can detect\n            // the last iteration without have to scan the object twice and create\n            // an itermediate keys array.\n            if (priorKey !== undefined) {\n              execIteration(priorKey, i - 1);\n            }\n            priorKey = key;\n            i++;\n          }\n        }\n        if (priorKey !== undefined) {\n          execIteration(priorKey, i - 1, true);\n        }\n      }\n    }\n\n    if (i === 0) {\n      ret = inverse(this);\n    }\n\n    return ret;\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\nvar _exception = __webpack_require__(/*! ../exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nexports['default'] = function (instance) {\n  instance.registerHelper('helperMissing', function () /* [args, ]options */{\n    if (arguments.length === 1) {\n      // A missing field in a {{foo}} construct.\n      return undefined;\n    } else {\n      // Someone is actually trying to call something, blow up.\n      throw new _exception2['default']('Missing helper: \"' + arguments[arguments.length - 1].name + '\"');\n    }\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports['default'] = function (instance) {\n  instance.registerHelper('if', function (conditional, options) {\n    if (_utils.isFunction(conditional)) {\n      conditional = conditional.call(this);\n    }\n\n    // Default behavior is to render the positive path if the value is truthy and not empty.\n    // The `includeZero` option may be set to treat the condtional as purely not empty based on the\n    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.\n    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {\n      return options.inverse(this);\n    } else {\n      return options.fn(this);\n    }\n  });\n\n  instance.registerHelper('unless', function (conditional, options) {\n    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports['default'] = function (instance) {\n  instance.registerHelper('log', function () /* message, options */{\n    var args = [undefined],\n        options = arguments[arguments.length - 1];\n    for (var i = 0; i < arguments.length - 1; i++) {\n      args.push(arguments[i]);\n    }\n\n    var level = 1;\n    if (options.hash.level != null) {\n      level = options.hash.level;\n    } else if (options.data && options.data.level != null) {\n      level = options.data.level;\n    }\n    args[0] = level;\n\n    instance.log.apply(instance, args);\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js":
/*!***********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports['default'] = function (instance) {\n  instance.registerHelper('lookup', function (obj, field) {\n    return obj && obj[field];\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports['default'] = function (instance) {\n  instance.registerHelper('with', function (context, options) {\n    if (_utils.isFunction(context)) {\n      context = context.call(this);\n    }\n\n    var fn = options.fn;\n\n    if (!_utils.isEmpty(context)) {\n      var data = options.data;\n      if (options.data && options.ids) {\n        data = _utils.createFrame(options.data);\n        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);\n      }\n\n      return fn(context, {\n        data: data,\n        blockParams: _utils.blockParams([context], [data && data.contextPath])\n      });\n    } else {\n      return options.inverse(this);\n    }\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/logger.js":
/*!***************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/logger.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar logger = {\n  methodMap: ['debug', 'info', 'warn', 'error'],\n  level: 'info',\n\n  // Maps a given level value to the `methodMap` indexes above.\n  lookupLevel: function lookupLevel(level) {\n    if (typeof level === 'string') {\n      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());\n      if (levelMap >= 0) {\n        level = levelMap;\n      } else {\n        level = parseInt(level, 10);\n      }\n    }\n\n    return level;\n  },\n\n  // Can be overridden in the host environment\n  log: function log(level) {\n    level = logger.lookupLevel(level);\n\n    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {\n      var method = logger.methodMap[level];\n      if (!console[method]) {\n        // eslint-disable-line no-console\n        method = 'log';\n      }\n\n      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        message[_key - 1] = arguments[_key];\n      }\n\n      console[method].apply(console, message); // eslint-disable-line no-console\n    }\n  }\n};\n\nexports['default'] = logger;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/logger.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {/* global window */\n\n\nexports.__esModule = true;\n\nexports['default'] = function (Handlebars) {\n  /* istanbul ignore next */\n  var root = typeof global !== 'undefined' ? global : window,\n      $Handlebars = root.Handlebars;\n  /* istanbul ignore next */\n  Handlebars.noConflict = function () {\n    if (root.Handlebars === Handlebars) {\n      root.Handlebars = $Handlebars;\n    }\n    return Handlebars;\n  };\n};\n\nmodule.exports = exports['default'];\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/runtime.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.__esModule = true;\nexports.checkRevision = checkRevision;\nexports.template = template;\nexports.wrapProgram = wrapProgram;\nexports.resolvePartial = resolvePartial;\nexports.invokePartial = invokePartial;\nexports.noop = noop;\n// istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\n// istanbul ignore next\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n      }\n    }newObj['default'] = obj;return newObj;\n  }\n}\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar Utils = _interopRequireWildcard(_utils);\n\nvar _exception = __webpack_require__(/*! ./exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/handlebars/dist/cjs/handlebars/base.js\");\n\nfunction checkRevision(compilerInfo) {\n  var compilerRevision = compilerInfo && compilerInfo[0] || 1,\n      currentRevision = _base.COMPILER_REVISION;\n\n  if (compilerRevision !== currentRevision) {\n    if (compilerRevision < currentRevision) {\n      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],\n          compilerVersions = _base.REVISION_CHANGES[compilerRevision];\n      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');\n    } else {\n      // Use the embedded version info since the runtime doesn't know about this revision yet\n      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');\n    }\n  }\n}\n\nfunction template(templateSpec, env) {\n  /* istanbul ignore next */\n  if (!env) {\n    throw new _exception2['default']('No environment passed to template');\n  }\n  if (!templateSpec || !templateSpec.main) {\n    throw new _exception2['default']('Unknown template object: ' + (typeof templateSpec === 'undefined' ? 'undefined' : _typeof(templateSpec)));\n  }\n\n  templateSpec.main.decorator = templateSpec.main_d;\n\n  // Note: Using env.VM references rather than local var references throughout this section to allow\n  // for external users to override these as psuedo-supported APIs.\n  env.VM.checkRevision(templateSpec.compiler);\n\n  function invokePartialWrapper(partial, context, options) {\n    if (options.hash) {\n      context = Utils.extend({}, context, options.hash);\n      if (options.ids) {\n        options.ids[0] = true;\n      }\n    }\n\n    partial = env.VM.resolvePartial.call(this, partial, context, options);\n    var result = env.VM.invokePartial.call(this, partial, context, options);\n\n    if (result == null && env.compile) {\n      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);\n      result = options.partials[options.name](context, options);\n    }\n    if (result != null) {\n      if (options.indent) {\n        var lines = result.split('\\n');\n        for (var i = 0, l = lines.length; i < l; i++) {\n          if (!lines[i] && i + 1 === l) {\n            break;\n          }\n\n          lines[i] = options.indent + lines[i];\n        }\n        result = lines.join('\\n');\n      }\n      return result;\n    } else {\n      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');\n    }\n  }\n\n  // Just add water\n  var container = {\n    strict: function strict(obj, name) {\n      if (!(name in obj)) {\n        throw new _exception2['default']('\"' + name + '\" not defined in ' + obj);\n      }\n      return obj[name];\n    },\n    lookup: function lookup(depths, name) {\n      var len = depths.length;\n      for (var i = 0; i < len; i++) {\n        if (depths[i] && depths[i][name] != null) {\n          return depths[i][name];\n        }\n      }\n    },\n    lambda: function lambda(current, context) {\n      return typeof current === 'function' ? current.call(context) : current;\n    },\n\n    escapeExpression: Utils.escapeExpression,\n    invokePartial: invokePartialWrapper,\n\n    fn: function fn(i) {\n      var ret = templateSpec[i];\n      ret.decorator = templateSpec[i + '_d'];\n      return ret;\n    },\n\n    programs: [],\n    program: function program(i, data, declaredBlockParams, blockParams, depths) {\n      var programWrapper = this.programs[i],\n          fn = this.fn(i);\n      if (data || depths || blockParams || declaredBlockParams) {\n        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);\n      } else if (!programWrapper) {\n        programWrapper = this.programs[i] = wrapProgram(this, i, fn);\n      }\n      return programWrapper;\n    },\n\n    data: function data(value, depth) {\n      while (value && depth--) {\n        value = value._parent;\n      }\n      return value;\n    },\n    merge: function merge(param, common) {\n      var obj = param || common;\n\n      if (param && common && param !== common) {\n        obj = Utils.extend({}, common, param);\n      }\n\n      return obj;\n    },\n    // An empty object to use as replacement for null-contexts\n    nullContext: Object.seal({}),\n\n    noop: env.VM.noop,\n    compilerInfo: templateSpec.compiler\n  };\n\n  function ret(context) {\n    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n    var data = options.data;\n\n    ret._setup(options);\n    if (!options.partial && templateSpec.useData) {\n      data = initData(context, data);\n    }\n    var depths = undefined,\n        blockParams = templateSpec.useBlockParams ? [] : undefined;\n    if (templateSpec.useDepths) {\n      if (options.depths) {\n        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;\n      } else {\n        depths = [context];\n      }\n    }\n\n    function main(context /*, options*/) {\n      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);\n    }\n    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);\n    return main(context, options);\n  }\n  ret.isTop = true;\n\n  ret._setup = function (options) {\n    if (!options.partial) {\n      container.helpers = container.merge(options.helpers, env.helpers);\n\n      if (templateSpec.usePartial) {\n        container.partials = container.merge(options.partials, env.partials);\n      }\n      if (templateSpec.usePartial || templateSpec.useDecorators) {\n        container.decorators = container.merge(options.decorators, env.decorators);\n      }\n    } else {\n      container.helpers = options.helpers;\n      container.partials = options.partials;\n      container.decorators = options.decorators;\n    }\n  };\n\n  ret._child = function (i, data, blockParams, depths) {\n    if (templateSpec.useBlockParams && !blockParams) {\n      throw new _exception2['default']('must pass block params');\n    }\n    if (templateSpec.useDepths && !depths) {\n      throw new _exception2['default']('must pass parent depths');\n    }\n\n    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);\n  };\n  return ret;\n}\n\nfunction wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {\n  function prog(context) {\n    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n    var currentDepths = depths;\n    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {\n      currentDepths = [context].concat(depths);\n    }\n\n    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);\n  }\n\n  prog = executeDecorators(fn, prog, container, depths, data, blockParams);\n\n  prog.program = i;\n  prog.depth = depths ? depths.length : 0;\n  prog.blockParams = declaredBlockParams || 0;\n  return prog;\n}\n\nfunction resolvePartial(partial, context, options) {\n  if (!partial) {\n    if (options.name === '@partial-block') {\n      partial = options.data['partial-block'];\n    } else {\n      partial = options.partials[options.name];\n    }\n  } else if (!partial.call && !options.name) {\n    // This is a dynamic partial that returned a string\n    options.name = partial;\n    partial = options.partials[partial];\n  }\n  return partial;\n}\n\nfunction invokePartial(partial, context, options) {\n  // Use the current closure context to save the partial-block if this partial\n  var currentPartialBlock = options.data && options.data['partial-block'];\n  options.partial = true;\n  if (options.ids) {\n    options.data.contextPath = options.ids[0] || options.data.contextPath;\n  }\n\n  var partialBlock = undefined;\n  if (options.fn && options.fn !== noop) {\n    (function () {\n      options.data = _base.createFrame(options.data);\n      // Wrapper function to get access to currentPartialBlock from the closure\n      var fn = options.fn;\n      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {\n        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n        // Restore the partial-block from the closure for the execution of the block\n        // i.e. the part inside the block of the partial call.\n        options.data = _base.createFrame(options.data);\n        options.data['partial-block'] = currentPartialBlock;\n        return fn(context, options);\n      };\n      if (fn.partials) {\n        options.partials = Utils.extend({}, options.partials, fn.partials);\n      }\n    })();\n  }\n\n  if (partial === undefined && partialBlock) {\n    partial = partialBlock;\n  }\n\n  if (partial === undefined) {\n    throw new _exception2['default']('The partial ' + options.name + ' could not be found');\n  } else if (partial instanceof Function) {\n    return partial(context, options);\n  }\n}\n\nfunction noop() {\n  return '';\n}\n\nfunction initData(context, data) {\n  if (!data || !('root' in data)) {\n    data = data ? _base.createFrame(data) : {};\n    data.root = context;\n  }\n  return data;\n}\n\nfunction executeDecorators(fn, prog, container, depths, data, blockParams) {\n  if (fn.decorator) {\n    var props = {};\n    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);\n    Utils.extend(prog, props);\n  }\n  return prog;\n}\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/runtime.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/safe-string.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/safe-string.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Build out our basic SafeString type\n\n\nexports.__esModule = true;\nfunction SafeString(string) {\n  this.string = string;\n}\n\nSafeString.prototype.toString = SafeString.prototype.toHTML = function () {\n  return '' + this.string;\n};\n\nexports['default'] = SafeString;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/safe-string.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.__esModule = true;\nexports.extend = extend;\nexports.indexOf = indexOf;\nexports.escapeExpression = escapeExpression;\nexports.isEmpty = isEmpty;\nexports.createFrame = createFrame;\nexports.blockParams = blockParams;\nexports.appendContextPath = appendContextPath;\nvar escape = {\n  '&': '&amp;',\n  '<': '&lt;',\n  '>': '&gt;',\n  '\"': '&quot;',\n  \"'\": '&#x27;',\n  '`': '&#x60;',\n  '=': '&#x3D;'\n};\n\nvar badChars = /[&<>\"'`=]/g,\n    possible = /[&<>\"'`=]/;\n\nfunction escapeChar(chr) {\n  return escape[chr];\n}\n\nfunction extend(obj /* , ...source */) {\n  for (var i = 1; i < arguments.length; i++) {\n    for (var key in arguments[i]) {\n      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {\n        obj[key] = arguments[i][key];\n      }\n    }\n  }\n\n  return obj;\n}\n\nvar toString = Object.prototype.toString;\n\nexports.toString = toString;\n// Sourced from lodash\n// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt\n/* eslint-disable func-style */\nvar isFunction = function isFunction(value) {\n  return typeof value === 'function';\n};\n// fallback for older versions of Chrome and Safari\n/* istanbul ignore next */\nif (isFunction(/x/)) {\n  exports.isFunction = isFunction = function isFunction(value) {\n    return typeof value === 'function' && toString.call(value) === '[object Function]';\n  };\n}\nexports.isFunction = isFunction;\n\n/* eslint-enable func-style */\n\n/* istanbul ignore next */\nvar isArray = Array.isArray || function (value) {\n  return value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? toString.call(value) === '[object Array]' : false;\n};\n\nexports.isArray = isArray;\n// Older IE versions do not directly support indexOf so we must implement our own, sadly.\n\nfunction indexOf(array, value) {\n  for (var i = 0, len = array.length; i < len; i++) {\n    if (array[i] === value) {\n      return i;\n    }\n  }\n  return -1;\n}\n\nfunction escapeExpression(string) {\n  if (typeof string !== 'string') {\n    // don't escape SafeStrings, since they're already safe\n    if (string && string.toHTML) {\n      return string.toHTML();\n    } else if (string == null) {\n      return '';\n    } else if (!string) {\n      return string + '';\n    }\n\n    // Force a string conversion as this will be done by the append regardless and\n    // the regex test will do this transparently behind the scenes, causing issues if\n    // an object's to string has escaped characters in it.\n    string = '' + string;\n  }\n\n  if (!possible.test(string)) {\n    return string;\n  }\n  return string.replace(badChars, escapeChar);\n}\n\nfunction isEmpty(value) {\n  if (!value && value !== 0) {\n    return true;\n  } else if (isArray(value) && value.length === 0) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nfunction createFrame(object) {\n  var frame = extend({}, object);\n  frame._parent = object;\n  return frame;\n}\n\nfunction blockParams(params, ids) {\n  params.path = ids;\n  return params;\n}\n\nfunction appendContextPath(contextPath, id) {\n  return (contextPath ? contextPath + '.' : '') + id;\n}\n\n//# sourceURL=webpack:///./node_modules/handlebars/dist/cjs/handlebars/utils.js?");

/***/ }),

/***/ "./node_modules/handlebars/runtime.js":
/*!********************************************!*\
  !*** ./node_modules/handlebars/runtime.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Create a simple path alias to allow browserify to resolve\n// the runtime on a supported path.\nmodule.exports = __webpack_require__(/*! ./dist/cjs/handlebars.runtime */ \"./node_modules/handlebars/dist/cjs/handlebars.runtime.js\")['default'];\n\n//# sourceURL=webpack:///./node_modules/handlebars/runtime.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar g;\n\n// This works in non-strict mode\ng = function () {\n\treturn this;\n}();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./types/vera/src/convert.js":
/*!***********************************!*\
  !*** ./types/vera/src/convert.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _inp = __webpack_require__(/*! ./templates/inp.hbs */ \"./types/vera/src/templates/inp.hbs\");\n\nvar _inp2 = _interopRequireDefault(_inp);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction fillCore(model, dataModel) {\n  model.core = {};\n  var _dataModel$data$Speci = dataModel.data.Specifications[0],\n      coreSpec = _dataModel$data$Speci.coreSpec,\n      baffleSpec = _dataModel$data$Speci.baffleSpec;\n\n  model.core.title = coreSpec.title.value[0];\n  model.core.size = coreSpec.grid.value[0];\n  model.core.apitch = coreSpec.apitch.value[0];\n  model.core.height = coreSpec.height.value[0];\n  if (baffleSpec.thick > 0) {\n    model.core.baffle = [baffleSpec.material.value[0], baffleSpec.gap.value[0], baffleSpec.thick.value[0]];\n  }\n}\n\nfunction extractUsedItems(itemMap) {\n  var usedMap = {};\n  itemMap.grid.forEach(function (item) {\n    usedMap[+item] = true;\n  });\n  delete usedMap[+itemMap.emptyItem];\n  return usedMap;\n}\n\nfunction extractUsedCells(rodList) {\n  var usedMap = {};\n  rodList.forEach(function (rod) {\n    rod.rodStack.rod.value[0].stack.forEach(function (item) {\n      usedMap[+item.cell] = true;\n    });\n  });\n  return usedMap;\n}\n\nfunction fillAssemblyMap(model, dataModel, map) {\n  // given a map, get used fuels, cells, rods\n  var usedRodMap = extractUsedItems(map.rodMap.map.value[0]);\n  console.log('rods', usedRodMap);\n  var rods = dataModel.data.Rods;\n  var cells = dataModel.data.Cells;\n  var usedRods = rods.filter(function (rod) {\n    return usedRodMap[rod.id];\n  });\n  var usedCellMap = extractUsedCells(usedRods);\n  console.log('cells', usedCellMap);\n  var usedCells = cells.filter(function (cell) {\n    return usedCellMap[cell.id];\n  });\n\n  // extract a lattice for each layer in the rods\n}\n\nfunction fillAssembly(model, dataModel) {\n  model.assembly = {};\n  var assemblySpec = dataModel.data.Specifications[0].assemblySpec;\n  model.assembly.npin = assemblySpec.grid.value[0];\n  model.assembly.ppitch = assemblySpec.pitch.value[0];\n\n  // grab the core map, see which assemblies are used\n  var coreMap = dataModel.data.CoreAssemblyMap[0].coreMap.map.value[0];\n  var usedAssemblies = extractUsedItems(coreMap);\n  var rodMaps = dataModel.data.Maps;\n  rodMaps.forEach(function (map) {\n    if (usedAssemblies[map.id]) {\n      fillAssemblyMap(model, dataModel, map);\n    }\n  });\n}\n\nmodule.exports = function convert(dataModel) {\n  var results = {};\n  var model = {};\n  fillCore(model, dataModel);\n  fillAssembly(model, dataModel);\n\n  results['simput.inp'] = (0, _inp2.default)(model);\n  return { results: results, model: dataModel };\n};\n\n//# sourceURL=webpack:///./types/vera/src/convert.js?");

/***/ }),

/***/ "./types/vera/src/hooks.js":
/*!*********************************!*\
  !*** ./types/vera/src/hooks.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction getExternal(dataModel) {\n  if (!dataModel.external) {\n    dataModel.external = {};\n  }\n  return dataModel.external;\n}\n\nfunction pushMaterialsToExternalHook(hookConfig, dataModel, currentViewData) {\n  var external = getExternal(dataModel);\n\n  // Fill materials\n  if (dataModel.data.Materials) {\n    (function () {\n      var mats = dataModel.data.Materials;\n      external.materials = {};\n      external.materialNames = {};\n\n      var _loop = function _loop(i) {\n        var name = mats[i].name;\n        var id = mats[i].id;\n        var currentMaterial = { name: name };\n        // Gather material fields\n        if (mats[i].material) {\n          Object.keys(mats[i].material).forEach(function (key) {\n            currentMaterial[key] = mats[i].material[key].value;\n          });\n\n          // save to external\n          external.materials[id] = currentMaterial;\n          external.materialNames[name] = id;\n        }\n      };\n\n      for (var i = 0; i < mats.length; i++) {\n        _loop(i);\n      }\n    })();\n  }\n}\n\nfunction pushCellsToExternalHook(hookConfig, dataModel, currentViewData) {\n  var external = getExternal(dataModel);\n\n  // Fill cells\n  if (dataModel.data.Cells) {\n    (function () {\n      var cells = dataModel.data.Cells;\n      external.cells = {};\n\n      var _loop2 = function _loop2(i) {\n        var name = cells[i].name;\n        var id = cells[i].id;\n        var currentCell = { name: name };\n        // Gather cell fields\n        if (cells[i].cell) {\n          Object.keys(cells[i].cell).forEach(function (key) {\n            currentCell[key] = cells[i].cell[key].value;\n          });\n\n          // save to external\n          external.cells[id] = currentCell;\n        }\n      };\n\n      for (var i = 0; i < cells.length; i++) {\n        _loop2(i);\n      }\n    })();\n  }\n}\n\nfunction pushRodsToExternalHook(hookConfig, dataModel, currentViewData) {\n  var external = getExternal(dataModel);\n\n  // Fill rods\n  if (dataModel.data.Rods) {\n    var rods = dataModel.data.Rods;\n    external.rods = {};\n    external.rodsNames = { '0': '-' };\n    external.rodsColors = { '0': 'white' };\n    for (var i = 0; i < rods.length; i++) {\n      var _rods$i = rods[i],\n          _id = _rods$i.id,\n          _name = _rods$i.name;\n\n      external.rods[_id] = rods[i];\n      external.rodsNames[_id] = _name;\n      external.rodsColors[_id] = 'rgb(' + rods[i].rodInfo.color.value.map(function (rgb) {\n        return Math.floor(rgb * 255);\n      }).join(',') + ')';\n    }\n  }\n}\n\nfunction mapsToExternal(hookConfig, dataModel, currentViewData) {\n  var external = getExternal(dataModel);\n\n  // Fill maps\n  if (dataModel.data.Maps) {\n    var maps = dataModel.data.Maps;\n    external.mapNames = { '0': '-' };\n    external.mapColors = { '0': 'white' };\n    for (var i = 0; i < maps.length; i++) {\n      var _maps$i = maps[i],\n          _id2 = _maps$i.id,\n          _name2 = _maps$i.name;\n\n      external.mapNames[_id2] = _name2;\n      external.mapColors[_id2] = 'rgb(' + maps[i].mapInfo.color.value.map(function (rgb) {\n        return Math.floor(rgb * 255);\n      }).join(',') + ')';\n    }\n  }\n}\n\nfunction updateMaterialUsed(hookConfig, dataModel, currentViewData) {\n  var mats = dataModel.data.Materials;\n  var usedMats = {};\n\n  if (dataModel.data.Cells) {\n    var cells = dataModel.data.Cells;\n\n    for (var i = 0; i < cells.length; i++) {\n      cells[i].cell.cell.value[0].mats.forEach(function (m) {\n        usedMats[m] = true;\n      });\n\n      // detect if cells have no materials\n      cells[i].invalid = null;\n      if (cells[i].cell.cell.value[0].mats.length === 0) {\n        cells[i].invalid = 'Cell has no materials';\n      }\n    }\n  }\n\n  for (var _i = 0; _i < mats.length; _i++) {\n    mats[_i].noDelete = mats[_i].id in usedMats;\n  }\n}\n\nfunction updateCellUsed(hookConfig, dataModel, currentViewData) {\n  var cells = dataModel.data.Cells;\n  var usedCells = {};\n\n  if (dataModel.data.Rods) {\n    var rods = dataModel.data.Rods;\n    for (var i = 0; i < rods.length; i++) {\n      rods[i].rodStack.rod.value[0].stack.forEach(function (layer) {\n        usedCells[layer.cell] = true;\n      });\n\n      // detect if rods have no cells\n      rods[i].invalid = null;\n      if (rods[i].rodStack.rod.value[0].stack.length === 0) {\n        rods[i].invalid = 'Rod has no cells';\n      }\n    }\n  }\n\n  for (var _i2 = 0; _i2 < cells.length; _i2++) {\n    cells[_i2].noDelete = cells[_i2].id in usedCells;\n  }\n}\n\nfunction updateRodUsed(hookConfig, dataModel, currentViewData) {\n  var rods = dataModel.data.Rods;\n  var usedRods = {};\n\n  if (dataModel.data.Maps) {\n    var maps = dataModel.data.Maps;\n    for (var i = 0; i < maps.length; i++) {\n      maps[i].rodMap.map.value[0].grid.forEach(function (id) {\n        usedRods[id] = true;\n      });\n    }\n  }\n\n  for (var _i3 = 0; _i3 < rods.length; _i3++) {\n    rods[_i3].noDelete = rods[_i3].id in usedRods;\n  }\n}\n\nfunction addNextView(hookConfig, dataModel, currentViewData, model) {\n  var viewName = hookConfig.viewName,\n      nextViewName = hookConfig.nextViewName;\n\n  if (dataModel.data[viewName].length) {\n    if (model.order.indexOf(nextViewName) === -1) {\n      var insertIndex = 1 + model.order.indexOf(viewName);\n      model.order.splice(insertIndex, 0, nextViewName);\n    }\n  } else {\n    // remove view\n    var indexToDelete = model.order.indexOf(nextViewName);\n    if (indexToDelete !== -1) {\n      model.order.splice(indexToDelete, 1);\n    }\n  }\n}\n\nmodule.exports = function initialize() {\n  Simput.registerHook('materialsToExternal', pushMaterialsToExternalHook);\n  Simput.registerHook('cellsToExternal', pushCellsToExternalHook);\n  Simput.registerHook('updateMaterialUsed', updateMaterialUsed);\n  Simput.registerHook('updateCellUsed', updateCellUsed);\n  Simput.registerHook('updateRodUsed', updateRodUsed);\n  Simput.registerHook('addNextView', addNextView);\n  Simput.registerHook('rodsToExternal', pushRodsToExternalHook);\n  Simput.registerHook('mapsToExternal', mapsToExternal);\n};\n\n//# sourceURL=webpack:///./types/vera/src/hooks.js?");

/***/ }),

/***/ "./types/vera/src/index.js-exposed":
/*!*****************************************!*\
  !*** ./types/vera/src/index.js-exposed ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {if(!global[\"Simput\"]) global[\"Simput\"] = {};\nif(!global[\"Simput\"][\"types\"]) global[\"Simput\"][\"types\"] = {};\nmodule.exports = global[\"Simput\"][\"types\"][\"vera\"] = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--12-0!./index.js */ \"./node_modules/babel-loader/lib/index.js??ref--12-0!./types/vera/src/index.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./types/vera/src/index.js-exposed?");

/***/ }),

/***/ "./types/vera/src/model.js":
/*!*********************************!*\
  !*** ./types/vera/src/model.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ----------------------------------------------------------------------------\n// Color palettes\n// ----------------------------------------------------------------------------\n\nvar materialPalette = ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f', '#51574a', '#447c69', '#74c493', '#8e8c6d', '#e4bf80', '#e9d78e', '#e2975d', '#f19670', '#e16552', '#c94a53', '#be5168', '#a34974', '#993767', '#65387d', '#4e2472', '#9163b6', '#e279a3', '#e0598b', '#7c9fb0', '#5698c4', '#9abf88'];\n\nvar cellPalette = ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'];\n\nvar rodPalette = ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'];\n\nvar mapPalette = ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'];\n\n// ----------------------------------------------------------------------------\n// Model definition\n// ----------------------------------------------------------------------------\n\nmodule.exports = {\n  scripts: [\n  // 'https://unpkg.com/@doe-casl/verain-view@1.1.1/dist/simput-external-vera.js',\n  'simput-external-vera.js'],\n  defaultActiveView: 'Specifications',\n  order: ['Specifications', 'Materials'],\n  views: {\n    Specifications: {\n      label: 'Specifications',\n      attributes: ['coreSpec', 'assemblySpec', 'baffleSpec'],\n      hooks: [{\n        type: 'copyToExternal',\n        src: 'data.Specifications.0.assemblySpec.grid.value.0',\n        dst: 'assemblySize'\n      }, {\n        type: 'copyToExternal',\n        src: 'data.Specifications.0.assemblySpec.pitch.value.0',\n        dst: 'assemblyPitch'\n      }, {\n        type: 'copyToExternal',\n        src: 'data.Specifications.0.coreSpec.grid.value.0',\n        dst: 'coreSize'\n      }]\n    },\n    Materials: {\n      label: 'Materials',\n      attributes: ['material'],\n      size: -1,\n      readOnly: true,\n      hooks: [{ type: 'copyParameterToViewName', attribute: 'material.name' }, { type: 'specsToExternal' }, { type: 'materialsToExternal' }, { type: 'addNextView', viewName: 'Materials', nextViewName: 'Cells' }]\n    },\n    Cells: {\n      label: 'Cells',\n      attributes: ['cell'],\n      hooks: [{ type: 'copyParameterToViewName', attribute: 'cell.name' }, { type: 'cellsToExternal' }, { type: 'updateMaterialUsed' }, { type: 'addNextView', viewName: 'Cells', nextViewName: 'Rods' }, {\n        type: 'copy',\n        src: 'data.Specifications.0.assemblySpec.pitch.value.0',\n        dst: 'cell.pitch'\n      }],\n      size: -1,\n      readOnly: true\n    },\n    Rods: {\n      label: 'Rods',\n      attributes: ['rodInfo', 'rodStack'],\n      size: -1,\n      readOnly: true,\n      hooks: [{ type: 'copyParameterToViewName', attribute: 'rodInfo.name' }, { type: 'updateCellUsed' }, {\n        type: 'copy',\n        src: 'data.Specifications.0.coreSpec.height.value.0',\n        dst: 'rodInfo.height'\n      }, { type: 'rodsToExternal' }, { type: 'addNextView', viewName: 'Rods', nextViewName: 'Maps' }]\n    },\n    Maps: {\n      label: 'Rod maps',\n      attributes: ['mapInfo', 'rodMap'],\n      size: -1,\n      readOnly: true,\n      hooks: [{ type: 'updateRodUsed' }, { type: 'mapsToExternal' }, { type: 'copyParameterToViewName', attribute: 'mapInfo.name' }, { type: 'addNextView', viewName: 'Maps', nextViewName: 'Core' }]\n    },\n    Core: {\n      label: 'Core map',\n      children: ['CoreAssemblyMap', 'CoreControlInsertMap', 'CoreDetectorMap']\n    },\n    CoreAssemblyMap: {\n      label: 'Assemblies',\n      attributes: ['coreMap']\n    },\n    CoreControlInsertMap: {\n      label: 'Controls and Inserts',\n      attributes: ['coreMap']\n    },\n    CoreDetectorMap: {\n      label: 'Detectors',\n      attributes: ['coreMap']\n    }\n  },\n  definitions: {\n    coreSpec: {\n      label: 'Core Specifications',\n      parameters: [{\n        id: 'title',\n        type: 'string',\n        size: 1,\n        label: 'Title'\n      }, {\n        id: 'grid',\n        type: 'int',\n        size: 1,\n        default: 15,\n        label: 'Size',\n        help: 'Size of the grid for the core'\n      }, {\n        id: 'apitch',\n        type: 'float',\n        size: 1,\n        default: 21.5,\n        label: 'Assembly pitch',\n        help: 'Default assembly spacing in core maps, in cm'\n      }, {\n        id: 'height',\n        type: 'float',\n        size: 1,\n        default: 400,\n        label: 'Core height',\n        help: 'Height of the core, in cm.'\n      }]\n    },\n    assemblySpec: {\n      label: 'Assembly Specifications',\n      parameters: [{\n        id: 'grid',\n        type: 'int',\n        size: 1,\n        default: 17,\n        label: 'Size',\n        help: 'Size of the grid for an assembly'\n      }, {\n        id: 'pitch',\n        type: 'float',\n        size: 1,\n        default: 1.26,\n        label: 'Cell pitch',\n        help: 'Default cell pitch in assemblies, in cm'\n      }]\n    },\n    baffleSpec: {\n      label: 'Baffle Specifications',\n      parameters: [{\n        id: 'thick',\n        type: 'float',\n        size: 1,\n        default: 0,\n        label: 'Thickness'\n      }, {\n        id: 'gap',\n        type: 'float',\n        size: 1,\n        default: 0,\n        label: 'Gap'\n      }, {\n        id: 'material',\n        type: 'int',\n        size: 1,\n        ui: 'enum',\n        domain: {\n          dynamic: true,\n          external: 'materialNames'\n        },\n        label: 'Material'\n      }]\n    },\n    material: {\n      label: 'Material definition',\n      parameters: [{\n        id: 'name',\n        type: 'string',\n        size: 1,\n        default: 'New Material',\n        label: 'Name'\n      }, {\n        id: 'color',\n        propType: 'Color',\n        label: 'Associated color',\n        default: [204 / 255, 235 / 255, 197 / 255],\n        domain: {\n          palette: materialPalette\n        }\n      }, {\n        id: 'density',\n        type: 'float',\n        size: 1,\n        default: 1,\n        label: 'Density'\n      }, {\n        id: 'thexp',\n        type: 'float',\n        size: 1,\n        default: 1,\n        label: 'Thermal Expansion Coefficient'\n      }, {\n        id: 'fractions',\n        ui: 'map',\n        label: 'Material fractions (material:fraction)'\n      }]\n    },\n    cell: {\n      label: 'Cell definition',\n      parameters: [{\n        id: 'name',\n        type: 'string',\n        size: 1,\n        default: 'New Cell',\n        label: 'Name'\n      }, {\n        id: 'pitch',\n        type: 'float',\n        size: 1,\n        default: 0,\n        label: 'Contact radius/pitch',\n        domain: {\n          readOnly: true\n        }\n      }, {\n        id: 'color',\n        propType: 'Color',\n        label: 'Associated color',\n        default: [204 / 255, 235 / 255, 197 / 255],\n        domain: {\n          palette: cellPalette\n        }\n      }, {\n        id: 'cell',\n        propType: 'CellEditor',\n        size: 1,\n        default: {\n          name: 'Cell name',\n          radii: [],\n          mats: []\n        },\n        domain: {\n          dynamic: true,\n          external: 'materials'\n        },\n        label: 'Cell'\n      }]\n    },\n    rodInfo: {\n      label: 'Rod description',\n      parameters: [{\n        id: 'name',\n        type: 'string',\n        size: 1,\n        default: 'New Rod',\n        label: 'Name'\n      }, {\n        id: 'color',\n        propType: 'Color',\n        label: 'Associated color',\n        default: [204 / 255, 235 / 255, 197 / 255],\n        domain: {\n          palette: rodPalette\n        }\n      }, {\n        id: 'height',\n        type: 'string',\n        size: 1,\n        default: '',\n        label: 'Rod height',\n        domain: {\n          readOnly: true\n        }\n      }, {\n        id: 'offset',\n        type: 'float',\n        size: 1,\n        default: 0,\n        label: 'Rod offset'\n      }]\n    },\n    rodStack: {\n      label: 'Axial definition',\n      parameters: [{\n        id: 'rod',\n        propType: 'RodEditor',\n        size: 1,\n        default: {\n          stack: []\n        },\n        domain: {\n          dynamic: true,\n          external: ['cells', 'materials', 'assemblyPitch']\n        },\n        label: 'Rod'\n      }]\n    },\n    mapInfo: {\n      label: 'Rod map',\n      parameters: [{\n        id: 'name',\n        type: 'string',\n        size: 1,\n        default: 'Assembly',\n        label: 'Name'\n      }, {\n        id: 'color',\n        propType: 'Color',\n        label: 'Associated color',\n        default: [204 / 255, 235 / 255, 197 / 255],\n        domain: {\n          palette: mapPalette\n        }\n      }]\n    },\n    rodMap: {\n      label: 'Layout definition',\n      parameters: [{\n        id: 'map',\n        propType: 'AssemblyEditor',\n        size: 1,\n        default: {\n          config: {\n            names: 'rodsNames',\n            colors: 'rodsColors',\n            size: 'assemblySize'\n          },\n          emptyItem: '0',\n          grid: []\n        },\n        domain: {\n          dynamic: true,\n          external: ['assemblyPitch', 'assemblySize', 'rodsNames', 'rodsColors', 'rods', 'cells', 'materials']\n        },\n        label: 'Rod Map'\n      }]\n    },\n    coreMap: {\n      label: 'Layout',\n      parameters: [{\n        id: 'title',\n        type: 'string',\n        size: 1,\n        // default: '',\n        label: 'Title'\n      }, {\n        id: 'map',\n        propType: 'MapEditor',\n        size: 1,\n        default: {\n          config: {\n            names: 'mapNames',\n            colors: 'mapColors',\n            size: 'coreSize'\n          },\n          emptyItem: '0',\n          grid: []\n        },\n        domain: {\n          dynamic: true,\n          external: ['coreSize', 'mapNames', 'mapColors']\n        }\n      }]\n    }\n  }\n};\n\n//# sourceURL=webpack:///./types/vera/src/model.js?");

/***/ }),

/***/ "./types/vera/src/templates/inp.hbs":
/*!******************************************!*\
  !*** ./types/vera/src/templates/inp.hbs ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ./node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"compiler\":[7,\">= 4.0.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var stack1, alias1=container.lambda, alias2=container.escapeExpression;\n\n  return \"[CASEID]\\n  title \\\"\"\n    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.title : stack1), depth0))\n    + \"\\\"\\n\\n[STATE]\\n  power    0.0\\n  tinlet   565 K\\n  tfuel    565 K\\n  modden   0.743         ! g/cc\\n  boron    1300          ! ppm\\n  sym      full          ! full symmetry\\n  feedback off\\n\\n[CORE]\\n  size   \"\n    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.size : stack1), depth0))\n    + \"\\n  apitch \"\n    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.apitch : stack1), depth0))\n    + \"\\n  rated  0.000183 0.01   ! MW, Mlbs/hr\\n  height \"\n    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.height : stack1), depth0))\n    + \"\\n\\n  core_shape\\n    1\\n\\n  assm_map\\n    ASSY1\\n\\n  bc_rad reflecting\\n  bc_top reflecting\\n  bc_bot reflecting\\n\\n[ASSEMBLY]\\n  title  \\\"pin cell\\\"\\n  npin   \"\n    + alias2(alias1(((stack1 = (depth0 != null ? depth0.assembly : depth0)) != null ? stack1.npin : stack1), depth0))\n    + \"\\n  ppitch \"\n    + alias2(alias1(((stack1 = (depth0 != null ? depth0.assembly : depth0)) != null ? stack1.ppitch : stack1), depth0))\n    + \"\\n\\n  fuel U31 10.257 94.5 / 3.1 u-234=0.026347\\n\\n  cell PIN1 0.4096 0.418 0.475 / U31 he zirc4\\n\\n  lattice LAT1\\n     PIN1\\n\\n  axial ASSY1 0.0 LAT1 1.0\\n\\n\\n\\n\";\n},\"useData\":true});\n\n//# sourceURL=webpack:///./types/vera/src/templates/inp.hbs?");

/***/ })

/******/ });