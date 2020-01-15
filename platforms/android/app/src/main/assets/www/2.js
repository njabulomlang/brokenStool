(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"inner-container\">\r\n      <div id=\"left\">\r\n        <div class=\"logo-container-left\">\r\n          <img src=\"../../assets/NoPath - Copy.svg\" id=\"logo-left\" alt=\"\">\r\n          <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo porro laborum illo suscipit aperiam culpa molestiae aliquam laboriosam eveniet!\r\n        </div>\r\n      </div>\r\n      <div id=\"right\">\r\n        <div class=\"cont\">\r\n          <div class=\"logo-container-right\">\r\n            <img src=\"../../assets/NoPath - Copy.svg\" id=\"logo\" alt=\"\">\r\n            <br>\r\n          </div>\r\n         <div class=\"login\">\r\n          <ion-input placeholder=\"Phone Number\" [(ngModel)]=\"number\" type=\"number\" maxLength=\"9\">+27</ion-input>\r\n          <ion-button  id=\"sign-in-button\" color=\"transparent\" (click)=\"addUser()\"> <ion-icon slot=\"end\" name=\"call\"></ion-icon> Sign-in with Phone</ion-button>\r\n          <ion-button  id=\"sign-in-button\" color=\"transparent\" (click)=\"googleLogin()\" > <ion-icon slot=\"end\" name=\"logo-google\"></ion-icon> Sign-in with Google</ion-button>\r\n          <ion-button  id=\"sign-in-button\" color=\"transparent\" (click)=\"loginwithemail()\" ><ion-icon slot=\"end\" name=\"mail\"></ion-icon>Sign-in with Email</ion-button>\r\n          <div class=\"emails\" *ngIf=\"log\">\r\n            <form>\r\n            <ion-item lines=\"null\">\r\n              <ion-label position=\"floating\">Email</ion-label>\r\n              <ion-input type=\"email\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Password</ion-label>\r\n              <ion-input type=\"password\"></ion-input>\r\n            </ion-item>\r\n            <ion-button color=\"transparent\"> Sign-In</ion-button>\r\n          \r\n          </form>\r\n          </div>\r\n            </div>\r\n\r\n            <div id=\"recaptcha-container\"></div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <ion-header no-border>\r\n  <ion-toolbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content full screen>\r\n    <div [ngClass]=\"{'loader': loaderAnimate, 'loader-hide': !loaderAnimate}\">\r\n        <div class=\"maploader\">\r\n            <div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div><p style=\"color:white; text-align: center;\">{{loaderMessages}}</p>\r\n        </div>\r\n    \r\n      </div>\r\n  <div class=\"container\" slot= \"fixed\">\r\n    <div class=\"logo\">\r\n      <img src=\"../../assets/NoPath - Copy.svg\">\r\n    </div>\r\n\r\n    <div class=\"desc\">\r\n      <p>Est lorem ipsum dolor sit amet consectetur adipiscing elit. Quis\r\n        eleifend quam adipiscing vitae proin sagittis.\r\n      </p>\r\n    </div>\r\n    <div class=\"login\">\r\n      <ion-input placeholder=\"Phone Number\" [(ngModel)]=\"number\" type=\"number\" maxLength=\"9\">+27</ion-input>\r\n\r\n    \r\n      <ion-button  id=\"sign-in-button\" color=\"transparent\" (click)=\"addUser()\"> <ion-icon slot=\"end\" name=\"call\"></ion-icon> Sign-in with Phone</ion-button>\r\n      <ion-button  id=\"sign-in-button\" color=\"transparent\" (click)=\"googleLogin()\" > <ion-icon slot=\"end\" name=\"logo-google\"></ion-icon> Sign-in with Google</ion-button>\r\n      <ion-button  id=\"sign-in-button\" color=\"transparent\" (click)=\"Facebook()\" ><ion-icon slot=\"end\" name=\"logo-facebook\"></ion-icon>Sign-in with Email</ion-button>\r\n     \r\n    </div>\r\n    <div id=\"recaptcha-container\"></div>\r\n  </div>\r\n\r\n\r\n\r\n</ion-content> -->");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to left, w hite, rgba(0, 0, 0, 0.363));\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.inner-container {\n  width: 60%;\n  height: 70%;\n  transition: 300ms;\n  margin: 0 auto;\n  background: white;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.281);\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  min-height: 300px; }\n\n.inner-container > div {\n  transition: 300ms;\n  width: 50%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n#prompt {\n  color: grey;\n  font-style: italic;\n  font-size: 12px; }\n\n#password-forgotten {\n  color: blue;\n  cursor: pointer;\n  font-size: 14px; }\n\n.cont {\n  margin: 0 auto;\n  width: 95%;\n  background: white;\n  padding-left: 40px;\n  padding-right: 40px; }\n\n.logo-container-right {\n  text-align: center;\n  width: 100%;\n  display: none;\n  -webkit-filter: invert(100%);\n          filter: invert(100%); }\n\n.logo-container-left {\n  text-align: center;\n  color: white; }\n\n#logo {\n  width: 100px;\n  transition: 300ms; }\n\n#logo-left {\n  width: 200px; }\n\n.inner-container > div:nth-child(1) {\n  background: url(\"https://i.pinimg.com/564x/3c/ba/9d/3cba9d4e0c240a0d87eb5ea122fe88cb.jpg\");\n  background-size: cover; }\n\n.inner-container > div:nth-child(2) {\n  background: white; }\n\nion-button {\n  text-transform: capitalize; }\n\n.login {\n  display: flex;\n  flex-flow: column; }\n\n.login ion-button {\n    background: #000024;\n    margin: auto;\n    margin: 5px; }\n\n.login .emails ion-button {\n    background: #000024;\n    margin: auto;\n    margin: 5px;\n    width: 100%; }\n\n@media screen and (max-width: 1024px) {\n  #logo {\n    width: 200px; }\n  .logo-container-right {\n    text-align: center;\n    display: block; }\n  .inner-container {\n    width: 60%;\n    height: 70%; }\n  .inner-container > div {\n    width: 100%;\n    height: 100%; }\n  .inner-container > div:nth-child(1) {\n    display: none; } }\n\n@media screen and (max-width: 512px) {\n  #logo {\n    width: 150px; }\n  .inner-container {\n    width: 100%;\n    height: 100%;\n    border-radius: 0; }\n  .inner-container > div {\n    width: 100%;\n    height: 100%; }\n  .inner-container > div:nth-child(1) {\n    display: none; } }\n\n@media screen and (max-height: 435px) {\n  .inner-container {\n    height: 100%;\n    overflow: scroll; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFx6YW5lbFxcRG9jdW1lbnRzXFxicm9rZW5TdG9vbC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0VBQWtFO0VBQ2xFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUVWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFFWCxhQUFhO0VBQ2IsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUV0QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFXLEVBQUE7O0FBRWI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsMEZBQTBGO0VBQzFGLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNJLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFGckI7SUFJUSxtQkFBeUI7SUFFekIsWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFQbkI7SUFZVSxtQkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXLEVBQUE7O0FBSXJCO0VBQ0U7SUFDRSxZQUFZLEVBQUE7RUFFZDtJQUNFLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7RUFFaEI7SUFDRSxVQUFVO0lBQ1YsV0FBVyxFQUFBO0VBRWI7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBRWQ7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFFSDtFQUNFO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VBRWxCO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQTtFQUVkO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBRUg7RUFDRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdyBoaXRlLCByZ2JhKDAsIDAsIDAsIDAuMzYzKSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuaW5uZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjgxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuICAuaW5uZXItY29udGFpbmVyID4gZGl2IHtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gICNwcm9tcHQge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gICNwYXNzd29yZC1mb3Jnb3R0ZW4ge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5jb250IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIC8vIGhlaWdodDogOTUlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICAubG9nby1jb250YWluZXItcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcclxuICB9XHJcbiAgLmxvZ28tY29udGFpbmVyLWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gICNsb2dvIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gIH1cclxuICAjbG9nby1sZWZ0IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgLmlubmVyLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC8zYy9iYS85ZC8zY2JhOWQ0ZTBjMjQwYTBkODdlYjVlYTEyMmZlODhjYi5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAuaW5uZXItY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIC5sb2dpbntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMzYpO1xyXG5cclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZW1haWxze1xyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAzNik7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICNsb2dvIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28tY29udGFpbmVyLXJpZ2h0IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5pbm5lci1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgICBoZWlnaHQ6IDcwJTtcclxuICAgIH1cclxuICAgIC5pbm5lci1jb250YWluZXIgPiBkaXYge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmlubmVyLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTJweCkge1xyXG4gICAgI2xvZ28ge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5uZXItY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICAgIC5pbm5lci1jb250YWluZXIgPiBkaXYge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmlubmVyLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDM1cHgpIHtcclxuICAgIC5pbm5lci1jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWJlbHxQb2lyZXQrT25lfE9wZW4rU2FucytDb25kZW5zZWR8SnVyYXxNYW5qYXJpfFBvcHBpbnN8UmFsZXdheXxNb250c2VycmF0IFwiKTtcclxuXHJcbi8vIGlvbi10b29sYmFyIHtcclxuLy8gICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmNvbnRhaW5lciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbi8vICAgbWF4LWhlaWdodDogMTAwJTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzA4MzQzOTUxMjUtMmE3ZWI4ODQ4YWMwP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTE2NCZxPTgwXCIpO1xyXG4vLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4vLyAgIC5sb2dvIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogMjAlO1xyXG4vLyAgICAgaW1nIHtcclxuLy8gICAgICAgd2lkdGg6IDQwdnc7XHJcbi8vICAgICAgIGhlaWdodDogMzB2dztcclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4vLyAgIC5kZXNjIHtcclxuLy8gICAgIG1hcmdpbjogMTBweDtcclxuLy8gICAgIHAge1xyXG4vLyAgICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuLy8gICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vICAgLmxvZ2luIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogNjIlO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBpb24tYnV0dG9uIHtcclxuLy8gICAgICAgd2lkdGg6IDYwdnc7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbi8vICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4vLyAgICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4vLyAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbi8vICAgICAgIGlvbi1pY29uIHtcclxuLy8gICAgICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpb24taW5wdXQge1xyXG4vLyAgICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4vLyAgICAgICBtYXJnaW4tbGVmdDogMjV2dztcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuLy8gLmxvYWRlciB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogMDtcclxuLy8gICBsZWZ0OiAwO1xyXG4vLyAgIGJvdHRvbTogMDtcclxuLy8gICByaWdodDogMDtcclxuLy8gICB6LWluZGV4OiAxMDAwO1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgYmFja2dyb3VuZDogcmdiKDAsIDI3LCA2Myk7XHJcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4vLyAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4vLyAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuLy8gICBhbmltYXRpb246IGJhY2tncm91bmRtb3ZlciAzMHMgbGluZWFyIGluZmluaXRlO1xyXG4vLyAgIC5tYXBsb2FkZXIge1xyXG4vLyAgICAgLmxkcy1lbGxpcHNpcyB7XHJcbi8vICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICB3aWR0aDogODBweDtcclxuLy8gICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmxkcy1lbGxpcHNpcyBkaXYge1xyXG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgIHRvcDogMzNweDtcclxuLy8gICAgICAgd2lkdGg6IDEzcHg7XHJcbi8vICAgICAgIGhlaWdodDogMTNweDtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4vLyAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XHJcbi8vICAgICB9XHJcbi8vICAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xyXG4vLyAgICAgICBsZWZ0OiA4cHg7XHJcbi8vICAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuLy8gICAgICAgbGVmdDogOHB4O1xyXG4vLyAgICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuLy8gICAgIH1cclxuLy8gICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XHJcbi8vICAgICAgIGxlZnQ6IDMycHg7XHJcbi8vICAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcclxuLy8gICAgICAgbGVmdDogNTZweDtcclxuLy8gICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XHJcbi8vICAgICB9XHJcbi8vICAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xyXG4vLyAgICAgICAwJSB7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAxMDAlIHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xyXG4vLyAgICAgICAwJSB7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAxMDAlIHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xyXG4vLyAgICAgICAwJSB7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgMTAwJSB7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuLy8gLmxvYWRpbmctdGV4dCB7XHJcbi8vICAgLy8gY29sb3I6IHllbGxvdztcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgYm90dG9tOiA1MHZoO1xyXG4vLyAgIGxlZnQ6IDBweDtcclxuLy8gICB3aWR0aDogMTAwdnc7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIC8vIGJhY2tncm91bmQ6IHJlZDtcclxuLy8gICBoZWlnaHQ6IDUwdmg7XHJcbi8vICAgLy96LWluZGV4OiA5MDtcclxuLy8gICBtYXJnaW46IGF1dG87XHJcbi8vIH1cclxuLy8gLmxvYWRlci1oaWRlIHtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgdG9wOiAwO1xyXG4vLyAgIGxlZnQ6IDA7XHJcbi8vICAgYm90dG9tOiAwO1xyXG4vLyAgIHJpZ2h0OiAwO1xyXG4vLyAgIHotaW5kZXg6IDIwO1xyXG4vLyAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuLy8gICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgdHJhbnNpdGlvbjogMC40cztcclxuLy8gICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcbi8vICAgLm1hcGxvYWRlciB7XHJcbi8vICAgICAubGRzLWVsbGlwc2lzIHtcclxuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgIHdpZHRoOiA4MHB4O1xyXG4vLyAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAubGRzLWVsbGlwc2lzIGRpdiB7XHJcbi8vICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgdG9wOiAzM3B4O1xyXG4vLyAgICAgICB3aWR0aDogMTNweDtcclxuLy8gICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbi8vICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxuLy8gICAgIH1cclxuLy8gICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbi8vICAgICAgIGxlZnQ6IDhweDtcclxuLy8gICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbi8vICAgICB9XHJcbi8vICAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4vLyAgICAgICBsZWZ0OiA4cHg7XHJcbi8vICAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuLy8gICAgICAgbGVmdDogMzJweDtcclxuLy8gICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbi8vICAgICB9XHJcbi8vICAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4vLyAgICAgICBsZWZ0OiA1NnB4O1xyXG4vLyAgICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuLy8gICAgIH1cclxuLy8gICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbi8vICAgICAgIDAlIHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIDEwMCUge1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbi8vICAgICAgIDAlIHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIDEwMCUge1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbi8vICAgICAgIDAlIHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAxMDAlIHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBAa2V5ZnJhbWVzIG1hcGxvYWRlciB7XHJcbi8vICAgMCUge1xyXG4vLyAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbi8vICAgICBib3JkZXItY29sb3I6IHJnYigxODIsIDcwLCA5NSk7XHJcbi8vICAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxOTIsIDE5Mik7XHJcbi8vICAgfVxyXG4vLyAgIDUwJSB7XHJcbi8vICAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjA2LCAyMDYsIDI1NSk7XHJcbi8vICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiByZ2IoNDIsIDUwLCA3NSk7XHJcbi8vICAgfVxyXG4vLyAgIDEwMCUge1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjUwLCAxODIsIDQzKTtcclxuLy8gICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE2NywgMTY3KTtcclxuLy8gICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");







var LoginPage = /** @class */ (function () {
    function LoginPage(router, alertController, authService, toastCtrl, plt, gplus) {
        this.router = router;
        this.alertController = alertController;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.plt = plt;
        this.gplus = gplus;
        this.verification = "";
        this.confirmationResult = '';
        this.loaderMessages = 'Loading...';
        this.log = false;
        this.userProfile = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]().collection('userProfile');
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    /*   goSignUp() {
        this.router.navigateByUrl("/signup")
      }
     */
    LoginPage.prototype.nativeGoogleLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var gplusUser, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.gplus.login({
                                'webClientId': '704929489176-nkop0im085muei15k9rao6pmnfjsh0vt.apps.googleusercontent.com',
                                'offline': true,
                                'scopes': 'profile email'
                            })];
                    case 1:
                        gplusUser = _a.sent();
                        return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithCredential(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider.credential(gplusUser.idToken)).then(function (i) {
                                //this.userProfile.doc(i.user.uid).set
                                _this.router.navigateByUrl('create-account');
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log('Error ', err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.webGoogleLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var provider, credential, err_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        provider = new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
                        return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithPopup(provider).then(function (i) {
                                console.log(i.user);
                                _this.router.navigateByUrl('create-account');
                            })];
                    case 1:
                        credential = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.googleLogin = function () {
        if (this.plt.is('cordova')) {
            this.nativeGoogleLogin();
        }
        else {
            this.webGoogleLogin();
        }
    };
    LoginPage.prototype.requestCode = function () {
        window.recaptchaVerifier = new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].RecaptchaVerifier('recaptcha-container');
        console.log(window.recaptchaVerifier);
        var appVerifier = window.recaptchaVerifier;
        return this.authService.requestLogin(this.number, appVerifier);
    };
    LoginPage.prototype.login = function (code) {
        if (this.confirmationResult !== '') {
            //var code = this.inputCode
            return this.authService.login(code, this.confirmationResult).then(function (result) {
                console.log(result);
            });
        }
    };
    LoginPage.prototype.addUser = function () {
        var _this = this;
        if (this.number.length < 9) {
            this.toast();
        }
        else {
            window.recaptchaVerifier = new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].RecaptchaVerifier('recaptcha-container', {
                size: 'invisible',
                callback: function (response) {
                    _this.loaderAnimate = true;
                    // console.log('yeah yeah yeah');
                },
                'expired-callback': function () {
                }
            });
            // console.log(window.recaptchaVerifier);
            setTimeout(function () {
                _this.loaderAnimate = false;
            }, 2000);
            var appVerifier = window.recaptchaVerifier;
            return this.authService.requestLogin(this.number, appVerifier).then(function () {
            });
        }
        // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptchaParameters, result => {
        //   console.log(result);
        // })
    };
    LoginPage.prototype.toast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Please confirm your cellphone digits..',
                            duration: 2000
                        })];
                    case 1:
                        (_a.sent()).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.googleSignin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var provider, credential;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
                        return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithPopup(provider).then(function (user) {
                                console.log('User details ', user);
                            }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        credential = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.loginAnon = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInAnonymously()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_3 = _a.sent();
                        console.log("Error...", err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.Github = function () {
    };
    LoginPage.prototype.alert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Verification code',
                            subHeader: 'Enter verification code',
                            inputs: [
                                {
                                    name: 'code',
                                    type: 'text',
                                    placeholder: 'Enter code'
                                }
                            ],
                            buttons: [{
                                    text: 'Submit',
                                    role: 'submit',
                                    cssClass: 'secondary',
                                    handler: function (result) {
                                        console.log(result.code);
                                        _this.login(result.code);
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.onSignInSubmit = function () {
        var appVerifier = window.recaptchaVerifier;
        firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithPhoneNumber(this.number, appVerifier)
            .then(function (confirmationResult) {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // this.verification = confirmationResult.verificationId;
        }).catch(function (error) {
            // Error; SMS not sent
            console.log(error);
            // ...
        });
    };
    LoginPage.prototype.loginwithemail = function () {
        this.log = !this.log;
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slides", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=2.js.map