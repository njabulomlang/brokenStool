(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/receipts/receipts.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/receipts/receipts.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" id=\"icon\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Order History</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"cards\" *ngFor=\"let order of myOrder\">\r\n      <div class=\"card\" *ngFor=\"let o of order.orders\">\r\n\r\n        <div class=\"image\">\r\n          <img src=\"{{o.picture}}\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"right\">\r\n          <div class=\"title\">\r\n            <p>{{o.product_name}}</p>\r\n          </div>\r\n\r\n          <div class=\"costs\">\r\n            <p><i>QTY {{o.quantity}}</i> <br> {{o.cost | currency:'R'}} <br> Size: {{o.size}} <br><br> </p>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"line\"></div>\r\n      \r\n        <div class=\"receipt\">\r\n          <h1>Your Receipt</h1>\r\n        </div>\r\n\r\n        <div class=\"name\">\r\n          <p>{{userProfile.name}} {{userProfile.surname}} <br> <span>{{userProfile.cellno}}</span></p>\r\n        </div>\r\n\r\n        <div class=\"ref\">\r\n          <p>REF NO: <span><i>{{order.refNo}}</i></span></p>\r\n        </div>\r\n\r\n        <div class=\"cart\">\r\n          <p><b>Date of Puchase: </b><i>{{order.timestamp | date:\"medium\"}}</i> <br>\r\n            <b>Items</b></p>\r\n        </div>\r\n\r\n        <div class=\"table\">\r\n          <div class=\"list\" *ngFor=\"let o of order.orders\">\r\n            <p style=\"width: 40vw\">{{o.product_name}}</p>\r\n            <p>{{o.quantity}}</p>\r\n          </div>\r\n\r\n\r\n          <br>\r\n          <div class=\"total\">\r\n            <p style=\"width: 40vw\"><b>Total Quantity</b></p>\r\n            <p>{{getQuantity()}}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grand\">\r\n          <p>Grand Total</p>\r\n          <p>{{getTotal() | currency:'R'}}</p>\r\n        </div>\r\n        <div class=\"ordertype\">\r\n          <p>Order Type</p>\r\n          <p id=\"del\"><i>{{order.deliveryType}}</i></p>\r\n        </div>\r\n\r\n        <div class=\"address\">\r\n          <p>Order Address <br> <span>{{userProfile.address}}</span></p>\r\n\r\n        </div>\r\n\r\n        <div class=\"status\">\r\n          <p>Order Status: &nbsp; <i>{{order.status}}</i></p>\r\n        </div>\r\n      <!-- </div> -->\r\n\r\n      <div class=\"buttonz\">\r\n        <ion-button (click)=\" downloadPDF(order.reciept)\" color=\"transparent\">\r\n          DOWNLOAD COPY\r\n        </ion-button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"web_view\">\r\n    \r\n    <div class=\"cards\" *ngFor=\"let order of myOrder\">\r\n      <div class=\"card\" *ngFor=\"let o of order.orders\">\r\n\r\n        <div class=\"image\">\r\n          <img src=\"{{o.picture}}\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"right\">\r\n          <div class=\"title\">\r\n            <p>{{o.product_name}}</p>\r\n          </div>\r\n\r\n          <div class=\"costs\">\r\n            <p><i>QTY {{o.quantity}}</i> <br> {{o.cost | currency:'R'}} <br> Size: {{o.size}} <br><br> </p>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"line\"></div>\r\n      \r\n        <div class=\"receipt\">\r\n          <h1>Your Receipt</h1>\r\n        </div>\r\n\r\n        <div class=\"name\">\r\n          <p>{{userProfile.name}} {{userProfile.surname}} <br> <span>{{userProfile.cellno}}</span></p>\r\n        </div>\r\n\r\n        <div class=\"ref\">\r\n          <p>REF NO: <span><i>{{order.refNo}}</i></span></p>\r\n        </div>\r\n\r\n        <div class=\"cart\">\r\n          <p><b>Date of Puchase: </b><i>{{order.timestamp | date:\"medium\"}}</i> <br>\r\n            <b>Items</b></p>\r\n        </div>\r\n\r\n        <div class=\"table\">\r\n          <div class=\"list\" *ngFor=\"let o of order.orders\">\r\n            <p style=\"width: 40vw\">{{o.product_name}}</p>\r\n            <p>{{o.quantity}}</p>\r\n          </div>\r\n\r\n\r\n          <br>\r\n          <div class=\"total\">\r\n            <p style=\"width: 40vw\"><b>Total Quantity</b></p>\r\n            <p>{{getQuantity()}}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grand\">\r\n          <p>Grand Total</p>\r\n          <p>{{getTotal() | currency:'R'}}</p>\r\n        </div>\r\n        <div class=\"ordertype\">\r\n          <p>Order Type</p>\r\n          <p id=\"del\"><i>{{order.deliveryType}}</i></p>\r\n        </div>\r\n\r\n        <div class=\"address\">\r\n          <p>Order Address <br> <span>{{userProfile.address}}</span></p>\r\n\r\n        </div>\r\n\r\n        <div class=\"status\">\r\n          <p>Order Status: &nbsp; <i>{{order.status}}</i></p>\r\n        </div>\r\n      <!-- </div> -->\r\n\r\n        <ion-button (click)=\" downloadPDF(order.reciept)\" color=\"transparent\">\r\n          DOWNLOAD COPY\r\n        </ion-button>\r\n    \r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/receipts/receipts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/receipts/receipts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ReceiptsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPageRoutingModule", function() { return ReceiptsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _receipts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receipts.page */ "./src/app/receipts/receipts.page.ts");




var routes = [
    {
        path: '',
        component: _receipts_page__WEBPACK_IMPORTED_MODULE_3__["ReceiptsPage"]
    }
];
var ReceiptsPageRoutingModule = /** @class */ (function () {
    function ReceiptsPageRoutingModule() {
    }
    ReceiptsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ReceiptsPageRoutingModule);
    return ReceiptsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/receipts/receipts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/receipts/receipts.module.ts ***!
  \*********************************************/
/*! exports provided: ReceiptsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPageModule", function() { return ReceiptsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _receipts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receipts-routing.module */ "./src/app/receipts/receipts-routing.module.ts");
/* harmony import */ var _receipts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receipts.page */ "./src/app/receipts/receipts.page.ts");







var ReceiptsPageModule = /** @class */ (function () {
    function ReceiptsPageModule() {
    }
    ReceiptsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _receipts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReceiptsPageRoutingModule"]
            ],
            declarations: [_receipts_page__WEBPACK_IMPORTED_MODULE_6__["ReceiptsPage"]]
        })
    ], ReceiptsPageModule);
    return ReceiptsPageModule;
}());



/***/ }),

/***/ "./src/app/receipts/receipts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/receipts/receipts.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n  font-family: \"Poppins\"; }\n  ion-toolbar #icon {\n    color: maroon; }\n  .container {\n  display: flex;\n  flex-flow: column; }\n  .cards {\n  display: flex;\n  flex-flow: column;\n  padding: 5px;\n  margin: 10px;\n  box-shadow: 5px 5px 10px #bebebe; }\n  .cards .card {\n    display: flex;\n    flex-flow: row;\n    width: 95vw;\n    margin: 5px;\n    border-radius: 5px; }\n  .cards .card .image {\n      width: 25vw;\n      height: 25vw;\n      margin: 10px;\n      border-radius: 8px; }\n  .cards .card .image img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 8px; }\n  .cards .card .right {\n      width: 70vw; }\n  .cards .card .right .title {\n        margin-top: -10px; }\n  .cards .card .right .title p {\n          font-family: \"Poppins\";\n          font-weight: bold; }\n  .cards .card .right .costs p {\n        font-size: 0.8em;\n        margin-top: -10px; }\n  .cards .card .right .status p {\n        font-family: \"Poppins\";\n        font-size: 4vw;\n        font-weight: bold; }\n  .cards .card .right .status p span {\n          font-size: 3vw;\n          font-weight: normal; }\n  .cards .line {\n    width: 82vw;\n    height: 2px;\n    background: grey;\n    position: relative;\n    left: 5%; }\n  .receipt {\n  margin: 10px;\n  margin-top: -10px; }\n  .receipt h1 {\n    font-family: \"Poppins\";\n    color: grey; }\n  .name {\n  margin: 10px;\n  margin-top: -15px; }\n  .name p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.9em; }\n  .name p span {\n      font-size: 0.8em; }\n  .ref {\n  margin: 10px;\n  margin-top: -15px; }\n  .ref p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.8em;\n    font-weight: bold; }\n  .ref p span {\n      font-weight: normal; }\n  .cart {\n  margin: 10px;\n  margin-top: -15px; }\n  .cart p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.8em; }\n  .table {\n  margin: 10px;\n  margin-top: -30px;\n  display: flex;\n  flex-flow: column; }\n  .table .list {\n    margin: 5px;\n    display: flex;\n    flex-flow: row;\n    width: 40vw;\n    line-height: 2px;\n    justify-content: space-between; }\n  .table .list p {\n      font-family: \"Poppins\";\n      color: grey;\n      font-size: 0.8em; }\n  .table .total {\n    margin-top: -30px;\n    display: flex;\n    flex-flow: row;\n    width: 40vw;\n    justify-content: space-between; }\n  .table .total p {\n      font-family: \"Poppins\";\n      color: grey;\n      font-size: 0.8em;\n      font-weight: bold; }\n  .grand {\n  margin: 10px;\n  margin-top: -20px;\n  display: flex;\n  flex-flow: row;\n  width: 50vw;\n  justify-content: space-between; }\n  .grand p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.8em;\n    font-weight: bold; }\n  .ordertype {\n  margin: 10px;\n  margin-top: -35px;\n  display: flex;\n  flex-flow: row;\n  width: 50vw;\n  justify-content: space-between; }\n  .ordertype #del {\n    font-weight: normal; }\n  .ordertype p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.8em;\n    font-weight: bold; }\n  .address {\n  margin: 10px;\n  margin-top: -10px;\n  display: flex;\n  flex-flow: column; }\n  .address p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.8em;\n    font-weight: bold; }\n  .address p span {\n      font-weight: normal; }\n  .status {\n  margin: 10px;\n  margin-top: -10px; }\n  .status p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.9em; }\n  .buttonz {\n  width: 100%; }\n  .buttonz ion-button {\n    background: #000030;\n    font-size: 0.8em;\n    width: 80vw;\n    position: relative;\n    left: 5%;\n    font-family: \"Poppins\";\n    letter-spacing: 1px; }\n  @media only screen and (max-width: 1024px) {\n  .web_view {\n    display: none;\n    width: 0%;\n    height: 0%; } }\n  @media only screen and (min-width: 1330px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  .web_view {\n    min-width: 800px;\n    max-width: 1200px;\n    margin: auto; }\n    .web_view .cards {\n      display: flex;\n      flex-flow: column;\n      padding: 5px;\n      margin: 10px;\n      box-shadow: 5px 5px 10px #bebebe; }\n      .web_view .cards .card {\n        display: flex;\n        flex-flow: row;\n        width: 95vw;\n        margin: 5px;\n        border-radius: 5px; }\n        .web_view .cards .card .image {\n          width: 8vw;\n          height: 8vw;\n          margin: 10px;\n          border-radius: 8px; }\n          .web_view .cards .card .image img {\n            width: 100%;\n            height: 100%;\n            -o-object-fit: cover;\n               object-fit: cover;\n            border-radius: 8px; }\n        .web_view .cards .card .right {\n          width: 70vw; }\n          .web_view .cards .card .right .title {\n            margin-top: -10px; }\n            .web_view .cards .card .right .title p {\n              font-family: \"Poppins\";\n              font-weight: bold; }\n          .web_view .cards .card .right .costs p {\n            font-size: 0.8em;\n            margin-top: -10px; }\n          .web_view .cards .card .right .status p {\n            font-family: \"Poppins\";\n            font-size: 4vw;\n            font-weight: bold; }\n            .web_view .cards .card .right .status p span {\n              font-size: 3vw;\n              font-weight: normal; }\n      .web_view .cards .line {\n        width: 90%;\n        height: 2px;\n        background: grey; }\n    .web_view .receipt {\n      margin: 10px;\n      margin-top: -10px; }\n      .web_view .receipt h1 {\n        font-family: \"Poppins\";\n        color: grey; }\n    .web_view .name {\n      margin: 10px;\n      margin-top: -15px; }\n      .web_view .name p {\n        font-family: \"Poppins\";\n        color: grey;\n        font-size: 0.9em; }\n        .web_view .name p span {\n          font-size: 0.8em; }\n    .web_view .ref {\n      margin: 10px;\n      margin-top: -15px; }\n      .web_view .ref p {\n        font-family: \"Poppins\";\n        color: grey;\n        font-size: 0.8em;\n        font-weight: bold; }\n        .web_view .ref p span {\n          font-weight: normal; }\n    .web_view .cart {\n      margin: 10px;\n      margin-top: -15px; }\n      .web_view .cart p {\n        font-family: \"Poppins\";\n        color: grey;\n        font-size: 0.8em; }\n    .web_view .table {\n      margin: 10px;\n      margin-top: -30px;\n      display: flex;\n      flex-flow: column; }\n      .web_view .table .list {\n        margin: 5px;\n        display: flex;\n        flex-flow: row;\n        width: 40vw;\n        line-height: 2px;\n        justify-content: space-evenly; }\n        .web_view .table .list p {\n          font-family: \"Poppins\";\n          color: grey;\n          font-size: 0.8em; }\n      .web_view .table .total {\n        margin-top: -30px;\n        display: flex;\n        flex-flow: row;\n        width: 40vw;\n        justify-content: space-between; }\n        .web_view .table .total p {\n          font-family: \"Poppins\";\n          color: grey;\n          font-size: 0.8em;\n          font-weight: bold; }\n    .web_view .grand {\n      margin: 10px;\n      margin-top: -20px;\n      display: flex;\n      flex-flow: row;\n      width: 50vw;\n      justify-content: space-between; }\n      .web_view .grand p {\n        font-family: \"Poppins\";\n        color: grey;\n        font-size: 0.8em;\n        font-weight: bold; }\n    .web_view .ordertype {\n      margin: 10px;\n      margin-top: -35px;\n      display: flex;\n      flex-flow: row;\n      width: 50vw;\n      justify-content: space-between; }\n      .web_view .ordertype #del {\n        font-weight: normal; }\n      .web_view .ordertype p {\n        font-family: \"Poppins\";\n        color: grey;\n        font-size: 0.8em;\n        font-weight: bold; }\n    .web_view .address {\n      margin: 10px;\n      margin-top: -10px;\n      display: flex;\n      flex-flow: column; }\n      .web_view .address p {\n        font-family: \"Poppins\";\n        color: grey;\n        font-size: 0.8em;\n        font-weight: bold; }\n        .web_view .address p span {\n          font-weight: normal; }\n    .web_view .status {\n      margin: 10px;\n      margin-top: -10px; }\n      .web_view .status p {\n        font-family: \"Poppins\";\n        color: grey;\n        font-size: 0.9em; }\n    .web_view ion-button {\n      background: #000030;\n      width: 92%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      margin: 30px;\n      position: relative;\n      left: 9px;\n      font-family: \"Poppins\";\n      letter-spacing: 1px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWlwdHMvQzpcXFVzZXJzXFx6YW5lbFxcRG9jdW1lbnRzXFxicm9rZW5TdG9vbC9zcmNcXGFwcFxccmVjZWlwdHNcXHJlY2VpcHRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFhO0VBQ2Isc0JBQXNCLEVBQUE7RUFGeEI7SUFJSSxhQUFhLEVBQUE7RUFJakI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7RUFHbkI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0NBQTJDLEVBQUE7RUFMN0M7SUFPSSxhQUFhO0lBQ2IsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBRVgsa0JBQWtCLEVBQUE7RUFadEI7TUFjTSxXQUFXO01BQ1gsWUFBWTtNQUNaLFlBQVk7TUFDWixrQkFBa0IsRUFBQTtFQWpCeEI7UUFvQlEsV0FBVztRQUNYLFlBQVk7UUFDWixvQkFBaUI7V0FBakIsaUJBQWlCO1FBQ2pCLGtCQUFrQixFQUFBO0VBdkIxQjtNQTRCTSxXQUFXLEVBQUE7RUE1QmpCO1FBK0JRLGlCQUFpQixFQUFBO0VBL0J6QjtVQWlDVSxzQkFBc0I7VUFDdEIsaUJBQWlCLEVBQUE7RUFsQzNCO1FBd0NVLGdCQUFnQjtRQUNoQixpQkFBaUIsRUFBQTtFQXpDM0I7UUErQ1Usc0JBQXNCO1FBQ3RCLGNBQWM7UUFDZCxpQkFBaUIsRUFBQTtFQWpEM0I7VUFtRFksY0FBYztVQUNkLG1CQUFtQixFQUFBO0VBcEQvQjtJQTRESSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsUUFBUSxFQUFBO0VBSVo7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7RUFGbkI7SUFJSSxzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0VBSWY7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7RUFGbkI7SUFJSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFn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LFdBQVc7TUFDWCw4QkFBOEIsRUFBQTtNQWhMbEM7UUFtTE0sbUJBQW1CLEVBQUE7TUFuTHpCO1FBc0xNLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGlCQUFpQixFQUFBO0lBekx2QjtNQThMSSxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGFBQWE7TUFDYixpQkFBaUIsRUFBQTtNQWpNckI7UUFtTU0sc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsaUJBQWlCLEVBQUE7UUF0TXZCO1VBd01RLG1CQUFtQixFQUFBO0lBeE0zQjtNQThNSSxZQUFZO01BQ1osaUJBQWlCLEVBQUE7TUEvTXJCO1FBaU5NLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsZ0JBQWdCLEVBQUE7SUFuTnRCO01Bd05NLG1CQUF5QjtNQUN6QixVQUFVO01BQ1gsb0JBQWlCO1NBQWpCLGlCQUFpQjtNQUNqQixZQUFZO01BQ1gsa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxzQkFBc0I7TUFDdEIsbUJBQW1CLEVBQUEsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZWNlaXB0cy9yZWNlaXB0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgI2ljb24ge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgLmNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgd2lkdGg6IDk1dnc7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIC8vIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogMjV2dztcclxuICAgICAgaGVpZ2h0OiAyNXZ3O1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIHdpZHRoOiA3MHZ3O1xyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvc3RzIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saW5lIHtcclxuICAgIHdpZHRoOiA4MnZ3O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVjZWlwdCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxufVxyXG5cclxuLm5hbWUge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJlZiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJ0IHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgcCB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICAubGlzdCB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDJweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHAge1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRvdGFsIHtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JhbmQge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuLm9yZGVydHlwZSB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0zNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAjZGVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkcmVzcyB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgcCB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbnoge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDQ4KTtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLndlYl92aWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gIH0gXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMzMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLndlYl92aWV3IHtcclxuICAgIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAuY2FyZHMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDE5MCwgMTkwLCAxOTApO1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICB3aWR0aDogOTV2dztcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDE5MCwgMTkwLCAxOTApO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDh2dztcclxuICAgICAgICAgIGhlaWdodDogOHZ3OyAgXHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgXHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgIC5jb3N0cyB7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAubGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyBsZWZ0OiA1JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVjZWlwdCB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5hbWUge1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZWYge1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJ0IHtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBcclxuICAgICAgLmxpc3Qge1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAudG90YWwge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ncmFuZCB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICB3aWR0aDogNTB2dztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAub3JkZXJ0eXBlIHtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMzVweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBcclxuICAgICAgI2RlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWRkcmVzcyB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdGF0dXMge1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCA0OCk7XHJcbiAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiA5cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/receipts/receipts.page.ts":
/*!*******************************************!*\
  !*** ./src/app/receipts/receipts.page.ts ***!
  \*******************************************/
/*! exports provided: ReceiptsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPage", function() { return ReceiptsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ "./node_modules/@ionic-native/downloader/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var ReceiptsPage = /** @class */ (function () {
    function ReceiptsPage(route, file, fileOpener, downloader, navCtrl, toastController) {
        this.route = route;
        this.file = file;
        this.fileOpener = fileOpener;
        this.downloader = downloader;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.dbHistory = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('orderHistory');
        this.dbProfile = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('userProfile');
        this.uid = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.userProfile = {
            name: '',
            surname: '',
            cellno: 0,
            address: ''
        };
        this.myOrder = [];
        this.quantity = 0;
        this.doc_id = this.route.snapshot.paramMap.get('id');
        // this.route.queryParams.subscribe(params => {
        //   this.doc_id = params["id"];
        //   // this.col = params["col"];
        // });
    }
    ReceiptsPage.prototype.ngOnInit = function () {
        this.getOrder();
        this.getProfile();
    };
    ReceiptsPage.prototype.getOrder = function () {
        var _this = this;
        this.dbHistory.doc(this.doc_id).onSnapshot(function (res) {
            _this.myOrder.push(res.data());
        });
    };
    ReceiptsPage.prototype.getProfile = function () {
        var _this = this;
        this.dbProfile.doc(this.uid).onSnapshot(function (res) {
            _this.userProfile.name = res.data().name;
            _this.userProfile.surname = res.data().surname;
            _this.userProfile.cellno = res.data().cellPhone;
            _this.userProfile.address = res.data().address;
        });
    };
    ReceiptsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ReceiptsPage.prototype.downloadPDF = function (pdf) {
        var _this = this;
        /*     this.loader.create({
              content: "Downloading...",
              duration: 3000
            }).present(); */
        console.log('PDF link..', pdf);
        var request = {
            uri: pdf,
            title: 'Reciept ' + new Date().getTime(),
            description: '',
            mimeType: '',
            visibleInDownloadsUi: true,
            notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_6__["NotificationVisibility"].VisibleNotifyCompleted,
            destinationInExternalFilesDir: {
                dirType: 'Download',
                subPath: 'Reciepts'
            }
        };
        this.downloader.download(request)
            .then(function (location) {
            console.log('Located at ', location);
            _this.presentToast();
        })
            .catch(function (error) { return console.error(error); });
        //  this.pdfObj = pdfMake.createPdf();
        // this.pdfObj.getBuffer((buffer) => {
        // });
    };
    ReceiptsPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Your file have been saved',
                            duration: 3000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReceiptsPage.prototype.getTotal = function () {
        var total = 0;
        //let quantity = 0;
        for (var i = 0; i < this.myOrder.length; i++) {
            var product = this.myOrder[i].orders;
            //  console.log(this.myOrder[i]);
            product.forEach(function (item) {
                //quantity=item.quantity+item.quantity;
                total += item.cost * item.quantity;
            });
            // console.log('My tot ', quantity);
        }
        /// console.log('My tot ', total);
        return total;
    };
    ReceiptsPage.prototype.getQuantity = function () {
        var total = 0;
        //let quantity = 0;
        for (var i = 0; i < this.myOrder.length; i++) {
            var product = this.myOrder[i].orders;
            //  console.log(this.myOrder[i]);
            product.forEach(function (item) {
                //quantity=item.quantity+item.quantity;
                total += item.quantity;
            });
            // console.log('My tot ', quantity);
        }
        /// console.log('My tot ', total);
        return total;
    };
    ReceiptsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"] },
        { type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_6__["Downloader"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
    ]; };
    ReceiptsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-receipts',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./receipts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/receipts/receipts.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./receipts.page.scss */ "./src/app/receipts/receipts.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"], _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_6__["Downloader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])
    ], ReceiptsPage);
    return ReceiptsPage;
}());



/***/ })

}]);
//# sourceMappingURL=23.js.map