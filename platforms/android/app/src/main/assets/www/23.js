(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/receipts/receipts.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/receipts/receipts.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" id=\"icon\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Order History</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"cards\" *ngFor=\"let order of myOrder\">\r\n      <div class=\"card\" *ngFor=\"let o of order.orders\">\r\n\r\n        <div class=\"image\">\r\n          <img src=\"{{o.picture}}\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"right\">\r\n          <div class=\"title\">\r\n            <p>{{o.product_name}}</p>\r\n          </div>\r\n\r\n          <div class=\"costs\">\r\n            <p><i>QTY {{o.quantity}}</i> <br> {{o.cost | currency:'R'}} <br> Size: {{o.size}} <br><br> </p>\r\n          </div>\r\n\r\n          <div class=\"status\">\r\n            <!-- <p>DELIVERY STATUS <br> <span><i>Order Delivered</i></span></p> -->\r\n            \r\n            <!-- <p>DELIVERY STATUS <br> <span><i>Order awaiting collection</i></span></p> -->\r\n            <!-- <p>DELIVERY STATUS <br> <span><i>Order Coolected</i></span></p> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <!--   <p>{{order.refNo}}</p>\r\n      <p>ORDER STATUS <br> <span><i>{{order.status}}</i></span></p> -->\r\n      <!-- <div class=\"card\">\r\n\r\n          <div class=\"image\">\r\n            <img src=\"https://i.pinimg.com/564x/07/45/93/074593d46c161650bf2bc30d7922f15c.jpg\" alt=\"\">\r\n          </div>\r\n  \r\n          <div class=\"right\">\r\n            <div class=\"title\">\r\n              <p>Formal White</p>\r\n            </div>\r\n  \r\n            <div class=\"costs\">\r\n              <p><i>QTY. 1</i> <br> R1200 <br> Size: XS <br><br> SDE098765</p>\r\n            </div>\r\n  \r\n            <div class=\"status\">\r\n              <p>DELIVERY STATUS <br> <span><i>Order awaiting delivery</i></span></p>\r\n  \r\n            </div>\r\n  \r\n          </div>\r\n  \r\n        </div> -->\r\n\r\n      <div class=\"line\"></div>\r\n      <!-- <div *ngFor=\"let o of order.orders\"> -->\r\n        <div class=\"receipt\">\r\n          <h1>Your Receipt</h1>\r\n        </div>\r\n\r\n        <div class=\"name\">\r\n          <p>{{userProfile.name}} {{userProfile.surname}} <br> <span>{{userProfile.cellno}}</span></p>\r\n        </div>\r\n\r\n        <div class=\"ref\">\r\n          <p>REF NO: <span><i>{{order.refNo}}</i></span></p>\r\n        </div>\r\n\r\n        <div class=\"cart\">\r\n          <p><b>Date of Puchase: </b><i>{{order.timestamp | date:\"medium\"}}</i> <br>\r\n            <b>Items</b></p>\r\n        </div>\r\n\r\n        <div class=\"table\">\r\n          <div class=\"list\" *ngFor=\"let o of order.orders\">\r\n            <p style=\"width: 40vw\">{{o.product_name}}</p>\r\n            <p>{{o.quantity}}</p>\r\n          </div>\r\n\r\n\r\n          <br>\r\n          <div class=\"total\">\r\n            <p style=\"width: 40vw\"><b>Total Quantity</b></p>\r\n            <p>{{getQuantity()}}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grand\">\r\n          <p>Grand Total</p>\r\n          <p>{{getTotal() | currency:'R'}}</p>\r\n        </div>\r\n        <div class=\"ordertype\">\r\n          <p>Order Type</p>\r\n          <p id=\"del\"><i>{{order.deliveryType}}</i></p>\r\n        </div>\r\n\r\n        <div class=\"address\">\r\n          <p>Order Address <br> <span>{{userProfile.address}}</span></p>\r\n\r\n        </div>\r\n\r\n        <div class=\"status\">\r\n          <p>Order Status: &nbsp; <i>{{order.status}}</i></p>\r\n        </div>\r\n      <!-- </div> -->\r\n\r\n      <div class=\"buttonz\">\r\n        <ion-button (click)=\" downloadPDF(order.reciept)\" color=\"transparent\">\r\n          DOWNLOAD COPY\r\n        </ion-button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n  font-family: \"Poppins\"; }\n  ion-toolbar #icon {\n    color: maroon; }\n  .container {\n  display: flex;\n  flex-flow: column; }\n  .cards {\n  display: flex;\n  flex-flow: column;\n  padding: 5px;\n  margin: 10px;\n  box-shadow: 5px 5px 10px #bebebe; }\n  .cards .card {\n    display: flex;\n    flex-flow: row;\n    width: 95vw;\n    margin: 5px;\n    border-radius: 5px; }\n  .cards .card .image {\n      width: 25vw;\n      height: 25vw;\n      margin: 10px;\n      border-radius: 8px; }\n  .cards .card .image img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 8px; }\n  .cards .card .right {\n      width: 70vw; }\n  .cards .card .right .title {\n        margin-top: -10px; }\n  .cards .card .right .title p {\n          font-family: \"Poppins\";\n          font-weight: bold; }\n  .cards .card .right .costs p {\n        font-size: 0.8em;\n        margin-top: -10px; }\n  .cards .card .right .status p {\n        font-family: \"Poppins\";\n        font-size: 4vw;\n        font-weight: bold; }\n  .cards .card .right .status p span {\n          font-size: 3vw;\n          font-weight: normal; }\n  .cards .line {\n    width: 82vw;\n    height: 2px;\n    background: grey;\n    position: relative;\n    left: 5%; }\n  .receipt {\n  margin: 10px;\n  margin-top: -10px; }\n  .receipt h1 {\n    font-family: \"Poppins\";\n    color: grey; }\n  .name {\n  margin: 10px;\n  margin-top: -15px; }\n  .name p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.9em; }\n  .name p span {\n      font-size: 0.8em; }\n  .ref {\n  margin: 10px;\n  margin-top: -15px; }\n  .ref p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.8em;\n    font-weight: bold; }\n  .ref p span {\n      font-weight: normal; }\n  .cart {\n  margin: 10px;\n  margin-top: -15px; }\n  .cart p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.8em; }\n  .table {\n  margin: 10px;\n  margin-top: -30px;\n  display: flex;\n  flex-flow: column; }\n  .table .list {\n    margin: 5px;\n    display: flex;\n    flex-flow: row;\n    width: 40vw;\n    line-height: 2px;\n    justify-content: space-between; }\n  .table .list p {\n      font-family: \"Poppins\";\n      color: grey;\n      font-size: 0.8em; }\n  .table .total {\n    margin-top: -30px;\n    display: flex;\n    flex-flow: row;\n    width: 40vw;\n    justify-content: space-between; }\n  .table .total p {\n      font-family: \"Poppins\";\n      color: grey;\n      font-size: 0.8em;\n      font-weight: bold; }\n  .grand {\n  margin: 10px;\n  margin-top: -20px;\n  display: flex;\n  flex-flow: row;\n  width: 50vw;\n  justify-content: space-between; }\n  .grand p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.8em;\n    font-weight: bold; }\n  .ordertype {\n  margin: 10px;\n  margin-top: -35px;\n  display: flex;\n  flex-flow: row;\n  width: 50vw;\n  justify-content: space-between; }\n  .ordertype #del {\n    font-weight: normal; }\n  .ordertype p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.8em;\n    font-weight: bold; }\n  .address {\n  margin: 10px;\n  margin-top: -10px;\n  display: flex;\n  flex-flow: column; }\n  .address p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.8em;\n    font-weight: bold; }\n  .address p span {\n      font-weight: normal; }\n  .status {\n  margin: 10px;\n  margin-top: -10px; }\n  .status p {\n    font-family: \"Poppins\";\n    color: grey;\n    font-size: 0.9em; }\n  .buttonz {\n  width: 100%; }\n  .buttonz ion-button {\n    background: #000030;\n    font-size: 0.8em;\n    width: 80vw;\n    position: relative;\n    left: 5%;\n    font-family: \"Poppins\";\n    letter-spacing: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWlwdHMvQzpcXFVzZXJzXFxOTWxhbmdlbmlcXERvY3VtZW50c1xcR2l0SHViXFxicm9rZW5TdG9vbC9zcmNcXGFwcFxccmVjZWlwdHNcXHJlY2VpcHRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFhO0VBQ2Isc0JBQXNCLEVBQUE7RUFGeEI7SUFJSSxhQUFhLEVBQUE7RUFJakI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7RUFHbkI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0NBQTJDLEVBQUE7RUFMN0M7SUFPSSxhQUFhO0lBQ2IsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBRVgsa0JBQWtCLEVBQUE7RUFadEI7TUFjTSxXQUFXO01BQ1gsWUFBWTtNQUNaLFlBQVk7TUFDWixrQkFBa0IsRUFBQTtFQWpCeEI7UUFvQlEsV0FBVztRQUNYLFlBQVk7UUFDWixvQkFBaUI7V0FBakIsaUJBQWlCO1FBQ2pCLGtCQUFrQixFQUFBO0VBdkIxQjtNQTRCTSxXQUFXLEVBQUE7RUE1QmpCO1FBK0JRLGlCQUFpQixFQUFBO0VBL0J6QjtVQWlDVSxzQkFBc0I7VUFDdEIsaUJBQWlCLEVBQUE7RUFsQzNCO1FBd0NVLGdCQUFnQjtRQUNoQixpQkFBaUIsRUFBQTtFQXpDM0I7UUErQ1Usc0JBQXNCO1FBQ3RCLGNBQWM7UUFDZCxpQkFBaUIsRUFBQTtFQWpEM0I7VUFtRFksY0FBYztVQUNkLG1CQUFtQixFQUFBO0VBcEQvQjtJQTRESSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsUUFBUSxFQUFBO0VBSVo7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7RUFGbkI7SUFJSSxzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0VBSWY7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7RUFGbkI7SUFJSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQixFQUFBO0VBTnBCO01BUU0sZ0JBQWdCLEVBQUE7RUFLdEI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7RUFGbkI7SUFJSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQVByQjtNQVNNLG1CQUFtQixFQUFBO0VBS3pCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0VBRm5CO0lBSUksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGlCQUFpQixFQUFBO0VBSm5CO0lBT0ksV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw4QkFBOEIsRUFBQTtFQVpsQztNQWNNLHNCQUFzQjtNQUN0QixXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUFoQnRCO0lBcUJJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsY0FBYztJQUNkLFdBQVc7SUFDWCw4QkFBOEIsRUFBQTtFQXpCbEM7TUEyQk0sc0JBQXNCO01BQ3RCLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUE7RUFLdkI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjO0VBQ2QsV0FBVztFQUNYLDhCQUE4QixFQUFBO0VBTmhDO0lBUUksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFJckI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjO0VBQ2QsV0FBVztFQUNYLDhCQUE4QixFQUFBO0VBTmhDO0lBU0ksbUJBQW1CLEVBQUE7RUFUdkI7SUFZSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQUlyQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGlCQUFpQixFQUFBO0VBSm5CO0lBTUksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFUckI7TUFXTSxtQkFBbUIsRUFBQTtFQUt6QjtFQUNFLFlBQVk7RUFDWixpQkFBaUIsRUFBQTtFQUZuQjtJQUlJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7RUFJcEI7RUFDRSxXQUFXLEVBQUE7RUFEYjtJQUdJLG1CQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVjZWlwdHMvcmVjZWlwdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICNpY29uIHtcclxuICAgIGNvbG9yOiBtYXJvb247XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG4uY2FyZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDE5MCwgMTkwLCAxOTApO1xyXG4gIC5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIHdpZHRoOiA5NXZ3O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDE5MCwgMTkwLCAxOTApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLmltYWdlIHtcclxuICAgICAgd2lkdGg6IDI1dnc7XHJcbiAgICAgIGhlaWdodDogMjV2dztcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICB3aWR0aDogNzB2dztcclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb3N0cyB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RhdHVzIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGluZSB7XHJcbiAgICB3aWR0aDogODJ2dztcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gIH1cclxufVxyXG5cclxuLnJlY2VpcHQge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBoMSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICB9XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgcCB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZWYge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FydCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gIH1cclxufVxyXG5cclxuLnRhYmxlIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHJcbiAgLmxpc3Qge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICB3aWR0aDogNDB2dztcclxuICAgIGxpbmUtaGVpZ2h0OiAycHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b3RhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmdyYW5kIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdztcclxuICB3aWR0aDogNTB2dztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcCB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi5vcmRlcnR5cGUge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMzVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgI2RlbCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZHJlc3Mge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdGF0dXMge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b256IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBpb24tYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCA0OCk7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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