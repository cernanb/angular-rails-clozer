app
  .service('OpportunitiesService', OpportunitiesService);

function OpportunitiesService($http){

  this.getOpportunities = function(){
    return $http.get('http://localhost:3000/api/opportunities');
  }

  this.getOpportunity = function(id){
    var opp =  $http.get('http://localhost:3000/api/opportunities/' + id);
    return opp;
  }

  this.addOpp = function(newOpp){
    return $http.post('http://localhost:3000/api/opportunities', newOpp);
  }

  this.editOpp = function(updatedOpp, id){
    return $http.put('http://localhost:3000/api/opportunities/' + id, updatedOpp);
  }

}
