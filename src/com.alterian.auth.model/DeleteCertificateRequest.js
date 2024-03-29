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
 * The DeleteCertificateRequest model module.
 * @module com.alterian.auth.model/DeleteCertificateRequest
 * @version 6.35.0
 */
class DeleteCertificateRequest {
    /**
     * Constructs a new <code>DeleteCertificateRequest</code>.
     * @alias module:com.alterian.auth.model/DeleteCertificateRequest
     */
    constructor() { 
        
        DeleteCertificateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteCertificateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.auth.model/DeleteCertificateRequest} obj Optional instance to populate.
     * @return {module:com.alterian.auth.model/DeleteCertificateRequest} The populated <code>DeleteCertificateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteCertificateRequest();

            if (data.hasOwnProperty('CertificateId')) {
                obj['CertificateId'] = ApiClient.convertToType(data['CertificateId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteCertificateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteCertificateRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Id of the certificate to delete
 * @member {Number} CertificateId
 */
DeleteCertificateRequest.prototype['CertificateId'] = undefined;






export default DeleteCertificateRequest;

