/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./internationalization/i18n.ts":
/*!**************************************!*\
  !*** ./internationalization/i18n.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"availableLanguages\": () => (/* binding */ availableLanguages),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _locales_en_en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales/en/en_US */ \"./internationalization/locales/en/en_US.ts\");\n/* harmony import */ var _locales_fr_fr_FR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locales/fr/fr_FR */ \"./internationalization/locales/fr/fr_FR.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__]);\ni18next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst resources = {\n    us: {\n        translation: _locales_en_en_US__WEBPACK_IMPORTED_MODULE_2__.en_US\n    },\n    fr: {\n        translation: _locales_fr_fr_FR__WEBPACK_IMPORTED_MODULE_3__.fr_FR\n    }\n};\nconst availableLanguages = Object.keys(resources);\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({\n    fallbackLng: \"us\",\n    lng: \"us\",\n    resources\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbnRlcm5hdGlvbmFsaXphdGlvbi9pMThuLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkI7QUFDc0I7QUFDTjtBQUNBO0FBRTNDLE1BQU1JLFNBQVMsR0FBRztJQUNoQkMsRUFBRSxFQUFFO1FBQ0ZDLFdBQVcsRUFBRUosb0RBQUs7S0FDbkI7SUFDREssRUFBRSxFQUFFO1FBQ0ZELFdBQVcsRUFBRUgsb0RBQUs7S0FDbkI7Q0FDRjtBQUVNLE1BQU1LLGtCQUFrQixHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ04sU0FBUyxDQUFDLENBQUM7QUFFekRKLG1EQUFRLENBQUNDLDJEQUFnQixDQUFDLENBQUNXLElBQUksQ0FBQztJQUM5QkMsV0FBVyxFQUFFLElBQUk7SUFDakJDLEdBQUcsRUFBRSxJQUFJO0lBQ1RWLFNBQVM7Q0FDVixDQUFDLENBQUM7QUFFSCxpRUFBZUosK0NBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ludGVybmF0aW9uYWxpemF0aW9uL2kxOG4udHM/NzRlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaTE4biBmcm9tICdpMThuZXh0JztcclxuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBlbl9VUyB9IGZyb20gJy4vbG9jYWxlcy9lbi9lbl9VUyc7XHJcbmltcG9ydCB7IGZyX0ZSIH0gZnJvbSAnLi9sb2NhbGVzL2ZyL2ZyX0ZSJztcclxuXHJcbmNvbnN0IHJlc291cmNlcyA9IHtcclxuICB1czoge1xyXG4gICAgdHJhbnNsYXRpb246IGVuX1VTLFxyXG4gIH0sXHJcbiAgZnI6IHtcclxuICAgIHRyYW5zbGF0aW9uOiBmcl9GUixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGF2YWlsYWJsZUxhbmd1YWdlcyA9IE9iamVjdC5rZXlzKHJlc291cmNlcyk7XHJcblxyXG5pMThuLnVzZShpbml0UmVhY3RJMThuZXh0KS5pbml0KHtcclxuICBmYWxsYmFja0xuZzogJ3VzJyxcclxuICBsbmc6ICd1cycsXHJcbiAgcmVzb3VyY2VzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGkxOG47XHJcbiJdLCJuYW1lcyI6WyJpMThuIiwiaW5pdFJlYWN0STE4bmV4dCIsImVuX1VTIiwiZnJfRlIiLCJyZXNvdXJjZXMiLCJ1cyIsInRyYW5zbGF0aW9uIiwiZnIiLCJhdmFpbGFibGVMYW5ndWFnZXMiLCJPYmplY3QiLCJrZXlzIiwidXNlIiwiaW5pdCIsImZhbGxiYWNrTG5nIiwibG5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./internationalization/i18n.ts\n");

/***/ }),

/***/ "./internationalization/locales/en/en_US.ts":
/*!**************************************************!*\
  !*** ./internationalization/locales/en/en_US.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"en_US\": () => (/* binding */ en_US)\n/* harmony export */ });\nconst en_US = {\n    excerpt: \"<2>Student</2> by day, <4>mad developer</4> by night. Passionate about computer science and <0>new technologies</0>, currently <6>Next.js</6> & <9>Chakra UI</9>, I develop in order to propose different <12>opensource</12> contents.\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbnRlcm5hdGlvbmFsaXphdGlvbi9sb2NhbGVzL2VuL2VuX1VTLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxLQUFLLEdBQUc7SUFDbkJDLE9BQU8sRUFDTCx5T0FBeU87Q0FDNU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ludGVybmF0aW9uYWxpemF0aW9uL2xvY2FsZXMvZW4vZW5fVVMudHM/MGM5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW5fVVMgPSB7XHJcbiAgZXhjZXJwdDpcclxuICAgICc8Mj5TdHVkZW50PC8yPiBieSBkYXksIDw0Pm1hZCBkZXZlbG9wZXI8LzQ+IGJ5IG5pZ2h0LiBQYXNzaW9uYXRlIGFib3V0IGNvbXB1dGVyIHNjaWVuY2UgYW5kIDwwPm5ldyB0ZWNobm9sb2dpZXM8LzA+LCBjdXJyZW50bHkgPDY+TmV4dC5qczwvNj4gJiA8OT5DaGFrcmEgVUk8Lzk+LCBJIGRldmVsb3AgaW4gb3JkZXIgdG8gcHJvcG9zZSBkaWZmZXJlbnQgPDEyPm9wZW5zb3VyY2U8LzEyPiBjb250ZW50cy4nLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiZW5fVVMiLCJleGNlcnB0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./internationalization/locales/en/en_US.ts\n");

/***/ }),

/***/ "./internationalization/locales/fr/fr_FR.ts":
/*!**************************************************!*\
  !*** ./internationalization/locales/fr/fr_FR.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fr_FR\": () => (/* binding */ fr_FR)\n/* harmony export */ });\nconst fr_FR = {\n    excerpt: \"<2>Etudiant</2> le jour, <4>d\\xe9veloppeur fou</4> la nuit. Passionn\\xe9 par l'informatique et les <0>nouvelles technologies</0>, actuellement <6>Next.js</6> & <9>Chakra UI</9>, je d\\xe9veloppe dans le but de proposer diff\\xe9rents contenus <12>opensources</12>.\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbnRlcm5hdGlvbmFsaXphdGlvbi9sb2NhbGVzL2ZyL2ZyX0ZSLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxLQUFLLEdBQUc7SUFDbkJDLE9BQU8sRUFDTCx3UUFBNFA7Q0FDL1AsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ludGVybmF0aW9uYWxpemF0aW9uL2xvY2FsZXMvZnIvZnJfRlIudHM/ODM5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZnJfRlIgPSB7XHJcbiAgZXhjZXJwdDpcclxuICAgIFwiPDI+RXR1ZGlhbnQ8LzI+IGxlIGpvdXIsIDw0PmTDqXZlbG9wcGV1ciBmb3U8LzQ+IGxhIG51aXQuIFBhc3Npb25uw6kgcGFyIGwnaW5mb3JtYXRpcXVlIGV0IGxlcyA8MD5ub3V2ZWxsZXMgdGVjaG5vbG9naWVzPC8wPiwgYWN0dWVsbGVtZW50IDw2Pk5leHQuanM8LzY+ICYgPDk+Q2hha3JhIFVJPC85PiwgamUgZMOpdmVsb3BwZSBkYW5zIGxlIGJ1dCBkZSBwcm9wb3NlciBkaWZmw6lyZW50cyBjb250ZW51cyA8MTI+b3BlbnNvdXJjZXM8LzEyPi5cIixcclxufTtcclxuIl0sIm5hbWVzIjpbImZyX0ZSIiwiZXhjZXJwdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./internationalization/locales/fr/fr_FR.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _internationalization_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/internationalization/i18n */ \"./internationalization/i18n.ts\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/theme */ \"./src/theme/index.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fontsource_josefin_sans_700_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fontsource/josefin-sans/700.css */ \"./node_modules/@fontsource/josefin-sans/700.css\");\n/* harmony import */ var _fontsource_josefin_sans_700_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fontsource_josefin_sans_700_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_internationalization_i18n__WEBPACK_IMPORTED_MODULE_1__]);\n_internationalization_i18n__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n        theme: _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\OK COMPUTER\\\\Downloads\\\\rideandshare-main\\\\rideandshare-main\\\\Web\\\\pages\\\\_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\OK COMPUTER\\\\Downloads\\\\rideandshare-main\\\\rideandshare-main\\\\Web\\\\pages\\\\_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUFxQztBQUNUO0FBQ3NCO0FBQ1I7QUFHMUMsTUFBTUUsR0FBRyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksR0FBSztJQUNsRCxxQkFDRSw4REFBQ0gsNERBQWM7UUFBQ0QsS0FBSyxFQUFFQSw4Q0FBSztrQkFFeEIsNEVBQUNHLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztxQkFBSTs7Ozs7aUJBRWYsQ0FDakI7Q0FDSDtBQUVELGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgJ0AvaW50ZXJuYXRpb25hbGl6YXRpb24vaTE4bic7XHJcbmltcG9ydCB0aGVtZSBmcm9tICdAL3RoZW1lJztcclxuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0ICdAZm9udHNvdXJjZS9qb3NlZmluLXNhbnMvNzAwLmNzcyc7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIFxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuXHJcbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJ0aGVtZSIsIkNoYWtyYVByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"@chakra-ui/theme-tools\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst styles = {\n    global: (props)=>({\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)(\"#fff\", \"#2d3142\")(props)\n            }\n        })\n};\nconst colors = {\n    brand: {\n        50: \"#f6e8ff\",\n        100: \"#e3bdff\",\n        200: \"#cd94ff\",\n        300: \"#b46ef7\",\n        400: \"#9a4ce7\",\n        500: \"#7e31ce\",\n        600: \"#641eab\",\n        700: \"#4b1483\",\n        800: \"#341158\",\n        900: \"#1e0d2d\"\n    },\n    app: {\n        green: \"#38b000\"\n    }\n};\nconst fonts = {\n    heading: `Josefin Sans, ${_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.fonts.heading}`\n};\nconst components = {\n    Button: {\n        variants: {\n            pill: (props)=>({\n                    ..._chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.components.Button.variants.outline(props),\n                    rounded: \"full\",\n                    color: \"gray.500\"\n                })\n        }\n    }\n};\nconst config = {\n    initialColorMode: \"light\",\n    useSystemColorMode: false\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    config,\n    styles,\n    colors,\n    fonts,\n    components\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEQ7QUFDaEI7QUFFOUMsTUFBTUksTUFBTSxHQUFHO0lBQ2JDLE1BQU0sRUFBRSxDQUFDQyxLQUFLLEdBQUssQ0FBQztZQUNsQkMsSUFBSSxFQUFFO2dCQUNKQyxFQUFFLEVBQUVMLDREQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDRyxLQUFLLENBQUM7YUFDbkM7U0FDRixDQUFDO0NBQ0g7QUFFRCxNQUFNRyxNQUFNLEdBQUc7SUFDYkMsS0FBSyxFQUFFO0FBQ0wsVUFBRSxFQUFFLFNBQVM7QUFDYixXQUFHLEVBQUUsU0FBUztBQUNkLFdBQUcsRUFBRSxTQUFTO0FBQ2QsV0FBRyxFQUFFLFNBQVM7QUFDZCxXQUFHLEVBQUUsU0FBUztBQUNkLFdBQUcsRUFBRSxTQUFTO0FBQ2QsV0FBRyxFQUFFLFNBQVM7QUFDZCxXQUFHLEVBQUUsU0FBUztBQUNkLFdBQUcsRUFBRSxTQUFTO0FBQ2QsV0FBRyxFQUFFLFNBQVM7S0FDZjtJQUNEQyxHQUFHLEVBQUc7UUFDSkMsS0FBSyxFQUFHLFNBQVM7S0FDbEI7Q0FDRjtBQUVELE1BQU1DLEtBQUssR0FBRztJQUNaQyxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUVaLGlFQUFrQixDQUFDLENBQUM7Q0FDL0M7QUFFRCxNQUFNYSxVQUFVLEdBQUc7SUFDakJDLE1BQU0sRUFBRTtRQUNOQyxRQUFRLEVBQUU7WUFDUkMsSUFBSSxFQUFFLENBQUNaLEtBQUssR0FBSyxDQUFDO29CQUNoQixHQUFHSixzRkFBdUMsQ0FBQ0ksS0FBSyxDQUFDO29CQUNqRGMsT0FBTyxFQUFFLE1BQU07b0JBQ2ZDLEtBQUssRUFBRSxVQUFVO2lCQUNsQixDQUFDO1NBQ0g7S0FDRjtDQUNGO0FBRUQsTUFBTUMsTUFBTSxHQUFHO0lBQ2JDLGdCQUFnQixFQUFFLE9BQU87SUFDekJDLGtCQUFrQixFQUFFLEtBQUs7Q0FDMUI7QUFFRCxNQUFNdkIsS0FBSyxHQUFHRCw2REFBVyxDQUFDO0lBQUVzQixNQUFNO0lBQUVsQixNQUFNO0lBQUVLLE1BQU07SUFBRUksS0FBSztJQUFFRSxVQUFVO0NBQUUsQ0FBQztBQUN4RSxpRUFBZWQsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lL2luZGV4LnRzP2NjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUsIHRoZW1lIGFzIGJhc2UgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdsb2JhbDogKHByb3BzKSA9PiAoe1xyXG4gICAgYm9keToge1xyXG4gICAgICBiZzogbW9kZSgnI2ZmZicsICcjMmQzMTQyJykocHJvcHMpLFxyXG4gICAgfSxcclxuICB9KSxcclxufTtcclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICBicmFuZDoge1xyXG4gICAgNTA6ICcjZjZlOGZmJyxcclxuICAgIDEwMDogJyNlM2JkZmYnLFxyXG4gICAgMjAwOiAnI2NkOTRmZicsXHJcbiAgICAzMDA6ICcjYjQ2ZWY3JyxcclxuICAgIDQwMDogJyM5YTRjZTcnLFxyXG4gICAgNTAwOiAnIzdlMzFjZScsXHJcbiAgICA2MDA6ICcjNjQxZWFiJyxcclxuICAgIDcwMDogJyM0YjE0ODMnLFxyXG4gICAgODAwOiAnIzM0MTE1OCcsXHJcbiAgICA5MDA6ICcjMWUwZDJkJyxcclxuICB9LFxyXG4gIGFwcCA6IHtcclxuICAgIGdyZWVuIDogJyMzOGIwMDAnXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZm9udHMgPSB7XHJcbiAgaGVhZGluZzogYEpvc2VmaW4gU2FucywgJHtiYXNlLmZvbnRzLmhlYWRpbmd9YCxcclxufTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgQnV0dG9uOiB7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICBwaWxsOiAocHJvcHMpID0+ICh7XHJcbiAgICAgICAgLi4uYmFzZS5jb21wb25lbnRzLkJ1dHRvbi52YXJpYW50cy5vdXRsaW5lKHByb3BzKSxcclxuICAgICAgICByb3VuZGVkOiAnZnVsbCcsXHJcbiAgICAgICAgY29sb3I6ICdncmF5LjUwMCcsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGluaXRpYWxDb2xvck1vZGU6ICdsaWdodCcsXHJcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcsIHN0eWxlcywgY29sb3JzLCBmb250cywgY29tcG9uZW50cyB9KTtcclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsInRoZW1lIiwiYmFzZSIsIm1vZGUiLCJzdHlsZXMiLCJnbG9iYWwiLCJwcm9wcyIsImJvZHkiLCJiZyIsImNvbG9ycyIsImJyYW5kIiwiYXBwIiwiZ3JlZW4iLCJmb250cyIsImhlYWRpbmciLCJjb21wb25lbnRzIiwiQnV0dG9uIiwidmFyaWFudHMiLCJwaWxsIiwib3V0bGluZSIsInJvdW5kZWQiLCJjb2xvciIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme/index.ts\n");

/***/ }),

/***/ "./node_modules/@fontsource/josefin-sans/700.css":
/*!*******************************************************!*\
  !*** ./node_modules/@fontsource/josefin-sans/700.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();