# AuthenticationApi.MetadataApi

All URIs are relative to *http://localhost/auth/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAPIMetadata**](MetadataApi.md#getAPIMetadata) | **POST** /GetAPIMetadata | Returns back a list of @see(APIMetadata) objects from the system. This allows the caller to discover all the methods and class types of this API, including validation rules.



## getAPIMetadata

> GetAPIMetadataDefaultResponse getAPIMetadata(getAPIMetadataRequest)

Returns back a list of @see(APIMetadata) objects from the system. This allows the caller to discover all the methods and class types of this API, including validation rules.

Returns back a list of @see(APIMetadata) objects from the system. This allows the caller to discover all the methods and class types of this API, including validation rules.

### Example

```javascript
import AuthenticationApi from 'authentication_api';
let defaultClient = AuthenticationApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new AuthenticationApi.MetadataApi();
let getAPIMetadataRequest = new AuthenticationApi.GetAPIMetadataRequest(); // GetAPIMetadataRequest | Returns back a list of @see(APIMetadata) objects from the system. This allows the caller to discover all the methods and class types of this API, including validation rules.
apiInstance.getAPIMetadata(getAPIMetadataRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAPIMetadataRequest** | [**GetAPIMetadataRequest**](GetAPIMetadataRequest.md)| Returns back a list of @see(APIMetadata) objects from the system. This allows the caller to discover all the methods and class types of this API, including validation rules. | 

### Return type

[**GetAPIMetadataDefaultResponse**](GetAPIMetadataDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

