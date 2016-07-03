function AuthService(Auth, Session){
  var auth = this;

  auth.login = function(credentials){
    return Auth.login(credentials)
    .then(function(response){
      Session.create(response.id);
      console.log(response)
      return response;
    });
  }

  auth.logout = function(){
    Auth.logout()
    .then(function(response){
      Session.destroy();
    });
  }
}

app.service('AuthService', AuthService);
