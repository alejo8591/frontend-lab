
angular.module('Student-App', [])
.controller('StudentController', ['$scope', function($scope){
      $scope.formVisibility = false;

      $scope.ShowForm = function(){

        $scope.formVisibility = true;

        console.log($scope.formVisibility);

      };

      $scope.students = [
          {"name": "Diego Socja", "phone": "23232323", "course": "Ebsco"},
          {"name": "Laurao Shot", "phone": "45746547", "course": "Feria"},
          {"name": "Djuan Piña", "phone": "34543435", "course": "Music"},
          {"name": "Hgon uYun", "phone": "121888", "course": "Tresco"}
      ];

       $scope.SaveStudent = function(){

        $scope.students.push({"name":$scope.newStudent.name, "phone": $scope.newStudent.phone, "course": $scope.newStudent.course});

        $scope.formVisibility = false;
      };
}]);
