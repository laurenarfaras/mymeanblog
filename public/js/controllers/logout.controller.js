(function() {

  angular.module("mymeanblog")
        .controller("LogoutController", LogoutController);

  LogoutController.$inject = ["$scope"];

  function LogoutController($scope){
    $scope.logout = logout;

    function logout(){
      console.log("logging out");
    }
  }

}());
