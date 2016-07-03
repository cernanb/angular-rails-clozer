function ApplicationController($scope, Auth){
  // var appCtrl = this
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
