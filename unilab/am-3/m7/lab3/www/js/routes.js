angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('cards', {
      url: '/page1',
      templateUrl: 'templates/cards.html',
      controller: 'cardsCtrl'
    })
        
      
    
      
        
    .state('form', {
      url: '/page2',
      templateUrl: 'templates/form.html',
      controller: 'formCtrl'
    })
        
      
    
      
        
    .state('toogle', {
      url: '/page3',
      templateUrl: 'templates/toogle.html',
      controller: 'toogleCtrl'
    })
        
      
    
      
        
    .state('actionSheet', {
      url: '/page4',
      templateUrl: 'templates/actionSheet.html',
      controller: 'actionSheetCtrl'
    })
        
      
    
      
        
    .state('modal', {
      url: '/page5',
      templateUrl: 'templates/modal.html',
      controller: 'modalCtrl'
    })
        
      
    
      
        
    .state('popup', {
      url: '/page6',
      templateUrl: 'templates/popup.html',
      controller: 'popupCtrl'
    })
        
      
    
      
        
    .state('events', {
      url: '/page7',
      templateUrl: 'templates/events.html',
      controller: 'eventsCtrl'
    })
        
      
    
      
        
    .state('home', {
      url: '/page8',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page8');

});