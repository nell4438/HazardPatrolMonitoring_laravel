"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["safetyOfficers"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/safetyOfficers.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/safetyOfficers.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      GetAreasTable: [],
      SafetyOfficerTable: [],
      Search: "",
      AddDialog: false,
      AddOfficerObj: {},
      toUpdateObj: {},
      UpdateDialog: false,
      toDeleteObj: {},
      deleteDialog: false,
      loadingdelete: false,
      HeadersConfig: {
        headers: {
          "master-api": "db588403f0a1d3b897442a28724166b4"
        }
      },
      EmployeeInfoURL: "http://hrd-adminweb/api/basicinfo",
      employeeInfo: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(["userInfo"])), {}, {
    SearchingPatrol: function SearchingPatrol() {
      var _this = this;

      return this.SafetyOfficerTable.filter(function (r) {
        if (_this.Search) {
          var searchedQualReq = new RegExp(_this.Search.toUpperCase(), "g");
          return JSON.stringify(Object.values(r)).toUpperCase().match(searchedQualReq);
        } else {
          return r;
        }
      });
    }
  }),
  created: function created() {
    this.SafetyOfficerInfo();
  },
  methods: {
    formatDate: function formatDate(item) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(item).format("YYYY/MM/DD");
    },
    filterSearch: function filterSearch(val) {
      var _this2 = this;

      axios.get("".concat(this.$url, "/api/SafetyOfficerInfo/").concat(val)).then(function (res) {
        _this2.SafetyOfficerTable = res.data;
      });
    },
    SafetyOfficerInfo: function SafetyOfficerInfo() {
      var _this3 = this;

      axios.get("".concat(this.$url, "/api/SafetyOfficerInfo")).then(function (res) {
        _this3.SafetyOfficerTable = res.data.filter(function (rec) {
          return rec.CompanyCode == _this3.userInfo.value[0].CompanyCode;
        }); // console.log('itoooooo',this.SafetyOfficerTable)
      });
    },
    getAreas: function getAreas() {
      var _this4 = this;

      axios.get("".concat(this.$url, "/api/AreasInfo")).then(function (res) {
        _this4.GetAreasTable = res.data.filter(function (rec) {
          return rec.CompanyCode == _this4.userInfo.value[0].CompanyCode && rec.DeletedDate == null;
        });
      });
    },
    clickADD: function clickADD() {
      this.AddDialog = true;
      this.getAreas(); // console.log('kkkkk',this.AddOfficerObj)
    },
    closeADD: function closeADD() {
      this.AddDialog = false;
    },
    SaveOfficers: function SaveOfficers() {
      var _this5 = this;

      // console.log('kkkkk',this.userInfo.value[0].UserID)
      // console.log('sdff', this.AddOfficerObj.AreaID)
      this.AddOfficerObj.CreatedDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
      this.AddOfficerObj.UpdatedDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
      this.AddOfficerObj.UpdatedBy = this.userInfo.value[0].UserID;
      this.AddOfficerObj.CompanyCode = this.userInfo.value[0].CompanyCode;
      this.AddOfficerObj.EmployeeName = this.employeeInfo.EmployeeName;
      axios.post("".concat(this.$url, "/api/AddSafetyOfficers"), this.AddOfficerObj).then(function (res) {
        // this.SafetyOfficerTable.push(this.AddOfficerObj)
        _this5.AddDialog = false;
      });
      this.SafetyOfficerInfo();
    },
    toUpdateSafetyOfficers: function toUpdateSafetyOfficers(item) {
      this.getAreas();
      this.toUpdateObj = _objectSpread({}, item);
      this.UpdateDialog = true;
    },
    CloseUpdateSafetyOfficers: function CloseUpdateSafetyOfficers() {
      this.UpdateDialog = false;
    },
    SaveUpdateSafetyOfficers: function SaveUpdateSafetyOfficers() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log('this.toUpdateObj',this.toUpdateObj)
                _this6.toUpdateObj.UpdatedDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
                _this6.toUpdateObj.UpdatedBy = _this6.userInfo.value[0].UserID;
                _context.next = 4;
                return axios.post("".concat(_this6.$url, "/api/UpdateSafetyOfficers"), _this6.toUpdateObj).then(function (res) {
                  _this6.UpdateDialog = false;
                });

              case 4:
                _this6.SafetyOfficerInfo();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    DeleteSafetyOfficers: function DeleteSafetyOfficers(item) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this7.loadingdelete = true;
                _context2.next = 3;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 2000);
                });

              case 3:
                _this7.toDeleteObj = _objectSpread({}, item);
                _this7.toDeleteObj.DeletedDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
                axios.post("".concat(_this7.$url, "/api/softDeleteSafetyOfficers"), _this7.toDeleteObj).then(function (res) {
                  _this7.SafetyOfficerInfo();

                  _this7.loadingdelete = false;
                  _this7.deleteDialog = false;
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    EmployeeInfo: function EmployeeInfo() {
      var _this8 = this;

      axios.get("".concat(this.EmployeeInfoURL, "/").concat(this.AddOfficerObj.EmployeeCode), this.HeadersConfig).then(function (res) {
        if (res.data[0]) {
          //pag may laman
          _this8.employeeInfo = res.data[0];
        }
      });
    }
  },
  watch: {
    AddDialog: function AddDialog(val) {
      if (val) {
        this.AddOfficerObj.EmployeeCode = null;
        this.AddOfficerObj.AreaID = null;
        this.employeeInfo.EmployeeName = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/safetyOfficers.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/safetyOfficers.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.img-hover-zoom img {\r\n  transition: transform 0.5s ease;\n}\n.img-hover-zoom:hover img {\r\n  transform: scale(1.4);\n}\n#img {\r\n  height: 35px;\r\n  width: 35px;\r\n  border: 3px solid #eeeeee;\r\n  border-radius: 50%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/safetyOfficers.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/safetyOfficers.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_safetyOfficers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./safetyOfficers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/safetyOfficers.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_safetyOfficers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_safetyOfficers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/safetyOfficers.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/safetyOfficers.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _safetyOfficers_vue_vue_type_template_id_a9d8830c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safetyOfficers.vue?vue&type=template&id=a9d8830c& */ "./resources/js/components/safetyOfficers.vue?vue&type=template&id=a9d8830c&");
/* harmony import */ var _safetyOfficers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safetyOfficers.vue?vue&type=script&lang=js& */ "./resources/js/components/safetyOfficers.vue?vue&type=script&lang=js&");
/* harmony import */ var _safetyOfficers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safetyOfficers.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/safetyOfficers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _safetyOfficers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _safetyOfficers_vue_vue_type_template_id_a9d8830c___WEBPACK_IMPORTED_MODULE_0__.render,
  _safetyOfficers_vue_vue_type_template_id_a9d8830c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/safetyOfficers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/safetyOfficers.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/safetyOfficers.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_safetyOfficers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./safetyOfficers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/safetyOfficers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_safetyOfficers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/safetyOfficers.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/safetyOfficers.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_safetyOfficers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./safetyOfficers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/safetyOfficers.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/safetyOfficers.vue?vue&type=template&id=a9d8830c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/safetyOfficers.vue?vue&type=template&id=a9d8830c& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_safetyOfficers_vue_vue_type_template_id_a9d8830c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_safetyOfficers_vue_vue_type_template_id_a9d8830c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_safetyOfficers_vue_vue_type_template_id_a9d8830c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./safetyOfficers.vue?vue&type=template&id=a9d8830c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/safetyOfficers.vue?vue&type=template&id=a9d8830c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/safetyOfficers.vue?vue&type=template&id=a9d8830c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/safetyOfficers.vue?vue&type=template&id=a9d8830c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                    [_vm._v("Safety Officers")]
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
                      value: _vm.Search,
                      callback: function ($$v) {
                        _vm.Search = $$v
                      },
                      expression: "Search",
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
                                        return _vm.clickADD()
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
                        _vm._v(" Add Officer "),
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
                height: _vm.$vuetify.breakpoint.height - 170,
              },
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v("No")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("PICTURE")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("CODE")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("EMPLOYEE NAME")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("AREA ASSIGNMENT")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("ACTIONS")]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.SearchingPatrol, function (item, i) {
                  return _c("tr", { key: i }, [
                    _c("td", [_vm._v(_vm._s(i + 1))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c("v-list-item-avatar", { attrs: { size: "45" } }, [
                          _c("div", { staticClass: "img-hover-zoom" }, [
                            _c("img", {
                              attrs: {
                                id: "img",
                                src:
                                  "http://hrd-adminweb/photos/" +
                                  item.EmployeeCode +
                                  ".jpg",
                              },
                            }),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.EmployeeCode))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.EmployeeName))]),
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
                                                return _vm.toUpdateSafetyOfficers(
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
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass: "pt-3",
              staticStyle: { "font-size": "21px", "text-align": "center" },
            },
            [
              _vm._v(
                "\n      Total Safety Officers: " +
                  _vm._s(_vm.SafetyOfficerTable.length) +
                  "\n    "
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
          attrs: { width: "400px", persistent: "" },
          model: {
            value: _vm.AddDialog,
            callback: function ($$v) {
              _vm.AddDialog = $$v
            },
            expression: "AddDialog",
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
                      _vm._v("Add Saftety Officer\n          "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function ($event) {
                              return _vm.closeADD()
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
                        { attrs: { cols: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Employee Code",
                              dense: "",
                              outlined: "",
                            },
                            on: {
                              keyup: function ($event) {
                                return _vm.EmployeeInfo()
                              },
                            },
                            model: {
                              value: _vm.AddOfficerObj.EmployeeCode,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddOfficerObj, "EmployeeCode", $$v)
                              },
                              expression: "AddOfficerObj.EmployeeCode",
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
                              label: "Employee Name",
                              dense: "",
                              outlined: "",
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
                          _c("v-autocomplete", {
                            attrs: {
                              label: "Area",
                              dense: "",
                              outlined: "",
                              items: _vm.GetAreasTable,
                              "item-text": "Area",
                              "item-value": "AreaID",
                            },
                            model: {
                              value: _vm.AddOfficerObj.AreaID,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddOfficerObj, "AreaID", $$v)
                              },
                              expression: "AddOfficerObj.AreaID",
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
                              return _vm.SaveOfficers()
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
          attrs: { width: "400px", persistent: "" },
          model: {
            value: _vm.UpdateDialog,
            callback: function ($$v) {
              _vm.UpdateDialog = $$v
            },
            expression: "UpdateDialog",
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
                      _vm._v("Update Safety Officer\n          "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function ($event) {
                              return _vm.CloseUpdateSafetyOfficers()
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
                        { attrs: { cols: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Employee Code",
                              dense: "",
                              outlined: "",
                              readonly: "",
                            },
                            model: {
                              value: _vm.toUpdateObj.EmployeeCode,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "EmployeeCode", $$v)
                              },
                              expression: "toUpdateObj.EmployeeCode",
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
                              label: "Employee Name",
                              dense: "",
                              outlined: "",
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
                          _c("v-autocomplete", {
                            attrs: {
                              label: "Area",
                              dense: "",
                              outlined: "",
                              items: _vm.GetAreasTable,
                              "item-text": "Area",
                              "item-value": "AreaID",
                            },
                            model: {
                              value: _vm.toUpdateObj.AreaID,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "AreaID", $$v)
                              },
                              expression: "toUpdateObj.AreaID",
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
                              return _vm.SaveUpdateSafetyOfficers()
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