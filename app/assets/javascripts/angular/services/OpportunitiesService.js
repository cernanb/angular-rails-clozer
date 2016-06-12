function OpportunitiesService($http){

  this.getAllOpps = function(){
    return $http.get(API_URL + 'opportunities');
  }

  this.getOpp = function(id){
    var opp =  $http.get(API_URL + 'opportunities/' + id);
    return opp;
  }

  this.addOpp = function(newOpp){
    return $http.post(API_URL + 'opportunities', newOpp);
  }

  this.editOpp = function(updatedOpp, id){
    return $http.put(API_URL + 'opportunities/' + id, updatedOpp);
  }

  this.deleteOpp = function(opp) {
    return $http.delete(API_URL + 'opportunities/' + opp.id);
  }

}

app.service('OpportunitiesService', OpportunitiesService);
