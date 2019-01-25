/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export class DocumentRef {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    getNativeDocument() {
        if (isPlatformBrowser(this.platformId)) {
            return document;
        }
        return (/** @type {?} */ ({}));
    }
}
DocumentRef.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DocumentRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DocumentRef.prototype.platformId;
}
//# sourceMappingURL=document-ref.service.js.map