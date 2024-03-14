# AuthenticationApi.SitesApi

All URIs are relative to *http://localhost/auth/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHostNames**](SitesApi.md#getHostNames) | **POST** /GetHostNames | This is the name of the server that you have IMS running on
[**getSite**](SitesApi.md#getSite) | **POST** /GetSite | Return back a specific @see(AuthSite)
[**getSiteTypes**](SitesApi.md#getSiteTypes) | **POST** /GetSiteTypes | Return back a list of site types for use with @see(GetSites)
[**getSites**](SitesApi.md#getSites) | **POST** /GetSites | Return back a list of @see(AuthSite)s; useful for APIs which require an authentication site identifier



## getHostNames

> GetHostNamesDefaultResponse getHostNames(getCertificatesRequest)

This is the name of the server that you have IMS running on

This is the name of the server that you have IMS running on

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.SitesApi();
let getCertificatesRequest = new AuthenticationApi.GetCertificatesRequest(); // GetCertificatesRequest | This is the name of the server that you have IMS running on
apiInstance.getHostNames(getCertificatesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCertificatesRequest** | [**GetCertificatesRequest**](GetCertificatesRequest.md)| This is the name of the server that you have IMS running on | 

### Return type

[**GetHostNamesDefaultResponse**](GetHostNamesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSite

> GetSiteDefaultResponse getSite(getSiteRequest)

Return back a specific @see(AuthSite)

Return back a specific @see(AuthSite)

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.SitesApi();
let getSiteRequest = new AuthenticationApi.GetSiteRequest(); // GetSiteRequest | Return back a specific @see(AuthSite)
apiInstance.getSite(getSiteRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getSiteRequest** | [**GetSiteRequest**](GetSiteRequest.md)| Return back a specific @see(AuthSite) | 

### Return type

[**GetSiteDefaultResponse**](GetSiteDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSiteTypes

> GetSiteTypesDefaultResponse getSiteTypes()

Return back a list of site types for use with @see(GetSites)

Return back a list of site types for use with @see(GetSites)

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.SitesApi();
apiInstance.getSiteTypes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetSiteTypesDefaultResponse**](GetSiteTypesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSites

> GetSitesDefaultResponse getSites(getSitesRequest)

Return back a list of @see(AuthSite)s; useful for APIs which require an authentication site identifier

Return back a list of @see(AuthSite)s; useful for APIs which require an authentication site identifier

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.SitesApi();
let getSitesRequest = new AuthenticationApi.GetSitesRequest(); // GetSitesRequest | Return back a list of @see(AuthSite)s; useful for APIs which require an authentication site identifier
apiInstance.getSites(getSitesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getSitesRequest** | [**GetSitesRequest**](GetSitesRequest.md)| Return back a list of @see(AuthSite)s; useful for APIs which require an authentication site identifier | 

### Return type

[**GetSitesDefaultResponse**](GetSitesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

