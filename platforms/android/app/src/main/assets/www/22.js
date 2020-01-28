(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border id=\"nav\">\r\n\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"end\" (click)=\"logout()\">\r\n      <div class=\"icon1\">\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/Terms%20and%20Privacy%20Policy\">\r\n          Terms and Privacy Policy\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/Disclaimer\">\r\n          Disclaimer\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/FAQs\">\r\n          FAQs\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/Payment%20Process\">\r\n          Payment Process\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/About%20Company\">\r\n          About Us\r\n        </ion-button>\r\n\r\n\r\n      </div>\r\n\r\n      Logout<ion-icon slot=\"start\" name=\"exit\" id=\"icon\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    <!-- <ion-title style=\"font-family: 'Poiret One'; font-size: 20px; letter-spacing: 2px;\">DankieJesu</ion-title> -->\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-header no-border id=\"mobile\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n      <ion-icon slot=\"start\" name=\"arrow-back\" id=\"icon\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\" (click)=\"logout()\">\r\n      <ion-icon slot=\"start\" name=\"exit\" id=\"icon\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>PROFILE</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div [ngClass]=\"{'loader': loaderAnimate, 'loader-hide': !loaderAnimate}\">\r\n    <div class=\"maploader\">\r\n      <div class=\"lds-ellipsis\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n      </div>\r\n      <p style=\"color:white; text-align: center;\">{{loaderMessages}}</p>\r\n    </div>\r\n    <!--  <div class=\"loading-text\">\r\n          <p>Loading Map</p>\r\n        </div> -->\r\n  </div>\r\n  <p id=\"lorem\" style=\"font-size: 35px; width: 100%; text-align: center; color: grey; font-family: 'poiret One';\">My\r\n    Profile</p>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"image\">\r\n      <img src=\"{{profilePic}}\">\r\n      <div class=\"name\">\r\n        <!-- <ion-progress-bar type=\"indeterminate\"></ion-progress-bar> -->\r\n        <p>{{name }} &nbsp; {{ surname}} <br><span>{{email}}</span></p><br>\r\n      </div>\r\n      <div class=\"camera\">\r\n        <ion-fab-button color=\"transparent\" id=\"image\" (click)=\"selectImage()\">\r\n          <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-fab-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"btnz\">\r\n      <ion-button (click)=\"showEdit()\" color=\"transparent\">\r\n        <span *ngIf=\"!editprofile\">Account Details <ion-icon slot=\"end\" name=\"add\"></ion-icon></span>\r\n        <span *ngIf=\"editprofile\">Account Details <ion-icon slot=\"end\" name=\"remove\"></ion-icon></span>\r\n      </ion-button>\r\n\r\n      <div class=\"edit\" *ngIf=\"editprofile\">\r\n        <div class=\"inputs\">\r\n\r\n          <ion-input [(ngModel)]=\"name\" placeholder=\"Name\"></ion-input>\r\n\r\n          <ion-input [(ngModel)]=\"surname\" placeholder=\"Surname\"></ion-input>\r\n\r\n          <ion-input [(ngModel)]=\"email\" placeholder=\"Email\" readonly></ion-input>\r\n\r\n          <ion-input [(ngModel)]=\"address\" placeholder=\"address\"></ion-input>\r\n\r\n          \r\n        </div>\r\n        <div class=\"buttonz\">\r\n          <ion-button (click)=\"showEdit()\" color=\"transparent\" id=\"cancel\" style=\"border-radius: 20px;\">\r\n            CANCEL\r\n          </ion-button>\r\n          <ion-button (click)=\"updateProfile()\" color=\"transparent\" id=\"update\">\r\n            UPDATE\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n      <ion-button (click)=\"pendingOrders()\" color=\"transparent\">\r\n        <span>Pending Orders <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n      </ion-button>\r\n\r\n      <ion-button (click)=\"orderhistory()\" color=\"transparent\">\r\n        <span>Order History <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n      </ion-button>\r\n    </div>\r\n\r\n\r\n    <div class=\"files\">\r\n      <div class=\"backdrop\"></div>\r\n      <div class=\"wishlist\" (click)=\"wishlist()\">\r\n        <div class=\"backdrop\"></div>\r\n        <img src=\"https://i.pinimg.com/564x/d6/91/5b/d6915bda9b337db69c69cbd217c3b307.jpg\">\r\n\r\n        <div class=\"right\">\r\n          <div class=\"heart\">\r\n\r\n            <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\r\n          </div>\r\n\r\n          <div class=\"clock\">\r\n            <p>{{myWish}} items</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"basket\" (click)=\"basket()\">\r\n        <div class=\"backdrop\"></div>\r\n        <img src=\"https://i.pinimg.com/564x/91/2b/7c/912b7c0f897888c8ae8d24dce149da34.jpg\">\r\n\r\n        <div class=\"right\">\r\n          <div class=\"heart\">\r\n            <ion-icon slot=\"start\" name=\"basket\"></ion-icon>\r\n          </div>\r\n\r\n          <div class=\"clock\">\r\n            <p>{{myCart}} items</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"web_view\">\r\n\r\n    <div class=\"image\">\r\n      <img src=\"{{profilePic}}\">\r\n      <div class=\"name\">\r\n        <!-- <ion-progress-bar type=\"indeterminate\"></ion-progress-bar> -->\r\n        <p>{{name }} &nbsp; {{ surname}} <br><span>{{email}}</span></p>\r\n      </div>\r\n    </div>\r\n    <div class=\"stuff\">\r\n      <div class=\"btnz\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\">\r\n        <ion-button (click)=\"showEdit()\" color=\"transparent\" *ngIf=\"!editprofile\" (ionBlur)=\"check('open')\"\r\n          (ionFocus)=\"check('close')\">\r\n          <span>Account Details <ion-icon slot=\"end\" name=\"add\"></ion-icon></span>\r\n          <!-- <span *ngIf=\"editprofile\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\">Account Details <ion-icon slot=\"end\" name=\"minus\" ></ion-icon> <p style=\"color:grey\"> UPDATE &nbsp; &nbsp; CANCEL</p> </span> -->\r\n        </ion-button>\r\n        <div class=\"update_cancel\" *ngIf=\"editprofile\" (ionBlur)=\"check('open')\" (ionFocus)=\"check('close')\">\r\n          <p class=\"acc\">Account Details</p>\r\n          <p class=\"update\" (click)=\"updateProfile()\">UPDATE &nbsp; &nbsp; <span (click)=\"showEdit()\">CANCEL</span></p>\r\n\r\n        </div>\r\n\r\n        <div class=\"edit\" *ngIf=\"editprofile\">\r\n          <div class=\"inputs\">\r\n\r\n            <ion-input [(ngModel)]=\"name\" placeholder=\"Name\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"surname\" placeholder=\"Surname\"></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"email\" placeholder=\"Email\" readonly></ion-input>\r\n\r\n            <ion-input [(ngModel)]=\"address\" placeholder=\"address\"></ion-input>\r\n\r\n            <ion-input type=\"file\" id=\"file\" (change)=\"featuredPhotoSelected($event)\"></ion-input>\r\n          </div>\r\n\r\n        </div>\r\n        <ion-button (click)=\"presentModal()\" color=\"transparent\">\r\n          <span>Pending Orders <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n        </ion-button>\r\n\r\n        <ion-button (click)=\"presentPending() \" color=\"transparent\">\r\n          <span>Order History <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></span>\r\n        </ion-button>\r\n      </div>\r\n\r\n\r\n      <div class=\"files\">\r\n        <div class=\"backdrop\"></div>\r\n        <div class=\"wishlist\" (click)=\" reviewed()\">\r\n          <div class=\"backdrop\"></div>\r\n          <img src=\"https://i.pinimg.com/564x/d6/91/5b/d6915bda9b337db69c69cbd217c3b307.jpg\">\r\n\r\n          <div class=\"right\">\r\n            <div class=\"heart\">\r\n              Wishlist\r\n              <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\r\n            </div>\r\n\r\n            <div class=\"clock\">\r\n              <p>{{myWish}} items</p>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"basket\" (click)=\"gotocart()\">\r\n          <div class=\"backdrop\"></div>\r\n          <img src=\"https://i.pinimg.com/564x/91/2b/7c/912b7c0f897888c8ae8d24dce149da34.jpg\">\r\n\r\n          <div class=\"right\">\r\n            <div class=\"heart\">\r\n              Basket\r\n              <ion-icon slot=\"start\" name=\"basket\"></ion-icon>\r\n            </div>\r\n\r\n            <div class=\"clock\">\r\n              <p>{{myCart}} items</p>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"backdrop1\" *ngIf=\"viewBackdrop\"></div>\r\n\r\n  <div id=\"wish\" [ngClass]=\"{'viewreviews': viewReviews, 'closereviews': !viewReviews}\">\r\n\r\n    <div class=\"heading\">\r\n      <p>Wishlist ({{myWishlist.length}})</p>\r\n\r\n      <ion-icon slot=\"icon-only\" name=\"close\" (click)=\"reviewed()\"></ion-icon>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"wishlist_items\">\r\n      <div class=\"div\">\r\n        <div class=\"items\" *ngFor=\"let w of myWishlist\">\r\n          <div class=\"left\">\r\n            <div class=\"img\">\r\n              <img src=\"{{w.info.image}}\" alt=\"\">\r\n            </div>\r\n\r\n            <div class=\"item_details\">\r\n              <p> {{w.info.name}} </p>\r\n              <p>{{w.info.price | currency:'R'}}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"right\">\r\n            <div class=\"trash_icon\" (click)=\"delete(w.id)\">\r\n              <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\r\n            </div>\r\n\r\n            <div class=\"add_to_basket\">\r\n              <ion-button (click)=\"addtoBusket(w.info.id, w.info, w.id)\" color=\"transparent\">\r\n                Add<ion-icon slot=\"end\" name=\"basket\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"items\" id=\"noItems\">\r\n          <p>Wishlist Empty</p>\r\n          <img src=\"../../assets/sad_smile.svg\" alt=\"\">\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"cart\" [ngClass]=\"{'viewcart': viewCart, 'closecart': !viewCart}\">\r\n\r\n    <div class=\"heading\">\r\n      <p>Basket ({{prodCart.length}})</p>\r\n\r\n      <ion-icon slot=\"icon-only\" name=\"close\" (click)=\"gotocart()\"></ion-icon>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"wishlist_items\">\r\n      <div class=\"div\">\r\n\r\n\r\n        <div class=\"items\" *ngFor=\"let c of prodCart; let i of index\">\r\n          <div class=\"left\" *ngFor=\"let p of c.data.product\">\r\n            <div class=\"img\">\r\n              <img src=\"{{p.picture}}\" alt=\"\">\r\n            </div>\r\n\r\n            <div class=\"item_details\" >\r\n              <p> <b>{{p.product_name}} &nbsp; {{p.cost | currency:'R'}}</b><br>\r\n                size: {{p.size}} &nbsp; color: {{p.color}} <br>\r\n                jan 23, 2020</p>\r\n\r\n              <p>\r\n                <ion-icon slot=\"start\" name=\"remove-circle-outline\" (click)=\"minuss(p, i)\"></ion-icon>\r\n                {{p.quantity}} <ion-icon slot=\"end\" name=\"add-circle-outline\" (click)=\"pluss(p, i)\"></ion-icon>\r\n              </p>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"right\">\r\n            <div class=\"trash_icon\" (click)=\"removeProd(c.id)\">\r\n              <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"items\" id=\"noItems\" *ngIf=\"prodCart.length === 0\">\r\n          <p>Wishlist Empty</p>\r\n          <img src=\"../../assets/sad_smile.svg\" alt=\"\">\r\n        </div>\r\n\r\n\r\n        <div class=\"add_to_basket\">\r\n\r\n          <div class=\"delivery_options\">\r\n            <ion-button (click)=\"switchView('d')\" color=\"transparent\"\r\n              [ngClass]=\"{'delivery':buttonActive, 'delivery-inactive': !buttonActive}\">\r\n              Delivery\r\n            </ion-button>\r\n            <ion-button (click)=\"switchView('c')\" color=\"transparent\"\r\n              [ngClass]=\"{'collection': !buttonActive, 'collection-inactive': buttonActive}\">\r\n              Collection\r\n            </ion-button>\r\n          </div>\r\n          <p style=\"width: 100%; text-align: right; font-size: 13px;\" *ngIf=\"!delType\"><i>Cart Total - {{getTotal() | currency:'R'}}</i></p>\r\n          <p *ngIf=\"delType==='Delivery'\" style=\"width: 100%; text-align: right; font-size: 13px;\"><i>Cart Total - {{Delivery(getTotal()) | currency:'R'}} Incl delivery</i></p>\r\n          <p *ngIf=\"delType==='Collection'\" style=\"width: 100%; text-align: right; font-size: 13px;\"><i>Cart Total - {{notDelivery(getTotal()) | currency:'R'}} Excl delivery</i></p>\r\n          <ion-button color=\"transparent\" [disabled]=\"prodCart.length==0\" (click)=\"presentAlertConfirm()\">\r\n            PLACE ORDER\r\n          </ion-button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pending_orders_pending_orders_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pending-orders/pending-orders.module */ "./src/app/pending-orders/pending-orders.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _order_history_order_history_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../order-history/order-history.module */ "./src/app/order-history/order-history.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");









var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProfilePageRoutingModule"], _pending_orders_pending_orders_module__WEBPACK_IMPORTED_MODULE_4__["PendingOrdersPageModule"], _order_history_order_history_module__WEBPACK_IMPORTED_MODULE_7__["OrderHistoryPageModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_8__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Abel|Poiret+One|Open+Sans+Condensed|Jura|Manjari|Poppins|Raleway|Montserrat \");\nion-toolbar {\n  --background: transparent;\n  position: absolute; }\nion-toolbar #icon {\n    color: maroon; }\n.container {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  position: absolute; }\n.container .image {\n    width: 100%;\n    height: 50vh;\n    display: flex;\n    flex-flow: column;\n    position: relative; }\n.container .image img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; }\n.container .image .name {\n      width: 80vw;\n      height: 15vw;\n      background: white;\n      text-align: center;\n      color: grey;\n      font-family: \"Poppins\";\n      font-size: 4vw;\n      border-radius: 10px;\n      z-index: 10;\n      position: absolute;\n      left: 10%;\n      bottom: 15px;\n      display: grid;\n      align-items: center;\n      box-shadow: 5px 5px 10px grey; }\n.container .image .name p {\n        margin: 0 !important;\n        font-weight: bold; }\n.container .image .name p span {\n          font-size: 3vw;\n          font-weight: normal; }\n.container .image .camera {\n      position: absolute;\n      bottom: 0;\n      right: 10px;\n      z-index: 15;\n      border-radius: 50%; }\n.container .image .camera ion-fab-button {\n        background: maroon;\n        border-radius: 50%;\n        color: white; }\n.container .btnz {\n    display: flex;\n    flex-flow: column;\n    width: 100vw;\n    margin: 5px 0px; }\n.container .btnz ion-button {\n      margin: 0;\n      padding: 0;\n      height: 7vh;\n      border-radius: 0 !important;\n      text-align: left;\n      border: 0.1px solid #d4d4d4;\n      background: #f2f2f2;\n      color: black;\n      font-weight: lighter;\n      overflow: hidden;\n      letter-spacing: 1px;\n      font-family: \"Poppins\"; }\n.container .btnz ion-button span {\n        width: 100%;\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between; }\n.container .btnz .edit {\n      width: 100%;\n      padding: 5px; }\n.container .btnz .edit ion-input {\n        width: 93vw;\n        border: 1px solid white;\n        margin: 5px;\n        padding: 3px;\n        border-radius: 7px;\n        font-size: 0.8em;\n        box-shadow: 2px 2px 20px #a5a5a5; }\n.container .btnz .edit .buttonz {\n        width: 100%;\n        display: flex;\n        flex-flow: row; }\n.container .btnz .edit .buttonz #cancel {\n          width: 45vw;\n          background: red;\n          border-radius: 8px; }\n.container .btnz .edit .buttonz #update {\n          width: 45vw;\n          background: green;\n          border-radius: 8px; }\n.container .btnz .edit .buttonz ion-button {\n          font-size: 0.8em;\n          margin: 5px;\n          height: 10vw;\n          border-radius: 10px;\n          color: white;\n          font-family: \"Poppins\";\n          letter-spacing: 2px; }\n.container .files {\n    width: 100%;\n    padding: 5px;\n    position: relative;\n    justify-content: space-evenly;\n    justify-items: center;\n    display: flex;\n    flex-flow: row; }\n.container .files .wishlist {\n      width: 45vw;\n      height: 25vh;\n      position: relative;\n      border-radius: 8px;\n      margin: 5px; }\n.container .files .wishlist img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 8px; }\n.container .files .wishlist .right {\n        display: flex;\n        height: 100%;\n        flex-flow: column;\n        text-align: right;\n        justify-content: space-between;\n        z-index: 10;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        color: white;\n        font-family: \"Poppins\";\n        font-weight: lighter; }\n.container .files .wishlist .right .heart ion-icon {\n          text-shadow: 5px 5px 10px grey; }\n.container .files .wishlist .backdrop {\n        -webkit-backdrop-filter: blur(3px);\n                backdrop-filter: blur(3px);\n        background: rgba(0, 0, 0, 0.39);\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: 0;\n        z-index: 10;\n        border-bottom-left-radius: 10px;\n        border-bottom-right-radius: 10px; }\n.container .files .basket {\n      margin: 5px;\n      width: 45vw;\n      height: 25vh;\n      position: relative;\n      border-radius: 8px; }\n.container .files .basket img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 8px; }\n.container .files .basket .right {\n        display: flex;\n        height: 100%;\n        flex-flow: column;\n        text-align: right;\n        justify-content: space-between;\n        z-index: 10;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        color: white;\n        font-family: \"Poppins\";\n        font-weight: lighter; }\n.container .files .basket .backdrop {\n        -webkit-backdrop-filter: blur(3px);\n                backdrop-filter: blur(3px);\n        background: rgba(0, 0, 0, 0.39);\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: 0;\n        z-index: 10;\n        border-bottom-left-radius: 10px;\n        border-bottom-right-radius: 10px; }\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite; }\n.loader .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n.loader .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n.loader .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n.loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto; }\n.loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); }\n.loader-hide .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n.loader-hide .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n.loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n@-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n@keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n@media only screen and (max-width: 1024px) {\n  .web_view {\n    display: none;\n    width: 0%;\n    height: 0%; }\n  #wish {\n    display: none;\n    width: 0%;\n    height: 0%; }\n  #nav {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  #lorem {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  #cart {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  #file {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; } }\n@media only screen and (min-width: 1025px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  #lorem {\n    position: relative;\n    top: 50px; }\n  #mobile {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  ion-toolbar {\n    --background: rgb(255, 255, 255);\n    width: 100%;\n    font-family: \"Raleway\";\n    letter-spacing: 2px;\n    color: #838383; }\n    ion-toolbar #icon {\n      color: #838383; }\n    ion-toolbar #number {\n      font-size: 0.8em;\n      position: relative;\n      top: 8px;\n      right: 5px; }\n    ion-toolbar .icon1 {\n      margin: 0 20vw; }\n  .web_view {\n    min-width: 70%;\n    max-width: 1200px;\n    margin: auto;\n    position: relative;\n    top: 8%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    display: flex;\n    flex-flow: row;\n    box-shadow: 5px 5px 10px #c4c4c4; }\n    .web_view .image {\n      width: 60vw;\n      height: 75vh;\n      display: flex;\n      flex-flow: column;\n      position: relative;\n      align-items: center;\n      margin: 10px; }\n      .web_view .image img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n      .web_view .image .name {\n        width: 80%;\n        min-height: 3vw;\n        background: white;\n        text-align: center;\n        color: grey;\n        font-family: \"Poppins\";\n        border-radius: 10px;\n        position: absolute;\n        bottom: 15px;\n        display: grid;\n        align-items: center;\n        box-shadow: 5px 5px 10px grey; }\n        .web_view .image .name p {\n          margin: 0 !important;\n          font-weight: bold; }\n          .web_view .image .name p span {\n            font-weight: normal; }\n      .web_view .image .camera {\n        position: absolute;\n        bottom: 5px;\n        right: 15px;\n        border-radius: 50%; }\n        .web_view .image .camera ion-fab-button {\n          background: maroon;\n          border-radius: 50%;\n          color: white; }\n    .web_view .stuff {\n      width: 35vw;\n      margin: 10px; }\n    .web_view .update_cancel {\n      width: 100%;\n      display: flex;\n      flex-flow: row;\n      justify-content: space-between;\n      padding: 10px;\n      margin: 5px 0px;\n      margin: 0;\n      padding: 0;\n      height: 7vh;\n      margin: 5px;\n      border-radius: 0 !important;\n      text-align: left;\n      border-bottom: 0.1px solid #d4d4d4;\n      border-top: 0.1px solid #d4d4d4;\n      border: 0.1px solid #d4d4d4;\n      background: #f2f2f2;\n      color: black;\n      font-weight: lighter;\n      overflow: hidden;\n      letter-spacing: 1px;\n      font-family: \"Poppins\"; }\n      .web_view .update_cancel .update {\n        width: 100%;\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between;\n        width: 30%;\n        margin-right: 10px;\n        color: #969696;\n        cursor: pointer; }\n      .web_view .update_cancel .acc {\n        margin-left: 10px; }\n    .web_view .btnz {\n      display: flex;\n      flex-flow: column;\n      margin: 5px 0px; }\n      .web_view .btnz ion-button {\n        margin: 0;\n        padding: 0;\n        height: 7.5vh;\n        margin: 5px;\n        border-radius: 0 !important;\n        text-align: left;\n        border-bottom: 0.1px solid #d4d4d4;\n        border-top: 0.1px solid #d4d4d4;\n        border: 0.1px solid #d4d4d4;\n        background: #f2f2f2;\n        color: black;\n        font-weight: lighter;\n        overflow: hidden;\n        letter-spacing: 1px;\n        font-family: \"Poppins\"; }\n        .web_view .btnz ion-button span {\n          width: 100%;\n          display: flex;\n          flex-flow: row;\n          justify-content: space-between; }\n      .web_view .btnz .edit {\n        padding: 5px; }\n        .web_view .btnz .edit ion-input {\n          border: 1px solid white;\n          margin: 5px;\n          padding: 3px;\n          border-radius: 7px;\n          box-shadow: 2px 2px 20px #a5a5a5; }\n        .web_view .btnz .edit .buttonz {\n          width: 100%;\n          display: flex;\n          flex-flow: row; }\n          .web_view .btnz .edit .buttonz #cancel {\n            width: 45vw;\n            background: red;\n            border-radius: 8px; }\n          .web_view .btnz .edit .buttonz #update {\n            width: 45vw;\n            background: green;\n            border-radius: 8px; }\n          .web_view .btnz .edit .buttonz ion-button {\n            margin: 5px;\n            border-radius: 10px;\n            color: white;\n            font-family: \"Poppins\";\n            letter-spacing: 2px; }\n    .web_view .files {\n      width: 100%;\n      padding: 5px;\n      position: relative;\n      justify-content: space-evenly;\n      justify-items: center;\n      display: flex;\n      flex-flow: row; }\n      .web_view .files .wishlist {\n        width: 45vw;\n        height: 47vh;\n        position: relative;\n        border-radius: 8px;\n        margin: 5px; }\n        .web_view .files .wishlist img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          border-radius: 8px; }\n        .web_view .files .wishlist .right {\n          display: flex;\n          height: 100%;\n          flex-flow: column;\n          text-align: right;\n          justify-content: space-between;\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          color: white;\n          font-family: \"Poppins\";\n          font-weight: lighter; }\n          .web_view .files .wishlist .right .heart ion-icon {\n            text-shadow: 5px 5px 10px grey; }\n        .web_view .files .wishlist .backdrop {\n          -webkit-backdrop-filter: blur(3px);\n                  backdrop-filter: blur(3px);\n          background: rgba(0, 0, 0, 0.39);\n          width: 100%;\n          height: 30px;\n          position: absolute;\n          bottom: 0;\n          z-index: 10;\n          border-bottom-left-radius: 10px;\n          border-bottom-right-radius: 10px; }\n      .web_view .files .basket {\n        margin: 5px;\n        width: 45vw;\n        height: 47vh;\n        position: relative;\n        border-radius: 8px; }\n        .web_view .files .basket img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          border-radius: 8px; }\n        .web_view .files .basket .right {\n          display: flex;\n          height: 100%;\n          flex-flow: column;\n          text-align: right;\n          justify-content: space-between;\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          color: white;\n          font-family: \"Poppins\";\n          font-weight: lighter; }\n        .web_view .files .basket .backdrop {\n          -webkit-backdrop-filter: blur(3px);\n                  backdrop-filter: blur(3px);\n          background: rgba(0, 0, 0, 0.39);\n          width: 100%;\n          height: 30px;\n          position: absolute;\n          bottom: 0;\n          z-index: 10;\n          border-bottom-left-radius: 10px;\n          border-bottom-right-radius: 10px; }\n  .backdrop1 {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background: black;\n    opacity: 0.5; }\n  .viewreviews {\n    position: absolute;\n    z-index: 150;\n    background: #c9c9c9;\n    width: 20vw;\n    height: 94%;\n    top: 57px;\n    right: 0;\n    align-items: center;\n    display: flex;\n    flex-flow: column;\n    overflow: hidden; }\n    .viewreviews .heading {\n      display: flex;\n      flex-flow: row;\n      justify-content: space-between;\n      width: 100%;\n      margin: 5px; }\n      .viewreviews .heading ion-icon {\n        color: white;\n        position: relative;\n        right: 20px;\n        top: 2.2vh;\n        font-size: 1em;\n        background: black;\n        border-radius: 50%; }\n      .viewreviews .heading p {\n        letter-spacing: 1px;\n        margin: 5px;\n        position: relative;\n        left: 2vw;\n        font-size: 1em; }\n    .viewreviews .wishlist_items {\n      display: flex;\n      flex-flow: column;\n      overflow-y: auto;\n      margin: 10px;\n      width: 20vw; }\n      .viewreviews .wishlist_items #noItems {\n        display: flex;\n        flex-flow: column;\n        background: none;\n        align-items: center;\n        box-shadow: none;\n        justify-content: center;\n        margin-top: 200px; }\n        .viewreviews .wishlist_items #noItems img {\n          width: 5vw;\n          height: 5vw; }\n        .viewreviews .wishlist_items #noItems p {\n          text-align: center;\n          font-size: 15px;\n          color: grey; }\n      .viewreviews .wishlist_items .div {\n        height: 80vh;\n        overflow-y: auto;\n        scrollbar-width: 2px;\n        width: 100%; }\n      .viewreviews .wishlist_items .items {\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between;\n        margin: 10px;\n        min-height: 7vh;\n        margin: 5px;\n        background: white;\n        border-radius: 5px;\n        box-shadow: 5px 5px 10px #9e9e9e; }\n        .viewreviews .wishlist_items .items .left {\n          display: flex;\n          flex-flow: row;\n          justify-content: space-between;\n          margin: 5px; }\n          .viewreviews .wishlist_items .items .left .img {\n            width: 5vw;\n            height: 5.5vw;\n            margin: 3px;\n            border-radius: 5px; }\n            .viewreviews .wishlist_items .items .left .img img {\n              width: 100%;\n              height: 100%;\n              -o-object-fit: cover;\n                 object-fit: cover;\n              border-radius: 5px; }\n          .viewreviews .wishlist_items .items .left .item_details {\n            width: 8vw; }\n        .viewreviews .wishlist_items .items .right {\n          width: 6vw;\n          display: flex;\n          flex-flow: column;\n          justify-content: space-between;\n          text-align: right;\n          margin: 5px; }\n          .viewreviews .wishlist_items .items .right ion-button {\n            font-size: 12px;\n            width: 4vw;\n            height: 20px;\n            display: flex;\n            flex-flow: row;\n            justify-content: space-between; }\n            .viewreviews .wishlist_items .items .right ion-button ion-icon {\n              font-size: 12px; }\n          .viewreviews .wishlist_items .items .right .trash_icon ion-icon {\n            color: #940e0e; }\n          .viewreviews .wishlist_items .items .right .add_to_basket {\n            background: #020225;\n            color: white; }\n  .closereviews {\n    position: absolute;\n    z-index: 150;\n    background: white;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    width: 0vw;\n    height: 85vh;\n    top: 10%;\n    bottom: 40%;\n    right: 0;\n    align-items: center;\n    display: flex;\n    flex-flow: column;\n    overflow: hidden; }\n  .viewcart {\n    position: absolute;\n    z-index: 150;\n    background: #c9c9c9;\n    width: 20vw;\n    height: 94%;\n    top: 56.5px;\n    bottom: 40%;\n    right: 0;\n    align-items: center;\n    display: flex;\n    flex-flow: column;\n    overflow: hidden; }\n    .viewcart .heading {\n      display: flex;\n      flex-flow: row;\n      justify-content: space-between;\n      width: 100%;\n      margin: 5px; }\n      .viewcart .heading ion-icon {\n        color: white;\n        position: relative;\n        right: 20px;\n        top: 2.2vh;\n        font-size: 1em;\n        background: black;\n        border-radius: 50%; }\n      .viewcart .heading p {\n        letter-spacing: 1px;\n        margin: 5px;\n        position: relative;\n        left: 2vw;\n        font-size: 1em; }\n    .viewcart .wishlist_items {\n      display: flex;\n      flex-flow: column;\n      overflow-y: auto;\n      margin: 10px;\n      width: 20vw;\n      height: 100%;\n      position: relative; }\n      .viewcart .wishlist_items #noItems {\n        display: flex;\n        flex-flow: column;\n        background: none;\n        align-items: center;\n        box-shadow: none;\n        justify-content: center;\n        margin-top: 200px; }\n        .viewcart .wishlist_items #noItems img {\n          width: 5vw;\n          height: 5vw; }\n        .viewcart .wishlist_items #noItems p {\n          text-align: center;\n          font-size: 15px;\n          color: grey; }\n      .viewcart .wishlist_items .div {\n        height: 65vh;\n        overflow-y: auto;\n        scrollbar-width: 2px;\n        width: 100%; }\n      .viewcart .wishlist_items .items {\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between;\n        margin: 10px;\n        min-height: 7vh;\n        margin: 5px;\n        background: white;\n        border-radius: 5px;\n        box-shadow: 5px 5px 10px #9e9e9e; }\n        .viewcart .wishlist_items .items .left {\n          display: flex;\n          flex-flow: row;\n          justify-content: space-between;\n          margin: 5px; }\n          .viewcart .wishlist_items .items .left .img {\n            width: 5vw;\n            height: 5.5vw;\n            margin: 3px;\n            border-radius: 5px; }\n            .viewcart .wishlist_items .items .left .img img {\n              width: 100%;\n              height: 100%;\n              -o-object-fit: cover;\n                 object-fit: cover;\n              border-radius: 5px; }\n          .viewcart .wishlist_items .items .left .item_details {\n            width: 12vw; }\n            .viewcart .wishlist_items .items .left .item_details p {\n              font-size: 13px; }\n        .viewcart .wishlist_items .items .right {\n          width: 6vw;\n          display: flex;\n          flex-flow: column;\n          justify-content: space-between;\n          text-align: right;\n          margin: 5px; }\n          .viewcart .wishlist_items .items .right ion-button {\n            font-size: 12px;\n            width: 4vw;\n            height: 20px;\n            display: flex;\n            flex-flow: row;\n            justify-content: space-between; }\n            .viewcart .wishlist_items .items .right ion-button ion-icon {\n              font-size: 12px; }\n          .viewcart .wishlist_items .items .right .trash_icon ion-icon {\n            color: #940e0e; }\n      .viewcart .wishlist_items .add_to_basket {\n        color: white;\n        position: absolute;\n        bottom: 0;\n        width: 90%;\n        margin: 20px; }\n        .viewcart .wishlist_items .add_to_basket p {\n          color: #00002b; }\n        .viewcart .wishlist_items .add_to_basket ion-button {\n          background: #020225;\n          width: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          text-align: center; }\n        .viewcart .wishlist_items .add_to_basket .delivery_options {\n          display: flex;\n          flex-flow: row;\n          justify-content: space-evenly;\n          margin: 5px; }\n          .viewcart .wishlist_items .add_to_basket .delivery_options ion-button {\n            font-size: 13px;\n            color: grey;\n            width: 20vw;\n            height: 2vw; }\n          .viewcart .wishlist_items .add_to_basket .delivery_options .line {\n            width: 20vw;\n            height: 1.5px;\n            background: grey; }\n        .viewcart .wishlist_items .add_to_basket .delivery {\n          width: 50%;\n          height: 100%;\n          align-items: center;\n          overflow: hidden;\n          background: #b8b8b8; }\n          .viewcart .wishlist_items .add_to_basket .delivery ion-button {\n            border-bottom: 2px solid black; }\n        .viewcart .wishlist_items .add_to_basket .delivery-inactive {\n          width: 50%;\n          height: 100%;\n          align-items: center;\n          overflow: hidden;\n          opacity: 0.5;\n          background: #fafafa; }\n          .viewcart .wishlist_items .add_to_basket .delivery-inactive ion-button {\n            width: 100%;\n            height: 100%;\n            border-radius: 30px;\n            font-family: \"Poiret One\";\n            font-weight: bold;\n            letter-spacing: 3px;\n            background: #bf967e;\n            color: white;\n            border: none; }\n        .viewcart .wishlist_items .add_to_basket .collection {\n          width: 50%;\n          height: 100%;\n          overflow: hidden;\n          background: #b8b8b8; }\n          .viewcart .wishlist_items .add_to_basket .collection ion-button {\n            width: 100%;\n            height: 100%;\n            border-radius: 30px;\n            font-family: \"Poiret One\";\n            font-weight: bold;\n            letter-spacing: 3px;\n            background: #bf967e;\n            color: white;\n            border: none; }\n        .viewcart .wishlist_items .add_to_basket .collection-inactive {\n          background: #fafafa;\n          width: 50%;\n          height: 100%;\n          overflow: hidden;\n          opacity: 0.5; }\n          .viewcart .wishlist_items .add_to_basket .collection-inactive ion-button {\n            width: 100%;\n            height: 100%;\n            border-radius: 30px;\n            font-family: \"Poiret One\";\n            font-weight: bold;\n            letter-spacing: 3px;\n            background: #bf967e;\n            color: white;\n            border: none; }\n  .closecart {\n    position: absolute;\n    z-index: 150;\n    background: white;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    width: 0vw;\n    height: 85vh;\n    top: 10%;\n    bottom: 40%;\n    right: 0;\n    align-items: center;\n    display: flex;\n    flex-flow: column;\n    overflow: hidden; } }\n::-webkit-scrollbar {\n  width: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtSUFBWTtBQUVaO0VBQ0UseUJBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUZwQjtJQUlJLGFBQWEsRUFBQTtBQUlqQjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQixFQUFBO0FBSnBCO0lBUUksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0FBWnRCO01BZU0sV0FBVztNQUNYLFlBQVk7TUFDWixvQkFBaUI7U0FBakIsaUJBQWlCLEVBQUE7QUFqQnZCO01BcUJNLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsc0JBQXNCO01BQ3RCLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsWUFBWTtNQUNaLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsNkJBQTZCLEVBQUE7QUFuQ25DO1FBc0NRLG9CQUFvQjtRQUNwQixpQkFBaUIsRUFBQTtBQXZDekI7VUF5Q1UsY0FBYztVQUNkLG1CQUFtQixFQUFBO0FBMUM3QjtNQWdETSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFdBQVc7TUFDWCxXQUFXO01BQ1gsa0JBQWtCLEVBQUE7QUFwRHhCO1FBc0RRLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsWUFBWSxFQUFBO0FBeERwQjtJQThESSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlLEVBQUE7QUFqRW5CO01BbUVNLFNBQVM7TUFDVCxVQUFVO01BQ1YsV0FBVztNQUNYLDJCQUEyQjtNQUMzQixnQkFBZ0I7TUFDaEIsMkJBQXNDO01BR3RDLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osb0JBQW9CO01BQ3BCLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsc0JBQXNCLEVBQUE7QUFoRjVCO1FBa0ZRLFdBQVc7UUFDWCxhQUFhO1FBQ2IsY0FBYztRQUNkLDhCQUE4QixFQUFBO0FBckZ0QztNQTBGTSxXQUFXO01BQ1gsWUFBWSxFQUFBO0FBM0ZsQjtRQTZGUSxXQUFXO1FBQ1gsdUJBQW9DO1FBQ3BDLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixnQ0FBMkMsRUFBQTtBQW5HbkQ7UUF1R1EsV0FBVztRQUNYLGFBQWE7UUFDYixjQUFjLEVBQUE7QUF6R3RCO1VBMkdVLFdBQVc7VUFDWCxlQUFlO1VBQ2Ysa0JBQWtCLEVBQUE7QUE3RzVCO1VBaUhVLFdBQVc7VUFDWCxpQkFBaUI7VUFDakIsa0JBQWtCLEVBQUE7QUFuSDVCO1VBc0hVLGdCQUFnQjtVQUNoQixXQUFXO1VBQ1gsWUFBWTtVQUNaLG1CQUFtQjtVQUNuQixZQUFZO1VBQ1osc0JBQXNCO1VBQ3RCLG1CQUFtQixFQUFBO0FBNUg3QjtJQW1JSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixjQUFjLEVBQUE7QUF6SWxCO01BNElNLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixXQUFXLEVBQUE7QUFoSmpCO1FBa0pRLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQWlCO1dBQWpCLGlCQUFpQjtRQUNqQixrQkFBa0IsRUFBQTtBQXJKMUI7UUF5SlEsYUFBYTtRQUNiLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLDhCQUE4QjtRQUM5QixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixvQkFBb0IsRUFBQTtBQXBLNUI7VUF3S1ksOEJBQThCLEVBQUE7QUF4SzFDO1FBOEtRLGtDQUEwQjtnQkFBMUIsMEJBQTBCO1FBQzFCLCtCQUErQjtRQUMvQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixTQUFTO1FBRVQsV0FBVztRQUNYLCtCQUErQjtRQUMvQixnQ0FBZ0MsRUFBQTtBQXZMeEM7TUE0TE0sV0FBVztNQUNYLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGtCQUFrQixFQUFBO0FBaE14QjtRQWtNUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFpQjtXQUFqQixpQkFBaUI7UUFDakIsa0JBQWtCLEVBQUE7QUFyTTFCO1FBeU1RLGFBQWE7UUFDYixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQiw4QkFBOEI7UUFDOUIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsb0JBQW9CLEVBQUE7QUFwTjVCO1FBd05RLGtDQUEwQjtnQkFBMUIsMEJBQTBCO1FBQzFCLCtCQUErQjtRQUMvQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixTQUFTO1FBRVQsV0FBVztRQUNYLCtCQUErQjtRQUMvQixnQ0FBZ0MsRUFBQTtBQUt4QztFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLCtEQUErRDtFQUMvRCxzREFBOEM7VUFBOUMsOENBQThDLEVBQUE7QUFqQmhEO0lBb0JNLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVksRUFBQTtBQXZCbEI7SUEwQk0sa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMkRBQW1EO1lBQW5ELG1EQUFtRCxFQUFBO0FBaEN6RDtJQW1DTSxTQUFTO0lBQ1QsOENBQXNDO1lBQXRDLHNDQUFzQyxFQUFBO0FBcEM1QztJQXVDTSxTQUFTO0lBQ1QsOENBQXNDO1lBQXRDLHNDQUFzQyxFQUFBO0FBeEM1QztJQTJDTSxVQUFVO0lBQ1YsOENBQXNDO1lBQXRDLHNDQUFzQyxFQUFBO0FBNUM1QztJQStDTSxVQUFVO0lBQ1YsOENBQXNDO1lBQXRDLHNDQUFzQyxFQUFBO0FBRXhDO0VBQ0U7SUFDRSxtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLG1CQUFtQixFQUFBLEVBQUE7QUFMdkI7RUFDRTtJQUNFLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsbUJBQW1CLEVBQUEsRUFBQTtBQUd2QjtFQUNFO0lBQ0UsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxtQkFBbUIsRUFBQSxFQUFBO0FBTHZCO0VBQ0U7SUFDRSxtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLG1CQUFtQixFQUFBLEVBQUE7QUFHdkI7RUFDRTtJQUNFLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsNkJBQTZCLEVBQUEsRUFBQTtBQUxqQztFQUNFO0lBQ0UsMEJBQTBCLEVBQUE7RUFFNUI7SUFDRSw2QkFBNkIsRUFBQSxFQUFBO0FBS3JDO0VBRUUsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUVsQixZQUFZO0VBRVosWUFBWSxFQUFBO0FBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxpQkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsK0RBQStELEVBQUE7QUFYakU7SUFjTSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFqQmxCO0lBb0JNLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDJEQUFtRDtZQUFuRCxtREFBbUQsRUFBQTtBQTFCekQ7SUE2Qk0sU0FBUztJQUNULDhDQUFzQztZQUF0QyxzQ0FBc0MsRUFBQTtBQTlCNUM7SUFpQ00sU0FBUztJQUNULDhDQUFzQztZQUF0QyxzQ0FBc0MsRUFBQTtBQWxDNUM7SUFxQ00sVUFBVTtJQUNWLDhDQUFzQztZQUF0QyxzQ0FBc0MsRUFBQTtBQXRDNUM7SUF5Q00sVUFBVTtJQUNWLDhDQUFzQztZQUF0QyxzQ0FBc0MsRUFBQTtBQUV4QztFQUNFO0lBQ0UsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxtQkFBbUIsRUFBQSxFQUFBO0FBR3ZCO0VBQ0U7SUFDRSxtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLG1CQUFtQixFQUFBLEVBQUE7QUFHdkI7RUFDRTtJQUNFLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsNkJBQTZCLEVBQUEsRUFBQTtBQUtyQztFQUNFO0lBRUUscUJBQThCLEVBQUE7RUFHaEM7SUFHRSxxQkFBNkIsRUFBQTtFQUUvQjtJQUNFLHFCQUErQixFQUFBLEVBQUE7QUFabkM7RUFDRTtJQUVFLHFCQUE4QixFQUFBO0VBR2hDO0lBR0UscUJBQTZCLEVBQUE7RUFFL0I7SUFDRSxxQkFBK0IsRUFBQSxFQUFBO0FBTW5DO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVUsRUFBQTtFQUdaO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVLEVBQUE7RUFHWjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CLEVBQUE7RUFHdEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQixFQUFBO0VBRXRCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0IsRUFBQTtFQUd0QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CLEVBQUEsRUFDckI7QUFJSDtFQUNFO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0IsRUFBQTtFQUd0QjtJQUNFLGtCQUFrQjtJQUNsQixTQUFTLEVBQUE7RUFHWDtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CLEVBQUE7RUFHdEI7SUFDRSxnQ0FBYTtJQUNiLFdBQVc7SUFJWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGNBQXlCLEVBQUE7SUFSM0I7TUFJSSxjQUF5QixFQUFBO0lBSjdCO01BVUksZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsVUFBVSxFQUFBO0lBYmQ7TUFnQkksY0FBYyxFQUFBO0VBSWxCO0lBQ0UsY0FBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLGdDQUEyQyxFQUFBO0lBVDdDO01BWUksV0FBVztNQUNYLFlBQVk7TUFDWixhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsWUFBWSxFQUFBO01BbEJoQjtRQXFCTSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFpQjtXQUFqQixpQkFBaUIsRUFBQTtNQXZCdkI7UUEyQk0sVUFBVTtRQUNWLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsbUJBQW1CO1FBRW5CLGtCQUFrQjtRQUVsQixZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw2QkFBNkIsRUFBQTtRQXhDbkM7VUEyQ1Esb0JBQW9CO1VBQ3BCLGlCQUFpQixFQUFBO1VBNUN6QjtZQThDVSxtQkFBbUIsRUFBQTtNQTlDN0I7UUFvRE0sa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxXQUFXO1FBRVgsa0JBQWtCLEVBQUE7UUF4RHhCO1VBMERRLGtCQUFrQjtVQUNsQixrQkFBa0I7VUFDbEIsWUFBWSxFQUFBO0lBNURwQjtNQWtFSSxXQUFXO01BQ1gsWUFBWSxFQUFBO0lBbkVoQjtNQXVFSSxXQUFXO01BQ1gsYUFBYTtNQUNiLGNBQWM7TUFDZCw4QkFBOEI7TUFDOUIsYUFBYTtNQUNiLGVBQWU7TUFFZixTQUFTO01BQ1QsVUFBVTtNQUNWLFdBQVc7TUFDWCxXQUFXO01BQ1gsMkJBQTJCO01BQzNCLGdCQUFnQjtNQUNoQixrQ0FBNkM7TUFDN0MsK0JBQTBDO01BQzFDLDJCQUFzQztNQUN0QyxtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLG9CQUFvQjtNQUNwQixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLHNCQUFzQixFQUFBO01BNUYxQjtRQThGTSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGNBQWM7UUFDZCw4QkFBOEI7UUFDOUIsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixjQUF5QjtRQUN6QixlQUFlLEVBQUE7TUFyR3JCO1FBeUdNLGlCQUFpQixFQUFBO0lBekd2QjtNQThHSSxhQUFhO01BQ2IsaUJBQWlCO01BRWpCLGVBQWUsRUFBQTtNQWpIbkI7UUFvSE0sU0FBUztRQUNULFVBQVU7UUFDVixhQUFhO1FBQ2IsV0FBVztRQUNYLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsa0NBQTZDO1FBQzdDLCtCQUEwQztRQUMxQywyQkFBc0M7UUFDdEMsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixzQkFBc0IsRUFBQTtRQWxJNUI7VUFvSVEsV0FBVztVQUNYLGFBQWE7VUFDYixjQUFjO1VBQ2QsOEJBQThCLEVBQUE7TUF2SXRDO1FBNklNLFlBQVksRUFBQTtRQTdJbEI7VUFnSlEsdUJBQW9DO1VBQ3BDLFdBQVc7VUFDWCxZQUFZO1VBQ1osa0JBQWtCO1VBRWxCLGdDQUEyQyxFQUFBO1FBckpuRDtVQXlKUSxXQUFXO1VBQ1gsYUFBYTtVQUNiLGNBQWMsRUFBQTtVQTNKdEI7WUE2SlUsV0FBVztZQUNYLGVBQWU7WUFDZixrQkFBa0IsRUFBQTtVQS9KNUI7WUFtS1UsV0FBVztZQUNYLGlCQUFpQjtZQUNqQixrQkFBa0IsRUFBQTtVQXJLNUI7WUF5S1UsV0FBVztZQUVYLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osc0JBQXNCO1lBQ3RCLG1CQUFtQixFQUFBO0lBOUs3QjtNQXFMSSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQiw2QkFBNkI7TUFDN0IscUJBQXFCO01BQ3JCLGFBQWE7TUFDYixjQUFjLEVBQUE7TUEzTGxCO1FBOExNLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixXQUFXLEVBQUE7UUFsTWpCO1VBb01RLFdBQVc7VUFDWCxZQUFZO1VBQ1osb0JBQWlCO2FBQWpCLGlCQUFpQjtVQUNqQixrQkFBa0IsRUFBQTtRQXZNMUI7VUEyTVEsYUFBYTtVQUNiLFlBQVk7VUFDWixpQkFBaUI7VUFDakIsaUJBQWlCO1VBQ2pCLDhCQUE4QjtVQUU5QixrQkFBa0I7VUFDbEIsU0FBUztVQUNULFdBQVc7VUFDWCxZQUFZO1VBQ1osc0JBQXNCO1VBQ3RCLG9CQUFvQixFQUFBO1VBdE41QjtZQTBOWSw4QkFBOEIsRUFBQTtRQTFOMUM7VUFnT1Esa0NBQTBCO2tCQUExQiwwQkFBMEI7VUFDMUIsK0JBQStCO1VBQy9CLFdBQVc7VUFDWCxZQUFZO1VBQ1osa0JBQWtCO1VBQ2xCLFNBQVM7VUFFVCxXQUFXO1VBQ1gsK0JBQStCO1VBQy9CLGdDQUFnQyxFQUFBO01Bek94QztRQThPTSxXQUFXO1FBQ1gsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsa0JBQWtCLEVBQUE7UUFsUHhCO1VBb1BRLFdBQVc7VUFDWCxZQUFZO1VBQ1osb0JBQWlCO2FBQWpCLGlCQUFpQjtVQUNqQixrQkFBa0IsRUFBQTtRQXZQMUI7VUEyUFEsYUFBYTtVQUNiLFlBQVk7VUFDWixpQkFBaUI7VUFDakIsaUJBQWlCO1VBQ2pCLDhCQUE4QjtVQUU5QixrQkFBa0I7VUFDbEIsU0FBUztVQUNULFdBQVc7VUFDWCxZQUFZO1VBQ1osc0JBQXNCO1VBQ3RCLG9CQUFvQixFQUFBO1FBdFE1QjtVQTBRUSxrQ0FBMEI7a0JBQTFCLDBCQUEwQjtVQUMxQiwrQkFBK0I7VUFDL0IsV0FBVztVQUNYLFlBQVk7VUFDWixrQkFBa0I7VUFDbEIsU0FBUztVQUVULFdBQVc7VUFDWCwrQkFBK0I7VUFDL0IsZ0NBQWdDLEVBQUE7RUFNeEM7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7RUFHZDtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQThCO0lBQzlCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsU0FBUztJQUNULFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtJQVhsQjtNQWNJLGFBQWE7TUFDYixjQUFjO01BQ2QsOEJBQThCO01BQzlCLFdBQVc7TUFFWCxXQUFXLEVBQUE7TUFuQmY7UUFzQk0sWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsVUFBVTtRQUNWLGNBQWM7UUFDZCxpQkFBd0I7UUFDeEIsa0JBQWtCLEVBQUE7TUE1QnhCO1FBZ0NNLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxjQUFjLEVBQUE7SUFwQ3BCO01BeUNJLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixXQUFXLEVBQUE7TUE3Q2Y7UUFnRE0sYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGdCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsaUJBQWlCLEVBQUE7UUF0RHZCO1VBd0RRLFVBQVU7VUFDVixXQUFXLEVBQUE7UUF6RG5CO1VBNERRLGtCQUFrQjtVQUNsQixlQUFlO1VBQ2YsV0FBVyxFQUFBO01BOURuQjtRQW1FTSxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixXQUFXLEVBQUE7TUF0RWpCO1FBeUVNLGFBQWE7UUFDYixjQUFjO1FBQ2QsOEJBQThCO1FBQzlCLFlBQVk7UUFDWixlQUFlO1FBQ2YsV0FBVztRQUNYLGlCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsZ0NBQTJDLEVBQUE7UUFqRmpEO1VBbUZRLGFBQWE7VUFDYixjQUFjO1VBQ2QsOEJBQThCO1VBQzlCLFdBQVcsRUFBQTtVQXRGbkI7WUF3RlUsVUFBVTtZQUNWLGFBQWE7WUFDYixXQUFXO1lBQ1gsa0JBQWtCLEVBQUE7WUEzRjVCO2NBNkZZLFdBQVc7Y0FDWCxZQUFZO2NBQ1osb0JBQWlCO2lCQUFqQixpQkFBaUI7Y0FDakIsa0JBQWtCLEVBQUE7VUFoRzlCO1lBcUdVLFVBQVUsRUFBQTtRQXJHcEI7VUEwR1EsVUFBVTtVQUNWLGFBQWE7VUFDYixpQkFBaUI7VUFDakIsOEJBQThCO1VBQzlCLGlCQUFpQjtVQUNqQixXQUFXLEVBQUE7VUEvR25CO1lBaUhVLGVBQWU7WUFDZixVQUFVO1lBQ1YsWUFBWTtZQUNaLGFBQWE7WUFDYixjQUFjO1lBQ2QsOEJBQThCLEVBQUE7WUF0SHhDO2NBd0hZLGVBQWUsRUFBQTtVQXhIM0I7WUE4SFksY0FBdUIsRUFBQTtVQTlIbkM7WUFrSVUsbUJBQXlCO1lBQ3pCLFlBQVksRUFBQTtFQU90QjtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLFlBQVk7SUFDWixRQUFRO0lBQ1IsV0FBVztJQUNYLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQThCO0lBQzlCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7SUFabEI7TUFlSSxhQUFhO01BQ2IsY0FBYztNQUNkLDhCQUE4QjtNQUM5QixXQUFXO01BQ1gsV0FBVyxFQUFBO01BbkJmO1FBc0JNLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFVBQVU7UUFDVixjQUFjO1FBQ2QsaUJBQXdCO1FBQ3hCLGtCQUFrQixFQUFBO01BNUJ4QjtRQWdDTSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsY0FBYyxFQUFBO0lBcENwQjtNQXlDSSxhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0IsRUFBQTtNQS9DdEI7UUFpRE0sYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGdCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsaUJBQWlCLEVBQUE7UUF2RHZCO1VBeURRLFVBQVU7VUFDVixXQUFXLEVBQUE7UUExRG5CO1VBNkRRLGtCQUFrQjtVQUNsQixlQUFlO1VBQ2YsV0FBVyxFQUFBO01BL0RuQjtRQW9FTSxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixXQUFXLEVBQUE7TUF2RWpCO1FBMEVNLGFBQWE7UUFDYixjQUFjO1FBQ2QsOEJBQThCO1FBQzlCLFlBQVk7UUFDWixlQUFlO1FBQ2YsV0FBVztRQUNYLGlCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsZ0NBQTJDLEVBQUE7UUFsRmpEO1VBb0ZRLGFBQWE7VUFDYixjQUFjO1VBQ2QsOEJBQThCO1VBQzlCLFdBQVcsRUFBQTtVQXZGbkI7WUF5RlUsVUFBVTtZQUNWLGFBQWE7WUFDYixXQUFXO1lBQ1gsa0JBQWtCLEVBQUE7WUE1RjVCO2NBOEZZLFdBQVc7Y0FDWCxZQUFZO2NBQ1osb0JBQWlCO2lCQUFqQixpQkFBaUI7Y0FDakIsa0JBQWtCLEVBQUE7VUFqRzlCO1lBcUdVLFdBQVcsRUFBQTtZQXJHckI7Y0F1R1ksZUFBZSxFQUFBO1FBdkczQjtVQTZHUSxVQUFVO1VBQ1YsYUFBYTtVQUNiLGlCQUFpQjtVQUNqQiw4QkFBOEI7VUFDOUIsaUJBQWlCO1VBQ2pCLFdBQVcsRUFBQTtVQWxIbkI7WUFvSFUsZUFBZTtZQUNmLFVBQVU7WUFDVixZQUFZO1lBQ1osYUFBYTtZQUNiLGNBQWM7WUFDZCw4QkFBOEIsRUFBQTtZQXpIeEM7Y0EySFksZUFBZSxFQUFBO1VBM0gzQjtZQWlJWSxjQUF1QixFQUFBO01BakluQztRQXVJTSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsWUFBWSxFQUFBO1FBM0lsQjtVQTZJUSxjQUFvQixFQUFBO1FBN0k1QjtVQWdKUSxtQkFBeUI7VUFDekIsV0FBVztVQUNYLG9CQUFpQjthQUFqQixpQkFBaUI7VUFDakIsa0JBQWtCLEVBQUE7UUFuSjFCO1VBc0pRLGFBQWE7VUFDYixjQUFjO1VBQ2QsNkJBQTZCO1VBQzdCLFdBQVcsRUFBQTtVQXpKbkI7WUEySlUsZUFBZTtZQUNmLFdBQVc7WUFDWCxXQUFXO1lBQ1gsV0FBVyxFQUFBO1VBOUpyQjtZQWtLVSxXQUFXO1lBQ1gsYUFBYTtZQUNiLGdCQUFnQixFQUFBO1FBcEsxQjtVQXlLUSxVQUFVO1VBQ1YsWUFBWTtVQUNaLG1CQUFtQjtVQUNuQixnQkFBZ0I7VUFDaEIsbUJBQThCLEVBQUE7VUE3S3RDO1lBK0tVLDhCQUE4QixFQUFBO1FBL0t4QztVQW1MUSxVQUFVO1VBQ1YsWUFBWTtVQUNaLG1CQUFtQjtVQUNuQixnQkFBZ0I7VUFDaEIsWUFBWTtVQUNaLG1CQUE4QixFQUFBO1VBeEx0QztZQTBMVSxXQUFXO1lBQ1gsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLFlBQVksRUFBQTtRQWxNdEI7VUFzTVEsVUFBVTtVQUNWLFlBQVk7VUFDWixnQkFBZ0I7VUFDaEIsbUJBQThCLEVBQUE7VUF6TXRDO1lBMk1VLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLHlCQUF5QjtZQUN6QixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osWUFBWSxFQUFBO1FBbk50QjtVQXVOUSxtQkFBOEI7VUFDOUIsVUFBVTtVQUNWLFlBQVk7VUFDWixnQkFBZ0I7VUFDaEIsWUFBWSxFQUFBO1VBM05wQjtZQTZOVSxXQUFXO1lBQ1gsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLFlBQVksRUFBQTtFQU90QjtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLFlBQVk7SUFDWixRQUFRO0lBQ1IsV0FBVztJQUNYLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQSxFQUNqQjtBQUdIO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFiZWx8UG9pcmV0K09uZXxPcGVuK1NhbnMrQ29uZGVuc2VkfEp1cmF8TWFuamFyaXxQb3BwaW5zfFJhbGV3YXl8TW9udHNlcnJhdCBcIik7XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgI2ljb24ge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICB3aWR0aDogODB2dztcclxuICAgICAgaGVpZ2h0OiAxNXZ3O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMTAlO1xyXG4gICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBncmV5O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbWVyYSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcm9vbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRueiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDd2aDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBib3JkZXI6IDAuMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxuICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgICAvLyBib3JkZXItdG9wOiAwLjFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZWRpdCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDkzdnc7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiKDE2NSwgMTY1LCAxNjUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnV0dG9ueiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAjY2FuY2VsIHtcclxuICAgICAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VwZGF0ZSB7XHJcbiAgICAgICAgICB3aWR0aDogNDV2dztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIGhlaWdodDogMTB2dztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZpbGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcblxyXG4gICAgLndpc2hsaXN0IHtcclxuICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICAgIGhlaWdodDogMjV2aDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuXHJcbiAgICAgICAgLmhlYXJ0IHtcclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggMTBweCBncmV5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzkpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG5cclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJhc2tldCB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICB3aWR0aDogNDV2dztcclxuICAgICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5iYWNrZHJvcCB7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM5KTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjcsIDYzKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIGFuaW1hdGlvbjogYmFja2dyb3VuZG1vdmVyIDMwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLm1hcGxvYWRlciB7XHJcbiAgICAubGRzLWVsbGlwc2lzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzM3B4O1xyXG4gICAgICB3aWR0aDogMTNweDtcclxuICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbGVmdDogMzJweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgICBsZWZ0OiA1NnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubG9hZGluZy10ZXh0IHtcclxuICAvLyBjb2xvcjogeWVsbG93O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwdmg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZDogcmVkO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICAvL3otaW5kZXg6IDkwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ubG9hZGVyLWhpZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICAubWFwbG9hZGVyIHtcclxuICAgIC5sZHMtZWxsaXBzaXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbWFwbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4MiwgNzAsIDk1KTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE5MiwgMTkyKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMDYsIDIwNiwgMjU1KTtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0MiwgNTAsIDc1KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTAsIDE4MiwgNDMpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTY3LCAxNjcpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLndlYl92aWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gIH1cclxuXHJcbiAgI3dpc2gge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgfVxyXG5cclxuICAjbmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjbG9yZW0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgI2NhcnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNmaWxle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNXB4KXtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjbG9yZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgI21vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICNpY29uIHtcclxuICAgICAgY29sb3I6IHJnYigxMzEsIDEzMSwgMTMxKTtcclxuICAgIH1cclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xyXG4gICAgI251bWJlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbjEge1xyXG4gICAgICBtYXJnaW46IDAgMjB2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53ZWJfdmlldyB7XHJcbiAgICBtaW4td2lkdGg6NzAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDglO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTk2LCAxOTYsIDE5Nik7XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgd2lkdGg6IDYwdnc7XHJcbiAgICAgIGhlaWdodDogNzV2aDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDN2dztcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLy8gei1pbmRleDogMTA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBncmV5O1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYW1lcmEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDVweDtcclxuICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAvLyB6LWluZGV4OiAxNTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbWFyb29uO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdHVmZiB7XHJcbiAgICAgIHdpZHRoOiAzNXZ3O1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnVwZGF0ZV9jYW5jZWwge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG5cclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDd2aDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgICBib3JkZXItdG9wOiAwLjFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICAgIGJvcmRlcjogMC4xcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIC51cGRhdGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWNjIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG56IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIC8vIHdpZHRoOiA3MC41dnc7XHJcbiAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuXHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGhlaWdodDogNy41dmg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDAuMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxuICAgICAgICBib3JkZXI6IDAuMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZWRpdCB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgLy8gZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCByZ2IoMTY1LCAxNjUsIDE2NSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV0dG9ueiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgICNjYW5jZWwge1xyXG4gICAgICAgICAgICB3aWR0aDogNDV2dztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI3VwZGF0ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDEwdnc7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5maWxlcyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiByb3c7XHJcblxyXG4gICAgICAud2lzaGxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICAgIGhlaWdodDogNDd2aDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgLy8gei1pbmRleDogMTA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG5cclxuICAgICAgICAgIC5oZWFydCB7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4IGdyZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrZHJvcCB7XHJcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zOSk7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5iYXNrZXQge1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICAgIGhlaWdodDogNDd2aDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgLy8gei1pbmRleDogMTA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM5KTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJhY2tkcm9wMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcblxyXG4gIC52aWV3cmV2aWV3cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxNTA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAxLCAyMDEsIDIwMSk7XHJcbiAgICB3aWR0aDogMjB2dztcclxuICAgIGhlaWdodDogOTQlO1xyXG4gICAgdG9wOiA1N3B4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG5cclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdG9wOiAyLjJ2aDtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAydnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud2lzaGxpc3RfaXRlbXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICB3aWR0aDogMjB2dztcclxuXHJcbiAgICAgICNub0l0ZW1ze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICBub25lO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIHdpZHRoOiA1dnc7XHJcbiAgICAgICAgICBoZWlnaHQ6IDV2dztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRpdntcclxuICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IDJweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuaXRlbXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA3dmg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDE1OCwgMTU4LCAxNTgpO1xyXG4gICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1dnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogNS41dnc7XHJcbiAgICAgICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pdGVtX2RldGFpbHMge1xyXG4gICAgICAgICAgICB3aWR0aDogOHZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgIHdpZHRoOiA2dnc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDR2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRyYXNoX2ljb24ge1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNDgsIDE0LCAxNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hZGRfdG9fYmFza2V0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIsIDIsIDM3KTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNsb3NlcmV2aWV3cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxNTA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiAwdnc7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGJvdHRvbTogNDAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC52aWV3Y2FydCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxNTA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAxLCAyMDEsIDIwMSk7XHJcbiAgICB3aWR0aDogMjB2dztcclxuICAgIGhlaWdodDogOTQlO1xyXG4gICAgdG9wOiA1Ni41cHg7XHJcbiAgICBib3R0b206IDQwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLmhlYWRpbmcge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICB0b3A6IDIuMnZoO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDJ2dztcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53aXNobGlzdF9pdGVtcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgI25vSXRlbXN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogIG5vbmU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDV2dztcclxuICAgICAgICAgIGhlaWdodDogNXZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGl2e1xyXG4gICAgICAgIGhlaWdodDogNjV2aDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogMnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDd2aDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTU4LCAxNTgsIDE1OCk7XHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDV2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiA1LjV2dztcclxuICAgICAgICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbV9kZXRhaWxzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEydnc7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgIHdpZHRoOiA2dnc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDR2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRyYXNoX2ljb24ge1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNDgsIDE0LCAxNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmFkZF90b19iYXNrZXQge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6IHJnYigwLCAwLCA0Myk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIsIDIsIDM3KTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWxpdmVyeV9vcHRpb25zIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgd2lkdGg6IDIwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnZ3O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS41cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVsaXZlcnkge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE4NCwgMTg0LCAxODQpO1xyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbGl2ZXJ5LWluYWN0aXZlIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmY5NjdlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbGxlY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCAxODQsIDE4NCk7XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2JmOTY3ZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xsZWN0aW9uLWluYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiZjk2N2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNsb3NlY2FydCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxNTA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiAwdnc7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGJvdHRvbTogNDAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_pending_orders_pending_orders_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/pending-orders/pending-orders.page */ "./src/app/pending-orders/pending-orders.page.ts");
/* harmony import */ var _app_order_history_order_history_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app//order-history/order-history.page */ "./src/app/order-history/order-history.page.ts");










var ProfilePage = /** @class */ (function () {
    function ProfilePage(modalController, authService, router, toastCtrl, loadingController, camera, actionSheetCtrl, navCtrl, platform, renderer, alertCtrl) {
        this.modalController = modalController;
        this.authService = authService;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.renderer = renderer;
        this.alertCtrl = alertCtrl;
        this.loaderMessages = 'Loading...';
        this.loaderAnimate = true;
        this.editprofile = false;
        this.dbProfile = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("userProfile");
        this.dbCart = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Cart');
        this.dbWish = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Wishlist');
        this.storage = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        this.uid = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.myWishlist = [];
        this.viewReviews = false;
        this.viewCart = false;
        this.viewBackdrop = false;
        this.prodCart = [];
        this.buttonActive = true;
        this.isDisabled = false;
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaderAnimate = false;
        }, 2000);
        this.getUserDetails(this.uid);
        //this.presentLoading();
        this.getCartSize();
        this.getWishSize();
        this.getWishlist();
        this.getCart();
        if (this.platform.is('cordova')) {
            document.getElementById('file').style.display = "none";
        }
    };
    ProfilePage.prototype.placeOrder = function (info) {
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
            this.toastController1('You cannot place order with empty basket');
        }
        else if (!this.delType) {
            this.toastController1('Please select delivery type');
        }
        else {
            var docname = 'brkn-' + Math.floor(Math.random() * 10000000);
            this.dbOrder.doc(docname).set({ product: myArr, timestamp: new Date().getTime(),
                status: 'received', userID: firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid,
                totalPrice: this.getTotal(), deliveryCost: this.delCost, deliveryType: this.delType
            }).then(function () {
                doc.forEach(function (id) {
                    _this.dbCart.doc(id).delete();
                });
            });
        }
    };
    ProfilePage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm!',
                            message: 'Place order now?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                }, {
                                    text: 'Yes, continue',
                                    handler: function () {
                                        // console.log('Confirm Okay');
                                        _this.placeOrder(_this.prodCart);
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
    ProfilePage.prototype.toastController1 = function (message) {
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
    ProfilePage.prototype.getCart = function () {
        var _this = this;
        this.dbCart.where('customerUID', '==', this.uid).onSnapshot(function (info) {
            _this.prodCart = [];
            // this.totalCost = 0;
            info.forEach(function (doc) {
                _this.prodCart.push({ data: doc.data(), id: doc.id });
            });
        });
    };
    ProfilePage.prototype.getTotal = function () {
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
    ProfilePage.prototype.Delivery = function (tot) {
        var total = 0;
        this.delCost = 100;
        this.delType = "Delivery";
        for (var i = 0; i < this.prodCart.length; i++) {
            var product = this.prodCart[i].data.product;
            product.forEach(function (item) {
                total = tot + 100;
            });
        }
        return total;
    };
    ProfilePage.prototype.notDelivery = function (tot) {
        var total = 0;
        this.delCost = 0;
        this.delType = "Collection";
        for (var i = 0; i < this.prodCart.length; i++) {
            var product = this.prodCart[i].data.product;
            product.forEach(function (item) {
                total = tot;
            });
        }
        return total;
    };
    ProfilePage.prototype.pluss = function (prod, index) {
        var num = index.data.product[0].quantity++;
        index.data.product[0].cost = index.data.product[0].cost;
        var id = index.id;
        var product = [prod];
        this.dbCart.doc(id).update({ product: product }).then(function (res) {
            // console.log('updated');
        });
    };
    ProfilePage.prototype.removeProd = function (id) {
        this.dbCart.doc(id).delete().then(function (res) {
        });
    };
    ProfilePage.prototype.minuss = function (prod, index) {
        // product.push[prod]
        // this.dbCart.doc(id).onSnapshot((res)=>{
        if (index.data.product[0].quantity === 1) {
            // console.log('You are about to delete your product');
            // this.presentAlertConfirm(index.id);
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
    };
    ProfilePage.prototype.delete = function (id) {
        this.dbWish.doc(id).delete();
    };
    ProfilePage.prototype.addtoBusket = function (view_id, data, id) {
        var _this = this;
        var navigationExtras = {
            queryParams: {
                data: data,
                col: data.brand,
                category: data.category
            }
        };
        this.dbWish.doc(id).delete().then(function () {
            _this.navCtrl.navigateForward(['view', view_id], navigationExtras);
        });
    };
    ProfilePage.prototype.getWishlist = function () {
        var _this = this;
        this.dbWish.where('customerUID', '==', this.uid).onSnapshot(function (res) {
            _this.myWishlist = [];
            res.forEach(function (doc) {
                _this.myWishlist.push({ info: doc.data(), id: doc.id });
            });
        });
    };
    ProfilePage.prototype.getWishSize = function () {
        var _this = this;
        this.dbWish.where('customerUID', '==', this.uid).onSnapshot(function (res1) {
            _this.myWish = res1.size;
        });
    };
    ProfilePage.prototype.getCartSize = function () {
        var _this = this;
        this.dbCart.where('customerUID', '==', this.uid).onSnapshot(function (res) {
            _this.myCart = res.size;
        });
    };
    ProfilePage.prototype.getBackdrop = function () {
        this.viewBackdrop = !this.viewBackdrop;
    };
    ProfilePage.prototype.getUserDetails = function (uid) {
        var _this = this;
        this.dbProfile.doc(uid).onSnapshot(function (doc) {
            if (doc.exists) {
                _this.profilePic = doc.data().profilePic;
                _this.name = doc.data().name;
                _this.surname = doc.data().surname;
                _this.email = doc.data().email;
                _this.address = doc.data().address;
            }
            else {
                _this.navCtrl.navigateForward('create-account');
            }
        });
    };
    ProfilePage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _app_pending_orders_pending_orders_page__WEBPACK_IMPORTED_MODULE_7__["PendingOrdersPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfilePage.prototype.presentPending = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _app_order_history_order_history_page__WEBPACK_IMPORTED_MODULE_8__["OrderHistoryPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfilePage.prototype.reviewed = function () {
        this.viewReviews = !this.viewReviews;
        this.viewBackdrop = !this.viewBackdrop;
    };
    ProfilePage.prototype.gotocart = function () {
        this.viewCart = !this.viewCart;
        this.viewBackdrop = !this.viewBackdrop;
    };
    ProfilePage.prototype.check = function (val) {
        if (val == 'close') {
            document.getElementById('image').style.display = 'none';
        }
        else {
            document.getElementById('image').style.display = 'flex';
        }
    };
    ProfilePage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading..',
                            duration: 3000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.basket = function () {
        this.router.navigateByUrl("basket");
    };
    ProfilePage.prototype.wishlist = function () {
        this.router.navigateByUrl("wishlist");
    };
    ProfilePage.prototype.pendingOrders = function () {
        this.router.navigateByUrl("pending-orders");
    };
    ProfilePage.prototype.orderhistory = function () {
        this.router.navigateByUrl("order-history");
    };
    ProfilePage.prototype.showEdit = function () {
        this.editprofile = !this.editprofile;
    };
    ProfilePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ProfilePage.prototype.logout = function () {
        this.authService.logoutUser();
    };
    ProfilePage.prototype.updateProfile = function () {
        var _this = this;
        this.dbProfile.doc(this.uid).update({ name: this.name, surname: this.surname, email: this.email, address: this.address }).then(function () {
            _this.editprofile = !_this.editprofile;
            _this.toastController();
        });
        //console.log('My profile ', p);
    };
    ProfilePage.prototype.toastController = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: 'Profile update', duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        return [2 /*return*/, toast.present()];
                }
            });
        });
    };
    ProfilePage.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('cordova')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: "Select image",
                                buttons: [{
                                        icon: 'images',
                                        text: 'Gallery',
                                        handler: function () {
                                            _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                        }
                                    },
                                    {
                                        icon: 'camera',
                                        text: 'Camera',
                                        handler: function () {
                                            _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                        }
                                    },
                                    {
                                        icon: 'close',
                                        text: 'Cancel',
                                        role: 'cancel'
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.featuredPhotoSelected = function (event) {
        var _this = this;
        var i = event.target.files[0];
        var upload = this.storage.child('HomeOwner-Profile/' + i.name).put(i);
        upload.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('upload is: ', progress, '% done.');
        }, function (err) {
        }, function () {
            upload.snapshot.ref.getDownloadURL().then(function (dwnURL) {
                // console.log('File avail at: ', dwnURL);
                _this.profilePic = dwnURL;
                _this.dbProfile.doc(_this.uid).update({ profilePic: _this.profilePic });
            });
        });
        // console.log("My pic is ", this.profilePic);
    };
    ProfilePage.prototype.takePicture = function (sourcetype) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            quality: 90,
                            targetHeight: 600,
                            targetWidth: 600,
                            sourceType: sourcetype,
                            saveToPhotoAlbum: false,
                            correctOrientation: true
                        };
                        return [4 /*yield*/, this.camera.getPicture(options).then(function (res) {
                                var base64Image = 'data:image/jpeg;base64,' + res;
                                //this.profileImage = base64Image;
                                var file = 'HomeOwner-Profile/' + _this.uid + '.jpg';
                                var UserImage = _this.storage.child(file);
                                var upload = UserImage.putString(base64Image, 'data_url');
                                upload.on('state_changed', function (snapshot) {
                                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                    //  this.uploadprogress = progress;
                                    console.log('Uploading image..', progress);
                                    //this.loaderAnimate = true;
                                    //  this.loaderMessages = 'Uploading Image...';
                                    // if (progress == 100) {
                                    //   //this.isuploading = false;
                                    // }
                                }, function (err) {
                                }, function () {
                                    upload.snapshot.ref.getDownloadURL().then(function (downUrl) {
                                        _this.profilePic = downUrl;
                                        // console.log('Image downUrl.............', this.HomeOwnerProfile.image);
                                        /*     setTimeout(() => {
                                             this.loaderAnimate = false;
                                           }, 1000); */
                                        //  this.isuploaded = true;
                                    });
                                });
                            }, function (err) {
                                console.log("Something went wrong: ", err);
                            })
                            // this.imageSelected = true;
                            // })
                        ];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.switchView = function (state) {
        switch (state) {
            case 'd':
                this.buttonActive = true;
                this.Delivery(this.getTotal());
                break;
            case 'c':
                this.buttonActive = false;
                this.notDelivery(this.getTotal());
                break;
        }
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=22.js.map