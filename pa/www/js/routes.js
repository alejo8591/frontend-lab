angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


    .state('menu', {
      url: '/menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })




    .state('menu.home', {
      url: '/home',
      views: {
        'side-menu21': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })





    .state('options', {
      url: '/options',
      templateUrl: 'templates/options.html',
      controller: 'optionsCtrl'
    })





    .state('signIn', {
      url: '/sign-in',
      templateUrl: 'templates/signIn.html',
      controller: 'signInCtrl'
    })





    .state('signUp', {
      url: '/sign-up',
      templateUrl: 'templates/signUp.html',
      controller: 'signUpCtrl'
    })





    .state('productDetail', {
      url: '/product-detail/:id',
      templateUrl: 'templates/productDetail.html',
      controller: 'productDetailCtrl'
    })





    .state('productEdit', {
      url: '/product-edit/:id',
      templateUrl: 'templates/productEdit.html',
      controller: 'productEditCtrl'
    })





    .state('productCreate', {
      url: '/product-create',
      templateUrl: 'templates/productCreate.html',
      controller: 'productCreateCtrl'
    })





    .state('menu.profile', {
      url: '/profile',
      views: {
        'side-menu21': {
          templateUrl: 'templates/profile.html',
          controller: 'profileCtrl'
        }
      }
    })





    .state('profileEdit', {
      url: '/profile-edit',
      templateUrl: 'templates/profileEdit.html',
      controller: 'profileEditCtrl'
    })





    .state('forgotPassword', {
      url: '/forgot-password',
      templateUrl: 'templates/forgotPassword.html',
      controller: 'forgotPasswordCtrl'
    })





    .state('menu.signOut', {
      url: '/sign-out',
      views: {
        'side-menu21': {
          templateUrl: 'templates/signOut.html',
          controller: 'signOutCtrl'
        }
      }
    })


    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/home');

});
