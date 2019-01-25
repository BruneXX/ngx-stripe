/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { STRIPE_PUBLISHABLE_KEY, STRIPE_OPTIONS } from '../interfaces/stripe';
import { LazyStripeAPILoader } from './api-loader.service';
import { WindowRef } from './window-ref.service';
import { StripeInstance } from './stripe-instance.class';
export class StripeFactoryService {
    /**
     * @param {?} baseKey
     * @param {?} baseOptions
     * @param {?} loader
     * @param {?} window
     */
    constructor(baseKey, baseOptions, loader, window) {
        this.baseKey = baseKey;
        this.baseOptions = baseOptions;
        this.loader = loader;
        this.window = window;
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    create(key, options) {
        return new StripeInstance(this.loader, this.window, key, options);
    }
}
StripeFactoryService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
StripeFactoryService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: String, decorators: [{ type: Inject, args: [STRIPE_OPTIONS,] }] },
    { type: LazyStripeAPILoader },
    { type: WindowRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StripeFactoryService.prototype.baseKey;
    /**
     * @type {?}
     * @private
     */
    StripeFactoryService.prototype.baseOptions;
    /**
     * @type {?}
     * @private
     */
    StripeFactoryService.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    StripeFactoryService.prototype.window;
}
//# sourceMappingURL=stripe-factory.service.js.map