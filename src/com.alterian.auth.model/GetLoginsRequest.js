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
 * The GetLoginsRequest model module.
 * @module com.alterian.auth.model/GetLoginsRequest
 * @version 6.35.0
 */
class GetLoginsRequest {
    /**
     * Constructs a new <code>GetLoginsRequest</code>.
     * @alias module:com.alterian.auth.model/GetLoginsRequest
     */
    constructor() { 
        
        GetLoginsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoginsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.auth.model/GetLoginsRequest} obj Optional instance to populate.
     * @return {module:com.alterian.auth.model/GetLoginsRequest} The populated <code>GetLoginsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoginsRequest();

            if (data.hasOwnProperty('Enabled')) {
                obj['Enabled'] = ApiClient.convertToType(data['Enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('Exclusion')) {
                obj['Exclusion'] = ApiClient.convertToType(data['Exclusion'], ['String']);
            }
            if (data.hasOwnProperty('Inclusion')) {
                obj['Inclusion'] = ApiClient.convertToType(data['Inclusion'], ['String']);
            }
            if (data.hasOwnProperty('NoSettings')) {
                obj['NoSettings'] = ApiClient.convertToType(data['NoSettings'], 'Boolean');
            }
            if (data.hasOwnProperty('SettingValues')) {
                obj['SettingValues'] = ApiClient.convertToType(data['SettingValues'], {'String': 'Number'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetLoginsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetLoginsRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['Exclusion'])) {
            throw new Error("Expected the field `Exclusion` to be an array in the JSON data but got " + data['Exclusion']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Inclusion'])) {
            throw new Error("Expected the field `Inclusion` to be an array in the JSON data but got " + data['Inclusion']);
        }

        return true;
    }


}



/**
 * If you want to query by the enabled, provide this parameter
 * @member {Boolean} Enabled
 */
GetLoginsRequest.prototype['Enabled'] = undefined;

/**
 * List of login Ids to exclude from the result
 * @member {Array.<String>} Exclusion
 */
GetLoginsRequest.prototype['Exclusion'] = undefined;

/**
 * List of login Ids to return
 * @member {Array.<String>} Inclusion
 */
GetLoginsRequest.prototype['Inclusion'] = undefined;

/**
 * If you do not want settings to be returns, pass in true
 * @member {Boolean} NoSettings
 */
GetLoginsRequest.prototype['NoSettings'] = undefined;

/**
 * If you would like to query by setting value, populate this dictionary
 * @member {Object.<String, Number>} SettingValues
 */
GetLoginsRequest.prototype['SettingValues'] = undefined;






export default GetLoginsRequest;

