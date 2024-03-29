/**
 * Authentication API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 6.35.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AuthenticationApi);
  }
}(this, function(expect, AuthenticationApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AuthenticationApi.GetLoginsRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetLoginsRequest', function() {
    it('should create an instance of GetLoginsRequest', function() {
      // uncomment below and update the code to test GetLoginsRequest
      //var instance = new AuthenticationApi.GetLoginsRequest();
      //expect(instance).to.be.a(AuthenticationApi.GetLoginsRequest);
    });

    it('should have the property enabled (base name: "Enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new AuthenticationApi.GetLoginsRequest();
      //expect(instance).to.be();
    });

    it('should have the property exclusion (base name: "Exclusion")', function() {
      // uncomment below and update the code to test the property exclusion
      //var instance = new AuthenticationApi.GetLoginsRequest();
      //expect(instance).to.be();
    });

    it('should have the property inclusion (base name: "Inclusion")', function() {
      // uncomment below and update the code to test the property inclusion
      //var instance = new AuthenticationApi.GetLoginsRequest();
      //expect(instance).to.be();
    });

    it('should have the property noSettings (base name: "NoSettings")', function() {
      // uncomment below and update the code to test the property noSettings
      //var instance = new AuthenticationApi.GetLoginsRequest();
      //expect(instance).to.be();
    });

    it('should have the property settingValues (base name: "SettingValues")', function() {
      // uncomment below and update the code to test the property settingValues
      //var instance = new AuthenticationApi.GetLoginsRequest();
      //expect(instance).to.be();
    });

  });

}));
