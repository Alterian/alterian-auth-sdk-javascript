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
 * The FormsAuthenticationRequest model module.
 * @module com.alterian.auth.model/FormsAuthenticationRequest
 * @version 6.35.0
 */
class FormsAuthenticationRequest {
    /**
     * Constructs a new <code>FormsAuthenticationRequest</code>.
     * @alias module:com.alterian.auth.model/FormsAuthenticationRequest
     */
    constructor() { 
        
        FormsAuthenticationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FormsAuthenticationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.auth.model/FormsAuthenticationRequest} obj Optional instance to populate.
     * @return {module:com.alterian.auth.model/FormsAuthenticationRequest} The populated <code>FormsAuthenticationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormsAuthenticationRequest();

            if (data.hasOwnProperty('BumpExisting')) {
                obj['BumpExisting'] = ApiClient.convertToType(data['BumpExisting'], 'Boolean');
            }
            if (data.hasOwnProperty('NewPassword')) {
                obj['NewPassword'] = ApiClient.convertToType(data['NewPassword'], 'String');
            }
            if (data.hasOwnProperty('Password')) {
                obj['Password'] = ApiClient.convertToType(data['Password'], 'String');
            }
            if (data.hasOwnProperty('Username')) {
                obj['Username'] = ApiClient.convertToType(data['Username'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FormsAuthenticationRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FormsAuthenticationRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['NewPassword'] && !(typeof data['NewPassword'] === 'string' || data['NewPassword'] instanceof String)) {
            throw new Error("Expected the field `NewPassword` to be a primitive type in the JSON string but got " + data['NewPassword']);
        }
        // ensure the json data is a string
        if (data['Password'] && !(typeof data['Password'] === 'string' || data['Password'] instanceof String)) {
            throw new Error("Expected the field `Password` to be a primitive type in the JSON string but got " + data['Password']);
        }
        // ensure the json data is a string
        if (data['Username'] && !(typeof data['Username'] === 'string' || data['Username'] instanceof String)) {
            throw new Error("Expected the field `Username` to be a primitive type in the JSON string but got " + data['Username']);
        }

        return true;
    }


}



/**
 * Not used at this time.
 * @member {Boolean} BumpExisting
 */
FormsAuthenticationRequest.prototype['BumpExisting'] = undefined;

/**
 * If a password change is required, provide it here.
 * @member {String} NewPassword
 */
FormsAuthenticationRequest.prototype['NewPassword'] = undefined;

/**
 * SHA1 Encoded password
 * @member {String} Password
 */
FormsAuthenticationRequest.prototype['Password'] = undefined;

/**
 * The login name
 * @member {String} Username
 */
FormsAuthenticationRequest.prototype['Username'] = undefined;






export default FormsAuthenticationRequest;
