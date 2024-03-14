# AuthenticationApi.AuthenticationApi

All URIs are relative to *http://localhost/auth/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationLogin**](AuthenticationApi.md#applicationLogin) | **POST** /ApplicationLogin | this method requests the auth server give you a token for a particular \&quot;application\&quot;
[**formsAuthentication**](AuthenticationApi.md#formsAuthentication) | **POST** /FormsAuthentication | Provide a username and SHA1 encoded password to log into the system.  It is always recommended that this method be called via a secured method.              Should be followed by a call to @see(ApplicationLogin)
[**getIdentityUrl**](AuthenticationApi.md#getIdentityUrl) | **POST** /GetIdentityUrl | 
[**getSiteDetails**](AuthenticationApi.md#getSiteDetails) | **POST** /GetSiteDetails | Returns the details for a particular application.  This is the same information as returned when you call @see(ApplicationLogin) but you will not receive an access token from this method.
[**logout**](AuthenticationApi.md#logout) | **POST** /Logout | Logs the requested token out of the authentication system and out of any application for which a call has been made to @see(ApplicationLogin)
[**nTLMAuthentication**](AuthenticationApi.md#nTLMAuthentication) | **POST** /NTLMAuthentication | If you have configured NTLM authentication properly, you can use this to get an authentication token.  Please note you must have configured IIS and everything correctly for this method to function.
[**openIdAuthentication**](AuthenticationApi.md#openIdAuthentication) | **GET** /OpenIdAuthentication | Use an Open Id Connect token to connect.  Your system must be configured to allow this; please review the documentation.
[**sAMLAuthentication**](AuthenticationApi.md#sAMLAuthentication) | **POST** /SAMLAuthentication | Provided a valid SAML [Base64 encoded] token, this will return back an auth server token and application information.



## applicationLogin

> ApplicationLoginDefaultResponse applicationLogin(applicationLoginRequest)

this method requests the auth server give you a token for a particular \&quot;application\&quot;

this method requests the auth server give you a token for a particular \&quot;application\&quot;

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.AuthenticationApi();
let applicationLoginRequest = new AuthenticationApi.ApplicationLoginRequest(); // ApplicationLoginRequest | this method requests the auth server give you a token for a particular \"application\"
apiInstance.applicationLogin(applicationLoginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationLoginRequest** | [**ApplicationLoginRequest**](ApplicationLoginRequest.md)| this method requests the auth server give you a token for a particular \&quot;application\&quot; | 

### Return type

[**ApplicationLoginDefaultResponse**](ApplicationLoginDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## formsAuthentication

> FormsAuthenticationDefaultResponse formsAuthentication(formsAuthenticationRequest)

Provide a username and SHA1 encoded password to log into the system.  It is always recommended that this method be called via a secured method.              Should be followed by a call to @see(ApplicationLogin)

Provide a username and SHA1 encoded password to log into the system.  It is always recommended that this method be called via a secured method.              Should be followed by a call to @see(ApplicationLogin)

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.AuthenticationApi();
let formsAuthenticationRequest = new AuthenticationApi.FormsAuthenticationRequest(); // FormsAuthenticationRequest | Provide a username and SHA1 encoded password to log into the system.  It is always recommended that this method be called via a secured method.              Should be followed by a call to @see(ApplicationLogin)
apiInstance.formsAuthentication(formsAuthenticationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formsAuthenticationRequest** | [**FormsAuthenticationRequest**](FormsAuthenticationRequest.md)| Provide a username and SHA1 encoded password to log into the system.  It is always recommended that this method be called via a secured method.              Should be followed by a call to @see(ApplicationLogin) | 

### Return type

[**FormsAuthenticationDefaultResponse**](FormsAuthenticationDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getIdentityUrl

> GetIdentityUrlDefaultResponse getIdentityUrl(getIdentityUrlRequest)





### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.AuthenticationApi();
let getIdentityUrlRequest = new AuthenticationApi.GetIdentityUrlRequest(); // GetIdentityUrlRequest | 
apiInstance.getIdentityUrl(getIdentityUrlRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getIdentityUrlRequest** | [**GetIdentityUrlRequest**](GetIdentityUrlRequest.md)|  | 

### Return type

[**GetIdentityUrlDefaultResponse**](GetIdentityUrlDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSiteDetails

> ApplicationLoginDefaultResponse getSiteDetails(getSiteDetailsRequest)

Returns the details for a particular application.  This is the same information as returned when you call @see(ApplicationLogin) but you will not receive an access token from this method.

Returns the details for a particular application.  This is the same information as returned when you call @see(ApplicationLogin) but you will not receive an access token from this method.

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.AuthenticationApi();
let getSiteDetailsRequest = new AuthenticationApi.GetSiteDetailsRequest(); // GetSiteDetailsRequest | Returns the details for a particular application.  This is the same information as returned when you call @see(ApplicationLogin) but you will not receive an access token from this method.
apiInstance.getSiteDetails(getSiteDetailsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getSiteDetailsRequest** | [**GetSiteDetailsRequest**](GetSiteDetailsRequest.md)| Returns the details for a particular application.  This is the same information as returned when you call @see(ApplicationLogin) but you will not receive an access token from this method. | 

### Return type

[**ApplicationLoginDefaultResponse**](ApplicationLoginDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## logout

> LogoutDefaultResponse logout()

Logs the requested token out of the authentication system and out of any application for which a call has been made to @see(ApplicationLogin)

Logs the requested token out of the authentication system and out of any application for which a call has been made to @see(ApplicationLogin)

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.AuthenticationApi();
apiInstance.logout().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## nTLMAuthentication

> FormsAuthenticationDefaultResponse nTLMAuthentication()

If you have configured NTLM authentication properly, you can use this to get an authentication token.  Please note you must have configured IIS and everything correctly for this method to function.

If you have configured NTLM authentication properly, you can use this to get an authentication token.  Please note you must have configured IIS and everything correctly for this method to function.

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.AuthenticationApi();
apiInstance.nTLMAuthentication().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**FormsAuthenticationDefaultResponse**](FormsAuthenticationDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## openIdAuthentication

> Object openIdAuthentication(opts)

Use an Open Id Connect token to connect.  Your system must be configured to allow this; please review the documentation.

Use an Open Id Connect token to connect.  Your system must be configured to allow this; please review the documentation.

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.AuthenticationApi();
let opts = {
  'code': "code_example", // String | 
  'state': "state_example" // String | 
};
apiInstance.openIdAuthentication(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | [optional] 
 **state** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sAMLAuthentication

> FormsAuthenticationDefaultResponse sAMLAuthentication(sAMLAuthenticationRequest)

Provided a valid SAML [Base64 encoded] token, this will return back an auth server token and application information.

Provided a valid SAML [Base64 encoded] token, this will return back an auth server token and application information.

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.AuthenticationApi();
let sAMLAuthenticationRequest = new AuthenticationApi.SAMLAuthenticationRequest(); // SAMLAuthenticationRequest | Provided a valid SAML [Base64 encoded] token, this will return back an auth server token and application information.
apiInstance.sAMLAuthentication(sAMLAuthenticationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sAMLAuthenticationRequest** | [**SAMLAuthenticationRequest**](SAMLAuthenticationRequest.md)| Provided a valid SAML [Base64 encoded] token, this will return back an auth server token and application information. | 

### Return type

[**FormsAuthenticationDefaultResponse**](FormsAuthenticationDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

