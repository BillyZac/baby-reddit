var app = angular.module('app', []);
var postsData =
  [
    {
      title: "Title 1",
      author: "Sam Author",
      image: "https://www.bforball.com/image/categ/tomato.png"
    },
    {
      title: "Title 1",
      author: "Sam Author",
      image: "https://www.bforball.com/image/categ/tomato.png"
    },
    {
      title: "Title 1",
      author: "Sam Author",
      image: "https://www.bforball.com/image/categ/tomato.png"
    }
  ]

app.controller('PostsController', function($scope) {
  $scope.posts = postsData
})
