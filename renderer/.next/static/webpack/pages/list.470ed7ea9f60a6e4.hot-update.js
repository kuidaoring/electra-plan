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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/checkbox */ \"../node_modules/antd/lib/checkbox/index.js\");\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ \"../node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input */ \"../node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/layout */ \"../node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/list */ \"../node_modules/antd/lib/list/index.js\");\n/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/tag */ \"../node_modules/antd/lib/tag/index.js\");\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/typography */ \"../node_modules/antd/lib/typography/index.js\");\n/* harmony import */ var antd_es_layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/layout/layout */ \"../node_modules/antd/es/layout/layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst { Text } = antd_lib_typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nconst initialData = [\n    {\n        title: \"hoge\",\n        dueDate: \"2023-08-19\",\n        done: false\n    },\n    {\n        title: \"2件目\",\n        dueDate: \"2023-08-18\",\n        done: true\n    },\n    {\n        title: \"Electraという単語は、電気やエネルギーと関連づけられることがあります。そのため、この名前は効率的な計画やタスクの管理を意味し、エネルギーを活用して作業を進めることを強調するかもしれません。\",\n        dueDate: \"2023-08-18\",\n        done: true\n    }\n];\nconst ListPage = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].useForm();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        style: {\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_layout_layout__WEBPACK_IMPORTED_MODULE_5__.Content, {\n                style: {\n                    margin: \"10px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    itemLayout: \"horizontal\",\n                    dataSource: data,\n                    renderItem: (item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item.Meta, {\n                                    avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        checked: item.done,\n                                        onChange: ()=>{\n                                            const newData = data.slice();\n                                            newData[index].done = !item.done;\n                                            setData(newData);\n                                        }\n                                    }, void 0, false, void 0, void 0),\n                                    title: item.done ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                        delete: true,\n                                        children: item.title\n                                    }, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                        children: item.title\n                                    }, void 0, false, void 0, void 0),\n                                    description: item.dueDate\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_tag__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    color: \"blue\",\n                                    children: [\n                                        \"Plan:\",\n                                        item.dueDate\n                                    ]\n                                }, void 0, true, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_tag__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    color: \"magenta\",\n                                    children: [\n                                        \"Due:\",\n                                        item.dueDate\n                                    ]\n                                }, void 0, true, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0)\n                }, void 0, false, {\n                    fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_layout_layout__WEBPACK_IMPORTED_MODULE_5__.Footer, {\n                style: {\n                    position: \"sticky\",\n                    bottom: 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    form: form,\n                    onFinish: (values)=>{\n                        setData([\n                            {\n                                title: values.todo,\n                                dueDate: \"2023-08-19\",\n                                done: false\n                            },\n                            ...data\n                        ]);\n                        form.resetFields();\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        name: \"todo\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yuji/dev/electra-plan/renderer/pages/list.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListPage, \"V9DW7Dtz7fVELhqRFVVewXlbZ6s=\", false, function() {\n    return [\n        antd_lib_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].useForm\n    ];\n});\n_c = ListPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListPage);\nvar _c;\n$RefreshReg$(_c, \"ListPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWjtBQUVoRSxNQUFNLEVBQUVXLElBQUksRUFBRSxHQUFHSCwyREFBVUE7QUFFM0IsTUFBTUksY0FBYztJQUNsQjtRQUNFQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE1BQU07SUFDUjtJQUNBO1FBQ0VGLE9BQ0U7UUFDRkMsU0FBUztRQUNUQyxNQUFNO0lBQ1I7Q0FDRDtBQUVELE1BQU1DLFdBQXFCOztJQUN6QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2pCLCtDQUFRQSxDQUFDVztJQUNqQyxNQUFNLENBQUNPLEtBQUssR0FBR2hCLDZEQUFZO0lBQzNCLHFCQUNFLDhEQUFDRSx1REFBTUE7UUFBQ2dCLE9BQU87WUFBRUMsV0FBVztRQUFROzswQkFDbEMsOERBQUNiLDBEQUFPQTtnQkFBQ1ksT0FBTztvQkFBRUUsUUFBUTtnQkFBTzswQkFDL0IsNEVBQUNqQixxREFBSUE7b0JBQ0hrQixZQUFXO29CQUNYQyxZQUFZUjtvQkFDWlMsWUFBWSxDQUFDQyxNQUFNQyxzQkFDakIsOERBQUN0QiwwREFBUzs7OENBQ1IsOERBQUNBLDBEQUFTLENBQUN3QixJQUFJO29DQUNiQyxzQkFDRSw4REFBQzdCLHlEQUFRQTt3Q0FDUDhCLFNBQVNMLEtBQUtaLElBQUk7d0NBQ2xCa0IsVUFBVTs0Q0FDUixNQUFNQyxVQUFVakIsS0FBS2tCLEtBQUs7NENBQzFCRCxPQUFPLENBQUNOLE1BQU0sQ0FBQ2IsSUFBSSxHQUFHLENBQUNZLEtBQUtaLElBQUk7NENBQ2hDRyxRQUFRZ0I7d0NBQ1Y7O29DQUdKckIsT0FDRWMsS0FBS1osSUFBSSxpQkFDUCw4REFBQ0o7d0NBQUt5QixNQUFNO2tEQUFFVCxLQUFLZCxLQUFLO3NGQUV4Qiw4REFBQ0Y7a0RBQU1nQixLQUFLZCxLQUFLOztvQ0FHckJ3QixhQUFhVixLQUFLYixPQUFPOzs4Q0FFM0IsOERBQUNQLG9EQUFHQTtvQ0FBQytCLE9BQU07O3dDQUFPO3dDQUFNWCxLQUFLYixPQUFPOzs7OENBQ3BDLDhEQUFDUCxvREFBR0E7b0NBQUMrQixPQUFNOzt3Q0FBVTt3Q0FBS1gsS0FBS2IsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OzBCQUs5Qyw4REFBQ0oseURBQU1BO2dCQUNMVyxPQUFPO29CQUNMa0IsVUFBVTtvQkFDVkMsUUFBUTtnQkFDVjswQkFFQSw0RUFBQ3JDLHFEQUFJQTtvQkFDSGdCLE1BQU1BO29CQUNOc0IsVUFBVSxDQUFDQzt3QkFDVHhCLFFBQVE7NEJBQ047Z0NBQ0VMLE9BQU82QixPQUFPQyxJQUFJO2dDQUNsQjdCLFNBQVM7Z0NBQ1RDLE1BQU07NEJBQ1I7K0JBQ0dFO3lCQUNKO3dCQUNERSxLQUFLeUIsV0FBVztvQkFDbEI7OEJBRUEsNEVBQUN6QywwREFBUzt3QkFBQzBDLE1BQUs7a0NBQ2QsNEVBQUN6QyxzREFBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxCO0dBaEVNWTs7UUFFV2IsNkRBQVlpQjs7O0tBRnZCSjtBQWlFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9saXN0LnRzeD82NGU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hlY2tib3gsIEZvcm0sIElucHV0LCBMYXlvdXQsIExpc3QsIFRhZywgVHlwb2dyYXBoeSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBDb250ZW50LCBGb290ZXIsIEhlYWRlciB9IGZyb20gXCJhbnRkL2VzL2xheW91dC9sYXlvdXRcIjtcblxuY29uc3QgeyBUZXh0IH0gPSBUeXBvZ3JhcGh5O1xuXG5jb25zdCBpbml0aWFsRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcImhvZ2VcIixcbiAgICBkdWVEYXRlOiBcIjIwMjMtMDgtMTlcIixcbiAgICBkb25lOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIjLku7bnm65cIixcbiAgICBkdWVEYXRlOiBcIjIwMjMtMDgtMThcIixcbiAgICBkb25lOiB0cnVlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6XG4gICAgICBcIkVsZWN0cmHjgajjgYTjgYbljZjoqp7jga/jgIHpm7vmsJfjgoTjgqjjg43jg6vjgq7jg7zjgajplqLpgKPjgaXjgZHjgonjgozjgovjgZPjgajjgYzjgYLjgorjgb7jgZnjgILjgZ3jga7jgZ/jgoHjgIHjgZPjga7lkI3liY3jga/lirnnjofnmoTjgaroqIjnlLvjgoTjgr/jgrnjgq/jga7nrqHnkIbjgpLmhI/lkbPjgZfjgIHjgqjjg43jg6vjgq7jg7zjgpLmtLvnlKjjgZfjgabkvZzmpa3jgpLpgLLjgoHjgovjgZPjgajjgpLlvLfoqr/jgZnjgovjgYvjgoLjgZfjgozjgb7jgZvjgpPjgIJcIixcbiAgICBkdWVEYXRlOiBcIjIwMjMtMDgtMThcIixcbiAgICBkb25lOiB0cnVlLFxuICB9LFxuXTtcblxuY29uc3QgTGlzdFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX0+XG4gICAgICA8Q29udGVudCBzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiIH19PlxuICAgICAgICA8TGlzdFxuICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxuICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXG4gICAgICAgICAgICAgICAgYXZhdGFyPXtcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpdGVtLmRvbmV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IGRhdGEuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdEYXRhW2luZGV4XS5kb25lID0gIWl0ZW0uZG9uZTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKG5ld0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgaXRlbS5kb25lID8gKFxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBkZWxldGU+e2l0ZW0udGl0bGV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+e2l0ZW0udGl0bGV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kdWVEYXRlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGFnIGNvbG9yPVwiYmx1ZVwiPlBsYW46e2l0ZW0uZHVlRGF0ZX08L1RhZz5cbiAgICAgICAgICAgICAgPFRhZyBjb2xvcj1cIm1hZ2VudGFcIj5EdWU6e2l0ZW0uZHVlRGF0ZX08L1RhZz5cbiAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgICA8Rm9vdGVyXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwic3RpY2t5XCIsXG4gICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgb25GaW5pc2g9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgIHNldERhdGEoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHZhbHVlcy50b2RvLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6IFwiMjAyMy0wOC0xOVwiLFxuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInRvZG9cIj5cbiAgICAgICAgICAgIDxJbnB1dCAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0Zvb3Rlcj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBMaXN0UGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2hlY2tib3giLCJGb3JtIiwiSW5wdXQiLCJMYXlvdXQiLCJMaXN0IiwiVGFnIiwiVHlwb2dyYXBoeSIsIkNvbnRlbnQiLCJGb290ZXIiLCJUZXh0IiwiaW5pdGlhbERhdGEiLCJ0aXRsZSIsImR1ZURhdGUiLCJkb25lIiwiTGlzdFBhZ2UiLCJkYXRhIiwic2V0RGF0YSIsImZvcm0iLCJ1c2VGb3JtIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJtYXJnaW4iLCJpdGVtTGF5b3V0IiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJpdGVtIiwiaW5kZXgiLCJJdGVtIiwiTWV0YSIsImF2YXRhciIsImNoZWNrZWQiLCJvbkNoYW5nZSIsIm5ld0RhdGEiLCJzbGljZSIsImRlbGV0ZSIsImRlc2NyaXB0aW9uIiwiY29sb3IiLCJwb3NpdGlvbiIsImJvdHRvbSIsIm9uRmluaXNoIiwidmFsdWVzIiwidG9kbyIsInJlc2V0RmllbGRzIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/list.tsx\n"));

/***/ })

});