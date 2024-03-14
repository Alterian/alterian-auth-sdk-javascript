# AuthenticationApi.LoginsApi

All URIs are relative to *http://localhost/auth/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLogin**](LoginsApi.md#addLogin) | **POST** /AddLogin | Add a login into the system
[**disableLogin**](LoginsApi.md#disableLogin) | **POST** /DisableLogin | Flag a login as disabled
[**enableLogin**](LoginsApi.md#enableLogin) | **POST** /EnableLogin | Flag a login as enabled.  If a login has been expired due to inactivity, this will enable it to be logged into again
[**getCurrentLogin**](LoginsApi.md#getCurrentLogin) | **POST** /GetCurrentLogin | Returns back info on the current login
[**getLogin**](LoginsApi.md#getLogin) | **POST** /GetLogin | Return back info on a single login
[**getLogins**](LoginsApi.md#getLogins) | **POST** /GetLogins | Query the login list by setting values, optionally including or excluding logins.  If you leave the settings value empty, you can query just by login id
[**renameLogin**](LoginsApi.md#renameLogin) | **POST** /RenameLogin | Renames a login
[**updateLogin**](LoginsApi.md#updateLogin) | **POST** /UpdateLogin | Update a login
[**updateLoginEx**](LoginsApi.md#updateLoginEx) | **POST** /UpdateLoginEx | Updates pieces of a login



## addLogin

> AddLoginDefaultResponse addLogin(addLoginRequest)

Add a login into the system

Add a login into the system

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.LoginsApi();
let addLoginRequest = new AuthenticationApi.AddLoginRequest(); // AddLoginRequest | Add a login into the system
apiInstance.addLogin(addLoginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addLoginRequest** | [**AddLoginRequest**](AddLoginRequest.md)| Add a login into the system | 

### Return type

[**AddLoginDefaultResponse**](AddLoginDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## disableLogin

> LogoutDefaultResponse disableLogin(disableLoginRequest)

Flag a login as disabled

Flag a login as disabled

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.LoginsApi();
let disableLoginRequest = new AuthenticationApi.DisableLoginRequest(); // DisableLoginRequest | Flag a login as disabled
apiInstance.disableLogin(disableLoginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disableLoginRequest** | [**DisableLoginRequest**](DisableLoginRequest.md)| Flag a login as disabled | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## enableLogin

> LogoutDefaultResponse enableLogin(enableLoginRequest)

Flag a login as enabled.  If a login has been expired due to inactivity, this will enable it to be logged into again

Flag a login as enabled.  If a login has been expired due to inactivity, this will enable it to be logged into again

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.LoginsApi();
let enableLoginRequest = new AuthenticationApi.EnableLoginRequest(); // EnableLoginRequest | Flag a login as enabled.  If a login has been expired due to inactivity, this will enable it to be logged into again
apiInstance.enableLogin(enableLoginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enableLoginRequest** | [**EnableLoginRequest**](EnableLoginRequest.md)| Flag a login as enabled.  If a login has been expired due to inactivity, this will enable it to be logged into again | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCurrentLogin

> GetCurrentLoginDefaultResponse getCurrentLogin()

Returns back info on the current login

Returns back info on the current login

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.LoginsApi();
apiInstance.getCurrentLogin().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetCurrentLoginDefaultResponse**](GetCurrentLoginDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogin

> GetCurrentLoginDefaultResponse getLogin(getLoginRequest)

Return back info on a single login

Return back info on a single login

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.LoginsApi();
let getLoginRequest = new AuthenticationApi.GetLoginRequest(); // GetLoginRequest | Return back info on a single login
apiInstance.getLogin(getLoginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getLoginRequest** | [**GetLoginRequest**](GetLoginRequest.md)| Return back info on a single login | 

### Return type

[**GetCurrentLoginDefaultResponse**](GetCurrentLoginDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getLogins

> GetLoginsDefaultResponse getLogins(getLoginsRequest)

Query the login list by setting values, optionally including or excluding logins.  If you leave the settings value empty, you can query just by login id

Query the login list by setting values, optionally including or excluding logins.  If you leave the settings value empty, you can query just by login id

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.LoginsApi();
let getLoginsRequest = new AuthenticationApi.GetLoginsRequest(); // GetLoginsRequest | Query the login list by setting values, optionally including or excluding logins.  If you leave the settings value empty, you can query just by login id
apiInstance.getLogins(getLoginsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getLoginsRequest** | [**GetLoginsRequest**](GetLoginsRequest.md)| Query the login list by setting values, optionally including or excluding logins.  If you leave the settings value empty, you can query just by login id | 

### Return type

[**GetLoginsDefaultResponse**](GetLoginsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## renameLogin

> LogoutDefaultResponse renameLogin(renameLoginRequest)

Renames a login

Renames a login

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.LoginsApi();
let renameLoginRequest = new AuthenticationApi.RenameLoginRequest(); // RenameLoginRequest | Renames a login
apiInstance.renameLogin(renameLoginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **renameLoginRequest** | [**RenameLoginRequest**](RenameLoginRequest.md)| Renames a login | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateLogin

> LogoutDefaultResponse updateLogin(addLoginRequest)

Update a login

Update a login

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.LoginsApi();
let addLoginRequest = new AuthenticationApi.AddLoginRequest(); // AddLoginRequest | Update a login
apiInstance.updateLogin(addLoginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addLoginRequest** | [**AddLoginRequest**](AddLoginRequest.md)| Update a login | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateLoginEx

> LogoutDefaultResponse updateLoginEx(updateLoginExRequest)

Updates pieces of a login

Updates pieces of a login

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.LoginsApi();
let updateLoginExRequest = new AuthenticationApi.UpdateLoginExRequest(); // UpdateLoginExRequest | Updates pieces of a login
apiInstance.updateLoginEx(updateLoginExRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateLoginExRequest** | [**UpdateLoginExRequest**](UpdateLoginExRequest.md)| Updates pieces of a login | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

