var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-account/create-account.page.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-account/create-account.page.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>createAccount</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n\r\n  <div class=\"container\" slot= \"fixed\">\r\n    <div class=\"blur\">\r\n      <img src=\"https://images.unsplash.com/photo-1530834395125-2a7eb8848ac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1164&q=80i\" alt=\"Your Profile Image\">\r\n    </div>\r\n    <div class=\"everything\">\r\n      <div class=\"title\">\r\n        <p>CREATE <br> ACCOUNT</p>\r\n      </div>\r\n      <div class=\"image\" id=\"image\">\r\n        <img src=\"{{profilePic}}\" style=\"overflow: hidden;\">\r\n        <ion-button (click)=\"selectImage()\" color=\"transparent\">SELECT IMAGE</ion-button>\r\n      </div>\r\n\r\n\r\n      <div class=\"form\">\r\n        <form [formGroup]=\"account\">\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Name\" formControlName=\"name\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Surname\" formControlName=\"surname\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Email\" formControlName=\"email\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Address\" formControlName=\"address\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <br>\r\n          <ion-button (click)=\"createAccount()\" [disabled]=\"!account.valid\" color=\"transparent\">DONE\r\n          </ion-button>\r\n        </form>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/create-account/create-account-routing.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/create-account/create-account-routing.module.ts ***!
          \*****************************************************************/
        /*! exports provided: CreateAccountPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPageRoutingModule", function () { return CreateAccountPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _create_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-account.page */ "./src/app/create-account/create-account.page.ts");
            var routes = [
                {
                    path: '',
                    component: _create_account_page__WEBPACK_IMPORTED_MODULE_3__["CreateAccountPage"]
                }
            ];
            var CreateAccountPageRoutingModule = /** @class */ (function () {
                function CreateAccountPageRoutingModule() {
                }
                return CreateAccountPageRoutingModule;
            }());
            CreateAccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], CreateAccountPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/create-account/create-account.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/create-account/create-account.module.ts ***!
          \*********************************************************/
        /*! exports provided: CreateAccountPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPageModule", function () { return CreateAccountPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _create_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-account-routing.module */ "./src/app/create-account/create-account-routing.module.ts");
            /* harmony import */ var _create_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-account.page */ "./src/app/create-account/create-account.page.ts");
            var CreateAccountPageModule = /** @class */ (function () {
                function CreateAccountPageModule() {
                }
                return CreateAccountPageModule;
            }());
            CreateAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _create_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateAccountPageRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                    ],
                    declarations: [_create_account_page__WEBPACK_IMPORTED_MODULE_6__["CreateAccountPage"]]
                })
            ], CreateAccountPageModule);
            /***/ 
        }),
        /***/ "./src/app/create-account/create-account.page.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/create-account/create-account.page.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Abel|Poiret+One|Open+Sans+Condensed|Jura|Manjari|Poppins|Raleway|Montserrat \");\n.container {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  height: 100vh;\n  align-items: center;\n  position: absolute;\n  background: url(\"https://images.unsplash.com/photo-1530834395125-2a7eb8848ac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1164&q=80i\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.container .blur {\n  width: 100vw;\n  height: 101vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  position: absolute;\n  -webkit-transform: translate3d(0, 0, 0);\n  left: -15vw;\n  border: 3px solid rgba(204, 204, 204, 0.199);\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  margin: -5px;\n}\n.container .blur img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  filter: blur(15px);\n  -webkit-filter: blur(15px);\n  -moz-filter: blur(15px);\n  -o-filter: blur(15px);\n  -ms-filter: blur(15px);\n  margin: -5px -10px -10px -5px;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  transform: scale(1.06);\n}\n.container .everything {\n  position: absolute;\n  bottom: 20px;\n  left: 10%;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  height: 100%;\n}\n.container .everything .title {\n  position: relative;\n  left: -10%;\n  font-family: \"Poppins\";\n  letter-spacing: 3px;\n  color: white;\n  font-size: 8vw;\n}\n.container .everything .image {\n  width: 70vw;\n  height: 60vw;\n  display: flex;\n  flex-flow: column;\n  position: relative;\n  left: -5%;\n  overflow: hidden;\n}\n.container .everything .image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border: none;\n  box-shadow: 5px 5px 10px #cccccc;\n}\n.container .everything .image ion-button {\n  font-family: \"Poppins\";\n  letter-spacing: 3px;\n  position: absolute;\n  bottom: 20px;\n  width: 60vw;\n  left: 5%;\n  outline: none !important;\n}\n.container .everything .form {\n  width: 100%;\n  padding: 10px;\n  position: relative;\n  left: -15%;\n}\n.container .everything .form ion-item {\n  color: white;\n}\n.container .everything .form ion-button {\n  width: 60vw;\n  position: absolute;\n  left: 20%;\n  font-size: 0.8em;\n  font-family: \"Poppins\";\n  letter-spacing: 3px;\n  color: black;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.795);\n  overflow: hidden;\n  box-shadow: 5px 5px 10px grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWFjY291bnQvQzpcXFVzZXJzXFx6YW5lbFxcRG9jdW1lbnRzXFxicm9rZW5TdG9vbC9zcmNcXGFwcFxcY3JlYXRlLWFjY291bnRcXGNyZWF0ZS1hY2NvdW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY3JlYXRlLWFjY291bnQvY3JlYXRlLWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG1JQUFBO0FBQ1I7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnSUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QUNDTjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0RKO0FER0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNETjtBRElJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDTixnQkFBQTtBQ0hBO0FESU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ0ZSO0FES007RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtBQ0hSO0FET0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0xOO0FET007RUFDRSxZQUFBO0FDTFI7QURRTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUVBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNQUiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1hY2NvdW50L2NyZWF0ZS1hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFiZWx8UG9pcmV0K09uZXxPcGVuK1NhbnMrQ29uZGVuc2VkfEp1cmF8TWFuamFyaXxQb3BwaW5zfFJhbGV3YXl8TW9udHNlcnJhdCBcIik7XHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMDgzNDM5NTEyNS0yYTdlYjg4NDhhYzA/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMTY0JnE9ODBpXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIC5ibHVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAxdmg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICBsZWZ0OiAtMTV2dztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4xOTkpO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogLTVweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgZmlsdGVyOiBibHVyKDE1cHgpO1xyXG4gICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxNXB4KTtcclxuICAgICAgLW1vei1maWx0ZXI6IGJsdXIoMTVweCk7XHJcbiAgICAgIC1vLWZpbHRlcjogYmx1cigxNXB4KTtcclxuICAgICAgLW1zLWZpbHRlcjogYmx1cigxNXB4KTtcclxuICAgICAgbWFyZ2luOiAtNXB4IC0xMHB4IC0xMHB4IC01cHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ldmVyeXRoaW5nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGVmdDogLTEwJTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogOHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICBoZWlnaHQ6IDYwdnc7XHJcbiAgICAvLyAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IC01JTtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDIwNCwgMjA0LCAyMDQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICAgIGxlZnQ6IDUlO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGVmdDogLTE1JTtcclxuXHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyBib3R0b206IDEwcHg7XHJcbiAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc5NSk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggZ3JleTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BYmVsfFBvaXJldCtPbmV8T3BlbitTYW5zK0NvbmRlbnNlZHxKdXJhfE1hbmphcml8UG9wcGluc3xSYWxld2F5fE1vbnRzZXJyYXQgXCIpO1xuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMDgzNDM5NTEyNS0yYTdlYjg4NDhhYzA/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMTY0JnE9ODBpXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uY29udGFpbmVyIC5ibHVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMXZoO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGxlZnQ6IC0xNXZ3O1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMTk5KTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IC01cHg7XG59XG4uY29udGFpbmVyIC5ibHVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBmaWx0ZXI6IGJsdXIoMTVweCk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDE1cHgpO1xuICAtbW96LWZpbHRlcjogYmx1cigxNXB4KTtcbiAgLW8tZmlsdGVyOiBibHVyKDE1cHgpO1xuICAtbXMtZmlsdGVyOiBibHVyKDE1cHgpO1xuICBtYXJnaW46IC01cHggLTEwcHggLTEwcHggLTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xufVxuLmNvbnRhaW5lciAuZXZlcnl0aGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAxMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciAuZXZlcnl0aGluZyAudGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xMCU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDh2dztcbn1cbi5jb250YWluZXIgLmV2ZXJ5dGhpbmcgLmltYWdlIHtcbiAgd2lkdGg6IDcwdnc7XG4gIGhlaWdodDogNjB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRhaW5lciAuZXZlcnl0aGluZyAuaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNjY2NjY2M7XG59XG4uY29udGFpbmVyIC5ldmVyeXRoaW5nIC5pbWFnZSBpb24tYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDYwdnc7XG4gIGxlZnQ6IDUlO1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC5ldmVyeXRoaW5nIC5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTE1JTtcbn1cbi5jb250YWluZXIgLmV2ZXJ5dGhpbmcgLmZvcm0gaW9uLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5ldmVyeXRoaW5nIC5mb3JtIGlvbi1idXR0b24ge1xuICB3aWR0aDogNjB2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMCU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzk1KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IGdyZXk7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/create-account/create-account.page.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/create-account/create-account.page.ts ***!
          \*******************************************************/
        /*! exports provided: CreateAccountPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPage", function () { return CreateAccountPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var CreateAccountPage = /** @class */ (function () {
                function CreateAccountPage(router, alertCtrl, actionSheetCtrl, camera, formBuilder) {
                    this.router = router;
                    this.alertCtrl = alertCtrl;
                    this.actionSheetCtrl = actionSheetCtrl;
                    this.camera = camera;
                    this.formBuilder = formBuilder;
                    this.dbProfile = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("userProfile");
                    this.storage = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
                    this.uid = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
                    this.emailPattern = "[a-zA-Z0-9-_.+#$!=%^&*/?]+[@][a-zA-Z0-9-]+[.][a-zA-Z0-9]";
                    this.profilePic = "";
                    this.account = formBuilder.group({
                        name: [this.name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(250)])],
                        surname: [this.surname, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(250)])],
                        address: [this.surname, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(250)])],
                        email: [this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(this.emailPattern)])],
                    });
                }
                CreateAccountPage.prototype.ngOnInit = function () {
                };
                CreateAccountPage.prototype.check = function (val) {
                    if (val == 'close') {
                        document.getElementById('image').style.display = 'none';
                    }
                    else {
                        document.getElementById('image').style.display = 'flex';
                    }
                };
                CreateAccountPage.prototype.createAccount = function () {
                    var _this = this;
                    // let email = this.account.get('name')
                    if (this.profilePic == "") {
                        this.alert('Profile picture required', 'Please upload your image');
                    }
                    else {
                        this.name = this.account.get('name').value;
                        this.surname = this.account.get('surname').value;
                        this.email = this.account.get('email').value;
                        this.address = this.account.get('address').value;
                        this.dbProfile.doc(this.uid).set({
                            name: this.name, surname: this.surname, cellPhone: firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.phoneNumber,
                            email: this.email, profilePic: this.profilePic, address: this.address
                        }).then(function (res) {
                            _this.router.navigateByUrl('home');
                        }).catch(function (err) {
                            _this.alert('Profile not created', 'Please try again..');
                        });
                    }
                };
                CreateAccountPage.prototype.selectImage = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var actionSheet;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                                        header: "Select image",
                                        buttons: [{
                                                icon: 'images',
                                                text: 'Gallery',
                                                handler: function () {
                                                    _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                                }
                                            },
                                            {
                                                icon: 'camera',
                                                text: 'Camera',
                                                handler: function () {
                                                    _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                                }
                                            },
                                            {
                                                icon: 'close',
                                                text: 'Cancel',
                                                role: 'cancel'
                                            }
                                        ]
                                    })];
                                case 1:
                                    actionSheet = _a.sent();
                                    return [4 /*yield*/, actionSheet.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                CreateAccountPage.prototype.takePicture = function (sourcetype) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var options;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    options = {
                                        destinationType: this.camera.DestinationType.DATA_URL,
                                        encodingType: this.camera.EncodingType.JPEG,
                                        mediaType: this.camera.MediaType.PICTURE,
                                        quality: 90,
                                        targetHeight: 600,
                                        targetWidth: 600,
                                        sourceType: sourcetype,
                                        saveToPhotoAlbum: false,
                                        correctOrientation: true
                                    };
                                    return [4 /*yield*/, this.camera.getPicture(options).then(function (res) {
                                            var base64Image = 'data:image/jpeg;base64,' + res;
                                            //this.profileImage = base64Image;
                                            var file = 'HomeOwner-Profile/' + _this.uid + '.jpg';
                                            var UserImage = _this.storage.child(file);
                                            var upload = UserImage.putString(base64Image, 'data_url');
                                            upload.on('state_changed', function (snapshot) {
                                                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                                _this.uploadprogress = progress;
                                                console.log('Uploading image..', progress);
                                                //this.loaderAnimate = true;
                                                //  this.loaderMessages = 'Uploading Image...';
                                                // if (progress == 100) {
                                                //   //this.isuploading = false;
                                                // }
                                            }, function (err) {
                                            }, function () {
                                                upload.snapshot.ref.getDownloadURL().then(function (downUrl) {
                                                    _this.profilePic = downUrl;
                                                    // console.log('Image downUrl.............', this.HomeOwnerProfile.image);
                                                    /*     setTimeout(() => {
                                                         this.loaderAnimate = false;
                                                       }, 1000); */
                                                    //  this.isuploaded = true;
                                                });
                                            });
                                        }, function (err) {
                                            console.log("Something went wrong: ", err);
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                CreateAccountPage.prototype.alert = function (header, message) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var al;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.alertCtrl.create({
                                        header: header,
                                        message: message
                                    })];
                                case 1:
                                    al = _a.sent();
                                    al.present();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                return CreateAccountPage;
            }());
            CreateAccountPage.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
                { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
            ]; };
            CreateAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-create-account',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-account/create-account.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-account.page.scss */ "./src/app/create-account/create-account.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
                    _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
            ], CreateAccountPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=14-es2015.js.map
//# sourceMappingURL=14-es5.js.map
//# sourceMappingURL=14-es5.js.map