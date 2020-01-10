(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-title>Payment</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content fullscreen>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"pagename\">\r\n      <h1 style=\"font-family: 'Raleway';\">PAYMENT</h1>\r\n    </div>\r\n\r\n    <div class=\"btn\">\r\n      <div class=\"deliver\">\r\n        <ion-button  color=\"transparent\" (click)=\"switchView('d')\" [ngClass]=\"{'delivery':buttonActive, 'delivery-inactive': !buttonActive}\">\r\n          DELIVERY\r\n        </ion-button>\r\n        <!-- <div class=\"line\"></div> -->\r\n      </div>\r\n      <div class=\"pickup\">\r\n        <ion-button color=\"transparent\" (click)=\"switchView('c')\" [ngClass]=\"{'collection': !buttonActive, 'collection-inactive': buttonActive}\">\r\n          COLLECTION\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"details\">\r\n      <div class=\"title\">\r\n        <h2 style=\"font-family: 'Raleway';\">Your Cart</h2>\r\n      </div>\r\n\r\n      <div class=\"list\">\r\n        <table *ngFor=\"let o of myOrder\">\r\n          <tr *ngFor=\"let b of o.product\">\r\n            <td>{{b.product_name}}</td>\r\n            <td>{{b.cost*b.quantity | currency:'R'}}</td>\r\n          </tr>\r\n          <!--  <tr>\r\n            <td>Hoody</td>\r\n            <td>R300</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td>Hoody</td>\r\n            <td>R300</td>\r\n          </tr> -->\r\n          <tr>\r\n            <td>Delivery Fee</td>\r\n            <td>{{delCost|currency:'R'}}</td>\r\n          </tr>\r\n          <!-- Cart Total- -->\r\n          <tr>\r\n            <th>TOTAL</th>\r\n            <th>{{getTotal() | currency:'R'}}</th>\r\n          </tr>\r\n\r\n\r\n\r\n        </table>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"text\">\r\n      <div class=\"reference\">\r\n        <p>Your reference for this transaction is {{refNo}}. Please use it to deposit the amount due.</p>\r\n      </div>\r\n\r\n      <div class=\"depositto\">\r\n        <p><b>Deposit amount to </b><br>\r\n          Account Holder Name: Lunga <br>\r\n          Account Number: 1234567890<br>\r\n          Branch Name: Dube <br>\r\n          Branch Number: 47100\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"note\">\r\n        <p>Please Note, Delivery to your door is R100 and to your nearest post office is R90</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"btnz\">\r\n      <ion-button (click)=\"goHome()\" color=\"transparent\">\r\n        DONE\r\n      </ion-button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/payment/payment.page.ts");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/payment/payment.page.ts");







let PaymentPageModule = class PaymentPageModule {
};
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



/***/ }),

/***/ "./src/app/payment/payment.page.scss":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.c om/css?family=Abel|Poiret+One|Open+Sans+Condensed|Jura|Manjari|Poppins|Raleway|Montserrat \");\n.container {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\n.container .list {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  width: 100%;\n  height: 30vh;\n  overflow-y: auto;\n}\n.container .list table {\n  font-family: \"Poppins\";\n  width: 70%;\n  padding: 20px;\n}\n.container .list table td {\n  text-align: center;\n  padding: 8px;\n  font-family: \"Raleway\";\n}\n.container .list table td:nth-child(1) {\n  text-align: left;\n}\n.container .list table td:nth-child(2) {\n  text-align: right;\n}\n.container .list table th {\n  border-top: 0.5px solid black;\n  text-align: center;\n  padding: 8px;\n}\n.container .list table th:nth-child(1) {\n  text-align: left;\n}\n.container .list table th:nth-child(2) {\n  text-align: right;\n}\n.container .text {\n  position: absolute;\n  top: 60%;\n  margin: 15px;\n  font-family: \"Poppins\";\n  font-size: 0.8em;\n}\n.container .btnz {\n  position: fixed;\n  bottom: 5px;\n  width: 100%;\n  text-align: center;\n}\n.container .btnz ion-button {\n  width: 95%;\n  color: white;\n  background: #000024;\n  font-family: \"Poppins\";\n  letter-spacing: 2px;\n  font-size: 0.8em;\n}\n.container .details {\n  position: absolute;\n  top: 20%;\n  width: 100%;\n}\n.container .details .title {\n  font-family: \"Poppins\";\n  font-weight: lighter;\n  margin: 10px;\n}\n.container .pagename {\n  margin: 10px;\n  font-family: \"Poppins\";\n}\n.container .btn {\n  position: absolute;\n  top: 15%;\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-evenly;\n}\n.container .btn .line {\n  width: 20vw;\n  height: 1.5px;\n  background: grey;\n}\n.container .btn ion-button {\n  color: black;\n  width: 30vw;\n}\n.container .delivery {\n  width: 50%;\n  height: 100%;\n  align-items: center;\n  overflow: hidden;\n  background: #b8b8b8;\n}\n.container .delivery ion-button {\n  border-bottom: 2px solid black;\n}\n.container .delivery-inactive {\n  width: 50%;\n  height: 100%;\n  align-items: center;\n  overflow: hidden;\n  opacity: 0.5;\n  background: #fafafa;\n}\n.container .delivery-inactive ion-button {\n  width: 100%;\n  height: 100%;\n  border-radius: 30px;\n  font-family: \"Poiret One\";\n  font-weight: bold;\n  letter-spacing: 3px;\n  background: #bf967e;\n  color: white;\n  border: none;\n}\n.container .collection {\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  background: #b8b8b8;\n}\n.container .collection ion-button {\n  width: 100%;\n  height: 100%;\n  border-radius: 30px;\n  font-family: \"Poiret One\";\n  font-weight: bold;\n  letter-spacing: 3px;\n  background: #bf967e;\n  color: white;\n  border: none;\n}\n.container .collection-inactive {\n  background: #fafafa;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  opacity: 0.5;\n}\n.container .collection-inactive ion-button {\n  width: 100%;\n  height: 100%;\n  border-radius: 30px;\n  font-family: \"Poiret One\";\n  font-weight: bold;\n  letter-spacing: 3px;\n  background: #bf967e;\n  color: white;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxwYXltZW50XFxwYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvSUFBQTtBQUNSO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FESUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FER0k7RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDRE47QURHTTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDRlI7QURLTTtFQUNFLGdCQUFBO0FDSFI7QURNTTtFQUNFLGlCQUFBO0FDSlI7QURPTTtFQUNFLDZCQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0FDTlI7QURTTTtFQUNFLGdCQUFBO0FDUFI7QURVTTtFQUNFLGlCQUFBO0FDUlI7QURhRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDWEo7QURjRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDWko7QURhSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNYTjtBRGNFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ1pKO0FEY0k7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ1pOO0FEZ0JFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FDZEo7QURpQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQ2ZKO0FEZ0JJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ2ROO0FEZ0JHO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNkTDtBRG9CRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDbEJKO0FEbUJJO0VBQ0UsOEJBQUE7QUNqQk47QURvQkU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNsQko7QURtQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ2pCTjtBRG9CRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2xCSjtBRG1CSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDakJOO0FEb0JFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ2xCSjtBRG1CSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDakJOIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmMgb20vY3NzP2ZhbWlseT1BYmVsfFBvaXJldCtPbmV8T3BlbitTYW5zK0NvbmRlbnNlZHxKdXJhfE1hbmphcml8UG9wcGluc3xSYWxld2F5fE1vbnRzZXJyYXQgXCIpO1xyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAubGlzdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgICByaWdodDogMTUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgdGFibGUge1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgYmxhY2s7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGg6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MCU7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0bnoge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAzNik7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLmRldGFpbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFnZW5hbWUge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAubGluZSB7XHJcbiAgICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgICBoZWlnaHQ6IDEuNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgfVxyXG4gICBpb24tYnV0dG9ue1xyXG4gICAgIGNvbG9yOiBibGFjaztcclxuICAgICB3aWR0aDogMzB2dztcclxuICAgICBcclxuICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5kZWxpdmVyeXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxODQsIDE4NCwgMTg0KTtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kZWxpdmVyeS1pbmFjdGl2ZXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYmY5NjdlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbGxlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCAxODQsIDE4NCk7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgYmFja2dyb3VuZDogI2JmOTY3ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xsZWN0aW9uLWluYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNiZjk2N2U7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jIG9tL2Nzcz9mYW1pbHk9QWJlbHxQb2lyZXQrT25lfE9wZW4rU2FucytDb25kZW5zZWR8SnVyYXxNYW5qYXJpfFBvcHBpbnN8UmFsZXdheXxNb250c2VycmF0IFwiKTtcbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciAubGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTUlO1xuICByaWdodDogMTUlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmNvbnRhaW5lciAubGlzdCB0YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jb250YWluZXIgLmxpc3QgdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xufVxuLmNvbnRhaW5lciAubGlzdCB0YWJsZSB0ZDpudGgtY2hpbGQoMSkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRhaW5lciAubGlzdCB0YWJsZSB0ZDpudGgtY2hpbGQoMikge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jb250YWluZXIgLmxpc3QgdGFibGUgdGgge1xuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG59XG4uY29udGFpbmVyIC5saXN0IHRhYmxlIHRoOm50aC1jaGlsZCgxKSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29udGFpbmVyIC5saXN0IHRhYmxlIHRoOm50aC1jaGlsZCgyKSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNvbnRhaW5lciAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG4gIG1hcmdpbjogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuLmNvbnRhaW5lciAuYnRueiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5idG56IGlvbi1idXR0b24ge1xuICB3aWR0aDogOTUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMjQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5jb250YWluZXIgLmRldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRhaW5lciAucGFnZW5hbWUge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbn1cbi5jb250YWluZXIgLmJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uY29udGFpbmVyIC5idG4gLmxpbmUge1xuICB3aWR0aDogMjB2dztcbiAgaGVpZ2h0OiAxLjVweDtcbiAgYmFja2dyb3VuZDogZ3JleTtcbn1cbi5jb250YWluZXIgLmJ0biBpb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMzB2dztcbn1cbi5jb250YWluZXIgLmRlbGl2ZXJ5IHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjYjhiOGI4O1xufVxuLmNvbnRhaW5lciAuZGVsaXZlcnkgaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cbi5jb250YWluZXIgLmRlbGl2ZXJ5LWluYWN0aXZlIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvcGFjaXR5OiAwLjU7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG4uY29udGFpbmVyIC5kZWxpdmVyeS1pbmFjdGl2ZSBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgYmFja2dyb3VuZDogI2JmOTY3ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY29udGFpbmVyIC5jb2xsZWN0aW9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjYjhiOGI4O1xufVxuLmNvbnRhaW5lciAuY29sbGVjdGlvbiBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgYmFja2dyb3VuZDogI2JmOTY3ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY29udGFpbmVyIC5jb2xsZWN0aW9uLWluYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvcGFjaXR5OiAwLjU7XG59XG4uY29udGFpbmVyIC5jb2xsZWN0aW9uLWluYWN0aXZlIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBiYWNrZ3JvdW5kOiAjYmY5NjdlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let PaymentPage = class PaymentPage {
    constructor(route, router, navCtrl, alertController, alertCtrl) {
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
        this.route.queryParams.subscribe(params => {
            this.doc_data = params["data"];
            //this.col = params["col"];
        });
    }
    ngOnInit() {
        this.dbOrder.doc(this.doc_id).onSnapshot((res) => {
            this.myOrder.push(res.data());
            this.refNo = res.id;
        });
        // console.log('My order is', this.myOrder);
    }
    getTotal() {
        let total = 0;
        for (let i = 0; i < this.myOrder.length; i++) {
            let product = this.myOrder[i].totalPrice;
            total = product + this.delCost;
            // console.log(product);
            /*   product.forEach((item)=>{
                total += (item.cost * item.quantity);
             })  */
            //
        }
        //console.log('My tot ', total);
        return total;
    }
    Delivery() {
        this.myOrder = [];
        this.delCost = 100;
        this.dbProfile.doc(this.uid).onSnapshot((res) => {
            if (res.data().address === '') {
                //this.navCtrl.navigateForward('')
                this.presentAlertConfirm();
            }
            else {
                this.dbOrder.doc(this.doc_id).update({ deliveryType: "Collection", deliveryCost: this.delCost });
            }
        });
    }
    notDelivery() {
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
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Address missing',
                message: 'Please setup your physical address',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this.navCtrl.navigateForward('profile');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev);
    }
    goHome() {
        // this.router.navigateByUrl('home');
        if (this.delCost === undefined) {
            this.presentAlert();
            //console.log("My del cost is undefined");
        }
        else {
            this.navCtrl.navigateRoot('home');
        }
        // this.navCtrl.navigateRoot('home');
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Delivery',
                // subHeader: 'Subtitle',
                message: 'Please select delivery type',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    switchView(state) {
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
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.page.scss */ "./src/app/payment/payment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=19-es2015.js.map