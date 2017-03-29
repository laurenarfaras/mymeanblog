(function() {

  angular.module("mymeanblog")
        .controller("PostController", PostController);

  PostController.$inject = ["$scope", "PostService", "$routeParams"];

  function PostController($scope, PostService, $routeParams) {
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      _id: "1",
      title: "first blog post",
      body: "hey wassup this is my first blog post!",
      created: new Date(),
      updated: new Date()
    };

    var id = $routeParams.postId;
    PostService.getOne(id)
              .then(function(){
                console.log("success");
              })
              .catch(function(){
                console.log("error");
              })

    function edit(post){
      console.log("editing post");
    }

    function create(post){
      PostService.create(post);
    }
  }
}());
