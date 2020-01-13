(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button (click)=\"goBack()\">\r\n            <ion-icon slot=\"icon-only\" id=\"icon\" name=\"arrow-back\"></ion-icon>\r\n          </ion-button>\r\n          </ion-buttons>\r\n    \r\n      </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n    <div [ngClass]=\"{'loader': loaderAnimate, 'loader-hide': !loaderAnimate}\">\r\n        <div class=\"maploader\">\r\n            <div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div><p style=\"color:white; text-align: center;\">{{loaderMessages}}</p>\r\n        </div>\r\n       <!--  <div class=\"loading-text\">\r\n          <p>Loading Map</p>\r\n        </div> -->\r\n      </div>\r\n  <div class=\"container\">\r\n    <div class=\"pagename\" style=\"margin: 10px; font-family: 'Raleway';\">\r\n      <h1>Wishlist ({{myWish.length}})</h1>\r\n    </div>\r\n\r\n<p style=\"font-family: 'Raleway'; margin: 8px;\">This is your wishlist. Save all your favourites here</p>\r\n\r\n    <div class=\"cards\" >\r\n      <div class=\"card\" *ngFor=\"let w of myWish\">\r\n          <div class=\"image\">\r\n            <img src=\"{{w.info.image}}\">\r\n          </div>\r\n          <div class=\"details\">\r\n            <div class=\"left\">\r\n              <div class=\"itemz\">\r\n                <p id=\"item\">{{w.info.name}}</p>\r\n              <p id=\"price\">{{w.info.price | currency:'R'}}</p>\r\n              </div>\r\n              <div class=\"close\"></div>\r\n              <p><ion-icon  name=\"trash\" (click)=\"delete(w.id)\"></ion-icon></p>\r\n            </div>\r\n  \r\n            <div class=\"right\">\r\n              \r\n              <ion-button (click)=\"addtoBusket(w.info.id, w.info, w.id)\" color=\"transparent\">\r\n                <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon slot=\"end\" id=\"book\" name=\"bookmark\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n  \r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card\" id=\"msg\" *ngIf=\"myWish.length==0\">\r\n          <p> Oh no! Your Wishlist is empty</p>\r\n          <img src=\"../../assets/sad_smile.svg\">\r\n      \r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/wishlist/wishlist-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/wishlist/wishlist-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: WishlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageRoutingModule", function() { return WishlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/wishlist/wishlist.page.ts");




var routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_3__["WishlistPage"]
    }
];
var WishlistPageRoutingModule = /** @class */ (function () {
    function WishlistPageRoutingModule() {
    }
    WishlistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], WishlistPageRoutingModule);
    return WishlistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.module.ts ***!
  \*********************************************/
/*! exports provided: WishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist-routing.module */ "./src/app/wishlist/wishlist-routing.module.ts");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/wishlist/wishlist.page.ts");







var WishlistPageModule = /** @class */ (function () {
    function WishlistPageModule() {
    }
    WishlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["WishlistPageRoutingModule"]
            ],
            declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
        })
    ], WishlistPageModule);
    return WishlistPageModule;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400&display=swap\");\nion-toolbar {\n  --background: transparent;\n  font-family: \"Raleway\"; }\nion-toolbar #icon {\n    color: maroon; }\n.container {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  height: 100%; }\n.container .cards {\n    display: flex;\n    flex-flow: column;\n    height: 90vh;\n    overflow-y: auto; }\n.container .cards .card {\n      display: flex;\n      flex-flow: row;\n      box-shadow: 5px 5px 10px lightgray;\n      margin: 5px;\n      position: relative; }\n.container .cards .card .image {\n        width: 50vw;\n        height: 28vw;\n        margin: 10px; }\n.container .cards .card .image img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover; }\n.container .cards .card .details {\n        display: flex;\n        flex-flow: column;\n        width: 100%;\n        padding: 5px;\n        justify-content: space-between;\n        align-items: baseline; }\n.container .cards .card .details .left {\n          margin: 10px;\n          width: 97%;\n          display: flex;\n          flex-flow: row;\n          justify-content: space-between; }\n.container .cards .card .details .left p {\n            align-items: baseline;\n            padding: 0;\n            margin: 4px 0px; }\n.container .cards .card .details .left p ion-icon {\n              font-size: 5vw;\n              color: maroon; }\n.container .cards .card .details .left #item {\n            letter-spacing: 1px;\n            font-size: 4vw; }\n.container .cards .card .details .left #price {\n            font-size: 3.5vw; }\n.container .cards .card .details .right {\n          margin: 5px;\n          font-size: 0.9em;\n          position: absolute;\n          bottom: 0;\n          right: -8px; }\n.container .cards .card .details .right ion-button {\n            color: white;\n            background: #000027;\n            border-bottom-left-radius: 20px;\n            border-top-left-radius: 20px;\n            font-size: 0.8em;\n            font-family: \"Raleway\";\n            letter-spacing: 1px; }\n.container .cards .card .details .right ion-button #book {\n              position: relative;\n              bottom: 8px;\n              right: -5px;\n              color: maroon; }\n.container .cards .card .details .right ion-icon {\n            font-size: 1.5em;\n            color: white; }\n.container .cards #msg {\n      display: flex;\n      flex-flow: column;\n      position: absolute;\n      align-items: center;\n      justify-content: space-evenly;\n      top: 25%;\n      width: 95vw;\n      margin: 10px;\n      font-family: \"Poppins\";\n      box-shadow: none !important; }\n.container .cards #msg img {\n        width: 50vw;\n        height: 50vw; }\n.container .cards #msg p {\n        color: #B2B2B2;\n        font-size: 5vw; }\n.container .total {\n    position: absolute;\n    bottom: 0;\n    display: flex;\n    flex-flow: column; }\n.container .total .carttotal {\n      display: flex;\n      flex-flow: row;\n      width: 100vw;\n      padding: 5px;\n      justify-content: space-between; }\n.container .total .carttotal p {\n        font-family: \"Raleway\"; }\n.container .total .btn ion-button {\n      color: white;\n      background: #00003b;\n      width: 99%;\n      padding: 5px;\n      font-family: \"Raleway\";\n      letter-spacing: 2px; }\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite; }\n.loader .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n.loader .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n.loader .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n.loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto; }\n.loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); }\n.loader-hide .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n.loader-hide .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n.loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n@-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n@keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzaGxpc3QvQzpcXFVzZXJzXFx6YW5lbFxcRG9jdW1lbnRzXFxicm9rZW5TdG9vbC9zcmNcXGFwcFxcd2lzaGxpc3RcXHdpc2hsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRkFBWTtBQUNaO0VBQ0UseUJBQWE7RUFJYixzQkFBc0IsRUFBQTtBQUx4QjtJQUdJLGFBQWEsRUFBQTtBQUtqQjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVksRUFBQTtBQUpkO0lBT0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7QUFWcEI7TUFZTSxhQUFhO01BQ2IsY0FBYztNQUNkLGtDQUEyQztNQUMzQyxXQUFXO01BQ1gsa0JBQWtCLEVBQUE7QUFoQnhCO1FBa0JRLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWSxFQUFBO0FBcEJwQjtVQXNCVSxXQUFXO1VBQ1gsWUFBWTtVQUNaLG9CQUFpQjthQUFqQixpQkFBaUIsRUFBQTtBQXhCM0I7UUE2QlEsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsWUFBWTtRQUNaLDhCQUE4QjtRQUM5QixxQkFBcUIsRUFBQTtBQWxDN0I7VUFxQ1UsWUFBWTtVQUNaLFVBQVU7VUFDVixhQUFhO1VBQ2IsY0FBYztVQUNkLDhCQUE4QixFQUFBO0FBekN4QztZQTJDWSxxQkFBcUI7WUFDckIsVUFBVTtZQUNWLGVBQWUsRUFBQTtBQTdDM0I7Y0FnRGMsY0FBYztjQUNkLGFBQWEsRUFBQTtBQWpEM0I7WUFzRFksbUJBQW1CO1lBQ25CLGNBQWMsRUFBQTtBQXZEMUI7WUEyRFksZ0JBQWdCLEVBQUE7QUEzRDVCO1VBZ0VVLFdBQVc7VUFDWCxnQkFBZ0I7VUFDaEIsa0JBQWtCO1VBQ2xCLFNBQVM7VUFDVCxXQUFXLEVBQUE7QUFwRXJCO1lBdUVZLFlBQVk7WUFDWixtQkFBeUI7WUFDekIsK0JBQStCO1lBQy9CLDRCQUE0QjtZQUM1QixnQkFBZ0I7WUFDaEIsc0JBQXNCO1lBQ3RCLG1CQUFtQixFQUFBO0FBN0UvQjtjQStFYyxrQkFBa0I7Y0FDbEIsV0FBVztjQUNYLFdBQVc7Y0FDWCxhQUFhLEVBQUE7QUFsRjNCO1lBc0ZZLGdCQUFnQjtZQUNoQixZQUFZLEVBQUE7QUF2RnhCO01BOEZNLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQiw2QkFBNkI7TUFDN0IsUUFBUTtNQUNSLFdBQVc7TUFDWCxZQUFZO01BQ1osc0JBQXNCO01BQ3RCLDJCQUEyQixFQUFBO0FBdkdqQztRQXlHUSxXQUFXO1FBQ1gsWUFBWSxFQUFBO0FBMUdwQjtRQTZHUSxjQUFjO1FBQ2QsY0FBYyxFQUFBO0FBOUd0QjtJQW9ISSxrQkFBa0I7SUFDbEIsU0FBUztJQUVULGFBQWE7SUFDYixpQkFBaUIsRUFBQTtBQXhIckI7TUEySE0sYUFBYTtNQUNiLGNBQWM7TUFDZCxZQUFZO01BQ1osWUFBWTtNQUNaLDhCQUE4QixFQUFBO0FBL0hwQztRQWlJUSxzQkFBc0IsRUFBQTtBQWpJOUI7TUF1SVEsWUFBWTtNQUNaLG1CQUF5QjtNQUN6QixVQUFVO01BQ1YsWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixtQkFBbUIsRUFBQTtBQUszQjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLCtEQUErRDtFQUMvRCxzREFBOEM7VUFBOUMsOENBQThDLEVBQUE7QUFqQmhEO0lBb0JNLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVksRUFBQTtBQXZCbEI7SUEwQk0sa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMkRBQW1EO1lBQW5ELG1EQUFtRCxFQUFBO0FBaEN6RDtJQW1DTSxTQUFTO0lBQ1QsOENBQXNDO1lBQXRDLHNDQUFzQyxFQUFBO0FBcEM1QztJQXVDTSxTQUFTO0lBQ1QsOENBQXNDO1lBQXRDLHNDQUFzQyxFQUFBO0FBeEM1QztJQTJDTSxVQUFVO0lBQ1YsOENBQXNDO1lBQXRDLHNDQUFzQyxFQUFBO0FBNUM1QztJQStDTSxVQUFVO0lBQ1YsOENBQXNDO1lBQXRDLHNDQUFzQyxFQUFBO0FBRXhDO0VBQ0U7SUFDRSxtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLG1CQUFtQixFQUFBLEVBQUE7QUFMdkI7RUFDRTtJQUNFLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsbUJBQW1CLEVBQUEsRUFBQTtBQUd2QjtFQUNFO0lBQ0UsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxtQkFBbUIsRUFBQSxFQUFBO0FBTHZCO0VBQ0U7SUFDRSxtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLG1CQUFtQixFQUFBLEVBQUE7QUFHdkI7RUFDRTtJQUNFLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsNkJBQTZCLEVBQUEsRUFBQTtBQUxqQztFQUNFO0lBQ0UsMEJBQTBCLEVBQUE7RUFFNUI7SUFDRSw2QkFBNkIsRUFBQSxFQUFBO0FBS3BDO0VBRUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUVsQixZQUFZO0VBRVosWUFBWSxFQUFBO0FBRWI7RUFDQyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxpQkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsK0RBQStELEVBQUE7QUFYaEU7SUFjSyxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFqQmpCO0lBb0JLLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDJEQUFtRDtZQUFuRCxtREFBbUQsRUFBQTtBQTFCeEQ7SUE2QkssU0FBUztJQUNULDhDQUFzQztZQUF0QyxzQ0FBc0MsRUFBQTtBQTlCM0M7SUFpQ0ssU0FBUztJQUNULDhDQUFzQztZQUF0QyxzQ0FBc0MsRUFBQTtBQWxDM0M7SUFxQ0ssVUFBVTtJQUNWLDhDQUFzQztZQUF0QyxzQ0FBc0MsRUFBQTtBQXRDM0M7SUF5Q0ssVUFBVTtJQUNWLDhDQUFzQztZQUF0QyxzQ0FBc0MsRUFBQTtBQUV4QztFQUNFO0lBQ0UsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxtQkFBbUIsRUFBQSxFQUFBO0FBR3ZCO0VBQ0U7SUFDRSxtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLG1CQUFtQixFQUFBLEVBQUE7QUFHdkI7RUFDRTtJQUNFLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsNkJBQTZCLEVBQUEsRUFBQTtBQUtwQztFQUNDO0lBRUUscUJBQThCLEVBQUE7RUFHaEM7SUFHRSxxQkFBNkIsRUFBQTtFQUUvQjtJQUNFLHFCQUErQixFQUFBLEVBQUE7QUFabEM7RUFDQztJQUVFLHFCQUE4QixFQUFBO0VBR2hDO0lBR0UscUJBQTZCLEVBQUE7RUFFL0I7SUFDRSxxQkFBK0IsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwJmRpc3BsYXk9c3dhcFwiKTtcclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgI2ljb24ge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICB9XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmNhcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDIxMSwgMjExLCAyMTEpO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAuaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgIGhlaWdodDogMjh2dztcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNHB4IDBweDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgICAgICAgICBjb2xvcjogbWFyb29uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2l0ZW0ge1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjcHJpY2Uge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIHJpZ2h0OiAtOHB4O1xyXG5cclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAzOSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgI2Jvb2sge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBib3R0b206IDhweDtcclxuICAgICAgICAgICAgICByaWdodDogLTVweDtcclxuICAgICAgICAgICAgICBjb2xvcjogbWFyb29uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjbXNnIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIHRvcDogMjUlO1xyXG4gICAgICB3aWR0aDogOTV2dztcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNTB2dztcclxuICAgICAgICBoZWlnaHQ6IDUwdnc7XHJcbiAgICAgIH1cclxuICAgICAgcHtcclxuICAgICAgICBjb2xvcjogI0IyQjJCMjtcclxuICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRvdGFsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gICAgLmNhcnR0b3RhbCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCA1OSk7XHJcbiAgICAgICAgd2lkdGg6IDk5JTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDpyZ2IoMCwgMjcsIDYzKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZG1vdmVyIDMwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLm1hcGxvYWRlciB7XHJcbiAgICAubGRzLWVsbGlwc2lzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzM3B4O1xyXG4gICAgICB3aWR0aDogMTNweDtcclxuICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbGVmdDogMzJweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgICBsZWZ0OiA1NnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIH1cclxuIC5sb2FkaW5nLXRleHQge1xyXG4gIC8vIGNvbG9yOiB5ZWxsb3c7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNTB2aDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIC8vei1pbmRleDogOTA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gfVxyXG4gLmxvYWRlci1oaWRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcbiAgLm1hcGxvYWRlciB7XHJcbiAgICAubGRzLWVsbGlwc2lzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzM3B4O1xyXG4gICAgICB3aWR0aDogMTNweDtcclxuICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbGVmdDogMzJweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgICBsZWZ0OiA1NnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIH1cclxuIEBrZXlmcmFtZXMgbWFwbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4MiwgNzAsIDk1KTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE5MiwgMTkyKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMDYsIDIwNiwgMjU1KTtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MiwgNTAsIDc1KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTAsIDE4MiwgNDMpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTY3LCAxNjcpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbiB9Il19 */");

/***/ }),

/***/ "./src/app/wishlist/wishlist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/wishlist/wishlist.page.ts ***!
  \*******************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var WishlistPage = /** @class */ (function () {
    function WishlistPage(router, navCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.dbWishlist = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Wishlist');
        this.uid = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.myWish = [];
        this.items = false;
        this.loaderMessages = 'Loading...';
        this.loaderAnimate = true;
    }
    WishlistPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaderAnimate = false;
        }, 2000);
        this.dbWishlist.where('customerUID', '==', this.uid).onSnapshot(function (res) {
            _this.myWish = [];
            res.forEach(function (doc) {
                _this.myWish.push({ info: doc.data(), id: doc.id });
            });
        });
        //console.log('My wish ', this.myWish);
    };
    WishlistPage.prototype.delete = function (id) {
        this.dbWishlist.doc(id).delete();
    };
    WishlistPage.prototype.addtoBusket = function (view_id, data, id) {
        var _this = this;
        var navigationExtras = {
            queryParams: {
                data: data,
                col: data.category,
            }
        };
        this.dbWishlist.doc(id).delete().then(function () {
            _this.navCtrl.navigateForward(['view', view_id], navigationExtras);
        });
    };
    WishlistPage.prototype.showItems = function () {
        this.items = !this.items;
    };
    WishlistPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    WishlistPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    WishlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wishlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wishlist.page.scss */ "./src/app/wishlist/wishlist.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], WishlistPage);
    return WishlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=28.js.map