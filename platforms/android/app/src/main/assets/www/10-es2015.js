(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js ***!
  \*****************************************************************************************/
/*! exports provided: StarRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRating", function() { return StarRating; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ionic4-star-rating-component */ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <div class=\"container\">\r\n        <pre>\r\n        </pre>\r\n        <div class=\"text\">\r\n            <p>RATE THIS PRODUCT</p>\r\n        </div>\r\n        <div class=\"ratings\">\r\n            <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n                defaultColor=\"#aaaaaa\" readonly=\"{{rateNow}}\" rating=\"{{myRate}}\"  fontSize=\"7vw\"\r\n                (ratingChanged)=\"logRatingChange($event)\">\r\n            </ionic4-star-rating>\r\n\r\n            <!-- <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"false\" rating=\"2\" fontSize=\"7vw\"\r\n            (ratingChanged)=\"logRatingChange($event)\">\r\n        </ionic4-star-rating> -->\r\n        </div>\r\n<br>\r\n        <div class=\"buttonz\">\r\n            <ion-button (click)=\"dismissPopover()\" color=\"transparent\">\r\n                DONE\r\n            </ion-button>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n      <ion-icon slot=\"start\" id=\"icon\" name=\"arrow-back\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button id=\"rate\" (click)=\"presentPopover($event)\">\r\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon> Rate This Product\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div class=\"container\" *ngIf=\"col!=='sales'\">\r\n    <div class=\"image\" *ngFor=\"let prod of unitProduct\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\" fontSize=\"7vw\">\r\n          </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p>{{prod.data.price  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of unitProduct\">\r\n      <div class=\"add\">\r\n        <ion-fab-button color=\"transparent\" (click)=\"toBusket()\">\r\n          <ion-icon name=\"basket\"></ion-icon>\r\n\r\n        </ion-fab-button>\r\n      </div>\r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\">\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n        <!-- <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: blue; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: green; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: red; border-radius: 6px;\">\r\n        </ion-button> -->\r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus(quantity)\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus(quantity)\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n        <ion-button (click)=\"addToCart(prod.id, prod.data)\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n            style=\"color: maroon; font-size: 8vw;position: relative; bottom: 13px;\"></ion-icon>\r\n          {{prod.data.price * quantity | currency:'R'  }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"container\" *ngIf=\"col==='sales'\">\r\n    <div class=\"image\" *ngFor=\"let prod of mySale\">\r\n      <img src=\"{{prod.data.pictureLink}}\">\r\n\r\n      <div class=\"iteminfo\">\r\n        <div class=\"itemname\">\r\n          <ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ff0000\"\r\n            defaultColor=\"#aaaaaa\" readonly=\"true\" rating=\"{{myRate}}\"  fontSize=\"7vw\">\r\n        </ionic4-star-rating>\r\n\r\n          <div class=\"appname\" style=\"line-height: 20px; font-weight: normal;\">\r\n            <p><b> {{prod.data.name}}</b> <br> By Dankie Jesu</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"price\">\r\n          <p>{{prod.data.saleprice  | currency:'R' }}</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"productinfo\" *ngFor=\"let prod of mySale\">\r\n      <div class=\"add\">\r\n        <ion-fab-button color=\"transparent\" (click)=\"toBusket()\">\r\n          <ion-icon name=\"basket\"></ion-icon>\r\n\r\n        </ion-fab-button>\r\n      </div>\r\n      <div class=\"about\">\r\n        <p><b>About Product</b></p>\r\n        <p>{{prod.data.description}}</p>\r\n      </div>\r\n      <div class=\"sizes\">\r\n        <p>Available sizes</p>\r\n\r\n        <ion-button *ngFor=\"let size of prod.data.size;let i=index\" (click)=\"sizeChosen(size, i)\" color=\"transparent\"\r\n          [ngClass]=\"{'sizeStyle':sizeIndex==i}\">\r\n          {{size}}\r\n        </ion-button>\r\n\r\n      </div>\r\n      <div class=\"colours\">\r\n        <p>Colours</p>\r\n        <ion-button *ngFor=\"let c of prod.data.color; let i=index\" style=\"background: whitesmoke; border-radius: 6px;\"\r\n          (click)=\"colorChosen(c, i)\" color=\"transparent\" [ngClass]=\"{'colorStyle':colorIndex==i}\">\r\n          <p style=\"color: rgb(146, 146, 146);\">{{c}}</p>\r\n        </ion-button>\r\n        <!-- <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: blue; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: green; border-radius: 6px;\">\r\n        </ion-button>\r\n        <ion-button (click)=\"onClick()\" color=\"transparent\" style=\"background: red; border-radius: 6px;\">\r\n        </ion-button> -->\r\n      </div>\r\n      <div class=\"quantity\">\r\n        <p>Quantity</p>\r\n        <ion-button (click)=\"minus(quantity)\" color=\"transparent\" style=\"background: rgb(212, 212, 212);\r\n         color: maroon;\r\n         border-top-left-radius: 7px;\r\n         border-bottom-left-radius: 7px;\">\r\n          <ion-icon name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"transparent\" style=\"background: rgb(212, 250, 255);\">\r\n          {{quantity}}\r\n        </ion-button>\r\n        <ion-button (click)=\"plus(quantity)\" color=\"transparent\" style=\"background: rgb(212, 212, 212); \r\n        color: maroon;\r\n         border-top-right-radius: 7px;\r\n         border-bottom-right-radius: 7px;\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"shipping\">\r\n        <p><b>Shipping Information</b></p>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\r\n          industry's standard dummy text ever since the 1500s, when an unknown</p>\r\n      </div>\r\n      <br>\r\n      <div class=\"delivery\">\r\n        <p><b>Delivery Information</b></p>\r\n        <p>Items are available for pick up at the following Address</p>\r\n        <p>123 Orlando East<br>\r\n          SOWETO<br>\r\n          1804\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"buttonz\">\r\n        <ion-button (click)=\"addSaleToCart(prod.id, prod.data)\" color=\"transparent\">\r\n          <ion-icon slot=\"start\" name=\"basket\"></ion-icon> Add to basket <ion-icon name=\"bookmark\" id=\"book\"\r\n            style=\"color: maroon; font-size: 8vw;position: relative; bottom: 13px;\"></ion-icon>\r\n          {{prod.data.saleprice * quantity | currency:'R'  }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<!-- <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"openCart()\" #cart>\r\n      <div class=\"cart-length\">{{ cartItemCount | async }}</div>\r\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-list>\r\n    <ion-card *ngFor=\"let p of products\">\r\n      <ion-card-header>\r\n        <ion-card-title>{{ p.name }}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"8\">\r\n            <ion-label color=\"secondary\">\r\n              <b>{{ p.price | currency:'R' }}</b>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\r\n              <ion-icon name=\"cart\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\">\r\n              <ion-icon name=\"heart\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-list> -->\r\n\r\n<!--  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n          <ion-fab-button (click)=\"openCart()\" #cart>\r\n            <div class=\"cart-length\">{{ cartItemCount | async }}</div>\r\n            <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\r\n          </ion-fab-button>\r\n        </ion-fab> -->");

/***/ }),

/***/ "./src/app/popover/popover.component.scss":
/*!************************************************!*\
  !*** ./src/app/popover/popover.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  height: 25vh;\n}\n.container .text p {\n  font-family: \"Poppins\";\n  font-size: 3vw;\n  font-weight: bold;\n  letter-spacing: 2px;\n}\n.container .buttonz ion-button {\n  background: #000024;\n  width: 50vw;\n  font-size: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wb3Zlci9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFxwb3BvdmVyXFxwb3BvdmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtFQUVBLFlBQUE7QUNERjtBRElJO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FET0k7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTE4iLCJmaWxlIjoic3JjL2FwcC9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIC8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGhlaWdodDogMjV2aDtcclxuXHJcbiAgLnRleHQge1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbnoge1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAzNik7XHJcbiAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICBmb250LXNpemU6IDN2dztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDI1dmg7XG59XG4uY29udGFpbmVyIC50ZXh0IHAge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5jb250YWluZXIgLmJ1dHRvbnogaW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMjQ7XG4gIHdpZHRoOiA1MHZ3O1xuICBmb250LXNpemU6IDN2dztcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




let PopoverComponent = class PopoverComponent {
    constructor(navParams, popCtrl, render) {
        this.navParams = navParams;
        this.popCtrl = popCtrl;
        this.render = render;
        this.dbRate = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('productRate');
        // myRatings = [];
        this.myRate = 0;
        this.starRating = document.getElementsByClassName('ionic4-star-rating');
    }
    ngOnInit() {
        setTimeout(() => {
            let starButtons = this.starRating[1].children;
            for (let i = 0; i < starButtons.length; i++) {
                this.render.setStyle(this.starRating[1].children[i], 'outline', 'none');
            }
        }, 500);
        this.dbRate.where('product', '==', this.navParams.get('doc')).onSnapshot((res) => {
            // this.myRatings = [];
            res.forEach((doc) => {
                this.myRate = doc.data().rating / res.size;
            });
            if (res.size == 0) {
                this.rateNow = false;
            }
            else {
                this.rateNow = true;
            }
            // console.log('Read only ',this.rateNow);
            /*  res.forEach((doc) => {
               this.myRatings.push(doc.data().rating)
             }) */
        });
        // console.log('Collection ', this.navParams.get('col'), 'Doc ', this.navParams.get('doc'));
    }
    logRatingChange(rating) {
        let total = 0;
        let arr = [5, 3, 5, 1, 4];
        let avg = 0;
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
        this.dbRate.add({ rating: rating, uid: firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid, product: this.navParams.get('doc'), category: this.navParams.get('col') }).then((res) => {
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
    }
    dismissPopover() {
        this.popCtrl.dismiss();
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
PopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popover.component.scss */ "./src/app/popover/popover.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], PopoverComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.page */ "./src/app/view/view.page.ts");




const routes = [
    {
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_3__["ViewPage"]
    }
];
let ViewPageRoutingModule = class ViewPageRoutingModule {
};
ViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-routing.module */ "./src/app/view/view-routing.module.ts");
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view.page */ "./src/app/view/view.page.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/popover/popover.component.ts");
/* harmony import */ var ionic4_star_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic4-star-rating */ "./node_modules/ionic4-star-rating/dist/index.js");









let ViewPageModule = class ViewPageModule {
};
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



/***/ }),

/***/ "./src/app/view/view.page.scss":
/*!*************************************!*\
  !*** ./src/app/view/view.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sizeStyle {\n  background: rgba(175, 175, 175, 0.712);\n  border: 2px solid #929292;\n  color: white;\n}\n.sizeStyle ion-button {\n  color: white;\n}\n.colorStyle {\n  border: 2px solid #929292;\n  color: #636363;\n}\nion-toolbar {\n  --background: transparent;\n  position: absolute;\n}\nion-toolbar #icon {\n  color: maroon;\n}\nion-toolbar #rate {\n  color: white;\n  font-size: 0.7em;\n  background: #000027;\n  padding: 0 !important;\n  margin-right: -5px !important;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\nion-toolbar #rate ion-icon {\n  font-size: 1em;\n}\n.container {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n.container .image {\n  position: relative;\n  display: flex;\n  flex-flow: column;\n  width: 100vw;\n  height: 70vh;\n  background: black;\n}\n.container .image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0.8;\n}\n.container .image .iteminfo {\n  z-index: 5;\n  position: absolute;\n  top: 53%;\n  left: 5vw;\n  display: flex;\n  flex-flow: row;\n  text-align: center;\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 70%;\n  margin: 10px;\n  color: white;\n  font-family: \"Raleway\";\n  line-height: 10px;\n}\n.container .image .iteminfo .stars ion-icon {\n  font-size: 6vw;\n}\n.container .image .iteminfo .price p {\n  font-size: 5vw;\n}\n.container .productinfo {\n  display: flex;\n  flex-flow: column;\n  width: 90vw;\n  background: white;\n  z-index: 5;\n  position: absolute;\n  top: 50%;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  box-shadow: 5px 5px 10px #b8b8b8;\n}\n.container .productinfo .add {\n  position: absolute;\n  right: -5px;\n  top: -25px;\n}\n.container .productinfo .add ion-fab-button {\n  background: maroon;\n  border-radius: 50%;\n}\n.container .productinfo .add ion-fab-button ion-icon {\n  color: white;\n}\n.container .productinfo .about {\n  margin: 5px;\n  font-size: 0.7em;\n}\n.container .productinfo .sizes {\n  margin: 5px;\n  font-size: 0.7em;\n}\n.container .productinfo .sizes ion-button {\n  font-size: 1em;\n  width: 14vw;\n  color: black;\n  margin: 0 !important;\n  padding: 0 !important;\n  border: 0.5px solid #adadad;\n}\n.container .productinfo .colours {\n  margin: 5px;\n  font-size: 0.7em;\n}\n.container .productinfo .colours ion-button {\n  margin: 2px;\n  width: 14vw;\n  font-size: 1em;\n}\n.container .productinfo .quantity {\n  margin: 5px;\n  font-size: 0.7em;\n  align-items: baseline;\n}\n.container .productinfo .quantity ion-button {\n  font-size: 1em;\n  width: 10vw;\n  color: black;\n  margin: 0 !important;\n  padding: 0 !important;\n  border: 0.5px solid black;\n}\n.container .productinfo .shipping {\n  margin: 5px;\n  font-size: 0.7em;\n}\n.container .productinfo .delivery {\n  position: relative;\n  bottom: 40px;\n  margin: 5px;\n  font-size: 0.7em;\n}\n.container .productinfo .buttonz {\n  width: 100%;\n  text-align: right;\n  font-size: 1em;\n}\n.container .productinfo .buttonz ion-button {\n  font-size: 1em;\n  color: white;\n  background: #010136;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  font-family: \"Raleway\";\n}\n.container .productinfo .buttonz ion-button ion-icon {\n  font-size: 1em;\n  color: white;\n}\n.container .productinfo .buttonz ion-button ion-icon #book {\n  color: maroon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9DOlxcVXNlcnNcXHphbmVsXFxEb2N1bWVudHNcXGJyb2tlblN0b29sL3NyY1xcYXBwXFx2aWV3XFx2aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlldy92aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7QUNFSjtBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNFRjtBREFFO0VBQ0UsYUFBQTtBQ0VKO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FDQ0o7QURBSTtFQUNFLGNBQUE7QUNFTjtBREdBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUo7QURFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7QUNBTjtBREdJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNETjtBREdRO0VBQ0UsY0FBQTtBQ0RWO0FETVE7RUFDRSxjQUFBO0FDSlY7QURVRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFFQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFFQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7QUNWSjtBRFlJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ1ZOO0FEV007RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDVFI7QURVUTtFQUNFLFlBQUE7QUNSVjtBRGFJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDWE47QURjSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ1pOO0FEYU07RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUNYUjtBRGVJO0VBR0UsV0FBQTtFQUNBLGdCQUFBO0FDZk47QURnQk07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGNBQUE7QUNmUjtBRG1CSTtFQUdFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDbkJOO0FEcUJNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDbkJSO0FEdUJJO0VBR0UsV0FBQTtFQUNBLGdCQUFBO0FDdkJOO0FEMEJJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDeEJOO0FEMkJJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ3pCTjtBRDBCTTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7QUN4QlI7QUQwQlE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ3hCVjtBRDBCVTtFQUNFLGFBQUE7QUN4QloiLCJmaWxlIjoic3JjL2FwcC92aWV3L3ZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpemVTdHlsZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNzUsIDE3NSwgMTc1LCAwLjcxMik7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE0NiwgMTQ2LCAxNDYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBpb24tYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbn1cclxuXHJcbi5jb2xvclN0eWxlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTQ2LCAxNDYsIDE0Nik7XHJcbiAgY29sb3I6IHJnYig5OSwgOTksIDk5KTtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICNpY29uIHtcclxuICAgIGNvbG9yOiBtYXJvb247XHJcbiAgfVxyXG5cclxuICAjcmF0ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDM5KTtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogLTVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbWluZm8ge1xyXG4gICAgICB6LWluZGV4OiA1O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTMlO1xyXG4gICAgICBsZWZ0OiA1dnc7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgLnN0YXJzIHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDZ2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9kdWN0aW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIC8vIGhlaWdodDogNjB2aDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG5cclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTg0LCAxODQsIDE4NCk7XHJcblxyXG4gICAgLmFkZCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IC01cHg7XHJcbiAgICAgIHRvcDogLTI1cHg7XHJcbiAgICAgIGlvbi1mYWItYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXJvb247XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc2l6ZXMge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgd2lkdGg6IDE0dnc7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2xvdXJzIHtcclxuICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAvLyBib3R0b206IDIwcHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICB3aWR0aDogMTR2dztcclxuICAgICAgICAvLyBoZWlnaHQ6IDh2dztcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5xdWFudGl0eSB7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gYm90dG9tOiA0MHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNoaXBwaW5nIHtcclxuICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAvLyBib3R0b206IDQwcHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWxpdmVyeSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm90dG9tOiA0MHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ueiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMSwgMSwgNTQpO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICNib29rIHtcclxuICAgICAgICAgICAgY29sb3I6IG1hcm9vbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnNpemVTdHlsZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTc1LCAxNzUsIDE3NSwgMC43MTIpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTI5MjkyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2l6ZVN0eWxlIGlvbi1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb2xvclN0eWxlIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzkyOTI5MjtcbiAgY29sb3I6ICM2MzYzNjM7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuaW9uLXRvb2xiYXIgI2ljb24ge1xuICBjb2xvcjogbWFyb29uO1xufVxuaW9uLXRvb2xiYXIgI3JhdGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGJhY2tncm91bmQ6ICMwMDAwMjc7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG59XG5pb24tdG9vbGJhciAjcmF0ZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA3MHZoO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cbi5jb250YWluZXIgLmltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvcGFjaXR5OiAwLjg7XG59XG4uY29udGFpbmVyIC5pbWFnZSAuaXRlbWluZm8ge1xuICB6LWluZGV4OiA1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTMlO1xuICBsZWZ0OiA1dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cbi5jb250YWluZXIgLmltYWdlIC5pdGVtaW5mbyAuc3RhcnMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDZ2dztcbn1cbi5jb250YWluZXIgLmltYWdlIC5pdGVtaW5mbyAucHJpY2UgcCB7XG4gIGZvbnQtc2l6ZTogNXZ3O1xufVxuLmNvbnRhaW5lciAucHJvZHVjdGluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgd2lkdGg6IDkwdnc7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiA1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNiOGI4Yjg7XG59XG4uY29udGFpbmVyIC5wcm9kdWN0aW5mbyAuYWRkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTVweDtcbiAgdG9wOiAtMjVweDtcbn1cbi5jb250YWluZXIgLnByb2R1Y3RpbmZvIC5hZGQgaW9uLWZhYi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBtYXJvb247XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jb250YWluZXIgLnByb2R1Y3RpbmZvIC5hZGQgaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5wcm9kdWN0aW5mbyAuYWJvdXQge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cbi5jb250YWluZXIgLnByb2R1Y3RpbmZvIC5zaXplcyB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuLmNvbnRhaW5lciAucHJvZHVjdGluZm8gLnNpemVzIGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgd2lkdGg6IDE0dnc7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjYWRhZGFkO1xufVxuLmNvbnRhaW5lciAucHJvZHVjdGluZm8gLmNvbG91cnMge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cbi5jb250YWluZXIgLnByb2R1Y3RpbmZvIC5jb2xvdXJzIGlvbi1idXR0b24ge1xuICBtYXJnaW46IDJweDtcbiAgd2lkdGg6IDE0dnc7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLmNvbnRhaW5lciAucHJvZHVjdGluZm8gLnF1YW50aXR5IHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5jb250YWluZXIgLnByb2R1Y3RpbmZvIC5xdWFudGl0eSBpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHdpZHRoOiAxMHZ3O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG59XG4uY29udGFpbmVyIC5wcm9kdWN0aW5mbyAuc2hpcHBpbmcge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cbi5jb250YWluZXIgLnByb2R1Y3RpbmZvIC5kZWxpdmVyeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA0MHB4O1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cbi5jb250YWluZXIgLnByb2R1Y3RpbmZvIC5idXR0b256IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5jb250YWluZXIgLnByb2R1Y3RpbmZvIC5idXR0b256IGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDEwMTM2O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XG59XG4uY29udGFpbmVyIC5wcm9kdWN0aW5mbyAuYnV0dG9ueiBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLnByb2R1Y3RpbmZvIC5idXR0b256IGlvbi1idXR0b24gaW9uLWljb24gI2Jvb2sge1xuICBjb2xvcjogbWFyb29uO1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/popover/popover.component.ts");






let ViewPage = class ViewPage {
    // colorIndex = null;
    constructor(router, route, toastCtrl, popoverController, navCtrl, render) {
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
        this.doc_id = this.route.snapshot.paramMap.get('view_id');
        this.route.queryParams.subscribe(params => {
            this.doc_data = params["data"];
            this.col = params["col"];
            this.category = params["category"];
        });
    }
    ngOnInit() {
        // console.log(this.doc_data);
        setTimeout(() => {
            //console.log(this.starRating);
            let starButtons = this.starRating[0].children;
            for (let i = 0; i < starButtons.length; i++) {
                //console.log(this.starRating[0].children[i]);
                this.render.setStyle(this.starRating[0].children[i], 'outline', 'none');
            }
        }, 500);
        // console.log('my collection ', this.col, 'my data', this.doc_data, 'my docid');
        this.dbRate.where('product', '==', this.doc_id).onSnapshot((res) => {
            // this.myRatings = [];
            if (res.size === 0) {
                this.myRate = 0;
            }
            else {
                res.forEach((doc) => {
                    this.myRate = doc.data().rating / res.size;
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
    }
    getProduct() {
        this.dbProduct.doc(this.category).collection(this.col).doc(this.doc_id).onSnapshot((doc) => {
            //console.log('My product ', doc.data());
            this.unitProduct.push({ data: doc.data(), id: doc.id });
            // console.log('My product ', this.unitProduct);
        });
    }
    getSpecial() {
        this.dbSales.doc(this.doc_id).onSnapshot((res) => {
            this.mySale.push({ data: res.data(), id: res.id });
            // console.log('My product ', this.mySale);
        });
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"],
                event: ev,
                translucent: true,
                componentProps: {
                    col: this.col,
                    doc: this.doc_id
                }
            });
            return yield popover.present();
        });
    }
    sizeChosen(data, index) {
        // console.log(index);
        this.sizeIndex = index;
        this.my_size = data;
        //console.log('My size ', this.my_size);
    }
    colorChosen(color, index) {
        this.color = color;
        this.colorIndex = index;
        // console.log("color", index);
    }
    plus() {
        //console.log('Quantity ', quantity); 
        this.quantity += 1;
    }
    minus() {
        if (this.quantity <= 1) {
            this.toastController('Quantity must be positive');
        }
        else {
            this.quantity -= 1;
        }
    }
    toastController(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({ message: message, duration: 2000 });
            return toast.present();
        });
    }
    toBusket() {
        this.router.navigateByUrl('basket');
    }
    addToCart(id, details) {
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
            }).then(() => {
                this.toastController('Added to busket');
                //this.router.navigateByUrl('basket');
            });
        }
        /*   this.dbCart.doc(id).onSnapshot((res)=>{
             // this.dbCart.add({ customerUID: this.customerUID, product: [{product_id: this.doc_id, quantity: this.quantity}]})
          }) */
        // console.log('Doc id ', id, 'Quantity ', quantity);
        // console.log('Product ', details, id);
    }
    addSaleToCart(id, details) {
        let descr = "";
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
            }).then(() => {
                this.toastController('Added to busket');
                //this.router.navigateByUrl('basket');
            });
        }
    }
    goBack() {
        this.navCtrl.pop();
    }
    viewitem() {
        this.router.navigateByUrl("/basket");
    }
};
ViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
ViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.page.scss */ "./src/app/view/view.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], ViewPage);



/***/ })

}]);
//# sourceMappingURL=10-es2015.js.map