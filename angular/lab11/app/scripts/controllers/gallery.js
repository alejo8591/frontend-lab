'use strict';

/**
 * @ngdoc function
 * @name lab11App.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the lab11App
 */
angular.module('lab11')
.controller('GalleryCtrl', function ($scope) {
  var pictures = $scope.pictures = [];

  var baseURL='http://lorempixel.com/300/180/';

  var titles = [
    'Comida Sana',
    'Salud y trabajo',
    'Vida en la ciudad ',
    'Mantente activo',
    'Cuida tu aspecto',
    '¡¡Vida nocturna!!'
  ] ;

  var keywords = [
    'food',
    'business',
    'city',
    'sports',
    'fashion',
    'nightlife'
  ];

  var dummyText= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  $scope.addPictures = function(id){
    pictures.push({
      url:baseURL+keywords[i],
      title:titles[i],
      content:dummyText
    });
  };

  for(var i = 0; i < 5; i++){
    $scope.addPictures(i);
  }

});
