'use strict';

angular.module('testa',
    [
      'ionic',
      'TestaProductControllers',
      'TestaProductServices',
      'TestaProfileControllers',
      'TestaProfileServices'
    ]
)

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/general/menu.html"
  })

  .state('app.list', {
    url: "/list",
    views: {
      'menuContent': {
        templateUrl: "templates/product/products.html",
        controller: 'list'
      }
    }
  })

  .state('app.product', {
    url: "/product/:id/find",
    views: {
      'menuContent': {
        templateUrl: "templates/product/product.html",
        controller: 'product'
      }
    }
  })

  .state('app.add', {
    url: "/add",
    views: {
      'menuContent': {
        templateUrl: "templates/product/add_product.html",
        controller: 'add'
      }
    }
  })

  .state('app.profile', {
    url: "/profile",
    views: {
      'menuContent': {
        templateUrl: "templates/profile/profile.html",
        controller: 'profile'
      }
    }
  })

  .state('app.options', {
    url: "/options",
    views: {
      'menuContent': {
        templateUrl: "templates/general/options.html",
        controller: 'options'
      }
    }
  })

  .state('app.login', {
    url: "/login",
    views: {
      'menuContent': {
        templateUrl: "templates/general/login.html",
        controller: 'login'
      }
    }
  })

  .state('app.register', {
    url: "/register",
    views: {
      'menuContent': {
        templateUrl: "templates/general/register.html",
        controller: 'register'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/list');
});
