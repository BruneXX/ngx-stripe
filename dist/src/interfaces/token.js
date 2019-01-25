/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function Token() { }
if (false) {
    /** @type {?} */
    Token.prototype.id;
    /** @type {?} */
    Token.prototype.object;
    /** @type {?|undefined} */
    Token.prototype.bank_account;
    /** @type {?|undefined} */
    Token.prototype.card;
    /** @type {?} */
    Token.prototype.client_ip;
    /** @type {?} */
    Token.prototype.livemode;
    /** @type {?} */
    Token.prototype.type;
    /** @type {?} */
    Token.prototype.used;
}
/**
 * @record
 */
export function CardDataOptions() { }
if (false) {
    /** @type {?|undefined} */
    CardDataOptions.prototype.name;
    /** @type {?|undefined} */
    CardDataOptions.prototype.address_line1;
    /** @type {?|undefined} */
    CardDataOptions.prototype.address_line2;
    /** @type {?|undefined} */
    CardDataOptions.prototype.address_city;
    /** @type {?|undefined} */
    CardDataOptions.prototype.address_state;
    /** @type {?|undefined} */
    CardDataOptions.prototype.address_zip;
    /** @type {?|undefined} */
    CardDataOptions.prototype.address_country;
    /** @type {?|undefined} */
    CardDataOptions.prototype.currency;
}
/**
 * @record
 */
export function TokenResult() { }
if (false) {
    /** @type {?|undefined} */
    TokenResult.prototype.token;
    /** @type {?|undefined} */
    TokenResult.prototype.error;
}
/**
 * @record
 */
export function BankAccountData() { }
if (false) {
    /** @type {?} */
    BankAccountData.prototype.country;
    /** @type {?} */
    BankAccountData.prototype.currency;
    /** @type {?} */
    BankAccountData.prototype.routing_number;
    /** @type {?} */
    BankAccountData.prototype.account_number;
    /** @type {?} */
    BankAccountData.prototype.account_holder_name;
    /** @type {?} */
    BankAccountData.prototype.account_holder_type;
}
/**
 * @record
 */
export function PiiData() { }
if (false) {
    /** @type {?} */
    PiiData.prototype.personal_id_number;
}
/**
 * @param {?} account
 * @return {?}
 */
export function isBankAccount(account) {
    return account === 'bank_account';
}
/**
 * @param {?} bankAccountData
 * @return {?}
 */
export function isBankAccountData(bankAccountData) {
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
export function isPii(pii) {
    return pii === 'pii';
}
/**
 * @param {?} piiData
 * @return {?}
 */
export function isPiiData(piiData) {
    return 'personal_id_number' in piiData;
}
//# sourceMappingURL=token.js.map