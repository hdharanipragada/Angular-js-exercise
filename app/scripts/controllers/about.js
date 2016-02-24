'use strict';

/**
 * @ngdoc function
 * @name angularexerciseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularexerciseApp
 */
angular.module('angularexerciseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
