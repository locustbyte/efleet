(function() {
  'use strict';

  angular
    .module('eFleet')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $http, Restangular) {
    // $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    // $http.defaults.xsrfCookieName = 'csrftoken';
    $log.debug('runBlock end');
    // $http.get('https://v2vds.rcidirect.co.uk/rcidirect-services/rest/users/login')
    // .then(function(res) {
    //   //console.log(res)
    // })
    var LOGIN_ENDPOINT = 'users/login';

    Restangular.addRequestInterceptor(function(element, operation, what, url){
      console.log(element)
      return element;
    })
  }

})();
