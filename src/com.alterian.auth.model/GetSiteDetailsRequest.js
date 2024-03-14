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
 * The GetSiteDetailsRequest model module.
 * @module com.alterian.auth.model/GetSiteDetailsRequest
 * @version 6.35.0
 */
class GetSiteDetailsRequest {
    /**
     * Constructs a new <code>GetSiteDetailsRequest</code>.
     * @alias module:com.alterian.auth.model/GetSiteDetailsRequest
     */
    constructor() { 
        
        GetSiteDetailsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSiteDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.auth.model/GetSiteDetailsRequest} obj Optional instance to populate.
     * @return {module:com.alterian.auth.model/GetSiteDetailsRequest} The populated <code>GetSiteDetailsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSiteDetailsRequest();

            if (data.hasOwnProperty('SiteId')) {
                obj['SiteId'] = ApiClient.convertToType(data['SiteId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetSiteDetailsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetSiteDetailsRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Id of the application to which you wish to obtain details.
 * @member {Number} SiteId
 */
GetSiteDetailsRequest.prototype['SiteId'] = undefined;






export default GetSiteDetailsRequest;

