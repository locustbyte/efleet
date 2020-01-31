(function () {
  'use strict';

  function testInterceptor() {
    return {
      request: function(config) {
        

        config.headers['Content-Type'] = 'application/json'
        
          // config.headers['x-csrf-token'] = sessionStorage.getItem("auth")
          // config.headers["x-auth-token"] = sessionStorage.getItem("auth")
        
        return config;
      },
  
      requestError: function(config) {
        return config;
      },
  
      response: function(res) {
        res.headers["x-auth-token"] = sessionStorage.getItem("auth")
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
    .factory('apiService', function($http) {
      return {
        getAgreementByID: function(id) {
           //return $http.get('http://web-v2dev-uk.rci.uk/rcidirect-services/rest/agreements?search_value=' + id);
           return $http({
            method: 'GET',
            headers: {'Authorization': 'Basic b25saW5lc2FsZTpvbmxpbmVzYWxl', 'Content-Type': 'application/json'},
            url: 'http://web-v2dev-uk.rci.uk/rcidirect-services/rest/agreements?search_value='+id
          })
        },
        getCustomerByCustomerCode: function(custCode) {
          return $http({
            method: 'GET',
            headers: {'Authorization': 'Basic b25saW5lc2FsZTpvbmxpbmVzYWxl', 'Content-Type': 'application/json'},
            url: 'http://web-v2dev-uk.rci.uk/rcidirect-services/rest/agreements?search_value='+id
          }).then(function successCallback(response) {
            console.log(response)
            
            // this callback will be called asynchronously
            // when the response is available
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
        },
        sendCustomerSecurityCode: function(method) {
          return $http({
            method: 'POST',
            headers: {'Authorization': 'Basic b25saW5lc2FsZTpvbmxpbmVzYWxl', 'Content-Type': 'application/json'},
            url: 'http://web-v2dev-uk.rci.uk/rcidirect-services/rest/agreements/16803487/authorisation/AUTOPAYOUT?contact_method=EMAIL'+id
          }).then(function successCallback(response) {
            console.log(response)
            
            // this callback will be called asynchronously
            // when the response is available
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
        }
      }
    })
    

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
