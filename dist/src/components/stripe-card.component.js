/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';
import { Observable } from 'rxjs/';
import { StripeService } from '../services/stripe.service';
import { StripeInstance } from '../services/stripe-instance.class';
export class StripeCardComponent {
    /**
     * @param {?} stripeService
     */
    constructor(stripeService) {
        this.stripeService = stripeService;
        this.card = new EventEmitter();
        this.on = new EventEmitter();
        this.options$ = new BehaviorSubject({});
        this.elementsOptions$ = new BehaviorSubject({});
        this.stripe$ = new BehaviorSubject(null);
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
        const elements$ = Observable.combineLatest(this.elementsOptions$.asObservable(), this.stripe$.asObservable()).switchMap(([options, stripe]) => {
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
        Observable.combineLatest(elements$, this.options$.asObservable().filter(options => Boolean(options))).subscribe(([elements, options]) => {
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
if (false) {
    /** @type {?} */
    StripeCardComponent.prototype.card;
    /** @type {?} */
    StripeCardComponent.prototype.on;
    /**
     * @type {?}
     * @private
     */
    StripeCardComponent.prototype.stripeCard;
    /**
     * @type {?}
     * @private
     */
    StripeCardComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    StripeCardComponent.prototype.options$;
    /**
     * @type {?}
     * @private
     */
    StripeCardComponent.prototype.elementsOptions$;
    /**
     * @type {?}
     * @private
     */
    StripeCardComponent.prototype.stripe$;
    /**
     * @type {?}
     * @private
     */
    StripeCardComponent.prototype.stripeService;
}
//# sourceMappingURL=stripe-card.component.js.map