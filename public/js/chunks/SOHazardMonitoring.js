"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["SOHazardMonitoring"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SOHazardMonitoring.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SOHazardMonitoring.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      selectArea: "",
      selectYear: "",
      GetHazardTable: [],
      GetHazardTable2: [],
      year: ["2023", "2022", "2021", "2020", "2019"],
      GetAreasTable: []
    };
  },
  created: function created() {
    this.GetHazard2();
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["userInfo"])), {}, {
    sortedData: function sortedData() {
      var _this = this;

      if (this.selectArea) {
        return this.GetHazardTable2.filter(function (r) {
          return r.Area == _this.selectArea;
        });
      }

      return this.GetHazardTable2;
    }
  }),
  methods: {
    GetHazard: function GetHazard() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat(this.$url, "/api/GetHazard")).then(function (res) {
        _this2.GetHazardTable = res.data.filter(function (r) {
          return r.DeletedDate == null;
        });
      });
    },
    GetHazard2: function GetHazard2() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this3.selectYear) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat(_this3.$url, "/api/GetHazard2/").concat(_this3.selectYear, "/").concat(_this3.selectArea)).then(function (res) {
                  _this3.GetHazardTable2 = res.data;
                });

              case 3:
                _this3.GetHazard();

                _this3.getAreas();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getAreas: function getAreas() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat(this.$url, "/api/AreasInfo")).then(function (res) {
        _this4.GetAreasTable = res.data.filter(function (rec) {
          return rec.CompanyCode == _this4.userInfo.value[0].CompanyCode && rec.DeletedDate == null;
        });
      });
    },
    printPDF: function printPDF() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var table, DataTable, buildTableBody, dd;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                buildTableBody = function _buildTableBody(data, columns) {
                  var body = [];
                  body.push(columns);
                  data.forEach(function (row) {
                    var dataRow = [];
                    columns.forEach(function (column) {
                      dataRow.push({
                        text: row[column],
                        fontSize: 13,
                        alignment: "center"
                      });
                    });
                    body.push(dataRow);
                  });
                  columns[0] = {
                    text: "Employee ID",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13,
                    padding: 10
                  }, columns[1] = {
                    text: "Employee Name",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13
                  }, columns[2] = {
                    text: "January",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13
                  }, columns[3] = {
                    text: "February",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13
                  }, columns[4] = {
                    text: "March",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13
                  }, columns[5] = {
                    text: "April",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13
                  }, columns[6] = {
                    text: "May",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13
                  }, columns[7] = {
                    text: "June",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13
                  }, columns[8] = {
                    text: "July",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13
                  }, columns[9] = {
                    text: "August",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13
                  }, columns[10] = {
                    text: "September",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 12
                  }, columns[11] = {
                    text: "October",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13
                  }, columns[12] = {
                    text: "November",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13
                  }, columns[13] = {
                    text: "December",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13
                  }, columns[14] = {
                    text: "Total",
                    alignment: "center",
                    bold: true,
                    fillColor: "#68B984",
                    color: "black",
                    fontSize: 13
                  };
                  return body;
                };

                table = function _table(data, columns) {
                  return {
                    style: "alignmentCenter",
                    table: {
                      widths: ["8%", "15%", "6%", "6%", "6%", "6%", "6%", "6%", "6%", "6%", "7%", "6%", "6%", "6%", "4%"],
                      headerRows: 1,
                      body: buildTableBody(data, columns),
                      alignment: "center"
                    }
                  };
                };

                DataTable = _toConsumableArray(_this5.sortedData); // let DataTable1 = [ ...this.GetHazardTable2 ]

                dd = {
                  pageSize: "A3",
                  pageOrientation: "landscape",
                  pageMargins: [15, 15, 15, 30],
                  content: [{
                    table: {
                      widths: ["100%"],
                      body: [[[{
                        text: "Safety Officer Hazard Count Monitoring",
                        fontSize: 18,
                        alignment: "center",
                        bold: true
                      }, {
                        text: _this5.selectArea + " " + " " + " " + _this5.selectYear,
                        fontSize: 20,
                        alignment: "center",
                        bold: true
                      }]]]
                    }
                  }, {
                    text: " "
                  }, table(DataTable, ["EmployeeCode", "EmployeeName", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "TOTAL"]), {
                    text: " "
                  }, {
                    columns: [{
                      text: "Total Member: " + _this5.GetHazardTable2.map(function (rec) {
                        return rec.EmployeeCode;
                      }).length,
                      fontSize: 15
                    }, {
                      text: "Printed Date: " + moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD"),
                      fontSize: 15,
                      alignment: "right"
                    }]
                  }, {
                    text: " "
                  }],
                  footer: function footer(currentPage, pageCount) {
                    return {
                      columns: [{
                        fontSize: 13,
                        text: [{
                          text: "Page " + currentPage.toString() + " of " + pageCount
                        }],
                        alignment: "center"
                      }]
                    };
                  }
                };
                pdfMake.createPdf(dd).open();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/SOHazardMonitoring.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/SOHazardMonitoring.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SOHazardMonitoring_vue_vue_type_template_id_29db1301___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SOHazardMonitoring.vue?vue&type=template&id=29db1301& */ "./resources/js/components/SOHazardMonitoring.vue?vue&type=template&id=29db1301&");
/* harmony import */ var _SOHazardMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SOHazardMonitoring.vue?vue&type=script&lang=js& */ "./resources/js/components/SOHazardMonitoring.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SOHazardMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SOHazardMonitoring_vue_vue_type_template_id_29db1301___WEBPACK_IMPORTED_MODULE_0__.render,
  _SOHazardMonitoring_vue_vue_type_template_id_29db1301___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SOHazardMonitoring.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SOHazardMonitoring.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/SOHazardMonitoring.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SOHazardMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SOHazardMonitoring.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SOHazardMonitoring.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SOHazardMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SOHazardMonitoring.vue?vue&type=template&id=29db1301&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/SOHazardMonitoring.vue?vue&type=template&id=29db1301& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SOHazardMonitoring_vue_vue_type_template_id_29db1301___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SOHazardMonitoring_vue_vue_type_template_id_29db1301___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SOHazardMonitoring_vue_vue_type_template_id_29db1301___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SOHazardMonitoring.vue?vue&type=template&id=29db1301& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SOHazardMonitoring.vue?vue&type=template&id=29db1301&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SOHazardMonitoring.vue?vue&type=template&id=29db1301&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SOHazardMonitoring.vue?vue&type=template&id=29db1301& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { margin: "10px" }, attrs: { fluid: "" } },
    [
      _c(
        "v-card",
        { attrs: { flat: "" } },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "4" } },
                [
                  _c("v-autocomplete", {
                    attrs: {
                      dense: "",
                      outlined: "",
                      label: "Area",
                      items: _vm.GetAreasTable,
                      "item-text": "Area",
                    },
                    model: {
                      value: _vm.selectArea,
                      callback: function ($$v) {
                        _vm.selectArea = $$v
                      },
                      expression: "selectArea",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "1" } }),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "2" } },
                [
                  _c("v-autocomplete", {
                    attrs: {
                      label: "Year",
                      items: _vm.year,
                      dense: "",
                      outlined: "",
                    },
                    on: {
                      input: function ($event) {
                        return _vm.GetHazard2()
                      },
                    },
                    model: {
                      value: _vm.selectYear,
                      callback: function ($$v) {
                        _vm.selectYear = $$v
                      },
                      expression: "selectYear",
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
            "v-simple-table",
            {
              staticStyle: { border: "1px solid black", "overflow-y": "auto" },
              attrs: {
                "fixed-header": "",
                height: _vm.$vuetify.breakpoint.height - 200,
              },
            },
            [
              _c("thead", [
                _c("tr", [
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("EMPCODE")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("EMPLOYEE")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("JANUARY")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("FEBUARY")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("MARCH")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("APRIL")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("MAY")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("JUNE")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("JULY")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("AUGUST")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("SEPTEMBER")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("OCTOBER")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("NOVEMBER")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("DECEMBER")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("TOTAL")]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.sortedData, function (item, i) {
                  return _c("tr", { key: i }, [
                    _c("td", [_vm._v(_vm._s(item.EmployeeCode))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.EmployeeName))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.January))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.February))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.March))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.April))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.May))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.June))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.July))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.August))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.September))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.October))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.November))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.December))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.TOTAL))]),
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
        "v-toolbar",
        {
          staticStyle: { border: "1px solid black" },
          attrs: { flat: "", height: "50px" },
        },
        [
          _c("v-col", { attrs: { cols: "3" } }, [
            _c(
              "p",
              {
                staticStyle: {
                  "text-align": "left",
                  "font-size": "20px",
                  "margin-top": "15px",
                },
              },
              [
                _vm._v(
                  "\n        Total Safety Officer:\n        " +
                    _vm._s(
                      _vm.GetHazardTable2.map(function (rec) {
                        return rec.EmployeeCode
                      }).length
                    ) +
                    "\n      "
                ),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticStyle: { "margin-right": "15px" },
              attrs: { icon: "", small: "" },
              on: {
                click: function ($event) {
                  return _vm.printPDF()
                },
              },
            },
            [
              _c("v-icon", { attrs: { size: "30", color: "black" } }, [
                _vm._v("mdi-printer"),
              ]),
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