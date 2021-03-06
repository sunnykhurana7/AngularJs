// create a module
var myApp = angular.module("myModule", []);

// create a controller and register with the module
myApp.controller("myController", function($scope) {
    $scope.message = "AngularJS Tutorials ";
});


// made another controller and binding with the module
myApp.controller("mySecondController", function($scope) {

    // create a object
    var employee = {
        firstname: "Sunny",
        lastname: "khurana",
        gender: "male"
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

myApp.controller("imagecontroller", function($scope) {

    var country = {
        name: "USA",
        capital: "Washington",
        flag: "Flag_of_the_United_States.svg.png"
    };

    $scope.country = country;

});



//controller for two-way data binding
myApp.controller("two-wayBinding", function($scope) {

    $scope.message = "Hello AngularJS!"
})



// controller for two way data binding use in a table
myApp.controller("TableController", function($scope) {

    var Collegename = {
        name: "jims",
        place: "rohini",
        course: "mca"
    };

    $scope.Collegename = Collegename;

})


// controller for learn the concept of ng-repeat directive
myApp.controller("NGRepeat",function($scope){

  var employees = [
    { firstname:"Ben",lastname:"hastings",gender:"male",salary:55000 },
    { firstname:"Sara",lastname:"paul",gender:"female",salary:60000 },
    { firstname:"Mark",lastname:"holland",gender:"male",salary:45000 },
    { firstname:"pam",lastname:"macintosh",gender:"female",salary:75000 },
    { firstname:"Todd",lastname:"barber",gender:"male",salary:89000 }
   ]

   $scope.employees = employees;

});


//  use the nested ng-repeat

myApp.controller("nesting-repeat",function($scope){

  var countries = [

    {
      name : "UK",
      cities : [
            { name : "london" },
            { name : "Manchester" },
            { name : "Birmingham" } ,
      ]
    },
    {
      name : "USA",
      cities : [
            { name : "los Angeles" },
            { name : "Chicago" },
            { name : "Houston" } ,
      ]
    },
    {
      name : "India",
      cities : [
            { name : "Hyderabad" },
            { name : "Chennai" },
            { name : "Delhi" } ,
      ]
    }
  ];

  $scope.countries = countries;

});


myApp.controller("handlingevents",function($scope){

  var technologies = [

    { name:"C#",likes:0,dislikes:0 },
    { name:"Asp.net",likes:0,dislikes:0 },
    { name:"Sql Server",likes:0,dislikes:0 },
    { name:"AngularJS",likes:0,dislikes:0 },
  ];

  $scope.technologies = technologies;

  $scope.incrementLikes = function(technology){
    technology.likes++;
  }

  $scope.incrementdisLikes = function(technology){
    technology.dislikes++;
  }
});


// use the filter now
myApp.controller("filteruse",function($scope){


  var workers = [

    { firstname:"Ben",dateOfBirth:new Date("November 23, 1980"),lastname:"hastings",gender:"male",salary:55000 },
    { firstname:"Sara",dateOfBirth:new Date("November 23, 1980"),lastname:"paul",gender:"female",salary:60000 },
    { firstname:"Mark",dateOfBirth:new Date("November 23, 1980"),lastname:"holland",gender:"male",salary:45000 },
    { firstname:"pam",dateOfBirth:new Date("November 23, 1980"),lastname:"macintosh",gender:"female",salary:75000 },
    { firstname:"Todd",dateOfBirth:new Date("November 23, 1980"),lastname:"barber",gender:"male",salary:89000 }

  ];

  $scope.workers = workers;
  $scope.rowlimit = 3;

});


// use the controller for sorting purpose
myApp.controller("Sorting",function($scope){


  var workers = [

    { firstname:"Ben",dateOfBirth:new Date("November 23, 1980"),lastname:"hastings",gender:"male",salary:55000 },
    { firstname:"Sara",dateOfBirth:new Date("November 23, 1980"),lastname:"paul",gender:"female",salary:60000 },
    { firstname:"Mark",dateOfBirth:new Date("November 23, 1980"),lastname:"holland",gender:"male",salary:45000 },
    { firstname:"pam",dateOfBirth:new Date("November 23, 1980"),lastname:"macintosh",gender:"female",salary:75000 },
    { firstname:"Todd",dateOfBirth:new Date("November 23, 1980"),lastname:"barber",gender:"male",salary:89000 }

  ];

  $scope.workers = workers;
  $scope.sortcolumn = "firstname";
});



// controller for search filter in AngularJS
myApp.controller("SearchController",function($scope){


    var workers = [

      { firstname:"Ben",dateOfBirth:new Date("November 23, 1980"),lastname:"hastings",gender:"male",salary:55000 },
      { firstname:"Sara",dateOfBirth:new Date("November 23, 1980"),lastname:"paul",gender:"female",salary:60000 },
      { firstname:"Mark",dateOfBirth:new Date("November 23, 1980"),lastname:"holland",gender:"male",salary:45000 },
      { firstname:"pam",dateOfBirth:new Date("November 23, 1980"),lastname:"macintosh",gender:"female",salary:75000 },
      { firstname:"Todd",dateOfBirth:new Date("November 23, 1980"),lastname:"barber",gender:"male",salary:89000 }

    ];

    $scope.workers = workers;

});
