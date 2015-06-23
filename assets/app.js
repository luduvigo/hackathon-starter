//Create local app module
var app = angular.module("app", [])
//Create the PostCtrl module 
//dependency inject $scope
app.controller("PostsCtrl", function($scope, $http) {
	//the function runs when the Add post button is clicked
	$scope.addPost = function() {
		if($scope.postBody){
			$http.post("/api/posts", {
				username: "luduvigo",
				body: $scope.postBody})
			.success(function (post){
				$scope.posts.unshift(post)
				$scope.postBody = null
			})
		}
	}
	$http.get("/api/posts").success(
		function (posts) {
			$scope.posts = posts	
		})
})	