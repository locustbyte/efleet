(function() {
  'use strict';

  angular
    .module('eFleet')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $location) {
      var vm = this;

      vm.service = {};
      vm.host = $location.host();

      if (vm.host.indexOf('.') >= 0) {
        vm.service.company = vm.host.split('.')[0];
        console.log(vm.service)
      }

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
