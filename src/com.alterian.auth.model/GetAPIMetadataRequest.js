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
import APICursor from './APICursor';
import APIMetadataType from './APIMetadataType';

/**
 * The GetAPIMetadataRequest model module.
 * @module com.alterian.auth.model/GetAPIMetadataRequest
 * @version 6.35.0
 */
class GetAPIMetadataRequest {
    /**
     * Constructs a new <code>GetAPIMetadataRequest</code>.
     * @alias module:com.alterian.auth.model/GetAPIMetadataRequest
     */
    constructor() { 
        
        GetAPIMetadataRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAPIMetadataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.auth.model/GetAPIMetadataRequest} obj Optional instance to populate.
     * @return {module:com.alterian.auth.model/GetAPIMetadataRequest} The populated <code>GetAPIMetadataRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAPIMetadataRequest();

            if (data.hasOwnProperty('Cursor')) {
                obj['Cursor'] = APICursor.constructFromObject(data['Cursor']);
            }
            if (data.hasOwnProperty('IncludeEmpty')) {
                obj['IncludeEmpty'] = ApiClient.convertToType(data['IncludeEmpty'], 'Boolean');
            }
            if (data.hasOwnProperty('MetadataName')) {
                obj['MetadataName'] = ApiClient.convertToType(data['MetadataName'], 'String');
            }
            if (data.hasOwnProperty('MetadataType')) {
                obj['MetadataType'] = APIMetadataType.constructFromObject(data['MetadataType']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetAPIMetadataRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetAPIMetadataRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `Cursor`
        if (data['Cursor']) { // data not null
          APICursor.validateJSON(data['Cursor']);
        }
        // ensure the json data is a string
        if (data['MetadataName'] && !(typeof data['MetadataName'] === 'string' || data['MetadataName'] instanceof String)) {
            throw new Error("Expected the field `MetadataName` to be a primitive type in the JSON string but got " + data['MetadataName']);
        }

        return true;
    }


}



/**
 * @member {module:com.alterian.auth.model/APICursor} Cursor
 */
GetAPIMetadataRequest.prototype['Cursor'] = undefined;

/**
 * 
 * @member {Boolean} IncludeEmpty
 */
GetAPIMetadataRequest.prototype['IncludeEmpty'] = undefined;

/**
 * 
 * @member {String} MetadataName
 */
GetAPIMetadataRequest.prototype['MetadataName'] = undefined;

/**
 * @member {module:com.alterian.auth.model/APIMetadataType} MetadataType
 */
GetAPIMetadataRequest.prototype['MetadataType'] = undefined;






export default GetAPIMetadataRequest;

