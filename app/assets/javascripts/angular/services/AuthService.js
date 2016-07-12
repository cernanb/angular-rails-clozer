function AuthService(Auth){
  this.login = function(credentials){
    return Auth.login(credentials);
  }

  this.logout = function(){
    return Auth.logout();
  }
}

app.service('AuthService', AuthService);
