(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
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
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button {\n  background: maroon;\n  border-radius: 50%;\n  color: white;\n  box-shadow: 5px 5px 10px #686868; }\n\n.cart-icon {\n  font-size: 30px; }\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  min-width: 25px;\n  z-index: 10; }\n\nion-toolbar {\n  --background: white;\n  font-family: \"Raleway\";\n  letter-spacing: 2px; }\n\nion-toolbar #icon {\n    color: maroon; }\n\nion-toolbar #number {\n    font-size: 0.8em;\n    position: relative;\n    top: 8px;\n    right: 5px; }\n\n.container {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  padding: 0 !important;\n  margin: 0 !important; }\n\n.container .sales {\n    display: flex;\n    flex-flow: column;\n    position: relative; }\n\n.container .sales .saleitems {\n      width: 100%;\n      display: flex;\n      overflow-x: auto; }\n\n.container .sales .saleitems .image {\n        margin: 8px;\n        margin-bottom: 10px;\n        min-width: 50vw;\n        height: 35vh;\n        border-radius: 5px;\n        position: relative;\n        box-shadow: 2px 2px 10px grey; }\n\n.container .sales .saleitems .image img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          border-radius: 5px; }\n\n.container .sales .saleitems .image .percentage {\n          position: absolute;\n          top: 0%;\n          right: 10px;\n          z-index: 5;\n          color: white; }\n\n.container .sales .saleitems .image .percentage p {\n            font-size: 0.7em;\n            text-shadow: 2px 2px 5px black; }\n\n.container .sales .saleitems .image .itemname {\n          position: absolute;\n          bottom: 0;\n          right: 5px;\n          color: white; }\n\n.container .sales .saleitems .image .itemname p {\n            font-size: 0.7em;\n            text-align: right;\n            text-shadow: 2px 2px 5px black; }\n\n.container .sales .saleitems .image .itemname p span {\n              font-size: 0.5em; }\n\n.container .sales #defSale .itemname {\n      position: absolute;\n      bottom: 40%;\n      right: 60px;\n      color: white; }\n\n.container .sales #defSale .itemname p {\n        font-size: 5vw;\n        text-align: center;\n        text-shadow: 2px 2px 5px black; }\n\n.container .buttonz {\n    display: flex;\n    flex-flow: column;\n    width: 100vw;\n    margin: 10px 0px; }\n\n.container .buttonz ion-button {\n      margin: 0;\n      padding: 0;\n      height: 7vh;\n      border-radius: 0 !important;\n      text-align: left;\n      border-bottom: 0.1px solid #d4d4d4;\n      border-top: 0.1px solid #d4d4d4;\n      background: #ececec;\n      color: black;\n      font-weight: lighter;\n      letter-spacing: 1px; }\n\n.container .buttonz ion-button span {\n        width: 100%;\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between; }\n\n.container .Kwanga {\n    display: flex;\n    flex-flow: column;\n    position: relative; }\n\n.container .Kwanga .apparel {\n      width: 100%;\n      display: flex;\n      overflow-x: auto; }\n\n.container .Kwanga .apparel .image {\n        margin: 8px;\n        min-width: 52vw;\n        height: 35vh;\n        border-radius: 5px;\n        position: relative;\n        box-shadow: 2px 2px 10px grey; }\n\n.container .Kwanga .apparel .image img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          border-radius: 5px; }\n\n.container .Kwanga .apparel .image .percentage {\n          position: absolute;\n          top: 0%;\n          right: 10px;\n          z-index: 5;\n          color: white; }\n\n.container .Kwanga .apparel .image .percentage p {\n            font-size: 0.7em;\n            text-shadow: 2px 2px 5px black; }\n\n.container .Kwanga .apparel .image .itemname {\n          position: absolute;\n          bottom: 0;\n          right: 5px;\n          color: white; }\n\n.container .Kwanga .apparel .image .itemname p {\n            font-size: 0.7em;\n            text-align: right;\n            text-shadow: 2px 2px 5px black; }\n\n.container .Kwanga .apparel .image .itemname p span {\n              font-size: 0.5em; }\n\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite; }\n\n.loader .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n\n.loader .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n\n.loader .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n\n.loader .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n\n.loader .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n\n.loader .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n\n.loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto; }\n\n.loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n.loader-hide .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n\n.loader-hide .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n\n.loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n\n.loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n\n.loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n\n.loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n\n@-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n\n@keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n\n/* @media only screen and (max-width: 2000px) {\r\n\r\n.container{\r\n  min-width: 1200px;\r\n  margin: auto;\r\n}\r\n\r\n} */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXE5NbGFuZ2VuaVxcRG9jdW1lbnRzXFxHaXRIdWJcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdDQUEyQyxFQUFBOztBQUc3QztFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBR2I7RUFDRSxtQkFBYTtFQUliLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTs7QUFOckI7SUFHSSxhQUFhLEVBQUE7O0FBSGpCO0lBU0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVSxFQUFBOztBQUlkO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUVqQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG9CQUFvQixFQUFBOztBQU50QjtJQVNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7O0FBWHRCO01BY00sV0FBVztNQUVYLGFBQWE7TUFDYixnQkFBZ0IsRUFBQTs7QUFqQnRCO1FBcUJRLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBRWxCLDZCQUE2QixFQUFBOztBQTVCckM7VUE4QlUsV0FBVztVQUNYLFlBQVk7VUFDWixvQkFBaUI7YUFBakIsaUJBQWlCO1VBQ2pCLGtCQUFrQixFQUFBOztBQWpDNUI7VUFxQ1Usa0JBQWtCO1VBQ2xCLE9BQU87VUFDUCxXQUFXO1VBQ1gsVUFBVTtVQUNWLFlBQVksRUFBQTs7QUF6Q3RCO1lBMkNZLGdCQUFnQjtZQUNoQiw4QkFB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RTtJQUVFLHFCQUE4QixFQUFBO0VBR2hDO0lBR0UscUJBQTZCLEVBQUE7RUFFL0I7SUFDRSxxQkFBK0IsRUFBQSxFQUFBOztBQVpuQztFQUNFO0lBRUUscUJBQThCLEVBQUE7RUFHaEM7SUFHRSxxQkFBNkIsRUFBQTtFQUUvQjtJQUNFLHFCQUErQixFQUFBLEVBQUE7O0FBTW5DOzs7Ozs7O0dDMUZHIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItYnV0dG9uIHtcclxuXHJcbiAgYmFja2dyb3VuZDogbWFyb29uO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigxMDQsIDEwNCwgMTA0KTtcclxufVxyXG5cclxuLmNhcnQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uY2FydC1sZW5ndGgge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMThweDtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWluLXdpZHRoOiAyNXB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAjaWNvbiB7XHJcbiAgICBjb2xvcjogbWFyb29uO1xyXG4gIH1cclxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuXHJcbiAgI251bWJlciB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG5cclxuICAuc2FsZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5zYWxlaXRlbXMge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLy8gaGVpZ2h0OiA2NXZ3O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAvLyBtYXJnaW46IDVweDtcclxuXHJcbiAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDUwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBncmV5O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBlcmNlbnRhZ2Uge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbW5hbWUge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICBcclxuICAgIH1cclxuXHJcbiAgICAjZGVmU2FsZXtcclxuICAgICAgLml0ZW1uYW1lIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOjQwJTtcclxuXHJcbiAgICAgICAgcmlnaHQ6IDYwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbiAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbnoge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogN3ZoO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxuICAgICAgYm9yZGVyLXRvcDogMC4xcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjM2LCAyMzYsIDIzNik7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblxyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLkt3YW5nYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmFwcGFyZWwge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLy8gaGVpZ2h0OiA2NXZ3O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAuaW1hZ2Uge1xyXG4gICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNTJ2dztcclxuICAgICAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggZ3JleTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wZXJjZW50YWdlIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLml0ZW1uYW1lIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxufVxyXG4ubG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjcsIDYzKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZG1vdmVyIDMwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLm1hcGxvYWRlciB7XHJcbiAgICAubGRzLWVsbGlwc2lzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzM3B4O1xyXG4gICAgICB3aWR0aDogMTNweDtcclxuICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbGVmdDogMzJweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgICBsZWZ0OiA1NnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGluZy10ZXh0IHtcclxuICAvLyBjb2xvcjogeWVsbG93O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwdmg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZDogcmVkO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICAvL3otaW5kZXg6IDkwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ubG9hZGVyLWhpZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICAubWFwbG9hZGVyIHtcclxuICAgIC5sZHMtZWxsaXBzaXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbWFwbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4MiwgNzAsIDk1KTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE5MiwgMTkyKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMDYsIDIwNiwgMjU1KTtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MiwgNTAsIDc1KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTAsIDE4MiwgNDMpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTY3LCAxNjcpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwMHB4KSB7XHJcblxyXG4uY29udGFpbmVye1xyXG4gIG1pbi13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxufSAqLyIsImlvbi1mYWItYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbWFyb29uO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICM2ODY4Njg7IH1cblxuLmNhcnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDsgfVxuXG4uY2FydC1sZW5ndGgge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbiAgbGVmdDogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICB6LWluZGV4OiAxMDsgfVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDsgfVxuICBpb24tdG9vbGJhciAjaWNvbiB7XG4gICAgY29sb3I6IG1hcm9vbjsgfVxuICBpb24tdG9vbGJhciAjbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDhweDtcbiAgICByaWdodDogNXB4OyB9XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH1cbiAgLmNvbnRhaW5lciAuc2FsZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNvbnRhaW5lciAuc2FsZXMgLnNhbGVpdGVtcyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvOyB9XG4gICAgICAuY29udGFpbmVyIC5zYWxlcyAuc2FsZWl0ZW1zIC5pbWFnZSB7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBtaW4td2lkdGg6IDUwdnc7XG4gICAgICAgIGhlaWdodDogMzV2aDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBncmV5OyB9XG4gICAgICAgIC5jb250YWluZXIgLnNhbGVzIC5zYWxlaXRlbXMgLmltYWdlIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuICAgICAgICAuY29udGFpbmVyIC5zYWxlcyAuc2FsZWl0ZW1zIC5pbWFnZSAucGVyY2VudGFnZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMCU7XG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7IH1cbiAgICAgICAgICAuY29udGFpbmVyIC5zYWxlcyAuc2FsZWl0ZW1zIC5pbWFnZSAucGVyY2VudGFnZSBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7IH1cbiAgICAgICAgLmNvbnRhaW5lciAuc2FsZXMgLnNhbGVpdGVtcyAuaW1hZ2UgLml0ZW1uYW1lIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlOyB9XG4gICAgICAgICAgLmNvbnRhaW5lciAuc2FsZXMgLnNhbGVpdGVtcyAuaW1hZ2UgLml0ZW1uYW1lIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrOyB9XG4gICAgICAgICAgICAuY29udGFpbmVyIC5zYWxlcyAuc2FsZWl0ZW1zIC5pbWFnZSAuaXRlbW5hbWUgcCBzcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjVlbTsgfVxuICAgIC5jb250YWluZXIgLnNhbGVzICNkZWZTYWxlIC5pdGVtbmFtZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDQwJTtcbiAgICAgIHJpZ2h0OiA2MHB4O1xuICAgICAgY29sb3I6IHdoaXRlOyB9XG4gICAgICAuY29udGFpbmVyIC5zYWxlcyAjZGVmU2FsZSAuaXRlbW5hbWUgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBibGFjazsgfVxuICAuY29udGFpbmVyIC5idXR0b256IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW46IDEwcHggMHB4OyB9XG4gICAgLmNvbnRhaW5lciAuYnV0dG9ueiBpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBoZWlnaHQ6IDd2aDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCAjZDRkNGQ0O1xuICAgICAgYm9yZGVyLXRvcDogMC4xcHggc29saWQgI2Q0ZDRkNDtcbiAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7IH1cbiAgICAgIC5jb250YWluZXIgLmJ1dHRvbnogaW9uLWJ1dHRvbiBzcGFuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cbiAgLmNvbnRhaW5lciAuS3dhbmdhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jb250YWluZXIgLkt3YW5nYSAuYXBwYXJlbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvOyB9XG4gICAgICAuY29udGFpbmVyIC5Ld2FuZ2EgLmFwcGFyZWwgLmltYWdlIHtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICAgIG1pbi13aWR0aDogNTJ2dztcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGdyZXk7IH1cbiAgICAgICAgLmNvbnRhaW5lciAuS3dhbmdhIC5hcHBhcmVsIC5pbWFnZSBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cbiAgICAgICAgLmNvbnRhaW5lciAuS3dhbmdhIC5hcHBhcmVsIC5pbWFnZSAucGVyY2VudGFnZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMCU7XG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7IH1cbiAgICAgICAgICAuY29udGFpbmVyIC5Ld2FuZ2EgLmFwcGFyZWwgLmltYWdlIC5wZXJjZW50YWdlIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBibGFjazsgfVxuICAgICAgICAuY29udGFpbmVyIC5Ld2FuZ2EgLmFwcGFyZWwgLmltYWdlIC5pdGVtbmFtZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAgICAgICAgIC5jb250YWluZXIgLkt3YW5nYSAuYXBwYXJlbCAuaW1hZ2UgLml0ZW1uYW1lIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrOyB9XG4gICAgICAgICAgICAuY29udGFpbmVyIC5Ld2FuZ2EgLmFwcGFyZWwgLmltYWdlIC5pdGVtbmFtZSBwIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNWVtOyB9XG5cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwMWIzZjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZG1vdmVyIDMwcyBsaW5lYXIgaW5maW5pdGU7IH1cbiAgLmxvYWRlciAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4OyB9XG4gIC5sb2FkZXIgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzNweDtcbiAgICB3aWR0aDogMTNweDtcbiAgICBoZWlnaHQ6IDEzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApOyB9XG4gIC5sb2FkZXIgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGxlZnQ6IDhweDtcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTsgfVxuICAubG9hZGVyIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBsZWZ0OiA4cHg7XG4gICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7IH1cbiAgLmxvYWRlciAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgbGVmdDogMzJweDtcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTsgfVxuICAubG9hZGVyIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICBsZWZ0OiA1NnB4O1xuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlOyB9XG5cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxuXG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApOyB9IH1cblxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApOyB9IH1cblxuLmxvYWRpbmctdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHZoO1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDUwdmg7XG4gIG1hcmdpbjogYXV0bzsgfVxuXG4ubG9hZGVyLWhpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7IH1cbiAgLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7IH1cbiAgLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMzcHg7XG4gICAgd2lkdGg6IDEzcHg7XG4gICAgaGVpZ2h0OiAxM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTsgfVxuICAubG9hZGVyLWhpZGUgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGxlZnQ6IDhweDtcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTsgfVxuICAubG9hZGVyLWhpZGUgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xuICAgIGxlZnQ6IDhweDtcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTsgfVxuICAubG9hZGVyLWhpZGUgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xuICAgIGxlZnQ6IDMycHg7XG4gICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7IH1cbiAgLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICBsZWZ0OiA1NnB4O1xuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlOyB9XG5cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxuXG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApOyB9IH1cblxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApOyB9IH1cblxuQGtleWZyYW1lcyBtYXBsb2FkZXIge1xuICAwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYjY0NjVmOyB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmEzMjRiOyB9XG4gIDEwMCUge1xuICAgIGJvcmRlci1jb2xvcjogI2ZhYjYyYjsgfSB9XG5cbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwMHB4KSB7XHJcblxyXG4uY29udGFpbmVye1xyXG4gIG1pbi13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxufSAqL1xuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart-modal/cart-modal.page */ "./src/app/cart-modal/cart-modal.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");







//import { FcmService } from '../fcm.service';

var HomePage = /** @class */ (function () {
    function HomePage(splashScreen, authService, modalCtrl, router, navCtrl) {
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
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        // let num = 24.35435453243;
        // this.fcmService.getPermission();
        //console.log('Round off ', String(num).substr(0,5));
        this.getProfile();
        this.getPromo();
        /*     this.products = this.cartService.getProducts();
            this.cart = this.cartService.getCart();
            this.cartItemCount = this.cartService.getCartItemCount(); */
        this.dbWish.where('customerUID', '==', this.uid).onSnapshot(function (res1) {
            _this.myWish = res1.size;
        });
        setTimeout(function () {
            _this.splashScreen.hide();
        }, 3000);
    };
    HomePage.prototype.getProfile = function () {
        var _this = this;
        this.dbProfile.doc(this.uid).onSnapshot(function (doc) {
            if (doc.exists) {
                _this.name = doc.data().name;
                _this.surname = doc.data().surname;
                // console.log("This is my profile", doc.data());
            }
            else {
                _this.router.navigateByUrl('create-account');
            }
        });
    };
    HomePage.prototype.profile = function () {
        this.navCtrl.navigateForward('profile');
    };
    HomePage.prototype.getPromo = function () {
        var _this = this;
        this.dbSales.onSnapshot(function (res) {
            _this.sales = [];
            setTimeout(function () {
                _this.loaderAnimate = false;
            }, 2000);
            res.forEach(function (doc) {
                _this.sales.push({ data: doc.data(), id: doc.id });
            });
        });
    };
    HomePage.prototype.search = function (id) {
        this.navCtrl.navigateForward(['search']);
        //this.router.navigateByUrl('search');
    };
    HomePage.prototype.logout = function () {
        this.authService.logoutUser();
    };
    HomePage.prototype.addToCart = function (product) {
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
    };
    HomePage.prototype.busket = function () {
        this.navCtrl.navigateForward('basket');
    };
    HomePage.prototype.wishlist = function () {
        this.navCtrl.navigateForward('wishlist');
    };
    HomePage.prototype.animateCSS = function (animationName, keepAnimated) {
        if (keepAnimated === void 0) { keepAnimated = false; }
        var node = this.fab.nativeElement;
        node.classList.add('animated', animationName);
        //https://github.com/daneden/animate.css
        function handleAnimationEnd() {
            if (!keepAnimated) {
                node.classList.remove('animated', animationName);
            }
            node.removeEventListener('animationend', handleAnimationEnd);
        }
        node.addEventListener('animationend', handleAnimationEnd);
    };
    HomePage.prototype.openCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.animateCSS('bounceOutLeft', true);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__["CartModalPage"],
                                cssClass: 'cart-modal'
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onWillDismiss().then(function () {
                            _this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
                            _this.animateCSS('bounceInLeft');
                        });
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.categories = function (data) {
        // console.log(data);
        this.router.navigate(['categories', data]);
    };
    HomePage.prototype.list = function (data) {
        var navigationExtras = {
            queryParams: {
                data: data,
                col: 'Kwanga',
            }
        };
        //this.router.navigate(['list', data])
        this.navCtrl.navigateForward(['list', data], navigationExtras);
    };
    HomePage.prototype.viewitem = function (id, data) {
        var navigationExtras = {
            queryParams: {
                data: data,
                col: 'sales',
            }
        };
        this.navCtrl.navigateForward(['view', id], navigationExtras);
        // this.router.navigate(['view', id])
    };
    HomePage.prototype.goList = function (data) {
        var navigationExtras = {
            queryParams: {
                data: data,
                col: 'Specials',
            }
        };
        //this.router.navigate(['list', data])
        this.navCtrl.navigateForward(['list', data], navigationExtras);
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
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
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=3.js.map