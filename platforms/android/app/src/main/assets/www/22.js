(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n      <ion-icon slot=\"start\" name=\"arrow-back\" id=\"icon\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\" (click)=\"logout()\">\r\n        <ion-icon slot=\"start\" name=\"exit\" id=\"icon\"></ion-icon>\r\n      </ion-buttons>\r\n      <ion-title >PROFILE</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n    <div [ngClass]=\"{'loader': loaderAnimate, 'loader-hide': !loaderAnimate}\">\r\n        <div class=\"maploader\">\r\n            <div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div><p style=\"color:white; text-align: center;\">{{loaderMessages}}</p>\r\n        </div>\r\n       <!--  <div class=\"loading-text\">\r\n          <p>Loading Map</p>\r\n        </div> -->\r\n      </div>\r\n  \r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"image\" >\r\n      <img src=\"{{profilePic}}\">\r\n      <div class=\"name\">\r\n        <!-- <ion-progress-bar type=\"indeterminate\"></ion-progress-bar> -->\r\n        <p>{{name }} &nbsp; {{ surname}} <br><span>{{email}}</span></p>\r\n\r\n      </div>\r\n      <div class=\"camera\">\r\n        <ion-fab-button color=\"transparent\" (click)=\"selectImage()\">\r\n          <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-fab-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"btnz\">\r\n      <ion-button (click)=\"showEdit()\" color=\"transparent\">\r\n        <span *ngIf=\"!editprofile\">Account Details <ion-icon slot=\"end\" name=\"add\"></ion-icon></span>\r\n        <span *ngIf=\"editprofile\">Account Details <ion-icon slot=\"end\" name=\"remove\" ></ion-icon></span>\r\n      </ion-button>\r\n\r\n      <div class=\"edit\" *ngIf=\"editprofile\">\r\n        <div class=\"inputs\" >\r\n          \r\n            <ion-input [(ngModel)]=\"name\" placeholder=\"Name\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"surname\" placeholder=\"Surname\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"email\" placeholder=\"Email\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"address\" placeholder=\"address\"></ion-input>\r\n        </div>\r\n        <div class=\"buttonz\" >\r\n          <ion-button (click)=\"showEdit()\" color=\"transparent\" id=\"cancel\" style=\"border-radius: 20px;\">\r\n            CANCEL\r\n          </ion-button>\r\n          <ion-button (click)=\"updateProfile()\" color=\"transparent\" id=\"update\">\r\n            UPDATE\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n      <ion-button (click)=\"pendingOrders()\" color=\"transparent\">\r\n        <span>Pending Orders <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n      </ion-button>\r\n\r\n      <ion-button (click)=\"orderhistory()\" color=\"transparent\">\r\n        <span>Order History <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n      </ion-button>\r\n    </div>\r\n\r\n\r\n    <div class=\"files\">\r\n      <div class=\"backdrop\"></div>\r\n      <div class=\"wishlist\" (click)=\"wishlist()\">\r\n        <div class=\"backdrop\"></div>\r\n        <img src=\"https://i.pinimg.com/564x/d6/91/5b/d6915bda9b337db69c69cbd217c3b307.jpg\">\r\n\r\n        <div class=\"right\">\r\n          <div class=\"heart\">\r\n            <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\r\n          </div>\r\n\r\n          <div class=\"clock\">\r\n            <p>{{myWish}} items</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"basket\" (click)=\"basket()\">\r\n        <div class=\"backdrop\"></div>\r\n        <img src=\"https://i.pinimg.com/564x/91/2b/7c/912b7c0f897888c8ae8d24dce149da34.jpg\">\r\n\r\n        <div class=\"right\">\r\n          <div class=\"heart\">\r\n            <ion-icon slot=\"start\" name=\"basket\"></ion-icon>\r\n          </div>\r\n\r\n          <div class=\"clock\">\r\n            <p>{{myCart}} items</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"web_view\">\r\n    <div class=\"image\" >\r\n      <img src=\"{{profilePic}}\">\r\n      <div class=\"name\">\r\n        <!-- <ion-progress-bar type=\"indeterminate\"></ion-progress-bar> -->\r\n        <p>{{name }} &nbsp; {{ surname}} <br><span>{{email}}</span></p>\r\n\r\n      </div>\r\n      <div class=\"camera\">\r\n        <ion-fab-button color=\"transparent\" (click)=\"selectImage()\">\r\n          <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-fab-button>\r\n      </div>\r\n    </div>\r\n<div class=\"stuff\">\r\n    <div class=\"btnz\">\r\n      <ion-button (click)=\"showEdit()\" color=\"transparent\">\r\n        <span *ngIf=\"!editprofile\">Account Details <ion-icon slot=\"end\" name=\"add\"></ion-icon></span>\r\n        <span *ngIf=\"editprofile\">Account Details <ion-icon slot=\"end\" name=\"remove\" ></ion-icon></span>\r\n      </ion-button>\r\n\r\n      <div class=\"edit\" *ngIf=\"editprofile\">\r\n        <div class=\"inputs\" >\r\n          \r\n            <ion-input [(ngModel)]=\"name\" placeholder=\"Name\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"surname\" placeholder=\"Surname\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"email\" placeholder=\"Email\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"address\" placeholder=\"address\"></ion-input>\r\n        </div>\r\n        <div class=\"buttonz\" >\r\n          <ion-button (click)=\"showEdit()\" color=\"transparent\" id=\"cancel\" style=\"border-radius: 20px;\">\r\n            CANCEL\r\n          </ion-button>\r\n          <ion-button (click)=\"updateProfile()\" color=\"transparent\" id=\"update\">\r\n            UPDATE\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n      <ion-button (click)=\"pendingOrders()\" color=\"transparent\">\r\n        <span>Pending Orders <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n      </ion-button>\r\n\r\n      <ion-button (click)=\"orderhistory()\" color=\"transparent\">\r\n        <span>Order History <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n      </ion-button>\r\n    </div>\r\n\r\n\r\n    <div class=\"files\">\r\n      <div class=\"backdrop\"></div>\r\n      <div class=\"wishlist\" (click)=\"wishlist()\">\r\n        <div class=\"backdrop\"></div>\r\n        <img src=\"https://i.pinimg.com/564x/d6/91/5b/d6915bda9b337db69c69cbd217c3b307.jpg\">\r\n\r\n        <div class=\"right\">\r\n          <div class=\"heart\">\r\n            <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\r\n          </div>\r\n\r\n          <div class=\"clock\">\r\n            <p>{{myWish}} items</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"basket\" (click)=\"basket()\">\r\n        <div class=\"backdrop\"></div>\r\n        <img src=\"https://i.pinimg.com/564x/91/2b/7c/912b7c0f897888c8ae8d24dce149da34.jpg\">\r\n\r\n        <div class=\"right\">\r\n          <div class=\"heart\">\r\n            <ion-icon slot=\"start\" name=\"basket\"></ion-icon>\r\n          </div>\r\n\r\n          <div class=\"clock\">\r\n            <p>{{myCart}} items</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Abel|Poiret+One|Open+Sans+Condensed|Jura|Manjari|Poppins|Raleway|Montserrat \");\nion-toolbar {\n  --background: transparent;\n  position: absolute; }\nion-toolbar #icon {\n    color: maroon; }\n.container {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  position: absolute; }\n.container .image {\n    width: 100%;\n    height: 50vh;\n    display: flex;\n    flex-flow: column;\n    position: relative; }\n.container .image img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; }\n.container .image .name {\n      width: 80vw;\n      height: 15vw;\n      background: white;\n      text-align: center;\n      color: grey;\n      font-family: \"Poppins\";\n      font-size: 4vw;\n      border-radius: 10px;\n      z-index: 10;\n      position: absolute;\n      left: 10%;\n      bottom: 15px;\n      display: grid;\n      align-items: center;\n      box-shadow: 5px 5px 10px grey; }\n.container .image .name p {\n        margin: 0 !important;\n        font-weight: bold; }\n.container .image .name p span {\n          font-size: 3vw;\n          font-weight: normal; }\n.container .image .camera {\n      position: absolute;\n      bottom: 0;\n      right: 10px;\n      z-index: 15;\n      border-radius: 50%; }\n.container .image .camera ion-fab-button {\n        background: maroon;\n        border-radius: 50%;\n        color: white; }\n.container .btnz {\n    display: flex;\n    flex-flow: column;\n    width: 100vw;\n    margin: 5px 0px; }\n.container .btnz ion-button {\n      margin: 0;\n      padding: 0;\n      height: 7vh;\n      border-radius: 0 !important;\n      text-align: left;\n      border: 0.1px solid #d4d4d4;\n      background: #f2f2f2;\n      color: black;\n      font-weight: lighter;\n      overflow: hidden;\n      letter-spacing: 1px;\n      font-family: \"Poppins\"; }\n.container .btnz ion-button span {\n        width: 100%;\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between; }\n.container .btnz .edit {\n      width: 100%;\n      padding: 5px; }\n.container .btnz .edit ion-input {\n        width: 93vw;\n        border: 1px solid white;\n        margin: 5px;\n        padding: 3px;\n        border-radius: 7px;\n        font-size: 0.8em;\n        box-shadow: 2px 2px 20px #a5a5a5; }\n.container .btnz .edit .buttonz {\n        width: 100%;\n        display: flex;\n        flex-flow: row; }\n.container .btnz .edit .buttonz #cancel {\n          width: 45vw;\n          background: red;\n          border-radius: 8px; }\n.container .btnz .edit .buttonz #update {\n          width: 45vw;\n          background: green;\n          border-radius: 8px; }\n.container .btnz .edit .buttonz ion-button {\n          font-size: 0.8em;\n          margin: 5px;\n          height: 10vw;\n          border-radius: 10px;\n          color: white;\n          font-family: \"Poppins\";\n          letter-spacing: 2px; }\n.container .files {\n    width: 100%;\n    padding: 5px;\n    position: relative;\n    justify-content: space-evenly;\n    justify-items: center;\n    display: flex;\n    flex-flow: row; }\n.container .files .wishlist {\n      width: 45vw;\n      height: 25vh;\n      position: relative;\n      border-radius: 8px;\n      margin: 5px; }\n.container .files .wishlist img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 8px; }\n.container .files .wishlist .right {\n        display: flex;\n        height: 100%;\n        flex-flow: column;\n        text-align: right;\n        justify-content: space-between;\n        z-index: 10;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        color: white;\n        font-family: \"Poppins\";\n        font-weight: lighter; }\n.container .files .wishlist .right .heart ion-icon {\n          text-shadow: 5px 5px 10px grey; }\n.container .files .wishlist .backdrop {\n        -webkit-backdrop-filter: blur(3px);\n                backdrop-filter: blur(3px);\n        background: rgba(0, 0, 0, 0.39);\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: 0;\n        z-index: 10;\n        border-bottom-left-radius: 10px;\n        border-bottom-right-radius: 10px; }\n.container .files .basket {\n      margin: 5px;\n      width: 45vw;\n      height: 25vh;\n      position: relative;\n      border-radius: 8px; }\n.container .files .basket img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 8px; }\n.container .files .basket .right {\n        display: flex;\n        height: 100%;\n        flex-flow: column;\n        text-align: right;\n        justify-content: space-between;\n        z-index: 10;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        color: white;\n        font-family: \"Poppins\";\n        font-weight: lighter; }\n.container .files .basket .backdrop {\n        -webkit-backdrop-filter: blur(3px);\n                backdrop-filter: blur(3px);\n        background: rgba(0, 0, 0, 0.39);\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: 0;\n        z-index: 10;\n        border-bottom-left-radius: 10px;\n        border-bottom-right-radius: 10px; }\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite; }\n.loader .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n.loader .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n.loader .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n.loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto; }\n.loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); }\n.loader-hide .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n.loader-hide .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n.loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n@-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n@keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n@media only screen and (max-width: 1024px) {\n  .web_view {\n    display: none;\n    width: 0%;\n    height: 0%; } }\n@media only screen and (min-width: 1330px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  .web_view {\n    min-width: 800px;\n    max-width: 1200px;\n    margin: auto;\n    position: relative;\n    top: 5%; }\n    .web_view .image {\n      width: 100%;\n      height: 50vh;\n      display: flex;\n      flex-flow: column;\n      position: relative;\n      align-items: center; }\n      .web_view .image img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n      .web_view .image .name {\n        width: 30vw;\n        height: 5vw;\n        background: white;\n        text-align: center;\n        color: grey;\n        font-family: \"Poppins\";\n        border-radius: 10px;\n        z-index: 10;\n        position: absolute;\n        bottom: 15px;\n        display: grid;\n        align-items: center;\n        box-shadow: 5px 5px 10px grey; }\n        .web_view .image .name p {\n          margin: 0 !important;\n          font-weight: bold; }\n          .web_view .image .name p span {\n            font-weight: normal; }\n      .web_view .image .camera {\n        position: absolute;\n        bottom: 0;\n        right: 10px;\n        z-index: 15;\n        border-radius: 50%; }\n        .web_view .image .camera ion-fab-button {\n          background: maroon;\n          border-radius: 50%;\n          color: white; }\n    .web_view .btnz {\n      display: flex;\n      flex-flow: column;\n      margin: 5px 0px; }\n      .web_view .btnz ion-button {\n        margin: 0;\n        padding: 0;\n        height: 7vh;\n        border-radius: 0 !important;\n        text-align: left;\n        border-bottom: 0.1px solid #d4d4d4;\n        border-top: 0.1px solid #d4d4d4;\n        background: #f2f2f2;\n        color: black;\n        font-weight: lighter;\n        overflow: hidden;\n        letter-spacing: 1px;\n        font-family: \"Poppins\"; }\n        .web_view .btnz ion-button span {\n          width: 100%;\n          display: flex;\n          flex-flow: row;\n          justify-content: space-between; }\n      .web_view .btnz .edit {\n        padding: 5px; }\n        .web_view .btnz .edit ion-input {\n          border: 1px solid white;\n          margin: 5px;\n          padding: 3px;\n          border-radius: 7px;\n          box-shadow: 2px 2px 20px #a5a5a5; }\n        .web_view .btnz .edit .buttonz {\n          width: 100%;\n          display: flex;\n          flex-flow: row; }\n          .web_view .btnz .edit .buttonz #cancel {\n            width: 45vw;\n            background: red;\n            border-radius: 8px; }\n          .web_view .btnz .edit .buttonz #update {\n            width: 45vw;\n            background: green;\n            border-radius: 8px; }\n          .web_view .btnz .edit .buttonz ion-button {\n            margin: 5px;\n            border-radius: 10px;\n            color: white;\n            font-family: \"Poppins\";\n            letter-spacing: 2px; }\n    .web_view .files {\n      width: 100%;\n      padding: 5px;\n      position: relative;\n      justify-content: space-evenly;\n      justify-items: center;\n      display: flex;\n      flex-flow: row; }\n      .web_view .files .wishlist {\n        width: 45vw;\n        height: 35vh;\n        position: relative;\n        border-radius: 8px;\n        margin: 5px; }\n        .web_view .files .wishlist img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          border-radius: 8px; }\n        .web_view .files .wishlist .right {\n          display: flex;\n          height: 100%;\n          flex-flow: column;\n          text-align: right;\n          justify-content: space-between;\n          z-index: 10;\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          color: white;\n          font-family: \"Poppins\";\n          font-weight: lighter; }\n          .web_view .files .wishlist .right .heart ion-icon {\n            text-shadow: 5px 5px 10px grey; }\n        .web_view .files .wishlist .backdrop {\n          -webkit-backdrop-filter: blur(3px);\n                  backdrop-filter: blur(3px);\n          background: rgba(0, 0, 0, 0.39);\n          width: 100%;\n          height: 30px;\n          position: absolute;\n          bottom: 0;\n          z-index: 10;\n          border-bottom-left-radius: 10px;\n          border-bottom-right-radius: 10px; }\n      .web_view .files .basket {\n        margin: 5px;\n        width: 45vw;\n        height: 35vh;\n        position: relative;\n        border-radius: 8px; }\n        .web_view .files .basket img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          border-radius: 8px; }\n        .web_view .files .basket .right {\n          display: flex;\n          height: 100%;\n          flex-flow: column;\n          text-align: right;\n          justify-content: space-between;\n          z-index: 10;\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          color: white;\n          font-family: \"Poppins\";\n          font-weight: lighter; }\n        .web_view .files .basket .backdrop {\n          -webkit-backdrop-filter: blur(3px);\n                  backdrop-filter: blur(3px);\n          background: rgba(0, 0, 0, 0.39);\n          width: 100%;\n          height: 30px;\n          position: absolute;\n          bottom: 0;\n          z-index: 10;\n          border-bottom-left-radius: 10px;\n          border-bottom-right-radius: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXE5NbGFuZ2VuaVxcRG9jdW1lbnRzXFxHaXRIdWJcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtSUFBWTtBQUVaO0VBQ0UseUJBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUZwQjtJQUlJLGFBQWEsRUFBQTtBQUlqQjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQixFQUFBO0FBSnBCO0lBUUksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0FBWnRCO01BZU0sV0FBVztNQUNYLFlBQVk7TUFDWixvQkFBaUI7U0FBakIsaUJBQWlCLEVBQUE7QUFqQnZCO01BcUJNLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsc0JBQXNCO01BQ3RCLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsWUFBWTtNQUNaLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsNkJBQTZCLEVBQUE7QUFuQ25DO1FBc0NRLG9CQUFvQjtRQUNwQixpQkFBaUIsRUFBQTtBQXZDekI7VUF5Q1UsY0FBYztVQUNkLG1CQUFtQixFQUFBO0FBMUM3QjtNQWdETSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFdBQVc7TUFDWCxXQUFXO01BQ1gsa0JBQWtCLEVBQUE7QUFwRHhCO1FBc0RRLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsWUFBWSxFQUFBO0FBeERwQjtJQThESSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlLEVBQUE7QUFqRW5CO01BbUVNLFNBQVM7TUFDVCxVQUFVO01BQ1YsV0FBVztNQUNYLDJCQUEyQjtNQUMzQixnQkFBZ0I7TUFDaEIsMkJB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a0JBQWtCO1VBQ2xCLFNBQVM7VUFFVCxXQUFXO1VBQ1gsK0JBQStCO1VBQy9CLGdDQUFnQyxFQUFBLEVBQ2pDIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFiZWx8UG9pcmV0K09uZXxPcGVuK1NhbnMrQ29uZGVuc2VkfEp1cmF8TWFuamFyaXxQb3BwaW5zfFJhbGV3YXl8TW9udHNlcnJhdCBcIik7XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgI2ljb24ge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICB3aWR0aDogODB2dztcclxuICAgICAgaGVpZ2h0OiAxNXZ3O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMTAlO1xyXG4gICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBncmV5O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbWVyYSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcm9vbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRueiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDd2aDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBib3JkZXI6MC4xcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgICAvLyBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICAgIC8vIGJvcmRlci10b3A6IDAuMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxuICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICB3aWR0aDogOTN2dztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCByZ2IoMTY1LCAxNjUsIDE2NSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b256IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICNjYW5jZWwge1xyXG4gICAgICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXBkYXRlIHtcclxuICAgICAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMHZ3O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmlsZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuXHJcbiAgICAud2lzaGxpc3Qge1xyXG4gICAgICB3aWR0aDogNDV2dztcclxuICAgICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJpZ2h0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG5cclxuICAgICAgICAuaGVhcnQge1xyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4IGdyZXk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmFja2Ryb3Age1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zOSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmFza2V0IHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzkpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG5cclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5sb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCAyNywgNjMpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcbiAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kbW92ZXIgMzBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAubWFwbG9hZGVyIHtcclxuICAgIC5sZHMtZWxsaXBzaXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5sb2FkaW5nLXRleHQge1xyXG4gIC8vIGNvbG9yOiB5ZWxsb3c7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNTB2aDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIC8vei1pbmRleDogOTA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5sb2FkZXItaGlkZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAyMDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIC5tYXBsb2FkZXIge1xyXG4gICAgLmxkcy1lbGxpcHNpcyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXYge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMzNweDtcclxuICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGxlZnQ6IDMycHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgbGVmdDogNTZweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBtYXBsb2FkZXIge1xyXG4gIDAlIHtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTgyLCA3MCwgOTUpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTkyLCAxOTIpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDIwNiwgMjA2LCAyNTUpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQyLCA1MCwgNzUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1MCwgMTgyLCA0Myk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxNjcsIDE2Nyk7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAud2ViX3ZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMzBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICBcclxuICB9XHJcblxyXG4gIC53ZWJfdmlldyB7XHJcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUlO1xyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgICAgIGhlaWdodDogNXZ3O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICBcclxuICAgICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBncmV5O1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYW1lcmEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGlvbi1mYWItYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG1hcm9vbjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRueiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAvLyB3aWR0aDogNzAuNXZ3O1xyXG4gICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGhlaWdodDogN3ZoO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxuICAgICAgICBib3JkZXItdG9wOiAwLjFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmVkaXQge1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiKDE2NSwgMTY1LCAxNjUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1dHRvbnoge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgICAjY2FuY2VsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICN1cGRhdGUge1xyXG4gICAgICAgICAgICB3aWR0aDogNDV2dztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMHZ3O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmlsZXMge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG5cclxuICAgICAgLndpc2hsaXN0IHtcclxuICAgICAgICB3aWR0aDogNDV2dztcclxuICAgICAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuXHJcbiAgICAgICAgICAuaGVhcnQge1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggMTBweCBncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFja2Ryb3Age1xyXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzkpO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcblxyXG4gICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmFza2V0IHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB3aWR0aDogNDV2dztcclxuICAgICAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrZHJvcCB7XHJcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zOSk7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");







var ProfilePage = /** @class */ (function () {
    function ProfilePage(authService, router, toastCtrl, loadingController, camera, actionSheetCtrl, navCtrl) {
        this.authService = authService;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.loaderMessages = 'Loading...';
        this.loaderAnimate = true;
        this.editprofile = false;
        this.dbProfile = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("userProfile");
        this.dbCart = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Cart');
        this.dbWish = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Wishlist');
        this.storage = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        this.uid = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaderAnimate = false;
        }, 2000);
        this.dbProfile.doc(this.uid).onSnapshot(function (doc) {
            if (doc.exists) {
                _this.profilePic = doc.data().profilePic;
                _this.name = doc.data().name;
                _this.surname = doc.data().surname;
                _this.email = doc.data().email;
                _this.address = doc.data().address;
            }
            else {
                _this.navCtrl.navigateForward('create-account');
            }
            //console.log("My profile ", doc.data());
            //this.profile.push(doc.data());
        });
        //this.presentLoading();
        this.dbCart.where('customerUID', '==', this.uid).onSnapshot(function (res) {
            _this.myCart = res.size;
        });
        this.dbWish.where('customerUID', '==', this.uid).onSnapshot(function (res1) {
            _this.myWish = res1.size;
        });
    };
    ProfilePage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading..',
                            duration: 3000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.basket = function () {
        this.router.navigateByUrl("basket");
    };
    ProfilePage.prototype.wishlist = function () {
        this.router.navigateByUrl("wishlist");
    };
    ProfilePage.prototype.pendingOrders = function () {
        this.router.navigateByUrl("pending-orders");
    };
    ProfilePage.prototype.orderhistory = function () {
        this.router.navigateByUrl("order-history");
    };
    ProfilePage.prototype.showEdit = function () {
        this.editprofile = !this.editprofile;
    };
    ProfilePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ProfilePage.prototype.logout = function () {
        this.authService.logoutUser();
    };
    ProfilePage.prototype.updateProfile = function () {
        var _this = this;
        this.dbProfile.doc(this.uid).update({ name: this.name, surname: this.surname, email: this.email, address: this.address }).then(function () {
            _this.editprofile = !_this.editprofile;
            _this.toastController();
        });
        //console.log('My profile ', p);
    };
    ProfilePage.prototype.toastController = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: 'Profile update', duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        return [2 /*return*/, toast.present()];
                }
            });
        });
    };
    /* createAccount() {
      // let email = this.account.get('name')
      if (this.profilePic == "") {
        this.alert('Profile picture required', 'Please upload your image')
      } else {
        this.name = this.account.get('name').value;
        this.surname = this.account.get('surname').value;
        this.email = this.account.get('email').value;
  
        this.dbProfile.doc(this.uid).set({
          name: this.name, surname: this.surname, cellPhone: firebase.auth().currentUser.phoneNumber,
          email: this.email, profilePic: this.profilePic
        }).then((res) => {
          this.router.navigateByUrl('home');
        }).catch((err) => {
          this.alert('Profile not created', 'Please try again..');
        })
      } */
    ProfilePage.prototype.selectImage = function () {
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
    ProfilePage.prototype.takePicture = function (sourcetype) {
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
                                    //  this.uploadprogress = progress;
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
    ProfilePage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=22.js.map