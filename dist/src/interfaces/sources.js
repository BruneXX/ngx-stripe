/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function Source() { }
if (false) {
    /** @type {?} */
    Source.prototype.id;
    /** @type {?} */
    Source.prototype.object;
    /** @type {?} */
    Source.prototype.amount;
    /** @type {?} */
    Source.prototype.client_secret;
    /** @type {?|undefined} */
    Source.prototype.code_verification;
    /** @type {?} */
    Source.prototype.created;
    /** @type {?} */
    Source.prototype.currency;
    /** @type {?} */
    Source.prototype.flow;
    /** @type {?} */
    Source.prototype.livemode;
    /** @type {?} */
    Source.prototype.metadata;
    /** @type {?} */
    Source.prototype.owner;
    /** @type {?} */
    Source.prototype.receiver;
    /** @type {?} */
    Source.prototype.status;
    /** @type {?} */
    Source.prototype.type;
    /** @type {?} */
    Source.prototype.usage;
}
/**
 * @record
 */
export function SourceParams() { }
if (false) {
    /** @type {?} */
    SourceParams.prototype.id;
    /** @type {?} */
    SourceParams.prototype.client_secret;
}
/**
 * @record
 */
export function SourceData() { }
if (false) {
    /** @type {?|undefined} */
    SourceData.prototype.type;
    /** @type {?|undefined} */
    SourceData.prototype.amount;
    /** @type {?|undefined} */
    SourceData.prototype.currency;
    /** @type {?|undefined} */
    SourceData.prototype.flow;
    /** @type {?|undefined} */
    SourceData.prototype.metadata;
    /** @type {?|undefined} */
    SourceData.prototype.owner;
    /** @type {?|undefined} */
    SourceData.prototype.redirect;
    /** @type {?|undefined} */
    SourceData.prototype.token;
    /** @type {?|undefined} */
    SourceData.prototype.usage;
}
/**
 * @param {?} sourceData
 * @return {?}
 */
export function isSourceData(sourceData) {
    return 'type' in sourceData;
}
/**
 * @record
 */
export function SourceResult() { }
if (false) {
    /** @type {?|undefined} */
    SourceResult.prototype.source;
    /** @type {?|undefined} */
    SourceResult.prototype.error;
}
//# sourceMappingURL=sources.js.map