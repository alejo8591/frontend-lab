angular.module('starter.services', []).
factory('RestApi', ['$http', function($http){
  return {
    getInfo: function(){
      return $http({
        url:'http://www.w3schools.com/website/Customers_JSON.php',
        method: 'GET'
      });
    }
  }
}]);
