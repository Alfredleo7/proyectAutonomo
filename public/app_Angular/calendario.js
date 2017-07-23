var mainAplicationModuleName = 'calendario';

var mainAplicationModule = angular.module(mainAplicationModuleName,['ngRoute','ui.calendar','ui.bootstrap','ui.bootstrap.datetimepicker']);

mainAplicationModule.config(['$locationProvider',
  function($locationProvider){
    $locationProvider.hashPrefix('!');
  }
]);

angular.element(document).ready(function(){
  angular.bootstrap(document, [mainAplicationModuleName]);
});
