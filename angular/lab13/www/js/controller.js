angular.module('starter.controller', ['starter.services'])
.controller('MainCtrl', function($scope){})
.controller('HomeCtrl', function($scope){
  $scope.hello = "Hello!";
})
.controller('YopoCtrl', function($scope, RestApi){
  $scope.posts = [
    {
      title:'Alimentos buenos para la salud',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue.'
    },
    {
      title:'Alimentos menos buenos para la salud',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in.'
    },
    {
      title:'¡¡¡Limita tu cantidad de hidratos de carbono',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue.'
    }
  ];

  RestApi.getInfo().success(function(data){
    $scope.name = data;
  });
});
