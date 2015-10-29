// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('lab12',
    [
        'ionic',
        'lab12.Controllers'
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
          .state('tabs', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
          })
          .state('tabs.home', {
            url: "/home",
            views: {
              'home-tab': {
                templateUrl: "templates/home.html",
                controller: "lab12.HomeController"
              }
            }
          })
          .state('tabs.about', {
            url: "/about",
            views: {
              'about-tab': {
                templateUrl: "templates/about.html",
                controller: 'lab12.AboutController'
              }
            }
          })
          .state('tabs.contact', {
            url: "/contact",
            views: {
              'contact-tab': {
                templateUrl: "templates/contact.html"
              }
            }
          });


      $urlRouterProvider.otherwise("/tab/home");

    });
