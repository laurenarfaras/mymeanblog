(function() {
  angular.module("mymeanblog")
        .config(RouterConfig);

  RouterConfig.$inject = ["$routeProvider"];

  function RouterConfig($routeProvider){
    $routeProvider
      .when("/", {
        controller: "SignupController",
        templateUrl: "html/views/signup.html",
        restricted: {
          access: false
        }
      })
      .when("/login", {
        controller: "LoginController",
        templateUrl: "html/views/login.html",
        restricted: {
          access: false
        }
      })
      .when("/dashboard", {
        controller: "DashboardController",
        templateUrl: "html/views/dashboard.html",
        restricted: {
          access: true
        }
      })
      .when("/create", {
        controller: "PostController",
        templateUrl: "html/views/create.html",
        restricted: {
          access: true
        }
      })
      .when("/edit/:postId", {
        controller: "PostController",
        templateUrl: "html/views/edit.html",
        restricted: {
          access: true
        }
      })
      .otherwise({
        redirectTo: "/",
        restricted: {
          access: false
        }
      });
  }
}());
