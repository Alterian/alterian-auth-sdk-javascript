# AuthenticationApi.SettingsApi

All URIs are relative to *http://localhost/auth/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSetting**](SettingsApi.md#addSetting) | **POST** /AddSetting | Adds in a setting which can then be mapped to an issuer for the purposes of claims authentication.
[**deleteSetting**](SettingsApi.md#deleteSetting) | **POST** /DeleteSetting | Deletes a setting
[**getSetting**](SettingsApi.md#getSetting) | **POST** /GetSetting | Read a setting
[**getSettings**](SettingsApi.md#getSettings) | **POST** /GetSettings | Reads a list of settings
[**getSettingsValues**](SettingsApi.md#getSettingsValues) | **POST** /GetSettingsValues | Reads settings and their values
[**setEMServiceURL**](SettingsApi.md#setEMServiceURL) | **POST** /SetEMServiceURL | Updates the EM service URL
[**updateSetting**](SettingsApi.md#updateSetting) | **POST** /UpdateSetting | Updates a setting



## addSetting

> AddCertificateDefaultResponse addSetting(addSettingRequest)

Adds in a setting which can then be mapped to an issuer for the purposes of claims authentication.

Adds in a setting which can then be mapped to an issuer for the purposes of claims authentication.

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.SettingsApi();
let addSettingRequest = new AuthenticationApi.AddSettingRequest(); // AddSettingRequest | Adds in a setting which can then be mapped to an issuer for the purposes of claims authentication.
apiInstance.addSetting(addSettingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addSettingRequest** | [**AddSettingRequest**](AddSettingRequest.md)| Adds in a setting which can then be mapped to an issuer for the purposes of claims authentication. | 

### Return type

[**AddCertificateDefaultResponse**](AddCertificateDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSetting

> LogoutDefaultResponse deleteSetting(deleteSettingRequest)

Deletes a setting

Deletes a setting

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.SettingsApi();
let deleteSettingRequest = new AuthenticationApi.DeleteSettingRequest(); // DeleteSettingRequest | Deletes a setting
apiInstance.deleteSetting(deleteSettingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteSettingRequest** | [**DeleteSettingRequest**](DeleteSettingRequest.md)| Deletes a setting | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSetting

> GetSettingDefaultResponse getSetting(getSettingRequest)

Read a setting

Read a setting

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.SettingsApi();
let getSettingRequest = new AuthenticationApi.GetSettingRequest(); // GetSettingRequest | Read a setting
apiInstance.getSetting(getSettingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getSettingRequest** | [**GetSettingRequest**](GetSettingRequest.md)| Read a setting | 

### Return type

[**GetSettingDefaultResponse**](GetSettingDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSettings

> GetSettingsDefaultResponse getSettings(getSettingsRequest)

Reads a list of settings

Reads a list of settings

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.SettingsApi();
let getSettingsRequest = new AuthenticationApi.GetSettingsRequest(); // GetSettingsRequest | Reads a list of settings
apiInstance.getSettings(getSettingsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getSettingsRequest** | [**GetSettingsRequest**](GetSettingsRequest.md)| Reads a list of settings | 

### Return type

[**GetSettingsDefaultResponse**](GetSettingsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSettingsValues

> GetSettingsDefaultResponse getSettingsValues(getSettingsValuesRequest)

Reads settings and their values

Reads settings and their values

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.SettingsApi();
let getSettingsValuesRequest = new AuthenticationApi.GetSettingsValuesRequest(); // GetSettingsValuesRequest | Reads settings and their values
apiInstance.getSettingsValues(getSettingsValuesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getSettingsValuesRequest** | [**GetSettingsValuesRequest**](GetSettingsValuesRequest.md)| Reads settings and their values | 

### Return type

[**GetSettingsDefaultResponse**](GetSettingsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setEMServiceURL

> LogoutDefaultResponse setEMServiceURL(setEMServiceURLRequest)

Updates the EM service URL

Updates the EM service URL

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.SettingsApi();
let setEMServiceURLRequest = new AuthenticationApi.SetEMServiceURLRequest(); // SetEMServiceURLRequest | Updates the EM service URL
apiInstance.setEMServiceURL(setEMServiceURLRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setEMServiceURLRequest** | [**SetEMServiceURLRequest**](SetEMServiceURLRequest.md)| Updates the EM service URL | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSetting

> LogoutDefaultResponse updateSetting(addSettingRequest)

Updates a setting

Updates a setting

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.SettingsApi();
let addSettingRequest = new AuthenticationApi.AddSettingRequest(); // AddSettingRequest | Updates a setting
apiInstance.updateSetting(addSettingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addSettingRequest** | [**AddSettingRequest**](AddSettingRequest.md)| Updates a setting | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

