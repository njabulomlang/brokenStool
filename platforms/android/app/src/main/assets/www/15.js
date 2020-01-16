(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-account/create-account.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-account/create-account.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"inner-container\">\r\n      <div id=\"left\">\r\n        <p>CREATE <br> ACCOUNT</p>\r\n        <img src=\"{{profilePic}}\" style=\"overflow: hidden;\">\r\n        <div class=\"logo-container-left\">\r\n          <img src=\"../../assets/NoPath - Copy.svg\" id=\"logo-left\" alt=\"\">\r\n          <br> <h1>CREATE ACCOUNT</h1>\r\n        </div>\r\n      </div>\r\n      <div id=\"right\">\r\n        <div class=\"cont\">\r\n          <div class=\"logo-container-right\">\r\n            <img src=\"../../assets/NoPath - Copy.svg\" id=\"logo\" alt=\"\">\r\n            <br>\r\n          </div>\r\n        \r\n          <div class=\"everything\">\r\n            <div class=\"title\">\r\n            \r\n            </div>\r\n            <div class=\"image\" id=\"image\" *ngIf=\"profilePic\">\r\n              <img src=\"{{profilePic}}\" style=\"overflow: hidden;\" (click)=\"selectImage()\">\r\n        \r\n            </div>\r\n            <div class=\"image\" id=\"image\" *ngIf=\"!profilePic\">\r\n              <img src=\"../../assets/user-icon-image-placeholder-300-grey.jpg\" style=\"overflow: hidden;\" (click)=\"selectImage()\">\r\n\r\n            </div>\r\n      \r\n            <div class=\"form\">\r\n              <form [formGroup]=\"account\">\r\n                <ion-item color=\"transparent\">\r\n                  <ion-input placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"name\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n                </ion-item>\r\n      \r\n                <ion-item color=\"transparent\">\r\n                  <ion-input placeholder=\"Surname\" formControlName=\"surname\" [(ngModel)]=\"surname\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n                </ion-item>\r\n      \r\n                <ion-item color=\"transparent\">\r\n                  <ion-input placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"email\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n                </ion-item>\r\n      \r\n                <ion-item color=\"transparent\">\r\n                  <ion-input placeholder=\"Address\" formControlName=\"address\" [(ngModel)]=\"address\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n                </ion-item>\r\n      \r\n                <br>\r\n                <ion-button (click)=\"createAccount()\" [disabled]=\"!account.valid\" color=\"transparent\" >DONE\r\n                </ion-button>\r\n              </form>\r\n      \r\n            </div>\r\n      \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>createAccount</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<!-- <ion-content>\r\n\r\n  <div class=\"container\" slot= \"fixed\">\r\n    <div class=\"blur\">\r\n      <img src=\"https://images.unsplash.com/photo-1530834395125-2a7eb8848ac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1164&q=80i\" alt=\"Your Profile Image\">\r\n    </div>\r\n    <div class=\"everything\">\r\n      <div class=\"title\">\r\n        <p>CREATE <br> ACCOUNT</p>\r\n      </div>\r\n      <div class=\"image\" id=\"image\" *ngIf=\"profilePic\">\r\n        <img src=\"{{profilePic}}\" style=\"overflow: hidden;\">\r\n        <ion-button (click)=\"selectImage()\" color=\"transparent\">SELECT IMAGE</ion-button>\r\n      </div>\r\n      <div class=\"image\" id=\"image\" *ngIf=\"!profilePic\">\r\n        <img src=\"../../assets/user-icon-image-placeholder-300-grey.jpg\" style=\"overflow: hidden;\">\r\n        <ion-button (click)=\"selectImage()\" color=\"transparent\">SELECT IMAGE</ion-button>\r\n      </div>\r\n\r\n      <div class=\"form\">\r\n        <form [formGroup]=\"account\">\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"name\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Surname\" formControlName=\"surname\" [(ngModel)]=\"surname\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"email\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item color=\"transparent\">\r\n            <ion-input placeholder=\"Address\" formControlName=\"address\" [(ngModel)]=\"address\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\"></ion-input>\r\n          </ion-item>\r\n\r\n          <br>\r\n          <ion-button (click)=\"createAccount()\" [disabled]=\"!account.valid\" color=\"transparent\">DONE\r\n          </ion-button>\r\n        </form>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content> -->");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Abel|Poiret+One|Open+Sans+Condensed|Jura|Manjari|Poppins|Raleway|Montserrat \");\n.container {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  height: 100vh;\n  align-items: center;\n  position: absolute;\n  background: url(\"https://images.unsplash.com/photo-1530834395125-2a7eb8848ac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1164&q=80i\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n.container .blur {\n    width: 100vw;\n    height: 101vh;\n    -o-object-fit: cover;\n       object-fit: cover;\n    overflow: hidden;\n    position: absolute;\n    -webkit-transform: translate3d(0, 0, 0);\n    left: -15vw;\n    border: 3px solid rgba(204, 204, 204, 0.199);\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n    margin: -5px; }\n.container .blur img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      filter: blur(15px);\n      -webkit-filter: blur(15px);\n      -moz-filter: blur(15px);\n      -o-filter: blur(15px);\n      -ms-filter: blur(15px);\n      margin: -5px -10px -10px -5px;\n      border-top-right-radius: 20px;\n      border-bottom-right-radius: 20px;\n      transform: scale(1.06); }\n.container .everything {\n    position: absolute;\n    bottom: 20px;\n    left: 10%;\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    height: 100%; }\n.container .everything .title {\n      position: relative;\n      left: -10%;\n      font-family: \"Poppins\";\n      letter-spacing: 3px;\n      color: white;\n      font-size: 8vw; }\n.container .everything .image {\n      width: 70vw;\n      height: 60vw;\n      display: flex;\n      flex-flow: column;\n      position: relative;\n      left: -5%;\n      overflow: hidden; }\n.container .everything .image img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        overflow: hidden;\n        border: none;\n        box-shadow: 5px 5px 10px #cccccc; }\n.container .everything .image ion-button {\n        font-family: \"Poppins\";\n        letter-spacing: 3px;\n        position: absolute;\n        bottom: 20px;\n        width: 60vw;\n        left: 5%;\n        outline: none !important; }\n.container .everything .form {\n      width: 100%;\n      padding: 10px;\n      position: relative;\n      left: -15%; }\n.container .everything .form ion-item {\n        color: white; }\n.container .everything .form ion-button {\n        width: 60vw;\n        position: absolute;\n        left: 20%;\n        font-size: 0.8em;\n        font-family: \"Poppins\";\n        letter-spacing: 3px;\n        color: black;\n        border-radius: 20px;\n        background: rgba(255, 255, 255, 0.795);\n        overflow: hidden;\n        box-shadow: 5px 5px 10px grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWFjY291bnQvQzpcXFVzZXJzXFxOTWxhbmdlbmlcXERvY3VtZW50c1xcR2l0SHViXFxicm9rZW5TdG9vbC9zcmNcXGFwcFxcY3JlYXRlLWFjY291bnRcXGNyZWF0ZS1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtSUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0lBQWdJO0VBQ2hJLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCLEVBQUE7QUFWOUI7SUFhSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLDRDQUE0QztJQUM1Qyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLFlBQVksRUFBQTtBQXZCaEI7TUEwQk0sV0FBVztNQUNYLFlBQVk7TUFDWixvQkFBaUI7U0FBakIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQiwwQkFBMEI7TUFDMUIsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixzQkFBc0I7TUFDdEIsNkJBQTZCO01BQzdCLDZCQUE2QjtNQUM3QixnQ0FBZ0M7TUFDaEMsc0JBQXNCLEVBQUE7QUFyQzVCO0lBMENJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFlBQVksRUFBQTtBQWhEaEI7TUFtRE0sa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLFlBQVk7TUFDWixjQUFjLEVBQUE7QUF4RHBCO01BNERNLFdBQVc7TUFDWCxZQUFZO01BRVosYUFBYTtNQUNiLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsU0FBUztNQUNmLGdCQUFnQixFQUFBO0FBbkVoQjtRQXFFUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFpQjtXQUFqQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixnQ0FBMkMsRUFBQTtBQTFFbkQ7UUE4RVEsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxRQUFRO1FBQ1Isd0JBQXdCLEVBQUE7QUFwRmhDO01BeUZNLFdBQVc7TUFDWCxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTtBQTVGaEI7UUErRlEsWUFBWSxFQUFBO0FBL0ZwQjtRQW1HUSxXQUFXO1FBQ1gsa0JBQWtCO1FBRWxCLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHNDQUFzQztRQUN0QyxnQkFBZ0I7UUFDaEIsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtYWNjb3VudC9jcmVhdGUtYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BYmVsfFBvaXJldCtPbmV8T3BlbitTYW5zK0NvbmRlbnNlZHxKdXJhfE1hbmphcml8UG9wcGluc3xSYWxld2F5fE1vbnRzZXJyYXQgXCIpO1xyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzA4MzQzOTUxMjUtMmE3ZWI4ODQ4YWMwP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTE2NCZxPTgwaVwiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAuYmx1ciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMXZoO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgbGVmdDogLTE1dnc7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMTk5KTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW46IC01cHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIGZpbHRlcjogYmx1cigxNXB4KTtcclxuICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTVweCk7XHJcbiAgICAgIC1tb3otZmlsdGVyOiBibHVyKDE1cHgpO1xyXG4gICAgICAtby1maWx0ZXI6IGJsdXIoMTVweCk7XHJcbiAgICAgIC1tcy1maWx0ZXI6IGJsdXIoMTVweCk7XHJcbiAgICAgIG1hcmdpbjogLTVweCAtMTBweCAtMTBweCAtNXB4O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZXZlcnl0aGluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IC0xMCU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDh2dztcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogNzB2dztcclxuICAgICAgaGVpZ2h0OiA2MHZ3O1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsZWZ0OiAtNSU7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigyMDQsIDIwNCwgMjA0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMjBweDtcclxuICAgICAgICB3aWR0aDogNjB2dztcclxuICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IC0xNSU7XHJcblxyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogNjB2dztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OTUpO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IGdyZXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

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