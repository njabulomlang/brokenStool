(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n\r\n<div class=\"container\">\r\n  <div class=\"appname\">\r\n    <p><span>DANKIE JESU</span> <br> & <br>KWANGA APPAREL</p>\r\n  </div>\r\n\r\n  <div class=\"btnz\">\r\n    <ion-button (click)=\"explore()\" color=\"transparent\">\r\n      EXPLORE\r\n    </ion-button>\r\n\r\n    <ion-button (click)=\"login()\" color=\"transparent\">\r\n        SIGN-IN\r\n      </ion-button>\r\n  </div>\r\n</div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/welcome/welcome-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/welcome/welcome-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/welcome/welcome-routing.module.ts");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n  position: absolute;\n}\n\n.container {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(rgba(0, 0, 0, 0.295)), url('yellow.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.container .btnz {\n  display: flex;\n  flex-flow: column;\n  position: absolute;\n  bottom: 15%;\n}\n\n.container .btnz ion-button {\n  width: 70vw;\n  border-radius: 30px;\n  background: white;\n  color: black;\n  font-family: \"Raleway\";\n  letter-spacing: 3px;\n}\n\n.container .appname {\n  text-align: center;\n  position: absolute;\n  top: 30%;\n}\n\n.container .appname p {\n  color: white;\n  font-family: \"Raleway\";\n  letter-spacing: 2px;\n  font-weight: lighter;\n}\n\n.container .appname p span {\n  font-size: 10vw;\n  letter-spacing: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFx3ZWxjb21lXFx3ZWxjb21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9FQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDUjs7QURDUTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDWjs7QURHSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDRFI7O0FERVE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQVo7O0FEQ1k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNDaEIiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yOTUpKSx1cmwoJy4uLy4uL2Fzc2V0cy95ZWxsb3cuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbiAgICAuYnRuentcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDE1JTtcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hcHBuYW1le1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzMCU7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTB2dztcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMjk1KSksIHVybChcIi4uLy4uL2Fzc2V0cy95ZWxsb3cuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5idG56IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNSU7XG59XG4uY29udGFpbmVyIC5idG56IGlvbi1idXR0b24ge1xuICB3aWR0aDogNzB2dztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuLmNvbnRhaW5lciAuYXBwbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbn1cbi5jb250YWluZXIgLmFwcG5hbWUgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbi5jb250YWluZXIgLmFwcG5hbWUgcCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMHZ3O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let WelcomePage = class WelcomePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.router.navigateByUrl("login");
    }
    explore() {
        this.router.navigateByUrl("home");
    }
};
WelcomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=26-es2015.js.map