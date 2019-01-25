/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { WindowRef } from './window-ref.service';
import { LazyStripeAPILoader } from './api-loader.service';
import { STRIPE_PUBLISHABLE_KEY, STRIPE_OPTIONS } from '../interfaces/stripe';
import { StripeInstance } from './stripe-instance.class';
export class StripeService {
    /**
     * @param {?} key
     * @param {?} options
     * @param {?} loader
     * @param {?} window
     */
    constructor(key, options, loader, window) {
        this.key = key;
        this.options = options;
        this.loader = loader;
        this.window = window;
        if (key) {
            this.stripe = new StripeInstance(this.loader, this.window, key, options);
        }
    }
    /**
     * @return {?}
     */
    getStripeReference() {
        return this.loader
            .asStream()
            .filter((status) => status.loaded === true)
            .map(() => ((/** @type {?} */ (this.window.getNativeWindow()))).Stripe);
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this.stripe.getInstance();
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    setKey(key, options) {
        return this.changeKey(key, options);
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    changeKey(key, options) {
        this.stripe = new StripeInstance(this.loader, this.window, key, options);
        return this.stripe;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    elements(options) {
        return this.stripe.elements(options);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    createToken(a, b) {
        return this.stripe.createToken(a, b);
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    createSource(a, b) {
        return this.stripe.createSource(a, b);
    }
    /**
     * @param {?} source
     * @return {?}
     */
    retrieveSource(source) {
        return this.stripe.retrieveSource(source);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    paymentRequest(options) {
        return this.stripe.paymentRequest(options);
    }
}
StripeService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
StripeService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [STRIPE_OPTIONS,] }] },
    { type: LazyStripeAPILoader },
    { type: WindowRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StripeService.prototype.stripe;
    /**
     * @type {?}
     * @private
     */
    StripeService.prototype.key;
    /**
     * @type {?}
     * @private
     */
    StripeService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    StripeService.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    StripeService.prototype.window;
}
//# sourceMappingURL=stripe.service.js.map