angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.actionSheet', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/actionSheet.html',
        controller: 'actionSheetCtrl'
      }
    }
  })

  .state('menu.modal', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/modal.html',
        controller: 'modalCtrl'
      }
    }
  })

  .state('menu.popups', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/popups.html',
        controller: 'popupsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.list', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/list.html',
        controller: 'listCtrl'
      }
    }
  })

  .state('detailList', {
    url: '/page5',
    templateUrl: 'templates/detailList.html',
    controller: 'detailListCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});