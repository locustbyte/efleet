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
    $http.get('http://test-routes.herokuapp.com/test/hello')
    .then(function(res) {
      console.log(res.data.message)
    })
  }

})();
