(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button id=\"icon\" (click)=\"search('Dankie Jesu')\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\" ></ion-icon>\r\n      </ion-button>\r\n      <ion-button id=\"icon\" (click)=\"wishlist()\">\r\n        <ion-icon slot=\"icon-only\" name=\"heart\" ></ion-icon>\r\n        <p id=\"number\">{{myWish}}</p>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"profile()\" id=\"icon\">\r\n        <ion-icon slot=\"icon-only\" name=\"person\" ></ion-icon>\r\n        \r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>DankieJesu</ion-title>\r\n  </ion-toolbar>\r\n  <!-- <ion-toolbar color=\"primary\">\r\n    <ion-button (click)=\"logout()\" slot=\"end\">Logout</ion-button>\r\n    <ion-title>\r\n      Broken Stool\r\n    </ion-title>\r\n  </ion-toolbar> -->\r\n</ion-header>\r\n\r\n\r\n<ion-content fullscreen>\r\n    <p style=\"margin: 5px ; font-family: 'Raleway'\">Welcome <i>{{name}} {{surname}}</i></p>\r\n\r\n    <div [ngClass]=\"{'loader': loaderAnimate, 'loader-hide': !loaderAnimate}\">\r\n        <div class=\"maploader\">\r\n            <div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div><p style=\"color:white; text-align: center;\">{{loaderMessages}}</p>\r\n        </div>\r\n       <!--  <div class=\"loading-text\">\r\n          <p>Loading Map</p>\r\n        </div> -->\r\n      </div>\r\n  \r\n  <div class=\"container\" no-padding>\r\n    <div class=\"sales\" >\r\n      <ion-item (click)=\"goList('sales')\">\r\n        <label>Sales & Specials</label>\r\n        <label slot=\"end\">All <ion-icon slot=\"start\" name=\"arrow-forward\"></ion-icon></label>\r\n      </ion-item>\r\n\r\n      <div class=\"saleitems\">\r\n\r\n        <div class=\"image\" *ngFor=\"let s of sales\">\r\n          <img src=\"{{s.data.pictureLink}}\" (click)=\"viewitem(s.id,s.data)\">\r\n\r\n          <div class=\"percentage\">\r\n            <p>{{s.data.discount}}% OFF</p>\r\n          </div>\r\n          <div class=\"itemname\">\r\n            <p>{{s.data.name}}<br> <span>by {{s.data.brand}}</span></p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"saleitems\" id=\"defSale\" *ngIf= \"sales.length === 0\">\r\n\r\n        <div class=\"image\">\r\n          <img src=\"https://i.pinimg.com/564x/7a/1c/b7/7a1cb7327a150b3441defdd37b7c3605.jpg\" >\r\n\r\n      \r\n          <div class=\"itemname\">\r\n            <p>SALES AND PROMOTIONS</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n   \r\n    </div>\r\n\r\n    <div class=\"buttonz\">\r\n      <ion-button expand=\"full\" color=\"transparent\" (click)=\"categories('summer')\">\r\n        <span>Summer Gear <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n      </ion-button>\r\n      <ion-button expand=\"full\" color=\"transparent\" style=\"border-top: none !important;\" (click)=\"categories('winter')\">\r\n          <span>Winter Gear <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n        </ion-button>\r\n    </div>\r\n\r\n    <div class=\"Kwanga\">\r\n        <ion-item (click)=\"categories('kwanga')\">\r\n          <label>kwanga Apparel</label>\r\n          <label slot=\"end\">All <ion-icon slot=\"start\" name=\"arrow-forward\" ></ion-icon></label>\r\n        </ion-item>\r\n  \r\n        <div class=\"apparel\">\r\n  \r\n          <div class=\"image\" >\r\n            <img src=\"https://i.pinimg.com/564x/32/fb/62/32fb6222fbeffad7edf7f98fce091ce2.jpg\" (click)=\"list('Casual')\">\r\n  \r\n            <div class=\"itemname\">\r\n              <p>Smart Casual</p>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"image\" >\r\n            <img src=\"https://i.pinimg.com/564x/83/bc/9e/83bc9e4b29401a6c984ee23cf530ced9.jpg\" (click)=\"list('Formal')\">\r\n  \r\n          \r\n            <div class=\"itemname\">\r\n              <p>Formal</p>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"image\">\r\n            <img src=\"https://i.pinimg.com/564x/81/a4/8d/81a48d6a1278797de519513e4c3f7fad.jpg\" (click)=\"list('Traditional')\">\r\n  \r\n        \r\n            <div class=\"itemname\" >\r\n              <p>Traditional</p>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"image\" >\r\n            <img src=\"https://i.pinimg.com/564x/db/ea/43/dbea433b162d79fe176700e61778fd4f.jpg\" (click)=\"list('Sport')\">\r\n  \r\n            <div class=\"itemname\">\r\n              <p>Sport</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"image\" >\r\n              <img src=\"https://i.pinimg.com/564x/a6/6d/34/a66d341ea420cb87b030d4dff25993f7.jpg\" (click)=\"list('Accessories')\">\r\n    \r\n              <div class=\"itemname\">\r\n                <p>Accessories</p>\r\n              </div>\r\n            </div>\r\n  \r\n          <!-- <div class=\"image\">\r\n            <img src=\"../../assets/back.jpg\">\r\n  \r\n           \r\n            <div class=\"itemname\">\r\n              <p>New York SOHO Ts<br> <span>by Dankie Jesu</span></p>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n      \r\n  </div>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" size=\"small\" >\r\n    <ion-fab-button (click)=\"busket()\" #cart color=\"transparent\">\r\n      <!-- <div class=\"cart-length\">{{ cartItemCount | async }}</div> -->\r\n      <ion-icon name=\"basket\" class=\"cart-icon\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"openCart()\" #cart>\r\n      <div class=\"cart-length\">{{ cartItemCount | async }}</div>\r\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-list>\r\n    <ion-card *ngFor=\"let p of products\">\r\n      <ion-card-header>\r\n        <ion-card-title>{{ p.name }}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"8\">\r\n            <ion-label color=\"secondary\">\r\n              <b>{{ p.price | currency:'R' }}</b>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\r\n              <ion-icon name=\"cart\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\">\r\n              <ion-icon name=\"heart\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-list> -->\r\n\r\n<!--  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n          <ion-fab-button (click)=\"openCart()\" #cart>\r\n            <div class=\"cart-length\">{{ cartItemCount | async }}</div>\r\n            <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\r\n          </ion-fab-button>\r\n        </ion-fab> -->\r\n     <!--  <ion-list>\r\n        <ion-card *ngFor=\"let p of products\">\r\n          <ion-card-header>\r\n            <ion-card-title>{{ p.name }}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-row class=\"ion-align-items-center\">\r\n              <ion-col size=\"8\">\r\n                <ion-label color=\"secondary\">\r\n                  <b>{{ p.price | currency:'R' }}</b>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"ion-text-right\">\r\n                <ion-button fill=\"clear\" (click)=\"addToCart()\">\r\n                  <ion-icon name=\"cart\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button fill=\"clear\">\r\n                    <ion-icon name=\"heart\"></ion-icon>\r\n                  </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-list> -->\r\n<!-- </ion-content> -->\r\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button {\n  background: maroon;\n  border-radius: 50%;\n  color: white;\n  box-shadow: 5px 5px 10px #686868;\n}\n\n.cart-icon {\n  font-size: 30px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  min-width: 25px;\n  z-index: 10;\n}\n\nion-toolbar {\n  --background: white;\n  font-family: \"Raleway\";\n  letter-spacing: 2px;\n}\n\nion-toolbar #icon {\n  color: maroon;\n}\n\nion-toolbar #number {\n  font-size: 0.8em;\n  position: relative;\n  top: 8px;\n  right: 5px;\n}\n\n.container {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.container .sales {\n  display: flex;\n  flex-flow: column;\n  position: relative;\n}\n\n.container .sales .saleitems {\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n}\n\n.container .sales .saleitems .image {\n  margin: 8px;\n  margin-bottom: 10px;\n  min-width: 52vw;\n  height: 35vh;\n  border-radius: 5px;\n  position: relative;\n  box-shadow: 2px 2px 10px grey;\n}\n\n.container .sales .saleitems .image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\n\n.container .sales .saleitems .image .percentage {\n  position: absolute;\n  top: 0%;\n  right: 10px;\n  z-index: 5;\n  color: white;\n}\n\n.container .sales .saleitems .image .percentage p {\n  font-size: 0.7em;\n  text-shadow: 2px 2px 5px black;\n}\n\n.container .sales .saleitems .image .itemname {\n  position: absolute;\n  bottom: 0;\n  right: 5px;\n  color: white;\n}\n\n.container .sales .saleitems .image .itemname p {\n  font-size: 0.7em;\n  text-align: right;\n  text-shadow: 2px 2px 5px black;\n}\n\n.container .sales .saleitems .image .itemname p span {\n  font-size: 0.5em;\n}\n\n.container .sales #defSale .itemname {\n  position: absolute;\n  bottom: 40%;\n  right: 60px;\n  color: white;\n}\n\n.container .sales #defSale .itemname p {\n  font-size: 5vw;\n  text-align: center;\n  text-shadow: 2px 2px 5px black;\n}\n\n.container .buttonz {\n  display: flex;\n  flex-flow: column;\n  width: 100vw;\n  margin: 10px 0px;\n}\n\n.container .buttonz ion-button {\n  margin: 0;\n  padding: 0;\n  height: 7vh;\n  border-radius: 0 !important;\n  text-align: left;\n  border-bottom: 0.1px solid #d4d4d4;\n  border-top: 0.1px solid #d4d4d4;\n  background: #ececec;\n  color: black;\n  font-weight: lighter;\n  letter-spacing: 1px;\n}\n\n.container .buttonz ion-button span {\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n\n.container .Kwanga {\n  display: flex;\n  flex-flow: column;\n  position: relative;\n}\n\n.container .Kwanga .apparel {\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n}\n\n.container .Kwanga .apparel .image {\n  margin: 8px;\n  min-width: 52vw;\n  height: 35vh;\n  border-radius: 5px;\n  position: relative;\n  box-shadow: 2px 2px 10px grey;\n}\n\n.container .Kwanga .apparel .image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\n\n.container .Kwanga .apparel .image .percentage {\n  position: absolute;\n  top: 0%;\n  right: 10px;\n  z-index: 5;\n  color: white;\n}\n\n.container .Kwanga .apparel .image .percentage p {\n  font-size: 0.7em;\n  text-shadow: 2px 2px 5px black;\n}\n\n.container .Kwanga .apparel .image .itemname {\n  position: absolute;\n  bottom: 0;\n  right: 5px;\n  color: white;\n}\n\n.container .Kwanga .apparel .image .itemname p {\n  font-size: 0.7em;\n  text-align: right;\n  text-shadow: 2px 2px 5px black;\n}\n\n.container .Kwanga .apparel .image .itemname p span {\n  font-size: 0.5em;\n}\n\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite;\n}\n\n.loader .maploader .lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.loader .maploader .lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.loader .maploader .lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n\n.loader .maploader .lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n\n.loader .maploader .lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n\n.loader .maploader .lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n\n.loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto;\n}\n\n.loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.loader-hide .maploader .lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.loader-hide .maploader .lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n\n.loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n\n.loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n\n.loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n\n@-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f;\n  }\n  50% {\n    border-color: #2a324b;\n  }\n  100% {\n    border-color: #fab62b;\n  }\n}\n\n@keyframes maploader {\n  0% {\n    border-color: #b6465f;\n  }\n  50% {\n    border-color: #2a324b;\n  }\n  100% {\n    border-color: #fab62b;\n  }\n}\n\n/* @media only screen and (max-width: 2000px) {\n\n.container{\n  min-width: 1200px;\n  margin: auto;\n}\n\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBSUEsc0JBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRERFO0VBQ0UsYUFBQTtBQ0dKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDQUo7O0FESUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQ0ZGOztBRElFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURJSTtFQUNFLFdBQUE7RUFFQSxhQUFBO0VBQ0EsZ0JBQUE7QUNITjs7QURNTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLDZCQUFBO0FDTFI7O0FETVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0pWOztBRE9RO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDTFY7O0FETVU7RUFDRSxnQkFBQTtFQUNBLDhCQUFBO0FDSlo7O0FEUVE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ05WOztBRE9VO0VBQ0UsZ0JB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QzdCRjs7QUQrQkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBQzVCRjs7QUQ4Qkk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUM1Qk47O0FEOEJJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBQzVCTjs7QUQ4Qkk7RUFDRSxTQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQzVCTjs7QUQ4Qkk7RUFDRSxTQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQzVCTjs7QUQ4Qkk7RUFDRSxVQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQzVCTjs7QUQ4Qkk7RUFDRSxVQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQzVCTjs7QUQ4Qkk7RUFDRTtJQUNFLG1CQUFBO0VDNUJOO0VEOEJJO0lBQ0UsbUJBQUE7RUM1Qk47QUFDRjs7QUQ4Qkk7RUFDRTtJQUNFLG1CQUFBO0VDNUJOO0VEOEJJO0lBQ0UsbUJBQUE7RUM1Qk47QUFDRjs7QUQ4Qkk7RUFDRTtJQUNFLDBCQUFBO0VDNUJOO0VEOEJJO0lBQ0UsNkJBQUE7RUM1Qk47QUFDRjs7QURnQ0E7RUFDRTtJQUVFLHFCQUFBO0VDOUJGO0VEaUNBO0lBR0UscUJBQUE7RUNqQ0Y7RURtQ0E7SUFDRSxxQkFBQTtFQ2pDRjtBQUNGOztBRG9CQTtFQUNFO0lBRUUscUJBQUE7RUM5QkY7RURpQ0E7SUFHRSxxQkFBQTtFQ2pDRjtFRG1DQTtJQUNFLHFCQUFBO0VDakNGO0FBQ0Y7O0FEc0NBOzs7Ozs7O0dBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ge1xyXG5cclxuICBiYWNrZ3JvdW5kOiBtYXJvb247XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDEwNCwgMTA0LCAxMDQpO1xyXG59XHJcblxyXG4uY2FydC1pY29uIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5jYXJ0LWxlbmd0aCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxOHB4O1xyXG4gIGxlZnQ6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICNpY29uIHtcclxuICAgIGNvbG9yOiBtYXJvb247XHJcbiAgfVxyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG5cclxuICAjbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIC8vIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5zYWxlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLnNhbGVpdGVtcyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAvLyBoZWlnaHQ6IDY1dnc7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgIC8vIG1hcmdpbjogNXB4O1xyXG5cclxuICAgICAgLmltYWdlIHtcclxuICAgICAgICBtYXJnaW46IDhweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNTJ2dztcclxuICAgICAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGdyZXk7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGVyY2VudGFnZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pdGVtbmFtZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgIFxyXG4gICAgfVxyXG5cclxuICAgICNkZWZTYWxle1xyXG4gICAgICAuaXRlbW5hbWUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206NDAlO1xyXG5cclxuICAgICAgICByaWdodDogNjBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcclxuICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnV0dG9ueiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgaGVpZ2h0OiA3dmg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgICBib3JkZXItdG9wOiAwLjFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyMzYsIDIzNiwgMjM2KTtcclxuICAgICAgLy8gYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuXHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuS3dhbmdhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuYXBwYXJlbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAvLyBoZWlnaHQ6IDY1dnc7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1MnZ3O1xyXG4gICAgICAgIGhlaWdodDogMzV2aDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBncmV5O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBlcmNlbnRhZ2Uge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbW5hbWUge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcbi5sb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCAyNywgNjMpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcbiAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kbW92ZXIgMzBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAubWFwbG9hZGVyIHtcclxuICAgIC5sZHMtZWxsaXBzaXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5sb2FkaW5nLXRleHQge1xyXG4gIC8vIGNvbG9yOiB5ZWxsb3c7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNTB2aDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIC8vei1pbmRleDogOTA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5sb2FkZXItaGlkZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAyMDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIC5tYXBsb2FkZXIge1xyXG4gICAgLmxkcy1lbGxpcHNpcyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXYge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMzNweDtcclxuICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGxlZnQ6IDMycHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgbGVmdDogNTZweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBtYXBsb2FkZXIge1xyXG4gIDAlIHtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTgyLCA3MCwgOTUpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTkyLCAxOTIpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDIwNiwgMjA2LCAyNTUpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQyLCA1MCwgNzUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1MCwgMTgyLCA0Myk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxNjcsIDE2Nyk7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMDAwcHgpIHtcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgbWluLXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG59ICovIiwiaW9uLWZhYi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBtYXJvb247XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggIzY4Njg2ODtcbn1cblxuLmNhcnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmNhcnQtbGVuZ3RoIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIGxlZnQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1pbi13aWR0aDogMjVweDtcbiAgei1pbmRleDogMTA7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuaW9uLXRvb2xiYXIgI2ljb24ge1xuICBjb2xvcjogbWFyb29uO1xufVxuaW9uLXRvb2xiYXIgI251bWJlciB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC5zYWxlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIC5zYWxlcyAuc2FsZWl0ZW1zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4uY29udGFpbmVyIC5zYWxlcyAuc2FsZWl0ZW1zIC5pbWFnZSB7XG4gIG1hcmdpbjogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtaW4td2lkdGg6IDUydnc7XG4gIGhlaWdodDogMzV2aDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBncmV5O1xufVxuLmNvbnRhaW5lciAuc2FsZXMgLnNhbGVpdGVtcyAuaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250YWluZXIgLnNhbGVzIC5zYWxlaXRlbXMgLmltYWdlIC5wZXJjZW50YWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuc2FsZXMgLnNhbGVpdGVtcyAuaW1hZ2UgLnBlcmNlbnRhZ2UgcCB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcbn1cbi5jb250YWluZXIgLnNhbGVzIC5zYWxlaXRlbXMgLmltYWdlIC5pdGVtbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5zYWxlcyAuc2FsZWl0ZW1zIC5pbWFnZSAuaXRlbW5hbWUgcCB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XG59XG4uY29udGFpbmVyIC5zYWxlcyAuc2FsZWl0ZW1zIC5pbWFnZSAuaXRlbW5hbWUgcCBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjVlbTtcbn1cbi5jb250YWluZXIgLnNhbGVzICNkZWZTYWxlIC5pdGVtbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0MCU7XG4gIHJpZ2h0OiA2MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5zYWxlcyAjZGVmU2FsZSAuaXRlbW5hbWUgcCB7XG4gIGZvbnQtc2l6ZTogNXZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcbn1cbi5jb250YWluZXIgLmJ1dHRvbnoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuLmNvbnRhaW5lciAuYnV0dG9ueiBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDd2aDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCAjZDRkNGQ0O1xuICBib3JkZXItdG9wOiAwLjFweCBzb2xpZCAjZDRkNGQ0O1xuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmNvbnRhaW5lciAuYnV0dG9ueiBpb24tYnV0dG9uIHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb250YWluZXIgLkt3YW5nYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIC5Ld2FuZ2EgLmFwcGFyZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5jb250YWluZXIgLkt3YW5nYSAuYXBwYXJlbCAuaW1hZ2Uge1xuICBtYXJnaW46IDhweDtcbiAgbWluLXdpZHRoOiA1MnZ3O1xuICBoZWlnaHQ6IDM1dmg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggZ3JleTtcbn1cbi5jb250YWluZXIgLkt3YW5nYSAuYXBwYXJlbCAuaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250YWluZXIgLkt3YW5nYSAuYXBwYXJlbCAuaW1hZ2UgLnBlcmNlbnRhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiA1O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5Ld2FuZ2EgLmFwcGFyZWwgLmltYWdlIC5wZXJjZW50YWdlIHAge1xuICBmb250LXNpemU6IDAuN2VtO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XG59XG4uY29udGFpbmVyIC5Ld2FuZ2EgLmFwcGFyZWwgLmltYWdlIC5pdGVtbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5Ld2FuZ2EgLmFwcGFyZWwgLmltYWdlIC5pdGVtbmFtZSBwIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcbn1cbi5jb250YWluZXIgLkt3YW5nYSAuYXBwYXJlbCAuaW1hZ2UgLml0ZW1uYW1lIHAgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG59XG5cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwMWIzZjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZG1vdmVyIDMwcyBsaW5lYXIgaW5maW5pdGU7XG59XG4ubG9hZGVyIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmxvYWRlciAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMzcHg7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xufVxuLmxvYWRlciAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGxlZnQ6IDhweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XG59XG4ubG9hZGVyIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogOHB4O1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbn1cbi5sb2FkZXIgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xuICBsZWZ0OiAzMnB4O1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbn1cbi5sb2FkZXIgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xuICBsZWZ0OiA1NnB4O1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcbiAgfVxufVxuXG4ubG9hZGluZy10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUwdmg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTB2aDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9hZGVyLWhpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG4ubG9hZGVyLWhpZGUgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubG9hZGVyLWhpZGUgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzM3B4O1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcbn1cbi5sb2FkZXItaGlkZSAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGxlZnQ6IDhweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XG59XG4ubG9hZGVyLWhpZGUgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogMzJweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG59XG4ubG9hZGVyLWhpZGUgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xuICBsZWZ0OiA1NnB4O1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1hcGxvYWRlciB7XG4gIDAlIHtcbiAgICBib3JkZXItY29sb3I6ICNiNjQ2NWY7XG4gIH1cbiAgNTAlIHtcbiAgICBib3JkZXItY29sb3I6ICMyYTMyNGI7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmFiNjJiO1xuICB9XG59XG4vKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwMDBweCkge1xuXG4uY29udGFpbmVye1xuICBtaW4td2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG59ICovIl19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart-modal/cart-modal.page */ "./src/app/cart-modal/cart-modal.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");







//import { FcmService } from '../fcm.service';

let HomePage = class HomePage {
    constructor(splashScreen, authService, modalCtrl, router, navCtrl) {
        this.splashScreen = splashScreen;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.products = [];
        this.cart = [];
        this.dbProfile = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("userProfile");
        this.dbSales = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("Specials");
        this.uid = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
        this.loaderMessages = 'Loading...';
        this.loaderAnimate = true;
        this.sales = [];
        this.dbWish = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('Wishlist');
        // this.uid = firebase.auth().currentUser.uid
    }
    ngOnInit() {
        // let num = 24.35435453243;
        // this.fcmService.getPermission();
        //console.log('Round off ', String(num).substr(0,5));
        this.getProfile();
        this.getPromo();
        /*     this.products = this.cartService.getProducts();
            this.cart = this.cartService.getCart();
            this.cartItemCount = this.cartService.getCartItemCount(); */
        this.dbWish.where('customerUID', '==', this.uid).onSnapshot((res1) => {
            this.myWish = res1.size;
        });
        setTimeout(() => {
            this.splashScreen.hide();
        }, 3000);
    }
    getProfile() {
        this.dbProfile.doc(this.uid).onSnapshot((doc) => {
            if (doc.exists) {
                this.name = doc.data().name;
                this.surname = doc.data().surname;
                // console.log("This is my profile", doc.data());
            }
            else {
                this.router.navigateByUrl('create-account');
            }
        });
    }
    profile() {
        this.navCtrl.navigateForward('profile');
    }
    getPromo() {
        this.dbSales.onSnapshot((res) => {
            this.sales = [];
            setTimeout(() => {
                this.loaderAnimate = false;
            }, 2000);
            res.forEach((doc) => {
                this.sales.push({ data: doc.data(), id: doc.id });
            });
        });
    }
    search(id) {
        this.navCtrl.navigateForward(['search']);
        //this.router.navigateByUrl('search');
    }
    logout() {
        this.authService.logoutUser();
    }
    addToCart(product) {
        //this.uid = firebase.auth().currentUser.uid;
        /*   if(!this.uid) {
            console.log('Cannot read uid');
          } else {
            console.log('Uid found..');
            
          } */
        //this.cartService.addProduct(product);
        this.animateCSS('tada', true);
        /*  if(this.uid==null || this.uid==undefined) {
           this.router.navigateByUrl('login')
         } else {
           this.cartService.addProduct(product);
         this.animateCSS('tada', true);
         }
          */
    }
    busket() {
        this.navCtrl.navigateForward('basket');
    }
    wishlist() {
        this.navCtrl.navigateForward('wishlist');
    }
    animateCSS(animationName, keepAnimated = false) {
        const node = this.fab.nativeElement;
        node.classList.add('animated', animationName);
        //https://github.com/daneden/animate.css
        function handleAnimationEnd() {
            if (!keepAnimated) {
                node.classList.remove('animated', animationName);
            }
            node.removeEventListener('animationend', handleAnimationEnd);
        }
        node.addEventListener('animationend', handleAnimationEnd);
    }
    openCart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.animateCSS('bounceOutLeft', true);
            let modal = yield this.modalCtrl.create({
                component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__["CartModalPage"],
                cssClass: 'cart-modal'
            });
            modal.onWillDismiss().then(() => {
                this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
                this.animateCSS('bounceInLeft');
            });
            modal.present();
        });
    }
    categories(data) {
        // console.log(data);
        this.router.navigate(['categories', data]);
    }
    list(data) {
        let navigationExtras = {
            queryParams: {
                data: data,
                col: 'Kwanga',
            }
        };
        //this.router.navigate(['list', data])
        this.navCtrl.navigateForward(['list', data], navigationExtras);
    }
    viewitem(id, data) {
        let navigationExtras = {
            queryParams: {
                data: data,
                col: 'sales',
            }
        };
        this.navCtrl.navigateForward(['view', id], navigationExtras);
        // this.router.navigate(['view', id])
    }
    goList(data) {
        let navigationExtras = {
            queryParams: {
                data: data,
                col: 'Specials',
            }
        };
        //this.router.navigate(['list', data])
        this.navCtrl.navigateForward(['list', data], navigationExtras);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cart', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HomePage.prototype, "fab", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=2-es2015.js.map