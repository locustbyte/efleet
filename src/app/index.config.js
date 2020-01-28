(function () {
  'use strict';

  function testInterceptor() {
    return {
      request: function(config) {

        config.headers['Content-Type'] = 'application/json'
        
          // config.headers['x-csrf-token'] = sessionStorage.getItem("auth")
          config.headers["x-auth-token"] = sessionStorage.getItem("auth")
        
        return config;
      },
  
      requestError: function(config) {
        return config;
      },
  
      response: function(res) {
        res.headers['x-auth-2'] = sessionStorage.getItem("auth")
        return res;
      },
  
      responseError: function(res) {
        return res;
      }
    }
  }
  
  angular
    .module('eFleet')
    .config(config)
    .factory('testInterceptor', testInterceptor)

  /** @ngInject */
  function config($logProvider, $httpProvider) {
    $httpProvider.interceptors.push('testInterceptor');
    var apiRequestCount = 0;    
    // Enable log
    //$http.defaults.headers.common['Authorization'] = 'Basic ' + token;
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push(function ($rootScope, $q) {
      return {
        request: function (config) {
          apiRequestCount++;
          //   config.timeout =300000;
          return config;
        },
        response: function (response) {
          return response;
        },
        responseError: function (rejection) {
          switch (rejection.status) {
            case 408:
              console.log('connection timed out');
              break;
          }
          // return $q.reject(rejection);
          return rejection;
        }
      }
    })
  }

})();
