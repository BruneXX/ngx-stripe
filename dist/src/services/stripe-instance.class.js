/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { isSourceData } from '../interfaces/sources';
import { isBankAccount, isBankAccountData, isPii, isPiiData } from '../interfaces/token';
export class StripeInstance {
    /**
     * @param {?} loader
     * @param {?} window
     * @param {?} key
     * @param {?=} options
     */
    constructor(loader, window, key, options) {
        this.loader = loader;
        this.window = window;
        this.key = key;
        this.options = options;
        this.stripe$ = new BehaviorSubject(undefined);
        this.loader
            .asStream()
            .filter((status) => status.loaded === true)
            .first()
            .map(() => ((/** @type {?} */ (this.window.getNativeWindow()))).Stripe)
            .subscribe((Stripe) => {
            /** @type {?} */
            const stripe = this.options
                ? ((/** @type {?} */ (Stripe(this.key, this.options))))
                : ((/** @type {?} */ (Stripe(this.key))));
            this.stripe$.next(stripe);
        });
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this.stripe$.getValue();
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    elements(options) {
        return this.stripe$
            .asObservable()
            .filter(stripe => Boolean(stripe))
            .map(stripe => ((/** @type {?} */ (stripe))).elements(options))
            .first();
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    createToken(a, b) {
        return this.stripe$
            .asObservable()
            .filter(stripe => Boolean(stripe))
            .switchMap(s => {
            /** @type {?} */
            const stripe = (/** @type {?} */ (s));
            if (isBankAccount(a) && isBankAccountData(b)) {
                return Observable.fromPromise(stripe.createToken(a, b));
            }
            else if (isPii(a) && isPiiData(b)) {
                return Observable.fromPromise(stripe.createToken(a, b));
            }
            else {
                return Observable.fromPromise(stripe.createToken((/** @type {?} */ (a)), (/** @type {?} */ (b))));
            }
        })
            .first();
    }
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    createSource(a, b) {
        return this.stripe$
            .asObservable()
            .filter(stripe => Boolean(stripe))
            .switchMap(s => {
            /** @type {?} */
            const stripe = (/** @type {?} */ (s));
            if (isSourceData(a)) {
                return Observable.fromPromise(stripe.createSource((/** @type {?} */ (a))));
            }
            return Observable.fromPromise(stripe.createSource((/** @type {?} */ (a)), b));
        })
            .first();
    }
    /**
     * @param {?} source
     * @return {?}
     */
    retrieveSource(source) {
        return this.stripe$
            .asObservable()
            .filter(stripe => Boolean(stripe))
            .switchMap(s => {
            /** @type {?} */
            const stripe = (/** @type {?} */ (s));
            return Observable.fromPromise(stripe.retrieveSource(source));
        })
            .first();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    paymentRequest(options) {
        /** @type {?} */
        const stripe = this.getInstance();
        if (stripe) {
            return stripe.paymentRequest(options);
        }
        return undefined;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StripeInstance.prototype.stripe$;
    /**
     * @type {?}
     * @private
     */
    StripeInstance.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    StripeInstance.prototype.window;
    /**
     * @type {?}
     * @private
     */
    StripeInstance.prototype.key;
    /**
     * @type {?}
     * @private
     */
    StripeInstance.prototype.options;
}
//# sourceMappingURL=stripe-instance.class.js.map