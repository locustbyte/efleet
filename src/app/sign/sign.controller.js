(function() {
  'use strict';

  angular
    .module('eFleet')
    .controller('SignController', SignController);

  /** @ngInject */
  function SignController($timeout, webDevTec, toastr, $location) {
    var vm = this;

    vm.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1578480265634;
    vm.showToastr = showToastr;

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

      // window.onload = () => {
      //   initPDFViewer("assets/qHb8-example.pdf");
      // };
  }
})();
