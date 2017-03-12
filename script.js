// create a module

var myApp = angular.module("myModule",[]);

// create a controller and register with the module
myApp.controller("myController",function($scope){
  $scope.message = "AngularJS Tutorials ";
});
