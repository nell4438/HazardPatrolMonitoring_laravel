"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["hazardCategories"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/hazardCategories.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/hazardCategories.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      AllCatTable: [],
      CategoriesTable: [],
      SearchCategories: "",
      AddCategories: false,
      AddCatObj: {},
      AddCatArr: [],
      UpdateCategories: false,
      toUpdateObj: {},
      toDeleteObj: {},
      loadingdelete: false,
      deleteDialog: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["userInfo"])), {}, {
    // SearchingCategories() {
    //     return this.CategoriesTable.filter((r) => {
    //         if(this.SearchCategories){
    //         let searchedQualReq = new RegExp(this.SearchCategories.toUpperCase(), "g");
    //         return JSON.stringify(Object.values(r))
    //             .toUpperCase()
    //             .match(searchedQualReq);
    //         }else{
    //         return r
    //         }
    //     })
    // },
    SearchingCategories: function SearchingCategories() {
      var _this = this;

      if (this.SearchCategories) {
        return this.CategoriesTable.filter(function (res) {
          return res.CatName.toLowerCase().includes(_this.SearchCategories.toLowerCase());
        });
      } else {
        return this.CategoriesTable;
      }
    }
  }),
  created: function created() {
    this.CategoriesInfo();
  },
  methods: {
    formatDate: function formatDate(item) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(item).format("YYYY/MM/DD");
    },
    filterSearchCategories: function filterSearchCategories(val) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat(this.$url, "/api/CategoriesInfo/").concat(val)).then(function (res) {
        _this2.CategoriesTable = res.data;
      });
    },
    AllCatInfo: function AllCatInfo() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat(this.$url, "/api/CategoriesInfo")).then(function (res) {
        _this3.AllCatTable = res.data;
      });
    },
    CategoriesInfo: function CategoriesInfo() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat(this.$url, "/api/CategoriesInfo")).then(function (res) {
        _this4.CategoriesTable = res.data.filter(function (rec) {
          return rec.CompanyCode == _this4.userInfo.value[0].CompanyCode && rec.DeletedDate == null;
        });
        console.log();
      });
    },
    OpenAddCat: function OpenAddCat() {
      this.AddCategories = true;
      this.AllCatInfo();
    },
    CloseAddCat: function CloseAddCat() {
      this.AddCategories = false;
    },
    SaveCat: function SaveCat() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this5.AddCatObj.CreatedDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD");
                _this5.AddCatObj.UpdatedDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD");
                _this5.AddCatObj.UpdatedBy = _this5.userInfo.value[0].UserID;
                _this5.AddCatObj.CompanyCode = _this5.userInfo.value[0].CompanyCode;
                _this5.AddCatObj.CatID = _this5.AllCatTable.filter(function (r) {
                  return r.CatID;
                }).length + 1;
                _context.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat(_this5.$url, "/api/AddCategories"), _this5.AddCatObj).then(function (res) {
                  _this5.AddCategories = false;
                });

              case 7:
                _this5.CategoriesInfo();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    OpenUpdateCat: function OpenUpdateCat(item) {
      this.toUpdateObj = _objectSpread({}, item);
      this.UpdateCategories = true;
    },
    CloseUpdateCat: function CloseUpdateCat() {
      this.UpdateCategories = false;
    },
    SaveUpdateCat: function SaveUpdateCat() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this6.toUpdateObj.UpdatedDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD");
                _this6.toUpdateObj.UpdatedBy = _this6.userInfo.value[0].UserID;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat(_this6.$url, "/api/UpdateCategories"), _this6.toUpdateObj).then(function (res) {
                  _this6.UpdateCategories = false;

                  _this6.CategoriesInfo();
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    DeleteCat: function DeleteCat(item) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this7.loadingdelete = true;
                _context3.next = 3;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 2000);
                });

              case 3:
                _this7.toDeleteObj = _objectSpread({}, item);
                _this7.toDeleteObj.DeletedDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD");
                axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat(_this7.$url, "/api/softDeleteCategories"), _this7.toDeleteObj).then(function (res) {
                  _this7.CategoriesInfo();

                  _this7.loadingdelete = false;
                  _this7.deleteDialog = false;
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  watch: {
    AddCategories: function AddCategories(val) {
      if (!val) {
        this.AddCatObj.CatName = null;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/hazardCategories.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/hazardCategories.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hazardCategories_vue_vue_type_template_id_0d4f59ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hazardCategories.vue?vue&type=template&id=0d4f59ce& */ "./resources/js/components/hazardCategories.vue?vue&type=template&id=0d4f59ce&");
/* harmony import */ var _hazardCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hazardCategories.vue?vue&type=script&lang=js& */ "./resources/js/components/hazardCategories.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _hazardCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hazardCategories_vue_vue_type_template_id_0d4f59ce___WEBPACK_IMPORTED_MODULE_0__.render,
  _hazardCategories_vue_vue_type_template_id_0d4f59ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/hazardCategories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/hazardCategories.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/hazardCategories.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hazardCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./hazardCategories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/hazardCategories.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hazardCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/hazardCategories.vue?vue&type=template&id=0d4f59ce&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/hazardCategories.vue?vue&type=template&id=0d4f59ce& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hazardCategories_vue_vue_type_template_id_0d4f59ce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hazardCategories_vue_vue_type_template_id_0d4f59ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hazardCategories_vue_vue_type_template_id_0d4f59ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./hazardCategories.vue?vue&type=template&id=0d4f59ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/hazardCategories.vue?vue&type=template&id=0d4f59ce&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/hazardCategories.vue?vue&type=template&id=0d4f59ce&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/hazardCategories.vue?vue&type=template&id=0d4f59ce& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "v-card",
        { attrs: { flat: "" } },
        [
          _c(
            "v-row",
            { attrs: { dense: "" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "7" } },
                [
                  _c(
                    "v-card-subtitle",
                    { staticStyle: { "font-size": "30px" } },
                    [_vm._v("Hazard Categories")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "mt-1", attrs: { cols: "4" } },
                [
                  _c("v-text-field", {
                    staticStyle: { height: "50px" },
                    attrs: {
                      dense: "",
                      outlined: "",
                      label: "Search",
                      color: "black",
                      "append-icon": "mdi-magnify",
                    },
                    model: {
                      value: _vm.SearchCategories,
                      callback: function ($$v) {
                        _vm.SearchCategories = $$v
                      },
                      expression: "SearchCategories",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "pt-2", attrs: { cols: "1" } },
                [
                  _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "", transition: "scroll-y-transition" },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function (ref) {
                            var on = ref.on
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  {
                                    staticStyle: {
                                      "font-weight": "bold",
                                      border: "1px solid black",
                                    },
                                    attrs: { color: "#e0ddd7" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.OpenAddCat()
                                      },
                                    },
                                  },
                                  on
                                ),
                                [
                                  _c("v-icon", [_vm._v(" mdi-plus ")]),
                                  _vm._v("ADD\n            "),
                                ],
                                1
                              ),
                            ]
                          },
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("span", { staticStyle: { "font-family": "Arial" } }, [
                        _vm._v(" Add Category "),
                      ]),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-simple-table",
            {
              staticStyle: { border: "1px solid black", "overflow-y": "auto" },
              attrs: {
                "fixed-header": "",
                height: _vm.$vuetify.breakpoint.height - 150,
              },
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v("No")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("CATEGORIES")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("ACTIONS")]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.SearchingCategories, function (item, i) {
                  return _c("tr", { key: i }, [
                    _c("td", [_vm._v(_vm._s(i + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.CatName))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "v-tooltip",
                          {
                            attrs: {
                              bottom: "",
                              transition: "scroll-y-transition",
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          {
                                            attrs: {
                                              icon: "",
                                              color: "orange",
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.OpenUpdateCat(item)
                                              },
                                            },
                                          },
                                          on
                                        ),
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-pencil-outline"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              true
                            ),
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticStyle: { "font-family": "Arial" } },
                              [_vm._v(" Edit ")]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-tooltip",
                          {
                            attrs: {
                              bottom: "",
                              transition: "scroll-y-transition",
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          {
                                            attrs: { icon: "", color: "red" },
                                            on: {
                                              click: function ($event) {
                                                _vm.deleteDialog = true
                                                _vm.toDelete = Object.assign(
                                                  {},
                                                  item
                                                )
                                              },
                                            },
                                          },
                                          on
                                        ),
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-delete-outline"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              true
                            ),
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticStyle: { "font-family": "Arial" } },
                              [_vm._v(" Delete ")]
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ])
                }),
                0
              ),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "500", persistent: "" },
          model: {
            value: _vm.AddCategories,
            callback: function ($$v) {
              _vm.AddCategories = $$v
            },
            expression: "AddCategories",
          },
        },
        [
          _c(
            "v-container",
            {
              staticStyle: { "background-color": "white" },
              attrs: { fluid: "" },
            },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-card-title",
                    [
                      _vm._v("Add Category\n          "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", color: "red" },
                          on: {
                            click: function ($event) {
                              return _vm.CloseAddCat()
                            },
                          },
                        },
                        [_c("v-icon", [_vm._v("mdi-close")])],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              outlined: "",
                              label: "Category Name",
                            },
                            model: {
                              value: _vm.AddCatObj.CatName,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddCatObj, "CatName", $$v)
                              },
                              expression: "AddCatObj.CatName",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticStyle: { border: "1px solid grey" },
                          attrs: {
                            type: "submit",
                            color: "#FFD966",
                            dense: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.SaveCat()
                            },
                          },
                        },
                        [
                          _c("v-icon", [_vm._v("mdi-plus")]),
                          _vm._v("Add\n          "),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "500", persistent: "" },
          model: {
            value: _vm.UpdateCategories,
            callback: function ($$v) {
              _vm.UpdateCategories = $$v
            },
            expression: "UpdateCategories",
          },
        },
        [
          _c(
            "v-container",
            { staticStyle: { "background-color": "white" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-card-title",
                    [
                      _vm._v("Update Category\n          "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function ($event) {
                              return _vm.CloseUpdateCat()
                            },
                          },
                        },
                        [_c("v-icon", [_vm._v("mdi-close")])],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              outlined: "",
                              label: "Category Name",
                            },
                            model: {
                              value: _vm.toUpdateObj.CatName,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "CatName", $$v)
                              },
                              expression: "toUpdateObj.CatName",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticStyle: { border: "1px solid black" },
                          attrs: {
                            type: "submit",
                            color: "#FFD966",
                            dense: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.SaveUpdateCat()
                            },
                          },
                        },
                        [
                          _c("v-icon", [_vm._v("mdi-content-save")]),
                          _vm._v("Save\n          "),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "300", persistent: "" },
          model: {
            value: _vm.deleteDialog,
            callback: function ($$v) {
              _vm.deleteDialog = $$v
            },
            expression: "deleteDialog",
          },
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c("span", [_vm._v(" Do you want to Delete? ")]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticStyle: {
                            "margin-top": "10px",
                            "margin-left": "35px",
                          },
                          attrs: {
                            loading: _vm.loadingdelete,
                            color: "error",
                            text: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.DeleteCat(_vm.toDelete)
                            },
                          },
                        },
                        [_vm._v("Delete\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticStyle: { "margin-top": "10px" },
                          attrs: { text: "" },
                          on: {
                            click: function ($event) {
                              _vm.deleteDialog = false
                            },
                          },
                        },
                        [_vm._v("Cancel\n          ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);