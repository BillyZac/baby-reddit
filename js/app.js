var app = angular.module('app', ['ngResource']);

app.controller('PostsController', function($scope, $http) {
  $http({
    method: 'GET',
    url: './data/postsData.json'
  }).then(function successCallback(postsData) {
      console.log('==============success')
      console.log(postsData)
      $scope.posts = postsData.data
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log('==============error')
      // console.log(response)
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    })

})
