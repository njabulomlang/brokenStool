(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pending-orders/pending-orders.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pending-orders/pending-orders.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" id=\"icon\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Pending Orders</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div [ngClass]=\"{'loader': loaderAnimate, 'loader-hide': !loaderAnimate}\">\r\n    <div class=\"maploader\">\r\n      <div class=\"lds-ellipsis\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n      </div>\r\n      <p style=\"color:white; text-align: center;\">{{loaderMessages}}</p>\r\n    </div>\r\n    <!--  <div class=\"loading-text\">\r\n          <p>Loading Map</p>\r\n        </div> -->\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"cards\">\r\n      <div class=\"card\" *ngFor=\"let o of myOrder\">\r\n        <div class=\"top\" *ngFor=\"let p of o.info.product\">\r\n          <div class=\"image\">\r\n            <img src=\"{{p.picture}}\" (click)=\"getOrder(o.id)\">\r\n          </div>\r\n          <div class=\"info\">\r\n            <p id=\"name\" style=\"font-family: 'Poppins'; font-size: 3vw; \"><span\r\n                style=\"letter-spacing: 1.2px; text-transform: uppercase;\"><b>{{p.product_name}}</b></span> <br> <i>QTY.\r\n                {{p.quantity}}</i></p>\r\n            <p id=\"costs\" style=\"font-size: 2.5vw;\">\r\n              {{p.cost * p.quantity | currency:'R'}} <br>\r\n              <span style=\"line-height: 10px;\">\r\n                {{p.timestamp | date:'medium'}} <br>\r\n                {{o.id}}\r\n\r\n              </span>\r\n\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"butt\">\r\n          <ion-button (click)=\"orderTrack(o.id,o.info)\" color=\"transparent\">\r\n            Track My Order({{o.info.product.length}})\r\n          </ion-button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"card\" id=\"msg\" *ngIf=\"myOrder.length==0\">\r\n        <p> You have no pending orders</p>\r\n        <img src=\"../../assets/no-data.png\">\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pending-orders/pending-orders-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pending-orders/pending-orders-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PendingOrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingOrdersPageRoutingModule", function() { return PendingOrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pending_orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pending-orders.page */ "./src/app/pending-orders/pending-orders.page.ts");




var routes = [
    {
        path: '',
        component: _pending_orders_page__WEBPACK_IMPORTED_MODULE_3__["PendingOrdersPage"]
    }
];
var PendingOrdersPageRoutingModule = /** @class */ (function () {
    function PendingOrdersPageRoutingModule() {
    }
    PendingOrdersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PendingOrdersPageRoutingModule);
    return PendingOrdersPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pending-orders/pending-orders.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pending-orders/pending-orders.module.ts ***!
  \*********************************************************/
/*! exports provided: PendingOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingOrdersPageModule", function() { return PendingOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pending_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pending-orders-routing.module */ "./src/app/pending-orders/pending-orders-routing.module.ts");
/* harmony import */ var _pending_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pending-orders.page */ "./src/app/pending-orders/pending-orders.page.ts");







var PendingOrdersPageModule = /** @class */ (function () {
    function PendingOrdersPageModule() {
    }
    PendingOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pending_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["PendingOrdersPageRoutingModule"]
            ],
            declarations: [_pending_orders_page__WEBPACK_IMPORTED_MODULE_6__["PendingOrdersPage"]]
        })
    ], PendingOrdersPageModule);
    return PendingOrdersPageModule;
}());



/***/ }),

/***/ "./src/app/pending-orders/pending-orders.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pending-orders/pending-orders.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: white;\n  font-family: \"Poppins\"; }\n  ion-toolbar #icon {\n    color: maroon; }\n  .container {\n  display: flex;\n  flex-flow: column; }\n  .container .cards {\n    display: flex;\n    flex-flow: column;\n    height: auto;\n    align-items: center;\n    border-radius: 5px;\n    margin: 6px;\n    position: relative; }\n  .container .cards .card {\n      display: flex;\n      flex-flow: column;\n      position: relative;\n      top: 10px;\n      padding: 5px;\n      width: 95vw;\n      min-height: -webkit-fit-content;\n      min-height: -moz-fit-content;\n      min-height: fit-content;\n      margin: 10px;\n      box-shadow: 5px 5px 10px #bebebe;\n      border-radius: 5px; }\n  .container .cards .card .top {\n        display: flex;\n        flex-flow: row;\n        height: 60%;\n        width: 90vw;\n        margin: 5px; }\n  .container .cards .card .top .image {\n          width: 30vw;\n          height: 30vw;\n          margin: 5px;\n          border-radius: 5px; }\n  .container .cards .card .top .image img {\n            width: 100%;\n            height: 100%;\n            -o-object-fit: cover;\n               object-fit: cover;\n            border-radius: 5px; }\n  .container .cards .card .top .image .info {\n            width: 55vw;\n            padding: 10px;\n            margin: 15px;\n            display: grid;\n            align-items: center; }\n  .container .cards .card .top .image .info #name {\n              font-family: \"Poppins\"; }\n  .container .cards .card .top .image .info #name span {\n                font-weight: bold; }\n  .container .cards .card .top .image .info #costs {\n              font-size: 0.8em;\n              line-height: 0.2px; }\n  .container .cards .card .top .image .info p {\n              font-family: \"Poppins\"; }\n  .container .cards .card .top .image .info p span {\n                font-weight: bold; }\n  .container .cards .butt {\n      width: 100%;\n      height: 30%;\n      margin: 18px 0px 20px 0px; }\n  .container .cards .butt ion-button {\n        font-family: \"Poppins\";\n        letter-spacing: 1px;\n        color: white;\n        background: #00001a;\n        width: 80%;\n        position: absolute;\n        left: 10%;\n        bottom: 2px;\n        font-size: 0.8em; }\n  .container .cards #msg {\n      display: flex;\n      flex-flow: column;\n      position: absolute;\n      align-items: center;\n      justify-content: space-evenly;\n      top: 25vh;\n      width: 95vw;\n      margin: 10px;\n      font-family: \"Poppins\";\n      box-shadow: none !important; }\n  .container .cards #msg img {\n        width: 80vw;\n        height: 50vw; }\n  .container .cards #msg p {\n        color: #b2b2b2;\n        font-size: 5vw; }\n  .loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite; }\n  .loader .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n  .loader .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n  .loader .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n  .loader .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n  @-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n  @keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n  @-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n  @keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n  @-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n  @keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n  .loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto; }\n  .loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); }\n  .loader-hide .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n  .loader-hide .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n  @keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n  @keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n  @keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n  @-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n  @keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVuZGluZy1vcmRlcnMvQzpcXFVzZXJzXFx6YW5lbFxcRG9jdW1lbnRzXFxicm9rZW5TdG9vbC9zcmNcXGFwcFxccGVuZGluZy1vcmRlcnNcXHBlbmRpbmctb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFhO0VBQ2Isc0JBQXNCLEVBQUE7RUFGeEI7SUFJSSxhQUFhLEVBQUE7RUFJakI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7RUFGbkI7SUFLSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFFbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQVp0QjtNQWNNLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxZQUFZO01BQ1osV0FBVztNQUNYLCtCQUF1QjtNQUF2Qiw0QkFBdUI7TUFBdkIsdUJBQXVCO01BQ3ZCLFlBQVk7TUFDWixnQ0FBMkM7TUFDM0Msa0JBQWtCLEVBQUE7RUF2QnhCO1FBMEJRLGFBQWE7UUFDYixjQUFjO1FBQ2QsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXLEVBQUE7RUE5Qm5CO1VBZ0NVLFdBQVc7VUFDWCxZQUFZO1VBQ1osV0FBVztVQUNYLGtCQUFrQixFQUFBO0VBbkM1QjtZQXFDWSxXQUFXO1lBQ1gsWUFBWTtZQUNaLG9CQUFpQjtlQUFqQixpQkFBaUI7WUFDakIsa0JBQWtCLEVBQUE7RUF4QzlCO1lBNENZLFdBQVc7WUFDWCxhQUFhO1lBQ2IsWUFBWTtZQUNaLGFBQWE7WUFDYixtQkFBbUIsRUFBQTtFQWhEL0I7Y0FtRGMsc0JBQXNCLEVBQUE7RUFuRHBDO2dCQXFEZ0IsaUJBQWlCLEVBQUE7RUFyRGpDO2NBMERjLGdCQUFnQjtjQUNoQixrQkFBa0IsRUFBQTtFQTNEaEM7Y0E4RGMsc0JBQXNCLEVBQUE7RUE5RHBDO2dCQWdFZ0IsaUJBQWlCLEVBQUE7RUFoRWpDO01B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O0VBdEM1QztJQXlDTSxVQUFVO0lBQ1YsOENBQXNDO1lBQXRDLHNDQUFzQyxFQUFBO0VBRXhDO0VBQ0U7SUFDRSxtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLG1CQUFtQixFQUFBLEVBQUE7RUFHdkI7RUFDRTtJQUNFLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsbUJBQW1CLEVBQUEsRUFBQTtFQUd2QjtFQUNFO0lBQ0UsMEJBQTBCLEVBQUE7RUFFNUI7SUFDRSw2QkFBNkIsRUFBQSxFQUFBO0VBS3JDO0VBQ0U7SUFFRSxxQkFBOEIsRUFBQTtFQUdoQztJQUdFLHFCQUE2QixFQUFBO0VBRS9CO0lBQ0UscUJBQStCLEVBQUEsRUFBQTtFQVpuQztFQUNFO0lBRUUscUJBQThCLEVBQUE7RUFHaEM7SUFHRSxxQkFBNkIsRUFBQTtFQUUvQjtJQUNFLHFCQUErQixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wZW5kaW5nLW9yZGVycy9wZW5kaW5nLW9yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgI2ljb24ge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gIC5jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmNhcmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgd2lkdGg6IDk1dnc7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgIC50b3Age1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHZ3O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDMwdnc7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NXZ3O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAjbmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjY29zdHMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICBtYXJnaW46IDE4cHggMHB4IDIwcHggMHB4O1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDI2KTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNtc2cge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgdG9wOiAyNXZoO1xyXG4gICAgICB3aWR0aDogOTV2dztcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICBoZWlnaHQ6IDUwdnc7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICNiMmIyYjI7XHJcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDpyZ2IoMCwgMjcsIDYzKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZG1vdmVyIDMwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLm1hcGxvYWRlciB7XHJcbiAgICAubGRzLWVsbGlwc2lzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzM3B4O1xyXG4gICAgICB3aWR0aDogMTNweDtcclxuICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbGVmdDogMzJweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgICBsZWZ0OiA1NnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGluZy10ZXh0IHtcclxuICAvLyBjb2xvcjogeWVsbG93O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwdmg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZDogcmVkO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICAvL3otaW5kZXg6IDkwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ubG9hZGVyLWhpZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICAubWFwbG9hZGVyIHtcclxuICAgIC5sZHMtZWxsaXBzaXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbWFwbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4MiwgNzAsIDk1KTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE5MiwgMTkyKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMDYsIDIwNiwgMjU1KTtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MiwgNTAsIDc1KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTAsIDE4MiwgNDMpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTY3LCAxNjcpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pending-orders/pending-orders.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pending-orders/pending-orders.page.ts ***!
  \*******************************************************/
/*! exports provided: PendingOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingOrdersPage", function() { return PendingOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var PendingOrdersPage = /** @class */ (function () {
    function PendingOrdersPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.dbOrder = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Order');
        this.dbUserProfile = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('userProfile');
        this.uid = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.myOrder = [];
        this.loaderMessages = 'Loading...';
        this.loaderAnimate = true;
        this.storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        this.pdfObj = null;
        this.reciept = null;
    }
    PendingOrdersPage.prototype.ngOnInit = function () {
        this.getAllOrders();
    };
    PendingOrdersPage.prototype.orderTrack = function (id, data) {
        var navigationExtras = {
            queryParams: {
                id: id,
                data: data,
                reciept: this.reciept
                //currency: JSON.stringify(currency),
                // refresh: refresh
            }
        };
        this.navCtrl.navigateForward(['track-orders', id], navigationExtras);
        // console.log('My order id ',id, 'data ', data )
    };
    PendingOrdersPage.prototype.getAllOrders = function () {
        var _this = this;
        this.dbOrder.where('userID', '==', this.uid).onSnapshot(function (res) {
            _this.myOrder = [];
            setTimeout(function () {
                _this.loaderAnimate = false;
            }, 2000);
            res.forEach(function (doc) {
                _this.myOrder.push({ info: doc.data(), id: doc.id });
            });
        });
    };
    /*   removeOrder() {
       this.myOrder.forEach((i) => {
         // this.getOrder(i.id);
         this.dbHistory.doc(i.id).set({ date: new Date().getTime(), reciept: this.reciept }).then(() => {
           this.dbOrder.doc(i.id).delete();
         })
       })
     }  */
    PendingOrdersPage.prototype.getOrder = function (id) {
    };
    PendingOrdersPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PendingOrdersPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    PendingOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pending-orders',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pending-orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pending-orders/pending-orders.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pending-orders.page.scss */ "./src/app/pending-orders/pending-orders.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], PendingOrdersPage);
    return PendingOrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=21.js.map