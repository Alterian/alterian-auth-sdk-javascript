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
    instance = new AuthenticationApi.ExpirePasswordRequest();
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

  describe('ExpirePasswordRequest', function() {
    it('should create an instance of ExpirePasswordRequest', function() {
      // uncomment below and update the code to test ExpirePasswordRequest
      //var instance = new AuthenticationApi.ExpirePasswordRequest();
      //expect(instance).to.be.a(AuthenticationApi.ExpirePasswordRequest);
    });

    it('should have the property loginId (base name: "LoginId")', function() {
      // uncomment below and update the code to test the property loginId
      //var instance = new AuthenticationApi.ExpirePasswordRequest();
      //expect(instance).to.be();
    });

  });

}));
