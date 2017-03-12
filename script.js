// create a module

var myApp = angular.module("myModule",[]);

// create a controller and register with the module
myApp.controller("myController",function($scope){
  $scope.message = "AngularJS Tutorials ";
});


// made another controller and binding with the module
myApp.controller("mySecondController",function($scope){

    // create a object
    var employee = {
      firstname  : "Sunny",
      lastname : "khurana",
      gender : "male"
    };

    $scope.employee = employee;
})
