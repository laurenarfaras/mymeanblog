(function() {
  angular.module('mymeanblog')
         .controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService'];

  function PostController($scope, PostService){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      _id: 'hjsdf737986sfh23',
      title: 'The greatest thing ever',
      body: 'stuff and things stuff and things stuff and things',
      created: new Date(),
      updated: new Date()
    };

    function edit(post){
      console.log('editing the post');
    }

    function create(post){
      PostService.create(post);
    }
  }
}());
