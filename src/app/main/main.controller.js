(function () {
  'use strict';

  

  angular
    .module('eFleet')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, $location, $scope, $http, $window, $cookies, apiService) {
    var vm = this;
    vm.startprocessstatus = false;
    vm.codeType = "";
    vm.codeStat = "";

    $scope.findProp = {};
    
   
    //$scope.getMovieListing()
    //Brand diversion
    vm.service = {};
    vm.host = $location.host();

    if (vm.host.indexOf('.') >= 0) {
      vm.service.company = vm.host.split('.')[0];
    }

    $scope.doApiLogin = function() {
      sessionStorage.removeItem("auth");
      $http({
        method: 'GET',
        headers:  { 'Authorization': 'Basic b25saW5lc2FsZTpvbmxpbmVzYWxl', 'Content-Type': 'application/json' },
        // url: 'https://v2vds.rcidirect.co.uk/rcidirect-services/rest/users/login'
        url: 'http://web-v2dev-uk.rci.uk/rcidirect-services/rest/users/login'
      }).then(function successCallback(response) {
        
        if ( !sessionStorage.getItem("auth") ) {
          sessionStorage.setItem("auth", response.headers()['x-auth-token']);
        }
        console.log(response)
        $scope.doGetDealership();

        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }

    $scope.doGetDealership = function(){
      $http({
        method: 'PUT',
        headers: {'Authorization': 'Basic b25saW5lc2FsZTpvbmxpbmVzYWxl', 'Content-Type': 'application/json'},
        data: {"selected_dealership_actor_code": "010000014965","selected_sales_executive_actor_code":"010001460890","stage":"LOGIN"},
        url: 'http://web-v2dev-uk.rci.uk/rcidirect-services/rest/users/dealer_selection'
      }).then(function successCallback(response) {
        console.log(response)
        sessionStorage.setItem("selected-dealer", '010000014965');
        $scope.doSearchAgreementByID();
        //$scope.doSearchAgreementByID();
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }

    $scope.doSearchAgreementByID = function(propnumber){
      //2200692686
      $http({
        method: 'GET',
        headers: {'Authorization': 'Basic b25saW5lc2FsZTpvbmxpbmVzYWxl', 'Content-Type': 'application/json'},
        url: 'http://web-v2dev-uk.rci.uk/rcidirect-services/rest/agreements?search_value=' + propnumber
      }).then(function successCallback(response) {
        console.log(response)
        $scope.getActorDetails();
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }

    $scope.getActorDetails = function(){
      //2200692686
      $http({
        method: 'GET',
        headers: {'Authorization': 'Basic b25saW5lc2FsZTpvbmxpbmVzYWxl', 'Content-Type': 'application/json'},
        url: 'http://web-v2dev-uk.rci.uk/rcidirect-services/rest/actors/individual/010001368468'
      }).then(function successCallback(response) {
        console.log(response)
        $scope.doGetAuthCode();
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    } 

    $scope.doGetAuthCode = function(){
      $http({
        method: 'POST',
        headers: {'Authorization': 'Basic b25saW5lc2FsZTpvbmxpbmVzYWxl', 'Content-Type': 'application/json', 'Accept':'application/json'},
        //data: {"contact_method": "EMAIL"},
        url: 'http://web-v2dev-uk.rci.uk/rcidirect-services/rest/agreements/16803487/authorisation/AUTOPAYOUT?contact_method=EMAIL'
      }).then(function successCallback(response) {
        console.log(response);
        $scope.doVerifyAuthCode();

        
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }

    $scope.doVerifyAuthCode = function(){
      $http({
        method: 'POST',
        headers: {'Authorization': 'Basic b25saW5lc2FsZTpvbmxpbmVzYWxl', 'Content-Type': 'application/json', 'Accept':'application/json'},
        //data: {"contact_method": "EMAIL"},
        url: 'http://web-v2dev-uk.rci.uk/rcidirect-services/rest/agreements/16803487/authorisation/AUTOPAYOUT/verify?authorisation_code=1234'
      }).then(function successCallback(response) {
        console.log(response)
        sessionStorage.setItem("selected-dealer", '010000014965');
        
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }

    $scope.getAgreementForSiginging = function(){
      $http({
        method: 'GET',
        headers:  { 'x-auth-token': sessionStorage.auth, 'Content-Type': 'application/json' },
        url: 'http://web-v2dev-uk.rci.uk/rcidirect-services/rest/documents/generateContractSignDoc/agreement/16803487'
      }).then(function successCallback(response) {
        console.log(response.data.data.redirection_url)
        $("#doSignAgreement").attr("src",response.data.data.redirection_url)
        $(".loader-cover").addClass("hide")
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }

    
    

    $scope.doApiLogin();

    $scope.checkStep0 = function(callback){

      $http({
        method: 'GET',
        headers: {'Authorization': 'Basic b25saW5lc2FsZTpvbmxpbmVzYWxl', 'Content-Type': 'application/json'},
        url: 'http://web-v2dev-uk.rci.uk/rcidirect-services/rest/agreements?search_value='+$scope.findProp.propnumber
      }).then(function successCallback(response) {
        console.log(response.data.data.length)

        if ( response.data.data.length === 0 ) {
          alert('not found')
          return false;
        } else {
          callback({err:false});
          return true
        }
        
        
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        callback({err:true});
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

      
      
    }

    // Simple GET request:
    

    vm.startprocess = function(){
      vm.startprocessstatus = true;
      $(".btn-toolbar").removeClass("hide")
    }

    vm.doLookup = function () {
      $location.path("/code");
    }




    $scope.units = [
      {'id': 0, 'label': 'Please choose a method for receiving the code'},
      {'id': 1, 'label': 'Email'},
      {'id': 2, 'label': 'SMS'},
      {'id': 3, 'label': 'Both Email and SMS'},
    ]

    $scope.codeTypeSelect = $scope.units[0];

    vm.codeTypeSelected = function(selectedCodeChoice){
      $scope.codeTypeSelect = selectedCodeChoice;
      $scope.findProp.codePref = selectedCodeChoice;
      console.log($scope.findProp)
    }

    //Do API call to get code via requested method
    vm.codeTypeSelectedPush = function(selectedCodeChoice){
      console.log(selectedCodeChoice.label)
      vm.codeStat = "received";
    }

    vm.doValidateCode = function(){
      console.log('validated')
    }



    $scope.inlineOptions = {
      customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
    };

    $scope.dateOptions = {
      dateDisabled: disabled,
      formatYear: 'yy',
      formatDay: 'dd',
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
        console.log($scope.findProp)

        if ( stepNumber == 0 ) {
          $scope.doSearchAgreementByID($scope.findProp.propnumber);
          return true
        }

    
        
        switch (stepNumber) {
          case 0:
          
          // $scope.findProp = {};
          // $scope.findProp.propnumber = $('#propnumber').val();
          console.log($scope.findProp)

            if ( $("#propnumber").val().length === 10 ) {

              var promise =
                  apiService.getAgreementByID('2200692686');
              promise.then(
                
                function(payload) {
                  console.log(payload.data.data[0].agreement_id)
                  console.log("payload")
                  sessionStorage.setItem("agreementId",payload.data.data[0].agreement_id)
                    //$scope.listingData = payload.data;
                },
                function(errorPayload) {
                    $log.error('failure loading movie', errorPayload);
                });
              // return $http({
              //   method: 'GET',
              //   headers: {'Authorization': 'Basic b25saW5lc2FsZTpvbmxpbmVzYWxl', 'Content-Type': 'application/json'},
              //   url: 'http://web-v2dev-uk.rci.uk/rcidirect-services/rest/agreements?search_value='+$scope.findProp.propnumber
              // }).then(function successCallback(response) {
              //   console.log(response.data.data.length)
        
              //   if ( response.data.data.length === 0 ) {
              //     alert('not found')
              //     return false;
              //   } else {
              //     return true
              //   }
                
                
              //   // this callback will be called asynchronously
              //   // when the response is available
              // }, function errorCallback(response) {
              //   callback({err:true});
              //   // called asynchronously if an error occurs
              //   // or server returns response with an error status.
              // });
              
              
            } else {
              console.log('no')
              return false
              //$('#smartwizard').smartWizard("previous");
            }
            
            break;
          case 1:
            console.log(stepDirection)
            if ( stepDirection != "backward" ) {
              if ( $scope.codeTypeSelect.label == "Please choose a method for receiving the code") {
                return false;
              } else {
                return true;
              }
            }
            
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
        return confirm("Do you want to leave the step "+stepNumber+"?");
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
            console.log("vm.codeTypeSelect")
           //return true;
           $(".sw-btn-next").text("VALIDATE CODE");
            break;
          case 2:
            $(".sw-btn-next").text("MEMBER CENTER")
            break;
          case 3:
            $(".sw-btn-next").text("UPLOAD")
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
          $(".btn-toolbar").addClass("hide")
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
                $(".sw-btn-next").text("UPLOAD")
                break;
              case 4:
                $(".sw-btn-next").text("MEMBER CENTER")
                $http({
                  method: 'GET',
                  headers:  { 'x-auth-token': sessionStorage.auth, 'Content-Type': 'application/json' },
                  url: 'http://web-v2dev-uk.rci.uk/rcidirect-services/rest/documents/generateContractSignDoc/agreement/16803487'
                }).then(function successCallback(response) {
                  console.log(response)
                  $("#doSignAgreement").attr("src",response.data.data.redirection_url)
                  $(".loader-cover").addClass("hide")
                  // this callback will be called asynchronously
                  // when the response is available
                }, function errorCallback(response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                });
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
