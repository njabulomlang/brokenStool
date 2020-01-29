(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-account/create-account.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-account/create-account.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"inner-container\">\r\n      <div id=\"left\">\r\n       \r\n        <div class=\"logo-container-left\">\r\n          <img src=\"../../assets/Logo.png\" id=\"logo-left\" alt=\"\">\r\n          <br> <h1>CREATE ACCOUNT</h1>\r\n        </div>\r\n      </div>\r\n      <div id=\"right\">\r\n        <div class=\"cont\">\r\n          <div class=\"logo-container-right\">\r\n            <h1 style=\"width: 100%; text-align: center;\">Create Account</h1>\r\n            <br>\r\n          </div>\r\n        \r\n          <div class=\"everything\">\r\n            <div class=\"title\">\r\n            \r\n            </div>\r\n            <div class=\"image\" id=\"image\" *ngIf=\"profilePic\">\r\n              <img src=\"{{profilePic}}\" style=\"overflow: hidden;\" (click)=\"selectImage()\">\r\n        \r\n            </div>\r\n            <div class=\"image\" id=\"image\" *ngIf=\"!profilePic\">\r\n  \r\n              <img src=\"../../assets/user-icon-image-placeholder-300-grey.jpg\" style=\"overflow: hidden;\" (click)=\"selectImage()\">\r\n\r\n            </div>\r\n      \r\n            <div class=\"form\">\r\n              <form [formGroup]=\"account\">\r\n                <ion-item color=\"transparent\">\r\n                  <ion-input placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"name\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n                </ion-item>\r\n      \r\n                <ion-item color=\"transparent\">\r\n                  <ion-input placeholder=\"Surname\" formControlName=\"surname\" [(ngModel)]=\"surname\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n                </ion-item>\r\n      \r\n                <ion-item color=\"transparent\">\r\n                  <ion-input placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"email\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n                </ion-item>\r\n      \r\n                <ion-item color=\"transparent\">\r\n                  <ion-input placeholder=\"Address\" formControlName=\"address\" [(ngModel)]=\"address\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n                </ion-item>\r\n      \r\n                <br>\r\n                <ion-button (click)=\"createAccount()\" [disabled]=\"!account.valid\" color=\"transparent\" >DONE\r\n                </ion-button>\r\n              </form>\r\n      \r\n            </div>\r\n      \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>createAccount</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<!-- <ion-content>\r\n\r\n  <div class=\"container\" slot= \"fixed\">\r\n    <div class=\"blur\">\r\n      <img src=\"https://images.unsplash.com/photo-1530834395125-2a7eb8848ac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1164&q=80i\" alt=\"Your Profile Image\">\r\n    </div>\r\n    <div class=\"everything\">\r\n      <div class=\"title\">\r\n        <p>CREATE <br> ACCOUNT</p>\r\n      </div>\r\n      <div class=\"image\" id=\"image\" *ngIf=\"profilePic\">\r\n        <img src=\"{{profilePic}}\" style=\"overflow: hidden;\">\r\n        <ion-button (click)=\"selectImage()\" color=\"transparent\">SELECT IMAGE</ion-button>\r\n      </div>\r\n      <div class=\"image\" id=\"image\" *ngIf=\"!profilePic\">\r\n        <img src=\"../../assets/user-icon-image-placeholder-300-grey.jpg\" style=\"overflow: hidden;\">\r\n        <ion-button (click)=\"selectImage()\" color=\"transparent\">SELECT IMAGE</ion-button>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <form [formGroup]=\"account\">\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"name\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Surname\" formControlName=\"surname\" [(ngModel)]=\"surname\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"email\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Address\" formControlName=\"address\" [(ngModel)]=\"address\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <br>\r\n          <ion-button (click)=\"createAccount()\" [disabled]=\"!account.valid\" color=\"transparent\">DONE\r\n          </ion-button>\r\n        </form>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content> -->");

/***/ }),

/***/ "./src/app/create-account/create-account-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/create-account/create-account-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CreateAccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPageRoutingModule", function() { return CreateAccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    CreateAccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CreateAccountPageRoutingModule);
    return CreateAccountPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/create-account/create-account.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/create-account/create-account.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPageModule", function() { return CreateAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-account-routing.module */ "./src/app/create-account/create-account-routing.module.ts");
/* harmony import */ var _create_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-account.page */ "./src/app/create-account/create-account.page.ts");







var CreateAccountPageModule = /** @class */ (function () {
    function CreateAccountPageModule() {
    }
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
    return CreateAccountPageModule;
}());



/***/ }),

/***/ "./src/app/create-account/create-account.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/create-account/create-account.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to left, w hite, rgba(0, 0, 0, 0.363));\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.inner-container {\n  width: 60%;\n  height: 70%;\n  transition: 300ms;\n  margin: 0 auto;\n  background: white;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.281);\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  min-height: 300px; }\n\n.inner-container > div {\n  transition: 300ms;\n  width: 50%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n#prompt {\n  color: grey;\n  font-style: italic;\n  font-size: 12px; }\n\n#password-forgotten {\n  color: blue;\n  cursor: pointer;\n  font-size: 14px; }\n\n.cont {\n  margin: 0 auto;\n  width: 95%;\n  background: white;\n  padding-left: 40px;\n  padding-right: 40px; }\n\n.logo-container-right {\n  text-align: center;\n  width: 100%;\n  display: none;\n  -webkit-filter: invert(100%);\n          filter: invert(100%); }\n\n.logo-container-left {\n  text-align: center;\n  color: white; }\n\n#logo {\n  width: 100px;\n  transition: 300ms; }\n\n#logo-left {\n  width: 200px; }\n\n.inner-container > div:nth-child(1) {\n  background: url(\"https://i.pinimg.com/564x/3c/ba/9d/3cba9d4e0c240a0d87eb5ea122fe88cb.jpg\");\n  background-size: cover; }\n\n.inner-container > div:nth-child(2) {\n  background: white; }\n\nion-button {\n  text-transform: capitalize; }\n\n.image {\n  width: 15vw;\n  height: 15vw;\n  margin: auto; }\n\n.image img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.form {\n  font-family: 'Poppins'; }\n\n.form ion-button {\n    width: 100%;\n    background: #000024; }\n\n@media screen and (max-width: 1024px) {\n  #logo {\n    width: 200px; }\n  .logo-container-right {\n    text-align: center;\n    display: block; }\n  .inner-container {\n    width: 60%;\n    height: 70%; }\n  .inner-container > div {\n    width: 100%;\n    height: 100%; }\n  .inner-container > div:nth-child(1) {\n    display: none; }\n  .inner-container > div:nth-child(2) {\n    background-image: linear-gradient(rgba(190, 190, 190, 0.589), rgba(187, 187, 187, 0.514)), url(\"https://i.pinimg.com/564x/3c/ba/9d/3cba9d4e0c240a0d87eb5ea122fe88cb.jpg\");\n    background-position: center;\n    background-size: cover;\n    height: 100%;\n    width: 100%; }\n    .inner-container > div:nth-child(2) .cont {\n      background: transparent; }\n      .inner-container > div:nth-child(2) .cont .everything .image {\n        width: 40vw;\n        height: 40vw; }\n    .inner-container > div:nth-child(2) .login {\n      margin-top: 100px; }\n      .inner-container > div:nth-child(2) .login ion-button {\n        background-color: white;\n        color: black;\n        border-radius: 8px; }\n      .inner-container > div:nth-child(2) .login ion-input {\n        color: black; } }\n\n@media screen and (max-width: 512px) {\n  #logo {\n    width: 150px; }\n  .inner-container {\n    width: 100%;\n    height: 100%;\n    border-radius: 0; }\n  .inner-container > div {\n    width: 100%;\n    height: 100%; }\n  .inner-container > div:nth-child(1) {\n    display: none; } }\n\n@media screen and (max-height: 435px) {\n  .inner-container {\n    height: 100%;\n    overflow: scroll; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWFjY291bnQvQzpcXFVzZXJzXFx6YW5lbFxcRG9jdW1lbnRzXFxicm9rZW5TdG9vbC9zcmNcXGFwcFxcY3JlYXRlLWFjY291bnRcXGNyZWF0ZS1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0VBQWtFO0VBQ2xFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUVWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFFWCxhQUFhO0VBQ2IsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUV0QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsMEZBQTBGO0VBQzFGLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLFdBQVU7RUFDVixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUhkO0lBS0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBa0I7T0FBbEIsaUJBQWtCLEVBQUE7O0FBSXRCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRHhCO0lBR0ksV0FBVztJQUNYLG1CQUF5QixFQUFBOztBQUk3QjtFQUNFO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBRWhCO0lBQ0UsVUFBVTtJQUNWLFdBQVcsRUFBQTtFQUViO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQTtFQUVkO0lBQ0UsYUFBYSxFQUFBO0VBRWY7SUFDRSx5S0FDZ0Y7SUFDaEYsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVyxFQUFBO0lBTmI7TUFTSSx1QkFBdUIsRUFBQTtNQVQzQjtRQWNELFdBQVc7UUFDWCxZQUFZLEVBQUE7SUFmWDtNQW9CSSxpQkFBaUIsRUFBQTtNQXBCckI7UUFzQk0sdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixrQkFBa0IsRUFBQTtNQXhCeEI7UUE0Qk0sWUFBWSxFQUFBLEVBQ2I7O0FBSVA7RUFDRTtJQUNFLFlBQVksRUFBQTtFQUVkO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFFZDtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUVIO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtYWNjb3VudC9jcmVhdGUtYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHcgaGl0ZSwgcmdiYSgwLCAwLCAwLCAwLjM2MykpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaW5uZXItY29udGFpbmVyIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjgxKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxufVxyXG4uaW5uZXItY29udGFpbmVyID4gZGl2IHtcclxuICB0cmFuc2l0aW9uOiAzMDBtcztcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI3Byb21wdCB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4jcGFzc3dvcmQtZm9yZ290dGVuIHtcclxuICBjb2xvcjogYmx1ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jb250IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTUlO1xyXG4gIC8vIGhlaWdodDogOTUlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG59XHJcbi5sb2dvLWNvbnRhaW5lci1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbn1cclxuLmxvZ28tY29udGFpbmVyLWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI2xvZ28ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0cmFuc2l0aW9uOiAzMDBtcztcclxufVxyXG4jbG9nby1sZWZ0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLmlubmVyLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvM2MvYmEvOWQvM2NiYTlkNGUwYzI0MGEwZDg3ZWI1ZWExMjJmZTg4Y2IuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmlubmVyLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgd2lkdGg6MTV2dztcclxuICBoZWlnaHQ6IDE1dnc7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogIGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm17XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICBpb24tYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMzYpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgI2xvZ28ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICAubG9nby1jb250YWluZXItcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5pbm5lci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gIH1cclxuICAuaW5uZXItY29udGFpbmVyID4gZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuaW5uZXItY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuaW5uZXItY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxOTAsIDE5MCwgMTkwLCAwLjU4OSksIHJnYmEoMTg3LCAxODcsIDE4NywgMC41MTQpKSxcclxuICAgICAgdXJsKFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC8zYy9iYS85ZC8zY2JhOWQ0ZTBjMjQwYTBkODdlYjVlYTEyMmZlODhjYi5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLmNvbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbi5ldmVyeXRoaW5ne1xyXG5cclxuICAuaW1hZ2V7XHJcbiB3aWR0aDogNDB2dztcclxuIGhlaWdodDogNDB2dztcclxuICB9XHJcbn0gICAgXHJcbiAgICB9XHJcbiAgICAubG9naW57XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEycHgpIHtcclxuICAjbG9nbyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG4gIC5pbm5lci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICAuaW5uZXItY29udGFpbmVyID4gZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuaW5uZXItY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDM1cHgpIHtcclxuICAuaW5uZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BYmVsfFBvaXJldCtPbmV8T3BlbitTYW5zK0NvbmRlbnNlZHxKdXJhfE1hbmphcml8UG9wcGluc3xSYWxld2F5fE1vbnRzZXJyYXQgXCIpO1xyXG4vLyAuY29udGFpbmVyIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGhlaWdodDogMTAwdmg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzA4MzQzOTUxMjUtMmE3ZWI4ODQ4YWMwP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTE2NCZxPTgwaVwiKTtcclxuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuLy8gICAuYmx1ciB7XHJcbi8vICAgICB3aWR0aDogMTAwdnc7XHJcbi8vICAgICBoZWlnaHQ6IDEwMXZoO1xyXG4vLyAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4vLyAgICAgbGVmdDogLTE1dnc7XHJcbi8vICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMTk5KTtcclxuLy8gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbi8vICAgICBtYXJnaW46IC01cHg7XHJcblxyXG4vLyAgICAgaW1nIHtcclxuLy8gICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vICAgICAgIGZpbHRlcjogYmx1cigxNXB4KTtcclxuLy8gICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTVweCk7XHJcbi8vICAgICAgIC1tb3otZmlsdGVyOiBibHVyKDE1cHgpO1xyXG4vLyAgICAgICAtby1maWx0ZXI6IGJsdXIoMTVweCk7XHJcbi8vICAgICAgIC1tcy1maWx0ZXI6IGJsdXIoMTVweCk7XHJcbi8vICAgICAgIG1hcmdpbjogLTVweCAtMTBweCAtMTBweCAtNXB4O1xyXG4vLyAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuLy8gICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbi8vICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuLy8gICAuZXZlcnl0aGluZyB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBib3R0b206IDIwcHg7XHJcbi8vICAgICBsZWZ0OiAxMCU7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuXHJcbi8vICAgICAudGl0bGUge1xyXG4vLyAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgIGxlZnQ6IC0xMCU7XHJcbi8vICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuLy8gICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuLy8gICAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgICBmb250LXNpemU6IDh2dztcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuaW1hZ2Uge1xyXG4vLyAgICAgICB3aWR0aDogNzB2dztcclxuLy8gICAgICAgaGVpZ2h0OiA2MHZ3O1xyXG4vLyAgICAgLy8gICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4vLyAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICBsZWZ0OiAtNSU7XHJcbi8vIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICAgIGltZ3tcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICAgICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigyMDQsIDIwNCwgMjA0KTtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgaW9uLWJ1dHRvbiB7XHJcbi8vICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4vLyAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIGJvdHRvbTogMjBweDtcclxuLy8gICAgICAgICB3aWR0aDogNjB2dztcclxuLy8gICAgICAgICBsZWZ0OiA1JTtcclxuLy8gICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuZm9ybSB7XHJcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgIGxlZnQ6IC0xNSU7XHJcblxyXG4vLyAgICAgICBpb24taXRlbSB7XHJcbi8vICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICBpb24tYnV0dG9uIHtcclxuLy8gICAgICAgICB3aWR0aDogNjB2dztcclxuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgLy8gYm90dG9tOiAxMHB4O1xyXG4vLyAgICAgICAgIGxlZnQ6IDIwJTtcclxuLy8gICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuLy8gICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4vLyAgICAgICAgIGNvbG9yOiBibGFjaztcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OTUpO1xyXG4vLyAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IGdyZXk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/create-account/create-account.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/create-account/create-account.page.ts ***!
  \*******************************************************/
/*! exports provided: CreateAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPage", function() { return CreateAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CreateAccountPage = /** @class */ (function () {
    function CreateAccountPage(router, alertCtrl, actionSheetCtrl, route, camera, formBuilder) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.route = route;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.dbProfile = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("userProfile");
        this.storage = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        this.uid = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        this.address = '';
        this.profilePic = '';
        this.account = formBuilder.group({
            name: [this.name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(250)])],
            surname: [this.surname, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(250)])],
            address: [this.address, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(250)])],
            email: [this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(this.emailPattern)])],
        });
        if (firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email !== null) {
            this.name = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.displayName.substr(0, firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.displayName.indexOf(' '));
            this.surname = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.displayName.substr(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.displayName.indexOf(' ') + 1);
            this.email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
            this.profilePic = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.photoURL;
        }
        else {
            this.name = '';
            this.surname = '';
            this.profilePic = '';
        }
    }
    CreateAccountPage.prototype.ngOnInit = function () {
        console.log('my email', this.email);
        // this.name = 
        //this.surname 
        //this.email = firebase.auth().currentUser.email;
        this.profilePic = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.photoURL;
        /* this.name = firebase.auth().currentUser.displayName.substr(0,firebase.auth().currentUser.displayName.indexOf(' '));
        this.surname = firebase.auth().currentUser.displayName.substr(firebase.auth().currentUser.displayName.indexOf(' ')+1);
        this.email = firebase.auth().currentUser.email;
        this.profilePic = firebase.auth().currentUser.photoURL; */
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
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                            })
                            // this.imageSelected = true;
                            // })
                        ];
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
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    CreateAccountPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
    CreateAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-account',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-account/create-account.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-account.page.scss */ "./src/app/create-account/create-account.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], CreateAccountPage);
    return CreateAccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=17.js.map