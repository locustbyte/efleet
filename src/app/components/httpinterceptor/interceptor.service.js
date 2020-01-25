(function() {
  'use strict';

  angular
    .module('eFleet')
    .factory('httpRequestInterceptor', httpRequestInterceptor);

  /** @ngInject */
  function httpRequestInterceptor($log, $http, $window, $q) {
      alert('sss')
    return {
        request: function (config) {
    
          config.headers['x-auth-token'] = 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==';
          config.headers['Accept'] = 'application/json;odata=verbose';
    
          return config;
        },
        response: function(response) {
            if (response.status === 401) {
                //  Redirect user to login page / signup Page.
            }
            return response || $q.when(response);
        }
      };
  }
})();