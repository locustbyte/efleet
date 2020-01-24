(function() {
  'use strict';

  angular
    .module('eFleet')
    .controller('CodeController', CodeController);

  /** @ngInject */
  function CodeController($timeout, webDevTec, $location) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1578480265634;
    
    activate();
    
    vm.goback = function(){
      $location.path( "/" );
    }

    vm.doSign = function(){
      $location.path( "/sign" );
    }

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    
    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }





    
  }
})();
