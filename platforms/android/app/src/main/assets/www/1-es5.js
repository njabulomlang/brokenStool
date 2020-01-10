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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html": 
        /*!*****************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content full screen>\r\n    <div [ngClass]=\"{'loader': loaderAnimate, 'loader-hide': !loaderAnimate}\">\r\n        <div class=\"maploader\">\r\n            <div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div><p style=\"color:white; text-align: center;\">{{loaderMessages}}</p>\r\n        </div>\r\n       <!--  <div class=\"loading-text\">\r\n          <p>Loading Map</p>\r\n        </div> -->\r\n      </div>\r\n  <div class=\"container\" slot= \"fixed\">\r\n    <div class=\"logo\">\r\n      <img src=\"../../assets/NoPath - Copy.svg\">\r\n    </div>\r\n\r\n    <div class=\"desc\">\r\n      <p>Est lorem ipsum dolor sit amet consectetur adipiscing elit. Quis\r\n        eleifend quam adipiscing vitae proin sagittis.\r\n      </p>\r\n    </div>\r\n    <div class=\"login\">\r\n      <ion-input placeholder=\"Enter Your Phone Number\" [(ngModel)]=\"number\" type=\"number\" maxLength=\"9\"></ion-input>\r\n      <!-- <ion-input placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\"></ion-input> -->\r\n    \r\n      <ion-button  id=\"sign-in-button\" color=\"transparent\" (click)=\"addUser()\"> <ion-icon slot=\"end\" name=\"call\"></ion-icon> Sign-in with Phone</ion-button>\r\n      <ion-button  id=\"sign-in-button\" color=\"transparent\" (click)=\"googleSignin()\" > <ion-icon slot=\"end\" name=\"logo-google\"></ion-icon> Sign-in with Google</ion-button>\r\n      <ion-button  id=\"sign-in-button\" color=\"transparent\" (click)=\"Facebook()\" ><ion-icon slot=\"end\" name=\"logo-facebook\"></ion-icon>Sign-in with Email</ion-button>\r\n      <!-- <ion-button expand=\"full\" id=\"sign-in-button\" (click)=\"twitter()\" >Twitter</ion-button> -->\r\n      <!-- <ion-button expand=\"full\" id=\"sign-in-button\" (click)=\"Github()\" >Github</ion-button> -->\r\n    </div>\r\n    <div id=\"recaptcha-container\"></div>\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/login/login-routing.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/login/login-routing.module.ts ***!
          \***********************************************/
        /*! exports provided: LoginPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () { return LoginPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
                return LoginPageRoutingModule;
            }());
            LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], LoginPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/login/login.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/login/login.module.ts ***!
          \***************************************/
        /*! exports provided: LoginPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () { return LoginPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
            /* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
            var LoginPageModule = /** @class */ (function () {
                function LoginPageModule() {
                }
                return LoginPageModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/login/login.page.scss": 
        /*!***************************************!*\
          !*** ./src/app/login/login.page.scss ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Abel|Poiret+One|Open+Sans+Condensed|Jura|Manjari|Poppins|Raleway|Montserrat \");\nion-toolbar {\n  --background: transparent;\n  position: absolute;\n}\n.container {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100%;\n  max-height: 100%;\n  width: 100%;\n  position: absolute;\n  background-image: url(\"https://images.unsplash.com/photo-1530834395125-2a7eb8848ac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1164&q=80\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.container .logo {\n  position: absolute;\n  top: 20%;\n}\n.container .logo img {\n  width: 40vw;\n  height: 30vw;\n}\n.container .desc {\n  margin: 10px;\n}\n.container .desc p {\n  color: white;\n  text-align: center;\n  font-size: 0.8em;\n  font-family: \"Poppins\";\n}\n.container .login {\n  position: absolute;\n  top: 62%;\n  text-align: center;\n  width: 100%;\n}\n.container .login ion-button {\n  width: 60vw;\n  border-radius: 30px;\n  background: white;\n  color: black;\n  font-size: 0.8em;\n  font-weight: lighter;\n  font-family: \"Poppins\";\n}\n.container .login ion-button ion-icon {\n  color: black;\n}\n.container .login ion-input {\n  color: white;\n}\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite;\n}\n.loader .maploader .lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.loader .maploader .lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.loader .maploader .lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n.loader .maploader .lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader .maploader .lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader .maploader .lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n.loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto;\n}\n.loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.loader-hide .maploader .lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.loader-hide .maploader .lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n@-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f;\n  }\n  50% {\n    border-color: #2a324b;\n  }\n  100% {\n    border-color: #fab62b;\n  }\n}\n@keyframes maploader {\n  0% {\n    border-color: #b6465f;\n  }\n  50% {\n    border-color: #2a324b;\n  }\n  100% {\n    border-color: #fab62b;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFx6YW5lbFxcRG9jdW1lbnRzXFxicm9rZW5TdG9vbC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG1JQUFBO0FBRVI7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUlBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDQUo7QURDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ047QURHRTtFQUNFLFlBQUE7QUNESjtBREVJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0FOO0FESUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNGSjtBREdJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FDRE47QURFTTtFQUNFLFlBQUE7QUNBUjtBRElJO0VBQ0UsWUFBQTtBQ0ZOO0FETUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUNIRjtBREtJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSE47QURLSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7QUNITjtBREtJO0VBQ0UsU0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNITjtBREtJO0VBQ0UsU0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNITjtBREtJO0VBQ0UsVUFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNITjtBREtJO0VBQ0UsVUFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNITjtBREtJO0VBQ0U7SUFDRSxtQkFBQTtFQ0hOO0VES0k7SUFDRSxtQkFBQTtFQ0hOO0FBQ0Y7QURISTtFQUNFO0lBQ0UsbUJBQUE7RUNITjtFREtJO0lBQ0UsbUJBQUE7RUNITjtBQUNGO0FES0k7RUFDRTtJQUNFLG1CQUFBO0VDSE47RURLSTtJQUNFLG1CQUFBO0VDSE47QUFDRjtBREhJO0VBQ0U7SUFDRSxtQkFBQTtFQ0hOO0VES0k7SUFDRSxtQkFBQTtFQ0hOO0FBQ0Y7QURLSTtFQUNFO0lBQ0UsMEJBQUE7RUNITjtFREtJO0lBQ0UsNkJBQUE7RUNITjtBQUNGO0FESEk7RUFDRTtJQUNFLDBCQUFBO0VDSE47RURLSTtJQUNFLDZCQUFBO0VDSE47QUFDRjtBRE9BO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFFQSxZQUFBO0FDUEY7QURTQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FDTkY7QURRSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05OO0FEUUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FDTk47QURRSTtFQUNFLFNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDTk47QURRSTtFQUNFLFNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDTk47QURRSTtFQUNFLFVBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDTk47QURRSTtFQUNFLFVBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDTk47QURRSTtFQUNFO0lBQ0UsbUJBQUE7RUNOTjtFRFFJO0lBQ0UsbUJBQUE7RUNOTjtBQUNGO0FEUUk7RUFDRTtJQUNFLG1CQUFBO0VDTk47RURRSTtJQUNFLG1CQUFBO0VDTk47QUFDRjtBRFFJO0VBQ0U7SUFDRSwwQkFBQTtFQ05OO0VEUUk7SUFDRSw2QkFBQTtFQ05OO0FBQ0Y7QURVQTtFQUNFO0lBRUUscUJBQUE7RUNSRjtFRFdBO0lBR0UscUJBQUE7RUNYRjtFRGFBO0lBQ0UscUJBQUE7RUNYRjtBQUNGO0FERkE7RUFDRTtJQUVFLHFCQUFBO0VDUkY7RURXQTtJQUdFLHFCQUFBO0VDWEY7RURhQTtJQUNFLHFCQUFBO0VDWEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFiZWx8UG9pcmV0K09uZXxPcGVuK1NhbnMrQ29uZGVuc2VkfEp1cmF8TWFuamFyaXxQb3BwaW5zfFJhbGV3YXl8TW9udHNlcnJhdCBcIik7XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMwODM0Mzk1MTI1LTJhN2ViODg0OGFjMD9peGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTExNjQmcT04MFwiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAubG9nbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICBoZWlnaHQ6IDMwdnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzYyB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dpbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYyJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjcsIDYzKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZG1vdmVyIDMwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLm1hcGxvYWRlciB7XHJcbiAgICAubGRzLWVsbGlwc2lzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzM3B4O1xyXG4gICAgICB3aWR0aDogMTNweDtcclxuICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbGVmdDogMzJweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgICBsZWZ0OiA1NnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGluZy10ZXh0IHtcclxuICAvLyBjb2xvcjogeWVsbG93O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwdmg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZDogcmVkO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICAvL3otaW5kZXg6IDkwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ubG9hZGVyLWhpZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICAubWFwbG9hZGVyIHtcclxuICAgIC5sZHMtZWxsaXBzaXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbWFwbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4MiwgNzAsIDk1KTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE5MiwgMTkyKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMDYsIDIwNiwgMjU1KTtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MiwgNTAsIDc1KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTAsIDE4MiwgNDMpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTY3LCAxNjcpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWJlbHxQb2lyZXQrT25lfE9wZW4rU2FucytDb25kZW5zZWR8SnVyYXxNYW5qYXJpfFBvcHBpbnN8UmFsZXdheXxNb250c2VycmF0IFwiKTtcbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMDgzNDM5NTEyNS0yYTdlYjg4NDhhYzA/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMTY0JnE9ODBcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xufVxuLmNvbnRhaW5lciAubG9nbyBpbWcge1xuICB3aWR0aDogNDB2dztcbiAgaGVpZ2h0OiAzMHZ3O1xufVxuLmNvbnRhaW5lciAuZGVzYyB7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5jb250YWluZXIgLmRlc2MgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG4uY29udGFpbmVyIC5sb2dpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5sb2dpbiBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDYwdnc7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG4uY29udGFpbmVyIC5sb2dpbiBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNvbnRhaW5lciAubG9naW4gaW9uLWlucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDFiM2Y7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xuICBhbmltYXRpb246IGJhY2tncm91bmRtb3ZlciAzMHMgbGluZWFyIGluZmluaXRlO1xufVxuLmxvYWRlciAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5sb2FkZXIgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzM3B4O1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcbn1cbi5sb2FkZXIgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xufVxuLmxvYWRlciAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDhweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG59XG4ubG9hZGVyIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogMzJweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG59XG4ubG9hZGVyIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNTZweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XG4gIH1cbn1cblxuLmxvYWRpbmctdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHZoO1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDUwdmg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvYWRlci1oaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDIwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzNweDtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XG59XG4ubG9hZGVyLWhpZGUgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogOHB4O1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbn1cbi5sb2FkZXItaGlkZSAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDMycHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNTZweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtYXBsb2FkZXIge1xuICAwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYjY0NjVmO1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmEzMjRiO1xuICB9XG4gIDEwMCUge1xuICAgIGJvcmRlci1jb2xvcjogI2ZhYjYyYjtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/login/login.page.ts": 
        /*!*************************************!*\
          !*** ./src/app/login/login.page.ts ***!
          \*************************************/
        /*! exports provided: LoginPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function () { return LoginPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var LoginPage = /** @class */ (function () {
                function LoginPage(router, alertController, authService, toastCtrl
                // public fb: Facebook
                ) {
                    this.router = router;
                    this.alertController = alertController;
                    this.authService = authService;
                    this.toastCtrl = toastCtrl;
                    this.verification = "";
                    this.confirmationResult = '';
                    this.loaderMessages = 'Loading...';
                }
                LoginPage.prototype.ngOnInit = function () {
                    /*     setTimeout(() => {
                          this.slides.lockSwipes(true);
                        }, 1000); */
                };
                LoginPage.prototype.goSignUp = function () {
                    this.router.navigateByUrl("/signup");
                };
                /* login() {
                  // this.number = this.registrationForm.get('number').value
                  //this.password = this.registrationForm.get('password').value
                  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
                    'size': 'invisible',
                    'callback':  (response) => {
                      // reCAPTCHA solved, allow signInWithPhoneNumber.
                      this.onSignInSubmit();
                    }
              
                  });
                  console.log(window.recaptchaVerifier);
              
                } */
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
                    if (this.number.length !== 9) {
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
                        return this.authService.requestLogin(this.number, appVerifier);
                    }
                    // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptchaParameters, result => {
                    //   console.log(result);
                    // })
                };
                LoginPage.prototype.toast = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
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
                    var provider = new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
                    firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithRedirect(provider).then(function (result) {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = result;
                        // The signed-in user info.
                        var user = result;
                        console.log('My results ', result);
                        // ...
                    }).catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
                };
                // Facebook() {
                //   //  if (this.platform.is('cordova')) {
                //   return this.fb.login(['email', 'public_profile']).then(async res => {
                //     const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                //     await firebase.auth().signInWithCredential(facebookCredential).then(async (authdata) => {
                //       var user = authdata.user;
                //       var res = authdata.user.displayName
                //       console.log(user.displayName);
                //       console.log(user.email);
                //       console.log(user);
                //       // this.uid =  firebase.auth().currentUser.uid;
                //       // firebase.database().ref("user/" + this.uid).set({
                //       //   username: user.displayName,
                //       //   email: user.email,
                //       //   number: user.phoneNumber,
                //       //   profilepicture:user.photoURL
                //       // });
                //       /*   let loader = this.loadingCtrl.create({
                //           spinner: 'bubbles',
                //           content: 'Logging Please wait...',
                //         });
                //         loader.present(); */
                //       // this.navCtrl.setRoot(HomePage);
                //       // const alert = this.alertCtrl.create({
                //       //   title: 'Welcome',
                //       //   subTitle: `Hi ${user.displayName}`,
                //       //   buttons: ['OK']
                //       // });
                //       // alert.present();
                //       // loader.dismiss()
                //     })
                //   }).catch((err) => {
                //     console.log("Error logging into facebook ", err.message);
                //   })
                //   //
                //   // this.fb.login(['public_profile', 'email'])
                //   //   .then((response: FacebookLoginResponse) => {
                //   //     //this.onLoginSuccess(response);
                //   //     console.log('Logged into Facebook!', response)
                //   //     /*    let credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                //   //        firebase.auth().signInWithCredential(credential).then((info)=>{
                //   //          console.log("User details", info);
                //   //        })
                //   //        console.log('Logged into Facebook!', res.authResponse.accessToken) */
                //   //   })
                //   //   .catch(e => console.log('Error logging into Facebook', e));
                //   // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
                //   // var provider = new firebase.auth.FacebookAuthProvider();
                //   // firebase.auth().signInWithRedirect(provider).then((result)=> {
                //   //  /*  firebase.auth().getRedirectResult().then((res)=>{
                //   //     window.alert(JSON.stringify(res))
                //   //   }) */
                //   //   // This gives you a Google Access Token. You can use it to access the Google API.
                //   //   var token = result;
                //   //   // The signed-in user info.
                //   //   var user = result;
                //   //   console.log(result);
                //   //   // ...
                //   // }).catch((error)=> {
                //   //   // Handle Errors here.
                //   //   var errorCode = error.code;
                //   //   var errorMessage = error.message;
                //   //   // The email of the user's account used.
                //   //   var email = error.email;
                //   //   // The firebase.auth.AuthCredential type that was used.
                //   //   var credential = error.credential;
                //   //   // ...
                //   // });
                // }
                LoginPage.prototype.loginAnon = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInAnonymously()];
                                case 1: return [2 /*return*/, _a.sent()];
                                case 2:
                                    err_1 = _a.sent();
                                    console.log("Error...", err_1);
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
                        return __generator(this, function (_a) {
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
                return LoginPage;
            }());
            LoginPage.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
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
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
                    // public fb: Facebook
                ])
            ], LoginPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=1-es2015.js.map
//# sourceMappingURL=1-es5.js.map
//# sourceMappingURL=1-es5.js.map