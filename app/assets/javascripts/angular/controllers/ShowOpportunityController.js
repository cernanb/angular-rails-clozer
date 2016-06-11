function ShowOpportunityController(OpportunitiesService, $stateParams){
  var ctrl = this;

  ctrl.getOpp = function(id){
    OpportunitiesService.getOpp(id)
    .then(function(response){
      ctrl.opp = response.data.opportunity;
    }, function(error){
        alert('Unable to get opportunity: ' + error.statusText);
    })
  }

  ctrl.getOpp($stateParams.id);
}

app.controller('ShowOpportunityController', ShowOpportunityController);
