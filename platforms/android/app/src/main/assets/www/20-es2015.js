(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pending_orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pending-orders.page */ "./src/app/pending-orders/pending-orders.page.ts");




const routes = [
    {
        path: '',
        component: _pending_orders_page__WEBPACK_IMPORTED_MODULE_3__["PendingOrdersPage"]
    }
];
let PendingOrdersPageRoutingModule = class PendingOrdersPageRoutingModule {
};
PendingOrdersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PendingOrdersPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pending_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pending-orders-routing.module */ "./src/app/pending-orders/pending-orders-routing.module.ts");
/* harmony import */ var _pending_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pending-orders.page */ "./src/app/pending-orders/pending-orders.page.ts");







let PendingOrdersPageModule = class PendingOrdersPageModule {
};
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



/***/ }),

/***/ "./src/app/pending-orders/pending-orders.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pending-orders/pending-orders.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: white;\n  font-family: \"Poppins\";\n}\nion-toolbar #icon {\n  color: maroon;\n}\n.container {\n  display: flex;\n  flex-flow: column;\n}\n.container .cards {\n  display: flex;\n  flex-flow: column;\n  height: auto;\n  align-items: center;\n  border-radius: 5px;\n  margin: 6px;\n  position: relative;\n}\n.container .cards .card {\n  display: flex;\n  flex-flow: column;\n  position: relative;\n  top: 10px;\n  padding: 5px;\n  width: 95vw;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  margin: 10px;\n  box-shadow: 5px 5px 10px #bebebe;\n  border-radius: 5px;\n}\n.container .cards .card .top {\n  display: flex;\n  flex-flow: row;\n  height: 60%;\n  width: 90vw;\n  margin: 5px;\n}\n.container .cards .card .top .image {\n  width: 30vw;\n  height: 30vw;\n  margin: 5px;\n  border-radius: 5px;\n}\n.container .cards .card .top .image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\n.container .cards .card .top .image .info {\n  width: 55vw;\n  padding: 10px;\n  margin: 15px;\n  display: grid;\n  align-items: center;\n}\n.container .cards .card .top .image .info #name {\n  font-family: \"Poppins\";\n}\n.container .cards .card .top .image .info #name span {\n  font-weight: bold;\n}\n.container .cards .card .top .image .info #costs {\n  font-size: 0.8em;\n  line-height: 0.2px;\n}\n.container .cards .card .top .image .info p {\n  font-family: \"Poppins\";\n}\n.container .cards .card .top .image .info p span {\n  font-weight: bold;\n}\n.container .cards .butt {\n  width: 100%;\n  height: 30%;\n  margin: 18px 0px 20px 0px;\n}\n.container .cards .butt ion-button {\n  font-family: \"Poppins\";\n  letter-spacing: 1px;\n  color: white;\n  background: #00001a;\n  width: 80%;\n  position: absolute;\n  left: 10%;\n  bottom: 2px;\n  font-size: 0.8em;\n}\n.container .cards #msg {\n  display: flex;\n  flex-flow: column;\n  position: absolute;\n  align-items: center;\n  justify-content: space-evenly;\n  top: 25vh;\n  width: 95vw;\n  margin: 10px;\n  font-family: \"Poppins\";\n  box-shadow: none !important;\n}\n.container .cards #msg img {\n  width: 80vw;\n  height: 50vw;\n}\n.container .cards #msg p {\n  color: #b2b2b2;\n  font-size: 5vw;\n}\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite;\n}\n.loader .maploader .lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.loader .maploader .lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.loader .maploader .lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n.loader .maploader .lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader .maploader .lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader .maploader .lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n.loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto;\n}\n.loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.loader-hide .maploader .lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.loader-hide .maploader .lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n@-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f;\n  }\n  50% {\n    border-color: #2a324b;\n  }\n  100% {\n    border-color: #fab62b;\n  }\n}\n@keyframes maploader {\n  0% {\n    border-color: #b6465f;\n  }\n  50% {\n    border-color: #2a324b;\n  }\n  100% {\n    border-color: #fab62b;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVuZGluZy1vcmRlcnMvQzpcXFVzZXJzXFx6YW5lbFxcRG9jdW1lbnRzXFxicm9rZW5TdG9vbC9zcmNcXGFwcFxccGVuZGluZy1vcmRlcnNcXHBlbmRpbmctb3JkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGVuZGluZy1vcmRlcnMvcGVuZGluZy1vcmRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUo7QURFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDQ047QURDTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ1I7QURBUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRVY7QUREVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FDR1o7QUREVTtFQUVFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VaO0FEQVk7RUFDRSxzQkFBQTtBQ0VkO0FERGM7RUFDRSxpQkFBQTtBQ0doQjtBRENZO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NkO0FEQ1k7RUFDRSxzQkFBQTtBQ0NkO0FEQWM7RUFDRSxpQkFBQTtBQ0VoQjtBRE1JO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFD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RjtBRGFBO0VBQ0U7SUFFRSxxQkFBQTtFQ1hGO0VEY0E7SUFHRSxxQkFBQTtFQ2RGO0VEZ0JBO0lBQ0UscUJBQUE7RUNkRjtBQUNGO0FEQ0E7RUFDRTtJQUVFLHFCQUFBO0VDWEY7RURjQTtJQUdFLHFCQUFBO0VDZEY7RURnQkE7SUFDRSxxQkFBQTtFQ2RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wZW5kaW5nLW9yZGVycy9wZW5kaW5nLW9yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgI2ljb24ge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gIC5jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmNhcmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgd2lkdGg6IDk1dnc7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgIC50b3Age1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHZ3O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDMwdnc7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NXZ3O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAjbmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjY29zdHMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICBtYXJnaW46IDE4cHggMHB4IDIwcHggMHB4O1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDI2KTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNtc2cge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgdG9wOiAyNXZoO1xyXG4gICAgICB3aWR0aDogOTV2dztcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICBoZWlnaHQ6IDUwdnc7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICNiMmIyYjI7XHJcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDpyZ2IoMCwgMjcsIDYzKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZG1vdmVyIDMwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLm1hcGxvYWRlciB7XHJcbiAgICAubGRzLWVsbGlwc2lzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzM3B4O1xyXG4gICAgICB3aWR0aDogMTNweDtcclxuICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbGVmdDogMzJweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgICBsZWZ0OiA1NnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGluZy10ZXh0IHtcclxuICAvLyBjb2xvcjogeWVsbG93O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwdmg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZDogcmVkO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICAvL3otaW5kZXg6IDkwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ubG9hZGVyLWhpZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICAubWFwbG9hZGVyIHtcclxuICAgIC5sZHMtZWxsaXBzaXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbWFwbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4MiwgNzAsIDk1KTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE5MiwgMTkyKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMDYsIDIwNiwgMjU1KTtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MiwgNTAsIDc1KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTAsIDE4MiwgNDMpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTY3LCAxNjcpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG5pb24tdG9vbGJhciAjaWNvbiB7XG4gIGNvbG9yOiBtYXJvb247XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cbi5jb250YWluZXIgLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lciAuY2FyZHMgLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDk1dnc7XG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjYmViZWJlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udGFpbmVyIC5jYXJkcyAuY2FyZCAudG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGhlaWdodDogNjAlO1xuICB3aWR0aDogOTB2dztcbiAgbWFyZ2luOiA1cHg7XG59XG4uY29udGFpbmVyIC5jYXJkcyAuY2FyZCAudG9wIC5pbWFnZSB7XG4gIHdpZHRoOiAzMHZ3O1xuICBoZWlnaHQ6IDMwdnc7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udGFpbmVyIC5jYXJkcyAuY2FyZCAudG9wIC5pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRhaW5lciAuY2FyZHMgLmNhcmQgLnRvcCAuaW1hZ2UgLmluZm8ge1xuICB3aWR0aDogNTV2dztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuY2FyZHMgLmNhcmQgLnRvcCAuaW1hZ2UgLmluZm8gI25hbWUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG4uY29udGFpbmVyIC5jYXJkcyAuY2FyZCAudG9wIC5pbWFnZSAuaW5mbyAjbmFtZSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5jYXJkcyAuY2FyZCAudG9wIC5pbWFnZSAuaW5mbyAjY29zdHMge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBsaW5lLWhlaWdodDogMC4ycHg7XG59XG4uY29udGFpbmVyIC5jYXJkcyAuY2FyZCAudG9wIC5pbWFnZSAuaW5mbyBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xufVxuLmNvbnRhaW5lciAuY2FyZHMgLmNhcmQgLnRvcCAuaW1hZ2UgLmluZm8gcCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5jYXJkcyAuYnV0dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgbWFyZ2luOiAxOHB4IDBweCAyMHB4IDBweDtcbn1cbi5jb250YWluZXIgLmNhcmRzIC5idXR0IGlvbi1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwMDAxYTtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMCU7XG4gIGJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuLmNvbnRhaW5lciAuY2FyZHMgI21zZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB0b3A6IDI1dmg7XG4gIHdpZHRoOiA5NXZ3O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuY2FyZHMgI21zZyBpbWcge1xuICB3aWR0aDogODB2dztcbiAgaGVpZ2h0OiA1MHZ3O1xufVxuLmNvbnRhaW5lciAuY2FyZHMgI21zZyBwIHtcbiAgY29sb3I6ICNiMmIyYjI7XG4gIGZvbnQtc2l6ZTogNXZ3O1xufVxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDFiM2Y7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xuICBhbmltYXRpb246IGJhY2tncm91bmRtb3ZlciAzMHMgbGluZWFyIGluZmluaXRlO1xufVxuLmxvYWRlciAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5sb2FkZXIgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzM3B4O1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcbn1cbi5sb2FkZXIgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xufVxuLmxvYWRlciAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDhweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG59XG4ubG9hZGVyIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogMzJweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG59XG4ubG9hZGVyIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNTZweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XG4gIH1cbn1cblxuLmxvYWRpbmctdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHZoO1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDUwdmg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvYWRlci1oaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDIwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzNweDtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XG59XG4ubG9hZGVyLWhpZGUgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogOHB4O1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbn1cbi5sb2FkZXItaGlkZSAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDMycHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNTZweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtYXBsb2FkZXIge1xuICAwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYjY0NjVmO1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmEzMjRiO1xuICB9XG4gIDEwMCUge1xuICAgIGJvcmRlci1jb2xvcjogI2ZhYjYyYjtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let PendingOrdersPage = class PendingOrdersPage {
    constructor(navCtrl) {
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
    ngOnInit() {
        this.getAllOrders();
    }
    orderTrack(id, data) {
        let navigationExtras = {
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
    }
    getAllOrders() {
        this.dbOrder.where('userID', '==', this.uid).onSnapshot((res) => {
            this.myOrder = [];
            setTimeout(() => {
                this.loaderAnimate = false;
            }, 2000);
            res.forEach((doc) => {
                this.myOrder.push({ info: doc.data(), id: doc.id });
            });
        });
    }
    /*   removeOrder() {
       this.myOrder.forEach((i) => {
         // this.getOrder(i.id);
         this.dbHistory.doc(i.id).set({ date: new Date().getTime(), reciept: this.reciept }).then(() => {
           this.dbOrder.doc(i.id).delete();
         })
       })
     }  */
    getOrder(id) {
    }
    goBack() {
        this.navCtrl.pop();
    }
};
PendingOrdersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
PendingOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pending-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pending-orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pending-orders/pending-orders.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pending-orders.page.scss */ "./src/app/pending-orders/pending-orders.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], PendingOrdersPage);



/***/ })

}]);
//# sourceMappingURL=20-es2015.js.map