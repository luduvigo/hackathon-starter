angular.module('app', [])

//Create local app module
var app = angular.module("app", [])

app.service("PostsSvc", function($http){
	this.fetch = function() {
		return $http.get("/api/posts")
	}
	this.create = function(post){
		return $http.post("/api/posts", post)	
	}
})

//Create the PostCtrl module 
//dependency inject $scope
app.controller("PostsCtrl", function($scope, PostsSvc) {
	//the function runs when the Add post button is clicked
	$scope.addPost = function() {
		if($scope.postBody){
			PostsSvc.create({
				username: "luduvigo",
				body: $scope.postBody})
			.success(function (post){
				$scope.posts.unshift(post)
				$scope.postBody = null
			})
		}
	}
	PostsSvc.fetch().success(
		function (posts) {
			$scope.posts = posts	
		})
})	
angular.module('app')
    .controller('PostsCtrl', function ($scope, PostsSvc) {
        $scope.addPost = function () {
            if($scope.postBody){
                PostsSvc.create({
                    username : 'gulp',
                    body : $scope.postBody
                }).success(function (post) {
                    $scope.posts.unshift(post)
                    $scope.postBody = null         
                })
            }
        }
        PostsSvc.fetch().success(function (posts) {
            $scope.posts = posts
        })         
    })

angular.module('app')
    .service('PostsSvc', function ($http){
        this.fetch = function () {
            return $http.get('/api/posts')
        }       
        this.create = function (post) {
            return $http.post('/api/posts', post)
        }
    })
