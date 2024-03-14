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
 * The SetEMServiceURLRequest model module.
 * @module com.alterian.auth.model/SetEMServiceURLRequest
 * @version 6.35.0
 */
class SetEMServiceURLRequest {
    /**
     * Constructs a new <code>SetEMServiceURLRequest</code>.
     * @alias module:com.alterian.auth.model/SetEMServiceURLRequest
     */
    constructor() { 
        
        SetEMServiceURLRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetEMServiceURLRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.auth.model/SetEMServiceURLRequest} obj Optional instance to populate.
     * @return {module:com.alterian.auth.model/SetEMServiceURLRequest} The populated <code>SetEMServiceURLRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetEMServiceURLRequest();

            if (data.hasOwnProperty('EMServiceURL')) {
                obj['EMServiceURL'] = ApiClient.convertToType(data['EMServiceURL'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SetEMServiceURLRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SetEMServiceURLRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['EMServiceURL'] && !(typeof data['EMServiceURL'] === 'string' || data['EMServiceURL'] instanceof String)) {
            throw new Error("Expected the field `EMServiceURL` to be a primitive type in the JSON string but got " + data['EMServiceURL']);
        }

        return true;
    }


}



/**
 * New EM service URL
 * @member {String} EMServiceURL
 */
SetEMServiceURLRequest.prototype['EMServiceURL'] = undefined;






export default SetEMServiceURLRequest;
