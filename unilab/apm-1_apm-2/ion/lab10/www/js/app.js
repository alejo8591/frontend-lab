// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('lab10', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'home.html'
      })
      .state('first', {
          url: '/first',
          templateUrl: 'first.html'
      })
      .state('second', {
        url: '/second',
        templateUrl: 'second.html'
      })
      .state('third', {
        url: '/third',
        templateUrl: 'third.html'
      });
  $urlRouterProvider.otherwise('/');
})

.controller('lab10.Controller', function($scope) {

});
