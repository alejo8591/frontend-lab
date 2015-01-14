'use strict';

/**
 * @ngdoc overview
 * @name lab11App
 * @description
 * # lab11App
 *
 * Main module of the application.
 */
angular
.module('lab11', [
  'ngAnimate',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/articles', {
      templateUrl: 'views/articles.html',
      controller: 'ArticlesCtrl'
    })
    .when('/gallery', {
      templateUrl: 'views/gallery.html',
      controller: 'GalleryCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
