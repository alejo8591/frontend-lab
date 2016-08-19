angular.module('app.controllers', ['ngCordova'])

.controller('pageCtrl', ['$scope', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $cordovaDialogs){
 $scope.getAlert = function () {
   $cordovaDialogs.alert('message', 'title', 'button name')
     .then(function() {
       $scope.cordova_alert = 'Click on alert';
     });
  };

  $scope.getConfirm = function() {
    $cordovaDialogs.confirm('message', 'title', ['button 1','button 2'])
      .then(function(buttonIndex) {
        // no button = 0, 'OK' = 1, 'Cancel' = 2
        $scope.cordova_confirm = buttonIndex;
      });
  };

  $scope.getPrompt = function() {
    $cordovaDialogs.prompt('msg', 'title', ['btn 1','btn 2'], 'default text')
      .then(function(result) {
        $scope.cordova_prompt_1 = result.input1;
        // no button = 0, 'OK' = 1, 'Cancel' = 2
        $scope.cordova_prompt_2 = result.buttonIndex;
      });
  };

}]);
