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
    instance = new AuthenticationApi.FormsAuthenticationRequest();
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

  describe('FormsAuthenticationRequest', function() {
    it('should create an instance of FormsAuthenticationRequest', function() {
      // uncomment below and update the code to test FormsAuthenticationRequest
      //var instance = new AuthenticationApi.FormsAuthenticationRequest();
      //expect(instance).to.be.a(AuthenticationApi.FormsAuthenticationRequest);
    });

    it('should have the property bumpExisting (base name: "BumpExisting")', function() {
      // uncomment below and update the code to test the property bumpExisting
      //var instance = new AuthenticationApi.FormsAuthenticationRequest();
      //expect(instance).to.be();
    });

    it('should have the property newPassword (base name: "NewPassword")', function() {
      // uncomment below and update the code to test the property newPassword
      //var instance = new AuthenticationApi.FormsAuthenticationRequest();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "Password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new AuthenticationApi.FormsAuthenticationRequest();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "Username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new AuthenticationApi.FormsAuthenticationRequest();
      //expect(instance).to.be();
    });

  });

}));
