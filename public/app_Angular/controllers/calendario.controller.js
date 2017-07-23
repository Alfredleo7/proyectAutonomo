'use strict';

angular.module('calendario').controller('calendario.controller', ['$scope','$compile','$timeout','uiCalendarConfig',
  function($scope,$compile,$timeout,uiCalendarConfig){

     /* event source that contains custom events on the scope */
     $scope.citas = [];

     $scope.guardarEvento = function(cita){
       var newEvento = {
         title: cita.title,
         start: cita.start,
         end: moment(cita.start).add(30, 'm'),
         stick: true
       }
       $scope.citas.push(newEvento);
       cita.title = '';
       cita.start = '';
     }

     /* alert on eventClick */
     $scope.alertOnEventClick = function( date, jsEvent, view){
       console.log(date);
         $scope.alertMessage = (date.title + ' was clicked ');
     };

     /* config object */
     $scope.uiConfig = {
       calendar:{
         editable: false,
         header:{
           left: 'prev,today,next',
           center: 'title',
           right: 'month,agendaWeek,listMonth'
         },
         eventClick: $scope.alertOnEventClick,
         defaultView: 'agendaWeek',
         allDaySlot: false,
         minTime: "09:00:00",
         maxTime: "19:00:00",
         hiddenDays: [0]
       }
     };

     /* event sources array*/
     $scope.eventSources = [$scope.citas];

  }
]);
