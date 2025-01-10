"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["HazardPatrolMonitoring"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HazardPatrolMonitoring.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HazardPatrolMonitoring.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var image_to_base64_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! image-to-base64/browser */ "./node_modules/image-to-base64/browser.js");
/* harmony import */ var image_to_base64_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(image_to_base64_browser__WEBPACK_IMPORTED_MODULE_5__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__.pdfMake.vfs;




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    propsImageBase64: {
      type: Array
    }
  },
  data: function data() {
    var _ref;

    return _ref = {
      header_API: "db588403f0a1d3b897442a28724166b4",
      emailDisable: true,
      checkboxArr: [],
      isLoading: false,
      isActive: false,
      menu1: null,
      menu2: null,
      menu3: null,
      menu1Update: null,
      menu2Update: null,
      deleteDialog: false,
      loadingdelete: false,
      GetYear: "",
      GetMonth: "",
      PatrolTable: [],
      Search: "",
      toDate: "",
      fromDate: "",
      dateConfirm: "",
      newArray: [],
      vmod_fromDate: false,
      vmod_sumtoDate: false,
      vmod_date: false,
      AddRecord: false,
      UpdateRecord: false,
      toUpdateObj: {},
      file: null,
      image: null,
      file2: null,
      image2: null,
      AreasTable: [],
      ReasonTable: [],
      infoData: [],
      CategoriesTable: [],
      StatusTable: [],
      DeptTable: [],
      deptList: [],
      SafetyOfficerTable: [],
      EmployeeInfoURL: "http://hrd-adminweb/api/basicinfo",
      HeadersConfig: {
        headers: {
          "master-api": "db588403f0a1d3b897442a28724166b4"
        }
      },
      statusItems: [{
        name: "Pending",
        id: "Pending"
      }, {
        name: "On-going",
        id: "On-going"
      }, {
        name: "Closed",
        id: "Closed"
      }],
      employeeInfo: {},
      AddpatrolsObj: {},
      toConfirmObj: {},
      SearchArea: "",
      SearchCategory: "",
      SearchDepartment: "",
      SearchStatus: "",
      newControlNo: "",
      NewCompanyID: ""
    }, _defineProperty(_ref, "GetYear", moment__WEBPACK_IMPORTED_MODULE_4___default()().format("YY")), _defineProperty(_ref, "GetMonth", moment__WEBPACK_IMPORTED_MODULE_4___default()().format("MM")), _defineProperty(_ref, "AddpatrolsObj2", {}), _ref;
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.fromDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().format("YYYY-MM-DD");
              _this.toDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().format("YYYY-MM-DD");
              _context.next = 4;
              return Promise.all([_this.getPatrolViewByDate(), _this.getSafetOfficer(), _this.AreasInfo(), _this.CategoriesInfo(), _this.chooseDept(), _this.GetStatus(), _this.GetAllDeptAndSection() // this.GetDept();
              ]);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  //end of created
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapState)(["userInfo"])), {}, {
    SearchingPatrol: function SearchingPatrol() {
      var _this2 = this;

      return this.PatrolTable.filter(function (item) {
        if (_this2.Search && !Object.values(item).some(function (val) {
          return String(val).toLowerCase().includes(_this2.Search.toLowerCase());
        })) {
          return false;
        }

        if (_this2.SearchStatus && item.StatusID !== _this2.SearchStatus) {
          return false;
        }

        if (_this2.SearchArea && item.AreaID !== _this2.SearchArea) {
          return false;
        }

        if (_this2.SearchCategory && item.CatID !== _this2.SearchCategory) {
          return false;
        }

        if (_this2.SearchDepartment && item.DepartmentID !== _this2.SearchDepartment) {
          return false;
        }

        if (_this2.dateConfirm) {
          if (item.ConfirmedDate) {
            item.ConfirmedDate = item.ConfirmedDate.slice(0, 10);

            if (item.ConfirmedDate !== _this2.dateConfirm) {
              return false;
            }
          } else {
            return false;
          }
        }

        return true;
      });
    }
  }),
  methods: {
    getFromMyDBDepartment: function getFromMyDBDepartment() {},
    GetAllDeptAndSection: function GetAllDeptAndSection() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var userCompCode;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userCompCode = _this3.userInfo.value[0].CompanyCode === "002" ? "20" : "30";
                axios__WEBPACK_IMPORTED_MODULE_3___default().get("http://hrd-adminweb/api/company/department/section/".concat(userCompCode), _this3.HeadersConfig).then(function (res) {
                  var result = res.data.reduce(function (accumulator, current) {
                    var departmentName = current.DepartmentName; // Create an empty object

                    var sectionInfo = {}; // Set the value with the key as SectionCode

                    sectionInfo[current.SectionCode] = current.SectionName;

                    if (!accumulator[departmentName]) {
                      accumulator[departmentName] = [sectionInfo];
                    } else {
                      accumulator[departmentName].push(sectionInfo);
                    }

                    return accumulator;
                  }, {});
                  console.log(result);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    send_email_to_many: function send_email_to_many() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _iterator, _step, data, res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.isLoading = true;
                _iterator = _createForOfIteratorHelper(_this4.checkboxArr);
                _context3.prev = 2;

                _iterator.s();

              case 4:
                if ((_step = _iterator.n()).done) {
                  _context3.next = 18;
                  break;
                }

                data = _step.value;
                _context3.prev = 6;
                _context3.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(_this4.$url, "/api/send_email"), {
                  ControlNo: data.ControlNo,
                  EmailSender: data.EmailSender
                });

              case 9:
                res = _context3.sent;

                if (res.data.error) {
                  _this4.$toast.warning(res.data.error, "Caution", {
                    position: "topRight",
                    timeout: 2000,
                    color: "#FF0000"
                  });
                } else if (res.data.success) {
                  _this4.$toast.success(res.data.success, "Success!", {
                    position: "topRight",
                    timeout: 2000,
                    color: "#FFD966"
                  });
                }

                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](6);
                console.error(_context3.t0);

              case 16:
                _context3.next = 4;
                break;

              case 18:
                _context3.next = 23;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t1 = _context3["catch"](2);

                _iterator.e(_context3.t1);

              case 23:
                _context3.prev = 23;

                _iterator.f();

                return _context3.finish(23);

              case 26:
                _context3.next = 28;
                return _this4.getPatrolViewByDate();

              case 28:
                _this4.checkboxArr = [];
                _this4.isLoading = false;

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 20, 23, 26], [6, 13]]);
      }))();
    },
    addToArray: function addToArray(item) {
      item.EmailSender = this.userInfo.value[0].UserID; // Find the index of "item" in "checkboxArr" array

      var index = this.checkboxArr.indexOf(item); // Check if "item" is found in "checkboxArr"

      if (index > -1) {
        // If "item" exists, remove it from "checkboxArr"
        this.checkboxArr.splice(index, 1);
      } else {
        // If "item" doesn't exist, add it to "checkboxArr"
        this.checkboxArr.push(item);
      } // Check if there is at least one element with "Status" equal to "Closed" in "checkboxArr"


      var hasClosedStatus = this.checkboxArr.some(function (el) {
        return el.Status === "Closed";
      }); // Set "emailDisable" based on conditions

      this.emailDisable = hasClosedStatus || this.checkboxArr.length === 0;
    },
    AddObj: function AddObj(item) {
      this.AddpatrolsObj.EmployeeCode = item.EmployeeCode;
      this.AddpatrolsObj.Area = item.Area;
    },
    UpdateRecordSave: function UpdateRecordSave() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var handleFileUploadAndMove;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // FIRST PICTURE --------------------
                handleFileUploadAndMove = /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(fileRef, filenameProp, pictureProp, typeSuffix) {
                    var file, formData, response;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            file = _this5.$refs[fileRef].files[0];

                            if (!file) {
                              _context4.next = 25;
                              break;
                            }

                            formData = new FormData();
                            formData.append("file", file);
                            formData.append("type", typeSuffix);
                            _context4.prev = 5;
                            _context4.next = 8;
                            return axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(_this5.$url, "/api/upload"), formData);

                          case 8:
                            response = _context4.sent;
                            _this5.toUpdateObj[filenameProp] = response.data.filename;
                            _this5.toUpdateObj[pictureProp] = "public\\pictures\\".concat(_this5.toUpdateObj.ControlNo, "\\").concat(response.data.filename);
                            _context4.prev = 11;
                            _context4.next = 14;
                            return axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(_this5.$url, "/api/move"), {
                              oldPath: response.data.path,
                              newPath: _this5.toUpdateObj[pictureProp]
                            });

                          case 14:
                            console.log("File moved successfully, ".concat(fileRef, "!"));
                            _context4.next = 20;
                            break;

                          case 17:
                            _context4.prev = 17;
                            _context4.t0 = _context4["catch"](11);
                            console.error(_context4.t0);

                          case 20:
                            _context4.next = 25;
                            break;

                          case 22:
                            _context4.prev = 22;
                            _context4.t1 = _context4["catch"](5);
                            console.error(_context4.t1);

                          case 25:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[5, 22], [11, 17]]);
                  }));

                  return function handleFileUploadAndMove(_x, _x2, _x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }(); // FIRST PICTURE (BEFORE) --------------------


                _context5.next = 3;
                return handleFileUploadAndMove("file", "HazardPictureFilename", "HazardPicture", "-BEFORE");

              case 3:
                _context5.next = 5;
                return handleFileUploadAndMove("file2", "AfterPictureFilename", "AfterPicture", "-AFTER");

              case 5:
                _context5.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(_this5.$url, "/api/postUpdateRecord"), _this5.toUpdateObj).then(function (res) {
                  _this5.getPatrolViewByDate();

                  _this5.UpdateRecord = false;
                });

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    saveConfirmed: function saveConfirmed(item) {
      var _this6 = this;

      // console.log('item',item)
      if (!this.isActive) {
        this.isActive = true;
        this.toConfirmObj.ControlNo = item.ControlNo;
        this.toConfirmObj.ConfirmedDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.fromDate).format("YYYY-MM-DD"); // this.toConfirmObj.StatusID = 4

        axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(this.$url, "/api/confirmedHPM"), this.toConfirmObj).then(function (res) {
          _this6.getPatrolViewByDate();

          _this6.$toast.success("Record Confirmed", "Success!", {
            position: "bottomRight",
            color: "#FFD966",
            timeout: 1800
          }); // console.log(
          //   "Confirmed! , Status 4",
          //   this.toConfirmObj.ControlNo,
          //   this.toConfirmObj.StatusID
          // );

        });
      } else {
        this.isActive = false;
        this.toConfirmObj.ControlNo = item.ControlNo;
        this.toConfirmObj.ConfirmedDate = null; // this.toConfirmObj.StatusID = 2;

        axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(this.$url, "/api/confirmedHPM"), this.toConfirmObj).then(function (res) {
          _this6.getPatrolViewByDate(); // console.log(
          //   "Unconfirmed!, Status 2",
          //   this.toConfirmObj.ControlNo,
          //   this.toConfirmObj.StatusID
          // );

        });
      }
    },
    // saveUnconfirmed(item){
    //   this.toConfirmObj.ControlNo = item;
    //   axios.post("api/unconfirmedHPM", this.toConfirmObj).then((res) => {
    //     this.getPatrolViewByDate();
    //     console.log('Confirmed!',this.toConfirmObj.ControlNo);
    //   });
    // },
    img: function img(_img) {
      if (_img != null) {
        var link = _img.replace("\\hrdapps9\\HazardPatrolMonitoring\\", "");

        return "http://hrdapps9:8888/ftp/pics/".concat(link);
      } else {
        return "http://hrdapps9:8888/ftp/pics/npa.jpg";
      }
    },
    EmployeeInfo: function EmployeeInfo() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(_this7.EmployeeInfoURL, "/").concat(_this7.AddpatrolsObj.EmployeeCode), _this7.HeadersConfig).then(function (res) {
                  if (res.data[0]) {
                    //pag may laman
                    _this7.employeeInfo = res.data[0];
                  }
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getEmpInfo: function getEmpInfo() {
      var _this8 = this;

      if (this.AddpatrolsObj.EmployeeCode != "") {
        axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(this.$url, "/api/SafetyOfficerInfo/").concat(this.AddpatrolsObj.EmployeeCode)).then(function (res) {
          _this8.infoData = res.data;

          if (_this8.infoData.length == 1) {
            _this8.infoData.map(function (r) {
              _this8.AddpatrolsObj.EmployeeCode = r.EmployeeCode;
              _this8.AddpatrolsObj.AreaID = r.AreaID;
              return _this8.AddpatrolsObj;
            });
          } else if (_this8.infoData.length == 0) {
            _this8.AddpatrolsObj.EmployeeCode = "";
            _this8.AddpatrolsObj.AreaID = "";
            return _this8.AddpatrolsObj;
          }
        });
      }
    },
    getSafetOfficer: function getSafetOfficer() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(_this9.$url, "/api/SafetyOfficerInfo")).then(function (res) {
                  _this9.SafetyOfficerTable = res.data.filter(function (rec) {
                    return rec.CompanyCode == _this9.userInfo.value[0].CompanyCode;
                  });
                });

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    GetDept: function GetDept() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!(_this10.AddpatrolsObj.AreaID == 9)) {
                  _context8.next = 3;
                  break;
                }

                _context8.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(_this10.$url, "/api/DeptInfo")).then(function (res) {
                  _this10.DeptTable = res.data.filter(function (rec) {
                    return rec.FSECompanyCode == _this10.userInfo.value[0].CompanyCode;
                  });
                });

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    chooseDept: function chooseDept() {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        var myCompCode;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (_this11.deptList.length) {
                  _context9.next = 5;
                  break;
                }

                _this11.isLoading = true;
                myCompCode = _this11.userInfo.value[0].CompanyCode === "003" ? 30 : 20;
                _context9.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_3___default().get("http://hrd-adminweb/api/company/department/".concat(myCompCode), {
                  headers: {
                    "master-api": _this11.header_API
                  }
                }).then(function (res) {
                  return _this11.deptList = res.data.filter(function (rec) {
                    return rec.DeletedDate == null;
                  });
                })["finally"](function () {
                  return _this11.isLoading = false;
                });

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    GetStatus: function GetStatus() {
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(_this12.$url, "/api/StatusInfo")).then(function (res) {
                  _this12.StatusTable = res.data.filter(function (rec) {
                    return rec.DeletedDate == null;
                  });
                });

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    GetReason: function GetReason() {
      var _this13 = this;

      axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(this.$url, "/api/ReasonInfo")).then(function (res) {
        _this13.ReasonTable = res.data;
      });
    },
    AreasInfo: function AreasInfo() {
      var _this14 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(_this14.$url, "/api/AreasInfo")).then(function (res) {
                  _this14.AreasTable = res.data.filter(function (rec) {
                    return rec.CompanyCode == _this14.userInfo.value[0].CompanyCode && rec.DeletedDate == null;
                  });
                });

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    CategoriesInfo: function CategoriesInfo() {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(_this15.$url, "/api/CategoriesInfo")).then(function (res) {
                  _this15.CategoriesTable = res.data.filter(function (rec) {
                    return rec.CompanyCode == _this15.userInfo.value[0].CompanyCode && rec.DeletedDate == null;
                  });
                });

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    filterSearch: function filterSearch(val) {
      var _this16 = this;

      axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(this.$url, "/api/Patrolview/").concat(val)).then(function (res) {
        _this16.PatrolTable = res.data;
      });
    },
    getPatrolViewByDate: function getPatrolViewByDate() {
      var _this17 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee16() {
        var dateNow;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _this17.EmployeeInfo();

                if (_this17.fromDate && _this17.toDate) {
                  dateNow = {
                    from: moment__WEBPACK_IMPORTED_MODULE_4___default()(_this17.fromDate).format("YYYY/MM/DD 00:00:00"),
                    to: moment__WEBPACK_IMPORTED_MODULE_4___default()(_this17.toDate).format("YYYY/MM/DD 23:59:59"),
                    company: _this17.userInfo.value[0].CompanyCode
                  };
                  axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(_this17.$url, "/api/getPatrolViewByDate"), dateNow).then( /*#__PURE__*/function () {
                    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee15(res) {
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee15$(_context15) {
                        while (1) {
                          switch (_context15.prev = _context15.next) {
                            case 0:
                              _context15.next = 2;
                              return Promise.all(res.data.map( /*#__PURE__*/function () {
                                var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee13(item) {
                                  var result;
                                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee13$(_context13) {
                                    while (1) {
                                      switch (_context13.prev = _context13.next) {
                                        case 0:
                                          _context13.next = 2;
                                          return axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(_this17.$url, "/api/getEmailDate"), {
                                            controlNo: item.ControlNo
                                          });

                                        case 2:
                                          result = _context13.sent;
                                          return _context13.abrupt("return", result.data[0] ? _objectSpread(_objectSpread({}, item), result.data[0]) : _objectSpread(_objectSpread({}, item), {
                                            emaildate1: null,
                                            emaildate2: null,
                                            emaildate3: null
                                          }));

                                        case 4:
                                        case "end":
                                          return _context13.stop();
                                      }
                                    }
                                  }, _callee13);
                                }));

                                return function (_x6) {
                                  return _ref4.apply(this, arguments);
                                };
                              }()));

                            case 2:
                              res.data = _context15.sent;
                              // console.log(res.data);
                              _this17.PatrolTable = res.data.filter( /*#__PURE__*/function () {
                                var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee14(rec) {
                                  var hold, hold2;
                                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee14$(_context14) {
                                    while (1) {
                                      switch (_context14.prev = _context14.next) {
                                        case 0:
                                          rec.CompanyID == _this17.userInfo.value[0].CompanyCode;
                                          hold = "";

                                          if (rec.HazardPicture != null) {
                                            hold = rec.HazardPicture.replace("\\\\hrdapps9\\HazardPatrolMonitoring\\", "http://hrdapps9:8888/ftp/pics/");
                                          } else {
                                            hold = "http://hrdapps9:8888/ftp/pics/npa.jpg";
                                          }

                                          hold2 = "";

                                          if (rec.AfterPicture != null) {
                                            hold2 = rec.AfterPicture.replace("\\\\hrdapps9\\HazardPatrolMonitoring\\", "http://hrdapps9:8888/ftp/pics/");
                                          } else {
                                            hold2 = "http://hrdapps9:8888/ftp/pics/npa.jpg";
                                          }

                                          _context14.next = 7;
                                          return image_to_base64_browser__WEBPACK_IMPORTED_MODULE_5___default()("".concat(hold)).then(function (response) {
                                            rec.holdData = "data:image/png;base64,".concat(response);
                                          });

                                        case 7:
                                          _context14.next = 9;
                                          return image_to_base64_browser__WEBPACK_IMPORTED_MODULE_5___default()("".concat(hold2)).then(function (response) {
                                            rec.holdData2 = "data:image/png;base64,".concat(response);
                                          });

                                        case 9:
                                          return _context14.abrupt("return", rec);

                                        case 10:
                                        case "end":
                                          return _context14.stop();
                                      }
                                    }
                                  }, _callee14);
                                }));

                                return function (_x7) {
                                  return _ref5.apply(this, arguments);
                                };
                              }());

                            case 4:
                            case "end":
                              return _context15.stop();
                          }
                        }
                      }, _callee15);
                    }));

                    return function (_x5) {
                      return _ref3.apply(this, arguments);
                    };
                  }());
                } // this.EmployeeInfo();


                _this17.GetStatus(); // this.GetDept();


                _this17.chooseDept();

              case 4:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }))();
    },
    AddPatrolRecord: function AddPatrolRecord() {
      this.AreasInfo();
      this.CategoriesInfo();
      this.chooseDept();
      this.GetReason();
      this.AddRecord = true;
    },
    // NOTE - CLEAR ALL
    clearAll: function clearAll() {
      // console.log(document.getElementById("file1"));
      // if (document.getElementById("file1").value) {
      //   document.getElementById("file1").value = "";
      // }
      // if (document.getElementById("file2").value) {
      //   document.getElementById("file2").value = "";
      // }
      this.$refs.file.value = "";
      this.$refs.file2.value = "";
      this.image = null;
      this.image2 = null;
      this.AddpatrolsObj = {};
      this.toUpdateObj = {};
      this.UpdateRecord = false;
      this.AddRecord = false;
    },
    SaveAddRecord: function SaveAddRecord() {
      var _this18 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee19() {
        var handleFileOperation;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _this18.isLoading = true; // console.log("dito");

                _this18.AddpatrolsObj.CreatedDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().format("YYYY-MM-DD");
                _this18.AddpatrolsObj.UpdatedDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().format("YYYY-MM-DD");
                _this18.AddpatrolsObj.UpdatedBy = _this18.userInfo.value[0].UserID;
                _this18.AddpatrolsObj.CompanyID = _this18.userInfo.value[0].CompanyCode;
                _this18.AddpatrolsObj.FSECompanyCode = _this18.userInfo.value[0].CompanyCode;
                /* ----------------------------- UPLOADING PHOTO ---------------------------- */

                _context19.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(_this18.$url, "/api/generateControlNo"), _this18.AddpatrolsObj).then(function (res) {
                  _this18.AddpatrolsObj.controlNo = res.data;
                });

              case 8:
                handleFileOperation = /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee17(fileRef, propName1, propName2) {
                    var file, formData, response;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee17$(_context17) {
                      while (1) {
                        switch (_context17.prev = _context17.next) {
                          case 0:
                            file = _this18.$refs[fileRef].files[0];
                            formData = new FormData();
                            formData.append("file", file);
                            _context17.prev = 3;
                            _context17.next = 6;
                            return axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(_this18.$url, "/api/upload"), formData);

                          case 6:
                            response = _context17.sent;
                            // Move file to another folder
                            _this18.AddpatrolsObj[propName1] = response.data.filename;
                            _this18.AddpatrolsObj[propName2] = "public\\pictures\\".concat(_this18.AddpatrolsObj.controlNo, "\\").concat(response.data.filename);
                            _context17.prev = 9;
                            _context17.next = 12;
                            return axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(_this18.$url, "/api/move"), {
                              oldPath: response.data.path,
                              newPath: _this18.AddpatrolsObj[propName2],
                              mode: response.data.mode
                            });

                          case 12:
                            console.log("File moved successfully, ".concat(fileRef, "!"));
                            _context17.next = 18;
                            break;

                          case 15:
                            _context17.prev = 15;
                            _context17.t0 = _context17["catch"](9);
                            console.log(_context17.t0);

                          case 18:
                            _context17.next = 23;
                            break;

                          case 20:
                            _context17.prev = 20;
                            _context17.t1 = _context17["catch"](3);
                            console.log(_context17.t1);

                          case 23:
                          case "end":
                            return _context17.stop();
                        }
                      }
                    }, _callee17, null, [[3, 20], [9, 15]]);
                  }));

                  return function handleFileOperation(_x8, _x9, _x10) {
                    return _ref6.apply(this, arguments);
                  };
                }(); // FIRST PICTURE --------------------


                _context19.next = 11;
                return handleFileOperation("file", "HazardPictureFilename", "HazardPicture");

              case 11:
                _context19.next = 13;
                return handleFileOperation("file2", "AfterPictureFilename", "AfterPicture");

              case 13:
                _context19.next = 15;
                return axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(_this18.$url, "/api/postAddRecord"), _this18.AddpatrolsObj).then( /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee18(res) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee18$(_context18) {
                      while (1) {
                        switch (_context18.prev = _context18.next) {
                          case 0:
                            _context18.next = 2;
                            return _this18.getPatrolViewByDate();

                          case 2:
                            _context18.next = 4;
                            return axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(_this18.$url, "/api/send_email"), {
                              ControlNo: res.data
                            }).then(function () {// console.log(rec.data);
                            });

                          case 4:
                          case "end":
                            return _context18.stop();
                        }
                      }
                    }, _callee18);
                  }));

                  return function (_x11) {
                    return _ref7.apply(this, arguments);
                  };
                }())["finally"](function () {
                  _this18.AddRecord = false;
                });

              case 15:
                _this18.isLoading = false;

              case 16:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }))();
    },
    OpenAddRecordUpdate: function OpenAddRecordUpdate(item) {
      item.FollowUpDates = [item.emaildate1, item.emaildate2, item.emaildate3].filter(function (date) {
        return date;
      }).map(function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format("YYYY-MM-DD");
      }).join("\n");
      this.AreasInfo();
      this.CategoriesInfo();
      this.chooseDept();
      this.GetReason();
      this.GetStatus();

      if (item.ConfirmedDate == null) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }

      this.toUpdateObj = _objectSpread({}, item);
      this.toUpdateObj.ImplementationDate = this.toUpdateObj.ImplementationDate.slice(0, 10);
      this.toUpdateObj.InspectionDate = this.toUpdateObj.InspectionDate.slice(0, 10); // this.toUpdateObj.TargetDate = this.toUpdateObj.TargetDate.slice(0, 10);

      this.image = this.toUpdateObj.holdData;
      this.image2 = this.toUpdateObj.holdData2;
      this.UpdateRecord = true; // this.toConfirmObj.ConfirmedDate = this.toUpdateObj.ConfirmedDate
    },
    // SaveUpdateDept() {
    //   this.toUpdateObj.UpdatedDate = moment().format("YYYY-MM-DD");
    //   this.toUpdateObj.UpdatedBy = this.userInfo.value[0].UserID;
    //   axios.post("api/postUpdateRecord", this.toUpdateObj).then((res) => {
    //     this.UpdateRecord = false;
    //     this.getPatrolViewByDate();
    //   });
    // },
    onFileChange: function onFileChange() {
      var _this19 = this;

      var reader = new FileReader();
      reader.readAsDataURL(this.$refs.file.files[0]);

      reader.onload = function (e) {
        _this19.image = e.target.result;
      };
    },
    onFileChange2: function onFileChange2() {
      var _this20 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee20() {
        var reader;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                reader = new FileReader();
                reader.readAsDataURL(_this20.$refs.file2.files[0]);

                reader.onload = function (e) {
                  _this20.image2 = e.target.result;
                };

              case 3:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }))();
    },
    Delete: function Delete(item) {
      var _this21 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee21() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _this21.loadingdelete = true;
                _context21.next = 3;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 2000);
                });

              case 3:
                _this21.toDeleteObj = _objectSpread({}, item);
                _this21.toDeleteObj.DeletedDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().format("YYYY-MM-DD");
                axios__WEBPACK_IMPORTED_MODULE_3___default().post("".concat(_this21.$url, "/api/softDeleteHPM"), _this21.toDeleteObj).then(function (res) {
                  _this21.getPatrolViewByDate();

                  _this21.loadingdelete = false;
                  _this21.deleteDialog = false; // console.log("deleted");
                });

              case 6:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }))();
    },
    pushItems: function pushItems(table1, r, ctr) {
      var _this22 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee22() {
        var headers, body;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (ctr % 9 == 0) {
                  // header
                  headers = ["Control No", "Date of Inspection", "Department", "Observation", "Hazard Picture", "Immediate Action Taken", "Corrective Action", "After Picture", "Date Implemented"];

                  if (_this22.userInfo.value[0].CompanyCode == "003") {
                    headers.splice(2, 0, "Area");
                    headers.splice(4, 0, "Hazard Category");
                    headers.push("Status", "Days Resolved");
                  } else {
                    headers.unshift("SAFETY OFFICER");
                  }

                  table1.body.push(headers.map(function (header) {
                    return {
                      text: header,
                      alignment: "center",
                      bold: true,
                      fillColor: "#68B984",
                      color: "black",
                      fontSize: 12,
                      pageBreak: "before"
                    };
                  }));
                } // content


                body = [{
                  text: r.ControlNo,
                  fontSize: 9
                }, {
                  text: r.InspectionDate.split(" ")[0],
                  fontSize: 9
                }, {
                  text: r.DepartmentName + "/" + r.Location,
                  fontSize: 9
                }, {
                  text: r.Observation,
                  fontSize: 9
                }, {
                  image: r.holdData,
                  width: 70,
                  height: 70,
                  alignment: "center"
                }, {
                  text: r.ImmediateActionTaken,
                  fontSize: 9
                }, {
                  text: r.CorrectiveAction,
                  fontSize: 9
                }, {
                  image: r.holdData2,
                  width: 70,
                  height: 70,
                  alignment: "center"
                }, {
                  text: r.ImplementationDate.split(" ")[0],
                  fontSize: 9
                }];

                if (_this22.userInfo.value[0].CompanyCode == "003") {
                  body.splice(2, 0, {
                    text: r.Area,
                    fontSize: 9
                  });
                  body.splice(4, 0, {
                    text: r.CatName,
                    fontSize: 9
                  });
                  body.push({
                    text: r.Status,
                    fontSize: 9
                  });
                  body.push({
                    text: r.UpdatedBy,
                    fontSize: 9
                  });
                } else {
                  body.unshift({
                    text: r.EmployeeName,
                    fontSize: 9
                  });
                }

                table1.body.push(body);

              case 4:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22);
      }))();
    },
    printPDF: function printPDF() {
      var _this23 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee24() {
        var table1, generateHeader, hrdContent, htiContent, arr, documentHeader, allAreasSame, PDFHeader, compHeader, dept, docDefinition;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                table1 = {
                  body: []
                }; // Function to generate header

                generateHeader = function generateHeader(headers) {
                  return headers.map(function (header) {
                    return {
                      text: header,
                      alignment: "center",
                      bold: true,
                      fillColor: "#68B984",
                      color: "black",
                      fontSize: 12
                    };
                  });
                }; // Content


                hrdContent = ["Control No", "Date of Inspection", "Area", "Department / Location", "Hazard Category", "Observation", "Hazard Picture", "Immediate Action Taken", "Corrective Action", "After Picture", "Date Implemented", "Status", "Days Resolved"];
                htiContent = ["SAFETY OFFICER", "Control No", "Date of Inspection", "Department / Location", "Observation", "Hazard Picture", "Immediate Action Taken", "Corrective Action", "After Picture", "Date Implemented"];

                if (_this23.userInfo.value[0].CompanyCode == "003") {
                  // HRD
                  table1.widths = [75, 75, 75, 75, 75, 100, 75, 100, 80, 75, 75, 75, 75];
                  table1.body.push(generateHeader(hrdContent));
                } else {
                  // HTI
                  table1.widths = [80, 90, 90, 100, 130, 120, 130, 130, 120, 70];
                  table1.body.push(generateHeader(htiContent));
                } // [...this.PatrolTable].filter(async (r) => {
                // if (this.checkboxArr.length > 0) {
                //   [...this.checkboxArr].filter(async (r) => {
                //     ctr++;
                //     await this.pushItems(table1, r, ctr);
                //   });
                // } else {
                //   [...this.PatrolTable].filter(async (r) => {
                //     ctr++;
                //     await this.pushItems(table1, r, ctr);
                //   });
                // }
                // let arr = this.checkboxArr.length > 0 ? this.checkboxArr : this.PatrolTable;


                arr = _this23.checkboxArr.length > 0 ? _this23.checkboxArr : _this23.SearchingPatrol; // var ctr = 0;

                _context24.next = 8;
                return Promise.all(arr.map( /*#__PURE__*/function () {
                  var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee23(r, ctr) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee23$(_context23) {
                      while (1) {
                        switch (_context23.prev = _context23.next) {
                          case 0:
                            console.log("r", r);

                            _this23.pushItems(table1, r, ++ctr);

                          case 2:
                          case "end":
                            return _context23.stop();
                        }
                      }
                    }, _callee23);
                  }));

                  return function (_x12, _x13) {
                    return _ref8.apply(this, arguments);
                  };
                }()));

              case 8:
                // [...arr].filter(async (r) => {
                //   ctr++;
                //   await this.pushItems(table1, r, ctr);
                // });
                // NOTE - end filter
                documentHeader = _this23.userInfo.value[0].CompanyCode == "003" ? [{
                  text: "Document No. : HFSxx-003-00",
                  italics: true,
                  color: "gray",
                  fontSize: 15
                }, {
                  text: "Revision Date : 2016/08/20",
                  italics: true,
                  color: "gray",
                  fontSize: 15
                }] : [{
                  text: "Date Covered: ",
                  fontSize: 15
                }, {
                  text: moment__WEBPACK_IMPORTED_MODULE_4___default()(_this23.fromDate).format("MMMM DD, YYYY (dddd)"),
                  fontSize: 15
                }];
                allAreasSame = arr.every(function (item, i, array) {
                  return item.Area === array[0].Area;
                }); // if (arr.length > 1) {
                //   var allAreasSame = arr.every((item, i, array) => {
                //     return item.Area === array[0].Area;
                //   });
                // } else {
                //   var allAreasSame = true;
                // }

                PDFHeader = _this23.userInfo.value[0].CompanyCode == "003" ? "SAFETY SUMMARY REPORT" : "HAZARD SUMMARY REPORT";
                compHeader = _this23.userInfo.value[0].CompanyCode == "003" ? "H.R.D. SINGAPORE PTE LTD" : allAreasSame ? arr[0].Area : "";
                dept = _this23.userInfo.value[0].CompanyCode == "003" ? "H.R.D Pte., Ltd." : "House Technology Industries Pte., Ltd.";
                docDefinition = {
                  pageSize: "A3",
                  pageOrientation: "landscape",
                  pageMargins: [15, 65, 15, 30],
                  content: [{
                    text: ""
                  }, {
                    table: {
                      widths: ["100%"],
                      body: [[{
                        table: table1,
                        body: table1.body
                      }]]
                    }
                  }],
                  header: function header() {
                    return [{
                      table: {
                        widths: ["21%", "58%", "21%"],
                        body: [[[{
                          table: {
                            headerRows: 1,
                            widths: ["100%"],
                            body: [[""], [{
                              text: compHeader,
                              fontSize: 18,
                              bold: true,
                              alignment: "center"
                            }]]
                          },
                          layout: "headerLineOnly"
                        }], [{
                          text: dept,
                          fontSize: 15,
                          alignment: "center",
                          bold: true
                        }, {
                          text: PDFHeader,
                          fontSize: 20,
                          alignment: "center",
                          bold: true
                        }], documentHeader]]
                      },
                      margin: [15, 15, 15, 0],
                      alignment: "center"
                    }];
                  },
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
                }; //LINK - end docDefinition

                _context24.next = 16;
                return pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().createPdf(docDefinition).open();

              case 16:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24);
      }))();
    } // ANCHOR - end printPDF

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HazardPatrolMonitoring.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HazardPatrolMonitoring.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\np {\r\n  font-size: 15px;\r\n  text-align: center;\r\n  font-weight: bold;\n}\n.style {\r\n  border: 1px solid black;\r\n  height: 180px;\r\n  width: 365px;\r\n  display: flex;\n}\r\n\r\n/* loader */\n.loader {\r\n  --dim: 3rem;\r\n  width: var(--dim);\r\n  height: var(--dim);\r\n  position: relative;\r\n  animation: spin988 2s linear infinite;\n}\n.loader .circle {\r\n  --color: #333;\r\n  --dim: 1.2rem;\r\n  width: var(--dim);\r\n  height: var(--dim);\r\n  background-color: var(--color);\r\n  border-radius: 50%;\r\n  position: absolute;\n}\n.loader .circle:nth-child(1) {\r\n  top: 0;\r\n  left: 0;\n}\n.loader .circle:nth-child(2) {\r\n  top: 0;\r\n  right: 0;\n}\n.loader .circle:nth-child(3) {\r\n  bottom: 0;\r\n  left: 0;\n}\n.loader .circle:nth-child(4) {\r\n  bottom: 0;\r\n  right: 0;\n}\n@keyframes spin988 {\n0% {\r\n    transform: scale(1) rotate(0);\n}\n20%,\r\n  25% {\r\n    transform: scale(1.3) rotate(90deg);\n}\n45%,\r\n  50% {\r\n    transform: scale(1) rotate(180deg);\n}\n70%,\r\n  75% {\r\n    transform: scale(1.3) rotate(270deg);\n}\n95%,\r\n  100% {\r\n    transform: scale(1) rotate(360deg);\n}\n}\r\n\r\n/* end loader */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/image-to-base64/browser.js":
/*!*************************************************!*\
  !*** ./node_modules/image-to-base64/browser.js ***!
  \*************************************************/
/***/ (function(module) {


(function(escope) {
    function base64ToBrowser(buffer) {
        return window.btoa([].slice.call(new Uint8Array(buffer)).map(function(bin) { return String.fromCharCode(bin); }).join(''));
    }

    function imageToBase64Browser(urlOrImage, param) {
        if (!('fetch' in window && 'Promise' in window)) {
            return Promise.reject('[*] image-to-base64 is not compatible with your browser.');
        }
        return fetch(urlOrImage, param || {}).then(function(response) {
            return response.arrayBuffer();
        }).then(base64ToBrowser);
    }

    if (true) {
        module.exports = imageToBase64Browser;
    } else {}
})(this);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HazardPatrolMonitoring.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HazardPatrolMonitoring.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HazardPatrolMonitoring_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HazardPatrolMonitoring.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HazardPatrolMonitoring.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HazardPatrolMonitoring_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HazardPatrolMonitoring_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/HazardPatrolMonitoring.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/HazardPatrolMonitoring.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HazardPatrolMonitoring_vue_vue_type_template_id_eeaa9dde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HazardPatrolMonitoring.vue?vue&type=template&id=eeaa9dde& */ "./resources/js/components/HazardPatrolMonitoring.vue?vue&type=template&id=eeaa9dde&");
/* harmony import */ var _HazardPatrolMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HazardPatrolMonitoring.vue?vue&type=script&lang=js& */ "./resources/js/components/HazardPatrolMonitoring.vue?vue&type=script&lang=js&");
/* harmony import */ var _HazardPatrolMonitoring_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HazardPatrolMonitoring.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/HazardPatrolMonitoring.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HazardPatrolMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HazardPatrolMonitoring_vue_vue_type_template_id_eeaa9dde___WEBPACK_IMPORTED_MODULE_0__.render,
  _HazardPatrolMonitoring_vue_vue_type_template_id_eeaa9dde___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HazardPatrolMonitoring.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/HazardPatrolMonitoring.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/HazardPatrolMonitoring.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HazardPatrolMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HazardPatrolMonitoring.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HazardPatrolMonitoring.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HazardPatrolMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/HazardPatrolMonitoring.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/HazardPatrolMonitoring.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HazardPatrolMonitoring_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HazardPatrolMonitoring.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HazardPatrolMonitoring.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/HazardPatrolMonitoring.vue?vue&type=template&id=eeaa9dde&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/HazardPatrolMonitoring.vue?vue&type=template&id=eeaa9dde& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HazardPatrolMonitoring_vue_vue_type_template_id_eeaa9dde___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HazardPatrolMonitoring_vue_vue_type_template_id_eeaa9dde___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HazardPatrolMonitoring_vue_vue_type_template_id_eeaa9dde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HazardPatrolMonitoring.vue?vue&type=template&id=eeaa9dde& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HazardPatrolMonitoring.vue?vue&type=template&id=eeaa9dde&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HazardPatrolMonitoring.vue?vue&type=template&id=eeaa9dde&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HazardPatrolMonitoring.vue?vue&type=template&id=eeaa9dde& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c("v-overlay", { attrs: { value: _vm.isLoading, "z-index": "9999" } }, [
        _c("div", { staticClass: "loader" }, [
          _c("div", { staticClass: "circle" }),
          _vm._v(" "),
          _c("div", { staticClass: "circle" }),
          _vm._v(" "),
          _c("div", { staticClass: "circle" }),
          _vm._v(" "),
          _c("div", { staticClass: "circle" }),
        ]),
      ]),
      _vm._v(" "),
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
                [
                  _c("v-autocomplete", {
                    staticStyle: { height: "50px" },
                    attrs: {
                      dense: "",
                      outlined: "",
                      clearable: "",
                      items: _vm.AreasTable,
                      "item-text": "Area",
                      "item-value": "AreaID",
                      label: "Area",
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
                [
                  _c("v-autocomplete", {
                    staticStyle: { height: "50px" },
                    attrs: {
                      dense: "",
                      items: _vm.CategoriesTable,
                      "item-text": "CatName",
                      "item-value": "CatID",
                      label: "Hazard Categories",
                      outlined: "",
                      clearable: "",
                    },
                    model: {
                      value: _vm.SearchCategory,
                      callback: function ($$v) {
                        _vm.SearchCategory = $$v
                      },
                      expression: "SearchCategory",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-autocomplete", {
                    staticStyle: { height: "50px" },
                    attrs: {
                      dense: "",
                      items: _vm.deptList,
                      "item-text": "DepartmentName",
                      "item-value": "DepartmentCode",
                      label: "Department",
                      outlined: "",
                      clearable: "",
                    },
                    model: {
                      value: _vm.SearchDepartment,
                      callback: function ($$v) {
                        _vm.SearchDepartment = $$v
                      },
                      expression: "SearchDepartment",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-autocomplete", {
                    staticStyle: { height: "50px" },
                    attrs: {
                      dense: "",
                      outlined: "",
                      items: _vm.StatusTable,
                      "item-text": "Status",
                      "item-value": "StatusID",
                      label: "Status",
                      clearable: "",
                    },
                    model: {
                      value: _vm.SearchStatus,
                      callback: function ($$v) {
                        _vm.SearchStatus = $$v
                      },
                      expression: "SearchStatus",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        "close-on-content-click": false,
                        transition: "scale-transition",
                        "offset-y": "",
                        "min-width": "200px",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function (ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-text-field",
                                _vm._g(
                                  _vm._b(
                                    {
                                      staticStyle: { height: "50px" },
                                      attrs: {
                                        dense: "",
                                        outlined: "",
                                        clearable: "",
                                        label: "Confirmed Date",
                                      },
                                      model: {
                                        value: _vm.dateConfirm,
                                        callback: function ($$v) {
                                          _vm.dateConfirm = $$v
                                        },
                                        expression: "dateConfirm",
                                      },
                                    },
                                    "v-text-field",
                                    attrs,
                                    false
                                  ),
                                  on
                                )
                              ),
                            ]
                          },
                        },
                      ]),
                      model: {
                        value: _vm.vmod_date,
                        callback: function ($$v) {
                          _vm.vmod_date = $$v
                        },
                        expression: "vmod_date",
                      },
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        on: {
                          input: function ($event) {
                            _vm.vmod_date = false
                          },
                        },
                        model: {
                          value: _vm.dateConfirm,
                          callback: function ($$v) {
                            _vm.dateConfirm = $$v
                          },
                          expression: "dateConfirm",
                        },
                      }),
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
            "v-row",
            { attrs: { dense: "" } },
            [
              _c("v-col", { attrs: { cols: "4" } }, [
                _c(
                  "div",
                  {
                    staticStyle: {
                      display: "flex",
                      "justify-content": "center",
                    },
                  },
                  [
                    _c(
                      "div",
                      {
                        staticStyle: {
                          display: "flex",
                          "flex-direction": "column",
                          "align-items": "center",
                          "margin-right": "30px",
                        },
                      },
                      [
                        _c(
                          "small",
                          {
                            staticStyle: {
                              "text-align": "center",
                              "font-weight": "bold",
                            },
                          },
                          [_vm._v("ALL")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "50px",
                              height: "50px",
                              "text-align": "center",
                              "background-color": "#c0c0c0",
                              padding: "10px 0",
                            },
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.PatrolTable.length) +
                                "\n            "
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          display: "flex",
                          "flex-direction": "column",
                          "align-items": "center",
                          "margin-right": "30px",
                        },
                      },
                      [
                        _c(
                          "small",
                          {
                            staticStyle: {
                              "text-align": "center",
                              "font-weight": "bold",
                            },
                          },
                          [_vm._v("PENDING")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "50px",
                              height: "50px",
                              "text-align": "center",
                              "background-color": "#dfe5f5",
                              padding: "10px 0",
                            },
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  _vm.PatrolTable.filter(function (res) {
                                    return res.Status == "Pending"
                                  }).length
                                ) +
                                "\n            "
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          display: "flex",
                          "flex-direction": "column",
                          "align-items": "center",
                          "margin-right": "30px",
                        },
                      },
                      [
                        _c(
                          "small",
                          {
                            staticStyle: {
                              "text-align": "center",
                              "font-weight": "bold",
                            },
                          },
                          [_vm._v("ONGOING")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "50px",
                              height: "50px",
                              "text-align": "center",
                              "background-color": "#fada5e",
                              padding: "10px 0",
                            },
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  _vm.PatrolTable.filter(function (res) {
                                    return res.Status == "On-Going"
                                  }).length
                                ) +
                                "\n            "
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          display: "flex",
                          "flex-direction": "column",
                          "align-items": "center",
                        },
                      },
                      [
                        _c(
                          "small",
                          {
                            staticStyle: {
                              "text-align": "center",
                              "font-weight": "bold",
                            },
                          },
                          [_vm._v("CLOSED")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "50px",
                              height: "50px",
                              "text-align": "center",
                              "background-color": "#d21404",
                              padding: "10px 0",
                            },
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  _vm.PatrolTable.filter(function (res) {
                                    return res.Status == "Closed"
                                  }).length
                                ) +
                                "\n            "
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "3", align: "right" } },
                [
                  _c("v-text-field", {
                    staticStyle: { "margin-top": "20px" },
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
                { attrs: { cols: "1", align: "left" } },
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
                                    staticStyle: { "margin-top": "20px" },
                                    attrs: { icon: "", small: "" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.printPDF()
                                      },
                                    },
                                  },
                                  on
                                ),
                                [
                                  _c(
                                    "v-icon",
                                    { attrs: { size: "35", color: "black" } },
                                    [_vm._v("mdi-printer")]
                                  ),
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
                        _vm._v(" Print Record "),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
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
                                    staticStyle: { "margin-top": "20px" },
                                    attrs: { icon: "", small: "" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.AddPatrolRecord()
                                      },
                                    },
                                  },
                                  on
                                ),
                                [
                                  _c(
                                    "v-icon",
                                    { attrs: { size: "35", color: "black" } },
                                    [_vm._v("mdi-plus-circle")]
                                  ),
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
                        _vm._v(" Add Record "),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
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
                                    staticStyle: { "margin-top": "20px" },
                                    attrs: {
                                      icon: "",
                                      small: "",
                                      disabled: _vm.emailDisable,
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.send_email_to_many()
                                      },
                                    },
                                  },
                                  on
                                ),
                                [
                                  _c(
                                    "v-icon",
                                    { attrs: { size: "35", color: "black" } },
                                    [_vm._v("mdi-email-send")]
                                  ),
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
                        _vm._v(" Send to Email "),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "2" } },
                [
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        "close-on-content-click": false,
                        transition: "scale-transition",
                        "offset-y": "",
                        "min-width": "200px",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function (ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-text-field",
                                _vm._g(
                                  _vm._b(
                                    {
                                      staticClass: "ml-2",
                                      staticStyle: { "margin-top": "20px" },
                                      attrs: {
                                        readonly: "",
                                        outlined: "",
                                        dense: "",
                                        label: "From",
                                        color: "black",
                                      },
                                      model: {
                                        value: _vm.fromDate,
                                        callback: function ($$v) {
                                          _vm.fromDate = $$v
                                        },
                                        expression: "fromDate",
                                      },
                                    },
                                    "v-text-field",
                                    attrs,
                                    false
                                  ),
                                  on
                                )
                              ),
                            ]
                          },
                        },
                      ]),
                      model: {
                        value: _vm.vmod_fromDate,
                        callback: function ($$v) {
                          _vm.vmod_fromDate = $$v
                        },
                        expression: "vmod_fromDate",
                      },
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        on: {
                          input: function ($event) {
                            ;(_vm.vmod_fromDate = false),
                              _vm.toDate != null && _vm.toDate != undefined
                                ? _vm.getPatrolViewByDate()
                                : ""
                          },
                        },
                        model: {
                          value: _vm.fromDate,
                          callback: function ($$v) {
                            _vm.fromDate = $$v
                          },
                          expression: "fromDate",
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
                "v-col",
                { attrs: { cols: "2" } },
                [
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        "close-on-content-click": false,
                        transition: "scale-transition",
                        "offset-y": "",
                        "min-width": "200px",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function (ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-text-field",
                                _vm._g(
                                  _vm._b(
                                    {
                                      staticClass: "ml-1 mr-2",
                                      staticStyle: { "margin-top": "20px" },
                                      attrs: {
                                        readonly: "",
                                        outlined: "",
                                        dense: "",
                                        label: "To",
                                        color: "black",
                                      },
                                      model: {
                                        value: _vm.toDate,
                                        callback: function ($$v) {
                                          _vm.toDate = $$v
                                        },
                                        expression: "toDate",
                                      },
                                    },
                                    "v-text-field",
                                    attrs,
                                    false
                                  ),
                                  on
                                )
                              ),
                            ]
                          },
                        },
                      ]),
                      model: {
                        value: _vm.vmod_sumtoDate,
                        callback: function ($$v) {
                          _vm.vmod_sumtoDate = $$v
                        },
                        expression: "vmod_sumtoDate",
                      },
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        on: {
                          input: function ($event) {
                            ;(_vm.vmod_sumtoDate = false),
                              _vm.getPatrolViewByDate()
                          },
                        },
                        model: {
                          value: _vm.toDate,
                          callback: function ($$v) {
                            _vm.toDate = $$v
                          },
                          expression: "toDate",
                        },
                      }),
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
            "v-simple-table",
            {
              staticStyle: { border: "1px solid black", "overflow-y": "auto" },
              attrs: { height: _vm.$vuetify.breakpoint.height - 260 },
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", {
                    staticStyle: {
                      "background-color": "#444444",
                      color: "white",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "#444444",
                        color: "white",
                      },
                    },
                    [_vm._v("No.")]
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
                    [_vm._v("Control No")]
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
                    [_vm._v("Date of Inspection")]
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
                    [_vm._v("Location")]
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
                    [_vm._v("Hazard Category")]
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
                    [_vm._v("Observation")]
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
                    [_vm._v("Hazard Picture")]
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
                    [_vm._v("After Picture")]
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
                    [_vm._v("Status")]
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
                    [_vm._v("Confirmed Date")]
                  ),
                  _vm._v(" "),
                  _vm.userInfo.value[0].UserLevel == 1 ||
                  _vm.userInfo.value[0].UserLevel == 3
                    ? _c(
                        "th",
                        {
                          staticStyle: {
                            "background-color": "#444444",
                            color: "white",
                          },
                        },
                        [_vm._v("\n            Actions\n          ")]
                      )
                    : _vm._e(),
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
                        _c("v-checkbox", {
                          on: {
                            click: function ($event) {
                              return _vm.addToArray(item)
                            },
                          },
                          model: {
                            value: item.isChecked,
                            callback: function ($$v) {
                              _vm.$set(item, "isChecked", $$v)
                            },
                            expression: "item.isChecked",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v("\n            " + _vm._s(i + 1) + "\n          "),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v("\n            " + _vm._s(item.ControlNo)),
                      _c("br"),
                      _vm._v(
                        "\n            " +
                          _vm._s(item.EmployeeName) +
                          "\n          "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(item.InspectionDate.slice(0, 10))),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n            " +
                          _vm._s(
                            _vm.deptList
                              .filter(function (res) {
                                return res.DepartmentCode == item.DepartmentID
                              })
                              .map(function (r) {
                                return r.DepartmentName
                              })[0]
                          )
                      ),
                      _c("br"),
                      _vm._v("\n            " + _vm._s(item.Location)),
                      _c("br"),
                      _vm._v(
                        "\n            " + _vm._s(item.Area) + "\n          "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.CatName))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.Observation))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c("v-img", {
                          attrs: {
                            src: _vm.img(item.HazardPicture),
                            width: "80px",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c("v-img", {
                          attrs: {
                            src: _vm.img(item.AfterPicture),
                            width: "80px",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.Status))]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "text-align": "center" } }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(
                            item.ConfirmedDate == null
                              ? "----"
                              : item.ConfirmedDate.slice(0, 10)
                          ) +
                          "\n          "
                      ),
                    ]),
                    _vm._v(" "),
                    _vm.userInfo.value[0].UserLevel == 1 ||
                    _vm.userInfo.value[0].UserLevel == 3
                      ? _c(
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
                                                  small: "",
                                                  color: "black",
                                                  disabled:
                                                    item.ConfirmedDate !=
                                                      null &&
                                                    _vm.userInfo.value[0]
                                                      .UserLevel != 3,
                                                },
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.OpenAddRecordUpdate(
                                                      item
                                                    )
                                                  },
                                                },
                                              },
                                              on
                                            ),
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { size: "18" } },
                                                [
                                                  _vm._v(
                                                    "mdi-chevron-double-right"
                                                  ),
                                                ]
                                              ),
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
                                  [_vm._v(" Details ")]
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
                                                attrs: {
                                                  icon: "",
                                                  small: "",
                                                  color: "red",
                                                  disabled:
                                                    item.ConfirmedDate != null,
                                                },
                                                on: {
                                                  click: function ($event) {
                                                    _vm.deleteDialog = true
                                                    _vm.toDelete =
                                                      Object.assign({}, item)
                                                  },
                                                },
                                              },
                                              on
                                            ),
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { size: "18" } },
                                                [_vm._v("mdi-delete")]
                                              ),
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
                        )
                      : _vm._e(),
                  ])
                }),
                0
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "mt-3",
              attrs: { flat: "", color: "#232323", height: "50px" },
            },
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "2" } }, [
                    _c("p", { staticStyle: { color: "white" } }, [
                      _vm._v(
                        "\n            Hazard Picture :\n            " +
                          _vm._s(
                            _vm.PatrolTable.filter(function (res) {
                              return res.HazardPicture
                            }).length
                          ) +
                          "\n          "
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "2" } }, [
                    _c("p", { staticStyle: { color: "white" } }, [
                      _vm._v(
                        "\n            After Picture :\n            " +
                          _vm._s(
                            _vm.PatrolTable.filter(function (res) {
                              return res.AfterPicture
                            }).length
                          ) +
                          "\n          "
                      ),
                    ]),
                  ]),
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
          attrs: { width: "800", persistent: "" },
          model: {
            value: _vm.AddRecord,
            callback: function ($$v) {
              _vm.AddRecord = $$v
            },
            expression: "AddRecord",
          },
        },
        [
          _c(
            "v-toolbar",
            { attrs: { color: "#FFEBB4", flat: "", dense: "" } },
            [
              _c("v-toolbar-title", [_vm._v("Hazard Patrol Summary Details")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function ($event) {
                      return _vm.clearAll()
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
            "v-container",
            { staticStyle: { "background-color": "white" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-row",
                    { staticClass: "pl-2 pr-2", attrs: { dense: "" } },
                    [
                      _c(
                        "v-col",
                        { staticClass: "mt-2", attrs: { cols: "3" } },
                        [
                          _c("v-text-field", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Employee Code",
                              dense: "",
                              outlined: "",
                              filled: "",
                              "background-color": "#F7F1E5",
                              readonly: "",
                            },
                            model: {
                              value: _vm.AddpatrolsObj.EmployeeCode,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddpatrolsObj, "EmployeeCode", $$v)
                              },
                              expression: "AddpatrolsObj.EmployeeCode",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "mt-2", attrs: { cols: "6" } },
                        [
                          _c("v-autocomplete", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Safety Officer Name",
                              outlined: "",
                              dense: "",
                              items: _vm.SafetyOfficerTable,
                              "item-text": "EmployeeName",
                              "item-value": "EmployeeCode",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "item",
                                fn: function (data) {
                                  return [
                                    _c("v-list-item-avatar", [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "http://hrd-adminweb/photos/" +
                                            data.item.EmployeeCode +
                                            ".jpg",
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(
                                            _vm._s(data.item.EmployeeName)
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("v-list-item-subtitle", [
                                          _vm._v(_vm._s(data.item.Area)),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ]
                                },
                              },
                            ]),
                            model: {
                              value: _vm.AddpatrolsObj.EmployeeCode,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddpatrolsObj, "EmployeeCode", $$v)
                              },
                              expression: "AddpatrolsObj.EmployeeCode",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticStyle: { "text-align": "center" },
                          attrs: { cols: "3" },
                        },
                        [
                          _c(
                            "label",
                            { staticStyle: { "font-size": "25px" } },
                            [_vm._v(_vm._s(0))]
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "label",
                            { staticStyle: { "font-size": "18px" } },
                            [_vm._v("No. of Days Resolve")]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "pl-2 pr-2", attrs: { dense: "" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              staticStyle: { height: "50px" },
                                              attrs: {
                                                label: "Date of Inspection",
                                                "prepend-inner-icon":
                                                  "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                filled: "",
                                                dense: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.AddpatrolsObj
                                                    .InspectionDate,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.AddpatrolsObj,
                                                    "InspectionDate",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "AddpatrolsObj.InspectionDate",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.menu1,
                                callback: function ($$v) {
                                  _vm.menu1 = $$v
                                },
                                expression: "menu1",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                on: {
                                  input: function ($event) {
                                    _vm.menu1 = false
                                  },
                                },
                                model: {
                                  value: _vm.AddpatrolsObj.InspectionDate,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.AddpatrolsObj,
                                      "InspectionDate",
                                      $$v
                                    )
                                  },
                                  expression: "AddpatrolsObj.InspectionDate",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Area",
                              dense: "",
                              outlined: "",
                              items: _vm.AreasTable,
                              "item-text": "Area",
                              "item-value": "AreaID",
                            },
                            on: {
                              change: function ($event) {
                                return _vm.GetDept()
                              },
                            },
                            model: {
                              value: _vm.AddpatrolsObj.AreaID,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddpatrolsObj, "AreaID", $$v)
                              },
                              expression: "AddpatrolsObj.AreaID",
                            },
                          }),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            staticStyle: { height: "42px" },
                            attrs: {
                              label: "Concerned Department",
                              filled: "",
                              "background-color": "#F7F1E5",
                              dense: "",
                              outlined: "",
                              disabled: !_vm.AddpatrolsObj.AreaID,
                              items:
                                _vm.AddpatrolsObj.AreaID == 9
                                  ? _vm.DeptTable
                                  : _vm.deptList,
                              "item-text": "DepartmentName",
                              "item-value": "DepartmentCode",
                            },
                            model: {
                              value: _vm.AddpatrolsObj.DepartmentID,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddpatrolsObj, "DepartmentID", $$v)
                              },
                              expression: "AddpatrolsObj.DepartmentID",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c("v-textarea", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Corrective Action",
                              dense: "",
                              outlined: "",
                              filled: "",
                              height: "140px",
                            },
                            model: {
                              value: _vm.AddpatrolsObj.CorrectiveAction,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.AddpatrolsObj,
                                  "CorrectiveAction",
                                  $$v
                                )
                              },
                              expression: "AddpatrolsObj.CorrectiveAction",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-text-field", {
                                    staticStyle: { height: "50px" },
                                    attrs: {
                                      label: "Location",
                                      dense: "",
                                      outlined: "",
                                      filled: "",
                                    },
                                    model: {
                                      value: _vm.AddpatrolsObj.Locations,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.AddpatrolsObj,
                                          "Locations",
                                          $$v
                                        )
                                      },
                                      expression: "AddpatrolsObj.Locations",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-text-field", {
                                    staticStyle: { height: "50px" },
                                    attrs: {
                                      label: "Location",
                                      dense: "",
                                      outlined: "",
                                      filled: "",
                                    },
                                    model: {
                                      value: _vm.AddpatrolsObj.Location,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.AddpatrolsObj,
                                          "Location",
                                          $$v
                                        )
                                      },
                                      expression: "AddpatrolsObj.Location",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Hazard Category",
                              dense: "",
                              outlined: "",
                              filled: "",
                              "background-color": "#F7F1E5",
                              items: _vm.CategoriesTable,
                              "item-text": "CatName",
                              "item-value": "CatID",
                            },
                            model: {
                              value: _vm.AddpatrolsObj.CatID,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddpatrolsObj, "CatID", $$v)
                              },
                              expression: "AddpatrolsObj.CatID",
                            },
                          }),
                          _vm._v(" "),
                          _c("v-textarea", {
                            staticStyle: { height: "110px" },
                            attrs: {
                              outlined: "",
                              filled: "",
                              label: "Observation",
                              height: "100px",
                            },
                            model: {
                              value: _vm.AddpatrolsObj.Observation,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddpatrolsObj, "Observation", $$v)
                              },
                              expression: "AddpatrolsObj.Observation",
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "file" } }, [
                            _vm._v("Hazard Picture: "),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "file",
                            staticStyle: {
                              width: "300px",
                              "max-width": "100%",
                              color: "#444",
                              padding: "5px",
                              background: "#fff",
                            },
                            attrs: {
                              type: "file",
                              id: "file1",
                              accept: "image/png, image/jpeg",
                            },
                            on: { change: _vm.onFileChange },
                          }),
                          _vm._v(" "),
                          _c(
                            "v-card",
                            {
                              staticStyle: { border: "1px solid gray" },
                              attrs: {
                                elevation: "0",
                                height: "180",
                                width: "500",
                              },
                            },
                            [
                              _vm.image
                                ? _c("v-img", {
                                    staticClass: "style",
                                    attrs: { src: _vm.image },
                                  })
                                : _vm._e(),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-textarea", {
                            staticClass: "mt-2",
                            attrs: {
                              label: "Immediate Action Taken",
                              dense: "",
                              filled: "",
                              outlined: "",
                              height: "100px",
                            },
                            model: {
                              value: _vm.AddpatrolsObj.ImmediateActionTaken,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.AddpatrolsObj,
                                  "ImmediateActionTaken",
                                  $$v
                                )
                              },
                              expression: "AddpatrolsObj.ImmediateActionTaken",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c("label", { attrs: { for: "file" } }, [
                            _vm._v("After Picture: "),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "file2",
                            staticStyle: {
                              width: "300px",
                              "max-width": "100%",
                              color: "#444",
                              padding: "5px",
                              background: "#fff",
                            },
                            attrs: {
                              type: "file",
                              id: "file2",
                              accept: "image/png, image/jpeg",
                            },
                            on: { change: _vm.onFileChange2 },
                          }),
                          _vm._v(" "),
                          _c(
                            "v-card",
                            {
                              staticStyle: { border: "1px solid gray" },
                              attrs: {
                                elevation: "0",
                                height: "180",
                                width: "500",
                              },
                            },
                            [
                              _vm.image2
                                ? _c("v-img", {
                                    staticClass: "style",
                                    attrs: { src: _vm.image2 },
                                  })
                                : _vm._e(),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              staticClass: "mt-2",
                                              staticStyle: { height: "50px" },
                                              attrs: {
                                                label: "Implementation Date",
                                                "prepend-inner-icon":
                                                  "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                dense: "",
                                                filled: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.AddpatrolsObj
                                                    .ImplementationDate,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.AddpatrolsObj,
                                                    "ImplementationDate",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "AddpatrolsObj.ImplementationDate",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.menu2,
                                callback: function ($$v) {
                                  _vm.menu2 = $$v
                                },
                                expression: "menu2",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                on: {
                                  input: function ($event) {
                                    _vm.menu2 = false
                                  },
                                },
                                model: {
                                  value: _vm.AddpatrolsObj.ImplementationDate,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.AddpatrolsObj,
                                      "ImplementationDate",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "AddpatrolsObj.ImplementationDate",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Status",
                              dense: "",
                              outlined: "",
                              items: _vm.StatusTable,
                              "item-text": "Status",
                              "item-value": "StatusID",
                            },
                            model: {
                              value: _vm.AddpatrolsObj.StatusID,
                              callback: function ($$v) {
                                _vm.$set(_vm.AddpatrolsObj, "StatusID", $$v)
                              },
                              expression: "AddpatrolsObj.StatusID",
                            },
                          }),
                          _vm._v(" "),
                          _vm.AddpatrolsObj.StatusID == 3
                            ? _c("v-autocomplete", {
                                staticStyle: { height: "50px" },
                                attrs: {
                                  items: _vm.ReasonTable,
                                  "item-text": "Reason",
                                  "item-value": "ReasonID",
                                  label: "Reason",
                                  dense: "",
                                  outlined: "",
                                },
                                model: {
                                  value: _vm.AddpatrolsObj.ReasonID,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.AddpatrolsObj, "ReasonID", $$v)
                                  },
                                  expression: "AddpatrolsObj.ReasonID",
                                },
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.AddpatrolsObj.StatusID == 3
                            ? _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": false,
                                    "nudge-right": 40,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "min-width": "auto",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function (ref) {
                                          var on = ref.on
                                          var attrs = ref.attrs
                                          return [
                                            _c(
                                              "v-text-field",
                                              _vm._g(
                                                _vm._b(
                                                  {
                                                    staticStyle: {
                                                      height: "50px",
                                                    },
                                                    attrs: {
                                                      label: "Target Date",
                                                      "prepend-inner-icon":
                                                        "mdi-calendar",
                                                      readonly: "",
                                                      outlined: "",
                                                      dense: "",
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.AddpatrolsObj
                                                          .TargetDate,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.AddpatrolsObj,
                                                          "TargetDate",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "AddpatrolsObj.TargetDate",
                                                    },
                                                  },
                                                  "v-text-field",
                                                  attrs,
                                                  false
                                                ),
                                                on
                                              )
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    false,
                                    1281773684
                                  ),
                                  model: {
                                    value: _vm.menu3,
                                    callback: function ($$v) {
                                      _vm.menu3 = $$v
                                    },
                                    expression: "menu3",
                                  },
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-date-picker", {
                                    on: {
                                      input: function ($event) {
                                        _vm.menu3 = false
                                      },
                                    },
                                    model: {
                                      value: _vm.AddpatrolsObj.TargetDate,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.AddpatrolsObj,
                                          "TargetDate",
                                          $$v
                                        )
                                      },
                                      expression: "AddpatrolsObj.TargetDate",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
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
                          attrs: { color: "#ECCCB2", width: "100" },
                          on: {
                            click: function ($event) {
                              return _vm.SaveAddRecord()
                            },
                          },
                        },
                        [
                          _c("v-icon", [_vm._v("mdi-content-save")]),
                          _vm._v("Save\n          "),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticStyle: { color: "white" },
                          style: !_vm.isActive
                            ? "background-color: #19A7CE;"
                            : "background-color: #567189;",
                          attrs: {
                            width: "100",
                            disabled: _vm.userInfo.value[0].UserLevel != 3,
                          },
                          on: {
                            click: function ($event) {
                              return _vm.saveConfirmed(_vm.toUpdateObj)
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(!_vm.isActive ? "Confirm" : "Unconfirm") +
                              "\n          "
                          ),
                        ]
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
          attrs: { width: "800", persistent: "" },
          model: {
            value: _vm.UpdateRecord,
            callback: function ($$v) {
              _vm.UpdateRecord = $$v
            },
            expression: "UpdateRecord",
          },
        },
        [
          _c(
            "v-toolbar",
            { attrs: { color: "#FFEBB4", dense: "", flat: "" } },
            [
              _c("v-toolbar-title", [_vm._v("Update")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function ($event) {
                      return _vm.clearAll()
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
            "v-container",
            { staticStyle: { "background-color": "white" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-row",
                    { staticClass: "pl-2 pr-2", attrs: { dense: "" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("v-text-field", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Control No",
                              dense: "",
                              outlined: "",
                              readonly: "",
                            },
                            model: {
                              value: _vm.toUpdateObj.ControlNo,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "ControlNo", $$v)
                              },
                              expression: "toUpdateObj.ControlNo",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "8" } }),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "3" } },
                        [
                          _c("v-text-field", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Employee Code",
                              dense: "",
                              outlined: "",
                              "background-color": "#F7F1E5",
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
                        { attrs: { cols: "6" } },
                        [
                          _c("v-autocomplete", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Safety Officer Name",
                              outlined: "",
                              dense: "",
                              items: _vm.SafetyOfficerTable,
                              "item-text": "EmployeeName",
                              "item-value": "EmployeeCode",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "item",
                                fn: function (data) {
                                  return [
                                    _c("v-list-item-avatar", [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "http://hrd-adminweb/photos/" +
                                            data.item.EmployeeCode +
                                            ".jpg",
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(
                                            _vm._s(data.item.EmployeeName)
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("v-list-item-subtitle", [
                                          _vm._v(_vm._s(data.item.Area)),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ]
                                },
                              },
                            ]),
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
                        {
                          staticStyle: { "text-align": "center" },
                          attrs: { cols: "3" },
                        },
                        [
                          _c(
                            "label",
                            { staticStyle: { "font-size": "25px" } },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.toUpdateObj.ClosedDate != null
                                      ? Math.floor(
                                          (new Date(
                                            _vm.toUpdateObj.ClosedDate
                                          ) -
                                            new Date(
                                              _vm.toUpdateObj.CreatedDate
                                            )) /
                                            (1000 * 3600 * 24)
                                        )
                                      : 0
                                  )
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            { staticStyle: { "font-size": "18px" } },
                            [_vm._v("No. of Days")]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "pl-2 pr-2", attrs: { dense: "" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              staticStyle: { height: "50px" },
                                              attrs: {
                                                label: "Date of Inspection",
                                                "prepend-inner-icon":
                                                  "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                filled: "",
                                                dense: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.toUpdateObj
                                                    .InspectionDate,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.toUpdateObj,
                                                    "InspectionDate",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "toUpdateObj.InspectionDate",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.menu1Update,
                                callback: function ($$v) {
                                  _vm.menu1Update = $$v
                                },
                                expression: "menu1Update",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                on: {
                                  input: function ($event) {
                                    _vm.menu1Update = false
                                  },
                                },
                                model: {
                                  value: _vm.toUpdateObj.InspectionDate,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.toUpdateObj,
                                      "InspectionDate",
                                      $$v
                                    )
                                  },
                                  expression: "toUpdateObj.InspectionDate",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Area",
                              dense: "",
                              outlined: "",
                              items: _vm.AreasTable,
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
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            staticStyle: { height: "42px" },
                            attrs: {
                              label: "Concerned Department",
                              dense: "",
                              outlined: "",
                              "background-color": "#F7F1E5",
                              items: _vm.deptList,
                              "item-text": "DepartmentName",
                              "item-value": "DepartmentCode",
                            },
                            model: {
                              value: _vm.toUpdateObj.DepartmentID,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "DepartmentID", $$v)
                              },
                              expression: "toUpdateObj.DepartmentID",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c("v-textarea", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Corrective Action",
                              dense: "",
                              outlined: "",
                              filled: "",
                              height: "140px",
                            },
                            model: {
                              value: _vm.toUpdateObj.CorrectiveAction,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.toUpdateObj,
                                  "CorrectiveAction",
                                  $$v
                                )
                              },
                              expression: "toUpdateObj.CorrectiveAction",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c("v-text-field", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Location",
                              dense: "",
                              outlined: "",
                              filled: "",
                            },
                            model: {
                              value: _vm.toUpdateObj.Location,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "Location", $$v)
                              },
                              expression: "toUpdateObj.Location",
                            },
                          }),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Hazard Category",
                              dense: "",
                              outlined: "",
                              "background-color": "#F7F1E5",
                              items: _vm.CategoriesTable,
                              "item-text": "CatName",
                              "item-value": "CatID",
                            },
                            model: {
                              value: _vm.toUpdateObj.CatID,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "CatID", $$v)
                              },
                              expression: "toUpdateObj.CatID",
                            },
                          }),
                          _vm._v(" "),
                          _c("v-textarea", {
                            staticStyle: { height: "110px" },
                            attrs: {
                              outlined: "",
                              filled: "",
                              label: "Observation",
                              height: "100px",
                            },
                            model: {
                              value: _vm.toUpdateObj.Observation,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "Observation", $$v)
                              },
                              expression: "toUpdateObj.Observation",
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "file" } }, [
                            _vm._v("Hazard Picture: "),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "file",
                            staticStyle: {
                              width: "300px",
                              "max-width": "100%",
                              color: "#444",
                              padding: "5px",
                              background: "#fff",
                            },
                            attrs: {
                              type: "file",
                              accept: "image/png, image/jpeg",
                            },
                            on: { change: _vm.onFileChange },
                          }),
                          _vm._v(" "),
                          _vm.image
                            ? _c("v-img", {
                                staticClass: "style",
                                attrs: { src: _vm.image },
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("v-textarea", {
                            staticClass: "mt-2",
                            attrs: {
                              label: "Immediate Action Taken",
                              dense: "",
                              outlined: "",
                              filled: "",
                              height: "100px",
                            },
                            model: {
                              value: _vm.toUpdateObj.ImmediateActionTaken,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.toUpdateObj,
                                  "ImmediateActionTaken",
                                  $$v
                                )
                              },
                              expression: "toUpdateObj.ImmediateActionTaken",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c("label", { attrs: { for: "file" } }, [
                            _vm._v("After Picture: "),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "file2",
                            staticStyle: {
                              width: "300px",
                              "max-width": "100%",
                              color: "#444",
                              padding: "5px",
                              background: "#fff",
                            },
                            attrs: {
                              type: "file",
                              accept: "image/png, image/jpeg",
                            },
                            on: { change: _vm.onFileChange2 },
                          }),
                          _vm._v(" "),
                          _vm.image2
                            ? _c("v-img", {
                                staticClass: "style",
                                attrs: { src: _vm.image2 },
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("v-textarea", {
                            staticClass: "mt-2",
                            attrs: {
                              label: "Follow Updates",
                              readonly: "",
                              dense: "",
                              outlined: "",
                              filled: "",
                              height: "100px",
                            },
                            model: {
                              value: _vm.toUpdateObj.FollowUpDates,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "FollowUpDates", $$v)
                              },
                              expression: "toUpdateObj.FollowUpDates",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              staticClass: "mt-2",
                                              staticStyle: { height: "50px" },
                                              attrs: {
                                                label: "Implementation Date",
                                                "prepend-inner-icon":
                                                  "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                filled: "",
                                                dense: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.toUpdateObj
                                                    .ImplementationDate,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.toUpdateObj,
                                                    "ImplementationDate",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "toUpdateObj.ImplementationDate",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.menu2Update,
                                callback: function ($$v) {
                                  _vm.menu2Update = $$v
                                },
                                expression: "menu2Update",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                on: {
                                  input: function ($event) {
                                    _vm.menu2Update = false
                                  },
                                },
                                model: {
                                  value: _vm.toUpdateObj.ImplementationDate,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.toUpdateObj,
                                      "ImplementationDate",
                                      $$v
                                    )
                                  },
                                  expression: "toUpdateObj.ImplementationDate",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            staticStyle: { height: "50px" },
                            attrs: {
                              label: "Status",
                              dense: "",
                              outlined: "",
                              items: _vm.StatusTable,
                              "item-text": "Status",
                              "item-value": "StatusID",
                            },
                            model: {
                              value: _vm.toUpdateObj.StatusID,
                              callback: function ($$v) {
                                _vm.$set(_vm.toUpdateObj, "StatusID", $$v)
                              },
                              expression: "toUpdateObj.StatusID",
                            },
                          }),
                          _vm._v(" "),
                          _vm.toUpdateObj.StatusID == 3
                            ? _c("v-autocomplete", {
                                staticStyle: { height: "50px" },
                                attrs: {
                                  items: _vm.ReasonTable,
                                  "item-text": "Reason",
                                  "item-value": "ReasonID",
                                  label: "Reason",
                                  dense: "",
                                  outlined: "",
                                },
                                model: {
                                  value: _vm.toUpdateObj.ReasonID,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.toUpdateObj, "ReasonID", $$v)
                                  },
                                  expression: "toUpdateObj.ReasonID",
                                },
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.toUpdateObj.StatusID == 3
                            ? _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": false,
                                    "nudge-right": 40,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "min-width": "auto",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function (ref) {
                                          var on = ref.on
                                          var attrs = ref.attrs
                                          return [
                                            _c(
                                              "v-text-field",
                                              _vm._g(
                                                _vm._b(
                                                  {
                                                    staticStyle: {
                                                      height: "50px",
                                                    },
                                                    attrs: {
                                                      label: "Target Date",
                                                      "prepend-inner-icon":
                                                        "mdi-calendar",
                                                      readonly: "",
                                                      outlined: "",
                                                      dense: "",
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.toUpdateObj
                                                          .TargetDate,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.toUpdateObj,
                                                          "TargetDate",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "toUpdateObj.TargetDate",
                                                    },
                                                  },
                                                  "v-text-field",
                                                  attrs,
                                                  false
                                                ),
                                                on
                                              )
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    false,
                                    2693307288
                                  ),
                                  model: {
                                    value: _vm.menu3,
                                    callback: function ($$v) {
                                      _vm.menu3 = $$v
                                    },
                                    expression: "menu3",
                                  },
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-date-picker", {
                                    on: {
                                      input: function ($event) {
                                        _vm.menu3 = false
                                      },
                                    },
                                    model: {
                                      value: _vm.toUpdateObj.TargetDate,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.toUpdateObj,
                                          "TargetDate",
                                          $$v
                                        )
                                      },
                                      expression: "toUpdateObj.TargetDate",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
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
                          attrs: { width: "100", color: "#ECCCB2" },
                          on: {
                            click: function ($event) {
                              return _vm.UpdateRecordSave()
                            },
                          },
                        },
                        [
                          _c("v-icon", [_vm._v("mdi-content-save")]),
                          _vm._v(" Save\n          "),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticStyle: { color: "white" },
                          style: !_vm.isActive
                            ? "background-color: #19A7CE;"
                            : "background-color: #567189;",
                          attrs: {
                            width: "100",
                            disabled: _vm.userInfo.value[0].UserLevel != 3,
                          },
                          on: {
                            click: function ($event) {
                              return _vm.saveConfirmed(_vm.toUpdateObj)
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(!_vm.isActive ? "Confirm" : "Unconfirm") +
                              "\n          "
                          ),
                        ]
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
                              return _vm.Delete(_vm.toDelete)
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