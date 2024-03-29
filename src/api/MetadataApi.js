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


import ApiClient from "../ApiClient";
import GetAPIMetadataDefaultResponse from '../com.alterian.auth.model/GetAPIMetadataDefaultResponse';
import GetAPIMetadataRequest from '../com.alterian.auth.model/GetAPIMetadataRequest';

/**
* Metadata service.
* @module api/MetadataApi
* @version 6.35.0
*/
export default class MetadataApi {

    /**
    * Constructs a new MetadataApi. 
    * @alias module:api/MetadataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns back a list of @see(APIMetadata) objects from the system. This allows the caller to discover all the methods and class types of this API, including validation rules.
     * Returns back a list of @see(APIMetadata) objects from the system. This allows the caller to discover all the methods and class types of this API, including validation rules.
     * @param {module:com.alterian.auth.model/GetAPIMetadataRequest} getAPIMetadataRequest Returns back a list of @see(APIMetadata) objects from the system. This allows the caller to discover all the methods and class types of this API, including validation rules.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/GetAPIMetadataDefaultResponse} and HTTP response
     */
    getAPIMetadataWithHttpInfo(getAPIMetadataRequest) {
      let postBody = getAPIMetadataRequest;
      // verify the required parameter 'getAPIMetadataRequest' is set
      if (getAPIMetadataRequest === undefined || getAPIMetadataRequest === null) {
        throw new Error("Missing the required parameter 'getAPIMetadataRequest' when calling getAPIMetadata");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['TokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetAPIMetadataDefaultResponse;
      return this.apiClient.callApi(
        '/GetAPIMetadata', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns back a list of @see(APIMetadata) objects from the system. This allows the caller to discover all the methods and class types of this API, including validation rules.
     * Returns back a list of @see(APIMetadata) objects from the system. This allows the caller to discover all the methods and class types of this API, including validation rules.
     * @param {module:com.alterian.auth.model/GetAPIMetadataRequest} getAPIMetadataRequest Returns back a list of @see(APIMetadata) objects from the system. This allows the caller to discover all the methods and class types of this API, including validation rules.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/GetAPIMetadataDefaultResponse}
     */
    getAPIMetadata(getAPIMetadataRequest) {
      return this.getAPIMetadataWithHttpInfo(getAPIMetadataRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
