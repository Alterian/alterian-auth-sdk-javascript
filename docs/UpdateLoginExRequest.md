# AuthenticationApi.UpdateLoginExRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalAuthentication** | **Boolean** | Should this login be exteral authenticated | [optional] 
**loginId** | **String** | Id of the login | [optional] 
**name** | **String** | Name of the login | [optional] 
**newPassword** | **String** | If you want to reset the password, provide it here.  If ExternalAuth is true, this property is ignored. | [optional] 
**settings** | [**[SettingValue]**](SettingValue.md) | Settings to apply to the login | [optional] 


