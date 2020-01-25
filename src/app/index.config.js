(function () {
  'use strict';

  angular
    .module('eFleet')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider) {
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
