(function() {
  angular.module('mymeanblog')
        .factory('UserService', UserService);

  UserService.$inject = ['$http'];

  function UserService($http){
    var base = '/users';

    function login(){
      return $http.post('/login')
                  .then(function(response){
                    console.log(response);
                  });
    }
    function signup(user){
      return $http.post('/signup', user)
                  .then(function(response){
                    console.log(response);
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
    return {
      getAll: getAll,
      login: login,
      getOne: getOne,
      signup: signup,
      update: update,
      delete: deleteUser
    }
  }
}());
