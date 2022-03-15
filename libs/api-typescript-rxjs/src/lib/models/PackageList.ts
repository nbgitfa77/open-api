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

/**
 * @export
 * @interface PackageList
 */
export interface PackageList {
    /**
     * @type {number}
     * @memberof PackageList
     */
    id?: number;
    /**
     * @type {string}
     * @memberof PackageList
     */
    packageName: string;
    /**
     * @type {string}
     * @memberof PackageList
     */
    description?: string | null;
    /**
     * @type {string}
     * @memberof PackageList
     */
    configuration: string;
    /**
     * @type {string}
     * @memberof PackageList
     */
    remarks?: string | null;
    /**
     * @type {string}
     * @memberof PackageList
     */
    displayNameTH?: string | null;
    /**
     * @type {string}
     * @memberof PackageList
     */
    displayNameEN?: string | null;
}