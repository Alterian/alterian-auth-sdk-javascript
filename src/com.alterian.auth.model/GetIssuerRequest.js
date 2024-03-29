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
 * The GetIssuerRequest model module.
 * @module com.alterian.auth.model/GetIssuerRequest
 * @version 6.35.0
 */
class GetIssuerRequest {
    /**
     * Constructs a new <code>GetIssuerRequest</code>.
     * @alias module:com.alterian.auth.model/GetIssuerRequest
     */
    constructor() { 
        
        GetIssuerRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetIssuerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.auth.model/GetIssuerRequest} obj Optional instance to populate.
     * @return {module:com.alterian.auth.model/GetIssuerRequest} The populated <code>GetIssuerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetIssuerRequest();

            if (data.hasOwnProperty('IssuerId')) {
                obj['IssuerId'] = ApiClient.convertToType(data['IssuerId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetIssuerRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetIssuerRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * ID of a valid Issuer.
 * @member {Number} IssuerId
 */
GetIssuerRequest.prototype['IssuerId'] = undefined;






export default GetIssuerRequest;

