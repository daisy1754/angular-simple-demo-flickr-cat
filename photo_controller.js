var App = angular.module('FlickrCatPhotos', []);

App.controller('PhotoCtrl', function RepoListCtrl($scope, $http) {
  $scope.doSearch = function() {
    $http.jsonp("http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c27de05a17d1fa1c6dd168d1347ed829&format=json&tags=cat&jsoncallback=JSON_CALLBACK&text=" + 'cat%20' + encodeURI($scope.keyword))
      .success(function(data) {
        $scope.photos = data.photos.photo;
        $scope.loadingIndicator = false;
      });
    $scope.loadingIndicator = true;
  }
  
  $scope.titleFilter = function(photo) {
    if (!$scope.filterWord || $scope.filterWord.length == 0) return true;
    return photo.title.indexOf($scope.filterWord) >= 0;
  }
})