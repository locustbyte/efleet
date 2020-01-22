(function () {
  'use strict';

  angular
    .module('eFleet')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $location, $scope) {
    var vm = this;
    vm.codeType = "";
    vm.codeStat = "";

    //Brand diversion
    vm.service = {};
    vm.host = $location.host();

    if (vm.host.indexOf('.') >= 0) {
      vm.service.company = vm.host.split('.')[0];
      console.log(vm.service)
    }

    //Wizard Validation
    // $scope.enterValidation = function(){

    //   if ( $("#propnumber").val().length !== 10 ) {
    //     return false;
    //   } else {
    //     return false;
    //   }
    // };

    vm.doLookup = function () {
      $location.path("/code");
    }




    $scope.units = [
      {'id': 0, 'label': 'Please Choose'},
      {'id': 1, 'label': 'Email'},
      {'id': 2, 'label': 'SMS'},
    ]

    $scope.codeTypeSelect = $scope.units[0];

    vm.codeTypeSelected = function(selectedCodeChoice){
      console.log(selectedCodeChoice.label)
      if ( selectedCodeChoice.label === 'Email') {
        vm.codeType = 'Email';
      } else {
        vm.codeType = 'SMS';
      }
    }

    //Do API call to get code via requested method
    vm.codeTypeSelectedPush = function(selectedCodeChoice){
      console.log(selectedCodeChoice.label)
      vm.codeStat = "received";
    }

    vm.doValidateCode = function(){
      console.log('validated')
    }

    $scope.data= $scope.units[0]; // Set by default the value "test1


    $scope.inlineOptions = {
      customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
    };

    $scope.dateOptions = {
      dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
      var date = data.date,
        mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function () {
      $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
      $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function () {
      $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
      $scope.popup2.opened = true;
    };

    $scope.setDate = function (year, month, day) {
      $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
      opened: false
    };

    $scope.popup2 = {
      opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

    function getDayClass(data) {
      var date = data.date,
        mode = data.mode;
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

        for (var i = 0; i < $scope.events.length; i++) {
          var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

          if (dayToCheck === currentDay) {
            return $scope.events[i].status;
          }
        }
      }

      return '';
    }

    vm.doNextShift = function(){
      $("#smartwizard").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
        //return confirm("Do you want to leave the step "+stepNumber+"?");
        console.log(stepNumber)
        
        switch (stepNumber) {
          case 0:


            if ( $("#propnumber").val().length === 10 ) {
              console.log('yes');
              $(".sw-btn-prev").removeClass("hide")
              //return true;
              $(".sw-btn-next").text("SEND CODE");
              //$('#smartwizard').smartWizard("next");
            } else {
              console.log('no')
              return false
              //$('#smartwizard').smartWizard("previous");
            }
            
            break;
          case 1:
           //return true;
           $(".sw-btn-next").text("VALIDATE CODE");
            break;
          case 2:
            $(".sw-btn-next").text("MEMBER CENTER")
            break;
          case 3:
            $(".sw-btn-next").text("LOCATE PROPOSAL")
            break;
          case 4:
            $(".sw-btn-next").text("LOCATE PROPOSAL")
            break;
          default:
            $(".sw-btn-next").text("LOCATE PROPOSAL")
        }
      });
    }

    vm.doPrevShift = function(){
      $("#smartwizard").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
        //return confirm("Do you want to leave the step "+stepNumber+"?");
        console.log(stepNumber)
        
        switch (stepNumber) {
          case 0:


            if ( $("#propnumber").val().length === 10 ) {
              console.log('yes');
              $(".sw-btn-prev").removeClass("hide")
              //return true;
              $(".sw-btn-next").text("SEND CODE");
              //$('#smartwizard').smartWizard("next");
            } else {
              console.log('no')
              return false
              //$('#smartwizard').smartWizard("previous");
            }
            
            break;
          case 1:
           //return true;
           $(".sw-btn-next").text("VALIDATE CODE");
            break;
          case 2:
            $(".sw-btn-next").text("MEMBER CENTER")
            break;
          case 3:
            $(".sw-btn-next").text("LOCATE PROPOSAL")
            break;
          case 4:
            $(".sw-btn-next").text("LOCATE PROPOSAL")
            break;
          default:
            $(".sw-btn-next").text("LOCATE PROPOSAL")
        }
      });
    }

    angular.element(document).ready(function () {
      $('#smartwizard').smartWizard();
      
    });

    $scope.$watch('$viewContentLoaded',
      function () {
        $timeout(function () {

          $('#inclPhoto').change(function() {
            alert($(this).prop('checked'))
          })
          
          $('#smartwizard').smartWizard({
            keyNavigation: true,
            disabledSteps: [3],
            lang: {  // Language variables
              next: 'LOCATE PROPOSAL', 
              previous: 'PREVIOUS'
            },
            toolbarSettings: {
              toolbarPosition: 'bottom', // none, top, bottom, both
              toolbarButtonPosition: 'right', // left, right
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [
                $('<button></button>').text('PREVIOUS')
                          .addClass('btn btn-secondary sw-btn-prev disabled')
                          .on('click', function(){ 
                            $('#smartwizard').smartWizard("previous");
                          }),
                $('<button></button>').text('NEXT')
                          .addClass('btn btn-secondary sw-btn-next')
                          .on('click', function(){ 
                            vm.doNextShift();                  
                          })
              ]
            },
          });
          $(".sw-btn-next").text("LOCATE PROPOSAL")
          $(".sw-btn-prev").addClass("hide")


          // Initialize the leaveStep event
          // $("#smartwizard").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
          //   //return confirm("Do you want to leave the step "+stepNumber+"?");
            
          //   switch (stepNumber) {
          //     case 0:
          //       if ( $("#propnumber").val().length === 10 ) {
          //         console.log('yes');
          //         //return true;
          //         $(".sw-btn-next").text("SEND CODE");
          //         //$('#smartwizard').smartWizard("next");
          //       } else {
          //         console.log('no')
          //         return false
          //         //$('#smartwizard').smartWizard("previous");
          //       }
                
          //       break;
          //     case 1:
          //      //return true;
                
          //       break;
          //     case 2:
          //       $(".sw-btn-next").text("VALIDATE CODE")
          //       break;
          //     case 3:
          //       $(".sw-btn-next").text("LOCATE PROPOSAL")
          //       break;
          //     case 4:
          //       $(".sw-btn-next").text("LOCATE PROPOSAL")
          //       break;
          //     default:
          //       $(".sw-btn-next").text("LOCATE PROPOSAL")
          //   }
          // });
          $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection) {
            console.log("You are on step "+stepNumber+" now");

            switch (stepNumber) {
              case 0:
    
    
                if ( $("#propnumber").val().length === 10 ) {
                  console.log('yes');
                  $(".sw-btn-prev").removeClass("hide")
                  //return true;
                  $(".sw-btn-next").text("LOCATE PROPOSAL");
                  //$('#smartwizard').smartWizard("next");
                } else {
                  console.log('no')
                  return false
                  //$('#smartwizard').smartWizard("previous");
                }
                
                break;
              case 1:
               //return true;
               $(".sw-btn-next").text("SEND CODE");
                break;
              case 2:
                $(".sw-btn-next").text("VALIDATE CODE")
                break;
              case 3:
                $(".sw-btn-next").text("LOCATE PROPOSAL")
                break;
              case 4:
                $(".sw-btn-next").text("MEMBER CENTER")
                break;
              default:
                $(".sw-btn-next").text("LOCATE PROPOSAL")
            }

            if ( stepNumber === 0 ) {
              $(".sw-btn-prev").addClass("hide")
            } else {
              $(".sw-btn-prev").removeClass("hide")
            }
            
            
         });
        }, 0);
      });
  }
})();
