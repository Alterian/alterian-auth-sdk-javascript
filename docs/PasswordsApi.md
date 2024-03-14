# AuthenticationApi.PasswordsApi

All URIs are relative to *http://localhost/auth/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changePassword**](PasswordsApi.md#changePassword) | **POST** /ChangePassword | Changes a login&#39;s password
[**expirePassword**](PasswordsApi.md#expirePassword) | **POST** /ExpirePassword | Flags a login has having an expired password.  This forces the login to change their password upon their next attempt to log in.
[**getPasswordComplexityRules**](PasswordsApi.md#getPasswordComplexityRules) | **POST** /GetPasswordComplexityRules | Returns back the password complexity rules for use in a GUI.  These rules are also applied on the backend.



## changePassword

> LogoutDefaultResponse changePassword(changePasswordRequest)

Changes a login&#39;s password

Changes a login&#39;s password

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.PasswordsApi();
let changePasswordRequest = new AuthenticationApi.ChangePasswordRequest(); // ChangePasswordRequest | Changes a login's password
apiInstance.changePassword(changePasswordRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changePasswordRequest** | [**ChangePasswordRequest**](ChangePasswordRequest.md)| Changes a login&#39;s password | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expirePassword

> LogoutDefaultResponse expirePassword(expirePasswordRequest)

Flags a login has having an expired password.  This forces the login to change their password upon their next attempt to log in.

Flags a login has having an expired password.  This forces the login to change their password upon their next attempt to log in.

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.PasswordsApi();
let expirePasswordRequest = new AuthenticationApi.ExpirePasswordRequest(); // ExpirePasswordRequest | Flags a login has having an expired password.  This forces the login to change their password upon their next attempt to log in.
apiInstance.expirePassword(expirePasswordRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expirePasswordRequest** | [**ExpirePasswordRequest**](ExpirePasswordRequest.md)| Flags a login has having an expired password.  This forces the login to change their password upon their next attempt to log in. | 

### Return type

[**LogoutDefaultResponse**](LogoutDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPasswordComplexityRules

> GetPasswordComplexityRulesDefaultResponse getPasswordComplexityRules()

Returns back the password complexity rules for use in a GUI.  These rules are also applied on the backend.

Returns back the password complexity rules for use in a GUI.  These rules are also applied on the backend.

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.PasswordsApi();
apiInstance.getPasswordComplexityRules().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetPasswordComplexityRulesDefaultResponse**](GetPasswordComplexityRulesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

