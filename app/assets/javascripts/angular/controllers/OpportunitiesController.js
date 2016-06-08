app.controller('OpportunitiesController', OpportunitiesController);

function OpportunitiesController(OpportunitiesService, $http){
  var ctrl = this;

  OpportunitiesService.getOpportunities()
  .then(function(response){
    ctrl.opps = response.data.opportunities;
  });

  ctrl.deleteOpp = function(opp){
    console.log(opp.id);
    $http.delete('http://localhost:3000/api/opportunities/' + opp.id)
    .then(function(resp){
      console.log(resp);
    });
  }
}
