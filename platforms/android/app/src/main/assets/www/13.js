(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/basket/basket.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basket/basket.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\" goback()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" id=\"icon\"></ion-icon>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"secondary\" (click)=\"wishlist()\">\r\n        <ion-icon slot=\"icon-only\" name=\"heart\" id=\"icon\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n    <div [ngClass]=\"{'loader': loaderAnimate, 'loader-hide': !loaderAnimate}\">\r\n        <div class=\"maploader\">\r\n            <div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div><p style=\"color:white; text-align: center;\">{{loaderMessages}}</p>\r\n        </div>\r\n       <!--  <div class=\"loading-text\">\r\n          <p>Loading Map</p>\r\n        </div> -->\r\n      </div>\r\n  <div class=\"container\">\r\n    <div class=\"pagename\" style=\"margin: 10px; font-family: 'Raleway';\">\r\n      <h1>BASKET ({{cartCount}})</h1>\r\n    </div>\r\n\r\n    <p style=\"font-family: 'Raleway'; margin: 5px; font-size: 3.5vw\">Please note that delivery to your door is R100</p>\r\n\r\n    <div class=\"cards\">\r\n      <div class=\"card\" *ngFor=\"let cp of prodCart; let i of index\">\r\n        <div class=\"image\" *ngFor=\"let prod of cp.data.product\">\r\n          <img src=\"{{prod.picture}}\">\r\n        </div>\r\n        <div class=\"details\" *ngFor=\"let prod of cp.data.product\">\r\n          <div class=\"left\">\r\n            <p id=\"item\" style=\"font-size:3vw\">{{prod.product_name}}</p>\r\n            <p>Size: {{prod.size}} &nbsp; Color: {{prod.color}}</p>\r\n            <p>{{cp.data.timestamp | date: \"mediumDate\"}}</p>\r\n            <p style=\"font-size: 1em; margin: 5px; display: flex; flex-flow: row; align-items: baseline;\">\r\n              <ion-icon name=\"remove-circle-outline\" (click)=\"minus(prod, i)\"></ion-icon>&nbsp; {{prod.quantity}} &nbsp;\r\n              <ion-icon name=\"add-circle-outline\" (click)=\"plus(prod, i)\">\r\n              </ion-icon>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"right\">\r\n            <p>{{prod.cost*prod.quantity | currency:'R'}}</p>\r\n            <P (click)=\"removeProd(cp.id)\">\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n            </P>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"card\" id=\"msg\" *ngIf=\"prodCart.length==0\">\r\n        <p> Oh no! Your Basket is empty</p>\r\n        <img src=\"../../assets/empty-cart.svg\">\r\n\r\n      </div>\r\n\r\n      <!--  <div class=\"card\">\r\n        <div class=\"image\">\r\n          <img src=\"https://i.pinimg.com/564x/a3/a1/8b/a3a18b4c3a78b3187d70b456cc09ad7e.jpg\">\r\n        </div>\r\n        <div class=\"details\">\r\n          <div class=\"left\">\r\n            <p id=\"item\">Dankie Jesu Sweater</p>\r\n            <p>Size: XS</p>\r\n            <p>12 November 2019</p>\r\n            <p style=\"font-size: 4vw; margin: 5px; display: flex; flex-flow: row; align-items: flex-start;\">\r\n              <ion-icon name=\"remove-circle-outline\"></ion-icon>&nbsp; 2 &nbsp;<ion-icon name=\"add-circle-outline\">\r\n              </ion-icon>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"right\">\r\n            <p>R350</p>\r\n            <P>\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n            </P>\r\n          </div>\r\n\r\n        </div>\r\n      </div> -->\r\n\r\n    </div>\r\n\r\n    <div class=\"total\">\r\n      <div class=\"carttotal\">\r\n        <p>TOTAL</p>\r\n        <p>{{getTotal() | currency:'R'}}</p>\r\n      </div>\r\n\r\n      <div class=\"btn\">\r\n        <ion-button [disabled]=\"prodCart.length==0\" (click)=\"placeOrder(prodCart)\" color=\"transparent\">\r\n          PLACE ORDER\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"web_view\">\r\n    <div class=\"pagename\" style=\"margin: 10px; font-family: 'Raleway';\">\r\n      <h1>BASKET ({{cartCount}})</h1>\r\n    </div>\r\n\r\n    <p style=\"font-family: 'Raleway'; margin: 5px;\">Please note that delivery to your door is R100</p>\r\n\r\n    <div class=\"cards\">\r\n      <div class=\"card\" *ngFor=\"let cp of prodCart; let i of index\">\r\n        <div class=\"image\" *ngFor=\"let prod of cp.data.product\">\r\n          <img src=\"{{prod.picture}}\">\r\n        </div>\r\n        <div class=\"details\" *ngFor=\"let prod of cp.data.product\">\r\n          <div class=\"left\">\r\n            <p id=\"item\">{{prod.product_name}}</p>\r\n            <p>Size: {{prod.size}} &nbsp; Color: {{prod.color}}</p>\r\n            <p>{{cp.data.timestamp | date: \"mediumDate\"}}</p>\r\n            <p style=\" margin: 5px; display: flex; flex-flow: row; align-items: baseline;\">\r\n              <ion-icon name=\"remove-circle-outline\" (click)=\"minus(prod, i)\"></ion-icon>&nbsp; {{prod.quantity}} &nbsp;\r\n              <ion-icon name=\"add-circle-outline\" (click)=\"plus(prod, i)\">\r\n              </ion-icon>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"right\">\r\n            <p>{{prod.cost*prod.quantity | currency:'R'}}</p>\r\n            <P (click)=\"removeProd(cp.id)\">\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n            </P>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"card\" id=\"msg\" *ngIf=\"prodCart.length==0\">\r\n        <p> Oh no! Your Basket is empty</p>\r\n        <img src=\"../../assets/empty-cart.svg\">\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"total\">\r\n      <div class=\"carttotal\">\r\n        <p>TOTAL</p>\r\n        <p>{{getTotal() | currency:'R'}}</p>\r\n      </div>\r\n\r\n      <div class=\"btn\">\r\n        <ion-button [disabled]=\"prodCart.length==0\" (click)=\"placeOrder(prodCart)\" color=\"transparent\">\r\n          PLACE ORDER\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    \r\n\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/basket/basket-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/basket/basket-routing.module.ts ***!
  \*************************************************/
/*! exports provided: BasketPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPageRoutingModule", function() { return BasketPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basket_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basket.page */ "./src/app/basket/basket.page.ts");




var routes = [
    {
        path: '',
        component: _basket_page__WEBPACK_IMPORTED_MODULE_3__["BasketPage"]
    }
];
var BasketPageRoutingModule = /** @class */ (function () {
    function BasketPageRoutingModule() {
    }
    BasketPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BasketPageRoutingModule);
    return BasketPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/basket/basket.module.ts":
/*!*****************************************!*\
  !*** ./src/app/basket/basket.module.ts ***!
  \*****************************************/
/*! exports provided: BasketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPageModule", function() { return BasketPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _basket_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basket-routing.module */ "./src/app/basket/basket-routing.module.ts");
/* harmony import */ var _basket_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basket.page */ "./src/app/basket/basket.page.ts");







var BasketPageModule = /** @class */ (function () {
    function BasketPageModule() {
    }
    BasketPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _basket_routing_module__WEBPACK_IMPORTED_MODULE_5__["BasketPageRoutingModule"]
            ],
            declarations: [_basket_page__WEBPACK_IMPORTED_MODULE_6__["BasketPage"]]
        })
    ], BasketPageModule);
    return BasketPageModule;
}());



/***/ }),

/***/ "./src/app/basket/basket.page.scss":
/*!*****************************************!*\
  !*** ./src/app/basket/basket.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n  font-family: \"Raleway\"; }\n  ion-toolbar #icon {\n    color: maroon; }\n  .container {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  height: 100%; }\n  .container .cards {\n    display: flex;\n    flex-flow: column;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    overflow-y: auto;\n    height: 85vh;\n    overflow-y: auto; }\n  .container .cards .card {\n      display: flex;\n      flex-flow: row;\n      box-shadow: 5px 5px 10px lightgray;\n      margin: 5px;\n      min-height: 28vw; }\n  .container .cards .card .image {\n        width: 45vw;\n        min-height: 25vw;\n        max-height: 28vw;\n        margin: 10px; }\n  .container .cards .card .image img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover; }\n  .container .cards .card .details {\n        display: flex;\n        flex-flow: row;\n        width: 100%;\n        padding: 5px;\n        justify-content: space-between;\n        align-items: baseline; }\n  .container .cards .card .details .left {\n          margin: 10px; }\n  .container .cards .card .details .left p {\n            font-size: 3vw;\n            align-items: baseline;\n            padding: 0;\n            margin: 4px 0px; }\n  .container .cards .card .details .left p ion-icon {\n              font-size: 5vw; }\n  .container .cards .card .details .left #item {\n            font-weight: bold;\n            letter-spacing: 1px;\n            font-size: 4vw; }\n  .container .cards .card .details .right {\n          margin: 5px;\n          text-align: right;\n          display: flex;\n          flex-flow: column;\n          justify-content: space-between; }\n  .container .cards .card .details .right p {\n            font-size: 4vw; }\n  .container .cards .card .details .right p ion-icon {\n              font-weight: lighter;\n              font-size: 6vw;\n              color: maroon;\n              margin-top: 30px; }\n  .container .cards #msg {\n      display: flex;\n      flex-flow: column;\n      position: absolute;\n      align-items: center;\n      justify-content: space-evenly;\n      top: 30%;\n      width: 95vw;\n      margin: 10px;\n      font-family: \"Poppins\";\n      box-shadow: none !important; }\n  .container .cards #msg img {\n        width: 50vw;\n        height: 50vw; }\n  .container .cards #msg p {\n        color: #c6cbdb;\n        font-size: 5vw; }\n  .container .total {\n    position: fixed;\n    bottom: 0;\n    background: white;\n    display: flex;\n    flex-flow: column; }\n  .container .total .carttotal {\n      display: flex;\n      flex-flow: row;\n      width: 100vw;\n      padding: 5px;\n      justify-content: space-between; }\n  .container .total .carttotal p {\n        font-family: \"Raleway\";\n        font-size: 3.5vw; }\n  .container .total .btn ion-button {\n      color: white;\n      background: #00003b;\n      width: 99%;\n      padding: 5px;\n      font-family: \"Raleway\";\n      letter-spacing: 2px;\n      font-size: 3vw; }\n  .loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite; }\n  .loader .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n  .loader .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n  .loader .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n  .loader .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n  @-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n  @keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n  @-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n  @keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n  @-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n  @keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n  .loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto; }\n  .loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); }\n  .loader-hide .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n  .loader-hide .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n  @keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n  @keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n  @keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n  @-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n  @keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n  @media only screen and (max-width: 1024px) {\n  .web_view {\n    display: none;\n    width: 0%;\n    height: 0%; } }\n  @media only screen and (min-width: 1330px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  .web_view {\n    min-width: 800px;\n    max-width: 1000px;\n    margin: auto; }\n    .web_view .cards {\n      display: flex;\n      flex-flow: column;\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content;\n      overflow-y: auto;\n      height: 70vh;\n      overflow-y: auto; }\n      .web_view .cards .card {\n        display: flex;\n        flex-flow: row;\n        box-shadow: 5px 5px 10px lightgray;\n        margin: 5px;\n        min-height: 20vh; }\n        .web_view .cards .card .image {\n          width: 15vw;\n          min-height: 15vh;\n          max-height: 19vh;\n          margin: 10px; }\n          .web_view .cards .card .image img {\n            width: 100%;\n            height: 100%;\n            -o-object-fit: cover;\n               object-fit: cover; }\n        .web_view .cards .card .details {\n          display: flex;\n          flex-flow: row;\n          width: 100%;\n          padding: 5px;\n          justify-content: space-between;\n          align-items: baseline; }\n          .web_view .cards .card .details .left {\n            margin: 10px; }\n            .web_view .cards .card .details .left p {\n              display: grid;\n              align-items: center;\n              padding: 0;\n              margin: 4px 0px; }\n              .web_view .cards .card .details .left p ion-icon {\n                font-size: 30px; }\n            .web_view .cards .card .details .left #item {\n              font-weight: bold;\n              letter-spacing: 1px; }\n          .web_view .cards .card .details .right {\n            margin: 5px;\n            text-align: right;\n            display: flex;\n            flex-flow: column;\n            justify-content: space-between; }\n            .web_view .cards .card .details .right p ion-icon {\n              font-weight: lighter;\n              font-size: 40px;\n              color: maroon;\n              margin-top: 30px; }\n      .web_view .cards #msg {\n        display: flex;\n        flex-flow: column;\n        align-items: center;\n        justify-content: space-evenly;\n        margin: 10px;\n        font-family: \"Poppins\";\n        box-shadow: none !important; }\n        .web_view .cards #msg img {\n          width: 30vw;\n          height: 30vw; }\n        .web_view .cards #msg p {\n          color: #c6cbdb; }\n    .web_view .total {\n      position: fixed;\n      bottom: 0;\n      background: white;\n      display: flex;\n      flex-flow: column; }\n      .web_view .total .carttotal {\n        display: flex;\n        flex-flow: row;\n        width: 60vw;\n        padding: 5px;\n        justify-content: space-between; }\n        .web_view .total .carttotal p {\n          font-family: \"Raleway\"; }\n      .web_view .total .btn ion-button {\n        color: white;\n        background: #00003b;\n        padding: 5px;\n        font-family: \"Raleway\";\n        letter-spacing: 2px;\n        width: 60vw; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0L0M6XFxVc2Vyc1xcTk1sYW5nZW5pXFxEb2N1bWVudHNcXEdpdEh1YlxcYnJva2VuU3Rvb2wvc3JjXFxhcHBcXGJhc2tldFxcYmFza2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFhO0VBSWIsc0JBQXNCLEVBQUE7RUFMeEI7SUFHSSxhQUFhLEVBQUE7RUFLakI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFKZDtJQU9JLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTtFQVpwQjtNQWNNLGFBQWE7TUFDYixjQUFjO01BQ2Qsa0NBQTJDO01BQzNDLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtFQWxCdEI7UUFvQlEsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsWUFBWSxFQUFBO0VBdkJwQjtVQXlCVSxXQUFXO1VBQ1gsWUFBWTtVQUNaLG9CQUFpQjthQUFqQixpQkFBaUIsRUFBQTtFQTNCM0I7UUFnQ1EsYUFBYTtRQUNiLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLDhCQUE4QjtRQUM5QixxQkFBcUIsRUFBQTtFQXJDN0I7VUF3Q1UsWUFBWSxFQUFBO0VBeEN0QjtZQTJDWSxjQUFjO1lBQ2QscUJBQXFCO1lBQ3JCLFVBQVU7WUFDVixlQUFlLEVBQUE7RUE5QzNCO2NBZ0RjLGNBQWMsRUFBQTtFQWhENUI7WUFxRFksaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixjQUFjLEVBQUE7RUF2RDFCO1VBNERVLFdBQVc7VUFDWCxpQkFBaUI7VUFDakIsYUFBYTtVQUNiLGlCQUFpQjtVQUNqQiw4QkFBOEIsRUFBQTtFQWhFeEM7WUFrRVksY0FBYyxFQUFBO0VBbEUxQjtjQXFFYyxvQkFBb0I7Y0FDcEIs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QnRCO1lBMEJZLFdBQVc7WUFDWCxZQUFZO1lBQ1osb0JBQWlCO2VBQWpCLGlCQUFpQixFQUFBO1FBNUI3QjtVQWlDVSxhQUFhO1VBQ2IsY0FBYztVQUNkLFdBQVc7VUFDWCxZQUFZO1VBQ1osOEJBQThCO1VBQzlCLHFCQUFxQixFQUFBO1VBdEMvQjtZQXlDWSxZQUFZLEVBQUE7WUF6Q3hCO2NBNkNjLGFBQWE7Y0FDYixtQkFBbUI7Y0FFbkIsVUFBVTtjQUNWLGVBQWUsRUFBQTtjQWpEN0I7Z0JBbURjLGVBQWUsRUFBQTtZQW5EN0I7Y0F3RGMsaUJBQWlCO2NBQ2pCLG1CQUFtQixFQUFBO1VBekRqQztZQStEWSxXQUFXO1lBQ1gsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsOEJBQThCLEVBQUE7WUFuRTFDO2NBd0VnQixvQkFBb0I7Y0FDckIsZUFBZTtjQUNkLGFBQWE7Y0FDYixnQkFBZ0IsRUFBQTtNQTNFaEM7UUFtRlEsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsNkJBQTZCO1FBQzdCLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsMkJBQTJCLEVBQUE7UUF6Rm5DO1VBMkZVLFdBQVc7VUFDWCxZQUFZLEVBQUE7UUE1RnRCO1VBK0ZVLGNBQWMsRUFBQTtJQS9GeEI7TUFzR00sZUFBZTtNQUNmLFNBQVM7TUFDVCxpQkFBaUI7TUFDakIsYUFBYTtNQUNiLGlCQUFpQixFQUFBO01BMUd2QjtRQTZHUSxhQUFhO1FBQ2IsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osOEJBQThCLEVBQUE7UUFqSHRDO1VBbUhVLHNCQUFzQixFQUFBO01BbkhoQztRQTBIVSxZQUFZO1FBQ1osbUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ3JCLFdBQVcsRUFBQSxFQUNWIiwiZmlsZSI6InNyYy9hcHAvYmFza2V0L2Jhc2tldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAjaWNvbiB7XHJcbiAgICBjb2xvcjogbWFyb29uO1xyXG4gIH1cclxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLmNhcmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigyMTEsIDIxMSwgMjExKTtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDI4dnc7XHJcbiAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjV2dztcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyOHZ3O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNHB4IDBweDtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2l0ZW0ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDR2dztcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDZ2dztcclxuICAgICAgICAgICAgICBjb2xvcjogbWFyb29uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjbXNnIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIHRvcDogMzAlO1xyXG4gICAgICB3aWR0aDogOTV2dztcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNTB2dztcclxuICAgICAgICBoZWlnaHQ6IDUwdnc7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICNjNmNiZGI7XHJcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b3RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHJcbiAgICAuY2FydHRvdGFsIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgICAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgNTkpO1xyXG4gICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5sb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCAyNywgNjMpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcbiAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kbW92ZXIgMzBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAubWFwbG9hZGVyIHtcclxuICAgIC5sZHMtZWxsaXBzaXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5sb2FkaW5nLXRleHQge1xyXG4gIC8vIGNvbG9yOiB5ZWxsb3c7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNTB2aDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIC8vei1pbmRleDogOTA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5sb2FkZXItaGlkZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAyMDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIC5tYXBsb2FkZXIge1xyXG4gICAgLmxkcy1lbGxpcHNpcyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXYge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMzNweDtcclxuICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGxlZnQ6IDMycHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgbGVmdDogNTZweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBtYXBsb2FkZXIge1xyXG4gIDAlIHtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTgyLCA3MCwgOTUpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTkyLCAxOTIpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDIwNiwgMjA2LCAyNTUpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQyLCA1MCwgNzUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1MCwgMTgyLCA0Myk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxNjcsIDE2Nyk7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAud2ViX3ZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMzBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC53ZWJfdmlldyB7XHJcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgXHJcbiAgICAgIC5jYXJkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigyMTEsIDIxMSwgMjExKTtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMjB2aDtcclxuICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOjE1dnc7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1dmg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE5dmg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBcclxuICAgICAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4IDBweDtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAjaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogbWFyb29uO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICNtc2cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzB2dztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogI2M2Y2JkYjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLnRvdGFsIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBcclxuICAgICAgICAuY2FydHRvdGFsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgNTkpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/basket/basket.page.ts":
/*!***************************************!*\
  !*** ./src/app/basket/basket.page.ts ***!
  \***************************************/
/*! exports provided: BasketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPage", function() { return BasketPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

var BasketPage = /** @class */ (function () {
    function BasketPage(NavCtrl, alertCtrl, router, toastCtrl) {
        this.NavCtrl = NavCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.dbProduct = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Products');
        this.dbCart = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Cart');
        this.dbOrder = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Order');
        this.customerUID = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.cartDoc = '';
        this.cartCount = 0;
        this.prodCart = [];
        this.totalCost = 0;
        this.prodCount = 0;
        this.doc_id = '';
        this.loaderMessages = 'Loading...';
        this.loaderAnimate = true;
    }
    BasketPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dbCart.where('customerUID', '==', this.customerUID).onSnapshot(function (info) {
            _this.cartCount = info.size;
            _this.prodCart = [];
            _this.totalCost = 0;
            setTimeout(function () {
                _this.loaderAnimate = false;
            }, 2000);
            info.forEach(function (doc) {
                _this.prodCart.push({ data: doc.data(), id: doc.id });
            });
        });
        setTimeout(function () {
            _this.getTotal();
        }, 1000);
    };
    BasketPage.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this.prodCart.length; i++) {
            var product = this.prodCart[i].data.product;
            // console.log(product);
            product.forEach(function (item) {
                total += (item.cost * item.quantity);
            });
            //
        }
        //console.log('My tot ', total);
        return total;
    };
    BasketPage.prototype.wishlist = function () {
        this.router.navigateByUrl('wishlist');
    };
    BasketPage.prototype.addProduct = function (doc) {
        console.log('My doc is ', doc);
    };
    BasketPage.prototype.removeProd = function (id) {
        //console.log('Doc id ', id);
        this.dbCart.doc(id).delete().then(function (res) {
        });
    };
    BasketPage.prototype.placeOrder = function (info) {
        var _this = this;
        var myArr = [];
        var doc = [];
        for (var i = 0; i < info.length; i++) {
            // const element = info[i].data;
            /* myArr = info[i].data.product */
            doc.push(info[i].id);
            //console.log('my info ', );
            info[i].data.product.forEach(function (item) {
                myArr.push(item);
            });
        }
        if (this.prodCart.length === 0) {
            this.toastController('You cannot place order with empty basket');
        }
        else {
            var docname_1 = 'ZXY' + Math.floor(Math.random() * 10000000);
            this.dbOrder.doc(docname_1).set({ product: myArr, timestamp: new Date().getTime(), status: 'received', userID: firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid, totalPrice: this.getTotal() }).then(function () {
                doc.forEach(function (id) {
                    _this.dbCart.doc(id).delete();
                });
                _this.router.navigate(['payment', docname_1]);
            });
        }
    };
    BasketPage.prototype.toastController = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: message, duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        return [2 /*return*/, toast.present()];
                }
            });
        });
    };
    BasketPage.prototype.presentAlertConfirm = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm!',
                            message: 'Do you want to remove this product?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        //console.log('Id is ', id);
                                        _this.removeProd(id);
                                    }
                                }
                            ]
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
    BasketPage.prototype.plus = function (prod, index) {
        var num = index.data.product[0].quantity++;
        index.data.product[0].cost = index.data.product[0].cost;
        var id = index.id;
        //console.log('Prod ', prod);
        var product = [prod];
        // product.push[prod]
        //calculate new cost
        // 
        //
        //
        //
        // this.dbCart.doc(id).onSnapshot((res)=>{
        this.dbCart.doc(id).update({ product: product }).then(function (res) {
            // console.log('updated');
        });
        // })
        //
        //console.log('Quan incre ', quan);
    };
    BasketPage.prototype.minus = function (prod, index) {
        // product.push[prod]
        // this.dbCart.doc(id).onSnapshot((res)=>{
        if (index.data.product[0].quantity === 1) {
            // console.log('You are about to delete your product');
            this.presentAlertConfirm(index.id);
        }
        else {
            var num = index.data.product[0].quantity--;
            index.data.product[0].cost = index.data.product[0].cost;
            var id = index.id;
            // console.log('Prod ', prod, ' index', index );
            var product = [prod];
            this.dbCart.doc(id).update({ product: product }).then(function (res) {
                //   console.log('updated');
            });
        }
        // this.prodCount = quantity+1
        // this.dbCart.doc(id).update({product:{quantity: this.prodCount}})
        //console.log('Quan decr ', quan);
    };
    BasketPage.prototype.goback = function () {
        this.NavCtrl.pop();
    };
    BasketPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    BasketPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basket',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basket.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/basket/basket.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basket.page.scss */ "./src/app/basket/basket.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], BasketPage);
    return BasketPage;
}());



/***/ })

}]);
//# sourceMappingURL=13.js.map