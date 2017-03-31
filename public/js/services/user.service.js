(function() {
  angular.module("mymeanblog")
        .factory("UserService", UserService);

  UserService.$inject = ["$http", "$window"];

  function UserService($http, $window){
    var base = "/users";
    var localStorage = $window.localStorage;

    function login(user){
      return $http.post("/login", user)
                  .then(function(response){
                    var token = response.data.token;
                    saveToken(token);
                  });
    }
    function signup(user){
      return $http.post("/signup", user)
                  .then(function(response){
                    return response;  // should make response availible in the next
                                      // then statement

                  });
    }
    function getAll(){
      return $http.get(base)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function getOne(user){
      var url = `${base}/${user._id}`;
      return $http.get(url)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function update(user){
      var url = `${base}/${user._id}`;
      return $http.put(url, user)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function deleteUser(user){
      var url = `${base}/${user._id}`;
      return $http.delete(url)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function currentUser(){}
    function saveToken(token){
      localStorage.setItem("mymeanblog-token", token);
    }
    function getToken(){}
    function isLoggedIn(){}
    function logout(){}
    return {
      getAll: getAll,
      login: login,
      getOne: getOne,
      signup: signup,
      update: update,
      delete: deleteUser,
      currentUser: currentUser,
      saveToken: saveToken,
      getToken: getToken,
      isLoggedIn: isLoggedIn,
      logout: logout
    };
  }
}());
