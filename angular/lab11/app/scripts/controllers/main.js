'use strict';

/**
 * @ngdoc function
 * @name lab11App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lab11App
 */
angular.module('lab11')
.controller('MainCtrl', function($scope){
  var baseURL = 'http://lorempixel.com/960/450/';

  $scope.setInterval = 2000;

  $scope.slides = [
    {
      title:'Aprende a mantenerte en forma',
      image:baseURL+'sports/',
      text:'¡Practica algún deporte todos los días'
    },
    {
      title:'Buena alimentación',
      image:baseURL+'food/',
      text:'¡La importancia de frutas y verduras en la dieta!'
    },
    {
      title:'En contacto con la naturaleza',
      image:baseURL+'nature/',
      text:'¡Mantente en armonía con la naturaleza!'
    }
  ];

  baseURL = 'http://lorempixel.com/200/200/';

  $scope.contents = [
    {
      img:baseURL+'people',
      title:'Sobre Nosotros',
      text:'Somos una empresa comprometida con la vida sana'
    },
    {
      img:baseURL+'business',
      title:'Nuestros Servicios',
      text:'Ofrecemos asesoría profesional para mantenerse Sanos, buena alimentación, cuales son los mejores ejercicios para tí, etc.'
    },
    {

      img:baseURL+'transport',
      title:'Contáctanos',
      text:'#333, Buena vida Online, Plaza Central, Durance, Zip-432167'
    }
  ];
});
