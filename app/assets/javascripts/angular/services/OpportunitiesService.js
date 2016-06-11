app.service('OpportunitiesService', OpportunitiesService);

function OpportunitiesService($http){

  this.getAllOpps = function(){
    return $http.get('http://localhost:3000/api/opportunities');
  }

  this.getOpp = function(id){
    var opp =  $http.get('http://localhost:3000/api/opportunities/' + id);
    return opp;
  }

  this.addOpp = function(newOpp){
    return $http.post('http://localhost:3000/api/opportunities', newOpp);
  }

  this.editOpp = function(updatedOpp, id){
    return $http.put('http://localhost:3000/api/opportunities/' + id, updatedOpp);
  }

  this.deleteOpp = function(opp) {
    return $http.delete('http://localhost:3000/api/opportunities/' + opp.id);
  }

}
