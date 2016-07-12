function OpportunitiesService($http, Auth, Session){

  function extract(response){
    return response.data;
  }

  this.getAllUserOpps = function(){
    console.log(Session.getUserId())
    return $http.get(API_URL + 'users/' + Session.getUserId() + '/opportunities').then(extract);
  }

  this.getOpp = function(id){
    console.log(id)
    return $http.get(API_URL + 'opportunities/' + id).then(extract);
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
