(function(){

  var app = angular.module('myApp', []);


  app.controller('myCtrl', function($scope, $http) {

      getMovies = function(){
        $http.get("/movies")
        .then(function(response) {
            $scope.movies = response.data;
        });
      }

      $scope.addMovie = function(){
        if($scope.movieName !== null
        && $scope.movieName !== ""
        && $scope.movieName !== undefined)
        {
          $http.post("/movies", {title: $scope.movieName})
          .then(function(response) {
              getMovies();
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
            getMovies();
        });

      }

      getMovies();
  });


})();
