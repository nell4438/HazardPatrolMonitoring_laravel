"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["users"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tempPass: null,
      SearchArea: "",
      deleteDialog: false,
      loadingdelete: false,
      GetAreasTable: [],
      UsersTable1: ["Admin", "Encoder"],
      UsersTable: [],
      Search: "",
      AddUserDialog: false,
      DateToday: moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD"),
      AddUsersObj: {},
      UpdateUserDialog: false,
      toUpdateObj: {},
      toDeleteObj: {},
      HeadersConfig: {
        headers: {
          "master-api": "db588403f0a1d3b897442a28724166b4"
        }
      },
      show: false,
      getNameArray: [],
      gettingNameNew: [],
      EmployeeInfoURL: "http://hrd-adminweb/api/basicinfo",
      nameRules: [function (v) {
        return !!v || "This field is required";
      }],
      infoData: {},
      employeeInfo: {},
      GetRights: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["userInfo", "AreasInfo"])), {}, {
    // SearchingPatrol() {
    // return this.UsersTable.filter((r) => {
    //     if(this.Search){
    //     let searchedQualReq = new RegExp(this.Search.toUpperCase(), "g");
    //     return JSON.stringify(Object.values(r))
    //         .toUpperCase()
    //         .match(searchedQualReq);
    //     }else{
    //     return r
    //     }
    // })
    // },
    SearchingPatrol: function SearchingPatrol() {
      var _this = this;

      if (this.Search) {
        return this.UsersTable.filter(function (item) {
          return item.EmployeeName.toLowerCase().includes(_this.Search.toLowerCase()) || item.UserID.toString().includes(_this.Search.toLowerCase()) || item.Users_Rights.toLowerCase().includes(_this.Search.toLowerCase()) || item.Area && item.Area.toLowerCase().indexOf(_this.Search.toLowerCase().trim()) > -1;
        });
      } else {
        return this.UsersTable;
      }
    }
  }),
  created: function created() {
    this.usersInfo();
    this.getAreas();
    this.getuserRights();
    this.DateToday = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(["loginUser"])), {}, {
    // filterSearch(val){
    // axios.get(`api/usersInfo/${val}`).then(res=>{
    //     this.UsersTable = res.data.filter(r => {
    //         return r.CompanyCode == this.userInfo.value[0].CompanyCode
    //     })
    // })
    // },
    getuserRights: function getuserRights() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(this.$url, "/api/userRights")).then(function (res) {
        _this2.GetRights = res.data;
      });
    },
    getAreas: function getAreas() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(this.$url, "/api/AreasInfo")).then(function (res) {
        _this3.GetAreasTable = res.data.filter(function (rec) {
          return rec.CompanyCode == _this3.userInfo.value[0].CompanyCode;
        });
      });
    },
    usersInfo: function usersInfo() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat(this.$url, "/api/usersInfo")).then(function (res) {
        _this4.UsersTable = res.data.filter(function (rec) {
          return rec.CompanyCode == _this4.userInfo.value[0].CompanyCode;
        });
      });
      this.getAreas();
      this.getuserRights();
    },
    OpenAddUser: function OpenAddUser() {
      this.AddUserDialog = true;
    },
    CloseAddUser: function CloseAddUser() {
      this.AddUserDialog = false;
    },
    SaveUsers: function SaveUsers() {
      var _this5 = this;

      if (this.AddUsersObj.UserLevel == "Admin") {
        this.AddUsersObj.UserLevel = 1;
      }

      if (this.AddUsersObj.UserLevel == "Encoder") {
        this.AddUsersObj.UserLevel = 2;
      }

      this.AddUsersObj.CreatedDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
      this.AddUsersObj.UpdatedDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
      this.AddUsersObj.UpdatedBy = this.userInfo.value[0].UserID;
      this.AddUsersObj.CompanyCode = this.userInfo.value[0].CompanyCode;
      this.AddUsersObj.EmployeeName = this.employeeInfo.EmployeeName;
      this.AddUsersObj.Password = this.employeeInfo.EmployeeCode;
      axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat(this.$url, "/api/AddUsers"), this.AddUsersObj).then(function (res) {
        _this5.AddUserDialog = false;
      });
      this.usersInfo();
    },
    OpenUpdateUser: function OpenUpdateUser(item) {
      this.toUpdateObj = _objectSpread({}, item);
      this.UpdateUserDialog = true;
    },
    CloseUpdateUser: function CloseUpdateUser() {
      this.UpdateUserDialog = false;
    },
    SaveUpdateUser: function SaveUpdateUser() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("this.toUpdateObj", _this6.toUpdateObj);
                _this6.toUpdateObj.UpdatedDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
                _this6.toUpdateObj.UpdatedBy = _this6.userInfo.value[0].UserID;
                _this6.toUpdateObj.Password = _this6.employeeInfo.EmployeeCode;
                _context.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat(_this6.$url, "/api/UpdateUsers"), _this6.toUpdateObj).then(function (res) {
                  _this6.UpdateUserDialog = false;

                  if (_this6.toUpdateObj.UserID === _this6.toUpdateObj.UpdatedBy) {
                    _this6.$store.commit("setUserLevel", _this6.toUpdateObj.UserLevel);
                  }
                });

              case 6:
                _this6.usersInfo();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
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
                _this7.toDeleteObj = _objectSpread({}, item);
                _this7.toDeleteObj.DeletedDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
                axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat(_this7.$url, "/api/softDeleteUsers"), _this7.toDeleteObj).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(res) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _this7.usersInfo();

                            _context2.next = 3;
                            return new Promise(function (resolve) {
                              return setTimeout(resolve, 2000);
                            });

                          case 3:
                            _this7.loadingdelete = false;
                            _this7.deleteDialog = false;

                          case 5:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    EmployeeInfo: function EmployeeInfo() {
      var _this8 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(this.EmployeeInfoURL, "/").concat(this.AddUsersObj.UserID), this.HeadersConfig).then(function (res) {
        if (res.data[0]) {
          //pag may laman
          _this8.employeeInfo = res.data[0];
        }
      });
    }
  }),
  watch: {
    AddUserDialog: function AddUserDialog(val) {
      if (val) {
        this.AddUsersObj.UserID = null;
        this.AddUsersObj.AreaID = null;
        this.AddUsersObj.UserLevel = null;
        this.employeeInfo.EmployeeName = null;
        this.employeeInfo.EmployeeCode = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./users.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/users.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/users.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _users_vue_vue_type_template_id_702ca2cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.vue?vue&type=template&id=702ca2cd& */ "./resources/js/components/users.vue?vue&type=template&id=702ca2cd&");
/* harmony import */ var _users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.vue?vue&type=script&lang=js& */ "./resources/js/components/users.vue?vue&type=script&lang=js&");
/* harmony import */ var _users_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/users.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _users_vue_vue_type_template_id_702ca2cd___WEBPACK_IMPORTED_MODULE_0__.render,
  _users_vue_vue_type_template_id_702ca2cd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/users.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/users.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./users.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/users.vue?vue&type=template&id=702ca2cd&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/users.vue?vue&type=template&id=702ca2cd& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_702ca2cd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_702ca2cd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_702ca2cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./users.vue?vue&type=template&id=702ca2cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users.vue?vue&type=template&id=702ca2cd&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users.vue?vue&type=template&id=702ca2cd&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users.vue?vue&type=template&id=702ca2cd& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                    [_vm._v("User Maintenance")]
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
                                        return _vm.OpenAddUser()
                                      },
                                    },
                                  },
                                  on
                                ),
                                [
                                  _c("v-icon", [_vm._v(" mdi-plus ")]),
                                  _vm._v(" ADD\n            "),
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
                        _vm._v(" Add User "),
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
                  _c("th", [_vm._v("USERS")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("EMPLOYEE NAME")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("EMPLOYEE CODE")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("USER LEVEL")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("AREA ASSIGN")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("ACTIONS")]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.SearchingPatrol, function (item, i) {
                  return _c("tr", { key: i }, [
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
                                  item.UserID +
                                  ".jpg",
                              },
                            }),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.EmployeeName))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.UserID))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.Users_Rights))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(item.Area ? item.Area : "NO AREA ASSIGNMENT")
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
                                                return _vm.OpenUpdateUser(item)
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
          attrs: { width: "450", persistent: "" },
          model: {
            value: _vm.AddUserDialog,
            callback: function ($$v) {
              _vm.AddUserDialog = $$v
            },
            expression: "AddUserDialog",
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
                      _vm._v("Add User\n          "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "red", icon: "" },
                          on: {
                            click: function ($event) {
                              return _vm.CloseAddUser()
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
                              label: "User ID",
                            },
                            on: {
                              keyup: function ($event) {
                                return _vm.EmployeeInfo()
                              },
                            },
                            model: {
                              value: _vm.AddUsersObj.UserID,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddUsersObj, "UserID", $$v)
                              },
                              expression: "AddUsersObj.UserID",
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
                              value: _vm.AddUsersObj.AreaID,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddUsersObj, "AreaID", $$v)
                              },
                              expression: "AddUsersObj.AreaID",
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
                              label: "Password",
                              type: (_vm.show = "password"),
                            },
                            model: {
                              value: _vm.employeeInfo.EmployeeCode,
                              callback: function ($$v) {
                                _vm.$set(_vm.employeeInfo, "EmployeeCode", $$v)
                              },
                              expression: "employeeInfo.EmployeeCode",
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
                              dense: "",
                              outlined: "",
                              items: _vm.GetRights,
                              "item-text": "Users_Rights",
                              label: "User Level",
                            },
                            model: {
                              value: _vm.AddUsersObj.UserLevel,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddUsersObj, "UserLevel", $$v)
                              },
                              expression: "AddUsersObj.UserLevel",
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
                              return _vm.SaveUsers()
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
          attrs: { width: "450", persistent: "" },
          model: {
            value: _vm.UpdateUserDialog,
            callback: function ($$v) {
              _vm.UpdateUserDialog = $$v
            },
            expression: "UpdateUserDialog",
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
                      _vm._v("Update User\n          "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "red", icon: "" },
                          on: {
                            click: function ($event) {
                              return _vm.CloseUpdateUser()
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
                              label: "User ID",
                              readonly: "",
                            },
                            model: {
                              value: _vm.toUpdateObj.UserID,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "UserID", $$v)
                              },
                              expression: "toUpdateObj.UserID",
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
                              readonly: "",
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
                              dense: "",
                              outlined: "",
                              items: _vm.GetAreasTable,
                              "item-text": "Area",
                              "item-value": "AreaID",
                              label: "Area",
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
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              outlined: "",
                              label: "Password",
                              type: "password",
                            },
                            model: {
                              value: _vm.toUpdateObj.Password,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "Password", $$v)
                              },
                              expression: "toUpdateObj.Password",
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
                              dense: "",
                              outlined: "",
                              items: _vm.GetRights,
                              "item-text": "Users_Rights",
                              "item-value": "UserLevel",
                              label: "User Level",
                            },
                            model: {
                              value: _vm.toUpdateObj.UserLevel,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "UserLevel", $$v)
                              },
                              expression: "toUpdateObj.UserLevel",
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
                            color: "#FFD966",
                            dense: "",
                            type: "submit",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.SaveUpdateUser()
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