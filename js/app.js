var app = angular.module('app', []);

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
    })
})
