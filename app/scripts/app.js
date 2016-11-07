'use strict';

/**
 * @ngdoc overview
 * @name cookAppApp
 * @description
 * # cookAppApp
 *
 * Main module of the application.
 */
angular
  .module('cookAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contac', {
        templateUrl: 'views/contac.html',
        controller: 'ContacCtrl',
        controllerAs: 'contac'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
