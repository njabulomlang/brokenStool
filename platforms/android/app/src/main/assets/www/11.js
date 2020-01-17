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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n      <ion-icon slot=\"start\" id=\"icon\" name=\"arrow-back\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button id=\"rate\" (click)=\"presentPopover($event)\">\r\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon> Rate This Product\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"font-family: 'Poiret One'; font-size: 20px; letter-spacing: 2px;\">DankieJesu</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div class=\"container\" *ngIf=\"col!=='sales'\">\r\n    <div class=\"image\" *ngFor=\"let prod of unitProduct\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\" >\r\n          </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p>{{prod.data.price  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of unitProduct\">\r\n      <div class=\"add\">\r\n        <ion-fab-button color=\"transparent\" (click)=\"toBusket()\">\r\n          <ion-icon name=\"basket\"></ion-icon>\r\n\r\n        </ion-fab-button>\r\n      </div>\r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\" >\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n       <!--  <ion-item *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\">\r\n          <ion-label>{{c}}</ion-label>\r\n          <ion-checkbox (ionChange)=\"onBoolChenged(c,i)\"></ion-checkbox>\r\n        </ion-item> -->\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n        <!-- <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: blue; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: green; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: red; border-radius: 6px;\">\r\n        </ion-button> -->\r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n        <ion-button (click)=\"addToCart(prod.id, prod.data)\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n            style=\"color: maroon; font-size: 8vw;position: relative; bottom: 13px;\"></ion-icon>\r\n          {{prod.data.price * quantity | currency:'R'  }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"container\" *ngIf=\"col==='sales'\">\r\n    <div class=\"image\" *ngFor=\"let prod of mySale\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\"  fontSize=\"7vw\">\r\n        </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p>{{prod.data.saleprice  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of mySale\">\r\n      <div class=\"add\">\r\n        <ion-fab-button color=\"transparent\" (click)=\"toBusket()\">\r\n          <ion-icon name=\"basket\"></ion-icon>\r\n\r\n        </ion-fab-button>\r\n      </div>\r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\">\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n        <!-- <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: blue; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: green; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: red; border-radius: 6px;\">\r\n        </ion-button> -->\r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n        <ion-button (click)=\"addSaleToCart(prod.id, prod.data)\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n            style=\"color: maroon; font-size: 8vw;position: relative; bottom: 13px;\"></ion-icon>\r\n          {{prod.data.saleprice * quantity | currency:'R'  }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"web_view\" *ngIf=\"col!=='sales'\">\r\n    <div class=\"image\" *ngFor=\"let prod of unitProduct\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\" >\r\n          </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p>{{prod.data.price  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of unitProduct\">\r\n      \r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\">\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n        <!-- <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: blue; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: green; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: red; border-radius: 6px;\">\r\n        </ion-button> -->\r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus()\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n           Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n        <div class=\"add\">\r\n          <ion-fab-button color=\"transparent\" (click)=\"toBusket()\">\r\n            <ion-icon name=\"basket\"></ion-icon>\r\n  \r\n          </ion-fab-button>\r\n        </div>\r\n        <ion-button (click)=\"addToCart(prod.id, prod.data)\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n            style=\"color: maroon; position: relative; bottom: 13px;\"></ion-icon>\r\n          {{prod.data.price * quantity | currency:'R'  }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"web_view\" *ngIf=\"col==='sales'\">\r\n    <div class=\"image\" *ngFor=\"let prod of mySale\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\" >\r\n        </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p style=\"text-decoration: line-through;\">R3000 </p>\r\n          <p>{{prod.data.saleprice  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of mySale\">\r\n   \r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\">\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n        <!-- <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: blue; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: green; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: red; border-radius: 6px;\">\r\n        </ion-button> -->\r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus(quantity)\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus(quantity)\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n\r\n        <div class=\"add\">\r\n          <ion-fab-button color=\"transparent\" (click)=\"toBusket()\" vertical=\"bottom\" >\r\n            <ion-icon name=\"basket\"></ion-icon>\r\n  \r\n          </ion-fab-button>\r\n        </div>\r\n\r\n        \r\n        <ion-button (click)=\"addSaleToCart(prod.id, prod.data)\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n            style=\"color: maroon; font-size: 30px; position: relative; bottom: 13px;\"></ion-icon>\r\n          {{prod.data.saleprice * quantity | currency:'R'  }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".sizeStyle {\n  background: rgba(175, 175, 175, 0.712);\n  border: 2px solid #929292;\n  color: white; }\n  .sizeStyle ion-button {\n    color: white; }\n  .colorStyle {\n  border: 2px solid #929292;\n  color: #636363; }\n  ion-toolbar {\n  --background: transparent;\n  position: absolute; }\n  ion-toolbar #icon {\n    color: maroon; }\n  ion-toolbar #rate {\n    color: white;\n    font-size: 0.7em;\n    background: #000027;\n    padding: 0 !important;\n    margin-right: -5px !important;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px; }\n  ion-toolbar #rate ion-icon {\n      font-size: 1em; }\n  .container {\n  display: flex;\n  flex-flow: column;\n  align-items: center; }\n  .container .image {\n    position: relative;\n    display: flex;\n    flex-flow: column;\n    width: 100vw;\n    height: 70vh;\n    background: black; }\n  .container .image img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      opacity: 0.8; }\n  .container .image .iteminfo {\n      z-index: 5;\n      position: absolute;\n      top: 53%;\n      left: 5vw;\n      display: flex;\n      flex-flow: row;\n      text-align: center;\n      align-items: flex-end;\n      justify-content: space-between;\n      width: 70%;\n      margin: 10px;\n      color: white;\n      font-family: \"Raleway\";\n      line-height: 10px; }\n  .container .image .iteminfo .stars ion-icon {\n        font-size: 6vw; }\n  .container .productinfo {\n    display: flex;\n    flex-flow: column;\n    width: 90vw;\n    background: white;\n    z-index: 5;\n    position: absolute;\n    top: 50%;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n    box-shadow: 5px 5px 10px #b8b8b8; }\n  .container .productinfo .add {\n      position: absolute;\n      right: -5px;\n      top: -25px; }\n  .container .productinfo .add ion-fab-button {\n        background: maroon;\n        border-radius: 50%; }\n  .container .productinfo .add ion-fab-button ion-icon {\n          color: white; }\n  .container .productinfo .about {\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .sizes {\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .sizes ion-button {\n        font-size: 1em;\n        width: 14vw;\n        color: black;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: 0.5px solid #adadad; }\n  .container .productinfo .colours {\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .colours ion-button {\n        margin: 2px;\n        width: 14vw;\n        font-size: 1em; }\n  .container .productinfo .quantity {\n      margin: 5px;\n      font-size: 0.7em;\n      align-items: baseline; }\n  .container .productinfo .quantity ion-button {\n        font-size: 1em;\n        width: 10vw;\n        color: black;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: 0.5px solid black; }\n  .container .productinfo .shipping {\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .delivery {\n      position: relative;\n      bottom: 40px;\n      margin: 5px;\n      font-size: 0.7em; }\n  .container .productinfo .buttonz {\n      width: 100%;\n      text-align: right;\n      font-size: 1em; }\n  .container .productinfo .buttonz ion-button {\n        font-size: 1em;\n        color: white;\n        background: #010136;\n        border-top-left-radius: 20px;\n        border-bottom-left-radius: 20px;\n        font-family: \"Raleway\"; }\n  .container .productinfo .buttonz ion-button ion-icon {\n          font-size: 1em;\n          color: white; }\n  .container .productinfo .buttonz ion-button ion-icon #book {\n            color: maroon; }\n  @media only screen and (max-width: 1024px) {\n  .web_view {\n    display: none;\n    width: 0%;\n    height: 0%; }\n    .web_view .sizeStyle {\n      background: rgba(175, 175, 175, 0.712);\n      border: 2px solid #929292;\n      color: white; }\n      .web_view .sizeStyle ion-button {\n        color: white; }\n    .web_view .colorStyle {\n      border: 2px solid #929292;\n      color: #636363; }\n    .web_view ion-toolbar {\n      --background: transparent;\n      position: absolute; }\n      .web_view ion-toolbar #icon {\n        color: maroon; }\n      .web_view ion-toolbar #rate {\n        color: white;\n        font-size: 0.7em;\n        background: #000027;\n        padding: 0 !important;\n        margin-right: -5px !important;\n        border-top-left-radius: 20px;\n        border-bottom-left-radius: 20px; }\n        .web_view ion-toolbar #rate ion-icon {\n          font-size: 1em; }\n    .web_view .container {\n      display: flex;\n      flex-flow: column;\n      align-items: center; }\n      .web_view .container .image {\n        position: relative;\n        display: flex;\n        flex-flow: column;\n        width: 100vw;\n        height: 70vh;\n        background: black; }\n        .web_view .container .image img {\n          width: 100%;\n          height: 100%;\n          -o-object-fit: cover;\n             object-fit: cover;\n          opacity: 0.8; }\n        .web_view .container .image .iteminfo {\n          z-index: 5;\n          position: absolute;\n          top: 53%;\n          left: 5vw;\n          display: flex;\n          flex-flow: row;\n          text-align: center;\n          align-items: flex-end;\n          justify-content: space-between;\n          width: 70%;\n          margin: 10px;\n          color: white;\n          font-family: \"Raleway\";\n          line-height: 10px; }\n          .web_view .container .image .iteminfo .stars ion-icon {\n            font-size: 6vw; }\n          .web_view .container .image .iteminfo .price p {\n            font-size: 5vw; }\n      .web_view .container .productinfo {\n        display: flex;\n        flex-flow: column;\n        width: 90vw;\n        background: white;\n        z-index: 5;\n        position: absolute;\n        top: 50%;\n        border-top-right-radius: 10px;\n        border-top-left-radius: 10px;\n        box-shadow: 5px 5px 10px #b8b8b8; }\n        .web_view .container .productinfo .add {\n          position: absolute;\n          right: -5px;\n          top: -25px; }\n          .web_view .container .productinfo .add ion-fab-button {\n            background: maroon;\n            border-radius: 50%; }\n            .web_view .container .productinfo .add ion-fab-button ion-icon {\n              color: white; }\n        .web_view .container .productinfo .about {\n          margin: 5px;\n          font-size: 0.7em; }\n        .web_view .container .productinfo .sizes {\n          margin: 5px;\n          font-size: 0.7em; }\n          .web_view .container .productinfo .sizes ion-button {\n            font-size: 1em;\n            color: black;\n            margin: 0 !important;\n            padding: 0 !important;\n            border: 0.5px solid #adadad; }\n        .web_view .container .productinfo .colours {\n          margin: 5px;\n          font-size: 0.7em; }\n          .web_view .container .productinfo .colours ion-button {\n            margin: 2px;\n            width: 14vw;\n            font-size: 1em; }\n        .web_view .container .productinfo .quantity {\n          margin: 5px;\n          font-size: 0.7em;\n          align-items: baseline; }\n          .web_view .container .productinfo .quantity ion-button {\n            font-size: 1em;\n            width: 10vw;\n            color: black;\n            margin: 0 !important;\n            padding: 0 !important;\n            border: 0.5px solid black; }\n        .web_view .container .productinfo .shipping {\n          margin: 5px;\n          font-size: 0.7em; }\n        .web_view .container .productinfo .delivery {\n          position: relative;\n          bottom: 40px;\n          margin: 5px;\n          font-size: 0.7em; }\n        .web_view .container .productinfo .buttonz {\n          width: 100%;\n          text-align: right;\n          font-size: 1em; }\n          .web_view .container .productinfo .buttonz ion-button {\n            font-size: 1em;\n            color: white;\n            background: #010136;\n            border-top-left-radius: 20px;\n            border-bottom-left-radius: 20px;\n            font-family: \"Raleway\"; }\n            .web_view .container .productinfo .buttonz ion-button ion-icon {\n              font-size: 1em;\n              color: white; }\n              .web_view .container .productinfo .buttonz ion-button ion-icon #book {\n                color: maroon; } }\n  @media only screen and (min-width: 1330px) {\n  .container {\n    display: none;\n    width: 0 !important;\n    height: 0 !important; }\n  ion-toolbar {\n    --background: rgb(255, 255, 255);\n    width: 100%;\n    font-family: \"Raleway\";\n    letter-spacing: 2px;\n    color: #838383; }\n    ion-toolbar #icon {\n      color: #838383; }\n    ion-toolbar #number {\n      font-size: 0.8em;\n      position: relative;\n      top: 8px;\n      right: 5px; }\n    ion-toolbar .icon1 {\n      margin: 0 20vw; }\n  .web_view {\n    min-width: 800px;\n    max-width: 1200px;\n    margin: auto;\n    display: flex;\n    flex-flow: row;\n    margin-top: 100px;\n    box-shadow: 5px 5px 10px #bebebe;\n    padding: 10px; }\n    .web_view .image {\n      width: 40vw;\n      height: 45vh; }\n      .web_view .image img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n    .web_view .buttonz {\n      width: 100%;\n      text-align: right;\n      display: flex;\n      flex-flow: row;\n      justify-content: space-evenly; }\n      .web_view .buttonz ion-button {\n        width: 20vw;\n        color: white;\n        background: #010136;\n        border-radius: 20px;\n        font-family: \"Raleway\"; }\n        .web_view .buttonz ion-button ion-icon {\n          color: white; }\n          .web_view .buttonz ion-button ion-icon #book {\n            color: maroon; }\n    .web_view .shipping {\n      margin: 5px;\n      font-size: 15px; }\n    .web_view .delivery {\n      position: relative;\n      bottom: 40px;\n      margin: 5px;\n      font-size: 15px; }\n    .web_view .add ion-fab-button {\n      background: maroon;\n      border-radius: 50%; }\n      .web_view .add ion-fab-button ion-icon {\n        color: white; }\n    .web_view .about {\n      margin: 5px; }\n    .web_view .sizes {\n      margin: 5px; }\n      .web_view .sizes ion-button {\n        color: black;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: 0.5px solid #adadad; }\n    .web_view .colours {\n      margin: 5px; }\n      .web_view .colours ion-button {\n        margin: 2px; }\n    .web_view .quantity {\n      margin: 5px;\n      align-items: baseline; }\n      .web_view .quantity ion-button {\n        color: black;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: 0.5px solid black; }\n    .web_view .productinfo {\n      margin: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFx2aWV3XFx2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFzQztFQUN0Qyx5QkFBb0M7RUFDcEMsWUFBWSxFQUFBO0VBSGQ7SUFLSSxZQUFZLEVBQUE7RUFJaEI7RUFDRSx5QkFBb0M7RUFDcEMsY0FBc0IsRUFBQTtFQUV4QjtFQUNFLHlCQUFhO0VBQ2Isa0JBQWtCLEVBQUE7RUFGcEI7SUFLSSxhQUFhLEVBQUE7RUFMakI7SUFTSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QiwrQkFBK0IsRUFBQTtFQWZuQztNQWlCTSxjQUFjLEVBQUE7RUFLcEI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0VBSHJCO0lBTUksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQVhyQjtNQWFNLFdBQVc7TUFDWCxZQUFZO01BQ1osb0JBQWlCO1NBQWpCLGlCQUFpQjtNQUNqQixZQUFZLEVBQUE7RUFoQmxCO01Bb0JNLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFNBQVM7TUFDVCxhQUFhO01BQ2IsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsOEJBQThCO01BQzlCLFVBQVU7TUFDVixZQUFZO01BQ1osWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixpQkFBaUIsRUFBQTtFQWpDdkI7UUFvQ1UsY0FBYyxFQUFBO0VBcEN4QjtJQWlESSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFdBQVc7SUFFWCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBRVIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixnQ0FBMkMsRUFBQTtFQTVEL0M7TUErRE0sa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxVQUFVLEVBQUE7RUFqRWhCO1FBbUVRLGtCQUFrQjtRQUNsQixrQkFBa0IsRUFBQTtFQXBFMUI7VUFzRVUsWUFBWSxFQUFBO0VBdEV0QjtNQTRFTSxXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUE3RXRCO01BaUZNLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtFQWxGdEI7UUFvRlEsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiwyQkFBc0MsRUFBQTtFQXpGOUM7TUFnR00sV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBakd0QjtRQW1HUSxXQUFXO1FBQ1gsV0FBVztRQUVYLGNBQWMsRUFBQTtFQXRHdEI7TUE2R00sV0FBVztNQUNYLGdCQUFnQjtNQUNoQixxQkFBcUIsRUFBQTtFQS9HM0I7UUFrSFEsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQix5QkFBeUIsRUFBQTtFQXZIakM7TUE4SE0sV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBL0h0QjtNQW1JTSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtFQXRJdEI7TUEwSU0sV0FBVztNQUNYLGlCQUFpQjtNQUNqQixjQUFjLEVBQUE7RUE1SXBCO1FBOElRLGNBQWM7UUFDZCxZQUFZO1FBQ1osbUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFDL0Isc0JBQXNCLEVBQUE7RUFuSjlCO1VBc0pVLGNBQWM7VUFDZCxZQUFZLEVBQUE7RUF2SnRCO1lBMEpZLGFBQWEsRUFBQTtFQVF6QjtFQUNFO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVLEVBQUE7SUFIWjtNQU1JLHNDQUFzQztNQUN0Qyx5QkFBb0M7TUFDcEMsWUFBWSxFQUFBO01BUmhCO1FBVU0sWUFBWSxFQUFBO0lBVmxCO01BZUkseUJBQW9DO01BQ3BDLGNBQXNCLEVBQUE7SUFoQjFCO01BbUJJLHlCQUFhO01BQ2Isa0JBQWtCLEVBQUE7TUFwQnRCO1FBdUJNLGFBQWEsRUFBQTtNQXZCbkI7UUEyQk0sWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsK0JBQStCLEVBQUE7UUFqQ3JDO1VBbUNRLGNBQWMsRUFBQTtJQW5DdEI7TUF5Q0ksYUFBYTtNQUNiLGlCQUFpQjtNQUNqQixtQkFBbUIsRUFBQTtNQTNDdkI7UUE4Q00sa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUIsRUFBQTtRQW5EdkI7VUFxRFEsV0FBVztVQUNYLFlBQVk7VUFDWixvQkFBaUI7YUFBakIsaUJBQWlCO1VBQ2pCLFlBQVksRUFBQTtRQXhEcEI7VUE0RFEsVUFBVTtVQUNWLGtCQUFrQjtVQUNsQixRQUFRO1VBQ1IsU0FBUztVQUNULGFBQWE7VUFDYixjQUFjO1VBQ2Qsa0JBQWtCO1VBQ2xCLHFCQUFxQjtVQUNyQiw4QkFBOEI7VUFDOUIsVUFBVTtVQUNWLFlBQVk7VUFDWixZQUFZO1VBQ1osc0JBQXNCO1VBQ3RCLGlCQUFpQixFQUFBO1VBekV6QjtZQTRFWSxjQUFjLEVBQUE7VUE1RTFCO1lBa0ZZLGNBQWMsRUFBQTtNQWxGMUI7UUF5Rk0sYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixXQUFXO1FBRVgsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsUUFBUTtRQUVSLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsZ0NBQTJDLEVBQUE7UUFwR2pEO1VBdUdRLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsVUFBVSxFQUFBO1VBekdsQjtZQTJHVSxrQkFBa0I7WUFDbEIsa0JBQWtCLEVBQUE7WUE1RzVCO2NBOEdZLFlBQVksRUFBQTtRQTlHeEI7VUFvSFEsV0FBVztVQUNYLGdCQUFnQixFQUFBO1FBckh4QjtVQXlIUSxXQUFXO1VBQ1gsZ0JBQWdCLEVBQUE7VUExSHhCO1lBNEhVLGNBQWM7WUFFZCxZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQiwyQkFBc0MsRUFBQTtRQWpJaEQ7VUF3SVEsV0FBVztVQUNYLGdCQUFnQixFQUFBO1VBekl4QjtZQTJJVSxXQUFXO1lBQ1gsV0FBVztZQUVYLGNBQWMsRUFBQTtRQTlJeEI7VUFxSlEsV0FBVztVQUNYLGdCQUFnQjtVQUNoQixxQkFBcUIsRUFBQTtVQXZKN0I7WUEwSlUsY0FBYztZQUNkLFdBQVc7WUFDWCxZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQix5QkFBeUIsRUFBQTtRQS9KbkM7VUFzS1EsV0FBVztVQUNYLGdCQUFnQixFQUFBO1FBdkt4QjtVQTJLUSxrQkFBa0I7VUFDbEIsWUFBWTtVQUNaLFdBQVc7VUFDWCxnQkFBZ0IsRUFBQTtRQTlLeEI7VUFrTFEsV0FBVztVQUNYLGlCQUFpQjtVQUNqQixjQUFjLEVBQUE7VUFwTHRCO1lBc0xVLGNBQWM7WUFDZCxZQUFZO1lBQ1osbUJBQXlCO1lBQ3pCLDRCQUE0QjtZQUM1QiwrQkFBK0I7WUFDL0Isc0JBQXNCLEVBQUE7WUEzTGhDO2NBOExZLGNBQWM7Y0FDZCxZQUFZLEVBQUE7Y0EvTHhCO2dCQWtNYyxhQUFhLEVBQUEsRUFDZDtFQVNmO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQixFQUFBO0VBR3RCO0lBQ0UsZ0NBQWE7SUFDYixXQUFXO0lBSVgsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixjQUF5QixFQUFBO0lBUjNCO01BSUksY0FBeUIsRUFBQTtJQUo3QjtNQVVJLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFVBQVUsRUFBQTtJQWJkO01BaUJJLGNBQWMsRUFBQTtFQUlsQjtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdDQUEyQztJQUMzQyxhQUFhLEVBQUE7SUFSZjtNQVdJLFdBQVc7TUFDWCxZQUFZLEVBQUE7TUFaaEI7UUFlTSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFpQjtXQUFqQixpQkFBaUIsRUFBQTtJQWpCdkI7TUFzQkksV0FBVztNQUNYLGlCQUFpQjtNQUNqQixhQUFhO01BQ2IsY0FBYztNQUNkLDZCQUE2QixFQUFBO01BMUJqQztRQTRCTSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsc0JBQXNCLEVBQUE7UUFoQzVCO1VBa0NRLFlBQVksRUFBQTtVQWxDcEI7WUFvQ1UsYUFBYSxFQUFBO0lBcEN2QjtNQTJDSSxXQUFXO01BQ1gsZUFBZSxFQUFBO0lBNUNuQjtNQWdESSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFdBQVc7TUFDWCxlQUFlLEVBQUE7SUFuRG5CO01Bd0RNLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBQTtNQXpEeEI7UUEyRFEsWUFBWSxFQUFBO0lBM0RwQjtNQWlFSSxXQUFXLEVBQUE7SUFqRWY7TUFxRUksV0FBVyxFQUFBO01BckVmO1FBdUVNLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLDJCQUFzQyxFQUFBO0lBMUU1QztNQWlGSSxXQUFXLEVBQUE7TUFqRmY7UUFtRk0sV0FBVyxFQUFBO0lBbkZqQjtNQTBGSSxXQUFXO01BQ1gscUJBQXFCLEVBQUE7TUEzRnpCO1FBNkZNLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHlCQUF5QixFQUFBO0lBaEcvQjtNQXFHSSxZQUFZLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l6ZVN0eWxlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3NSwgMTc1LCAxNzUsIDAuNzEyKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTQ2LCAxNDYsIDE0Nik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbG9yU3R5bGUge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNDYsIDE0NiwgMTQ2KTtcclxuICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgI2ljb24ge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICB9XHJcblxyXG4gICNyYXRlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMzkpO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW1pbmZvIHtcclxuICAgICAgei1pbmRleDogNTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUzJTtcclxuICAgICAgbGVmdDogNXZ3O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgIC5zdGFycyB7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJpY2Uge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgLy8gZm9udC1zaXplOiA1dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdGluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICAvLyBoZWlnaHQ6IDYwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuXHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDE4NCwgMTg0LCAxODQpO1xyXG5cclxuICAgIC5hZGQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICB0b3A6IC0yNXB4O1xyXG4gICAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFyb29uO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0IHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnNpemVzIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIHdpZHRoOiAxNHZ3O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sb3VycyB7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gYm90dG9tOiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgd2lkdGg6IDE0dnc7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiA4dnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucXVhbnRpdHkge1xyXG4gICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC8vIGJvdHRvbTogNDBweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaGlwcGluZyB7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gYm90dG9tOiA0MHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVsaXZlcnkge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvdHRvbTogNDBweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnoge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDEsIDEsIDU0KTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAjYm9vayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBtYXJvb247XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC53ZWJfdmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuXHJcbiAgICAuc2l6ZVN0eWxlIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxNzUsIDE3NSwgMTc1LCAwLjcxMik7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNDYsIDE0NiwgMTQ2KTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sb3JTdHlsZSB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNDYsIDE0NiwgMTQ2KTtcclxuICAgICAgY29sb3I6IHJnYig5OSwgOTksIDk5KTtcclxuICAgIH1cclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgICAgI2ljb24ge1xyXG4gICAgICAgIGNvbG9yOiBtYXJvb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNyYXRlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMzkpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC01cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmltYWdlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLml0ZW1pbmZvIHtcclxuICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDUzJTtcclxuICAgICAgICAgIGxlZnQ6IDV2dztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICAgIC5zdGFycyB7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDZ2dztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJvZHVjdGluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG5cclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTg0LCAxODQsIDE4NCk7XHJcblxyXG4gICAgICAgIC5hZGQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IC01cHg7XHJcbiAgICAgICAgICB0b3A6IC0yNXB4O1xyXG4gICAgICAgICAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXJvb247XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFib3V0IHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplcyB7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxNHZ3O1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbG91cnMge1xyXG4gICAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgLy8gYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTR2dztcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiA4dnc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnF1YW50aXR5IHtcclxuICAgICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIC8vIGJvdHRvbTogNDBweDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2hpcHBpbmcge1xyXG4gICAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgLy8gYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlbGl2ZXJ5IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJvdHRvbTogNDBweDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b256IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMSwgMSwgNTQpO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAjYm9vayB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbWFyb29uO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzMwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgI2ljb24ge1xyXG4gICAgICBjb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xyXG4gICAgfVxyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSk7XHJcbiAgICAjbnVtYmVyIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDhweDtcclxuICAgICAgcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbjEge1xyXG4gICAgICBtYXJnaW46IDAgMjB2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53ZWJfdmlldyB7XHJcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICBoZWlnaHQ6IDQ1dmg7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b256IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMSwgMSwgNTQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICNib29rIHtcclxuICAgICAgICAgICAgY29sb3I6IG1hcm9vbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2hpcHBpbmcge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWxpdmVyeSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm90dG9tOiA0MHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGQge1xyXG4gICAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFyb29uO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0IHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpemVzIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sb3VycyB7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gYm90dG9tOiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAycHg7XHJcblxyXG4gICAgICAgIC8vIGhlaWdodDogOHZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnF1YW50aXR5IHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3RpbmZvIHtcclxuICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

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