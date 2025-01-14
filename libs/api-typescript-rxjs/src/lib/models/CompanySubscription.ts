// tslint:disable
/**
 * FlowAccount Business API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    PackageList,
    PackageStatus,
    PaymentChannel,
    UpgradeType,
} from './';

/**
 * @export
 * @interface CompanySubscription
 */
export interface CompanySubscription {
    /**
     * @type {number}
     * @memberof CompanySubscription
     */
    id?: number;
    /**
     * @type {number}
     * @memberof CompanySubscription
     */
    companyId?: number;
    /**
     * @type {number}
     * @memberof CompanySubscription
     */
    packageId?: number;
    /**
     * @type {PackageStatus}
     * @memberof CompanySubscription
     */
    packageStatus?: PackageStatus;
    /**
     * @type {string}
     * @memberof CompanySubscription
     */
    transactionDate?: string;
    /**
     * @type {string}
     * @memberof CompanySubscription
     */
    transactionId?: string | null;
    /**
     * @type {string}
     * @memberof CompanySubscription
     */
    expirationDate?: string;
    /**
     * @type {number}
     * @memberof CompanySubscription
     */
    couponId?: number | null;
    /**
     * @type {number}
     * @memberof CompanySubscription
     */
    paidBy?: number;
    /**
     * @type {string}
     * @memberof CompanySubscription
     */
    createdOn?: string;
    /**
     * @type {string}
     * @memberof CompanySubscription
     */
    modifiedOn?: string;
    /**
     * @type {number}
     * @memberof CompanySubscription
     */
    days?: number;
    /**
     * @type {number}
     * @memberof CompanySubscription
     */
    packageDays?: number;
    /**
     * @type {number}
     * @memberof CompanySubscription
     */
    quantity?: number | null;
    /**
     * @type {UpgradeType}
     * @memberof CompanySubscription
     */
    type?: UpgradeType;
    /**
     * @type {PaymentChannel}
     * @memberof CompanySubscription
     */
    paymentChannel?: PaymentChannel | null;
    /**
     * @type {number}
     * @memberof CompanySubscription
     */
    value?: number | null;
    /**
     * @type {boolean}
     * @memberof CompanySubscription
     */
    isWithheld?: boolean;
    /**
     * @type {number}
     * @memberof CompanySubscription
     */
    withheld?: number | null;
    /**
     * @type {string}
     * @memberof CompanySubscription
     */
    internalFile?: string | null;
    /**
     * @type {number}
     * @memberof CompanySubscription
     */
    invoiceId?: number | null;
    /**
     * @type {string}
     * @memberof CompanySubscription
     */
    remarks?: string | null;
    /**
     * @type {boolean}
     * @memberof CompanySubscription
     */
    isRequestInvoice?: boolean | null;
    /**
     * @type {string}
     * @memberof CompanySubscription
     */
    addOn?: string | null;
    /**
     * @type {PackageList}
     * @memberof CompanySubscription
     */
    packageList?: PackageList | null;
    /**
     * @type {string}
     * @memberof CompanySubscription
     */
    paySlipImageDate?: string | null;
    /**
     * @type {string}
     * @memberof CompanySubscription
     */
    paySlipImageTime?: string | null;
    /**
     * @type {number}
     * @memberof CompanySubscription
     */
    paySlipImageAmount?: number | null;
    /**
     * @type {string}
     * @memberof CompanySubscription
     */
    paySlipImageContact?: string | null;
}
