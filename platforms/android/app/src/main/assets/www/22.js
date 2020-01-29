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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Abel|Poiret+One|Open+Sans+Condensed|Jura|Manjari|Poppins|Raleway|Montserrat \");\nion-toolbar {\n  --background: transparent;\n  position: absolute; }\nion-toolbar #icon {\n    color: maroon; }\n.container {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  position: absolute;\n  margin: 0; }\n.container .image {\n    width: 100%;\n    height: 50vh;\n    display: flex;\n    flex-flow: column;\n    position: relative; }\n.container .image img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; }\n.container .image .name {\n      width: 80vw;\n      height: 15vw;\n      background: white;\n      text-align: center;\n      color: grey;\n      font-family: \"Poppins\";\n      font-size: 4vw;\n      border-radius: 10px;\n      z-index: 10;\n      position: absolute;\n      left: 10%;\n      bottom: 15px;\n      display: grid;\n      align-items: center;\n      box-shadow: 5px 5px 10px grey; }\n.container .image .name p {\n        margin: 0 !important;\n        font-weight: bold; }\n.container .image .name p span {\n          font-size: 3vw;\n          font-weight: normal; }\n.container .image .camera {\n      position: absolute;\n      bottom: 0;\n      right: 10px;\n      z-index: 15;\n      border-radius: 50%; }\n.container .image .camera ion-fab-button {\n        background: maroon;\n        border-radius: 50%;\n        color: white; }\n.container .btnz {\n    display: flex;\n    flex-flow: column;\n    width: 100vw;\n    margin: 5px 0px; }\n.container .btnz ion-button {\n      margin: 0;\n      padding: 0;\n      height: 7vh;\n      border-radius: 0 !important;\n      text-align: left;\n      border: 0.1px solid #d4d4d4;\n      background: #f2f2f2;\n      color: black;\n      font-weight: lighter;\n      overflow: hidden;\n      letter-spacing: 1px;\n      font-family: \"Poppins\"; }\n.container .btnz ion-button span {\n        width: 100%;\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between; }\n.container .btnz .edit {\n      width: 100%;\n      padding: 5px; }\n.container .btnz .edit ion-input {\n        width: 93vw;\n        border: 1px solid white;\n        margin: 5px;\n        padding: 3px;\n        border-radius: 7px;\n        font-size: 0.8em;\n        box-shadow: 2px 2px 20px #a5a5a5; }\n.container .btnz .edit .buttonz {\n        width: 100%;\n        display: flex;\n        flex-flow: row; }\n.container .btnz .edit .buttonz #cancel {\n          width: 45vw;\n          background: red;\n          border-radius: 8px; }\n.container .btnz .edit .buttonz #update {\n          width: 45vw;\n          background: green;\n          border-radius: 8px; }\n.container .btnz .edit .buttonz ion-button {\n          font-size: 0.8em;\n          margin: 5px;\n          height: 10vw;\n          border-radius: 10px;\n          color: white;\n          font-family: \"Poppins\";\n          letter-spacing: 2px; }\n.container .files {\n    width: 100%;\n    padding: 5px;\n    position: relative;\n    justify-content: space-evenly;\n    justify-items: center;\n    display: flex;\n    flex-flow: row; }\n.container .files .wishlist {\n      width: 45vw;\n      height: 25vh;\n      position: relative;\n      border-radius: 8px;\n      margin: 5px; }\n.container .files .wishlist img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 8px; }\n.container .files .wishlist .right {\n        display: flex;\n        height: 100%;\n        flex-flow: column;\n        text-align: right;\n        justify-content: space-between;\n        z-index: 10;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        color: white;\n        font-family: \"Poppins\";\n        font-weight: lighter; }\n.container .files .wishlist .right .heart ion-icon {\n          text-shadow: 5px 5px 10px grey; }\n.container .files .wishlist .backdrop {\n        -webkit-backdrop-filter: blur(3px);\n                backdrop-filter: blur(3px);\n        background: rgba(0, 0, 0, 0.39);\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: 0;\n        z-index: 10;\n        border-bottom-left-radius: 10px;\n        border-bottom-right-radius: 10px; }\n.container .files .basket {\n      margin: 5px;\n      width: 45vw;\n      height: 25vh;\n      position: relative;\n      border-radius: 8px; }\n.container .files .basket img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 8px; }\n.container .files .basket .right {\n        display: flex;\n        height: 100%;\n        flex-flow: column;\n        text-align: right;\n        justify-content: space-between;\n        z-index: 10;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        color: white;\n        font-family: \"Poppins\";\n        font-weight: lighter; }\n.container .files .basket .backdrop {\n        -webkit-backdrop-filter: blur(3px);\n                backdrop-filter: blur(3px);\n        background: rgba(0, 0, 0, 0.39);\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: 0;\n        z-index: 10;\n        border-bottom-left-radius: 10px;\n        border-bottom-right-radius: 10px; }\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background: #001b3f;\n  background-repeat: repeat-x;\n  transform: scale(1);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation: backgroundmover 30s linear infinite;\n          animation: backgroundmover 30s linear infinite; }\n.loader .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n.loader .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n.loader .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n.loading-text {\n  position: absolute;\n  bottom: 50vh;\n  left: 0px;\n  width: 100vw;\n  text-align: center;\n  height: 50vh;\n  margin: auto; }\n.loader-hide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  background: white;\n  transform: scale(0);\n  overflow: hidden;\n  transition: 0.4s;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); }\n.loader-hide .maploader .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px; }\n.loader-hide .maploader .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n.loader-hide .maploader .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\n            animation: lds-ellipsis1 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\n            animation: lds-ellipsis2 0.6s infinite; }\n.loader-hide .maploader .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\n            animation: lds-ellipsis3 0.6s infinite; }\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n@-webkit-keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n@keyframes maploader {\n  0% {\n    border-color: #b6465f; }\n  50% {\n    border-color: #2a324b; }\n  100% {\n    border-color: #fab62b; } }\n@media only screen and (max-width: 1024px) {\n  .web_view {\n    display: none;\n    width: 0%;\n    height: 0%; }\n  #wish {\n    display: none;\n    width: 0%;\n    height: 0%; }\n  #nav {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  #lorem {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  #cart {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  #file {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; } }\n@media only screen and (min-width: 1025px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  #lorem {\n    position: relative;\n    top: 50px; }\n  #mobile {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  ion-toolbar {\n    --background: rgb(255, 255, 255);\n    width: 100%;\n    font-family: \"Raleway\";\n    letter-spacing: 2px;\n    color: #838383; }\n    ion-toolbar #icon {\n      color: #838383; }\n    ion-toolbar #number {\n      font-size: 0.8em;\n      position: relative;\n      top: 8px;\n      right: 5px; }\n    ion-toolbar .icon1 {\n      margin: 0 20vw; }\n  .web_view {\n    min-width: 70%;\n    max-width: 1200px;\n    margin: auto;\n    position: relative;\n    top: 8%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    display: flex;\n    flex-flow: row;\n    box-shadow: 5px 5px 10px #c4c4c4; }\n    .web_view .image {\n      width: 60vw;\n      height: 75vh;\n      display: flex;\n      flex-flow: column;\n      position: relative;\n      align-items: center;\n      margin: 10px; }\n      .web_view .image img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n      .web_view .image .name {\n        width: 80%;\n        min-height: 3vw;\n        background: white;\n        text-align: center;\n        color: grey;\n        font-family: \"Poppins\";\n        border-radius: 10px;\n        position: absolute;\n        bottom: 15px;\n        display: grid;\n        align-items: center;\n        box-shadow: 5px 5px 10px grey; }\n        .web_view .image .name p {\n          margin: 0 !important;\n          font-weight: bold; }\n          .web_view .image .name p span {\n            font-weight: normal; }\n      .web_view .image .camera {\n        position: absolute;\n        bottom: 5px;\n        right: 15px;\n        border-radius: 50%; }\n        .web_view .image .camera ion-fab-button {\n          background: maroon;\n          border-radius: 50%;\n          color: white; }\n    .web_view .stuff {\n      width: 35vw;\n      margin: 10px; }\n    .web_view .update_cancel {\n      width: 100%;\n      display: flex;\n      flex-flow: row;\n      justify-content: space-between;\n      padding: 10px;\n      margin: 5px 0px;\n      margin: 0;\n      padding: 0;\n      height: 7vh;\n      margin: 5px;\n      border-radius: 0 !important;\n      text-align: left;\n      border-bottom: 0.1px solid #d4d4d4;\n      border-top: 0.1px solid #d4d4d4;\n      border: 0.1px solid #d4d4d4;\n      background: #f2f2f2;\n      color: black;\n      font-weight: lighter;\n      overflow: hidden;\n      letter-spacing: 1px;\n      font-family: \"Poppins\"; }\n      .web_view .update_cancel .update {\n        width: 100%;\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between;\n        width: 30%;\n        margin-right: 10px;\n        color: #969696;\n        cursor: pointer; }\n      .web_view .update_cancel .acc {\n        margin-left: 10px; }\n    .web_view .btnz {\n      display: flex;\n      flex-flow: column;\n      margin: 5px 0px; }\n      .web_view .btnz ion-button {\n        margin: 0;\n        padding: 0;\n        height: 7.5vh;\n        margin: 5px;\n        border-radius: 0 !important;\n        text-align: left;\n        border-bottom: 0.1px solid #d4d4d4;\n        border-top: 0.1px solid #d4d4d4;\n        border: 0.1px solid #d4d4d4;\n        background: #f2f2f2;\n        color: black;\n        font-weight: lighter;\n        overflow: hidden;\n        letter-spacing: 1px;\n        font-family: \"Poppins\"; }\n        .web_view .btnz ion-button span {\n          width: 100%;\n          display: flex;\n          flex-flow: row;\n          justify-content: space-between; }\n      .web_view .btnz .edit {\n        padding: 5px; }\n        .web_view .btnz .edit ion-input {\n          border: 1px solid white;\n          margin: 5px;\n          padding: 3px;\n          border-radius: 7px;\n          box-shadow: 2px 2px 20px #a5a5a5; }\n        .web_view .btnz .edit .buttonz {\n          width: 100%;\n          display: flex;\n          flex-flow: row; }\n          .web_view .btnz .edit .buttonz #cancel {\n            width: 45vw;\n            background: red;\n            border-radius: 8px; }\n          .web_view .btnz .edit .buttonz #update {\n            width: 45vw;\n            background: green;\n            border-radius: 8px; }\n          .web_view .btnz .edit .buttonz ion-button {\n            margin: 5px;\n            border-radius: 10px;\n            color: white;\n            font-family: \"Poppins\";\n            letter-spacing: 2px; }\n    .web_view .files {\n      width: 100%;\n      padding: 5px;\n      position: relative;\n      justify-content: space-evenly;\n      justify-items: center;\n      display: flex;\n      flex-flow: row; }\n      .web_view .files .wishlist {\n        width: 45vw;\n        height: 47vh;\n        position: relative;\n        border-radius: 8px;\n        margin: 5px; }\n        .web_view .files .wishlist img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          border-radius: 8px; }\n        .web_view .files .wishlist .right {\n          display: flex;\n          height: 100%;\n          flex-flow: column;\n          text-align: right;\n          justify-content: space-between;\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          color: white;\n          font-family: \"Poppins\";\n          font-weight: lighter; }\n          .web_view .files .wishlist .right .heart ion-icon {\n            text-shadow: 5px 5px 10px grey; }\n        .web_view .files .wishlist .backdrop {\n          -webkit-backdrop-filter: blur(3px);\n                  backdrop-filter: blur(3px);\n          background: rgba(0, 0, 0, 0.39);\n          width: 100%;\n          height: 30px;\n          position: absolute;\n          bottom: 0;\n          z-index: 10;\n          border-bottom-left-radius: 10px;\n          border-bottom-right-radius: 10px; }\n      .web_view .files .basket {\n        margin: 5px;\n        width: 45vw;\n        height: 47vh;\n        position: relative;\n        border-radius: 8px; }\n        .web_view .files .basket img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          border-radius: 8px; }\n        .web_view .files .basket .right {\n          display: flex;\n          height: 100%;\n          flex-flow: column;\n          text-align: right;\n          justify-content: space-between;\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          color: white;\n          font-family: \"Poppins\";\n          font-weight: lighter; }\n        .web_view .files .basket .backdrop {\n          -webkit-backdrop-filter: blur(3px);\n                  backdrop-filter: blur(3px);\n          background: rgba(0, 0, 0, 0.39);\n          width: 100%;\n          height: 30px;\n          position: absolute;\n          bottom: 0;\n          z-index: 10;\n          border-bottom-left-radius: 10px;\n          border-bottom-right-radius: 10px; }\n  .backdrop1 {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background: black;\n    opacity: 0.5; }\n  .viewreviews {\n    position: absolute;\n    z-index: 150;\n    background: #c9c9c9;\n    width: 20vw;\n    height: 94%;\n    top: 57px;\n    right: 0;\n    align-items: center;\n    display: flex;\n    flex-flow: column;\n    overflow: hidden; }\n    .viewreviews .heading {\n      display: flex;\n      flex-flow: row;\n      justify-content: space-between;\n      width: 100%;\n      margin: 5px; }\n      .viewreviews .heading ion-icon {\n        color: white;\n        position: relative;\n        right: 20px;\n        top: 2.2vh;\n        font-size: 1em;\n        background: black;\n        border-radius: 50%; }\n      .viewreviews .heading p {\n        letter-spacing: 1px;\n        margin: 5px;\n        position: relative;\n        left: 2vw;\n        font-size: 1em; }\n    .viewreviews .wishlist_items {\n      display: flex;\n      flex-flow: column;\n      overflow-y: auto;\n      margin: 10px;\n      width: 20vw; }\n      .viewreviews .wishlist_items #noItems {\n        display: flex;\n        flex-flow: column;\n        background: none;\n        align-items: center;\n        box-shadow: none;\n        justify-content: center;\n        margin-top: 200px; }\n        .viewreviews .wishlist_items #noItems img {\n          width: 5vw;\n          height: 5vw; }\n        .viewreviews .wishlist_items #noItems p {\n          text-align: center;\n          font-size: 15px;\n          color: grey; }\n      .viewreviews .wishlist_items .div {\n        height: 80vh;\n        overflow-y: auto;\n        scrollbar-width: 2px;\n        width: 100%; }\n      .viewreviews .wishlist_items .items {\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between;\n        margin: 10px;\n        min-height: 7vh;\n        margin: 5px;\n        background: white;\n        border-radius: 5px;\n        box-shadow: 5px 5px 10px #9e9e9e; }\n        .viewreviews .wishlist_items .items .left {\n          display: flex;\n          flex-flow: row;\n          justify-content: space-between;\n          margin: 5px; }\n          .viewreviews .wishlist_items .items .left .img {\n            width: 5vw;\n            height: 5.5vw;\n            margin: 3px;\n            border-radius: 5px; }\n            .viewreviews .wishlist_items .items .left .img img {\n              width: 100%;\n              height: 100%;\n              -o-object-fit: cover;\n                 object-fit: cover;\n              border-radius: 5px; }\n          .viewreviews .wishlist_items .items .left .item_details {\n            width: 8vw; }\n        .viewreviews .wishlist_items .items .right {\n          width: 6vw;\n          display: flex;\n          flex-flow: column;\n          justify-content: space-between;\n          text-align: right;\n          margin: 5px; }\n          .viewreviews .wishlist_items .items .right ion-button {\n            font-size: 12px;\n            width: 4vw;\n            height: 20px;\n            display: flex;\n            flex-flow: row;\n            justify-content: space-between; }\n            .viewreviews .wishlist_items .items .right ion-button ion-icon {\n              font-size: 12px; }\n          .viewreviews .wishlist_items .items .right .trash_icon ion-icon {\n            color: #940e0e; }\n          .viewreviews .wishlist_items .items .right .add_to_basket {\n            background: #020225;\n            color: white; }\n  .closereviews {\n    position: absolute;\n    z-index: 150;\n    background: white;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    width: 0vw;\n    height: 85vh;\n    top: 10%;\n    bottom: 40%;\n    right: 0;\n    align-items: center;\n    display: flex;\n    flex-flow: column;\n    overflow: hidden; }\n  .viewcart {\n    position: absolute;\n    z-index: 150;\n    background: #c9c9c9;\n    width: 20vw;\n    height: 94%;\n    top: 56.5px;\n    bottom: 40%;\n    right: 0;\n    align-items: center;\n    display: flex;\n    flex-flow: column;\n    overflow: hidden; }\n    .viewcart .heading {\n      display: flex;\n      flex-flow: row;\n      justify-content: space-between;\n      width: 100%;\n      margin: 5px; }\n      .viewcart .heading ion-icon {\n        color: white;\n        position: relative;\n        right: 20px;\n        top: 2.2vh;\n        font-size: 1em;\n        background: black;\n        border-radius: 50%; }\n      .viewcart .heading p {\n        letter-spacing: 1px;\n        margin: 5px;\n        position: relative;\n        left: 2vw;\n        font-size: 1em; }\n    .viewcart .wishlist_items {\n      display: flex;\n      flex-flow: column;\n      overflow-y: auto;\n      margin: 10px;\n      width: 20vw;\n      height: 100%;\n      position: relative; }\n      .viewcart .wishlist_items #noItems {\n        display: flex;\n        flex-flow: column;\n        background: none;\n        align-items: center;\n        box-shadow: none;\n        justify-content: center;\n        margin-top: 200px; }\n        .viewcart .wishlist_items #noItems img {\n          width: 5vw;\n          height: 5vw; }\n        .viewcart .wishlist_items #noItems p {\n          text-align: center;\n          font-size: 15px;\n          color: grey; }\n      .viewcart .wishlist_items .div {\n        height: 65vh;\n        overflow-y: auto;\n        scrollbar-width: 2px;\n        width: 100%; }\n      .viewcart .wishlist_items .items {\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between;\n        margin: 10px;\n        min-height: 7vh;\n        margin: 5px;\n        background: white;\n        border-radius: 5px;\n        box-shadow: 5px 5px 10px #9e9e9e; }\n        .viewcart .wishlist_items .items .left {\n          display: flex;\n          flex-flow: row;\n          justify-content: space-between;\n          margin: 5px; }\n          .viewcart .wishlist_items .items .left .img {\n            width: 5vw;\n            height: 5.5vw;\n            margin: 3px;\n            border-radius: 5px; }\n            .viewcart .wishlist_items .items .left .img img {\n              width: 100%;\n              height: 100%;\n              -o-object-fit: cover;\n                 object-fit: cover;\n              border-radius: 5px; }\n          .viewcart .wishlist_items .items .left .item_details {\n            width: 12vw; }\n            .viewcart .wishlist_items .items .left .item_details p {\n              font-size: 13px; }\n        .viewcart .wishlist_items .items .right {\n          width: 6vw;\n          display: flex;\n          flex-flow: column;\n          justify-content: space-between;\n          text-align: right;\n          margin: 5px; }\n          .viewcart .wishlist_items .items .right ion-button {\n            font-size: 12px;\n            width: 4vw;\n            height: 20px;\n            display: flex;\n            flex-flow: row;\n            justify-content: space-between; }\n            .viewcart .wishlist_items .items .right ion-button ion-icon {\n              font-size: 12px; }\n          .viewcart .wishlist_items .items .right .trash_icon ion-icon {\n            color: #940e0e; }\n      .viewcart .wishlist_items .add_to_basket {\n        color: white;\n        position: absolute;\n        bottom: 0;\n        width: 90%;\n        margin: 20px; }\n        .viewcart .wishlist_items .add_to_basket p {\n          color: #00002b; }\n        .viewcart .wishlist_items .add_to_basket ion-button {\n          background: #020225;\n          width: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          text-align: center; }\n        .viewcart .wishlist_items .add_to_basket .delivery_options {\n          display: flex;\n          flex-flow: row;\n          justify-content: space-evenly;\n          margin: 5px; }\n          .viewcart .wishlist_items .add_to_basket .delivery_options ion-button {\n            font-size: 13px;\n            color: grey;\n            width: 20vw;\n            height: 2vw; }\n          .viewcart .wishlist_items .add_to_basket .delivery_options .line {\n            width: 20vw;\n            height: 1.5px;\n            background: grey; }\n        .viewcart .wishlist_items .add_to_basket .delivery {\n          width: 50%;\n          height: 100%;\n          align-items: center;\n          overflow: hidden;\n          background: #b8b8b8; }\n          .viewcart .wishlist_items .add_to_basket .delivery ion-button {\n            border-bottom: 2px solid black; }\n        .viewcart .wishlist_items .add_to_basket .delivery-inactive {\n          width: 50%;\n          height: 100%;\n          align-items: center;\n          overflow: hidden;\n          opacity: 0.5;\n          background: #fafafa; }\n          .viewcart .wishlist_items .add_to_basket .delivery-inactive ion-button {\n            width: 100%;\n            height: 100%;\n            border-radius: 30px;\n            font-family: \"Poiret One\";\n            font-weight: bold;\n            letter-spacing: 3px;\n            background: #bf967e;\n            color: white;\n            border: none; }\n        .viewcart .wishlist_items .add_to_basket .collection {\n          width: 50%;\n          height: 100%;\n          overflow: hidden;\n          background: #b8b8b8; }\n          .viewcart .wishlist_items .add_to_basket .collection ion-button {\n            width: 100%;\n            height: 100%;\n            border-radius: 30px;\n            font-family: \"Poiret One\";\n            font-weight: bold;\n            letter-spacing: 3px;\n            background: #bf967e;\n            color: white;\n            border: none; }\n        .viewcart .wishlist_items .add_to_basket .collection-inactive {\n          background: #fafafa;\n          width: 50%;\n          height: 100%;\n          overflow: hidden;\n          opacity: 0.5; }\n          .viewcart .wishlist_items .add_to_basket .collection-inactive ion-button {\n            width: 100%;\n            height: 100%;\n            border-radius: 30px;\n            font-family: \"Poiret One\";\n            font-weight: bold;\n            letter-spacing: 3px;\n            background: #bf967e;\n            color: white;\n            border: none; }\n  .closecart {\n    position: absolute;\n    z-index: 150;\n    background: white;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    width: 0vw;\n    height: 85vh;\n    top: 10%;\n    bottom: 40%;\n    right: 0;\n    align-items: center;\n    display: flex;\n    flex-flow: column;\n    overflow: hidden; } }\n::-webkit-scrollbar {\n  width: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtSUFBWTtBQUVaO0VBQ0UseUJBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUZwQjtJQUlJLGFBQWEsRUFBQTtBQUlqQjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTLEVBQUE7QUFMWDtJQVFJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtBQVp0QjtNQWVNLFdBQVc7TUFDWCxZQUFZO01BQ1osb0JBQWlCO1NBQWpCLGlCQUFpQixFQUFBO0FBakJ2QjtNQXFCTSxXQUFXO01BQ1gsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLHNCQUFzQjtNQUN0QixjQUFjO01BQ2QsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFlBQVk7TUFDWixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDZCQUE2QixFQUFBO0FBbkNuQztRQXNDUSxvQkFBb0I7UUFDcEIsaUJBQWlCLEVBQUE7QUF2Q3pCO1VBeUNVLGNBQWM7VUFDZCxtQkFBbUIsRUFBQTtBQTFDN0I7TUFnRE0sa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxXQUFXO01BQ1gsV0FBVztNQUNYLGtCQUFrQixFQUFBO0FBcER4QjtRQXNEUSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFlBQVksRUFBQTtBQXhEcEI7SUE4REksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZSxFQUFBO0FBakVuQjtNQW1FTSxTQUFTO01BQ1QsVUFBVTtNQUNWLFdBQVc7TUFDWCwyQkFBMkI7TUFDM0IsZ0JBQWdCO01BQ2hCLDJCQUFz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WUFBWTtZQUNaLFlBQVksRUFBQTtRQW5OdEI7VUF1TlEsbUJBQThCO1VBQzlCLFVBQVU7VUFDVixZQUFZO1VBQ1osZ0JBQWdCO1VBQ2hCLFlBQVksRUFBQTtVQTNOcEI7WUE2TlUsV0FBVztZQUNYLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixZQUFZLEVBQUE7RUFPdEI7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixZQUFZO0lBQ1osUUFBUTtJQUNSLFdBQVc7SUFDWCxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUEsRUFDakI7QUFHSDtFQUNFLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BYmVsfFBvaXJldCtPbmV8T3BlbitTYW5zK0NvbmRlbnNlZHxKdXJhfE1hbmphcml8UG9wcGluc3xSYWxld2F5fE1vbnRzZXJyYXQgXCIpO1xyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICNpY29uIHtcclxuICAgIGNvbG9yOiBtYXJvb247XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgICBoZWlnaHQ6IDE1dnc7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IGdyZXk7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FtZXJhIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICB6LWluZGV4OiAxNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFyb29uO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG56IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogN3ZoO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGJvcmRlcjogMC4xcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgICAvLyBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICAgIC8vIGJvcmRlci10b3A6IDAuMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxuICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICB3aWR0aDogOTN2dztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCByZ2IoMTY1LCAxNjUsIDE2NSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b256IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICNjYW5jZWwge1xyXG4gICAgICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXBkYXRlIHtcclxuICAgICAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMHZ3O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmlsZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuXHJcbiAgICAud2lzaGxpc3Qge1xyXG4gICAgICB3aWR0aDogNDV2dztcclxuICAgICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJpZ2h0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG5cclxuICAgICAgICAuaGVhcnQge1xyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4IGdyZXk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmFja2Ryb3Age1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zOSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmFza2V0IHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzkpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG5cclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5sb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCAyNywgNjMpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcbiAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kbW92ZXIgMzBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAubWFwbG9hZGVyIHtcclxuICAgIC5sZHMtZWxsaXBzaXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5sb2FkaW5nLXRleHQge1xyXG4gIC8vIGNvbG9yOiB5ZWxsb3c7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNTB2aDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIC8vei1pbmRleDogOTA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5sb2FkZXItaGlkZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAyMDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gIC5tYXBsb2FkZXIge1xyXG4gICAgLmxkcy1lbGxpcHNpcyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXYge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMzNweDtcclxuICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XHJcbiAgICB9XHJcbiAgICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGxlZnQ6IDMycHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgbGVmdDogNTZweDtcclxuICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBtYXBsb2FkZXIge1xyXG4gIDAlIHtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTgyLCA3MCwgOTUpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI1NSwgMTkyLCAxOTIpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDIwNiwgMjA2LCAyNTUpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQyLCA1MCwgNzUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1MCwgMTgyLCA0Myk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxNjcsIDE2Nyk7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAud2ViX3ZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgfVxyXG5cclxuICAjd2lzaCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICB9XHJcblxyXG4gICNuYXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNsb3JlbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjY2FydCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI2ZpbGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI1cHgpe1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNsb3JlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAjbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgI2ljb24ge1xyXG4gICAgICBjb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xyXG4gICAgfVxyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSk7XHJcbiAgICAjbnVtYmVyIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDhweDtcclxuICAgICAgcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIC5pY29uMSB7XHJcbiAgICAgIG1hcmdpbjogMCAyMHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndlYl92aWV3IHtcclxuICAgIG1pbi13aWR0aDo3MCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogOCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigxOTYsIDE5NiwgMTk2KTtcclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogNjB2dztcclxuICAgICAgaGVpZ2h0OiA3NXZoO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogM3Z3O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAvLyB6LWluZGV4OiAxMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IGdyZXk7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhbWVyYSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIC8vIHotaW5kZXg6IDE1O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXJvb247XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0dWZmIHtcclxuICAgICAgd2lkdGg6IDM1dnc7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAudXBkYXRlX2NhbmNlbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDVweCAwcHg7XHJcblxyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogN3ZoO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICAgIGJvcmRlci10b3A6IDAuMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxuICAgICAgYm9yZGVyOiAwLjFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgLnVwZGF0ZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY2Mge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bnoge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgLy8gd2lkdGg6IDcwLjV2dztcclxuICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG5cclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA3LjV2aDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMC4xcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgICAgIGJvcmRlcjogMC4xcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lZGl0IHtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAvLyBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYigxNjUsIDE2NSwgMTY1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b256IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICAgI2NhbmNlbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjdXBkYXRlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgLy8gZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTB2dztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbGVzIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuXHJcbiAgICAgIC53aXNobGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICAgICAgaGVpZ2h0OiA0N3ZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAvLyB6LWluZGV4OiAxMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblxyXG4gICAgICAgICAgLmhlYXJ0IHtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggZ3JleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM5KTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJhc2tldCB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICAgICAgaGVpZ2h0OiA0N3ZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAvLyB6LWluZGV4OiAxMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFja2Ryb3Age1xyXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzkpO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcblxyXG4gICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmFja2Ryb3AxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuXHJcbiAgLnZpZXdyZXZpZXdzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE1MDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDEsIDIwMSwgMjAxKTtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgaGVpZ2h0OiA5NCU7XHJcbiAgICB0b3A6IDU3cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICB0b3A6IDIuMnZoO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDJ2dztcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53aXNobGlzdF9pdGVtcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIHdpZHRoOiAyMHZ3O1xyXG5cclxuICAgICAgI25vSXRlbXN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogIG5vbmU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDV2dztcclxuICAgICAgICAgIGhlaWdodDogNXZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGl2e1xyXG4gICAgICAgIGhlaWdodDogODB2aDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogMnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDd2aDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTU4LCAxNTgsIDE1OCk7XHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDV2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiA1LjV2dztcclxuICAgICAgICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLml0ZW1fZGV0YWlscyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4dnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgd2lkdGg6IDZ2dztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudHJhc2hfaWNvbiB7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE0OCwgMTQsIDE0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFkZF90b19iYXNrZXQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMiwgMiwgMzcpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2xvc2VyZXZpZXdzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE1MDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDB2dztcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgYm90dG9tOiA0MCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLnZpZXdjYXJ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE1MDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDEsIDIwMSwgMjAxKTtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgaGVpZ2h0OiA5NCU7XHJcbiAgICB0b3A6IDU2LjVweDtcclxuICAgIGJvdHRvbTogNDAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogMi4ydmg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMnZ3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLndpc2hsaXN0X2l0ZW1zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgd2lkdGg6IDIwdnc7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAjbm9JdGVtc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAgbm9uZTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogNXZ3O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiA2NXZoO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLml0ZW1zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogN3ZoO1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigxNTgsIDE1OCwgMTU4KTtcclxuICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNXZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUuNXZ3O1xyXG4gICAgICAgICAgICBtYXJnaW46IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pdGVtX2RldGFpbHMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTJ2dztcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgd2lkdGg6IDZ2dztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudHJhc2hfaWNvbiB7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE0OCwgMTQsIDE0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYWRkX3RvX2Jhc2tldCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDQzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMiwgMiwgMzcpO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbGl2ZXJ5X29wdGlvbnMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICB3aWR0aDogMjB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAydnc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMjB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZWxpdmVyeSB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCAxODQsIDE4NCk7XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVsaXZlcnktaW5hY3RpdmUge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiZjk2N2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sbGVjdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxODQsIDE4NCwgMTg0KTtcclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmY5NjdlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbGxlY3Rpb24taW5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2JmOTY3ZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2xvc2VjYXJ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE1MDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDB2dztcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgYm90dG9tOiA0MCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDFweDtcclxufSJdfQ== */");

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