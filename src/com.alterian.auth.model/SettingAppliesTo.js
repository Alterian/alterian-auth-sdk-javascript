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
* Enum class SettingAppliesTo.
* @enum {}
* @readonly
*/
export default class SettingAppliesTo {
    
        /**
         * value: 1
         * @const
         */
        "Site" = 1;

    
        /**
         * value: 2
         * @const
         */
        "Login" = 2;

    
        /**
         * value: 4
         * @const
         */
        "Issuer" = 4;

    

    /**
    * Returns a <code>SettingAppliesTo</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.alterian.auth.model/SettingAppliesTo} The enum <code>SettingAppliesTo</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

