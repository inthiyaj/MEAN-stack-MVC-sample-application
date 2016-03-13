
  var moviesApp = angular.module('moviesApp', []);


  moviesApp.controller('movieCRUD', function($scope, $http) {

      $scope.getMovies = function(){
        var config = {
          method: "GET",
          url: "/movies",
          headers: {"Content-Type": "application/json;charset=utf-8"}
        };
        $http(config).then(function(response) {
            $scope.movies = response.data;
        });
      }

      $scope.addMovie = function(){
        if($scope.movieName !== null
        && $scope.movieName !== ""
        && $scope.movieName !== undefined)
        {
          var config = {
            method: "POST",
            url: "/movies",
            data: {title: $scope.movieName},
            headers: {"Content-Type": "application/json;charset=utf-8"}
          };
          $http(config).then(function(response) {
              $scope.getMovies();
              $scope.movieName = null;
          });
         }
      }

      $scope.removeMovie = function(x){
        var config = {
          method: "DELETE",
          url: "/movies",
          data: {movieID: x._id},
          headers: {"Content-Type": "application/json;charset=utf-8"}
        };
        $http(config).then(function(response) {
            $scope.getMovies();
        });
      }

      $scope.getMovies();
  });



// SENDING HTTP REQUESTS TO SERVER USING ANGULAR AND THE $HTTP MODULE
// var config = {
//   method: "<HTTP METHOD>",
//   url: "<ROUTE>",
//   data: <DATA IF NEEDED>,
//   headers: {"Content-Type": "application/json;charset=utf-8"}
// };
// $http(config).then(function(response) {
//    <WHAT TO DO AFTER RECIEVING RESPONSE>
// });
