'use strict';

/**
 * @ngdoc function
 * @name angularexerciseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularexerciseApp
 */
angular.module('angularexerciseApp')

 .controller('MainCtrl' ,function($scope){
  $scope.fnToggleDiv=function($scope){
  	$scope.toggle=true;
   
}
  });
