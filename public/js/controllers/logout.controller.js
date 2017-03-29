(function() {

  angular.module("mymeanblog")
        .controller("LogoutController", LogoutController);

  LogoutController.$inject = [];

  function LogoutController(){
    $scope.logout = logout;

    function logout(){
      console.log("logging out");
    }
  }

}());
