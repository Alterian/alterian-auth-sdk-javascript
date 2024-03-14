# AuthenticationApi.LoginInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **String** | Id of the login | [optional] 
**name** | **String** | The login name | [optional] 
**windowsAuthentication** | **Boolean** | Does this login use external authentication? | [optional] 
**settings** | [**[SettingValue]**](SettingValue.md) | Settings for this login | [optional] 
**newPassword** | **String** | If you want to update the password for a login, include a NewPassword.  You can use this in a call to @see(UpdateLogin) | [optional] 
**enabled** | **Boolean** | Is this login flagged as disabled | [optional] 
**passwordExpires** | **Date** | If set, this is when the password for this login will expire.  Any changes to this will be compared to the password policy | [optional] 
**lastLogin** | **Date** | Last time this login was used | [optional] 
**created** | **Date** | When was this login created | [optional] 
**modified** | **Date** | Last time this login was modified | [optional] 


