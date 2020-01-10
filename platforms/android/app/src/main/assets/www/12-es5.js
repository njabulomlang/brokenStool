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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/basket/basket.page.html": 
        /*!*******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basket/basket.page.html ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\" goback()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" id=\"icon\"></ion-icon>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"secondary\" (click)=\"wishlist()\">\r\n        <ion-icon slot=\"icon-only\" name=\"heart\" id=\"icon\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n    <div [ngClass]=\"{'loader': loaderAnimate, 'loader-hide': !loaderAnimate}\">\r\n        <div class=\"maploader\">\r\n            <div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div><p style=\"color:white; text-align: center;\">{{loaderMessages}}</p>\r\n        </div>\r\n       <!--  <div class=\"loading-text\">\r\n          <p>Loading Map</p>\r\n        </div> -->\r\n      </div>\r\n  <div class=\"container\">\r\n    <div class=\"pagename\" style=\"margin: 10px; font-family: 'Raleway';\">\r\n      <h1>BASKET ({{cartCount}})</h1>\r\n    </div>\r\n\r\n    <p style=\"font-family: 'Raleway'; margin: 5px; font-size: 3.5vw\">Please note that delivery to your door is R100</p>\r\n\r\n    <div class=\"cards\">\r\n      <div class=\"card\" *ngFor=\"let cp of prodCart; let i of index\">\r\n        <div class=\"image\" *ngFor=\"let prod of cp.data.product\">\r\n          <img src=\"{{prod.picture}}\">\r\n        </div>\r\n        <div class=\"details\" *ngFor=\"let prod of cp.data.product\">\r\n          <div class=\"left\">\r\n            <p id=\"item\" style=\"font-size:3vw\">{{prod.product_name}}</p>\r\n            <p>Size: {{prod.size}} &nbsp; Color: {{prod.color}}</p>\r\n            <p>{{cp.data.timestamp | date: \"mediumDate\"}}</p>\r\n            <p style=\"font-size: 1em; margin: 5px; display: flex; flex-flow: row; align-items: baseline;\">\r\n              <ion-icon name=\"remove-circle-outline\" (click)=\"minus(prod, i)\"></ion-icon>&nbsp; {{prod.quantity}} &nbsp;\r\n              <ion-icon name=\"add-circle-outline\" (click)=\"plus(prod, i)\">\r\n              </ion-icon>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"right\">\r\n            <p>{{prod.cost*prod.quantity | currency:'R'}}</p>\r\n            <P (click)=\"removeProd(cp.id)\">\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n            </P>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"card\" id=\"msg\" *ngIf=\"prodCart.length==0\">\r\n        <p> Oh no! Your Basket is empty</p>\r\n        <img src=\"../../assets/empty-cart.svg\">\r\n\r\n      </div>\r\n\r\n      <!--  <div class=\"card\">\r\n        <div class=\"image\">\r\n          <img src=\"https://i.pinimg.com/564x/a3/a1/8b/a3a18b4c3a78b3187d70b456cc09ad7e.jpg\">\r\n        </div>\r\n        <div class=\"details\">\r\n          <div class=\"left\">\r\n            <p id=\"item\">Dankie Jesu Sweater</p>\r\n            <p>Size: XS</p>\r\n            <p>12 November 2019</p>\r\n            <p style=\"font-size: 4vw; margin: 5px; display: flex; flex-flow: row; align-items: flex-start;\">\r\n              <ion-icon name=\"remove-circle-outline\"></ion-icon>&nbsp; 2 &nbsp;<ion-icon name=\"add-circle-outline\">\r\n              </ion-icon>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"right\">\r\n            <p>R350</p>\r\n            <P>\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n            </P>\r\n          </div>\r\n\r\n        </div>\r\n      </div> -->\r\n\r\n    </div>\r\n\r\n    <div class=\"total\">\r\n      <div class=\"carttotal\">\r\n        <p>TOTAL</p>\r\n        <p>{{getTotal() | currency:'R'}}</p>\r\n      </div>\r\n\r\n      <div class=\"btn\">\r\n        <ion-button [disabled]=\"prodCart.length==0\" (click)=\"placeOrder(prodCart)\" color=\"transparent\">\r\n          PLACE ORDER\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/basket/basket-routing.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/basket/basket-routing.module.ts ***!
          \*************************************************/
        /*! exports provided: BasketPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPageRoutingModule", function () { return BasketPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
                return BasketPageRoutingModule;
            }());
            BasketPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], BasketPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/basket/basket.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/basket/basket.module.ts ***!
          \*****************************************/
        /*! exports provided: BasketPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPageModule", function () { return BasketPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _basket_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basket-routing.module */ "./src/app/basket/basket-routing.module.ts");
            /* harmony import */ var _basket_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basket.page */ "./src/app/basket/basket.page.ts");
            var BasketPageModule = /** @class */ (function () {
                function BasketPageModule() {
                }
                return BasketPageModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/basket/basket.page.scss": 
        /*!*****************************************!*\
          !*** ./src/app/basket/basket.page.scss ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n  font-family: \"Raleway\";\n}\nion-toolbar #icon {\n  color: maroon;\n}\n.container {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  height: 100%;\n}\n.container .cards {\n  display: flex;\n  flex-flow: column;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow-y: auto;\n  height: 85vh;\n  overflow-y: auto;\n}\n.container .cards .card {\n  display: flex;\n  flex-flow: row;\n  box-shadow: 5px 5px 10px lightgray;\n  margin: 5px;\n  min-height: 28vw;\n}\n.container .cards .card .image {\n  width: 45vw;\n  min-height: 25vw;\n  max-height: 28vw;\n  margin: 10px;\n}\n.container .cards .card .image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.container .cards .card .details {\n  display: flex;\n  flex-flow: row;\n  width: 100%;\n  padding: 5px;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.container .cards .card .details .left {\n  margin: 10px;\n}\n.container .cards .card .details .left p {\n  font-size: 3vw;\n  align-items: baseline;\n  padding: 0;\n  margin: 4px 0px;\n}\n.container .cards .card .details .left p ion-icon {\n  font-size: 5vw;\n}\n.container .cards .card .details .left #item {\n  font-weight: bold;\n  letter-spacing: 1px;\n  font-size: 4vw;\n}\n.container .cards .card .details .right {\n  margin: 5px;\n  text-align: right;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n}\n.container .cards .card .details .right p {\n  font-size: 4vw;\n}\n.container .cards .card .details .right p ion-icon {\n  font-weight: lighter;\n  font-size: 6vw;\n  color: maroon;\n  margin-top: 30px;\n}\n.container .cards #msg {\n  display: flex;\n  flex-flow: column;\n  position: absolute;\n  align-items: center;\n  justify-content: space-evenly;\n  top: 30%;\n  width: 95vw;\n  margin: 10px;\n  font-family: \"Poppins\";\n  box-shadow: none !important;\n}\n.container .cards #msg img {\n  width: 50vw;\n  height: 50vw;\n}\n.container .cards #msg p {\n  color: #c6cbdb;\n  font-size: 5vw;\n}\n.container .total {\n  position: fixed;\n  bottom: 0;\n  background: white;\n  display: flex;\n  flex-flow: column;\n}\n.container .total .carttotal {\n  display: flex;\n  flex-flow: row;\n  width: 100vw;\n  padding: 5px;\n  justify-content: space-between;\n}\n.container .total .carttotal p {\n  font-family: \"Raleway\";\n  font-size: 3.5vw;\n}\n.container .total .btn ion-button {\n  color: white;\n  background: #00003b;\n  width: 99%;\n  padding: 5px;\n  font-family: \"Raleway\";\n  letter-spacing: 2px;\n  font-size: 3vw;\n}\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite;\n}\n.loader .maploader .lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.loader .maploader .lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.loader .maploader .lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n.loader .maploader .lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader .maploader .lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader .maploader .lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n.loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto;\n}\n.loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.loader-hide .maploader .lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.loader-hide .maploader .lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n@-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f;\n  }\n  50% {\n    border-color: #2a324b;\n  }\n  100% {\n    border-color: #fab62b;\n  }\n}\n@keyframes maploader {\n  0% {\n    border-color: #b6465f;\n  }\n  50% {\n    border-color: #2a324b;\n  }\n  100% {\n    border-color: #fab62b;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0L0M6XFxVc2Vyc1xcemFuZWxcXERvY3VtZW50c1xcYnJva2VuU3Rvb2wvc3JjXFxhcHBcXGJhc2tldFxcYmFza2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYmFza2V0L2Jhc2tldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUlBLHNCQUFBO0FDRkY7QURERTtFQUNFLGFBQUE7QUNHSjtBREVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0VOO0FERE07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNHUjtBREZRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDSVY7QURBTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDRVI7QURBUTtFQUNFLFlBQUE7QUNFVjtBREFVO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNFWjtBRERZO0VBQ0UsY0FBQTtBQ0dkO0FEQ1U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NaO0FER1E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ0RWO0FERVU7RUFDRSxjQUFBO0FDQVo7QURFWTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0FkO0FET0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDTE47QURNTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSlI7QURNTTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDSlI7QURTRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNQSjtBRFNJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDUE47QURRTTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFdNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1RSO0FEY0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUNYRjtBRGFJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWE47QURhSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7QUNYTjtBRGFJO0VBQ0UsU0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNYTjtBRGFJO0VBQ0UsU0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNYTjtBRGFJO0VBQ0UsVUFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNYTjtBRGFJO0VBQ0UsVUFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNYTjtBRGFJO0VBQ0U7SUFDRSxtQkFBQTtFQ1hOO0VEYUk7SUFDRSxtQkFBQTtFQ1hOO0FBQ0Y7QURLSTtFQUNFO0lBQ0UsbUJBQUE7RUNYTjtFRGFJO0lBQ0UsbUJBQUE7RUNYTjtBQUNGO0FEYUk7RUFDRTtJQUNFLG1CQUFBO0VDWE47RURhSTtJQUNFLG1CQUFBO0VDWE47QUFDRjtBREtJO0VBQ0U7SUFDRSxtQkFBQTtFQ1hOO0VEYUk7SUFDRSxtQkFBQTtFQ1hOO0FBQ0Y7QURhSTtFQUNFO0lBQ0UsMEJBQUE7RUNYTjtFRGFJO0lBQ0UsNkJBQUE7RUNYTjtBQUNGO0FES0k7RUFDRTtJQUNFLDBCQUFBO0VDWE47RURhSTtJQUNFLDZCQUFBO0VDWE47QUFDRjtBRGVBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFFQSxZQUFBO0FDZkY7QURpQkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBQ2RGO0FEZ0JJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZE47QURnQkk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FDZE47QURnQkk7RUFDRSxTQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ2ROO0FEZ0JJO0VBQ0UsU0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNkTjtBRGdCSTtFQUNFLFVBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDZE47QURnQkk7RUFDRSxVQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ2ROO0FEZ0JJO0VBQ0U7SUFDRSxtQkFBQTtFQ2ROO0VEZ0JJO0lBQ0UsbUJBQUE7RUNkTjtBQUNGO0FEZ0JJO0VBQ0U7SUFDRSxtQkFBQTtFQ2ROO0VEZ0JJO0lBQ0UsbUJBQUE7RUNkTjtBQUNGO0FEZ0JJO0VBQ0U7SUFDRSwwQkFBQTtFQ2ROO0VEZ0JJO0lBQ0UsNkJBQUE7RUNkTjtBQUNGO0FEa0JBO0VBQ0U7SUFFRSxxQkFBQTtFQ2hCRjtFRG1CQTtJQUdFLHFCQUFBO0VDbkJGO0VEcUJBO0lBQ0UscUJBQUE7RUNuQkY7QUFDRjtBRE1BO0VBQ0U7SUFFRSxxQkFBQTtFQ2hCRjtFRG1CQTtJQUdFLHFCQUFBO0VDbkJGO0VEcUJBO0lBQ0UscUJBQUE7RUNuQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jhc2tldC9iYXNrZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgI2ljb24ge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICB9XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmNhcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC5jYXJkIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMjExLCAyMTEsIDIxMSk7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiAyOHZ3O1xyXG4gICAgICAuaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1dnc7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjh2dztcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDRweCAwcHg7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNpdGVtIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICAgICAgICAgICAgY29sb3I6IG1hcm9vbjtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI21zZyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICB0b3A6IDMwJTtcclxuICAgICAgd2lkdGg6IDk1dnc7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHZ3O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjYzZjYmRiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG90YWwge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gICAgLmNhcnR0b3RhbCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjV2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDU5KTtcclxuICAgICAgICB3aWR0aDogOTklO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjcsIDYzKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZG1vdmVyIDMwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLm1hcGxvYWRlciB7XHJcbiAgICAubGRzLWVsbGlwc2lzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzM3B4O1xyXG4gICAgICB3aWR0aDogMTNweDtcclxuICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbGVmdDogMzJweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgICBsZWZ0OiA1NnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGluZy10ZXh0IHtcclxuICAvLyBjb2xvcjogeWVsbG93O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwdmg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZDogcmVkO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICAvL3otaW5kZXg6IDkwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ubG9hZGVyLWhpZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICAubWFwbG9hZGVyIHtcclxuICAgIC5sZHMtZWxsaXBzaXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbWFwbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4MiwgNzAsIDk1KTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE5MiwgMTkyKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMDYsIDIwNiwgMjU1KTtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MiwgNTAsIDc1KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTAsIDE4MiwgNDMpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTY3LCAxNjcpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XG59XG5pb24tdG9vbGJhciAjaWNvbiB7XG4gIGNvbG9yOiBtYXJvb247XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIgLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogODV2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5jb250YWluZXIgLmNhcmRzIC5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBsaWdodGdyYXk7XG4gIG1hcmdpbjogNXB4O1xuICBtaW4taGVpZ2h0OiAyOHZ3O1xufVxuLmNvbnRhaW5lciAuY2FyZHMgLmNhcmQgLmltYWdlIHtcbiAgd2lkdGg6IDQ1dnc7XG4gIG1pbi1oZWlnaHQ6IDI1dnc7XG4gIG1heC1oZWlnaHQ6IDI4dnc7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5jb250YWluZXIgLmNhcmRzIC5jYXJkIC5pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5jb250YWluZXIgLmNhcmRzIC5jYXJkIC5kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmNvbnRhaW5lciAuY2FyZHMgLmNhcmQgLmRldGFpbHMgLmxlZnQge1xuICBtYXJnaW46IDEwcHg7XG59XG4uY29udGFpbmVyIC5jYXJkcyAuY2FyZCAuZGV0YWlscyAubGVmdCBwIHtcbiAgZm9udC1zaXplOiAzdnc7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiA0cHggMHB4O1xufVxuLmNvbnRhaW5lciAuY2FyZHMgLmNhcmQgLmRldGFpbHMgLmxlZnQgcCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNXZ3O1xufVxuLmNvbnRhaW5lciAuY2FyZHMgLmNhcmQgLmRldGFpbHMgLmxlZnQgI2l0ZW0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiA0dnc7XG59XG4uY29udGFpbmVyIC5jYXJkcyAuY2FyZCAuZGV0YWlscyAucmlnaHQge1xuICBtYXJnaW46IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29udGFpbmVyIC5jYXJkcyAuY2FyZCAuZGV0YWlscyAucmlnaHQgcCB7XG4gIGZvbnQtc2l6ZTogNHZ3O1xufVxuLmNvbnRhaW5lciAuY2FyZHMgLmNhcmQgLmRldGFpbHMgLnJpZ2h0IHAgaW9uLWljb24ge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiA2dnc7XG4gIGNvbG9yOiBtYXJvb247XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uY29udGFpbmVyIC5jYXJkcyAjbXNnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHRvcDogMzAlO1xuICB3aWR0aDogOTV2dztcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmNhcmRzICNtc2cgaW1nIHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNTB2dztcbn1cbi5jb250YWluZXIgLmNhcmRzICNtc2cgcCB7XG4gIGNvbG9yOiAjYzZjYmRiO1xuICBmb250LXNpemU6IDV2dztcbn1cbi5jb250YWluZXIgLnRvdGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cbi5jb250YWluZXIgLnRvdGFsIC5jYXJ0dG90YWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgd2lkdGg6IDEwMHZ3O1xuICBwYWRkaW5nOiA1cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb250YWluZXIgLnRvdGFsIC5jYXJ0dG90YWwgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgZm9udC1zaXplOiAzLjV2dztcbn1cbi5jb250YWluZXIgLnRvdGFsIC5idG4gaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwMDAzYjtcbiAgd2lkdGg6IDk5JTtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogM3Z3O1xufVxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDFiM2Y7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xuICBhbmltYXRpb246IGJhY2tncm91bmRtb3ZlciAzMHMgbGluZWFyIGluZmluaXRlO1xufVxuLmxvYWRlciAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5sb2FkZXIgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzM3B4O1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcbn1cbi5sb2FkZXIgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xufVxuLmxvYWRlciAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDhweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG59XG4ubG9hZGVyIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogMzJweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG59XG4ubG9hZGVyIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNTZweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XG4gIH1cbn1cblxuLmxvYWRpbmctdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHZoO1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDUwdmg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvYWRlci1oaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDIwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzNweDtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XG59XG4ubG9hZGVyLWhpZGUgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogOHB4O1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbn1cbi5sb2FkZXItaGlkZSAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDMycHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNTZweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtYXBsb2FkZXIge1xuICAwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYjY0NjVmO1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmEzMjRiO1xuICB9XG4gIDEwMCUge1xuICAgIGJvcmRlci1jb2xvcjogI2ZhYjYyYjtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/basket/basket.page.ts": 
        /*!***************************************!*\
          !*** ./src/app/basket/basket.page.ts ***!
          \***************************************/
        /*! exports provided: BasketPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPage", function () { return BasketPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
                        return __generator(this, function (_a) {
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
                        return __generator(this, function (_a) {
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
                return BasketPage;
            }());
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
            /***/ 
        })
    }]);
//# sourceMappingURL=12-es2015.js.map
//# sourceMappingURL=12-es5.js.map
//# sourceMappingURL=12-es5.js.map