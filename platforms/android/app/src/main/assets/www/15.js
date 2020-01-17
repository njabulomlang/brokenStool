(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-account/create-account.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-account/create-account.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"inner-container\">\r\n      <div id=\"left\">\r\n        <p>CREATE <br> ACCOUNT</p>\r\n\r\n        <div class=\"logo-container-left\">\r\n          <img src=\"../../assets/NoPath - Copy.svg\" id=\"logo-left\" alt=\"\">\r\n          <br> <h1>CREATE ACCOUNT</h1>\r\n        </div>\r\n      </div>\r\n      <div id=\"right\">\r\n        <div class=\"cont\">\r\n          <div class=\"logo-container-right\">\r\n            <img src=\"../../assets/NoPath - Copy.svg\" id=\"logo\" alt=\"\">\r\n            <br>\r\n          </div>\r\n        \r\n          <div class=\"everything\">\r\n            <div class=\"title\">\r\n            \r\n            </div>\r\n            <div class=\"image\" id=\"image\" *ngIf=\"profilePic\">\r\n              <img src=\"{{profilePic}}\" style=\"overflow: hidden;\" (click)=\"selectImage()\">\r\n        \r\n            </div>\r\n            <div class=\"image\" id=\"image\" *ngIf=\"!profilePic\">\r\n              <img src=\"../../assets/user-icon-image-placeholder-300-grey.jpg\" style=\"overflow: hidden;\" (click)=\"selectImage()\">\r\n\r\n            </div>\r\n      \r\n            <div class=\"form\">\r\n              <form [formGroup]=\"account\">\r\n                <ion-item color=\"transparent\">\r\n                  <ion-input placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"name\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n                </ion-item>\r\n      \r\n                <ion-item color=\"transparent\">\r\n                  <ion-input placeholder=\"Surname\" formControlName=\"surname\" [(ngModel)]=\"surname\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n                </ion-item>\r\n      \r\n                <ion-item color=\"transparent\">\r\n                  <ion-input placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"email\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n                </ion-item>\r\n      \r\n                <ion-item color=\"transparent\">\r\n                  <ion-input placeholder=\"Address\" formControlName=\"address\" [(ngModel)]=\"address\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n                </ion-item>\r\n      \r\n                <br>\r\n                <ion-button (click)=\"createAccount()\" [disabled]=\"!account.valid\" color=\"transparent\" >DONE\r\n                </ion-button>\r\n              </form>\r\n      \r\n            </div>\r\n      \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>createAccount</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<!-- <ion-content>\r\n\r\n  <div class=\"container\" slot= \"fixed\">\r\n    <div class=\"blur\">\r\n      <img src=\"https://images.unsplash.com/photo-1530834395125-2a7eb8848ac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1164&q=80i\" alt=\"Your Profile Image\">\r\n    </div>\r\n    <div class=\"everything\">\r\n      <div class=\"title\">\r\n        <p>CREATE <br> ACCOUNT</p>\r\n      </div>\r\n      <div class=\"image\" id=\"image\" *ngIf=\"profilePic\">\r\n        <img src=\"{{profilePic}}\" style=\"overflow: hidden;\">\r\n        <ion-button (click)=\"selectImage()\" color=\"transparent\">SELECT IMAGE</ion-button>\r\n      </div>\r\n      <div class=\"image\" id=\"image\" *ngIf=\"!profilePic\">\r\n        <img src=\"../../assets/user-icon-image-placeholder-300-grey.jpg\" style=\"overflow: hidden;\">\r\n        <ion-button (click)=\"selectImage()\" color=\"transparent\">SELECT IMAGE</ion-button>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <form [formGroup]=\"account\">\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"name\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Surname\" formControlName=\"surname\" [(ngModel)]=\"surname\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"email\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Address\" formControlName=\"address\" [(ngModel)]=\"address\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <br>\r\n          <ion-button (click)=\"createAccount()\" [disabled]=\"!account.valid\" color=\"transparent\">DONE\r\n          </ion-button>\r\n        </form>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content> -->");

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
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to left, w hite, rgba(0, 0, 0, 0.363));\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.inner-container {\n  width: 60%;\n  height: 70%;\n  transition: 300ms;\n  margin: 0 auto;\n  background: white;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.281);\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  min-height: 300px; }\n\n.inner-container > div {\n  transition: 300ms;\n  width: 50%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n#prompt {\n  color: grey;\n  font-style: italic;\n  font-size: 12px; }\n\n#password-forgotten {\n  color: blue;\n  cursor: pointer;\n  font-size: 14px; }\n\n.cont {\n  margin: 0 auto;\n  width: 95%;\n  background: white;\n  padding-left: 40px;\n  padding-right: 40px; }\n\n.logo-container-right {\n  text-align: center;\n  width: 100%;\n  display: none;\n  -webkit-filter: invert(100%);\n          filter: invert(100%); }\n\n.logo-container-left {\n  text-align: center;\n  color: white; }\n\n#logo {\n  width: 100px;\n  transition: 300ms; }\n\n#logo-left {\n  width: 200px; }\n\n.inner-container > div:nth-child(1) {\n  background: url(\"https://images.unsplash.com/photo-1530834395125-2a7eb8848ac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1164&q=80i\");\n  background-size: cover; }\n\n.inner-container > div:nth-child(2) {\n  background: white; }\n\nion-button {\n  text-transform: capitalize; }\n\n.image {\n  width: 15vw;\n  height: 15vw;\n  margin: auto; }\n\n.image img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.form {\n  font-family: 'Poppins'; }\n\n.form ion-button {\n    width: 100%;\n    background: #000024; }\n\n@media screen and (max-width: 1024px) {\n  #logo {\n    width: 200px; }\n  .logo-container-right {\n    text-align: center;\n    display: block; }\n  .inner-container {\n    width: 60%;\n    height: 70%; }\n  .inner-container > div {\n    width: 100%;\n    height: 100%; }\n  .inner-container > div:nth-child(1) {\n    display: none; } }\n\n@media screen and (max-width: 512px) {\n  #logo {\n    width: 150px; }\n  .inner-container {\n    width: 100%;\n    height: 100%;\n    border-radius: 0; }\n  .inner-container > div {\n    width: 100%;\n    height: 100%; }\n  .inner-container > div:nth-child(1) {\n    display: none; } }\n\n@media screen and (max-height: 435px) {\n  .inner-container {\n    height: 100%;\n    overflow: scroll; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWFjY291bnQvQzpcXFVzZXJzXFxOTWxhbmdlbmlcXERvY3VtZW50c1xcR2l0SHViXFxicm9rZW5TdG9vbC9zcmNcXGFwcFxcY3JlYXRlLWFjY291bnRcXGNyZWF0ZS1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0VBQWtFO0VBQ2xFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUVWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFFWCxhQUFhO0VBQ2IsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUV0QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsZ0lBQWdJO0VBQ2hJLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLFdBQVU7RUFDVixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUhkO0lBS0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBa0I7T0FBbEIsaUJBQWtCLEVBQUE7O0FBSXRCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRHhCO0lBR0ksV0FBVztJQUNYLG1CQUF5QixFQUFBOztBQUk3QjtFQUNFO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBRWhCO0lBQ0UsVUFBVTtJQUNWLFdBQVcsRUFBQTtFQUViO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQTtFQUVkO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBRUg7RUFDRTtJQUNFLFlBQVksRUFBQTtFQUVkO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFFZDtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUVIO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtYWNjb3VudC9jcmVhdGUtYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHcgaGl0ZSwgcmdiYSgwLCAwLCAwLCAwLjM2MykpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaW5uZXItY29udGFpbmVyIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjgxKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxufVxyXG4uaW5uZXItY29udGFpbmVyID4gZGl2IHtcclxuICB0cmFuc2l0aW9uOiAzMDBtcztcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI3Byb21wdCB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4jcGFzc3dvcmQtZm9yZ290dGVuIHtcclxuICBjb2xvcjogYmx1ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jb250IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTUlO1xyXG4gIC8vIGhlaWdodDogOTUlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG59XHJcbi5sb2dvLWNvbnRhaW5lci1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbn1cclxuLmxvZ28tY29udGFpbmVyLWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI2xvZ28ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0cmFuc2l0aW9uOiAzMDBtcztcclxufVxyXG4jbG9nby1sZWZ0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLmlubmVyLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMwODM0Mzk1MTI1LTJhN2ViODg0OGFjMD9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTExNjQmcT04MGlcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uaW5uZXItY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICB3aWR0aDoxNXZ3O1xyXG4gIGhlaWdodDogMTV2dztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiAgY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybXtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gIGlvbi1idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAzNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAjbG9nbyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG4gIC5sb2dvLWNvbnRhaW5lci1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmlubmVyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgfVxyXG4gIC5pbm5lci1jb250YWluZXIgPiBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5pbm5lci1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMnB4KSB7XHJcbiAgI2xvZ28ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuICAuaW5uZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgLmlubmVyLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmlubmVyLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQzNXB4KSB7XHJcbiAgLmlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWJlbHxQb2lyZXQrT25lfE9wZW4rU2FucytDb25kZW5zZWR8SnVyYXxNYW5qYXJpfFBvcHBpbnN8UmFsZXdheXxNb250c2VycmF0IFwiKTtcclxuLy8gLmNvbnRhaW5lciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDEwMHZoO1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMwODM0Mzk1MTI1LTJhN2ViODg0OGFjMD9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTExNjQmcT04MGlcIik7XHJcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbi8vICAgLmJsdXIge1xyXG4vLyAgICAgd2lkdGg6IDEwMHZ3O1xyXG4vLyAgICAgaGVpZ2h0OiAxMDF2aDtcclxuLy8gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuLy8gICAgIGxlZnQ6IC0xNXZ3O1xyXG4vLyAgICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjE5OSk7XHJcbi8vICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgbWFyZ2luOiAtNXB4O1xyXG5cclxuLy8gICAgIGltZyB7XHJcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgICBmaWx0ZXI6IGJsdXIoMTVweCk7XHJcbi8vICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDE1cHgpO1xyXG4vLyAgICAgICAtbW96LWZpbHRlcjogYmx1cigxNXB4KTtcclxuLy8gICAgICAgLW8tZmlsdGVyOiBibHVyKDE1cHgpO1xyXG4vLyAgICAgICAtbXMtZmlsdGVyOiBibHVyKDE1cHgpO1xyXG4vLyAgICAgICBtYXJnaW46IC01cHggLTEwcHggLTEwcHggLTVweDtcclxuLy8gICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbi8vICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vICAgLmV2ZXJ5dGhpbmcge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm90dG9tOiAyMHB4O1xyXG4vLyAgICAgbGVmdDogMTAlO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4vLyAgICAgLnRpdGxlIHtcclxuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICBsZWZ0OiAtMTAlO1xyXG4vLyAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbi8vICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgZm9udC1zaXplOiA4dnc7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmltYWdlIHtcclxuLy8gICAgICAgd2lkdGg6IDcwdnc7XHJcbi8vICAgICAgIGhlaWdodDogNjB2dztcclxuLy8gICAgIC8vICAgYmFja2dyb3VuZDogZ3JleTtcclxuLy8gICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbi8vICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgbGVmdDogLTUlO1xyXG4vLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgICBpbWd7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMjA0LCAyMDQsIDIwNCk7XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIGlvbi1idXR0b24ge1xyXG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuLy8gICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICBib3R0b206IDIwcHg7XHJcbi8vICAgICAgICAgd2lkdGg6IDYwdnc7XHJcbi8vICAgICAgICAgbGVmdDogNSU7XHJcbi8vICAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmZvcm0ge1xyXG4vLyAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICBsZWZ0OiAtMTUlO1xyXG5cclxuLy8gICAgICAgaW9uLWl0ZW0ge1xyXG4vLyAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgaW9uLWJ1dHRvbiB7XHJcbi8vICAgICAgICAgd2lkdGg6IDYwdnc7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIC8vIGJvdHRvbTogMTBweDtcclxuLy8gICAgICAgICBsZWZ0OiAyMCU7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuLy8gICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbi8vICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuLy8gICAgICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzk1KTtcclxuLy8gICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBncmV5O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdfQ== */");
=======
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to left, w hite, rgba(0, 0, 0, 0.363));\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.inner-container {\n  width: 60%;\n  height: 70%;\n  transition: 300ms;\n  margin: 0 auto;\n  background: white;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.281);\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  min-height: 300px; }\n\n.inner-container > div {\n  transition: 300ms;\n  width: 50%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n#prompt {\n  color: grey;\n  font-style: italic;\n  font-size: 12px; }\n\n#password-forgotten {\n  color: blue;\n  cursor: pointer;\n  font-size: 14px; }\n\n.cont {\n  margin: 0 auto;\n  width: 95%;\n  background: white;\n  padding-left: 40px;\n  padding-right: 40px; }\n\n.logo-container-right {\n  text-align: center;\n  width: 100%;\n  display: none;\n  -webkit-filter: invert(100%);\n          filter: invert(100%); }\n\n.logo-container-left {\n  text-align: center;\n  color: white; }\n\n#logo {\n  width: 100px;\n  transition: 300ms; }\n\n#logo-left {\n  width: 200px; }\n\n.inner-container > div:nth-child(1) {\n  background: url(\"https://images.unsplash.com/photo-1530834395125-2a7eb8848ac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1164&q=80i\");\n  background-size: cover; }\n\n.inner-container > div:nth-child(2) {\n  background: white; }\n\nion-button {\n  text-transform: capitalize; }\n\n.image {\n  width: 15vw;\n  height: 15vw;\n  margin: auto; }\n\n.image img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.form {\n  font-family: 'Poppins'; }\n\n.form ion-button {\n    width: 100%;\n    background: #000024; }\n\n@media screen and (max-width: 1024px) {\n  #logo {\n    width: 200px; }\n  .logo-container-right {\n    text-align: center;\n    display: block; }\n  .inner-container {\n    width: 60%;\n    height: 70%; }\n  .inner-container > div {\n    width: 100%;\n    height: 100%; }\n  .inner-container > div:nth-child(1) {\n    display: none; } }\n\n@media screen and (max-width: 512px) {\n  #logo {\n    width: 150px; }\n  .inner-container {\n    width: 100%;\n    height: 100%;\n    border-radius: 0; }\n  .inner-container > div {\n    width: 100%;\n    height: 100%; }\n  .inner-container > div:nth-child(1) {\n    display: none; } }\n\n@media screen and (max-height: 435px) {\n  .inner-container {\n    height: 100%;\n    overflow: scroll; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWFjY291bnQvQzpcXFVzZXJzXFx6YW5lbFxcRG9jdW1lbnRzXFxicm9rZW5TdG9vbC9zcmNcXGFwcFxcY3JlYXRlLWFjY291bnRcXGNyZWF0ZS1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0VBQWtFO0VBQ2xFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUVWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFFWCxhQUFhO0VBQ2IsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUV0QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsZ0lBQWdJO0VBQ2hJLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLFdBQVU7RUFDVixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUhkO0lBS0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBa0I7T0FBbEIsaUJBQWtCLEVBQUE7O0FBSXRCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRHhCO0lBR0ksV0FBVztJQUNYLG1CQUF5QixFQUFBOztBQUk3QjtFQUNFO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBRWhCO0lBQ0UsVUFBVTtJQUNWLFdBQVcsRUFBQTtFQUViO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQTtFQUVkO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBRUg7RUFDRTtJQUNFLFlBQVksRUFBQTtFQUVkO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFFZDtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUVIO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtYWNjb3VudC9jcmVhdGUtYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHcgaGl0ZSwgcmdiYSgwLCAwLCAwLCAwLjM2MykpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaW5uZXItY29udGFpbmVyIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjgxKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxufVxyXG4uaW5uZXItY29udGFpbmVyID4gZGl2IHtcclxuICB0cmFuc2l0aW9uOiAzMDBtcztcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI3Byb21wdCB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4jcGFzc3dvcmQtZm9yZ290dGVuIHtcclxuICBjb2xvcjogYmx1ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jb250IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTUlO1xyXG4gIC8vIGhlaWdodDogOTUlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG59XHJcbi5sb2dvLWNvbnRhaW5lci1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbn1cclxuLmxvZ28tY29udGFpbmVyLWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI2xvZ28ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0cmFuc2l0aW9uOiAzMDBtcztcclxufVxyXG4jbG9nby1sZWZ0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLmlubmVyLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMwODM0Mzk1MTI1LTJhN2ViODg0OGFjMD9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTExNjQmcT04MGlcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uaW5uZXItY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICB3aWR0aDoxNXZ3O1xyXG4gIGhlaWdodDogMTV2dztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiAgY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybXtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gIGlvbi1idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAzNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAjbG9nbyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG4gIC5sb2dvLWNvbnRhaW5lci1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmlubmVyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgfVxyXG4gIC5pbm5lci1jb250YWluZXIgPiBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5pbm5lci1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMnB4KSB7XHJcbiAgI2xvZ28ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuICAuaW5uZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgLmlubmVyLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmlubmVyLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQzNXB4KSB7XHJcbiAgLmlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWJlbHxQb2lyZXQrT25lfE9wZW4rU2FucytDb25kZW5zZWR8SnVyYXxNYW5qYXJpfFBvcHBpbnN8UmFsZXdheXxNb250c2VycmF0IFwiKTtcclxuLy8gLmNvbnRhaW5lciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDEwMHZoO1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMwODM0Mzk1MTI1LTJhN2ViODg0OGFjMD9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTExNjQmcT04MGlcIik7XHJcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbi8vICAgLmJsdXIge1xyXG4vLyAgICAgd2lkdGg6IDEwMHZ3O1xyXG4vLyAgICAgaGVpZ2h0OiAxMDF2aDtcclxuLy8gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuLy8gICAgIGxlZnQ6IC0xNXZ3O1xyXG4vLyAgICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjE5OSk7XHJcbi8vICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgbWFyZ2luOiAtNXB4O1xyXG5cclxuLy8gICAgIGltZyB7XHJcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgICBmaWx0ZXI6IGJsdXIoMTVweCk7XHJcbi8vICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDE1cHgpO1xyXG4vLyAgICAgICAtbW96LWZpbHRlcjogYmx1cigxNXB4KTtcclxuLy8gICAgICAgLW8tZmlsdGVyOiBibHVyKDE1cHgpO1xyXG4vLyAgICAgICAtbXMtZmlsdGVyOiBibHVyKDE1cHgpO1xyXG4vLyAgICAgICBtYXJnaW46IC01cHggLTEwcHggLTEwcHggLTVweDtcclxuLy8gICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbi8vICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vICAgLmV2ZXJ5dGhpbmcge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm90dG9tOiAyMHB4O1xyXG4vLyAgICAgbGVmdDogMTAlO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4vLyAgICAgLnRpdGxlIHtcclxuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICBsZWZ0OiAtMTAlO1xyXG4vLyAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbi8vICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgZm9udC1zaXplOiA4dnc7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmltYWdlIHtcclxuLy8gICAgICAgd2lkdGg6IDcwdnc7XHJcbi8vICAgICAgIGhlaWdodDogNjB2dztcclxuLy8gICAgIC8vICAgYmFja2dyb3VuZDogZ3JleTtcclxuLy8gICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbi8vICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgbGVmdDogLTUlO1xyXG4vLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgICBpbWd7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMjA0LCAyMDQsIDIwNCk7XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIGlvbi1idXR0b24ge1xyXG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuLy8gICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICBib3R0b206IDIwcHg7XHJcbi8vICAgICAgICAgd2lkdGg6IDYwdnc7XHJcbi8vICAgICAgICAgbGVmdDogNSU7XHJcbi8vICAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmZvcm0ge1xyXG4vLyAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICBsZWZ0OiAtMTUlO1xyXG5cclxuLy8gICAgICAgaW9uLWl0ZW0ge1xyXG4vLyAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgaW9uLWJ1dHRvbiB7XHJcbi8vICAgICAgICAgd2lkdGg6IDYwdnc7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIC8vIGJvdHRvbTogMTBweDtcclxuLy8gICAgICAgICBsZWZ0OiAyMCU7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuLy8gICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbi8vICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuLy8gICAgICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzk1KTtcclxuLy8gICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBncmV5O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdfQ== */");
>>>>>>> a55a0be83f9b1225c40638ee16a9fe2da1aed132

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
//# sourceMappingURL=15.js.map