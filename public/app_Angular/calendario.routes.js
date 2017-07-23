'use strict';

angular.module('calendario').config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
    when('/', {
      templateUrl: 'app_Angular/views/calendario.view.html',
      controller: 'calendario.controller'
    });
  }
]);
