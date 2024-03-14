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
import GetCertificatesRequest from '../com.alterian.auth.model/GetCertificatesRequest';
import GetHostNamesDefaultResponse from '../com.alterian.auth.model/GetHostNamesDefaultResponse';
import GetSiteDefaultResponse from '../com.alterian.auth.model/GetSiteDefaultResponse';
import GetSiteRequest from '../com.alterian.auth.model/GetSiteRequest';
import GetSiteTypesDefaultResponse from '../com.alterian.auth.model/GetSiteTypesDefaultResponse';
import GetSitesDefaultResponse from '../com.alterian.auth.model/GetSitesDefaultResponse';
import GetSitesRequest from '../com.alterian.auth.model/GetSitesRequest';

/**
* Sites service.
* @module api/SitesApi
* @version 6.35.0
*/
export default class SitesApi {

    /**
    * Constructs a new SitesApi. 
    * @alias module:api/SitesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * This is the name of the server that you have IMS running on
     * This is the name of the server that you have IMS running on
     * @param {module:com.alterian.auth.model/GetCertificatesRequest} getCertificatesRequest This is the name of the server that you have IMS running on
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/GetHostNamesDefaultResponse} and HTTP response
     */
    getHostNamesWithHttpInfo(getCertificatesRequest) {
      let postBody = getCertificatesRequest;
      // verify the required parameter 'getCertificatesRequest' is set
      if (getCertificatesRequest === undefined || getCertificatesRequest === null) {
        throw new Error("Missing the required parameter 'getCertificatesRequest' when calling getHostNames");
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
      let returnType = GetHostNamesDefaultResponse;
      return this.apiClient.callApi(
        '/GetHostNames', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * This is the name of the server that you have IMS running on
     * This is the name of the server that you have IMS running on
     * @param {module:com.alterian.auth.model/GetCertificatesRequest} getCertificatesRequest This is the name of the server that you have IMS running on
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/GetHostNamesDefaultResponse}
     */
    getHostNames(getCertificatesRequest) {
      return this.getHostNamesWithHttpInfo(getCertificatesRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return back a specific @see(AuthSite)
     * Return back a specific @see(AuthSite)
     * @param {module:com.alterian.auth.model/GetSiteRequest} getSiteRequest Return back a specific @see(AuthSite)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/GetSiteDefaultResponse} and HTTP response
     */
    getSiteWithHttpInfo(getSiteRequest) {
      let postBody = getSiteRequest;
      // verify the required parameter 'getSiteRequest' is set
      if (getSiteRequest === undefined || getSiteRequest === null) {
        throw new Error("Missing the required parameter 'getSiteRequest' when calling getSite");
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
      let returnType = GetSiteDefaultResponse;
      return this.apiClient.callApi(
        '/GetSite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Return back a specific @see(AuthSite)
     * Return back a specific @see(AuthSite)
     * @param {module:com.alterian.auth.model/GetSiteRequest} getSiteRequest Return back a specific @see(AuthSite)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/GetSiteDefaultResponse}
     */
    getSite(getSiteRequest) {
      return this.getSiteWithHttpInfo(getSiteRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return back a list of site types for use with @see(GetSites)
     * Return back a list of site types for use with @see(GetSites)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/GetSiteTypesDefaultResponse} and HTTP response
     */
    getSiteTypesWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['TokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSiteTypesDefaultResponse;
      return this.apiClient.callApi(
        '/GetSiteTypes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Return back a list of site types for use with @see(GetSites)
     * Return back a list of site types for use with @see(GetSites)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/GetSiteTypesDefaultResponse}
     */
    getSiteTypes() {
      return this.getSiteTypesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return back a list of @see(AuthSite)s; useful for APIs which require an authentication site identifier
     * Return back a list of @see(AuthSite)s; useful for APIs which require an authentication site identifier
     * @param {module:com.alterian.auth.model/GetSitesRequest} getSitesRequest Return back a list of @see(AuthSite)s; useful for APIs which require an authentication site identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/GetSitesDefaultResponse} and HTTP response
     */
    getSitesWithHttpInfo(getSitesRequest) {
      let postBody = getSitesRequest;
      // verify the required parameter 'getSitesRequest' is set
      if (getSitesRequest === undefined || getSitesRequest === null) {
        throw new Error("Missing the required parameter 'getSitesRequest' when calling getSites");
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
      let returnType = GetSitesDefaultResponse;
      return this.apiClient.callApi(
        '/GetSites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Return back a list of @see(AuthSite)s; useful for APIs which require an authentication site identifier
     * Return back a list of @see(AuthSite)s; useful for APIs which require an authentication site identifier
     * @param {module:com.alterian.auth.model/GetSitesRequest} getSitesRequest Return back a list of @see(AuthSite)s; useful for APIs which require an authentication site identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/GetSitesDefaultResponse}
     */
    getSites(getSitesRequest) {
      return this.getSitesWithHttpInfo(getSitesRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
