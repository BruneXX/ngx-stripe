/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const STRIPE_PUBLISHABLE_KEY = new InjectionToken('Stripe Publishable Key');
/** @type {?} */
export const STRIPE_OPTIONS = new InjectionToken('Stripe Options');
/**
 * @record
 */
export function StripeJS() { }
if (false) {
    /**
     * @param {?=} options
     * @return {?}
     */
    StripeJS.prototype.elements = function (options) { };
    /**
     * @param {?} el
     * @param {?=} cardData
     * @return {?}
     */
    StripeJS.prototype.createToken = function (el, cardData) { };
    /**
     * @param {?} account
     * @param {?} bankAccountData
     * @return {?}
     */
    StripeJS.prototype.createToken = function (account, bankAccountData) { };
    /**
     * @param {?} pii
     * @param {?} piiData
     * @return {?}
     */
    StripeJS.prototype.createToken = function (pii, piiData) { };
    /**
     * @param {?} el
     * @param {?=} sourceData
     * @return {?}
     */
    StripeJS.prototype.createSource = function (el, sourceData) { };
    /**
     * @param {?} sourceData
     * @return {?}
     */
    StripeJS.prototype.createSource = function (sourceData) { };
    /**
     * @param {?} source
     * @return {?}
     */
    StripeJS.prototype.retrieveSource = function (source) { };
    /**
     * @param {?} options
     * @return {?}
     */
    StripeJS.prototype.paymentRequest = function (options) { };
}
/**
 * @record
 */
export function Options() { }
if (false) {
    /** @type {?|undefined} */
    Options.prototype.stripeAccount;
}
//# sourceMappingURL=stripe.js.map