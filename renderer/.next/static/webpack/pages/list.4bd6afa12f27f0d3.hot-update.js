"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/list",{

/***/ "./pages/list.tsx":
/*!************************!*\
  !*** ./pages/list.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/checkbox */ \"../node_modules/antd/lib/checkbox/index.js\");\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/form */ \"../node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input */ \"../node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout */ \"../node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list */ \"../node_modules/antd/lib/list/index.js\");\n/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tag */ \"../node_modules/antd/lib/tag/index.js\");\n/* harmony import */ var antd_es_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/layout/layout */ \"../node_modules/antd/es/layout/layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst initialData = [\n    {\n        title: \"hoge\",\n        dueDate: \"2023-08-19\",\n        done: false\n    },\n    {\n        title: \"2件目\",\n        dueDate: \"2023-08-18\",\n        done: true\n    },\n    {\n        title: \"Electraという単語は、電気やエネルギーと関連づけられることがあります。そのため、この名前は効率的な計画やタスクの管理を意味し、エネルギーを活用して作業を進めることを強調するかもしれません。\",\n        dueDate: \"2023-08-18\",\n        done: true\n    }\n];\nconst ListPage = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        style: {\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_layout_layout__WEBPACK_IMPORTED_MODULE_3__.Content, {\n                style: {\n                    margin: \"10px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    itemLayout: \"horizontal\",\n                    dataSource: data,\n                    renderItem: (item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item.Meta, {\n                                    avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        checked: item.done\n                                    }, void 0, false, void 0, void 0),\n                                    title: item.title,\n                                    description: item.dueDate\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_tag__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    color: \"blue\",\n                                    children: [\n                                        \"Plan:\",\n                                        item.dueDate\n                                    ]\n                                }, void 0, true, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_tag__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    color: \"magenta\",\n                                    children: [\n                                        \"Due:\",\n                                        item.dueDate\n                                    ]\n                                }, void 0, true, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0)\n                }, void 0, false, {\n                    fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_layout_layout__WEBPACK_IMPORTED_MODULE_3__.Footer, {\n                style: {\n                    position: \"sticky\",\n                    bottom: 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    onFinish: (e)=>console.log(e),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Item, {\n                        name: \"todo\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListPage, \"hDGcfQHkZj5ZsEBk8saO8jx9VfY=\");\n_c = ListPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListPage);\nvar _c;\n$RefreshReg$(_c, \"ListPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3QztBQUN3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVoRSxNQUFNVSxjQUFjO0lBQ2xCO1FBQ0VDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsT0FDRTtRQUNGQyxTQUFTO1FBQ1RDLE1BQU07SUFDUjtDQUNEO0FBRUQsTUFBTUMsV0FBcUI7O0lBQ3pCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQ1M7SUFDakMscUJBQ0UsOERBQUNMLHVEQUFNQTtRQUFDWSxPQUFPO1lBQUVDLFdBQVc7UUFBUTs7MEJBQ2xDLDhEQUFDViwwREFBT0E7Z0JBQUNTLE9BQU87b0JBQUVFLFFBQVE7Z0JBQU87MEJBQy9CLDRFQUFDYixxREFBSUE7b0JBQ0hjLFlBQVc7b0JBQ1hDLFlBQVlOO29CQUNaTyxZQUFZLENBQUNDLE1BQU1DLHNCQUNqQiw4REFBQ2xCLDBEQUFTOzs4Q0FDUiw4REFBQ0EsMERBQVMsQ0FBQ29CLElBQUk7b0NBQ2JDLHNCQUFRLDhEQUFDekIseURBQVFBO3dDQUFDMEIsU0FBU0wsS0FBS1YsSUFBSTs7b0NBQ3BDRixPQUFPWSxLQUFLWixLQUFLO29DQUNqQmtCLGFBQWFOLEtBQUtYLE9BQU87OzhDQUUzQiw4REFBQ0wsb0RBQUdBO29DQUFDdUIsT0FBTTs7d0NBQU87d0NBQU1QLEtBQUtYLE9BQU87Ozs4Q0FDcEMsOERBQUNMLG9EQUFHQTtvQ0FBQ3VCLE9BQU07O3dDQUFVO3dDQUFLUCxLQUFLWCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7MEJBSzlDLDhEQUFDSCx5REFBTUE7Z0JBQ0xRLE9BQU87b0JBQ0xjLFVBQVU7b0JBQ1ZDLFFBQVE7Z0JBQ1Y7MEJBRUEsNEVBQUM3QixxREFBSUE7b0JBQUM4QixVQUFVLENBQUNDLElBQU1DLFFBQVFDLEdBQUcsQ0FBQ0Y7OEJBQ2pDLDRFQUFDL0IsMERBQVM7d0JBQUNrQyxNQUFLO2tDQUNkLDRFQUFDakMsc0RBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQjtHQW5DTVU7S0FBQUE7QUFvQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdC50c3g/NjRlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZWNrYm94LCBGb3JtLCBJbnB1dCwgTGF5b3V0LCBMaXN0LCBUYWcgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgQ29udGVudCwgRm9vdGVyLCBIZWFkZXIgfSBmcm9tIFwiYW50ZC9lcy9sYXlvdXQvbGF5b3V0XCI7XG5cbmNvbnN0IGluaXRpYWxEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6IFwiaG9nZVwiLFxuICAgIGR1ZURhdGU6IFwiMjAyMy0wOC0xOVwiLFxuICAgIGRvbmU6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiMuS7tuebrlwiLFxuICAgIGR1ZURhdGU6IFwiMjAyMy0wOC0xOFwiLFxuICAgIGRvbmU6IHRydWUsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTpcbiAgICAgIFwiRWxlY3RyYeOBqOOBhOOBhuWNmOiqnuOBr+OAgembu+awl+OChOOCqOODjeODq+OCruODvOOBqOmWoumAo+OBpeOBkeOCieOCjOOCi+OBk+OBqOOBjOOBguOCiuOBvuOBmeOAguOBneOBruOBn+OCgeOAgeOBk+OBruWQjeWJjeOBr+WKueeOh+eahOOBquioiOeUu+OChOOCv+OCueOCr+OBrueuoeeQhuOCkuaEj+WRs+OBl+OAgeOCqOODjeODq+OCruODvOOCkua0u+eUqOOBl+OBpuS9nOalreOCkumAsuOCgeOCi+OBk+OBqOOCkuW8t+iqv+OBmeOCi+OBi+OCguOBl+OCjOOBvuOBm+OCk+OAglwiLFxuICAgIGR1ZURhdGU6IFwiMjAyMy0wOC0xOFwiLFxuICAgIGRvbmU6IHRydWUsXG4gIH0sXG5dO1xuXG5jb25zdCBMaXN0UGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHN0eWxlPXt7IG1pbkhlaWdodDogXCIxMDB2aFwiIH19PlxuICAgICAgPENvbnRlbnQgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgPExpc3RcbiAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cbiAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxuICAgICAgICAgICAgICAgIGF2YXRhcj17PENoZWNrYm94IGNoZWNrZWQ9e2l0ZW0uZG9uZX0gLz59XG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZHVlRGF0ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRhZyBjb2xvcj1cImJsdWVcIj5QbGFuOntpdGVtLmR1ZURhdGV9PC9UYWc+XG4gICAgICAgICAgICAgIDxUYWcgY29sb3I9XCJtYWdlbnRhXCI+RHVlOntpdGVtLmR1ZURhdGV9PC9UYWc+XG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgPC9Db250ZW50PlxuICAgICAgPEZvb3RlclxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcInN0aWNreVwiLFxuICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZvcm0gb25GaW5pc2g9eyhlKSA9PiBjb25zb2xlLmxvZyhlKX0+XG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwidG9kb1wiPlxuICAgICAgICAgICAgPElucHV0IC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRm9vdGVyPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IExpc3RQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDaGVja2JveCIsIkZvcm0iLCJJbnB1dCIsIkxheW91dCIsIkxpc3QiLCJUYWciLCJDb250ZW50IiwiRm9vdGVyIiwiaW5pdGlhbERhdGEiLCJ0aXRsZSIsImR1ZURhdGUiLCJkb25lIiwiTGlzdFBhZ2UiLCJkYXRhIiwic2V0RGF0YSIsInN0eWxlIiwibWluSGVpZ2h0IiwibWFyZ2luIiwiaXRlbUxheW91dCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsImluZGV4IiwiSXRlbSIsIk1ldGEiLCJhdmF0YXIiLCJjaGVja2VkIiwiZGVzY3JpcHRpb24iLCJjb2xvciIsInBvc2l0aW9uIiwiYm90dG9tIiwib25GaW5pc2giLCJlIiwiY29uc29sZSIsImxvZyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/list.tsx\n"));

/***/ })

});