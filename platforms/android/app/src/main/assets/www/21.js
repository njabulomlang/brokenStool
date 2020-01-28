(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border id=\"nav\">\r\n\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <div class=\"icon1\">\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/Terms%20and%20Privacy%20Policy\">\r\n          Terms and Privacy Policy\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/Disclaimer\">\r\n          Disclaimer\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/FAQs\">\r\n          FAQs\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/Payment%20Process\">\r\n          Payment Process\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/About%20Company\">\r\n          About Us\r\n        </ion-button>\r\n\r\n\r\n      </div>\r\n\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-family: 'Poiret One'; font-size: 20px; letter-spacing: 2px;\">DankieJesu</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"pagename\">\r\n      <h1 style=\"font-family: 'Raleway';\">PAYMENT</h1>\r\n    </div>\r\n\r\n    <div class=\"btn\">\r\n      <div class=\"deliver\">\r\n        <ion-button color=\"transparent\" (click)=\"switchView('d')\"\r\n          [ngClass]=\"{'delivery':buttonActive, 'delivery-inactive': !buttonActive}\">\r\n          DELIVERY\r\n        </ion-button>\r\n        <!-- <div class=\"line\"></div> -->\r\n      </div>\r\n      <div class=\"pickup\">\r\n        <ion-button color=\"transparent\" (click)=\"switchView('c')\"\r\n          [ngClass]=\"{'collection': !buttonActive, 'collection-inactive': buttonActive}\">\r\n          COLLECTION\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"details\">\r\n      <div class=\"title\">\r\n        <h2 style=\"font-family: 'Raleway';\">Your Cart</h2>\r\n      </div>\r\n\r\n      <div class=\"list\">\r\n        <table *ngFor=\"let o of myOrder\">\r\n          <tr *ngFor=\"let b of o.product\">\r\n            <td>{{b.product_name}}</td>\r\n            <td>{{b.cost*b.quantity | currency:'R'}}</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td>Delivery Fee</td>\r\n            <td>{{delCost|currency:'R'}}</td>\r\n          </tr>\r\n          <!-- Cart Total- -->\r\n          <tr>\r\n            <th>TOTAL</th>\r\n            <th>{{getTotal() | currency:'R'}}</th>\r\n          </tr>\r\n\r\n\r\n\r\n        </table>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"text\">\r\n      <div class=\"reference\">\r\n        <p>Your reference for this transaction is {{refNo}}. Please use it to deposit the amount due.</p>\r\n      </div>\r\n\r\n      <div class=\"depositto\">\r\n        <p><b>Deposit amount to </b><br>\r\n          Account Holder Name: Lunga <br>\r\n          Account Number: 1234567890<br>\r\n          Branch Name: Dube <br>\r\n          Branch Number: 47100\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"note\">\r\n        <p>Please Note, Delivery to your door is R100 and to your nearest post office is R90</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"btnz\">\r\n      <ion-button (click)=\"goHome()\" color=\"transparent\">\r\n        DONE\r\n      </ion-button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n   <!-- <div class=\"pagename\">\r\n      <p>CHECKOUT</p>\r\n    </div> -->\r\n\r\n  <div class=\"web_view\">\r\n\r\n    <div class=\"cards\">\r\n      <div class=\"card\">\r\n        <div class=\"image\">\r\n          <img src=\"../../assets/back.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"itemname\">\r\n          <p>Turquoise Suit <br> R400</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <div class=\"image\">\r\n          <img src=\"../../assets/back.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"itemname\">\r\n          <p>Turquoise Suit <br> R400</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <div class=\"image\">\r\n          <img src=\"../../assets/back.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"itemname\">\r\n          <p>Turquoise Suit <br> R400</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n<div class=\"stuff\">\r\n  <div class=\"order_type\">\r\n    <ion-button (click)=\"switchView('d')\" color=\"transparent\"\r\n      [ngClass]=\"{'delivery':buttonActive, 'delivery-inactive': !buttonActive}\">\r\n      Delivery\r\n    </ion-button>\r\n    <ion-button (click)=\"switchView('c')\" color=\"transparent\"\r\n      [ngClass]=\"{'collection': !buttonActive, 'collection-inactive': buttonActive}\">\r\n      Collection\r\n    </ion-button>\r\n  </div>\r\n  <div class=\"your_cart\" *ngFor=\"let o of myOrder\">\r\n    <div class=\"left\" *ngFor=\"let b of o.product\">\r\n      <p>{{b.product_name}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span slot=\"end\">{{b.cost*b.quantity | currency:'R'}}</span>\r\n      </p>\r\n\r\n    </div>\r\n\r\n    <div class=\"order_fee\" >\r\n      <p> Delivery Fee &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span slot=\"end\">{{delCost|currency:'R'}}</span></p>\r\n\r\n    </div>\r\n    <div class=\"line\"></div>\r\n\r\n    <div class=\"totals\">\r\n      <p style=\"font-weight: bold;\">TOTAL\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{getTotal() | currency:'R'}}</p>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"account_info\">\r\n    <p style=\" margin: 20px 0px\">Your reference for this transaction is {{refNo}}. Please use it to deposit the amount\r\n      due.</p>\r\n\r\n    <p>\r\n      <b>Deposit amount to </b><br>\r\n      Account Holder Name: Lunga <br>\r\n      Account Number: 1234567890<br>\r\n      Branch Name: Dube <br>\r\n      Branch Number: 47100\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"buttonz\">\r\n    <ion-button (click)=\"goHome()\" color=\"transparent\">\r\n      DONE\r\n    </ion-button>\r\n  </div>\r\n</div>\r\n\r\n    \r\n\r\n    <!-- <div class=\"pagename\">\r\n      <h1 style=\"font-family: 'Raleway';\">PAYMENT</h1>\r\n    </div>\r\n\r\n    <div class=\"btn\">\r\n      <div class=\"deliver\">\r\n        <ion-button  color=\"transparent\" (click)=\"switchView('d')\" [ngClass]=\"{'delivery':buttonActive, 'delivery-inactive': !buttonActive}\">\r\n          DELIVERY\r\n        </ion-button>\r\n    \r\n      </div>\r\n      <div class=\"pickup\">\r\n        <ion-button color=\"transparent\" (click)=\"switchView('c')\" [ngClass]=\"{'collection': !buttonActive, 'collection-inactive': buttonActive}\">\r\n          COLLECTION\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"details\">\r\n      <div class=\"title\">\r\n        <h2 style=\"font-family: 'Raleway';\">Your Cart</h2>\r\n      </div>\r\n\r\n      <div class=\"list\">\r\n        <table *ngFor=\"let o of myOrder\">\r\n          <tr *ngFor=\"let b of o.product\">\r\n            <td>{{b.product_name}}</td>\r\n            <td>{{b.cost*b.quantity | currency:'R'}}</td>\r\n          </tr>\r\n  \r\n          <tr>\r\n            <td>Delivery Fee</td>\r\n            <td>{{delCost|currency:'R'}}</td>\r\n          </tr>\r\n      \r\n          <tr>\r\n            <th>TOTAL</th>\r\n            <th>{{getTotal() | currency:'R'}}</th>\r\n          </tr>\r\n\r\n\r\n\r\n        </table>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"text\">\r\n      <div class=\"reference\">\r\n        <p style=\" margin: 20px 0px\">Your reference for this transaction is {{refNo}}. Please use it to deposit the amount due.</p>\r\n      </div>\r\n\r\n      <div class=\"depositto\">\r\n        <p><b>Deposit amount to </b><br>\r\n          Account Holder Name: Lunga <br>\r\n          Account Number: 1234567890<br>\r\n          Branch Name: Dube <br>\r\n          Branch Number: 47100\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"note\">\r\n        <p style=\" margin: 20px 0px\">Please Note, Delivery to your door is R100 and to your nearest post office is R90</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"btnz\">\r\n      <ion-button (click)=\"goHome()\" color=\"transparent\">\r\n        DONE\r\n      </ion-button>\r\n    </div> -->\r\n\r\n  </div>\r\n\r\n  <ion-footer id=\"webview\">\r\n    <div class=\"footer\">\r\n      <div class=\"heading\">\r\n        <!-- <h1>Dankie Jesu</h1> -->\r\n        <img src=\"../../assets/NoPath - Copy.svg\" alt=\"\">\r\n      </div>\r\n\r\n      <div class=\"contact_details\">\r\n        <h1>CONTACT US</h1>\r\n        <p>(011) 954-7865</p>\r\n        <p>081 123 4566</p>\r\n        <p class=\"address\">123 Motswaledi Street <br>\r\n          Diepkloof Ext 3 <br>\r\n          SOWETO <br>\r\n          1805</p>\r\n      </div>\r\n\r\n      <div class=\"info\">\r\n        <h1>INFO</h1>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/FAQs\" color=\"transparent\">\r\n         <span>FAQs</span> \r\n        </ion-button>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/Terms%20and%20Privacy%20Policy\" color=\"transparent\">\r\n          <span>Terms and Privacy Policy</span>\r\n        </ion-button>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/Disclaimer\" color=\"transparent\">\r\n          <span>Disclaimer</span>\r\n        </ion-button>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/Payment%20Process\" color=\"transparent\">\r\n          <span>Payment Process</span>\r\n        </ion-button>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/About%20Company\" color=\"transparent\">\r\n        <span>Developers</span>\r\n        </ion-button>\r\n      </div>\r\n\r\n      <div class=\"connect\">\r\n        <h1>CONNECT</h1>\r\n        <ion-button href=\"https://www.facebook.com/brokenstoolbrand/\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\r\n          Facebook\r\n        </ion-button>\r\n        <ion-button href=\"https://www.instagram.com/dankiejesu/\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"logo-instagram\"></ion-icon>\r\n          Instagram\r\n        </ion-button>\r\n      </div>\r\n\r\n      <div class=\"app_store\">\r\n        <img src=\"../../assets/android.png\" alt=\"App Store\">\r\n      </div>\r\n    </div>\r\n  </ion-footer>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/payment/payment-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/payment/payment.page.ts");




var routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
var PaymentPageRoutingModule = /** @class */ (function () {
    function PaymentPageRoutingModule() {
    }
    PaymentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PaymentPageRoutingModule);
    return PaymentPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/payment/payment.module.ts":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/payment/payment.page.ts");







var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]
            ],
            declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());



/***/ }),

/***/ "./src/app/payment/payment.page.scss":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.c om/css?family=Abel|Poiret+One|Open+Sans+Condensed|Jura|Manjari|Poppins|Raleway|Montserrat \");\n.container {\n  display: flex;\n  flex-flow: column;\n  height: 100%; }\n.container .list {\n    position: absolute;\n    left: 15%;\n    right: 15%;\n    width: 100%;\n    height: 30vh;\n    overflow-y: auto; }\n.container .list table {\n      font-family: \"Poppins\";\n      width: 70%;\n      padding: 20px; }\n.container .list table td {\n        text-align: center;\n        padding: 8px;\n        font-family: \"Raleway\"; }\n.container .list table td:nth-child(1) {\n        text-align: left; }\n.container .list table td:nth-child(2) {\n        text-align: right; }\n.container .list table th {\n        border-top: 0.5px solid black;\n        text-align: center;\n        padding: 8px; }\n.container .list table th:nth-child(1) {\n        text-align: left; }\n.container .list table th:nth-child(2) {\n        text-align: right; }\n.container .text {\n    position: absolute;\n    top: 60%;\n    margin: 15px;\n    font-family: \"Poppins\";\n    font-size: 0.8em; }\n.container .btnz {\n    position: fixed;\n    bottom: 5px;\n    width: 100%;\n    text-align: center; }\n.container .btnz ion-button {\n      width: 95%;\n      color: white;\n      background: #000024;\n      font-family: \"Poppins\";\n      letter-spacing: 2px;\n      font-size: 0.8em; }\n.container .details {\n    position: absolute;\n    top: 20%;\n    width: 100%; }\n.container .details .title {\n      font-family: \"Poppins\";\n      font-weight: lighter;\n      margin: 10px; }\n.container .pagename {\n    margin: 10px;\n    font-family: \"Poppins\"; }\n.container .btn {\n    position: absolute;\n    top: 15%;\n    width: 100%;\n    display: flex;\n    flex-flow: row;\n    justify-content: space-evenly; }\n.container .btn .line {\n      width: 20vw;\n      height: 1.5px;\n      background: grey; }\n.container .btn ion-button {\n      color: black;\n      width: 30vw; }\n.container .delivery {\n    width: 50%;\n    height: 100%;\n    align-items: center;\n    overflow: hidden;\n    background: #b8b8b8; }\n.container .delivery ion-button {\n      border-bottom: 2px solid black; }\n.container .delivery-inactive {\n    width: 50%;\n    height: 100%;\n    align-items: center;\n    overflow: hidden;\n    opacity: 0.5;\n    background: #fafafa; }\n.container .delivery-inactive ion-button {\n      width: 100%;\n      height: 100%;\n      border-radius: 30px;\n      font-family: \"Poiret One\";\n      font-weight: bold;\n      letter-spacing: 3px;\n      background: #bf967e;\n      color: white;\n      border: none; }\n.container .collection {\n    width: 50%;\n    height: 100%;\n    overflow: hidden;\n    background: #b8b8b8; }\n.container .collection ion-button {\n      width: 100%;\n      height: 100%;\n      border-radius: 30px;\n      font-family: \"Poiret One\";\n      font-weight: bold;\n      letter-spacing: 3px;\n      background: #bf967e;\n      color: white;\n      border: none; }\n.container .collection-inactive {\n    background: #fafafa;\n    width: 50%;\n    height: 100%;\n    overflow: hidden;\n    opacity: 0.5; }\n.container .collection-inactive ion-button {\n      width: 100%;\n      height: 100%;\n      border-radius: 30px;\n      font-family: \"Poiret One\";\n      font-weight: bold;\n      letter-spacing: 3px;\n      background: #bf967e;\n      color: white;\n      border: none; }\n@media only screen and (min-width: 1330px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  ion-toolbar {\n    --background: rgb(255, 255, 255);\n    width: 100%;\n    font-family: \"Raleway\";\n    letter-spacing: 2px;\n    color: #838383; }\n    ion-toolbar #icon {\n      color: #838383; }\n    ion-toolbar #number {\n      font-size: 0.8em;\n      position: relative;\n      top: 8px;\n      right: 5px; }\n    ion-toolbar .icon1 {\n      margin: 0 20vw; }\n  .web_view {\n    min-width: 800px;\n    max-width: 1200px;\n    margin: auto;\n    height: 100%;\n    padding: none !important;\n    text-align: left;\n    display: flex;\n    flex-flow: row;\n    justify-content: space-between;\n    align-items: baseline; }\n    .web_view .pagename {\n      width: 60vw; }\n      .web_view .pagename p {\n        font-size: 30px;\n        color: #888888; }\n    .web_view .stuff {\n      width: 45vw;\n      margin-bottom: 25vh;\n      height: 60vh; }\n    .web_view .cards {\n      display: flex;\n      flex-flow: column;\n      width: 35vw;\n      height: 60vh;\n      overflow-y: auto;\n      margin-bottom: 25vh; }\n      .web_view .cards .card {\n        display: flex;\n        flex-flow: row;\n        width: 15vw;\n        min-height: 7vh;\n        border-radius: 5px;\n        box-shadow: 3px 3px 3px 3px #ececec;\n        margin: 6px; }\n        .web_view .cards .card .image {\n          width: 5vw;\n          height: 5vw;\n          border-radius: 5px;\n          margin: 5px; }\n          .web_view .cards .card .image img {\n            width: 100%;\n            height: 100%;\n            -o-object-fit: cover;\n               object-fit: cover;\n            border-radius: 5px; }\n    .web_view .your_cart {\n      width: 60vw;\n      float: left;\n      display: flex;\n      flex-flow: column;\n      line-height: 10px; }\n      .web_view .your_cart .left {\n        display: flex;\n        flex-flow: row;\n        width: 50vw;\n        justify-content: space-between; }\n        .web_view .your_cart .left p {\n          font-size: 15px;\n          color: #9e9e9e; }\n      .web_view .your_cart .order_fee {\n        width: 50vw;\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between;\n        width: 40vw; }\n        .web_view .your_cart .order_fee p {\n          font-size: 15px;\n          color: #9e9e9e; }\n      .web_view .your_cart .total {\n        width: 60vw;\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between;\n        width: 40vw; }\n        .web_view .your_cart .total p {\n          font-size: 15px; }\n    .web_view .account_info {\n      width: 60vw;\n      display: flex;\n      flex-flow: column;\n      line-height: 30px; }\n      .web_view .account_info p {\n        font-weight: lighter; }\n    .web_view .buttonz {\n      width: 40vw;\n      background: #00002e;\n      color: white; }\n    .web_view .order_type {\n      display: flex;\n      flex-flow: row; }\n      .web_view .order_type ion-button {\n        color: grey;\n        height: 3vw; }\n      .web_view .order_type .delivery {\n        width: 20vw;\n        align-items: center;\n        overflow: hidden;\n        background: #b8b8b8; }\n        .web_view .order_type .delivery ion-button {\n          border-bottom: 2px solid black;\n          height: 6vw; }\n      .web_view .order_type .delivery-inactive {\n        width: 50%;\n        height: 100%;\n        align-items: center;\n        overflow: hidden;\n        opacity: 0.5;\n        background: #fafafa; }\n        .web_view .order_type .delivery-inactive ion-button {\n          width: 100%;\n          height: 100%;\n          border-radius: 30px;\n          font-family: \"Poiret One\";\n          font-weight: bold;\n          letter-spacing: 3px;\n          background: #bf967e;\n          color: #646464;\n          border: none; }\n      .web_view .order_type .collection {\n        width: 20vw;\n        overflow: hidden;\n        background: #b8b8b8; }\n        .web_view .order_type .collection ion-button {\n          width: 100%;\n          height: 100%;\n          border-radius: 30px;\n          font-family: \"Poiret One\";\n          font-weight: bold;\n          letter-spacing: 3px;\n          background: #bf967e;\n          color: white;\n          border: none; }\n      .web_view .order_type .collection-inactive {\n        background: #fafafa;\n        width: 50%;\n        height: 100%;\n        overflow: hidden;\n        opacity: 0.5; }\n        .web_view .order_type .collection-inactive ion-button {\n          width: 100%;\n          height: 100%;\n          border-radius: 30px;\n          font-family: \"Poiret One\";\n          font-weight: bold;\n          letter-spacing: 3px;\n          background: #bf967e;\n          color: black;\n          border: none; } }\n@media only screen and (max-width: 1024px) {\n  .web_view {\n    display: none;\n    width: 0%;\n    height: 0%; }\n  #webview {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  #nav {\n    display: none;\n    width: 0%;\n    height: 0%; } }\n@media only screen and (min-width: 800px) {\n  .container {\n    width: 600px;\n    height: 700px; } }\nion-footer {\n  position: absolute;\n  bottom: 0;\n  text-align: center; }\nion-footer .footer {\n    display: flex;\n    flex-flow: row;\n    justify-content: space-evenly;\n    width: 100vw;\n    background: #000020;\n    color: white; }\nion-footer .footer .heading {\n      width: 10vw;\n      height: 5vw;\n      margin: 15px; }\nion-footer .footer .heading img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\nion-footer .footer .app_store {\n      width: 10vw;\n      height: 5vw; }\nion-footer .footer .contact_details {\n      font-size: 13px;\n      text-align: left; }\nion-footer .footer .contact_details p {\n        font-size: 13px; }\nion-footer .footer .contact_details h1 {\n        font-size: 20px; }\nion-footer .footer .info {\n      font-size: 13px;\n      text-align: left;\n      display: flex;\n      flex-flow: column;\n      align-items: flex-start; }\nion-footer .footer .info ion-button {\n        font-size: 13px;\n        color: white;\n        padding-left: 0 !important; }\nion-footer .footer .info ion-button span {\n          text-align: left;\n          width: 100%;\n          left: 0px !important; }\nion-footer .footer .info h1 {\n        font-size: 20px; }\nion-footer .footer .connect {\n      display: flex;\n      flex-flow: column; }\nion-footer .footer .connect ion-button {\n        overflow: hidden; }\nion-footer .footer .connect h1 {\n        font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxwYXltZW50XFxwYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvSUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7QUFIZDtJQVNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7QUFkcEI7TUFnQk0sc0JBQXNCO01BQ3RCLFVBQVU7TUFDVixhQUFhLEVBQUE7QUFsQm5CO1FBc0JRLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osc0JBQXNCLEVBQUE7QUF4QjlCO1FBNEJRLGdCQUFnQixFQUFBO0FBNUJ4QjtRQWdDUSxpQkFBaUIsRUFBQTtBQWhDekI7UUFvQ1EsNkJBQTZCO1FBRTdCLGtCQUFrQjtRQUNsQixZQUFZLEVBQUE7QUF2Q3BCO1FBMkNRLGdCQUFnQixFQUFBO0FBM0N4QjtRQStDUSxpQkFBaUIsRUFBQTtBQS9DekI7SUFxREksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQixFQUFBO0FBekRwQjtJQTZESSxlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtBQWhFdEI7TUFrRU0sVUFBVTtNQUNWLFlBQVk7TUFDWixtQkFBeUI7TUFDekIsc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQixnQkFBZ0IsRUFBQTtBQXZFdEI7SUEyRUksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXLEVBQUE7QUE3RWY7TUFnRk0sc0JBQXNCO01BQ3RCLG9CQUFvQjtNQUNwQixZQUFZLEVBQUE7QUFsRmxCO0lBdUZJLFlBQVk7SUFDWixzQkFBc0IsRUFBQTtBQXhGMUI7SUE0Rkksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gs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RUFBQSxFQUNiO0FBUVQ7RUFDRTtJQUNFLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVSxFQUFBO0VBR1o7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQixFQUFBO0VBR3RCO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVLEVBQUEsRUFDWDtBQUlIO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYSxFQUFBLEVBQ2Q7QUFNSDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7QUFIcEI7SUFLSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQXlCO0lBQ3pCLFlBQVksRUFBQTtBQVZoQjtNQWFNLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWSxFQUFBO0FBZmxCO1FBaUJRLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQWlCO1dBQWpCLGlCQUFpQixFQUFBO0FBbkJ6QjtNQXdCTSxXQUFXO01BQ1gsV0FBVyxFQUFBO0FBekJqQjtNQTZCTSxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7QUE5QnRCO1FBZ0NRLGVBQWUsRUFBQTtBQWhDdkI7UUFtQ1EsZUFBZSxFQUFBO0FBbkN2QjtNQXdDTSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsdUJBQXVCLEVBQUE7QUE1QzdCO1FBOENRLGVBQWU7UUFDZixZQUFZO1FBRWIsMEJBQTBCLEVBQUE7QUFqRGpDO1VBbURVLGdCQUFlO1VBQ2YsV0FBVTtVQUNWLG9CQUFvQixFQUFBO0FBckQ5QjtRQTREUSxlQUFlLEVBQUE7QUE1RHZCO01BaUVNLGFBQWE7TUFDYixpQkFBaUIsRUFBQTtBQWxFdkI7UUFvRVEsZ0JBQWdCLEVBQUE7QUFwRXhCO1FBdUVRLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jIG9tL2Nzcz9mYW1pbHk9QWJlbHxQb2lyZXQrT25lfE9wZW4rU2FucytDb25kZW5zZWR8SnVyYXxNYW5qYXJpfFBvcHBpbnN8UmFsZXdheXxNb250c2VycmF0IFwiKTtcclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgLmxpc3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTUlO1xyXG4gICAgcmlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHRhYmxlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgdGQge1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGgge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIGJsYWNrO1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICB9XHJcblxyXG4gIC5idG56IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMzYpO1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kZXRhaWxzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhZ2VuYW1lIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgLmxpbmUge1xyXG4gICAgICB3aWR0aDogMjB2dztcclxuICAgICAgaGVpZ2h0OiAxLjVweDtcclxuICAgICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlbGl2ZXJ5IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxODQsIDE4NCwgMTg0KTtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kZWxpdmVyeS1pbmFjdGl2ZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgYmFja2dyb3VuZDogI2JmOTY3ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xsZWN0aW9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE4NCwgMTg0LCAxODQpO1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNiZjk2N2U7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sbGVjdGlvbi1pbmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYmY5NjdlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMzMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICNpY29uIHtcclxuICAgICAgY29sb3I6IHJnYigxMzEsIDEzMSwgMTMxKTtcclxuICAgIH1cclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xyXG4gICAgI251bWJlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24xIHtcclxuICAgICAgbWFyZ2luOiAwIDIwdnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC53ZWJfdmlldyB7XHJcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICAucGFnZW5hbWUge1xyXG4gICAgICB3aWR0aDogNjB2dztcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdHVmZiB7XHJcbiAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXZoO1xyXG4gICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2FyZHMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgd2lkdGg6IDM1dnc7XHJcbiAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjV2aDtcclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICAgICAgbWluLWhlaWdodDogN3ZoO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggcmdiKDIzNiwgMjM2LCAyMzYpO1xyXG4gICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICB3aWR0aDogNXZ3O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1dnc7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAueW91cl9jYXJ0IHtcclxuICAgICAgd2lkdGg6IDYwdnc7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgIC5sZWZ0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMTU4LCAxNTgsIDE1OCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5vcmRlcl9mZWUge1xyXG4gICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxNTgsIDE1OCwgMTU4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnRvdGFsIHtcclxuICAgICAgICB3aWR0aDogNjB2dztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5hY2NvdW50X2luZm8ge1xyXG4gICAgICB3aWR0aDogNjB2dztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ1dHRvbnoge1xyXG4gICAgICB3aWR0aDogNDB2dztcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDQ2KTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm9yZGVyX3R5cGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICBoZWlnaHQ6IDN2dztcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZGVsaXZlcnkge1xyXG4gICAgICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCAxODQsIDE4NCk7XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICBoZWlnaHQ6IDZ2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmRlbGl2ZXJ5LWluYWN0aXZlIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNiZjk2N2U7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY29sbGVjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDIwdnc7XHJcbiAgXHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCAxODQsIDE4NCk7XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmY5NjdlO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY29sbGVjdGlvbi1pbmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2JmOTY3ZTtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAud2ViX3ZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgfVxyXG5cclxuICAjd2Vidmlld3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjbmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC5mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMzIpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICAgIGhlaWdodDogNXZ3O1xyXG4gICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcF9zdG9yZSB7XHJcbiAgICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgICBoZWlnaHQ6IDV2dztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdF9kZXRhaWxzIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbm5lY3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAgIC5kZXBvc2l0dG8ge1xyXG4vLyAgICAgbWFyZ2luOiAyMHB4O1xyXG4vLyAgIH1cclxuLy8gICAubGlzdCB7XHJcbi8vICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAvLyBsZWZ0OiAxNSU7XHJcbi8vICAgICAvLyByaWdodDogMTUlO1xyXG4vLyAgICAgd2lkdGg6IDYwdnc7XHJcbi8vICAgICAvL2hlaWdodDogMzB2aDtcclxuLy8gICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbi8vICAgICB0YWJsZSB7XHJcbi8vICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuLy8gICAgICAgd2lkdGg6IDkwJTtcclxuLy8gICAgICAgcGFkZGluZzogMjBweDtcclxuLy8gICAgICAgbWFyZ2luOiAyMHB4IDUwcHg7XHJcblxyXG4vLyAgICAgICB0ZCB7XHJcbi8vICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgdGQ6bnRoLWNoaWxkKDEpIHtcclxuLy8gICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICB0ZDpudGgtY2hpbGQoMikge1xyXG4vLyAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICB0aCB7XHJcbi8vICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgYmxhY2s7XHJcbi8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgdGg6bnRoLWNoaWxkKDEpIHtcclxuLy8gICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICB0aDpudGgtY2hpbGQoMikge1xyXG4vLyAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuLy8gICAudGV4dCB7XHJcbi8vICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAvLyB0b3A6IDYwJTtcclxuLy8gICAgIG1hcmdpbjogMTVweDtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuLy8gICB9XHJcblxyXG4vLyAgIC5idG56IHtcclxuLy8gICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIC8vIGJvdHRvbTogNTBweDtcclxuLy8gICAgIHdpZHRoOiA2MHZ3O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgaW9uLWJ1dHRvbiB7XHJcbi8vICAgICAgIHdpZHRoOiA5NSU7XHJcbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDM2KTtcclxuLy8gICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4vLyAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICAuZGV0YWlscyB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDIwJTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuLy8gICAgIC50aXRsZSB7XHJcbi8vICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbi8vICAgICAgIG1hcmdpbjogMTBweDtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4vLyAgIC5wYWdlbmFtZSB7XHJcbi8vICAgICBtYXJnaW46IDEwcHg7XHJcbi8vICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbi8vICAgfVxyXG5cclxuLy8gICAuYnRuIHtcclxuLy8gICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIC8vIHRvcDogMTUlO1xyXG4vLyAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1mbG93OiByb3c7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuLy8gICAgIC5saW5lIHtcclxuLy8gICAgICAgd2lkdGg6IDIwdnc7XHJcbi8vICAgICAgIGhlaWdodDogMS41cHg7XHJcbi8vICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbi8vICAgICB9XHJcbi8vICAgICBpb24tYnV0dG9uIHtcclxuLy8gICAgICAgY29sb3I6IGJsYWNrO1xyXG4vLyAgICAgICB3aWR0aDogMzB2dztcclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4vLyAgIC5kZWxpdmVyeSB7XHJcbi8vICAgICB3aWR0aDogMjB2dztcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgYmFja2dyb3VuZDogcmdiKDE4NCwgMTg0LCAxODQpO1xyXG4vLyAgICAgaW9uLWJ1dHRvbiB7XHJcbi8vICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgLmRlbGl2ZXJ5LWluYWN0aXZlIHtcclxuLy8gICAgIHdpZHRoOiA1MCU7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICAgIG9wYWNpdHk6IDAuNTtcclxuLy8gICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxuLy8gICAgIGlvbi1idXR0b24ge1xyXG4vLyAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4vLyAgICAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCI7XHJcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjYmY5NjdlO1xyXG4vLyAgICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgLmNvbGxlY3Rpb24ge1xyXG4vLyAgICAgd2lkdGg6IDUwJTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCAxODQsIDE4NCk7XHJcbi8vICAgICBpb24tYnV0dG9uIHtcclxuLy8gICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuLy8gICAgICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiO1xyXG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuLy8gICAgICAgYmFja2dyb3VuZDogI2JmOTY3ZTtcclxuLy8gICAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIC5jb2xsZWN0aW9uLWluYWN0aXZlIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxuLy8gICAgIHdpZHRoOiA1MCU7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgb3BhY2l0eTogMC41O1xyXG4vLyAgICAgaW9uLWJ1dHRvbiB7XHJcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbi8vICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbi8vICAgICAgIGJhY2tncm91bmQ6ICNiZjk2N2U7XHJcbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgYm9yZGVyOiBub25lO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/payment/payment.page.ts":
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var PaymentPage = /** @class */ (function () {
    function PaymentPage(route, router, navCtrl, alertController, alertCtrl) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.alertCtrl = alertCtrl;
        this.dbOrder = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Order');
        this.dbProfile = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('userProfile');
        this.uid = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.myOrder = [];
        this.doc_data = {};
        this.buttonActive = true;
        this.doc_id = this.route.snapshot.paramMap.get('docname');
        // console.log('My doc_id ',this.doc_id);
        //this.delCost = 100;
        this.route.queryParams.subscribe(function (params) {
            _this.doc_data = params["data"];
            //this.col = params["col"];
        });
    }
    PaymentPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dbOrder.doc(this.doc_id).onSnapshot(function (res) {
            _this.myOrder.push(res.data());
            _this.refNo = res.id;
        });
        // console.log('My order is', this.myOrder);
    };
    PaymentPage.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this.myOrder.length; i++) {
            var product = this.myOrder[i].totalPrice;
            total = product + this.delCost;
            // console.log(product);
            /*   product.forEach((item)=>{
                total += (item.cost * item.quantity);
             })  */
            //
        }
        //console.log('My tot ', total);
        return total;
    };
    PaymentPage.prototype.Delivery = function () {
        var _this = this;
        this.myOrder = [];
        this.delCost = 100;
        this.dbProfile.doc(this.uid).onSnapshot(function (res) {
            if (res.data().address === '') {
                //this.navCtrl.navigateForward('')
                _this.presentAlertConfirm();
            }
            else {
                _this.dbOrder.doc(_this.doc_id).update({ deliveryType: "Delivery", deliveryCost: _this.delCost });
            }
        });
    };
    PaymentPage.prototype.notDelivery = function () {
        this.myOrder = [];
        this.delCost = 0;
        // this.dbProfile.doc(this.uid).onSnapshot((res)=>{
        //   if (res.data().address==='') {
        //     //this.navCtrl.navigateForward('')
        //     this.presentAlertConfirm();
        //   } else {
        //   }
        // })
        this.dbOrder.doc(this.doc_id).update({ deliveryType: "Collection", deliveryCost: this.delCost });
    };
    PaymentPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Address missing',
                            message: 'Please setup your physical address',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.navCtrl.navigateForward('profile');
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
    PaymentPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev);
    };
    PaymentPage.prototype.goHome = function () {
        // this.router.navigateByUrl('home');
        if (this.delCost === undefined) {
            this.presentAlert();
            //console.log("My del cost is undefined");
        }
        else {
            this.navCtrl.navigateRoot('home');
        }
        // this.navCtrl.navigateRoot('home');
    };
    PaymentPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delivery',
                            // subHeader: 'Subtitle',
                            message: 'Please select delivery type',
                            buttons: ['OK']
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
    PaymentPage.prototype.switchView = function (state) {
        switch (state) {
            case 'd':
                this.buttonActive = true;
                this.Delivery();
                break;
            case 'c':
                this.buttonActive = false;
                this.notDelivery();
                break;
        }
    };
    PaymentPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.page.scss */ "./src/app/payment/payment.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], PaymentPage);
    return PaymentPage;
}());



/***/ })

}]);
//# sourceMappingURL=21.js.map