'use strict';

angular.module('prodapp',
    [
      'ionic',
      'prodapp.cookie.provider',
      'prodapp.profile.controllers',
      'prodapp.product.controllers',
      'prodappProfileServices'
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

.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(file|http|https?|ftp|mailto|app):/);
}])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'index'
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
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/list');
})

.run(function( cookieProvider, $http ) {

  $http.defaults.headers.post["Content-Type"] = "application/json";

  cookieProvider.setCookie();
  console.log('set cookie ' + cookieProvider.getCookie());

});
