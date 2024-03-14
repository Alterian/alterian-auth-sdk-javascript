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
 * The GetSitesRequest model module.
 * @module com.alterian.auth.model/GetSitesRequest
 * @version 6.35.0
 */
class GetSitesRequest {
    /**
     * Constructs a new <code>GetSitesRequest</code>.
     * @alias module:com.alterian.auth.model/GetSitesRequest
     */
    constructor() { 
        
        GetSitesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSitesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.auth.model/GetSitesRequest} obj Optional instance to populate.
     * @return {module:com.alterian.auth.model/GetSitesRequest} The populated <code>GetSitesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSitesRequest();

            if (data.hasOwnProperty('SiteTypeId')) {
                obj['SiteTypeId'] = ApiClient.convertToType(data['SiteTypeId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetSitesRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetSitesRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Optionally filter to a specific site type, use @see(GetSiteTypes) to obtain a list of acceptable parameters
 * @member {Number} SiteTypeId
 */
GetSitesRequest.prototype['SiteTypeId'] = undefined;






export default GetSitesRequest;
