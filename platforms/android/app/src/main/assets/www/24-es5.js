(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>SignUp</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");
            /***/ 
        }),
        /***/ "./src/app/sign-up/sign-up-routing.module.ts": 
        /*!***************************************************!*\
          !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
          \***************************************************/
        /*! exports provided: SignUpPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function () { return SignUpPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");
            var routes = [
                {
                    path: '',
                    component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
                }
            ];
            var SignUpPageRoutingModule = /** @class */ (function () {
                function SignUpPageRoutingModule() {
                }
                return SignUpPageRoutingModule;
            }());
            SignUpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], SignUpPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/sign-up/sign-up.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/sign-up/sign-up.module.ts ***!
          \*******************************************/
        /*! exports provided: SignUpPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () { return SignUpPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/app/sign-up/sign-up-routing.module.ts");
            /* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");
            var SignUpPageModule = /** @class */ (function () {
                function SignUpPageModule() {
                }
                return SignUpPageModule;
            }());
            SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"]
                    ],
                    declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
                })
            ], SignUpPageModule);
            /***/ 
        }),
        /***/ "./src/app/sign-up/sign-up.page.scss": 
        /*!*******************************************!*\
          !*** ./src/app/sign-up/sign-up.page.scss ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/sign-up/sign-up.page.ts": 
        /*!*****************************************!*\
          !*** ./src/app/sign-up/sign-up.page.ts ***!
          \*****************************************/
        /*! exports provided: SignUpPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function () { return SignUpPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SignUpPage = /** @class */ (function () {
                function SignUpPage() {
                }
                SignUpPage.prototype.ngOnInit = function () {
                };
                return SignUpPage;
            }());
            SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sign-up',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/sign-up/sign-up.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], SignUpPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=24-es2015.js.map
//# sourceMappingURL=24-es5.js.map
//# sourceMappingURL=24-es5.js.map