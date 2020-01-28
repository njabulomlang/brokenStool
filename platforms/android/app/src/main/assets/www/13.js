(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js ***!
  \*****************************************************************************************/
/*! exports provided: StarRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRating", function() { return StarRating; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HTML_TEMPLATE = "\n<div class=\"ionic4-star-rating\">\n  <button [ngStyle]=\"{'width' : fontSize, 'height' : fontSize}\" *ngFor=\"let index of iconsArray\" id=\"{{index}}\" type=\"button\" ion-button icon-only (click)=\"changeRating($event)\">\n    <ion-icon [ngStyle]=\"{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor, 'font-size' : fontSize }\" name=\"{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}\"></ion-icon>\n  </button>\n</div>\n";
var CSS_STYLE = "\n    .ionic4-star-rating button {\n        background: none;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        padding : 0px;\n    }\n";
var StarRating = /** @class */ (function () {
    function StarRating(events) {
        this.events = events;
        this.eventInfo = (function () {
            var id = new Date().getTime();
            var topic = "star-rating:" + id + ":changed";
            return {
                topic: topic
            };
        })();
        this.ratingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readonly = "false";
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'ios-star';
        this.defaultIcon = 'ios-star-outline';
        this.halfIcon = 'ios-star-half';
        this.halfStar = "false";
        this.maxRating = 5;
        this.fontSize = '28px';
        this.iconsArray = [];
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    StarRating_1 = StarRating;
    StarRating.prototype.ngOnInit = function () {
        this.rating = this.rating || 3; //default after input`s initialization
        for (var i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    };
    StarRating.prototype.writeValue = function (obj) {
        this.rating = obj;
    };
    StarRating.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    StarRating.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    StarRating.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    };
    Object.defineProperty(StarRating.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (val) {
            this._rating = val;
            // for form
            if (this.onChange) {
                this.onChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    StarRating.prototype.changeRating = function (event) {
        if (this.readonly && this.readonly === "true")
            return;
        // event is different for firefox and chrome
        var id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === "true") {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // subscribe this event to get the changed value in your parent compoanent 
        this.events.publish("star-rating:changed", this.rating); //common event for all instances included for backwards compatibility
        this.events.publish(this.eventInfo.topic, this.rating); //common event for all instances
        // unique event
        this.ratingChanged.emit(this.rating);
    };
    var StarRating_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], StarRating.prototype, "rating", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StarRating.prototype, "ratingChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "activeColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "defaultColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "activeIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "defaultIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "halfIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "halfStar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StarRating.prototype, "maxRating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "fontSize", void 0);
    StarRating = StarRating_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ionic4-star-rating',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: StarRating_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]])
    ], StarRating);
    return StarRating;
}());

//# sourceMappingURL=ionic4-star-rating-component.js.map

/***/ }),

/***/ "./node_modules/ionic4-star-rating/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ionic4-star-rating/dist/index.js ***!
  \*******************************************************/
/*! exports provided: StarRatingModule, StarRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ionic4_star_rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic4-star-rating.module */ "./node_modules/ionic4-star-rating/dist/ionic4-star-rating.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarRatingModule", function() { return _ionic4_star_rating_module__WEBPACK_IMPORTED_MODULE_0__["StarRatingModule"]; });

/* harmony import */ var _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ionic4-star-rating-component */ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarRating", function() { return _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRating"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ionic4-star-rating/dist/ionic4-star-rating.module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ionic4-star-rating/dist/ionic4-star-rating.module.js ***!
  \***************************************************************************/
/*! exports provided: StarRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingModule", function() { return StarRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ionic4-star-rating-component */ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StarRatingModule = /** @class */ (function () {
    function StarRatingModule() {
    }
    StarRatingModule_1 = StarRatingModule;
    StarRatingModule.forRoot = function () {
        return {
            ngModule: StarRatingModule_1,
        };
    };
    var StarRatingModule_1;
    StarRatingModule = StarRatingModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [
                _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRating"]
            ],
            exports: [
                _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRating"]
            ]
        })
    ], StarRatingModule);
    return StarRatingModule;
}());

//# sourceMappingURL=ionic4-star-rating.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <div class=\"container\">\r\n        <pre>\r\n        </pre>\r\n        <div class=\"text\">\r\n            <p>RATE THIS PRODUCT</p>\r\n        </div>\r\n        <div class=\"ratings\">\r\n            <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n                defaultColor=\"#aaaaaa\" readonly=\"{{rateNow}}\" rating=\"{{myRate}}\"  fontSize=\"7vw\"\r\n                (ratingChanged)=\"logRatingChange($event)\">\r\n            </ionic4-star-rating>\r\n\r\n            <!-- <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"false\" rating=\"2\" fontSize=\"7vw\"\r\n            (ratingChanged)=\"logRatingChange($event)\">\r\n        </ionic4-star-rating> -->\r\n        </div>\r\n<br>\r\n        <div class=\"buttonz\">\r\n            <ion-button (click)=\"dismissPopover()\" color=\"transparent\">\r\n                DONE\r\n            </ion-button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"web_view\">\r\n        <pre>\r\n        </pre>\r\n        <div class=\"text\">\r\n            <p>RATE THIS PRODUCT</p>\r\n        </div>\r\n        <div class=\"ratings\">\r\n            <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n                defaultColor=\"#aaaaaa\" readonly=\"{{rateNow}}\" rating=\"{{myRate}}\"  \r\n                (ratingChanged)=\"logRatingChange($event)\">\r\n            </ionic4-star-rating>\r\n\r\n            <!-- <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"false\" rating=\"2\" fontSize=\"7vw\"\r\n            (ratingChanged)=\"logRatingChange($event)\">\r\n        </ionic4-star-rating> -->\r\n        </div>\r\n<br>\r\n        <div class=\"buttonz\">\r\n            <ion-button (click)=\"dismissPopover()\" color=\"transparent\">\r\n                DONE\r\n            </ion-button>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border id=\"nav\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <div class=\"icon1\">\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/Terms%20and%20Privacy%20Policy\">\r\n          Terms and Privacy Policy\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/Disclaimer\">\r\n          Disclaimer\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/FAQs\">\r\n          FAQs\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/Payment%20Process\">\r\n          Payment Process\r\n        </ion-button>\r\n\r\n        <ion-button id=\"icon\" href=\"https://broken-stool.firebaseapp.com/home/About%20Company\">\r\n          About Us\r\n        </ion-button>\r\n\r\n\r\n      </div>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button id=\"rate\" (click)=\"presentPopover($event)\">\r\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon> Rate This Product\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <!-- <ion-title style=\"font-family: 'Poiret One'; font-size: 20px; letter-spacing: 2px;\">DankieJesu</ion-title> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-header no-border id=\"mobile\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"goBack()\" *ngIf=\"cordova\">\r\n      <ion-icon slot=\"start\" id=\"icon\" name=\"arrow-back\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button id=\"rate\" (click)=\"presentPopover($event)\">\r\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon> Rate This Product\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <!-- <ion-title style=\"font-family: 'Poiret One'; font-size: 20px; letter-spacing: 2px;\">DankieJesu</ion-title> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div class=\"container\" *ngIf=\"col!=='Specials'\">\r\n    <div class=\"image\" *ngFor=\"let prod of unitProduct\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\">\r\n          </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p>{{prod.data.price  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of unitProduct\">\r\n      <div class=\"add\">\r\n        <ion-fab-button color=\"transparent\" (click)=\"toBusket()\">\r\n          <ion-icon name=\"basket\"></ion-icon>\r\n\r\n        </ion-fab-button>\r\n      </div>\r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\">\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n        <!--  <ion-item *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\">\r\n          <ion-label>{{c}}</ion-label>\r\n          <ion-checkbox (ionChange)=\"onBoolChenged(c,i)\"></ion-checkbox>\r\n        </ion-item> -->\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n        <!-- <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: blue; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: green; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: red; border-radius: 6px;\">\r\n        </ion-button> -->\r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n        <ion-button (click)=\"addToCart(prod.id, prod.data)\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n            style=\"color: maroon; font-size: 8vw;position: relative; bottom: 13px;\"></ion-icon>\r\n          {{prod.data.price * quantity | currency:'R'  }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"container\" *ngIf=\"col==='Specials'\">\r\n    <div class=\"image\" *ngFor=\"let prod of mySale\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\">\r\n          </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p style=\"text-decoration: line-through; font-size: 20px\">{{prod.data.normalPrice | currency:'R'  }} </p>\r\n          <p style=\"font-size: 20px; color: maroon\">{{prod.data.saleprice  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of mySale\">\r\n      <div class=\"add\">\r\n        <ion-fab-button color=\"transparent\" (click)=\"toBusket()\">\r\n          <ion-icon name=\"basket\"></ion-icon>\r\n\r\n        </ion-fab-button>\r\n      </div>\r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\">\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n        <ion-button (click)=\"addSaleToCart(prod.id, prod.data)\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n            style=\"color: maroon; font-size: 8vw;position: relative; bottom: 13px;\"></ion-icon>\r\n          {{prod.data.saleprice * quantity | currency:'R'  }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"web_view\" *ngIf=\"col!=='Specials'\">\r\n    <div class=\"image\" *ngFor=\"let prod of unitProduct\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\">\r\n          </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p>{{prod.data.price  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of unitProduct\">\r\n\r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\">\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n          Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n        <!-- <div class=\"add\">\r\n          <ion-fab-button color=\"transparent\" (click)=\"gotocart()\">\r\n            <ion-icon name=\"basket\"></ion-icon>\r\n          </ion-fab-button>\r\n        </div> -->\r\n\r\n        <ion-button (click)=\"addToCart(prod.id, prod.data)\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n            style=\"color: maroon; position: relative; bottom: 13px;\"></ion-icon>\r\n          {{prod.data.price * quantity | currency:'R'  }}\r\n        </ion-button>\r\n\r\n        <div class=\"add\">\r\n          <ion-button (click)=\"gotocart()\" color=\"transparent\" style=\"background: rgb(5, 5, 29); width: 10vw\">\r\n            Go To Cart\r\n          </ion-button>\r\n          <!-- <ion-fab-button color=\"transparent\" (click)=\"gotocart()\">\r\n            <ion-icon name=\"basket\"></ion-icon>\r\n\r\n          </ion-fab-button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"web_view\" *ngIf=\"col==='Specials'\">\r\n    <div class=\"image\" *ngFor=\"let prod of mySale\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\">\r\n          </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p style=\"text-decoration: line-through; font-size: 20px\">{{prod.data.normalPrice  | currency:'R' }} </p>\r\n          <p style=\"font-size: 20px; color: maroon\">{{prod.data.saleprice  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of mySale\">\r\n\r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\">\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n   \r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n\r\n        <div class=\"add\">\r\n\r\n          <ion-button (click)=\"addSaleToCart(prod.id, prod.data)\" color=\"transparent\">\r\n            <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n              style=\"color: maroon; font-size: 30px; position: relative; bottom: 13px;\"></ion-icon>\r\n            {{prod.data.saleprice * quantity | currency:'R'}}\r\n          </ion-button>\r\n\r\n          <ion-button (click)=\"gotocart()\" color=\"transparent\" style=\"background: rgb(0, 0, 37); width: 10vw\">\r\n            Go To Basket\r\n          </ion-button>\r\n          <!-- <ion-fab-button color=\"transparent\" (click)=\"gotocart()\" vertical=\"bottom\">\r\n            <ion-icon name=\"basket\"></ion-icon>\r\n\r\n          </ion-fab-button> -->\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"backdrop1\" *ngIf=\"viewBackdrop\"></div>\r\n\r\n  <div id=\"cart\" [ngClass]=\"{'viewcart': viewCart, 'closecart': !viewCart}\">\r\n\r\n    <div class=\"heading\">\r\n      <p>Basket({{prodCart.length}})</p>\r\n\r\n      <ion-icon slot=\"icon-only\" name=\"close\" (click)=\"gotocart()\"></ion-icon>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"wishlist_items\">\r\n      <div class=\"div\">\r\n\r\n\r\n        <div class=\"items\" *ngFor=\"let c of prodCart; let i of index\">\r\n          <div class=\"left\" *ngFor=\"let p of c.data.product\">\r\n            <div class=\"img\">\r\n              <img src=\"{{p.picture}}\" alt=\"\">\r\n            </div>\r\n\r\n            <div class=\"item_details\">\r\n              <p> <b>{{p.product_name}} &nbsp; {{p.cost | currency:'R'}}</b><br>\r\n                size: {{p.size}} &nbsp; color: {{p.color}} <br>\r\n                jan 23, 2020</p>\r\n\r\n              <p>\r\n                <ion-icon slot=\"start\" name=\"remove-circle-outline\" (click)=\"minuss(p, i)\"></ion-icon>\r\n                {{p.quantity}} <ion-icon slot=\"end\" name=\"add-circle-outline\" (click)=\"pluss(p, i)\"></ion-icon>\r\n              </p>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"right\">\r\n            <div class=\"trash_icon\" (click)=\"removeProd(c.id)\">\r\n              <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"items\" id=\"noItems\" *ngIf=\"prodCart.length === 0\">\r\n          <p>Basket Empty</p>\r\n          <img src=\"../../assets/empty-cart.svg\" alt=\"\">\r\n        </div>\r\n\r\n\r\n        <div class=\"add_to_basket\">\r\n\r\n          <div class=\"delivery_options\">\r\n            <ion-button (click)=\"switchView('d')\" color=\"transparent\"\r\n              [ngClass]=\"{'delivery':buttonActive, 'delivery-inactive': !buttonActive}\">\r\n              Delivery\r\n            </ion-button>\r\n            <ion-button (click)=\"switchView('c')\"color=\"transparent\"\r\n              [ngClass]=\"{'collection': !buttonActive, 'collection-inactive': buttonActive}\">\r\n              Collection\r\n            </ion-button>\r\n          </div>\r\n          <p style=\"width: 100%; text-align: right; font-size: 13px;\" *ngIf=\"!delType\"><i>Cart Total -\r\n              {{getTotal() | currency:'R'}}</i></p>\r\n          <p *ngIf=\"delType==='Delivery'\" style=\"width: 100%; text-align: right; font-size: 13px;\"><i>Cart Total -\r\n              {{Delivery(getTotal()) | currency:'R'}} Incl delivery</i></p>\r\n          <p *ngIf=\"delType==='Collection'\" style=\"width: 100%; text-align: right; font-size: 13px;\"><i>Cart Total -\r\n              {{notDelivery(getTotal()) | currency:'R'}} Excl delivery</i></p>\r\n          <ion-button color=\"transparent\" [disabled]=\"prodCart.length==0\" (click)=\"presentAlertConfirm()\">\r\n            PLACE ORDER\r\n          </ion-button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <ion-footer id=\"webview\">\r\n    <div class=\"footer\">\r\n      <div class=\"heading\">\r\n        <!-- <h1>Dankie Jesu</h1> -->\r\n        <img src=\"../../assets/NoPath - Copy.svg\" alt=\"\">\r\n      </div>\r\n\r\n      <div class=\"contact_details\">\r\n        <h1>CONTACT US</h1>\r\n        <p>(011) 954-7865</p>\r\n        <p>081 123 4566</p>\r\n        <p class=\"address\">123 Motswaledi Street <br>\r\n          Diepkloof Ext 3 <br>\r\n          SOWETO <br>\r\n          1805</p>\r\n      </div>\r\n\r\n      <div class=\"info\">\r\n        <h1>INFO</h1>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/FAQs\" color=\"transparent\">\r\n          <span>FAQs</span>\r\n        </ion-button>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/Terms%20and%20Privacy%20Policy\" color=\"transparent\">\r\n          <span>Terms and Privacy Policy</span>\r\n        </ion-button>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/Disclaimer\" color=\"transparent\">\r\n          <span>Disclaimer</span>\r\n        </ion-button>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/Payment%20Process\" color=\"transparent\">\r\n          <span>Payment Process</span>\r\n        </ion-button>\r\n        <ion-button href=\"https://broken-stool.firebaseapp.com/home/About%20Company\" color=\"transparent\">\r\n          <span>Developers</span>\r\n        </ion-button>\r\n      </div>\r\n\r\n      <div class=\"connect\">\r\n        <h1>CONNECT</h1>\r\n        <ion-button href=\"https://www.facebook.com/brokenstoolbrand/\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\r\n          Facebook\r\n        </ion-button>\r\n        <ion-button href=\"https://www.instagram.com/dankiejesu/\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"logo-instagram\"></ion-icon>\r\n          Instagram\r\n        </ion-button>\r\n      </div>\r\n\r\n      <div class=\"app_store\">\r\n        <img src=\"../../assets/android.png\" alt=\"App Store\">\r\n      </div>\r\n    </div>\r\n  </ion-footer>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/popover/popover.component.scss":
/*!************************************************!*\
  !*** ./src/app/popover/popover.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  height: 25vh; }\n  .container .text p {\n    font-family: \"Poppins\";\n    font-size: 3vw;\n    font-weight: bold;\n    letter-spacing: 2px; }\n  .container .buttonz ion-button {\n    background: #000024;\n    width: 50vw;\n    font-size: 3vw; }\n  @media only screen and (min-width: 1330px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  .web_view {\n    min-width: inherit;\n    max-width: inherit;\n    margin: auto;\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center; }\n    .web_view .text p {\n      font-family: \"Poppins\";\n      font-weight: bold;\n      letter-spacing: 2px; }\n    .web_view .buttonz ion-button {\n      background: #000024;\n      width: 10vw; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wb3Zlci9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxwb3BvdmVyXFxwb3BvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUVqQixtQkFBbUI7RUFFbkIsWUFBWSxFQUFBO0VBTmQ7SUFVTSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTtFQWJ6QjtJQW1CTSxtQkFBeUI7SUFDekIsV0FBVztJQUNYLGNBQWMsRUFBQTtFQUtwQjtFQUNFO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0IsRUFBQTtFQUd0QjtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBRW5CLHVCQUF1QixFQUFBO0lBUnpCO01BWU0sc0JBQXNCO01BQ3RCLGlCQUFpQjtNQUNqQixtQkFBbUIsRUFBQTtJQWR6QjtNQW9CTSxtQkFBeUI7TUFDekIsV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIC8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGhlaWdodDogMjV2aDtcclxuXHJcbiAgLnRleHQge1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbnoge1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAzNik7XHJcbiAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICBmb250LXNpemU6IDN2dztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMzMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLndlYl92aWV3IHtcclxuICAgIG1pbi13aWR0aDogaW5oZXJpdDtcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b256IHtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDM2KTtcclxuICAgICAgICB3aWR0aDogMTB2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/popover/popover.component.ts":
/*!**********************************************!*\
  !*** ./src/app/popover/popover.component.ts ***!
  \**********************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(navParams, popCtrl, render) {
        this.navParams = navParams;
        this.popCtrl = popCtrl;
        this.render = render;
        this.dbRate = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('productRate');
        // myRatings = [];
        this.myRate = 0;
        this.starRating = document.getElementsByClassName('ionic4-star-rating');
    }
    PopoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var starButtons = _this.starRating[1].children;
            for (var i = 0; i < starButtons.length; i++) {
                _this.render.setStyle(_this.starRating[1].children[i], 'outline', 'none');
            }
        }, 500);
        this.dbRate.where('product', '==', this.navParams.get('doc')).onSnapshot(function (res) {
            // this.myRatings = [];
            res.forEach(function (doc) {
                _this.myRate = doc.data().rating / res.size;
            });
            if (res.size == 0) {
                _this.rateNow = false;
            }
            else {
                _this.rateNow = true;
            }
            // console.log('Read only ',this.rateNow);
            /*  res.forEach((doc) => {
               this.myRatings.push(doc.data().rating)
             }) */
        });
        // console.log('Collection ', this.navParams.get('col'), 'Doc ', this.navParams.get('doc'));
    };
    PopoverComponent.prototype.logRatingChange = function (rating) {
        var total = 0;
        var arr = [5, 3, 5, 1, 4];
        var avg = 0;
        //let total = 0;
        //console.log(rating);
        /* setTimeout(()=>{
          //console.log(this.starRating);
          let starButtons =  this.starRating[0].children
          for (let i = 0; i < starButtons.length; i++) {
            console.log(this.starRating[0].children[i]);
            this.render.setStyle(this.starRating[0].children[i], 'outline', 'none');
          }
        }, 1500) */
        this.dbRate.add({ rating: rating, uid: firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid, product: this.navParams.get('doc'), category: this.navParams.get('col') }).then(function (res) {
            // console.log("my data");
        });
        // this.dbRate.where('product', '==', this.navParams.get('doc')).onSnapshot((res) => {
        //   res.forEach((doc) => {
        //     if (doc.data().uid == firebase.auth().currentUser.uid && doc.data().product == this.navParams.get('doc')) {
        //       console.log('You have rated this product');
        //      // this.rateNow === false;
        //     } else {
        //      // this.rateNow === true;
        //     }
        //   })
        //   /* for (let j = 0; j < res.docs.length; j++) {
        //       avg += rating/res.size;
        //     } */
        //   // total = rating + 
        // })
        /*    for (let i = 0; i < arr.length; i++) {
             //let product = arr.data.product;
             // console.log(product);
           //  product.forEach((item) => {
               total += arr[i]/5;
           //  })
             //
           } */
        console.log('My tot ', total);
        return total;
        //console.log('My arr ', arr);
        /*   arr.forEach((i)=>{
            console.log('Rate ',i);
            
          }) */
        /*  this.dbRate.where('product','==',this.navParams.get('doc')).onSnapshot((res) => {
           for (let j = 0; j < res.docs.length; j++) {
               total = rating+res.docs[j].data().rating/res.size+1
             }
         }) */
        // this.dbRate.add({ rating: total, uid: firebase.auth().currentUser.uid, product: this.navParams.get('doc'), category:this.navParams.get('col')})
    };
    PopoverComponent.prototype.dismissPopover = function () {
        this.popCtrl.dismiss();
    };
    PopoverComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    PopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popover',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popover.component.scss */ "./src/app/popover/popover.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "./src/app/view/view-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/view/view-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageRoutingModule", function() { return ViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.page */ "./src/app/view/view.page.ts");




var routes = [
    {
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_3__["ViewPage"]
    }
];
var ViewPageRoutingModule = /** @class */ (function () {
    function ViewPageRoutingModule() {
    }
    ViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewPageRoutingModule);
    return ViewPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/view/view.module.ts":
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/*! exports provided: ViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageModule", function() { return ViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-routing.module */ "./src/app/view/view-routing.module.ts");
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view.page */ "./src/app/view/view.page.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/popover/popover.component.ts");
/* harmony import */ var ionic4_star_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic4-star-rating */ "./node_modules/ionic4-star-rating/dist/index.js");









var ViewPageModule = /** @class */ (function () {
    function ViewPageModule() {
    }
    ViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewPageRoutingModule"],
                ionic4_star_rating__WEBPACK_IMPORTED_MODULE_8__["StarRatingModule"]
            ],
            entryComponents: [_popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"]],
            declarations: [_view_page__WEBPACK_IMPORTED_MODULE_6__["ViewPage"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"]]
        })
    ], ViewPageModule);
    return ViewPageModule;
}());



/***/ }),

/***/ "./src/app/view/view.page.scss":
/*!*************************************!*\
  !*** ./src/app/view/view.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sizeStyle {\n  background: rgba(175, 175, 175, 0.712);\n  border: 2px solid #929292;\n  color: white; }\n  .sizeStyle ion-button {\n    color: white; }\n  .colorStyle {\n  border: 2px solid #929292;\n  color: #636363; }\n  ion-toolbar {\n  --background: transparent;\n  position: absolute; }\n  ion-toolbar #icon {\n    color: maroon; }\n  ion-toolbar #rate {\n    color: white;\n    font-size: 0.7em;\n    background: #000027;\n    padding: 0 !important;\n    margin-right: -5px !important;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px; }\n  ion-toolbar #rate ion-icon {\n      font-size: 1em; }\n  .container {\n  display: flex;\n  flex-flow: column;\n  align-items: center; }\n  .container .image {\n    position: relative;\n    display: flex;\n    flex-flow: column;\n    width: 100vw;\n    height: 70vh;\n    background: black; }\n  .container .image img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      opacity: 0.8; }\n  .container .image .iteminfo {\n      z-index: 5;\n      position: absolute;\n      top: 33vh;\n      left: 5vw;\n      display: flex;\n      flex-flow: row;\n      text-align: center;\n      align-items: flex-end;\n      justify-content: space-between;\n      width: 70%;\n      margin: 5px;\n      padding: 5px;\n      color: white;\n      font-family: \"Raleway\";\n      line-height: 10px; }\n  .container .productinfo {\n    display: flex;\n    flex-flow: column;\n    width: 90vw;\n    background: white;\n    z-index: 5;\n    position: absolute;\n    top: 50%;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n    box-shadow: 5px 5px 10px #b8b8b8; }\n  .container .productinfo .add {\n      position: absolute;\n      right: -5px;\n      top: -25px; }\n  .container .productinfo .add ion-fab-button {\n        background: maroon;\n        border-radius: 50%; }\n  .container .productinfo .add ion-fab-button ion-icon {\n          color: white; }\n  .container .productinfo .about {\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .sizes {\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .sizes ion-button {\n        font-size: 1em;\n        width: 14vw;\n        color: black;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: 0.5px solid #adadad; }\n  .container .productinfo .colours {\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .colours ion-button {\n        margin: 2px;\n        width: 14vw;\n        font-size: 1em; }\n  .container .productinfo .quantity {\n      margin: 5px;\n      font-size: 0.7em;\n      align-items: baseline; }\n  .container .productinfo .quantity ion-button {\n        font-size: 1em;\n        width: 10vw;\n        color: black;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: 0.5px solid black; }\n  .container .productinfo .shipping {\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .delivery {\n      position: relative;\n      bottom: 40px;\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .buttonz {\n      width: 100%;\n      text-align: right;\n      font-size: 1em; }\n  .container .productinfo .buttonz ion-button {\n        font-size: 1em;\n        color: white;\n        background: #010136;\n        border-top-left-radius: 20px;\n        border-bottom-left-radius: 20px;\n        font-family: \"Raleway\"; }\n  .container .productinfo .buttonz ion-button ion-icon {\n          font-size: 1em;\n          color: white; }\n  .container .productinfo .buttonz ion-button ion-icon #book {\n            color: maroon; }\n  @media only screen and (max-width: 1024px) {\n  #nav {\n    display: none; }\n  .web_view {\n    display: none;\n    width: 0px !important;\n    height: 0px !important; }\n  #webview {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  #cart {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; } }\n  @media only screen and (min-width: 1025px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  ion-toolbar {\n    --background: rgb(255, 255, 255);\n    width: 100%;\n    font-family: \"Raleway\";\n    letter-spacing: 2px;\n    color: #838383; }\n    ion-toolbar #icon {\n      color: #838383; }\n    ion-toolbar #number {\n      font-size: 0.8em;\n      position: relative;\n      top: 8px;\n      right: 5px; }\n    ion-toolbar .icon1 {\n      margin: 0 20vw; }\n  .web_view {\n    min-width: 800px;\n    max-width: 1200px;\n    margin: auto;\n    display: flex;\n    flex-flow: row;\n    margin-top: 100px;\n    box-shadow: 5px 5px 10px #bebebe;\n    padding: 10px; }\n    .web_view .image {\n      width: 40vw;\n      height: 45vh; }\n      .web_view .image img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n    .web_view .buttonz {\n      width: 100%;\n      text-align: right;\n      display: flex;\n      flex-flow: row;\n      justify-content: space-evenly; }\n      .web_view .buttonz ion-button {\n        width: 20vw;\n        color: white;\n        background: #010136;\n        border-radius: 20px;\n        font-family: \"Raleway\"; }\n        .web_view .buttonz ion-button ion-icon {\n          color: white; }\n          .web_view .buttonz ion-button ion-icon #book {\n            color: maroon; }\n    .web_view .shipping {\n      margin: 5px;\n      font-size: 15px; }\n    .web_view .delivery {\n      position: relative;\n      bottom: 40px;\n      margin: 5px;\n      font-size: 15px; }\n    .web_view .add ion-fab-button {\n      background: maroon;\n      border-radius: 50%; }\n      .web_view .add ion-fab-button ion-icon {\n        color: white; }\n    .web_view .about {\n      margin: 5px; }\n    .web_view .sizes {\n      margin: 5px; }\n      .web_view .sizes ion-button {\n        color: black;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: 0.5px solid #adadad; }\n    .web_view .colours {\n      margin: 5px; }\n      .web_view .colours ion-button {\n        margin: 2px; }\n    .web_view .quantity {\n      margin: 5px;\n      align-items: baseline; }\n      .web_view .quantity ion-button {\n        color: black;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: 0.5px solid black; }\n    .web_view .productinfo {\n      margin: 20px; }\n  .backdrop1 {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background: black;\n    opacity: 0.5; }\n  .viewcart {\n    position: absolute;\n    z-index: 150;\n    background: #c9c9c9;\n    width: 20vw;\n    height: 94%;\n    top: 57px;\n    right: 0;\n    align-items: center;\n    display: flex;\n    flex-flow: column;\n    overflow: hidden; }\n    .viewcart .heading {\n      display: flex;\n      flex-flow: row;\n      justify-content: space-between;\n      width: 100%;\n      margin: 5px; }\n      .viewcart .heading ion-icon {\n        color: white;\n        position: relative;\n        right: 20px;\n        top: 2.2vh;\n        font-size: 1em;\n        background: black;\n        border-radius: 50%; }\n      .viewcart .heading p {\n        letter-spacing: 1px;\n        margin: 5px;\n        position: relative;\n        left: 2vw;\n        font-size: 1em; }\n    .viewcart .wishlist_items {\n      display: flex;\n      flex-flow: column;\n      overflow-y: auto;\n      margin: 10px;\n      width: 20vw;\n      height: 100%;\n      position: relative; }\n      .viewcart .wishlist_items #noItems {\n        display: flex;\n        flex-flow: column;\n        background: none;\n        align-items: center;\n        box-shadow: none;\n        justify-content: center;\n        margin-top: 200px; }\n        .viewcart .wishlist_items #noItems img {\n          width: 5vw;\n          height: 5vw; }\n        .viewcart .wishlist_items #noItems p {\n          text-align: center;\n          font-size: 15px;\n          color: grey; }\n      .viewcart .wishlist_items .div {\n        height: 65vh;\n        overflow-y: auto;\n        scrollbar-width: 2px;\n        width: 100%; }\n      .viewcart .wishlist_items .items {\n        display: flex;\n        flex-flow: row;\n        justify-content: space-between;\n        margin: 10px;\n        min-height: 7vh;\n        margin: 5px;\n        background: white;\n        border-radius: 5px;\n        box-shadow: 5px 5px 10px #9e9e9e; }\n        .viewcart .wishlist_items .items .left {\n          display: flex;\n          flex-flow: row;\n          justify-content: space-between;\n          margin: 5px; }\n          .viewcart .wishlist_items .items .left .img {\n            width: 5vw;\n            height: 5.5vw;\n            margin: 3px;\n            border-radius: 5px; }\n            .viewcart .wishlist_items .items .left .img img {\n              width: 100%;\n              height: 100%;\n              -o-object-fit: cover;\n                 object-fit: cover;\n              border-radius: 5px; }\n          .viewcart .wishlist_items .items .left .item_details {\n            width: 12vw; }\n            .viewcart .wishlist_items .items .left .item_details p {\n              font-size: 13px; }\n        .viewcart .wishlist_items .items .right {\n          width: 3vw;\n          display: flex;\n          flex-flow: column;\n          justify-content: space-between;\n          text-align: right;\n          margin: 5px; }\n          .viewcart .wishlist_items .items .right ion-button {\n            font-size: 12px;\n            width: 4vw;\n            height: 20px;\n            display: flex;\n            flex-flow: row;\n            justify-content: space-between; }\n            .viewcart .wishlist_items .items .right ion-button ion-icon {\n              font-size: 12px; }\n          .viewcart .wishlist_items .items .right .trash_icon ion-icon {\n            color: #940e0e; }\n      .viewcart .wishlist_items .add_to_basket {\n        color: white;\n        position: absolute;\n        bottom: 0;\n        width: 90%;\n        margin: 20px; }\n        .viewcart .wishlist_items .add_to_basket p {\n          color: #00002b; }\n        .viewcart .wishlist_items .add_to_basket ion-button {\n          background: #020225;\n          width: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          text-align: center; }\n        .viewcart .wishlist_items .add_to_basket .delivery_options {\n          display: flex;\n          flex-flow: row;\n          justify-content: space-evenly;\n          margin: 5px; }\n          .viewcart .wishlist_items .add_to_basket .delivery_options ion-button {\n            font-size: 13px;\n            color: grey;\n            width: 20vw;\n            height: 2vw; }\n          .viewcart .wishlist_items .add_to_basket .delivery_options .line {\n            width: 20vw;\n            height: 1.5px;\n            background: grey; }\n        .viewcart .wishlist_items .add_to_basket .delivery {\n          width: 50%;\n          height: 100%;\n          align-items: center;\n          overflow: hidden;\n          background: #b8b8b8; }\n          .viewcart .wishlist_items .add_to_basket .delivery ion-button {\n            border-bottom: 2px solid black; }\n        .viewcart .wishlist_items .add_to_basket .delivery-inactive {\n          width: 50%;\n          height: 100%;\n          align-items: center;\n          overflow: hidden;\n          opacity: 0.5;\n          background: #fafafa; }\n          .viewcart .wishlist_items .add_to_basket .delivery-inactive ion-button {\n            width: 100%;\n            height: 100%;\n            border-radius: 30px;\n            font-family: \"Poiret One\";\n            font-weight: bold;\n            letter-spacing: 3px;\n            background: #bf967e;\n            color: white;\n            border: none; }\n        .viewcart .wishlist_items .add_to_basket .collection {\n          width: 50%;\n          height: 100%;\n          overflow: hidden;\n          background: #b8b8b8; }\n          .viewcart .wishlist_items .add_to_basket .collection ion-button {\n            width: 100%;\n            height: 100%;\n            border-radius: 30px;\n            font-family: \"Poiret One\";\n            font-weight: bold;\n            letter-spacing: 3px;\n            background: #bf967e;\n            color: white;\n            border: none; }\n        .viewcart .wishlist_items .add_to_basket .collection-inactive {\n          background: #fafafa;\n          width: 50%;\n          height: 100%;\n          overflow: hidden;\n          opacity: 0.5; }\n          .viewcart .wishlist_items .add_to_basket .collection-inactive ion-button {\n            width: 100%;\n            height: 100%;\n            border-radius: 30px;\n            font-family: \"Poiret One\";\n            font-weight: bold;\n            letter-spacing: 3px;\n            background: #bf967e;\n            color: white;\n            border: none; }\n  .closecart {\n    position: absolute;\n    z-index: 150;\n    background: white;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    width: 0vw;\n    height: 85vh;\n    top: 10%;\n    bottom: 40%;\n    right: 0;\n    align-items: center;\n    display: flex;\n    flex-flow: column;\n    overflow: hidden; } }\n  ion-footer {\n  text-align: center;\n  position: absolute; }\n  ion-footer .footer {\n    display: flex;\n    flex-flow: row;\n    justify-content: space-evenly;\n    width: 100vw;\n    background: #000020;\n    color: white; }\n  ion-footer .footer .heading {\n      width: 10vw;\n      height: 5vw;\n      margin: 15px; }\n  ion-footer .footer .heading img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n  ion-footer .footer .app_store {\n      width: 10vw;\n      height: 5vw; }\n  ion-footer .footer .contact_details {\n      font-size: 13px;\n      text-align: left; }\n  ion-footer .footer .contact_details p {\n        font-size: 13px; }\n  ion-footer .footer .contact_details h1 {\n        font-size: 20px; }\n  ion-footer .footer .info {\n      font-size: 13px;\n      text-align: left;\n      display: flex;\n      flex-flow: column;\n      align-items: flex-start; }\n  ion-footer .footer .info ion-button {\n        font-size: 13px;\n        color: white;\n        margin-left: -8%;\n        padding-left: 0 !important; }\n  ion-footer .footer .info ion-button span {\n          text-align: left;\n          width: 100%;\n          left: 0px !important; }\n  ion-footer .footer .info h1 {\n        font-size: 20px; }\n  ion-footer .footer .connect {\n      display: flex;\n      flex-flow: column; }\n  ion-footer .footer .connect ion-button {\n        overflow: hidden; }\n  ion-footer .footer .connect h1 {\n        font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFx2aWV3XFx2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFzQztFQUN0Qyx5QkFBb0M7RUFDcEMsWUFBWSxFQUFBO0VBSGQ7SUFLSSxZQUFZLEVBQUE7RUFJaEI7RUFDRSx5QkFBb0M7RUFDcEMsY0FBc0IsRUFBQTtFQUV4QjtFQUNFLHlCQUFhO0VBQ2Isa0JBQWtCLEVBQUE7RUFGcEI7SUFLSSxhQUFhLEVBQUE7RUFMakI7SUFTSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QiwrQkFBK0IsRUFBQTtFQWZuQztNQWlCTSxjQUFjLEVBQUE7RUFLcEI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0VBSHJCO0lBTUksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQVhyQjtNQWFNLFdBQVc7TUFDWCxZQUFZO01BQ1osb0JBQWlCO1NBQWpCLGlCQUFpQjtNQUNqQixZQUFZLEVBQUE7RUFoQmxCO01Bb0JNLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsU0FBUztNQUNULFNBQVM7TUFDVCxhQUFhO01BQ2IsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsOEJBQThCO01BQzlCLFVBQVU7TUFDVixXQUFXO01BQ1gsWUFBWTtNQUNaLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsaUJBQWlCLEVBQUE7RUFsQ3ZCO0lBa0RJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztJQUVYLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFFUiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVC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LG1CQUF5QjtJQUN6QixZQUFZLEVBQUE7RUFUaEI7TUFZTSxXQUFXO01BQ1gsV0FBVztNQUNYLFlBQVksRUFBQTtFQWRsQjtRQWdCUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFpQjtXQUFqQixpQkFBaUIsRUFBQTtFQWxCekI7TUF1Qk0sV0FBVztNQUNYLFdBQVcsRUFBQTtFQXhCakI7TUE0Qk0sZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBN0J0QjtRQStCUSxlQUFlLEVBQUE7RUEvQnZCO1FBa0NRLGVBQWUsRUFBQTtFQWxDdkI7TUF1Q00sZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLHVCQUF1QixFQUFBO0VBM0M3QjtRQTZDUSxlQUFlO1FBQ2YsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQiwwQkFBMEIsRUFBQTtFQWhEbEM7VUFrRFUsZ0JBQWdCO1VBQ2hCLFdBQVc7VUFDWCxvQkFBb0IsRUFBQTtFQXBEOUI7UUF5RFEsZUFBZSxFQUFBO0VBekR2QjtNQThETSxhQUFhO01BQ2IsaUJBQWlCLEVBQUE7RUEvRHZCO1FBaUVRLGdCQUFnQixFQUFBO0VBakV4QjtRQW9FUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3L3ZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpemVTdHlsZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNzUsIDE3NSwgMTc1LCAwLjcxMik7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE0NiwgMTQ2LCAxNDYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBpb24tYnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5jb2xvclN0eWxlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTQ2LCAxNDYsIDE0Nik7XHJcbiAgY29sb3I6IHJnYig5OSwgOTksIDk5KTtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICNpY29uIHtcclxuICAgIGNvbG9yOiBtYXJvb247XHJcbiAgfVxyXG5cclxuICAjcmF0ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDM5KTtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogLTVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtaW5mbyB7XHJcbiAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzM3ZoO1xyXG4gICAgICBsZWZ0OiA1dnc7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgIC5zdGFycyB7XHJcbiAgICAgICAgLy8gaW9uLWljb24ge1xyXG4gICAgICAgIC8vICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJpY2Uge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgLy8gZm9udC1zaXplOiA1dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdGluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICAvLyBoZWlnaHQ6IDYwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuXHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDE4NCwgMTg0LCAxODQpO1xyXG5cclxuICAgIC5hZGQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICB0b3A6IC0yNXB4O1xyXG4gICAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFyb29uO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0IHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnNpemVzIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIHdpZHRoOiAxNHZ3O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sb3VycyB7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gYm90dG9tOiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgd2lkdGg6IDE0dnc7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiA4dnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucXVhbnRpdHkge1xyXG4gICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC8vIGJvdHRvbTogNDBweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaGlwcGluZyB7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gYm90dG9tOiA0MHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVsaXZlcnkge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvdHRvbTogNDBweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnoge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDEsIDEsIDU0KTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAjYm9vayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBtYXJvb247XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICNuYXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLndlYl92aWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI3dlYnZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNjYXJ0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCl7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICNpY29uIHtcclxuICAgICAgY29sb3I6IHJnYigxMzEsIDEzMSwgMTMxKTtcclxuICAgIH1cclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xyXG4gICAgI251bWJlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24xIHtcclxuICAgICAgbWFyZ2luOiAwIDIwdnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAud2ViX3ZpZXcge1xyXG4gICAgbWluLXdpZHRoOiA4MDBweDtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDE5MCwgMTkwLCAxOTApO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogNDB2dztcclxuICAgICAgaGVpZ2h0OiA0NXZoO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ueiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjB2dztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDEsIDEsIDU0KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAjYm9vayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBtYXJvb247XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNoaXBwaW5nIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVsaXZlcnkge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvdHRvbTogNDBweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkIHtcclxuICAgICAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcm9vbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dCB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXplcyB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbG91cnMge1xyXG4gICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC8vIGJvdHRvbTogMjBweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG5cclxuICAgICAgICAvLyBoZWlnaHQ6IDh2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5xdWFudGl0eSB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0aW5mbyB7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iYWNrZHJvcDEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICAudmlld2NhcnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTUwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwMSwgMjAxLCAyMDEpO1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBoZWlnaHQ6IDk0JTtcclxuICAgIHRvcDogNTdweDtcclxuICAgIC8vIGJvdHRvbTogNDAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG5cclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdG9wOiAyLjJ2aDtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAydnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud2lzaGxpc3RfaXRlbXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICB3aWR0aDogMjB2dztcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICNub0l0ZW1zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogNXZ3O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kaXYge1xyXG4gICAgICAgIGhlaWdodDogNjV2aDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogMnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDd2aDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTU4LCAxNTgsIDE1OCk7XHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDV2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiA1LjV2dztcclxuICAgICAgICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLml0ZW1fZGV0YWlscyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnZ3O1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICB3aWR0aDogM3Z3O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0dnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50cmFzaF9pY29uIHtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTQ4LCAxNCwgMTQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWRkX3RvX2Jhc2tldCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDQzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMiwgMiwgMzcpO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbGl2ZXJ5X29wdGlvbnMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICB3aWR0aDogMjB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAydnc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMjB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZWxpdmVyeSB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCAxODQsIDE4NCk7XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVsaXZlcnktaW5hY3RpdmUge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvaXJldCBPbmVcIjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiZjk2N2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sbGVjdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxODQsIDE4NCwgMTg0KTtcclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmY5NjdlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbGxlY3Rpb24taW5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9pcmV0IE9uZVwiO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2JmOTY3ZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2xvc2VjYXJ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE1MDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDB2dztcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgYm90dG9tOiA0MCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAuZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDMyKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgICBoZWlnaHQ6IDV2dztcclxuICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hcHBfc3RvcmUge1xyXG4gICAgICB3aWR0aDogMTB2dztcclxuICAgICAgaGVpZ2h0OiA1dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3RfZGV0YWlscyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW5mbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtOCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29ubmVjdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/view/view.page.ts":
/*!***********************************!*\
  !*** ./src/app/view/view.page.ts ***!
  \***********************************/
/*! exports provided: ViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPage", function() { return ViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/popover/popover.component.ts");






var ViewPage = /** @class */ (function () {
    // colorIndex = null;
    function ViewPage(router, route, toastCtrl, popoverController, navCtrl, render, alertCtrl, plt) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.popoverController = popoverController;
        this.navCtrl = navCtrl;
        this.render = render;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.dbProduct = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Products');
        this.dbCart = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Cart');
        this.dbOrder = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Order');
        this.customerUID = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.quantity = 1;
        this.myProduct = [];
        this.data = [];
        this.unitProduct = [];
        this.my_size = '';
        this.sizeIndex = null;
        this.colorIndex = null;
        this.color = '';
        this.myRate = 0;
        this.dbRate = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('productRate');
        this.dbSales = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Specials');
        this.mySale = [];
        this.category = '';
        this.starRating = document.getElementsByClassName('ionic4-star-rating');
        this.boolCheck = false;
        this.viewCart = false;
        this.viewBackdrop = false;
        this.prodCart = [];
        this.buttonActive = true;
        this.doc_id = this.route.snapshot.paramMap.get('view_id');
        this.route.queryParams.subscribe(function (params) {
            _this.doc_data = params["data"];
            _this.col = params["col"];
            _this.category = params["category"];
        });
    }
    ViewPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.plt.is('cordova')) {
            this.cordova = true;
        }
        else {
            this.cordova = false;
        }
        this.getCart();
        if (this.col === 'Specials') {
            this.dbSales.doc(this.doc_id).get().then(function (res) {
                _this.mySale.push({ data: res.data(), id: res.id });
            });
            //  this.getSpecial();
        }
        else {
            this.getProduct();
        }
        this.dbRate.where('product', '==', this.doc_id).onSnapshot(function (res) {
            if (res.size === 0) {
                _this.myRate = 0;
            }
            else {
                res.forEach(function (doc) {
                    _this.myRate = doc.data().rating / res.size;
                });
            }
        });
    };
    ViewPage.prototype.getTotal = function () {
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
    ViewPage.prototype.placeOrder = function (info) {
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
            var docname = 'BrokenStool' + Math.floor(Math.random() * 10000000);
            this.dbOrder.doc(docname).set({ product: myArr, timestamp: new Date().getTime(),
                status: 'received', userID: firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid,
                totalPrice: this.getTotal(), deliveryCost: this.delCost, deliveryType: this.delType
            }).then(function () {
                doc.forEach(function (id) {
                    _this.dbCart.doc(id).delete();
                });
                //Toast must be created
                //this.router.navigate(['payment', docname])
            });
        }
    };
    ViewPage.prototype.getCart = function () {
        var _this = this;
        this.dbCart.where('customerUID', '==', this.customerUID).onSnapshot(function (info) {
            _this.prodCart = [];
            // this.totalCost = 0;
            info.forEach(function (doc) {
                _this.prodCart.push({ data: doc.data(), id: doc.id });
            });
        });
    };
    ViewPage.prototype.gotocart = function () {
        this.viewCart = !this.viewCart;
        this.viewBackdrop = !this.viewBackdrop;
    };
    ViewPage.prototype.presentAlertConfirm = function () {
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
    ViewPage.prototype.Delivery = function (tot) {
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
    ViewPage.prototype.notDelivery = function (tot) {
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
    ViewPage.prototype.onBoolChenged = function (c, i) {
        console.log('Boolean val ', c, 'index ', i);
    };
    ViewPage.prototype.getProduct = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dbProduct.doc(this.col).collection(this.category).doc(this.doc_id).get().then(function (doc) {
                            _this.unitProduct.push({ data: doc.data(), id: doc.id });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewPage.prototype.getSpecial = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dbSales.doc(this.doc_id).get().then(function (res) {
                            _this.mySale.push({ data: res.data(), id: res.id });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"],
                            event: ev,
                            translucent: true,
                            componentProps: {
                                col: this.col,
                                doc: this.doc_id
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ViewPage.prototype.sizeChosen = function (data, index) {
        // console.log(index);
        this.sizeIndex = index;
        this.my_size = data;
        //console.log('My size ', this.my_size);
    };
    ViewPage.prototype.colorChosen = function (color, index) {
        this.color = color;
        this.colorIndex = index;
        // console.log("color", index);
    };
    ViewPage.prototype.plus = function () {
        //console.log('Quantity ', quantity); 
        this.quantity += 1;
    };
    ViewPage.prototype.minus = function () {
        if (this.quantity <= 1) {
            this.toastController('Quantity must be positive');
        }
        else {
            this.quantity -= 1;
        }
    };
    ViewPage.prototype.pluss = function (prod, index) {
        var num = index.data.product[0].quantity++;
        index.data.product[0].cost = index.data.product[0].cost;
        var id = index.id;
        var product = [prod];
        this.dbCart.doc(id).update({ product: product }).then(function (res) {
            // console.log('updated');
        });
    };
    ViewPage.prototype.removeProd = function (id) {
        this.dbCart.doc(id).delete().then(function (res) {
        });
    };
    ViewPage.prototype.minuss = function (prod, index) {
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
        // this.prodCount = quantity+1
        // this.dbCart.doc(id).update({product:{quantity: this.prodCount}})
        //console.log('Quan decr ', quan);
    };
    ViewPage.prototype.toastController = function (message) {
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
    ViewPage.prototype.toBusket = function () {
        this.router.navigateByUrl('basket');
    };
    ViewPage.prototype.addToCart = function (id, details) {
        var _this = this;
        if (this.my_size === "" || this.color === "") {
            this.toastController('Please select your size');
        }
        else {
            this.dbCart.add({
                customerUID: this.customerUID, timestamp: new Date().getTime(), product: [{
                        product_name: details.name, size: this.my_size,
                        quantity: this.quantity, cost: details.price, unitCost: details.price, picture: details.pictureLink,
                        color: this.color
                    }]
            }).then(function () {
                _this.toastController('Added to busket');
                //this.router.navigateByUrl('basket');
            });
        }
        /*   this.dbCart.doc(id).onSnapshot((res)=>{
             // this.dbCart.add({ customerUID: this.customerUID, product: [{product_id: this.doc_id, quantity: this.quantity}]})
          }) */
        // console.log('Doc id ', id, 'Quantity ', quantity);
        // console.log('Product ', details, id);
    };
    ViewPage.prototype.addSaleToCart = function (id, details) {
        var _this = this;
        var descr = "";
        if (this.my_size === "") {
            descr = "size";
        }
        else if (this.color === "") {
            descr = "color";
        }
        if (this.my_size === "" || this.color === "") {
            this.toastController('Missing selection of ' + descr);
        }
        else {
            this.dbCart.add({
                customerUID: this.customerUID, timestamp: new Date().getTime(), product: [{
                        product_name: details.name, size: this.my_size,
                        quantity: this.quantity, cost: details.saleprice, picture: details.pictureLink,
                        color: this.color
                    }]
            }).then(function () {
                _this.toastController('Added to busket');
                //this.router.navigateByUrl('basket');
            });
        }
    };
    ViewPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ViewPage.prototype.viewitem = function () {
        this.router.navigateByUrl("/basket");
    };
    ViewPage.prototype.switchView = function (state) {
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
    ViewPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    ViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.page.scss */ "./src/app/view/view.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], ViewPage);
    return ViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=13.js.map