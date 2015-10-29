// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('prodapp',
    [
        'ionic',
        'prodapp.cookie.provider',
        'prodapp.controller.index'
    ]
)

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
        templateUrl: 'views/home.html',
        controller: 'index'
      })

      .state('options', {
          url: '/options',
          templateUrl: 'views/options.html',
          controller: 'options'
      })

      .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          controller: 'login'
      })

      .state('register', {
          url: '/register',
          templateUrl: 'views/register.html',
          controller: 'register'
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
})


.run(function( cookieProvider ) {

    cookieProvider.setCookie();
    console.log('set cookie ' + cookieProvider.getCookie());

});
