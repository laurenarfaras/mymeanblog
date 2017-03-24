(function() {

  angular.module('mymeanblog', [
    "ngRoute",
  ]);

  angular.module("mymeanblog")
        .config(RouterConfig);

  RouterConfig.$inject = ["$routeProvider"];

  function RouterConfig($routeProvider){
    $routeProvider
      .when("/",{
        controller: "SignupController",
        templateUrl: "html/views/signup.html"
      })
      .otherwise({
        redirectTo: "/"
      })
  }

}());
