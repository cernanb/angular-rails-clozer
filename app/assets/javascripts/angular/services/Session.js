function Session(){

  this.create = function(userId){
    this.userId = userId;
    console.log("user logged in")
  };

  this.destroy = function(){
    this.userId = null;
    console.log("user logged out")
  };

  this.getUserId = function(){
    console.log(this.userId)
    return this.userId;
  }
}

app.service('Session', Session);
