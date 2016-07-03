function Session(){
  this.create = function(userId){
    this.userId = userId;
    console.log("user logged in")
  };

  this.destroy = function(){
    this.userId = null;
    console.log("user logged out")
  };
}

app.service('Session', Session);
