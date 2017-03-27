(function() {
  angular.module('mymeanblog')
      .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'SignupController',
        templateUrl: 'html/views/signup.html'
      })
      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'html/views/login.html'
      })
      .when('/dashboard', {
        controller: 'DashboardController',
        templateUrl: 'html/views/dashboard.html'
      })
      .when('/create', {
        controller: 'PostController',
        templateUrl: 'html/views/create.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
}());
