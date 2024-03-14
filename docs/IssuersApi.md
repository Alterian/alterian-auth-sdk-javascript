# AuthenticationApi.IssuersApi

All URIs are relative to *http://localhost/auth/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addIssuer**](IssuersApi.md#addIssuer) | **POST** /AddIssuer | Adds an Issuer for a Certificate used with single sign on
[**deleteIssuer**](IssuersApi.md#deleteIssuer) | **POST** /DeleteIssuer | Deletes an @see(Issuer) for a Certificate used with single sign on
[**getIssuer**](IssuersApi.md#getIssuer) | **POST** /GetIssuer | Retrieves an Issuer for a Certificate used with single sign on
[**getIssuers**](IssuersApi.md#getIssuers) | **POST** /GetIssuers | Gets a list of available issuers
[**updateIssuer**](IssuersApi.md#updateIssuer) | **POST** /UpdateIssuer | Updates information associated with a certificate&#39;s issuer



## addIssuer

> AddCertificateDefaultResponse addIssuer(addIssuerRequest)

Adds an Issuer for a Certificate used with single sign on

Adds an Issuer for a Certificate used with single sign on

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.IssuersApi();
let addIssuerRequest = new AuthenticationApi.AddIssuerRequest(); // AddIssuerRequest | Adds an Issuer for a Certificate used with single sign on
apiInstance.addIssuer(addIssuerRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addIssuerRequest** | [**AddIssuerRequest**](AddIssuerRequest.md)| Adds an Issuer for a Certificate used with single sign on | 

### Return type

[**AddCertificateDefaultResponse**](AddCertificateDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteIssuer

> LogoutDefaultResponse deleteIssuer(deleteIssuerRequest)

Deletes an @see(Issuer) for a Certificate used with single sign on

Deletes an @see(Issuer) for a Certificate used with single sign on

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.IssuersApi();
let deleteIssuerRequest = new AuthenticationApi.DeleteIssuerRequest(); // DeleteIssuerRequest | Deletes an @see(Issuer) for a Certificate used with single sign on
apiInstance.deleteIssuer(deleteIssuerRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteIssuerRequest** | [**DeleteIssuerRequest**](DeleteIssuerRequest.md)| Deletes an @see(Issuer) for a Certificate used with single sign on | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getIssuer

> GetIssuerDefaultResponse getIssuer(getIssuerRequest)

Retrieves an Issuer for a Certificate used with single sign on

Retrieves an Issuer for a Certificate used with single sign on

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.IssuersApi();
let getIssuerRequest = new AuthenticationApi.GetIssuerRequest(); // GetIssuerRequest | Retrieves an Issuer for a Certificate used with single sign on
apiInstance.getIssuer(getIssuerRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getIssuerRequest** | [**GetIssuerRequest**](GetIssuerRequest.md)| Retrieves an Issuer for a Certificate used with single sign on | 

### Return type

[**GetIssuerDefaultResponse**](GetIssuerDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getIssuers

> GetIssuersDefaultResponse getIssuers(getCertificatesRequest)

Gets a list of available issuers

Gets a list of available issuers

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.IssuersApi();
let getCertificatesRequest = new AuthenticationApi.GetCertificatesRequest(); // GetCertificatesRequest | Gets a list of available issuers
apiInstance.getIssuers(getCertificatesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCertificatesRequest** | [**GetCertificatesRequest**](GetCertificatesRequest.md)| Gets a list of available issuers | 

### Return type

[**GetIssuersDefaultResponse**](GetIssuersDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateIssuer

> LogoutDefaultResponse updateIssuer(addIssuerRequest)

Updates information associated with a certificate&#39;s issuer

Updates information associated with a certificate&#39;s issuer

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.IssuersApi();
let addIssuerRequest = new AuthenticationApi.AddIssuerRequest(); // AddIssuerRequest | Updates information associated with a certificate's issuer
apiInstance.updateIssuer(addIssuerRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addIssuerRequest** | [**AddIssuerRequest**](AddIssuerRequest.md)| Updates information associated with a certificate&#39;s issuer | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

