!function(){"use strict";angular.module("eFleet",["efleet.services","ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","mgcrea.ngStrap","ui.mask"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("eFleet").service("webDevTec",e)}(),function(){"use strict";function e(e){function t(t,n,a,i){var s,o=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){o.type(e).pause()["delete"]()}),s=t.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(e){o.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){s()})}function n(e,t){function n(){return a().then(function(){e.info("Activated Contributors View")})}function a(){return t.getContributors(10).then(function(e){return i.contributors=e,i.contributors})}var i=this;i.contributors=[],n()}n.$inject=["$log","githubContributor"];var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:n,controllerAs:"vm"};return a}e.$inject=["malarkey"],angular.module("eFleet").directive("acmeMalarkey",e)}(),function(){"use strict";function e(){function e(e,t){var n=this;n.service={},n.host=t.host(),n.host.indexOf(".")>=0&&(n.service.company=n.host.split(".")[0],console.log(n.service)),n.relativeDate=e(n.creationDate).fromNow()}e.$inject=["moment","$location"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("eFleet").directive("acmeNavbar",e)}(),function(){"use strict";function e(e,t){function n(n){function i(e){return e.data}function s(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return n||(n=30),t.get(a+"/contributors?per_page="+n).then(i)["catch"](s)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",i={apiHost:a,getContributors:n};return i}e.$inject=["$log","$http"],angular.module("eFleet").factory("githubContributor",e)}(),function(){"use strict";function e(e,t,n,a){function i(){o(),e(function(){l.classAnimation="rubberBand"},4e3)}function s(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function o(){l.awesomeThings=t.getTec(),angular.forEach(l.awesomeThings,function(e){e.rank=Math.random()})}var l=this;l.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1"},{title:"Dynamic Title 2",content:"Dynamic content 2",disabled:!0}],l.awesomeThings=[],l.classAnimation="",l.creationDate=1578480265634,l.showToastr=s,i(),l.goback=function(){a.path("/")},l.doSign=function(){a.path("/sign")}}e.$inject=["$timeout","webDevTec","toastr","$location"],angular.module("eFleet").controller("SignController",e)}(),function(){"use strict";function e(e,t,n,a,i){function s(e){var t=e.date,n=e.mode;return"day"===n&&(0===t.getDay()||6===t.getDay())}function o(e){var t=e.date,n=e.mode;if("day"===n)for(var i=new Date(t).setHours(0,0,0,0),s=0;s<a.events.length;s++){var o=new Date(a.events[s].date).setHours(0,0,0,0);if(i===o)return a.events[s].status}return""}var l=this;l.codeType="",l.codeStat="",l.service={},l.host=n.host(),l.host.indexOf(".")>=0&&(l.service.company=l.host.split(".")[0],console.log(l.service)),i({method:"GET",headers:{Authorization:"Basic b25saW5lc2FsZTpvbmxpbmVzYWxl","Content-Type":"application/json"},url:"https://v2vds.rcidirect.co.uk/rcidirect-services/rest/users/login"}).then(function(e){console.log(e),console.log(e.headers),i({method:"GET",headers:{Authorization:"Basic b25saW5lc2FsZTpvbmxpbmVzYWxl","Content-Type":"application/json"},url:"https://v2vds.rcidirect.co.uk/rcidirect-services/rest/agreements?search_value=2100554827"}).then(function(e){console.log(e)},function(e){})},function(e){}),l.doLookup=function(){n.path("/code")},a.units=[{id:0,label:"Please Choose"},{id:1,label:"Email"},{id:2,label:"SMS"}],a.codeTypeSelect=a.units[0],l.codeTypeSelected=function(e){a.codeTypeSelect=e,console.log(e.label),"Email"===e.label?l.codeType="Email":l.codeType="SMS"},l.codeTypeSelectedPush=function(e){console.log(e.label),l.codeStat="received"},l.doValidateCode=function(){console.log("validated")},a.inlineOptions={customClass:o,minDate:new Date,showWeeks:!0},a.dateOptions={dateDisabled:s,formatYear:"yy",maxDate:new Date(2020,5,22),minDate:new Date,startingDay:1},a.toggleMin=function(){a.inlineOptions.minDate=a.inlineOptions.minDate?null:new Date,a.dateOptions.minDate=a.inlineOptions.minDate},a.toggleMin(),a.open1=function(){a.popup1.opened=!0},a.open2=function(){a.popup2.opened=!0},a.setDate=function(e,t,n){a.dt=new Date(e,t,n)},a.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],a.format=a.formats[0],a.altInputFormats=["M!/d!/yyyy"],a.popup1={opened:!1},a.popup2={opened:!1};var r=new Date;r.setDate(r.getDate()+1);var c=new Date;c.setDate(r.getDate()+1),a.events=[{date:r,status:"full"},{date:c,status:"partially"}],l.doNextShift=function(){$("#smartwizard").on("leaveStep",function(e,t,n,i){switch(console.log(n),n){case 0:if(10!==$("#propnumber").val().length)return console.log("no"),!1;console.log("yes"),$(".sw-btn-prev").removeClass("hide"),$(".sw-btn-next").text("SEND CODE");break;case 1:return console.log(a.codeTypeSelect),"Please Choose"==a.codeTypeSelect.label?!1:!0;case 2:$(".sw-btn-next").text("MEMBER CENTER");break;case 3:$(".sw-btn-next").text("LOCATE PROPOSAL");break;case 4:$(".sw-btn-next").text("LOCATE PROPOSAL");break;default:$(".sw-btn-next").text("LOCATE PROPOSAL")}})},l.doPrevShift=function(){$("#smartwizard").on("leaveStep",function(e,t,n,a){switch(console.log(n),n){case 0:if(10!==$("#propnumber").val().length)return console.log("no"),!1;console.log("yes"),$(".sw-btn-prev").removeClass("hide"),$(".sw-btn-next").text("SEND CODE");break;case 1:console.log("vm.codeTypeSelect"),$(".sw-btn-next").text("VALIDATE CODE");break;case 2:$(".sw-btn-next").text("MEMBER CENTER");break;case 3:$(".sw-btn-next").text("LOCATE PROPOSAL");break;case 4:$(".sw-btn-next").text("LOCATE PROPOSAL");break;default:$(".sw-btn-next").text("LOCATE PROPOSAL")}})},angular.element(document).ready(function(){$("#smartwizard").smartWizard()}),a.$watch("$viewContentLoaded",function(){e(function(){$("#inclPhoto").change(function(){alert($(this).prop("checked"))}),$("#smartwizard").smartWizard({keyNavigation:!0,disabledSteps:[3],lang:{next:"LOCATE PROPOSAL",previous:"PREVIOUS"},toolbarSettings:{toolbarPosition:"bottom",toolbarButtonPosition:"right",showNextButton:!1,showPreviousButton:!1,toolbarExtraButtons:[$("<button></button>").text("PREVIOUS").addClass("btn btn-secondary sw-btn-prev disabled").on("click",function(){$("#smartwizard").smartWizard("previous")}),$("<button></button>").text("NEXT").addClass("btn btn-secondary sw-btn-next").on("click",function(){l.doNextShift()})]}}),$(".sw-btn-next").text("LOCATE PROPOSAL"),$(".sw-btn-prev").addClass("hide"),$("#smartwizard").on("showStep",function(e,t,n,a){switch(console.log("You are on step "+n+" now"),n){case 0:if(10!==$("#propnumber").val().length)return console.log("no"),!1;console.log("yes"),$(".sw-btn-prev").removeClass("hide"),$(".sw-btn-next").text("LOCATE PROPOSAL");break;case 1:$(".sw-btn-next").text("SEND CODE");break;case 2:$(".sw-btn-next").text("VALIDATE CODE");break;case 3:$(".sw-btn-next").text("LOCATE PROPOSAL");break;case 4:$(".sw-btn-next").text("MEMBER CENTER");break;default:$(".sw-btn-next").text("LOCATE PROPOSAL")}0===n?$(".sw-btn-prev").addClass("hide"):$(".sw-btn-prev").removeClass("hide")})},0)})}e.$inject=["$timeout","webDevTec","$location","$scope","$http"],angular.module("eFleet").controller("MainController",e)}(),function(){"use strict";function e(e,t,n){function a(){i(),e(function(){s.classAnimation="rubberBand"},4e3)}function i(){s.awesomeThings=t.getTec(),angular.forEach(s.awesomeThings,function(e){e.rank=Math.random()})}var s=this;s.awesomeThings=[],s.classAnimation="",s.creationDate=1578480265634,a(),s.goback=function(){n.path("/")},s.doSign=function(){n.path("/sign")}}e.$inject=["$timeout","webDevTec","$location"],angular.module("eFleet").controller("CodeController",e)}(),angular.module("efleet.services",[]).factory("httpRequestInterceptor",function(){return{request:function(e){return e.headers.Authorization="Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==",e.headers.Accept="application/json;odata=verbose",e}}})(function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("eFleet").run(e)})(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("code",{url:"/code",templateUrl:"app/code/code.html",controller:"CodeController",controllerAs:"code"}).state("sign",{url:"/sign",templateUrl:"app/sign/sign.html",controller:"SignController",controllerAs:"sign"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("eFleet").config(e)}(),function(){"use strict";angular.module("eFleet").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("eFleet").config(e)}(),angular.module("eFleet").run(["$templateCache",function(e){e.put("app/code/code.html",'<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><!-- <div class="text-center efleet-red">\n    <h1>E-Fleet Sign</h1>\n    \n    <p class="animated infinite" ng-class="main.classAnimation">\n      <button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button>\n    </p>\n    <p>\n      With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey>\n    </p>\n  </div> --><div class=row><div class=col-md-8><img src=assets/images/key.jpg width=100%><br><br><p class=font-size-20><strong>Welcome to the [brand] E-Fleet Electronic Signature service.</strong></p><p>Suspendisse non viverra est, in aliquet sapien. Sed facilisis tincidunt diam. Nam iaculis arcu ut facilisis hendrerit. Praesent ultricies auctor nulla, ut placerat sapien ultricies sed. Proin consequat sodales magna. Curabitur vitae libero dolor. Nam sapien justo, rhoncus id nisi a, porta varius diam. Nunc convallis mauris lorem, sit amet lobortis lectus placerat eget. Integer lacinia nunc sed lobortis lacinia.</p></div><div class="col-md-4 form-part"><p><strong>Validate security code</strong></p><p>We have just sent a security code to your email [email]. Please enter it below to continue:</p><br><br><form><div class=form-group><label for=exampleInputEmail1>Security Code</label><input type=email class=form-control id=fullName placeholder="Security Code"></div><br><button type=submit class="btn btn-default" ng-click=code.goback();>Re enter details</button> <button type=submit class="btn btn-danger" ng-click=code.doSign();>Validate</button><br><br></form></div></div><!-- <div class="row">\n    <div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'">\n      <div class="thumbnail">\n        <img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}">\n        <div class="caption">\n          <h3>{{ awesomeThing.title }}</h3>\n          <p>{{ awesomeThing.description }}</p>\n          <p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p>\n        </div>\n      </div>\n    </div>\n  </div> --></div><div class="container-fluid bg191919" style="margin-top: 150px"><div class="footer pad-top-20 pad-bottom-20"><div class=container><img src=assets/images/footer-logo-nissan.png width=120px alt=E-Fleet> &nbsp; &nbsp;&nbsp;&nbsp; Copyright &copy; RCI Finaicial Services Limited. All Rights Reserved.</div></div></div>'),e.put("app/main/main.html",'<div class=container ng-class="{\'nissan\':\'nissan-site\', \'renault\':\'renault-site\',\'dacia\':\'dacia-site\'}[main.service.company]"><div><acme-navbar></acme-navbar></div><uib-tabset class=main-tabs active=activeForm><uib-tab index=0 heading=Dashboard><div style="margin: 1px;\n      margin-top: 0px;\n      border: 1px solid #c40032"><div id=smartwizard><ul><li><a href=#step-1>1. Locate Proposal<br><small>Find your proposal</small></a></li><li><a href=#step-2>2. Request<br><small>Authentication Code</small></a></li><li><a href=#step-3>3. Enter Validation Code<br><small>Validate</small></a></li><li><a href=#step-4>4. Photo ID<br><small>Selfie / Upload Photo</small></a></li><li><a href=#step-5>5. Sign Contract<br><small>Sign your agreement</small></a></li></ul><div><div id=step-1><div class="row m-0 equal"><div class="col-md-8 pad0"><img src=assets/images/nml.jpg width=100%><br><div class=p-20><p class="ft17 nis-light"><strong>Welcome to the <span style="text-transform: capitalize">{{main.service.company}}</span> finance electronic signing service.</strong></p><p>Suspendisse non viverra est, in aliquet sapien. Sed facilisis tincidunt diam. Nam iaculis arcu ut facilisis hendrerit. Praesent ultricies auctor nulla, ut placerat sapien ultricies sed. Proin consequat sodales magna. Curabitur vitae libero dolor. Nam sapien justo, rhoncus id nisi a, porta varius diam. Nunc convallis mauris lorem, sit amet lobortis lectus placerat eget. Integer lacinia nunc sed lobortis lacinia.</p></div></div><div class="col-md-4 form-part"><p class=ft13><strong>Locate your proposal</strong></p><p>Signing your agreement electronially couldn\'t be easier. First we need to find your proposal, you can help us by completing the following fields.</p><br><form name=formStep1 id=formStep1 novalidate><div class=form-group><label for=propnumber>Proposal number*</label><br><small>(typically 10 digits)</small> <input type=number ng-model=login.propnumber class=form-control name=propnumber id=propnumber required ng-minlength=10 ng-maxlength=10><p ng-show=formStep1.propnumber.$error.minlength class=help-block>Proposal number is too short.</p><p ng-show=formStep1.propnumber.$error.maxlength class=help-block>Proposal number is too long.</p></div><div class=form-group><label for=exampleInputEmail1>Date of birth*</label><p class=input-group><input type=text class=form-control uib-datepicker-popup={{format}} ng-model=dt is-open=popup1.opened datepicker-options=dateOptions ng-required=true close-text=Close alt-input-formats=altInputFormats> <span class=input-group-btn><button type=button class="btn btn-danger" ng-click=open1()><i class="glyphicon glyphicon-calendar"></i></button></span></p></div><div class=form-group><label>Email Address*</label><input type=email class=form-control id=emailAddress name=emailAddress ng-model=login.email required><p ng-show="formStep1.emailAddress.$invalid && !formStep1.emailAddress.$pristine" class=help-block>Please enter a valid email address.</p></div><!-- <label class="switch">\n                      <input id="inclPhoto" type="checkbox">\n                      <span class="slider round"></span>\n                    </label> --><br><!-- <input type="submit" class="btn btn-danger" wz-next value="Verify Details" /> --></form></div></div></div><div id=step-2><div class="row m-0 equal"><div class="col-md-8 p-20"><div ng-if="main.codeStat != \'received\'"><p class=ft13><strong>We need to validate who you are</strong></p><p>We need to send you a code to validate who you are.<br>You can choose whether to receive this code via <strong>Email</strong> or <strong>SMS</strong>.</p><hr><!-- <p class="ft13"><strong>Choose how to receive code</strong></p> --><form><div class=form-group><select ng-model=codeTypeSelect ng-change=main.codeTypeSelected(codeTypeSelect) ng-options="opt as opt.label for opt in units " class=form-control></select><p ng-if="codeTypeSelect.label == \'Please Choose\'" class=help-block>Please choose a method for receiving the code.</p></div><p ng-if="main.codeType == \'Email\' && codeTypeSelect.label != \'Please Choose\'">We will send an email to <strong>{{login.email}}</strong></p><p ng-if="main.codeType == \'SMS\' && codeTypeSelect.label != \'Please Choose\'">We will send an SMS to [MOBILE]</p><p>Click \'SEND CODE\' to continue.</p><!-- <button class="btn btn-secondary sw-btn-next">SEND CODE</button> --><!-- <br />\n                    <input type="button" class="btn btn-danger" value="Send Code" ng-click="main.codeTypeSelectedPush(codeTypeSelect)" /> --><br><br></form></div></div><div class="col-md-4 form-part"><div ng-if="main.codeStat != \'received\'"><p></p><div class="alert alert-warning" role=alert><strong>NOTE: </strong>We can only send the code to either your registered email address or registered mobile number. That which is recorded against the proposal number.</div><p></p></div></div></div></div><div id=step-3><div class="row m-0 equal"><div class="col-md-8 p-20"><p class=ft13><strong>We just sent you a code!</strong></p><p>We have just sent an authorisation code to your registered <span ng-if="main.codeType == \'Email\'">email address:<br><strong>{{login.email}}</strong><br>You must now enter that code here to continue.</span> <span ng-if="main.codeType == \'SMS\'">mobile number:<br><strong>{{login.email}}</strong><br>You must now enter that code here to continue.</span></p><hr></div><div class="col-md-4 form-part"><p class=ft13><strong>Security Code</strong></p><form><div class=form-group><label for=authCode>Enter security code sent via <span ng-if="main.codeType == \'Email\'">Email</span> <span ng-if="main.codeType == \'SMS\'">SMS</span></label><input type=text ng-model=authCode ui-mask=9999 ui-mask-placeholder required class=form-control id=AuthCode></div><!-- <br />\n                      <!-- <input type="submit" class="btn btn-default" wz-previous value="Re-Enter Details" /> --><!-- <input type="submit" class="btn btn-danger" value="Validate Code" ng-click="main.doValidateCode();"/> --><br><br></form></div></div></div><div id=step-4>Step Content</div><div id=step-5><div class="row m-0 equal"><div class="col-md-8 p-20"><p class=ft13><strong>Sign your agreement</strong></p></div><div class="col-md-4 p-20">Some functions here</div></div></div></div></div></div></uib-tab><uib-tab index=1 heading=About><div class=p-20><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius et massa nec tempor. Aliquam pulvinar, enim id blandit facilisis, erat nisi efficitur neque, vitae sagittis turpis odio et quam. Maecenas egestas volutpat nulla, id cursus enim malesuada eu. Sed id sagittis nunc, tempus efficitur ante. Nam at diam eget purus vestibulum egestas. Nulla tempor euismod dolor vitae fringilla. Aenean pellentesque tellus vel nisl accumsan, elementum vestibulum felis efficitur. Nulla facilisi. Nullam eleifend congue erat, at semper enim tristique vel. Duis efficitur tincidunt lacus vel vulputate. Integer mollis cursus massa, ut ultrices enim. Donec eget ultrices neque.</p><p>Fusce quis erat sed est convallis lacinia sit amet varius tellus. Fusce ex nisi, auctor ac egestas sit amet, tempus vel metus. Pellentesque ac mauris nibh. Suspendisse sit amet magna lectus. Nulla ipsum leo, tincidunt quis venenatis sit amet, posuere et elit. Sed sed euismod tortor. Suspendisse tempus tincidunt turpis, ut rutrum mauris efficitur ut. Aenean ut nisi vitae diam dignissim tincidunt. Vivamus hendrerit sed mi fermentum finibus. Aenean nunc dolor, semper ut metus vitae, eleifend rutrum mauris.</p><p>Nulla facilisi. Donec commodo lorem eu ligula laoreet, ac tempus nulla interdum. Curabitur libero tortor, molestie sit amet arcu in, convallis malesuada turpis. Aenean orci nulla, viverra a libero vel, condimentum pretium est. Etiam mollis mauris non condimentum laoreet. Phasellus sagittis mi id tempor cursus. Nulla non massa eget erat venenatis pellentesque non nec lacus. Mauris dapibus elit vitae consectetur ultrices. Nullam lobortis, neque sed scelerisque condimentum, ligula mi aliquam quam, ut rutrum turpis orci a erat.</p></div></uib-tab><uib-tab index=2 heading=Contact><div class=p-20>Contact Content</div></uib-tab></uib-tabset></div><!-- <div class="container-fluid pad0" ng-class="{\'nissan\':\'nissan-site\', \'renault\':\'renault-site\',\'dacia\':\'dacia-site\'}[main.service.company]">\n  <div class="footer">\n    <div class="container pad-top-20 pad-bottom-20">\n      <img src="assets/images/{{main.service.company}}/logo.png" width="120px" alt="E-Fleet"> &nbsp; &nbsp;&nbsp;&nbsp; Copyright\n      &copy; RCI Finaicial Services Limited. All Rights Reserved.\n    </div>\n  </div>\n</div> -->'),e.put("app/sign/sign.html",'<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><!-- <div class="text-center efleet-red">\n    <h1>E-Fleet Sign</h1>\n    \n    <p class="animated infinite" ng-class="main.classAnimation">\n      <button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button>\n    </p>\n    <p>\n      With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey>\n    </p>\n  </div> --><uib-tabset class=main-tabs active=activeForm><uib-tab index=0 heading=Dashboard><div class=p-20><div class=wizard><div class=wizard-inner><div class=connecting-line></div><ul class="nav nav-tabs" role=tablist><li role=presentation class=active><a href=#step1 data-toggle=tab aria-controls=step1 role=tab title="Step 1"><span class=round-tab><i class="glyphicon glyphicon-pencil"></i></span></a><p class=wizard-under-text>Sign Contract</p></li><li role=presentation class=disabled><a href=#step2 data-toggle=tab aria-controls=step2 role=tab title="Step 2"><span class=round-tab><i class="glyphicon glyphicon-road"></i></span></a><p class=wizard-under-text>Confirm Vehicle</p></li><li role=presentation class=disabled><a href=#step3 data-toggle=tab aria-controls=step3 role=tab title="Step 3"><span class=round-tab><i class="glyphicon glyphicon-inbox"></i></span></a><p class=wizard-under-text>Additional Documents</p></li><li role=presentation class=disabled><a href=#complete data-toggle=tab aria-controls=complete role=tab title=Complete><span class=round-tab><i class="glyphicon glyphicon-ok"></i></span></a><p class=wizard-under-text>Welcome Pack</p></li></ul></div><form role=form class=form-eee><div class=tab-content><div class="tab-pane active" role=tabpanel id=step1><div><div class=col-lg-4><div class=p-20><div class=col-lg-12><p class=p-0>Mark Jenkins</p><p class=p-0>Nissan Juke</p><p class=p-0>36 Months</p></div></div></div><div class=col-lg-4><div class=p-20><div class=col-lg-12><i class="fas fa-file-pdf"></i> <i class="fa fa-accessible-icon"></i></div></div></div><div class=col-lg-4><div class=p-20><h3>Sign your contract</h3><p>Please take the time to review this contract by clicking the document icon.</p><ul class=list-inline><li><button type=button class="btn btn-success next-step">Save and continue</button></li></ul></div></div></div></div><div class=tab-pane role=tabpanel id=step2><h3>Step 2</h3><p>This is step 2</p><ul class="list-inline pull-right"><li><button type=button class="btn btn-default prev-step">Previous</button></li><li><button type=button class="btn btn-primary next-step">Save and continue</button></li></ul></div><div class=tab-pane role=tabpanel id=step3><h3>Step 3</h3><p>This is step 3</p><ul class="list-inline pull-right"><li><button type=button class="btn btn-default prev-step">Previous</button></li><li><button type=button class="btn btn-default next-step">Skip</button></li><li><button type=button class="btn btn-primary btn-info-full next-step">Save and continue</button></li></ul></div><div class=tab-pane role=tabpanel id=complete><h3>Complete</h3><p>You have successfully completed all steps.</p></div><div class=clearfix></div></div></form></div></div></uib-tab><uib-tab index=1 heading=About><div class=p-20>About Content</div></uib-tab><uib-tab index=2 heading=Contact><div class=p-20>Contact Content</div></uib-tab></uib-tabset></div><div class="container-fluid bg191919 m-t-300"><div class="footer pad-top-20 pad-bottom-20"><div class=container><img src=assets/images/footer-logo-nissan.png width=120px alt=E-Fleet> &nbsp; &nbsp;&nbsp;&nbsp; Copyright &copy; RCI Finaicial Services Limited. All Rights Reserved.</div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top"><div><div class=navbar-header style="margin-top: 10px;margin-bottom: 10px"><img src=assets/images/{{vm.service.company}}/logo.png width=500px alt=E-Fleet><br></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><!-- <ul class="nav navbar-nav nav-brand topnav">\n        <li class="active"><a ng-href="../">Home</a></li>\n        <li><a ng-href="../">Latest Offers</a></li>\n        <li><a ng-href="#">Find a dealer</a></li>\n        <li><a ng-href="#">Products & Services</a></li>\n        <li><a ng-href="#">About</a></li>\n        <li><a ng-href="#">Contact</a></li>\n      </ul> --></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-15da970e97.js.map
