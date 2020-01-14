(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button id=\"icon\" (click)=\"wishlist()\">\r\n        <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\r\n        <p id=\"number\">{{myWish}}</p>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button id=\"icon\" (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <!-- <ion-toolbar color=\"primary\">\r\n      <ion-button (click)=\"logout()\" slot=\"end\">Logout</ion-button>\r\n      <ion-title>\r\n        Broken Stool\r\n      </ion-title>\r\n    </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div [ngClass]=\"{'loader': loaderAnimate, 'loader-hide': !loaderAnimate}\">\r\n    <div class=\"maploader\">\r\n      <div class=\"lds-ellipsis\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n      </div>\r\n      <p style=\"color:white; text-align: center;\">{{loaderMessages}}</p>\r\n    </div>\r\n    <!--  <div class=\"loading-text\">\r\n          <p>Loading Map</p>\r\n        </div> -->\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"top\">\r\n      <div class=\"pagename\">\r\n        <h1 style=\"text-transform: uppercase; letter-spacing: 2px;\"><b>{{collectionName}}</b></h1>\r\n      </div>\r\n      <div class=\"itemcount\">\r\n        <div class=\"items\" *ngIf=\"collectionName!=='sales'\">\r\n          <p>{{myProduct.length}} item(s)</p>\r\n        </div>\r\n        <div class=\"items\" *ngIf=\"collectionName==='sales'\">\r\n          <p>{{promo.length}} item(s)</p>\r\n        </div>\r\n        <div class=\"filter\">\r\n\r\n          <p (click)=\"reviewed()\" style=\"opacity: 0.5;\">Filter</p>\r\n        </div>\r\n\r\n        <!-- <div class=\"filter\" *ngIf=\"collectionName==='sales'\">\r\n\r\n          <ion-select placeholder=\"Filter ASC\" [(ngModel)]=\"sortSale\" (ionChange)=\"sortSales()\">\r\n            <ion-select-option value=\"name\">Name</ion-select-option>\r\n            <ion-select-option value=\"discount\">Discount</ion-select-option>\r\n            <ion-select-option value=\"saleprice\">Price</ion-select-option>\r\n          </ion-select>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"cards\" *ngIf=\"collectionName!=='sales'\">\r\n      <div class=\"card\" *ngFor=\"let p of myProduct, let i=index\">\r\n        <img src=\"{{p.info.pictureLink}}\" (click)=\"viewitem(p.id, p.info)\">\r\n        <div class=\"itemdetails\">\r\n          <div class=\"name\">\r\n            <p>{{p.info.name}} <br> <span>{{p.info.price | currency:'R'}}</span></p>\r\n          </div>\r\n          <div id=\"icon\">\r\n\r\n            <ion-icon slot=\"end\" name=\"heart-empty\" (click)=\"wishList(p.id, p.info)\"></ion-icon>\r\n          </div>\r\n          <!-- [ngClass]=\"{'sizeStyle':heartIndex==i}\" -->\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"cards\" *ngIf=\"collectionName==='sales'\">\r\n      <div class=\"card\" *ngFor=\"let s of promo\">\r\n        <img src=\"{{s.info.pictureLink}}\" (click)=\"viewitem(s.id, s.info)\">\r\n        <div class=\"itemdetails\">\r\n          <div class=\"name\">\r\n            <p>{{s.info.name}} <br> <span>{{s.info.saleprice | currency:'R'}}</span></p>\r\n          </div>\r\n          <div id=\"icon\">\r\n\r\n            <ion-icon slot=\"end\" name=\"heart-empty\" (click)=\"wishListSale(s.id, s.info)\"></ion-icon>\r\n          </div>\r\n          <!-- [ngClass]=\"{'sizeStyle':heartIndex==i}\" -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"cards\" id=\"msg\" *ngIf= \"myProduct.length === 0 && collectionName!=='sales'\">\r\n      <p>No Items</p>\r\n      <img src=\"../../assets/empty-cart.svg\">\r\n    </div>\r\n\r\n    <div [ngClass]=\"{'viewreviews': viewReviews, 'closereviews': !viewReviews}\">\r\n\r\n      <div class=\"heading\">\r\n        <p>Filter Items By:</p>\r\n\r\n        <ion-icon slot=\"icon-only\" name=\"close\" (click)=\"reviewed()\"></ion-icon>\r\n\r\n      </div>\r\n      <div class=\"line\"></div>\r\n\r\n      <div class=\"filtering\">\r\n\r\n        <div class=\"color\" (click)=\"filtered()\">\r\n          <h4>Colour</h4>\r\n        </div>\r\n        <div class=\"colors\" *ngIf=\"viewFilter\" (click)=\"colorOpt($event)\">\r\n          <p>Red</p>\r\n          <p>Blue</p>\r\n          <p>Orange</p>\r\n          <p>Green</p>\r\n          <p>Purple</p>\r\n        </div>\r\n\r\n        <div class=\"price\" (click)=\"priced()\">\r\n          <h4>Price</h4>\r\n        </div>\r\n        <div class=\"prices\" >\r\n          <ion-item *ngIf=\"viewPrice\">\r\n            <ion-range style=\"width: 50%\" pin=\"true\" min=\"0\" max=\"1000\" step=\"10\" color=\"secondary\" [(ngModel)]=\"price\"\r\n              (ionChange)=\"setPriceRange(price)\">\r\n              <ion-label slot=\"start\">{{price | currency:'R'}}</ion-label>\r\n              <ion-label slot=\"end\">{{1000 | currency:'R'}}</ion-label>\r\n            </ion-range>\r\n          </ion-item>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"web_view\">\r\n    <div class=\"top\">\r\n      <div class=\"pagename\">\r\n        <h1 style=\"text-transform: uppercase; letter-spacing: 2px;\"><b>{{collectionName}}</b></h1>\r\n      </div>\r\n      <div class=\"itemcount\">\r\n        <div class=\"items\" *ngIf=\"collectionName!=='sales'\">\r\n          <p>{{myProduct.length}} item(s)</p>\r\n        </div>\r\n        <div class=\"items\" *ngIf=\"collectionName==='sales'\">\r\n          <p>{{promo.length}} item(s)</p>\r\n        </div>\r\n        <div class=\"filter\">\r\n\r\n          <p (click)=\"reviewed()\" style=\"opacity: 0.5;\">Filter</p>\r\n        </div>\r\n\r\n        <!-- <div class=\"filter\" *ngIf=\"collectionName==='sales'\">\r\n\r\n          <ion-select placeholder=\"Filter ASC\" [(ngModel)]=\"sortSale\" (ionChange)=\"sortSales()\">\r\n            <ion-select-option value=\"name\">Name</ion-select-option>\r\n            <ion-select-option value=\"discount\">Discount</ion-select-option>\r\n            <ion-select-option value=\"saleprice\">Price</ion-select-option>\r\n          </ion-select>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"cards\" *ngIf=\"collectionName!=='sales'\">\r\n      <div class=\"card\" *ngFor=\"let p of myProduct, let i=index\">\r\n        <img src=\"{{p.info.pictureLink}}\" (click)=\"viewitem(p.id, p.info)\">\r\n        <div class=\"itemdetails\">\r\n          <div class=\"name\">\r\n            <p>{{p.info.name}} <br> <span>{{p.info.price | currency:'R'}}</span></p>\r\n          </div>\r\n          <div id=\"icon\">\r\n\r\n            <ion-icon slot=\"end\" name=\"heart-empty\" (click)=\"wishList(p.id, p.info)\"></ion-icon>\r\n          </div>\r\n          <!-- [ngClass]=\"{'sizeStyle':heartIndex==i}\" -->\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"cards\" *ngIf=\"collectionName==='sales'\">\r\n      <div class=\"card\" *ngFor=\"let s of promo\">\r\n        <img src=\"{{s.info.pictureLink}}\" (click)=\"viewitem(s.id, s.info)\">\r\n        <div class=\"itemdetails\">\r\n          <div class=\"name\">\r\n            <p>{{s.info.name}} <br> <span>{{s.info.saleprice | currency:'R'}}</span></p>\r\n          </div>\r\n          <div id=\"icon\">\r\n\r\n            <ion-icon slot=\"end\" name=\"heart-empty\" (click)=\"wishListSale(s.id, s.info)\"></ion-icon>\r\n          </div>\r\n          <!-- [ngClass]=\"{'sizeStyle':heartIndex==i}\" -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"cards\" id=\"msg\" *ngIf= \"myProduct.length === 0 && collectionName!=='sales'\">\r\n      <p>No Items</p>\r\n      <img src=\"../../assets/empty-cart.svg\">\r\n    </div>\r\n\r\n    <div [ngClass]=\"{'viewreviews': viewReviews, 'closereviews': !viewReviews}\">\r\n\r\n      <div class=\"heading\">\r\n        <p>Filter Items By:</p>\r\n\r\n        <ion-icon slot=\"icon-only\" name=\"close\" (click)=\"reviewed()\"></ion-icon>\r\n\r\n      </div>\r\n      <div class=\"line\"></div>\r\n\r\n      <div class=\"filtering\">\r\n\r\n        <div class=\"color\" (click)=\"filtered()\">\r\n          <h4>Colour</h4>\r\n        </div>\r\n        <div class=\"colors\" *ngIf=\"viewFilter\" (click)=\"colorOpt($event)\">\r\n          <p>Red</p>\r\n          <p>Blue</p>\r\n          <p>Orange</p>\r\n          <p>Green</p>\r\n          <p>Purple</p>\r\n        </div>\r\n\r\n        <div class=\"price\" (click)=\"priced()\">\r\n          <h4>Price</h4>\r\n        </div>\r\n        <div class=\"prices\" >\r\n          <ion-item *ngIf=\"viewPrice\">\r\n            <ion-range style=\"width: 50%\" pin=\"true\" min=\"0\" max=\"1000\" step=\"10\" color=\"secondary\" [(ngModel)]=\"price\"\r\n              (ionChange)=\"setPriceRange(price)\">\r\n              <ion-label slot=\"start\">{{price | currency:'R'}}</ion-label>\r\n              <ion-label slot=\"end\">{{1000 | currency:'R'}}</ion-label>\r\n            </ion-range>\r\n          </ion-item>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <!-- *ngIf=\"viewFilter=='all'||viewFilter=='color'\"  -->\r\n</ion-content>");

/***/ }),

/***/ "./src/app/list/list-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/list/list-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");




var routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }
];
var ListPageRoutingModule = /** @class */ (function () {
    function ListPageRoutingModule() {
    }
    ListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ListPageRoutingModule);
    return ListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");







var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"]
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: white; }\n  ion-toolbar #icon {\n    color: maroon; }\n  ion-toolbar #number {\n    font-size: 0.8em;\n    position: relative;\n    top: 8px;\n    right: 5px; }\n  .sizeStyle {\n  background: rgba(128, 0, 0, 0.712); }\n  #msg {\n  display: flex;\n  flex-flow: column;\n  position: absolute;\n  align-items: center;\n  justify-content: space-evenly;\n  top: 25vh;\n  width: 95vw;\n  margin: 10px;\n  font-family: \"Poppins\";\n  box-shadow: none !important; }\n  #msg img {\n    width: 80vw;\n    height: 50vw; }\n  #msg p {\n    color: #b2b2b2;\n    font-size: 5vw; }\n  .container {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  width: 100vw;\n  height: 100%;\n  bottom: 0; }\n  .container .top {\n    width: 100%;\n    padding: 10px;\n    height: 21vw; }\n  .container .top .pagename {\n      font-family: \"Poppins\";\n      font-weight: normal;\n      letter-spacing: 2px;\n      width: 100%;\n      text-align: left; }\n  .container .top .pagename h1 {\n        font-size: 4vw; }\n  .container .top .itemcount {\n      margin-top: -10px;\n      padding: 5px;\n      display: flex;\n      flex-flow: row;\n      justify-content: space-between;\n      align-items: baseline;\n      position: relative;\n      bottom: 25px; }\n  .container .top .itemcount .items p {\n        font-size: 3.5vw; }\n  .container .cards {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    overflow-y: auto;\n    padding: 16px;\n    justify-content: space-evenly;\n    justify-items: center;\n    position: relative; }\n  .container .cards .card {\n      width: 47%;\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content;\n      display: flex;\n      flex-flow: column;\n      margin: 4px 0px; }\n  .container .cards .card img {\n        width: 100%;\n        height: 50vw;\n        border-radius: 5px;\n        box-shadow: 5px 5px 10px #b8b8b8; }\n  .container .cards .card .itemdetails {\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between;\n        align-items: baseline;\n        align-items: flex-end;\n        font-size: 3vw; }\n  .container .cards .card .itemdetails p {\n          font-weight: bold; }\n  .container .cards .card .itemdetails p span {\n            font-weight: normal; }\n  .container .cards .card .itemdetails #icon {\n          position: relative;\n          bottom: 15px;\n          right: 10px; }\n  .container .cards .card .itemdetails #icon ion-icon {\n            font-size: 3vw;\n            cursor: pointer; }\n  .loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite; }\n  .loader .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n  .loader .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n  .loader .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n  .loader .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n  @-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n  @keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n  @-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n  @keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n  @-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n  @keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n  .loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto; }\n  .loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); }\n  .loader-hide .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n  .loader-hide .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n  .loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n  @keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n  @keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n  @keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n  @-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n  @keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n  .viewreviews {\n  position: absolute;\n  z-index: 150;\n  background: white;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  box-shadow: 5px 5px 10px #b9b9b9;\n  width: 60vw;\n  height: 90%;\n  top: 10%;\n  bottom: 40%;\n  right: 0;\n  align-items: center;\n  display: flex;\n  flex-flow: column;\n  overflow: hidden; }\n  .viewreviews .heading {\n    display: flex;\n    flex-flow: row;\n    justify-content: space-between;\n    width: 100%;\n    text-align: center;\n    margin: 5px; }\n  .viewreviews .heading ion-icon {\n      color: white;\n      position: relative;\n      right: 2vw;\n      top: 2.2vh;\n      font-size: 5vw;\n      background: black;\n      border-radius: 50%; }\n  .viewreviews .heading p {\n      letter-spacing: 1px;\n      margin: 15px 5px;\n      position: relative;\n      left: 2vw;\n      font-size: 4vw; }\n  .viewreviews .filtering {\n    display: flex;\n    flex-flow: column;\n    text-align: left;\n    padding: 10px;\n    width: 100%; }\n  .viewreviews .filtering .color h4 {\n      font-size: 4.5vw;\n      color: grey; }\n  .viewreviews .filtering .colors p {\n      font-size: 3.5vw; }\n  .viewreviews .filtering .price h4 {\n      font-size: 4.5vw;\n      color: grey; }\n  .viewreviews .filtering .prices ion-item {\n      font-size: 3.5vw; }\n  .viewreviews .crds {\n    height: 70vh;\n    overflow-y: auto; }\n  .viewreviews .crds .crd {\n      display: flex;\n      flex-flow: row;\n      justify-content: space-between;\n      width: 90vw;\n      height: 20vh;\n      margin: 5px; }\n  .viewreviews .crds .crd .profimage {\n        width: 20%;\n        height: 9vh;\n        border-radius: 50%;\n        overflow: hidden;\n        margin: 10px; }\n  .viewreviews .crds .crd .profimage img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          border-radius: 50%; }\n  .viewreviews .crds .crd .reviewdets {\n        width: 60vw; }\n  .viewreviews .crds .crd .reviewdets h4 {\n          font-family: \"Poiret One\";\n          font-weight: bold; }\n  .viewreviews .crds .crd .reviewdets p {\n          font-family: \"Raleway\";\n          font-size: 3vw; }\n  .closereviews {\n  position: absolute;\n  z-index: 150;\n  background: rgba(255, 255, 255, 0.774);\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  width: 0vw;\n  height: 85vh;\n  top: 10%;\n  bottom: 40%;\n  right: 0;\n  align-items: center;\n  display: flex;\n  flex-flow: column;\n  overflow: hidden; }\n  .closereviews .line {\n    width: 80vw;\n    height: 2px;\n    background: grey; }\n  .closereviews .heading {\n    display: flex;\n    flex-flow: row;\n    justify-content: space-between;\n    width: 100%;\n    text-align: center; }\n  .closereviews .heading ion-button {\n      border: none !important;\n      box-shadow: none !important;\n      margin: 5px; }\n  .closereviews .heading ion-button ion-icon {\n        color: black;\n        position: relative; }\n  .closereviews .heading h2 {\n      font-family: \"Poiret One\";\n      letter-spacing: 5px;\n      margin: 10px 5px;\n      position: relative;\n      left: 6vw; }\n  .closereviews .crds {\n    height: 70vh;\n    overflow-y: auto; }\n  .closereviews .crds .crd {\n      display: flex;\n      flex-flow: row;\n      justify-content: space-between;\n      width: 90vw;\n      height: 20vh;\n      margin: 10px; }\n  .closereviews .crds .crd .profimage {\n        width: 20%;\n        height: 9vh;\n        border-radius: 50%;\n        overflow: hidden;\n        margin: 10px; }\n  .closereviews .crds .crd .profimage img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          border-radius: 50%; }\n  .closereviews .crds .crd .reviewdets {\n        width: 60vw; }\n  .closereviews .crds .crd .reviewdets h4 {\n          font-family: \"Poiret One\";\n          font-weight: bold; }\n  .closereviews .crds .crd .reviewdets p {\n          font-family: \"Raleway\";\n          font-size: 3vw; }\n  @media only screen and (min-width: 1330px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  .web_view {\n    min-width: 800px;\n    max-width: 1200px;\n    margin: auto; }\n    .web_view .top {\n      width: 100%;\n      padding: 10px; }\n      .web_view .top .pagename {\n        font-family: \"Poppins\";\n        font-weight: normal;\n        letter-spacing: 2px;\n        width: 100%;\n        text-align: left; }\n      .web_view .top .itemcount {\n        margin-top: -10px;\n        padding: 5px;\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between;\n        align-items: baseline;\n        position: relative;\n        bottom: 25px; }\n    .web_view .cards {\n      display: flex;\n      flex-wrap: wrap;\n      width: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      overflow-y: auto;\n      padding: 16px;\n      justify-content: space-evenly;\n      justify-items: center;\n      position: relative; }\n      .web_view .cards .card {\n        width: 30%;\n        height: -webkit-fit-content;\n        height: -moz-fit-content;\n        height: fit-content;\n        display: flex;\n        flex-flow: column;\n        margin: 4px 0px; }\n        .web_view .cards .card img {\n          width: 100%;\n          height: 40vh;\n          border-radius: 5px;\n          box-shadow: 5px 5px 10px #b8b8b8; }\n        .web_view .cards .card .itemdetails {\n          display: flex;\n          flex-flow: row;\n          justify-content: space-between;\n          align-items: baseline;\n          align-items: flex-end; }\n          .web_view .cards .card .itemdetails p {\n            font-weight: bold; }\n            .web_view .cards .card .itemdetails p span {\n              font-weight: normal; }\n          .web_view .cards .card .itemdetails #icon {\n            position: relative;\n            bottom: 15px;\n            right: 10px; }\n            .web_view .cards .card .itemdetails #icon ion-icon {\n              cursor: pointer; } }\n  @media only screen and (max-width: 1024px) {\n  .web_view {\n    display: none;\n    width: 0%;\n    height: 0%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxsaXN0XFxsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFhLEVBQUE7RUFEZjtJQUdJLGFBQWEsRUFBQTtFQUhqQjtJQU1JLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVUsRUFBQTtFQUlkO0VBQ0Usa0NBQWtDLEVBQUE7RUFHcEM7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtFQVY3QjtJQVlJLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFiaEI7SUFnQkksY0FBYztJQUNkLGNBQWMsRUFBQTtFQUlsQjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUyxFQUFBO0VBTlg7SUFTSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVksRUFBQTtFQVhoQjtNQWFNLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtFQWpCdEI7UUFvQlEsY0FBYyxFQUFBO0VBcEJ0QjtNQXlCTSxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGFBQWE7TUFDYixjQUFjO01BQ2QsOEJBQThCO01BQzlCLHFCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsWUFBWSxFQUFBO0VBaENsQjtRQW9DVSxnQkFBZ0IsRUFBQTtFQXBDMUI7SUEyQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixxQkFBcUI7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LFdBQVc7VUFDWCxZQUFZO1VBQ1osa0JBQWtCO1VBQ2xCLGdDQUEyQyxFQUFBO1FBckRuRDtVQXlEUSxhQUFhO1VBQ2IsY0FBYztVQUNkLDhCQUE4QjtVQUM5QixxQkFBcUI7VUFDckIscUJBQXFCLEVBQUE7VUE3RDdCO1lBZ0VVLGlCQUFpQixFQUFBO1lBaEUzQjtjQWtFWSxtQkFBbUIsRUFBQTtVQWxFL0I7WUF1RVUsa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixXQUFXLEVBQUE7WUF6RXJCO2NBNkVZLGVBQWUsRUFBQSxFQUNoQjtFQVFiO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVUsRUFBQSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICNpY29uIHtcclxuICAgIGNvbG9yOiBtYXJvb247XHJcbiAgfVxyXG4gICNudW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5zaXplU3R5bGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAwLCAwLCAwLjcxMik7XHJcbn1cclxuXHJcbiNtc2d7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB0b3A6IDI1dmg7XHJcbiAgd2lkdGg6IDk1dnc7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiA1MHZ3O1xyXG4gIH1cclxuICBwIHtcclxuICAgIGNvbG9yOiAjYjJiMmIyO1xyXG4gICAgZm9udC1zaXplOiA1dnc7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3R0b206IDA7XHJcblxyXG4gIC50b3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAyMXZ3O1xyXG4gICAgLnBhZ2VuYW1lIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtY291bnQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm90dG9tOiAyNXB4O1xyXG5cclxuICAgICAgLml0ZW1zIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMy41dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbjogNHB4IDBweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHZ3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDE4NCwgMTg0LCAxODQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaXRlbWRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2ljb24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjcsIDYzKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZG1vdmVyIDMwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLm1hcGxvYWRlciB7XHJcbiAgICAubGRzLWVsbGlwc2lzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzM3B4O1xyXG4gICAgICB3aWR0aDogMTNweDtcclxuICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbGVmdDogMzJweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgICBsZWZ0OiA1NnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGluZy10ZXh0IHtcclxuICAvLyBjb2xvcjogeWVsbG93O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwdmg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZDogcmVkO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICAvL3otaW5kZXg6IDkwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ubG9hZGVyLWhpZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICAubWFwbG9hZGVyIHtcclxuICAgIC5sZHMtZWxsaXBzaXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbWFwbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4MiwgNzAsIDk1KTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE5MiwgMTkyKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMDYsIDIwNiwgMjU1KTtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MiwgNTAsIDc1KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTAsIDE4MiwgNDMpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTY3LCAxNjcpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi52aWV3cmV2aWV3cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE1MDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigxODUsIDE4NSwgMTg1KTtcclxuICB3aWR0aDogNjB2dztcclxuICBoZWlnaHQ6IDkwJTtcclxuICB0b3A6IDEwJTtcclxuICBib3R0b206IDQwJTtcclxuICByaWdodDogMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLmhlYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICByaWdodDogMnZ3O1xyXG4gICAgICB0b3A6IDIuMnZoO1xyXG4gICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgbWFyZ2luOiAxNXB4IDVweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsZWZ0OiAydnc7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZpbHRlcmluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmNvbG9yIHtcclxuICAgICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sb3JzIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjV2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcmljZSB7XHJcbiAgICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDQuNXZ3O1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByaWNlcyB7XHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3JkcyB7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgIC5jcmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogOTB2dztcclxuICAgICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICAgIC5wcm9maW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5dmg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZXZpZXdkZXRzIHtcclxuICAgICAgICB3aWR0aDogNjB2dztcclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNsb3NlcmV2aWV3cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE1MDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzc0KTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgd2lkdGg6IDB2dztcclxuICBoZWlnaHQ6IDg1dmg7XHJcbiAgdG9wOiAxMCU7XHJcbiAgYm90dG9tOiA0MCU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5saW5lIHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyBsZWZ0OiA1dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDVweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsZWZ0OiA2dnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3JkcyB7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgIC5jcmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogOTB2dztcclxuICAgICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICAucHJvZmltYWdlIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGhlaWdodDogOXZoO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmV2aWV3ZGV0cyB7XHJcbiAgICAgICAgd2lkdGg6IDYwdnc7XHJcblxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMzMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLndlYl92aWV3e1xyXG4gICAgbWluLXdpZHRoOiA4MDBweDtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgIC50b3Age1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgLnBhZ2VuYW1lIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLml0ZW1jb3VudCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOiAyNXB4O1xyXG4gIFxyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW46IDRweCAwcHg7XHJcbiAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigxODQsIDE4NCwgMTg0KTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLml0ZW1kZXRhaWxzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgIFxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAjaWNvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICBcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC53ZWJfdmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ListPage = /** @class */ (function () {
    function ListPage(NavCtrl, router, route, navCtrl, toastCtrl) {
        var _this = this;
        this.NavCtrl = NavCtrl;
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.dbWishlist = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("Wishlist");
        this.dbProduct = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("Products");
        this.dbPromo = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("Specials");
        this.promo = [];
        this.myProduct = [];
        this.collectionName = "";
        this.price = 0;
        this.heartIndex = null;
        this.loaderMessages = 'Loading...';
        this.loaderAnimate = true;
        this.uid = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
        this.dbWish = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('Wishlist');
        this.viewFilter = false;
        this.viewPrice = false;
        this.viewReviews = false;
        this.collectionName = this.route.snapshot.paramMap.get('key');
        //  console.log(this.collectionName);
        this.route.queryParams.subscribe(function (params) {
            _this.doc_data = params["data"];
            _this.col = params["col"];
        });
    }
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaderAnimate = false;
        }, 2000);
        //  console.log(); 
        this.getAllProduct();
        this.getSales("name");
        this.dbWishlist.where('customerUID', '==', this.uid).onSnapshot(function (res1) {
            _this.myWish = res1.size;
        });
    };
    /* list() {
      this.router.navigateByUrl("/list")
    } */
    /*  async productCategory() {
   
     } */
    ListPage.prototype.getSales = function (order) {
        var _this = this;
        this.dbPromo.orderBy(order, 'asc').onSnapshot(function (res) {
            _this.promo = [];
            res.forEach(function (doc) {
                _this.promo.push({ info: doc.data(), id: doc.id });
            });
            // console.log('Sales arr ',this.promo);
        });
    };
    ListPage.prototype.getAllProduct = function () {
        var _this = this;
        this.dbProduct.doc(this.col).collection(this.collectionName).onSnapshot(function (res) {
            _this.myProduct = [];
            res.forEach(function (doc) {
                _this.myProduct.push({ info: doc.data(), id: doc.id });
                // console.log('These products ', this.myProduct); 
            });
        });
    };
    /* orderBy() {
      this.getAllProduct(this.sortVal);
      // this.getSales(this.sortVal);
    } */
    ListPage.prototype.sortSales = function () {
        this.getSales(this.sortSale);
    };
    ListPage.prototype.viewitem = function (id, data) {
        var navigationExtras = {
            queryParams: {
                data: data,
                col: this.collectionName,
                category: this.col
                //currency: JSON.stringify(currency),
                // refresh: refresh
            }
        };
        this.navCtrl.navigateForward(['view', id], navigationExtras);
        // this.router.navigate(['view', id])
    };
    ListPage.prototype.wishList = function (id, data, index) {
        var _this = this;
        //console.log('My info ', id, data);
        this.heartIndex = index;
        this.dbWishlist.doc(id).get().then(function (res) {
            if (res.exists == true) {
                _this.toastController('Product already in wishlist..');
            }
            else {
                _this.dbWishlist.doc(res.id).set({
                    customerUID: firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid, price: data.price,
                    image: data.pictureLink, name: data.name, id: id, category: _this.collectionName
                }).then(function () {
                    _this.toastController('Added to wishlist..');
                });
            }
        });
    };
    ListPage.prototype.wishListSale = function (id, data, index) {
        var _this = this;
        // console.log('My info ', id, data);
        this.heartIndex = index;
        this.dbWishlist.doc(id).get().then(function (res) {
            if (res.exists == true) {
                _this.toastController('Product already in wishlist..');
            }
            else {
                _this.dbWishlist.doc(res.id).set({
                    customerUID: firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid, price: data.saleprice, name: data.name,
                    image: data.pictureLink, id: id, category: _this.collectionName
                }).then(function () {
                    _this.toastController('Added to wishlist..');
                    //this.router.navigateByUrl('basket');
                });
            }
        });
    };
    ListPage.prototype.wishlist = function () {
        this.router.navigateByUrl('wishlist');
    };
    ListPage.prototype.toastController = function (message) {
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
    ListPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ListPage.prototype.reviewed = function () {
        // this.getAllProduct()
        this.viewReviews = !this.viewReviews;
    };
    ListPage.prototype.rev = function () {
        this.viewReviews = !this.viewReviews;
    };
    ListPage.prototype.filtered = function () {
        //console.log(val);
        this.viewFilter = !this.viewFilter;
    };
    ListPage.prototype.priced = function () {
        this.viewPrice = !this.viewPrice;
    };
    ListPage.prototype.colorOpt = function (info) {
        var _this = this;
        //console.log(info.path[0].innerHTML);
        //this.myProduct.sort(info.path[0].innerHTML);
        // this.myProduct = [];
        this.dbProduct.doc(this.col).collection(this.collectionName).where('color', 'array-contains', info.path[0].innerHTML).onSnapshot(function (res) {
            _this.myProduct = [];
            res.forEach(function (doc) {
                _this.myProduct.push({ info: doc.data(), id: doc.id });
                // console.log('These products ', this.myProduct); 
            });
            _this.rev();
        });
    };
    ListPage.prototype.setPriceRange = function (param) {
        var _this = this;
        this.price = param;
        //console.log("Price range = "+ this.price);
        if (this.price >= 0) {
            this.myProduct = [];
            this.dbProduct.doc(this.col).collection(this.collectionName).where('price', '>=', param)
                .onSnapshot(function (res) {
                //console.log(res.docs);
                res.forEach(function (doc) {
                    // this.db.collection('builderProfile').get().then(snapshot => {
                    //   snapshot.forEach(doc => {
                    _this.myProduct.push({ info: doc.data(), id: doc.id });
                    // this.bUID = doc.id;
                    //   });
                    //   console.log('Builders: ', this.builder);
                    // });
                });
            });
        }
    };
    ListPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=18.js.map