'use strict';

/**
 * @ngdoc overview
 * @name angularexerciseApp
 * @description
 * # angularexerciseApp
 *
 * Main module of the application.
 */
angular
    .module('angularexerciseApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/requests', {
                templateUrl: 'views/requests.html',
                controller: 'RequestsCtrl'
            })
            .when('/rewards', {
                templateUrl: 'views/rewards.html',
                controller: 'RewardsCtrl'
            })
            .when('/todo', {
                templateUrl: 'views/todo.html',
                controller: 'TodoCtrl'
            })
            .when('/events', {
                templateUrl: 'views/events.html',
                controller: 'EventsCtrl'
            })
            .when('/nominations', {
                templateUrl: 'views/todo.html',
                controller: 'NominationsCtrl'
            })
            .when('/profile', {
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
.controller('toggleCtrl',function($scope){
    $scope.class1 = "col-xs-3";
    $scope.class2 = "col-xs-8";
    $scope.fnToggleDiv = function() {
        if ($scope.class1 == "col-xs-3 slideOut" && $scope.class2 == "col-xs-8") {
            $scope.class1 = "col-xs-1 sidebar";
            $scope.class2 = "col-xs-9";
        } else {
            $scope.class1 = "col-xs-3 slideOut";
            $scope.class2 = "col-xs-8";
        }
    };
});
$('.tab2').click(function() {
    $('#appear').hide();
});

$('.tab1').click(function() {
    $('#appear').show();
});

    var aCall = $.ajax({
        type: "GET",
        url: 'data/data.json',
        dataType: 'JSON'
    });
    aCall.success(function(data) {
        var Data = data;
        for (var i = 0; i < Data.item.length; i++) {
            $('.idata').eq(i).html(Data.item[i].idata);
            $('.iheading').eq(i).html(Data.item[i].ititle);
        }
    });


