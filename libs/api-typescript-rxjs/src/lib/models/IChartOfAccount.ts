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
    ChartOfAccountCategory,
} from './';

/**
 * @export
 * @interface IChartOfAccount
 */
export interface IChartOfAccount {
    /**
     * @type {number}
     * @memberof IChartOfAccount
     */
    id?: number;
    /**
     * @type {ChartOfAccountCategory}
     * @memberof IChartOfAccount
     */
    category?: ChartOfAccountCategory;
    /**
     * @type {string}
     * @memberof IChartOfAccount
     */
    code?: string | null;
    /**
     * @type {string}
     * @memberof IChartOfAccount
     */
    nameLocal?: string | null;
    /**
     * @type {string}
     * @memberof IChartOfAccount
     */
    nameForeign?: string | null;
    /**
     * @type {string}
     * @memberof IChartOfAccount
     */
    descriptionLocal?: string | null;
    /**
     * @type {string}
     * @memberof IChartOfAccount
     */
    descriptionForeign?: string | null;
    /**
     * @type {number}
     * @memberof IChartOfAccount
     */
    parentId?: number | null;
    /**
     * @type {boolean}
     * @memberof IChartOfAccount
     */
    isFolder?: boolean;
    /**
     * @type {boolean}
     * @memberof IChartOfAccount
     */
    isBank?: boolean;
    /**
     * @type {boolean}
     * @memberof IChartOfAccount
     */
    isReceivable?: boolean;
    /**
     * @type {boolean}
     * @memberof IChartOfAccount
     */
    isDelete?: boolean;
    /**
     * @type {boolean}
     * @memberof IChartOfAccount
     */
    isLock?: boolean;
    /**
     * @type {string}
     * @memberof IChartOfAccount
     */
    createdon?: string;
    /**
     * @type {string}
     * @memberof IChartOfAccount
     */
    modifiedon?: string;
    /**
     * @type {number}
     * @memberof IChartOfAccount
     */
    modifiedby?: number;
    /**
     * @type {number}
     * @memberof IChartOfAccount
     */
    value?: number;
    /**
     * @type {number}
     * @memberof IChartOfAccount
     */
    left?: number;
    /**
     * @type {number}
     * @memberof IChartOfAccount
     */
    right?: number;
    /**
     * @type {boolean}
     * @memberof IChartOfAccount
     */
    isDefault?: boolean;
}
