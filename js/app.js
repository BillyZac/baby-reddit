var app = angular.module('app', []);

app.controller('PostsController', function($scope, $http) {
  $scope.orderProp = '-votes' // Most votes go to the top of the list.
  $http({
    method: 'GET',
    url: './data/postsData.json'
  })
  .then(function successCallback(postsData) {
      console.log('==============success')
      console.log(postsData)
      $scope.posts = postsData.data
    }, function errorCallback(response) {
      console.log('==============error')
    })
  .then(function(){
    /*********** POSTS ***********/
    // New post
    $scope.newPost = {}
    // When user clicks "Create post" button, this happens:
    $scope.addPost = function () {
      $scope.newPost.date_created = Date.now()
      $scope.newPost.votes = 0
      $scope.newPost.comments = []
      // Push into posts array. In the real world, this should make an ajax call to the server/database with a post request.
      $scope.posts.push($scope.newPost)
      // Clear the ground for the next new post.
      $scope.newPost = {}
    }

    /*********** COMMENTS ***********/
    // New comment // Is this line necessary/
    $scope.newComment = {}
    // When user clicks "Submit comment" button, this happens:
    $scope.addComment = function (post) {
      $scope.newComment.date_created = Date.now()
      // Push into posts array. In the real world, this should make an ajax call to the server/database with a post request.
      post.comments.push($scope.newComment)
      // Clear the ground for the next new comment.
      $scope.newComment = {}
    }
  })
})
