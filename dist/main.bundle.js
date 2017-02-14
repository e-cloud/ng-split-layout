webpackJsonp([1,4],{

/***/ 252:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 252;


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(510);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/github/ng-split-layout/demo-app/main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'demo works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'demo-root',
            template: __webpack_require__(669),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/github/ng-split-layout/demo-app/app.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_component__ = __webpack_require__(511);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__map_component__["a" /* MapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__lib__["a" /* NgSplitLayoutModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/github/ng-split-layout/demo-app/app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.onlayoutresize = function () {
        console.log('bubbled');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* HostListener */])('layoutresize'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MapComponent.prototype, "onlayoutresize", null);
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'demo-map',
            template: 'Map',
            styles: ["\n    demo-map {\n      display: block;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], MapComponent);
    return MapComponent;
}());
//# sourceMappingURL=D:/github/ng-split-layout/demo-app/map.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/github/ng-split-layout/demo-app/environment.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_split_layout_module__ = __webpack_require__(515);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ng_split_layout_module__["a"]; });

//# sourceMappingURL=D:/github/ng-split-layout/demo-app/index.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_util_AnimationFrame__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_util_AnimationFrame___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_util_AnimationFrame__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PrimaryContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SecondaryContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgSplitLayoutComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ContainerDirective = (function () {
    function ContainerDirective(elementRef) {
        this.elementRef = elementRef;
    }
    ContainerDirective.prototype.dispatchEvent = function (event) {
        this.elementRef.nativeElement.dispatchEvent(event);
    };
    ContainerDirective.prototype.getElementDimensions = function () {
        return this.elementRef.nativeElement.getBoundingClientRect();
    };
    Object.defineProperty(ContainerDirective.prototype, "style", {
        get: function () {
            return this.elementRef.nativeElement.style;
        },
        enumerable: true,
        configurable: true
    });
    return ContainerDirective;
}());
var PrimaryContainerDirective = (function (_super) {
    __extends(PrimaryContainerDirective, _super);
    function PrimaryContainerDirective(elementRef) {
        _super.call(this, elementRef);
        this.elementRef = elementRef;
    }
    PrimaryContainerDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Directive */])({
            selector: '[primary]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ElementRef */]) === 'function' && _a) || Object])
    ], PrimaryContainerDirective);
    return PrimaryContainerDirective;
    var _a;
}(ContainerDirective));
var SecondaryContainerDirective = (function (_super) {
    __extends(SecondaryContainerDirective, _super);
    function SecondaryContainerDirective(elementRef) {
        _super.call(this, elementRef);
        this.elementRef = elementRef;
    }
    SecondaryContainerDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Directive */])({
            selector: '[secondary]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ElementRef */]) === 'function' && _a) || Object])
    ], SecondaryContainerDirective);
    return SecondaryContainerDirective;
    var _a;
}(ContainerDirective));
var NgSplitLayoutComponent = (function () {
    function NgSplitLayoutComponent(elementRef, document) {
        this.elementRef = elementRef;
        this.document = document;
        this.subscriptions = [];
    }
    Object.defineProperty(NgSplitLayoutComponent.prototype, "primaryChild", {
        get: function () {
            return this.primaryChildren.last;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSplitLayoutComponent.prototype, "secondaryChild", {
        get: function () {
            return this.secondaryChildren.last;
        },
        enumerable: true,
        configurable: true
    });
    NgSplitLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mouseUp$ = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(this.document, 'mouseup');
        this.mouseMoves$ = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(this.document, 'mousemove');
        this.mouseDown$ = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(this.splitter.nativeElement, 'mousedown');
        this.mouseDrag$ = this.mouseDown$.switchMap(function (mdEvent) {
            // Capture mouse down position
            var startX = mdEvent.clientX;
            var startY = mdEvent.clientY;
            _this.handleDragStart();
            // B1. Track pos differentials using mousemove, until mouseup
            return _this.mouseMoves$.map(function (mmEvent) {
                mmEvent.preventDefault();
                // B2. Calculate the derivative values
                return {
                    detail: {
                        dx: mmEvent.clientX - startX,
                        dy: mmEvent.clientY - startY
                    }
                };
            })
                .takeUntil(_this.mouseUp$.do(function () {
                _this.handleDragEnd();
            }));
        });
        this.windowResize$ = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(window, 'resize');
    };
    NgSplitLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.vertical) {
            this.elementRef.nativeElement.setAttribute('vertical', '');
        }
        var needRAF = true;
        this.subscriptions.push(this.mouseDrag$.subscribe(function (event) {
            if (needRAF) {
                needRAF = false;
                __WEBPACK_IMPORTED_MODULE_3_rxjs_util_AnimationFrame__["AnimationFrame"].requestAnimationFrame(function () {
                    if (!_this.startSize) {
                        needRAF = true;
                        return;
                    }
                    _this.handleDragMove(event);
                    _this.notifyResize();
                    needRAF = true;
                });
            }
        }, function (err) {
            throw err;
        }));
        this.subscriptions.push(this.windowResize$.subscribe(function () {
            _this.notifyResize();
        }, function (err) {
            throw err;
        }));
    };
    NgSplitLayoutComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    NgSplitLayoutComponent.prototype.setFlexBasis = function (element, flexBasis, containerSize) {
        flexBasis = Math.max(0, Math.min(flexBasis, containerSize));
        if (flexBasis === 0) {
            // Pure zero does not play well in Safari
            flexBasis = 0.000001;
        }
        element.style.flex = '1 1 ' + flexBasis + 'px';
    };
    NgSplitLayoutComponent.prototype.getElementDimensions = function () {
        return this.elementRef.nativeElement.getBoundingClientRect();
    };
    NgSplitLayoutComponent.prototype.handleDragStart = function () {
        var orient = this.vertical ? 'height' : 'width';
        if (this.vertical) {
            this.elementRef.nativeElement.setAttribute('vertical', '');
        }
        this.startSize = {
            container: this.getElementDimensions()[orient] - this.splitter.nativeElement.getBoundingClientRect()[orient],
            primary: this.primaryChild.getElementDimensions()[orient],
            secondary: this.secondaryChild.getElementDimensions()[orient]
        };
        // cache point events
        this._previousPrimaryPointerEvents = this.primaryChild.style.pointerEvents;
        this._previousSecondaryPointerEvents = this.secondaryChild.style.pointerEvents;
        this.primaryChild.style.pointerEvents = 'none';
        this.secondaryChild.style.pointerEvents = 'none';
    };
    NgSplitLayoutComponent.prototype.handleDragMove = function (event) {
        var distance = this.vertical ? event.detail.dy : event.detail.dx;
        this.setFlexBasis(this.primaryChild, this.startSize.primary + distance, this.startSize.container);
        this.setFlexBasis(this.secondaryChild, this.startSize.secondary - distance, this.startSize.container);
    };
    NgSplitLayoutComponent.prototype.handleDragEnd = function () {
        this.startSize = null;
        // restore cache
        this.primaryChild.style.pointerEvents = this._previousPrimaryPointerEvents;
        this.secondaryChild.style.pointerEvents = this._previousSecondaryPointerEvents;
    };
    NgSplitLayoutComponent.prototype.notifyResize = function () {
        var eventInstance = new Event('layoutresize', {
            bubbles: true,
            cancelable: true
        });
        this.primaryChild.dispatchEvent(eventInstance);
        this.secondaryChild.dispatchEvent(eventInstance);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ContentChildren */])(PrimaryContainerDirective), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* QueryList */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* QueryList */]) === 'function' && _a) || Object)
    ], NgSplitLayoutComponent.prototype, "primaryChildren", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ContentChildren */])(SecondaryContainerDirective), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* QueryList */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* QueryList */]) === 'function' && _b) || Object)
    ], NgSplitLayoutComponent.prototype, "secondaryChildren", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ViewChild */])('splitter'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ElementRef */]) === 'function' && _c) || Object)
    ], NgSplitLayoutComponent.prototype, "splitter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], NgSplitLayoutComponent.prototype, "vertical", void 0);
    NgSplitLayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'ng-split-layout',
            template: __webpack_require__(670),
            styles: [__webpack_require__(672)]
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DOCUMENT */])), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ElementRef */]) === 'function' && _d) || Object, Object])
    ], NgSplitLayoutComponent);
    return NgSplitLayoutComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/github/ng-split-layout/demo-app/ng-split-layout.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_split_layout_component__ = __webpack_require__(514);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgSplitLayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgSplitLayoutModule = (function () {
    function NgSplitLayoutModule() {
    }
    NgSplitLayoutModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ng_split_layout_component__["a" /* NgSplitLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_2__ng_split_layout_component__["b" /* PrimaryContainerDirective */],
                __WEBPACK_IMPORTED_MODULE_2__ng_split_layout_component__["c" /* SecondaryContainerDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ng_split_layout_component__["a" /* NgSplitLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_2__ng_split_layout_component__["b" /* PrimaryContainerDirective */],
                __WEBPACK_IMPORTED_MODULE_2__ng_split_layout_component__["c" /* SecondaryContainerDirective */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NgSplitLayoutModule);
    return NgSplitLayoutModule;
}());
//# sourceMappingURL=D:/github/ng-split-layout/demo-app/ng-split-layout.module.js.map

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  {{title}}\r\n</h1>\r\n<div class=\"split-view-container\">\r\n  <ng-split-layout>\r\n    <ng-split-layout primary [vertical]=\"true\">\r\n      <div primary>primary</div>\r\n      <div secondary>secondary</div>\r\n    </ng-split-layout>\r\n    <demo-map secondary></demo-map>\r\n  </ng-split-layout>\r\n</div>\r\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<ng-content id=\"primary\" name=\"primary\" select=\"[primary]\"></ng-content>\n<div id=\"splitter\" #splitter>\n  <svg handle id=\"handle\" width=\"40\" height=\"40\">\n    <rect x=\"19\" y=\"8\" width=\"2\" height=\"24\"></rect>\n  </svg>\n</div>\n<ng-content id=\"secondary\" name=\"secondary\" select=\"[secondary]\"></ng-content>\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ".split-view-container {\n  height: 300%;\n  width: 50%;\n  margin: auto; }\n\nng-split-layout {\n  height: 160px;\n  background: #eee; }\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden !important;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0); }\n\n:host([vertical]) {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host /deep/ [handle], :host /deep/ [primary], :host /deep/ [secondary] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  overflow: auto; }\n\n:host > #splitter {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  position: relative;\n  z-index: 1;\n  overflow: visible;\n  min-width: 8px;\n  min-height: 8px;\n  background: #ccc;\n  fill: #fff; }\n\n:host(:not([vertical])) > #splitter {\n  cursor: ew-resize; }\n\n:host([vertical]) > #splitter {\n  cursor: ns-resize; }\n\n#handle,\n#splitter > [handle] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n:host([vertical]) > #splitter #handle {\n  -webkit-transform: translate(-50%, -50%) rotate(90deg);\n          transform: translate(-50%, -50%) rotate(90deg); }\n"

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(401);


/***/ })

},[947]);
//# sourceMappingURL=main.bundle.map