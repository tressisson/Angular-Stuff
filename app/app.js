'use strict';


angular.module('myApp', [
  'ngRoute',
  'myApp.customersCtrl'
  
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: '/views/Home.html'
    });

    $routeProvider.when('/login', {
        templateUrl: '/views/Login.html'
    });

    $routeProvider.when('/customers', {
        templateUrl: '/views/Customers.html'
    });

    $routeProvider.when('/contactus', {
        templateUrl: '/views/Contact.html'
    });

    $routeProvider.otherwise({ redirectTo: '/home' });

    
}]);
