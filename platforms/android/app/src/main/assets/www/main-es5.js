var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
          \*****************************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var map = {
                "./ion-action-sheet-controller_8.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
                    "common",
                    30
                ],
                "./ion-action-sheet-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
                    "common",
                    31
                ],
                "./ion-action-sheet-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
                    "common",
                    32
                ],
                "./ion-alert-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
                    "common",
                    33
                ],
                "./ion-alert-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
                    "common",
                    34
                ],
                "./ion-app_8-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
                    "common",
                    35
                ],
                "./ion-app_8-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
                    "common",
                    36
                ],
                "./ion-avatar_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
                    "common",
                    37
                ],
                "./ion-avatar_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
                    "common",
                    38
                ],
                "./ion-back-button-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
                    "common",
                    39
                ],
                "./ion-back-button-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
                    "common",
                    40
                ],
                "./ion-backdrop-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
                    41
                ],
                "./ion-backdrop-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
                    42
                ],
                "./ion-button_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
                    "common",
                    43
                ],
                "./ion-button_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
                    "common",
                    44
                ],
                "./ion-card_5-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
                    "common",
                    45
                ],
                "./ion-card_5-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
                    "common",
                    46
                ],
                "./ion-checkbox-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
                    "common",
                    47
                ],
                "./ion-checkbox-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
                    "common",
                    48
                ],
                "./ion-chip-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
                    "common",
                    49
                ],
                "./ion-chip-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
                    "common",
                    50
                ],
                "./ion-col_3.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
                    51
                ],
                "./ion-datetime_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
                    "common",
                    52
                ],
                "./ion-datetime_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
                    "common",
                    53
                ],
                "./ion-fab_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
                    "common",
                    54
                ],
                "./ion-fab_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
                    "common",
                    55
                ],
                "./ion-img.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
                    56
                ],
                "./ion-infinite-scroll_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
                    "common",
                    57
                ],
                "./ion-infinite-scroll_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
                    "common",
                    58
                ],
                "./ion-input-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
                    "common",
                    59
                ],
                "./ion-input-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
                    "common",
                    60
                ],
                "./ion-item-option_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
                    "common",
                    61
                ],
                "./ion-item-option_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
                    "common",
                    62
                ],
                "./ion-item_8-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
                    "common",
                    63
                ],
                "./ion-item_8-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
                    "common",
                    64
                ],
                "./ion-loading-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
                    "common",
                    65
                ],
                "./ion-loading-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
                    "common",
                    66
                ],
                "./ion-menu_4-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
                    "common",
                    67
                ],
                "./ion-menu_4-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
                    "common",
                    68
                ],
                "./ion-modal-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
                    "common",
                    69
                ],
                "./ion-modal-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
                    "common",
                    70
                ],
                "./ion-nav_5.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js",
                    "common",
                    71
                ],
                "./ion-popover-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
                    "common",
                    72
                ],
                "./ion-popover-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
                    "common",
                    73
                ],
                "./ion-progress-bar-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
                    "common",
                    74
                ],
                "./ion-progress-bar-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
                    "common",
                    75
                ],
                "./ion-radio_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
                    "common",
                    76
                ],
                "./ion-radio_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
                    "common",
                    77
                ],
                "./ion-range-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
                    "common",
                    78
                ],
                "./ion-range-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
                    "common",
                    79
                ],
                "./ion-refresher_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
                    "common",
                    80
                ],
                "./ion-refresher_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
                    "common",
                    81
                ],
                "./ion-reorder_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
                    "common",
                    82
                ],
                "./ion-reorder_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
                    "common",
                    83
                ],
                "./ion-ripple-effect.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
                    84
                ],
                "./ion-route_4.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
                    "common",
                    85
                ],
                "./ion-searchbar-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
                    "common",
                    86
                ],
                "./ion-searchbar-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
                    "common",
                    87
                ],
                "./ion-segment_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
                    "common",
                    88
                ],
                "./ion-segment_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
                    "common",
                    89
                ],
                "./ion-select_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
                    "common",
                    90
                ],
                "./ion-select_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
                    "common",
                    91
                ],
                "./ion-slide_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
                    92
                ],
                "./ion-slide_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
                    93
                ],
                "./ion-spinner.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
                    "common",
                    94
                ],
                "./ion-split-pane-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
                    95
                ],
                "./ion-split-pane-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
                    96
                ],
                "./ion-tab-bar_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
                    "common",
                    97
                ],
                "./ion-tab-bar_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
                    "common",
                    98
                ],
                "./ion-tab_2.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
                    "common",
                    99
                ],
                "./ion-text.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
                    "common",
                    100
                ],
                "./ion-textarea-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
                    "common",
                    101
                ],
                "./ion-textarea-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
                    "common",
                    102
                ],
                "./ion-toast-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
                    "common",
                    103
                ],
                "./ion-toast-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
                    "common",
                    104
                ],
                "./ion-toggle-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
                    "common",
                    105
                ],
                "./ion-toggle-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
                    "common",
                    106
                ],
                "./ion-virtual-scroll.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
                    107
                ]
            };
            function webpackAsyncContext(req) {
                if (!__webpack_require__.o(map, req)) {
                    return Promise.resolve().then(function () {
                        var e = new Error("Cannot find module '" + req + "'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    });
                }
                var ids = map[req], id = ids[0];
                return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
                    return __webpack_require__(id);
                });
            }
            webpackAsyncContext.keys = function webpackAsyncContextKeys() {
                return Object.keys(map);
            };
            webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
            module.exports = webpackAsyncContext;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-modal/cart-modal.page.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart-modal/cart-modal.page.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\r\n\r\n  <div class=\"ion-text-end\">\r\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"dark\">\r\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n\r\n  <!-- <div class=\"ion-padding\">\r\n\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let p of cart\" class=\"ion-text-wrap\">\r\n        <ion-grid>\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"decreaseCartItem(p)\">\r\n                <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"1\" class=\"ion-align-self-center\">\r\n              {{ p.amount }}\r\n            </ion-col>\r\n\r\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"increaseCartItem(p)\">\r\n                <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"2\" offset=\"5\">\r\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"removeCartItem(p)\">\r\n                <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"9\">\r\n              <b>{{ p.name }}</b>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"ion-text-end\">\r\n              {{ p.amount * p.price | currency:'R' }}\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"9\">\r\n              Total:\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"ion-text-end\">\r\n              {{ getTotal() | currency:'R' }}\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-button expand=\"full\" (click)=\"checkout()\">\r\n      Place Order\r\n    </ion-button>\r\n  </div> -->\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', loadChildren: function () { return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(function (m) { return m.HomePageModule; }); } },
                {
                    path: 'profile',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/profile/profile.module.ts")).then(function (m) { return m.ProfilePageModule; }); }
                },
                {
                    path: 'basket',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./basket/basket.module */ "./src/app/basket/basket.module.ts")).then(function (m) { return m.BasketPageModule; }); }
                },
                {
                    path: 'payment/:docname',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./payment/payment.module */ "./src/app/payment/payment.module.ts")).then(function (m) { return m.PaymentPageModule; }); }
                },
                {
                    path: 'wishlist',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./wishlist/wishlist.module */ "./src/app/wishlist/wishlist.module.ts")).then(function (m) { return m.WishlistPageModule; }); }
                },
                {
                    path: 'login',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/app/login/login.module.ts")).then(function (m) { return m.LoginPageModule; }); }
                },
                {
                    path: 'sign-up',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ./sign-up/sign-up.module */ "./src/app/sign-up/sign-up.module.ts")).then(function (m) { return m.SignUpPageModule; }); }
                },
                {
                    path: 'welcome',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! ./welcome/welcome.module */ "./src/app/welcome/welcome.module.ts")).then(function (m) { return m.WelcomePageModule; }); }
                },
                {
                    path: 'list/:key',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./list/list.module */ "./src/app/list/list.module.ts")).then(function (m) { return m.ListPageModule; }); }
                },
                {
                    path: 'categories/:data',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./categories/categories.module */ "./src/app/categories/categories.module.ts")).then(function (m) { return m.CategoriesPageModule; }); }
                },
                {
                    path: 'kwanga-apparel',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./kwanga-apparel/kwanga-apparel.module */ "./src/app/kwanga-apparel/kwanga-apparel.module.ts")).then(function (m) { return m.KwangaApparelPageModule; }); }
                },
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: 'home', loadChildren: function () { return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(function (m) { return m.HomePageModule; }); } },
                {
                    path: 'login',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/app/login/login.module.ts")).then(function (m) { return m.LoginPageModule; }); }
                },
                {
                    path: 'signup',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./signup/signup.module */ "./src/app/signup/signup.module.ts")).then(function (m) { return m.SignupPageModule; }); }
                },
                {
                    path: 'create-account',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./create-account/create-account.module */ "./src/app/create-account/create-account.module.ts")).then(function (m) { return m.CreateAccountPageModule; }); }
                },
                /*  {
                   path: 'cart-modal',
                   loadChildren: () => import('./cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
                 }, */
                {
                    path: 'view/:view_id',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./view/view.module */ "./src/app/view/view.module.ts")).then(function (m) { return m.ViewPageModule; }); }
                },
                {
                    path: 'pending-orders',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./pending-orders/pending-orders.module */ "./src/app/pending-orders/pending-orders.module.ts")).then(function (m) { return m.PendingOrdersPageModule; }); }
                },
                {
                    path: 'order-history',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./order-history/order-history.module */ "./src/app/order-history/order-history.module.ts")).then(function (m) { return m.OrderHistoryPageModule; }); }
                },
                {
                    path: 'track-orders/:id',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./track-orders/track-orders.module */ "./src/app/track-orders/track-orders.module.ts")).then(function (m) { return m.TrackOrdersPageModule; }); }
                },
                {
                    path: 'receipts/:id',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./receipts/receipts.module */ "./src/app/receipts/receipts.module.ts")).then(function (m) { return m.ReceiptsPageModule; }); }
                },
                {
                    path: 'search',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ./search/search.module */ "./src/app/search/search.module.ts")).then(function (m) { return m.SearchPageModule; }); }
                },
                {
                    path: 'info',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./info/info.module */ "./src/app/info/info.module.ts")).then(function (m) { return m.InfoPageModule; }); }
                },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
                    ],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
            /* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./firebaseConfig */ "./src/app/firebaseConfig.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            //import { File, File } from '@ionic-native/file/ngx';
            var AppComponent = /** @class */ (function () {
                // dbUser = firebase.firestore().collection("userProfile");
                function AppComponent(platform, screenOrientation, splashScreen, statusBar, router) {
                    this.platform = platform;
                    this.screenOrientation = screenOrientation;
                    this.splashScreen = splashScreen;
                    this.statusBar = statusBar;
                    this.router = router;
                    this.initializeApp();
                    firebase__WEBPACK_IMPORTED_MODULE_6__["initializeApp"](_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__["firebaseConfig"]);
                    this.checkUser();
                    // console.log("UID ", firebase.auth().currentUser.uid)
                }
                AppComponent.prototype.checkUser = function () {
                    var _this = this;
                    //firebase.auth().settings.appVerificationDisabledForTesting = true;
                    firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().onAuthStateChanged(function (res) {
                        if (res) {
                            _this.router.navigateByUrl('home');
                            // this.splashScreen.hide();
                            // console.log("User..", res.phoneNumber);
                        }
                        else {
                            _this.router.navigateByUrl('login');
                        }
                    });
                };
                AppComponent.prototype.initializeApp = function () {
                    var _this = this;
                    this.platform.ready().then(function () {
                        _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
                        _this.statusBar.backgroundColorByHexString('#000324');
                        _this.statusBar.styleLightContent();
                    });
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
                { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"] },
                { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
                    _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"],
                    _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
            /* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
            /* harmony import */ var _cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart-modal/cart-modal.module */ "./src/app/cart-modal/cart-modal.module.ts");
            /* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
            /* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
            /* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
            /* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ "./node_modules/@ionic-native/downloader/ngx/index.js");
            /* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
            ///import { Facebook } from '@ionic-native/facebook/ngx';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                    entryComponents: [],
                    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_17__["IonicSelectableModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                        _cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_12__["CartModalPageModule"]],
                    providers: [
                        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
                        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"],
                        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
                        _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                        // Facebook,
                        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"],
                        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__["File"],
                        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_15__["FileOpener"],
                        _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_16__["Downloader"],
                        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/cart-modal/cart-modal-routing.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/cart-modal/cart-modal-routing.module.ts ***!
          \*********************************************************/
        /*! exports provided: CartModalPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModalPageRoutingModule", function () { return CartModalPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-modal.page */ "./src/app/cart-modal/cart-modal.page.ts");
            var routes = [
                {
                    path: '',
                    component: _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__["CartModalPage"]
                }
            ];
            var CartModalPageRoutingModule = /** @class */ (function () {
                function CartModalPageRoutingModule() {
                }
                return CartModalPageRoutingModule;
            }());
            CartModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], CartModalPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/cart-modal/cart-modal.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/cart-modal/cart-modal.module.ts ***!
          \*************************************************/
        /*! exports provided: CartModalPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModalPageModule", function () { return CartModalPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-modal-routing.module */ "./src/app/cart-modal/cart-modal-routing.module.ts");
            /* harmony import */ var _cart_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-modal.page */ "./src/app/cart-modal/cart-modal.page.ts");
            var CartModalPageModule = /** @class */ (function () {
                function CartModalPageModule() {
                }
                return CartModalPageModule;
            }());
            CartModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartModalPageRoutingModule"]
                    ],
                    declarations: [_cart_modal_page__WEBPACK_IMPORTED_MODULE_6__["CartModalPage"]]
                })
            ], CartModalPageModule);
            /***/ 
        }),
        /***/ "./src/app/cart-modal/cart-modal.page.scss": 
        /*!*************************************************!*\
          !*** ./src/app/cart-modal/cart-modal.page.scss ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQtbW9kYWwvY2FydC1tb2RhbC5wYWdlLnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/cart-modal/cart-modal.page.ts": 
        /*!***********************************************!*\
          !*** ./src/app/cart-modal/cart-modal.page.ts ***!
          \***********************************************/
        /*! exports provided: CartModalPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModalPage", function () { return CartModalPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            //import { Product, CartService } from './../services/cart.service';
            var CartModalPage = /** @class */ (function () {
                // cart: Product[] = [];
                function CartModalPage() {
                }
                CartModalPage.prototype.ngOnInit = function () {
                    //this.cart = this.cartService.getCart();
                };
                return CartModalPage;
            }());
            CartModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cart-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-modal/cart-modal.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart-modal.page.scss */ "./src/app/cart-modal/cart-modal.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], CartModalPage);
            /***/ 
        }),
        /***/ "./src/app/firebaseConfig.ts": 
        /*!***********************************!*\
          !*** ./src/app/firebaseConfig.ts ***!
          \***********************************/
        /*! exports provided: firebaseConfig */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () { return firebaseConfig; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // export const firebaseConfig = {
            //   apiKey: "AIzaSyC9Edgr1Yl4b2VHU98wSlm4xBtj2or51Vg",
            //     authDomain: "broken-stool.firebaseapp.com",
            //     databaseURL: "https://broken-stool.firebaseio.com",
            //     projectId: "broken-stool",
            //     storageBucket: "broken-stool.appspot.com",
            //     messagingSenderId: "918311615055",
            //     appId: "1:918311615055:web:374b3a771e9870a4c8083a",
            //     measurementId: "G-YKQ4BTFTS9"
            //   };
            var firebaseConfig = {
                apiKey: "AIzaSyDOthq8-7ipC4rQYCh_R8_oC9fL0F0Oz5g",
                authDomain: "fir-crud-11c1f.firebaseapp.com",
                databaseURL: "https://fir-crud-11c1f.firebaseio.com",
                projectId: "fir-crud-11c1f",
                storageBucket: "fir-crud-11c1f.appspot.com",
                messagingSenderId: "704929489176",
                appId: "1:704929489176:web:334d209d3679ed5d8a3e6d",
                measurementId: "G-BYBG8HFL6W"
            };
            /***/ 
        }),
        /***/ "./src/app/guards/auth.guard.ts": 
        /*!**************************************!*\
          !*** ./src/app/guards/auth.guard.ts ***!
          \**************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(_authService, _router) {
                    this._authService = _authService;
                    this._router = _router;
                }
                AuthGuard.prototype.canActivate = function () {
                    if (this._authService.loggedIn()) {
                        return true;
                    }
                    else {
                        this._router.navigateByUrl('login');
                        return false;
                    }
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/services/auth.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/auth.service.ts ***!
          \******************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            //import { CartService } from './cart.service';
            var AuthService = /** @class */ (function () {
                function AuthService(alertController, router) {
                    this.alertController = alertController;
                    this.router = router;
                    this.dbUser = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("Users");
                    this.myuid = "";
                }
                AuthService.prototype.registerUser = function (email, password) {
                    var _this = this;
                    firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password).then(function (res) {
                        console.log("User details", res.user);
                        _this.uid = res.user.uid;
                    });
                };
                AuthService.prototype.loginUser = function (email, password) {
                    firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password).then(function (res) {
                        console.log("User details", res.user);
                        //this.myuid = res.user.uid;
                    });
                };
                AuthService.prototype.loginPhone = function () {
                    firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().settings.appVerificationDisabledForTesting = true;
                    var phone = "+27769020059";
                    var testVerificationCode = "123456";
                    var appVerifier = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].RecaptchaVerifier('recaptcha-container');
                    firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPhoneNumber(phone, appVerifier).then(function (res) {
                        console.log("Logged in with phone", testVerificationCode);
                    });
                };
                AuthService.prototype.logoutUser = function () {
                    firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
                };
                AuthService.prototype.loggedIn = function () {
                    console.log("User details ", this.uid);
                    /*     this.dbUser.doc(this.uid).onSnapshot((res)=>{
                          console.log("User details", res.data());
                          this.user = res.data().uid
                        }) */
                    return this.user;
                };
                AuthService.prototype.requestLogin = function (number, appVerifier) {
                    var _this = this;
                    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                    // .then(()=> {
                    return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPhoneNumber('+27' + number, appVerifier).then(function (confirmationResult) {
                        window.confirmationResult = confirmationResult;
                        _this.confirm = confirmationResult;
                        var result = { success: true, result: confirmationResult };
                        _this.alert();
                        return result;
                    }).catch(function (error) {
                        var result = { success: false, result: error };
                        return result;
                    });
                    // })
                    // .catch(function (error) {
                    //   // Handle Errors here.
                    //   var errorCode = error.code;
                    //   var errorMessage = error.message;
                    // });
                };
                AuthService.prototype.alert = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var alert;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.alertController.create({
                                        header: 'Verfification code',
                                        subHeader: 'Enter verification code',
                                        inputs: [
                                            {
                                                name: 'code',
                                                type: 'text',
                                                placeholder: 'Enter code'
                                            }
                                        ],
                                        buttons: [{
                                                text: 'Submit',
                                                role: 'submit',
                                                cssClass: 'secondary',
                                                handler: function (result) {
                                                    console.log(result.code);
                                                    return _this.confirm.confirm(result.code).then(function (result) {
                                                        var user = result.user;
                                                        console.log(user);
                                                        _this.myuid = result.user.uid;
                                                        return user;
                                                    }).catch(function (error) {
                                                        console.log(error);
                                                        return error;
                                                    });
                                                }
                                            }]
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
                AuthService.prototype.login = function (code, confirmationResult) {
                    return confirmationResult.confirm(code).then(function (result) {
                        var user = result.user;
                        console.log(user);
                        return user;
                    }).catch(function (error) {
                        console.log(error);
                        return error;
                    });
                };
                //Adding new users to the database
                AuthService.prototype.register = function (email, password) {
                    return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password).then(function (data) {
                        // this.setCurrentSession(firebase.auth())
                        // this.checkingAuthState()
                        var userEmail = email;
                        var userName = name;
                        var userID = data.user.uid;
                        //let now = moment().format('LLLL')
                        console.log(userID);
                        firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Users/').doc(userID).set({
                            email: userEmail,
                            name: userName,
                            role: 'Admin',
                            hasProfilePic: false,
                            hasRequestedLink: false,
                            hasReceivedLinkRequest: false,
                        });
                        return data;
                    }).catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorMessage);
                        // ...
                        return error;
                    });
                };
                //Allowing users to reset their password
                AuthService.prototype.passwordReset = function (emailAddress) {
                    firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().sendPasswordResetEmail(emailAddress).then(function () {
                        // Email sent.
                        console.log("Email has been sent");
                    }).catch(function (error) {
                        // An error happened.
                        console.log(error);
                    });
                };
                //Function : Routing logged out users to the login page
                AuthService.prototype.signOut = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut().then(function () {
                            // Sign-out successful.
                            resolve();
                            _this.checkingAuthState().then(function (data) {
                                console.log(data);
                            });
                        }).catch(function (error) {
                            // An error happened.
                        });
                    });
                };
                AuthService.prototype.getUserProfile = function (userId) {
                    return firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("Users/").doc(userId).get().then(function (snapshot) {
                        // Edit
                        var profile = snapshot.data();
                        if (profile.hasProfilePic) {
                            return firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref('userDisplayPic/' + userId).getDownloadURL().then(function (url) {
                                profile['profilePicUrl'] = url;
                                return profile;
                            });
                        }
                        else {
                            profile['profilePicUrl'] = "../assets/icon/person.png";
                            return profile;
                        }
                    });
                };
                AuthService.prototype.checkingAuthState = function () {
                    return new Promise(function (resolve, reject) {
                        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
                            if (user) {
                                console.log(user);
                                resolve(user);
                            }
                            else {
                                console.log('not logged in');
                            }
                        });
                    });
                };
                AuthService.prototype.savePic = function (image) {
                    // this.login(this.email, this.password).then((userID) =>{
                    //   let storageRef = firebase.storage().ref('userDisplayPic/' + userID)
                    //   return storageRef.put(image).then((data) => {
                    //     console.log('Saved');
                    //   })
                    // })
                };
                //delete?
                AuthService.prototype.retrievingUserInfo = function (uid) {
                    return new Promise(function (resolve, reject) {
                        var userRoot = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref("Users").child(uid);
                        userRoot.once("value", function (snap) {
                            //console.log(userRoot);
                            var values = snap.val();
                            console.log(values["name"]);
                            console.log(values["email"]);
                            var userProfile = {
                                key: snap.key,
                                displayName: values["name"],
                                email: values["email"],
                            };
                            resolve(userProfile);
                        });
                    });
                };
                AuthService.prototype.updateProfile = function (userID, newUsername, username, newEmail, email) {
                    return new Promise(function (resolve, reject) {
                        if (newUsername !== username) {
                            firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Users/').doc(userID).update({
                                name: newUsername
                            });
                            //return 'Profile has been reset'
                        }
                        console.log(newEmail);
                        console.log(email);
                        if (newEmail !== email) {
                            var user = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
                            console.log(user);
                            firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('Users/').doc(userID).update({
                                email: newEmail
                            });
                            user.updateEmail(newEmail).then(function (data) {
                                var message = 'Profile has been reset';
                                console.log(data);
                            }).catch(function (error) {
                                // An error happened.
                            });
                        }
                        resolve();
                    });
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.log(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\zanel\Documents\brokenStool\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map