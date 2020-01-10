(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button id=\"icon\" (click)=\"wishlist()\">\r\n        <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\r\n        <p id=\"number\">{{myWish}}</p>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button id=\"icon\" (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <!-- <ion-toolbar color=\"primary\">\r\n      <ion-button (click)=\"logout()\" slot=\"end\">Logout</ion-button>\r\n      <ion-title>\r\n        Broken Stool\r\n      </ion-title>\r\n    </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div [ngClass]=\"{'loader': loaderAnimate, 'loader-hide': !loaderAnimate}\">\r\n    <div class=\"maploader\">\r\n      <div class=\"lds-ellipsis\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n      </div>\r\n      <p style=\"color:white; text-align: center;\">{{loaderMessages}}</p>\r\n    </div>\r\n    <!--  <div class=\"loading-text\">\r\n          <p>Loading Map</p>\r\n        </div> -->\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"top\">\r\n      <div class=\"pagename\">\r\n        <h1 style=\"text-transform: uppercase; letter-spacing: 2px;\"><b>{{collectionName}}</b></h1>\r\n      </div>\r\n      <div class=\"itemcount\">\r\n        <div class=\"items\" *ngIf=\"collectionName!=='sales'\">\r\n          <p>{{myProduct.length}} item(s)</p>\r\n        </div>\r\n        <div class=\"items\" *ngIf=\"collectionName==='sales'\">\r\n          <p>{{promo.length}} item(s)</p>\r\n        </div>\r\n        <div class=\"filter\">\r\n\r\n          <p (click)=\"reviewed()\" style=\"opacity: 0.5;\">Filter</p>\r\n        </div>\r\n\r\n        <!-- <div class=\"filter\" *ngIf=\"collectionName==='sales'\">\r\n\r\n          <ion-select placeholder=\"Filter ASC\" [(ngModel)]=\"sortSale\" (ionChange)=\"sortSales()\">\r\n            <ion-select-option value=\"name\">Name</ion-select-option>\r\n            <ion-select-option value=\"discount\">Discount</ion-select-option>\r\n            <ion-select-option value=\"saleprice\">Price</ion-select-option>\r\n          </ion-select>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"cards\" *ngIf=\"collectionName!=='sales'\">\r\n      <div class=\"card\" *ngFor=\"let p of myProduct, let i=index\">\r\n        <img src=\"{{p.info.pictureLink}}\" (click)=\"viewitem(p.id, p.info)\">\r\n        <div class=\"itemdetails\">\r\n          <div class=\"name\">\r\n            <p>{{p.info.name}} <br> <span>{{p.info.price | currency:'R'}}</span></p>\r\n          </div>\r\n          <div id=\"icon\">\r\n\r\n            <ion-icon slot=\"end\" name=\"heart-empty\" (click)=\"wishList(p.id, p.info)\"></ion-icon>\r\n          </div>\r\n          <!-- [ngClass]=\"{'sizeStyle':heartIndex==i}\" -->\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"cards\" *ngIf=\"collectionName==='sales'\">\r\n      <div class=\"card\" *ngFor=\"let s of promo\">\r\n        <img src=\"{{s.info.pictureLink}}\" (click)=\"viewitem(s.id, s.info)\">\r\n        <div class=\"itemdetails\">\r\n          <div class=\"name\">\r\n            <p>{{s.info.name}} <br> <span>{{s.info.saleprice | currency:'R'}}</span></p>\r\n          </div>\r\n          <div id=\"icon\">\r\n\r\n            <ion-icon slot=\"end\" name=\"heart-empty\" (click)=\"wishListSale(s.id, s.info)\"></ion-icon>\r\n          </div>\r\n          <!-- [ngClass]=\"{'sizeStyle':heartIndex==i}\" -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"cards\" id=\"msg\" *ngIf= \"myProduct.length === 0 && collectionName!=='sales'\">\r\n      <p>No Items</p>\r\n      <img src=\"../../assets/empty-cart.svg\">\r\n    </div>\r\n\r\n    <div [ngClass]=\"{'viewreviews': viewReviews, 'closereviews': !viewReviews}\">\r\n\r\n      <div class=\"heading\">\r\n        <p>Filter Items By:</p>\r\n\r\n        <ion-icon slot=\"icon-only\" name=\"close\" (click)=\"reviewed()\"></ion-icon>\r\n\r\n      </div>\r\n      <div class=\"line\"></div>\r\n\r\n      <div class=\"filtering\">\r\n\r\n        <div class=\"color\" (click)=\"filtered()\">\r\n          <h4>Colour</h4>\r\n        </div>\r\n        <div class=\"colors\" *ngIf=\"viewFilter\" (click)=\"colorOpt($event)\">\r\n          <p>Red</p>\r\n          <p>Blue</p>\r\n          <p>Orange</p>\r\n          <p>Green</p>\r\n          <p>Purple</p>\r\n        </div>\r\n\r\n        <div class=\"price\" (click)=\"priced()\">\r\n          <h4>Price</h4>\r\n        </div>\r\n        <div class=\"prices\" >\r\n          <ion-item *ngIf=\"viewPrice\">\r\n            <ion-range style=\"width: 50%\" pin=\"true\" min=\"0\" max=\"1000\" step=\"10\" color=\"secondary\" [(ngModel)]=\"price\"\r\n              (ionChange)=\"setPriceRange(price)\">\r\n              <ion-label slot=\"start\">{{price | currency:'R'}}</ion-label>\r\n              <ion-label slot=\"end\">{{1000 | currency:'R'}}</ion-label>\r\n            </ion-range>\r\n          </ion-item>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <!-- *ngIf=\"viewFilter=='all'||viewFilter=='color'\"  -->\r\n</ion-content>");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");







let ListPageModule = class ListPageModule {
};
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



/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: white;\n}\nion-toolbar #icon {\n  color: maroon;\n}\nion-toolbar #number {\n  font-size: 0.8em;\n  position: relative;\n  top: 8px;\n  right: 5px;\n}\n.sizeStyle {\n  background: rgba(128, 0, 0, 0.712);\n}\n#msg {\n  display: flex;\n  flex-flow: column;\n  position: absolute;\n  align-items: center;\n  justify-content: space-evenly;\n  top: 25vh;\n  width: 95vw;\n  margin: 10px;\n  font-family: \"Poppins\";\n  box-shadow: none !important;\n}\n#msg img {\n  width: 80vw;\n  height: 50vw;\n}\n#msg p {\n  color: #b2b2b2;\n  font-size: 5vw;\n}\n.container {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  width: 100vw;\n  height: 100%;\n  bottom: 0;\n}\n.container .top {\n  width: 100%;\n  padding: 10px;\n  height: 21vw;\n}\n.container .top .pagename {\n  font-family: \"Poppins\";\n  font-weight: normal;\n  letter-spacing: 2px;\n  width: 100%;\n  text-align: left;\n}\n.container .top .pagename h1 {\n  font-size: 4vw;\n}\n.container .top .itemcount {\n  margin-top: -10px;\n  padding: 5px;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: baseline;\n  position: relative;\n  bottom: 25px;\n}\n.container .top .itemcount .items p {\n  font-size: 3.5vw;\n}\n.container .cards {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow-y: auto;\n  padding: 16px;\n  justify-content: space-evenly;\n  justify-items: center;\n  position: relative;\n}\n.container .cards .card {\n  width: 47%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-flow: column;\n  margin: 4px 0px;\n}\n.container .cards .card img {\n  width: 100%;\n  height: 50vw;\n  border-radius: 5px;\n  box-shadow: 5px 5px 10px #b8b8b8;\n}\n.container .cards .card .itemdetails {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: baseline;\n  align-items: flex-end;\n  font-size: 3vw;\n}\n.container .cards .card .itemdetails p {\n  font-weight: bold;\n}\n.container .cards .card .itemdetails p span {\n  font-weight: normal;\n}\n.container .cards .card .itemdetails #icon {\n  position: relative;\n  bottom: 15px;\n  right: 10px;\n}\n.container .cards .card .itemdetails #icon ion-icon {\n  font-size: 3vw;\n  cursor: pointer;\n}\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite;\n}\n.loader .maploader .lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.loader .maploader .lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.loader .maploader .lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n.loader .maploader .lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader .maploader .lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader .maploader .lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n.loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto;\n}\n.loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.loader-hide .maploader .lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.loader-hide .maploader .lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n@-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f;\n  }\n  50% {\n    border-color: #2a324b;\n  }\n  100% {\n    border-color: #fab62b;\n  }\n}\n@keyframes maploader {\n  0% {\n    border-color: #b6465f;\n  }\n  50% {\n    border-color: #2a324b;\n  }\n  100% {\n    border-color: #fab62b;\n  }\n}\n.viewreviews {\n  position: absolute;\n  z-index: 150;\n  background: white;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  box-shadow: 5px 5px 10px #b9b9b9;\n  width: 60vw;\n  height: 90%;\n  top: 10%;\n  bottom: 40%;\n  right: 0;\n  align-items: center;\n  display: flex;\n  flex-flow: column;\n  overflow: hidden;\n}\n.viewreviews .heading {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  width: 100%;\n  text-align: center;\n  margin: 5px;\n}\n.viewreviews .heading ion-icon {\n  color: white;\n  position: relative;\n  right: 2vw;\n  top: 2.2vh;\n  font-size: 5vw;\n  background: black;\n  border-radius: 50%;\n}\n.viewreviews .heading p {\n  letter-spacing: 1px;\n  margin: 15px 5px;\n  position: relative;\n  left: 2vw;\n  font-size: 4vw;\n}\n.viewreviews .filtering {\n  display: flex;\n  flex-flow: column;\n  text-align: left;\n  padding: 10px;\n  width: 100%;\n}\n.viewreviews .filtering .color h4 {\n  font-size: 4.5vw;\n  color: grey;\n}\n.viewreviews .filtering .colors p {\n  font-size: 3.5vw;\n}\n.viewreviews .filtering .price h4 {\n  font-size: 4.5vw;\n  color: grey;\n}\n.viewreviews .filtering .prices ion-item {\n  font-size: 3.5vw;\n}\n.viewreviews .crds {\n  height: 70vh;\n  overflow-y: auto;\n}\n.viewreviews .crds .crd {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  width: 90vw;\n  height: 20vh;\n  margin: 5px;\n}\n.viewreviews .crds .crd .profimage {\n  width: 20%;\n  height: 9vh;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 10px;\n}\n.viewreviews .crds .crd .profimage img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n.viewreviews .crds .crd .reviewdets {\n  width: 60vw;\n}\n.viewreviews .crds .crd .reviewdets h4 {\n  font-family: \"Poiret One\";\n  font-weight: bold;\n}\n.viewreviews .crds .crd .reviewdets p {\n  font-family: \"Raleway\";\n  font-size: 3vw;\n}\n.closereviews {\n  position: absolute;\n  z-index: 150;\n  background: rgba(255, 255, 255, 0.774);\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  width: 0vw;\n  height: 85vh;\n  top: 10%;\n  bottom: 40%;\n  right: 0;\n  align-items: center;\n  display: flex;\n  flex-flow: column;\n  overflow: hidden;\n}\n.closereviews .line {\n  width: 80vw;\n  height: 2px;\n  background: grey;\n}\n.closereviews .heading {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  width: 100%;\n  text-align: center;\n}\n.closereviews .heading ion-button {\n  border: none !important;\n  box-shadow: none !important;\n  margin: 5px;\n}\n.closereviews .heading ion-button ion-icon {\n  color: black;\n  position: relative;\n}\n.closereviews .heading h2 {\n  font-family: \"Poiret One\";\n  letter-spacing: 5px;\n  margin: 10px 5px;\n  position: relative;\n  left: 6vw;\n}\n.closereviews .crds {\n  height: 70vh;\n  overflow-y: auto;\n}\n.closereviews .crds .crd {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  width: 90vw;\n  height: 20vh;\n  margin: 10px;\n}\n.closereviews .crds .crd .profimage {\n  width: 20%;\n  height: 9vh;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 10px;\n}\n.closereviews .crds .crd .profimage img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n.closereviews .crds .crd .reviewdets {\n  width: 60vw;\n}\n.closereviews .crds .crd .reviewdets h4 {\n  font-family: \"Poiret One\";\n  font-weight: bold;\n}\n.closereviews .crds .crd .reviewdets p {\n  font-family: \"Raleway\";\n  font-size: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxsaXN0XFxsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7QUNFSjtBREFFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDRUo7QURFQTtFQUNFLGtDQUFBO0FDQ0Y7QURFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFSjtBREFFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNFSjtBREVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0VOO0FEQU07RUFDRSxjQUFBO0FDRVI7QURFSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FOO0FER1E7RUFDRSxnQkFBQTtBQ0RWO0FET0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURPSTtFQUNFLFVBQUE7RUFD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ZSI6InNyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICNpY29uIHtcclxuICAgIGNvbG9yOiBtYXJvb247XHJcbiAgfVxyXG4gICNudW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5zaXplU3R5bGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAwLCAwLCAwLjcxMik7XHJcbn1cclxuXHJcbiNtc2d7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB0b3A6IDI1dmg7XHJcbiAgd2lkdGg6IDk1dnc7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiA1MHZ3O1xyXG4gIH1cclxuICBwIHtcclxuICAgIGNvbG9yOiAjYjJiMmIyO1xyXG4gICAgZm9udC1zaXplOiA1dnc7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3R0b206IDA7XHJcblxyXG4gIC50b3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAyMXZ3O1xyXG4gICAgLnBhZ2VuYW1lIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtY291bnQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm90dG9tOiAyNXB4O1xyXG5cclxuICAgICAgLml0ZW1zIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMy41dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbjogNHB4IDBweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHZ3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDE4NCwgMTg0LCAxODQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaXRlbWRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2ljb24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjcsIDYzKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZG1vdmVyIDMwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLm1hcGxvYWRlciB7XHJcbiAgICAubGRzLWVsbGlwc2lzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzM3B4O1xyXG4gICAgICB3aWR0aDogMTNweDtcclxuICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbGVmdDogMzJweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgICBsZWZ0OiA1NnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGluZy10ZXh0IHtcclxuICAvLyBjb2xvcjogeWVsbG93O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwdmg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZDogcmVkO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICAvL3otaW5kZXg6IDkwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ubG9hZGVyLWhpZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICAubWFwbG9hZGVyIHtcclxuICAgIC5sZHMtZWxsaXBzaXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbWFwbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4MiwgNzAsIDk1KTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE5MiwgMTkyKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMDYsIDIwNiwgMjU1KTtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MiwgNTAsIDc1KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTAsIDE4MiwgNDMpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTY3LCAxNjcpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi52aWV3cmV2aWV3cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE1MDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigxODUsIDE4NSwgMTg1KTtcclxuICB3aWR0aDogNjB2dztcclxuICBoZWlnaHQ6IDkwJTtcclxuICB0b3A6IDEwJTtcclxuICBib3R0b206IDQwJTtcclxuICByaWdodDogMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLmhlYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICByaWdodDogMnZ3O1xyXG4gICAgICB0b3A6IDIuMnZoO1xyXG4gICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgbWFyZ2luOiAxNXB4IDVweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsZWZ0OiAydnc7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZpbHRlcmluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmNvbG9yIHtcclxuICAgICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sb3JzIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjV2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcmljZSB7XHJcbiAgICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDQuNXZ3O1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByaWNlcyB7XHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3JkcyB7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgIC5jcmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogOTB2dztcclxuICAgICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICAgIC5wcm9maW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5dmg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZXZpZXdkZXRzIHtcclxuICAgICAgICB3aWR0aDogNjB2dztcclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNsb3NlcmV2aWV3cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE1MDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzc0KTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgd2lkdGg6IDB2dztcclxuICBoZWlnaHQ6IDg1dmg7XHJcbiAgdG9wOiAxMCU7XHJcbiAgYm90dG9tOiA0MCU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5saW5lIHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyBsZWZ0OiA1dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDVweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsZWZ0OiA2dnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3JkcyB7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgIC5jcmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogOTB2dztcclxuICAgICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICAucHJvZmltYWdlIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGhlaWdodDogOXZoO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmV2aWV3ZGV0cyB7XHJcbiAgICAgICAgd2lkdGg6IDYwdnc7XHJcblxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLXRvb2xiYXIgI2ljb24ge1xuICBjb2xvcjogbWFyb29uO1xufVxuaW9uLXRvb2xiYXIgI251bWJlciB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5zaXplU3R5bGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMCwgMCwgMC43MTIpO1xufVxuXG4jbXNnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHRvcDogMjV2aDtcbiAgd2lkdGg6IDk1dnc7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4jbXNnIGltZyB7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDUwdnc7XG59XG4jbXNnIHAge1xuICBjb2xvcjogI2IyYjJiMjtcbiAgZm9udC1zaXplOiA1dnc7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvdHRvbTogMDtcbn1cbi5jb250YWluZXIgLnRvcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDIxdnc7XG59XG4uY29udGFpbmVyIC50b3AgLnBhZ2VuYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jb250YWluZXIgLnRvcCAucGFnZW5hbWUgaDEge1xuICBmb250LXNpemU6IDR2dztcbn1cbi5jb250YWluZXIgLnRvcCAuaXRlbWNvdW50IHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMjVweDtcbn1cbi5jb250YWluZXIgLnRvcCAuaXRlbWNvdW50IC5pdGVtcyBwIHtcbiAgZm9udC1zaXplOiAzLjV2dztcbn1cbi5jb250YWluZXIgLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWluZXIgLmNhcmRzIC5jYXJkIHtcbiAgd2lkdGg6IDQ3JTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIG1hcmdpbjogNHB4IDBweDtcbn1cbi5jb250YWluZXIgLmNhcmRzIC5jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdnc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNiOGI4Yjg7XG59XG4uY29udGFpbmVyIC5jYXJkcyAuY2FyZCAuaXRlbWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZm9udC1zaXplOiAzdnc7XG59XG4uY29udGFpbmVyIC5jYXJkcyAuY2FyZCAuaXRlbWRldGFpbHMgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuY2FyZHMgLmNhcmQgLml0ZW1kZXRhaWxzIHAgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uY29udGFpbmVyIC5jYXJkcyAuY2FyZCAuaXRlbWRldGFpbHMgI2ljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC5jYXJkcyAuY2FyZCAuaXRlbWRldGFpbHMgI2ljb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDN2dztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDFiM2Y7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xuICBhbmltYXRpb246IGJhY2tncm91bmRtb3ZlciAzMHMgbGluZWFyIGluZmluaXRlO1xufVxuLmxvYWRlciAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5sb2FkZXIgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzM3B4O1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcbn1cbi5sb2FkZXIgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xufVxuLmxvYWRlciAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDhweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG59XG4ubG9hZGVyIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogMzJweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG59XG4ubG9hZGVyIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNTZweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XG4gIH1cbn1cblxuLmxvYWRpbmctdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHZoO1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDUwdmg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvYWRlci1oaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDIwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzNweDtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XG59XG4ubG9hZGVyLWhpZGUgLm1hcGxvYWRlciAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogOHB4O1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbn1cbi5sb2FkZXItaGlkZSAubWFwbG9hZGVyIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDMycHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xufVxuLmxvYWRlci1oaWRlIC5tYXBsb2FkZXIgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNTZweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtYXBsb2FkZXIge1xuICAwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYjY0NjVmO1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmEzMjRiO1xuICB9XG4gIDEwMCUge1xuICAgIGJvcmRlci1jb2xvcjogI2ZhYjYyYjtcbiAgfVxufVxuLnZpZXdyZXZpZXdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxNTA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggI2I5YjliOTtcbiAgd2lkdGg6IDYwdnc7XG4gIGhlaWdodDogOTAlO1xuICB0b3A6IDEwJTtcbiAgYm90dG9tOiA0MCU7XG4gIHJpZ2h0OiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi52aWV3cmV2aWV3cyAuaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4O1xufVxuLnZpZXdyZXZpZXdzIC5oZWFkaW5nIGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAydnc7XG4gIHRvcDogMi4ydmg7XG4gIGZvbnQtc2l6ZTogNXZ3O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnZpZXdyZXZpZXdzIC5oZWFkaW5nIHAge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW46IDE1cHggNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDJ2dztcbiAgZm9udC1zaXplOiA0dnc7XG59XG4udmlld3Jldmlld3MgLmZpbHRlcmluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi52aWV3cmV2aWV3cyAuZmlsdGVyaW5nIC5jb2xvciBoNCB7XG4gIGZvbnQtc2l6ZTogNC41dnc7XG4gIGNvbG9yOiBncmV5O1xufVxuLnZpZXdyZXZpZXdzIC5maWx0ZXJpbmcgLmNvbG9ycyBwIHtcbiAgZm9udC1zaXplOiAzLjV2dztcbn1cbi52aWV3cmV2aWV3cyAuZmlsdGVyaW5nIC5wcmljZSBoNCB7XG4gIGZvbnQtc2l6ZTogNC41dnc7XG4gIGNvbG9yOiBncmV5O1xufVxuLnZpZXdyZXZpZXdzIC5maWx0ZXJpbmcgLnByaWNlcyBpb24taXRlbSB7XG4gIGZvbnQtc2l6ZTogMy41dnc7XG59XG4udmlld3Jldmlld3MgLmNyZHMge1xuICBoZWlnaHQ6IDcwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4udmlld3Jldmlld3MgLmNyZHMgLmNyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA5MHZ3O1xuICBoZWlnaHQ6IDIwdmg7XG4gIG1hcmdpbjogNXB4O1xufVxuLnZpZXdyZXZpZXdzIC5jcmRzIC5jcmQgLnByb2ZpbWFnZSB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogOXZoO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTBweDtcbn1cbi52aWV3cmV2aWV3cyAuY3JkcyAuY3JkIC5wcm9maW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi52aWV3cmV2aWV3cyAuY3JkcyAuY3JkIC5yZXZpZXdkZXRzIHtcbiAgd2lkdGg6IDYwdnc7XG59XG4udmlld3Jldmlld3MgLmNyZHMgLmNyZCAucmV2aWV3ZGV0cyBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udmlld3Jldmlld3MgLmNyZHMgLmNyZCAucmV2aWV3ZGV0cyBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBmb250LXNpemU6IDN2dztcbn1cblxuLmNsb3NlcmV2aWV3cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTUwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzc0KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDB2dztcbiAgaGVpZ2h0OiA4NXZoO1xuICB0b3A6IDEwJTtcbiAgYm90dG9tOiA0MCU7XG4gIHJpZ2h0OiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jbG9zZXJldmlld3MgLmxpbmUge1xuICB3aWR0aDogODB2dztcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG59XG4uY2xvc2VyZXZpZXdzIC5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jbG9zZXJldmlld3MgLmhlYWRpbmcgaW9uLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4O1xufVxuLmNsb3NlcmV2aWV3cyAuaGVhZGluZyBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2xvc2VyZXZpZXdzIC5oZWFkaW5nIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICBtYXJnaW46IDEwcHggNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDZ2dztcbn1cbi5jbG9zZXJldmlld3MgLmNyZHMge1xuICBoZWlnaHQ6IDcwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uY2xvc2VyZXZpZXdzIC5jcmRzIC5jcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogOTB2dztcbiAgaGVpZ2h0OiAyMHZoO1xuICBtYXJnaW46IDEwcHg7XG59XG4uY2xvc2VyZXZpZXdzIC5jcmRzIC5jcmQgLnByb2ZpbWFnZSB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogOXZoO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTBweDtcbn1cbi5jbG9zZXJldmlld3MgLmNyZHMgLmNyZCAucHJvZmltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY2xvc2VyZXZpZXdzIC5jcmRzIC5jcmQgLnJldmlld2RldHMge1xuICB3aWR0aDogNjB2dztcbn1cbi5jbG9zZXJldmlld3MgLmNyZHMgLmNyZCAucmV2aWV3ZGV0cyBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2xvc2VyZXZpZXdzIC5jcmRzIC5jcmQgLnJldmlld2RldHMgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgZm9udC1zaXplOiAzdnc7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let ListPage = class ListPage {
    constructor(NavCtrl, router, route, navCtrl, toastCtrl) {
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
        this.route.queryParams.subscribe(params => {
            this.doc_data = params["data"];
            this.col = params["col"];
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderAnimate = false;
        }, 2000);
        //  console.log(); 
        this.getAllProduct();
        this.getSales("name");
        this.dbWishlist.where('customerUID', '==', this.uid).onSnapshot((res1) => {
            this.myWish = res1.size;
        });
    }
    /* list() {
      this.router.navigateByUrl("/list")
    } */
    /*  async productCategory() {
   
     } */
    getSales(order) {
        this.dbPromo.orderBy(order, 'asc').onSnapshot((res) => {
            this.promo = [];
            res.forEach((doc) => {
                this.promo.push({ info: doc.data(), id: doc.id });
            });
            // console.log('Sales arr ',this.promo);
        });
    }
    getAllProduct() {
        this.dbProduct.doc(this.col).collection(this.collectionName).onSnapshot((res) => {
            this.myProduct = [];
            res.forEach((doc) => {
                this.myProduct.push({ info: doc.data(), id: doc.id });
                // console.log('These products ', this.myProduct); 
            });
        });
    }
    /* orderBy() {
      this.getAllProduct(this.sortVal);
      // this.getSales(this.sortVal);
    } */
    sortSales() {
        this.getSales(this.sortSale);
    }
    viewitem(id, data) {
        let navigationExtras = {
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
    }
    wishList(id, data, index) {
        //console.log('My info ', id, data);
        this.heartIndex = index;
        this.dbWishlist.doc(id).get().then((res) => {
            if (res.exists == true) {
                this.toastController('Product already in wishlist..');
            }
            else {
                this.dbWishlist.doc(res.id).set({
                    customerUID: firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid, price: data.price,
                    image: data.pictureLink, name: data.name, id: id, category: this.collectionName
                }).then(() => {
                    this.toastController('Added to wishlist..');
                });
            }
        });
    }
    wishListSale(id, data, index) {
        // console.log('My info ', id, data);
        this.heartIndex = index;
        this.dbWishlist.doc(id).get().then((res) => {
            if (res.exists == true) {
                this.toastController('Product already in wishlist..');
            }
            else {
                this.dbWishlist.doc(res.id).set({
                    customerUID: firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid, price: data.saleprice, name: data.name,
                    image: data.pictureLink, id: id, category: this.collectionName
                }).then(() => {
                    this.toastController('Added to wishlist..');
                    //this.router.navigateByUrl('basket');
                });
            }
        });
    }
    wishlist() {
        this.router.navigateByUrl('wishlist');
    }
    toastController(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({ message: message, duration: 2000 });
            return toast.present();
        });
    }
    goBack() {
        this.navCtrl.pop();
    }
    reviewed() {
        // this.getAllProduct()
        this.viewReviews = !this.viewReviews;
    }
    rev() {
        this.viewReviews = !this.viewReviews;
    }
    filtered() {
        //console.log(val);
        this.viewFilter = !this.viewFilter;
    }
    priced() {
        this.viewPrice = !this.viewPrice;
    }
    colorOpt(info) {
        //console.log(info.path[0].innerHTML);
        //this.myProduct.sort(info.path[0].innerHTML);
        // this.myProduct = [];
        this.dbProduct.doc(this.col).collection(this.collectionName).where('color', 'array-contains', info.path[0].innerHTML).onSnapshot((res) => {
            this.myProduct = [];
            res.forEach((doc) => {
                this.myProduct.push({ info: doc.data(), id: doc.id });
                // console.log('These products ', this.myProduct); 
            });
            this.rev();
        });
    }
    setPriceRange(param) {
        this.price = param;
        //console.log("Price range = "+ this.price);
        if (this.price >= 0) {
            this.myProduct = [];
            this.dbProduct.doc(this.col).collection(this.collectionName).where('price', '>=', param)
                .onSnapshot((res) => {
                //console.log(res.docs);
                res.forEach((doc) => {
                    // this.db.collection('builderProfile').get().then(snapshot => {
                    //   snapshot.forEach(doc => {
                    this.myProduct.push({ info: doc.data(), id: doc.id });
                    // this.bUID = doc.id;
                    //   });
                    //   console.log('Builders: ', this.builder);
                    // });
                });
            });
        }
    }
};
ListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=17-es2015.js.map