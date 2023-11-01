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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend/client.js":
/*!********************************!*\
  !*** ./src/frontend/client.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/yustar/Documents/Works/nest-react-redux-apollo-ssr/src/frontend/client.js: Support for the experimental syntax 'jsx' isn't currently enabled (23:3):\\n\\n\\u001b[0m \\u001b[90m 21 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 22 |\\u001b[39m hydrate(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 23 |\\u001b[39m   \\u001b[33m<\\u001b[39m\\u001b[33mProvider\\u001b[39m store\\u001b[33m=\\u001b[39m{store} \\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m   \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 24 |\\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 25 |\\u001b[39m   \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mProvider\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 26 |\\u001b[39m   document\\u001b[33m.\\u001b[39mquerySelector(\\u001b[32m'#app'\\u001b[39m)\\u001b[0m\\n\\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\\n    at constructor (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:356:19)\\n    at Parser.raise (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:3223:19)\\n    at Parser.expectOnePlugin (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:3269:18)\\n    at Parser.parseExprAtom (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:11223:18)\\n    at Parser.parseExprSubscripts (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10862:23)\\n    at Parser.parseUpdate (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10845:21)\\n    at Parser.parseMaybeUnary (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10821:23)\\n    at Parser.parseMaybeUnaryOrPrivate (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10659:61)\\n    at Parser.parseExprOps (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10664:23)\\n    at Parser.parseMaybeConditional (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10641:23)\\n    at Parser.parseMaybeAssign (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10602:21)\\n    at /home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10572:39\\n    at Parser.allowInAnd (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:12289:12)\\n    at Parser.parseMaybeAssignAllowIn (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10572:17)\\n    at Parser.parseExprListItem (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:12025:18)\\n    at Parser.parseCallExpressionArguments (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:11059:22)\\n    at Parser.parseCoverCallAndAsyncArrowHead (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10969:29)\\n    at Parser.parseSubscript (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10904:19)\\n    at Parser.parseSubscripts (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10875:19)\\n    at Parser.parseExprSubscripts (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10866:17)\\n    at Parser.parseUpdate (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10845:21)\\n    at Parser.parseMaybeUnary (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10821:23)\\n    at Parser.parseMaybeUnaryOrPrivate (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10659:61)\\n    at Parser.parseExprOps (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10664:23)\\n    at Parser.parseMaybeConditional (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10641:23)\\n    at Parser.parseMaybeAssign (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10602:21)\\n    at Parser.parseExpressionBase (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10556:23)\\n    at /home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10552:39\\n    at Parser.allowInAnd (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:12284:16)\\n    at Parser.parseExpression (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:10552:17)\\n    at Parser.parseStatementContent (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:12742:23)\\n    at Parser.parseStatementLike (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:12593:17)\\n    at Parser.parseModuleItem (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:12570:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:13194:36)\\n    at Parser.parseBlockBody (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:13187:10)\\n    at Parser.parseProgram (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:12469:10)\\n    at Parser.parseTopLevel (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:12459:25)\\n    at Parser.parse (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:14381:10)\\n    at parse (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/parser/lib/index.js:14422:38)\\n    at parser (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/core/lib/parser/index.js:41:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/core/lib/transformation/normalize-file.js:64:37)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/core/lib/transformation/index.js:21:50)\\n    at run.next (<anonymous>)\\n    at transform (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/@babel/core/lib/transform.js:22:33)\\n    at transform.next (<anonymous>)\\n    at step (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/gensync/index.js:261:32)\\n    at /home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/home/yustar/Documents/Works/nest-react-redux-apollo-ssr/node_modules/gensync/index.js:223:11)\");\n\n//# sourceURL=webpack:///./src/frontend/client.js?");

/***/ })

/******/ });