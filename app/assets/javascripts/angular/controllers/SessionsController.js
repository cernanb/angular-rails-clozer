app.controller('SessionsController', SessionsController);

function SessionsController(AuthService, Auth, $scope, Session){
  var ctrl = this;

  Auth.currentUser()
  .then(function(user){
    ctrl.user = user;
  });

  ctrl.loggingIn = false;

  ctrl.credentials = {
    email: '',
    password: ''
  }

  ctrl.signupCred = {
    email: '',
    password: '',
    confirm_password: ''
  }

  var config = {
    headers: {
      'X-HTTP-Method-Override': 'POST'
    }
  }

  ctrl.login = function(credentials){
    AuthService.login(credentials)
    .then(function(user){
      Session.create(user.id);
      $scope.setCurrentUser(user);
      ctrl.credentials = {};
      ctrl.loggingIn = false;
      return user
    });
  }

  ctrl.signup = function(signupCred){
    console.log(signupCred);
  }

  ctrl.renderLoginForm = function() {
    ctrl.loggingIn = true;
  }

  ctrl.logout = function(){
    AuthService.logout();
    $scope.setCurrentUser(null);
  }

}
