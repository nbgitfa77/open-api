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
    ContactGroups,
} from './';

/**
 * @export
 * @interface BaseDocumentSource
 */
export interface BaseDocumentSource {
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    sqlId?: number;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    documentSerial?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    modifiedOn?: string;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    publishedOn?: string;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    createdBy?: number;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    referenceDate?: string | null;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    companyId?: number;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    companyTaxId?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    companyName?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    companyNameEn?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    companyAddress?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    companyAddressEn?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    companyAddressLine2?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    companyAddressLine2En?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    companyAddressLine3?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    companyAddressLine3En?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    branch?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    branchEn?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    companyWebsite?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    phone?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    mobile?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    fax?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    address?: string | null;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    provinceId?: number | null;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    amphurId?: number | null;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    districtId?: number | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    zipCode?: string | null;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    contactId?: number;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactCode?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactName?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactAddress?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactAddressLine2?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactAddressLine3?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactTaxId?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactBranch?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactPerson?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactNumber?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactEmail?: string | null;
    /**
     * @type {ContactGroups}
     * @memberof BaseDocumentSource
     */
    contactGroup?: ContactGroups;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactZipCode?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactShippingAddress?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactFax?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    contactNumberOffice?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    name?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    internalNotes?: string | null;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    roundingAdjustment?: number;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    subTotal?: number;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    total?: number;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    remarks?: string | null;
    /**
     * @type {boolean}
     * @memberof BaseDocumentSource
     */
    showSignatureOrStamp?: boolean;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    exemptAmount?: number;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    vatableAmount?: number;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    totalAfterDiscount?: number;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    cancelCode?: string | null;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    cancelText?: string | null;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    vatRate?: number;
    /**
     * @type {boolean}
     * @memberof BaseDocumentSource
     */
    isVat?: boolean;
    /**
     * @type {boolean}
     * @memberof BaseDocumentSource
     */
    isVatInclusive?: boolean;
    /**
     * @type {boolean}
     * @memberof BaseDocumentSource
     */
    isDicountAsPercentage?: boolean;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    discountPercentage?: number;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    discount?: number;
    /**
     * @type {boolean}
     * @memberof BaseDocumentSource
     */
    isReCalculate?: boolean;
    /**
     * @type {number}
     * @memberof BaseDocumentSource
     */
    version?: number;
    /**
     * @type {string}
     * @memberof BaseDocumentSource
     */
    saleAndPurchaseChannel?: string | null;
}
