angular.module('myApp.services', []).
constant('API_KEY', 'azfb9u3vqnaen2chrj9kpqvq').
factory('rtmFactory', ['$http', 'API_KEY', function($http, API_KEY){
  var countries = [
    {name: 'USA', code: 'us'},
    {name: 'UK', code: 'uk'},
  {name: 'Francia', code: 'fr'}
  ];

  return {
    getCountries: function(){
      return countries;
    }

    getMovies: function(countryCode){
      return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?page_limit=10&country=' + countryCode + '&callback=JSON_CALLBACK&apikey=' + API_KEY);
    }
  }
}]);
