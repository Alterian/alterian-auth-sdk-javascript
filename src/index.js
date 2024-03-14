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


import ApiClient from './ApiClient';
import APICursor from './com.alterian.auth.model/APICursor';
import APIMetadata from './com.alterian.auth.model/APIMetadata';
import APIMetadataType from './com.alterian.auth.model/APIMetadataType';
import AddCertificateDefaultResponse from './com.alterian.auth.model/AddCertificateDefaultResponse';
import AddCertificateRequest from './com.alterian.auth.model/AddCertificateRequest';
import AddIssuerRequest from './com.alterian.auth.model/AddIssuerRequest';
import AddLoginDefaultResponse from './com.alterian.auth.model/AddLoginDefaultResponse';
import AddLoginRequest from './com.alterian.auth.model/AddLoginRequest';
import AddSettingRequest from './com.alterian.auth.model/AddSettingRequest';
import ApplicationDetails from './com.alterian.auth.model/ApplicationDetails';
import ApplicationLoginDefaultResponse from './com.alterian.auth.model/ApplicationLoginDefaultResponse';
import ApplicationLoginRequest from './com.alterian.auth.model/ApplicationLoginRequest';
import Applications from './com.alterian.auth.model/Applications';
import AuthSite from './com.alterian.auth.model/AuthSite';
import AuthSiteType from './com.alterian.auth.model/AuthSiteType';
import AuthenticationResults from './com.alterian.auth.model/AuthenticationResults';
import Certificate from './com.alterian.auth.model/Certificate';
import ChangePasswordRequest from './com.alterian.auth.model/ChangePasswordRequest';
import DeleteCertificateRequest from './com.alterian.auth.model/DeleteCertificateRequest';
import DeleteIssuerRequest from './com.alterian.auth.model/DeleteIssuerRequest';
import DeleteSettingRequest from './com.alterian.auth.model/DeleteSettingRequest';
import DisableLoginRequest from './com.alterian.auth.model/DisableLoginRequest';
import EnableLoginRequest from './com.alterian.auth.model/EnableLoginRequest';
import ExpirePasswordRequest from './com.alterian.auth.model/ExpirePasswordRequest';
import FormsAuthenticationDefaultResponse from './com.alterian.auth.model/FormsAuthenticationDefaultResponse';
import FormsAuthenticationRequest from './com.alterian.auth.model/FormsAuthenticationRequest';
import GetAPIMetadataDefaultResponse from './com.alterian.auth.model/GetAPIMetadataDefaultResponse';
import GetAPIMetadataRequest from './com.alterian.auth.model/GetAPIMetadataRequest';
import GetCertificateDefaultResponse from './com.alterian.auth.model/GetCertificateDefaultResponse';
import GetCertificateRequest from './com.alterian.auth.model/GetCertificateRequest';
import GetCertificatesDefaultResponse from './com.alterian.auth.model/GetCertificatesDefaultResponse';
import GetCertificatesRequest from './com.alterian.auth.model/GetCertificatesRequest';
import GetCurrentLoginDefaultResponse from './com.alterian.auth.model/GetCurrentLoginDefaultResponse';
import GetHostNamesDefaultResponse from './com.alterian.auth.model/GetHostNamesDefaultResponse';
import GetIdentityUrlDefaultResponse from './com.alterian.auth.model/GetIdentityUrlDefaultResponse';
import GetIdentityUrlRequest from './com.alterian.auth.model/GetIdentityUrlRequest';
import GetIssuerDefaultResponse from './com.alterian.auth.model/GetIssuerDefaultResponse';
import GetIssuerRequest from './com.alterian.auth.model/GetIssuerRequest';
import GetIssuersDefaultResponse from './com.alterian.auth.model/GetIssuersDefaultResponse';
import GetLoginRequest from './com.alterian.auth.model/GetLoginRequest';
import GetLoginsDefaultResponse from './com.alterian.auth.model/GetLoginsDefaultResponse';
import GetLoginsRequest from './com.alterian.auth.model/GetLoginsRequest';
import GetPasswordComplexityRulesDefaultResponse from './com.alterian.auth.model/GetPasswordComplexityRulesDefaultResponse';
import GetSettingDefaultResponse from './com.alterian.auth.model/GetSettingDefaultResponse';
import GetSettingRequest from './com.alterian.auth.model/GetSettingRequest';
import GetSettingsDefaultResponse from './com.alterian.auth.model/GetSettingsDefaultResponse';
import GetSettingsRequest from './com.alterian.auth.model/GetSettingsRequest';
import GetSettingsValuesRequest from './com.alterian.auth.model/GetSettingsValuesRequest';
import GetSiteDefaultResponse from './com.alterian.auth.model/GetSiteDefaultResponse';
import GetSiteDetailsRequest from './com.alterian.auth.model/GetSiteDetailsRequest';
import GetSiteRequest from './com.alterian.auth.model/GetSiteRequest';
import GetSiteTypesDefaultResponse from './com.alterian.auth.model/GetSiteTypesDefaultResponse';
import GetSitesDefaultResponse from './com.alterian.auth.model/GetSitesDefaultResponse';
import GetSitesRequest from './com.alterian.auth.model/GetSitesRequest';
import HostDetails from './com.alterian.auth.model/HostDetails';
import Issuer from './com.alterian.auth.model/Issuer';
import LoginInfo from './com.alterian.auth.model/LoginInfo';
import LogoutDefaultResponse from './com.alterian.auth.model/LogoutDefaultResponse';
import OperationResult from './com.alterian.auth.model/OperationResult';
import PasswordComplexityRules from './com.alterian.auth.model/PasswordComplexityRules';
import RenameLoginRequest from './com.alterian.auth.model/RenameLoginRequest';
import SAMLAuthenticationRequest from './com.alterian.auth.model/SAMLAuthenticationRequest';
import SetEMServiceURLRequest from './com.alterian.auth.model/SetEMServiceURLRequest';
import Setting from './com.alterian.auth.model/Setting';
import SettingAppliesTo from './com.alterian.auth.model/SettingAppliesTo';
import SettingValue from './com.alterian.auth.model/SettingValue';
import UpdateCertificateRequest from './com.alterian.auth.model/UpdateCertificateRequest';
import UpdateLoginExRequest from './com.alterian.auth.model/UpdateLoginExRequest';
import AuthenticationApi from './api/AuthenticationApi';
import CertificatesApi from './api/CertificatesApi';
import IssuersApi from './api/IssuersApi';
import LoginsApi from './api/LoginsApi';
import MetadataApi from './api/MetadataApi';
import PasswordsApi from './api/PasswordsApi';
import SettingsApi from './api/SettingsApi';
import SitesApi from './api/SitesApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var AuthenticationApi = require('index'); // See note below*.
* var xxxSvc = new AuthenticationApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new AuthenticationApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new AuthenticationApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new AuthenticationApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 6.35.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The APICursor model constructor.
     * @property {module:com.alterian.auth.model/APICursor}
     */
    APICursor,

    /**
     * The APIMetadata model constructor.
     * @property {module:com.alterian.auth.model/APIMetadata}
     */
    APIMetadata,

    /**
     * The APIMetadataType model constructor.
     * @property {module:com.alterian.auth.model/APIMetadataType}
     */
    APIMetadataType,

    /**
     * The AddCertificateDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/AddCertificateDefaultResponse}
     */
    AddCertificateDefaultResponse,

    /**
     * The AddCertificateRequest model constructor.
     * @property {module:com.alterian.auth.model/AddCertificateRequest}
     */
    AddCertificateRequest,

    /**
     * The AddIssuerRequest model constructor.
     * @property {module:com.alterian.auth.model/AddIssuerRequest}
     */
    AddIssuerRequest,

    /**
     * The AddLoginDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/AddLoginDefaultResponse}
     */
    AddLoginDefaultResponse,

    /**
     * The AddLoginRequest model constructor.
     * @property {module:com.alterian.auth.model/AddLoginRequest}
     */
    AddLoginRequest,

    /**
     * The AddSettingRequest model constructor.
     * @property {module:com.alterian.auth.model/AddSettingRequest}
     */
    AddSettingRequest,

    /**
     * The ApplicationDetails model constructor.
     * @property {module:com.alterian.auth.model/ApplicationDetails}
     */
    ApplicationDetails,

    /**
     * The ApplicationLoginDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/ApplicationLoginDefaultResponse}
     */
    ApplicationLoginDefaultResponse,

    /**
     * The ApplicationLoginRequest model constructor.
     * @property {module:com.alterian.auth.model/ApplicationLoginRequest}
     */
    ApplicationLoginRequest,

    /**
     * The Applications model constructor.
     * @property {module:com.alterian.auth.model/Applications}
     */
    Applications,

    /**
     * The AuthSite model constructor.
     * @property {module:com.alterian.auth.model/AuthSite}
     */
    AuthSite,

    /**
     * The AuthSiteType model constructor.
     * @property {module:com.alterian.auth.model/AuthSiteType}
     */
    AuthSiteType,

    /**
     * The AuthenticationResults model constructor.
     * @property {module:com.alterian.auth.model/AuthenticationResults}
     */
    AuthenticationResults,

    /**
     * The Certificate model constructor.
     * @property {module:com.alterian.auth.model/Certificate}
     */
    Certificate,

    /**
     * The ChangePasswordRequest model constructor.
     * @property {module:com.alterian.auth.model/ChangePasswordRequest}
     */
    ChangePasswordRequest,

    /**
     * The DeleteCertificateRequest model constructor.
     * @property {module:com.alterian.auth.model/DeleteCertificateRequest}
     */
    DeleteCertificateRequest,

    /**
     * The DeleteIssuerRequest model constructor.
     * @property {module:com.alterian.auth.model/DeleteIssuerRequest}
     */
    DeleteIssuerRequest,

    /**
     * The DeleteSettingRequest model constructor.
     * @property {module:com.alterian.auth.model/DeleteSettingRequest}
     */
    DeleteSettingRequest,

    /**
     * The DisableLoginRequest model constructor.
     * @property {module:com.alterian.auth.model/DisableLoginRequest}
     */
    DisableLoginRequest,

    /**
     * The EnableLoginRequest model constructor.
     * @property {module:com.alterian.auth.model/EnableLoginRequest}
     */
    EnableLoginRequest,

    /**
     * The ExpirePasswordRequest model constructor.
     * @property {module:com.alterian.auth.model/ExpirePasswordRequest}
     */
    ExpirePasswordRequest,

    /**
     * The FormsAuthenticationDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/FormsAuthenticationDefaultResponse}
     */
    FormsAuthenticationDefaultResponse,

    /**
     * The FormsAuthenticationRequest model constructor.
     * @property {module:com.alterian.auth.model/FormsAuthenticationRequest}
     */
    FormsAuthenticationRequest,

    /**
     * The GetAPIMetadataDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetAPIMetadataDefaultResponse}
     */
    GetAPIMetadataDefaultResponse,

    /**
     * The GetAPIMetadataRequest model constructor.
     * @property {module:com.alterian.auth.model/GetAPIMetadataRequest}
     */
    GetAPIMetadataRequest,

    /**
     * The GetCertificateDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetCertificateDefaultResponse}
     */
    GetCertificateDefaultResponse,

    /**
     * The GetCertificateRequest model constructor.
     * @property {module:com.alterian.auth.model/GetCertificateRequest}
     */
    GetCertificateRequest,

    /**
     * The GetCertificatesDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetCertificatesDefaultResponse}
     */
    GetCertificatesDefaultResponse,

    /**
     * The GetCertificatesRequest model constructor.
     * @property {module:com.alterian.auth.model/GetCertificatesRequest}
     */
    GetCertificatesRequest,

    /**
     * The GetCurrentLoginDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetCurrentLoginDefaultResponse}
     */
    GetCurrentLoginDefaultResponse,

    /**
     * The GetHostNamesDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetHostNamesDefaultResponse}
     */
    GetHostNamesDefaultResponse,

    /**
     * The GetIdentityUrlDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetIdentityUrlDefaultResponse}
     */
    GetIdentityUrlDefaultResponse,

    /**
     * The GetIdentityUrlRequest model constructor.
     * @property {module:com.alterian.auth.model/GetIdentityUrlRequest}
     */
    GetIdentityUrlRequest,

    /**
     * The GetIssuerDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetIssuerDefaultResponse}
     */
    GetIssuerDefaultResponse,

    /**
     * The GetIssuerRequest model constructor.
     * @property {module:com.alterian.auth.model/GetIssuerRequest}
     */
    GetIssuerRequest,

    /**
     * The GetIssuersDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetIssuersDefaultResponse}
     */
    GetIssuersDefaultResponse,

    /**
     * The GetLoginRequest model constructor.
     * @property {module:com.alterian.auth.model/GetLoginRequest}
     */
    GetLoginRequest,

    /**
     * The GetLoginsDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetLoginsDefaultResponse}
     */
    GetLoginsDefaultResponse,

    /**
     * The GetLoginsRequest model constructor.
     * @property {module:com.alterian.auth.model/GetLoginsRequest}
     */
    GetLoginsRequest,

    /**
     * The GetPasswordComplexityRulesDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetPasswordComplexityRulesDefaultResponse}
     */
    GetPasswordComplexityRulesDefaultResponse,

    /**
     * The GetSettingDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetSettingDefaultResponse}
     */
    GetSettingDefaultResponse,

    /**
     * The GetSettingRequest model constructor.
     * @property {module:com.alterian.auth.model/GetSettingRequest}
     */
    GetSettingRequest,

    /**
     * The GetSettingsDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetSettingsDefaultResponse}
     */
    GetSettingsDefaultResponse,

    /**
     * The GetSettingsRequest model constructor.
     * @property {module:com.alterian.auth.model/GetSettingsRequest}
     */
    GetSettingsRequest,

    /**
     * The GetSettingsValuesRequest model constructor.
     * @property {module:com.alterian.auth.model/GetSettingsValuesRequest}
     */
    GetSettingsValuesRequest,

    /**
     * The GetSiteDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetSiteDefaultResponse}
     */
    GetSiteDefaultResponse,

    /**
     * The GetSiteDetailsRequest model constructor.
     * @property {module:com.alterian.auth.model/GetSiteDetailsRequest}
     */
    GetSiteDetailsRequest,

    /**
     * The GetSiteRequest model constructor.
     * @property {module:com.alterian.auth.model/GetSiteRequest}
     */
    GetSiteRequest,

    /**
     * The GetSiteTypesDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetSiteTypesDefaultResponse}
     */
    GetSiteTypesDefaultResponse,

    /**
     * The GetSitesDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/GetSitesDefaultResponse}
     */
    GetSitesDefaultResponse,

    /**
     * The GetSitesRequest model constructor.
     * @property {module:com.alterian.auth.model/GetSitesRequest}
     */
    GetSitesRequest,

    /**
     * The HostDetails model constructor.
     * @property {module:com.alterian.auth.model/HostDetails}
     */
    HostDetails,

    /**
     * The Issuer model constructor.
     * @property {module:com.alterian.auth.model/Issuer}
     */
    Issuer,

    /**
     * The LoginInfo model constructor.
     * @property {module:com.alterian.auth.model/LoginInfo}
     */
    LoginInfo,

    /**
     * The LogoutDefaultResponse model constructor.
     * @property {module:com.alterian.auth.model/LogoutDefaultResponse}
     */
    LogoutDefaultResponse,

    /**
     * The OperationResult model constructor.
     * @property {module:com.alterian.auth.model/OperationResult}
     */
    OperationResult,

    /**
     * The PasswordComplexityRules model constructor.
     * @property {module:com.alterian.auth.model/PasswordComplexityRules}
     */
    PasswordComplexityRules,

    /**
     * The RenameLoginRequest model constructor.
     * @property {module:com.alterian.auth.model/RenameLoginRequest}
     */
    RenameLoginRequest,

    /**
     * The SAMLAuthenticationRequest model constructor.
     * @property {module:com.alterian.auth.model/SAMLAuthenticationRequest}
     */
    SAMLAuthenticationRequest,

    /**
     * The SetEMServiceURLRequest model constructor.
     * @property {module:com.alterian.auth.model/SetEMServiceURLRequest}
     */
    SetEMServiceURLRequest,

    /**
     * The Setting model constructor.
     * @property {module:com.alterian.auth.model/Setting}
     */
    Setting,

    /**
     * The SettingAppliesTo model constructor.
     * @property {module:com.alterian.auth.model/SettingAppliesTo}
     */
    SettingAppliesTo,

    /**
     * The SettingValue model constructor.
     * @property {module:com.alterian.auth.model/SettingValue}
     */
    SettingValue,

    /**
     * The UpdateCertificateRequest model constructor.
     * @property {module:com.alterian.auth.model/UpdateCertificateRequest}
     */
    UpdateCertificateRequest,

    /**
     * The UpdateLoginExRequest model constructor.
     * @property {module:com.alterian.auth.model/UpdateLoginExRequest}
     */
    UpdateLoginExRequest,

    /**
    * The AuthenticationApi service constructor.
    * @property {module:api/AuthenticationApi}
    */
    AuthenticationApi,

    /**
    * The CertificatesApi service constructor.
    * @property {module:api/CertificatesApi}
    */
    CertificatesApi,

    /**
    * The IssuersApi service constructor.
    * @property {module:api/IssuersApi}
    */
    IssuersApi,

    /**
    * The LoginsApi service constructor.
    * @property {module:api/LoginsApi}
    */
    LoginsApi,

    /**
    * The MetadataApi service constructor.
    * @property {module:api/MetadataApi}
    */
    MetadataApi,

    /**
    * The PasswordsApi service constructor.
    * @property {module:api/PasswordsApi}
    */
    PasswordsApi,

    /**
    * The SettingsApi service constructor.
    * @property {module:api/SettingsApi}
    */
    SettingsApi,

    /**
    * The SitesApi service constructor.
    * @property {module:api/SitesApi}
    */
    SitesApi
};
