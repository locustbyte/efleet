(function () {
  'use strict';

  function testInterceptor() {
    return {
      request: function (config) {


        config.headers['Content-Type'] = 'application/json'

        // config.headers['x-csrf-token'] = sessionStorage.getItem("auth")
        // config.headers["x-auth-token"] = sessionStorage.getItem("auth")

        return config;
      },

      requestError: function (config) {
        return config;
      },

      response: function (res) {
        return res;
      },

      responseError: function (res) {
        return res;
      }
    }
  }

  angular
    .module('eFleet')
    .config(config)
    .factory('testInterceptor', testInterceptor)

  /** @ngInject */
  function config($logProvider, $httpProvider, RestangularProvider, $sessionStorageProvider) {
    RestangularProvider.setBaseUrl('https://v2vds.rcidirect.co.uk/rcidirect-services/rest/')
    var sessionAuth = $sessionStorageProvider.get('auth');
    

    if (typeof sessionAuth == 'object' && sessionAuth != null && "X-AUTH-TOKEN" in sessionAuth) {
      RestangularProvider.setDefaultHeaders({
        "x-auth-token": sessionAuth['X-AUTH-TOKEN'],
        "X-Requested-With": "XMLHttpRequest"
      });
    }

    RestangularProvider.setResponseInterceptor(function (
      data,
      operation,
      what
    ) {
      var extractedData;
      if (operation === "getList" && data.data) {
        extractedData = data.data;
      } else if (operation === "get" && data.data) {
        extractedData = data.data;
      } else {
        extractedData = data;
      }

      return extractedData;
    });

    RestangularProvider.addFullRequestInterceptor(function (
      headers,
      params,
      element,
      httpConfig
    ) {
      if (element == "users/login") {
        RestangularProvider.setFullResponse(true);
      } else {
        RestangularProvider.setFullResponse(false);
      }
    });

    //$httpProvider.interceptors.push('testInterceptor');
    //var apiRequestCount = 0;
    // Enable log
    //$http.defaults.headers.common['Authorization'] = 'Basic ' + token;
    $logProvider.debugEnabled(true);
  }

})();
