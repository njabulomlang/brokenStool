(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-title>Payment</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content fullscreen>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"pagename\">\r\n      <h1 style=\"font-family: 'Raleway';\">PAYMENT</h1>\r\n    </div>\r\n\r\n    <div class=\"btn\">\r\n      <div class=\"deliver\">\r\n        <ion-button  color=\"transparent\" (click)=\"switchView('d')\" [ngClass]=\"{'delivery':buttonActive, 'delivery-inactive': !buttonActive}\">\r\n          DELIVERY\r\n        </ion-button>\r\n        <!-- <div class=\"line\"></div> -->\r\n      </div>\r\n      <div class=\"pickup\">\r\n        <ion-button color=\"transparent\" (click)=\"switchView('c')\" [ngClass]=\"{'collection': !buttonActive, 'collection-inactive': buttonActive}\">\r\n          COLLECTION\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"details\">\r\n      <div class=\"title\">\r\n        <h2 style=\"font-family: 'Raleway';\">Your Cart</h2>\r\n      </div>\r\n\r\n      <div class=\"list\">\r\n        <table *ngFor=\"let o of myOrder\">\r\n          <tr *ngFor=\"let b of o.product\">\r\n            <td>{{b.product_name}}</td>\r\n            <td>{{b.cost*b.quantity | currency:'R'}}</td>\r\n          </tr>\r\n  \r\n          <tr>\r\n            <td>Delivery Fee</td>\r\n            <td>{{delCost|currency:'R'}}</td>\r\n          </tr>\r\n          <!-- Cart Total- -->\r\n          <tr>\r\n            <th>TOTAL</th>\r\n            <th>{{getTotal() | currency:'R'}}</th>\r\n          </tr>\r\n\r\n\r\n\r\n        </table>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"text\">\r\n      <div class=\"reference\">\r\n        <p>Your reference for this transaction is {{refNo}}. Please use it to deposit the amount due.</p>\r\n      </div>\r\n\r\n      <div class=\"depositto\">\r\n        <p><b>Deposit amount to </b><br>\r\n          Account Holder Name: Lunga <br>\r\n          Account Number: 1234567890<br>\r\n          Branch Name: Dube <br>\r\n          Branch Number: 47100\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"note\">\r\n        <p>Please Note, Delivery to your door is R100 and to your nearest post office is R90</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"btnz\">\r\n      <ion-button (click)=\"goHome()\" color=\"transparent\">\r\n        DONE\r\n      </ion-button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"web_view\">\r\n\r\n    <div class=\"pagename\">\r\n      <h1 style=\"font-family: 'Raleway';\">PAYMENT</h1>\r\n    </div>\r\n\r\n    <div class=\"btn\">\r\n      <div class=\"deliver\">\r\n        <ion-button  color=\"transparent\" (click)=\"switchView('d')\" [ngClass]=\"{'delivery':buttonActive, 'delivery-inactive': !buttonActive}\">\r\n          DELIVERY\r\n        </ion-button>\r\n        <!-- <div class=\"line\"></div> -->\r\n      </div>\r\n      <div class=\"pickup\">\r\n        <ion-button color=\"transparent\" (click)=\"switchView('c')\" [ngClass]=\"{'collection': !buttonActive, 'collection-inactive': buttonActive}\">\r\n          COLLECTION\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"details\">\r\n      <div class=\"title\">\r\n        <h2 style=\"font-family: 'Raleway';\">Your Cart</h2>\r\n      </div>\r\n\r\n      <div class=\"list\">\r\n        <table *ngFor=\"let o of myOrder\">\r\n          <tr *ngFor=\"let b of o.product\">\r\n            <td>{{b.product_name}}</td>\r\n            <td>{{b.cost*b.quantity | currency:'R'}}</td>\r\n          </tr>\r\n          <!--  <tr>\r\n            <td>Hoody</td>\r\n            <td>R300</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td>Hoody</td>\r\n            <td>R300</td>\r\n          </tr> -->\r\n          <tr>\r\n            <td>Delivery Fee</td>\r\n            <td>{{delCost|currency:'R'}}</td>\r\n          </tr>\r\n          <!-- Cart Total- -->\r\n          <tr>\r\n            <th>TOTAL</th>\r\n            <th>{{getTotal() | currency:'R'}}</th>\r\n          </tr>\r\n\r\n\r\n\r\n        </table>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"text\">\r\n      <div class=\"reference\">\r\n        <p>Your reference for this transaction is {{refNo}}. Please use it to deposit the amount due.</p>\r\n      </div>\r\n\r\n      <div class=\"depositto\">\r\n        <p><b>Deposit amount to </b><br>\r\n          Account Holder Name: Lunga <br>\r\n          Account Number: 1234567890<br>\r\n          Branch Name: Dube <br>\r\n          Branch Number: 47100\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"note\">\r\n        <p>Please Note, Delivery to your door is R100 and to your nearest post office is R90</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"btnz\">\r\n      <ion-button (click)=\"goHome()\" color=\"transparent\">\r\n        DONE\r\n      </ion-button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.c om/css?family=Abel|Poiret+One|Open+Sans+Condensed|Jura|Manjari|Poppins|Raleway|Montserrat \");\n.container {\n  display: flex;\n  flex-flow: column;\n  height: 100%; }\n.container .list {\n    position: absolute;\n    left: 15%;\n    right: 15%;\n    width: 100%;\n    height: 30vh;\n    overflow-y: auto; }\n.container .list table {\n      font-family: \"Poppins\";\n      width: 70%;\n      padding: 20px; }\n.container .list table td {\n        text-align: center;\n        padding: 8px;\n        font-family: \"Raleway\"; }\n.container .list table td:nth-child(1) {\n        text-align: left; }\n.container .list table td:nth-child(2) {\n        text-align: right; }\n.container .list table th {\n        border-top: 0.5px solid black;\n        text-align: center;\n        padding: 8px; }\n.container .list table th:nth-child(1) {\n        text-align: left; }\n.container .list table th:nth-child(2) {\n        text-align: right; }\n.container .text {\n    position: absolute;\n    top: 60%;\n    margin: 15px;\n    font-family: \"Poppins\";\n    font-size: 0.8em; }\n.container .btnz {\n    position: fixed;\n    bottom: 5px;\n    width: 100%;\n    text-align: center; }\n.container .btnz ion-button {\n      width: 95%;\n      color: white;\n      background: #000024;\n      font-family: \"Poppins\";\n      letter-spacing: 2px;\n      font-size: 0.8em; }\n.container .details {\n    position: absolute;\n    top: 20%;\n    width: 100%; }\n.container .details .title {\n      font-family: \"Poppins\";\n      font-weight: lighter;\n      margin: 10px; }\n.container .pagename {\n    margin: 10px;\n    font-family: \"Poppins\"; }\n.container .btn {\n    position: absolute;\n    top: 15%;\n    width: 100%;\n    display: flex;\n    flex-flow: row;\n    justify-content: space-evenly; }\n.container .btn .line {\n      width: 20vw;\n      height: 1.5px;\n      background: grey; }\n.container .btn ion-button {\n      color: black;\n      width: 30vw; }\n.container .delivery {\n    width: 50%;\n    height: 100%;\n    align-items: center;\n    overflow: hidden;\n    background: #b8b8b8; }\n.container .delivery ion-button {\n      border-bottom: 2px solid black; }\n.container .delivery-inactive {\n    width: 50%;\n    height: 100%;\n    align-items: center;\n    overflow: hidden;\n    opacity: 0.5;\n    background: #fafafa; }\n.container .delivery-inactive ion-button {\n      width: 100%;\n      height: 100%;\n      border-radius: 30px;\n      font-family: \"Poiret One\";\n      font-weight: bold;\n      letter-spacing: 3px;\n      background: #bf967e;\n      color: white;\n      border: none; }\n.container .collection {\n    width: 50%;\n    height: 100%;\n    overflow: hidden;\n    background: #b8b8b8; }\n.container .collection ion-button {\n      width: 100%;\n      height: 100%;\n      border-radius: 30px;\n      font-family: \"Poiret One\";\n      font-weight: bold;\n      letter-spacing: 3px;\n      background: #bf967e;\n      color: white;\n      border: none; }\n.container .collection-inactive {\n    background: #fafafa;\n    width: 50%;\n    height: 100%;\n    overflow: hidden;\n    opacity: 0.5; }\n.container .collection-inactive ion-button {\n      width: 100%;\n      height: 100%;\n      border-radius: 30px;\n      font-family: \"Poiret One\";\n      font-weight: bold;\n      letter-spacing: 3px;\n      background: #bf967e;\n      color: white;\n      border: none; }\n@media only screen and (min-width: 1330px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  .web_view {\n    min-width: 800px;\n    max-width: 1200px;\n    margin: auto; }\n    .web_view .list {\n      width: 100%;\n      height: 30vh;\n      overflow-y: auto; }\n      .web_view .list table {\n        font-family: \"Poppins\";\n        width: 30vw;\n        padding: 20px; }\n        .web_view .list table td {\n          text-align: center;\n          padding: 8px;\n          font-family: \"Raleway\"; }\n        .web_view .list table td:nth-child(1) {\n          text-align: left; }\n        .web_view .list table td:nth-child(2) {\n          text-align: right; }\n        .web_view .list table th {\n          border-top: 0.5px solid black;\n          text-align: center;\n          padding: 8px; }\n        .web_view .list table th:nth-child(1) {\n          text-align: left; }\n        .web_view .list table th:nth-child(2) {\n          text-align: right; }\n    .web_view .text {\n      position: absolute;\n      top: 60%;\n      margin: 15px;\n      font-family: \"Poppins\"; }\n    .web_view .btnz {\n      position: fixed;\n      bottom: 5px;\n      width: 65vw;\n      text-align: center; }\n      .web_view .btnz ion-button {\n        width: 95%;\n        color: white;\n        background: #000024;\n        font-family: \"Poppins\";\n        letter-spacing: 2px; }\n    .web_view .details {\n      position: absolute;\n      top: 20%;\n      width: 100%; }\n      .web_view .details .title {\n        font-family: \"Poppins\";\n        font-weight: lighter;\n        margin: 10px; }\n    .web_view .pagename {\n      margin: 10px;\n      font-family: \"Poppins\"; }\n    .web_view .btn {\n      display: flex;\n      flex-flow: row;\n      justify-content: space-evenly; }\n      .web_view .btn .line {\n        width: 20vw;\n        height: 1.5px;\n        background: grey; }\n      .web_view .btn ion-button {\n        color: black;\n        width: 30vw; }\n    .web_view .delivery {\n      width: 20vw;\n      height: 100%;\n      align-items: center;\n      overflow: hidden;\n      background: #b8b8b8; }\n      .web_view .delivery ion-button {\n        border-bottom: 2px solid black; }\n    .web_view .delivery-inactive {\n      width: 50%;\n      height: 100%;\n      align-items: center;\n      overflow: hidden;\n      opacity: 0.5;\n      background: #fafafa; }\n      .web_view .delivery-inactive ion-button {\n        width: 100%;\n        height: 100%;\n        border-radius: 30px;\n        font-family: \"Poiret One\";\n        font-weight: bold;\n        letter-spacing: 3px;\n        background: #bf967e;\n        color: white;\n        border: none; }\n    .web_view .collection {\n      width: 50%;\n      height: 100%;\n      overflow: hidden;\n      background: #b8b8b8; }\n      .web_view .collection ion-button {\n        width: 100%;\n        height: 100%;\n        border-radius: 30px;\n        font-family: \"Poiret One\";\n        font-weight: bold;\n        letter-spacing: 3px;\n        background: #bf967e;\n        color: white;\n        border: none; }\n    .web_view .collection-inactive {\n      background: #fafafa;\n      width: 50%;\n      height: 100%;\n      overflow: hidden;\n      opacity: 0.5; }\n      .web_view .collection-inactive ion-button {\n        width: 100%;\n        height: 100%;\n        border-radius: 30px;\n        font-family: \"Poiret One\";\n        font-weight: bold;\n        letter-spacing: 3px;\n        background: #bf967e;\n        color: white;\n        border: none; } }\n@media only screen and (max-width: 1024px) {\n  .web_view {\n    display: none;\n    width: 0%;\n    height: 0%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxwYXltZW50XFxwYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvSUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7QUFIZDtJQVNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7QUFkcEI7TUFnQk0sc0JBQXNCO01BQ3RCLFVBQVU7TUFDVixhQUFhLEVBQUE7QUFsQm5CO1FBc0JRLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osc0JBQXNCLEVBQUE7QUF4QjlCO1FBNEJRLGdCQUFnQixFQUFBO0FBNUJ4QjtRQWdDUSxpQkFBaUIsRUFBQTtBQWhDekI7UUFvQ1EsNkJBQTZCO1FBRTdCLGtCQUFrQjtRQUNsQixZQUFZLEVBQUE7QUF2Q3BCO1FBMkNRLGdCQUFnQixFQUFBO0FBM0N4QjtRQStDUSxpQkFBaUIsRUFBQTtBQS9DekI7SUFxREksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQixFQUFBO0FBekRwQjtJQTZESSxlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtBQWhFdEI7TUFrRU0sVUFBVTtNQUNWLFlBQVk7TUFDWixtQkFBeUI7TUFDekIsc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQixnQkFBZ0IsRUFBQTtBQXZFdEI7SUEyRUksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXLEVBQUE7QUE3RWY7TUFnRk0sc0JBQXNCO01BQ3RCLG9CQUFvQjtNQUNwQixZQUFZLEVBQUE7QUFsRmxCO0lBdUZJLFlBQVk7SUFDWixzQkFBc0IsRUFBQTtBQXhGMUI7SUE0Rkksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gs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O1FBQ25CLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osWUFBWSxFQUFBO0lBcklsQjtNQXlJSSxVQUFVO01BQ1YsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixtQkFBOEIsRUFBQTtNQTVJbEM7UUE4SU0sV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixZQUFZLEVBQUE7SUF0SmxCO01BMEpJLG1CQUE4QjtNQUM5QixVQUFVO01BQ1YsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixZQUFZLEVBQUE7TUE5SmhCO1FBZ0tNLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osWUFBWSxFQUFBLEVBQ2I7QUFLUDtFQUNFO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVLEVBQUEsRUFDWCIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jIG9tL2Nzcz9mYW1pbHk9QWJlbHxQb2lyZXQrT25lfE9wZW4rU2FucytDb25kZW5zZWR8SnVyYXxNYW5qYXJpfFBvcHBpbnN8UmFsZXdheXxNb250c2VycmF0IFwiKTtcclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgLmxpc3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTUlO1xyXG4gICAgcmlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHRhYmxlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgdGQge1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGgge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIGJsYWNrO1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICB9XHJcblxyXG4gIC5idG56IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMzYpO1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kZXRhaWxzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhZ2VuYW1lIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgLmxpbmUge1xyXG4gICAgICB3aWR0aDogMjB2dztcclxuICAgICAgaGVpZ2h0OiAxLjVweDtcclxuICAgICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIH1cclxuICAgaW9uLWJ1dHRvbntcclxuICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgd2lkdGg6IDMwdnc7XHJcbiAgICAgXHJcbiAgIH1cclxuICB9XHJcblxyXG5cclxuICAuZGVsaXZlcnl7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCAxODQsIDE4NCk7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZGVsaXZlcnktaW5hY3RpdmV7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgYmFja2dyb3VuZDogI2JmOTY3ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xsZWN0aW9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE4NCwgMTg0LCAxODQpO1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNiZjk2N2U7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sbGVjdGlvbi1pbmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYmY5NjdlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMzMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAud2ViX3ZpZXcge1xyXG4gICAgbWluLXdpZHRoOiA4MDBweDtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgIC5saXN0IHtcclxuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAvLyBsZWZ0OiAxNSU7XHJcbiAgICAgIC8vIHJpZ2h0OiAxNSU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIHRhYmxlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgd2lkdGg6MzB2dztcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICB0aDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgdGg6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnRleHQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNjAlO1xyXG4gICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYnRueiB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgIHdpZHRoOiA2NXZ3O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAzNik7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMjAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucGFnZW5hbWUge1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIH1cclxuICBcclxuICAgIC5idG4ge1xyXG4gICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIC8vIHRvcDogMTUlO1xyXG4gICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAubGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDIwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICB9XHJcbiAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgICAgXHJcbiAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgLmRlbGl2ZXJ5e1xyXG4gICAgICB3aWR0aDogMjB2dztcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCAxODQsIDE4NCk7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRlbGl2ZXJ5LWluYWN0aXZle1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYmY5NjdlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb2xsZWN0aW9uIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCAxODQsIDE4NCk7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiZjk2N2U7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbGxlY3Rpb24taW5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYmY5NjdlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLndlYl92aWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */");

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
//# sourceMappingURL=20.js.map