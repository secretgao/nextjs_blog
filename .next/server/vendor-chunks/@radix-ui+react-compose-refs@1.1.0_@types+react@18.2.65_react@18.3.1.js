"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-compose-refs@1.1.0_@types+react@18.2.65_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-compose-refs@1.1.0_@types+react@18.2.65_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.2.65_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.2.65_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   composeRefs: () => (/* binding */ composeRefs),\n/* harmony export */   useComposedRefs: () => (/* binding */ useComposedRefs)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// packages/react/compose-refs/src/composeRefs.tsx\n\nfunction setRef(ref, value) {\n  if (typeof ref === \"function\") {\n    ref(value);\n  } else if (ref !== null && ref !== void 0) {\n    ref.current = value;\n  }\n}\nfunction composeRefs(...refs) {\n  return (node) => refs.forEach((ref) => setRef(ref, node));\n}\nfunction useComposedRefs(...refs) {\n  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs), refs);\n}\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbXBvc2UtcmVmc0AxLjEuMF9AdHlwZXMrcmVhY3RAMTguMi42NV9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnMvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQytCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOENBQWlCO0FBQzFCO0FBSUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2x1Y2t5LXNuYWlsLWJsb2cvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbXBvc2UtcmVmc0AxLjEuMF9AdHlwZXMrcmVhY3RAMTguMi42NV9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnMvZGlzdC9pbmRleC5tanM/NDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWNrYWdlcy9yZWFjdC9jb21wb3NlLXJlZnMvc3JjL2NvbXBvc2VSZWZzLnRzeFxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5mdW5jdGlvbiBzZXRSZWYocmVmLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmVmKHZhbHVlKTtcbiAgfSBlbHNlIGlmIChyZWYgIT09IG51bGwgJiYgcmVmICE9PSB2b2lkIDApIHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9XG59XG5mdW5jdGlvbiBjb21wb3NlUmVmcyguLi5yZWZzKSB7XG4gIHJldHVybiAobm9kZSkgPT4gcmVmcy5mb3JFYWNoKChyZWYpID0+IHNldFJlZihyZWYsIG5vZGUpKTtcbn1cbmZ1bmN0aW9uIHVzZUNvbXBvc2VkUmVmcyguLi5yZWZzKSB7XG4gIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhjb21wb3NlUmVmcyguLi5yZWZzKSwgcmVmcyk7XG59XG5leHBvcnQge1xuICBjb21wb3NlUmVmcyxcbiAgdXNlQ29tcG9zZWRSZWZzXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.2.65_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\n");

/***/ })

};
;