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

//
// // use the method chaining to create the module and create the controller n bind the controller with module in one line
// var myApp = angular
//             .module("myModule",[])
//             .controller("myController", function($scope){
//
//                 // create a object
//                 var employee = {
//                   firstname  : "Sunny",
//                   lastname : "khurana",
//                   gender : "male"
//                 };
//
//                 $scope.employee = employee;
//             });


// made another controller with images

myApp.controller("imagecontroller",function($scope){

  var country = {
    name : "USA",
    capital: "Washington",
    flag: "Flag_of_the_United_States.svg.png"
  };

  $scope.country = country;

});
