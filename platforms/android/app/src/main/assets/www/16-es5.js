(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kwanga-apparel/kwanga-apparel.page.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kwanga-apparel/kwanga-apparel.page.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>KwangaApparel</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");
            /***/ 
        }),
        /***/ "./src/app/kwanga-apparel/kwanga-apparel-routing.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/kwanga-apparel/kwanga-apparel-routing.module.ts ***!
          \*****************************************************************/
        /*! exports provided: KwangaApparelPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KwangaApparelPageRoutingModule", function () { return KwangaApparelPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _kwanga_apparel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kwanga-apparel.page */ "./src/app/kwanga-apparel/kwanga-apparel.page.ts");
            var routes = [
                {
                    path: '',
                    component: _kwanga_apparel_page__WEBPACK_IMPORTED_MODULE_3__["KwangaApparelPage"]
                }
            ];
            var KwangaApparelPageRoutingModule = /** @class */ (function () {
                function KwangaApparelPageRoutingModule() {
                }
                return KwangaApparelPageRoutingModule;
            }());
            KwangaApparelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], KwangaApparelPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/kwanga-apparel/kwanga-apparel.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/kwanga-apparel/kwanga-apparel.module.ts ***!
          \*********************************************************/
        /*! exports provided: KwangaApparelPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KwangaApparelPageModule", function () { return KwangaApparelPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _kwanga_apparel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kwanga-apparel-routing.module */ "./src/app/kwanga-apparel/kwanga-apparel-routing.module.ts");
            /* harmony import */ var _kwanga_apparel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kwanga-apparel.page */ "./src/app/kwanga-apparel/kwanga-apparel.page.ts");
            var KwangaApparelPageModule = /** @class */ (function () {
                function KwangaApparelPageModule() {
                }
                return KwangaApparelPageModule;
            }());
            KwangaApparelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _kwanga_apparel_routing_module__WEBPACK_IMPORTED_MODULE_5__["KwangaApparelPageRoutingModule"]
                    ],
                    declarations: [_kwanga_apparel_page__WEBPACK_IMPORTED_MODULE_6__["KwangaApparelPage"]]
                })
            ], KwangaApparelPageModule);
            /***/ 
        }),
        /***/ "./src/app/kwanga-apparel/kwanga-apparel.page.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/kwanga-apparel/kwanga-apparel.page.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2t3YW5nYS1hcHBhcmVsL2t3YW5nYS1hcHBhcmVsLnBhZ2Uuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/kwanga-apparel/kwanga-apparel.page.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/kwanga-apparel/kwanga-apparel.page.ts ***!
          \*******************************************************/
        /*! exports provided: KwangaApparelPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KwangaApparelPage", function () { return KwangaApparelPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var KwangaApparelPage = /** @class */ (function () {
                function KwangaApparelPage() {
                }
                KwangaApparelPage.prototype.ngOnInit = function () {
                };
                return KwangaApparelPage;
            }());
            KwangaApparelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kwanga-apparel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kwanga-apparel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kwanga-apparel/kwanga-apparel.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kwanga-apparel.page.scss */ "./src/app/kwanga-apparel/kwanga-apparel.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], KwangaApparelPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=16-es2015.js.map
//# sourceMappingURL=16-es5.js.map
//# sourceMappingURL=16-es5.js.map