(function() {

  angular.module("mymeanblog")
        .controller("PostController", PostController);

  PostController.$inject = ["$scope", "PostService"];

  function PostController($scope, PostService) {
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      _id: "1",
      title: "first blog post",
      body: "hey wassup this is my first blog post!",
      created: new Date(),
      updated: new Date()
    };

    function edit(post){
      console.log("editing post");
    }

    function create(post){
      PostService.create(post);
    }
  }
}());
