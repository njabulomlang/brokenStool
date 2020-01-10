var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/receipts/receipts.page.html": 
        /*!***********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/receipts/receipts.page.html ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" id=\"icon\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Order History</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"cards\" *ngFor=\"let order of myOrder\">\r\n      <div class=\"card\" *ngFor=\"let o of order.orders\">\r\n\r\n        <div class=\"image\">\r\n          <img src=\"{{o.picture}}\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"right\">\r\n          <div class=\"title\">\r\n            <p>{{o.product_name}}</p>\r\n          </div>\r\n\r\n          <div class=\"costs\">\r\n            <p><i>QTY {{o.quantity}}</i> <br> {{o.cost | currency:'R'}} <br> Size: {{o.size}} <br><br> </p>\r\n          </div>\r\n\r\n          <div class=\"status\">\r\n            <!-- <p>DELIVERY STATUS <br> <span><i>Order Delivered</i></span></p> -->\r\n            \r\n            <!-- <p>DELIVERY STATUS <br> <span><i>Order awaiting collection</i></span></p> -->\r\n            <!-- <p>DELIVERY STATUS <br> <span><i>Order Coolected</i></span></p> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <!--   <p>{{order.refNo}}</p>\r\n      <p>ORDER STATUS <br> <span><i>{{order.status}}</i></span></p> -->\r\n      <!-- <div class=\"card\">\r\n\r\n          <div class=\"image\">\r\n            <img src=\"https://i.pinimg.com/564x/07/45/93/074593d46c161650bf2bc30d7922f15c.jpg\" alt=\"\">\r\n          </div>\r\n  \r\n          <div class=\"right\">\r\n            <div class=\"title\">\r\n              <p>Formal White</p>\r\n            </div>\r\n  \r\n            <div class=\"costs\">\r\n              <p><i>QTY. 1</i> <br> R1200 <br> Size: XS <br><br> SDE098765</p>\r\n            </div>\r\n  \r\n            <div class=\"status\">\r\n              <p>DELIVERY STATUS <br> <span><i>Order awaiting delivery</i></span></p>\r\n  \r\n            </div>\r\n  \r\n          </div>\r\n  \r\n        </div> -->\r\n\r\n      <div class=\"line\"></div>\r\n      <!-- <div *ngFor=\"let o of order.orders\"> -->\r\n        <div class=\"receipt\">\r\n          <h1>Your Receipt</h1>\r\n        </div>\r\n\r\n        <div class=\"name\">\r\n          <p>{{userProfile.name}} {{userProfile.surname}} <br> <span>{{userProfile.cellno}}</span></p>\r\n        </div>\r\n\r\n        <div class=\"ref\">\r\n          <p>REF NO: <span><i>{{order.refNo}}</i></span></p>\r\n        </div>\r\n\r\n        <div class=\"cart\">\r\n          <p><b>Date of Puchase: </b><i>{{order.timestamp | date:\"medium\"}}</i> <br>\r\n            <b>Items</b></p>\r\n        </div>\r\n\r\n        <div class=\"table\">\r\n          <div class=\"list\" *ngFor=\"let o of order.orders\">\r\n            <p style=\"width: 40vw\">{{o.product_name}}</p>\r\n            <p>{{o.quantity}}</p>\r\n          </div>\r\n\r\n\r\n          <br>\r\n          <div class=\"total\">\r\n            <p style=\"width: 40vw\"><b>Total Quantity</b></p>\r\n            <p>{{getQuantity()}}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grand\">\r\n          <p>Grand Total</p>\r\n          <p>{{getTotal() | currency:'R'}}</p>\r\n        </div>\r\n        <div class=\"ordertype\">\r\n          <p>Order Type</p>\r\n          <p id=\"del\"><i>{{order.deliveryType}}</i></p>\r\n        </div>\r\n\r\n        <div class=\"address\">\r\n          <p>Order Address <br> <span>{{userProfile.address}}</span></p>\r\n\r\n        </div>\r\n\r\n        <div class=\"status\">\r\n          <p>Order Status: &nbsp; <i>{{order.status}}</i></p>\r\n        </div>\r\n      <!-- </div> -->\r\n\r\n      <div class=\"buttonz\">\r\n        <ion-button (click)=\" downloadPDF(order.reciept)\" color=\"transparent\">\r\n          DOWNLOAD COPY\r\n        </ion-button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/receipts/receipts-routing.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/receipts/receipts-routing.module.ts ***!
          \*****************************************************/
        /*! exports provided: ReceiptsPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPageRoutingModule", function () { return ReceiptsPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
                return ReceiptsPageRoutingModule;
            }());
            ReceiptsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], ReceiptsPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/receipts/receipts.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/receipts/receipts.module.ts ***!
          \*********************************************/
        /*! exports provided: ReceiptsPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPageModule", function () { return ReceiptsPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _receipts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receipts-routing.module */ "./src/app/receipts/receipts-routing.module.ts");
            /* harmony import */ var _receipts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receipts.page */ "./src/app/receipts/receipts.page.ts");
            var ReceiptsPageModule = /** @class */ (function () {
                function ReceiptsPageModule() {
                }
                return ReceiptsPageModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/receipts/receipts.page.scss": 
        /*!*********************************************!*\
          !*** ./src/app/receipts/receipts.page.scss ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n  font-family: \"Poppins\";\n}\nion-toolbar #icon {\n  color: maroon;\n}\n.container {\n  display: flex;\n  flex-flow: column;\n}\n.cards {\n  display: flex;\n  flex-flow: column;\n  padding: 5px;\n  margin: 10px;\n  box-shadow: 5px 5px 10px #bebebe;\n}\n.cards .card {\n  display: flex;\n  flex-flow: row;\n  width: 95vw;\n  margin: 5px;\n  border-radius: 5px;\n}\n.cards .card .image {\n  width: 25vw;\n  height: 25vw;\n  margin: 10px;\n  border-radius: 8px;\n}\n.cards .card .image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n}\n.cards .card .right {\n  width: 70vw;\n}\n.cards .card .right .title {\n  margin-top: -10px;\n}\n.cards .card .right .title p {\n  font-family: \"Poppins\";\n  font-weight: bold;\n}\n.cards .card .right .costs p {\n  font-size: 0.8em;\n  margin-top: -10px;\n}\n.cards .card .right .status p {\n  font-family: \"Poppins\";\n  font-size: 4vw;\n  font-weight: bold;\n}\n.cards .card .right .status p span {\n  font-size: 3vw;\n  font-weight: normal;\n}\n.cards .line {\n  width: 82vw;\n  height: 2px;\n  background: grey;\n  position: relative;\n  left: 5%;\n}\n.receipt {\n  margin: 10px;\n  margin-top: -10px;\n}\n.receipt h1 {\n  font-family: \"Poppins\";\n  color: grey;\n}\n.name {\n  margin: 10px;\n  margin-top: -15px;\n}\n.name p {\n  font-family: \"Poppins\";\n  color: grey;\n  font-size: 0.9em;\n}\n.name p span {\n  font-size: 0.8em;\n}\n.ref {\n  margin: 10px;\n  margin-top: -15px;\n}\n.ref p {\n  font-family: \"Poppins\";\n  color: grey;\n  font-size: 0.8em;\n  font-weight: bold;\n}\n.ref p span {\n  font-weight: normal;\n}\n.cart {\n  margin: 10px;\n  margin-top: -15px;\n}\n.cart p {\n  font-family: \"Poppins\";\n  color: grey;\n  font-size: 0.8em;\n}\n.table {\n  margin: 10px;\n  margin-top: -30px;\n  display: flex;\n  flex-flow: column;\n}\n.table .list {\n  margin: 5px;\n  display: flex;\n  flex-flow: row;\n  width: 40vw;\n  line-height: 2px;\n  justify-content: space-between;\n}\n.table .list p {\n  font-family: \"Poppins\";\n  color: grey;\n  font-size: 0.8em;\n}\n.table .total {\n  margin-top: -30px;\n  display: flex;\n  flex-flow: row;\n  width: 40vw;\n  justify-content: space-between;\n}\n.table .total p {\n  font-family: \"Poppins\";\n  color: grey;\n  font-size: 0.8em;\n  font-weight: bold;\n}\n.grand {\n  margin: 10px;\n  margin-top: -20px;\n  display: flex;\n  flex-flow: row;\n  width: 50vw;\n  justify-content: space-between;\n}\n.grand p {\n  font-family: \"Poppins\";\n  color: grey;\n  font-size: 0.8em;\n  font-weight: bold;\n}\n.ordertype {\n  margin: 10px;\n  margin-top: -35px;\n  display: flex;\n  flex-flow: row;\n  width: 50vw;\n  justify-content: space-between;\n}\n.ordertype #del {\n  font-weight: normal;\n}\n.ordertype p {\n  font-family: \"Poppins\";\n  color: grey;\n  font-size: 0.8em;\n  font-weight: bold;\n}\n.address {\n  margin: 10px;\n  margin-top: -10px;\n  display: flex;\n  flex-flow: column;\n}\n.address p {\n  font-family: \"Poppins\";\n  color: grey;\n  font-size: 0.8em;\n  font-weight: bold;\n}\n.address p span {\n  font-weight: normal;\n}\n.status {\n  margin: 10px;\n  margin-top: -10px;\n}\n.status p {\n  font-family: \"Poppins\";\n  color: grey;\n  font-size: 0.9em;\n}\n.buttonz {\n  width: 100%;\n}\n.buttonz ion-button {\n  background: #000030;\n  font-size: 0.8em;\n  width: 80vw;\n  position: relative;\n  left: 5%;\n  font-family: \"Poppins\";\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWlwdHMvQzpcXFVzZXJzXFx6YW5lbFxcRG9jdW1lbnRzXFxicm9rZW5TdG9vbC9zcmNcXGFwcFxccmVjZWlwdHNcXHJlY2VpcHRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVjZWlwdHMvcmVjZWlwdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUo7QURFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0NGO0FERUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBQ0NKO0FEQUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VOO0FEQU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERUk7RUFDRSxXQUFBO0FDQU47QURFTTtFQUNFLGlCQUFBO0FDQVI7QURDUTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUNDVjtBRElRO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0ZWO0FET1E7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0xWO0FETVU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNKWjtBRFdFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ1RKO0FEYUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNWRjtBRFdFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FDVEo7QURhQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ1ZGO0FEV0U7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEVUk7RUFDRSxnQkFBQTtBQ1JOO0FEYUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNWRjtBRFdFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1RKO0FEVUk7RUFDRSxtQkFBQTtBQ1JOO0FEYUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNWRjtBRFdFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRGFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDVkY7QURZRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDVko7QURXSTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDVE47QURhRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUNYSjtBRFlJO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1ZOO0FEZUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQ1pGO0FEYUU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDWEo7QURlQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDWkY7QURjRTtFQUNFLG1CQUFBO0FDWko7QURjRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNaSjtBRGdCQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ2JGO0FEY0U7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDWko7QURhSTtFQUNFLG1CQUFBO0FDWE47QURnQkE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNiRjtBRGNFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNaSjtBRGdCQTtFQUNFLFdBQUE7QUNiRjtBRGNFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9yZWNlaXB0cy9yZWNlaXB0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgI2ljb24ge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgLmNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgd2lkdGg6IDk1dnc7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIC8vIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogMjV2dztcclxuICAgICAgaGVpZ2h0OiAyNXZ3O1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIHdpZHRoOiA3MHZ3O1xyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvc3RzIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saW5lIHtcclxuICAgIHdpZHRoOiA4MnZ3O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVjZWlwdCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxufVxyXG5cclxuLm5hbWUge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJlZiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJ0IHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgcCB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICAubGlzdCB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDJweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHAge1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRvdGFsIHtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JhbmQge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuLm9yZGVydHlwZSB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0zNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAjZGVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkcmVzcyB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgcCB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbnoge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDQ4KTtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG5pb24tdG9vbGJhciAjaWNvbiB7XG4gIGNvbG9yOiBtYXJvb247XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cblxuLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggI2JlYmViZTtcbn1cbi5jYXJkcyAuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICB3aWR0aDogOTV2dztcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jYXJkcyAuY2FyZCAuaW1hZ2Uge1xuICB3aWR0aDogMjV2dztcbiAgaGVpZ2h0OiAyNXZ3O1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5jYXJkcyAuY2FyZCAuaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5jYXJkcyAuY2FyZCAucmlnaHQge1xuICB3aWR0aDogNzB2dztcbn1cbi5jYXJkcyAuY2FyZCAucmlnaHQgLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG4uY2FyZHMgLmNhcmQgLnJpZ2h0IC50aXRsZSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJkcyAuY2FyZCAucmlnaHQgLmNvc3RzIHAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5jYXJkcyAuY2FyZCAucmlnaHQgLnN0YXR1cyBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IDR2dztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FyZHMgLmNhcmQgLnJpZ2h0IC5zdGF0dXMgcCBzcGFuIHtcbiAgZm9udC1zaXplOiAzdnc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uY2FyZHMgLmxpbmUge1xuICB3aWR0aDogODJ2dztcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNSU7XG59XG5cbi5yZWNlaXB0IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5yZWNlaXB0IGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogZ3JleTtcbn1cblxuLm5hbWUge1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuLm5hbWUgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG4ubmFtZSBwIHNwYW4ge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4ucmVmIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cbi5yZWYgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJlZiBwIHNwYW4ge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uY2FydCB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG4uY2FydCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLnRhYmxlIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG4udGFibGUgLmxpc3Qge1xuICBtYXJnaW46IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIHdpZHRoOiA0MHZ3O1xuICBsaW5lLWhlaWdodDogMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udGFibGUgLmxpc3QgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4udGFibGUgLnRvdGFsIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICB3aWR0aDogNDB2dztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnRhYmxlIC50b3RhbCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ncmFuZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICB3aWR0aDogNTB2dztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmdyYW5kIHAge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9yZGVydHlwZSB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogLTM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICB3aWR0aDogNTB2dztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm9yZGVydHlwZSAjZGVsIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5vcmRlcnR5cGUgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWRkcmVzcyB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuLmFkZHJlc3MgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFkZHJlc3MgcCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnN0YXR1cyB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG4uc3RhdHVzIHAge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uYnV0dG9ueiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbnogaW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMzA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHdpZHRoOiA4MHZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/receipts/receipts.page.ts": 
        /*!*******************************************!*\
          !*** ./src/app/receipts/receipts.page.ts ***!
          \*******************************************/
        /*! exports provided: ReceiptsPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPage", function () { return ReceiptsPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
                        return __generator(this, function (_a) {
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
                return ReceiptsPage;
            }());
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
            /***/ 
        })
    }]);
//# sourceMappingURL=22-es2015.js.map
//# sourceMappingURL=22-es5.js.map
//# sourceMappingURL=22-es5.js.map