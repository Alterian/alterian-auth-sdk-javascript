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
import AddSettingRequest from '../com.alterian.auth.model/AddSettingRequest';
import DeleteSettingRequest from '../com.alterian.auth.model/DeleteSettingRequest';
import GetSettingDefaultResponse from '../com.alterian.auth.model/GetSettingDefaultResponse';
import GetSettingRequest from '../com.alterian.auth.model/GetSettingRequest';
import GetSettingsDefaultResponse from '../com.alterian.auth.model/GetSettingsDefaultResponse';
import GetSettingsRequest from '../com.alterian.auth.model/GetSettingsRequest';
import GetSettingsValuesRequest from '../com.alterian.auth.model/GetSettingsValuesRequest';
import LogoutDefaultResponse from '../com.alterian.auth.model/LogoutDefaultResponse';
import SetEMServiceURLRequest from '../com.alterian.auth.model/SetEMServiceURLRequest';

/**
* Settings service.
* @module api/SettingsApi
* @version 6.35.0
*/
export default class SettingsApi {

    /**
    * Constructs a new SettingsApi. 
    * @alias module:api/SettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Adds in a setting which can then be mapped to an issuer for the purposes of claims authentication.
     * Adds in a setting which can then be mapped to an issuer for the purposes of claims authentication.
     * @param {module:com.alterian.auth.model/AddSettingRequest} addSettingRequest Adds in a setting which can then be mapped to an issuer for the purposes of claims authentication.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/AddCertificateDefaultResponse} and HTTP response
     */
    addSettingWithHttpInfo(addSettingRequest) {
      let postBody = addSettingRequest;
      // verify the required parameter 'addSettingRequest' is set
      if (addSettingRequest === undefined || addSettingRequest === null) {
        throw new Error("Missing the required parameter 'addSettingRequest' when calling addSetting");
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
        '/AddSetting', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Adds in a setting which can then be mapped to an issuer for the purposes of claims authentication.
     * Adds in a setting which can then be mapped to an issuer for the purposes of claims authentication.
     * @param {module:com.alterian.auth.model/AddSettingRequest} addSettingRequest Adds in a setting which can then be mapped to an issuer for the purposes of claims authentication.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/AddCertificateDefaultResponse}
     */
    addSetting(addSettingRequest) {
      return this.addSettingWithHttpInfo(addSettingRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a setting
     * Deletes a setting
     * @param {module:com.alterian.auth.model/DeleteSettingRequest} deleteSettingRequest Deletes a setting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/LogoutDefaultResponse} and HTTP response
     */
    deleteSettingWithHttpInfo(deleteSettingRequest) {
      let postBody = deleteSettingRequest;
      // verify the required parameter 'deleteSettingRequest' is set
      if (deleteSettingRequest === undefined || deleteSettingRequest === null) {
        throw new Error("Missing the required parameter 'deleteSettingRequest' when calling deleteSetting");
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
        '/DeleteSetting', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a setting
     * Deletes a setting
     * @param {module:com.alterian.auth.model/DeleteSettingRequest} deleteSettingRequest Deletes a setting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/LogoutDefaultResponse}
     */
    deleteSetting(deleteSettingRequest) {
      return this.deleteSettingWithHttpInfo(deleteSettingRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Read a setting
     * Read a setting
     * @param {module:com.alterian.auth.model/GetSettingRequest} getSettingRequest Read a setting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/GetSettingDefaultResponse} and HTTP response
     */
    getSettingWithHttpInfo(getSettingRequest) {
      let postBody = getSettingRequest;
      // verify the required parameter 'getSettingRequest' is set
      if (getSettingRequest === undefined || getSettingRequest === null) {
        throw new Error("Missing the required parameter 'getSettingRequest' when calling getSetting");
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
      let returnType = GetSettingDefaultResponse;
      return this.apiClient.callApi(
        '/GetSetting', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Read a setting
     * Read a setting
     * @param {module:com.alterian.auth.model/GetSettingRequest} getSettingRequest Read a setting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/GetSettingDefaultResponse}
     */
    getSetting(getSettingRequest) {
      return this.getSettingWithHttpInfo(getSettingRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reads a list of settings
     * Reads a list of settings
     * @param {module:com.alterian.auth.model/GetSettingsRequest} getSettingsRequest Reads a list of settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/GetSettingsDefaultResponse} and HTTP response
     */
    getSettingsWithHttpInfo(getSettingsRequest) {
      let postBody = getSettingsRequest;
      // verify the required parameter 'getSettingsRequest' is set
      if (getSettingsRequest === undefined || getSettingsRequest === null) {
        throw new Error("Missing the required parameter 'getSettingsRequest' when calling getSettings");
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
      let returnType = GetSettingsDefaultResponse;
      return this.apiClient.callApi(
        '/GetSettings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Reads a list of settings
     * Reads a list of settings
     * @param {module:com.alterian.auth.model/GetSettingsRequest} getSettingsRequest Reads a list of settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/GetSettingsDefaultResponse}
     */
    getSettings(getSettingsRequest) {
      return this.getSettingsWithHttpInfo(getSettingsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reads settings and their values
     * Reads settings and their values
     * @param {module:com.alterian.auth.model/GetSettingsValuesRequest} getSettingsValuesRequest Reads settings and their values
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/GetSettingsDefaultResponse} and HTTP response
     */
    getSettingsValuesWithHttpInfo(getSettingsValuesRequest) {
      let postBody = getSettingsValuesRequest;
      // verify the required parameter 'getSettingsValuesRequest' is set
      if (getSettingsValuesRequest === undefined || getSettingsValuesRequest === null) {
        throw new Error("Missing the required parameter 'getSettingsValuesRequest' when calling getSettingsValues");
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
      let returnType = GetSettingsDefaultResponse;
      return this.apiClient.callApi(
        '/GetSettingsValues', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Reads settings and their values
     * Reads settings and their values
     * @param {module:com.alterian.auth.model/GetSettingsValuesRequest} getSettingsValuesRequest Reads settings and their values
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/GetSettingsDefaultResponse}
     */
    getSettingsValues(getSettingsValuesRequest) {
      return this.getSettingsValuesWithHttpInfo(getSettingsValuesRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates the EM service URL
     * Updates the EM service URL
     * @param {module:com.alterian.auth.model/SetEMServiceURLRequest} setEMServiceURLRequest Updates the EM service URL
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/LogoutDefaultResponse} and HTTP response
     */
    setEMServiceURLWithHttpInfo(setEMServiceURLRequest) {
      let postBody = setEMServiceURLRequest;
      // verify the required parameter 'setEMServiceURLRequest' is set
      if (setEMServiceURLRequest === undefined || setEMServiceURLRequest === null) {
        throw new Error("Missing the required parameter 'setEMServiceURLRequest' when calling setEMServiceURL");
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
        '/SetEMServiceURL', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates the EM service URL
     * Updates the EM service URL
     * @param {module:com.alterian.auth.model/SetEMServiceURLRequest} setEMServiceURLRequest Updates the EM service URL
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/LogoutDefaultResponse}
     */
    setEMServiceURL(setEMServiceURLRequest) {
      return this.setEMServiceURLWithHttpInfo(setEMServiceURLRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a setting
     * Updates a setting
     * @param {module:com.alterian.auth.model/AddSettingRequest} addSettingRequest Updates a setting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.auth.model/LogoutDefaultResponse} and HTTP response
     */
    updateSettingWithHttpInfo(addSettingRequest) {
      let postBody = addSettingRequest;
      // verify the required parameter 'addSettingRequest' is set
      if (addSettingRequest === undefined || addSettingRequest === null) {
        throw new Error("Missing the required parameter 'addSettingRequest' when calling updateSetting");
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
        '/UpdateSetting', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a setting
     * Updates a setting
     * @param {module:com.alterian.auth.model/AddSettingRequest} addSettingRequest Updates a setting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.auth.model/LogoutDefaultResponse}
     */
    updateSetting(addSettingRequest) {
      return this.updateSettingWithHttpInfo(addSettingRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
