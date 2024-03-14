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
import Applications from './Applications';

/**
 * The AuthenticationResults model module.
 * @module com.alterian.auth.model/AuthenticationResults
 * @version 6.35.0
 */
class AuthenticationResults {
    /**
     * Constructs a new <code>AuthenticationResults</code>.
     * 
     * @alias module:com.alterian.auth.model/AuthenticationResults
     */
    constructor() { 
        
        AuthenticationResults.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthenticationResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.auth.model/AuthenticationResults} obj Optional instance to populate.
     * @return {module:com.alterian.auth.model/AuthenticationResults} The populated <code>AuthenticationResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthenticationResults();

            if (data.hasOwnProperty('Token')) {
                obj['Token'] = ApiClient.convertToType(data['Token'], 'String');
            }
            if (data.hasOwnProperty('LoginID')) {
                obj['LoginID'] = ApiClient.convertToType(data['LoginID'], 'String');
            }
            if (data.hasOwnProperty('Sites')) {
                obj['Sites'] = ApiClient.convertToType(data['Sites'], {'String': Applications});
            }
            if (data.hasOwnProperty('PasswordExpired')) {
                obj['PasswordExpired'] = ApiClient.convertToType(data['PasswordExpired'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthenticationResults</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthenticationResults</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Token'] && !(typeof data['Token'] === 'string' || data['Token'] instanceof String)) {
            throw new Error("Expected the field `Token` to be a primitive type in the JSON string but got " + data['Token']);
        }
        // ensure the json data is a string
        if (data['LoginID'] && !(typeof data['LoginID'] === 'string' || data['LoginID'] instanceof String)) {
            throw new Error("Expected the field `LoginID` to be a primitive type in the JSON string but got " + data['LoginID']);
        }

        return true;
    }


}



/**
 * 
 * @member {String} Token
 */
AuthenticationResults.prototype['Token'] = undefined;

/**
 * 
 * @member {String} LoginID
 */
AuthenticationResults.prototype['LoginID'] = undefined;

/**
 * 
 * @member {Object.<String, module:com.alterian.auth.model/Applications>} Sites
 */
AuthenticationResults.prototype['Sites'] = undefined;

/**
 * 
 * @member {Boolean} PasswordExpired
 */
AuthenticationResults.prototype['PasswordExpired'] = undefined;






export default AuthenticationResults;

