/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export class WindowRef {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    getNativeWindow() {
        if (isPlatformBrowser(this.platformId)) {
            return window;
        }
        return (/** @type {?} */ ({}));
    }
}
WindowRef.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WindowRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    WindowRef.prototype.platformId;
}
//# sourceMappingURL=window-ref.service.js.map