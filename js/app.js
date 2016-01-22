var app = angular.module('app', []);

app.controller('PostsController', function($scope, $http) {
  $http({
    method: 'GET',
    url: './data/postsData.json'
  })
  .then(function successCallback(postsData) {
      console.log('==============success')
      // console.log(postsData)
      $scope.posts = postsData.data
    }, function errorCallback(response) {
      console.log('==============error')
    })
  .then(function(){
    // New post
    $scope.newPost = {}
    $scope.addPost = function () {
      $scope.newPost.date_created = Date.now()
      $scope.newPost.votes = 0 // Come back to this. Maybe votes is in the wrong place?
      $scope.newPost.comments = []

      // Push into posts array. In the real world, this should make an ajax call to the server/database with a post request.
      $scope.posts.push($scope.newPost)

      // Clear the ground for the next new post.
      $scope.newPost = {}
    }

    // New
    })
})

// Pretty sure I need to move this to the post. A comment is always a child of a post.
app.controller('NewCommentController', function($scope) {
  $scope.comment = {
    content: 'foo',
    author: 'guy',
    date_created: new Date()
  }
  // Define a new comment function that pushes a comment onto the posts.comments array.
})
