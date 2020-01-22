(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n      <ion-icon slot=\"start\" id=\"icon\" name=\"arrow-back\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button id=\"rate\" (click)=\"presentPopover($event)\">\r\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon> Rate This Product\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <!-- <ion-title style=\"font-family: 'Poiret One'; font-size: 20px; letter-spacing: 2px;\">DankieJesu</ion-title> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div class=\"container\" *ngIf=\"col!=='sales'\">\r\n    <div class=\"image\" *ngFor=\"let prod of unitProduct\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\" >\r\n          </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p>{{prod.data.price  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of unitProduct\">\r\n      <div class=\"add\">\r\n        <ion-fab-button color=\"transparent\" (click)=\"toBusket()\">\r\n          <ion-icon name=\"basket\"></ion-icon>\r\n\r\n        </ion-fab-button>\r\n      </div>\r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\" >\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n       <!--  <ion-item *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\">\r\n          <ion-label>{{c}}</ion-label>\r\n          <ion-checkbox (ionChange)=\"onBoolChenged(c,i)\"></ion-checkbox>\r\n        </ion-item> -->\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n        <!-- <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: blue; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: green; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: red; border-radius: 6px;\">\r\n        </ion-button> -->\r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n        <ion-button (click)=\"addToCart(prod.id, prod.data)\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n            style=\"color: maroon; font-size: 8vw;position: relative; bottom: 13px;\"></ion-icon>\r\n          {{prod.data.price * quantity | currency:'R'  }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"container\" *ngIf=\"col==='sales'\">\r\n    <div class=\"image\" *ngFor=\"let prod of mySale\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\">\r\n        </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p style=\"text-decoration: line-through;\">R3000 </p>\r\n          <p>{{prod.data.saleprice  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of mySale\">\r\n      <div class=\"add\">\r\n        <ion-fab-button color=\"transparent\" (click)=\"toBusket()\">\r\n          <ion-icon name=\"basket\"></ion-icon>\r\n\r\n        </ion-fab-button>\r\n      </div>\r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\">\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n        <!-- <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: blue; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: green; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: red; border-radius: 6px;\">\r\n        </ion-button> -->\r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n        <ion-button (click)=\"addSaleToCart(prod.id, prod.data)\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n            style=\"color: maroon; font-size: 8vw;position: relative; bottom: 13px;\"></ion-icon>\r\n          {{prod.data.saleprice * quantity | currency:'R'  }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"web_view\" *ngIf=\"col!=='sales'\">\r\n    <div class=\"image\" *ngFor=\"let prod of unitProduct\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\" >\r\n          </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p>{{prod.data.price  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of unitProduct\">\r\n      \r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\">\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n        <!-- <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: blue; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: green; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: red; border-radius: 6px;\">\r\n        </ion-button> -->\r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n           Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n        <div class=\"add\">\r\n          <ion-fab-button color=\"transparent\" (click)=\"toBusket()\">\r\n            <ion-icon name=\"basket\"></ion-icon>\r\n  \r\n          </ion-fab-button>\r\n        </div>\r\n        <ion-button (click)=\"addToCart(prod.id, prod.data)\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n            style=\"color: maroon; position: relative; bottom: 13px;\"></ion-icon>\r\n          {{prod.data.price * quantity | currency:'R'  }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"web_view\" *ngIf=\"col==='sales'\">\r\n    <div class=\"image\" *ngFor=\"let prod of mySale\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\" >\r\n        </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p style=\"text-decoration: line-through;\">{{prod.data.normalPrice  | currency:'R' }} </p>\r\n          <p>{{prod.data.saleprice  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of mySale\">\r\n   \r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\">\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n        <!-- <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: blue; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: green; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: red; border-radius: 6px;\">\r\n        </ion-button> -->\r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus(quantity)\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus(quantity)\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n\r\n        <div class=\"add\">\r\n          <ion-fab-button color=\"transparent\" (click)=\"toBusket()\" vertical=\"bottom\" >\r\n            <ion-icon name=\"basket\"></ion-icon>\r\n  \r\n          </ion-fab-button>\r\n        </div>\r\n\r\n        \r\n        <ion-button (click)=\"addSaleToCart(prod.id, prod.data)\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n            style=\"color: maroon; font-size: 30px; position: relative; bottom: 13px;\"></ion-icon>\r\n          {{prod.data.saleprice * quantity | currency:'R'  }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".sizeStyle {\n  background: rgba(175, 175, 175, 0.712);\n  border: 2px solid #929292;\n  color: white; }\n  .sizeStyle ion-button {\n    color: white; }\n  .colorStyle {\n  border: 2px solid #929292;\n  color: #636363; }\n  ion-toolbar {\n  --background: transparent;\n  position: absolute; }\n  ion-toolbar #icon {\n    color: maroon; }\n  ion-toolbar #rate {\n    color: white;\n    font-size: 0.7em;\n    background: #000027;\n    padding: 0 !important;\n    margin-right: -5px !important;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px; }\n  ion-toolbar #rate ion-icon {\n      font-size: 1em; }\n  .container {\n  display: flex;\n  flex-flow: column;\n  align-items: center; }\n  .container .image {\n    position: relative;\n    display: flex;\n    flex-flow: column;\n    width: 100vw;\n    height: 70vh;\n    background: black; }\n  .container .image img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      opacity: 0.8; }\n  .container .image .iteminfo {\n      z-index: 5;\n      position: absolute;\n      top: 37vh;\n      left: 5vw;\n      display: flex;\n      flex-flow: row;\n      text-align: center;\n      align-items: flex-end;\n      justify-content: space-between;\n      width: 70%;\n      margin: 5px;\n      padding: 5px;\n      color: white;\n      font-family: \"Raleway\";\n      line-height: 10px; }\n  .container .productinfo {\n    display: flex;\n    flex-flow: column;\n    width: 90vw;\n    background: white;\n    z-index: 5;\n    position: absolute;\n    top: 50%;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n    box-shadow: 5px 5px 10px #b8b8b8; }\n  .container .productinfo .add {\n      position: absolute;\n      right: -5px;\n      top: -25px; }\n  .container .productinfo .add ion-fab-button {\n        background: maroon;\n        border-radius: 50%; }\n  .container .productinfo .add ion-fab-button ion-icon {\n          color: white; }\n  .container .productinfo .about {\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .sizes {\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .sizes ion-button {\n        font-size: 1em;\n        width: 14vw;\n        color: black;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: 0.5px solid #adadad; }\n  .container .productinfo .colours {\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .colours ion-button {\n        margin: 2px;\n        width: 14vw;\n        font-size: 1em; }\n  .container .productinfo .quantity {\n      margin: 5px;\n      font-size: 0.7em;\n      align-items: baseline; }\n  .container .productinfo .quantity ion-button {\n        font-size: 1em;\n        width: 10vw;\n        color: black;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: 0.5px solid black; }\n  .container .productinfo .shipping {\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .delivery {\n      position: relative;\n      bottom: 40px;\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .buttonz {\n      width: 100%;\n      text-align: right;\n      font-size: 1em; }\n  .container .productinfo .buttonz ion-button {\n        font-size: 1em;\n        color: white;\n        background: #010136;\n        border-top-left-radius: 20px;\n        border-bottom-left-radius: 20px;\n        font-family: \"Raleway\"; }\n  .container .productinfo .buttonz ion-button ion-icon {\n          font-size: 1em;\n          color: white; }\n  .container .productinfo .buttonz ion-button ion-icon #book {\n            color: maroon; }\n  @media only screen and (max-width: 1024px) {\n  .web_view {\n    display: none;\n    width: 0%;\n    height: 0%; }\n    .web_view .sizeStyle {\n      background: rgba(175, 175, 175, 0.712);\n      border: 2px solid #929292;\n      color: white; }\n      .web_view .sizeStyle ion-button {\n        color: white; }\n      .web_view .sizeStyle .container .productinfo .sizes {\n        margin: 5px; }\n        .web_view .sizeStyle .container .productinfo .sizes ion-button {\n          color: black;\n          margin: 0 !important;\n          padding: 0 !important;\n          border: 0.5px solid #adadad; }\n    .web_view .colorStyle {\n      border: 2px solid #929292;\n      color: #636363; }\n    .web_view ion-toolbar {\n      --background: transparent;\n      position: absolute; }\n      .web_view ion-toolbar #icon {\n        color: maroon; }\n      .web_view ion-toolbar #rate {\n        color: white;\n        font-size: 0.7em;\n        background: #000027;\n        padding: 0 !important;\n        margin-right: -5px !important;\n        border-top-left-radius: 20px;\n        border-bottom-left-radius: 20px; }\n        .web_view ion-toolbar #rate ion-icon {\n          font-size: 1em; }\n    .web_view .container {\n      display: flex;\n      flex-flow: column;\n      align-items: center; }\n      .web_view .container .image {\n        position: relative;\n        display: flex;\n        flex-flow: column;\n        width: 100vw;\n        height: 70vh;\n        background: black; }\n        .web_view .container .image img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          opacity: 0.8; }\n        .web_view .container .image .iteminfo {\n          z-index: 5;\n          position: absolute;\n          top: 53%;\n          left: 5vw;\n          display: flex;\n          flex-flow: row;\n          text-align: center;\n          align-items: flex-end;\n          justify-content: space-between;\n          width: 70%;\n          margin: 10px;\n          color: white;\n          font-family: \"Raleway\";\n          line-height: 10px; }\n          .web_view .container .image .iteminfo .stars ion-icon {\n            font-size: 6vw; }\n          .web_view .container .image .iteminfo .price p {\n            font-size: 5vw; }\n      .web_view .container .productinfo {\n        display: flex;\n        flex-flow: column;\n        width: 90vw;\n        background: white;\n        z-index: 5;\n        position: absolute;\n        top: 50%;\n        border-top-right-radius: 10px;\n        border-top-left-radius: 10px;\n        box-shadow: 5px 5px 10px #b8b8b8; }\n        .web_view .container .productinfo .add {\n          position: absolute;\n          right: -5px;\n          top: -25px; }\n          .web_view .container .productinfo .add ion-fab-button {\n            background: maroon;\n            border-radius: 50%; }\n            .web_view .container .productinfo .add ion-fab-button ion-icon {\n              color: white; }\n        .web_view .container .productinfo .about {\n          margin: 5px;\n          font-size: 0.7em; }\n        .web_view .container .productinfo .sizes {\n          margin: 5px;\n          font-size: 0.7em; }\n          .web_view .container .productinfo .sizes ion-button {\n            font-size: 1em;\n            color: black;\n            margin: 0 !important;\n            padding: 0 !important;\n            border: 0.5px solid #adadad; }\n        .web_view .container .productinfo .colours {\n          margin: 5px;\n          font-size: 0.7em; }\n          .web_view .container .productinfo .colours ion-button {\n            margin: 2px;\n            width: 14vw;\n            font-size: 1em; }\n        .web_view .container .productinfo .quantity {\n          margin: 5px;\n          font-size: 0.7em;\n          align-items: baseline; }\n          .web_view .container .productinfo .quantity ion-button {\n            font-size: 1em;\n            width: 10vw;\n            color: black;\n            margin: 0 !important;\n            padding: 0 !important;\n            border: 0.5px solid black; }\n        .web_view .container .productinfo .shipping {\n          margin: 5px;\n          font-size: 0.7em; }\n        .web_view .container .productinfo .delivery {\n          position: relative;\n          bottom: 40px;\n          margin: 5px;\n          font-size: 0.7em; }\n        .web_view .container .productinfo .buttonz {\n          width: 100%;\n          text-align: right;\n          font-size: 1em; }\n          .web_view .container .productinfo .buttonz ion-button {\n            font-size: 1em;\n            color: white;\n            background: #010136;\n            border-top-left-radius: 20px;\n            border-bottom-left-radius: 20px;\n            font-family: \"Raleway\"; }\n            .web_view .container .productinfo .buttonz ion-button ion-icon {\n              font-size: 1em;\n              color: white; }\n              .web_view .container .productinfo .buttonz ion-button ion-icon #book {\n                color: maroon; } }\n  @media only screen and (min-width: 1330px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  ion-toolbar {\n    --background: rgb(255, 255, 255);\n    width: 100%;\n    font-family: \"Raleway\";\n    letter-spacing: 2px;\n    color: #838383; }\n    ion-toolbar #icon {\n      color: #838383; }\n    ion-toolbar #number {\n      font-size: 0.8em;\n      position: relative;\n      top: 8px;\n      right: 5px; }\n    ion-toolbar .icon1 {\n      margin: 0 20vw; }\n  .web_view {\n    min-width: 800px;\n    max-width: 1200px;\n    margin: auto;\n    display: flex;\n    flex-flow: row;\n    margin-top: 100px;\n    box-shadow: 5px 5px 10px #bebebe;\n    padding: 10px; }\n    .web_view .image {\n      width: 40vw;\n      height: 45vh; }\n      .web_view .image img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n    .web_view .buttonz {\n      width: 100%;\n      text-align: right;\n      display: flex;\n      flex-flow: row;\n      justify-content: space-evenly; }\n      .web_view .buttonz ion-button {\n        width: 20vw;\n        color: white;\n        background: #010136;\n        border-radius: 20px;\n        font-family: \"Raleway\"; }\n        .web_view .buttonz ion-button ion-icon {\n          color: white; }\n          .web_view .buttonz ion-button ion-icon #book {\n            color: maroon; }\n    .web_view .shipping {\n      margin: 5px;\n      font-size: 15px; }\n    .web_view .delivery {\n      position: relative;\n      bottom: 40px;\n      margin: 5px;\n      font-size: 15px; }\n    .web_view .add ion-fab-button {\n      background: maroon;\n      border-radius: 50%; }\n      .web_view .add ion-fab-button ion-icon {\n        color: white; }\n    .web_view .about {\n      margin: 5px; }\n    .web_view .sizes {\n      margin: 5px; }\n      .web_view .sizes ion-button {\n        color: black;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: 0.5px solid #adadad; }\n    .web_view .colours {\n      margin: 5px; }\n      .web_view .colours ion-button {\n        margin: 2px; }\n    .web_view .quantity {\n      margin: 5px;\n      align-items: baseline; }\n      .web_view .quantity ion-button {\n        color: black;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: 0.5px solid black; }\n    .web_view .productinfo {\n      margin: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFx2aWV3XFx2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFzQztFQUN0Qyx5QkFBb0M7RUFDcEMsWUFBWSxFQUFBO0VBSGQ7SUFLSSxZQUFZLEVBQUE7RUFJaEI7RUFDRSx5QkFBb0M7RUFDcEMsY0FBc0IsRUFBQTtFQUV4QjtFQUNFLHlCQUFhO0VBQ2Isa0JBQWtCLEVBQUE7RUFGcEI7SUFLSSxhQUFhLEVBQUE7RUFMakI7SUFTSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QiwrQkFBK0IsRUFBQTtFQWZuQztNQWlCTSxjQUFjLEVBQUE7RUFLcEI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0VBSHJCO0lBTUksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQVhyQjtNQWFNLFdBQVc7TUFDWCxZQUFZO01BQ1osb0JBQWlCO1NBQWpCLGlCQUFpQjtNQUNqQixZQUFZLEVBQUE7RUFoQmxCO01Bb0JNLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsU0FBUTtNQUNSLFNBQVM7TUFDVCxhQUFhO01BQ2IsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsOEJBQThCO01BQzlCLFVBQVU7TUFDVixXQUFXO01BQ1gsWUFBWTtNQUNaLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsaUJBQWlCLEVBQUE7RUFsQ3ZCO0lBa0RJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztJQUVYLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFFUiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLGdDQUEyQyxFQUFBO0VBN0QvQztNQWdFTSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFVBQVUsRUFBQTtFQWxFaEI7UUFvRVEsa0JBQWtCO1FBQ2xCLGtCQUFrQixFQUFBO0VBckUxQjtVQXVFVSxZQUFZLEVBQUE7RUF2RXRCO01BNkVNLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtFQTlFdEI7TUFrRk0sV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBbkZ0QjtRQXFGUSxjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLDJCQUFzQyxFQUFBO0VBMUY5QztNQWlHTSxXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUFsR3RCO1FBb0dRLFdBQVc7UUFDWCxXQUFXO1FBRVgsY0FBYyxFQUFBO0VBdkd0QjtNQThHTSxXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLHFCQUFxQixFQUFBO0VBaEgzQjtRQW1IUSxjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHlCQUF5QixFQUFBO0VBeEhqQztNQStITSxXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUFoSXRCO01Bb0lNLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBdkl0QjtNQTJJTSxXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLGNBQWMsRUFBQTtFQTdJcEI7UUErSVEsY0FBYztRQUNkLFlBQVk7UUFDWixtQkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLCtCQUErQjtRQUMvQixzQkFBc0IsRUFBQTtFQXBKOUI7VUF1SlUsY0FBYztVQUNkLFlBQVksRUFBQTtFQXhKdEI7WUEySlksYUFBYSxFQUFBO0VBUXpCO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVUsRUFBQTtJQUhaO01BTUksc0NBQXNDO01BQ3RDLHlCQUFvQztNQUNwQyxZQUFZLEVBQUE7TUFSaEI7UUFVTSxZQUFZLEVBQUE7TUFWbEI7UUFnQlUsV0FBVyxFQUFBO1FBaEJyQjtVQW9CWSxZQUFZO1VBQ1osb0JBQW9CO1VBQ3BCLHFCQUFxQjtVQUNyQiwyQkFBc0MsRUFBQTtJQXZCbEQ7TUErQkkseUJBQW9DO01BQ3BDLGNBQXNCLEVBQUE7SUFoQzFCO01BbUNJLHlCQUFhO01BQ2Isa0JBQWtCLEVBQUE7TUFwQ3RCO1FBdUNNLGFBQWEsRUFBQTtNQXZDbkI7UUEyQ00sWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsK0JBQStCLEVBQUE7UUFqRHJDO1VBbURRLGNBQWMsRUFBQTtJQW5EdEI7TUF5REksYUFBYTtNQUNiLGlCQUFpQjtNQUNqQixtQkFBbUIsRUFBQTtNQTNEdkI7UUE4RE0sa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUIsRUFBQTtRQW5FdkI7VUFxRVEsV0FBVztVQUNYLFlBQVk7VUFDWixvQkFBaUI7YUFBakIsaUJBQWlCO1VBQ2pCLFlBQVksRUFBQTtRQXhFcEI7VUE0RVEsVUFBVTtVQUNWLGtCQUFrQjtVQUNsQixRQUFRO1VBQ1IsU0FBUztVQUNULGFBQWE7VUFDYixjQUFjO1VBQ2Qsa0JBQWtCO1VBQ2xCLHFCQUFxQjtVQUNyQiw4QkFBOEI7VUFDOUIsVUFBVTtVQUNWLFlBQVk7VUFDWixZQUFZO1VBQ1osc0JBQXNCO1VBQ3RCLGlCQUFpQixFQUFBO1VBekZ6QjtZQTRGWSxjQUFjLEVBQUE7VUE1RjFCO1lBa0dZLGNBQWMsRUFBQTtNQWxHMUI7UUF5R00sYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixXQUFXO1FBRVgsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsUUFBUTtRQUVSLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsZ0NBQTJDLEVBQUE7UUFwSGpEO1VBdUhRLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsVUFBVSxFQUFBO1VBekhsQjtZQTJIVSxrQkFBa0I7WUFDbEIsa0JBQWtCLEVBQUE7WUE1SDVCO2NBOEhZLFlBQVksRUFBQTtRQTlIeEI7VUFvSVEsV0FBVztVQUNYLGdCQUFnQixFQUFBO1FBckl4QjtVQXlJUSxXQUFXO1VBQ1gsZ0JBQWdCLEVBQUE7VUExSXhCO1lBNElVLGNBQWM7WUFFZCxZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQiwyQkFBc0MsRUFBQTtRQWpKaEQ7VUF3SlEsV0FBVztVQUNYLGdCQUFnQixFQUFBO1VBekp4QjtZQTJKVSxXQUFXO1lBQ1gsV0FBVztZQUVYLGNBQWMsRUFBQTtRQTlKeEI7VUFxS1EsV0FBVztVQUNYLGdCQUFnQjtVQUNoQixxQkFBcUIsRUFBQTtVQXZLN0I7WUEwS1UsY0FBYztZQUNkLFdBQVc7WUFDWCxZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQix5QkFBeUIsRUFBQTtRQS9LbkM7VUFzTFEsV0FBVztVQUNYLGdCQUFnQixFQUFBO1FBdkx4QjtVQTJMUSxrQkFBa0I7VUFDbEIsWUFBWTtVQUNaLFdBQVc7VUFDWCxnQkFBZ0IsRUFBQTtRQTlMeEI7VUFrTVEsV0FBVztVQUNYLGlCQUFpQjtVQUNqQixjQUFjLEVBQUE7VUFwTXRCO1lBc01VLGNBQWM7WUFDZCxZQUFZO1lBQ1osbUJBQXlCO1lBQ3pCLDRCQUE0QjtZQUM1QiwrQkFBK0I7WUFDL0Isc0JBQXNCLEVBQUE7WUEzTWhDO2NBOE1ZLGNBQWM7Y0FDZCxZQUFZLEVBQUE7Y0EvTXhCO2dCQWtOYyxhQUFhLEVBQUEsRUFDZDtFQVNmO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQixFQUFBO0VBR3RCO0lBQ0UsZ0NBQWE7SUFDYixXQUFXO0lBSVgsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixjQUF5QixFQUFBO0lBUjNCO01BSUksY0FBeUIsRUFBQTtJQUo3QjtNQVVJLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFVBQVUsRUFBQTtJQWJkO01BaUJJLGNBQWMsRUFBQTtFQUlsQjtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdDQUEyQztJQUMzQyxhQUFhLEVBQUE7SUFSZjtNQVdJLFdBQVc7TUFDWCxZQUFZLEVBQUE7TUFaaEI7UUFlTSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFpQjtXQUFqQixpQkFBaUIsRUFBQTtJQWpCdkI7TUFzQkksV0FBVztNQUNYLGlCQUFpQjtNQUNqQixhQUFhO01BQ2IsY0FBYztNQUNkLDZCQUE2QixFQUFBO01BMUJqQztRQTRCTSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsc0JBQXNCLEVBQUE7UUFoQzVCO1VBa0NRLFlBQVksRUFBQTtVQWxDcEI7WUFvQ1UsYUFBYSxFQUFBO0lBcEN2QjtNQTJDSSxXQUFXO01BQ1gsZUFBZSxFQUFBO0lBNUNuQjtNQWdESSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFdBQVc7TUFDWCxlQUFlLEVBQUE7SUFuRG5CO01Bd0RNLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBQTtNQXpEeEI7UUEyRFEsWUFBWSxFQUFBO0lBM0RwQjtNQWlFSSxXQUFXLEVBQUE7SUFqRWY7TUFxRUksV0FBVyxFQUFBO01BckVmO1FBdUVNLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLDJCQUFzQyxFQUFBO0lBMUU1QztNQWlGSSxXQUFXLEVBQUE7TUFqRmY7UUFtRk0sV0FBVyxFQUFBO0lBbkZqQjtNQTBGSSxXQUFXO01BQ1gscUJBQXFCLEVBQUE7TUEzRnpCO1FBNkZNLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHlCQUF5QixFQUFBO0lBaEcvQjtNQXFHSSxZQUFZLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l6ZVN0eWxlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3NSwgMTc1LCAxNzUsIDAuNzEyKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTQ2LCAxNDYsIDE0Nik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbG9yU3R5bGUge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNDYsIDE0NiwgMTQ2KTtcclxuICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgI2ljb24ge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICB9XHJcblxyXG4gICNyYXRlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMzkpO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW1pbmZvIHtcclxuICAgICAgei1pbmRleDogNTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6Mzd2aDtcclxuICAgICAgbGVmdDogNXZ3O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAuc3RhcnMge1xyXG4gICAgICAgIC8vIGlvbi1pY29uIHtcclxuICAgICAgICAvLyAgIGZvbnQtc2l6ZTogNnZ3O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnByaWNlIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIC8vIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3RpbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgLy8gaGVpZ2h0OiA2MHZoO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcblxyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigxODQsIDE4NCwgMTg0KTtcclxuXHJcbiAgICAuYWRkIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogLTVweDtcclxuICAgICAgdG9wOiAtMjVweDtcclxuICAgICAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcm9vbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dCB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXplcyB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICB3aWR0aDogMTR2dztcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbG91cnMge1xyXG4gICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC8vIGJvdHRvbTogMjBweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIHdpZHRoOiAxNHZ3O1xyXG4gICAgICAgIC8vIGhlaWdodDogOHZ3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnF1YW50aXR5IHtcclxuICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAvLyBib3R0b206IDQwcHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICB3aWR0aDogMTB2dztcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2hpcHBpbmcge1xyXG4gICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC8vIGJvdHRvbTogNDBweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRlbGl2ZXJ5IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3R0b206IDQwcHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b256IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxLCAxLCA1NCk7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgI2Jvb2sge1xyXG4gICAgICAgICAgICBjb2xvcjogbWFyb29uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAud2ViX3ZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGhlaWdodDogMCU7XHJcblxyXG4gICAgLnNpemVTdHlsZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTc1LCAxNzUsIDE3NSwgMC43MTIpO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTQ2LCAxNDYsIDE0Nik7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGFpbmVye1xyXG4gICAgICAgIC5wcm9kdWN0aW5mb3tcclxuICAgICAgICAgIC5zaXplcyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2xvclN0eWxlIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE0NiwgMTQ2LCAxNDYpO1xyXG4gICAgICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG4gICAgfVxyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgICAjaWNvbiB7XHJcbiAgICAgICAgY29sb3I6IG1hcm9vbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgI3JhdGUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAzOSk7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAuaW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbWluZm8ge1xyXG4gICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTMlO1xyXG4gICAgICAgICAgbGVmdDogNXZ3O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgLnN0YXJzIHtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcm9kdWN0aW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogOTB2dztcclxuICAgICAgICAvLyBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcblxyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigxODQsIDE4NCwgMTg0KTtcclxuXHJcbiAgICAgICAgLmFkZCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogLTVweDtcclxuICAgICAgICAgIHRvcDogLTI1cHg7XHJcbiAgICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG1hcm9vbjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWJvdXQge1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpemVzIHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgLy8gd2lkdGg6IDE0dnc7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sb3VycyB7XHJcbiAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAvLyBib3R0b206IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNHZ3O1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDh2dztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucXVhbnRpdHkge1xyXG4gICAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgLy8gYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaGlwcGluZyB7XHJcbiAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAvLyBib3R0b206IDQwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVsaXZlcnkge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1dHRvbnoge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxLCAxLCA1NCk7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAgICNib29rIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtYXJvb247XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMzBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAjaWNvbiB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSk7XHJcbiAgICB9XHJcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMzEsIDEzMSwgMTMxKTtcclxuICAgICNudW1iZXIge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogOHB4O1xyXG4gICAgICByaWdodDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pY29uMSB7XHJcbiAgICAgIG1hcmdpbjogMCAyMHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndlYl92aWV3IHtcclxuICAgIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigxOTAsIDE5MCwgMTkwKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgIGhlaWdodDogNDV2aDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnoge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDIwdnc7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxLCAxLCA1NCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgI2Jvb2sge1xyXG4gICAgICAgICAgICBjb2xvcjogbWFyb29uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaGlwcGluZyB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlbGl2ZXJ5IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3R0b206IDQwcHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZCB7XHJcbiAgICAgIGlvbi1mYWItYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXJvb247XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2l6ZXMge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2xvdXJzIHtcclxuICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAvLyBib3R0b206IDIwcHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuXHJcbiAgICAgICAgLy8gaGVpZ2h0OiA4dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucXVhbnRpdHkge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucHJvZHVjdGluZm8ge1xyXG4gICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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
    function ViewPage(router, route, toastCtrl, popoverController, navCtrl, render) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.popoverController = popoverController;
        this.navCtrl = navCtrl;
        this.render = render;
        this.dbProduct = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Products');
        this.dbCart = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Cart');
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
        this.doc_id = this.route.snapshot.paramMap.get('view_id');
        this.route.queryParams.subscribe(function (params) {
            _this.doc_data = params["data"];
            _this.col = params["col"];
            _this.category = params["category"];
        });
    }
    ViewPage.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.doc_data);
        setTimeout(function () {
            //console.log(this.starRating);
            var starButtons = _this.starRating[0].children;
            for (var i = 0; i < starButtons.length; i++) {
                //console.log(this.starRating[0].children[i]);
                _this.render.setStyle(_this.starRating[0].children[i], 'outline', 'none');
            }
        }, 500);
        // console.log('my collection ', this.col, 'my data', this.doc_data, 'my docid');
        this.dbRate.where('product', '==', this.doc_id).onSnapshot(function (res) {
            // this.myRatings = [];
            if (res.size === 0) {
                _this.myRate = 0;
            }
            else {
                res.forEach(function (doc) {
                    _this.myRate = doc.data().rating / res.size;
                });
            }
            // console.log('my rate ', this.myRate);
        });
        //console.log('doc id ', this.doc_id, 'Collection ref ', this.col);
        // console.log(this.col);
        if (this.col === 'sales') {
            this.getSpecial();
        }
        else {
            this.getProduct();
        }
        // setTimeout(() => {
        //let data = [] ; 
        /* this.dbCart.where('customerUID', '==', this.customerUID).onSnapshot((snap) => {
          // console.log('My snapshot ', snap);
          snap.forEach((doc) => {
            this.myProduct = []
            this.data = doc.data().product
            console.log('My data ', this.data);
            this.data.forEach((item) => {
              if (item.product_id == this.doc_id) {
                this.myProduct.push({ info: doc.data(), id: doc.id })
              }
            });
            console.log('My products ', this.myProduct);
          })
        }) */
        // }, 1000);
    };
    ViewPage.prototype.onBoolChenged = function (c, i) {
        console.log('Boolean val ', c, 'index ', i);
    };
    ViewPage.prototype.getProduct = function () {
        var _this = this;
        this.dbProduct.doc(this.category).collection(this.col).doc(this.doc_id).onSnapshot(function (doc) {
            //console.log('My product ', doc.data());
            _this.unitProduct.push({ data: doc.data(), id: doc.id });
            // console.log('My product ', this.unitProduct);
        });
    };
    ViewPage.prototype.getSpecial = function () {
        var _this = this;
        this.dbSales.doc(this.doc_id).onSnapshot(function (res) {
            _this.mySale.push({ data: res.data(), id: res.id });
            // console.log('My product ', this.mySale);
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
    ViewPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    ViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.page.scss */ "./src/app/view/view.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ViewPage);
    return ViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=11.js.map