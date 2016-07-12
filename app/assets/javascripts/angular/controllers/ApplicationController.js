function ApplicationController($scope, Auth){
  $scope.signedIn = Auth.isAuthenticated();

  Auth.currentUser()
  .then(function(user){
    $scope.user = user;
  })

  $scope.setCurrentUser = function(user){
    $scope.user = user;
  }
}

app.controller('ApplicationController', ApplicationController);
