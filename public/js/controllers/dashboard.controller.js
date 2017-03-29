(function() {
  angular.module("mymeanblog")
        .controller("DashboardController", DashboardController);

  DashboardController.$inject = ["$scope"];

  function DashboardController($scope){
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.posts = [
      {
        _id: "1",
        title: "first blog post",
        body: "hey wassup this is my first blog post!",
        created: new Date(),
        updated: new Date()
      },
      {
        _id: "2",
        title: "second blog post",
        body: "hey wassup this is my second blog post!",
        created: new Date(),
        updated: new Date()
      }
    ];

    function edit(post) {
      console.log("moving to the edit page");
    }

    function deletePost(post) {
      console.log("deleting the post with the id of: " + post._id);
    }

  }

}());
