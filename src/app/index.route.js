(function() {
  'use strict';

  angular
    .module('eFleet')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('code', {
        url: '/code',
        templateUrl: 'app/code/code.html',
        controller: 'CodeController',
        controllerAs: 'code'
      })

      .state('sign', {
        url: '/sign',
        templateUrl: 'app/sign/sign.html',
        controller: 'SignController',
        controllerAs: 'sign'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
