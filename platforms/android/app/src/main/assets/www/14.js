(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button id=\"icon\" (click)=\"wishlist()\">\r\n        <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\r\n        <p id=\"number\">{{myWish}}</p>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button id=\"icon\" (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"pagename\">\r\n      <h1 *ngIf=\"category==='KWANGA'\">{{category}} APPAREL</h1>\r\n      <h1 *ngIf=\"category!=='KWANGA'\">{{category}} GEAR</h1>\r\n    </div>\r\n    <div class=\"itemcount\">\r\n      <div class=\"items\">\r\n        <p>200 Items</p>\r\n      </div>\r\n<!-- \r\n      <div class=\"filter\">\r\n\r\n        <ion-select placeholder=\"Filter\">\r\n          <ion-select-option value=\"c\">Colour</ion-select-option>\r\n          <ion-select-option value=\"p\">Product Type</ion-select-option>\r\n          <ion-select-option value=\"s\">Size</ion-select-option>\r\n        </ion-select>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"cards\" *ngIf=\"category==='SUMMER'\">\r\n\r\n      <div class=\"card\" (click)=\"list('Vests')\">\r\n        <img src=\"https://i.pinimg.com/564x/37/eb/7b/37eb7bb10c83acc2c8eded5a241c2176.jpg\">\r\n        <div class=\"category\">Vests</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Shorts')\">\r\n        <img src=\"https://i.pinimg.com/564x/1f/d2/e5/1fd2e5a2ccd92d25b0f5d560f08f77f2.jpg\">\r\n        <div class=\"category\">Shorts</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('T-Shirts')\">\r\n        <img src=\"https://i.pinimg.com/564x/ac/62/93/ac62932edd87f40fb5298ea76ebe6ba9.jpg\">\r\n        <div class=\"category\">T-shirts</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Bucket Hats')\">\r\n        <img src=\"https://i.pinimg.com/564x/65/e0/fc/65e0fc8d58aab5f18731cc8cb1f703cf.jpg\">\r\n        <div class=\"category\">Bucket Hats</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Crop Tops')\">\r\n        <img src=\"https://i.pinimg.com/564x/c8/1b/aa/c81baa4f14e6a9890b03b78c412c2f91.jpg\">\r\n        <div class=\"category\">Crop Tops</div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"cards\" *ngIf=\"category==='WINTER'\">\r\n      <div class=\"card\" (click)=\"list('Hoodies')\">\r\n        <img src=\"https://i.pinimg.com/564x/be/fa/2b/befa2b288a55907f9a6a17b87db718a4.jpg\">\r\n        <div class=\"category\">Hoodies</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Sweaters')\">\r\n        <img src=\"https://i.pinimg.com/564x/a3/a1/8b/a3a18b4c3a78b3187d70b456cc09ad7e.jpg\">\r\n        <div class=\"category\">Sweaters</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Track Suits')\">\r\n        <img src=\"https://i.pinimg.com/564x/ba/a6/bb/baa6bb4a97859357928cd6b5a6dda6c5.jpg\">\r\n        <div class=\"category\">Track Suits</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Beanies')\">\r\n        <img src=\"https://i.pinimg.com/564x/96/97/0c/96970c6ee2cb886eb19289a90b6bb35e.jpg\">\r\n        <div class=\"category\">Beanies</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Sweaters')\">\r\n        <img src=\"https://i.pinimg.com/564x/a3/a1/8b/a3a18b4c3a78b3187d70b456cc09ad7e.jpg\">\r\n        <div class=\"category\">Sweaters</div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"cards\" *ngIf=\"category==='KWANGA'\">\r\n      <div class=\"card\" (click)=\"list('Traditional')\">\r\n        <img src=\"https://i.pinimg.com/564x/45/60/09/4560091dba34204379150440c77cfb58.jpg\">\r\n        <div class=\"category\">Traditional</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Formal')\">\r\n        <img src=\"https://i.pinimg.com/564x/c6/41/b6/c641b6e1559ae0f2f432576d811ff172.jpg\">\r\n        <div class=\"category\">Formal</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Casual')\">\r\n        <img src=\"https://i.pinimg.com/564x/52/3c/09/523c0965f3d8b0fedcfdfd240ae9db12.jpg\">\r\n        <div class=\"category\">Casual</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Sport')\">\r\n        <img src=\"https://i.pinimg.com/564x/97/a7/60/97a760a30c2711fad0213978e10a9a34.jpg\">\r\n        <div class=\"category\">Sport</div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <img src=\"https://i.pinimg.com/564x/1e/66/dc/1e66dca85cc2f674e098fc7579f9fbda.jpg\">\r\n        <div class=\"category\">Accesories</div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"web_view\">\r\n    <div class=\"pagename\">\r\n      <h1 *ngIf=\"category==='KWANGA'\">{{category}} APPAREL</h1>\r\n      <h1 *ngIf=\"category!=='KWANGA'\">{{category}} GEAR</h1>\r\n    </div>\r\n    <div class=\"itemcount\">\r\n      <div class=\"items\">\r\n        <p>200 Items</p>\r\n      </div>\r\n      \r\n    </div>\r\n    <div class=\"cards\" *ngIf=\"category==='SUMMER'\">\r\n\r\n      <div class=\"card\" (click)=\"list('Vests')\">\r\n        <img src=\"https://i.pinimg.com/564x/37/eb/7b/37eb7bb10c83acc2c8eded5a241c2176.jpg\">\r\n        <div class=\"category\">Vests</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Shorts')\">\r\n        <img src=\"https://i.pinimg.com/564x/1f/d2/e5/1fd2e5a2ccd92d25b0f5d560f08f77f2.jpg\">\r\n        <div class=\"category\">Shorts</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('T-Shirts')\">\r\n        <img src=\"https://i.pinimg.com/564x/ac/62/93/ac62932edd87f40fb5298ea76ebe6ba9.jpg\">\r\n        <div class=\"category\">T-shirts</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Bucket Hats')\">\r\n        <img src=\"https://i.pinimg.com/564x/65/e0/fc/65e0fc8d58aab5f18731cc8cb1f703cf.jpg\">\r\n        <div class=\"category\">Bucket Hats</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Crop Tops')\">\r\n        <img src=\"https://i.pinimg.com/564x/c8/1b/aa/c81baa4f14e6a9890b03b78c412c2f91.jpg\">\r\n        <div class=\"category\">Crop Tops</div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"cards\" *ngIf=\"category==='WINTER'\">\r\n      <div class=\"card\" (click)=\"list('Hoodies')\">\r\n        <img src=\"https://i.pinimg.com/564x/be/fa/2b/befa2b288a55907f9a6a17b87db718a4.jpg\">\r\n        <div class=\"category\">Hoodies</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Sweaters')\">\r\n        <img src=\"https://i.pinimg.com/564x/a3/a1/8b/a3a18b4c3a78b3187d70b456cc09ad7e.jpg\">\r\n        <div class=\"category\">Sweaters</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Track Suits')\">\r\n        <img src=\"https://i.pinimg.com/564x/ba/a6/bb/baa6bb4a97859357928cd6b5a6dda6c5.jpg\">\r\n        <div class=\"category\">Track Suits</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Beanies')\">\r\n        <img src=\"https://i.pinimg.com/564x/96/97/0c/96970c6ee2cb886eb19289a90b6bb35e.jpg\">\r\n        <div class=\"category\">Beanies</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Sweaters')\">\r\n        <img src=\"https://i.pinimg.com/564x/a3/a1/8b/a3a18b4c3a78b3187d70b456cc09ad7e.jpg\">\r\n        <div class=\"category\">Sweaters</div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"cards\" *ngIf=\"category==='KWANGA'\">\r\n      <div class=\"card\" (click)=\"list('Traditional')\">\r\n        <img src=\"https://i.pinimg.com/564x/45/60/09/4560091dba34204379150440c77cfb58.jpg\">\r\n        <div class=\"category\">Traditional</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Formal')\">\r\n        <img src=\"https://i.pinimg.com/564x/c6/41/b6/c641b6e1559ae0f2f432576d811ff172.jpg\">\r\n        <div class=\"category\">Formal</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Casual')\">\r\n        <img src=\"https://i.pinimg.com/564x/52/3c/09/523c0965f3d8b0fedcfdfd240ae9db12.jpg\">\r\n        <div class=\"category\">Casual</div>\r\n      </div>\r\n      <div class=\"card\" (click)=\"list('Sport')\">\r\n        <img src=\"https://i.pinimg.com/564x/97/a7/60/97a760a30c2711fad0213978e10a9a34.jpg\">\r\n        <div class=\"category\">Sport</div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <img src=\"https://i.pinimg.com/564x/1e/66/dc/1e66dca85cc2f674e098fc7579f9fbda.jpg\">\r\n        <div class=\"category\">Accesories</div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/categories/categories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");




var routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }
];
var CategoriesPageRoutingModule = /** @class */ (function () {
    function CategoriesPageRoutingModule() {
    }
    CategoriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CategoriesPageRoutingModule);
    return CategoriesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/categories/categories-routing.module.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");







var CategoriesPageModule = /** @class */ (function () {
    function CategoriesPageModule() {
    }
    CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]
            ],
            declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
        })
    ], CategoriesPageModule);
    return CategoriesPageModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.page.scss":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: white; }\n  ion-toolbar #icon {\n    color: maroon; }\n  ion-toolbar #number {\n    font-size: 0.8em;\n    position: relative;\n    top: 8px;\n    right: 5px; }\n  .card:nth-child(1) {\n  width: 57vw;\n  height: 30vh; }\n  .card:nth-child(2) {\n  width: 30vw;\n  height: 30vh; }\n  .card:nth-child(3) {\n  width: 30vw;\n  height: 30vh; }\n  .card:nth-child(4) {\n  width: 57vw;\n  height: 30vh; }\n  .card:nth-child(5) {\n  width: 90vw;\n  height: 25vh; }\n  .card:nth-child(6) {\n  width: 30vw;\n  height: 25vh; }\n  .card:nth-child(7) {\n  width: 57vw;\n  height: 25vh; }\n  .card:nth-child(8) {\n  width: 89vw;\n  height: 25vh; }\n  .container {\n  display: flex;\n  flex-flow: column;\n  align-items: center; }\n  .container .itemcount {\n    display: flex;\n    flex-flow: row;\n    justify-content: space-between;\n    font-family: \"Poppins\";\n    width: 100%;\n    padding: 10px;\n    position: relative;\n    bottom: 40px;\n    align-items: baseline; }\n  .container .itemcount .items p {\n      font-size: 3.5vw; }\n  .container .pagename {\n    font-family: \"Poppins\";\n    font-weight: normal;\n    letter-spacing: 2px;\n    width: 100%;\n    text-align: left;\n    padding: 10px; }\n  .container .pagename h1 {\n      font-size: 4vw; }\n  .container .cards {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100vw;\n    overflow-y: auto;\n    justify-content: space-evenly;\n    justify-items: center;\n    position: relative;\n    bottom: 50px; }\n  .container .cards .card {\n      margin: 6px;\n      border-radius: 5px;\n      position: relative;\n      box-shadow: 5px 5px 10px lightslategrey; }\n  .container .cards .card img {\n        height: 100%;\n        width: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 5px; }\n  .container .cards .card .category {\n        position: absolute;\n        bottom: 10px;\n        right: 10px;\n        color: white;\n        text-shadow: 5px 5px 5px black;\n        font-family: \"Poppins\"; }\n  @media only screen and (min-width: 1330px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  .web_view {\n    min-width: 800px;\n    max-width: 1200px;\n    margin: auto; }\n    .web_view .cards {\n      display: flex;\n      flex-wrap: wrap;\n      width: 100%;\n      overflow-y: auto;\n      position: relative; }\n    .web_view .card:nth-child(1) {\n      width: 23vw;\n      height: 40vh; }\n    .web_view .card:nth-child(2) {\n      width: 23vw;\n      height: 40vh; }\n    .web_view .card:nth-child(3) {\n      width: 23vw;\n      height: 40vh; }\n    .web_view .card:nth-child(4) {\n      width: 26vw;\n      height: 42vh; }\n    .web_view .card:nth-child(5) {\n      width: 43.5vw;\n      height: 42vh; }\n    .web_view .card:nth-child(6) {\n      width: 30vw;\n      height: 25vh; }\n    .web_view .card:nth-child(7) {\n      width: 57vw;\n      height: 25vh; }\n    .web_view .card:nth-child(8) {\n      width: 89vw;\n      height: 25vh; }\n    .web_view .card {\n      margin: 5px;\n      border-radius: 5px;\n      position: relative;\n      box-shadow: 5px 5px 10px lightslategrey; }\n      .web_view .card img {\n        height: 100%;\n        width: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 5px; }\n      .web_view .card .category {\n        position: absolute;\n        bottom: 10px;\n        right: 10px;\n        color: white;\n        text-shadow: 5px 5px 5px black;\n        font-family: \"Poppins\"; } }\n  @media only screen and (max-width: 1024px) {\n  .web_view {\n    display: none;\n    width: 0%;\n    height: 0%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9DOlxcVXNlcnNcXE5NbGFuZ2VuaVxcRG9jdW1lbnRzXFxHaXRIdWJcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxjYXRlZ29yaWVzXFxjYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFhLEVBQUE7RUFEZjtJQUdJLGFBQWEsRUFBQTtFQUhqQjtJQU9JLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVUsRUFBQTtFQUlkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTtFQUVkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTtFQUhyQjtJQU1JLGFBQWE7SUFDYixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscUJBQXFCLEVBQUE7RUFkekI7TUFpQlEsZ0JBQWdCLEVBQUE7RUFqQnhCO0lBdUJJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0VBNUJqQjtNQWdDTSxjQUFjLEVBQUE7RUFoQ3BCO0lBb0NJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUVoQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7RUE1Q2hCO01BK0NNLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsa0JBQWtCO01BRWxCLHVDQUF1QyxFQUFBO0VBbkQ3QztRQXFEUSxZQUFZO1FBQ1osV0FBVztRQUNYLG9CQUFpQjtXQUFqQixpQkFBaUI7UUFDakIsa0JBQWtCLEVBQUE7RUF4RDFCO1FBNERRLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQXlCO1FBQ3pCLDhCQUE4QjtRQUM5QixzQkFBc0IsRUFBQTtFQU05QjtFQUNFO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0IsRUFBQTtFQUd0QjtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWSxFQUFBO0lBSGQ7TUFNSSxhQUFhO01BQ2IsZUFBZTtNQUNmLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsa0JBQWtCLEVBQUE7SUFWdEI7TUFjSSxXQUFVO01BQ1YsWUFBWSxFQUFBO0lBZmhCO01BbUJJLFdBQVc7TUFDWCxZQUFZLEVBQUE7SUFwQmhCO01Bd0JJLFdBQVc7TUFDWCxZQUFZLEVBQUE7SUF6QmhCO01BOEJJLFdBQVc7TUFDWCxZQUFZLEVBQUE7SUEvQmhCO01Ba0NJLGFBQWE7TUFDYixZQUFZLEVBQUE7SUFuQ2hCO01BdUNJLFdBQVc7TUFDWCxZQUFZLEVBQUE7SUF4Q2hCO01BNENJLFdBQVc7TUFDWCxZQUFZLEVBQUE7SUE3Q2hCO01BaURJLFdBQVc7TUFDWCxZQUFZLEVBQUE7SUFsRGhCO01Bc0RJLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsa0JBQWtCO01BRWxCLHVDQUF1QyxFQUFBO01BMUQzQztRQTRETSxZQUFZO1FBQ1osV0FBVztRQUNYLG9CQUFpQjtXQUFqQixpQkFBaUI7UUFDakIsa0JBQWtCLEVBQUE7TUEvRHhCO1FBbUVNLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQXlCO1FBQ3pCLDhCQUE4QjtRQUM5QixzQkFBc0IsRUFBQSxFQUN2QjtFQU1QO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVUsRUFBQSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICNpY29uIHtcclxuICAgIGNvbG9yOiBtYXJvb247XHJcbiAgfVxyXG5cclxuICAjbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZDpudGgtY2hpbGQoMSkge1xyXG4gIHdpZHRoOiA1N3Z3O1xyXG4gIGhlaWdodDogMzB2aDtcclxufVxyXG5cclxuLmNhcmQ6bnRoLWNoaWxkKDIpIHtcclxuICB3aWR0aDogMzB2dztcclxuICBoZWlnaHQ6IDMwdmg7XHJcbn1cclxuXHJcbi5jYXJkOm50aC1jaGlsZCgzKSB7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG59XHJcblxyXG4uY2FyZDpudGgtY2hpbGQoNCkge1xyXG4gIHdpZHRoOiA1N3Z3O1xyXG4gIGhlaWdodDogMzB2aDtcclxufVxyXG4uY2FyZDpudGgtY2hpbGQoNSkge1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGhlaWdodDogMjV2aDtcclxufVxyXG5cclxuLmNhcmQ6bnRoLWNoaWxkKDYpIHtcclxuICB3aWR0aDogMzB2dztcclxuICBoZWlnaHQ6IDI1dmg7XHJcbn1cclxuXHJcbi5jYXJkOm50aC1jaGlsZCg3KSB7XHJcbiAgd2lkdGg6IDU3dnc7XHJcbiAgaGVpZ2h0OiAyNXZoO1xyXG59XHJcblxyXG4uY2FyZDpudGgtY2hpbGQoOCkge1xyXG4gIHdpZHRoOiA4OXZ3O1xyXG4gIGhlaWdodDogMjV2aDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuaXRlbWNvdW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIC5pdGVtcyB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy41dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWdlbmFtZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBib3R0b206IDMwcHg7XHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNTBweDtcclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBsaWdodHNsYXRlZ3JleTtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMzBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC53ZWJfdmlldyB7XHJcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgLmNhcmRze1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgd2lkdGg6MjN2dztcclxuICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZDpudGgtY2hpbGQoMikge1xyXG4gICAgICB3aWR0aDogMjN2dztcclxuICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZDpudGgtY2hpbGQoMykge1xyXG4gICAgICB3aWR0aDogMjN2dztcclxuICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQ6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgd2lkdGg6IDI2dnc7XHJcbiAgICAgIGhlaWdodDogNDJ2aDtcclxuICAgIH1cclxuICAgIC5jYXJkOm50aC1jaGlsZCg1KSB7XHJcbiAgICAgIHdpZHRoOiA0My41dnc7XHJcbiAgICAgIGhlaWdodDogNDJ2aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQ6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgd2lkdGg6IDMwdnc7XHJcbiAgICAgIGhlaWdodDogMjV2aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQ6bnRoLWNoaWxkKDcpIHtcclxuICAgICAgd2lkdGg6IDU3dnc7XHJcbiAgICAgIGhlaWdodDogMjV2aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQ6bnRoLWNoaWxkKDgpIHtcclxuICAgICAgd2lkdGg6IDg5dnc7XHJcbiAgICAgIGhlaWdodDogMjV2aDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBsaWdodHNsYXRlZ3JleTtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAud2ViX3ZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/categories/categories.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(NavCtrl, router, route, navCtrl) {
        this.NavCtrl = NavCtrl;
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.uid = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid;
        this.dbWish = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]().collection('Wishlist');
        // console.log('My data', this.route.snapshot.paramMap.get('data').toUpperCase());
        this.category = this.route.snapshot.paramMap.get('data').toUpperCase();
    }
    CategoriesPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.category === 'SUMMER' || this.category === 'WINTER') {
            // console.log('This is dankie jesu brand');
            this.colDef = 'Dankie Jesu';
        }
        else if (this.category === 'KWANGA') {
            // console.log('It is kwanga you sh!t');
            this.colDef = 'Kwanga';
        }
        else {
            //console.log('Sales my man...');
            this.colDef = 'Sales';
        }
        // console.log(this.colDef);
        this.dbWish.where('customerUID', '==', this.uid).onSnapshot(function (res1) {
            _this.myWish = res1.size;
        });
    };
    CategoriesPage.prototype.list = function (data) {
        var navigationExtras = {
            queryParams: {
                data: data,
                col: this.colDef,
            }
        };
        //this.router.navigate(['list', data])
        this.navCtrl.navigateForward(['list', data], navigationExtras);
    };
    CategoriesPage.prototype.wishlist = function () {
        this.router.navigateByUrl('wishlist');
    };
    CategoriesPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CategoriesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories.page.scss */ "./src/app/categories/categories.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], CategoriesPage);
    return CategoriesPage;
}());



/***/ })

}]);
//# sourceMappingURL=14.js.map