(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n      <ion-icon slot=\"start\" name=\"arrow-back\" id=\"icon\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\" (click)=\"logout()\">\r\n        <ion-icon slot=\"start\" name=\"exit\" id=\"icon\"></ion-icon>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n    <div [ngClass]=\"{'loader': loaderAnimate, 'loader-hide': !loaderAnimate}\">\r\n        <div class=\"maploader\">\r\n            <div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div><p style=\"color:white; text-align: center;\">{{loaderMessages}}</p>\r\n        </div>\r\n       <!--  <div class=\"loading-text\">\r\n          <p>Loading Map</p>\r\n        </div> -->\r\n      </div>\r\n  \r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"image\" >\r\n      <img src=\"{{profilePic}}\">\r\n      <div class=\"name\">\r\n        <!-- <ion-progress-bar type=\"indeterminate\"></ion-progress-bar> -->\r\n        <p>{{name }} &nbsp; {{ surname}} <br><span>{{email}}</span></p>\r\n\r\n      </div>\r\n      <div class=\"camera\">\r\n        <ion-fab-button color=\"transparent\" (click)=\"selectImage()\">\r\n          <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-fab-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"btnz\">\r\n      <ion-button (click)=\"showEdit()\" color=\"transparent\">\r\n        <span *ngIf=\"!editprofile\">Account Details <ion-icon slot=\"end\" name=\"add\"></ion-icon></span>\r\n        <span *ngIf=\"editprofile\">Account Details <ion-icon slot=\"end\" name=\"remove\" ></ion-icon></span>\r\n      </ion-button>\r\n\r\n      <div class=\"edit\" *ngIf=\"editprofile\">\r\n        <div class=\"inputs\" >\r\n          \r\n            <ion-input [(ngModel)]=\"name\" placeholder=\"Name\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"surname\" placeholder=\"Surname\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"email\" placeholder=\"Email\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"address\" placeholder=\"address\"></ion-input>\r\n        </div>\r\n        <div class=\"buttonz\" >\r\n          <ion-button (click)=\"showEdit()\" color=\"transparent\" id=\"cancel\" style=\"border-radius: 20px;\">\r\n            CANCEL\r\n          </ion-button>\r\n          <ion-button (click)=\"updateProfile()\" color=\"transparent\" id=\"update\">\r\n            UPDATE\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n      <ion-button (click)=\"pendingOrders()\" color=\"transparent\">\r\n        <span>Pending Orders <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n      </ion-button>\r\n\r\n      <ion-button (click)=\"orderhistory()\" color=\"transparent\">\r\n        <span>Order History <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n      </ion-button>\r\n    </div>\r\n\r\n\r\n    <div class=\"files\">\r\n      <div class=\"backdrop\"></div>\r\n      <div class=\"wishlist\" (click)=\"wishlist()\">\r\n        <div class=\"backdrop\"></div>\r\n        <img src=\"https://i.pinimg.com/564x/d6/91/5b/d6915bda9b337db69c69cbd217c3b307.jpg\">\r\n\r\n        <div class=\"right\">\r\n          <div class=\"heart\">\r\n            <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\r\n          </div>\r\n\r\n          <div class=\"clock\">\r\n            <p>{{myWish}} items</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"basket\" (click)=\"basket()\">\r\n        <div class=\"backdrop\"></div>\r\n        <img src=\"https://i.pinimg.com/564x/91/2b/7c/912b7c0f897888c8ae8d24dce149da34.jpg\">\r\n\r\n        <div class=\"right\">\r\n          <div class=\"heart\">\r\n            <ion-icon slot=\"start\" name=\"basket\"></ion-icon>\r\n          </div>\r\n\r\n          <div class=\"clock\">\r\n            <p>{{myCart}} items</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"web_view\">\r\n    <div class=\"image\" >\r\n      <img src=\"{{profilePic}}\">\r\n      <div class=\"name\">\r\n        <!-- <ion-progress-bar type=\"indeterminate\"></ion-progress-bar> -->\r\n        <p>{{name }} &nbsp; {{ surname}} <br><span>{{email}}</span></p>\r\n\r\n      </div>\r\n      <div class=\"camera\">\r\n        <ion-fab-button color=\"transparent\" (click)=\"selectImage()\">\r\n          <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-fab-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"btnz\">\r\n      <ion-button (click)=\"showEdit()\" color=\"transparent\">\r\n        <span *ngIf=\"!editprofile\">Account Details <ion-icon slot=\"end\" name=\"add\"></ion-icon></span>\r\n        <span *ngIf=\"editprofile\">Account Details <ion-icon slot=\"end\" name=\"remove\" ></ion-icon></span>\r\n      </ion-button>\r\n\r\n      <div class=\"edit\" *ngIf=\"editprofile\">\r\n        <div class=\"inputs\" >\r\n          \r\n            <ion-input [(ngModel)]=\"name\" placeholder=\"Name\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"surname\" placeholder=\"Surname\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"email\" placeholder=\"Email\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"address\" placeholder=\"address\"></ion-input>\r\n        </div>\r\n        <div class=\"buttonz\" >\r\n          <ion-button (click)=\"showEdit()\" color=\"transparent\" id=\"cancel\" style=\"border-radius: 20px;\">\r\n            CANCEL\r\n          </ion-button>\r\n          <ion-button (click)=\"updateProfile()\" color=\"transparent\" id=\"update\">\r\n            UPDATE\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n      <ion-button (click)=\"pendingOrders()\" color=\"transparent\">\r\n        <span>Pending Orders <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n      </ion-button>\r\n\r\n      <ion-button (click)=\"orderhistory()\" color=\"transparent\">\r\n        <span>Order History <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n      </ion-button>\r\n    </div>\r\n\r\n\r\n    <div class=\"files\">\r\n      <div class=\"backdrop\"></div>\r\n      <div class=\"wishlist\" (click)=\"wishlist()\">\r\n        <div class=\"backdrop\"></div>\r\n        <img src=\"https://i.pinimg.com/564x/d6/91/5b/d6915bda9b337db69c69cbd217c3b307.jpg\">\r\n\r\n        <div class=\"right\">\r\n          <div class=\"heart\">\r\n            <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\r\n          </div>\r\n\r\n          <div class=\"clock\">\r\n            <p>{{myWish}} items</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"basket\" (click)=\"basket()\">\r\n        <div class=\"backdrop\"></div>\r\n        <img src=\"https://i.pinimg.com/564x/91/2b/7c/912b7c0f897888c8ae8d24dce149da34.jpg\">\r\n\r\n        <div class=\"right\">\r\n          <div class=\"heart\">\r\n            <ion-icon slot=\"start\" name=\"basket\"></ion-icon>\r\n          </div>\r\n\r\n          <div class=\"clock\">\r\n            <p>{{myCart}} items</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Abel|Poiret+One|Open+Sans+Condensed|Jura|Manjari|Poppins|Raleway|Montserrat \");\nion-toolbar {\n  --background: transparent;\n  position: absolute; }\nion-toolbar #icon {\n    color: maroon; }\n.container {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  position: absolute; }\n.container .image {\n    width: 100%;\n    height: 50vh;\n    display: flex;\n    flex-flow: column;\n    position: relative; }\n.container .image img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; }\n.container .image .name {\n      width: 80vw;\n      height: 15vw;\n      background: white;\n      text-align: center;\n      color: grey;\n      font-family: \"Poppins\";\n      font-size: 4vw;\n      border-radius: 10px;\n      z-index: 10;\n      position: absolute;\n      left: 10%;\n      bottom: 15px;\n      display: grid;\n      align-items: center;\n      box-shadow: 5px 5px 10px grey; }\n.container .image .name p {\n        margin: 0 !important;\n        font-weight: bold; }\n.container .image .name p span {\n          font-size: 3vw;\n          font-weight: normal; }\n.container .image .camera {\n      position: absolute;\n      bottom: 0;\n      right: 10px;\n      z-index: 15;\n      border-radius: 50%; }\n.container .image .camera ion-fab-button {\n        background: maroon;\n        border-radius: 50%;\n        color: white; }\n.container .btnz {\n    display: flex;\n    flex-flow: column;\n    width: 100vw;\n    margin: 5px 0px; }\n.container .btnz ion-button {\n      margin: 0;\n      padding: 0;\n      height: 7vh;\n      border-radius: 0 !important;\n      text-align: left;\n      border-bottom: 0.1px solid #d4d4d4;\n      border-top: 0.1px solid #d4d4d4;\n      background: #f2f2f2;\n      color: black;\n      font-weight: lighter;\n      overflow: hidden;\n      letter-spacing: 1px;\n      font-family: \"Poppins\"; }\n.container .btnz ion-button span {\n        width: 100%;\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between; }\n.container .btnz .edit {\n      width: 100%;\n      padding: 5px; }\n.container .btnz .edit ion-input {\n        width: 93vw;\n        border: 1px solid white;\n        margin: 5px;\n        padding: 3px;\n        border-radius: 7px;\n        font-size: 0.8em;\n        box-shadow: 2px 2px 20px #a5a5a5; }\n.container .btnz .edit .buttonz {\n        width: 100%;\n        display: flex;\n        flex-flow: row; }\n.container .btnz .edit .buttonz #cancel {\n          width: 45vw;\n          background: red;\n          border-radius: 8px; }\n.container .btnz .edit .buttonz #update {\n          width: 45vw;\n          background: green;\n          border-radius: 8px; }\n.container .btnz .edit .buttonz ion-button {\n          font-size: 0.8em;\n          margin: 5px;\n          height: 10vw;\n          border-radius: 10px;\n          color: white;\n          font-family: \"Poppins\";\n          letter-spacing: 2px; }\n.container .files {\n    width: 100%;\n    padding: 5px;\n    position: relative;\n    justify-content: space-evenly;\n    justify-items: center;\n    display: flex;\n    flex-flow: row; }\n.container .files .wishlist {\n      width: 45vw;\n      height: 25vh;\n      position: relative;\n      border-radius: 8px;\n      margin: 5px; }\n.container .files .wishlist img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 8px; }\n.container .files .wishlist .right {\n        display: flex;\n        height: 100%;\n        flex-flow: column;\n        text-align: right;\n        justify-content: space-between;\n        z-index: 10;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        color: white;\n        font-family: \"Poppins\";\n        font-weight: lighter; }\n.container .files .wishlist .right .heart ion-icon {\n          text-shadow: 5px 5px 10px grey; }\n.container .files .wishlist .backdrop {\n        -webkit-backdrop-filter: blur(3px);\n                backdrop-filter: blur(3px);\n        background: rgba(0, 0, 0, 0.39);\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: 0;\n        z-index: 10;\n        border-bottom-left-radius: 10px;\n        border-bottom-right-radius: 10px; }\n.container .files .basket {\n      margin: 5px;\n      width: 45vw;\n      height: 25vh;\n      position: relative;\n      border-radius: 8px; }\n.container .files .basket img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 8px; }\n.container .files .basket .right {\n        display: flex;\n        height: 100%;\n        flex-flow: column;\n        text-align: right;\n        justify-content: space-between;\n        z-index: 10;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        color: white;\n        font-family: \"Poppins\";\n        font-weight: lighter; }\n.container .files .basket .backdrop {\n        -webkit-backdrop-filter: blur(3px);\n                backdrop-filter: blur(3px);\n        background: rgba(0, 0, 0, 0.39);\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: 0;\n        z-index: 10;\n        border-bottom-left-radius: 10px;\n        border-bottom-right-radius: 10px; }\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite; }\n.loader .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n.loader .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n.loader .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n.loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto; }\n.loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); }\n.loader-hide .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n.loader-hide .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n.loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n@-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n@keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n@media only screen and (max-width: 1024px) {\n  .web_view {\n    display: none;\n    width: 0%;\n    height: 0%; } }\n@media only screen and (min-width: 1330px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  .web_view {\n    min-width: 800px;\n    max-width: 1200px;\n    margin: auto; }\n    .web_view .image {\n      width: 100%;\n      height: 50vh;\n      display: flex;\n      flex-flow: column;\n      position: relative; }\n      .web_view .image img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n      .web_view .image .name {\n        width: 60vw;\n        background: white;\n        text-align: center;\n        color: grey;\n        font-family: \"Poppins\";\n        font-size: 4vw;\n        border-radius: 10px;\n        z-index: 10;\n        position: absolute;\n        left: 10%;\n        bottom: 15px;\n        display: grid;\n        align-items: center;\n        box-shadow: 5px 5px 10px grey; }\n        .web_view .image .name p {\n          margin: 0 !important;\n          font-weight: bold; }\n          .web_view .image .name p span {\n            font-size: 3vw;\n            font-weight: normal; }\n      .web_view .image .camera {\n        position: absolute;\n        bottom: 0;\n        right: 10px;\n        z-index: 15;\n        border-radius: 50%; }\n        .web_view .image .camera ion-fab-button {\n          background: maroon;\n          border-radius: 50%;\n          color: white; }\n    .web_view .btnz {\n      display: flex;\n      flex-flow: column;\n      width: 60vw;\n      margin: 5px 0px; }\n      .web_view .btnz ion-button {\n        margin: 0;\n        padding: 0;\n        height: 7vh;\n        border-radius: 0 !important;\n        text-align: left;\n        border-bottom: 0.1px solid #d4d4d4;\n        border-top: 0.1px solid #d4d4d4;\n        background: #f2f2f2;\n        color: black;\n        font-weight: lighter;\n        overflow: hidden;\n        letter-spacing: 1px;\n        font-family: \"Poppins\"; }\n        .web_view .btnz ion-button span {\n          width: 100%;\n          display: flex;\n          flex-flow: row;\n          justify-content: space-between; }\n      .web_view .btnz .edit {\n        width: 100%;\n        padding: 5px; }\n        .web_view .btnz .edit ion-input {\n          width: 93vw;\n          border: 1px solid white;\n          margin: 5px;\n          padding: 3px;\n          border-radius: 7px;\n          box-shadow: 2px 2px 20px #a5a5a5; }\n        .web_view .btnz .edit .buttonz {\n          width: 100%;\n          display: flex;\n          flex-flow: row; }\n          .web_view .btnz .edit .buttonz #cancel {\n            width: 45vw;\n            background: red;\n            border-radius: 8px; }\n          .web_view .btnz .edit .buttonz #update {\n            width: 45vw;\n            background: green;\n            border-radius: 8px; }\n          .web_view .btnz .edit .buttonz ion-button {\n            margin: 5px;\n            border-radius: 10px;\n            color: white;\n            font-family: \"Poppins\";\n            letter-spacing: 2px; }\n    .web_view .files {\n      width: 100%;\n      padding: 5px;\n      position: relative;\n      justify-content: space-evenly;\n      justify-items: center;\n      display: flex;\n      flex-flow: row; }\n      .web_view .files .wishlist {\n        width: 45vw;\n        height: 25vh;\n        position: relative;\n        border-radius: 8px;\n        margin: 5px; }\n        .web_view .files .wishlist img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          border-radius: 8px; }\n        .web_view .files .wishlist .right {\n          display: flex;\n          height: 100%;\n          flex-flow: column;\n          text-align: right;\n          justify-content: space-between;\n          z-index: 10;\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          color: white;\n          font-family: \"Poppins\";\n          font-weight: lighter; }\n          .web_view .files .wishlist .right .heart ion-icon {\n            text-shadow: 5px 5px 10px grey; }\n        .web_view .files .wishlist .backdrop {\n          -webkit-backdrop-filter: blur(3px);\n                  backdrop-filter: blur(3px);\n          background: rgba(0, 0, 0, 0.39);\n          width: 100%;\n          height: 30px;\n          position: absolute;\n          bottom: 0;\n          z-index: 10;\n          border-bottom-left-radius: 10px;\n          border-bottom-right-radius: 10px; }\n      .web_view .files .basket {\n        margin: 5px;\n        width: 45vw;\n        height: 25vh;\n        position: relative;\n        border-radius: 8px; }\n        .web_view .files .basket img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          border-radius: 8px; }\n        .web_view .files .basket .right {\n          display: flex;\n          height: 100%;\n          flex-flow: column;\n          text-align: right;\n          justify-content: space-between;\n          z-index: 10;\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          color: white;\n          font-family: \"Poppins\";\n          font-weight: lighter; }\n        .web_view .files .basket .backdrop {\n          -webkit-backdrop-filter: blur(3px);\n                  backdrop-filter: blur(3px);\n          background: rgba(0, 0, 0, 0.39);\n          width: 100%;\n          height: 30px;\n          position: absolute;\n          bottom: 0;\n          z-index: 10;\n          border-bottom-left-radius: 10px;\n          border-bottom-right-radius: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtSUFBWTtBQUVaO0VBQ0UseUJBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUZwQjtJQUlJLGFBQWEsRUFBQTtBQUlqQjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQixFQUFBO0FBSnBCO0lBUUksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0FBWnRCO01BZU0sV0FBVztNQUNYLFlBQVk7TUFDWixvQkFBaUI7U0FBakIsaUJBQWlCLEVBQUE7QUFqQnZCO01BcUJNLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsc0JBQXNCO01BQ3RCLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsWUFBWTtNQUNaLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsNkJBQTZCLEVBQUE7QUFuQ25DO1FBc0NRLG9CQUFvQjtRQUNwQixpQkFBaUIsRUFBQTtBQXZDekI7VUF5Q1UsY0FBYztVQUNkLG1CQUFtQixFQUFBO0FBMUM3QjtNQWdETSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFdBQVc7TUFDWCxXQUFXO01BQ1gsa0JBQWtCLEVBQUE7QUFwRHhCO1FBc0RRLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsWUFBWSxFQUFBO0FBeERwQjtJQStESSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlLEVBQUE7QUFsRW5CO01Bb0VNLFNBQVM7TUFDVCxVQUFVO01BQ1YsV0FBVztNQUNYLDJCQUEyQjtNQUMzQixnQkFBZ0I7TUFDaEIsa0NBQTZDO01BQzdDLCtC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WCxZQUFZO1VBQ1osa0JBQWtCO1VBQ2xCLFNBQVM7VUFFVCxXQUFXO1VBQ1gsK0JBQStCO1VBQy9CLGdDQUFnQyxFQUFBLEVBQ2pDIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFiZWx8UG9pcmV0K09uZXxPcGVuK1NhbnMrQ29uZGVuc2VkfEp1cmF8TWFuamFyaXxQb3BwaW5zfFJhbGV3YXl8TW9udHNlcnJhdCBcIik7XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgI2ljb24ge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICB3aWR0aDogODB2dztcclxuICAgICAgaGVpZ2h0OiAxNXZ3O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMTAlO1xyXG4gICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBncmV5O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbWVyYSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgaW9uLWZhYi1idXR0b257XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFyb29uO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRueiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDd2aDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICAgIGJvcmRlci10b3A6IDAuMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxuICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICB3aWR0aDogOTN2dztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCByZ2IoMTY1LCAxNjUsIDE2NSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b256IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICNjYW5jZWwge1xyXG4gICAgICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXBkYXRlIHtcclxuICAgICAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMHZ3O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmlsZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuXHJcbiAgICAud2lzaGxpc3Qge1xyXG4gICAgICB3aWR0aDogNDV2dztcclxuICAgICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJpZ2h0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG5cclxuICAgICAgICAuaGVhcnQge1xyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4IGdyZXk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmFja2Ryb3Age1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zOSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmFza2V0IHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzkpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG5cclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5sb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6cmdiKDAsIDI3LCA2Myk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICBhbmltYXRpb246IGJhY2tncm91bmRtb3ZlciAzMHMgbGluZWFyIGluZmluaXRlO1xyXG4gIC5tYXBsb2FkZXIge1xyXG4gICAgLmxkcy1lbGxpcHNpcyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXYge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMzNweDtcclxuICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGxlZnQ6IDMycHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgbGVmdDogNTZweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiB9XHJcbiAubG9hZGluZy10ZXh0IHtcclxuICAvLyBjb2xvcjogeWVsbG93O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwdmg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZDogcmVkO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICAvL3otaW5kZXg6IDkwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuIH1cclxuIC5sb2FkZXItaGlkZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAyMDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIC5tYXBsb2FkZXIge1xyXG4gICAgLmxkcy1lbGxpcHNpcyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXYge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMzNweDtcclxuICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGxlZnQ6IDMycHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgbGVmdDogNTZweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiB9XHJcbiBAa2V5ZnJhbWVzIG1hcGxvYWRlciB7XHJcbiAgMCUge1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigxODIsIDcwLCA5NSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxOTIsIDE5Mik7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjA2LCAyMDYsIDI1NSk7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDIsIDUwLCA3NSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjUwLCAxODIsIDQzKTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE2NywgMTY3KTtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG4gfVxyXG5cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLndlYl92aWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gIH1cclxufVxyXG5cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMzMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAud2ViX3ZpZXcge1xyXG4gICAgbWluLXdpZHRoOiA4MDBweDtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICB3aWR0aDogNjB2dztcclxuICAgICAgLy8gaGVpZ2h0OiAxNXZ3O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMTAlO1xyXG4gICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBncmV5O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbWVyYSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgaW9uLWZhYi1idXR0b257XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFyb29uO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRueiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB3aWR0aDogNjB2dztcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogN3ZoO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxuICAgICAgYm9yZGVyLXRvcDogMC4xcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA5M3Z3O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYigxNjUsIDE2NSwgMTY1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ1dHRvbnoge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgI2NhbmNlbCB7XHJcbiAgICAgICAgICB3aWR0aDogNDV2dztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1cGRhdGUge1xyXG4gICAgICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAvLyBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAvLyBoZWlnaHQ6IDEwdnc7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5maWxlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG5cclxuICAgIC53aXNobGlzdCB7XHJcbiAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblxyXG4gICAgICAgIC5oZWFydCB7XHJcbiAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggZ3JleTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5iYWNrZHJvcCB7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM5KTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iYXNrZXQge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICAgIGhlaWdodDogMjV2aDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJpZ2h0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmFja2Ryb3Age1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zOSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIH1cclxufVxyXG4iXX0= */");

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
            //console.log("My profile ", doc.data());
            _this.profilePic = doc.data().profilePic;
            _this.name = doc.data().name;
            _this.surname = doc.data().surname;
            _this.email = doc.data().email;
            _this.address = doc.data().address;
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