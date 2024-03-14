/**
 * Authentication API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 6.35.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AuthSite model module.
 * @module com.alterian.auth.model/AuthSite
 * @version 6.35.0
 */
class AuthSite {
    /**
     * Constructs a new <code>AuthSite</code>.
     * Provides details about an authentication site
     * @alias module:com.alterian.auth.model/AuthSite
     */
    constructor() { 
        
        AuthSite.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthSite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.auth.model/AuthSite} obj Optional instance to populate.
     * @return {module:com.alterian.auth.model/AuthSite} The populated <code>AuthSite</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthSite();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('SiteTypeId')) {
                obj['SiteTypeId'] = ApiClient.convertToType(data['SiteTypeId'], 'Number');
            }
            if (data.hasOwnProperty('Url')) {
                obj['Url'] = ApiClient.convertToType(data['Url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthSite</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthSite</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Url'] && !(typeof data['Url'] === 'string' || data['Url'] instanceof String)) {
            throw new Error("Expected the field `Url` to be a primitive type in the JSON string but got " + data['Url']);
        }

        return true;
    }


}



/**
 * Name of the authentication site
 * @member {String} Name
 */
AuthSite.prototype['Name'] = undefined;

/**
 * Internal identifier for the authentication site
 * @member {Number} Id
 */
AuthSite.prototype['Id'] = undefined;

/**
 * Type of the authentication site.  See @see(GetSiteTypes) to obtain a list of type ids
 * @member {Number} SiteTypeId
 */
AuthSite.prototype['SiteTypeId'] = undefined;

/**
 * Root URL to the site
 * @member {String} Url
 */
AuthSite.prototype['Url'] = undefined;






export default AuthSite;

