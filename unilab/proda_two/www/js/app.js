// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

/* http://stackoverflow.com/questions/28659521/angular-ui-router-does-not-work-for-firefox-os-packaged-apps */
angular.module('prodapp',
    [
        'ionic',
        'prodapp.cookie.provider',
        'prodapp.profile.controller',
        'prodapp.product.controller',
        'prodappProfileServices'
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

.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(file|http|https?|ftp|mailto|app):/);
}])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

      .state('prodapp', {
        url: '/',
        abstract: true,
        templateUrl: 'views/general/menu.html',
        controller: 'index'
      })

      .state('options', {
          url: '/options',
          templateUrl: 'views/profile/options.html',
          controller: 'options'
      })

      .state('login', {
          url: '/login',
          templateUrl: 'views/profile/login.html',
          controller: 'login'
      })

      .state('register', {
          url: '/register',
          templateUrl: 'views/profile/register.html',
          controller: 'register'
      })

      .state('reset', {
          url: '/reset',
          templateUrl: 'views/profile/reset_password.html',
          controller: 'reset'
      })

      .state('add', {
          url: '/add',
          templateUrl: 'views/product/add_product.html',
          controller: 'add'
      })

      .state('prodapp.list', {
          url: '/list',
          views: {
              'menuContent': {
                  templateUrl: 'views/product/products.html',
                  controller: 'list'
              }
          }
      })

      .state('product', {
          url: '/product/:id/find',
          templateUrl: 'views/product/product.html',
          controller: 'product'
      });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
})


.run(function( cookieProvider, $http ) {

    $http.defaults.headers.post["Content-Type"] = "application/json";

    cookieProvider.setCookie();
    console.log('set cookie ' + cookieProvider.getCookie());

});
