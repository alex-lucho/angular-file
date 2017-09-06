"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var ngfBackground_directive_1 = require("./ngfBackground.directive");
var ngfDrop_directive_1 = require("./ngfDrop.directive");
var ngf_directive_1 = require("./ngf.directive");
var ngfSelect_directive_1 = require("./ngfSelect.directive");
var declarations = [
    ngf_directive_1.ngf,
    ngfDrop_directive_1.ngfDrop,
    ngfSelect_directive_1.ngfSelect,
    ngfBackground_directive_1.ngfBackground
];
var ngfModule = /** @class */ (function () {
    function ngfModule() {
    }
    ngfModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: declarations,
                    exports: declarations
                },] },
    ];
    /** @nocollapse */
    ngfModule.ctorParameters = function () { return []; };
    return ngfModule;
}());
exports.ngfModule = ngfModule;
