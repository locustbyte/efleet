(function() {
  'use strict';

  angular
    .module('eFleet')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
    $log.debug('runBlock end');
    // $http.get('https://v2vds.rcidirect.co.uk/rcidirect-services/rest/users/login')
    // .then(function(res) {
    //   //console.log(res)
    // })
  }

})();
