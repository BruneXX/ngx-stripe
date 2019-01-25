/**
 * @license ngx-stripe
 * MIT license
 */

import { Component, EventEmitter, Inject, Injectable, InjectionToken, Input, NgModule, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { BehaviorSubject as BehaviorSubject$1, Observable as Observable$2 } from 'rxjs/';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WindowRef {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DocumentRef {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

class LazyStripeAPILoader {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STRIPE_PUBLISHABLE_KEY = new InjectionToken('Stripe Publishable Key');
/** @type {?} */
const STRIPE_OPTIONS = new InjectionToken('Stripe Options');
/**
 * @record
 */

/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @param {?} sourceData
 * @return {?}
 */
function isSourceData(sourceData) {
    return 'type' in sourceData;
}
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @param {?} account
 * @return {?}
 */
function isBankAccount(account) {
    return account === 'bank_account';
}
/**
 * @param {?} bankAccountData
 * @return {?}
 */
function isBankAccountData(bankAccountData) {
    return ('country' in bankAccountData &&
        'currency' in bankAccountData &&
        'routing_number' in bankAccountData &&
        'account_number' in bankAccountData &&
        'account_holder_name' in bankAccountData &&
        'account_holder_type' in bankAccountData &&
        (bankAccountData.account_holder_type === 'individual' ||
            bankAccountData.account_holder_type === 'company'));
}
/**
 * @param {?} pii
 * @return {?}
 */
function isPii(pii) {
    return pii === 'pii';
}
/**
 * @param {?} piiData
 * @return {?}
 */
function isPiiData(piiData) {
    return 'personal_id_number' in piiData;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeInstance {
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
                return Observable$1.fromPromise(stripe.createToken(a, b));
            }
            else if (isPii(a) && isPiiData(b)) {
                return Observable$1.fromPromise(stripe.createToken(a, b));
            }
            else {
                return Observable$1.fromPromise(stripe.createToken((/** @type {?} */ (a)), (/** @type {?} */ (b))));
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
                return Observable$1.fromPromise(stripe.createSource((/** @type {?} */ (a))));
            }
            return Observable$1.fromPromise(stripe.createSource((/** @type {?} */ (a)), b));
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
            return Observable$1.fromPromise(stripe.retrieveSource(source));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeFactoryService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripeCardComponent {
    /**
     * @param {?} stripeService
     */
    constructor(stripeService) {
        this.stripeService = stripeService;
        this.card = new EventEmitter();
        this.on = new EventEmitter();
        this.options$ = new BehaviorSubject$1({});
        this.elementsOptions$ = new BehaviorSubject$1({});
        this.stripe$ = new BehaviorSubject$1(null);
    }
    /**
     * @private
     * @param {?} optionsIn
     * @return {?}
     */
    set options(optionsIn) {
        this.options$.next(optionsIn);
    }
    /**
     * @private
     * @param {?} optionsIn
     * @return {?}
     */
    set elementsOptions(optionsIn) {
        this.elementsOptions$.next(optionsIn);
    }
    /**
     * @private
     * @param {?} stripeIn
     * @return {?}
     */
    set stripe(stripeIn) {
        this.stripe$.next(stripeIn);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const elements$ = Observable$2.combineLatest(this.elementsOptions$.asObservable(), this.stripe$.asObservable()).switchMap(([options, stripe]) => {
            if (stripe) {
                if (Object.keys(options).length > 0) {
                    return stripe.elements(options);
                }
                return stripe.elements();
            }
            else {
                if (Object.keys(options).length > 0) {
                    return this.stripeService.elements(options);
                }
                return this.stripeService.elements();
            }
        });
        Observable$2.combineLatest(elements$, this.options$.asObservable().filter(options => Boolean(options))).subscribe(([elements, options]) => {
            this.element = elements.create('card', options);
            this.element.on('blur', ev => this.on.emit({
                event: ev,
                type: 'blur'
            }));
            this.element.on('change', ev => this.on.emit({
                event: ev,
                type: 'change'
            }));
            this.element.on('click', ev => this.on.emit({
                event: ev,
                type: 'click'
            }));
            this.element.on('focus', ev => this.on.emit({
                event: ev,
                type: 'focus'
            }));
            this.element.on('ready', ev => this.on.emit({
                event: ev,
                type: 'ready'
            }));
            this.element.mount(this.stripeCard.nativeElement);
            this.card.emit(this.element);
        });
    }
    /**
     * @return {?}
     */
    getCard() {
        return this.element;
    }
}
StripeCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-stripe-card',
                template: `<div class="field" #stripeCard></div>`
            },] },
];
/** @nocollapse */
StripeCardComponent.ctorParameters = () => [
    { type: StripeService }
];
StripeCardComponent.propDecorators = {
    card: [{ type: Output }],
    on: [{ type: Output }],
    stripeCard: [{ type: ViewChild, args: ['stripeCard',] }],
    options: [{ type: Input }],
    elementsOptions: [{ type: Input }],
    stripe: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxStripeModule {
    /**
     * @param {?=} publishableKey
     * @param {?=} options
     * @return {?}
     */
    static forRoot(publishableKey, options) {
        return {
            ngModule: NgxStripeModule,
            providers: [
                LazyStripeAPILoader,
                StripeService,
                StripeFactoryService,
                WindowRef,
                DocumentRef,
                {
                    provide: STRIPE_PUBLISHABLE_KEY,
                    useValue: publishableKey
                },
                {
                    provide: STRIPE_OPTIONS,
                    useValue: options
                }
            ]
        };
    }
}
NgxStripeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StripeCardComponent],
                exports: [StripeCardComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Public classes.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { NgxStripeModule, StripeCardComponent, StripeService, StripeFactoryService, StripeInstance, LazyStripeAPILoader, WindowRef, DocumentRef, isSourceData, STRIPE_PUBLISHABLE_KEY, STRIPE_OPTIONS, isBankAccount, isBankAccountData, isPii, isPiiData };
//# sourceMappingURL=ngx-stripe.js.map