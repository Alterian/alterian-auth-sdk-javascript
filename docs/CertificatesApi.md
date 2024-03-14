# AuthenticationApi.CertificatesApi

All URIs are relative to *http://localhost/auth/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCertificate**](CertificatesApi.md#addCertificate) | **POST** /AddCertificate | Adds a certificate for use with single sign on
[**deleteCertificate**](CertificatesApi.md#deleteCertificate) | **POST** /DeleteCertificate | Deletes the specified certificate
[**getCertificate**](CertificatesApi.md#getCertificate) | **POST** /GetCertificate | Gets the specified certificate
[**getCertificates**](CertificatesApi.md#getCertificates) | **POST** /GetCertificates | Gets a list of available certificates
[**updateCertificate**](CertificatesApi.md#updateCertificate) | **POST** /UpdateCertificate | Updates information associated with a certificate



## addCertificate

> AddCertificateDefaultResponse addCertificate(addCertificateRequest)

Adds a certificate for use with single sign on

Adds a certificate for use with single sign on

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.CertificatesApi();
let addCertificateRequest = new AuthenticationApi.AddCertificateRequest(); // AddCertificateRequest | Adds a certificate for use with single sign on
apiInstance.addCertificate(addCertificateRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addCertificateRequest** | [**AddCertificateRequest**](AddCertificateRequest.md)| Adds a certificate for use with single sign on | 

### Return type

[**AddCertificateDefaultResponse**](AddCertificateDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCertificate

> LogoutDefaultResponse deleteCertificate(deleteCertificateRequest)

Deletes the specified certificate

Deletes the specified certificate

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.CertificatesApi();
let deleteCertificateRequest = new AuthenticationApi.DeleteCertificateRequest(); // DeleteCertificateRequest | Deletes the specified certificate
apiInstance.deleteCertificate(deleteCertificateRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteCertificateRequest** | [**DeleteCertificateRequest**](DeleteCertificateRequest.md)| Deletes the specified certificate | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCertificate

> GetCertificateDefaultResponse getCertificate(getCertificateRequest)

Gets the specified certificate

Gets the specified certificate

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.CertificatesApi();
let getCertificateRequest = new AuthenticationApi.GetCertificateRequest(); // GetCertificateRequest | Gets the specified certificate
apiInstance.getCertificate(getCertificateRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCertificateRequest** | [**GetCertificateRequest**](GetCertificateRequest.md)| Gets the specified certificate | 

### Return type

[**GetCertificateDefaultResponse**](GetCertificateDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCertificates

> GetCertificatesDefaultResponse getCertificates(getCertificatesRequest)

Gets a list of available certificates

Gets a list of available certificates

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.CertificatesApi();
let getCertificatesRequest = new AuthenticationApi.GetCertificatesRequest(); // GetCertificatesRequest | Gets a list of available certificates
apiInstance.getCertificates(getCertificatesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCertificatesRequest** | [**GetCertificatesRequest**](GetCertificatesRequest.md)| Gets a list of available certificates | 

### Return type

[**GetCertificatesDefaultResponse**](GetCertificatesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCertificate

> LogoutDefaultResponse updateCertificate(updateCertificateRequest)

Updates information associated with a certificate

Updates information associated with a certificate

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.CertificatesApi();
let updateCertificateRequest = new AuthenticationApi.UpdateCertificateRequest(); // UpdateCertificateRequest | Updates information associated with a certificate
apiInstance.updateCertificate(updateCertificateRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCertificateRequest** | [**UpdateCertificateRequest**](UpdateCertificateRequest.md)| Updates information associated with a certificate | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

