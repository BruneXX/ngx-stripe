/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { WindowRef } from './window-ref.service';
import { DocumentRef } from './document-ref.service';
/**
 * @record
 */
export function Status() { }
if (false) {
    /** @type {?} */
    Status.prototype.loaded;
    /** @type {?} */
    Status.prototype.loading;
    /** @type {?} */
    Status.prototype.error;
}
export class LazyStripeAPILoader {
    /**
     * @param {?} platformId
     * @param {?} window
     * @param {?} document
     */
    constructor(platformId, window, document) {
        this.platformId = platformId;
        this.window = window;
        this.document = document;
        this.status = new BehaviorSubject({
            error: false,
            loaded: false,
            loading: false
        });
    }
    /**
     * @return {?}
     */
    asStream() {
        this.load();
        return this.status.asObservable();
    }
    /**
     * @return {?}
     */
    isReady() {
        return this.status.getValue().loaded;
    }
    /**
     * @return {?}
     */
    load() {
        if (isPlatformServer(this.platformId)) {
            return;
        }
        /** @type {?} */
        const status = this.status.getValue();
        if (this.window.getNativeWindow().hasOwnProperty('Stripe')) {
            this.status.next({
                error: false,
                loaded: true,
                loading: false
            });
        }
        else if (!status.loaded && !status.loading) {
            this.status.next(Object.assign({}, status, { loading: true }));
            /** @type {?} */
            const script = this.document.getNativeDocument().createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = 'https://js.stripe.com/v3/';
            script.onload = () => {
                this.status.next({
                    error: false,
                    loaded: true,
                    loading: false
                });
            };
            script.onerror = () => {
                this.status.next({
                    error: true,
                    loaded: false,
                    loading: false
                });
            };
            this.document.getNativeDocument().body.appendChild(script);
        }
    }
}
LazyStripeAPILoader.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LazyStripeAPILoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: WindowRef },
    { type: DocumentRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LazyStripeAPILoader.prototype.status;
    /**
     * @type {?}
     * @private
     */
    LazyStripeAPILoader.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    LazyStripeAPILoader.prototype.window;
    /**
     * @type {?}
     * @private
     */
    LazyStripeAPILoader.prototype.document;
}
//# sourceMappingURL=api-loader.service.js.map