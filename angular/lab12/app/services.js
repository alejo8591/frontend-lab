angular.module('myApp.services', []).
factory('rtmFactory', function(){
  var countries = [
    {name: 'USA', code: 'us'},
    {name: 'UK', code: 'uk'},
  {name: 'Francia', code: 'fr'}
  ];

  return {
    getCountries: function(){
      return countries;
    }
  }
});
