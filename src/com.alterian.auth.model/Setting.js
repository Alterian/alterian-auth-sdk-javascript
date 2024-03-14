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
import SettingAppliesTo from './SettingAppliesTo';

/**
 * The Setting model module.
 * @module com.alterian.auth.model/Setting
 * @version 6.35.0
 */
class Setting {
    /**
     * Constructs a new <code>Setting</code>.
     * 
     * @alias module:com.alterian.auth.model/Setting
     */
    constructor() { 
        
        Setting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Setting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.auth.model/Setting} obj Optional instance to populate.
     * @return {module:com.alterian.auth.model/Setting} The populated <code>Setting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Setting();

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('AppliesTo')) {
                obj['AppliesTo'] = SettingAppliesTo.constructFromObject(data['AppliesTo']);
            }
            if (data.hasOwnProperty('IsSystem')) {
                obj['IsSystem'] = ApiClient.convertToType(data['IsSystem'], 'Boolean');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Setting</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Setting</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Value'] && !(typeof data['Value'] === 'string' || data['Value'] instanceof String)) {
            throw new Error("Expected the field `Value` to be a primitive type in the JSON string but got " + data['Value']);
        }

        return true;
    }


}



/**
 * Id of the setting
 * @member {Number} ID
 */
Setting.prototype['ID'] = undefined;

/**
 * Name of the setting, must be unique
 * @member {String} Name
 */
Setting.prototype['Name'] = undefined;

/**
 * @member {module:com.alterian.auth.model/SettingAppliesTo} AppliesTo
 */
Setting.prototype['AppliesTo'] = undefined;

/**
 * Is this a system setting?  if so, any attempts to modify it will result in an AccessDenied error.  You can create a setting with IsSystem but, once created, you will not be able to change it [or delete it]
 * @member {Boolean} IsSystem
 */
Setting.prototype['IsSystem'] = undefined;

/**
 * This is only filled in with a call to @see(GetSettingsValues).  It is ignored when creating settings
 * @member {String} Value
 */
Setting.prototype['Value'] = undefined;






export default Setting;

