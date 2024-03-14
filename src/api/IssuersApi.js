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
import AddCertificateDefaultResponse from '../com.alterian.auth.model/AddCertificateDefaultResponse';
import AddIssuerRequest from '../com.alterian.auth.model/AddIssuerRequest';
import DeleteIssuerRequest from '../com.alterian.auth.model/DeleteIssuerRequest';
import GetCertificatesRequest from '../com.alterian.auth.model/GetCertificatesRequest';
import GetIssuerDefaultResponse from '../com.alterian.auth.model/GetIssuerDefaultResponse';
import GetIssuerRequest from '../com.alterian.auth.model/GetIssuerRequest';
import GetIssuersDefaultResponse from '../com.alterian.auth.model/GetIssuersDefaultResponse';
import LogoutDefaultResponse from '../com.alterian.auth.model/LogoutDefaultResponse';

/**
* Issuers service.
* @module api/IssuersApi
* @version 6.35.0
*/
export default class IssuersApi {

    /**
    * Constructs a new IssuersApi. 
    * @alias module:api/IssuersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Adds an Issuer for a Certificate used with single sign on
     * Adds an Issuer for a Certificate used with single sign on
     * @param {module:com.alterian.auth.model/AddIssuerRequest} addIssuerRequest Adds an Issuer for a Certificate used with single sign on
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/AddCertificateDefaultResponse} and HTTP response
     */
    addIssuerWithHttpInfo(addIssuerRequest) {
      let postBody = addIssuerRequest;
      // verify the required parameter 'addIssuerRequest' is set
      if (addIssuerRequest === undefined || addIssuerRequest === null) {
        throw new Error("Missing the required parameter 'addIssuerRequest' when calling addIssuer");
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
      let returnType = AddCertificateDefaultResponse;
      return this.apiClient.callApi(
        '/AddIssuer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Adds an Issuer for a Certificate used with single sign on
     * Adds an Issuer for a Certificate used with single sign on
     * @param {module:com.alterian.auth.model/AddIssuerRequest} addIssuerRequest Adds an Issuer for a Certificate used with single sign on
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/AddCertificateDefaultResponse}
     */
    addIssuer(addIssuerRequest) {
      return this.addIssuerWithHttpInfo(addIssuerRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes an @see(Issuer) for a Certificate used with single sign on
     * Deletes an @see(Issuer) for a Certificate used with single sign on
     * @param {module:com.alterian.auth.model/DeleteIssuerRequest} deleteIssuerRequest Deletes an @see(Issuer) for a Certificate used with single sign on
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/LogoutDefaultResponse} and HTTP response
     */
    deleteIssuerWithHttpInfo(deleteIssuerRequest) {
      let postBody = deleteIssuerRequest;
      // verify the required parameter 'deleteIssuerRequest' is set
      if (deleteIssuerRequest === undefined || deleteIssuerRequest === null) {
        throw new Error("Missing the required parameter 'deleteIssuerRequest' when calling deleteIssuer");
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
      let returnType = LogoutDefaultResponse;
      return this.apiClient.callApi(
        '/DeleteIssuer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes an @see(Issuer) for a Certificate used with single sign on
     * Deletes an @see(Issuer) for a Certificate used with single sign on
     * @param {module:com.alterian.auth.model/DeleteIssuerRequest} deleteIssuerRequest Deletes an @see(Issuer) for a Certificate used with single sign on
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/LogoutDefaultResponse}
     */
    deleteIssuer(deleteIssuerRequest) {
      return this.deleteIssuerWithHttpInfo(deleteIssuerRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves an Issuer for a Certificate used with single sign on
     * Retrieves an Issuer for a Certificate used with single sign on
     * @param {module:com.alterian.auth.model/GetIssuerRequest} getIssuerRequest Retrieves an Issuer for a Certificate used with single sign on
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/GetIssuerDefaultResponse} and HTTP response
     */
    getIssuerWithHttpInfo(getIssuerRequest) {
      let postBody = getIssuerRequest;
      // verify the required parameter 'getIssuerRequest' is set
      if (getIssuerRequest === undefined || getIssuerRequest === null) {
        throw new Error("Missing the required parameter 'getIssuerRequest' when calling getIssuer");
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
      let returnType = GetIssuerDefaultResponse;
      return this.apiClient.callApi(
        '/GetIssuer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves an Issuer for a Certificate used with single sign on
     * Retrieves an Issuer for a Certificate used with single sign on
     * @param {module:com.alterian.auth.model/GetIssuerRequest} getIssuerRequest Retrieves an Issuer for a Certificate used with single sign on
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/GetIssuerDefaultResponse}
     */
    getIssuer(getIssuerRequest) {
      return this.getIssuerWithHttpInfo(getIssuerRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets a list of available issuers
     * Gets a list of available issuers
     * @param {module:com.alterian.auth.model/GetCertificatesRequest} getCertificatesRequest Gets a list of available issuers
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/GetIssuersDefaultResponse} and HTTP response
     */
    getIssuersWithHttpInfo(getCertificatesRequest) {
      let postBody = getCertificatesRequest;
      // verify the required parameter 'getCertificatesRequest' is set
      if (getCertificatesRequest === undefined || getCertificatesRequest === null) {
        throw new Error("Missing the required parameter 'getCertificatesRequest' when calling getIssuers");
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
      let returnType = GetIssuersDefaultResponse;
      return this.apiClient.callApi(
        '/GetIssuers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets a list of available issuers
     * Gets a list of available issuers
     * @param {module:com.alterian.auth.model/GetCertificatesRequest} getCertificatesRequest Gets a list of available issuers
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/GetIssuersDefaultResponse}
     */
    getIssuers(getCertificatesRequest) {
      return this.getIssuersWithHttpInfo(getCertificatesRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates information associated with a certificate's issuer
     * Updates information associated with a certificate's issuer
     * @param {module:com.alterian.auth.model/AddIssuerRequest} addIssuerRequest Updates information associated with a certificate's issuer
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/LogoutDefaultResponse} and HTTP response
     */
    updateIssuerWithHttpInfo(addIssuerRequest) {
      let postBody = addIssuerRequest;
      // verify the required parameter 'addIssuerRequest' is set
      if (addIssuerRequest === undefined || addIssuerRequest === null) {
        throw new Error("Missing the required parameter 'addIssuerRequest' when calling updateIssuer");
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
      let returnType = LogoutDefaultResponse;
      return this.apiClient.callApi(
        '/UpdateIssuer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates information associated with a certificate's issuer
     * Updates information associated with a certificate's issuer
     * @param {module:com.alterian.auth.model/AddIssuerRequest} addIssuerRequest Updates information associated with a certificate's issuer
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/LogoutDefaultResponse}
     */
    updateIssuer(addIssuerRequest) {
      return this.updateIssuerWithHttpInfo(addIssuerRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}