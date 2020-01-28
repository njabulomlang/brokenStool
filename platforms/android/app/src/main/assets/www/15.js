(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/basket/basket.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basket/basket.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border id=\"nav\">\r\n\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <div class=\"icon1\">\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/Terms%20and%20Privacy%20Policy\" >\r\n          Terms and Privacy Policy\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/Disclaimer\">\r\n          Disclaimer\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/FAQs\">\r\n          FAQs\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/Payment%20Process\">\r\n          Payment Process\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/About%20Company\">\r\n          About Us\r\n        </ion-button>\r\n\r\n\r\n      </div>\r\n\r\n   \r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-family: 'Poiret One'; font-size: 20px; letter-spacing: 2px;\">DankieJesu</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-header no-border id=\"mobile\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\" goback()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" id=\"icon\"></ion-icon>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"secondary\" (click)=\"wishlist()\">\r\n        <ion-icon slot=\"icon-only\" name=\"heart\" id=\"icon\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div [ngClass]=\"{'loader': loaderAnimate, 'loader-hide': !loaderAnimate}\">\r\n    <div class=\"maploader\">\r\n      <div class=\"lds-ellipsis\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n      </div>\r\n      <p style=\"color:white; text-align: center;\">{{loaderMessages}}</p>\r\n    </div>\r\n    <!--  <div class=\"loading-text\">\r\n          <p>Loading Map</p>\r\n        </div> -->\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"pagename\" style=\"margin: 10px; font-family: 'Raleway';\">\r\n      <h1>BASKET ({{cartCount}})</h1>\r\n    </div>\r\n\r\n    <p style=\"font-family: 'Raleway'; margin: 5px; font-size: 3.5vw\">Please note that delivery to your door is R100</p>\r\n\r\n    <div class=\"cards\">\r\n      <div class=\"card\" *ngFor=\"let cp of prodCart; let i of index\">\r\n        <div class=\"image\" *ngFor=\"let prod of cp.data.product\">\r\n          <img src=\"{{prod.picture}}\">\r\n        </div>\r\n        <div class=\"details\" *ngFor=\"let prod of cp.data.product\">\r\n          <div class=\"left\">\r\n            <p id=\"item\" style=\"font-size:3vw\">{{prod.product_name}}</p>\r\n            <p>Size: {{prod.size}} &nbsp; Color: {{prod.color}}</p>\r\n            <p>{{cp.data.timestamp | date: \"mediumDate\"}}</p>\r\n            <p style=\"font-size: 1em; margin: 5px; display: flex; flex-flow: row; align-items: baseline;\">\r\n              <ion-icon name=\"remove-circle-outline\" (click)=\"minus(prod, i)\"></ion-icon>&nbsp; {{prod.quantity}} &nbsp;\r\n              <ion-icon name=\"add-circle-outline\" (click)=\"plus(prod, i)\">\r\n              </ion-icon>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"right\">\r\n            <p>{{prod.cost*prod.quantity | currency:'R'}}</p>\r\n            <P (click)=\"removeProd(cp.id)\">\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n            </P>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"card\" id=\"msg\" *ngIf=\"prodCart.length==0\">\r\n        <p> Oh no! Your Basket is empty</p>\r\n        <img src=\"../../assets/empty-cart.svg\">\r\n\r\n      </div>\r\n\r\n      <!--  <div class=\"card\">\r\n        <div class=\"image\">\r\n          <img src=\"https://i.pinimg.com/564x/a3/a1/8b/a3a18b4c3a78b3187d70b456cc09ad7e.jpg\">\r\n        </div>\r\n        <div class=\"details\">\r\n          <div class=\"left\">\r\n            <p id=\"item\">Dankie Jesu Sweater</p>\r\n            <p>Size: XS</p>\r\n            <p>12 November 2019</p>\r\n            <p style=\"font-size: 4vw; margin: 5px; display: flex; flex-flow: row; align-items: flex-start;\">\r\n              <ion-icon name=\"remove-circle-outline\"></ion-icon>&nbsp; 2 &nbsp;<ion-icon name=\"add-circle-outline\">\r\n              </ion-icon>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"right\">\r\n            <p>R350</p>\r\n            <P>\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n            </P>\r\n          </div>\r\n\r\n        </div>\r\n      </div> -->\r\n\r\n    </div>\r\n\r\n    <div class=\"total\">\r\n      <div class=\"carttotal\">\r\n        <p>TOTAL</p>\r\n        <p>{{getTotal() | currency:'R'}}</p>\r\n      </div>\r\n\r\n      <div class=\"btn\">\r\n        <ion-button [disabled]=\"prodCart.length==0\" (click)=\"placeOrder(prodCart)\" color=\"transparent\">\r\n          PLACE ORDER\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"web_view\">\r\n    <div class=\"pagename\" style=\"margin: 10px; font-family: 'Raleway';\">\r\n      <h1 style=\"font-size: 25px; width: 100%; text-align: center; color: grey; font-family: 'poiret One';\">BASKET ({{cartCount}})</h1>\r\n    </div>\r\n\r\n    <p style=\"font-size: 13px; width: 100%; text-align: center; color: rgb(196, 196, 196);\">Please note that delivery to your door is R100</p>\r\n\r\n    <div class=\"cards\">\r\n      <div class=\"card\" *ngFor=\"let cp of prodCart; let i of index\">\r\n        <div class=\"image\" *ngFor=\"let prod of cp.data.product\">\r\n          <img src=\"{{prod.picture}}\">\r\n        </div>\r\n        <div class=\"details\" *ngFor=\"let prod of cp.data.product\">\r\n          <div class=\"left\">\r\n            <p id=\"item\">{{prod.product_name}}</p>\r\n            <p>Size: {{prod.size}} &nbsp; Color: {{prod.color}}</p>\r\n            <p>{{cp.data.timestamp | date: \"mediumDate\"}}</p>\r\n            <p style=\" margin: 5px; display: flex; flex-flow: row; align-items: baseline;\">\r\n              <ion-icon name=\"remove-circle-outline\" (click)=\"minus(prod, i)\"></ion-icon>&nbsp; {{prod.quantity}} &nbsp;\r\n              <ion-icon name=\"add-circle-outline\" (click)=\"plus(prod, i)\">\r\n              </ion-icon>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"right\">\r\n            <p>{{prod.cost*prod.quantity | currency:'R'}}</p>\r\n            <P (click)=\"removeProd(cp.id)\">\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n            </P>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"card\" id=\"msg\" *ngIf=\"prodCart.length==0\">\r\n        <p> Oh no! Your Basket is empty</p>\r\n        <img src=\"../../assets/empty-cart.svg\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"bottom\">\r\n      <div class=\"baskettotal\">\r\n        <p>TOTAL</p>\r\n        <p>{{getTotal() | currency:'R'}}</p>\r\n      </div>\r\n\r\n      <div class=\"btn\" >\r\n        <ion-button [disabled]=\"prodCart.length==0\" (click)=\"placeOrder(prodCart)\" color=\"transparent\">\r\n          PLACE ORDER\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-footer id=\"webview\">\r\n    <div class=\"footer\">\r\n      <div class=\"heading\">\r\n        <!-- <h1>Dankie Jesu</h1> -->\r\n        <img src=\"../../assets/NoPath - Copy.svg\" alt=\"\">\r\n      </div>\r\n  \r\n      <div class=\"contact_details\">\r\n        <h1>CONTACT US</h1>\r\n        <p>(011) 954-7865</p>\r\n        <p>081 123 4566</p>\r\n        <p class=\"address\">123 Motswaledi Street <br>\r\n          Diepkloof Ext 3 <br>\r\n          SOWETO <br>\r\n          1805</p>\r\n      </div>\r\n  \r\n      <div class=\"info\">\r\n        <h1>INFO</h1>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/FAQs\" color=\"transparent\">\r\n         <span>FAQs</span> \r\n        </ion-button>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/Terms%20and%20Privacy%20Policy\" color=\"transparent\">\r\n          <span>Terms and Privacy Policy</span>\r\n        </ion-button>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/Disclaimer\" color=\"transparent\">\r\n          <span>Disclaimer</span>\r\n        </ion-button>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/Payment%20Process\" color=\"transparent\">\r\n          <span>Payment Process</span>\r\n        </ion-button>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/About%20Company\" color=\"transparent\">\r\n        <span>Developers</span>\r\n        </ion-button> \r\n      </div>\r\n  \r\n      <div class=\"connect\">\r\n        <h1>CONNECT</h1>\r\n        <ion-button href=\"https://www.facebook.com/brokenstoolbrand/\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\r\n          Facebook\r\n        </ion-button>\r\n        <ion-button href=\"https://www.instagram.com/dankiejesu/\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"logo-instagram\"></ion-icon>\r\n          Instagram\r\n        </ion-button>\r\n      </div>\r\n  \r\n      <div class=\"app_store\">\r\n        <img src=\"../../assets/android.png\" alt=\"App Store\">\r\n      </div>\r\n    </div>\r\n  </ion-footer>\r\n\r\n\r\n\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n  font-family: \"Raleway\"; }\n  ion-toolbar #icon {\n    color: maroon; }\n  .container {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  height: 100%; }\n  .container .cards {\n    display: flex;\n    flex-flow: column;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    overflow-y: auto;\n    height: 85vh;\n    overflow-y: auto; }\n  .container .cards .card {\n      display: flex;\n      flex-flow: row;\n      box-shadow: 5px 5px 10px lightgray;\n      margin: 5px;\n      min-height: 28vw; }\n  .container .cards .card .image {\n        width: 45vw;\n        min-height: 25vw;\n        max-height: 28vw;\n        margin: 10px; }\n  .container .cards .card .image img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover; }\n  .container .cards .card .details {\n        display: flex;\n        flex-flow: row;\n        width: 100%;\n        padding: 5px;\n        justify-content: space-between;\n        align-items: baseline; }\n  .container .cards .card .details .left {\n          margin: 10px; }\n  .container .cards .card .details .left p {\n            font-size: 3vw;\n            align-items: baseline;\n            padding: 0;\n            margin: 4px 0px; }\n  .container .cards .card .details .left p ion-icon {\n              font-size: 5vw; }\n  .container .cards .card .details .left #item {\n            font-weight: bold;\n            letter-spacing: 1px;\n            font-size: 4vw; }\n  .container .cards .card .details .right {\n          margin: 5px;\n          text-align: right;\n          display: flex;\n          flex-flow: column;\n          justify-content: space-between; }\n  .container .cards .card .details .right p {\n            font-size: 4vw; }\n  .container .cards .card .details .right p ion-icon {\n              font-weight: lighter;\n              font-size: 6vw;\n              color: maroon;\n              margin-top: 30px; }\n  .container .cards #msg {\n      display: flex;\n      flex-flow: column;\n      position: absolute;\n      align-items: center;\n      justify-content: space-evenly;\n      top: 30%;\n      width: 95vw;\n      margin: 10px;\n      font-family: \"Poppins\";\n      box-shadow: none !important; }\n  .container .cards #msg img {\n        width: 50vw;\n        height: 50vw; }\n  .container .cards #msg p {\n        color: #c6cbdb;\n        font-size: 5vw; }\n  .container .total {\n    position: fixed;\n    bottom: 0;\n    background: white;\n    display: flex;\n    flex-flow: column; }\n  .container .total .carttotal {\n      display: flex;\n      flex-flow: row;\n      width: 100vw;\n      padding: 5px;\n      justify-content: space-between; }\n  .container .total .carttotal p {\n        font-family: \"Raleway\";\n        font-size: 3.5vw; }\n  .container .total .btn ion-button {\n      color: white;\n      background: #00003b;\n      width: 99%;\n      padding: 5px;\n      font-family: \"Raleway\";\n      letter-spacing: 2px;\n      font-size: 3vw; }\n  .loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite; }\n  .loader .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n  .loader .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n  .loader .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n  .loader .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n  @-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n  @keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n  @-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n  @keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n  @-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n  @keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n  .loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto; }\n  .loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); }\n  .loader-hide .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n  .loader-hide .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n  @keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n  @keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n  @keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n  @-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n  @keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n  @media only screen and (max-width: 1024px) {\n  .web_view {\n    display: none;\n    width: 0%;\n    height: 0%; }\n  #nav {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  #webview {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; } }\n  @media only screen and (min-width: 1025px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  .web_view {\n    min-width: 800px;\n    max-width: 1000px;\n    margin: auto; }\n    .web_view .cards {\n      display: flex;\n      flex-flow: column;\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content;\n      overflow-y: auto;\n      height: 70vh;\n      overflow-y: auto; }\n      .web_view .cards .card {\n        display: flex;\n        flex-flow: row;\n        box-shadow: 5px 5px 10px lightgray;\n        margin: 5px;\n        min-height: 8vw; }\n        .web_view .cards .card .image {\n          width: 7vw;\n          min-height: 7vw;\n          max-height: 8vw;\n          margin: 5px; }\n          .web_view .cards .card .image img {\n            width: 100%;\n            height: 100%;\n            -o-object-fit: cover;\n               object-fit: cover; }\n        .web_view .cards .card .details {\n          display: flex;\n          flex-flow: row;\n          width: 100%;\n          padding: 5px;\n          justify-content: space-between;\n          align-items: baseline; }\n          .web_view .cards .card .details .left {\n            margin: 10px; }\n            .web_view .cards .card .details .left p {\n              display: grid;\n              align-items: center;\n              padding: 0;\n              margin: 4px 0px; }\n              .web_view .cards .card .details .left p ion-icon {\n                font-size: 30px; }\n            .web_view .cards .card .details .left #item {\n              font-weight: bold;\n              letter-spacing: 1px; }\n          .web_view .cards .card .details .right {\n            margin: 5px;\n            text-align: right;\n            display: flex;\n            flex-flow: column;\n            justify-content: space-between; }\n            .web_view .cards .card .details .right p ion-icon {\n              font-weight: lighter;\n              font-size: 40px;\n              color: maroon;\n              margin-top: 30px; }\n      .web_view .cards #msg {\n        display: flex;\n        flex-flow: column;\n        align-items: center;\n        justify-content: space-evenly;\n        margin: 10px;\n        font-family: \"Poppins\";\n        box-shadow: none !important; }\n        .web_view .cards #msg img {\n          width: 30vw;\n          height: 30vw; }\n        .web_view .cards #msg p {\n          color: #c6cbdb; }\n    .web_view .total {\n      position: fixed;\n      bottom: 0;\n      background: white;\n      display: flex;\n      flex-flow: column;\n      width: 60vw; }\n      .web_view .total .carttotal {\n        display: flex;\n        flex-flow: row;\n        width: 60vw;\n        padding: 5px;\n        justify-content: space-between; }\n        .web_view .total .carttotal p {\n          font-family: \"Raleway\"; }\n      .web_view .total .btn ion-button {\n        color: white;\n        background: #00003b;\n        padding: 5px;\n        font-family: \"Raleway\";\n        letter-spacing: 2px;\n        width: 60vw; } }\n  ion-footer {\n  text-align: center; }\n  ion-footer .footer {\n    display: flex;\n    flex-flow: row;\n    justify-content: space-evenly;\n    width: 100vw;\n    background: #000020;\n    color: white; }\n  ion-footer .footer .heading {\n      width: 10vw;\n      height: 5vw;\n      margin: 15px; }\n  ion-footer .footer .heading img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n  ion-footer .footer .app_store {\n      width: 10vw;\n      height: 5vw; }\n  ion-footer .footer .contact_details {\n      font-size: 13px;\n      text-align: left; }\n  ion-footer .footer .contact_details p {\n        font-size: 13px; }\n  ion-footer .footer .contact_details h1 {\n        font-size: 20px; }\n  ion-footer .footer .info {\n      font-size: 13px;\n      text-align: left;\n      display: flex;\n      flex-flow: column;\n      align-items: flex-start; }\n  ion-footer .footer .info ion-button {\n        font-size: 13px;\n        color: white;\n        padding-left: 0 !important; }\n  ion-footer .footer .info ion-button span {\n          text-align: left;\n          width: 100%;\n          left: 0px !important; }\n  ion-footer .footer .info h1 {\n        font-size: 20px; }\n  ion-footer .footer .connect {\n      display: flex;\n      flex-flow: column; }\n  ion-footer .footer .connect ion-button {\n        overflow: hidden; }\n  ion-footer .footer .connect h1 {\n        font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0L0M6XFxVc2Vyc1xcTk1sYW5nZW5pXFxEb2N1bWVudHNcXEdpdEh1YlxcYnJva2VuU3Rvb2wvc3JjXFxhcHBcXGJhc2tldFxcYmFza2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFhO0VBSWIsc0JBQXNCLEVBQUE7RUFMeEI7SUFHSSxhQUFhLEVBQUE7RUFLakI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFKZDtJQU9JLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTtFQVpwQjtNQWNNLGFBQWE7TUFDYixjQUFjO01BQ2Qsa0NBQTJDO01BQzNDLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtFQWxCdEI7UUFvQlEsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsWUFBWSxFQUFBO0VBdkJwQjtVQXlCVSxXQUFXO1VBQ1gsWUFBWTtVQUNaLG9CQUFpQjthQUFqQixpQkFBaUIsRUFBQTtFQTNCM0I7UUFnQ1EsYUFBYTtRQUNiLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLDhCQUE4QjtRQUM5QixxQkFBcUIsRUFBQTtFQXJDN0I7VUF3Q1UsWUFBWSxFQUFBO0VBeEN0QjtZQTJDWSxjQUFjO1lBQ2QscUJBQXFCO1lBQ3JCLFVBQVU7WUFDVixlQUFlLEVBQUE7RUE5QzNCO2NBZ0RjLGNBQWMsRUFBQTtFQWhENUI7WUFxRFksaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixjQUFjLEVBQUE7RUF2RDFCO1VBNERVLFdBQVc7VUFDWCxpQkFBaUI7VUFDakIsYUFBYTtVQUNiLGlCQUFpQjtVQUNqQiw4QkFBOEIsRUFBQTtFQWhFeEM7WUFrRVksY0FBYyxFQUFBO0VBbEUxQjtjQXFFYyxvQkFBb0I7Y0FDcEIs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RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUdJLGFBQWE7SUFDYixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixtQkFBeUI7SUFDekIsWUFBWSxFQUFBO0VBUmhCO01BV00sV0FBVztNQUNYLFdBQVc7TUFDWCxZQUFZLEVBQUE7RUFibEI7UUFlUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFpQjtXQUFqQixpQkFBaUIsRUFBQTtFQWpCekI7TUFzQk0sV0FBVztNQUNYLFdBQVcsRUFBQTtFQXZCakI7TUEyQk0sZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBNUJ0QjtRQThCUSxlQUFlLEVBQUE7RUE5QnZCO1FBaUNRLGVBQWUsRUFBQTtFQWpDdkI7TUFzQ00sZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLHVCQUF1QixFQUFBO0VBMUM3QjtRQTRDUSxlQUFlO1FBQ2YsWUFBWTtRQUVaLDBCQUEwQixFQUFBO0VBL0NsQztVQWlEVSxnQkFBZ0I7VUFDaEIsV0FBVztVQUNYLG9CQUFvQixFQUFBO0VBbkQ5QjtRQXdEUSxlQUFlLEVBQUE7RUF4RHZCO01BNkRNLGFBQWE7TUFDYixpQkFBaUIsRUFBQTtFQTlEdkI7UUFnRVEsZ0JBQWdCLEVBQUE7RUFoRXhCO1FBbUVRLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jhc2tldC9iYXNrZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgI2ljb24ge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICB9XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmNhcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC5jYXJkIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMjExLCAyMTEsIDIxMSk7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiAyOHZ3O1xyXG4gICAgICAuaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1dnc7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjh2dztcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDRweCAwcHg7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNpdGVtIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICAgICAgICAgICAgY29sb3I6IG1hcm9vbjtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI21zZyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICB0b3A6IDMwJTtcclxuICAgICAgd2lkdGg6IDk1dnc7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHZ3O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjYzZjYmRiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG90YWwge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gICAgLmNhcnR0b3RhbCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjV2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDU5KTtcclxuICAgICAgICB3aWR0aDogOTklO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjcsIDYzKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZG1vdmVyIDMwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLm1hcGxvYWRlciB7XHJcbiAgICAubGRzLWVsbGlwc2lzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzM3B4O1xyXG4gICAgICB3aWR0aDogMTNweDtcclxuICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbGVmdDogMzJweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgICBsZWZ0OiA1NnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGluZy10ZXh0IHtcclxuICAvLyBjb2xvcjogeWVsbG93O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwdmg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZDogcmVkO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICAvL3otaW5kZXg6IDkwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ubG9hZGVyLWhpZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICAubWFwbG9hZGVyIHtcclxuICAgIC5sZHMtZWxsaXBzaXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbWFwbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4MiwgNzAsIDk1KTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE5MiwgMTkyKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMDYsIDIwNiwgMjU1KTtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MiwgNTAsIDc1KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTAsIDE4MiwgNDMpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTY3LCAxNjcpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLndlYl92aWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gIH1cclxuXHJcbiAgI25hdiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI3dlYnZpZXd7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAud2ViX3ZpZXcge1xyXG4gICAgbWluLXdpZHRoOiA4MDBweDtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgIC5jYXJkcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMjExLCAyMTEsIDIxMSk7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogOHZ3O1xyXG4gICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICB3aWR0aDogN3Z3O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogN3Z3O1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogOHZ3O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA0cHggMHB4O1xyXG4gICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNpdGVtIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtYXJvb247XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgI21zZyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMzB2dztcclxuICAgICAgICAgIGhlaWdodDogMzB2dztcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogI2M2Y2JkYjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudG90YWwge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICB3aWR0aDogNjB2dztcclxuICAgICAgLmNhcnR0b3RhbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICB3aWR0aDogNjB2dztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgNTkpO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC5mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMzIpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICAgIGhlaWdodDogNXZ3O1xyXG4gICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcF9zdG9yZSB7XHJcbiAgICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgICBoZWlnaHQ6IDV2dztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdF9kZXRhaWxzIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29ubmVjdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

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
        this.viewCart = false;
        this.viewBackdrop = false;
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
    BasketPage.prototype.gotocart = function () {
        this.viewCart = !this.viewCart;
        this.viewBackdrop = !this.viewBackdrop;
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
//# sourceMappingURL=15.js.map