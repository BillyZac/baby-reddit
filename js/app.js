var app = angular.module('app', []);

app.controller('NewPostController', function($scope) {
  // set newPost function
  $scope.newPost = {}
  $scope.addPost = function () {
    $scope.newPost.date_created = Date.now()
    $scope.newPost.votes = 0 // Come back to this. Maybe votes is in the wrong place?
    $scope.newPost.comments = []
    console.log('Saving this stuff (hopefully):', $scope.newPost)
    console.log($scope.posts) // Can I access this from here? Seems not.
    // Push into the array in the file somehow. Blech.
    $scope.newPost = {}
  }
})

app.controller('PostsController', function($scope, $http) {
  $http({
    method: 'GET',
    url: './data/postsData.json'
  }).then(function successCallback(postsData) {
      console.log('==============success')
      console.log(postsData)
      $scope.posts = postsData.data
    }, function errorCallback(response) {
      console.log('==============error')
    }).then(function(){

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

app.controller('testPost', function($scope) {
  $scope.favoriteForm = {};
  $scope.submitFav = function() {
    var favPi = parseFloat($scope.favoriteForm.favoritePie);
    // Special output if the favorite pie is a certain number
    if (!isNaN(favPi) && favPi >= 3.14 && favPi <= 3.142) {
      $scope.favoriteForm.favoritePie = "\u03A0";
    }
    console.log("Your favorite pie is: ", $scope.favoriteForm.favoritePie);
  };
})
