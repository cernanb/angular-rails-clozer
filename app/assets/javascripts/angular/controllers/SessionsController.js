app.controller('SessionsController', SessionsController);

function SessionsController(AuthService, $scope){
  var ctrl = this;

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
    AuthService.login(credentials).
    then(function(user){
      $scope.setCurrentUser(user);
      ctrl.credentials = {};
      ctrl.loggingIn = false;
    });
  }

  ctrl.signup = function(signupCred){
    console.log(signupCred);
  }

  ctrl.renderLoginForm = function() {
    ctrl.loggingIn = true;
    console.log(ctrl.loggingIn)
  }

  ctrl.logout = function(){
    AuthService.logout();
    $scope.setCurrentUser(null);
  }

}
