(function() {
  'use strict';

  angular
    .module('eFleet')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $location, $scope) {
    var vm = this;

    var service = {};
    var host = $location.host();

    if (host.indexOf('.') >= 0) {
      service.company = host.split('.')[0];
      console.log(service)
    }
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1578480265634;
    vm.showToastr = showToastr;

    activate();

    vm.doLookup = function() {
      $location.path( "/code" );
    }


    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
    $scope.steps = [
      'Step 1',
      'Step 2',
      'Disabled Step'
    ];
			
    $scope.current = 2;

    $scope.stepClick = function(index) {
      $scope.current = index;
    }

    $scope.stepDisabled = function(index) {
      return index > 1; // disable steps 2 and the ones after it
    }
  }
})();
