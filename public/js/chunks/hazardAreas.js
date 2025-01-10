"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["hazardAreas"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/hazardAreas.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/hazardAreas.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      AllAreasTable: [],
      AreasTable: [],
      SearchArea: "",
      AddArea: false,
      AddAreaObj: {},
      AddAreaArr: [],
      UpdateAreaDialog: false,
      deleteDialog: false,
      loadingdelete: false,
      toUpdateObj: {},
      toDeleteObj: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["userInfo"])), {}, {
    // SearchingArea() {
    //     return this.AreasTable.filter((r) => {
    //         if(this.SearchArea){
    //         let searchedQualReq = new RegExp(this.SearchArea.toUpperCase(), "g");
    //         return JSON.stringify(Object.values(r))
    //             .toUpperCase()
    //             .match(searchedQualReq);
    //         }else{
    //         return r
    //         }
    //     })
    // },
    SearchingArea: function SearchingArea() {
      var _this = this;

      if (this.SearchArea) {
        return this.AreasTable.filter(function (item) {
          return item.Area.toLowerCase().includes(_this.SearchArea.toLowerCase());
        });
      } else {
        return this.AreasTable;
      }
    }
  }),
  created: function created() {
    this.AreasInfo();
  },
  methods: {
    formatDate: function formatDate(item) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(item).format("YYYY/MM/DD");
    },
    filterSearchArea: function filterSearchArea(val) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat(this.$url, "/api/AreasInfo/").concat(val)).then(function (res) {
        _this2.AreasTable = res.data;
      });
    },
    getAllArea: function getAllArea() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat(this.$url, "/api/AreasInfo")).then(function (res) {
        _this3.AllAreasTable = res.data;
      });
    },
    AreasInfo: function AreasInfo() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat(this.$url, "/api/AreasInfo")).then(function (res) {
        _this4.AreasTable = res.data.filter(function (rec) {
          return rec.CompanyCode == _this4.userInfo.value[0].CompanyCode && rec.DeletedDate == null;
        });
      });
    },
    OpenAddArea: function OpenAddArea() {
      this.AddArea = true;
      this.getAllArea();
    },
    CloseAddArea: function CloseAddArea() {
      this.AddArea = false;
    },
    SaveArea: function SaveArea() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this5.AddAreaObj.CreatedDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD");
                _this5.AddAreaObj.UpdatedDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD");
                _this5.AddAreaObj.UpdatedBy = _this5.userInfo.value[0].UserID;
                _this5.AddAreaObj.CompanyCode = _this5.userInfo.value[0].CompanyCode;
                _this5.AddAreaObj.AreaID = _this5.AllAreasTable.filter(function (r) {
                  return r.AreaID;
                }).length + 1;
                _context.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat(_this5.$url, "/api/AddAreas"), _this5.AddAreaObj).then(function (res) {
                  _this5.AddArea = false;
                });

              case 7:
                _this5.AreasInfo();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    OpenUpdateArea: function OpenUpdateArea(item) {
      this.toUpdateObj = _objectSpread({}, item);
      this.UpdateAreaDialog = true;
    },
    CloseUpdateArea: function CloseUpdateArea() {
      this.UpdateAreaDialog = false;
    },
    SaveUpdateArea: function SaveUpdateArea() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this6.toUpdateObj.UpdatedDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD");
                _this6.toUpdateObj.UpdatedBy = _this6.userInfo.value[0].UserID;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat(_this6.$url, "/api/UpdateAreas"), _this6.toUpdateObj).then(function (res) {
                  _this6.UpdateAreaDialog = false;

                  _this6.AreasInfo();
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    DeleteSafetyOfficers: function DeleteSafetyOfficers(item) {
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
                axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat(_this7.$url, "/api/softDeleteAreas"), _this7.toDeleteObj).then(function (res) {
                  _this7.AreasInfo();

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
    AddArea: function AddArea(val) {
      if (!val) {
        this.AddAreaObj.Area = null;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/hazardAreas.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/hazardAreas.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hazardAreas_vue_vue_type_template_id_0408e4ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hazardAreas.vue?vue&type=template&id=0408e4ce& */ "./resources/js/components/hazardAreas.vue?vue&type=template&id=0408e4ce&");
/* harmony import */ var _hazardAreas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hazardAreas.vue?vue&type=script&lang=js& */ "./resources/js/components/hazardAreas.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _hazardAreas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hazardAreas_vue_vue_type_template_id_0408e4ce___WEBPACK_IMPORTED_MODULE_0__.render,
  _hazardAreas_vue_vue_type_template_id_0408e4ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/hazardAreas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/hazardAreas.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/hazardAreas.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hazardAreas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./hazardAreas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/hazardAreas.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hazardAreas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/hazardAreas.vue?vue&type=template&id=0408e4ce&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/hazardAreas.vue?vue&type=template&id=0408e4ce& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hazardAreas_vue_vue_type_template_id_0408e4ce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hazardAreas_vue_vue_type_template_id_0408e4ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hazardAreas_vue_vue_type_template_id_0408e4ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./hazardAreas.vue?vue&type=template&id=0408e4ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/hazardAreas.vue?vue&type=template&id=0408e4ce&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/hazardAreas.vue?vue&type=template&id=0408e4ce&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/hazardAreas.vue?vue&type=template&id=0408e4ce& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                    [_vm._v("Hazard Area")]
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
                      value: _vm.SearchArea,
                      callback: function ($$v) {
                        _vm.SearchArea = $$v
                      },
                      expression: "SearchArea",
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
                                      border: "1px solid black",
                                      "font-weight": "bold",
                                    },
                                    attrs: { color: "#e0ddd7" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.OpenAddArea()
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
                        _vm._v(" Add Area "),
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
                  _c("th", [_vm._v("AREA")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("ACTIONS")]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.SearchingArea, function (item, i) {
                  return _c("tr", { key: i }, [
                    _c("td", [_vm._v(_vm._s(i + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.Area))]),
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
                                                return _vm.OpenUpdateArea(item)
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
            value: _vm.AddArea,
            callback: function ($$v) {
              _vm.AddArea = $$v
            },
            expression: "AddArea",
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
                      _vm._v("Add Area\n          "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", color: "red" },
                          on: {
                            click: function ($event) {
                              return _vm.CloseAddArea()
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
                            attrs: { dense: "", outlined: "", label: "Area" },
                            model: {
                              value: _vm.AddAreaObj.Area,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddAreaObj, "Area", $$v)
                              },
                              expression: "AddAreaObj.Area",
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
                            dense: "",
                            type: "submit",
                            color: "#FFD966",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.SaveArea()
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
            value: _vm.UpdateAreaDialog,
            callback: function ($$v) {
              _vm.UpdateAreaDialog = $$v
            },
            expression: "UpdateAreaDialog",
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
                      _vm._v("Update Area\n          "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function ($event) {
                              return _vm.CloseUpdateArea()
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
                            attrs: { dense: "", outlined: "", label: "Area" },
                            model: {
                              value: _vm.toUpdateObj.Area,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "Area", $$v)
                              },
                              expression: "toUpdateObj.Area",
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
                          attrs: { color: "#FFD966" },
                          on: {
                            click: function ($event) {
                              return _vm.SaveUpdateArea()
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
                              return _vm.DeleteSafetyOfficers(_vm.toDelete)
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