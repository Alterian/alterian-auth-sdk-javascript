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
 * The RenameLoginRequest model module.
 * @module com.alterian.auth.model/RenameLoginRequest
 * @version 6.35.0
 */
class RenameLoginRequest {
    /**
     * Constructs a new <code>RenameLoginRequest</code>.
     * @alias module:com.alterian.auth.model/RenameLoginRequest
     */
    constructor() { 
        
        RenameLoginRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RenameLoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.auth.model/RenameLoginRequest} obj Optional instance to populate.
     * @return {module:com.alterian.auth.model/RenameLoginRequest} The populated <code>RenameLoginRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenameLoginRequest();

            if (data.hasOwnProperty('LoginId')) {
                obj['LoginId'] = ApiClient.convertToType(data['LoginId'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RenameLoginRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RenameLoginRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['LoginId'] && !(typeof data['LoginId'] === 'string' || data['LoginId'] instanceof String)) {
            throw new Error("Expected the field `LoginId` to be a primitive type in the JSON string but got " + data['LoginId']);
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }

        return true;
    }


}



/**
 * Id of the login you wish to rename
 * @member {String} LoginId
 */
RenameLoginRequest.prototype['LoginId'] = undefined;

/**
 * New login name
 * @member {String} Name
 */
RenameLoginRequest.prototype['Name'] = undefined;






export default RenameLoginRequest;
