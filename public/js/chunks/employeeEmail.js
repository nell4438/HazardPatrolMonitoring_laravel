"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["employeeEmail"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employeeEmail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employeeEmail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      deleteDialog: false,
      loadingdelete: false,
      EmailsTable: [],
      SearchEmail: "",
      AddEmails: false,
      AddEmailsObj: {},
      UpdateEmails: false,
      toUpdateObj: {},
      toDeleteObj: {},
      HeadersConfig: {
        headers: {
          "master-api": "db588403f0a1d3b897442a28724166b4"
        }
      },
      EmployeeInfoURL: "http://hrd-adminweb/api/basicinfo",
      employeeInfo: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["userInfo"])), {}, {
    SearchingEmail: function SearchingEmail() {
      var _this = this;

      return this.EmailsTable.filter(function (r) {
        if (_this.SearchEmail) {
          var searchedQualReq = new RegExp(_this.SearchEmail.toUpperCase(), "g");
          return JSON.stringify(Object.values(r)).toUpperCase().match(searchedQualReq);
        } else {
          return r;
        }
      });
    }
  }),
  created: function created() {
    this.EmailsInfo();
  },
  methods: {
    filterSearchEmails: function filterSearchEmails(val) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat(this.$url, "/api/EmailsInfo/").concat(val)).then(function (res) {
        _this2.EmailsTable = res.data.filter(function (r) {
          return r.CompanyCode == _this2.userInfo.value[0].CompanyCode;
        });
      });
    },
    EmailsInfo: function EmailsInfo() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat(this.$url, "/api/EmailsInfo")).then(function (res) {
        _this3.EmailsTable = res.data.filter(function (rec) {
          return rec.CompanyCode == _this3.userInfo.value[0].CompanyCode;
        });
      });
    },
    OpenAddEmail: function OpenAddEmail() {
      this.AddEmails = true;
    },
    CloseAddEmail: function CloseAddEmail() {
      this.AddEmails = false;
    },
    SaveEmail: function SaveEmail() {
      var _this4 = this;

      this.AddEmailsObj.CreatedDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD");
      this.AddEmailsObj.UpdatedDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD");
      this.AddEmailsObj.UpdatedBy = this.userInfo.value[0].UserID;
      this.AddEmailsObj.CompanyCode = this.userInfo.value[0].CompanyCode;
      this.AddEmailsObj.EmployeeName = this.employeeInfo.EmployeeName;
      axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat(this.$url, "/api/AddEmails"), this.AddEmailsObj).then(function (res) {
        _this4.AddEmails = false;
      });
      this.EmailsInfo();
    },
    OpenUpdateEmails: function OpenUpdateEmails(item) {
      this.toUpdateObj = _objectSpread({}, item);
      this.UpdateEmails = true;
    },
    CloseUpdateEmails: function CloseUpdateEmails() {
      this.UpdateEmails = false;
    },
    SaveUpdateEmails: function SaveUpdateEmails() {
      var _this5 = this;

      this.toUpdateObj.UpdatedDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD");
      this.toUpdateObj.UpdatedBy = this.userInfo.value[0].UserID;
      axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat(this.$url, "/api/UpdateEmails"), this.toUpdateObj).then(function (res) {
        _this5.UpdateEmails = false;

        _this5.EmailsInfo();
      });
    },
    DeleteEmails: function DeleteEmails(item) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this6.loadingdelete = true;
                _context.next = 3;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 2000);
                });

              case 3:
                _this6.toDeleteObj = _objectSpread({}, item);
                _this6.toDeleteObj.DeletedDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD");
                axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat(_this6.$url, "/api/SoftDeleteEmails"), _this6.toDeleteObj).then(function (res) {
                  _this6.EmailsInfo();

                  _this6.loadingdelete = false;
                  _this6.deleteDialog = false;
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    EmployeeInfo: function EmployeeInfo() {
      var _this7 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat(this.EmployeeInfoURL, "/").concat(this.AddEmailsObj.EmployeeID), this.HeadersConfig).then(function (res) {
        if (res.data[0]) {
          //pag may laman
          _this7.employeeInfo = res.data[0];
        }
      });
    }
  },
  watch: {
    AddEmails: function AddEmails(val) {
      if (!val) {
        this.AddEmailsObj.EmployeeID = null;
        this.employeeInfo.EmployeeName = null;
        this.AddEmailsObj.MailAddress = null;
        this.AddEmailsObj.JapaneseAdviserEmail = null;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/employeeEmail.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/employeeEmail.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _employeeEmail_vue_vue_type_template_id_bf34535a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employeeEmail.vue?vue&type=template&id=bf34535a& */ "./resources/js/components/employeeEmail.vue?vue&type=template&id=bf34535a&");
/* harmony import */ var _employeeEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employeeEmail.vue?vue&type=script&lang=js& */ "./resources/js/components/employeeEmail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _employeeEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _employeeEmail_vue_vue_type_template_id_bf34535a___WEBPACK_IMPORTED_MODULE_0__.render,
  _employeeEmail_vue_vue_type_template_id_bf34535a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/employeeEmail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/employeeEmail.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/employeeEmail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employeeEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./employeeEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employeeEmail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employeeEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/employeeEmail.vue?vue&type=template&id=bf34535a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/employeeEmail.vue?vue&type=template&id=bf34535a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employeeEmail_vue_vue_type_template_id_bf34535a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employeeEmail_vue_vue_type_template_id_bf34535a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employeeEmail_vue_vue_type_template_id_bf34535a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./employeeEmail.vue?vue&type=template&id=bf34535a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employeeEmail.vue?vue&type=template&id=bf34535a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employeeEmail.vue?vue&type=template&id=bf34535a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employeeEmail.vue?vue&type=template&id=bf34535a& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                    [_vm._v("Emails")]
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
                      value: _vm.SearchEmail,
                      callback: function ($$v) {
                        _vm.SearchEmail = $$v
                      },
                      expression: "SearchEmail",
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
                                        return _vm.OpenAddEmail()
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
                        _vm._v(" Add Email "),
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
              staticStyle: { border: "1px solid black" },
              attrs: {
                "fixed-header": "",
                height: _vm.$vuetify.breakpoint.height - 150,
              },
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v("ID")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("EMPLOYEE NAME")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("COMPANY")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("MAIL ADDRESS")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("ADVISER EMAIL")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Actions")]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.SearchingEmail, function (item, i) {
                  return _c("tr", { key: i }, [
                    _c("td", [_vm._v(_vm._s(item.EmployeeID))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.EmployeeName))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n            " +
                          _vm._s(
                            item.CompanyCode == "002"
                              ? "HTI"
                              : item.CompanyCode == "003"
                              ? "HRD"
                              : ""
                          ) +
                          "\n          "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.MailAddress))]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "text-align": "center" } }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(
                            item.JapaneseAdviserEmail == null
                              ? "――――"
                              : item.JapaneseAdviserEmail
                          ) +
                          "\n          "
                      ),
                    ]),
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
                                                return _vm.OpenUpdateEmails(
                                                  item
                                                )
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
            value: _vm.AddEmails,
            callback: function ($$v) {
              _vm.AddEmails = $$v
            },
            expression: "AddEmails",
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
                      _vm._v("Add Emails\n          "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function ($event) {
                              return _vm.CloseAddEmail()
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
                            attrs: { dense: "", outlined: "", label: "ID" },
                            on: {
                              keyup: function ($event) {
                                return _vm.EmployeeInfo()
                              },
                            },
                            model: {
                              value: _vm.AddEmailsObj.EmployeeID,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddEmailsObj, "EmployeeID", $$v)
                              },
                              expression: "AddEmailsObj.EmployeeID",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              outlined: "",
                              label: "Employee Name",
                            },
                            model: {
                              value: _vm.employeeInfo.EmployeeName,
                              callback: function ($$v) {
                                _vm.$set(_vm.employeeInfo, "EmployeeName", $$v)
                              },
                              expression: "employeeInfo.EmployeeName",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              outlined: "",
                              label: "Mail Address",
                            },
                            model: {
                              value: _vm.AddEmailsObj.MailAddress,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddEmailsObj, "MailAddress", $$v)
                              },
                              expression: "AddEmailsObj.MailAddress",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              outlined: "",
                              label: "Japanese Adviser Email",
                            },
                            model: {
                              value: _vm.AddEmailsObj.JapaneseAdviserEmail,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.AddEmailsObj,
                                  "JapaneseAdviserEmail",
                                  $$v
                                )
                              },
                              expression: "AddEmailsObj.JapaneseAdviserEmail",
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
                            color: "#FFD966",
                            type: "submit",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.SaveEmail()
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
            value: _vm.UpdateEmails,
            callback: function ($$v) {
              _vm.UpdateEmails = $$v
            },
            expression: "UpdateEmails",
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
                      _vm._v("Update Emails\n          "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function ($event) {
                              return _vm.CloseUpdateEmails()
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
                              label: "ID",
                              readonly: "",
                            },
                            model: {
                              value: _vm.toUpdateObj.EmployeeID,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "EmployeeID", $$v)
                              },
                              expression: "toUpdateObj.EmployeeID",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              outlined: "",
                              label: "Employee Name",
                            },
                            model: {
                              value: _vm.toUpdateObj.EmployeeName,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "EmployeeName", $$v)
                              },
                              expression: "toUpdateObj.EmployeeName",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              outlined: "",
                              label: "Mail Address",
                            },
                            model: {
                              value: _vm.toUpdateObj.MailAddress,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "MailAddress", $$v)
                              },
                              expression: "toUpdateObj.MailAddress",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              outlined: "",
                              label: "Japanese Adviser Email",
                            },
                            model: {
                              value: _vm.toUpdateObj.JapaneseAdviserEmail,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.toUpdateObj,
                                  "JapaneseAdviserEmail",
                                  $$v
                                )
                              },
                              expression: "toUpdateObj.JapaneseAdviserEmail",
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
                            color: "#FFD966",
                            type: "submit",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.SaveUpdateEmails()
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
                              return _vm.DeleteEmails(_vm.toDelete)
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